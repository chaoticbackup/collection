!function(){"use strict";var e,t,n,r,a={2195:function(e,t,n){n.d(t,{$U:function(){return g},dR:function(){return h},At:function(){return E},I1:function(){return d},U9:function(){return x},W_:function(){return m},a3:function(){return c},gb:function(){return w},_t:function(){return b},WC:function(){return u},VG:function(){return s},uW:function(){return A},uq:function(){return v},QZ:function(){return B},Fo:function(){return p},Ky:function(){return y},kp:function(){return i}});var r=n(7294),a=n(7768);function i(e){var t="";return e.data.unique&&(t+="Unique, "),e.data.loyal&&(t+="Loyal","M'arrillian"==e.data.tribe&&(t+=" - M'arrillians or Minions"),"1"!=e.data.loyal&&(t+=" - "+e.data.loyal)),e.data.legendary&&(t=t?"Legendary, "+t:"Legendary"),t=t.replace(/,\s+$/,""),r.createElement("span",{style:{fontWeight:"Bold"}},t,t&&r.createElement("br",null))}function c(e){var t=e.initiative,n=null;return["Danian","Generic","Mipedian","OverWorld","UnderWorld","M'arrillian"].indexOf(t)>-1?n=r.createElement("img",{className:"icon16",style:{verticalAlign:"middle"},src:("/public/img/icons/tribes/"+t+".png").toLowerCase()}):["courage","power","speed","wisdom"].indexOf(t.toLowerCase())>-1?n=r.createElement("img",{className:"icon16",style:{verticalAlign:"middle"},src:("/public/img/icons/disciplines/"+t+".png").toLowerCase()}):["fire","air","earth","water"].indexOf(t.toLowerCase())>-1?n=r.createElement("img",{className:"icon16",style:{verticalAlign:"middle"},src:("/public/img/icons/elements/"+t+".png").toLowerCase()}):"mugic counter"==t.toLowerCase()&&(n=r.createElement("img",{className:"icon16",style:{verticalAlign:"middle"},src:"/public/img/icons/mugic/generic.png".toLowerCase()})),r.createElement("span",null,!e.notitle&&"Initiative: ",n," ",t)}var l=n(5934),o=n.n(l);function s(e){var t=e.name.split(",");return r.createElement("span",{className:"name"},r.createElement("span",{className:"bigger"},t[0]),t.length>1&&r.createElement(r.Fragment,null,r.createElement("span",{style:{opacity:"0"}},","),r.createElement("span",{className:"subname"},t[1])))}function u(e){var t=("/public/img/icons/mugic/"+((e.tribe||"generic")+(null!=e.amount?"_".concat(e.amount):""))+".png").toLowerCase();return r.createElement("img",{className:e.size||"icon20",src:t,alt:"MC"})}function m(e){return e.value?r.createElement("img",{className:e.size||"icon20",src:("/public/img/icons/elements/"+e.element+".png").toLowerCase()}):r.createElement("img",{className:e.size||"icon20",src:("/public/img/icons/elements/"+e.element+"-inactive.png").toLowerCase()})}function p(e){return r.createElement("img",{className:e.size||"icon16",src:("/public/img/icons/tribes/"+e.tribe+".png").toLowerCase()})}function d(e){return r.createElement("img",{className:e.size||"icon16",src:("/public/img/icons/disciplines/"+e.discipline+".png").toLowerCase()})}function g(e){var t=[{regex:/([0-9x]*){{mc}}/i,fn:function(t,n){return n.length>1&&""!=n[1]?r.createElement(u,{key:t,tribe:e.tribe,amount:n[1].toLowerCase(),size:"icon14"}):r.createElement(u,{key:t,tribe:e.tribe,size:"icon14"})}},{regex:new RegExp(/(\b((fire)|(air)|(earth)|(water)))/i),fn:function(e,t){return r.createElement("span",{key:e},r.createElement(m,{element:t[0].replace(/\b/,""),value:"true",size:"icon14"}),t[0])}},{regex:/(courage)|(power)|(wisdom)|(speed)/i,fn:function(e,t){return r.createElement("span",{key:e},r.createElement(d,{discipline:t[0],size:"icon14"}),t[0])}},{regex:/(danian)|(generic)|(mipedian)|(overworld)|(underworld)|(m'arrillian)/i,fn:function(e,t){return r.createElement("span",{key:e},r.createElement(p,{tribe:t[0],size:"icon14"}),t[0])}}];return r.createElement("div",{className:e.type||"ability"},o()(t)(e.ability))}var f=n(1637);function h(e){var t="attack"+(e.bp&&e.bp>=0?"_"+e.bp:"");return r.createElement("img",{className:e.size||"icon16",src:"/public/img/icons/attack/".concat(t,".png")})}function E(e){return r.createElement("img",{className:e.size||"icon16",src:"/public/img/icons/battlegear.png"})}function b(e){return r.createElement("img",{className:e.size||"icon16",src:"/public/img/icons/location.png"})}function v(e){var t=e.set,n=e.rarity;return r.createElement("span",null,"PE1"!==t&&r.createElement("img",{className:e.size||"icon16",style:{verticalAlign:"middle"},src:("/public/img/icons/set/"+t+"/"+n+".png").toLowerCase()}),!e.notext&&r.createElement(r.Fragment,null,f.Z.sets[e.set]," | ",e.rarity))}function y(e){return r.createElement("p",{style:a.Z.p},"This page is currently under construction")}function A(e){return r.createElement("p",{style:a.Z.p},"404 route not found - ",a.Z.code(e.location.pathname))}function w(e){return r.createElement("span",null,"Loading...")}function x(e){return r.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank"},r.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),r.createElement("input",{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----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-----END PKCS7-----"}),r.createElement("a",{href:"https://www.paypal.com/cgi-bin/webscr"},r.createElement("input",{type:"image",src:"/public/img/btn_donate_SM.gif",border:"0",name:"submit",alt:"PayPal Donate"})))}function B(e){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"magnifying-glass"},r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"M21.747 20.524l-4.872-4.871a.864.864 0 1 0-1.222 1.222l4.871 4.872a.864.864 0 1 0 1.223-1.223z"}),r.createElement("path",{d:"M3.848 10.763a6.915 6.915 0 0 1 6.915-6.915 6.915 6.915 0 0 1 6.915 6.915 6.915 6.915 0 0 1-6.915 6.915 6.915 6.915 0 0 1-6.915-6.915zm-1.729 0a8.643 8.643 0 0 0 8.644 8.644 8.643 8.643 0 0 0 8.644-8.644 8.643 8.643 0 0 0-8.644-8.644 8.643 8.643 0 0 0-8.644 8.644z"})))}},1637:function(e,t,n){var r,a,i,c,l,o,s,u,m=n(7757),p=n.n(m),d=n(8926),g=n.n(d),f=n(1165),h=n.n(f),E=n(4575),b=n.n(E),v=n(3913),y=n.n(v),A=n(3124),w=n.n(A),x=(n(7268),n(7147),n(3050)),B=n.n(x),N=n(2188),k=new(n(9585).Z),C=(r=function(){function e(t,n){var r=this;b()(this,e),h()(this,"building",a,this),this.purgeDB=function(){r.db.deleteDatabase()},this.api=t,this.format=n,this.setupDB(n)}var t,n;return y()(e,[{key:"getSpreadsheetData",value:(n=g()(p().mark((function e(t,n,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.api.getSpreadsheet(t,(function(e){r(e.map((function(e){var t={};delete e.content;for(var r=0,a=Object.keys(e);r<a.length;r++){var i=a[r];t[i]=e[i].$t}return t.gsx$type=n,t})))}));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return n.apply(this,arguments)})},{key:"setupType",value:(t=g()(p().mark((function e(t,n){var r,a,i,c=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.building.hasOwnProperty(t)){e.next=18;break}if(r=t.charAt(0).toUpperCase()+t.slice(1),"built"!=this.building[t].get()){e.next=5;break}return this.getSpreadsheetData(this.api.urls[r][this.format],r,(function(e){var n=k.get("".concat(c.format,"_").concat(t));n?new Date(e[0].updated)>new Date(n)&&(c[t].clear(),c[t].insert(e),k.set("".concat(c.format,"_").concat(t),e[0].updated,{path:"/"})):k.set("".concat(c.format,"_").concat(t),e[0].updated,{path:"/"})})),e.abrupt("return",n());case 5:if("building"!=this.building[t].get()){e.next=8;break}return a=(0,N.N7)(this.building[t],(function(e){a(),n()})),e.abrupt("return",a);case 8:if("setup"!=this.building[t].get()){e.next=16;break}if(this.building[t].set("building"),0!=this[t].data.length){e.next=14;break}return e.abrupt("return",this.getSpreadsheetData(this.api.urls[r][this.format],r,(function(e){return c[t].insert(e),c.building[t].set("built"),n()})));case 14:return this.building[t].set("built"),e.abrupt("return",n());case 16:e.next=21;break;case 18:return this.building[t]=N.LO.box("wait"),i=(0,N.N7)(this.building[t],(function(){return i(),c.setupType(t,n)})),e.abrupt("return",i);case 21:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"setupDB",value:function(e){var t=new(B())("chaotic_".concat(e,".db"),{autosave:!0,autoload:!0,autoloadCallback:function(){var e=this;["attacks","battlegear","creatures","locations","mugic"].forEach((function(n){var r=t.getCollection(n);null===r||0===r.data.length?(e[n]=t.addCollection(n),e.building[n]?e.building[n].set("setup"):e.building[n]=N.LO.box("setup")):(e[n]=r,e.building[n]?e.building[n].set("built"):e.building[n]=N.LO.box("built"))}))}.bind(this),autosaveInterval:4e3,persistenceMethod:"localStorage"});this.db=t}}]),e}(),a=w()(r.prototype,"building",[N.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),w()(r.prototype,"setupType",[N.aD],Object.getOwnPropertyDescriptor(r.prototype,"setupType"),r.prototype),w()(r.prototype,"setupDB",[N.aD],Object.getOwnPropertyDescriptor(r.prototype,"setupDB"),r.prototype),r),M=(u=s=function(){function e(){b()(this,e),h()(this,"portal",c,this),h()(this,"cards",l,this),h()(this,"urls",o,this),this.instance=null,this.setupDB()}var t,r,a;return y()(e,[{key:"path",value:function(t){return e.path(t)}},{key:"base_image",get:function(){return"https://drive.google.com/uc?id="}},{key:"thumb_missing",get:function(){return"1JYjPzkv74IhzlHTyVh2niTDyui73HSfp"}},{key:"card_back",get:function(){return"https://i.imgur.com/xbeDBRJ.png"}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}},{key:"path",value:function(t){return e.base_url+t+e.data_format}}]),y()(e,[{key:"getSpreadsheet",value:(a=g()(p().mark((function e(t,n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(t).then((function(e){return e.json()})).then((function(e){return n(e.feed.entry)})).catch((function(e){return console.error("parsing failed",e),n(null)}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)})},{key:"setupDB",value:function(){try{var t={};n(3370).forEach((function(n){t[n.gsx$type.$t]||(t[n.gsx$type.$t]={}),t[n.gsx$type.$t][n.gsx$subtype.$t]=e.path(n.gsx$url.$t)})),this.urls=t,this.portal=new C(this,"portal"),this.cards=new C(this,"cards")}catch(e){console.error("setting up database failed",e)}}},{key:"LoadDB",value:(r=g()(p().mark((function e(t){var n=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){null!==n.urls&&null!==n.portal&&null!==n.cards?n.buildCollection(t).then((function(){e()})).catch((function(){})):e()})));case 1:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"buildCollection",value:(t=g()(p().mark((function e(t){var n=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return new Promise((function(t,r){return"cards"in e?n.cards.setupType(e.cards,t):"portal"in e?n.portal.setupType(e.portal,t):(console.error("cards or portal"),r())}))})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"cardImage",value:function(e){return e.gsx$ic&&""!==e.gsx$ic?e.gsx$ic:e.gsx$image&&""!==e.gsx$image?this.base_image+e.gsx$image:this.card_back}},{key:"purgeDB",value:function(){this.cards.purgeDB(),this.portal.purgeDB(),window.location.reload()}},{key:"tribes",get:function(){return["Danian","Generic","Mipedian","M'arrillian","OverWorld","UnderWorld"]}},{key:"sets",get:function(){return{DOP:"Dawn of Perim",ZOTH:"Zenith of the Hive",SS:"Silent Sands",MI:"Beyond the Doors",ROTO:"Rise of the Oligarch",TOTT:"Turn of the Tide",FUN:"Forged Unity",AU:"Alliance Unraveled",FAS:"Fire and Stone",OP1:"Organized Play 1",PE1:"Premium Edition 1",SAS:"Storm and Sea",EE:"Elemental Emperors",BR:"Beyond Rare",LR:"League Rewards",PROMO:"Promotional",PROTO:"Prototype"}}}]),e}(),s.base_url="https://spreadsheets.google.com/feeds/list/",s.data_format="/od6/public/values?alt=json",i=u,c=w()(i.prototype,"portal",[N.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=w()(i.prototype,"cards",[N.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=w()(i.prototype,"urls",[N.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),i);t.Z=M.getInstance()},8953:function(e,t,n){var r,a=n(7294),i=n(3935),c=n(3727),l=n(5977),o=n(2168),s=n(1637),u=n(2195),m=n(4575),p=n.n(m),d=n(3913),g=n.n(d),f=n(2205),h=n.n(f),E=n(8585),b=n.n(E),v=n(9754),y=n.n(v),A=n(798);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b()(this,n)}}var x=(0,A.f3)((function(e,t,n){return t}))(r=(0,A.Pi)(r=function(e){h()(n,e);var t=w(n);function n(){return p()(this,n),t.apply(this,arguments)}return g()(n,[{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",null,"This page is not yet available"))}}]),n}(a.Component))||r)||r,B=(0,o.ZP)((function(){return Promise.all([n.e(736),n.e(150)]).then(n.bind(n,6550))}),{fallback:a.createElement(u.gb,null)}),N=(0,o.ZP)((function(){return n.e(767).then(n.bind(n,8640))}),{fallback:a.createElement(u.gb,null)}),k=(0,o.ZP)((function(){return Promise.all([n.e(736),n.e(181)]).then(n.bind(n,159))}),{fallback:a.createElement(u.gb,null)}),C=(0,o.ZP)((function(){return Promise.all([n.e(736),n.e(171)]).then(n.bind(n,7510))}),{fallback:a.createElement(u.gb,null)});function M(){return a.createElement(l.rs,null,a.createElement(l.AW,{path:"/beta/collection",component:C}),a.createElement(l.AW,{path:"/beta"},(function(e){var t=e.location;return a.createElement(l.l_,{to:t.pathname.replace("/beta","")})})),a.createElement(l.AW,{component:Q}))}function Q(){return a.createElement(l.rs,null,a.createElement(l.AW,{exact:!0,path:"/",component:N}),a.createElement(l.AW,{path:"/PageNotFound",component:u.uW}),a.createElement(l.AW,{path:"/UnderConstruction",component:u.Ky}),a.createElement(l.AW,{path:"/EnterTheCode",component:B}),a.createElement(l.AW,{path:"/create",component:x}),a.createElement(l.AW,{path:"/collection",component:C}),a.createElement(l.AW,{path:"/portal",component:k}))}function D(e){var t="ENG",n=a.createElement(M,null);return a.createElement(a.Fragment,null,a.createElement("div",{className:"fix-pgBkgrnd-repeat-x"},a.createElement("div",{className:"fix-img-bkgrnd fix-img-bkgrnd_05"})),a.createElement("div",{className:"pgBkgrnd-repeat-x"},a.createElement("div",{className:"img-bkgrnd"},a.createElement("div",{className:"content-wrap"},a.createElement("div",{className:"legacy legacy-header"},a.createElement("div",{className:"header"},a.createElement("div",{id:"nav"},a.createElement("div",{className:"zero-clear-line headerSpriteNav-wrap"},a.createElement("ul",{id:"unity-sprite",className:t},a.createElement("li",{id:"unity-nav1",className:t}),a.createElement("li",{id:"unity-nav2",className:t},a.createElement(c.rU,{to:"/collection/"},a.createElement("span",null,"Collect"))),a.createElement("li",{id:"unity-nav3",className:t},a.createElement("a",{href:"https://chaoticbackup.forumotion.com/f11-deck-building"},a.createElement("span",null,"Build"))),a.createElement("li",{id:"unity-nav4",className:t},a.createElement("a",{href:"https://chaoticbackup.forumotion.com/f16-trading-buying-and-selling"},a.createElement("span",null,"Trade"))),a.createElement("li",{id:"unity-nav5",className:t},a.createElement(c.rU,{to:"/"},a.createElement("span",null,"Home"))),a.createElement("li",{id:"unity-nav6",className:t},a.createElement("a",{href:"https://chaoticbackup.forumotion.com"},a.createElement("span",null,"Forums"))),a.createElement("li",{id:"unity-nav7",className:t},a.createElement(c.rU,{to:"/portal/"},a.createElement("span",null,"Portal"))),a.createElement("li",{id:"unity-nav8",className:t},a.createElement("a",{href:"https://chaoticrecode.com"},a.createElement("span",null,"Play"))),a.createElement("li",{id:"unity-nav9",className:t})),a.createElement("ul",{id:"unityETC-sprite",className:t},a.createElement("li",{id:"unity-nav10",className:t},a.createElement(c.rU,{to:"/EnterTheCode"},a.createElement("span",null,"Enter the Code")))))))),a.createElement("div",{className:"banner-ad-top"}),a.createElement("div",{className:"legacy content"},a.createElement("div",{className:"left-column"},a.createElement("div",{className:"full-width clear-line",style:{marginBottom:"5px"}})),a.createElement("div",{className:"full-column"},a.createElement("div",{className:"pods-wrap pad5px-btm"},a.createElement("div",{className:"clear-line full-width"},a.createElement("div",{className:"adPod-top-wrap"},a.createElement("div",{className:"videoAdPod-topleft"},a.createElement("div",{className:"videoAdPod-topLeft-repeat-x"})),a.createElement("div",{className:"videoAdPod-topright"},a.createElement("div",{className:"videoAdPod-topRight-repeat-x"})))),a.createElement("div",{className:"content-area-repeat-xy"},a.createElement("div",{className:"content-area-top-repeat-x"},a.createElement("div",{className:"content-area-left-repeat-y"},a.createElement("div",{className:"content-area-right-repeat-y"},a.createElement("div",{className:"content-area-inner-space"},a.createElement("div",{id:"player"},n)))))),a.createElement("div",{className:"content-btm-wrap"},a.createElement("div",{className:"content-area-btm-left"},a.createElement("div",{className:"content-left-btm-repeat-x"})),a.createElement("div",{className:"content-area-btm-right"},a.createElement("div",{className:"content-right-btm-repeat-x"}))))),a.createElement("div",{className:"right-column"},a.createElement("div",{className:"full-width clear-line",style:{marginBottom:"5px"}}))),a.createElement("div",{className:"banner-ad-bottom"}),a.createElement("div",{className:"legacy legacy-footer"},a.createElement("div",{className:"footer-wrap"},a.createElement("div",{className:"footer-repeat-x"},a.createElement("div",{className:"footer-left"},a.createElement("div",{className:"footer-right"},a.createElement("div",{className:"footer-text"},a.createElement("div",{className:"footer-search"},a.createElement("br",null),a.createElement("br",null),a.createElement(u.U9,null)),a.createElement("div",{className:"footer-nav"},a.createElement("div",{className:"copyright"},"©2008 Chaotic USA Entertainment Group, Inc.",a.createElement("br",null),"U.S. Pat 5810666 and 5954332 and other pending patent applications. All Rights Reserved.")),a.createElement("div",{className:"footer-language"},a.createElement("a",{href:"#",onClick:function(e){e.stopPropagation(),e.preventDefault(),s.Z.purgeDB()},className:"page-options",title:"Change Language"},a.createElement("img",{src:"/public/img/flag_usa_.gif",alt:"English (Change Language)",width:"40",height:"27"}),a.createElement("br",null),"English (Change Language)"))))))))))))}(0,i.render)(a.createElement(c.VK,null,a.createElement(D,{path:"/*",href:"/"})),document.getElementById("root"))},7768:function(e,t,n){var r=n(5403),a=Object.create(r.Z);a.root={backgroundColor:"#F0F0F0",fontFamily:"helvetica neue, helvetica, sans-serif",fontWeight:"300",fontSize:"16px",letterSpacing:"0.025em",padding:"3vh 0 12vh 0",width:"500px",maxWidth:"calc(100vw - 40px)",position:"relative",left:"50vw",WebkitTransform:"translate(-50%, 0)",MozTransform:"translate(-50%, 0)",msTransform:"translate(-50%, 0)",OTransform:"translate(-50%, 0)",transform:"translate(-50%, 0)",WebkitTextSizeAdjust:"none",MozTextSizeAdjust:"none",msTextSizeAdjust:"none",textSizeAdjust:"none"},a.title={fontSize:"20px",marginBottom:"0.5vh"},a.repoLink={fontSize:"14px"},a.mapMenu={margin:"3vh 0"},a.creditLine={color:"#A0A0A0",fontSize:"14px",marginTop:"50px"},t.Z=a},5403:function(e,t,n){var r=n(7154),a=n.n(r),i=n(7294),c={normal:{borderBottom:"1px dotted rgb(0, 168, 0)"},hover:{borderBottom:"1px solid rgb(0, 168, 0)",color:"black"},active:"hover",touchActive:{borderBottom:"1px dashed rgb(0, 168, 0)",color:"black"},focusFromTab:{outline:"2px solid rgb(0, 152, 0)",outlineOffset:"2px",color:"black"},touchActiveTapOnly:!0},l={};Object.keys(c).forEach((function(e){"touchActiveTapOnly"!==e&&(l["onParent".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1))]=c[e])})),t.Z={link:c,childLink:l,p:{margin:"3vh 0",lineHeight:"1.4"},code:function(e){return i.createElement("code",{style:{fontFamily:"monospace",fontSize:"15px",paddingLeft:"2px"}},e)},li:function(e,t){return i.createElement("li",a()({style:{paddingLeft:"18px",textIndent:"-15px",margin:"0.5vh 0",listStyle:"none"}},t),i.createElement("span",{style:{paddingRight:"7px"}},"–"),e)}}},3370:function(e){e.exports=JSON.parse('[{"gsx$type":{"$t":"Creatures"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"1fUFYhG1NLLkSTzrdbevm6ZMKNP6xLiKUZvM1sY10pVI"}},{"gsx$type":{"$t":"Creatures"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1eGQsy2kYk7HfnQetsjobMqank4bg6iWOOaSYykg3Yec"}},{"gsx$type":{"$t":"Mugic"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"1rOMFKnWaz6XmhD43YFpcemWGzEok9IgtKCoiPMwA35s"}},{"gsx$type":{"$t":"Mugic"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1tEuwPGixJH2A03YtYL6Ar-MSFvtfrlaveT98GwJhw1g"}},{"gsx$type":{"$t":"Attacks"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"1yXFijC2hN1vybU3ejdINYoTOTG62qCkpPLPsiYUEEyo"}},{"gsx$type":{"$t":"Attacks"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1KUk5J-3ZeMlEBXOfDb2h4GUUJK_0_yOq0EUDitQgNa8"}},{"gsx$type":{"$t":"Battlegear"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"1UUEPAEHZwmH52AJj2Jtskf6d4z5XIFEBb3HT-FTAcgs"}},{"gsx$type":{"$t":"Battlegear"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1S5AVw-E_sFO257uzajauP31bOI0LPmrbTcUzSpa2i60"}},{"gsx$type":{"$t":"Locations"},"gsx$subtype":{"$t":"cards"},"gsx$url":{"$t":"15QPS08iq6pkyMFsYuDsKIXX8LQmQ8MUoJeeNtjU54Xo"}},{"gsx$type":{"$t":"Locations"},"gsx$subtype":{"$t":"portal"},"gsx$url":{"$t":"1U07n2keHNxL-6y5zUcHlb220zT9A_MrVEansOAMQFCA"}}]')}},i={};function c(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return a[e].call(t.exports,t,t.exports,c),t.exports}c.m=a,c.x=function(){},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return e+".js"},c.miniCssF=function(e){return({179:"main",736:"vendor"}[e]||e)+".css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="chaoticbackup:",c.l=function(n,r,a){if(e[n])e[n].push(r);else{var i,l;if(void 0!==a)for(var o=document.getElementsByTagName("script"),s=0;s<o.length;s++){var u=o[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[r];var m=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/build/",n=function(e){return new Promise((function(t,n){var r=c.miniCssF(e),a=c.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(a===e||a===t))return c}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var c;if((a=(c=i[r]).getAttribute("data-href"))===e||a===t)return c}}(r,a))return t();!function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,o=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=c,o.request=l,a.parentNode.removeChild(a),r(o)}},a.href=t,document.head.appendChild(a)}(e,a,t,n)}))},r={179:0},c.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{150:1,171:1,181:1,767:1}[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={179:0},t=[[6981,736],[8953,736]];c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,a){r=e[t]=[n,a]}));n.push(r[2]=a);var i=c.p+c.u(t),l=new Error;c.l(i,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}}),"chunk-"+t)}};var n=function(){},r=function(r,a){for(var i,l,o=a[0],s=a[1],u=a[2],m=a[3],p=0,d=[];p<o.length;p++)l=o[p],c.o(e,l)&&e[l]&&d.push(e[l][0]),e[l]=0;for(i in s)c.o(s,i)&&(c.m[i]=s[i]);for(u&&u(c),r&&r(a);d.length;)d.shift()();return m&&t.push.apply(t,m),n()},a=self.webpackChunkchaoticbackup=self.webpackChunkchaoticbackup||[];function i(){for(var n,r=0;r<t.length;r++){for(var a=t[r],i=!0,l=1;l<a.length;l++){var o=a[l];0!==e[o]&&(i=!1)}i&&(t.splice(r--,1),n=c(c.s=a[0]))}return 0===t.length&&(c.x(),c.x=function(){}),n}a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a));var l=c.x;c.x=function(){return c.x=l||function(){},(n=i)()}}(),c.x()}();