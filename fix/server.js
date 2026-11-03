require("dotenv").config();
const express=require("express"),bcrypt=require("bcryptjs"),jwt=require("jsonwebtoken"),Database=require("better-sqlite3"),path=require("path");
const app=express(),db=new Database(process.env.DB_FILE||"fixchat.sqlite"),PORT=process.env.PORT||3000;
if(!process.env.JWT_SECRET)throw new Error("Set JWT_SECRET in .env");
app.use(express.json({limit:"20kb"}));app.use(express.static(path.join(__dirname,"public")));
db.exec(`
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY,username TEXT UNIQUE NOT NULL,password_hash TEXT NOT NULL,role TEXT NOT NULL DEFAULT 'user',created_at TEXT NOT NULL);

CREATE TABLE IF NOT EXISTS chats(id INTEGER PRIMARY KEY,user_a INTEGER NOT NULL,user_b INTEGER NOT NULL,created_at TEXT NOT NULL,UNIQUE(user_a,user_b));
CREATE TABLE IF NOT EXISTS messages(id INTEGER PRIMARY KEY,chat_id INTEGER NOT NULL,sender_id INTEGER NOT NULL,text TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS wallets(user_id INTEGER PRIMARY KEY,amethysts INTEGER NOT NULL DEFAULT 0);
CREATE TABLE IF NOT EXISTS login_events(id INTEGER PRIMARY KEY,user_id INTEGER NOT NULL,event_type TEXT NOT NULL,created_at TEXT NOT NULL);
`);
// Backward-compatible profile fields for existing FIX databases.
const userCols=db.prepare("PRAGMA table_info(users)").all().map(c=>c.name);
if(!userCols.includes("display_name"))db.exec("ALTER TABLE users ADD COLUMN display_name TEXT NOT NULL DEFAULT ''");
if(!userCols.includes("bio"))db.exec("ALTER TABLE users ADD COLUMN bio TEXT NOT NULL DEFAULT ''");
const usernameOk=s=>/^[A-Za-zА-Яа-яЁё0-9_]{3,24}$/.test(s),iso=()=>new Date().toISOString();
const publicUser=u=>({id:u.id,username:u.username,displayName:u.display_name||u.username,bio:u.bio||'',role:u.role});
const auth=(req,res,next)=>{try{req.user=jwt.verify((req.headers.authorization||"").replace(/^Bearer\s+/,""),process.env.JWT_SECRET);next()}catch{return res.status(401).json({error:"Войдите в аккаунт"})}};
const logLogin=(userId,eventType)=>db.prepare("INSERT INTO login_events(user_id,event_type,created_at) VALUES(?,?,?)").run(userId,eventType,iso());
function seedAdmin(){
 const username=(process.env.ADMIN_USERNAME||"ceo").trim();
 const password=process.env.ADMIN_PASSWORD;
 if(!password){console.warn("ADMIN_PASSWORD is not set; ceo admin account is not created yet.");return}
 if(!usernameOk(username))throw new Error("ADMIN_USERNAME must be 1-7 letters");
 const existing=db.prepare("SELECT * FROM users WHERE username=? COLLATE NOCASE").get(username);
 if(existing){db.prepare("UPDATE users SET role='admin' WHERE id=?").run(existing.id);return}
 const hash=bcrypt.hashSync(password,12);
 const info=db.prepare("INSERT INTO users(username,password_hash,role,created_at) VALUES(?,?,?,?)").run(username,hash,"admin",iso());
 db.prepare("INSERT INTO wallets(user_id,amethysts) VALUES(?,0)").run(info.lastInsertRowid);
}
seedAdmin();

