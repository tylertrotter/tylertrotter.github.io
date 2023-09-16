(function(){"use strict";var t={2373:function(t,e,i){var n=i(9242),o=i(3396),s=i(7139);const a={key:0},c=(0,o._)("h1",null,"Settings",-1),l=(0,o._)("div",null,"To Do",-1),r={key:1},h={key:2},u={class:"almost-half"},p={class:"almost-half"};function d(t,e,i,d,g,m){const k=(0,o.up)("chess-info"),f=(0,o.up)("chess-end"),b=(0,o.up)("chess-clock"),_=(0,o.up)("chess-notation"),C=(0,o.up)("chess-controls");return(0,o.wg)(),(0,o.iD)(o.HY,null,[g.showSettings?((0,o.wg)(),(0,o.iD)("section",a,[(0,o._)("button",{class:"ex-button",onClick:e[0]||(e[0]=(...t)=>m.handleSettings&&m.handleSettings(...t))},"✕"),c,l])):g.showInfo?((0,o.wg)(),(0,o.iD)("section",r,[(0,o._)("button",{class:"ex-button",onClick:e[1]||(e[1]=(...t)=>m.handleInfo&&m.handleInfo(...t))},"✕"),(0,o.Wm)(k,{gameStarted:g.gameStarted},null,8,["gameStarted"])])):g.showEnd?((0,o.wg)(),(0,o.iD)("section",h,[(0,o._)("button",{class:"ex-button",onClick:e[2]||(e[2]=(...t)=>m.handleEnd&&m.handleEnd(...t))},"✕"),(0,o.Wm)(f,{notation:g.notation,onReset:m.handleReset,onResume:e[3]||(e[3]=t=>g.showEnd=!1)},null,8,["notation","onReset"])])):(0,o.kq)("",!0),(0,o.wy)((0,o._)("section",null,[(0,o._)("div",u,[(0,o.Wm)(b,{"start-time":10*g.topClock.base,"bonus-time":g.topClock.bonus,gameStarted:g.gameStarted,running:!g.paused&&g.topRunning,class:(0,s.C_)(["flip",[{"chess-clock--minimized":g.topNotating},{"almost-half":!g.topNotating}]]),onClick:e[4]||(e[4]=t=>m.handleTimer("top"))},null,8,["start-time","bonus-time","gameStarted","running","class"]),(0,o.wy)((0,o.Wm)(_,{color:g.gameStarted&&"top"===g.white?"white":"black",class:"flip almost-half",onNotate:e[5]||(e[5]=t=>m.handleNotation("top",t))},null,8,["color"]),[[n.F8,g.topNotating]])]),(0,o.Wm)(C,{gameStarted:g.gameStarted,"is-paused":g.paused,onTogglePause:m.handlePause,onReset:m.handleReset,onInfo:m.handleInfo,onSettings:m.handleSettings,onStop:m.handleEnd},null,8,["gameStarted","is-paused","onTogglePause","onReset","onInfo","onSettings","onStop"]),(0,o._)("div",p,[(0,o.Wm)(b,{"start-time":10*g.bottomClock.base,"bonus-time":g.bottomClock.bonus,gameStarted:g.gameStarted,running:!g.paused&&g.bottomRunning,class:(0,s.C_)([{"chess-clock--minimized":g.bottomNotating},{"almost-half":!g.bottomNotating}]),onClick:e[6]||(e[6]=t=>m.handleTimer("bottom"))},null,8,["start-time","bonus-time","gameStarted","running","class"]),(0,o.wy)((0,o.Wm)(_,{color:g.gameStarted&&"bottom"===g.white?"white":"black",class:"almost-half",onNotate:e[7]||(e[7]=t=>m.handleNotation("bottom",t))},null,8,["color"]),[[n.F8,g.bottomNotating]])])],512),[[n.F8,!g.showSettings&&!g.showInfo&&!g.showEnd]])],64)}i(7658);function g(t,e,i,n,a,c){return(0,o.wg)(),(0,o.iD)("button",{class:(0,s.C_)(["chess-clock",{"is-active":i.running,"is-done":a.elapsed>=i.startTime}])},(0,s.zw)(c.displayTime),3)}var m={name:"ChessClock",props:{startTime:{type:Number,default:10},bonusTime:{type:Number,default:0},running:{type:Boolean,default:!1},gameStarted:{type:Boolean,default:!1}},data(){return{elapsed:0,timerId:void 0,timerInterval:100,time:void 0}},watch:{running(t){t?this.startTimer():(this.elapsed=this.elapsed-10*this.bonusTime,this.updateClock(),clearTimeout(this.timerId))},gameStarted(t){t||(this.elapsed=0,this.updateClock())}},created(){this.time=this.startTime},methods:{startTimer(){var t=Date.now()+this.timerInterval;this.timerId=setTimeout(this.incrementTime,this.timerInterval,t)},incrementTime(t){var e=Date.now()-t;e>this.timerInterval&&console.log("time is wrong"),this.elapsed=this.elapsed+1,this.updateClock(),t+=this.timerInterval,this.timerId=setTimeout(this.incrementTime,Math.max(0,this.timerInterval-e),t)},updateClock(){this.time=Math.max(0,this.startTime-this.elapsed)}},computed:{displayTime(){const t=Math.floor(this.time/10/60),e=Math.floor(this.time/10%60)+"";return`${t}:${e.padStart(2,"0")}`}}},k=i(89);const f=(0,k.Z)(m,[["render",g]]);var b=f;const _={class:"chess-controls"},C=(0,o._)("span",{class:"visually-hidden"},"play",-1),v=(0,o._)("span",{class:"visually-hidden"},"pause",-1);function w(t,e,i,n,s,a){return(0,o.wg)(),(0,o.iD)("section",_,[i.isPaused?((0,o.wg)(),(0,o.iD)("button",{key:0,title:"Information",onClick:e[0]||(e[0]=e=>t.$emit("info"))}," ❓ ")):(0,o.kq)("",!0),i.gameStarted?((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:e[1]||(e[1]=e=>t.$emit("togglePause"))},[i.isPaused?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[C,(0,o.Uk)(" ▶️ ")],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[v,(0,o.Uk)(" ⏸ ")],64))])):(0,o.kq)("",!0),i.isPaused?((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[i.gameStarted?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:e[2]||(e[2]=e=>t.$emit("stop"))}," ⏹ ")):((0,o.wg)(),(0,o.iD)("button",{key:1,title:"New Clock Settings",onClick:e[3]||(e[3]=e=>t.$emit("settings"))}," ⚙️ "))],64)):(0,o.kq)("",!0)])}var y={name:"ChessControls",props:{isPaused:{type:Boolean,default:!1},gameStarted:{type:Boolean,default:!1}}};const S=(0,k.Z)(y,[["render",w]]);var N=S;const O={class:"chess-notation"},D={class:"chess-notation__results"},I=["onClick"],T={key:0,class:"chess-notation__button-placeholder"},R={key:0,class:"chess-notation__piece"},P={class:"chess-notation__piece-proper"},M={key:0,class:"chess-notation__castling"},q={key:1,class:"chess-notation__file"},E={class:"chess-notation__file-proper"},x={class:"chess-notation__file-controls"},B=["disabled"],H=["checked"],$={key:2,class:"chess-notation__rank"},Q={class:"chess-notation__rank-proper"},W={class:"chess-notation__rank-controls"},j=["disabled"],K=["checked"],Y={key:3,class:"chess-notation__promotion"},z=(0,o._)("div",{class:"chess-notation__promotion-label"},"Promote pawn to:",-1),Z={class:"chess-notation__promotion-proper"},F={key:4,class:"chess-notation__final-results"};function A(t,e,i,n,a,c){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",D,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.notation,((t,e)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e},[t.length?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t=>c.goTo(e)},(0,s.zw)(t.replace("P","white"===i.color?"♙":"♟︎").replace("R","white"===i.color?"♖":"♜").replace("N","white"===i.color?"♘":"♞").replace("B","white"===i.color?"♗":"♝").replace("K","white"===i.color?"♔":"♚").replace("Q","white"===i.color?"♕":"♛")),9,I)):(0,o.kq)("",!0)],64)))),128)),0===a.notation[4].length?((0,o.wg)(),(0,o.iD)("span",T," ")):(0,o.kq)("",!0)]),0===a.step?((0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("div",P,[(0,o._)("button",{onClick:e[0]||(e[0]=t=>c.notate("P",3)),class:(0,s.C_)({"is-active":"P"===a.notation[a.step]})}," ",2),(0,o._)("button",{onClick:e[1]||(e[1]=t=>c.notate("R",3)),class:(0,s.C_)({"is-active":"R"===a.notation[a.step]})},"R",2),(0,o._)("button",{onClick:e[2]||(e[2]=t=>c.notate("N",3)),class:(0,s.C_)({"is-active":"N"===a.notation[a.step]})},"N",2),(0,o._)("button",{onClick:e[3]||(e[3]=t=>c.notate("B",3)),class:(0,s.C_)({"is-active":"B"===a.notation[a.step]})},"B",2),(0,o._)("button",{onClick:e[4]||(e[4]=t=>c.notate("K",3)),class:(0,s.C_)({"is-active":"K"===a.notation[a.step]})},"K",2),(0,o._)("button",{onClick:e[5]||(e[5]=t=>c.notate("Q",3)),class:(0,s.C_)({"is-active":"Q"===a.notation[a.step]})},"Q",2)]),a.canCastle?((0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("button",{onClick:e[6]||(e[6]=t=>c.notate("0-0",6)),class:(0,s.C_)({"is-active":"0-0"===a.notation[a.step]})},"King side castle",2),(0,o._)("button",{onClick:e[7]||(e[7]=t=>c.notate("0-0-0",6)),class:(0,s.C_)({"is-active":"0-0-0"===a.notation[a.step]})},"Queen side castle",2)])):(0,o.kq)("",!0)])):(0,o.kq)("",!0),1===a.step||3===a.step?((0,o.wg)(),(0,o.iD)("div",q,[(0,o._)("div",E,[(0,o._)("button",{onClick:e[8]||(e[8]=t=>c.notate("a",a.isSpecifyingOrigin?3:4)),class:(0,s.C_)({"is-active":"a"===a.notation[a.step]})},"a",2),(0,o._)("button",{onClick:e[9]||(e[9]=t=>c.notate("b",a.isSpecifyingOrigin?3:4)),class:(0,s.C_)({"is-active":"b"===a.notation[a.step]})},"b",2),(0,o._)("button",{onClick:e[10]||(e[10]=t=>c.notate("c",a.isSpecifyingOrigin?3:4)),class:(0,s.C_)({"is-active":"c"===a.notation[a.step]})},"c",2),(0,o._)("button",{onClick:e[11]||(e[11]=t=>c.notate("d",a.isSpecifyingOrigin?3:4)),class:(0,s.C_)({"is-active":"d"===a.notation[a.step]})},"d",2),(0,o._)("button",{onClick:e[12]||(e[12]=t=>c.notate("e",a.isSpecifyingOrigin?3:4)),class:(0,s.C_)({"is-active":"e"===a.notation[a.step]})},"e",2),(0,o._)("button",{onClick:e[13]||(e[13]=t=>c.notate("f",a.isSpecifyingOrigin?3:4)),class:(0,s.C_)({"is-active":"f"===a.notation[a.step]})},"f",2),(0,o._)("button",{onClick:e[14]||(e[14]=t=>c.notate("g",a.isSpecifyingOrigin?3:4)),class:(0,s.C_)({"is-active":"g"===a.notation[a.step]})},"g",2),(0,o._)("button",{onClick:e[15]||(e[15]=t=>c.notate("h",a.isSpecifyingOrigin?3:4)),class:(0,s.C_)({"is-active":"h"===a.notation[a.step]})},"h",2)]),(0,o._)("div",x,[(0,o._)("button",{onClick:e[16]||(e[16]=(...t)=>c.handleOriginClick&&c.handleOriginClick(...t)),disabled:!["P","R","N","Q"].includes(a.notation[0])},[(0,o._)("input",{type:"checkbox",checked:a.isSpecifyingOrigin,disabled:""},null,8,H),(0,o.Uk)(" Specify Origin ")],8,B)])])):(0,o.kq)("",!0),2===a.step||4===a.step?((0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",Q,[(0,o._)("button",{onClick:e[17]||(e[17]=t=>c.notate("1",a.isSpecifyingOrigin?2:c.isPromoting("black")?5:6)),class:(0,s.C_)({"is-active":"1"===a.notation[a.step]})},"1",2),(0,o._)("button",{onClick:e[18]||(e[18]=t=>c.notate("2",a.isSpecifyingOrigin?2:6)),class:(0,s.C_)({"is-active":"2"===a.notation[a.step]})},"2",2),(0,o._)("button",{onClick:e[19]||(e[19]=t=>c.notate("3",a.isSpecifyingOrigin?2:6)),class:(0,s.C_)({"is-active":"3"===a.notation[a.step]})},"3",2),(0,o._)("button",{onClick:e[20]||(e[20]=t=>c.notate("4",a.isSpecifyingOrigin?2:6)),class:(0,s.C_)({"is-active":"4"===a.notation[a.step]})},"4",2),(0,o._)("button",{onClick:e[21]||(e[21]=t=>c.notate("5",a.isSpecifyingOrigin?2:6)),class:(0,s.C_)({"is-active":"5"===a.notation[a.step]})},"5",2),(0,o._)("button",{onClick:e[22]||(e[22]=t=>c.notate("6",a.isSpecifyingOrigin?2:6)),class:(0,s.C_)({"is-active":"6"===a.notation[a.step]})},"6",2),(0,o._)("button",{onClick:e[23]||(e[23]=t=>c.notate("7",a.isSpecifyingOrigin?2:6)),class:(0,s.C_)({"is-active":"7"===a.notation[a.step]})},"7",2),(0,o._)("button",{onClick:e[24]||(e[24]=t=>c.notate("8",a.isSpecifyingOrigin?2:c.isPromoting("white")?5:6)),class:(0,s.C_)({"is-active":"8"===a.notation[a.step]})},"8",2)]),(0,o._)("div",W,[2===a.step?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:e[25]||(e[25]=(...t)=>c.handleOriginClick&&c.handleOriginClick(...t)),disabled:!["P","R","N","Q"].includes(a.notation[0])},[(0,o._)("input",{type:"checkbox",checked:a.isSpecifyingOrigin},null,8,K),(0,o.Uk)(" Specify Origin ")],8,j)):(0,o.kq)("",!0)])])):(0,o.kq)("",!0),5===a.step?((0,o.wg)(),(0,o.iD)("div",Y,[z,(0,o._)("div",Z,[(0,o._)("button",{onClick:e[26]||(e[26]=t=>c.notate("=Q",6)),class:(0,s.C_)({"is-active":"=Q"===a.notation[a.step]})},"=Q",2),(0,o._)("button",{onClick:e[27]||(e[27]=t=>c.notate("=N",6)),class:(0,s.C_)({"is-active":"=N"===a.notation[a.step]})},"=N",2),(0,o._)("button",{onClick:e[28]||(e[28]=t=>c.notate("=R",6)),class:(0,s.C_)({"is-active":"=R"===a.notation[a.step]})},"=R",2),(0,o._)("button",{onClick:e[29]||(e[29]=t=>c.notate("=B",6)),class:(0,s.C_)({"is-active":"=B"===a.notation[a.step]})},"=B",2)])])):(0,o.kq)("",!0),6===a.step?((0,o.wg)(),(0,o.iD)("div",F,[(0,o._)("span",null,(0,s.zw)(c.formatNotation),1),(0,o._)("button",{onClick:e[30]||(e[30]=(...t)=>c.finish&&c.finish(...t)),class:"chess-notation__confirm-button"},"✔")])):(0,o.kq)("",!0)])}var U={name:"ChessNotation",props:{color:{type:String,default:void 0}},data(){return{notation:["","","","","",""],step:0,isSpecifyingOrigin:!1,canCastle:!0}},methods:{notate(t,e){this.notation[this.step]=t,this.step=e,this.isSpecifyingOrigin=!1},reset(){this.step=0,this.notation=["","","","",""]},finish(){(this.notation[0].includes("0-0")||this.notation.includes("K"))&&(this.canCastle=!1),this.$emit("notate",this.formatNotation),this.reset()},handleOriginClick(){this.isSpecifyingOrigin=!this.isSpecifyingOrigin,0===this.notation[1].length?this.step=1:this.step=2},isPromoting(t){return t===this.color&&"P"===this.notation[0]},goTo(t){this.step=t,this.isSpecifyingOrigin=1===t||2===t}},computed:{formatNotation(){return this.notation.join("").replace("P","")}}};const G=(0,k.Z)(U,[["render",A]]);var L=G;const X=(0,o.uE)('<h1>Chess Notepad</h1><section><h2>How Chess Notepad Works</h2><p>Summary paragraph</p><button>Full instructions</button><section class="chess-notepad__full-instructions"><h3>How the Clock Works</h3><p>Timer instructions will go here</p><h3>How to Notate Your Moves</h3><p>Instructions will go here</p><h4>Step 1: Note the piece you moved</h4><p>Instructions will go here</p><h4>Steps 2 &amp; 3: Note the square you moved to</h4><p>Instructions will go here</p><h4>Special Circumstances</h4><p>Some circumstances require more information.</p><h5>Disambiguating Pieces</h5><p>Instructions will go here</p><h5>Pawn Promotion</h5><p>Instructions will go here</p></section></section><section><h2>Clocks</h2><h3>Presets</h3><ul id="clock-presets"><li><a href="game/#1800">30</a></li><li><a href="game/#900-10">15 | 10</a></li><li><a href="game/#600">10</a></li><li><a href="game/#300-5">5 | 5</a></li><li><a href="game/#300">5</a></li><li><a href="game/#180">3</a></li></ul><button hidden>+ Custom Game Settings</button></section><section hidden> AD </section>',4),J=[X];function V(t,e,i,n,s,a){return(0,o.wg)(),(0,o.iD)("main",null,J)}var tt={name:"ChessInfo",props:{gameStarted:{type:Boolean,default:!1}},mounted(){document.querySelectorAll("#clock-presets a").forEach((t=>{t.addEventListener("click",this.handleClick)}))},methods:{handleClick(t){t.preventDefault();const e=t.target.getAttribute("href").replace("game/#","");this.gameStarted?window.confirm("Do you want to reset your current game?")&&(window.location.pathname=e):window.location.pathname=e}}};const et=(0,k.Z)(tt,[["render",V]]);var it=et;const nt={class:"chess-end__body"},ot=(0,o._)("h1",null,"Game over?",-1),st=["innerHTML"],at=(0,o._)("a",{href:"chess.com",hidden:""},"Save game in Chess.com",-1),ct={class:"chess-end__actions"};function lt(t,e,i,n,a,c){return(0,o.wg)(),(0,o.iD)("section",nt,[(0,o._)("div",null,[ot,i.notation.length?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("div",{innerHTML:i.notation,class:"chess-end__pgn monospace"},null,8,st),(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>c.handleCopy&&c.handleCopy(...t))},"Copy Game Notes "+(0,s.zw)(c.copySuccessMessage),1),at],64)):(0,o.kq)("",!0)]),(0,o._)("div",ct,[(0,o._)("button",{onClick:e[1]||(e[1]=e=>t.$emit("reset"))},"↺ Reset game"),(0,o._)("button",{onClick:e[2]||(e[2]=e=>t.$emit("resume"))},"Keep playing")])])}var rt={name:"ChessEnd",props:{notation:{type:String,default:void 0}},data(){return{copySuccess:null}},methods:{handleCopy(){navigator.clipboard.writeText(this.notation).then((()=>{this.copySuccess=!0}),(()=>{this.copySuccess=!1}))}},computed:{copySuccessMessage(){return!0===this.copySuccess?"✔":!1===this.copySuccess?"X":""}}};const ht=(0,k.Z)(rt,[["render",lt]]);var ut=ht,pt={name:"App",components:{ChessClock:b,ChessControls:N,ChessNotation:L,ChessInfo:it,ChessEnd:ut},data(){return{gameStarted:!1,paused:!0,topRunning:!1,bottomRunning:!0,topNotating:!1,bottomNotating:!1,white:void 0,whiteMoves:[],blackMoves:[],notation:null,turn:"white",topClock:{base:600,bonus:0},bottomClock:{base:600,bonus:0},showSettings:!1,showInfo:!1,showEnd:!1}},created(){if(window.location.pathname.includes("game")){const t=window.location.hash.replace("#","");this.topClock.base=t.split("-")[0],this.topClock.bonus=t.split("-")[1],1===t.length?(this.bottomClock.base=this.topClock.base,this.bottomClock.bonus=this.topClock.bonus):(this.bottomClock.base=t.split("-")[0],this.bottomClock.bonus=t.split("-")[1])}},methods:{handleTimer(t){this.paused=!1,"bottom"===t?(this.topRunning=!0,this.bottomRunning=!1,this.bottomNotating=this.gameStarted):(this.topRunning=!1,this.bottomRunning=!0,this.topNotating=this.gameStarted),this.gameStarted||(this.white="bottom"===t?"top":"bottom",this.gameStarted=!0)},handlePause(){this.paused=!this.paused},handleReset(){this.gameStarted=!1,this.topRunning=!1,this.bottomRunning=!0,this.topNotating=!1,this.bottomNotating=!1,this.white=void 0,this.whiteMoves=[],this.blackMoves=[],this.turn="white",this.showEnd=!1},handleEnd(){const t=[];for(let e=0;e<this.whiteMoves.length;e++)t.push(`${e+1}. ${this.whiteMoves[e]} ${this.blackMoves[e]||""}`);this.notation=t.join(" "),this.showEnd=!this.showEnd},handleSettings(){this.showSettings=!this.showSettings,this.showSettings&&(this.showInfo=!1)},handleInfo(){this.showInfo=!this.showInfo,this.showInfo&&(this.showSettings=!1)},handleNotation(t,e){this.white===t?this.whiteMoves.push(e):this.blackMoves.push(e),"top"===t?this.topNotating=!1:this.bottomNotating=!1}}};const dt=(0,k.Z)(pt,[["render",d]]);var gt=dt;(0,n.ri)(gt).mount("#app")}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,n,o,s){if(!n){var a=1/0;for(h=0;h<t.length;h++){n=t[h][0],o=t[h][1],s=t[h][2];for(var c=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(c=!1,s<a&&(a=s));if(c){t.splice(h--,1);var r=o();void 0!==r&&(e=r)}}return e}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[n,o,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,a=n[0],c=n[1],l=n[2],r=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(l)var h=l(i)}for(e&&e(n);r<a.length;r++)s=a[r],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(h)},n=self["webpackChunkchess_notepad"]=self["webpackChunkchess_notepad"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(2373)}));n=i.O(n)})();
//# sourceMappingURL=app.8b2c33d1.js.map