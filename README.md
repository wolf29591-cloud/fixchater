<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>FIX</title>
<style>
:root{--bg:#071426;--panel:#0c1d34;--panel2:#102540;--line:#1b3554;--text:#e8f1ff;--muted:#8fa6c3;--blue:#397fe8;--blue2:#245bb4;--purple:#9b7bff;--aqua:#60c8ed}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:15px/1.45 system-ui,-apple-system,Segoe UI,sans-serif}
button,input{font:inherit}button{cursor:pointer}
.shell{height:100vh;max-width:1500px;margin:auto;background:var(--bg);display:grid;grid-template-columns:340px minmax(0,1fr) 300px}
.sidebar,.walletbar{background:var(--panel);border-right:1px solid var(--line);display:flex;flex-direction:column;min-width:0}.walletbar{border-right:0;border-left:1px solid var(--line);padding:18px}
.sidehead{height:64px;display:flex;align-items:center;padding:0 18px;gap:12px;border-bottom:1px solid var(--line)}
.brand{font-size:22px;font-weight:850;letter-spacing:1px;color:#80b5ff;margin-right:auto}
.round{border:0;background:transparent;color:var(--muted);font-size:21px;width:36px;height:36px;border-radius:50%}.round:hover{background:#183252;color:white}
.searchwrap{padding:12px}.search{width:100%;height:40px;border:1px solid var(--line);border-radius:10px;background:#09182b;padding:0 13px;color:var(--text);outline:none}
.chatlist{overflow:auto;flex:1}.empty-list{padding:28px 22px;text-align:center;color:var(--muted);font-size:13px}
.chatitem{padding:12px 15px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #142a45;cursor:pointer}.chatitem:hover{background:#102743}
.avatar{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#2d68ad,#7259b9);color:white;display:grid;place-items:center;font-weight:750;font-size:18px;flex-shrink:0}
.chatinfo{min-width:0;flex:1}.chatinfo strong{font-size:14px}.chatinfo p{margin:3px 0 0;color:var(--muted);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.profilefoot{padding:12px 15px;border-top:1px solid var(--line);display:flex;align-items:center;gap:10px}.profilefoot .avatar{width:38px;height:38px;font-size:14px}
.main{display:flex;flex-direction:column;min-width:0;background:radial-gradient(ellipse at 50% 0%,#112b4a 0%,#09182a 65%)}
.topbar{height:64px;background:#0b1b30;border-bottom:1px solid var(--line);display:flex;align-items:center;padding:0 20px;gap:12px}
.topbar .avatar{width:40px;height:40px}.topname{font-weight:700}.topsub{font-size:12px;color:var(--muted)}.topactions{margin-left:auto}
.welcome{margin:auto;text-align:center;background:#0e223b;border:1px solid var(--line);padding:26px 30px;border-radius:16px;max-width:420px;box-shadow:0 12px 40px #0003}
.welcome .bubble{font-size:36px;color:#82b7ff}.welcome h2{font-size:20px;margin:8px 0}.welcome p{color:var(--muted);font-size:13px;margin:0}
.messages{flex:1;overflow:auto;padding:20px 7%;display:flex;flex-direction:column;gap:9px}
.message{max-width:min(620px,80%);background:#132b47;padding:9px 12px;border-radius:12px 12px 12px 3px;overflow-wrap:anywhere;align-self:flex-start;border:1px solid #1b3b60}
.message.mine{background:#173b67;align-self:flex-end;border-radius:12px 12px 3px 12px}.message small{display:block;text-align:right;color:#a9c1df;font-size:10px;margin-top:3px}
.composer{background:#0b1b30;padding:12px 18px;display:flex;gap:10px;align-items:center;border-top:1px solid var(--line)}
.composer input{flex:1;border:1px solid var(--line);background:#07172a;border-radius:22px;padding:12px 18px;color:white;outline:none;min-width:0}
.send,.primary{border:0;background:var(--blue);color:white;border-radius:10px;padding:11px 17px;font-weight:700}.send{border-radius:50%;width:42px;height:42px;padding:0;font-size:18px}
.walletbar h3{margin:8px 0 14px;font-size:15px}.wallet-card{background:linear-gradient(135deg,#122d50,#101d3d);border:1px solid #25466c;border-radius:14px;padding:15px;margin-bottom:12px}
.wallet-card .label{color:#a9bdd6;font-size:12px}.wallet-card .amount{font-size:24px;font-weight:800;margin:5px 0}.wallet-card p{font-size:11px;color:var(--muted);margin:0}
.coin{display:flex;align-items:center;gap:10px}.coinicon{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-weight:900;background:#283f70;color:#d6c9ff}
.wallet-note{border:1px dashed #345071;border-radius:12px;padding:12px;color:var(--muted);font-size:12px;margin-top:5px}
.hidden{display:none!important}.admin-tag{font-size:10px;background:#42366c;color:#d8c9ff;border-radius:5px;padding:2px 5px;margin-left:5px}
@media(max-width:1050px){.shell{grid-template-columns:300px minmax(0,1fr)}.walletbar{display:none}}
@media(max-width:700px){.shell{grid-template-columns:1fr}.sidebar{display:flex}.main{display:none}.shell.chat-open .sidebar{display:none}.shell.chat-open .main{display:flex}.messages{padding:16px 4%}.auth{padding:26px 22px}}

/* FIX — midnight Liquid Glass skin */
:root{
 --bg:#05040a;--panel:rgba(17,13,28,.78);--panel2:rgba(27,18,43,.72);
 --line:rgba(190,157,255,.13);--text:#f5f1ff;--muted:#9c93ad;
 --blue:#8b5cf6;--blue2:#6336c8;--purple:#b78cff;--aqua:#78d9ff;
}
html{background:#05040a}
body{
 background:
  radial-gradient(ellipse at 50% -15%,rgba(101,38,190,.30),transparent 48%),
  radial-gradient(ellipse at 100% 100%,rgba(42,25,105,.24),transparent 42%),
  #05040a;
 color:var(--text);overflow:hidden
}
body:before,body:after{content:"";position:fixed;z-index:0;pointer-events:none;border-radius:50%;filter:blur(85px);opacity:.24;animation:ambientFloat 16s ease-in-out infinite alternate}
body:before{width:380px;height:260px;left:18%;top:-150px;background:#762bcb}
body:after{width:320px;height:280px;right:-130px;bottom:-120px;background:#2638a9;animation-delay:-7s}
@keyframes ambientFloat{from{transform:translate3d(-15px,-8px,0) scale(.92)}to{transform:translate3d(25px,22px,0) scale(1.12)}}
.shell{
 position:relative;z-index:1;height:100dvh;max-width:1680px;
 background:rgba(8,6,14,.45);grid-template-columns:320px minmax(0,1fr) 286px;
 gap:1px;overflow:hidden
}
.sidebar,.walletbar,.main{
 background:rgba(13,10,21,.72);backdrop-filter:blur(28px) saturate(145%);
 -webkit-backdrop-filter:blur(28px) saturate(145%)
}
.sidebar{border-right:1px solid var(--line)}
.walletbar{border-left:1px solid var(--line);padding:20px 16px;overflow:auto}
.sidehead,.topbar,.composer{
 background:rgba(20,15,31,.68);border-color:var(--line);
 backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)
}
.sidehead{height:70px;padding:0 17px}
.brand{font-size:24px;letter-spacing:2px;background:linear-gradient(110deg,#fff 5%,#c5a5ff 48%,#8b5cf6 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.round{color:#b9aecb;transition:background .22s,transform .22s,color .22s,box-shadow .22s}
.round:hover{background:rgba(160,111,255,.16);color:#fff;transform:translateY(-1px);box-shadow:0 0 22px #8b5cf633}
.search{background:rgba(255,255,255,.045);border:1px solid rgba(207,180,255,.12);border-radius:13px;transition:border-color .2s,box-shadow .2s}
.search:focus,.composer input:focus{border-color:#9c6dff;box-shadow:0 0 0 3px #8b5cf622}
.chatitem{border:1px solid transparent;border-radius:14px;margin:3px 9px;padding:10px 11px;transition:background .2s,border-color .2s,transform .2s}
.chatitem:hover{background:rgba(157,108,255,.09);border-color:rgba(185,145,255,.12);transform:translateX(2px)}
.avatar{background:linear-gradient(145deg,#a16bff,#49228c 72%,#17102b);box-shadow:inset 0 1px 0 #ffffff45,0 5px 18px #6b35b533}
.profilefoot{border-color:var(--line);background:rgba(255,255,255,.025)}
.main{position:relative;background:radial-gradient(ellipse at 50% 0%,rgba(95,44,153,.18),transparent 48%),rgba(10,7,17,.65)}
.topbar{height:70px;padding:0 22px;border-bottom:1px solid var(--line)}
.topbar .avatar{border:1px solid #c19aff66}
.topname{letter-spacing:.1px}
.welcome{
 background:linear-gradient(145deg,rgba(47,29,71,.70),rgba(19,14,30,.72));
 border:1px solid rgba(201,169,255,.18);border-radius:22px;
 box-shadow:0 24px 80px #0008,inset 0 1px 0 #ffffff13;
 backdrop-filter:blur(26px);-webkit-backdrop-filter:blur(26px);
 animation:softAppear .55s cubic-bezier(.2,.8,.2,1) both
}
.welcome .bubble{color:#c5a4ff;text-shadow:0 0 26px #a16bff88}
.messages{padding:24px 7%;scroll-behavior:smooth}
.message{
 background:linear-gradient(145deg,rgba(47,34,66,.92),rgba(29,21,42,.92));
 border:1px solid rgba(205,175,255,.12);border-radius:17px 17px 17px 5px;
 box-shadow:0 8px 25px #0003;backdrop-filter:blur(14px);
 animation:messageIn .24s cubic-bezier(.2,.8,.2,1) both
}
.message.mine{
 background:linear-gradient(135deg,rgba(117,69,207,.96),rgba(76,49,151,.94));
 border-color:rgba(216,190,255,.22);border-radius:17px 17px 5px 17px;
 box-shadow:0 8px 28px #6938c633
}
.message small{color:#d0c0eb}
.composer{padding:14px 18px;border-top:1px solid var(--line);gap:12px}
.composer input{
 background:rgba(255,255,255,.055);border:1px solid rgba(211,187,255,.17);
 border-radius:17px;padding:14px 18px;transition:border-color .2s,box-shadow .2s
}
.send,.primary{
 background:linear-gradient(135deg,#a779ff,#7041d2);border:1px solid #d7c0ff44;
 box-shadow:0 7px 24px #7945d455;transition:transform .2s,filter .2s,box-shadow .2s
}
.send:hover,.primary:hover{transform:translateY(-2px);filter:brightness(1.12);box-shadow:0 10px 30px #7945d477}
.send:active,.primary:active{transform:scale(.95)}
.walletbar h3{font-size:16px;letter-spacing:.2px;margin:5px 0 18px}
.wallet-card{
 position:relative;overflow:hidden;
 background:linear-gradient(145deg,rgba(52,34,78,.72),rgba(20,16,31,.76));
 border:1px solid rgba(205,174,255,.18);border-radius:18px;padding:16px;
 box-shadow:0 12px 32px #0004,inset 0 1px 0 #ffffff12;
 backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);
 transition:transform .25s,border-color .25s,box-shadow .25s
}
.wallet-card:before{content:"";position:absolute;width:130px;height:100px;right:-55px;top:-55px;background:#a16bff33;filter:blur(25px);border-radius:50%}
.wallet-card:hover{transform:translateY(-3px);border-color:#b58aff55;box-shadow:0 17px 38px #0006,0 0 22px #8b5cf61c}
.coinicon{background:linear-gradient(145deg,#9b70ef,#493078);box-shadow:inset 0 1px 0 #ffffff55}
.wallet-note{background:rgba(255,255,255,.025);border:1px solid rgba(205,174,255,.13);border-radius:15px;line-height:1.55}
.empty-list{padding:30px 20px}
.hidden{display:none!important}
@keyframes messageIn{from{opacity:0;transform:translateY(9px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes softAppear{from{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
@media(max-width:1050px){.shell{grid-template-columns:290px minmax(0,1fr)}.walletbar{display:none}}
@media(max-width:700px){
 body{overflow:hidden}
 .shell{grid-template-columns:1fr;height:100dvh}
 .sidebar{background:rgba(12,9,19,.88)}
 .main{background:radial-gradient(ellipse at 50% 0%,rgba(95,44,153,.2),transparent 55%),rgba(9,7,15,.9)}
 .topbar{padding:0 14px}
 .messages{padding:16px 4%}
 .composer{padding:10px 12px}
 .composer input{padding:12px 15px}
 .welcome{margin: auto 18px;padding:24px 20px}
}
@media(prefers-reduced-motion:reduce){
 *,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}
}


/* FIX v7 — rounded social-chat layout + switchable themes */
:root{
 --bg:#17181c;--surface:#202127;--surface2:#292a31;--surface3:#30313a;
 --line:rgba(255,255,255,.075);--text:#f3f4f7;--muted:#a3a5ae;
 --accent:#8b83ff;--accent-strong:#7168e8;--accent-soft:rgba(139,131,255,.15);
 --bubble:#2b2d35;--mine:#4842a0;--shadow:0 16px 44px rgba(0,0,0,.22);
 --glass:rgba(35,36,43,.88);
}
html,body{background:var(--bg);color:var(--text)}
body{
 background:
  radial-gradient(ellipse at 5% 0%,rgba(120,115,160,.10),transparent 38%),
  radial-gradient(ellipse at 100% 100%,rgba(91,82,150,.10),transparent 40%),
  var(--bg);
 transition:background .28s,color .28s;
}
.shell{
 max-width:1600px;height:calc(100dvh - 24px);margin:12px auto;
 padding:8px;gap:9px;grid-template-columns:300px minmax(0,1fr) 270px;
 background:transparent;border-radius:30px;overflow:hidden;
}
.sidebar,.main,.walletbar{
 min-height:0;border:1px solid var(--line);border-radius:25px;
 background:var(--glass);box-shadow:var(--shadow);
 backdrop-filter:blur(22px) saturate(130%);-webkit-backdrop-filter:blur(22px) saturate(130%);
 transition:background .28s,border-color .28s,box-shadow .28s;
}
.sidebar{border-right:1px solid var(--line);overflow:hidden}
.walletbar{border-left:1px solid var(--line);padding:19px 15px;margin-left:0}
.main{overflow:hidden;background:var(--surface);position:relative}
.sidehead,.topbar,.composer{
 background:transparent;border-color:var(--line);
}
.sidehead{height:68px;padding:0 15px}
.brand{font-size:23px;letter-spacing:1.5px;color:var(--text);background:none}
.round{
 display:inline-grid;place-items:center;width:38px;height:38px;
 border:1px solid transparent;border-radius:14px;background:var(--surface2);
 color:var(--muted);font-size:18px;transition:all .2s ease;
}
.round:hover{background:var(--accent-soft);color:var(--accent);border-color:color-mix(in srgb,var(--accent) 25%,transparent);transform:translateY(-1px)}
.searchwrap{padding:9px 13px 13px}
.search{
 height:43px;background:var(--surface2);border:1px solid var(--line);
 border-radius:15px;color:var(--text);padding:0 15px;
}
.search:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.chatlist{padding:2px 7px 10px}
.chatitem{
 margin:4px 0;padding:11px 10px;border:1px solid transparent;
 border-radius:17px;background:transparent;gap:11px;
 transition:background .2s,border-color .2s,transform .2s;
}
.chatitem:hover{background:var(--surface2);border-color:var(--line);transform:translateX(2px)}
.chatitem:active{transform:scale(.985)}
.avatar{background:linear-gradient(145deg,var(--accent),var(--accent-strong));box-shadow:0 5px 16px color-mix(in srgb,var(--accent) 25%,transparent)}
.profilefoot{
 margin:8px;padding:11px 12px;border:1px solid var(--line);
 border-radius:18px;background:var(--surface2)
}
.main{background:var(--surface)}
.topbar{
 height:70px;padding:0 20px;border-bottom:1px solid var(--line);
 background:var(--surface);flex-shrink:0
}
.topbar .avatar{width:42px;height:42px}
.topname{font-size:15px;font-weight:750}
.topsub{color:var(--muted)}
.welcome{
 background:var(--surface2);border:1px solid var(--line);
 border-radius:26px;padding:32px;box-shadow:var(--shadow);
 max-width:440px;animation:cardIn .45s ease both
}
.welcome .bubble{color:var(--accent)}
.welcome h2{letter-spacing:-.3px}
.messages{padding:22px clamp(16px,5vw,70px);gap:11px}
.message{
 background:var(--bubble);border:1px solid var(--line);
 border-radius:20px 20px 20px 7px;padding:11px 15px;
 box-shadow:0 5px 18px rgba(0,0,0,.08);
 animation:messagePop .22s ease both;
}
.message.mine{
 background:linear-gradient(140deg,var(--mine),color-mix(in srgb,var(--mine) 82%,var(--accent)));
 border-radius:20px 20px 7px 20px;border-color:rgba(255,255,255,.10)
}
.message small{color:var(--muted)}
.message.mine small{color:rgba(255,255,255,.72)}
.composer{
 background:var(--surface);padding:13px 18px;border-top:1px solid var(--line);
 flex-shrink:0
}
.composer input{
 background:var(--surface2);border:1px solid var(--line);
 color:var(--text);border-radius:18px;padding:13px 17px;
}
.composer input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.send,.primary{
 background:var(--accent-strong);border-radius:15px;
 box-shadow:0 6px 18px color-mix(in srgb,var(--accent) 25%,transparent);
 transition:transform .18s,filter .18s,box-shadow .18s
}
.send:hover,.primary:hover{filter:brightness(1.12);transform:translateY(-2px)}
.send:active,.primary:active{transform:scale(.94)}
.walletbar h3{font-size:16px;margin:5px 0 16px}
.wallet-card{
 background:var(--surface2);border:1px solid var(--line);
 border-radius:21px;padding:16px;margin-bottom:12px;
 box-shadow:0 8px 25px rgba(0,0,0,.08);transition:transform .2s,border-color .2s;
}
.wallet-card:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--accent) 35%,var(--line))}
.wallet-card .label,.wallet-card p{color:var(--muted)}
.coinicon{background:var(--accent-soft);color:var(--accent)}
.wallet-note{border:1px solid var(--line);background:var(--surface2);border-radius:17px;color:var(--muted)}
.empty-list{line-height:1.7}
@keyframes messagePop{from{opacity:0;transform:translateY(7px) scale(.99)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes cardIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

/* Bright, soft white theme */
body[data-theme="light"]{
 --bg:#edf0f5;--surface:#ffffff;--surface2:#f4f5f8;--surface3:#e9ebf1;
 --line:rgba(25,31,45,.09);--text:#20232b;--muted:#737987;
 --accent:#7065dc;--accent-strong:#665bd0;--accent-soft:rgba(112,101,220,.12);
 --bubble:#f0f1f6;--mine:#7065dc;--shadow:0 14px 38px rgba(37,43,61,.08);
 --glass:rgba(255,255,255,.90);
 background:
  radial-gradient(ellipse at 0% 0%,rgba(140,132,230,.10),transparent 38%),
  radial-gradient(ellipse at 100% 100%,rgba(110,165,220,.10),transparent 40%),
  var(--bg);
}
body[data-theme="light"] .brand{color:var(--text)}
body[data-theme="light"] .message.mine{color:white}
body[data-theme="light"] .message.mine small{color:rgba(255,255,255,.78)}
body[data-theme="light"] .avatar{color:white}
body[data-theme="light"] .coinicon{color:var(--accent)}
body[data-theme="light"] .composer input{color:var(--text)}
body[data-theme="light"] .send{color:white}
@media(max-width:1050px){
 .shell{grid-template-columns:285px minmax(0,1fr)}
 .walletbar{display:none}
}
@media(max-width:700px){
 .shell{height:100dvh;margin:0;padding:0;gap:0;border-radius:0;grid-template-columns:1fr}
 .sidebar,.main{border-radius:0;border:0}
 .sidebar{border-right:0}
 .main{border-radius:0}
 .chatitem{margin:3px 2px}
 .topbar{padding:0 14px}
 .messages{padding:16px 13px}
 .composer{padding:11px 12px}
 .welcome{margin:18px;padding:25px 20px}
}
@media(prefers-reduced-motion:reduce){
 *,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
}


/* FIX v8: menu, wallet, markets and news */
.shell{grid-template-columns:340px minmax(0,1fr)!important}
.walletbar{display:none!important}
#featureView{position:fixed;z-index:20;inset:0;background:var(--bg);color:var(--text);display:none;overflow:auto;padding:22px;backdrop-filter:blur(18px)}
#featureView.open{display:block;animation:cardIn .2s ease}
.feature-wrap{max-width:1080px;margin:0 auto}
.feature-head{display:flex;align-items:center;gap:12px;padding:4px 0 20px;border-bottom:1px solid var(--line);margin-bottom:20px}
.feature-head h1{font-size:24px;margin:0;flex:1}
.feature-close,.menu-trigger{border:1px solid var(--line);background:var(--surface2);color:var(--text);border-radius:13px;padding:10px 14px}
.menu-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.menu-tile{display:flex;align-items:center;gap:14px;padding:17px;border:1px solid var(--line);border-radius:18px;background:var(--glass);color:var(--text);text-align:left;cursor:pointer;min-height:82px;box-shadow:var(--shadow)}
.menu-tile:hover,.market-card:hover{transform:translateY(-2px);border-color:var(--accent)}
.menu-icon{width:44px;height:44px;border-radius:14px;display:grid;place-items:center;background:var(--accent-soft);font-size:22px}
.menu-tile strong{display:block;font-size:15px}.menu-tile small{display:block;color:var(--muted);margin-top:3px}
.feature-card{background:var(--glass);border:1px solid var(--line);border-radius:20px;padding:18px;box-shadow:var(--shadow)}
.feature-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.wallet-balance{font-size:30px;font-weight:800;margin:12px 0 4px}
.coin-row{display:flex;align-items:center;gap:12px}
.coin-badge{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;background:var(--accent-soft);font-weight:800;font-size:20px}
.muted{color:var(--muted);font-size:13px}
.market-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.market-card{background:var(--glass);border:1px solid var(--line);border-radius:18px;padding:16px;transition:.18s;min-width:0}
.market-art{height:110px;border-radius:14px;background:linear-gradient(135deg,#262044,#5940a5);display:grid;place-items:center;font-size:42px;margin-bottom:12px}
.pill{display:inline-block;border-radius:999px;padding:4px 9px;background:var(--accent-soft);font-size:11px;color:var(--accent)}
.action-btn{border:0;border-radius:12px;background:var(--accent);color:white;padding:10px 13px;font-weight:700;cursor:pointer;margin-top:10px}
.news-list{max-width:700px;margin:0 auto;display:flex;flex-direction:column;gap:15px;padding:8px 0 30px}
.news-post{background:linear-gradient(120deg,#456dba,#5b8bce);color:white;border-radius:17px;padding:13px 16px;box-shadow:0 10px 25px #0002}
.news-post p{margin:5px 0 0;font-weight:650}
.news-meta{display:flex;gap:10px;align-items:center;font-size:11px;opacity:.85;margin-top:8px}
.news-reactions{display:flex;gap:8px;margin-top:-8px}
.react{border:1px solid var(--line);border-radius:999px;background:var(--glass);padding:5px 10px;color:var(--text);cursor:pointer}
.settings-row{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:15px 0;border-bottom:1px solid var(--line)}
#toast{position:fixed;z-index:50;bottom:25px;left:50%;transform:translateX(-50%);background:#252333;color:white;padding:11px 16px;border-radius:12px;display:none;box-shadow:0 8px 28px #0005}
@media(max-width:750px){#featureView{padding:16px}.menu-grid,.feature-grid{grid-template-columns:1fr}.market-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.feature-head h1{font-size:20px}}
@media(max-width:430px){.market-grid{grid-template-columns:1fr}.market-art{height:90px}}


/* v9: reference-inspired channels and compact side drawer */
.shell{grid-template-columns:420px minmax(0,1fr)!important}
.walletbar{display:none!important}
.sidebar{background:#09090b!important;border-right:1px solid var(--line)}
.channel-heading{padding:13px 20px 7px;font-size:10px;letter-spacing:1.3px;font-weight:800;color:var(--muted)}
.channel-list{display:flex;flex-direction:column}
.channel-item{width:100%;border:0;border-bottom:1px solid var(--line);background:transparent;color:var(--text);display:flex;align-items:center;gap:12px;padding:12px 18px;text-align:left;cursor:pointer}
.channel-item:hover{background:var(--glass)}
.channel-avatar{width:46px;height:46px;flex:0 0 46px;border-radius:50%;display:grid;place-items:center;color:white;font-size:22px;font-weight:800}
.news-avatar{background:linear-gradient(140deg,#14b9ff,#1762e8)}
.login-avatar{background:linear-gradient(140deg,#777b8c,#3c4050)}
.channel-info{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1}
.channel-info strong{font-size:14px}.channel-info small{color:var(--muted);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.verified{display:inline-grid;place-items:center;width:15px;height:15px;border-radius:50%;background:#2588f5;color:white;font-size:10px;margin-left:3px}
.channel-pin{color:var(--muted);font-size:14px}.dialog-heading{padding-top:15px}
#drawerShade{position:fixed;z-index:39;inset:0;background:#0009;opacity:0;pointer-events:none;transition:.2s}
#menuDrawer{position:fixed;z-index:40;inset:0 auto 0 0;width:min(365px,88vw);background:#09090b;color:#f2f2f5;border-right:1px solid #29292f;box-shadow:18px 0 50px #0007;transform:translateX(-105%);transition:transform .24s ease;overflow:auto;padding:20px 15px}
body.drawer-open #drawerShade{opacity:1;pointer-events:auto}
body.drawer-open #menuDrawer{transform:translateX(0)}
.drawer-profile{display:flex;align-items:center;gap:13px;padding:10px 9px 22px;border-bottom:1px solid #25252a;margin-bottom:8px}
.drawer-avatar{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#e5e7eb,#7a7e89);color:#17171b;font-size:23px}
.drawer-profile strong{display:block;font-size:16px}.drawer-profile small{color:#92929b}
.drawer-item{width:100%;display:flex;align-items:center;gap:17px;border:0;background:transparent;color:#dedee4;padding:12px 14px;border-radius:11px;font-size:15px;font-weight:650;text-align:left;cursor:pointer}
.drawer-item:hover{background:#202025}.drawer-emoji{width:24px;text-align:center;font-size:19px}.drawer-count{margin-left:auto;color:#aaa;font-size:12px}
.drawer-sep{height:1px;background:#29292f;margin:9px 0}
#featureView{position:fixed;z-index:25;inset:0;background:#08080a;color:#f5f5f7;display:none;overflow:auto;padding:0;backdrop-filter:blur(18px)}
#featureView.open{display:block}
.feature-wrap{max-width:100%;margin:0 auto}
.feature-head{position:sticky;top:0;z-index:2;background:#0b0b0e;border:1px solid #29292f;border-radius:18px;margin:10px 10px 0;padding:10px 14px}
.feature-head h1{font-size:18px}
.feature-close{background:#25252a;color:white;border:1px solid #333;border-radius:50%;width:40px;height:40px;padding:0;font-size:21px}
.news-wall{min-height:calc(100vh - 75px);padding:18px max(18px,calc((100vw - 1000px)/2));background-color:#09090b;background-image:radial-gradient(#ffffff0b 1px,transparent 1px);background-size:22px 22px}
.news-stream{max-width:720px;display:flex;flex-direction:column;gap:8px}
.news-date{text-align:center;color:#e5e5e7;font-size:12px;font-weight:750;margin:13px 0}
.news-bubble{align-self:flex-start;max-width:min(590px,90%);background:#292a2e;border-radius:16px 16px 16px 4px;padding:10px 13px;color:#f4f4f5;box-shadow:0 4px 18px #0003}
.news-bubble p{margin:3px 0 0;font-size:15px;line-height:1.35}
.news-bubble small{font-size:11px;color:#d0d0d5;font-weight:700}
.news-stats{display:flex;justify-content:flex-end;gap:8px;font-size:10px;color:#b6b6be;margin-top:5px}
.news-reactions{display:flex;gap:7px;margin:0 0 5px}
.news-reactions .react{background:#1c1c20;border:1px solid #38383e;color:white;padding:3px 9px}
.news-channel-top{display:flex;align-items:center;gap:12px;padding:14px 18px;border-bottom:1px solid #26262b;background:#0b0b0e}
.news-channel-top strong{font-size:14px}.news-channel-top small{display:block;color:#aaa;font-size:11px}
.login-event{background:#202126;border:1px solid #303139;border-radius:15px;padding:14px;margin:10px 0;max-width:650px}
.login-event strong{display:block}.login-event small{color:#a4a4ae}
@media(max-width:800px){.shell{grid-template-columns:1fr!important}.sidebar{width:100%}.main{display:none}.shell.chat-open .sidebar{display:none}.shell.chat-open .main{display:flex}.news-wall{padding:14px}.channel-item{padding:10px 14px}}


.premium-hero{max-width:650px;margin:35px auto;text-align:center;background:linear-gradient(145deg,#29203f,#14131c);border:1px solid #57417f;border-radius:24px;padding:30px 22px;box-shadow:0 18px 60px #0006}
.premium-star{font-size:52px}.premium-hero h2{font-size:28px;margin:10px}.premium-hero>p{color:#c4b6dc}.premium-perks{display:grid;gap:12px;text-align:left;margin:24px auto;max-width:390px}.premium-perks div{background:#ffffff0b;border:1px solid #ffffff12;padding:12px;border-radius:12px}

.shop-tabs,.market-tabs{display:flex;gap:6px;justify-content:center;background:#050506;border:1px solid #26262a;border-radius:999px;padding:4px;width:min(530px,100%);margin:18px auto}
.shop-tab,.market-tab{border:0;background:transparent;color:#888;border-radius:999px;padding:10px 28px;font-weight:750;flex:1}
.shop-tab.active,.market-tab.active{background:#242427;color:white}
.market-banner{max-width:1100px;margin:18px auto;background:#151517;border-radius:16px;padding:18px;display:flex;flex-direction:column;gap:4px}
.market-banner span{color:#999;font-size:13px}
.market-toolbar{max-width:1100px;margin:16px auto;display:flex;gap:10px}
.market-toolbar input,.market-toolbar select{background:#171719;border:1px solid #303035;color:white;border-radius:12px;padding:12px;min-width:0}
.market-toolbar input{flex:1}
.gift-grid{max-width:760px;margin:auto;grid-template-columns:repeat(3,minmax(0,1fr))}
.gift-card{text-align:center;padding:10px}
.gift-card .market-art{height:150px;font-size:68px;display:grid;place-items:center}
.gift-card .action-btn{width:100%;margin-top:8px}
@media(max-width:650px){.gift-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.gift-card .market-art{height:115px}.market-toolbar{flex-direction:column}}
/* Reference refresh: clean charcoal Slasher-inspired UI */
:root{--bg:#080809;--surface:#111113;--surface2:#1b1b1e;--surface3:#252529;--line:#29292d;--text:#f5f5f6;--muted:#96969e;--accent:#e94c62;--accent-strong:#d83d55;--accent-soft:#e94c6220;--bubble:#202024;--mine:#4a2630;--glass:#121214;--shadow:0 14px 38px #0008}
html,body{background:#080809;color:#f5f5f6}
body{background:#080809!important}
body:before,body:after{display:none}
.shell{max-width:1600px;height:100dvh;margin:0 auto;padding:0;gap:0;border-radius:0;grid-template-columns:300px minmax(0,1fr)!important;background:#080809}
.sidebar,.main,.walletbar{background:#0d0d0f;border:0;border-radius:0;box-shadow:none;backdrop-filter:none}
.sidebar{border-right:1px solid #242427}
.sidehead,.topbar,.composer{background:#0b0b0d;border-color:#242427}
.brand{color:#fff;background:none;letter-spacing:0}
.round{background:#1c1c1f;color:#ddd;border-radius:50%;width:36px;height:36px}
.round:hover{background:#303034;color:#fff;border-color:transparent}
.search{background:#171719;border-color:#29292d;color:#fff;border-radius:12px}
.chatitem:hover{background:#1a1a1d;border-color:#2c2c30}
.avatar{background:linear-gradient(140deg,#e9576c,#762b3b);box-shadow:none}
.profilefoot{background:#171719;border-color:#2a2a2e}
.main{background:#080809}
.topbar{border-bottom:1px solid #242427}
.welcome{background:#141416;border:1px solid #29292d;box-shadow:none;border-radius:20px}
.welcome .bubble{color:#ef5268;text-shadow:none}
.message{background:#202024;border-color:#303035;box-shadow:none}
.message.mine{background:#572832;border-color:#75404a}
.composer input{background:#19191c;border-color:#303035}
.send,.primary,.action-btn{background:#1c7548;color:#fff;box-shadow:none;border:1px solid #29945f;border-radius:999px}
.send{background:#e94c62;border-color:#e94c62}
#featureView{background:#080809;color:#f5f5f6}
.feature-head{background:#0c0c0e;border-color:#29292d;border-radius:0}
.feature-card,.market-card,.menu-tile,.wallet-card{background:#151517;border-color:#29292d;box-shadow:none;border-radius:17px}
.market-art{background:linear-gradient(145deg,#28202a,#462936);border-radius:14px}
.premium-hero{background:linear-gradient(145deg,#f3b52d,#cf347d 58%,#28202d);border:0;color:white}
.premium-hero>p{color:#f8e6ef}.premium-perks div{background:#171719;border-color:#333}
.drawer-emoji{font-family:"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif;line-height:1}.market-art{font-family:"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif;line-height:1}.feature-close{display:grid;place-items:center;line-height:1;padding:0;font-size:24px}
.auth-gate{position:fixed;z-index:100;inset:0;background:#080809;display:none;place-items:center;padding:20px}
.auth-gate.show{display:grid}
.auth-card{width:min(420px,100%);background:#151517;border:1px solid #303035;border-radius:24px;padding:28px;display:flex;flex-direction:column;gap:10px;box-shadow:0 20px 80px #000b}
.auth-mark{width:52px;height:52px;border-radius:16px;background:#e94c62;display:grid;place-items:center;font-size:28px;font-weight:900}
.auth-card h1{font-size:24px;margin:8px 0 0}.auth-card p,.auth-card small{color:#9999a1;margin:0 0 8px}
.auth-card label{font-size:12px;color:#b4b4bb;margin-top:7px}
.auth-card input{height:46px;background:#09090b;border:1px solid #333339;border-radius:12px;padding:0 13px;color:white;outline:none}
.auth-card input:focus{border-color:#e94c62}
.auth-card .action-btn{height:46px;margin-top:12px}
.text-btn{border:0;background:transparent;color:#aaa;padding:10px}
.admin-stat-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.admin-stat{background:#19191c;border:1px solid #303035;border-radius:16px;padding:18px}
.admin-stat b{display:block;font-size:26px}.admin-stat span{color:#999;font-size:12px}
@media(max-width:800px){.shell{grid-template-columns:1fr!important}.sidebar{width:100%}.main{display:none}.shell.chat-open .sidebar{display:none}.shell.chat-open .main{display:flex}.admin-stat-grid{grid-template-columns:1fr}}
</style></head>
<body>
<div class="shell" id="shell">
<aside class="sidebar">
 <div class="sidehead"><button class="round" id="menuBtn" title="Открыть меню">☰</button><div class="brand">FIX</div><button class="round" id="themeToggle" title="Сменить тему" aria-label="Сменить тему">☼</button><button class="round" id="newChat" title="Новый чат">✎</button></div>
 <div class="searchwrap"><input class="search" id="search" placeholder="Поиск каналов и диалогов"></div>
 <div class="channel-heading">КАНАЛЫ</div>
 <div class="channel-list">
  <button class="channel-item" id="newsChannel"><span class="channel-avatar news-avatar">✦</span><span class="channel-info"><strong>FIX News <span class="verified">✓</span></strong><small>Новости и обновления FIX</small></span><span class="channel-pin">📌</span></button>
  <button class="channel-item" id="loginsChannel"><span class="channel-avatar login-avatar">↪</span><span class="channel-info"><strong>Входы <span class="verified">✓</span></strong><small>История входов в аккаунт</small></span></button>
 </div>
 <div class="channel-heading dialog-heading">ДИАЛОГИ</div>
 <div class="chatlist" id="chatlist"><div class="empty-list">Личных диалогов пока нет.</div></div>
 <div class="profilefoot"><div class="avatar" id="myAvatar">?</div><div class="chatinfo"><strong id="myName">Мой профиль</strong><p id="myUsername">Не выполнен вход</p></div><button class="round" id="profileBtn">⋯</button></div>
</aside>
<main class="main" id="main">
 <div class="topbar"><button class="round" id="backBtn" style="display:none">‹</button><div class="avatar">F</div><div><div class="topname" id="currentTitle">FIX</div><div class="topsub" id="currentSub">Личные сообщения</div></div><div class="topactions"><button class="round" id="findUser" title="Найти пользователя">@</button></div></div>
 <div class="welcome" id="welcome"><div class="bubble">✉</div><h2>Добро пожаловать в FIX</h2><p>Выберите чат или найдите пользователя по username.<br>Никаких фейковых онлайн-счётчиков.</p></div>
 <div class="messages hidden" id="messages"></div>
 <form class="composer hidden" id="sendForm"><input id="messageInput" placeholder="Сообщение..." maxlength="2000" autocomplete="off"><button class="send" aria-label="Отправить">➤</button></form>
</main>
</div>


<section id="authGate" class="auth-gate">
 <form id="registerForm" class="auth-card">
  <div class="auth-mark">F</div><h1>Добро пожаловать в FIX</h1><p>Создай профиль за пару секунд</p>
  <label>Username</label><input name="username" placeholder="например, nova" minlength="3" maxlength="24" required>
  <label>Никнейм</label><input name="displayName" placeholder="Как тебя называть" minlength="2" maxlength="32" required>
  <button class="action-btn" type="submit">Создать аккаунт</button>
  <small>Без пароля: сессия сохраняется на этом устройстве. Не очищай данные браузера, иначе восстановить аккаунт не получится.</small>
  <button type="button" class="text-btn" id="adminLogin">Вход администратора</button>
 </form>
</section>
<div id="drawerShade"></div><aside id="menuDrawer" aria-label="Меню FIX"><div id="drawerContent"></div></aside><div id="featureView" aria-live="polite"><div class="feature-wrap" id="featureContent"></div></div>
<div id="toast"></div>

<script>
const $=s=>document.querySelector(s);let token=localStorage.getItem('fix_token')||'',me=null,activeUser=null;
async function api(path,opts={}){const r=await fetch('/api'+path,{...opts,headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{}),...(opts.headers||{})}});const d=await r.json().catch(()=>({error:'Ошибка сервера'}));if(!r.ok)throw Error(d.error||'Ошибка запроса');return d}
function err(e){alert(e.message||'Ошибка')}
function showAuth(){document.getElementById('authGate').classList.add('show')}
async function startGuest(){showAuth()}
document.getElementById('registerForm').onsubmit=async e=>{e.preventDefault();const f=new FormData(e.currentTarget);try{const d=await api('/auth/register',{method:'POST',body:JSON.stringify({username:f.get('username'),displayName:f.get('displayName')})});token=d.token;localStorage.setItem('fix_token',token);document.getElementById('authGate').classList.remove('show');await loadMe()}catch(e){alert(e.message)}};
document.getElementById('adminLogin').onclick=async()=>{const username=prompt('Username администратора (ceo):');if(!username)return;const password=prompt('Пароль администратора из ADMIN_PASSWORD:');if(!password)return;try{const d=await api('/auth/login',{method:'POST',body:JSON.stringify({username,password})});token=d.token;localStorage.setItem('fix_token',token);document.getElementById('authGate').classList.remove('show');await loadMe()}catch(e){alert(e.message)}};
async function loadMe(){try{me=await api('/me');$('#myName').textContent=me.displayName||me.username;$('#myUsername').textContent='@'+me.username+(me.role==='admin'?' · администратор':'');$('#myAvatar').textContent=me.username[0].toUpperCase();await loadChats()}catch(e){token='';localStorage.removeItem('fix_token');await startGuest()}}
async function loadChats(){try{const d=await api('/chats'),list=$('#chatlist');list.innerHTML='';if(!d.chats.length){list.innerHTML='<div class="empty-list">У вас пока нет чатов.<br>Найдите пользователя по username.</div>';return}d.chats.forEach(c=>{const el=document.createElement('div');el.className='chatitem';const av=document.createElement('div');av.className='avatar';av.textContent=c.username[0].toUpperCase();const info=document.createElement('div');info.className='chatinfo';const n=document.createElement('strong');n.textContent=c.username;const p=document.createElement('p');p.textContent=c.lastMessage||'Начните общение';info.append(n,p);el.append(av,info);el.onclick=()=>openChat(c.id,c.username);list.append(el)})}catch(e){console.error(e)}}
async function openChat(id,username){activeUser={id,username};$('#currentTitle').textContent=username;$('#currentSub').textContent='@'+username;$('#welcome').classList.add('hidden');$('#messages').classList.remove('hidden');$('#sendForm').classList.remove('hidden');$('#shell').classList.add('chat-open');$('#backBtn').style.display='block';await loadMessages()}
async function loadMessages(){if(!activeUser)return;try{const d=await api('/chats/'+activeUser.id+'/messages'),box=$('#messages');box.innerHTML='';d.messages.forEach(m=>{const el=document.createElement('div');el.className='message'+(m.senderId===me.id?' mine':'');const b=document.createElement('div');b.textContent=m.text;const t=document.createElement('small');t.textContent=new Date(m.createdAt).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});el.append(b,t);box.append(el)});box.scrollTop=box.scrollHeight}catch(e){err(e)}}
$('#sendForm').onsubmit=async e=>{e.preventDefault();const text=$('#messageInput').value.trim();if(!text||!activeUser)return;try{await api('/chats/'+activeUser.id+'/messages',{method:'POST',body:JSON.stringify({text})});$('#messageInput').value='';await loadMessages();await loadChats()}catch(e){err(e)}};
$('#findUser').onclick=async()=>{const q=prompt('Введите username (от 1 до 7 букв):');if(!q)return;try{const d=await api('/users/'+encodeURIComponent(q));if(d.user.id===me.id){alert('Это ваш аккаунт.');return}await api('/chats',{method:'POST',body:JSON.stringify({userId:d.user.id})});await loadChats();openChat(d.user.id,d.user.username)}catch(e){err(e)}};
$('#newChat').onclick=()=>$('#findUser').click();$('#backBtn').onclick=()=>{$('#shell').classList.remove('chat-open');$('#backBtn').style.display='none'};
$('#profileBtn').onclick=()=>pages.profile();
$('#search').oninput=()=>{const q=$('#search').value.toLowerCase();document.querySelectorAll('.chatitem').forEach(el=>el.style.display=el.textContent.toLowerCase().includes(q)?'flex':'none')};

const themeToggle=$('#themeToggle');
function applyTheme(theme){
 document.body.dataset.theme=theme;
 if(themeToggle){themeToggle.textContent=theme==='light'?'☾':'☼';themeToggle.title=theme==='light'?'Включить тёмную тему':'Включить светлую тему';}
 localStorage.setItem('fix_theme',theme);
}
applyTheme(localStorage.getItem('fix_theme')||'dark');
themeToggle?.addEventListener('click',()=>applyTheme(document.body.dataset.theme==='light'?'dark':'light'));



// FIX v9 navigation: Telegram-like drawer, verified channels and premium
const featureView=document.getElementById('featureView');
const featureContent=document.getElementById('featureContent');
const drawer=document.getElementById('menuDrawer');
function toast(message){const t=document.getElementById('toast');t.textContent=message;t.style.display='block';clearTimeout(window.__fixToast);window.__fixToast=setTimeout(()=>t.style.display='none',2600)}
function closeFeature(){featureView.classList.remove('open')}
function openFeature(title,body){featureContent.innerHTML=`<div class="feature-head"><button class="feature-close" id="featureBack" aria-label="Назад">×</button><h1>${title}</h1></div>${body}`;featureView.classList.add('open');document.getElementById('featureBack').onclick=closeFeature;featureContent.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>toast(b.dataset.toast)));featureContent.querySelectorAll('[data-react]').forEach(b=>b.addEventListener('click',()=>{let n=Number(b.dataset.count||0)+1;b.dataset.count=String(n);b.textContent=b.dataset.react+' '+n}))}
function closeDrawer(){document.body.classList.remove('drawer-open')}
function openDrawer(){closeFeature();document.body.classList.add('drawer-open')}
function drawerItem(icon,label,action,extra=''){return `<button class="drawer-item" data-action="${action}"><span class="drawer-emoji">${icon}</span><span>${label}</span>${extra?`<span class="drawer-count">${extra}</span>`:''}</button>`}
function renderDrawer(){
 const name=me?.username||'Гость';
 document.getElementById('drawerContent').innerHTML=`
 <div class="drawer-profile"><div class="drawer-avatar">👤</div><div><strong>Мой профиль</strong><small>@${name}</small></div></div>
 ${drawerItem('▣','Лента','feed')}
 ${drawerItem('💬','Чаты','chats')}
 ${drawerItem('♧','Уведомления','notifications','0')}
 <div class="drawer-sep"></div>
 ${drawerItem('🎁','Магазин','gifts')}
 ${drawerItem('🏪','Маркет','market')}
 ${drawerItem('⚔️','Клан','clan')}
 ${drawerItem('⭐','FIX Premium','premium')}
 ${drawerItem('💎','Рубины','rubies','0')}
 ${drawerItem('👛','TON Wallet','wallet')}
 <div class="drawer-sep"></div>
 ${drawerItem('♙','Аккаунты','accounts')}
 ${drawerItem('⚙️','Настройки','settings')}
 ${me?.role==='admin'?drawerItem('🛡️','Админ-панель','admin'):''}`;
 document.getElementById('drawerContent').querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{closeDrawer();drawerActions[b.dataset.action]?.()});
}
const drawerActions={
 feed:()=>showNews(),
 chats:()=>{closeFeature();document.getElementById('shell').classList.remove('chat-open')},
 notifications:()=>openFeature('Уведомления',`<div class="feature-card">Пока новых уведомлений нет.</div>`),
 gifts:()=>pages.gifts(),
 market:()=>pages.market(),
 clan:()=>openFeature('Клан',`<div class="feature-card"><strong>Кланы FIX</strong><p class="muted">Раздел кланов появится в одном из следующих обновлений.</p></div>`),
 premium:()=>openFeature('FIX Premium',`<div class="premium-hero"><div class="premium-star">⭐</div><h2>FIX Premium</h2><p>Больше возможностей. Больше персонализации.</p><div class="premium-perks"><div>✨ Эксклюзивные значки профиля</div><div>🎨 Дополнительные темы оформления</div><div>🚀 Особые реакции и оформление сообщений</div><div>💠 Премиум-статус рядом с именем</div></div><button class="action-btn" data-toast="FIX Premium пока находится в разработке">Скоро будет доступно</button><p class="muted">Это предварительный экран. Оплата и подписки не подключены.</p></div>`),
 rubies:()=>openFeature('Рубины',`<div class="feature-card"><div class="wallet-balance">💎 0</div><p class="muted">Внутренние демонстрационные баллы FIX. Покупка и вывод отключены.</p></div>`),
 wallet:()=>pages.wallet(),
 accounts:()=>openFeature('Аккаунты',`<div class="feature-card"><strong>Текущий аккаунт</strong><p class="muted">@${me?.username||'guest'}</p><button class="action-btn" data-toast="Переключение аккаунтов будет добавлено позже">Добавить аккаунт</button></div>`),
 settings:()=>pages.settings(),
 admin:()=>pages.admin()
};
function showMenu(){renderDrawer();openDrawer()}
function showNews(){
 const posts=[
  ['29 октября','Мы пробили потолок в 100 онлайна! 🎉','👁 1 128','19:56',[['💎',2],['❤️',68]]],
  ['31 октября','Загружаем для вас подарок в честь Хэллоуина 🎃','👁 805','10:32',[['❤️',47]]],
  ['31 октября','В 0:00 что-то будет... 👀','👁 672','22:18',[['💎',7],['❤️',38]]],
  ['31 октября','Пожалуйста поставьте все Код-пароль в настройках, чтобы защитить аккаунт 🔐','👁 658','23:05',[['💎',2],['❤️',21]]],
  ['31 октября','3000 пользователей! 🎉','👁 657','23:20',[['💎',1],['❤️',29]]],
  ['1 ноября','Добавим новые возможности скоро, будете пользоваться? - ❤️','👁 628','01:04',[['💎',10],['❤️',119]]]
 ];
 const body=`<div class="news-channel-top"><div class="channel-avatar news-avatar">✦</div><div><strong>FIX News <span class="verified">✓</span></strong><small>Официальный канал новостей FIX</small></div></div><div class="news-wall"><div class="news-stream">${posts.map(([date,msg,views,time,reactions],i)=>`${i===0||posts[i-1][0]!==date?`<div class="news-date">${date}</div>`:''}<div class="news-bubble"><small>FIX News <span class="verified">✓</span></small><p>${msg}</p><div class="news-stats"><span>${views}</span><span>${time}</span></div></div><div class="news-reactions">${reactions.map(([emoji,count])=>`<button class="react" data-react="${emoji}" data-count="${count}">${emoji} ${count}</button>`).join('')}</div>`).join('')}</div></div>`;
 openFeature('FIX News',body);
}
async function showLoginEvents(){
 let events=[];
 try{const d=await api('/login-events');events=d.events||[]}catch(e){toast('Не удалось загрузить события входа')}
 const rows=events.length?events.map(e=>`<div class="login-event"><strong>🔐 ${e.eventType}</strong><small>${new Date(e.createdAt).toLocaleString('ru-RU')}</small></div>`).join(''):`<div class="feature-card"><strong>Пока нет событий</strong><p class="muted">Здесь будут отображаться реальные входы и регистрация именно этого аккаунта.</p></div>`;
 openFeature('Входы',`<div class="news-channel-top"><div class="channel-avatar login-avatar">↪</div><div><strong>Входы <span class="verified">✓</span></strong><small>События безопасности вашего аккаунта</small></div></div><div style="max-width:700px;margin:18px auto;padding:0 16px">${rows}</div>`);
}
document.getElementById('menuBtn')?.addEventListener('click',showMenu);
document.getElementById('drawerShade')?.addEventListener('click',closeDrawer);
document.getElementById('newsChannel')?.addEventListener('click',showNews);
document.getElementById('loginsChannel')?.addEventListener('click',showLoginEvents);
const pages={
 profile(){openFeature('Профиль',`<div class="feature-card" style="max-width:680px;margin:20px auto"><div class="avatar" style="width:84px;height:84px;font-size:32px;margin:0 auto 14px">${(me?.displayName||me?.username||'?')[0].toUpperCase()}</div><h2 style="text-align:center">${me?.displayName||me?.username}</h2><p class="muted" style="text-align:center">@${me?.username||''}</p><label>Никнейм</label><input id="editDisplay" value="${(me?.displayName||me?.username||'').replace(/"/g,'&quot;')}" maxlength="32" style="width:100%;padding:12px;border-radius:10px;background:#09090b;color:white;border:1px solid #333"><label>Описание</label><textarea id="editBio" maxlength="160" style="width:100%;min-height:90px;padding:12px;border-radius:10px;background:#09090b;color:white;border:1px solid #333">${me?.bio||''}</textarea><button class="action-btn" id="saveProfile">Сохранить</button><p class="muted">Значки, баннеры и NFT-подарки пока демонстрационные.</p></div>`);document.getElementById('saveProfile').onclick=async()=>{try{me=await api('/profile',{method:'PUT',body:JSON.stringify({displayName:document.getElementById('editDisplay').value,bio:document.getElementById('editBio').value})});$('#myName').textContent=me.displayName;toast('Профиль сохранён')}catch(e){toast(e.message)}}},
 async admin(){try{const d=await api('/admin/overview');openFeature('Админ-панель',`<div style="max-width:900px;margin:20px auto"><div class="feature-card"><h2>Добро пожаловать, CEO</h2><p class="muted">Панель управления FIX · доступ подтверждён сервером</p><div class="admin-stat-grid"><div class="admin-stat"><b>${d.users}</b><span>Пользователей</span></div><div class="admin-stat"><b>${d.chats}</b><span>Диалогов</span></div><div class="admin-stat"><b>${d.messages}</b><span>Сообщений</span></div></div></div><div class="feature-card" style="margin-top:14px"><h3>Последние регистрации</h3>${d.latest.map(u=>`<div class="settings-row"><strong>@${u.username}</strong><span class="muted">${new Date(u.created_at).toLocaleDateString('ru-RU')}</span></div>`).join('')}</div></div>`)}catch(e){toast(e.message)}},
 settings(){openFeature('Настройки',`<div class="feature-card">
 <div class="settings-row"><div><strong>Профиль</strong><div class="muted">Имя пользователя: @${me?.username||'guest'}</div></div><span>👤</span></div>
 <div class="settings-row"><div><strong>Оформление</strong><div class="muted">Светлая и тёмная темы</div></div><button class="action-btn" id="settingsTheme">Сменить</button></div>
 <div class="settings-row"><div><strong>Безопасность</strong><div class="muted">События входа доступны в канале «Входы»</div></div><button class="action-btn" id="openLoginHistory">История</button></div>
 <div class="settings-row"><div><strong>FIX Premium</strong><div class="muted">Дополнительные возможности</div></div><button class="action-btn" id="openPremium">Открыть</button></div>
 </div>`);document.getElementById('settingsTheme').onclick=()=>{applyTheme(document.body.dataset.theme==='light'?'dark':'light');toast('Тема изменена')};document.getElementById('openLoginHistory').onclick=showLoginEvents;document.getElementById('openPremium').onclick=drawerActions.premium},
 wallet(){openFeature('TON Wallet',`<div class="feature-card" style="max-width:680px;margin:20px auto"><div class="coin-row"><div class="coin-badge">💎</div><div><strong>TON Wallet</strong><div class="muted">FIX demo wallet</div></div><span class="pill" style="margin-left:auto">Подключён · демо</span></div><div class="wallet-balance">0.00 TON</div><p class="muted">Кошелёк автоматически создан внутри демо-профиля FIX. Реальное подключение к блокчейну и переводы пока не реализованы. Не отправляйте сюда монеты и не вводите seed-фразы.</p></div>`)},
 gifts(){const items=[['Мишка','50 💎','🧸','linear-gradient(145deg,#8b542e,#d98b3e)'],['Леденец','120 💎','🍭','linear-gradient(145deg,#543f9c,#b45bc9)'],['Патефон','180 💎','📻','linear-gradient(145deg,#8b4a28,#c28b39)'],['Череп','90 💎','💀','linear-gradient(145deg,#28213d,#6555a1)'],['Лягушка','110 💎','🐸','linear-gradient(145deg,#245e39,#54a66c)'],['Маска','150 💎','🎭','linear-gradient(145deg,#714a32,#c9a56b)'],['Кот','80 💎','🐈','linear-gradient(145deg,#33313c,#77717e)'],['Кроссовки','200 💎','👟','linear-gradient(145deg,#552a32,#b84b4b)']];openFeature('Магазин',`<div class="shop-tabs"><button class="shop-tab active">Подарки</button><button class="shop-tab" data-toast="Раздел рамок скоро появится">Рамки</button></div><h3 style="max-width:760px;margin:24px auto 12px">Магазин</h3><div class="market-grid gift-grid">${items.map(x=>`<div class="market-card gift-card"><div class="market-art" style="background:${x[3]}">${x[2]}</div><strong>${x[0]}</strong><p class="muted">${x[1]}</p><button class="action-btn" data-toast="Покупка подарков пока отключена">Выбрать</button></div>`).join('')}</div><h3 style="max-width:760px;margin:28px auto 12px">На маркете</h3><p class="muted" style="max-width:760px;margin:auto">Подарки пользователей появятся здесь после подключения торгов.</p>`)},
 market(){openFeature('Маркет',`<div class="market-tabs"><button class="market-tab active" data-market="names">Юзернеймы</button><button class="market-tab" data-market="gifts">Подарки</button><button class="market-tab" data-market="numbers">Номера</button></div><div class="market-banner"><strong>Маркет FIX</strong><span>Покупка и продажа коллекционных предметов</span></div><div class="market-toolbar"><input id="marketSearch" placeholder="Поиск по имени и признакам"><select id="marketSort"><option>Сначала дешёвые</option><option>Сначала дорогие</option><option>Сначала новые</option></select></div><div class="market-grid" id="marketResults">${[['@homeless','100 💎','🔤'],['@listing','100 💎','🔤'],['@lagap','100 💎','🔤'],['@loxsy','100 💎','🔤'],['@iqmaxing','200 💎','🔤'],['@farmer','200 💎','🔤'],['@spike','200 💎','🔤'],['@moderation','354 💎','🔤']].map(x=>`<div class="market-card"><div class="market-art">${x[2]}</div><strong>${x[0]}</strong><p class="muted">Продавец · анонимный</p><b>${x[1]}</b><button class="action-btn" data-toast="Для покупки пока недостаточно рубинов">Купить</button></div>`).join('')}</div>`);document.querySelectorAll('[data-market]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-market]').forEach(x=>x.classList.toggle('active',x===b));toast('Категория: '+b.textContent)});document.getElementById('marketSearch').oninput=e=>document.querySelectorAll('#marketResults .market-card').forEach(c=>c.style.display=c.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none') },
 nft(){openFeature('NFT-маркет',`<p class="muted">Демонстрационные коллекционные предметы.</p><div class="market-grid">${[['Космический кот','12 TON','🐈‍⬛'],['Неоновая звезда','8 TON','🌟'],['Кристалл FIX','20 TON','💠']].map(x=>`<div class="market-card"><div class="market-art">${x[2]}</div><strong>${x[0]}</strong><p class="muted">${x[1]}</p><span class="pill">NFT · демо</span><br><button class="action-btn" data-toast="Покупки пока отключены">Открыть</button></div>`).join('')}</div>`)},
 auction(){openFeature('Аукцион username',`<p class="muted">Демонстрационные лоты. Ставки пока отключены.</p><div class="market-grid">${[['@nova','5 TON','🔤'],['@pixel','3 TON','✨'],['@cloud','2 TON','☁️']].map(x=>`<div class="market-card"><div class="market-art">${x[2]}</div><strong>${x[0]}</strong><p class="muted">Старт: ${x[1]}</p><button class="action-btn" data-toast="Реальные ставки пока отключены">Посмотреть лот</button></div>`).join('')}</div>`)}
};
if(token)loadMe();else startGuest();
</script></body></html>