// Anonymous guest session: no registration form or password required.
app.post("/api/guest",(req,res)=>{try{
 let username;
 for(let i=0;i<20;i++){
   const suffix=Math.random().toString(36).slice(2,4).replace(/[^a-z]/g,"x").slice(0,2).padEnd(2,"x");
   username="guest"+suffix;
   if(!db.prepare("SELECT id FROM users WHERE username=? COLLATE NOCASE").get(username))break;
 }
 if(db.prepare("SELECT id FROM users WHERE username=? COLLATE NOCASE").get(username)){
   return res.status(503).json({error:"Не удалось создать гостевой профиль. Попробуйте ещё раз."});
 }
 const randomPassword=require("crypto").randomBytes(32).toString("hex");
 const hash=bcrypt.hashSync(randomPassword,10);
 const info=db.prepare("INSERT INTO users(username,password_hash,role,created_at) VALUES(?,?,?,?)").run(username,hash,"user",iso());
 db.prepare("INSERT INTO wallets(user_id,amethysts) VALUES(?,0)").run(info.lastInsertRowid);
 logLogin(info.lastInsertRowid,"Создан гостевой профиль");
 const u=db.prepare("SELECT * FROM users WHERE id=?").get(info.lastInsertRowid);
 res.json({token:jwt.sign({id:u.id},process.env.JWT_SECRET,{expiresIn:"30d"}),user:publicUser(u)});
 }catch(e){console.error(e);res.status(500).json({error:"Не удалось создать гостевой профиль"})}});

app.post("/api/auth/register",async(req,res)=>{try{
 const username=String(req.body.username||"").trim().replace(/^@/,"");
 const displayName=String(req.body.displayName||"").trim();
 if(!usernameOk(username))return res.status(400).json({error:"Username: 3–24 символа, латиница, цифры и _"});
 if(displayName.length<2||displayName.length>32)return res.status(400).json({error:"Никнейм должен быть от 2 до 32 символов"});
 if(username.toLowerCase()===(process.env.ADMIN_USERNAME||"ceo").toLowerCase())return res.status(409).json({error:"Этот username зарезервирован"});
 // Passwordless signup is device-session based: a random secret is never shown or reused.
 const hash=await bcrypt.hash(require("crypto").randomBytes(48).toString("hex"),12);
 const info=db.prepare("INSERT INTO users(username,password_hash,display_name,role,created_at) VALUES(?,?,?,?,?)").run(username,hash,displayName,"user",iso());
 db.prepare("INSERT INTO wallets(user_id,amethysts) VALUES(?,0)").run(info.lastInsertRowid);
 logLogin(info.lastInsertRowid,"Аккаунт зарегистрирован");
 const u=db.prepare("SELECT * FROM users WHERE id=?").get(info.lastInsertRowid);
 res.json({token:jwt.sign({id:u.id},process.env.JWT_SECRET,{expiresIn:"30d"}),user:publicUser(u)});
 }catch(e){if(String(e).includes("UNIQUE"))return res.status(409).json({error:"Такой username уже занят"});console.error(e);res.status(500).json({error:"Не удалось создать аккаунт"})}});
app.post("/api/auth/login",async(req,res)=>{try{
 const username=String(req.body.username||"").trim(),password=String(req.body.password||"");
 const u=db.prepare("SELECT * FROM users WHERE username=? COLLATE NOCASE").get(username);
 if(!u||!(await bcrypt.compare(password,u.password_hash)))return res.status(401).json({error:"Неверный username или пароль"});
 logLogin(u.id,"Вход в аккаунт");
 res.json({token:jwt.sign({id:u.id},process.env.JWT_SECRET,{expiresIn:"30d"}),user:publicUser(u)});
 }catch(e){console.error(e);res.status(500).json({error:"Ошибка входа"})}});
