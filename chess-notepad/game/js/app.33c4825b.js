(function(){"use strict";var t={3340:function(t,n,o){var e=o(9242),i=o(3396),s=o(7139);const a={key:0},c=(0,i._)("h1",null,"Settings",-1),l=(0,i._)("div",null,"To Do",-1),r={key:1},h={key:2},p={class:"almost-half"},u={class:"almost-half"};function d(t,n,o,d,g,m){const _=(0,i.up)("chess-info"),k=(0,i.up)("chess-end"),C=(0,i.up)("chess-clock"),b=(0,i.up)("chess-notation"),f=(0,i.up)("chess-controls");return(0,i.wg)(),(0,i.iD)(i.HY,null,[g.showSettings?((0,i.wg)(),(0,i.iD)("section",a,[(0,i._)("button",{class:"ex-button",onClick:n[0]||(n[0]=(...t)=>m.handleSettings&&m.handleSettings(...t))},"✕"),c,l])):g.showInfo?((0,i.wg)(),(0,i.iD)("section",r,[(0,i._)("button",{class:"ex-button",onClick:n[1]||(n[1]=(...t)=>m.handleInfo&&m.handleInfo(...t))},"✕"),(0,i.Wm)(_,{gameStarted:g.gameStarted},null,8,["gameStarted"])])):g.showEnd?((0,i.wg)(),(0,i.iD)("section",h,[(0,i._)("button",{class:"ex-button",onClick:n[2]||(n[2]=(...t)=>m.handleEnd&&m.handleEnd(...t))},"✕"),(0,i.Wm)(k,{notation:g.notation,onReset:m.handleReset,onResume:n[3]||(n[3]=t=>g.showEnd=!1)},null,8,["notation","onReset"])])):(0,i.kq)("",!0),(0,i.wy)((0,i._)("section",null,[(0,i._)("div",p,[(0,i.Wm)(C,{"start-time":10*g.topClock.base,"bonus-time":g.topClock.bonus,gameStarted:g.gameStarted,running:!g.paused&&g.topRunning,class:(0,s.C_)(["flip",[{"chess-clock--minimized":g.topNotating},{"almost-half":!g.topNotating}]]),onClick:n[4]||(n[4]=t=>m.handleTimer("top"))},null,8,["start-time","bonus-time","gameStarted","running","class"]),(0,i.wy)((0,i.Wm)(b,{color:g.gameStarted&&"top"===g.white?"white":"black",class:"flip almost-half",onNotate:n[5]||(n[5]=t=>m.handleNotation("top",t))},null,8,["color"]),[[e.F8,g.topNotating]])]),(0,i.Wm)(f,{gameStarted:g.gameStarted,"is-paused":g.paused,onTogglePause:m.handlePause,onReset:m.handleReset,onInfo:m.handleInfo,onSettings:m.handleSettings,onStop:m.handleEnd},null,8,["gameStarted","is-paused","onTogglePause","onReset","onInfo","onSettings","onStop"]),(0,i._)("div",u,[(0,i.Wm)(C,{"start-time":10*g.bottomClock.base,"bonus-time":g.bottomClock.bonus,gameStarted:g.gameStarted,running:!g.paused&&g.bottomRunning,class:(0,s.C_)([{"chess-clock--minimized":g.bottomNotating},{"almost-half":!g.bottomNotating}]),onClick:n[6]||(n[6]=t=>m.handleTimer("bottom"))},null,8,["start-time","bonus-time","gameStarted","running","class"]),(0,i.wy)((0,i.Wm)(b,{color:g.gameStarted&&"bottom"===g.white?"white":"black",class:"almost-half",onNotate:n[7]||(n[7]=t=>m.handleNotation("bottom",t))},null,8,["color"]),[[e.F8,g.bottomNotating]])])],512),[[e.F8,!g.showSettings&&!g.showInfo&&!g.showEnd]])],64)}o(7658);function g(t,n,o,e,a,c){return(0,i.wg)(),(0,i.iD)("button",{class:(0,s.C_)(["chess-clock",{"is-active":o.running,"is-done":a.elapsed>=o.startTime}])},(0,s.zw)(c.displayTime),3)}var m={name:"ChessClock",props:{startTime:{type:Number,default:10},bonusTime:{type:Number,default:0},running:{type:Boolean,default:!1},gameStarted:{type:Boolean,default:!1}},data(){return{elapsed:0,timerId:void 0,timerInterval:100,time:void 0}},watch:{running(t){t?this.startTimer():(this.elapsed=this.elapsed-10*this.bonusTime,this.updateClock(),clearTimeout(this.timerId))},gameStarted(t){t||(this.elapsed=0,this.updateClock())}},created(){this.time=this.startTime},methods:{startTimer(){var t=Date.now()+this.timerInterval;this.timerId=setTimeout(this.incrementTime,this.timerInterval,t)},incrementTime(t){var n=Date.now()-t;n>this.timerInterval&&console.log("time is wrong"),this.elapsed=this.elapsed+1,this.updateClock(),t+=this.timerInterval,this.timerId=setTimeout(this.incrementTime,Math.max(0,this.timerInterval-n),t)},updateClock(){this.time=Math.max(0,this.startTime-this.elapsed)}},computed:{displayTime(){const t=Math.floor(this.time/10/60),n=Math.floor(this.time/10%60)+"";return`${t}:${n.padStart(2,"0")}`}}},_=o(89);const k=(0,_.Z)(m,[["render",g]]);var C=k;const b={class:"chess-controls"},f=(0,i._)("span",{class:"visually-hidden"},"play",-1),w=(0,i._)("span",{class:"visually-hidden"},"pause",-1);function v(t,n,o,e,s,a){return(0,i.wg)(),(0,i.iD)("section",b,[o.isPaused?((0,i.wg)(),(0,i.iD)("button",{key:0,title:"Information",onClick:n[0]||(n[0]=n=>t.$emit("info"))}," ❓ ")):(0,i.kq)("",!0),o.gameStarted?((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:n[1]||(n[1]=n=>t.$emit("togglePause"))},[o.isPaused?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[f,(0,i.Uk)(" ▶️ ")],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[w,(0,i.Uk)(" ⏸ ")],64))])):(0,i.kq)("",!0),o.isPaused?((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[o.gameStarted?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:n[2]||(n[2]=n=>t.$emit("stop"))}," ⏹ ")):((0,i.wg)(),(0,i.iD)("button",{key:1,title:"New Clock Settings",onClick:n[3]||(n[3]=n=>t.$emit("settings"))}," ⚙️ "))],64)):(0,i.kq)("",!0)])}var y={name:"ChessControls",props:{isPaused:{type:Boolean,default:!1},gameStarted:{type:Boolean,default:!1}}};const S=(0,_.Z)(y,[["render",v]]);var N=S;const D={class:"chess-notation"},O={class:"chess-notation__results"},I=["onClick"],R={key:1,class:"chess-notation__button-placeholder is-specifying-origin"},T={key:2,class:"chess-notation__button-placeholder is-specifying-origin"},P={key:0,class:"chess-notation__button-placeholder"},z={key:0,class:"chess-notation__piece"},M={class:"chess-notation__piece-proper"},q={key:0,class:"chess-notation__castling"},E={key:0,class:"chess-notation__file-proper"},x={key:1,class:"chess-notation__file-proper"},B={class:"chess-notation__file-controls"},H=["disabled"],$={key:1,class:"chess-notation__specify-origin"},Q={class:"switch"},W=(0,i._)("button",{class:"is-active"},"File",-1),j={key:0,class:"chess-notation__rank-proper"},K={key:1,class:"chess-notation__rank-proper"},Y={class:"chess-notation__rank-controls"},F=["disabled"],Z={key:1,class:"chess-notation__specify-origin"},A={class:"switch"},U=(0,i._)("button",{class:"is-active"},"Rank",-1),G={key:3,class:"chess-notation__promotion"},L=(0,i._)("div",{class:"chess-notation__promotion-label"},"Promote pawn to:",-1),X={class:"chess-notation__promotion-proper"},J={key:4,class:"chess-notation__final-results"};function V(t,n,o,e,a,c){return(0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("div",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.notation,((t,n)=>((0,i.wg)(),(0,i.iD)(i.HY,{key:n},[t.length?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:t=>c.goTo(n),class:(0,s.C_)({"is-specifying-origin":1===n||2===n,"is-active":n===a.step})},(0,s.zw)(t.replace("P","white"===o.color?"♙":"♟︎").replace("R","white"===o.color?"♖":"♜").replace("N","white"===o.color?"♘":"♞").replace("B","white"===o.color?"♗":"♝").replace("K","white"===o.color?"♔":"♚").replace("Q","white"===o.color?"♕":"♛")),11,I)):(0,i.kq)("",!0),a.isSpecifyingOrigin&&1===n&&1===a.step&&!a.notation[1].length?((0,i.wg)(),(0,i.iD)("span",R," ")):(0,i.kq)("",!0),a.isSpecifyingOrigin&&2===n&&2===a.step&&!a.notation[2].length?((0,i.wg)(),(0,i.iD)("span",T," ")):(0,i.kq)("",!0)],64)))),128)),0!==a.notation[4].length||a.isSpecifyingOrigin?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",P," "))]),0===a.step?((0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("div",M,[(0,i._)("button",{onClick:n[0]||(n[0]=t=>c.notate("P",3)),class:(0,s.C_)({"is-active":"P"===a.notation[a.step]})}," ",2),(0,i._)("button",{onClick:n[1]||(n[1]=t=>c.notate("R",3)),class:(0,s.C_)({"is-active":"R"===a.notation[a.step]})},"R",2),(0,i._)("button",{onClick:n[2]||(n[2]=t=>c.notate("N",3)),class:(0,s.C_)({"is-active":"N"===a.notation[a.step]})},"N",2),(0,i._)("button",{onClick:n[3]||(n[3]=t=>c.notate("B",3)),class:(0,s.C_)({"is-active":"B"===a.notation[a.step]})},"B",2),(0,i._)("button",{onClick:n[4]||(n[4]=t=>c.notate("K",3)),class:(0,s.C_)({"is-active":"K"===a.notation[a.step]})},"K",2),(0,i._)("button",{onClick:n[5]||(n[5]=t=>c.notate("Q",3)),class:(0,s.C_)({"is-active":"Q"===a.notation[a.step]})},"Q",2)]),a.canCastle?((0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("button",{onClick:n[6]||(n[6]=t=>c.notate("0-0",6)),class:(0,s.C_)({"is-active":"0-0"===a.notation[a.step]})},"Kingside castle",2),(0,i._)("button",{onClick:n[7]||(n[7]=t=>c.notate("0-0-0",6)),class:(0,s.C_)({"is-active":"0-0-0"===a.notation[a.step]})},"Queenside castle",2)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),1===a.step||3===a.step?((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,s.C_)(["chess-notation__file",{"is-specifying-origin":a.isSpecifyingOrigin}])},[a.isSpecifyingOrigin?((0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("button",{onClick:n[8]||(n[8]=t=>c.notate("a"===a.notation[a.step]?"":"a",3)),class:(0,s.C_)({"is-active":"a"===a.notation[a.step]})},(0,s.zw)("a"===a.notation[a.step]?"clear":"a"),3),(0,i._)("button",{onClick:n[9]||(n[9]=t=>c.notate("b"===a.notation[a.step]?"":"b",3)),class:(0,s.C_)({"is-active":"b"===a.notation[a.step]})},(0,s.zw)("b"===a.notation[a.step]?"clear":"b"),3),(0,i._)("button",{onClick:n[10]||(n[10]=t=>c.notate("c"===a.notation[a.step]?"":"c",3)),class:(0,s.C_)({"is-active":"c"===a.notation[a.step]})},(0,s.zw)("c"===a.notation[a.step]?"clear":"c"),3),(0,i._)("button",{onClick:n[11]||(n[11]=t=>c.notate("d"===a.notation[a.step]?"":"d",3)),class:(0,s.C_)({"is-active":"d"===a.notation[a.step]})},(0,s.zw)("d"===a.notation[a.step]?"clear":"d"),3),(0,i._)("button",{onClick:n[12]||(n[12]=t=>c.notate("e"===a.notation[a.step]?"":"e",3)),class:(0,s.C_)({"is-active":"e"===a.notation[a.step]})},(0,s.zw)("e"===a.notation[a.step]?"clear":"e"),3),(0,i._)("button",{onClick:n[13]||(n[13]=t=>c.notate("f"===a.notation[a.step]?"":"f",3)),class:(0,s.C_)({"is-active":"f"===a.notation[a.step]})},(0,s.zw)("f"===a.notation[a.step]?"clear":"f"),3),(0,i._)("button",{onClick:n[14]||(n[14]=t=>c.notate("g"===a.notation[a.step]?"":"g",3)),class:(0,s.C_)({"is-active":"g"===a.notation[a.step]})},(0,s.zw)("g"===a.notation[a.step]?"clear":"g"),3),(0,i._)("button",{onClick:n[15]||(n[15]=t=>c.notate("h"===a.notation[a.step]?"":"h",3)),class:(0,s.C_)({"is-active":"h"===a.notation[a.step]})},(0,s.zw)("h"===a.notation[a.step]?"clear":"h"),3)])):((0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("button",{onClick:n[16]||(n[16]=t=>c.notate("a",4)),class:(0,s.C_)({"is-active":"a"===a.notation[a.step]})},"a",2),(0,i._)("button",{onClick:n[17]||(n[17]=t=>c.notate("b",4)),class:(0,s.C_)({"is-active":"b"===a.notation[a.step]})},"b",2),(0,i._)("button",{onClick:n[18]||(n[18]=t=>c.notate("c",4)),class:(0,s.C_)({"is-active":"c"===a.notation[a.step]})},"c",2),(0,i._)("button",{onClick:n[19]||(n[19]=t=>c.notate("d",4)),class:(0,s.C_)({"is-active":"d"===a.notation[a.step]})},"d",2),(0,i._)("button",{onClick:n[20]||(n[20]=t=>c.notate("e",4)),class:(0,s.C_)({"is-active":"e"===a.notation[a.step]})},"e",2),(0,i._)("button",{onClick:n[21]||(n[21]=t=>c.notate("f",4)),class:(0,s.C_)({"is-active":"f"===a.notation[a.step]})},"f",2),(0,i._)("button",{onClick:n[22]||(n[22]=t=>c.notate("g",4)),class:(0,s.C_)({"is-active":"g"===a.notation[a.step]})},"g",2),(0,i._)("button",{onClick:n[23]||(n[23]=t=>c.notate("h",4)),class:(0,s.C_)({"is-active":"h"===a.notation[a.step]})},"h",2)])),(0,i._)("div",B,[a.isSpecifyingOrigin?((0,i.wg)(),(0,i.iD)("div",$,[(0,i._)("div",null,[(0,i.Uk)("Note Starting "),(0,i._)("span",Q,[W,(0,i._)("button",{onClick:n[25]||(n[25]=t=>a.step=2)},"Rank")])]),(0,i._)("button",{class:"ex-button",onClick:n[26]||(n[26]=t=>{a.isSpecifyingOrigin=!1,a.step=3})},"✕")])):((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:n[24]||(n[24]=(...t)=>c.handleOriginClick&&c.handleOriginClick(...t)),disabled:!["P","R","N","Q"].includes(a.notation[0])}," Note Starting Position ",8,H))])],2)):(0,i.kq)("",!0),2===a.step||4===a.step?((0,i.wg)(),(0,i.iD)("div",{key:2,class:(0,s.C_)(["chess-notation__rank",{"is-specifying-origin":a.isSpecifyingOrigin}])},[a.isSpecifyingOrigin?((0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("button",{onClick:n[27]||(n[27]=t=>c.notate("1"===a.notation[a.step]?"":"1",3)),class:(0,s.C_)({"is-active":"1"===a.notation[a.step]})},(0,s.zw)("1"===a.notation[a.step]?"clear":"1"),3),(0,i._)("button",{onClick:n[28]||(n[28]=t=>c.notate("2"===a.notation[a.step]?"":"2",3)),class:(0,s.C_)({"is-active":"2"===a.notation[a.step]})},(0,s.zw)("2"===a.notation[a.step]?"clear":"2"),3),(0,i._)("button",{onClick:n[29]||(n[29]=t=>c.notate("3"===a.notation[a.step]?"":"3",3)),class:(0,s.C_)({"is-active":"3"===a.notation[a.step]})},(0,s.zw)("3"===a.notation[a.step]?"clear":"3"),3),(0,i._)("button",{onClick:n[30]||(n[30]=t=>c.notate("4"===a.notation[a.step]?"":"4",3)),class:(0,s.C_)({"is-active":"4"===a.notation[a.step]})},(0,s.zw)("4"===a.notation[a.step]?"clear":"4"),3),(0,i._)("button",{onClick:n[31]||(n[31]=t=>c.notate("5"===a.notation[a.step]?"":"5",3)),class:(0,s.C_)({"is-active":"5"===a.notation[a.step]})},(0,s.zw)("5"===a.notation[a.step]?"clear":"5"),3),(0,i._)("button",{onClick:n[32]||(n[32]=t=>c.notate("6"===a.notation[a.step]?"":"6",3)),class:(0,s.C_)({"is-active":"6"===a.notation[a.step]})},(0,s.zw)("6"===a.notation[a.step]?"clear":"6"),3),(0,i._)("button",{onClick:n[33]||(n[33]=t=>c.notate("7"===a.notation[a.step]?"":"7",3)),class:(0,s.C_)({"is-active":"7"===a.notation[a.step]})},(0,s.zw)("7"===a.notation[a.step]?"clear":"7"),3),(0,i._)("button",{onClick:n[34]||(n[34]=t=>c.notate("8"===a.notation[a.step]?"":"8",3)),class:(0,s.C_)({"is-active":"8"===a.notation[a.step]})},(0,s.zw)("8"===a.notation[a.step]?"clear":"8"),3)])):((0,i.wg)(),(0,i.iD)("div",K,[(0,i._)("button",{onClick:n[35]||(n[35]=t=>c.notate("1",c.isPromoting("black")?5:6)),class:(0,s.C_)({"is-active":"1"===a.notation[a.step]})},"1",2),(0,i._)("button",{onClick:n[36]||(n[36]=t=>c.notate("2",6)),class:(0,s.C_)({"is-active":"2"===a.notation[a.step]})},"2",2),(0,i._)("button",{onClick:n[37]||(n[37]=t=>c.notate("3",6)),class:(0,s.C_)({"is-active":"3"===a.notation[a.step]})},"3",2),(0,i._)("button",{onClick:n[38]||(n[38]=t=>c.notate("4",6)),class:(0,s.C_)({"is-active":"4"===a.notation[a.step]})},"4",2),(0,i._)("button",{onClick:n[39]||(n[39]=t=>c.notate("5",6)),class:(0,s.C_)({"is-active":"5"===a.notation[a.step]})},"5",2),(0,i._)("button",{onClick:n[40]||(n[40]=t=>c.notate("6",6)),class:(0,s.C_)({"is-active":"6"===a.notation[a.step]})},"6",2),(0,i._)("button",{onClick:n[41]||(n[41]=t=>c.notate("7",6)),class:(0,s.C_)({"is-active":"7"===a.notation[a.step]})},"7",2),(0,i._)("button",{onClick:n[42]||(n[42]=t=>c.notate("8",c.isPromoting("white")?5:6)),class:(0,s.C_)({"is-active":"8"===a.notation[a.step]})},"8",2)])),(0,i._)("div",Y,[a.isSpecifyingOrigin?((0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("div",null,[(0,i.Uk)("Note Starting "),(0,i._)("span",A,[(0,i._)("button",{onClick:n[44]||(n[44]=t=>a.step=1)},"File"),U])]),(0,i._)("button",{class:"ex-button",onClick:n[45]||(n[45]=t=>{a.isSpecifyingOrigin=!1,a.step=3})},"✕")])):((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:n[43]||(n[43]=(...t)=>c.handleOriginClick&&c.handleOriginClick(...t)),disabled:!["P","R","N","Q"].includes(a.notation[0])}," Note Starting Position ",8,F))])],2)):(0,i.kq)("",!0),5===a.step?((0,i.wg)(),(0,i.iD)("div",G,[L,(0,i._)("div",X,[(0,i._)("button",{onClick:n[46]||(n[46]=t=>c.notate("=Q",6)),class:(0,s.C_)({"is-active":"=Q"===a.notation[a.step]})},"=Q",2),(0,i._)("button",{onClick:n[47]||(n[47]=t=>c.notate("=N",6)),class:(0,s.C_)({"is-active":"=N"===a.notation[a.step]})},"=N",2),(0,i._)("button",{onClick:n[48]||(n[48]=t=>c.notate("=R",6)),class:(0,s.C_)({"is-active":"=R"===a.notation[a.step]})},"=R",2),(0,i._)("button",{onClick:n[49]||(n[49]=t=>c.notate("=B",6)),class:(0,s.C_)({"is-active":"=B"===a.notation[a.step]})},"=B",2)])])):(0,i.kq)("",!0),6===a.step?((0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("span",null,(0,s.zw)(c.formatNotation),1),(0,i._)("button",{onClick:n[50]||(n[50]=(...t)=>c.finish&&c.finish(...t)),class:"chess-notation__confirm-button"},"✔")])):(0,i.kq)("",!0)])}var tt={name:"ChessNotation",props:{color:{type:String,default:void 0}},data(){return{notation:["","","","","",""],step:0,isSpecifyingOrigin:!1,canCastle:!0}},methods:{notate(t,n){this.notation[this.step]=t,this.step=n,this.isSpecifyingOrigin=!1},reset(){this.step=0,this.notation=["","","","",""]},finish(){(this.notation[0].includes("0-0")||this.notation.includes("K"))&&(this.canCastle=!1),this.$emit("notate",this.formatNotation),this.reset()},handleOriginClick(){this.isSpecifyingOrigin=!this.isSpecifyingOrigin,0===this.notation[1].length?this.step=1:this.step=2},isPromoting(t){return t===this.color&&"P"===this.notation[0]},goTo(t){this.step=t,this.isSpecifyingOrigin=1===t||2===t}},computed:{formatNotation(){return this.notation.join("").replace("P","")}}};const nt=(0,_.Z)(tt,[["render",V]]);var ot=nt;const et=(0,i.uE)('<h1>Chess Notepad</h1><section><h2>How Chess Notepad Works</h2><p>Summary paragraph</p><button>Full instructions</button><section class="chess-notepad__full-instructions"><h3>How the Clock Works</h3><p>Timer instructions will go here</p><h3>How to Notate Your Moves</h3><p>Instructions will go here</p><h4>Step 1: Note the piece you moved</h4><p>Instructions will go here</p><h4>Steps 2 &amp; 3: Note the square you moved to</h4><p>Instructions will go here</p><h4>Special Circumstances</h4><p>Some circumstances require more information.</p><h5>Disambiguating Pieces</h5><p>Instructions will go here</p><h5>Pawn Promotion</h5><p>Instructions will go here</p></section></section><section><h2>Clocks</h2><h3>Presets</h3><ul id="clock-presets"><li><a href="game/#1800">30</a></li><li><a href="game/#900-10">15 | 10</a></li><li><a href="game/#600">10</a></li><li><a href="game/#300-5">5 | 5</a></li><li><a href="game/#300">5</a></li><li><a href="game/#180">3</a></li></ul><button hidden>+ Custom Game Settings</button></section><section hidden> AD </section>',4),it=[et];function st(t,n,o,e,s,a){return(0,i.wg)(),(0,i.iD)("main",null,it)}var at={name:"ChessInfo",props:{gameStarted:{type:Boolean,default:!1}},mounted(){document.querySelectorAll("#clock-presets a").forEach((t=>{t.addEventListener("click",this.handleClick)}))},methods:{handleClick(t){t.preventDefault();const n=t.target.getAttribute("href").replace("game/#","");this.gameStarted?window.confirm("Do you want to reset your current game?")&&(window.location.pathname=n):window.location.pathname=n}}};const ct=(0,_.Z)(at,[["render",st]]);var lt=ct;const rt={class:"chess-end__body"},ht=(0,i._)("h1",null,"Game over?",-1),pt=["innerHTML"],ut=(0,i._)("a",{href:"chess.com",hidden:""},"Save game in Chess.com",-1),dt={class:"chess-end__actions"};function gt(t,n,o,e,a,c){return(0,i.wg)(),(0,i.iD)("section",rt,[(0,i._)("div",null,[ht,o.notation.length?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",{innerHTML:o.notation,class:"chess-end__pgn monospace"},null,8,pt),(0,i._)("button",{onClick:n[0]||(n[0]=(...t)=>c.handleCopy&&c.handleCopy(...t))},"Copy Game Notes "+(0,s.zw)(c.copySuccessMessage),1),ut],64)):(0,i.kq)("",!0)]),(0,i._)("div",dt,[(0,i._)("button",{onClick:n[1]||(n[1]=n=>t.$emit("reset"))},"↺ Reset game"),(0,i._)("button",{onClick:n[2]||(n[2]=n=>t.$emit("resume"))},"Keep playing")])])}var mt={name:"ChessEnd",props:{notation:{type:String,default:void 0}},data(){return{copySuccess:null}},methods:{handleCopy(){navigator.clipboard.writeText(this.notation).then((()=>{this.copySuccess=!0}),(()=>{this.copySuccess=!1}))}},computed:{copySuccessMessage(){return!0===this.copySuccess?"✔":!1===this.copySuccess?"X":""}}};const _t=(0,_.Z)(mt,[["render",gt]]);var kt=_t,Ct={name:"App",components:{ChessClock:C,ChessControls:N,ChessNotation:ot,ChessInfo:lt,ChessEnd:kt},data(){return{gameStarted:!1,paused:!0,topRunning:!1,bottomRunning:!0,topNotating:!1,bottomNotating:!1,white:void 0,whiteMoves:[],blackMoves:[],notation:null,turn:"white",topClock:{base:600,bonus:0},bottomClock:{base:600,bonus:0},showSettings:!1,showInfo:!1,showEnd:!1}},created(){if(window.location.pathname.includes("game")){const t=window.location.hash.replace("#","");this.topClock.base=t.split("-")[0],this.topClock.bonus=t.split("-")[1],1===t.length?(this.bottomClock.base=this.topClock.base,this.bottomClock.bonus=this.topClock.bonus):(this.bottomClock.base=t.split("-")[0],this.bottomClock.bonus=t.split("-")[1])}},methods:{handleTimer(t){this.paused=!1,"bottom"===t?(this.topRunning=!0,this.bottomRunning=!1,this.bottomNotating=this.gameStarted):(this.topRunning=!1,this.bottomRunning=!0,this.topNotating=this.gameStarted),this.gameStarted||(this.white="bottom"===t?"top":"bottom",this.gameStarted=!0)},handlePause(){this.paused=!this.paused},handleReset(){this.gameStarted=!1,this.topRunning=!1,this.bottomRunning=!0,this.topNotating=!1,this.bottomNotating=!1,this.white=void 0,this.whiteMoves=[],this.blackMoves=[],this.turn="white",this.showEnd=!1},handleEnd(){const t=[];for(let n=0;n<this.whiteMoves.length;n++)t.push(`${n+1}. ${this.whiteMoves[n]} ${this.blackMoves[n]||""}`);this.notation=t.join(" "),this.showEnd=!this.showEnd},handleSettings(){this.showSettings=!this.showSettings,this.showSettings&&(this.showInfo=!1)},handleInfo(){this.showInfo=!this.showInfo,this.showInfo&&(this.showSettings=!1)},handleNotation(t,n){this.white===t?this.whiteMoves.push(n):this.blackMoves.push(n),"top"===t?this.topNotating=!1:this.bottomNotating=!1}}};const bt=(0,_.Z)(Ct,[["render",d]]);var ft=bt;(0,e.ri)(ft).mount("#app")}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(n,e,i,s){if(!e){var a=1/0;for(h=0;h<t.length;h++){e=t[h][0],i=t[h][1],s=t[h][2];for(var c=!0,l=0;l<e.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((function(t){return o.O[t](e[l])}))?e.splice(l--,1):(c=!1,s<a&&(a=s));if(c){t.splice(h--,1);var r=i();void 0!==r&&(n=r)}}return n}s=s||0;for(var h=t.length;h>0&&t[h-1][2]>s;h--)t[h]=t[h-1];t[h]=[e,i,s]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,s,a=e[0],c=e[1],l=e[2],r=0;if(a.some((function(n){return 0!==t[n]}))){for(i in c)o.o(c,i)&&(o.m[i]=c[i]);if(l)var h=l(o)}for(n&&n(e);r<a.length;r++)s=a[r],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(h)},e=self["webpackChunkchess_notepad"]=self["webpackChunkchess_notepad"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(3340)}));e=o.O(e)})();
//# sourceMappingURL=app.33c4825b.js.map