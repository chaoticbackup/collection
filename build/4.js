(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{385:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});function a(){return v.a.createElement("a",{href:"https://github.com/chaoticbackup",className:"name",rel:"noreferrer noopener",target:"_blank"},"Chaotic Backup Project")}function r(e){var t=e.block,n=e.text;return v.a.createElement("div",{className:"lore"},v.a.createElement("div",{className:"title"},t),n.map(function(e,t){return v.a.createElement("div",{key:t},e)}))}var l=n(122),o=n.n(l),i=n(62),c=n.n(i),s=n(52),u=n.n(s),d=n(119),m=n.n(d),h=n(120),f=n.n(h),b=n(121),p=n.n(b),E=n(0),v=n.n(E),w=n(53),k=n(35),y=(n(385),n(6),function(e){function l(){var e,t;c()(this,l);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=m()(this,(e=f()(l)).call.apply(e,[this].concat(a)))).state={lore:[]},t}return p()(l,e),u()(l,[{key:"componentDidMount",value:function(){var t=this;fetch("/src/json/starter_lore.json").then(function(e){return e.json()}).then(function(e){t.setState({lore:e})}).catch(function(){t.setState({lore:[{block:"Unable to load lore...",text:[]}]})})}},{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement("br",null),v.a.createElement("div",{className:"with-love"},v.a.createElement("div",null,"Welcome to the ",v.a.createElement(a,null),"."),v.a.createElement("span",null,"Built by fans for fans."),v.a.createElement("br",null),v.a.createElement("br",null),v.a.createElement("div",null,"Made with ",v.a.createElement("span",{className:"heart"},"♥")," by",v.a.createElement("br",null),"Danude Sandstorm (Project Lead)",v.a.createElement("br",null),"Chiodosin1 (Database Contributions)",v.a.createElement("br",null),"Afjak and Blitser (Art and Knowledge)"),v.a.createElement("div",null,"Do you like the site? You can donate to support it!"),v.a.createElement("div",{className:"donate"},v.a.createElement(k.e,null)),v.a.createElement("div",{className:"lore"},"We were unsatisfied with the options on how to search for cards. I took the design of the old Chaotic website and added my own modernizations.  With an extensive lists of search options in the ",v.a.createElement(w.b,{to:"/collection"},"collection"),", you'll find deck building mores streamlined than ever before.  Chaotic is full of rich lore, but unfortunately the best database of official lore disapeared when the ",v.a.createElement(w.b,{to:"/portal"},"Portal to Perim")," disapeared along with the site. You can again explore the official lore and information of Creatures!"),v.a.createElement("br",null),0<this.state.lore.length?this.state.lore.map(function(e,t){return v.a.createElement(r,o()({key:t},e))}):"Loading lore entries..."))}}]),l}(v.a.Component))}}]);