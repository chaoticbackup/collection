(()=>{"use strict";var e,t,n,a,r={2195:(e,t,n)=>{n.d(t,{$U:()=>d,dR:()=>f,At:()=>E,I1:()=>g,U9:()=>x,W_:()=>m,a3:()=>l,gb:()=>w,_t:()=>b,WC:()=>u,VG:()=>s,uW:()=>A,uq:()=>v,QZ:()=>B,Fo:()=>p,Ky:()=>y,kp:()=>i});var a=n(7294),r=n(7768);function i(e){var t="";return e.data.unique&&(t+="Unique, "),e.data.loyal&&(t+="Loyal","M'arrillian"==e.data.tribe&&(t+=" - M'arrillians or Minions"),"1"!=e.data.loyal&&(t+=" - "+e.data.loyal)),e.data.legendary&&(t=t?"Legendary, "+t:"Legendary"),t=t.replace(/,\s+$/,""),a.createElement("span",{style:{fontWeight:"Bold"}},t,t&&a.createElement("br",null))}function l(e){var t=e.initiative,n=null;return["Danian","Generic","Mipedian","OverWorld","UnderWorld","M'arrillian"].indexOf(t)>-1?n=a.createElement("img",{className:"icon16",style:{verticalAlign:"middle"},src:("/public/img/icons/tribes/"+t+".png").toLowerCase()}):["courage","power","speed","wisdom"].indexOf(t.toLowerCase())>-1?n=a.createElement("img",{className:"icon16",style:{verticalAlign:"middle"},src:("/public/img/icons/disciplines/"+t+".png").toLowerCase()}):["fire","air","earth","water"].indexOf(t.toLowerCase())>-1?n=a.createElement("img",{className:"icon16",style:{verticalAlign:"middle"},src:("/public/img/icons/elements/"+t+".png").toLowerCase()}):"mugic counter"==t.toLowerCase()&&(n=a.createElement("img",{className:"icon16",style:{verticalAlign:"middle"},src:"/public/img/icons/mugic/generic.png".toLowerCase()})),a.createElement("span",null,!e.notitle&&"Initiative: ",n," ",t)}var c=n(5934),o=n.n(c);function s(e){var t=e.name.split(",");return a.createElement("span",{className:"name"},a.createElement("span",{className:"bigger"},t[0]),t.length>1&&a.createElement(a.Fragment,null,a.createElement("span",{style:{opacity:"0"}},","),a.createElement("span",{className:"subname"},t[1])))}function u(e){var t=("/public/img/icons/mugic/"+((e.tribe||"generic")+(null!=e.amount?"_".concat(e.amount):""))+".png").toLowerCase();return a.createElement("img",{className:e.size||"icon20",src:t,alt:"MC"})}function m(e){return e.value?a.createElement("img",{className:e.size||"icon20",src:("/public/img/icons/elements/"+e.element+".png").toLowerCase()}):a.createElement("img",{className:e.size||"icon20",src:("/public/img/icons/elements/"+e.element+"-inactive.png").toLowerCase()})}function p(e){return a.createElement("img",{className:e.size||"icon16",src:("/public/img/icons/tribes/"+e.tribe+".png").toLowerCase()})}function g(e){return a.createElement("img",{className:e.size||"icon16",src:("/public/img/icons/disciplines/"+e.discipline+".png").toLowerCase()})}function d(e){var t=[{regex:/([0-9x]*){{mc}}/i,fn:function(t,n){return n.length>1&&""!=n[1]?a.createElement(u,{key:t,tribe:e.tribe,amount:n[1].toLowerCase(),size:"icon14"}):a.createElement(u,{key:t,tribe:e.tribe,size:"icon14"})}},{regex:new RegExp(/(\b((fire)|(air)|(earth)|(water)))/i),fn:function(e,t){return a.createElement("span",{key:e},a.createElement(m,{element:t[0].replace(/\b/,""),value:"true",size:"icon14"}),t[0])}},{regex:/(courage)|(power)|(wisdom)|(speed)/i,fn:function(e,t){return a.createElement("span",{key:e},a.createElement(g,{discipline:t[0],size:"icon14"}),t[0])}},{regex:/(danian)|(generic)|(mipedian)|(overworld)|(underworld)|(m'arrillian)/i,fn:function(e,t){return a.createElement("span",{key:e},a.createElement(p,{tribe:t[0],size:"icon14"}),t[0])}}];return a.createElement("div",{className:e.type||"ability"},o()(t)(e.ability))}var h=n(1637);function f(e){var t="attack"+(e.bp&&e.bp>=0?"_"+e.bp:"");return a.createElement("img",{className:e.size||"icon16",src:"/public/img/icons/attack/".concat(t,".png")})}function E(e){return a.createElement("img",{className:e.size||"icon16",src:"/public/img/icons/battlegear.png"})}function b(e){return a.createElement("img",{className:e.size||"icon16",src:"/public/img/icons/location.png"})}function v(e){var t=e.set,n=e.rarity;return a.createElement("span",null,"PE1"!==t&&a.createElement("img",{className:e.size||"icon16",style:{verticalAlign:"middle"},src:("/public/img/icons/set/"+t+"/"+n+".png").toLowerCase()}),!e.notext&&a.createElement(a.Fragment,null,h.Z.sets[e.set]," | ",e.rarity))}function y(e){return a.createElement("p",{style:r.Z.p},"This page is currently under construction")}function A(e){return a.createElement("p",{style:r.Z.p},"404 route not found - ",r.Z.code(e.location.pathname))}function w(e){return a.createElement("span",null,"Loading...")}function x(e){return a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank"},a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),a.createElement("input",{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----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-----END PKCS7-----"}),a.createElement("a",{href:"https://www.paypal.com/cgi-bin/webscr"},a.createElement("input",{type:"image",src:"/public/img/btn_donate_SM.gif",border:"0",name:"submit",alt:"PayPal Donate"})))}function B(e){return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"magnifying-glass"},a.createElement("g",{fillRule:"evenodd"},a.createElement("path",{d:"M21.747 20.524l-4.872-4.871a.864.864 0 1 0-1.222 1.222l4.871 4.872a.864.864 0 1 0 1.223-1.223z"}),a.createElement("path",{d:"M3.848 10.763a6.915 6.915 0 0 1 6.915-6.915 6.915 6.915 0 0 1 6.915 6.915 6.915 6.915 0 0 1-6.915 6.915 6.915 6.915 0 0 1-6.915-6.915zm-1.729 0a8.643 8.643 0 0 0 8.644 8.644 8.643 8.643 0 0 0 8.644-8.644 8.643 8.643 0 0 0-8.644-8.644 8.643 8.643 0 0 0-8.644 8.644z"})))}},1637:(e,t,n)=>{n.d(t,{Z:()=>M});var a,r,i,l,c,o,s,u,m=n(7757),p=n.n(m),g=n(8926),d=n.n(g),h=n(1165),f=n.n(h),E=n(4575),b=n.n(E),v=n(3913),y=n.n(v),A=n(3124),w=n.n(A),x=(n(7268),n(7147),n(3050)),B=n.n(x),N=n(2188),k=new(n(9585).Z),C=(a=function(){function e(t,n){var a=this;b()(this,e),f()(this,"building",r,this),this.purgeDB=function(){a.db.deleteDatabase()},this.api=t,this.format=n,this.setupDB(n)}var t,n;return y()(e,[{key:"getSpreadsheetData",value:(n=d()(p().mark((function e(t,n,a){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.api.getSpreadsheet(t,(function(e){a(e.map((function(e){var t={};delete e.content;for(var a=0,r=Object.keys(e);a<r.length;a++){var i=r[a];t[i]=e[i].$t}return t.gsx$type=n,t})))}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t,a){return n.apply(this,arguments)})},{key:"setupType",value:(t=d()(p().mark((function e(t,n){var a,r,i,l=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.building.hasOwnProperty(t)){e.next=18;break}if(a=t.charAt(0).toUpperCase()+t.slice(1),"built"!=this.building[t].get()){e.next=5;break}return this.getSpreadsheetData(this.api.urls[a][this.format],a,(function(e){var n=k.get("".concat(l.format,"_").concat(t));n?new Date(e[0].updated)>new Date(n)&&(l[t].clear(),l[t].insert(e),k.set("".concat(l.format,"_").concat(t),e[0].updated,{path:"/"})):k.set("".concat(l.format,"_").concat(t),e[0].updated,{path:"/"})})),e.abrupt("return",n());case 5:if("building"!=this.building[t].get()){e.next=8;break}return r=(0,N.N7)(this.building[t],(function(e){r(),n()})),e.abrupt("return",r);case 8:if("setup"!=this.building[t].get()){e.next=16;break}if(this.building[t].set("building"),0!=this[t].data.length){e.next=14;break}return e.abrupt("return",this.getSpreadsheetData(this.api.urls[a][this.format],a,(function(e){return l[t].insert(e),l.building[t].set("built"),n()})));case 14:return this.building[t].set("built"),e.abrupt("return",n());case 16:e.next=21;break;case 18:return this.building[t]=N.LO.box("wait"),i=(0,N.N7)(this.building[t],(function(){return i(),l.setupType(t,n)})),e.abrupt("return",i);case 21:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"setupDB",value:function(e){var t=new(B())("chaotic_".concat(e,".db"),{autosave:!0,autoload:!0,autoloadCallback:function(){var e=this;["attacks","battlegear","creatures","locations","mugic"].forEach((function(n){var a=t.getCollection(n);null===a||0===a.data.length?(e[n]=t.addCollection(n),e.building[n]?e.building[n].set("setup"):e.building[n]=N.LO.box("setup")):(e[n]=a,e.building[n]?e.building[n].set("built"):e.building[n]=N.LO.box("built"))}))}.bind(this),autosaveInterval:4e3,persistenceMethod:"localStorage"});this.db=t}}]),e}(),r=w()(a.prototype,"building",[N.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),w()(a.prototype,"setupType",[N.aD],Object.getOwnPropertyDescriptor(a.prototype,"setupType"),a.prototype),w()(a.prototype,"setupDB",[N.aD],Object.getOwnPropertyDescriptor(a.prototype,"setupDB"),a.prototype),a);const M=(u=s=function(){function e(){b()(this,e),f()(this,"portal",l,this),f()(this,"cards",c,this),f()(this,"urls",o,this),this.instance=null,this.setupDB()}var t,a,r;return y()(e,[{key:"path",value:function(t){return e.path(t)}},{key:"base_image",get:function(){return"https://drive.google.com/uc?id="}},{key:"thumb_missing",get:function(){return"1JYjPzkv74IhzlHTyVh2niTDyui73HSfp"}},{key:"card_back",get:function(){return"https://i.imgur.com/xbeDBRJ.png"}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}},{key:"path",value:function(t){return e.base_url+t+e.data_format}}]),y()(e,[{key:"getSpreadsheet",value:(r=d()(p().mark((function e(t,n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(t).then((function(e){return e.json()})).then((function(e){return n(e.feed.entry)})).catch((function(e){return console.error("parsing failed",e),n(null)}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)})},{key:"setupDB",value:function(){try{var t={};n(3370).forEach((function(n){t[n.gsx$type.$t]||(t[n.gsx$type.$t]={}),t[n.gsx$type.$t][n.gsx$subtype.$t]=e.path(n.gsx$url.$t)})),this.urls=t,this.portal=new C(this,"portal"),this.cards=new C(this,"cards")}catch(e){console.error("setting up database failed",e)}}},{key:"LoadDB",value:(a=d()(p().mark((function e(t){var n=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){null!==n.urls&&null!==n.portal&&null!==n.cards?n.buildCollection(t).then((function(){e()})).catch((function(){})):e()})));case 1:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"buildCollection",value:(t=d()(p().mark((function e(t){var n=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return new Promise((function(t,a){return"cards"in e?n.cards.setupType(e.cards,t):"portal"in e?n.portal.setupType(e.portal,t):(console.error("cards or portal"),a())}))})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"cardImage",value:function(e){return e.gsx$ic&&""!==e.gsx$ic?e.gsx$ic:e.gsx$image&&""!==e.gsx$image?this.base_image+e.gsx$image:this.card_back}},{key:"purgeDB",value:function(){this.cards.purgeDB(),this.portal.purgeDB(),window.location.reload()}},{key:"tribes",get:function(){return["Danian","Generic","Mipedian","M'arrillian","OverWorld","UnderWorld"]}},{key:"sets",get:function(){return{DOP:"Dawn of Perim",ZOTH:"Zenith of the Hive",SS:"Silent Sands",MI:"Beyond the Doors",ROTO:"Rise of the Oligarch",TOTT:"Turn of the Tide",FUN:"Forged Unity",AU:"Alliance Unraveled",FAS:"Fire and Stone",OP1:"Organized Play 1",PE1:"Premium Edition 1",SAS:"Storm and Sea",EE:"Elemental Emperors",BR:"Beyond Rare",LR:"League Rewards",PROMO:"Promotional",PROTO:"Prototype"}}}]),e}(),s.base_url="https://spreadsheets.google.com/feeds/list/",s.data_format="/od6/public/values?alt=json",i=u,l=w()(i.prototype,"portal",[N.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=w()(i.prototype,"cards",[N.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=w()(i.prototype,"urls",[N.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),i).getInstance()},8953:(e,t,n)=>{var a,r=n(7294),i=n(3935),l=n(3727),c=n(5977),o=n(2168),s=n(1637),u=n(2195),m=n(4575),p=n.n(m),g=n(3913),d=n.n(g),h=n(2205),f=n.n(h),E=n(8585),b=n.n(E),v=n(9754),y=n.n(v),A=n(798);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var r=y()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return b()(this,n)}}var x=(0,A.f3)((function(e,t,n){return t}))(a=(0,A.Pi)(a=function(e){f()(n,e);var t=w(n);function n(){return p()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("span",null,"This page is not yet available"))}}]),n}(r.Component))||a)||a,B=(0,o.ZP)((function(){return Promise.all([n.e(736),n.e(150)]).then(n.bind(n,6550))}),{fallback:r.createElement(u.gb,null)}),N=(0,o.ZP)((function(){return n.e(767).then(n.bind(n,8640))}),{fallback:r.createElement(u.gb,null)}),k=(0,o.ZP)((function(){return Promise.all([n.e(736),n.e(181)]).then(n.bind(n,159))}),{fallback:r.createElement(u.gb,null)}),C=(0,o.ZP)((function(){return Promise.all([n.e(736),n.e(171)]).then(n.bind(n,7510))}),{fallback:r.createElement(u.gb,null)});function M(){return r.createElement(c.rs,null,r.createElement(c.AW,{path:"/beta/collection",component:C}),r.createElement(c.AW,{path:"/beta"},(function(e){var t=e.location;return r.createElement(c.l_,{to:t.pathname.replace("/beta","")})})),r.createElement(c.AW,{component:Q}))}function Q(){return r.createElement(c.rs,null,r.createElement(c.AW,{exact:!0,path:"/",component:N}),r.createElement(c.AW,{path:"/PageNotFound",component:u.uW}),r.createElement(c.AW,{path:"/UnderConstruction",component:u.Ky}),r.createElement(c.AW,{path:"/EnterTheCode",component:B}),r.createElement(c.AW,{path:"/create",component:x}),r.createElement(c.AW,{path:"/collection",component:C}),r.createElement(c.AW,{path:"/portal",component:k}))}function D(e){var t="ENG",n=r.createElement(M,null);return r.createElement(r.Fragment,null,r.createElement("div",{className:"fix-pgBkgrnd-repeat-x"},r.createElement("div",{className:"fix-img-bkgrnd fix-img-bkgrnd_05"})),r.createElement("div",{className:"pgBkgrnd-repeat-x"},r.createElement("div",{className:"img-bkgrnd"},r.createElement("div",{className:"content-wrap"},r.createElement("div",{className:"legacy legacy-header"},r.createElement("div",{className:"header"},r.createElement("div",{id:"nav"},r.createElement("div",{className:"zero-clear-line headerSpriteNav-wrap"},r.createElement("ul",{id:"unity-sprite",className:t},r.createElement("li",{id:"unity-nav1",className:t}),r.createElement("li",{id:"unity-nav2",className:t},r.createElement(l.rU,{to:"/collection/"},r.createElement("span",null,"Collect"))),r.createElement("li",{id:"unity-nav3",className:t},r.createElement("a",{href:"/create/"},r.createElement("span",null,"Build"))),r.createElement("li",{id:"unity-nav4",className:t},r.createElement("a",{href:"http://chaoticbackup.forumotion.com/f16-trading-buying-and-selling"},r.createElement("span",null,"Trade"))),r.createElement("li",{id:"unity-nav5",className:t},r.createElement(l.rU,{to:"/"},r.createElement("span",null,"Home"))),r.createElement("li",{id:"unity-nav6",className:t},r.createElement("a",{href:"http://chaoticbackup.forumotion.com"},r.createElement("span",null,"Forums"))),r.createElement("li",{id:"unity-nav7",className:t},r.createElement(l.rU,{to:"/portal/"},r.createElement("span",null,"Portal"))),r.createElement("li",{id:"unity-nav8",className:t},r.createElement("a",{href:"https://chaoticrecode.com"},r.createElement("span",null,"Play"))),r.createElement("li",{id:"unity-nav9",className:t})),r.createElement("ul",{id:"unityETC-sprite",className:t},r.createElement("li",{id:"unity-nav10",className:t},r.createElement(l.rU,{to:"/EnterTheCode"},r.createElement("span",null,"Enter the Code")))))))),r.createElement("div",{className:"banner-ad-top"}),r.createElement("div",{className:"legacy content"},r.createElement("div",{className:"left-column"},r.createElement("div",{className:"full-width clear-line",style:{marginBottom:"5px"}})),r.createElement("div",{className:"full-column"},r.createElement("div",{className:"pods-wrap pad5px-btm"},r.createElement("div",{className:"clear-line full-width"},r.createElement("div",{className:"adPod-top-wrap"},r.createElement("div",{className:"videoAdPod-topleft"},r.createElement("div",{className:"videoAdPod-topLeft-repeat-x"})),r.createElement("div",{className:"videoAdPod-topright"},r.createElement("div",{className:"videoAdPod-topRight-repeat-x"})))),r.createElement("div",{className:"content-area-repeat-xy"},r.createElement("div",{className:"content-area-top-repeat-x"},r.createElement("div",{className:"content-area-left-repeat-y"},r.createElement("div",{className:"content-area-right-repeat-y"},r.createElement("div",{className:"content-area-inner-space"},r.createElement("div",{id:"player"},n)))))),r.createElement("div",{className:"content-btm-wrap"},r.createElement("div",{className:"content-area-btm-left"},r.createElement("div",{className:"content-left-btm-repeat-x"})),r.createElement("div",{className:"content-area-btm-right"},r.createElement("div",{className:"content-right-btm-repeat-x"}))))),r.createElement("div",{className:"right-column"},r.createElement("div",{className:"full-width clear-line",style:{marginBottom:"5px"}}))),r.createElement("div",{className:"banner-ad-bottom"}),r.createElement("div",{className:"legacy legacy-footer"},r.createElement("div",{className:"footer-wrap"},r.createElement("div",{className:"footer-repeat-x"},r.createElement("div",{className:"footer-left"},r.createElement("div",{className:"footer-right"},r.createElement("div",{className:"footer-text"},r.createElement("div",{className:"footer-search"},r.createElement("br",null),r.createElement("br",null),r.createElement(u.U9,null)),r.createElement("div",{className:"footer-nav"},r.createElement("div",{className:"copyright"},"©2008 Chaotic USA Entertainment Group, Inc.",r.createElement("br",null),"U.S. Pat 5810666 and 5954332 and other pending patent applications. All Rights Reserved.")),r.createElement("div",{className:"footer-language"},r.createElement("a",{href:"#",onClick:function(e){e.stopPropagation(),e.preventDefault(),s.Z.purgeDB()},className:"page-options",title:"Change Language"},r.createElement("img",{src:"/public/img/flag_usa_.gif",alt:"English (Change Language)",width:"40",height:"27"}),r.createElement("br",null),"English (Change Language)"))))))))))))}(0,i.render)(r.createElement(l.VK,null,r.createElement(D,{path:"/*",href:"/"})),document.getElementById("root"))},7768:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(5403),r=Object.create(a.Z);r.root={backgroundColor:"#F0F0F0",fontFamily:"helvetica neue, helvetica, sans-serif",fontWeight:"300",fontSize:"16px",letterSpacing:"0.025em",padding:"3vh 0 12vh 0",width:"500px",maxWidth:"calc(100vw - 40px)",position:"relative",left:"50vw",WebkitTransform:"translate(-50%, 0)",MozTransform:"translate(-50%, 0)",msTransform:"translate(-50%, 0)",OTransform:"translate(-50%, 0)",transform:"translate(-50%, 0)",WebkitTextSizeAdjust:"none",MozTextSizeAdjust:"none",msTextSizeAdjust:"none",textSizeAdjust:"none"},r.title={fontSize:"20px",marginBottom:"0.5vh"},r.repoLink={fontSize:"14px"},r.mapMenu={margin:"3vh 0"},r.creditLine={color:"#A0A0A0",fontSize:"14px",marginTop:"50px"};const i=r},5403:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7154),r=n.n(a),i=n(7294),l={normal:{borderBottom:"1px dotted rgb(0, 168, 0)"},hover:{borderBottom:"1px solid rgb(0, 168, 0)",color:"black"},active:"hover",touchActive:{borderBottom:"1px dashed rgb(0, 168, 0)",color:"black"},focusFromTab:{outline:"2px solid rgb(0, 152, 0)",outlineOffset:"2px",color:"black"},touchActiveTapOnly:!0},c={};Object.keys(l).forEach((function(e){"touchActiveTapOnly"!==e&&(c["onParent".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1))]=l[e])}));const o={link:l,childLink:c,p:{margin:"3vh 0",lineHeight:"1.4"},code:function(e){return i.createElement("code",{style:{fontFamily:"monospace",fontSize:"15px",paddingLeft:"2px"}},e)},li:function(e,t){return i.createElement("li",r()({style:{paddingLeft:"18px",textIndent:"-15px",margin:"0.5vh 0",listStyle:"none"}},t),i.createElement("span",{style:{paddingRight:"7px"}},"–"),e)}}},3370:e=>{e.exports=JSON.parse('[{"gsx$type":{"$t":"Creatures"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"1fUFYhG1NLLkSTzrdbevm6ZMKNP6xLiKUZvM1sY10pVI"}},{"gsx$type":{"$t":"Creatures"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1eGQsy2kYk7HfnQetsjobMqank4bg6iWOOaSYykg3Yec"}},{"gsx$type":{"$t":"Mugic"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"1rOMFKnWaz6XmhD43YFpcemWGzEok9IgtKCoiPMwA35s"}},{"gsx$type":{"$t":"Mugic"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1tEuwPGixJH2A03YtYL6Ar-MSFvtfrlaveT98GwJhw1g"}},{"gsx$type":{"$t":"Attacks"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"1yXFijC2hN1vybU3ejdINYoTOTG62qCkpPLPsiYUEEyo"}},{"gsx$type":{"$t":"Attacks"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1KUk5J-3ZeMlEBXOfDb2h4GUUJK_0_yOq0EUDitQgNa8"}},{"gsx$type":{"$t":"Battlegear"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"1UUEPAEHZwmH52AJj2Jtskf6d4z5XIFEBb3HT-FTAcgs"}},{"gsx$type":{"$t":"Battlegear"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1S5AVw-E_sFO257uzajauP31bOI0LPmrbTcUzSpa2i60"}},{"gsx$type":{"$t":"Locations"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"15QPS08iq6pkyMFsYuDsKIXX8LQmQ8MUoJeeNtjU54Xo"}},{"gsx$type":{"$t":"Locations"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1U07n2keHNxL-6y5zUcHlb220zT9A_MrVEansOAMQFCA"}}]')}},i={};function l(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return r[e].call(t.exports,t,t.exports,l),t.exports}l.m=r,l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>e+".js",l.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+".css"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="chaoticbackup:",l.l=(n,a,r)=>{if(e[n])e[n].push(a);else{var i,c;if(void 0!==r)for(var o=document.getElementsByTagName("script"),s=0;s<o.length;s++){var u=o[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[a];var m=(t,a)=>{i.onerror=i.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(a))),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/build/",n=e=>new Promise(((t,n)=>{var a=l.miniCssF(e),r=l.p+a;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=(l=n[a]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(r===e||r===t))return l}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){var l;if((r=(l=i[a]).getAttribute("data-href"))===e||r===t)return l}})(a,r))return t();((e,t,n,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onload=n,r.onerror=function(n){var i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=i,r.parentNode.removeChild(r),a(l)},r.href=t,document.getElementsByTagName("head")[0].appendChild(r)})(e,r,t,n)})),a={179:0},l.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{150:1,171:1,181:1,767:1}[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={179:0},t=[[6981,736],[8953,736]];l.f.j=(t,n)=>{var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(((n,r)=>{a=e[t]=[n,r]}));n.push(a[2]=r);var i=l.p+l.u(t),c=new Error;l.l(i,(n=>{if(l.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,a[1](c)}}),"chunk-"+t)}};var n=()=>{};function a(){for(var n,a=0;a<t.length;a++){for(var r=t[a],i=!0,c=1;c<r.length;c++){var o=r[c];0!==e[o]&&(i=!1)}i&&(t.splice(a--,1),n=l(l.s=r[0]))}return 0===t.length&&(l.x(),l.x=()=>{}),n}l.x=()=>{l.x=()=>{},i=i.slice();for(var e=0;e<i.length;e++)r(i[e]);return(n=a)()};var r=a=>{for(var r,i,[o,s,u,m]=a,p=0,g=[];p<o.length;p++)i=o[p],l.o(e,i)&&e[i]&&g.push(e[i][0]),e[i]=0;for(r in s)l.o(s,r)&&(l.m[r]=s[r]);for(u&&u(l),c(a);g.length;)g.shift()();return m&&t.push.apply(t,m),n()},i=self.webpackChunkchaoticbackup=self.webpackChunkchaoticbackup||[],c=i.push.bind(i);i.push=r})(),l.x()})();