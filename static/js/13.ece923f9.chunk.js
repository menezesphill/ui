(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{898:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return l}));var c=n(2),r=n.n(c),a=n(5),i=n(94),o=n.n(i),s=n(81),u=function(e,t){return new(new o.a(e).eth.Contract)(s,t)},j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("getting allowance"),e.next=4,t.methods.allowance(c,n.options.address).call();case 4:return a=e.sent,console.log("ALLOWANCE"),console.log(t.options.address),console.log(a),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return","0");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,c){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(t,n),e.prev=1,console.log("getting token bal"),e.next=5,a.methods.balanceOf(c).call();case 5:return i=e.sent,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return","0");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n,c){return e.apply(this,arguments)}}()},901:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return m}));var c=n(2),r=n.n(c),a=n(5),i=n(16),o=n(0),s=n(8),u=n.n(s),j=n(51),l=n(246),b=n(39),d=n(898),O=n(20),f=n(171),p=function(){var e=Object(f.a)().slowRefresh,t=Object(o.useState)(),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(l,Object(O.d)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,s(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},m=function(e){var t=Object(o.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(j.j)(),b=l.account,O=l.ethereum,p=Object(f.a)().slowRefresh;return Object(o.useEffect)((function(){b&&O&&function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.c)(O,e,"0x000000000000000000000000000000000000dEaD");case 2:n=t.sent,s(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[b,O,e,p]),c};t.a=function(e){var t=Object(o.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(j.j)(),b=l.account,O=l.ethereum,p=Object(f.a)().fastRefresh;return Object(o.useEffect)((function(){b&&O&&function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.c)(O,e,b);case 2:n=t.sent,s(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[b,O,e,p]),c}},902:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return j}));var c=n(909);c.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});var r=new c.a(4),a=new c.a(10512e3),i=0,o="https://exchange.pancakeswap.finance",s="".concat(o,"/#/add"),u=("".concat(o,"/#/pool"),50),j=1},945:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return we}));var c,r,a,i,o,s,u,j,l,b,d,O,f,p,m,x=n(11),h=n(0),g=n(3),v=n(9),w=n(36),k=n(137),S=n(2),T=n.n(S),A=n(5),E=n(16),N=n(51),y=n(258),z=n(19),C=n(8),I=n.n(C),D=n(53),Q=n(20),R=n(101),U=n(247),K=n(171),L=function(){var e=Object(h.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(N.j)().account,a=Object(K.a)().fastRefresh;return Object(h.useEffect)((function(){r&&function(){var e=Object(A.a)(T.a.mark((function e(){var t,n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=U.b.map((function(e){return{address:Object(Q.h)(),name:"pendingstakd",params:[e.pid,r]}})),e.next=3,Object(D.a)(R,t);case 3:n=e.sent,a=U.b.map((function(e,t){return Object(z.a)(Object(z.a)({},e),{},{balance:new I.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},H=n(244),F=function(){var e=Object(h.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(N.j)().account,a=Object(K.a)().fastRefresh;return Object(h.useEffect)((function(){r&&function(){var e=Object(A.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=U.b.map((function(e){return{address:Object(Q.h)(),name:"pendingstakd",params:[e.pid,r]}})),e.next=3,Object(D.a)(R,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},B=n(64),P=n(414),W=n(1),V=function(e){var t=e.value,n=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,a=e.lineHeight,i=void 0===a?"1":a,o=e.prefix,s=void 0===o?"":o,u=e.bold,j=void 0===u||u,l=e.color,b=void 0===l?"text":l,d=Object(P.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),O=d.countUp,f=d.update,p=Object(h.useRef)(f);return Object(h.useEffect)((function(){p.current(t)}),[t,p]),Object(W.jsxs)(v.U,{bold:j,fontSize:r,style:{lineHeight:i},color:b,children:[s,O]})},M=function(e){return Object(W.jsx)(V,Object(z.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},G=g.e.div(c||(c=Object(x.a)(["\n  margin-bottom: 24px;\n}\n"]))),Y=function(){var e=Object(w.a)(),t=Object(N.j)().account,n=F().reduce((function(e,t){return e+new I.a(t).div(new I.a(10).pow(18)).toNumber()}),0),c=new I.a(n).multipliedBy(Object(B.i)()).toNumber();return t?Object(W.jsxs)(G,{children:[Object(W.jsx)(V,{value:n,lineHeight:"1.5"}),Object(W.jsx)(M,{value:c})]}):Object(W.jsx)(v.U,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},_=n(901),q=n(72),J=function(){var e=Object(w.a)(),t=Object(_.a)(Object(Q.d)()),n=new C.BigNumber(Object(q.a)(t)).multipliedBy(Object(B.i)()).toNumber();return Object(N.j)().account?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(V,{value:Object(q.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),Object(W.jsx)(M,{value:n})]}):Object(W.jsx)(v.U,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},X=Object(g.e)(v.m)(r||(r=Object(x.a)(["\n  background-image: url('/images/cake-bg.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-size: 35%;\n  min-height: 376px;\n"]))),Z=g.e.div(a||(a=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),$=g.e.img(i||(i=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),ee=g.e.div(o||(o=Object(x.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),te=g.e.div(s||(s=Object(x.a)(["\n  margin-top: 24px;\n"]))),ne=function(){var e=Object(h.useState)(!1),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(N.j)().account,a=Object(w.a)(),i=L().filter((function(e){return e.balance.toNumber()>0})),o=Object(y.a)(i.map((function(e){return e.pid}))).onReward,s=Object(h.useCallback)(Object(A.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,o();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[o]);return Object(W.jsx)(X,{style:{textAlign:"center"},children:Object(W.jsxs)(v.n,{children:[Object(W.jsx)(v.A,{size:"xl",mb:"24px",children:a(542,"Farms & Staking")}),Object(W.jsx)($,{src:"/images/Farm3.png",alt:"cake logo",width:64,height:64}),Object(W.jsxs)(Z,{children:[Object(W.jsxs)(ee,{children:[a(544,"STAKD to Harvest"),":"]}),Object(W.jsx)(Y,{})]}),Object(W.jsxs)(Z,{children:[Object(W.jsxs)(ee,{children:[a(546,"STAKD in Wallet"),":"]}),Object(W.jsx)(J,{})]}),Object(W.jsx)(te,{children:r?Object(W.jsx)(v.i,{id:"harvest-all",disabled:i.length<=0||n,onClick:s,fullWidth:!0,children:n?a(548,"Collecting STAKD"):a(532,"Harvest all (".concat(i.length,")"))}):Object(W.jsx)(H.a,{fullWidth:!0})})]})})},ce=Object(g.e)(v.m)(u||(u=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),re=g.e.div(j||(j=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=function(){var e=Object(w.a)(),t=Object(_.c)(),n=Object(_.b)(Object(Q.d)()),c=t?Object(q.a)(t)-Object(q.a)(n):0;return Object(W.jsx)(ce,{children:Object(W.jsxs)(v.n,{children:[Object(W.jsx)(v.A,{size:"xl",mb:"24px",children:e(534,"STAKD Stats")}),Object(W.jsxs)(re,{children:[Object(W.jsx)(v.U,{fontSize:"14px",children:e(536,"Total STAKD Supply")}),c&&Object(W.jsx)(V,{fontSize:"14px",value:c})]}),Object(W.jsxs)(re,{children:[Object(W.jsx)(v.U,{fontSize:"14px",children:e(538,"Total STAKD Burned")}),Object(W.jsx)(V,{fontSize:"14px",value:Object(q.a)(n)})]}),Object(W.jsxs)(re,{children:[Object(W.jsx)(v.U,{fontSize:"14px",children:e(540,"New STAKD/block")}),Object(W.jsx)(V,{fontSize:"14px",decimals:0,value:4})]})]})})},ie=n(57),oe=n(32),se=n(902),ue=Object(g.e)(v.m)(l||(l=Object(x.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),je=Object(g.e)(v.A).attrs({size:"xl"})(b||(b=Object(x.a)(["\n  line-height: 44px;\n"]))),le=function(){Object(w.a)();var e=Object(B.d)(),t=Object(B.h)(),n=Object(h.useRef)(Number.MIN_VALUE);Object(h.useCallback)((function(c){var r,a=new I.a((null===(r=e.find((function(e){return e.pid===se.d})))||void 0===r?void 0:r.tokenPriceVsQuote)||0);c.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var c=se.c.times(e.poolWeight),r=c.times(se.b),i=a.times(r).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===oe.b.BUSD)i=a.times(r).div(e.lpTotalInQuoteToken).times(t);else if(e.quoteTokenSymbol===oe.b.CAKE)i=r.div(e.lpTotalInQuoteToken);else if(e.dual){var o=e&&a.times(c).times(se.b).div(e.lpTotalInQuoteToken),s=e.tokenPriceVsQuote&&new I.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(se.b).div(e.lpTotalInQuoteToken);i=o&&s&&o.plus(s)}return n.current<i.toNumber()&&(n.current=i.toNumber()),i}))}),[t,e]);return Object(W.jsx)(ue,{children:Object(W.jsxs)(v.n,{children:[Object(W.jsx)(v.A,{color:"contrast",size:"lg",children:"Earn up to"}),Object(W.jsx)(je,{color:"#7645d9",children:"1,500,000 STAKD"}),Object(W.jsxs)(v.z,{justifyContent:"space-between",children:[Object(W.jsx)(v.A,{color:"contrast",size:"lg",children:"in Farms"}),Object(W.jsx)(ie.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apy-cta",children:Object(W.jsx)(v.b,{mt:30,color:"primary"})})]})]})})},be=n(48),de=n(159),Oe=n.n(de),fe=n(60),pe=Object(g.e)(v.m)(d||(d=Object(x.a)(["\n  background: linear-gradient(#53dee9, #7645d9);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),me=Object(g.e)(v.A).attrs({size:"xl"})(O||(O=Object(x.a)(["\n  line-height: 44px;\n"]))),xe=function(){var e=fe.a.filter((function(e){return!e.isFinished&&!e.tokenName.includes("CAKE")})),t=Oe()(e,["sortOrder","pid"],["desc","desc"]).slice(0,3);["CAKE"].concat(Object(be.a)(t.map((function(e){return e.tokenName})))).join(", ");return Object(W.jsx)(pe,{children:Object(W.jsxs)(v.n,{children:[Object(W.jsx)(v.A,{color:"contrast",size:"lg",children:"Earn"}),Object(W.jsx)(me,{color:"invertedContrast",children:"STAKD"}),Object(W.jsxs)(v.z,{justifyContent:"space-between",children:[Object(W.jsx)(v.A,{color:"contrast",size:"lg",children:"by Farming or Staking"}),Object(W.jsx)(ie.b,{exact:!0,activeClassName:"active",to:"/farms",id:"pool-cta",children:Object(W.jsx)(v.b,{mt:30,color:"primary"})})]})]})})},he=g.e.div(f||(f=Object(x.a)(["\n  align-items: center;\n  background-image: url('/images/logo.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n"]))),ge=Object(g.e)(v.d)(p||(p=Object(x.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 12;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ve=Object(g.e)(v.d)(m||(m=Object(x.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),we=function(){var e=Object(w.a)();return Object(W.jsxs)(k.a,{children:[Object(W.jsx)(he,{children:Object(W.jsx)(v.U,{children:e(578,"STAKD.FINANCE IS A POWERFUL DEFI ECOSYSTEM ON BINANCE SMART CHAIN THAT WANTS TO REVOLUTIONIZE THE GROWING BSC SECTOR BY PROVIDING ALL IN ONE SOLUTION FOR EVERYONE.")})}),Object(W.jsxs)("div",{children:[Object(W.jsx)(ge,{children:Object(W.jsx)(ne,{})}),Object(W.jsxs)(ve,{children:[Object(W.jsx)(le,{}),Object(W.jsx)(xe,{}),Object(W.jsx)(ae,{})]}),Object(W.jsx)(ge,{})]})]})}}}]);