app.get("/api/me",auth,(req,res)=>{const u=db.prepare("SELECT * FROM users WHERE id=?").get(req.user.id);if(!u)return res.status(404).json({error:"Пользователь не найден"});res.json(publicUser(u))});
app.get("/api/users/:username",auth,(req,res)=>{const u=db.prepare("SELECT id,username FROM users WHERE username=? COLLATE NOCASE").get(req.params.username);if(!u)return res.status(404).json({error:"Пользователь не найден"});res.json({user:{id:u.id,username:u.username}})});
const getChat=(a,b)=>db.prepare("SELECT * FROM chats WHERE user_a=? AND user_b=?").get(Math.min(a,b),Math.max(a,b));
app.post("/api/chats",auth,(req,res)=>{const other=Number(req.body.userId);if(!other||other===req.user.id)return res.status(400).json({error:"Некорректный пользователь"});if(!db.prepare("SELECT id FROM users WHERE id=?").get(other))return res.status(404).json({error:"Пользователь не найден"});db.prepare("INSERT OR IGNORE INTO chats(user_a,user_b,created_at) VALUES(?,?,?)").run(Math.min(other,req.user.id),Math.max(other,req.user.id),iso());res.json({ok:true})});
app.get("/api/chats",auth,(req,res)=>{const rows=db.prepare(`SELECT c.id,u.id other_id,u.username,(SELECT text FROM messages WHERE chat_id=c.id ORDER BY id DESC LIMIT 1) last_message FROM chats c JOIN users u ON u.id=CASE WHEN c.user_a=? THEN c.user_b ELSE c.user_a END WHERE c.user_a=? OR c.user_b=? ORDER BY c.id DESC`).all(req.user.id,req.user.id,req.user.id);res.json({chats:rows.map(r=>({id:r.other_id,username:r.username,lastMessage:r.last_message||""}))})});
app.get("/api/chats/:otherId/messages",auth,(req,res)=>{const c=getChat(req.user.id,Number(req.params.otherId));if(!c)return res.json({messages:[]});res.json({messages:db.prepare("SELECT id,sender_id senderId,text,created_at createdAt FROM messages WHERE chat_id=? ORDER BY id ASC LIMIT 300").all(c.id)})});
app.post("/api/chats/:otherId/messages",auth,(req,res)=>{const text=String(req.body.text||"").trim(),c=getChat(req.user.id,Number(req.params.otherId));if(!c)return res.status(404).json({error:"Чат не найден"});if(!text||text.length>2000)return res.status(400).json({error:"Сообщение должно быть от 1 до 2000 символов"});db.prepare("INSERT INTO messages(chat_id,sender_id,text,created_at) VALUES(?,?,?,?)").run(c.id,req.user.id,text,iso());res.json({ok:true})});
app.get("/api/wallet",auth,(req,res)=>{const w=db.prepare("SELECT amethysts FROM wallets WHERE user_id=?").get(req.user.id);res.json({amethysts:w?.amethysts||0,ton:{connected:true,demo:true,balance:"0.00"}})});
app.get("/api/login-events",auth,(req,res)=>{const events=db.prepare("SELECT id,event_type eventType,created_at createdAt FROM login_events WHERE user_id=? ORDER BY id DESC LIMIT 50").all(req.user.id);res.json({events})});
app.put("/api/profile",auth,(req,res)=>{const displayName=String(req.body.displayName||"").trim(),bio=String(req.body.bio||"").trim();if(displayName.length<2||displayName.length>32||bio.length>160)return res.status(400).json({error:"Проверьте никнейм (2–32) и описание (до 160)"});db.prepare("UPDATE users SET display_name=?,bio=? WHERE id=?").run(displayName,bio,req.user.id);const u=db.prepare("SELECT * FROM users WHERE id=?").get(req.user.id);res.json(publicUser(u))});
const adminOnly=(req,res,next)=>{const u=db.prepare("SELECT role FROM users WHERE id=?").get(req.user.id);if(!u||u.role!=="admin")return res.status(403).json({error:"Доступ только для администратора"});next()};
app.get("/api/admin/overview",auth,adminOnly,(req,res)=>{res.json({users:db.prepare("SELECT COUNT(*) n FROM users").get().n,chats:db.prepare("SELECT COUNT(*) n FROM chats").get().n,messages:db.prepare("SELECT COUNT(*) n FROM messages").get().n,latest:db.prepare("SELECT username,display_name,created_at FROM users ORDER BY id DESC LIMIT 12").all()})});
app.listen(PORT,()=>console.log(`FIX running at http://localhost:${PORT}`));
