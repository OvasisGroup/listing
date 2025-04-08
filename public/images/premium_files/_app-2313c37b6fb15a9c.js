(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{8036:function(n,l,d){"use strict";d.d(l,{ET:function(){return addDoc},hJ:function(){return collection},JU:function(){return doc},QT:function(){return getDoc},PL:function(){return getDocs},ad:function(){return getFirestore},b9:function(){return limit},IO:function(){return query},Bt:function(){return serverTimestamp},pl:function(){return setDoc},ar:function(){return where}});var f,_,E,L,z,et,er,en=d(2238),ei=d(8463),es=d(3333),eo=d(4444),el="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},eu={},ec=ec||{},eh=el||self;function aa(n){var l=typeof n;return"array"==(l="object"!=l?l:n?Array.isArray(n)?"array":l:"null")||"object"==l&&"number"==typeof n.length}function p(n){var l=typeof n;return"object"==l&&null!=n||"function"==l}function ea(n,l,d){return n.call.apply(n.bind,arguments)}function fa(n,l,d){if(!n)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,f),n.apply(l,d)}}return function(){return n.apply(l,arguments)}}function q(n,l,d){return(q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa).apply(null,arguments)}function ha(n,l){var d=Array.prototype.slice.call(arguments,1);return function(){var l=d.slice();return l.push.apply(l,arguments),n.apply(this,l)}}function r(n,l){function c(){}c.prototype=l.prototype,n.$=l.prototype,n.prototype=new c,n.prototype.constructor=n,n.ac=function(n,d,f){for(var _=Array(arguments.length-2),E=2;E<arguments.length;E++)_[E-2]=arguments[E];return l.prototype[d].apply(n,_)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.sa=function(){this.s||(this.s=!0,this.N())},v.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let ef=Array.prototype.indexOf?function(n,l){return Array.prototype.indexOf.call(n,l,void 0)}:function(n,l){if("string"==typeof n)return"string"!=typeof l||1!=l.length?-1:n.indexOf(l,0);for(let d=0;d<n.length;d++)if(d in n&&n[d]===l)return d;return -1};function ma(n){let l=n.length;if(0<l){let d=Array(l);for(let f=0;f<l;f++)d[f]=n[f];return d}return[]}function na(n,l){for(let l=1;l<arguments.length;l++){let d=arguments[l];if(aa(d)){let l=n.length||0,f=d.length||0;n.length=l+f;for(let _=0;_<f;_++)n[l+_]=d[_]}else n.push(d)}}function w(n,l){this.type=n,this.g=this.target=l,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var ep=function(){if(!eh.addEventListener||!Object.defineProperty)return!1;var n=!1,l=Object.defineProperty({},"passive",{get:function(){n=!0}});try{let c=()=>{};eh.addEventListener("test",c,l),eh.removeEventListener("test",c,l)}catch(n){}return n}();function x(n){return/^[\s\xa0]*$/.test(n)}function pa(){var n=eh.navigator;return n&&(n=n.userAgent)?n:""}function y(n){return -1!=pa().indexOf(n)}function qa(n){return qa[" "](n),n}function ra(n,l){return Object.prototype.hasOwnProperty.call(e7,n)?e7[n]:e7[n]=l(n)}qa[" "]=function(){};var e_=y("Opera"),em=y("Trident")||y("MSIE"),eg=y("Edge"),ey=eg||em,ev=y("Gecko")&&!(-1!=pa().toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),eE=-1!=pa().toLowerCase().indexOf("webkit")&&!y("Edge");function ya(){var n=eh.document;return n?n.documentMode:void 0}e:{var eT,eI="",eP=(eT=pa(),ev?/rv:([^\);]+)(\)|;)/.exec(eT):eg?/Edge\/([\d\.]+)/.exec(eT):em?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(eT):eE?/WebKit\/(\S+)/.exec(eT):e_?/(?:Version)[ \/]?(\S+)/.exec(eT):void 0);if(eP&&(eI=eP?eP[1]:""),em){var eA=ya();if(null!=eA&&eA>parseFloat(eI)){_=String(eA);break e}}_=eI}var ew=eh.document&&em&&(ya()||parseInt(_,10))||void 0;function A(n,l){if(w.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var d=this.type=n.type,f=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=l,l=n.relatedTarget){if(ev){e:{try{qa(l.nodeName);var _=!0;break e}catch(n){}_=!1}_||(l=null)}}else"mouseover"==d?l=n.fromElement:"mouseout"==d&&(l=n.toElement);this.relatedTarget=l,f?(this.clientX=void 0!==f.clientX?f.clientX:f.pageX,this.clientY=void 0!==f.clientY?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType="string"==typeof n.pointerType?n.pointerType:eR[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&A.$.h.call(this)}}r(A,w);var eR={2:"touch",3:"pen",4:"mouse"};A.prototype.h=function(){A.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var eS="closure_listenable_"+(1e6*Math.random()|0),eV=0;function Ja(n,l,d,f,_){this.listener=n,this.proxy=null,this.src=l,this.type=d,this.capture=!!f,this.la=_,this.key=++eV,this.fa=this.ia=!1}function Ma(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Na(n,l,d){for(let f in n)l.call(d,n[f],f,n)}function Oa(n,l){for(let d in n)l.call(void 0,n[d],d,n)}function Pa(n){let l={};for(let d in n)l[d]=n[d];return l}let eC="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(n,l){let d,f;for(let l=1;l<arguments.length;l++){for(d in f=arguments[l])n[d]=f[d];for(let l=0;l<eC.length;l++)d=eC[l],Object.prototype.hasOwnProperty.call(f,d)&&(n[d]=f[d])}}function Sa(n){this.src=n,this.g={},this.h=0}function Ua(n,l){var d=l.type;if(d in n.g){var f,_=n.g[d],E=ef(_,l);(f=0<=E)&&Array.prototype.splice.call(_,E,1),f&&(Ma(l),0==n.g[d].length&&(delete n.g[d],n.h--))}}function Ta(n,l,d,f){for(var _=0;_<n.length;++_){var E=n[_];if(!E.fa&&E.listener==l&&!!d==E.capture&&E.la==f)return _}return -1}Sa.prototype.add=function(n,l,d,f,_){var E=n.toString();(n=this.g[E])||(n=this.g[E]=[],this.h++);var L=Ta(n,l,f,_);return -1<L?(l=n[L],d||(l.ia=!1)):((l=new Ja(l,this.src,E,!!f,_)).ia=d,n.push(l)),l};var ek="closure_lm_"+(1e6*Math.random()|0),eD={};function Ya(n,l,d,f,_){if(f&&f.once)return Za(n,l,d,f,_);if(Array.isArray(l)){for(var E=0;E<l.length;E++)Ya(n,l[E],d,f,_);return null}return d=$a(d),n&&n[eS]?n.O(l,d,p(f)?!!f.capture:!!f,_):ab(n,l,d,!1,f,_)}function ab(n,l,d,f,_,E){if(!l)throw Error("Invalid event type");var L=p(_)?!!_.capture:!!_,z=bb(n);if(z||(n[ek]=z=new Sa(n)),(d=z.add(l,d,f,L,E)).proxy)return d;if(f=cb(),d.proxy=f,f.src=n,f.listener=d,n.addEventListener)ep||(_=L),void 0===_&&(_=!1),n.addEventListener(l.toString(),f,_);else if(n.attachEvent)n.attachEvent(db(l.toString()),f);else if(n.addListener&&n.removeListener)n.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function cb(){function a(l){return n.call(a.src,a.listener,l)}let n=eb;return a}function Za(n,l,d,f,_){if(Array.isArray(l)){for(var E=0;E<l.length;E++)Za(n,l[E],d,f,_);return null}return d=$a(d),n&&n[eS]?n.P(l,d,p(f)?!!f.capture:!!f,_):ab(n,l,d,!0,f,_)}function fb(n,l,d,f,_){if(Array.isArray(l))for(var E=0;E<l.length;E++)fb(n,l[E],d,f,_);else(f=p(f)?!!f.capture:!!f,d=$a(d),n&&n[eS])?(n=n.i,(l=String(l).toString())in n.g&&-1<(d=Ta(E=n.g[l],d,f,_))&&(Ma(E[d]),Array.prototype.splice.call(E,d,1),0==E.length&&(delete n.g[l],n.h--))):n&&(n=bb(n))&&(l=n.g[l.toString()],n=-1,l&&(n=Ta(l,d,f,_)),(d=-1<n?l[n]:null)&&gb(d))}function gb(n){if("number"!=typeof n&&n&&!n.fa){var l=n.src;if(l&&l[eS])Ua(l.i,n);else{var d=n.type,f=n.proxy;l.removeEventListener?l.removeEventListener(d,f,n.capture):l.detachEvent?l.detachEvent(db(d),f):l.addListener&&l.removeListener&&l.removeListener(f),(d=bb(l))?(Ua(d,n),0==d.h&&(d.src=null,l[ek]=null)):Ma(n)}}}function db(n){return n in eD?eD[n]:eD[n]="on"+n}function eb(n,l){if(n.fa)n=!0;else{l=new A(l,this);var d=n.listener,f=n.la||n.src;n.ia&&gb(n),n=d.call(f,l)}return n}function bb(n){return(n=n[ek])instanceof Sa?n:null}var eO="__closure_events_fn_"+(1e9*Math.random()>>>0);function $a(n){return"function"==typeof n?n:(n[eO]||(n[eO]=function(l){return n.handleEvent(l)}),n[eO])}function B(){v.call(this),this.i=new Sa(this),this.S=this,this.J=null}function C(n,l){var d,f=n.J;if(f)for(d=[];f;f=f.J)d.push(f);if(n=n.S,f=l.type||l,"string"==typeof l)l=new w(l,n);else if(l instanceof w)l.target=l.target||n;else{var _=l;Ra(l=new w(f,n),_)}if(_=!0,d)for(var E=d.length-1;0<=E;E--){var L=l.g=d[E];_=ib(L,f,!0,l)&&_}if(_=ib(L=l.g=n,f,!0,l)&&_,_=ib(L,f,!1,l)&&_,d)for(E=0;E<d.length;E++)_=ib(L=l.g=d[E],f,!1,l)&&_}function ib(n,l,d,f){if(!(l=n.i.g[String(l)]))return!0;l=l.concat();for(var _=!0,E=0;E<l.length;++E){var L=l[E];if(L&&!L.fa&&L.capture==d){var z=L.listener,et=L.la||L.src;L.ia&&Ua(n.i,L),_=!1!==z.call(et,f)&&_}}return _&&!f.defaultPrevented}r(B,v),B.prototype[eS]=!0,B.prototype.removeEventListener=function(n,l,d,f){fb(this,n,l,d,f)},B.prototype.N=function(){if(B.$.N.call(this),this.i){var n,l=this.i;for(n in l.g){for(var d=l.g[n],f=0;f<d.length;f++)Ma(d[f]);delete l.g[n],l.h--}}this.J=null},B.prototype.O=function(n,l,d,f){return this.i.add(String(n),l,!1,d,f)},B.prototype.P=function(n,l,d,f){return this.i.add(String(n),l,!0,d,f)};var ex=eh.JSON.stringify;let kb=class kb{constructor(n,l){this.i=n,this.j=l,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}};function lb(){let n=null;return eF.g&&(n=eF.g,eF.g=eF.g.next,eF.g||(eF.h=null),n.next=null),n}let nb=class nb{constructor(){this.h=this.g=null}add(n,l){let d=eN.get();d.set(n,l),this.h?this.h.next=d:this.g=d,this.h=d}};var eN=new kb(()=>new pb,n=>n.reset());let pb=class pb{constructor(){this.next=this.g=this.h=null}set(n,l){this.h=n,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}};function qb(n){var l=1;n=n.split(":");let d=[];for(;0<l&&n.length;)d.push(n.shift()),l--;return n.length&&d.push(n.join(":")),d}function rb(n){eh.setTimeout(()=>{throw n},0)}let eM,eL=!1,eF=new nb,vb=()=>{let n=eh.Promise.resolve(void 0);eM=()=>{n.then(ub)}};var ub=()=>{for(var n;n=lb();){try{n.h.call(n.g)}catch(n){rb(n)}eN.j(n),100>eN.h&&(eN.h++,n.next=eN.g,eN.g=n)}eL=!1};function wb(n,l){B.call(this),this.h=n||1,this.g=l||eh,this.j=q(this.qb,this),this.l=Date.now()}function xb(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}function yb(n,l,d){if("function"==typeof n)d&&(n=q(n,d));else if(n&&"function"==typeof n.handleEvent)n=q(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:eh.setTimeout(n,l||0)}function zb(n){n.g=yb(()=>{n.g=null,n.i&&(n.i=!1,zb(n))},n.j);let l=n.h;n.h=null,n.m.apply(null,l)}r(wb,B),(er=wb.prototype).ga=!1,er.T=null,er.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),C(this,"tick"),this.ga&&(xb(this),this.start()))}},er.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},er.N=function(){wb.$.N.call(this),xb(this),delete this.g};let Ab=class Ab extends v{constructor(n,l){super(),this.m=n,this.j=l,this.h=null,this.i=!1,this.g=null}l(n){this.h=arguments,this.g?this.i=!0:zb(this)}N(){super.N(),this.g&&(eh.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function Bb(n){v.call(this),this.h=n,this.g={}}r(Bb,v);var eU=[];function Eb(n,l,d,f){Array.isArray(d)||(d&&(eU[0]=d.toString()),d=eU);for(var _=0;_<d.length;_++){var E=Ya(l,d[_],f||n.handleEvent,!1,n.h||n);if(!E)break;n.g[E.key]=E}}function Fb(n){Na(n.g,function(n,l){this.g.hasOwnProperty(l)&&gb(n)},n),n.g={}}function Gb(){this.g=!0}function Hb(n,l,d,f,_,E){n.info(function(){if(n.g){if(E)for(var L="",z=E.split("&"),et=0;et<z.length;et++){var er=z[et].split("=");if(1<er.length){var en=er[0];er=er[1];var ei=en.split("_");L=2<=ei.length&&"type"==ei[1]?L+(en+"=")+er+"&":L+(en+"=redacted&")}}else L=null}else L=E;return"XMLHTTP REQ ("+f+") [attempt "+_+"]: "+l+"\n"+d+"\n"+L})}function Ib(n,l,d,f,_,E,L){n.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+_+"]: "+l+"\n"+d+"\n"+E+" "+L})}function D(n,l,d,f){n.info(function(){return"XMLHTTP TEXT ("+l+"): "+Jb(n,d)+(f?" "+f:"")})}function Kb(n,l){n.info(function(){return"TIMEOUT: "+l})}function Jb(n,l){if(!n.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(n=0;n<d.length;n++)if(Array.isArray(d[n])){var f=d[n];if(!(2>f.length)){var _=f[1];if(Array.isArray(_)&&!(1>_.length)){var E=_[0];if("noop"!=E&&"stop"!=E&&"close"!=E)for(var L=1;L<_.length;L++)_[L]=""}}}}return ex(d)}catch(n){return l}}Bb.prototype.N=function(){Bb.$.N.call(this),Fb(this)},Bb.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gb.prototype.Ea=function(){this.g=!1},Gb.prototype.info=function(){};var ej={},eB=null;function Mb(){return eB=eB||new B}function Nb(n){w.call(this,ej.Ta,n)}function Ob(n){let l=Mb();C(l,new Nb(l))}function Pb(n,l){w.call(this,ej.STAT_EVENT,n),this.stat=l}function F(n){let l=Mb();C(l,new Pb(l,n))}function Qb(n,l){w.call(this,ej.Ua,n),this.size=l}function Rb(n,l){if("function"!=typeof n)throw Error("Fn must not be null and must be a function");return eh.setTimeout(function(){n()},l)}ej.Ta="serverreachability",r(Nb,w),ej.STAT_EVENT="statevent",r(Pb,w),ej.Ua="timingevent",r(Qb,w);var eq={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eK={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ub(){}function Vb(n){return n.h||(n.h=n.i())}function Wb(){}Ub.prototype.h=null;var ez={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yb(){w.call(this,"d")}function Zb(){w.call(this,"c")}function ac(){}function bc(n,l,d,f){this.l=n,this.j=l,this.m=d,this.W=f||1,this.U=new Bb(this),this.P=eW,n=ey?125:void 0,this.V=new wb(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dc}function dc(){this.i=null,this.g="",this.h=!1}r(Yb,w),r(Zb,w),r(ac,Ub),ac.prototype.g=function(){return new XMLHttpRequest},ac.prototype.i=function(){return{}},L=new ac;var eW=45e3,e$={},eH={};function gc(n,l,d){n.L=1,n.A=hc(G(l)),n.u=d,n.S=!0,ic(n,null)}function ic(n,l){n.G=Date.now(),jc(n),n.B=G(n.A);var d=n.B,f=n.W;Array.isArray(f)||(f=[String(f)]),kc(d.i,"t",f),n.o=0,d=n.l.J,n.h=new dc,n.g=lc(n.l,d?l:null,!n.u),0<n.O&&(n.M=new Ab(q(n.Pa,n,n.g),n.O)),Eb(n.U,n.g,"readystatechange",n.nb),l=n.I?Pa(n.I):{},n.u?(n.v||(n.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,l)):(n.v="GET",n.g.ha(n.B,n.v,null,l)),Ob(),Hb(n.j,n.v,n.B,n.m,n.W,n.u)}function oc(n){return!!n.g&&"GET"==n.v&&2!=n.L&&n.l.Ha}function rc(n,l,d){let f=!0,_;for(;!n.J&&n.o<d.length;)if((_=uc(n,d))==eH){4==l&&(n.s=4,F(14),f=!1),D(n.j,n.m,null,"[Incomplete Response]");break}else if(_==e$){n.s=4,F(15),D(n.j,n.m,d,"[Invalid Chunk]"),f=!1;break}else D(n.j,n.m,_,null),qc(n,_);oc(n)&&0!=n.o&&(n.h.g=n.h.g.slice(n.o),n.o=0),4!=l||0!=d.length||n.h.h||(n.s=1,F(16),f=!1),n.i=n.i&&f,f?0<d.length&&!n.ba&&(n.ba=!0,(l=n.l).g==n&&l.ca&&!l.M&&(l.l.info("Great, no buffering proxy detected. Bytes received: "+d.length),vc(l),l.M=!0,F(11))):(D(n.j,n.m,d,"[Invalid Chunked Response]"),I(n),pc(n))}function uc(n,l){var d=n.o,f=l.indexOf("\n",d);return -1==f?eH:isNaN(d=Number(l.substring(d,f)))?e$:(f+=1)+d>l.length?eH:(l=l.slice(f,f+d),n.o=f+d,l)}function jc(n){n.Y=Date.now()+n.P,wc(n,n.P)}function wc(n,l){if(null!=n.C)throw Error("WatchDog timer not null");n.C=Rb(q(n.lb,n),l)}function nc(n){n.C&&(eh.clearTimeout(n.C),n.C=null)}function pc(n){0==n.l.H||n.J||sc(n.l,n)}function I(n){nc(n);var l=n.M;l&&"function"==typeof l.sa&&l.sa(),n.M=null,xb(n.V),Fb(n.U),n.g&&(l=n.g,n.g=null,l.abort(),l.sa())}function qc(n,l){try{var d=n.l;if(0!=d.H&&(d.g==n||xc(d.i,n))){if(!n.K&&xc(d.i,n)&&3==d.H){try{var f=d.Ja.g.parse(l)}catch(n){f=null}if(Array.isArray(f)&&3==f.length){var _=f;if(0==_[0]){e:if(!d.u){if(d.g){if(d.g.G+3e3<n.G)yc(d),zc(d);else break e}Ac(d),F(18)}}else d.Fa=_[1],0<d.Fa-d.V&&37500>_[2]&&d.G&&0==d.A&&!d.v&&(d.v=Rb(q(d.ib,d),6e3));if(1>=Bc(d.i)&&d.oa){try{d.oa()}catch(n){}d.oa=void 0}}else J(d,11)}else if((n.K||d.g==n)&&yc(d),!x(l))for(_=d.Ja.g.parse(l),l=0;l<_.length;l++){let z=_[l];if(d.V=z[0],z=z[1],2==d.H){if("c"==z[0]){d.K=z[1],d.pa=z[2];let l=z[3];null!=l&&(d.ra=l,d.l.info("VER="+d.ra));let _=z[4];null!=_&&(d.Ga=_,d.l.info("SVER="+d.Ga));let et=z[5];null!=et&&"number"==typeof et&&0<et&&(f=1.5*et,d.L=f,d.l.info("backChannelRequestTimeoutMs_="+f)),f=d;let er=n.g;if(er){let n=er.g?er.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(n){var E=f.i;E.g||-1==n.indexOf("spdy")&&-1==n.indexOf("quic")&&-1==n.indexOf("h2")||(E.j=E.l,E.g=new Set,E.h&&(Cc(E,E.h),E.h=null))}if(f.F){let n=er.g?er.g.getResponseHeader("X-HTTP-Session-Id"):null;n&&(f.Da=n,K(f.I,f.F,n))}}if(d.H=3,d.h&&d.h.Ba(),d.ca&&(d.S=Date.now()-n.G,d.l.info("Handshake RTT: "+d.S+"ms")),(f=d).wa=Dc(f,f.J?f.pa:null,f.Y),n.K){Ec(f.i,n);var L=f.L;L&&n.setTimeout(L),n.C&&(nc(n),jc(n)),f.g=n}else Fc(f);0<d.j.length&&Gc(d)}else"stop"!=z[0]&&"close"!=z[0]||J(d,7)}else 3==d.H&&("stop"==z[0]||"close"==z[0]?"stop"==z[0]?J(d,7):Hc(d):"noop"!=z[0]&&d.h&&d.h.Aa(z),d.A=0)}}Ob(4)}catch(n){}}function Ic(n){if(n.Z&&"function"==typeof n.Z)return n.Z();if("undefined"!=typeof Map&&n instanceof Map||"undefined"!=typeof Set&&n instanceof Set)return Array.from(n.values());if("string"==typeof n)return n.split("");if(aa(n)){for(var l=[],d=n.length,f=0;f<d;f++)l.push(n[f]);return l}for(f in l=[],d=0,n)l[d++]=n[f];return l}function Jc(n){if(n.ta&&"function"==typeof n.ta)return n.ta();if(!n.Z||"function"!=typeof n.Z){if("undefined"!=typeof Map&&n instanceof Map)return Array.from(n.keys());if(!("undefined"!=typeof Set&&n instanceof Set)){if(aa(n)||"string"==typeof n){var l=[];n=n.length;for(var d=0;d<n;d++)l.push(d);return l}for(let f in l=[],d=0,n)l[d++]=f;return l}}}function Kc(n,l){if(n.forEach&&"function"==typeof n.forEach)n.forEach(l,void 0);else if(aa(n)||"string"==typeof n)Array.prototype.forEach.call(n,l,void 0);else for(var d=Jc(n),f=Ic(n),_=f.length,E=0;E<_;E++)l.call(void 0,f[E],d&&d[E],n)}(er=bc.prototype).setTimeout=function(n){this.P=n},er.nb=function(n){n=n.target;let l=this.M;l&&3==H(n)?l.l():this.Pa(n)},er.Pa=function(n){try{if(n==this.g)e:{let en=H(this.g);var l=this.g.Ia();let ei=this.g.da();if(!(3>en)&&(3!=en||ey||this.g&&(this.h.h||this.g.ja()||mc(this.g)))){this.J||4!=en||7==l||(8==l||0>=ei?Ob(3):Ob(2)),nc(this);var d=this.g.da();this.ca=d;t:if(oc(this)){var f=mc(this.g);n="";var _=f.length,E=4==H(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){I(this),pc(this);var L="";break t}this.h.i=new eh.TextDecoder}for(l=0;l<_;l++)this.h.h=!0,n+=this.h.i.decode(f[l],{stream:E&&l==_-1});f.length=0,this.h.g+=n,this.o=0,L=this.h.g}else L=this.g.ja();if(this.i=200==d,Ib(this.j,this.v,this.B,this.m,this.W,en,d),this.i){if(this.aa&&!this.K){t:{if(this.g){var z,et=this.g;if((z=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(z)){var er=z;break t}}er=null}if(d=er)D(this.j,this.m,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc(this,d);else{this.i=!1,this.s=3,F(12),I(this),pc(this);break e}}this.S?(rc(this,en,L),ey&&this.i&&3==en&&(Eb(this.U,this.V,"tick",this.mb),this.V.start())):(D(this.j,this.m,L,null),qc(this,L)),4==en&&I(this),this.i&&!this.J&&(4==en?sc(this.l,this):(this.i=!1,jc(this)))}else tc(this.g),400==d&&0<L.indexOf("Unknown SID")?(this.s=3,F(12)):(this.s=0,F(13)),I(this),pc(this)}}}catch(n){}finally{}},er.mb=function(){if(this.g){var n=H(this.g),l=this.g.ja();this.o<l.length&&(nc(this),rc(this,n,l),this.i&&4!=n&&jc(this))}},er.cancel=function(){this.J=!0,I(this)},er.lb=function(){this.C=null;let n=Date.now();0<=n-this.Y?(Kb(this.j,this.B),2!=this.L&&(Ob(),F(17)),I(this),this.s=2,pc(this)):wc(this,this.Y-n)};var eG=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mc(n,l){if(n){n=n.split("&");for(var d=0;d<n.length;d++){var f=n[d].indexOf("="),_=null;if(0<=f){var E=n[d].substring(0,f);_=n[d].substring(f+1)}else E=n[d];l(E,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function M(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof M){this.h=n.h,Nc(this,n.j),this.s=n.s,this.g=n.g,Oc(this,n.m),this.l=n.l;var l=n.i,d=new Pc;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Qc(this,d),this.o=n.o}else n&&(l=String(n).match(eG))?(this.h=!1,Nc(this,l[1]||"",!0),this.s=Rc(l[2]||""),this.g=Rc(l[3]||"",!0),Oc(this,l[4]),this.l=Rc(l[5]||"",!0),Qc(this,l[6]||"",!0),this.o=Rc(l[7]||"")):(this.h=!1,this.i=new Pc(null,this.h))}function G(n){return new M(n)}function Nc(n,l,d){n.j=d?Rc(l,!0):l,n.j&&(n.j=n.j.replace(/:$/,""))}function Oc(n,l){if(l){if(isNaN(l=Number(l))||0>l)throw Error("Bad port number "+l);n.m=l}else n.m=null}function Qc(n,l,d){l instanceof Pc?(n.i=l,Xc(n.i,n.h)):(d||(l=Sc(l,eY)),n.i=new Pc(l,n.h))}function K(n,l,d){n.i.set(l,d)}function hc(n){return K(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Rc(n,l){return n?l?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Sc(n,l,d){return"string"==typeof n?(n=encodeURI(n).replace(l,Zc),d&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Zc(n){return"%"+((n=n.charCodeAt(0))>>4&15).toString(16)+(15&n).toString(16)}M.prototype.toString=function(){var n=[],l=this.j;l&&n.push(Sc(l,eQ,!0),":");var d=this.g;return(d||"file"==l)&&(n.push("//"),(l=this.s)&&n.push(Sc(l,eQ,!0),"@"),n.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(d=this.m)&&n.push(":",String(d))),(d=this.l)&&(this.g&&"/"!=d.charAt(0)&&n.push("/"),n.push(Sc(d,"/"==d.charAt(0)?eX:eJ,!0))),(d=this.i.toString())&&n.push("?",d),(d=this.o)&&n.push("#",Sc(d,eZ)),n.join("")};var eQ=/[#\/\?@]/g,eJ=/[#\?:]/g,eX=/[#\?]/g,eY=/[#\?@]/g,eZ=/#/g;function Pc(n,l){this.h=this.g=null,this.i=n||null,this.j=!!l}function N(n){n.g||(n.g=new Map,n.h=0,n.i&&Mc(n.i,function(l,d){n.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}function $c(n,l){N(n),l=O(n,l),n.g.has(l)&&(n.i=null,n.h-=n.g.get(l).length,n.g.delete(l))}function ad(n,l){return N(n),l=O(n,l),n.g.has(l)}function kc(n,l,d){$c(n,l),0<d.length&&(n.i=null,n.g.set(O(n,l),ma(d)),n.h+=d.length)}function O(n,l){return l=String(l),n.j&&(l=l.toLowerCase()),l}function Xc(n,l){l&&!n.j&&(N(n),n.i=null,n.g.forEach(function(n,l){var d=l.toLowerCase();l!=d&&($c(this,l),kc(this,d,n))},n)),n.j=l}(er=Pc.prototype).add=function(n,l){N(this),this.i=null,n=O(this,n);var d=this.g.get(n);return d||this.g.set(n,d=[]),d.push(l),this.h+=1,this},er.forEach=function(n,l){N(this),this.g.forEach(function(d,f){d.forEach(function(d){n.call(l,d,f,this)},this)},this)},er.ta=function(){N(this);let n=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let f=0;f<l.length;f++){let _=n[f];for(let n=0;n<_.length;n++)d.push(l[f])}return d},er.Z=function(n){N(this);let l=[];if("string"==typeof n)ad(this,n)&&(l=l.concat(this.g.get(O(this,n))));else{n=Array.from(this.g.values());for(let d=0;d<n.length;d++)l=l.concat(n[d])}return l},er.set=function(n,l){return N(this),this.i=null,ad(this,n=O(this,n))&&(this.h-=this.g.get(n).length),this.g.set(n,[l]),this.h+=1,this},er.get=function(n,l){return n&&0<(n=this.Z(n)).length?String(n[0]):l},er.toString=function(){if(this.i)return this.i;if(!this.g)return"";let n=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var f=l[d];let E=encodeURIComponent(String(f)),L=this.Z(f);for(f=0;f<L.length;f++){var _=E;""!==L[f]&&(_+="="+encodeURIComponent(String(L[f]))),n.push(_)}}return this.i=n.join("&")};var e0=class{constructor(n,l){this.g=n,this.map=l}};function cd(n){this.l=n||e1,n=eh.PerformanceNavigationTiming?0<(n=eh.performance.getEntriesByType("navigation")).length&&("hq"==n[0].nextHopProtocol||"h2"==n[0].nextHopProtocol):!!(eh.g&&eh.g.Ka&&eh.g.Ka()&&eh.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var e1=10;function ed(n){return!!n.h||!!n.g&&n.g.size>=n.j}function Bc(n){return n.h?1:n.g?n.g.size:0}function xc(n,l){return n.h?n.h==l:!!n.g&&n.g.has(l)}function Cc(n,l){n.g?n.g.add(l):n.h=l}function Ec(n,l){n.h&&n.h==l?n.h=null:n.g&&n.g.has(l)&&n.g.delete(l)}function fd(n){if(null!=n.h)return n.i.concat(n.h.F);if(null!=n.g&&0!==n.g.size){let l=n.i;for(let d of n.g.values())l=l.concat(d.F);return l}return ma(n.i)}cd.prototype.cancel=function(){if(this.i=fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let n of this.g.values())n.cancel();this.g.clear()}};var e2=class{stringify(n){return eh.JSON.stringify(n,void 0)}parse(n){return eh.JSON.parse(n,void 0)}};function hd(){this.g=new e2}function id(n,l,d){let f=d||"";try{Kc(n,function(n,d){let _=n;p(n)&&(_=ex(n)),l.push(f+d+"="+encodeURIComponent(_))})}catch(n){throw l.push(f+"type="+encodeURIComponent("_badmap")),n}}function jd(n,l){let d=new Gb;if(eh.Image){let f=new Image;f.onload=ha(kd,d,f,"TestLoadImage: loaded",!0,l),f.onerror=ha(kd,d,f,"TestLoadImage: error",!1,l),f.onabort=ha(kd,d,f,"TestLoadImage: abort",!1,l),f.ontimeout=ha(kd,d,f,"TestLoadImage: timeout",!1,l),eh.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=n}else l(!1)}function kd(n,l,d,f,_){try{l.onload=null,l.onerror=null,l.onabort=null,l.ontimeout=null,_(f)}catch(n){}}function ld(n){this.l=n.ec||null,this.j=n.ob||!1}function md(n,l){B.call(this),this.F=n,this.u=l,this.m=void 0,this.readyState=e4,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}r(ld,Ub),ld.prototype.g=function(){return new md(this.l,this.j)},ld.prototype.i=(f={},function(){return f}),r(md,B);var e4=0;function qd(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}function pd(n){n.readyState=4,n.l=null,n.j=null,n.A=null,od(n)}function od(n){n.onreadystatechange&&n.onreadystatechange.call(n)}(er=md.prototype).open=function(n,l){if(this.readyState!=e4)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=l,this.readyState=1,od(this)},er.send=function(n){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let l={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(l.body=n),(this.F||eh).fetch(new Request(this.B,l)).then(this.$a.bind(this),this.ka.bind(this))},er.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,pd(this)),this.readyState=e4},er.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,od(this)),this.g&&(this.readyState=3,od(this),this.g))){if("arraybuffer"===this.responseType)n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==eh.ReadableStream&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qd(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))}},er.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var l=n.value?n.value:new Uint8Array(0);(l=this.A.decode(l,{stream:!n.done}))&&(this.response=this.responseText+=l)}n.done?pd(this):od(this),3==this.readyState&&qd(this)}},er.Za=function(n){this.g&&(this.response=this.responseText=n,pd(this))},er.Ya=function(n){this.g&&(this.response=n,pd(this))},er.ka=function(){this.g&&pd(this)},er.setRequestHeader=function(n,l){this.v.append(n,l)},er.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},er.getAllResponseHeaders=function(){if(!this.h)return"";let n=[],l=this.h.entries();for(var d=l.next();!d.done;)n.push((d=d.value)[0]+": "+d[1]),d=l.next();return n.join("\r\n")},Object.defineProperty(md.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(n){this.m=n?"include":"same-origin"}});var e9=eh.JSON.parse;function P(n){B.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=e6,this.L=this.M=!1}r(P,B);var e6="",e5=/^https?$/i,e3=["POST","PUT"];function xd(n){return em&&"number"==typeof n.timeout&&void 0!==n.ontimeout}function vd(n,l){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=l,n.m=5,yd(n),zd(n)}function yd(n){n.F||(n.F=!0,C(n,"complete"),C(n,"error"))}function Ad(n){if(n.h&&void 0!==ec&&(!n.C[1]||4!=H(n)||2!=n.da())){if(n.v&&4==H(n))yb(n.La,0,n);else if(C(n,"readystatechange"),4==H(n)){n.h=!1;try{let L=n.da();switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l,d,f=!0;break;default:f=!1}if(!(l=f)){if(d=0===L){var _=String(n.I).match(eG)[1]||null;!_&&eh.self&&eh.self.location&&(_=eh.self.location.protocol.slice(0,-1)),d=!e5.test(_?_.toLowerCase():"")}l=d}if(l)C(n,"complete"),C(n,"success");else{n.m=6;try{var E=2<H(n)?n.g.statusText:""}catch(n){E=""}n.j=E+" ["+n.da()+"]",yd(n)}}finally{zd(n)}}}}function zd(n,l){if(n.g){wd(n);let d=n.g,f=n.C[0]?()=>{}:null;n.g=null,n.C=null,l||C(n,"ready");try{d.onreadystatechange=f}catch(n){}}}function wd(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(eh.clearTimeout(n.A),n.A=null)}function H(n){return n.g?n.g.readyState:0}function mc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case e6:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch(n){return null}}function tc(n){let l={};n=(n.g&&2<=H(n)&&n.g.getAllResponseHeaders()||"").split("\r\n");for(let f=0;f<n.length;f++){if(x(n[f]))continue;var d=qb(n[f]);let _=d[0];if("string"!=typeof(d=d[1]))continue;d=d.trim();let E=l[_]||[];l[_]=E,E.push(d)}Oa(l,function(n){return n.join(", ")})}function Bd(n){let l="";return Na(n,function(n,d){l+=d+":"+n+"\r\n"}),l}function Cd(n,l,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=Bd(d),"string"==typeof n?null!=d&&encodeURIComponent(String(d)):K(n,l,d))}function Dd(n,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[n]||l}function Ed(n){this.Ga=0,this.j=[],this.l=new Gb,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Dd("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Dd("baseRetryDelayMs",5e3,n),this.hb=Dd("retryDelaySeedMs",1e4,n),this.eb=Dd("forwardChannelMaxRetries",2,n),this.xa=Dd("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new cd(n&&n.concurrentRequestLimit),this.Ja=new hd,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hc(n){if(Fd(n),3==n.H){var l=n.W++,d=G(n.I);if(K(d,"SID",n.K),K(d,"RID",l),K(d,"TYPE","terminate"),Gd(n,d),(l=new bc(n,n.l,l)).L=2,l.A=hc(G(d)),d=!1,eh.navigator&&eh.navigator.sendBeacon)try{d=eh.navigator.sendBeacon(l.A.toString(),"")}catch(n){}!d&&eh.Image&&((new Image).src=l.A,d=!0),d||(l.g=lc(l.l,null),l.g.ha(l.A)),l.G=Date.now(),jc(l)}Hd(n)}function zc(n){n.g&&(vc(n),n.g.cancel(),n.g=null)}function Fd(n){zc(n),n.u&&(eh.clearTimeout(n.u),n.u=null),yc(n),n.i.cancel(),n.m&&("number"==typeof n.m&&eh.clearTimeout(n.m),n.m=null)}function Gc(n){if(!ed(n.i)&&!n.m){n.m=!0;var l=n.Na;eM||vb(),eL||(eM(),eL=!0),eF.add(l,n),n.C=0}}function Id(n,l){return!(Bc(n.i)>=n.i.j-(n.m?1:0))&&(n.m?(n.j=l.F.concat(n.j),!0):1!=n.H&&2!=n.H&&!(n.C>=(n.cb?0:n.eb))&&(n.m=Rb(q(n.Na,n,l),Jd(n,n.C)),n.C++,!0))}function Ld(n,l){var d;d=l?l.m:n.W++;let f=G(n.I);K(f,"SID",n.K),K(f,"RID",d),K(f,"AID",n.V),Gd(n,f),n.o&&n.s&&Cd(f,n.o,n.s),d=new bc(n,n.l,d,n.C+1),null===n.o&&(d.I=n.s),l&&(n.j=l.F.concat(n.j)),l=Kd(n,d,1e3),d.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Cc(n.i,d),gc(d,f,l)}function Gd(n,l){n.na&&Na(n.na,function(n,d){K(l,d,n)}),n.h&&Kc({},function(n,d){K(l,d,n)})}function Kd(n,l,d){d=Math.min(n.j.length,d);var f=n.h?q(n.h.Va,n.h,n):null;e:{var _=n.j;let l=-1;for(;;){let n=["count="+d];-1==l?0<d?(l=_[0].g,n.push("ofs="+l)):l=0:n.push("ofs="+l);let E=!0;for(let L=0;L<d;L++){let d=_[L].g,z=_[L].map;if(0>(d-=l))l=Math.max(0,_[L].g-100),E=!1;else try{id(z,n,"req"+d+"_")}catch(n){f&&f(z)}}if(E){f=n.join("&");break e}}}return n=n.j.splice(0,d),l.F=n,f}function Fc(n){if(!n.g&&!n.u){n.ba=1;var l=n.Ma;eM||vb(),eL||(eM(),eL=!0),eF.add(l,n),n.A=0}}function Ac(n){return!n.g&&!n.u&&!(3<=n.A)&&(n.ba++,n.u=Rb(q(n.Ma,n),Jd(n,n.A)),n.A++,!0)}function vc(n){null!=n.B&&(eh.clearTimeout(n.B),n.B=null)}function Md(n){n.g=new bc(n,n.l,"rpc",n.ba),null===n.o&&(n.g.I=n.s),n.g.O=0;var l=G(n.wa);K(l,"RID","rpc"),K(l,"SID",n.K),K(l,"AID",n.V),K(l,"CI",n.G?"0":"1"),!n.G&&n.qa&&K(l,"TO",n.qa),K(l,"TYPE","xmlhttp"),Gd(n,l),n.o&&n.s&&Cd(l,n.o,n.s),n.L&&n.g.setTimeout(n.L);var d=n.g;n=n.pa,d.L=1,d.A=hc(G(l)),d.u=null,d.S=!0,ic(d,n)}function yc(n){null!=n.v&&(eh.clearTimeout(n.v),n.v=null)}function sc(n,l){var d=null;if(n.g==l){yc(n),vc(n),n.g=null;var f=2}else{if(!xc(n.i,l))return;d=l.F,Ec(n.i,l),f=1}if(0!=n.H){if(l.i){if(1==f){d=l.u?l.u.length:0,l=Date.now()-l.G;var _=n.C;C(f=Mb(),new Qb(f,d)),Gc(n)}else Fc(n)}else if(3==(_=l.s)||0==_&&0<l.ca||!(1==f&&Id(n,l)||2==f&&Ac(n)))switch(d&&0<d.length&&((l=n.i).i=l.i.concat(d)),_){case 1:J(n,5);break;case 4:J(n,10);break;case 3:J(n,6);break;default:J(n,2)}}}function Jd(n,l){let d=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(d*=2),d*l}function J(n,l){if(n.l.info("Error code "+l),2==l){var d=null;n.h&&(d=null);var f=q(n.pb,n);d||(d=new M("//www.google.com/images/cleardot.gif"),eh.location&&"http"==eh.location.protocol||Nc(d,"https"),hc(d)),jd(d.toString(),f)}else F(2);n.H=0,n.h&&n.h.za(l),Hd(n),Fd(n)}function Hd(n){if(n.H=0,n.ma=[],n.h){let l=fd(n.i);(0!=l.length||0!=n.j.length)&&(na(n.ma,l),na(n.ma,n.j),n.i.i.length=0,ma(n.j),n.j.length=0),n.h.ya()}}function Dc(n,l,d){var f=d instanceof M?G(d):new M(d);if(""!=f.g)l&&(f.g=l+"."+f.g),Oc(f,f.m);else{var _=eh.location;f=_.protocol,l=l?l+"."+_.hostname:_.hostname,_=+_.port;var E=new M(null);f&&Nc(E,f),l&&(E.g=l),_&&Oc(E,_),d&&(E.l=d),f=E}return d=n.F,l=n.Da,d&&l&&K(f,d,l),K(f,"VER",n.ra),Gd(n,f),f}function lc(n,l,d){if(l&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return(l=new P(n.Ha&&!n.va?new ld({ob:d}):n.va)).Oa(n.J),l}function Nd(){}function Od(){if(em&&!(10<=Number(ew)))throw Error("Environmental error: no available transport.")}function Q(n,l){B.call(this),this.g=new Ed(l),this.l=n,this.h=l&&l.messageUrlParams||null,n=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(n?n["X-WebChannel-Content-Type"]=l.messageContentType:n={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.Ca&&(n?n["X-WebChannel-Client-Profile"]=l.Ca:n={"X-WebChannel-Client-Profile":l.Ca}),this.g.U=n,(n=l&&l.cc)&&!x(n)&&(this.g.o=n),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!x(l)&&(this.g.F=l,null!==(n=this.h)&&l in n&&l in(n=this.h)&&delete n[l]),this.j=new R(this)}function Pd(n){Yb.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var l=n.__sm__;if(l){e:{for(let d in l){n=d;break e}n=void 0}(this.i=n)&&(n=this.i,l=null!==l&&n in l?l[n]:void 0),this.data=l}else this.data=n}function Qd(){Zb.call(this),this.status=1}function R(n){this.g=n}function S(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Sd(n,l,d){d||(d=0);var f=Array(16);if("string"==typeof l)for(var _=0;16>_;++_)f[_]=l.charCodeAt(d++)|l.charCodeAt(d++)<<8|l.charCodeAt(d++)<<16|l.charCodeAt(d++)<<24;else for(_=0;16>_;++_)f[_]=l[d++]|l[d++]<<8|l[d++]<<16|l[d++]<<24;l=n.g[0],d=n.g[1],_=n.g[2];var E=n.g[3],L=l+(E^d&(_^E))+f[0]+3614090360&4294967295;L=E+(_^(l=d+(L<<7&4294967295|L>>>25))&(d^_))+f[1]+3905402710&4294967295,L=_+(d^(E=l+(L<<12&4294967295|L>>>20))&(l^d))+f[2]+606105819&4294967295,L=d+(l^(_=E+(L<<17&4294967295|L>>>15))&(E^l))+f[3]+3250441966&4294967295,L=l+(E^(d=_+(L<<22&4294967295|L>>>10))&(_^E))+f[4]+4118548399&4294967295,L=E+(_^(l=d+(L<<7&4294967295|L>>>25))&(d^_))+f[5]+1200080426&4294967295,L=_+(d^(E=l+(L<<12&4294967295|L>>>20))&(l^d))+f[6]+2821735955&4294967295,L=d+(l^(_=E+(L<<17&4294967295|L>>>15))&(E^l))+f[7]+4249261313&4294967295,L=l+(E^(d=_+(L<<22&4294967295|L>>>10))&(_^E))+f[8]+1770035416&4294967295,L=E+(_^(l=d+(L<<7&4294967295|L>>>25))&(d^_))+f[9]+2336552879&4294967295,L=_+(d^(E=l+(L<<12&4294967295|L>>>20))&(l^d))+f[10]+4294925233&4294967295,L=d+(l^(_=E+(L<<17&4294967295|L>>>15))&(E^l))+f[11]+2304563134&4294967295,L=l+(E^(d=_+(L<<22&4294967295|L>>>10))&(_^E))+f[12]+1804603682&4294967295,L=E+(_^(l=d+(L<<7&4294967295|L>>>25))&(d^_))+f[13]+4254626195&4294967295,L=_+(d^(E=l+(L<<12&4294967295|L>>>20))&(l^d))+f[14]+2792965006&4294967295,L=d+(l^(_=E+(L<<17&4294967295|L>>>15))&(E^l))+f[15]+1236535329&4294967295,d=_+(L<<22&4294967295|L>>>10),L=l+(_^E&(d^_))+f[1]+4129170786&4294967295,l=d+(L<<5&4294967295|L>>>27),L=E+(d^_&(l^d))+f[6]+3225465664&4294967295,E=l+(L<<9&4294967295|L>>>23),L=_+(l^d&(E^l))+f[11]+643717713&4294967295,_=E+(L<<14&4294967295|L>>>18),L=d+(E^l&(_^E))+f[0]+3921069994&4294967295,d=_+(L<<20&4294967295|L>>>12),L=l+(_^E&(d^_))+f[5]+3593408605&4294967295,l=d+(L<<5&4294967295|L>>>27),L=E+(d^_&(l^d))+f[10]+38016083&4294967295,E=l+(L<<9&4294967295|L>>>23),L=_+(l^d&(E^l))+f[15]+3634488961&4294967295,_=E+(L<<14&4294967295|L>>>18),L=d+(E^l&(_^E))+f[4]+3889429448&4294967295,d=_+(L<<20&4294967295|L>>>12),L=l+(_^E&(d^_))+f[9]+568446438&4294967295,l=d+(L<<5&4294967295|L>>>27),L=E+(d^_&(l^d))+f[14]+3275163606&4294967295,E=l+(L<<9&4294967295|L>>>23),L=_+(l^d&(E^l))+f[3]+4107603335&4294967295,_=E+(L<<14&4294967295|L>>>18),L=d+(E^l&(_^E))+f[8]+1163531501&4294967295,d=_+(L<<20&4294967295|L>>>12),L=l+(_^E&(d^_))+f[13]+2850285829&4294967295,l=d+(L<<5&4294967295|L>>>27),L=E+(d^_&(l^d))+f[2]+4243563512&4294967295,E=l+(L<<9&4294967295|L>>>23),L=_+(l^d&(E^l))+f[7]+1735328473&4294967295,_=E+(L<<14&4294967295|L>>>18),L=d+(E^l&(_^E))+f[12]+2368359562&4294967295,L=l+((d=_+(L<<20&4294967295|L>>>12))^_^E)+f[5]+4294588738&4294967295,L=E+((l=d+(L<<4&4294967295|L>>>28))^d^_)+f[8]+2272392833&4294967295,L=_+((E=l+(L<<11&4294967295|L>>>21))^l^d)+f[11]+1839030562&4294967295,L=d+((_=E+(L<<16&4294967295|L>>>16))^E^l)+f[14]+4259657740&4294967295,L=l+((d=_+(L<<23&4294967295|L>>>9))^_^E)+f[1]+2763975236&4294967295,L=E+((l=d+(L<<4&4294967295|L>>>28))^d^_)+f[4]+1272893353&4294967295,L=_+((E=l+(L<<11&4294967295|L>>>21))^l^d)+f[7]+4139469664&4294967295,L=d+((_=E+(L<<16&4294967295|L>>>16))^E^l)+f[10]+3200236656&4294967295,L=l+((d=_+(L<<23&4294967295|L>>>9))^_^E)+f[13]+681279174&4294967295,L=E+((l=d+(L<<4&4294967295|L>>>28))^d^_)+f[0]+3936430074&4294967295,L=_+((E=l+(L<<11&4294967295|L>>>21))^l^d)+f[3]+3572445317&4294967295,L=d+((_=E+(L<<16&4294967295|L>>>16))^E^l)+f[6]+76029189&4294967295,L=l+((d=_+(L<<23&4294967295|L>>>9))^_^E)+f[9]+3654602809&4294967295,L=E+((l=d+(L<<4&4294967295|L>>>28))^d^_)+f[12]+3873151461&4294967295,L=_+((E=l+(L<<11&4294967295|L>>>21))^l^d)+f[15]+530742520&4294967295,L=d+((_=E+(L<<16&4294967295|L>>>16))^E^l)+f[2]+3299628645&4294967295,d=_+(L<<23&4294967295|L>>>9),L=l+(_^(d|~E))+f[0]+4096336452&4294967295,l=d+(L<<6&4294967295|L>>>26),L=E+(d^(l|~_))+f[7]+1126891415&4294967295,E=l+(L<<10&4294967295|L>>>22),L=_+(l^(E|~d))+f[14]+2878612391&4294967295,_=E+(L<<15&4294967295|L>>>17),L=d+(E^(_|~l))+f[5]+4237533241&4294967295,d=_+(L<<21&4294967295|L>>>11),L=l+(_^(d|~E))+f[12]+1700485571&4294967295,l=d+(L<<6&4294967295|L>>>26),L=E+(d^(l|~_))+f[3]+2399980690&4294967295,E=l+(L<<10&4294967295|L>>>22),L=_+(l^(E|~d))+f[10]+4293915773&4294967295,_=E+(L<<15&4294967295|L>>>17),L=d+(E^(_|~l))+f[1]+2240044497&4294967295,d=_+(L<<21&4294967295|L>>>11),L=l+(_^(d|~E))+f[8]+1873313359&4294967295,l=d+(L<<6&4294967295|L>>>26),L=E+(d^(l|~_))+f[15]+4264355552&4294967295,E=l+(L<<10&4294967295|L>>>22),L=_+(l^(E|~d))+f[6]+2734768916&4294967295,_=E+(L<<15&4294967295|L>>>17),L=d+(E^(_|~l))+f[13]+1309151649&4294967295,d=_+(L<<21&4294967295|L>>>11),L=l+(_^(d|~E))+f[4]+4149444226&4294967295,l=d+(L<<6&4294967295|L>>>26),L=E+(d^(l|~_))+f[11]+3174756917&4294967295,E=l+(L<<10&4294967295|L>>>22),L=_+(l^(E|~d))+f[2]+718787259&4294967295,_=E+(L<<15&4294967295|L>>>17),L=d+(E^(_|~l))+f[9]+3951481745&4294967295,n.g[0]=n.g[0]+l&4294967295,n.g[1]=n.g[1]+(_+(L<<21&4294967295|L>>>11))&4294967295,n.g[2]=n.g[2]+_&4294967295,n.g[3]=n.g[3]+E&4294967295}function T(n,l){this.h=l;for(var d=[],f=!0,_=n.length-1;0<=_;_--){var E=0|n[_];f&&E==l||(d[_]=E,f=!1)}this.g=d}(er=P.prototype).Oa=function(n){this.M=n},er.ha=function(n,l,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);l=l?l.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():L.g(),this.C=this.u?Vb(this.u):Vb(L),this.g.onreadystatechange=q(this.La,this);try{this.G=!0,this.g.open(l,String(n),!0),this.G=!1}catch(n){vd(this,n);return}if(n=d||"",d=new Map(this.headers),f){if(Object.getPrototypeOf(f)===Object.prototype)for(var _ in f)d.set(_,f[_]);else if("function"==typeof f.keys&&"function"==typeof f.get)for(let n of f.keys())d.set(n,f.get(n));else throw Error("Unknown input type for opt_headers: "+String(f))}for(let[E,L]of(f=Array.from(d.keys()).find(n=>"content-type"==n.toLowerCase()),_=eh.FormData&&n instanceof eh.FormData,!(0<=ef(e3,l))||f||_||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),d))this.g.setRequestHeader(E,L);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wd(this),0<this.B&&((this.L=xd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q(this.ua,this)):this.A=yb(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(n){vd(this,n)}},er.ua=function(){void 0!==ec&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,C(this,"timeout"),this.abort(8))},er.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,C(this,"complete"),C(this,"abort"),zd(this))},er.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zd(this,!0)),P.$.N.call(this)},er.La=function(){this.s||(this.G||this.v||this.l?Ad(this):this.kb())},er.kb=function(){Ad(this)},er.isActive=function(){return!!this.g},er.da=function(){try{return 2<H(this)?this.g.status:-1}catch(n){return -1}},er.ja=function(){try{return this.g?this.g.responseText:""}catch(n){return""}},er.Wa=function(n){if(this.g){var l=this.g.responseText;return n&&0==l.indexOf(n)&&(l=l.substring(n.length)),e9(l)}},er.Ia=function(){return this.m},er.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(er=Ed.prototype).ra=8,er.H=1,er.Na=function(n){if(this.m){if(this.m=null,1==this.H){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;let _=new bc(this,this.l,n),E=this.s;if(this.U&&(E?Ra(E=Pa(E),this.U):E=this.U),null!==this.o||this.O||(_.I=E,E=null),this.P)e:{for(var l=0,d=0;d<this.j.length;d++){t:{var f=this.j[d];if("__data__"in f.map&&"string"==typeof(f=f.map.__data__)){f=f.length;break t}f=void 0}if(void 0===f)break;if(4096<(l+=f)){l=d;break e}if(4096===l||d===this.j.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Kd(this,_,l),K(d=G(this.I),"RID",n),K(d,"CVER",22),this.F&&K(d,"X-HTTP-Session-Id",this.F),Gd(this,d),E&&(this.O?l="headers="+encodeURIComponent(String(Bd(E)))+"&"+l:this.o&&Cd(d,this.o,E)),Cc(this.i,_),this.bb&&K(d,"TYPE","init"),this.P?(K(d,"$req",l),K(d,"SID","null"),_.aa=!0,gc(_,d,null)):gc(_,d,l),this.H=2}}else 3==this.H&&(n?Ld(this,n):0==this.j.length||ed(this.i)||Ld(this))}},er.Ma=function(){if(this.u=null,Md(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Rb(q(this.jb,this),n)}},er.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,F(10),zc(this),Md(this))},er.ib=function(){null!=this.v&&(this.v=null,zc(this),Ac(this),F(19))},er.pb=function(n){n?(this.l.info("Successfully pinged google.com"),F(2)):(this.l.info("Failed to ping google.com"),F(1))},er.isActive=function(){return!!this.h&&this.h.isActive(this)},(er=Nd.prototype).Ba=function(){},er.Aa=function(){},er.za=function(){},er.ya=function(){},er.isActive=function(){return!0},er.Va=function(){},Od.prototype.g=function(n,l){return new Q(n,l)},r(Q,B),Q.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,l=this.l,d=this.h||void 0;F(0),n.Y=l,n.na=d||{},n.G=n.aa,n.I=Dc(n,null,n.Y),Gc(n)},Q.prototype.close=function(){Hc(this.g)},Q.prototype.u=function(n){var l=this.g;if("string"==typeof n){var d={};d.__data__=n,n=d}else this.v&&((d={}).__data__=ex(n),n=d);l.j.push(new e0(l.fb++,n)),3==l.H&&Gc(l)},Q.prototype.N=function(){this.g.h=null,delete this.j,Hc(this.g),delete this.g,Q.$.N.call(this)},r(Pd,Yb),r(Qd,Zb),r(R,Nd),R.prototype.Ba=function(){C(this.g,"a")},R.prototype.Aa=function(n){C(this.g,new Pd(n))},R.prototype.za=function(n){C(this.g,new Qd)},R.prototype.ya=function(){C(this.g,"b")},r(S,function(){this.blockSize=-1}),S.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},S.prototype.j=function(n,l){void 0===l&&(l=n.length);for(var d=l-this.blockSize,f=this.m,_=this.h,E=0;E<l;){if(0==_)for(;E<=d;)Sd(this,n,E),E+=this.blockSize;if("string"==typeof n){for(;E<l;)if(f[_++]=n.charCodeAt(E++),_==this.blockSize){Sd(this,f),_=0;break}}else for(;E<l;)if(f[_++]=n[E++],_==this.blockSize){Sd(this,f),_=0;break}}this.h=_,this.i+=l},S.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var l=1;l<n.length-8;++l)n[l]=0;var d=8*this.i;for(l=n.length-8;l<n.length;++l)n[l]=255&d,d/=256;for(this.j(n),n=Array(16),l=d=0;4>l;++l)for(var f=0;32>f;f+=8)n[d++]=this.g[l]>>>f&255;return n};var e7={};function Td(n){return -128<=n&&128>n?ra(n,function(n){return new T([0|n],0>n?-1:0)}):new T([0|n],0>n?-1:0)}function U(n){if(isNaN(n)||!isFinite(n))return te;if(0>n)return W(U(-n));for(var l=[],d=1,f=0;n>=d;f++)l[f]=n/d|0,d*=e8;return new T(l,0)}function Vd(n,l){if(0==n.length)throw Error("number format error: empty string");if(2>(l=l||10)||36<l)throw Error("radix out of range: "+l);if("-"==n.charAt(0))return W(Vd(n.substring(1),l));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var d=U(Math.pow(l,8)),f=te,_=0;_<n.length;_+=8){var E=Math.min(8,n.length-_),L=parseInt(n.substring(_,_+E),l);8>E?(E=U(Math.pow(l,E)),f=f.R(E).add(U(L))):f=(f=f.R(d)).add(U(L))}return f}var e8=4294967296,te=Td(0),tt=Td(1),tr=Td(16777216);function Y(n){if(0!=n.h)return!1;for(var l=0;l<n.g.length;l++)if(0!=n.g[l])return!1;return!0}function X(n){return -1==n.h}function W(n){for(var l=n.g.length,d=[],f=0;f<l;f++)d[f]=~n.g[f];return new T(d,~n.h).add(tt)}function Zd(n,l){return n.add(W(l))}function $d(n,l){for(;(65535&n[l])!=n[l];)n[l+1]+=n[l]>>>16,n[l]&=65535,l++}function ae(n,l){this.g=n,this.h=l}function Yd(n,l){if(Y(l))throw Error("division by zero");if(Y(n))return new ae(te,te);if(X(n))return l=Yd(W(n),l),new ae(W(l.g),W(l.h));if(X(l))return l=Yd(n,W(l)),new ae(W(l.g),l.h);if(30<n.g.length){if(X(n)||X(l))throw Error("slowDivide_ only works with positive integers.");for(var d=tt,f=l;0>=f.X(n);)d=be(d),f=be(f);var _=Z(d,1),E=Z(f,1);for(f=Z(f,2),d=Z(d,2);!Y(f);){var L=E.add(f);0>=L.X(n)&&(_=_.add(d),E=L),f=Z(f,1),d=Z(d,1)}return l=Zd(n,_.R(l)),new ae(_,l)}for(_=te;0<=n.X(l);){for(f=48>=(f=Math.ceil(Math.log(d=Math.max(1,Math.floor(n.ea()/l.ea())))/Math.LN2))?1:Math.pow(2,f-48),L=(E=U(d)).R(l);X(L)||0<L.X(n);)d-=f,L=(E=U(d)).R(l);Y(E)&&(E=tt),_=_.add(E),n=Zd(n,L)}return new ae(_,n)}function be(n){for(var l=n.g.length+1,d=[],f=0;f<l;f++)d[f]=n.D(f)<<1|n.D(f-1)>>>31;return new T(d,n.h)}function Z(n,l){var d=l>>5;l%=32;for(var f=n.g.length-d,_=[],E=0;E<f;E++)_[E]=0<l?n.D(E+d)>>>l|n.D(E+d+1)<<32-l:n.D(E+d);return new T(_,n.h)}(er=T.prototype).ea=function(){if(X(this))return-W(this).ea();for(var n=0,l=1,d=0;d<this.g.length;d++){var f=this.D(d);n+=(0<=f?f:e8+f)*l,l*=e8}return n},er.toString=function(n){if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if(Y(this))return"0";if(X(this))return"-"+W(this).toString(n);for(var l=U(Math.pow(n,6)),d=this,f="";;){var _=Yd(d,l).g,E=((0<(d=Zd(d,_.R(l))).g.length?d.g[0]:d.h)>>>0).toString(n);if(Y(d=_))return E+f;for(;6>E.length;)E="0"+E;f=E+f}},er.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h},er.X=function(n){return X(n=Zd(this,n))?-1:Y(n)?0:1},er.abs=function(){return X(this)?W(this):this},er.add=function(n){for(var l=Math.max(this.g.length,n.g.length),d=[],f=0,_=0;_<=l;_++){var E=f+(65535&this.D(_))+(65535&n.D(_)),L=(E>>>16)+(this.D(_)>>>16)+(n.D(_)>>>16);f=L>>>16,E&=65535,L&=65535,d[_]=L<<16|E}return new T(d,-2147483648&d[d.length-1]?-1:0)},er.R=function(n){if(Y(this)||Y(n))return te;if(X(this))return X(n)?W(this).R(W(n)):W(W(this).R(n));if(X(n))return W(this.R(W(n)));if(0>this.X(tr)&&0>n.X(tr))return U(this.ea()*n.ea());for(var l=this.g.length+n.g.length,d=[],f=0;f<2*l;f++)d[f]=0;for(f=0;f<this.g.length;f++)for(var _=0;_<n.g.length;_++){var E=this.D(f)>>>16,L=65535&this.D(f),z=n.D(_)>>>16,et=65535&n.D(_);d[2*f+2*_]+=L*et,$d(d,2*f+2*_),d[2*f+2*_+1]+=E*et,$d(d,2*f+2*_+1),d[2*f+2*_+1]+=L*z,$d(d,2*f+2*_+1),d[2*f+2*_+2]+=E*z,$d(d,2*f+2*_+2)}for(f=0;f<l;f++)d[f]=d[2*f+1]<<16|d[2*f];for(f=l;f<2*l;f++)d[f]=0;return new T(d,0)},er.gb=function(n){return Yd(this,n).h},er.and=function(n){for(var l=Math.max(this.g.length,n.g.length),d=[],f=0;f<l;f++)d[f]=this.D(f)&n.D(f);return new T(d,this.h&n.h)},er.or=function(n){for(var l=Math.max(this.g.length,n.g.length),d=[],f=0;f<l;f++)d[f]=this.D(f)|n.D(f);return new T(d,this.h|n.h)},er.xor=function(n){for(var l=Math.max(this.g.length,n.g.length),d=[],f=0;f<l;f++)d[f]=this.D(f)^n.D(f);return new T(d,this.h^n.h)},Od.prototype.createWebChannel=Od.prototype.g,Q.prototype.send=Q.prototype.u,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,eq.NO_ERROR=0,eq.TIMEOUT=8,eq.HTTP_ERROR=6,eK.COMPLETE="complete",Wb.EventType=ez,ez.OPEN="a",ez.CLOSE="b",ez.ERROR="c",ez.MESSAGE="d",B.prototype.listen=B.prototype.O,P.prototype.listenOnce=P.prototype.P,P.prototype.getLastError=P.prototype.Sa,P.prototype.getLastErrorCode=P.prototype.Ia,P.prototype.getStatus=P.prototype.da,P.prototype.getResponseJson=P.prototype.Wa,P.prototype.getResponseText=P.prototype.ja,P.prototype.send=P.prototype.ha,P.prototype.setWithCredentials=P.prototype.Oa,S.prototype.digest=S.prototype.l,S.prototype.reset=S.prototype.reset,S.prototype.update=S.prototype.j,T.prototype.add=T.prototype.add,T.prototype.multiply=T.prototype.R,T.prototype.modulo=T.prototype.gb,T.prototype.compare=T.prototype.X,T.prototype.toNumber=T.prototype.ea,T.prototype.toString=T.prototype.toString,T.prototype.getBits=T.prototype.D,T.fromNumber=U,T.fromString=Vd;var tn=eu.createWebChannelTransport=function(){return new Od},ti=eu.getStatEventTarget=function(){return Mb()},ts=eu.ErrorCode=eq,to=eu.EventType=eK,ta=eu.Event=ej,tl=eu.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};eu.FetchXmlHttpFactory=ld;var tu=eu.WebChannel=Wb,th=eu.XhrIo=P,td=eu.Md5=S,tf=eu.Integer=T,tp=d(3454);let t_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let User=class User{constructor(n){this.uid=n}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(n){return n.uid===this.uid}};User.UNAUTHENTICATED=new User(null),User.GOOGLE_CREDENTIALS=new User("google-credentials-uid"),User.FIRST_PARTY=new User("first-party-uid"),User.MOCK_USER=new User("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tm="10.7.2",tg=new es.Yd("@firebase/firestore");function __PRIVATE_getLogLevel(){return tg.logLevel}function __PRIVATE_logDebug(n,...l){if(tg.logLevel<=es.in.DEBUG){let d=l.map(__PRIVATE_argToString);tg.debug(`Firestore (${tm}): ${n}`,...d)}}function __PRIVATE_logError(n,...l){if(tg.logLevel<=es.in.ERROR){let d=l.map(__PRIVATE_argToString);tg.error(`Firestore (${tm}): ${n}`,...d)}}function __PRIVATE_logWarn(n,...l){if(tg.logLevel<=es.in.WARN){let d=l.map(__PRIVATE_argToString);tg.warn(`Firestore (${tm}): ${n}`,...d)}}function __PRIVATE_argToString(n){if("string"==typeof n)return n;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(n)}catch(l){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fail(n="Unexpected state"){let l=`FIRESTORE (${tm}) INTERNAL ASSERTION FAILED: `+n;throw __PRIVATE_logError(l),Error(l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let FirestoreError=class FirestoreError extends eo.ZR{constructor(n,l){super(n,l),this.code=n,this.message=l,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_Deferred=class __PRIVATE_Deferred{constructor(){this.promise=new Promise((n,l)=>{this.resolve=n,this.reject=l})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_OAuthToken=class __PRIVATE_OAuthToken{constructor(n,l){this.user=l,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${n}`)}};let __PRIVATE_EmptyAuthCredentialsProvider=class __PRIVATE_EmptyAuthCredentialsProvider{getToken(){return Promise.resolve(null)}invalidateToken(){}start(n,l){n.enqueueRetryable(()=>l(User.UNAUTHENTICATED))}shutdown(){}};let __PRIVATE_EmulatorAuthCredentialsProvider=class __PRIVATE_EmulatorAuthCredentialsProvider{constructor(n){this.token=n,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(n,l){this.changeListener=l,n.enqueueRetryable(()=>l(this.token.user))}shutdown(){this.changeListener=null}};let __PRIVATE_FirebaseAuthCredentialsProvider=class __PRIVATE_FirebaseAuthCredentialsProvider{constructor(n){this.t=n,this.currentUser=User.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(n,l){let d=this.i,__PRIVATE_guardedChangeListener=n=>this.i!==d?(d=this.i,l(n)):Promise.resolve(),f=new __PRIVATE_Deferred;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new __PRIVATE_Deferred,n.enqueueRetryable(()=>__PRIVATE_guardedChangeListener(this.currentUser))};let __PRIVATE_awaitNextToken=()=>{let l=f;n.enqueueRetryable(async()=>{await l.promise,await __PRIVATE_guardedChangeListener(this.currentUser)})},__PRIVATE_registerAuth=n=>{__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=n,this.auth.addAuthTokenListener(this.o),__PRIVATE_awaitNextToken()};this.t.onInit(n=>__PRIVATE_registerAuth(n)),setTimeout(()=>{if(!this.auth){let n=this.t.getImmediate({optional:!0});n?__PRIVATE_registerAuth(n):(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new __PRIVATE_Deferred)}},0),__PRIVATE_awaitNextToken()}getToken(){let n=this.i,l=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(l).then(l=>this.i!==n?(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):l?("string"==typeof l.accessToken||fail(),new __PRIVATE_OAuthToken(l.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let n=this.auth&&this.auth.getUid();return null===n||"string"==typeof n||fail(),new User(n)}};let __PRIVATE_FirstPartyToken=class __PRIVATE_FirstPartyToken{constructor(n,l,d){this.l=n,this.h=l,this.P=d,this.type="FirstParty",this.user=User.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let n=this.T();return n&&this.I.set("Authorization",n),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}};let __PRIVATE_FirstPartyAuthCredentialsProvider=class __PRIVATE_FirstPartyAuthCredentialsProvider{constructor(n,l,d){this.l=n,this.h=l,this.P=d}getToken(){return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l,this.h,this.P))}start(n,l){n.enqueueRetryable(()=>l(User.FIRST_PARTY))}shutdown(){}invalidateToken(){}};let AppCheckToken=class AppCheckToken{constructor(n){this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};let __PRIVATE_FirebaseAppCheckTokenProvider=class __PRIVATE_FirebaseAppCheckTokenProvider{constructor(n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(n,l){let onTokenChanged=n=>{null!=n.error&&__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${n.error.message}`);let d=n.token!==this.R;return this.R=n.token,__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?l(n.token):Promise.resolve()};this.o=l=>{n.enqueueRetryable(()=>onTokenChanged(l))};let __PRIVATE_registerAppCheck=n=>{__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=n,this.appCheck.addTokenListener(this.o)};this.A.onInit(n=>__PRIVATE_registerAppCheck(n)),setTimeout(()=>{if(!this.appCheck){let n=this.A.getImmediate({optional:!0});n?__PRIVATE_registerAppCheck(n):__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let n=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(n).then(n=>n?("string"==typeof n.token||fail(),this.R=n.token,new AppCheckToken(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_randomBytes(n){let l="undefined"!=typeof self&&(self.crypto||self.msCrypto),d=new Uint8Array(n);if(l&&"function"==typeof l.getRandomValues)l.getRandomValues(d);else for(let l=0;l<n;l++)d[l]=Math.floor(256*Math.random());return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AutoId=class __PRIVATE_AutoId{static newId(){let n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=Math.floor(256/n.length)*n.length,d="";for(;d.length<20;){let f=__PRIVATE_randomBytes(40);for(let _=0;_<f.length;++_)d.length<20&&f[_]<l&&(d+=n.charAt(f[_]%n.length))}return d}};function __PRIVATE_primitiveComparator(n,l){return n<l?-1:n>l?1:0}function __PRIVATE_arrayEquals(n,l,d){return n.length===l.length&&n.every((n,f)=>d(n,l[f]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Timestamp=class Timestamp{constructor(n,l){if(this.seconds=n,this.nanoseconds=l,l<0||l>=1e9)throw new FirestoreError(ty.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+l);if(n<-62135596800||n>=253402300800)throw new FirestoreError(ty.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}static now(){return Timestamp.fromMillis(Date.now())}static fromDate(n){return Timestamp.fromMillis(n.getTime())}static fromMillis(n){let l=Math.floor(n/1e3),d=Math.floor(1e6*(n-1e3*l));return new Timestamp(l,d)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(n){return this.seconds===n.seconds?__PRIVATE_primitiveComparator(this.nanoseconds,n.nanoseconds):__PRIVATE_primitiveComparator(this.seconds,n.seconds)}isEqual(n){return n.seconds===this.seconds&&n.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let n=this.seconds- -62135596800;return String(n).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotVersion=class SnapshotVersion{constructor(n){this.timestamp=n}static fromTimestamp(n){return new SnapshotVersion(n)}static min(){return new SnapshotVersion(new Timestamp(0,0))}static max(){return new SnapshotVersion(new Timestamp(253402300799,999999999))}compareTo(n){return this.timestamp._compareTo(n.timestamp)}isEqual(n){return this.timestamp.isEqual(n.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BasePath=class BasePath{constructor(n,l,d){void 0===l?l=0:l>n.length&&fail(),void 0===d?d=n.length-l:d>n.length-l&&fail(),this.segments=n,this.offset=l,this.len=d}get length(){return this.len}isEqual(n){return 0===BasePath.comparator(this,n)}child(n){let l=this.segments.slice(this.offset,this.limit());return n instanceof BasePath?n.forEach(n=>{l.push(n)}):l.push(n),this.construct(l)}limit(){return this.offset+this.length}popFirst(n){return n=void 0===n?1:n,this.construct(this.segments,this.offset+n,this.length-n)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(n){return this.segments[this.offset+n]}isEmpty(){return 0===this.length}isPrefixOf(n){if(n.length<this.length)return!1;for(let l=0;l<this.length;l++)if(this.get(l)!==n.get(l))return!1;return!0}isImmediateParentOf(n){if(this.length+1!==n.length)return!1;for(let l=0;l<this.length;l++)if(this.get(l)!==n.get(l))return!1;return!0}forEach(n){for(let l=this.offset,d=this.limit();l<d;l++)n(this.segments[l])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(n,l){let d=Math.min(n.length,l.length);for(let f=0;f<d;f++){let d=n.get(f),_=l.get(f);if(d<_)return -1;if(d>_)return 1}return n.length<l.length?-1:n.length>l.length?1:0}};let ResourcePath=class ResourcePath extends BasePath{construct(n,l,d){return new ResourcePath(n,l,d)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...n){let l=[];for(let d of n){if(d.indexOf("//")>=0)throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid segment (${d}). Paths must not contain // in them.`);l.push(...d.split("/").filter(n=>n.length>0))}return new ResourcePath(l)}static emptyPath(){return new ResourcePath([])}};let tv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let FieldPath$1=class FieldPath$1 extends BasePath{construct(n,l,d){return new FieldPath$1(n,l,d)}static isValidIdentifier(n){return tv.test(n)}canonicalString(){return this.toArray().map(n=>(n=n.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),FieldPath$1.isValidIdentifier(n)||(n="`"+n+"`"),n)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new FieldPath$1(["__name__"])}static fromServerFormat(n){let l=[],d="",f=0,__PRIVATE_addCurrentSegment=()=>{if(0===d.length)throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);l.push(d),d=""},_=!1;for(;f<n.length;){let l=n[f];if("\\"===l){if(f+1===n.length)throw new FirestoreError(ty.INVALID_ARGUMENT,"Path has trailing escape character: "+n);let l=n[f+1];if("\\"!==l&&"."!==l&&"`"!==l)throw new FirestoreError(ty.INVALID_ARGUMENT,"Path has invalid escape sequence: "+n);d+=l,f+=2}else"`"===l?_=!_:"."!==l||_?d+=l:__PRIVATE_addCurrentSegment(),f++}if(__PRIVATE_addCurrentSegment(),_)throw new FirestoreError(ty.INVALID_ARGUMENT,"Unterminated ` in path: "+n);return new FieldPath$1(l)}static emptyPath(){return new FieldPath$1([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentKey=class DocumentKey{constructor(n){this.path=n}static fromPath(n){return new DocumentKey(ResourcePath.fromString(n))}static fromName(n){return new DocumentKey(ResourcePath.fromString(n).popFirst(5))}static empty(){return new DocumentKey(ResourcePath.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(n){return this.path.length>=2&&this.path.get(this.path.length-2)===n}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(n){return null!==n&&0===ResourcePath.comparator(this.path,n.path)}toString(){return this.path.toString()}static comparator(n,l){return ResourcePath.comparator(n.path,l.path)}static isDocumentKey(n){return n.length%2==0}static fromSegments(n){return new DocumentKey(new ResourcePath(n.slice()))}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldIndex=class FieldIndex{constructor(n,l,d,f){this.indexId=n,this.collectionGroup=l,this.fields=d,this.indexState=f}};function __PRIVATE_newIndexOffsetSuccessorFromReadTime(n,l){let d=n.toTimestamp().seconds,f=n.toTimestamp().nanoseconds+1,_=SnapshotVersion.fromTimestamp(1e9===f?new Timestamp(d+1,0):new Timestamp(d,f));return new IndexOffset(_,DocumentKey.empty(),l)}function __PRIVATE_newIndexOffsetFromDocument(n){return new IndexOffset(n.readTime,n.key,-1)}FieldIndex.UNKNOWN_ID=-1;let IndexOffset=class IndexOffset{constructor(n,l,d){this.readTime=n,this.documentKey=l,this.largestBatchId=d}static min(){return new IndexOffset(SnapshotVersion.min(),DocumentKey.empty(),-1)}static max(){return new IndexOffset(SnapshotVersion.max(),DocumentKey.empty(),-1)}};function __PRIVATE_indexOffsetComparator(n,l){let d=n.readTime.compareTo(l.readTime);return 0!==d?d:0!==(d=DocumentKey.comparator(n.documentKey,l.documentKey))?d:__PRIVATE_primitiveComparator(n.largestBatchId,l.largestBatchId)}let PersistenceTransaction=class PersistenceTransaction{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(n){this.onCommittedListeners.push(n)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(n=>n())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __PRIVATE_ignoreIfPrimaryLeaseLoss(n){if(n.code!==ty.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==n.message)throw n;__PRIVATE_logDebug("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PersistencePromise=class PersistencePromise{constructor(n){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(n){return this.next(void 0,n)}next(n,l){return this.callbackAttached&&fail(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(l,this.error):this.wrapSuccess(n,this.result):new PersistencePromise((d,f)=>{this.nextCallback=l=>{this.wrapSuccess(n,l).next(d,f)},this.catchCallback=n=>{this.wrapFailure(l,n).next(d,f)}})}toPromise(){return new Promise((n,l)=>{this.next(n,l)})}wrapUserFunction(n){try{let l=n();return l instanceof PersistencePromise?l:PersistencePromise.resolve(l)}catch(n){return PersistencePromise.reject(n)}}wrapSuccess(n,l){return n?this.wrapUserFunction(()=>n(l)):PersistencePromise.resolve(l)}wrapFailure(n,l){return n?this.wrapUserFunction(()=>n(l)):PersistencePromise.reject(l)}static resolve(n){return new PersistencePromise((l,d)=>{l(n)})}static reject(n){return new PersistencePromise((l,d)=>{d(n)})}static waitFor(n){return new PersistencePromise((l,d)=>{let f=0,_=0,E=!1;n.forEach(n=>{++f,n.next(()=>{++_,E&&_===f&&l()},n=>d(n))}),E=!0,_===f&&l()})}static or(n){let l=PersistencePromise.resolve(!1);for(let d of n)l=l.next(n=>n?PersistencePromise.resolve(n):d());return l}static forEach(n,l){let d=[];return n.forEach((n,f)=>{d.push(l.call(this,n,f))}),this.waitFor(d)}static mapArray(n,l){return new PersistencePromise((d,f)=>{let _=n.length,E=Array(_),L=0;for(let z=0;z<_;z++){let et=z;l(n[et]).next(n=>{E[et]=n,++L===_&&d(E)},n=>f(n))}})}static doWhile(n,l){return new PersistencePromise((d,f)=>{let process=()=>{!0===n()?l().next(()=>{process()},f):d()};process()})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_SimpleDbTransaction=class __PRIVATE_SimpleDbTransaction{constructor(n,l){this.action=n,this.transaction=l,this.aborted=!1,this.V=new __PRIVATE_Deferred,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{l.error?this.V.reject(new __PRIVATE_IndexedDbTransactionError(n,l.error)):this.V.resolve()},this.transaction.onerror=l=>{let d=__PRIVATE_checkForAndReportiOSError(l.target.error);this.V.reject(new __PRIVATE_IndexedDbTransactionError(n,d))}}static open(n,l,d,f){try{return new __PRIVATE_SimpleDbTransaction(l,n.transaction(f,d))}catch(n){throw new __PRIVATE_IndexedDbTransactionError(l,n)}}get m(){return this.V.promise}abort(n){n&&this.V.reject(n),this.aborted||(__PRIVATE_logDebug("SimpleDb","Aborting transaction:",n?n.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let n=this.transaction;this.aborted||"function"!=typeof n.commit||n.commit()}store(n){let l=this.transaction.objectStore(n);return new __PRIVATE_SimpleDbStore(l)}};let __PRIVATE_SimpleDb=class __PRIVATE_SimpleDb{constructor(n,l,d){this.name=n,this.version=l,this.p=d,12.2===__PRIVATE_SimpleDb.S((0,eo.z$)())&&__PRIVATE_logError("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(n){return __PRIVATE_logDebug("SimpleDb","Removing database:",n),__PRIVATE_wrapRequest(window.indexedDB.deleteDatabase(n)).toPromise()}static D(){if(!(0,eo.hl)())return!1;if(__PRIVATE_SimpleDb.C())return!0;let n=(0,eo.z$)(),l=__PRIVATE_SimpleDb.S(n),d=__PRIVATE_SimpleDb.v(n);return!(n.indexOf("MSIE ")>0||n.indexOf("Trident/")>0||n.indexOf("Edge/")>0||0<l&&l<10||0<d&&d<4.5)}static C(){var n;return void 0!==tp&&"YES"===(null===(n=tp.__PRIVATE_env)||void 0===n?void 0:n.F)}static M(n,l){return n.store(l)}static S(n){let l=n.match(/i(?:phone|pad|pod) os ([\d_]+)/i),d=l?l[1].split("_").slice(0,2).join("."):"-1";return Number(d)}static v(n){let l=n.match(/Android ([\d.]+)/i),d=l?l[1].split(".").slice(0,2).join("."):"-1";return Number(d)}async O(n){return this.db||(__PRIVATE_logDebug("SimpleDb","Opening database:",this.name),this.db=await new Promise((l,d)=>{let f=indexedDB.open(this.name,this.version);f.onsuccess=n=>{let d=n.target.result;l(d)},f.onblocked=()=>{d(new __PRIVATE_IndexedDbTransactionError(n,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},f.onerror=l=>{let f=l.target.error;"VersionError"===f.name?d(new FirestoreError(ty.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===f.name?d(new FirestoreError(ty.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+f)):d(new __PRIVATE_IndexedDbTransactionError(n,f))},f.onupgradeneeded=n=>{__PRIVATE_logDebug("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',n.oldVersion);let l=n.target.result;this.p.N(l,f.transaction,n.oldVersion,this.version).next(()=>{__PRIVATE_logDebug("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(n){this.B=n,this.db&&(this.db.onversionchange=l=>n(l))}async runTransaction(n,l,d,f){let _="readonly"===l,E=0;for(;;){++E;try{this.db=await this.O(n);let l=__PRIVATE_SimpleDbTransaction.open(this.db,n,_?"readonly":"readwrite",d),E=f(l).next(n=>(l.g(),n)).catch(n=>(l.abort(n),PersistencePromise.reject(n))).toPromise();return E.catch(()=>{}),await l.m,E}catch(l){let n="FirebaseError"!==l.name&&E<3;if(__PRIVATE_logDebug("SimpleDb","Transaction failed with error:",l.message,"Retrying:",n),this.close(),!n)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}};let __PRIVATE_IterationController=class __PRIVATE_IterationController{constructor(n){this.k=n,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(n){this.k=n}done(){this.q=!0}U(n){this.K=n}delete(){return __PRIVATE_wrapRequest(this.k.delete())}};let __PRIVATE_IndexedDbTransactionError=class __PRIVATE_IndexedDbTransactionError extends FirestoreError{constructor(n,l){super(ty.UNAVAILABLE,`IndexedDB transaction '${n}' failed: ${l}`),this.name="IndexedDbTransactionError"}};function __PRIVATE_isIndexedDbTransactionError(n){return"IndexedDbTransactionError"===n.name}let __PRIVATE_SimpleDbStore=class __PRIVATE_SimpleDbStore{constructor(n){this.store=n}put(n,l){let d;return void 0!==l?(__PRIVATE_logDebug("SimpleDb","PUT",this.store.name,n,l),d=this.store.put(l,n)):(__PRIVATE_logDebug("SimpleDb","PUT",this.store.name,"<auto-key>",n),d=this.store.put(n)),__PRIVATE_wrapRequest(d)}add(n){return __PRIVATE_logDebug("SimpleDb","ADD",this.store.name,n,n),__PRIVATE_wrapRequest(this.store.add(n))}get(n){return __PRIVATE_wrapRequest(this.store.get(n)).next(l=>(void 0===l&&(l=null),__PRIVATE_logDebug("SimpleDb","GET",this.store.name,n,l),l))}delete(n){return __PRIVATE_logDebug("SimpleDb","DELETE",this.store.name,n),__PRIVATE_wrapRequest(this.store.delete(n))}count(){return __PRIVATE_logDebug("SimpleDb","COUNT",this.store.name),__PRIVATE_wrapRequest(this.store.count())}W(n,l){let d=this.options(n,l),f=d.index?this.store.index(d.index):this.store;if("function"==typeof f.getAll){let n=f.getAll(d.range);return new PersistencePromise((l,d)=>{n.onerror=n=>{d(n.target.error)},n.onsuccess=n=>{l(n.target.result)}})}{let n=this.cursor(d),l=[];return this.G(n,(n,d)=>{l.push(d)}).next(()=>l)}}j(n,l){let d=this.store.getAll(n,null===l?void 0:l);return new PersistencePromise((n,l)=>{d.onerror=n=>{l(n.target.error)},d.onsuccess=l=>{n(l.target.result)}})}H(n,l){__PRIVATE_logDebug("SimpleDb","DELETE ALL",this.store.name);let d=this.options(n,l);d.J=!1;let f=this.cursor(d);return this.G(f,(n,l,d)=>d.delete())}Y(n,l){let d;l?d=n:(d={},l=n);let f=this.cursor(d);return this.G(f,l)}Z(n){let l=this.cursor({});return new PersistencePromise((d,f)=>{l.onerror=n=>{let l=__PRIVATE_checkForAndReportiOSError(n.target.error);f(l)},l.onsuccess=l=>{let f=l.target.result;f?n(f.primaryKey,f.value).next(n=>{n?f.continue():d()}):d()}})}G(n,l){let d=[];return new PersistencePromise((f,_)=>{n.onerror=n=>{_(n.target.error)},n.onsuccess=n=>{let _=n.target.result;if(!_)return void f();let E=new __PRIVATE_IterationController(_),L=l(_.primaryKey,_.value,E);if(L instanceof PersistencePromise){let n=L.catch(n=>(E.done(),PersistencePromise.reject(n)));d.push(n)}E.isDone?f():null===E.$?_.continue():_.continue(E.$)}}).next(()=>PersistencePromise.waitFor(d))}options(n,l){let d;return void 0!==n&&("string"==typeof n?d=n:l=n),{index:d,range:l}}cursor(n){let l="next";if(n.reverse&&(l="prev"),n.index){let d=this.store.index(n.index);return n.J?d.openKeyCursor(n.range,l):d.openCursor(n.range,l)}return this.store.openCursor(n.range,l)}};function __PRIVATE_wrapRequest(n){return new PersistencePromise((l,d)=>{n.onsuccess=n=>{let d=n.target.result;l(d)},n.onerror=n=>{let l=__PRIVATE_checkForAndReportiOSError(n.target.error);d(l)}})}let tE=!1;function __PRIVATE_checkForAndReportiOSError(n){let l=__PRIVATE_SimpleDb.S((0,eo.z$)());if(l>=12.2&&l<13){let l="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(l)>=0){let n=new FirestoreError("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${l}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return tE||(tE=!0,setTimeout(()=>{throw n},0)),n}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ListenSequence=class __PRIVATE_ListenSequence{constructor(n,l){this.previousValue=n,l&&(l.sequenceNumberHandler=n=>this.se(n),this.oe=n=>l.writeSequenceNumber(n))}se(n){return this.previousValue=Math.max(n,this.previousValue),this.previousValue}next(){let n=++this.previousValue;return this.oe&&this.oe(n),n}};function __PRIVATE_isNegativeZero(n){return 0===n&&1/n==-1/0}function isSafeInteger(n){return"number"==typeof n&&Number.isInteger(n)&&!__PRIVATE_isNegativeZero(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_objectSize(n){let l=0;for(let d in n)Object.prototype.hasOwnProperty.call(n,d)&&l++;return l}function forEach(n,l){for(let d in n)Object.prototype.hasOwnProperty.call(n,d)&&l(d,n[d])}function isEmpty(n){for(let l in n)if(Object.prototype.hasOwnProperty.call(n,l))return!1;return!0}__PRIVATE_ListenSequence._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedMap=class SortedMap{constructor(n,l){this.comparator=n,this.root=l||LLRBNode.EMPTY}insert(n,l){return new SortedMap(this.comparator,this.root.insert(n,l,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}remove(n){return new SortedMap(this.comparator,this.root.remove(n,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}get(n){let l=this.root;for(;!l.isEmpty();){let d=this.comparator(n,l.key);if(0===d)return l.value;d<0?l=l.left:d>0&&(l=l.right)}return null}indexOf(n){let l=0,d=this.root;for(;!d.isEmpty();){let f=this.comparator(n,d.key);if(0===f)return l+d.left.size;f<0?d=d.left:(l+=d.left.size+1,d=d.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(n){return this.root.inorderTraversal(n)}forEach(n){this.inorderTraversal((l,d)=>(n(l,d),!1))}toString(){let n=[];return this.inorderTraversal((l,d)=>(n.push(`${l}:${d}`),!1)),`{${n.join(", ")}}`}reverseTraversal(n){return this.root.reverseTraversal(n)}getIterator(){return new SortedMapIterator(this.root,null,this.comparator,!1)}getIteratorFrom(n){return new SortedMapIterator(this.root,n,this.comparator,!1)}getReverseIterator(){return new SortedMapIterator(this.root,null,this.comparator,!0)}getReverseIteratorFrom(n){return new SortedMapIterator(this.root,n,this.comparator,!0)}};let SortedMapIterator=class SortedMapIterator{constructor(n,l,d,f){this.isReverse=f,this.nodeStack=[];let _=1;for(;!n.isEmpty();)if(_=l?d(n.key,l):1,l&&f&&(_*=-1),_<0)n=this.isReverse?n.left:n.right;else{if(0===_){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}getNext(){let n=this.nodeStack.pop(),l={key:n.key,value:n.value};if(this.isReverse)for(n=n.left;!n.isEmpty();)this.nodeStack.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack.push(n),n=n.left;return l}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let n=this.nodeStack[this.nodeStack.length-1];return{key:n.key,value:n.value}}};let LLRBNode=class LLRBNode{constructor(n,l,d,f,_){this.key=n,this.value=l,this.color=null!=d?d:LLRBNode.RED,this.left=null!=f?f:LLRBNode.EMPTY,this.right=null!=_?_:LLRBNode.EMPTY,this.size=this.left.size+1+this.right.size}copy(n,l,d,f,_){return new LLRBNode(null!=n?n:this.key,null!=l?l:this.value,null!=d?d:this.color,null!=f?f:this.left,null!=_?_:this.right)}isEmpty(){return!1}inorderTraversal(n){return this.left.inorderTraversal(n)||n(this.key,this.value)||this.right.inorderTraversal(n)}reverseTraversal(n){return this.right.reverseTraversal(n)||n(this.key,this.value)||this.left.reverseTraversal(n)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(n,l,d){let f=this,_=d(n,f.key);return(f=_<0?f.copy(null,null,null,f.left.insert(n,l,d),null):0===_?f.copy(null,l,null,null,null):f.copy(null,null,null,null,f.right.insert(n,l,d))).fixUp()}removeMin(){if(this.left.isEmpty())return LLRBNode.EMPTY;let n=this;return n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),(n=n.copy(null,null,null,n.left.removeMin(),null)).fixUp()}remove(n,l){let d,f=this;if(0>l(n,f.key))f.left.isEmpty()||f.left.isRed()||f.left.left.isRed()||(f=f.moveRedLeft()),f=f.copy(null,null,null,f.left.remove(n,l),null);else{if(f.left.isRed()&&(f=f.rotateRight()),f.right.isEmpty()||f.right.isRed()||f.right.left.isRed()||(f=f.moveRedRight()),0===l(n,f.key)){if(f.right.isEmpty())return LLRBNode.EMPTY;d=f.right.min(),f=f.copy(d.key,d.value,null,null,f.right.removeMin())}f=f.copy(null,null,null,null,f.right.remove(n,l))}return f.fixUp()}isRed(){return this.color}fixUp(){let n=this;return n.right.isRed()&&!n.left.isRed()&&(n=n.rotateLeft()),n.left.isRed()&&n.left.left.isRed()&&(n=n.rotateRight()),n.left.isRed()&&n.right.isRed()&&(n=n.colorFlip()),n}moveRedLeft(){let n=this.colorFlip();return n.right.left.isRed()&&(n=(n=(n=n.copy(null,null,null,null,n.right.rotateRight())).rotateLeft()).colorFlip()),n}moveRedRight(){let n=this.colorFlip();return n.left.left.isRed()&&(n=(n=n.rotateRight()).colorFlip()),n}rotateLeft(){let n=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,n,null)}rotateRight(){let n=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,n)}colorFlip(){let n=this.left.copy(null,null,!this.left.color,null,null),l=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,n,l)}checkMaxDepth(){let n=this.check();return Math.pow(2,n)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fail();let n=this.left.check();if(n!==this.right.check())throw fail();return n+(this.isRed()?0:1)}};LLRBNode.EMPTY=null,LLRBNode.RED=!0,LLRBNode.BLACK=!1,LLRBNode.EMPTY=new class{constructor(){this.size=0}get key(){throw fail()}get value(){throw fail()}get color(){throw fail()}get left(){throw fail()}get right(){throw fail()}copy(n,l,d,f,_){return this}insert(n,l,d){return new LLRBNode(n,l)}remove(n,l){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedSet=class SortedSet{constructor(n){this.comparator=n,this.data=new SortedMap(this.comparator)}has(n){return null!==this.data.get(n)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(n){return this.data.indexOf(n)}forEach(n){this.data.inorderTraversal((l,d)=>(n(l),!1))}forEachInRange(n,l){let d=this.data.getIteratorFrom(n[0]);for(;d.hasNext();){let f=d.getNext();if(this.comparator(f.key,n[1])>=0)return;l(f.key)}}forEachWhile(n,l){let d;for(d=void 0!==l?this.data.getIteratorFrom(l):this.data.getIterator();d.hasNext();)if(!n(d.getNext().key))return}firstAfterOrEqual(n){let l=this.data.getIteratorFrom(n);return l.hasNext()?l.getNext().key:null}getIterator(){return new SortedSetIterator(this.data.getIterator())}getIteratorFrom(n){return new SortedSetIterator(this.data.getIteratorFrom(n))}add(n){return this.copy(this.data.remove(n).insert(n,!0))}delete(n){return this.has(n)?this.copy(this.data.remove(n)):this}isEmpty(){return this.data.isEmpty()}unionWith(n){let l=this;return l.size<n.size&&(l=n,n=this),n.forEach(n=>{l=l.add(n)}),l}isEqual(n){if(!(n instanceof SortedSet)||this.size!==n.size)return!1;let l=this.data.getIterator(),d=n.data.getIterator();for(;l.hasNext();){let n=l.getNext().key,f=d.getNext().key;if(0!==this.comparator(n,f))return!1}return!0}toArray(){let n=[];return this.forEach(l=>{n.push(l)}),n}toString(){let n=[];return this.forEach(l=>n.push(l)),"SortedSet("+n.toString()+")"}copy(n){let l=new SortedSet(this.comparator);return l.data=n,l}};let SortedSetIterator=class SortedSetIterator{constructor(n){this.iter=n}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldMask=class FieldMask{constructor(n){this.fields=n,n.sort(FieldPath$1.comparator)}static empty(){return new FieldMask([])}unionWith(n){let l=new SortedSet(FieldPath$1.comparator);for(let n of this.fields)l=l.add(n);for(let d of n)l=l.add(d);return new FieldMask(l.toArray())}covers(n){for(let l of this.fields)if(l.isPrefixOf(n))return!0;return!1}isEqual(n){return __PRIVATE_arrayEquals(this.fields,n.fields,(n,l)=>n.isEqual(l))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_Base64DecodeError=class __PRIVATE_Base64DecodeError extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ByteString=class ByteString{constructor(n){this.binaryString=n}static fromBase64String(n){let l=function(n){try{return atob(n)}catch(n){throw"undefined"!=typeof DOMException&&n instanceof DOMException?new __PRIVATE_Base64DecodeError("Invalid base64 string: "+n):n}}(n);return new ByteString(l)}static fromUint8Array(n){let l=function(n){let l="";for(let d=0;d<n.length;++d)l+=String.fromCharCode(n[d]);return l}(n);return new ByteString(l)}[Symbol.iterator](){let n=0;return{next:()=>n<this.binaryString.length?{value:this.binaryString.charCodeAt(n++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(n){let l=new Uint8Array(n.length);for(let d=0;d<n.length;d++)l[d]=n.charCodeAt(d);return l}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(n){return __PRIVATE_primitiveComparator(this.binaryString,n.binaryString)}isEqual(n){return this.binaryString===n.binaryString}};ByteString.EMPTY_BYTE_STRING=new ByteString("");let tT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function __PRIVATE_normalizeTimestamp(n){if(n||fail(),"string"==typeof n){let l=0,d=tT.exec(n);if(d||fail(),d[1]){let n=d[1];l=Number(n=(n+"000000000").substr(0,9))}let f=new Date(n);return{seconds:Math.floor(f.getTime()/1e3),nanos:l}}return{seconds:__PRIVATE_normalizeNumber(n.seconds),nanos:__PRIVATE_normalizeNumber(n.nanos)}}function __PRIVATE_normalizeNumber(n){return"number"==typeof n?n:"string"==typeof n?Number(n):0}function __PRIVATE_normalizeByteString(n){return"string"==typeof n?ByteString.fromBase64String(n):ByteString.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_isServerTimestamp(n){var l,d;return"server_timestamp"===(null===(d=((null===(l=null==n?void 0:n.mapValue)||void 0===l?void 0:l.fields)||{}).__type__)||void 0===d?void 0:d.stringValue)}function __PRIVATE_getPreviousValue(n){let l=n.mapValue.fields.__previous_value__;return __PRIVATE_isServerTimestamp(l)?__PRIVATE_getPreviousValue(l):l}function __PRIVATE_getLocalWriteTime(n){let l=__PRIVATE_normalizeTimestamp(n.mapValue.fields.__local_write_time__.timestampValue);return new Timestamp(l.seconds,l.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DatabaseInfo=class DatabaseInfo{constructor(n,l,d,f,_,E,L,z,et){this.databaseId=n,this.appId=l,this.persistenceKey=d,this.host=f,this.ssl=_,this.forceLongPolling=E,this.autoDetectLongPolling=L,this.longPollingOptions=z,this.useFetchStreams=et}};let DatabaseId=class DatabaseId{constructor(n,l){this.projectId=n,this.database=l||"(default)"}static empty(){return new DatabaseId("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(n){return n instanceof DatabaseId&&n.projectId===this.projectId&&n.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tI={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function __PRIVATE_typeOrder(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?__PRIVATE_isServerTimestamp(n)?4:__PRIVATE_isMaxValue(n)?9007199254740991:10:fail()}function __PRIVATE_valueEquals(n,l){if(n===l)return!0;let d=__PRIVATE_typeOrder(n);if(d!==__PRIVATE_typeOrder(l))return!1;switch(d){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===l.booleanValue;case 4:return __PRIVATE_getLocalWriteTime(n).isEqual(__PRIVATE_getLocalWriteTime(l));case 3:return function(n,l){if("string"==typeof n.timestampValue&&"string"==typeof l.timestampValue&&n.timestampValue.length===l.timestampValue.length)return n.timestampValue===l.timestampValue;let d=__PRIVATE_normalizeTimestamp(n.timestampValue),f=__PRIVATE_normalizeTimestamp(l.timestampValue);return d.seconds===f.seconds&&d.nanos===f.nanos}(n,l);case 5:return n.stringValue===l.stringValue;case 6:return __PRIVATE_normalizeByteString(n.bytesValue).isEqual(__PRIVATE_normalizeByteString(l.bytesValue));case 7:return n.referenceValue===l.referenceValue;case 8:return __PRIVATE_normalizeNumber(n.geoPointValue.latitude)===__PRIVATE_normalizeNumber(l.geoPointValue.latitude)&&__PRIVATE_normalizeNumber(n.geoPointValue.longitude)===__PRIVATE_normalizeNumber(l.geoPointValue.longitude);case 2:return function(n,l){if("integerValue"in n&&"integerValue"in l)return __PRIVATE_normalizeNumber(n.integerValue)===__PRIVATE_normalizeNumber(l.integerValue);if("doubleValue"in n&&"doubleValue"in l){let d=__PRIVATE_normalizeNumber(n.doubleValue),f=__PRIVATE_normalizeNumber(l.doubleValue);return d===f?__PRIVATE_isNegativeZero(d)===__PRIVATE_isNegativeZero(f):isNaN(d)&&isNaN(f)}return!1}(n,l);case 9:return __PRIVATE_arrayEquals(n.arrayValue.values||[],l.arrayValue.values||[],__PRIVATE_valueEquals);case 10:return function(n,l){let d=n.mapValue.fields||{},f=l.mapValue.fields||{};if(__PRIVATE_objectSize(d)!==__PRIVATE_objectSize(f))return!1;for(let n in d)if(d.hasOwnProperty(n)&&(void 0===f[n]||!__PRIVATE_valueEquals(d[n],f[n])))return!1;return!0}(n,l);default:return fail()}}function __PRIVATE_arrayValueContains(n,l){return void 0!==(n.values||[]).find(n=>__PRIVATE_valueEquals(n,l))}function __PRIVATE_valueCompare(n,l){if(n===l)return 0;let d=__PRIVATE_typeOrder(n),f=__PRIVATE_typeOrder(l);if(d!==f)return __PRIVATE_primitiveComparator(d,f);switch(d){case 0:case 9007199254740991:return 0;case 1:return __PRIVATE_primitiveComparator(n.booleanValue,l.booleanValue);case 2:return function(n,l){let d=__PRIVATE_normalizeNumber(n.integerValue||n.doubleValue),f=__PRIVATE_normalizeNumber(l.integerValue||l.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,l);case 3:return __PRIVATE_compareTimestamps(n.timestampValue,l.timestampValue);case 4:return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(n),__PRIVATE_getLocalWriteTime(l));case 5:return __PRIVATE_primitiveComparator(n.stringValue,l.stringValue);case 6:return function(n,l){let d=__PRIVATE_normalizeByteString(n),f=__PRIVATE_normalizeByteString(l);return d.compareTo(f)}(n.bytesValue,l.bytesValue);case 7:return function(n,l){let d=n.split("/"),f=l.split("/");for(let n=0;n<d.length&&n<f.length;n++){let l=__PRIVATE_primitiveComparator(d[n],f[n]);if(0!==l)return l}return __PRIVATE_primitiveComparator(d.length,f.length)}(n.referenceValue,l.referenceValue);case 8:return function(n,l){let d=__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(n.latitude),__PRIVATE_normalizeNumber(l.latitude));return 0!==d?d:__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(n.longitude),__PRIVATE_normalizeNumber(l.longitude))}(n.geoPointValue,l.geoPointValue);case 9:return function(n,l){let d=n.values||[],f=l.values||[];for(let n=0;n<d.length&&n<f.length;++n){let l=__PRIVATE_valueCompare(d[n],f[n]);if(l)return l}return __PRIVATE_primitiveComparator(d.length,f.length)}(n.arrayValue,l.arrayValue);case 10:return function(n,l){if(n===tI.mapValue&&l===tI.mapValue)return 0;if(n===tI.mapValue)return 1;if(l===tI.mapValue)return -1;let d=n.fields||{},f=Object.keys(d),_=l.fields||{},E=Object.keys(_);f.sort(),E.sort();for(let n=0;n<f.length&&n<E.length;++n){let l=__PRIVATE_primitiveComparator(f[n],E[n]);if(0!==l)return l;let L=__PRIVATE_valueCompare(d[f[n]],_[E[n]]);if(0!==L)return L}return __PRIVATE_primitiveComparator(f.length,E.length)}(n.mapValue,l.mapValue);default:throw fail()}}function __PRIVATE_compareTimestamps(n,l){if("string"==typeof n&&"string"==typeof l&&n.length===l.length)return __PRIVATE_primitiveComparator(n,l);let d=__PRIVATE_normalizeTimestamp(n),f=__PRIVATE_normalizeTimestamp(l),_=__PRIVATE_primitiveComparator(d.seconds,f.seconds);return 0!==_?_:__PRIVATE_primitiveComparator(d.nanos,f.nanos)}function __PRIVATE_canonifyValue(n){var l,d;return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(n){let l=__PRIVATE_normalizeTimestamp(n);return`time(${l.seconds},${l.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?__PRIVATE_normalizeByteString(n.bytesValue).toBase64():"referenceValue"in n?(l=n.referenceValue,DocumentKey.fromName(l).toString()):"geoPointValue"in n?(d=n.geoPointValue,`geo(${d.latitude},${d.longitude})`):"arrayValue"in n?function(n){let l="[",d=!0;for(let f of n.values||[])d?d=!1:l+=",",l+=__PRIVATE_canonifyValue(f);return l+"]"}(n.arrayValue):"mapValue"in n?function(n){let l=Object.keys(n.fields||{}).sort(),d="{",f=!0;for(let _ of l)f?f=!1:d+=",",d+=`${_}:${__PRIVATE_canonifyValue(n.fields[_])}`;return d+"}"}(n.mapValue):fail()}function __PRIVATE_refValue(n,l){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${l.path.canonicalString()}`}}function isInteger(n){return!!n&&"integerValue"in n}function isArray(n){return!!n&&"arrayValue"in n}function __PRIVATE_isNullValue(n){return!!n&&"nullValue"in n}function __PRIVATE_isNanValue(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function __PRIVATE_isMapValue(n){return!!n&&"mapValue"in n}function __PRIVATE_deepClone(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&"object"==typeof n.timestampValue)return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let l={mapValue:{fields:{}}};return forEach(n.mapValue.fields,(n,d)=>l.mapValue.fields[n]=__PRIVATE_deepClone(d)),l}if(n.arrayValue){let l={arrayValue:{values:[]}};for(let d=0;d<(n.arrayValue.values||[]).length;++d)l.arrayValue.values[d]=__PRIVATE_deepClone(n.arrayValue.values[d]);return l}return Object.assign({},n)}function __PRIVATE_isMaxValue(n){return"__max__"===(((n.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ObjectValue=class ObjectValue{constructor(n){this.value=n}static empty(){return new ObjectValue({mapValue:{}})}field(n){if(n.isEmpty())return this.value;{let l=this.value;for(let d=0;d<n.length-1;++d)if(!__PRIVATE_isMapValue(l=(l.mapValue.fields||{})[n.get(d)]))return null;return(l=(l.mapValue.fields||{})[n.lastSegment()])||null}}set(n,l){this.getFieldsMap(n.popLast())[n.lastSegment()]=__PRIVATE_deepClone(l)}setAll(n){let l=FieldPath$1.emptyPath(),d={},f=[];n.forEach((n,_)=>{if(!l.isImmediateParentOf(_)){let n=this.getFieldsMap(l);this.applyChanges(n,d,f),d={},f=[],l=_.popLast()}n?d[_.lastSegment()]=__PRIVATE_deepClone(n):f.push(_.lastSegment())});let _=this.getFieldsMap(l);this.applyChanges(_,d,f)}delete(n){let l=this.field(n.popLast());__PRIVATE_isMapValue(l)&&l.mapValue.fields&&delete l.mapValue.fields[n.lastSegment()]}isEqual(n){return __PRIVATE_valueEquals(this.value,n.value)}getFieldsMap(n){let l=this.value;l.mapValue.fields||(l.mapValue={fields:{}});for(let d=0;d<n.length;++d){let f=l.mapValue.fields[n.get(d)];__PRIVATE_isMapValue(f)&&f.mapValue.fields||(f={mapValue:{fields:{}}},l.mapValue.fields[n.get(d)]=f),l=f}return l.mapValue.fields}applyChanges(n,l,d){for(let f of(forEach(l,(l,d)=>n[l]=d),d))delete n[f]}clone(){return new ObjectValue(__PRIVATE_deepClone(this.value))}};function __PRIVATE_extractFieldMask(n){let l=[];return forEach(n.fields,(n,d)=>{let f=new FieldPath$1([n]);if(__PRIVATE_isMapValue(d)){let n=__PRIVATE_extractFieldMask(d.mapValue).fields;if(0===n.length)l.push(f);else for(let d of n)l.push(f.child(d))}else l.push(f)}),new FieldMask(l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MutableDocument=class MutableDocument{constructor(n,l,d,f,_,E,L){this.key=n,this.documentType=l,this.version=d,this.readTime=f,this.createTime=_,this.data=E,this.documentState=L}static newInvalidDocument(n){return new MutableDocument(n,0,SnapshotVersion.min(),SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newFoundDocument(n,l,d,f){return new MutableDocument(n,1,l,SnapshotVersion.min(),d,f,0)}static newNoDocument(n,l){return new MutableDocument(n,2,l,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newUnknownDocument(n,l){return new MutableDocument(n,3,l,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),2)}convertToFoundDocument(n,l){return this.createTime.isEqual(SnapshotVersion.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=n),this.version=n,this.documentType=1,this.data=l,this.documentState=0,this}convertToNoDocument(n){return this.version=n,this.documentType=2,this.data=ObjectValue.empty(),this.documentState=0,this}convertToUnknownDocument(n){return this.version=n,this.documentType=3,this.data=ObjectValue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=SnapshotVersion.min(),this}setReadTime(n){return this.readTime=n,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(n){return n instanceof MutableDocument&&this.key.isEqual(n.key)&&this.version.isEqual(n.version)&&this.documentType===n.documentType&&this.documentState===n.documentState&&this.data.isEqual(n.data)}mutableCopy(){return new MutableDocument(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bound=class Bound{constructor(n,l){this.position=n,this.inclusive=l}};function __PRIVATE_boundCompareToDocument(n,l,d){let f=0;for(let _=0;_<n.position.length;_++){let E=l[_],L=n.position[_];if(f=E.field.isKeyField()?DocumentKey.comparator(DocumentKey.fromName(L.referenceValue),d.key):__PRIVATE_valueCompare(L,d.data.field(E.field)),"desc"===E.dir&&(f*=-1),0!==f)break}return f}function __PRIVATE_boundEquals(n,l){if(null===n)return null===l;if(null===l||n.inclusive!==l.inclusive||n.position.length!==l.position.length)return!1;for(let d=0;d<n.position.length;d++)if(!__PRIVATE_valueEquals(n.position[d],l.position[d]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OrderBy=class OrderBy{constructor(n,l="asc"){this.field=n,this.dir=l}};function __PRIVATE_orderByEquals(n,l){return n.dir===l.dir&&n.field.isEqual(l.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Filter=class Filter{};let FieldFilter=class FieldFilter extends Filter{constructor(n,l,d){super(),this.field=n,this.op=l,this.value=d}static create(n,l,d){return n.isKeyField()?"in"===l||"not-in"===l?this.createKeyFieldInFilter(n,l,d):new __PRIVATE_KeyFieldFilter(n,l,d):"array-contains"===l?new __PRIVATE_ArrayContainsFilter(n,d):"in"===l?new __PRIVATE_InFilter(n,d):"not-in"===l?new __PRIVATE_NotInFilter(n,d):"array-contains-any"===l?new __PRIVATE_ArrayContainsAnyFilter(n,d):new FieldFilter(n,l,d)}static createKeyFieldInFilter(n,l,d){return"in"===l?new __PRIVATE_KeyFieldInFilter(n,d):new __PRIVATE_KeyFieldNotInFilter(n,d)}matches(n){let l=n.data.field(this.field);return"!="===this.op?null!==l&&this.matchesComparison(__PRIVATE_valueCompare(l,this.value)):null!==l&&__PRIVATE_typeOrder(this.value)===__PRIVATE_typeOrder(l)&&this.matchesComparison(__PRIVATE_valueCompare(l,this.value))}matchesComparison(n){switch(this.op){case"<":return n<0;case"<=":return n<=0;case"==":return 0===n;case"!=":return 0!==n;case">":return n>0;case">=":return n>=0;default:return fail()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}};let CompositeFilter=class CompositeFilter extends Filter{constructor(n,l){super(),this.filters=n,this.op=l,this.ue=null}static create(n,l){return new CompositeFilter(n,l)}matches(n){return __PRIVATE_compositeFilterIsConjunction(this)?void 0===this.filters.find(l=>!l.matches(n)):void 0!==this.filters.find(l=>l.matches(n))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((n,l)=>n.concat(l.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}};function __PRIVATE_compositeFilterIsConjunction(n){return"and"===n.op}function __PRIVATE_compositeFilterIsFlat(n){for(let l of n.filters)if(l instanceof CompositeFilter)return!1;return!0}function __PRIVATE_canonifyFilter(n){if(n instanceof FieldFilter)return n.field.canonicalString()+n.op.toString()+__PRIVATE_canonifyValue(n.value);if(__PRIVATE_compositeFilterIsFlat(n)&&__PRIVATE_compositeFilterIsConjunction(n))return n.filters.map(n=>__PRIVATE_canonifyFilter(n)).join(",");{let l=n.filters.map(n=>__PRIVATE_canonifyFilter(n)).join(",");return`${n.op}(${l})`}}function __PRIVATE_filterEquals(n,l){return n instanceof FieldFilter?l instanceof FieldFilter&&n.op===l.op&&n.field.isEqual(l.field)&&__PRIVATE_valueEquals(n.value,l.value):n instanceof CompositeFilter?l instanceof CompositeFilter&&n.op===l.op&&n.filters.length===l.filters.length&&n.filters.reduce((n,d,f)=>n&&__PRIVATE_filterEquals(d,l.filters[f]),!0):void fail()}function __PRIVATE_stringifyFilter(n){return n instanceof FieldFilter?`${n.field.canonicalString()} ${n.op} ${__PRIVATE_canonifyValue(n.value)}`:n instanceof CompositeFilter?n.op.toString()+" {"+n.getFilters().map(__PRIVATE_stringifyFilter).join(" ,")+"}":"Filter"}let __PRIVATE_KeyFieldFilter=class __PRIVATE_KeyFieldFilter extends FieldFilter{constructor(n,l,d){super(n,l,d),this.key=DocumentKey.fromName(d.referenceValue)}matches(n){let l=DocumentKey.comparator(n.key,this.key);return this.matchesComparison(l)}};let __PRIVATE_KeyFieldInFilter=class __PRIVATE_KeyFieldInFilter extends FieldFilter{constructor(n,l){super(n,"in",l),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("in",l)}matches(n){return this.keys.some(l=>l.isEqual(n.key))}};let __PRIVATE_KeyFieldNotInFilter=class __PRIVATE_KeyFieldNotInFilter extends FieldFilter{constructor(n,l){super(n,"not-in",l),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("not-in",l)}matches(n){return!this.keys.some(l=>l.isEqual(n.key))}};function __PRIVATE_extractDocumentKeysFromArrayValue(n,l){var d;return((null===(d=l.arrayValue)||void 0===d?void 0:d.values)||[]).map(n=>DocumentKey.fromName(n.referenceValue))}let __PRIVATE_ArrayContainsFilter=class __PRIVATE_ArrayContainsFilter extends FieldFilter{constructor(n,l){super(n,"array-contains",l)}matches(n){let l=n.data.field(this.field);return isArray(l)&&__PRIVATE_arrayValueContains(l.arrayValue,this.value)}};let __PRIVATE_InFilter=class __PRIVATE_InFilter extends FieldFilter{constructor(n,l){super(n,"in",l)}matches(n){let l=n.data.field(this.field);return null!==l&&__PRIVATE_arrayValueContains(this.value.arrayValue,l)}};let __PRIVATE_NotInFilter=class __PRIVATE_NotInFilter extends FieldFilter{constructor(n,l){super(n,"not-in",l)}matches(n){if(__PRIVATE_arrayValueContains(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let l=n.data.field(this.field);return null!==l&&!__PRIVATE_arrayValueContains(this.value.arrayValue,l)}};let __PRIVATE_ArrayContainsAnyFilter=class __PRIVATE_ArrayContainsAnyFilter extends FieldFilter{constructor(n,l){super(n,"array-contains-any",l)}matches(n){let l=n.data.field(this.field);return!(!isArray(l)||!l.arrayValue.values)&&l.arrayValue.values.some(n=>__PRIVATE_arrayValueContains(this.value.arrayValue,n))}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_TargetImpl=class __PRIVATE_TargetImpl{constructor(n,l=null,d=[],f=[],_=null,E=null,L=null){this.path=n,this.collectionGroup=l,this.orderBy=d,this.filters=f,this.limit=_,this.startAt=E,this.endAt=L,this.ce=null}};function __PRIVATE_newTarget(n,l=null,d=[],f=[],_=null,E=null,L=null){return new __PRIVATE_TargetImpl(n,l,d,f,_,E,L)}function __PRIVATE_canonifyTarget(n){if(null===n.ce){let l=n.path.canonicalString();null!==n.collectionGroup&&(l+="|cg:"+n.collectionGroup),l+="|f:"+n.filters.map(n=>__PRIVATE_canonifyFilter(n)).join(",")+"|ob:"+n.orderBy.map(n=>n.field.canonicalString()+n.dir).join(","),null==n.limit||(l+="|l:"+n.limit),n.startAt&&(l+="|lb:"+(n.startAt.inclusive?"b:":"a:")+n.startAt.position.map(n=>__PRIVATE_canonifyValue(n)).join(",")),n.endAt&&(l+="|ub:"+(n.endAt.inclusive?"a:":"b:")+n.endAt.position.map(n=>__PRIVATE_canonifyValue(n)).join(",")),n.ce=l}return n.ce}function __PRIVATE_targetEquals(n,l){if(n.limit!==l.limit||n.orderBy.length!==l.orderBy.length)return!1;for(let d=0;d<n.orderBy.length;d++)if(!__PRIVATE_orderByEquals(n.orderBy[d],l.orderBy[d]))return!1;if(n.filters.length!==l.filters.length)return!1;for(let d=0;d<n.filters.length;d++)if(!__PRIVATE_filterEquals(n.filters[d],l.filters[d]))return!1;return n.collectionGroup===l.collectionGroup&&!!n.path.isEqual(l.path)&&!!__PRIVATE_boundEquals(n.startAt,l.startAt)&&__PRIVATE_boundEquals(n.endAt,l.endAt)}function __PRIVATE_targetIsDocumentTarget(n){return DocumentKey.isDocumentKey(n.path)&&null===n.collectionGroup&&0===n.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryImpl=class __PRIVATE_QueryImpl{constructor(n,l=null,d=[],f=[],_=null,E="F",L=null,z=null){this.path=n,this.collectionGroup=l,this.explicitOrderBy=d,this.filters=f,this.limit=_,this.limitType=E,this.startAt=L,this.endAt=z,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}};function __PRIVATE_newQuery(n,l,d,f,_,E,L,z){return new __PRIVATE_QueryImpl(n,l,d,f,_,E,L,z)}function __PRIVATE_queryMatchesAllDocuments(n){return 0===n.filters.length&&null===n.limit&&null==n.startAt&&null==n.endAt&&(0===n.explicitOrderBy.length||1===n.explicitOrderBy.length&&n.explicitOrderBy[0].field.isKeyField())}function __PRIVATE_isCollectionGroupQuery(n){return null!==n.collectionGroup}function __PRIVATE_queryNormalizedOrderBy(n){if(null===n.le){let l;n.le=[];let d=new Set;for(let l of n.explicitOrderBy)n.le.push(l),d.add(l.field.canonicalString());let f=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc",_=(l=new SortedSet(FieldPath$1.comparator),n.filters.forEach(n=>{n.getFlattenedFilters().forEach(n=>{n.isInequality()&&(l=l.add(n.field))})}),l);_.forEach(l=>{d.has(l.canonicalString())||l.isKeyField()||n.le.push(new OrderBy(l,f))}),d.has(FieldPath$1.keyField().canonicalString())||n.le.push(new OrderBy(FieldPath$1.keyField(),f))}return n.le}function __PRIVATE_queryToTarget(n){return n.he||(n.he=__PRIVATE__queryToTarget(n,__PRIVATE_queryNormalizedOrderBy(n))),n.he}function __PRIVATE__queryToTarget(n,l){if("F"===n.limitType)return __PRIVATE_newTarget(n.path,n.collectionGroup,l,n.filters,n.limit,n.startAt,n.endAt);{l=l.map(n=>{let l="desc"===n.dir?"asc":"desc";return new OrderBy(n.field,l)});let d=n.endAt?new Bound(n.endAt.position,n.endAt.inclusive):null,f=n.startAt?new Bound(n.startAt.position,n.startAt.inclusive):null;return __PRIVATE_newTarget(n.path,n.collectionGroup,l,n.filters,n.limit,d,f)}}function __PRIVATE_queryWithAddedFilter(n,l){let d=n.filters.concat([l]);return new __PRIVATE_QueryImpl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),d,n.limit,n.limitType,n.startAt,n.endAt)}function __PRIVATE_queryWithLimit(n,l,d){return new __PRIVATE_QueryImpl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),l,d,n.startAt,n.endAt)}function __PRIVATE_queryEquals(n,l){return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(n),__PRIVATE_queryToTarget(l))&&n.limitType===l.limitType}function __PRIVATE_canonifyQuery(n){return`${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(n))}|lt:${n.limitType}`}function __PRIVATE_stringifyQuery(n){var l;let d;return`Query(target=${d=(l=__PRIVATE_queryToTarget(n)).path.canonicalString(),null!==l.collectionGroup&&(d+=" collectionGroup="+l.collectionGroup),l.filters.length>0&&(d+=`, filters: [${l.filters.map(n=>__PRIVATE_stringifyFilter(n)).join(", ")}]`),null==l.limit||(d+=", limit: "+l.limit),l.orderBy.length>0&&(d+=`, orderBy: [${l.orderBy.map(n=>`${n.field.canonicalString()} (${n.dir})`).join(", ")}]`),l.startAt&&(d+=", startAt: "+(l.startAt.inclusive?"b:":"a:")+l.startAt.position.map(n=>__PRIVATE_canonifyValue(n)).join(",")),l.endAt&&(d+=", endAt: "+(l.endAt.inclusive?"a:":"b:")+l.endAt.position.map(n=>__PRIVATE_canonifyValue(n)).join(",")),`Target(${d})`}; limitType=${n.limitType})`}function __PRIVATE_queryMatches(n,l){return l.isFoundDocument()&&function(n,l){let d=l.key.path;return null!==n.collectionGroup?l.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(d):DocumentKey.isDocumentKey(n.path)?n.path.isEqual(d):n.path.isImmediateParentOf(d)}(n,l)&&function(n,l){for(let d of __PRIVATE_queryNormalizedOrderBy(n))if(!d.field.isKeyField()&&null===l.data.field(d.field))return!1;return!0}(n,l)&&function(n,l){for(let d of n.filters)if(!d.matches(l))return!1;return!0}(n,l)&&(!n.startAt||!!function(n,l,d){let f=__PRIVATE_boundCompareToDocument(n,l,d);return n.inclusive?f<=0:f<0}(n.startAt,__PRIVATE_queryNormalizedOrderBy(n),l))&&(!n.endAt||!!function(n,l,d){let f=__PRIVATE_boundCompareToDocument(n,l,d);return n.inclusive?f>=0:f>0}(n.endAt,__PRIVATE_queryNormalizedOrderBy(n),l))}function __PRIVATE_queryCollectionGroup(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function __PRIVATE_newQueryComparator(n){return(l,d)=>{let f=!1;for(let _ of __PRIVATE_queryNormalizedOrderBy(n)){let n=__PRIVATE_compareDocs(_,l,d);if(0!==n)return n;f=f||_.field.isKeyField()}return 0}}function __PRIVATE_compareDocs(n,l,d){let f=n.field.isKeyField()?DocumentKey.comparator(l.key,d.key):function(n,l,d){let f=l.data.field(n),_=d.data.field(n);return null!==f&&null!==_?__PRIVATE_valueCompare(f,_):fail()}(n.field,l,d);switch(n.dir){case"asc":return f;case"desc":return -1*f;default:return fail()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ObjectMap=class ObjectMap{constructor(n,l){this.mapKeyFn=n,this.equalsFn=l,this.inner={},this.innerSize=0}get(n){let l=this.mapKeyFn(n),d=this.inner[l];if(void 0!==d){for(let[l,f]of d)if(this.equalsFn(l,n))return f}}has(n){return void 0!==this.get(n)}set(n,l){let d=this.mapKeyFn(n),f=this.inner[d];if(void 0===f)return this.inner[d]=[[n,l]],void this.innerSize++;for(let d=0;d<f.length;d++)if(this.equalsFn(f[d][0],n))return void(f[d]=[n,l]);f.push([n,l]),this.innerSize++}delete(n){let l=this.mapKeyFn(n),d=this.inner[l];if(void 0===d)return!1;for(let f=0;f<d.length;f++)if(this.equalsFn(d[f][0],n))return 1===d.length?delete this.inner[l]:d.splice(f,1),this.innerSize--,!0;return!1}forEach(n){forEach(this.inner,(l,d)=>{for(let[l,f]of d)n(l,f)})}isEmpty(){return isEmpty(this.inner)}size(){return this.innerSize}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tP=new SortedMap(DocumentKey.comparator),tA=new SortedMap(DocumentKey.comparator);function documentMap(...n){let l=tA;for(let d of n)l=l.insert(d.key,d);return l}function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(n){let l=tA;return n.forEach((n,d)=>l=l.insert(n,d.overlayedDocument)),l}function __PRIVATE_newDocumentKeyMap(){return new ObjectMap(n=>n.toString(),(n,l)=>n.isEqual(l))}let tb=new SortedMap(DocumentKey.comparator),tw=new SortedSet(DocumentKey.comparator);function __PRIVATE_documentKeySet(...n){let l=tw;for(let d of n)l=l.add(d);return l}let tR=new SortedSet(__PRIVATE_primitiveComparator);function __PRIVATE_targetIdSet(){return tR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_toDouble(n,l){if(n.useProto3Json){if(isNaN(l))return{doubleValue:"NaN"};if(l===1/0)return{doubleValue:"Infinity"};if(l===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:__PRIVATE_isNegativeZero(l)?"-0":l}}function __PRIVATE_toInteger(n){return{integerValue:""+n}}function toNumber(n,l){return isSafeInteger(l)?__PRIVATE_toInteger(l):__PRIVATE_toDouble(n,l)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TransformOperation=class TransformOperation{constructor(){this._=void 0}};function __PRIVATE_applyTransformOperationToLocalView(n,l,d){return n instanceof __PRIVATE_ServerTimestampTransform?function(n,l){let d={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return l&&__PRIVATE_isServerTimestamp(l)&&(l=__PRIVATE_getPreviousValue(l)),l&&(d.fields.__previous_value__=l),{mapValue:d}}(d,l):n instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(n,l):n instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(n,l):function(n,l){let d=__PRIVATE_computeTransformOperationBaseValue(n,l),f=asNumber(d)+asNumber(n.Ie);return isInteger(d)&&isInteger(n.Ie)?__PRIVATE_toInteger(f):__PRIVATE_toDouble(n.serializer,f)}(n,l)}function __PRIVATE_applyTransformOperationToRemoteDocument(n,l,d){return n instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(n,l):n instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(n,l):d}function __PRIVATE_computeTransformOperationBaseValue(n,l){return n instanceof __PRIVATE_NumericIncrementTransformOperation?isInteger(l)||l&&"doubleValue"in l?l:{integerValue:0}:null}let __PRIVATE_ServerTimestampTransform=class __PRIVATE_ServerTimestampTransform extends TransformOperation{};let __PRIVATE_ArrayUnionTransformOperation=class __PRIVATE_ArrayUnionTransformOperation extends TransformOperation{constructor(n){super(),this.elements=n}};function __PRIVATE_applyArrayUnionTransformOperation(n,l){let d=__PRIVATE_coercedFieldValuesArray(l);for(let l of n.elements)d.some(n=>__PRIVATE_valueEquals(n,l))||d.push(l);return{arrayValue:{values:d}}}let __PRIVATE_ArrayRemoveTransformOperation=class __PRIVATE_ArrayRemoveTransformOperation extends TransformOperation{constructor(n){super(),this.elements=n}};function __PRIVATE_applyArrayRemoveTransformOperation(n,l){let d=__PRIVATE_coercedFieldValuesArray(l);for(let l of n.elements)d=d.filter(n=>!__PRIVATE_valueEquals(n,l));return{arrayValue:{values:d}}}let __PRIVATE_NumericIncrementTransformOperation=class __PRIVATE_NumericIncrementTransformOperation extends TransformOperation{constructor(n,l){super(),this.serializer=n,this.Ie=l}};function asNumber(n){return __PRIVATE_normalizeNumber(n.integerValue||n.doubleValue)}function __PRIVATE_coercedFieldValuesArray(n){return isArray(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldTransform=class FieldTransform{constructor(n,l){this.field=n,this.transform=l}};function __PRIVATE_fieldTransformEquals(n,l){var d,f;return n.field.isEqual(l.field)&&(d=n.transform,f=l.transform,d instanceof __PRIVATE_ArrayUnionTransformOperation&&f instanceof __PRIVATE_ArrayUnionTransformOperation||d instanceof __PRIVATE_ArrayRemoveTransformOperation&&f instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_arrayEquals(d.elements,f.elements,__PRIVATE_valueEquals):d instanceof __PRIVATE_NumericIncrementTransformOperation&&f instanceof __PRIVATE_NumericIncrementTransformOperation?__PRIVATE_valueEquals(d.Ie,f.Ie):d instanceof __PRIVATE_ServerTimestampTransform&&f instanceof __PRIVATE_ServerTimestampTransform)}let MutationResult=class MutationResult{constructor(n,l){this.version=n,this.transformResults=l}};let Precondition=class Precondition{constructor(n,l){this.updateTime=n,this.exists=l}static none(){return new Precondition}static exists(n){return new Precondition(void 0,n)}static updateTime(n){return new Precondition(n)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(n){return this.exists===n.exists&&(this.updateTime?!!n.updateTime&&this.updateTime.isEqual(n.updateTime):!n.updateTime)}};function __PRIVATE_preconditionIsValidForDocument(n,l){return void 0!==n.updateTime?l.isFoundDocument()&&l.version.isEqual(n.updateTime):void 0===n.exists||n.exists===l.isFoundDocument()}let Mutation=class Mutation{};function __PRIVATE_calculateOverlayMutation(n,l){if(!n.hasLocalMutations||l&&0===l.fields.length)return null;if(null===l)return n.isNoDocument()?new __PRIVATE_DeleteMutation(n.key,Precondition.none()):new __PRIVATE_SetMutation(n.key,n.data,Precondition.none());{let d=n.data,f=ObjectValue.empty(),_=new SortedSet(FieldPath$1.comparator);for(let n of l.fields)if(!_.has(n)){let l=d.field(n);null===l&&n.length>1&&(n=n.popLast(),l=d.field(n)),null===l?f.delete(n):f.set(n,l),_=_.add(n)}return new __PRIVATE_PatchMutation(n.key,f,new FieldMask(_.toArray()),Precondition.none())}}function __PRIVATE_mutationApplyToRemoteDocument(n,l,d){n instanceof __PRIVATE_SetMutation?function(n,l,d){let f=n.value.clone(),_=__PRIVATE_serverTransformResults(n.fieldTransforms,l,d.transformResults);f.setAll(_),l.convertToFoundDocument(d.version,f).setHasCommittedMutations()}(n,l,d):n instanceof __PRIVATE_PatchMutation?function(n,l,d){if(!__PRIVATE_preconditionIsValidForDocument(n.precondition,l))return void l.convertToUnknownDocument(d.version);let f=__PRIVATE_serverTransformResults(n.fieldTransforms,l,d.transformResults),_=l.data;_.setAll(__PRIVATE_getPatch(n)),_.setAll(f),l.convertToFoundDocument(d.version,_).setHasCommittedMutations()}(n,l,d):function(n,l,d){l.convertToNoDocument(d.version).setHasCommittedMutations()}(0,l,d)}function __PRIVATE_mutationApplyToLocalView(n,l,d,f){return n instanceof __PRIVATE_SetMutation?function(n,l,d,f){if(!__PRIVATE_preconditionIsValidForDocument(n.precondition,l))return d;let _=n.value.clone(),E=__PRIVATE_localTransformResults(n.fieldTransforms,f,l);return _.setAll(E),l.convertToFoundDocument(l.version,_).setHasLocalMutations(),null}(n,l,d,f):n instanceof __PRIVATE_PatchMutation?function(n,l,d,f){if(!__PRIVATE_preconditionIsValidForDocument(n.precondition,l))return d;let _=__PRIVATE_localTransformResults(n.fieldTransforms,f,l),E=l.data;return(E.setAll(__PRIVATE_getPatch(n)),E.setAll(_),l.convertToFoundDocument(l.version,E).setHasLocalMutations(),null===d)?null:d.unionWith(n.fieldMask.fields).unionWith(n.fieldTransforms.map(n=>n.field))}(n,l,d,f):__PRIVATE_preconditionIsValidForDocument(n.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):d}function __PRIVATE_mutationExtractBaseValue(n,l){let d=null;for(let f of n.fieldTransforms){let n=l.data.field(f.field),_=__PRIVATE_computeTransformOperationBaseValue(f.transform,n||null);null!=_&&(null===d&&(d=ObjectValue.empty()),d.set(f.field,_))}return d||null}function __PRIVATE_mutationEquals(n,l){var d,f;return n.type===l.type&&!!n.key.isEqual(l.key)&&!!n.precondition.isEqual(l.precondition)&&(d=n.fieldTransforms,f=l.fieldTransforms,!!(void 0===d&&void 0===f||!(!d||!f)&&__PRIVATE_arrayEquals(d,f,(n,l)=>__PRIVATE_fieldTransformEquals(n,l))))&&(0===n.type?n.value.isEqual(l.value):1!==n.type||n.data.isEqual(l.data)&&n.fieldMask.isEqual(l.fieldMask))}let __PRIVATE_SetMutation=class __PRIVATE_SetMutation extends Mutation{constructor(n,l,d,f=[]){super(),this.key=n,this.value=l,this.precondition=d,this.fieldTransforms=f,this.type=0}getFieldMask(){return null}};let __PRIVATE_PatchMutation=class __PRIVATE_PatchMutation extends Mutation{constructor(n,l,d,f,_=[]){super(),this.key=n,this.data=l,this.fieldMask=d,this.precondition=f,this.fieldTransforms=_,this.type=1}getFieldMask(){return this.fieldMask}};function __PRIVATE_getPatch(n){let l=new Map;return n.fieldMask.fields.forEach(d=>{if(!d.isEmpty()){let f=n.data.field(d);l.set(d,f)}}),l}function __PRIVATE_serverTransformResults(n,l,d){let f=new Map;n.length===d.length||fail();for(let _=0;_<d.length;_++){let E=n[_],L=E.transform,z=l.data.field(E.field);f.set(E.field,__PRIVATE_applyTransformOperationToRemoteDocument(L,z,d[_]))}return f}function __PRIVATE_localTransformResults(n,l,d){let f=new Map;for(let _ of n){let n=_.transform,E=d.data.field(_.field);f.set(_.field,__PRIVATE_applyTransformOperationToLocalView(n,E,l))}return f}let __PRIVATE_DeleteMutation=class __PRIVATE_DeleteMutation extends Mutation{constructor(n,l){super(),this.key=n,this.precondition=l,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};let __PRIVATE_VerifyMutation=class __PRIVATE_VerifyMutation extends Mutation{constructor(n,l){super(),this.key=n,this.precondition=l,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MutationBatch=class MutationBatch{constructor(n,l,d,f){this.batchId=n,this.localWriteTime=l,this.baseMutations=d,this.mutations=f}applyToRemoteDocument(n,l){let d=l.mutationResults;for(let l=0;l<this.mutations.length;l++){let f=this.mutations[l];f.key.isEqual(n.key)&&__PRIVATE_mutationApplyToRemoteDocument(f,n,d[l])}}applyToLocalView(n,l){for(let d of this.baseMutations)d.key.isEqual(n.key)&&(l=__PRIVATE_mutationApplyToLocalView(d,n,l,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(n.key)&&(l=__PRIVATE_mutationApplyToLocalView(d,n,l,this.localWriteTime));return l}applyToLocalDocumentSet(n,l){let d=__PRIVATE_newDocumentKeyMap();return this.mutations.forEach(f=>{let _=n.get(f.key),E=_.overlayedDocument,L=this.applyToLocalView(E,_.mutatedFields);L=l.has(f.key)?null:L;let z=__PRIVATE_calculateOverlayMutation(E,L);null!==z&&d.set(f.key,z),E.isValidDocument()||E.convertToNoDocument(SnapshotVersion.min())}),d}keys(){return this.mutations.reduce((n,l)=>n.add(l.key),__PRIVATE_documentKeySet())}isEqual(n){return this.batchId===n.batchId&&__PRIVATE_arrayEquals(this.mutations,n.mutations,(n,l)=>__PRIVATE_mutationEquals(n,l))&&__PRIVATE_arrayEquals(this.baseMutations,n.baseMutations,(n,l)=>__PRIVATE_mutationEquals(n,l))}};let MutationBatchResult=class MutationBatchResult{constructor(n,l,d,f){this.batch=n,this.commitVersion=l,this.mutationResults=d,this.docVersions=f}static from(n,l,d){n.mutations.length===d.length||fail();let f=tb,_=n.mutations;for(let n=0;n<_.length;n++)f=f.insert(_[n].key,d[n].version);return new MutationBatchResult(n,l,d,f)}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Overlay=class Overlay{constructor(n,l){this.largestBatchId=n,this.mutation=l}getKey(){return this.mutation.key}isEqual(n){return null!==n&&this.mutation===n.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ExistenceFilter=class ExistenceFilter{constructor(n,l){this.count=n,this.unchangedNames=l}};function __PRIVATE_isPermanentError(n){switch(n){default:return fail();case ty.CANCELLED:case ty.UNKNOWN:case ty.DEADLINE_EXCEEDED:case ty.RESOURCE_EXHAUSTED:case ty.INTERNAL:case ty.UNAVAILABLE:case ty.UNAUTHENTICATED:return!1;case ty.INVALID_ARGUMENT:case ty.NOT_FOUND:case ty.ALREADY_EXISTS:case ty.PERMISSION_DENIED:case ty.FAILED_PRECONDITION:case ty.ABORTED:case ty.OUT_OF_RANGE:case ty.UNIMPLEMENTED:case ty.DATA_LOSS:return!0}}function __PRIVATE_mapCodeFromRpcCode(n){if(void 0===n)return __PRIVATE_logError("GRPC error has no .code"),ty.UNKNOWN;switch(n){case z.OK:return ty.OK;case z.CANCELLED:return ty.CANCELLED;case z.UNKNOWN:return ty.UNKNOWN;case z.DEADLINE_EXCEEDED:return ty.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return ty.RESOURCE_EXHAUSTED;case z.INTERNAL:return ty.INTERNAL;case z.UNAVAILABLE:return ty.UNAVAILABLE;case z.UNAUTHENTICATED:return ty.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return ty.INVALID_ARGUMENT;case z.NOT_FOUND:return ty.NOT_FOUND;case z.ALREADY_EXISTS:return ty.ALREADY_EXISTS;case z.PERMISSION_DENIED:return ty.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return ty.FAILED_PRECONDITION;case z.ABORTED:return ty.ABORTED;case z.OUT_OF_RANGE:return ty.OUT_OF_RANGE;case z.UNIMPLEMENTED:return ty.UNIMPLEMENTED;case z.DATA_LOSS:return ty.DATA_LOSS;default:return fail()}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_newTextEncoder(){return new TextEncoder}(et=z||(z={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tS=new tf([4294967295,4294967295],0);function __PRIVATE_getMd5HashValue(n){let l=__PRIVATE_newTextEncoder().encode(n),d=new td;return d.update(l),new Uint8Array(d.digest())}function __PRIVATE_get64BitUints(n){let l=new DataView(n.buffer),d=l.getUint32(0,!0),f=l.getUint32(4,!0),_=l.getUint32(8,!0),E=l.getUint32(12,!0);return[new tf([d,f],0),new tf([_,E],0)]}let BloomFilter=class BloomFilter{constructor(n,l,d){if(this.bitmap=n,this.padding=l,this.hashCount=d,l<0||l>=8)throw new __PRIVATE_BloomFilterError(`Invalid padding: ${l}`);if(d<0||n.length>0&&0===this.hashCount)throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${d}`);if(0===n.length&&0!==l)throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${l}`);this.Te=8*n.length-l,this.Ee=tf.fromNumber(this.Te)}de(n,l,d){let f=n.add(l.multiply(tf.fromNumber(d)));return 1===f.compare(tS)&&(f=new tf([f.getBits(0),f.getBits(1)],0)),f.modulo(this.Ee).toNumber()}Ae(n){return 0!=(this.bitmap[Math.floor(n/8)]&1<<n%8)}mightContain(n){if(0===this.Te)return!1;let l=__PRIVATE_getMd5HashValue(n),[d,f]=__PRIVATE_get64BitUints(l);for(let n=0;n<this.hashCount;n++){let l=this.de(d,f,n);if(!this.Ae(l))return!1}return!0}static create(n,l,d){let f=new Uint8Array(Math.ceil(n/8)),_=new BloomFilter(f,n%8==0?0:8-n%8,l);return d.forEach(n=>_.insert(n)),_}insert(n){if(0===this.Te)return;let l=__PRIVATE_getMd5HashValue(n),[d,f]=__PRIVATE_get64BitUints(l);for(let n=0;n<this.hashCount;n++){let l=this.de(d,f,n);this.Re(l)}}Re(n){this.bitmap[Math.floor(n/8)]|=1<<n%8}};let __PRIVATE_BloomFilterError=class __PRIVATE_BloomFilterError extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RemoteEvent=class RemoteEvent{constructor(n,l,d,f,_){this.snapshotVersion=n,this.targetChanges=l,this.targetMismatches=d,this.documentUpdates=f,this.resolvedLimboDocuments=_}static createSynthesizedRemoteEventForCurrentChange(n,l,d){let f=new Map;return f.set(n,TargetChange.createSynthesizedTargetChangeForCurrentChange(n,l,d)),new RemoteEvent(SnapshotVersion.min(),f,new SortedMap(__PRIVATE_primitiveComparator),tP,__PRIVATE_documentKeySet())}};let TargetChange=class TargetChange{constructor(n,l,d,f,_){this.resumeToken=n,this.current=l,this.addedDocuments=d,this.modifiedDocuments=f,this.removedDocuments=_}static createSynthesizedTargetChangeForCurrentChange(n,l,d){return new TargetChange(d,l,__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DocumentWatchChange=class __PRIVATE_DocumentWatchChange{constructor(n,l,d,f){this.Ve=n,this.removedTargetIds=l,this.key=d,this.me=f}};let __PRIVATE_ExistenceFilterChange=class __PRIVATE_ExistenceFilterChange{constructor(n,l){this.targetId=n,this.fe=l}};let __PRIVATE_WatchTargetChange=class __PRIVATE_WatchTargetChange{constructor(n,l,d=ByteString.EMPTY_BYTE_STRING,f=null){this.state=n,this.targetIds=l,this.resumeToken=d,this.cause=f}};let __PRIVATE_TargetState=class __PRIVATE_TargetState{constructor(){this.ge=0,this.pe=__PRIVATE_snapshotChangesMap(),this.ye=ByteString.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(n){n.approximateByteSize()>0&&(this.Se=!0,this.ye=n)}ve(){let n=__PRIVATE_documentKeySet(),l=__PRIVATE_documentKeySet(),d=__PRIVATE_documentKeySet();return this.pe.forEach((f,_)=>{switch(_){case 0:n=n.add(f);break;case 2:l=l.add(f);break;case 1:d=d.add(f);break;default:fail()}}),new TargetChange(this.ye,this.we,n,l,d)}Fe(){this.Se=!1,this.pe=__PRIVATE_snapshotChangesMap()}Me(n,l){this.Se=!0,this.pe=this.pe.insert(n,l)}xe(n){this.Se=!0,this.pe=this.pe.remove(n)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||fail()}Be(){this.Se=!0,this.we=!0}};let __PRIVATE_WatchChangeAggregator=class __PRIVATE_WatchChangeAggregator{constructor(n){this.Le=n,this.ke=new Map,this.qe=tP,this.Qe=__PRIVATE_documentTargetMap(),this.Ke=new SortedMap(__PRIVATE_primitiveComparator)}$e(n){for(let l of n.Ve)n.me&&n.me.isFoundDocument()?this.Ue(l,n.me):this.We(l,n.key,n.me);for(let l of n.removedTargetIds)this.We(l,n.key,n.me)}Ge(n){this.forEachTarget(n,l=>{let d=this.ze(l);switch(n.state){case 0:this.je(l)&&d.Ce(n.resumeToken);break;case 1:d.Ne(),d.be||d.Fe(),d.Ce(n.resumeToken);break;case 2:d.Ne(),d.be||this.removeTarget(l);break;case 3:this.je(l)&&(d.Be(),d.Ce(n.resumeToken));break;case 4:this.je(l)&&(this.He(l),d.Ce(n.resumeToken));break;default:fail()}})}forEachTarget(n,l){n.targetIds.length>0?n.targetIds.forEach(l):this.ke.forEach((n,d)=>{this.je(d)&&l(d)})}Je(n){let l=n.targetId,d=n.fe.count,f=this.Ye(l);if(f){let _=f.target;if(__PRIVATE_targetIsDocumentTarget(_)){if(0===d){let n=new DocumentKey(_.path);this.We(l,n,MutableDocument.newNoDocument(n,SnapshotVersion.min()))}else 1===d||fail()}else{let f=this.Ze(l);if(f!==d){let d=this.Xe(n),_=d?this.et(d,n,f):1;0!==_&&(this.He(l),this.Ke=this.Ke.insert(l,2===_?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(n){let l,d;let f=n.fe.unchangedNames;if(!f||!f.bits)return null;let{bits:{bitmap:_="",padding:E=0},hashCount:L=0}=f;try{l=__PRIVATE_normalizeByteString(_).toUint8Array()}catch(n){if(n instanceof __PRIVATE_Base64DecodeError)return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed ("+n.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw n}try{d=new BloomFilter(l,E,L)}catch(n){return __PRIVATE_logWarn(n instanceof __PRIVATE_BloomFilterError?"BloomFilter error: ":"Applying bloom filter failed: ",n),null}return 0===d.Te?null:d}et(n,l,d){return l.fe.count===d-this.rt(n,l.targetId)?0:2}rt(n,l){let d=this.Le.getRemoteKeysForTarget(l),f=0;return d.forEach(d=>{let _=this.Le.nt(),E=`projects/${_.projectId}/databases/${_.database}/documents/${d.path.canonicalString()}`;n.mightContain(E)||(this.We(l,d,null),f++)}),f}it(n){let l=new Map;this.ke.forEach((d,f)=>{let _=this.Ye(f);if(_){if(d.current&&__PRIVATE_targetIsDocumentTarget(_.target)){let l=new DocumentKey(_.target.path);null!==this.qe.get(l)||this.st(f,l)||this.We(f,l,MutableDocument.newNoDocument(l,n))}d.De&&(l.set(f,d.ve()),d.Fe())}});let d=__PRIVATE_documentKeySet();this.Qe.forEach((n,l)=>{let f=!0;l.forEachWhile(n=>{let l=this.Ye(n);return!l||"TargetPurposeLimboResolution"===l.purpose||(f=!1,!1)}),f&&(d=d.add(n))}),this.qe.forEach((l,d)=>d.setReadTime(n));let f=new RemoteEvent(n,l,this.Ke,this.qe,d);return this.qe=tP,this.Qe=__PRIVATE_documentTargetMap(),this.Ke=new SortedMap(__PRIVATE_primitiveComparator),f}Ue(n,l){if(!this.je(n))return;let d=this.st(n,l.key)?2:0;this.ze(n).Me(l.key,d),this.qe=this.qe.insert(l.key,l),this.Qe=this.Qe.insert(l.key,this.ot(l.key).add(n))}We(n,l,d){if(!this.je(n))return;let f=this.ze(n);this.st(n,l)?f.Me(l,1):f.xe(l),this.Qe=this.Qe.insert(l,this.ot(l).delete(n)),d&&(this.qe=this.qe.insert(l,d))}removeTarget(n){this.ke.delete(n)}Ze(n){let l=this.ze(n).ve();return this.Le.getRemoteKeysForTarget(n).size+l.addedDocuments.size-l.removedDocuments.size}Oe(n){this.ze(n).Oe()}ze(n){let l=this.ke.get(n);return l||(l=new __PRIVATE_TargetState,this.ke.set(n,l)),l}ot(n){let l=this.Qe.get(n);return l||(l=new SortedSet(__PRIVATE_primitiveComparator),this.Qe=this.Qe.insert(n,l)),l}je(n){let l=null!==this.Ye(n);return l||__PRIVATE_logDebug("WatchChangeAggregator","Detected inactive target",n),l}Ye(n){let l=this.ke.get(n);return l&&l.be?null:this.Le._t(n)}He(n){this.ke.set(n,new __PRIVATE_TargetState),this.Le.getRemoteKeysForTarget(n).forEach(l=>{this.We(n,l,null)})}st(n,l){return this.Le.getRemoteKeysForTarget(n).has(l)}};function __PRIVATE_documentTargetMap(){return new SortedMap(DocumentKey.comparator)}function __PRIVATE_snapshotChangesMap(){return new SortedMap(DocumentKey.comparator)}let tV={asc:"ASCENDING",desc:"DESCENDING"},tC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tk={and:"AND",or:"OR"};let JsonProtoSerializer=class JsonProtoSerializer{constructor(n,l){this.databaseId=n,this.useProto3Json=l}};function __PRIVATE_toInt32Proto(n,l){return n.useProto3Json||null==l?l:{value:l}}function toTimestamp(n,l){return n.useProto3Json?`${new Date(1e3*l.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+l.nanoseconds).slice(-9)}Z`:{seconds:""+l.seconds,nanos:l.nanoseconds}}function __PRIVATE_toBytes(n,l){return n.useProto3Json?l.toBase64():l.toUint8Array()}function __PRIVATE_toVersion(n,l){return toTimestamp(n,l.toTimestamp())}function __PRIVATE_fromVersion(n){return n||fail(),SnapshotVersion.fromTimestamp(function(n){let l=__PRIVATE_normalizeTimestamp(n);return new Timestamp(l.seconds,l.nanos)}(n))}function __PRIVATE_toResourceName(n,l){return __PRIVATE_toResourcePath(n,l).canonicalString()}function __PRIVATE_toResourcePath(n,l){let d=new ResourcePath(["projects",n.projectId,"databases",n.database]).child("documents");return void 0===l?d:d.child(l)}function __PRIVATE_fromResourceName(n){let l=ResourcePath.fromString(n);return __PRIVATE_isValidResourceName(l)||fail(),l}function __PRIVATE_toName(n,l){return __PRIVATE_toResourceName(n.databaseId,l.path)}function fromName(n,l){let d=__PRIVATE_fromResourceName(l);if(d.get(1)!==n.databaseId.projectId)throw new FirestoreError(ty.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+d.get(1)+" vs "+n.databaseId.projectId);if(d.get(3)!==n.databaseId.database)throw new FirestoreError(ty.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+d.get(3)+" vs "+n.databaseId.database);return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(d))}function __PRIVATE_toQueryPath(n,l){return __PRIVATE_toResourceName(n.databaseId,l)}function __PRIVATE_fromQueryPath(n){let l=__PRIVATE_fromResourceName(n);return 4===l.length?ResourcePath.emptyPath():__PRIVATE_extractLocalPathFromResourceName(l)}function __PRIVATE_getEncodedDatabaseId(n){return new ResourcePath(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function __PRIVATE_extractLocalPathFromResourceName(n){return n.length>4&&"documents"===n.get(4)||fail(),n.popFirst(5)}function __PRIVATE_toMutationDocument(n,l,d){return{name:__PRIVATE_toName(n,l),fields:d.value.mapValue.fields}}function __PRIVATE_fromWatchChange(n,l){let d;if("targetChange"in l){var f,_;l.targetChange;let E="NO_CHANGE"===(f=l.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===f?1:"REMOVE"===f?2:"CURRENT"===f?3:"RESET"===f?4:fail(),L=l.targetChange.targetIds||[],z=(_=l.targetChange.resumeToken,n.useProto3Json?(void 0===_||"string"==typeof _||fail(),ByteString.fromBase64String(_||"")):(void 0===_||_ instanceof Uint8Array||fail(),ByteString.fromUint8Array(_||new Uint8Array))),et=l.targetChange.cause,er=et&&function(n){let l=void 0===n.code?ty.UNKNOWN:__PRIVATE_mapCodeFromRpcCode(n.code);return new FirestoreError(l,n.message||"")}(et);d=new __PRIVATE_WatchTargetChange(E,L,z,er||null)}else if("documentChange"in l){l.documentChange;let f=l.documentChange;f.document,f.document.name,f.document.updateTime;let _=fromName(n,f.document.name),E=__PRIVATE_fromVersion(f.document.updateTime),L=f.document.createTime?__PRIVATE_fromVersion(f.document.createTime):SnapshotVersion.min(),z=new ObjectValue({mapValue:{fields:f.document.fields}}),et=MutableDocument.newFoundDocument(_,E,L,z),er=f.targetIds||[],en=f.removedTargetIds||[];d=new __PRIVATE_DocumentWatchChange(er,en,et.key,et)}else if("documentDelete"in l){l.documentDelete;let f=l.documentDelete;f.document;let _=fromName(n,f.document),E=f.readTime?__PRIVATE_fromVersion(f.readTime):SnapshotVersion.min(),L=MutableDocument.newNoDocument(_,E),z=f.removedTargetIds||[];d=new __PRIVATE_DocumentWatchChange([],z,L.key,L)}else if("documentRemove"in l){l.documentRemove;let f=l.documentRemove;f.document;let _=fromName(n,f.document),E=f.removedTargetIds||[];d=new __PRIVATE_DocumentWatchChange([],E,_,null)}else{if(!("filter"in l))return fail();{l.filter;let n=l.filter;n.targetId;let{count:f=0,unchangedNames:_}=n,E=new ExistenceFilter(f,_),L=n.targetId;d=new __PRIVATE_ExistenceFilterChange(L,E)}}return d}function toMutation(n,l){var d;let f;if(l instanceof __PRIVATE_SetMutation)f={update:__PRIVATE_toMutationDocument(n,l.key,l.value)};else if(l instanceof __PRIVATE_DeleteMutation)f={delete:__PRIVATE_toName(n,l.key)};else if(l instanceof __PRIVATE_PatchMutation)f={update:__PRIVATE_toMutationDocument(n,l.key,l.data),updateMask:__PRIVATE_toDocumentMask(l.fieldMask)};else{if(!(l instanceof __PRIVATE_VerifyMutation))return fail();f={verify:__PRIVATE_toName(n,l.key)}}return l.fieldTransforms.length>0&&(f.updateTransforms=l.fieldTransforms.map(n=>(function(n,l){let d=l.transform;if(d instanceof __PRIVATE_ServerTimestampTransform)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof __PRIVATE_ArrayUnionTransformOperation)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof __PRIVATE_ArrayRemoveTransformOperation)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof __PRIVATE_NumericIncrementTransformOperation)return{fieldPath:l.field.canonicalString(),increment:d.Ie};throw fail()})(0,n))),l.precondition.isNone||(f.currentDocument=void 0!==(d=l.precondition).updateTime?{updateTime:__PRIVATE_toVersion(n,d.updateTime)}:void 0!==d.exists?{exists:d.exists}:fail()),f}function __PRIVATE_fromWriteResults(n,l){return n&&n.length>0?(void 0!==l||fail(),n.map(n=>{let d;return(d=n.updateTime?__PRIVATE_fromVersion(n.updateTime):__PRIVATE_fromVersion(l)).isEqual(SnapshotVersion.min())&&(d=__PRIVATE_fromVersion(l)),new MutationResult(d,n.transformResults||[])})):[]}function __PRIVATE_toDocumentsTarget(n,l){return{documents:[__PRIVATE_toQueryPath(n,l.path)]}}function __PRIVATE_toQueryTarget(n,l){var d,f;let _;let E={structuredQuery:{}},L=l.path;null!==l.collectionGroup?(_=L,E.structuredQuery.from=[{collectionId:l.collectionGroup,allDescendants:!0}]):(_=L.popLast(),E.structuredQuery.from=[{collectionId:L.lastSegment()}]),E.parent=__PRIVATE_toQueryPath(n,_);let z=function(n){if(0!==n.length)return __PRIVATE_toFilter(CompositeFilter.create(n,"and"))}(l.filters);z&&(E.structuredQuery.where=z);let et=function(n){if(0!==n.length)return n.map(n=>({field:__PRIVATE_toFieldPathReference(n.field),direction:__PRIVATE_toDirection(n.dir)}))}(l.orderBy);et&&(E.structuredQuery.orderBy=et);let er=__PRIVATE_toInt32Proto(n,l.limit);return null!==er&&(E.structuredQuery.limit=er),l.startAt&&(E.structuredQuery.startAt={before:(d=l.startAt).inclusive,values:d.position}),l.endAt&&(E.structuredQuery.endAt={before:!(f=l.endAt).inclusive,values:f.position}),{ut:E,parent:_}}function __PRIVATE_convertQueryTargetToQuery(n){var l;let d,f=__PRIVATE_fromQueryPath(n.parent),_=n.structuredQuery,E=_.from?_.from.length:0,L=null;if(E>0){1===E||fail();let n=_.from[0];n.allDescendants?L=n.collectionId:f=f.child(n.collectionId)}let z=[];_.where&&(z=function(n){var l;let d=__PRIVATE_fromFilter(n);return d instanceof CompositeFilter&&__PRIVATE_compositeFilterIsFlat(l=d)&&__PRIVATE_compositeFilterIsConjunction(l)?d.getFilters():[d]}(_.where));let et=[];_.orderBy&&(et=_.orderBy.map(n=>new OrderBy(__PRIVATE_fromFieldPathReference(n.field),function(n){switch(n){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(n.direction))));let er=null;_.limit&&(er=null==(d="object"==typeof(l=_.limit)?l.value:l)?null:d);let en=null;_.startAt&&(en=function(n){let l=!!n.before,d=n.values||[];return new Bound(d,l)}(_.startAt));let ei=null;return _.endAt&&(ei=function(n){let l=!n.before,d=n.values||[];return new Bound(d,l)}(_.endAt)),__PRIVATE_newQuery(f,L,et,z,er,"F",en,ei)}function __PRIVATE_toListenRequestLabels(n,l){let d=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fail()}}(l.purpose);return null==d?null:{"goog-listen-tags":d}}function __PRIVATE_fromFilter(n){return void 0!==n.unaryFilter?function(n){switch(n.unaryFilter.op){case"IS_NAN":let l=__PRIVATE_fromFieldPathReference(n.unaryFilter.field);return FieldFilter.create(l,"==",{doubleValue:NaN});case"IS_NULL":let d=__PRIVATE_fromFieldPathReference(n.unaryFilter.field);return FieldFilter.create(d,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let f=__PRIVATE_fromFieldPathReference(n.unaryFilter.field);return FieldFilter.create(f,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let _=__PRIVATE_fromFieldPathReference(n.unaryFilter.field);return FieldFilter.create(_,"!=",{nullValue:"NULL_VALUE"});default:return fail()}}(n):void 0!==n.fieldFilter?FieldFilter.create(__PRIVATE_fromFieldPathReference(n.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fail()}}(n.fieldFilter.op),n.fieldFilter.value):void 0!==n.compositeFilter?CompositeFilter.create(n.compositeFilter.filters.map(n=>__PRIVATE_fromFilter(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return fail()}}(n.compositeFilter.op)):fail()}function __PRIVATE_toDirection(n){return tV[n]}function __PRIVATE_toOperatorName(n){return tC[n]}function __PRIVATE_toCompositeOperatorName(n){return tk[n]}function __PRIVATE_toFieldPathReference(n){return{fieldPath:n.canonicalString()}}function __PRIVATE_fromFieldPathReference(n){return FieldPath$1.fromServerFormat(n.fieldPath)}function __PRIVATE_toFilter(n){return n instanceof FieldFilter?function(n){if("=="===n.op){if(__PRIVATE_isNanValue(n.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(n.field),op:"IS_NAN"}};if(__PRIVATE_isNullValue(n.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(n.field),op:"IS_NULL"}}}else if("!="===n.op){if(__PRIVATE_isNanValue(n.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(n.field),op:"IS_NOT_NAN"}};if(__PRIVATE_isNullValue(n.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:__PRIVATE_toFieldPathReference(n.field),op:__PRIVATE_toOperatorName(n.op),value:n.value}}}(n):n instanceof CompositeFilter?function(n){let l=n.getFilters().map(n=>__PRIVATE_toFilter(n));return 1===l.length?l[0]:{compositeFilter:{op:__PRIVATE_toCompositeOperatorName(n.op),filters:l}}}(n):fail()}function __PRIVATE_toDocumentMask(n){let l=[];return n.fields.forEach(n=>l.push(n.canonicalString())),{fieldPaths:l}}function __PRIVATE_isValidResourceName(n){return n.length>=4&&"projects"===n.get(0)&&"databases"===n.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TargetData=class TargetData{constructor(n,l,d,f,_=SnapshotVersion.min(),E=SnapshotVersion.min(),L=ByteString.EMPTY_BYTE_STRING,z=null){this.target=n,this.targetId=l,this.purpose=d,this.sequenceNumber=f,this.snapshotVersion=_,this.lastLimboFreeSnapshotVersion=E,this.resumeToken=L,this.expectedCount=z}withSequenceNumber(n){return new TargetData(this.target,this.targetId,this.purpose,n,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(n,l){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,l,this.lastLimboFreeSnapshotVersion,n,null)}withExpectedCount(n){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,n)}withLastLimboFreeSnapshotVersion(n){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,n,this.resumeToken,this.expectedCount)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalSerializer=class __PRIVATE_LocalSerializer{constructor(n){this.ct=n}};function __PRIVATE_fromBundledQuery(n){let l=__PRIVATE_convertQueryTargetToQuery({parent:n.parent,structuredQuery:n.structuredQuery});return"LAST"===n.limitType?__PRIVATE_queryWithLimit(l,l.limit,"L"):l}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_FirestoreIndexValueWriter=class __PRIVATE_FirestoreIndexValueWriter{constructor(){}Pt(n,l){this.It(n,l),l.Tt()}It(n,l){if("nullValue"in n)this.Et(l,5);else if("booleanValue"in n)this.Et(l,10),l.dt(n.booleanValue?1:0);else if("integerValue"in n)this.Et(l,15),l.dt(__PRIVATE_normalizeNumber(n.integerValue));else if("doubleValue"in n){let d=__PRIVATE_normalizeNumber(n.doubleValue);isNaN(d)?this.Et(l,13):(this.Et(l,15),__PRIVATE_isNegativeZero(d)?l.dt(0):l.dt(d))}else if("timestampValue"in n){let d=n.timestampValue;this.Et(l,20),"string"==typeof d?l.At(d):(l.At(`${d.seconds||""}`),l.dt(d.nanos||0))}else if("stringValue"in n)this.Rt(n.stringValue,l),this.Vt(l);else if("bytesValue"in n)this.Et(l,30),l.ft(__PRIVATE_normalizeByteString(n.bytesValue)),this.Vt(l);else if("referenceValue"in n)this.gt(n.referenceValue,l);else if("geoPointValue"in n){let d=n.geoPointValue;this.Et(l,45),l.dt(d.latitude||0),l.dt(d.longitude||0)}else"mapValue"in n?__PRIVATE_isMaxValue(n)?this.Et(l,Number.MAX_SAFE_INTEGER):(this.yt(n.mapValue,l),this.Vt(l)):"arrayValue"in n?(this.wt(n.arrayValue,l),this.Vt(l)):fail()}Rt(n,l){this.Et(l,25),this.St(n,l)}St(n,l){l.At(n)}yt(n,l){let d=n.fields||{};for(let n of(this.Et(l,55),Object.keys(d)))this.Rt(n,l),this.It(d[n],l)}wt(n,l){let d=n.values||[];for(let n of(this.Et(l,50),d))this.It(n,l)}gt(n,l){this.Et(l,37),DocumentKey.fromName(n).path.forEach(n=>{this.Et(l,60),this.St(n,l)})}Et(n,l){n.dt(l)}Vt(n){n.dt(2)}};__PRIVATE_FirestoreIndexValueWriter.bt=new __PRIVATE_FirestoreIndexValueWriter;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryIndexManager=class __PRIVATE_MemoryIndexManager{constructor(){this._n=new __PRIVATE_MemoryCollectionParentIndex}addToCollectionParentIndex(n,l){return this._n.add(l),PersistencePromise.resolve()}getCollectionParents(n,l){return PersistencePromise.resolve(this._n.getEntries(l))}addFieldIndex(n,l){return PersistencePromise.resolve()}deleteFieldIndex(n,l){return PersistencePromise.resolve()}deleteAllFieldIndexes(n){return PersistencePromise.resolve()}createTargetIndexes(n,l){return PersistencePromise.resolve()}getDocumentsMatchingTarget(n,l){return PersistencePromise.resolve(null)}getIndexType(n,l){return PersistencePromise.resolve(0)}getFieldIndexes(n,l){return PersistencePromise.resolve([])}getNextCollectionGroupToUpdate(n){return PersistencePromise.resolve(null)}getMinOffset(n,l){return PersistencePromise.resolve(IndexOffset.min())}getMinOffsetFromCollectionGroup(n,l){return PersistencePromise.resolve(IndexOffset.min())}updateCollectionGroup(n,l,d){return PersistencePromise.resolve()}updateIndexEntries(n,l){return PersistencePromise.resolve()}};let __PRIVATE_MemoryCollectionParentIndex=class __PRIVATE_MemoryCollectionParentIndex{constructor(){this.index={}}add(n){let l=n.lastSegment(),d=n.popLast(),f=this.index[l]||new SortedSet(ResourcePath.comparator),_=!f.has(d);return this.index[l]=f.add(d),_}has(n){let l=n.lastSegment(),d=n.popLast(),f=this.index[l];return f&&f.has(d)}getEntries(n){return(this.index[n]||new SortedSet(ResourcePath.comparator)).toArray()}};new Uint8Array(0);let LruParams=class LruParams{constructor(n,l,d){this.cacheSizeCollectionThreshold=n,this.percentileToCollect=l,this.maximumSequenceNumbersToCollect=d}static withCacheSize(n){return new LruParams(n,LruParams.DEFAULT_COLLECTION_PERCENTILE,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */LruParams.DEFAULT_COLLECTION_PERCENTILE=10,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,LruParams.DEFAULT=new LruParams(41943040,LruParams.DEFAULT_COLLECTION_PERCENTILE,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),LruParams.DISABLED=new LruParams(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_TargetIdGenerator=class __PRIVATE_TargetIdGenerator{constructor(n){this.On=n}next(){return this.On+=2,this.On}static Nn(){return new __PRIVATE_TargetIdGenerator(0)}static Bn(){return new __PRIVATE_TargetIdGenerator(-1)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RemoteDocumentChangeBuffer=class RemoteDocumentChangeBuffer{constructor(){this.changes=new ObjectMap(n=>n.toString(),(n,l)=>n.isEqual(l)),this.changesApplied=!1}addEntry(n){this.assertNotApplied(),this.changes.set(n.key,n)}removeEntry(n,l){this.assertNotApplied(),this.changes.set(n,MutableDocument.newInvalidDocument(n).setReadTime(l))}getEntry(n,l){this.assertNotApplied();let d=this.changes.get(l);return void 0!==d?PersistencePromise.resolve(d):this.getFromCache(n,l)}getEntries(n,l){return this.getAllFromCache(n,l)}apply(n){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(n)}assertNotApplied(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OverlayedDocument=class OverlayedDocument{constructor(n,l){this.overlayedDocument=n,this.mutatedFields=l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LocalDocumentsView=class LocalDocumentsView{constructor(n,l,d,f){this.remoteDocumentCache=n,this.mutationQueue=l,this.documentOverlayCache=d,this.indexManager=f}getDocument(n,l){let d=null;return this.documentOverlayCache.getOverlay(n,l).next(f=>(d=f,this.remoteDocumentCache.getEntry(n,l))).next(n=>(null!==d&&__PRIVATE_mutationApplyToLocalView(d.mutation,n,FieldMask.empty(),Timestamp.now()),n))}getDocuments(n,l){return this.remoteDocumentCache.getEntries(n,l).next(l=>this.getLocalViewOfDocuments(n,l,__PRIVATE_documentKeySet()).next(()=>l))}getLocalViewOfDocuments(n,l,d=__PRIVATE_documentKeySet()){let f=__PRIVATE_newDocumentKeyMap();return this.populateOverlays(n,f,l).next(()=>this.computeViews(n,l,f,d).next(n=>{let l=documentMap();return n.forEach((n,d)=>{l=l.insert(n,d.overlayedDocument)}),l}))}getOverlayedDocuments(n,l){let d=__PRIVATE_newDocumentKeyMap();return this.populateOverlays(n,d,l).next(()=>this.computeViews(n,l,d,__PRIVATE_documentKeySet()))}populateOverlays(n,l,d){let f=[];return d.forEach(n=>{l.has(n)||f.push(n)}),this.documentOverlayCache.getOverlays(n,f).next(n=>{n.forEach((n,d)=>{l.set(n,d)})})}computeViews(n,l,d,f){let _=tP,E=__PRIVATE_newDocumentKeyMap(),L=__PRIVATE_newDocumentKeyMap();return l.forEach((n,l)=>{let L=d.get(l.key);f.has(l.key)&&(void 0===L||L.mutation instanceof __PRIVATE_PatchMutation)?_=_.insert(l.key,l):void 0!==L?(E.set(l.key,L.mutation.getFieldMask()),__PRIVATE_mutationApplyToLocalView(L.mutation,l,L.mutation.getFieldMask(),Timestamp.now())):E.set(l.key,FieldMask.empty())}),this.recalculateAndSaveOverlays(n,_).next(n=>(n.forEach((n,l)=>E.set(n,l)),l.forEach((n,l)=>{var d;return L.set(n,new OverlayedDocument(l,null!==(d=E.get(n))&&void 0!==d?d:null))}),L))}recalculateAndSaveOverlays(n,l){let d=__PRIVATE_newDocumentKeyMap(),f=new SortedMap((n,l)=>n-l),_=__PRIVATE_documentKeySet();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(n,l).next(n=>{for(let _ of n)_.keys().forEach(n=>{let E=l.get(n);if(null===E)return;let L=d.get(n)||FieldMask.empty();L=_.applyToLocalView(E,L),d.set(n,L);let z=(f.get(_.batchId)||__PRIVATE_documentKeySet()).add(n);f=f.insert(_.batchId,z)})}).next(()=>{let E=[],L=f.getReverseIterator();for(;L.hasNext();){let f=L.getNext(),z=f.key,et=f.value,er=__PRIVATE_newDocumentKeyMap();et.forEach(n=>{if(!_.has(n)){let f=__PRIVATE_calculateOverlayMutation(l.get(n),d.get(n));null!==f&&er.set(n,f),_=_.add(n)}}),E.push(this.documentOverlayCache.saveOverlays(n,z,er))}return PersistencePromise.waitFor(E)}).next(()=>d)}recalculateAndSaveOverlaysForDocumentKeys(n,l){return this.remoteDocumentCache.getEntries(n,l).next(l=>this.recalculateAndSaveOverlays(n,l))}getDocumentsMatchingQuery(n,l,d,f){return DocumentKey.isDocumentKey(l.path)&&null===l.collectionGroup&&0===l.filters.length?this.getDocumentsMatchingDocumentQuery(n,l.path):__PRIVATE_isCollectionGroupQuery(l)?this.getDocumentsMatchingCollectionGroupQuery(n,l,d,f):this.getDocumentsMatchingCollectionQuery(n,l,d,f)}getNextDocuments(n,l,d,f){return this.remoteDocumentCache.getAllFromCollectionGroup(n,l,d,f).next(_=>{let E=f-_.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(n,l,d.largestBatchId,f-_.size):PersistencePromise.resolve(__PRIVATE_newDocumentKeyMap()),L=-1,z=_;return E.next(l=>PersistencePromise.forEach(l,(l,d)=>(L<d.largestBatchId&&(L=d.largestBatchId),_.get(l)?PersistencePromise.resolve():this.remoteDocumentCache.getEntry(n,l).next(n=>{z=z.insert(l,n)}))).next(()=>this.populateOverlays(n,l,_)).next(()=>this.computeViews(n,z,l,__PRIVATE_documentKeySet())).next(n=>({batchId:L,changes:__PRIVATE_convertOverlayedDocumentMapToDocumentMap(n)})))})}getDocumentsMatchingDocumentQuery(n,l){return this.getDocument(n,new DocumentKey(l)).next(n=>{let l=documentMap();return n.isFoundDocument()&&(l=l.insert(n.key,n)),l})}getDocumentsMatchingCollectionGroupQuery(n,l,d,f){let _=l.collectionGroup,E=documentMap();return this.indexManager.getCollectionParents(n,_).next(L=>PersistencePromise.forEach(L,L=>{let z=new __PRIVATE_QueryImpl(L.child(_),null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt);return this.getDocumentsMatchingCollectionQuery(n,z,d,f).next(n=>{n.forEach((n,l)=>{E=E.insert(n,l)})})}).next(()=>E))}getDocumentsMatchingCollectionQuery(n,l,d,f){let _;return this.documentOverlayCache.getOverlaysForCollection(n,l.path,d.largestBatchId).next(E=>(_=E,this.remoteDocumentCache.getDocumentsMatchingQuery(n,l,d,_,f))).next(n=>{_.forEach((l,d)=>{let f=d.getKey();null===n.get(f)&&(n=n.insert(f,MutableDocument.newInvalidDocument(f)))});let d=documentMap();return n.forEach((n,f)=>{let E=_.get(n);void 0!==E&&__PRIVATE_mutationApplyToLocalView(E.mutation,f,FieldMask.empty(),Timestamp.now()),__PRIVATE_queryMatches(l,f)&&(d=d.insert(n,f))}),d})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryBundleCache=class __PRIVATE_MemoryBundleCache{constructor(n){this.serializer=n,this.cr=new Map,this.lr=new Map}getBundleMetadata(n,l){return PersistencePromise.resolve(this.cr.get(l))}saveBundleMetadata(n,l){return this.cr.set(l.id,{id:l.id,version:l.version,createTime:__PRIVATE_fromVersion(l.createTime)}),PersistencePromise.resolve()}getNamedQuery(n,l){return PersistencePromise.resolve(this.lr.get(l))}saveNamedQuery(n,l){return this.lr.set(l.name,{name:l.name,query:__PRIVATE_fromBundledQuery(l.bundledQuery),readTime:__PRIVATE_fromVersion(l.readTime)}),PersistencePromise.resolve()}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryDocumentOverlayCache=class __PRIVATE_MemoryDocumentOverlayCache{constructor(){this.overlays=new SortedMap(DocumentKey.comparator),this.hr=new Map}getOverlay(n,l){return PersistencePromise.resolve(this.overlays.get(l))}getOverlays(n,l){let d=__PRIVATE_newDocumentKeyMap();return PersistencePromise.forEach(l,l=>this.getOverlay(n,l).next(n=>{null!==n&&d.set(l,n)})).next(()=>d)}saveOverlays(n,l,d){return d.forEach((d,f)=>{this.ht(n,l,f)}),PersistencePromise.resolve()}removeOverlaysForBatchId(n,l,d){let f=this.hr.get(d);return void 0!==f&&(f.forEach(n=>this.overlays=this.overlays.remove(n)),this.hr.delete(d)),PersistencePromise.resolve()}getOverlaysForCollection(n,l,d){let f=__PRIVATE_newDocumentKeyMap(),_=l.length+1,E=new DocumentKey(l.child("")),L=this.overlays.getIteratorFrom(E);for(;L.hasNext();){let n=L.getNext().value,E=n.getKey();if(!l.isPrefixOf(E.path))break;E.path.length===_&&n.largestBatchId>d&&f.set(n.getKey(),n)}return PersistencePromise.resolve(f)}getOverlaysForCollectionGroup(n,l,d,f){let _=new SortedMap((n,l)=>n-l),E=this.overlays.getIterator();for(;E.hasNext();){let n=E.getNext().value;if(n.getKey().getCollectionGroup()===l&&n.largestBatchId>d){let l=_.get(n.largestBatchId);null===l&&(l=__PRIVATE_newDocumentKeyMap(),_=_.insert(n.largestBatchId,l)),l.set(n.getKey(),n)}}let L=__PRIVATE_newDocumentKeyMap(),z=_.getIterator();for(;z.hasNext()&&(z.getNext().value.forEach((n,l)=>L.set(n,l)),!(L.size()>=f)););return PersistencePromise.resolve(L)}ht(n,l,d){let f=this.overlays.get(d.key);if(null!==f){let n=this.hr.get(f.largestBatchId).delete(d.key);this.hr.set(f.largestBatchId,n)}this.overlays=this.overlays.insert(d.key,new Overlay(l,d));let _=this.hr.get(l);void 0===_&&(_=__PRIVATE_documentKeySet(),this.hr.set(l,_)),this.hr.set(l,_.add(d.key))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ReferenceSet=class __PRIVATE_ReferenceSet{constructor(){this.Pr=new SortedSet(__PRIVATE_DocReference.Ir),this.Tr=new SortedSet(__PRIVATE_DocReference.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(n,l){let d=new __PRIVATE_DocReference(n,l);this.Pr=this.Pr.add(d),this.Tr=this.Tr.add(d)}dr(n,l){n.forEach(n=>this.addReference(n,l))}removeReference(n,l){this.Ar(new __PRIVATE_DocReference(n,l))}Rr(n,l){n.forEach(n=>this.removeReference(n,l))}Vr(n){let l=new DocumentKey(new ResourcePath([])),d=new __PRIVATE_DocReference(l,n),f=new __PRIVATE_DocReference(l,n+1),_=[];return this.Tr.forEachInRange([d,f],n=>{this.Ar(n),_.push(n.key)}),_}mr(){this.Pr.forEach(n=>this.Ar(n))}Ar(n){this.Pr=this.Pr.delete(n),this.Tr=this.Tr.delete(n)}gr(n){let l=new DocumentKey(new ResourcePath([])),d=new __PRIVATE_DocReference(l,n),f=new __PRIVATE_DocReference(l,n+1),_=__PRIVATE_documentKeySet();return this.Tr.forEachInRange([d,f],n=>{_=_.add(n.key)}),_}containsKey(n){let l=new __PRIVATE_DocReference(n,0),d=this.Pr.firstAfterOrEqual(l);return null!==d&&n.isEqual(d.key)}};let __PRIVATE_DocReference=class __PRIVATE_DocReference{constructor(n,l){this.key=n,this.pr=l}static Ir(n,l){return DocumentKey.comparator(n.key,l.key)||__PRIVATE_primitiveComparator(n.pr,l.pr)}static Er(n,l){return __PRIVATE_primitiveComparator(n.pr,l.pr)||DocumentKey.comparator(n.key,l.key)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryMutationQueue=class __PRIVATE_MemoryMutationQueue{constructor(n,l){this.indexManager=n,this.referenceDelegate=l,this.mutationQueue=[],this.yr=1,this.wr=new SortedSet(__PRIVATE_DocReference.Ir)}checkEmpty(n){return PersistencePromise.resolve(0===this.mutationQueue.length)}addMutationBatch(n,l,d,f){let _=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let E=new MutationBatch(_,l,d,f);for(let l of(this.mutationQueue.push(E),f))this.wr=this.wr.add(new __PRIVATE_DocReference(l.key,_)),this.indexManager.addToCollectionParentIndex(n,l.key.path.popLast());return PersistencePromise.resolve(E)}lookupMutationBatch(n,l){return PersistencePromise.resolve(this.Sr(l))}getNextMutationBatchAfterBatchId(n,l){let d=this.br(l+1),f=d<0?0:d;return PersistencePromise.resolve(this.mutationQueue.length>f?this.mutationQueue[f]:null)}getHighestUnacknowledgedBatchId(){return PersistencePromise.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(n){return PersistencePromise.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(n,l){let d=new __PRIVATE_DocReference(l,0),f=new __PRIVATE_DocReference(l,Number.POSITIVE_INFINITY),_=[];return this.wr.forEachInRange([d,f],n=>{let l=this.Sr(n.pr);_.push(l)}),PersistencePromise.resolve(_)}getAllMutationBatchesAffectingDocumentKeys(n,l){let d=new SortedSet(__PRIVATE_primitiveComparator);return l.forEach(n=>{let l=new __PRIVATE_DocReference(n,0),f=new __PRIVATE_DocReference(n,Number.POSITIVE_INFINITY);this.wr.forEachInRange([l,f],n=>{d=d.add(n.pr)})}),PersistencePromise.resolve(this.Dr(d))}getAllMutationBatchesAffectingQuery(n,l){let d=l.path,f=d.length+1,_=d;DocumentKey.isDocumentKey(_)||(_=_.child(""));let E=new __PRIVATE_DocReference(new DocumentKey(_),0),L=new SortedSet(__PRIVATE_primitiveComparator);return this.wr.forEachWhile(n=>{let l=n.key.path;return!!d.isPrefixOf(l)&&(l.length===f&&(L=L.add(n.pr)),!0)},E),PersistencePromise.resolve(this.Dr(L))}Dr(n){let l=[];return n.forEach(n=>{let d=this.Sr(n);null!==d&&l.push(d)}),l}removeMutationBatch(n,l){0===this.Cr(l.batchId,"removed")||fail(),this.mutationQueue.shift();let d=this.wr;return PersistencePromise.forEach(l.mutations,f=>{let _=new __PRIVATE_DocReference(f.key,l.batchId);return d=d.delete(_),this.referenceDelegate.markPotentiallyOrphaned(n,f.key)}).next(()=>{this.wr=d})}Mn(n){}containsKey(n,l){let d=new __PRIVATE_DocReference(l,0),f=this.wr.firstAfterOrEqual(d);return PersistencePromise.resolve(l.isEqual(f&&f.key))}performConsistencyCheck(n){return this.mutationQueue.length,PersistencePromise.resolve()}Cr(n,l){return this.br(n)}br(n){return 0===this.mutationQueue.length?0:n-this.mutationQueue[0].batchId}Sr(n){let l=this.br(n);return l<0||l>=this.mutationQueue.length?null:this.mutationQueue[l]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryRemoteDocumentCacheImpl=class __PRIVATE_MemoryRemoteDocumentCacheImpl{constructor(n){this.vr=n,this.docs=new SortedMap(DocumentKey.comparator),this.size=0}setIndexManager(n){this.indexManager=n}addEntry(n,l){let d=l.key,f=this.docs.get(d),_=f?f.size:0,E=this.vr(l);return this.docs=this.docs.insert(d,{document:l.mutableCopy(),size:E}),this.size+=E-_,this.indexManager.addToCollectionParentIndex(n,d.path.popLast())}removeEntry(n){let l=this.docs.get(n);l&&(this.docs=this.docs.remove(n),this.size-=l.size)}getEntry(n,l){let d=this.docs.get(l);return PersistencePromise.resolve(d?d.document.mutableCopy():MutableDocument.newInvalidDocument(l))}getEntries(n,l){let d=tP;return l.forEach(n=>{let l=this.docs.get(n);d=d.insert(n,l?l.document.mutableCopy():MutableDocument.newInvalidDocument(n))}),PersistencePromise.resolve(d)}getDocumentsMatchingQuery(n,l,d,f){let _=tP,E=l.path,L=new DocumentKey(E.child("")),z=this.docs.getIteratorFrom(L);for(;z.hasNext();){let{key:n,value:{document:L}}=z.getNext();if(!E.isPrefixOf(n.path))break;n.path.length>E.length+1||0>=__PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(L),d)||(f.has(L.key)||__PRIVATE_queryMatches(l,L))&&(_=_.insert(L.key,L.mutableCopy()))}return PersistencePromise.resolve(_)}getAllFromCollectionGroup(n,l,d,f){fail()}Fr(n,l){return PersistencePromise.forEach(this.docs,n=>l(n))}newChangeBuffer(n){return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this)}getSize(n){return PersistencePromise.resolve(this.size)}};let __PRIVATE_MemoryRemoteDocumentChangeBuffer=class __PRIVATE_MemoryRemoteDocumentChangeBuffer extends RemoteDocumentChangeBuffer{constructor(n){super(),this.ar=n}applyChanges(n){let l=[];return this.changes.forEach((d,f)=>{f.isValidDocument()?l.push(this.ar.addEntry(n,f)):this.ar.removeEntry(d)}),PersistencePromise.waitFor(l)}getFromCache(n,l){return this.ar.getEntry(n,l)}getAllFromCache(n,l){return this.ar.getEntries(n,l)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryTargetCache=class __PRIVATE_MemoryTargetCache{constructor(n){this.persistence=n,this.Mr=new ObjectMap(n=>__PRIVATE_canonifyTarget(n),__PRIVATE_targetEquals),this.lastRemoteSnapshotVersion=SnapshotVersion.min(),this.highestTargetId=0,this.Or=0,this.Nr=new __PRIVATE_ReferenceSet,this.targetCount=0,this.Br=__PRIVATE_TargetIdGenerator.Nn()}forEachTarget(n,l){return this.Mr.forEach((n,d)=>l(d)),PersistencePromise.resolve()}getLastRemoteSnapshotVersion(n){return PersistencePromise.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(n){return PersistencePromise.resolve(this.Or)}allocateTargetId(n){return this.highestTargetId=this.Br.next(),PersistencePromise.resolve(this.highestTargetId)}setTargetsMetadata(n,l,d){return d&&(this.lastRemoteSnapshotVersion=d),l>this.Or&&(this.Or=l),PersistencePromise.resolve()}qn(n){this.Mr.set(n.target,n);let l=n.targetId;l>this.highestTargetId&&(this.Br=new __PRIVATE_TargetIdGenerator(l),this.highestTargetId=l),n.sequenceNumber>this.Or&&(this.Or=n.sequenceNumber)}addTargetData(n,l){return this.qn(l),this.targetCount+=1,PersistencePromise.resolve()}updateTargetData(n,l){return this.qn(l),PersistencePromise.resolve()}removeTargetData(n,l){return this.Mr.delete(l.target),this.Nr.Vr(l.targetId),this.targetCount-=1,PersistencePromise.resolve()}removeTargets(n,l,d){let f=0,_=[];return this.Mr.forEach((E,L)=>{L.sequenceNumber<=l&&null===d.get(L.targetId)&&(this.Mr.delete(E),_.push(this.removeMatchingKeysForTargetId(n,L.targetId)),f++)}),PersistencePromise.waitFor(_).next(()=>f)}getTargetCount(n){return PersistencePromise.resolve(this.targetCount)}getTargetData(n,l){let d=this.Mr.get(l)||null;return PersistencePromise.resolve(d)}addMatchingKeys(n,l,d){return this.Nr.dr(l,d),PersistencePromise.resolve()}removeMatchingKeys(n,l,d){this.Nr.Rr(l,d);let f=this.persistence.referenceDelegate,_=[];return f&&l.forEach(l=>{_.push(f.markPotentiallyOrphaned(n,l))}),PersistencePromise.waitFor(_)}removeMatchingKeysForTargetId(n,l){return this.Nr.Vr(l),PersistencePromise.resolve()}getMatchingKeysForTargetId(n,l){let d=this.Nr.gr(l);return PersistencePromise.resolve(d)}containsKey(n,l){return PersistencePromise.resolve(this.Nr.containsKey(l))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryPersistence=class __PRIVATE_MemoryPersistence{constructor(n,l){this.Lr={},this.overlays={},this.kr=new __PRIVATE_ListenSequence(0),this.qr=!1,this.qr=!0,this.referenceDelegate=n(this),this.Qr=new __PRIVATE_MemoryTargetCache(this),this.indexManager=new __PRIVATE_MemoryIndexManager,this.remoteDocumentCache=new __PRIVATE_MemoryRemoteDocumentCacheImpl(n=>this.referenceDelegate.Kr(n)),this.serializer=new __PRIVATE_LocalSerializer(l),this.$r=new __PRIVATE_MemoryBundleCache(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(n){return this.indexManager}getDocumentOverlayCache(n){let l=this.overlays[n.toKey()];return l||(l=new __PRIVATE_MemoryDocumentOverlayCache,this.overlays[n.toKey()]=l),l}getMutationQueue(n,l){let d=this.Lr[n.toKey()];return d||(d=new __PRIVATE_MemoryMutationQueue(l,this.referenceDelegate),this.Lr[n.toKey()]=d),d}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(n,l,d){__PRIVATE_logDebug("MemoryPersistence","Starting transaction:",n);let f=new __PRIVATE_MemoryTransaction(this.kr.next());return this.referenceDelegate.Ur(),d(f).next(n=>this.referenceDelegate.Wr(f).next(()=>n)).toPromise().then(n=>(f.raiseOnCommittedEvent(),n))}Gr(n,l){return PersistencePromise.or(Object.values(this.Lr).map(d=>()=>d.containsKey(n,l)))}};let __PRIVATE_MemoryTransaction=class __PRIVATE_MemoryTransaction extends PersistenceTransaction{constructor(n){super(),this.currentSequenceNumber=n}};let __PRIVATE_MemoryEagerDelegate=class __PRIVATE_MemoryEagerDelegate{constructor(n){this.persistence=n,this.zr=new __PRIVATE_ReferenceSet,this.jr=null}static Hr(n){return new __PRIVATE_MemoryEagerDelegate(n)}get Jr(){if(this.jr)return this.jr;throw fail()}addReference(n,l,d){return this.zr.addReference(d,l),this.Jr.delete(d.toString()),PersistencePromise.resolve()}removeReference(n,l,d){return this.zr.removeReference(d,l),this.Jr.add(d.toString()),PersistencePromise.resolve()}markPotentiallyOrphaned(n,l){return this.Jr.add(l.toString()),PersistencePromise.resolve()}removeTarget(n,l){this.zr.Vr(l.targetId).forEach(n=>this.Jr.add(n.toString()));let d=this.persistence.getTargetCache();return d.getMatchingKeysForTargetId(n,l.targetId).next(n=>{n.forEach(n=>this.Jr.add(n.toString()))}).next(()=>d.removeTargetData(n,l))}Ur(){this.jr=new Set}Wr(n){let l=this.persistence.getRemoteDocumentCache().newChangeBuffer();return PersistencePromise.forEach(this.Jr,d=>{let f=DocumentKey.fromPath(d);return this.Yr(n,f).next(n=>{n||l.removeEntry(f,SnapshotVersion.min())})}).next(()=>(this.jr=null,l.apply(n)))}updateLimboDocument(n,l){return this.Yr(n,l).next(n=>{n?this.Jr.delete(l.toString()):this.Jr.add(l.toString())})}Kr(n){return 0}Yr(n,l){return PersistencePromise.or([()=>PersistencePromise.resolve(this.zr.containsKey(l)),()=>this.persistence.getTargetCache().containsKey(n,l),()=>this.persistence.Gr(n,l)])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalViewChanges=class __PRIVATE_LocalViewChanges{constructor(n,l,d,f){this.targetId=n,this.fromCache=l,this.qi=d,this.Qi=f}static Ki(n,l){let d=__PRIVATE_documentKeySet(),f=__PRIVATE_documentKeySet();for(let n of l.docChanges)switch(n.type){case 0:d=d.add(n.doc.key);break;case 1:f=f.add(n.doc.key)}return new __PRIVATE_LocalViewChanges(n,l.fromCache,d,f)}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QueryContext=class QueryContext{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(n){this._documentReadCount+=n}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryEngine=class __PRIVATE_QueryEngine{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,eo.G6)()?8:__PRIVATE_SimpleDb.v((0,eo.z$)())>0?6:4}initialize(n,l){this.zi=n,this.indexManager=l,this.$i=!0}getDocumentsMatchingQuery(n,l,d,f){let _={result:null};return this.ji(n,l).next(n=>{_.result=n}).next(()=>{if(!_.result)return this.Hi(n,l,f,d).next(n=>{_.result=n})}).next(()=>{if(_.result)return;let d=new QueryContext;return this.Ji(n,l,d).next(f=>{if(_.result=f,this.Ui)return this.Yi(n,l,d,f.size)})}).next(()=>_.result)}Yi(n,l,d,f){return d.documentReadCount<this.Wi?(__PRIVATE_getLogLevel()<=es.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","SDK will not create cache indexes for query:",__PRIVATE_stringifyQuery(l),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),PersistencePromise.resolve()):(__PRIVATE_getLogLevel()<=es.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Query:",__PRIVATE_stringifyQuery(l),"scans",d.documentReadCount,"local documents and returns",f,"documents as results."),d.documentReadCount>this.Gi*f?(__PRIVATE_getLogLevel()<=es.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","The SDK decides to create cache indexes for query:",__PRIVATE_stringifyQuery(l),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(n,__PRIVATE_queryToTarget(l))):PersistencePromise.resolve())}ji(n,l){if(__PRIVATE_queryMatchesAllDocuments(l))return PersistencePromise.resolve(null);let d=__PRIVATE_queryToTarget(l);return this.indexManager.getIndexType(n,d).next(f=>0===f?null:(null!==l.limit&&1===f&&(d=__PRIVATE_queryToTarget(l=__PRIVATE_queryWithLimit(l,null,"F"))),this.indexManager.getDocumentsMatchingTarget(n,d).next(f=>{let _=__PRIVATE_documentKeySet(...f);return this.zi.getDocuments(n,_).next(f=>this.indexManager.getMinOffset(n,d).next(d=>{let E=this.Zi(l,f);return this.Xi(l,E,_,d.readTime)?this.ji(n,__PRIVATE_queryWithLimit(l,null,"F")):this.es(n,E,l,d)}))})))}Hi(n,l,d,f){return __PRIVATE_queryMatchesAllDocuments(l)||f.isEqual(SnapshotVersion.min())?PersistencePromise.resolve(null):this.zi.getDocuments(n,d).next(_=>{let E=this.Zi(l,_);return this.Xi(l,E,d,f)?PersistencePromise.resolve(null):(__PRIVATE_getLogLevel()<=es.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Re-using previous result from %s to execute query: %s",f.toString(),__PRIVATE_stringifyQuery(l)),this.es(n,E,l,__PRIVATE_newIndexOffsetSuccessorFromReadTime(f,-1)).next(n=>n))})}Zi(n,l){let d=new SortedSet(__PRIVATE_newQueryComparator(n));return l.forEach((l,f)=>{__PRIVATE_queryMatches(n,f)&&(d=d.add(f))}),d}Xi(n,l,d,f){if(null===n.limit)return!1;if(d.size!==l.size)return!0;let _="F"===n.limitType?l.last():l.first();return!!_&&(_.hasPendingWrites||_.version.compareTo(f)>0)}Ji(n,l,d){return __PRIVATE_getLogLevel()<=es.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Using full collection scan to execute query:",__PRIVATE_stringifyQuery(l)),this.zi.getDocumentsMatchingQuery(n,l,IndexOffset.min(),d)}es(n,l,d,f){return this.zi.getDocumentsMatchingQuery(n,d,f).next(n=>(l.forEach(l=>{n=n.insert(l.key,l)}),n))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalStoreImpl=class __PRIVATE_LocalStoreImpl{constructor(n,l,d,f){this.persistence=n,this.ts=l,this.serializer=f,this.ns=new SortedMap(__PRIVATE_primitiveComparator),this.rs=new ObjectMap(n=>__PRIVATE_canonifyTarget(n),__PRIVATE_targetEquals),this.ss=new Map,this.os=n.getRemoteDocumentCache(),this.Qr=n.getTargetCache(),this.$r=n.getBundleCache(),this._s(d)}_s(n){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(n),this.indexManager=this.persistence.getIndexManager(n),this.mutationQueue=this.persistence.getMutationQueue(n,this.indexManager),this.localDocuments=new LocalDocumentsView(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(n){return this.persistence.runTransaction("Collect garbage","readwrite-primary",l=>n.collect(l,this.ns))}};function __PRIVATE_newLocalStore(n,l,d,f){return new __PRIVATE_LocalStoreImpl(n,l,d,f)}async function __PRIVATE_localStoreHandleUserChange(n,l){return await n.persistence.runTransaction("Handle user change","readonly",d=>{let f;return n.mutationQueue.getAllMutationBatches(d).next(_=>(f=_,n._s(l),n.mutationQueue.getAllMutationBatches(d))).next(l=>{let _=[],E=[],L=__PRIVATE_documentKeySet();for(let n of f)for(let l of(_.push(n.batchId),n.mutations))L=L.add(l.key);for(let n of l)for(let l of(E.push(n.batchId),n.mutations))L=L.add(l.key);return n.localDocuments.getDocuments(d,L).next(n=>({us:n,removedBatchIds:_,addedBatchIds:E}))})})}function __PRIVATE_localStoreAcknowledgeBatch(n,l){return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",d=>{let f=l.batch.keys(),_=n.os.newChangeBuffer({trackRemovals:!0});return(function(n,l,d,f){let _=d.batch,E=_.keys(),L=PersistencePromise.resolve();return E.forEach(n=>{L=L.next(()=>f.getEntry(l,n)).next(l=>{let E=d.docVersions.get(n);null!==E||fail(),0>l.version.compareTo(E)&&(_.applyToRemoteDocument(l,d),l.isValidDocument()&&(l.setReadTime(d.commitVersion),f.addEntry(l)))})}),L.next(()=>n.mutationQueue.removeMutationBatch(l,_))})(n,d,l,_).next(()=>_.apply(d)).next(()=>n.mutationQueue.performConsistencyCheck(d)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(d,f,l.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,function(n){let l=__PRIVATE_documentKeySet();for(let d=0;d<n.mutationResults.length;++d)n.mutationResults[d].transformResults.length>0&&(l=l.add(n.batch.mutations[d].key));return l}(l))).next(()=>n.localDocuments.getDocuments(d,f))})}function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(n){return n.persistence.runTransaction("Get last remote snapshot version","readonly",l=>n.Qr.getLastRemoteSnapshotVersion(l))}function __PRIVATE_localStoreApplyRemoteEventToLocalCache(n,l){let d=l.snapshotVersion,f=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",_=>{let E=n.os.newChangeBuffer({trackRemovals:!0});f=n.ns;let L=[];l.targetChanges.forEach((E,z)=>{var et;let er=f.get(z);if(!er)return;L.push(n.Qr.removeMatchingKeys(_,E.removedDocuments,z).next(()=>n.Qr.addMatchingKeys(_,E.addedDocuments,z)));let en=er.withSequenceNumber(_.currentSequenceNumber);null!==l.targetMismatches.get(z)?en=en.withResumeToken(ByteString.EMPTY_BYTE_STRING,SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()):E.resumeToken.approximateByteSize()>0&&(en=en.withResumeToken(E.resumeToken,d)),f=f.insert(z,en),et=en,(0===er.resumeToken.approximateByteSize()||et.snapshotVersion.toMicroseconds()-er.snapshotVersion.toMicroseconds()>=3e8||E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0)&&L.push(n.Qr.updateTargetData(_,en))});let z=tP,et=__PRIVATE_documentKeySet();if(l.documentUpdates.forEach(d=>{l.resolvedLimboDocuments.has(d)&&L.push(n.persistence.referenceDelegate.updateLimboDocument(_,d))}),L.push(__PRIVATE_populateDocumentChangeBuffer(_,E,l.documentUpdates).next(n=>{z=n.cs,et=n.ls})),!d.isEqual(SnapshotVersion.min())){let l=n.Qr.getLastRemoteSnapshotVersion(_).next(l=>n.Qr.setTargetsMetadata(_,_.currentSequenceNumber,d));L.push(l)}return PersistencePromise.waitFor(L).next(()=>E.apply(_)).next(()=>n.localDocuments.getLocalViewOfDocuments(_,z,et)).next(()=>z)}).then(l=>(n.ns=f,l))}function __PRIVATE_populateDocumentChangeBuffer(n,l,d){let f=__PRIVATE_documentKeySet(),_=__PRIVATE_documentKeySet();return d.forEach(n=>f=f.add(n)),l.getEntries(n,f).next(n=>{let f=tP;return d.forEach((d,E)=>{let L=n.get(d);E.isFoundDocument()!==L.isFoundDocument()&&(_=_.add(d)),E.isNoDocument()&&E.version.isEqual(SnapshotVersion.min())?(l.removeEntry(d,E.readTime),f=f.insert(d,E)):!L.isValidDocument()||E.version.compareTo(L.version)>0||0===E.version.compareTo(L.version)&&L.hasPendingWrites?(l.addEntry(E),f=f.insert(d,E)):__PRIVATE_logDebug("LocalStore","Ignoring outdated watch update for ",d,". Current version:",L.version," Watch version:",E.version)}),{cs:f,ls:_}})}function __PRIVATE_localStoreGetNextMutationBatch(n,l){return n.persistence.runTransaction("Get next mutation batch","readonly",d=>(void 0===l&&(l=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(d,l)))}function __PRIVATE_localStoreAllocateTarget(n,l){return n.persistence.runTransaction("Allocate target","readwrite",d=>{let f;return n.Qr.getTargetData(d,l).next(_=>_?(f=_,PersistencePromise.resolve(f)):n.Qr.allocateTargetId(d).next(_=>(f=new TargetData(l,_,"TargetPurposeListen",d.currentSequenceNumber),n.Qr.addTargetData(d,f).next(()=>f))))}).then(d=>{let f=n.ns.get(d.targetId);return(null===f||d.snapshotVersion.compareTo(f.snapshotVersion)>0)&&(n.ns=n.ns.insert(d.targetId,d),n.rs.set(l,d.targetId)),d})}async function __PRIVATE_localStoreReleaseTarget(n,l,d){let f=n.ns.get(l);try{d||await n.persistence.runTransaction("Release target",d?"readwrite":"readwrite-primary",l=>n.persistence.referenceDelegate.removeTarget(l,f))}catch(n){if(!__PRIVATE_isIndexedDbTransactionError(n))throw n;__PRIVATE_logDebug("LocalStore",`Failed to update sequence numbers for target ${l}: ${n}`)}n.ns=n.ns.remove(l),n.rs.delete(f.target)}function __PRIVATE_localStoreExecuteQuery(n,l,d){let f=SnapshotVersion.min(),_=__PRIVATE_documentKeySet();return n.persistence.runTransaction("Execute query","readwrite",E=>(function(n,l,d){let f=n.rs.get(d);return void 0!==f?PersistencePromise.resolve(n.ns.get(f)):n.Qr.getTargetData(l,d)})(n,E,__PRIVATE_queryToTarget(l)).next(l=>{if(l)return f=l.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(E,l.targetId).next(n=>{_=n})}).next(()=>n.ts.getDocumentsMatchingQuery(E,l,d?f:SnapshotVersion.min(),d?_:__PRIVATE_documentKeySet())).next(d=>(__PRIVATE_setMaxReadTime(n,__PRIVATE_queryCollectionGroup(l),d),{documents:d,hs:_})))}function __PRIVATE_setMaxReadTime(n,l,d){let f=n.ss.get(l)||SnapshotVersion.min();d.forEach((n,l)=>{l.readTime.compareTo(f)>0&&(f=l.readTime)}),n.ss.set(l,f)}let __PRIVATE_LocalClientState=class __PRIVATE_LocalClientState{constructor(){this.activeTargetIds=__PRIVATE_targetIdSet()}As(n){this.activeTargetIds=this.activeTargetIds.add(n)}Rs(n){this.activeTargetIds=this.activeTargetIds.delete(n)}ds(){let n={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(n)}};let __PRIVATE_MemorySharedClientState=class __PRIVATE_MemorySharedClientState{constructor(){this.no=new __PRIVATE_LocalClientState,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(n){}updateMutationState(n,l,d){}addLocalQueryTarget(n){return this.no.As(n),this.ro[n]||"not-current"}updateQueryState(n,l,d){this.ro[n]=l}removeLocalQueryTarget(n){this.no.Rs(n)}isLocalQueryTarget(n){return this.no.activeTargetIds.has(n)}clearQueryState(n){delete this.ro[n]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(n){return this.no.activeTargetIds.has(n)}start(){return this.no=new __PRIVATE_LocalClientState,Promise.resolve()}handleUserChange(n,l,d){}setOnlineState(n){}shutdown(){}writeSequenceNumber(n){}notifyBundleLoaded(n){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_NoopConnectivityMonitor=class __PRIVATE_NoopConnectivityMonitor{io(n){}shutdown(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_BrowserConnectivityMonitor=class __PRIVATE_BrowserConnectivityMonitor{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(n){this.uo.push(n)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let n of(__PRIVATE_logDebug("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))n(0)}ao(){for(let n of(__PRIVATE_logDebug("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))n(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tD=null;function __PRIVATE_generateUniqueDebugId(){return null===tD?tD=268435456+Math.round(2147483648*Math.random()):tD++,"0x"+tD.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_StreamBridge=class __PRIVATE_StreamBridge{constructor(n){this.lo=n.lo,this.ho=n.ho}Po(n){this.Io=n}To(n){this.Eo=n}onMessage(n){this.Ao=n}close(){this.ho()}send(n){this.lo(n)}Ro(){this.Io()}Vo(n){this.Eo(n)}mo(n){this.Ao(n)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tx="WebChannelConnection";let __PRIVATE_WebChannelConnection=class __PRIVATE_WebChannelConnection extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;let l=n.ssl?"https":"http",d=encodeURIComponent(this.databaseId.projectId),f=encodeURIComponent(this.databaseId.database);this.fo=l+"://"+n.host,this.po=`projects/${d}/databases/${f}`,this.yo="(default)"===this.databaseId.database?`project_id=${d}`:`project_id=${d}&database_id=${f}`}get wo(){return!1}So(n,l,d,f,_){let E=__PRIVATE_generateUniqueDebugId(),L=this.bo(n,l.toUriEncodedString());__PRIVATE_logDebug("RestConnection",`Sending RPC '${n}' ${E}:`,L,d);let z={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(z,f,_),this.Co(n,L,z,d).then(l=>(__PRIVATE_logDebug("RestConnection",`Received RPC '${n}' ${E}: `,l),l),l=>{throw __PRIVATE_logWarn("RestConnection",`RPC '${n}' ${E} failed with error: `,l,"url: ",L,"request:",d),l})}vo(n,l,d,f,_,E){return this.So(n,l,d,f,_)}Do(n,l,d){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tm}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),l&&l.headers.forEach((l,d)=>n[d]=l),d&&d.headers.forEach((l,d)=>n[d]=l)}bo(n,l){let d=tO[n];return`${this.fo}/v1/${l}:${d}`}terminate(){}}{constructor(n){super(n),this.forceLongPolling=n.forceLongPolling,this.autoDetectLongPolling=n.autoDetectLongPolling,this.useFetchStreams=n.useFetchStreams,this.longPollingOptions=n.longPollingOptions}Co(n,l,d,f){let _=__PRIVATE_generateUniqueDebugId();return new Promise((E,L)=>{let z=new th;z.setWithCredentials(!0),z.listenOnce(to.COMPLETE,()=>{try{switch(z.getLastErrorCode()){case ts.NO_ERROR:let l=z.getResponseJson();__PRIVATE_logDebug(tx,`XHR for RPC '${n}' ${_} received:`,JSON.stringify(l)),E(l);break;case ts.TIMEOUT:__PRIVATE_logDebug(tx,`RPC '${n}' ${_} timed out`),L(new FirestoreError(ty.DEADLINE_EXCEEDED,"Request time out"));break;case ts.HTTP_ERROR:let d=z.getStatus();if(__PRIVATE_logDebug(tx,`RPC '${n}' ${_} failed with status:`,d,"response text:",z.getResponseText()),d>0){let n=z.getResponseJson();Array.isArray(n)&&(n=n[0]);let l=null==n?void 0:n.error;if(l&&l.status&&l.message){let n=function(n){let l=n.toLowerCase().replace(/_/g,"-");return Object.values(ty).indexOf(l)>=0?l:ty.UNKNOWN}(l.status);L(new FirestoreError(n,l.message))}else L(new FirestoreError(ty.UNKNOWN,"Server responded with status "+z.getStatus()))}else L(new FirestoreError(ty.UNAVAILABLE,"Connection failed."));break;default:fail()}}finally{__PRIVATE_logDebug(tx,`RPC '${n}' ${_} completed.`)}});let et=JSON.stringify(f);__PRIVATE_logDebug(tx,`RPC '${n}' ${_} sending request:`,f),z.send(l,"POST",et,d,15)})}Fo(n,l,d){let f=__PRIVATE_generateUniqueDebugId(),_=[this.fo,"/","google.firestore.v1.Firestore","/",n,"/channel"],E=tn(),L=ti(),et={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},er=this.longPollingOptions.timeoutSeconds;void 0!==er&&(et.longPollingTimeout=Math.round(1e3*er)),this.useFetchStreams&&(et.useFetchStreams=!0),this.Do(et.initMessageHeaders,l,d),et.encodeInitMessageHeaders=!0;let en=_.join("");__PRIVATE_logDebug(tx,`Creating RPC '${n}' stream ${f}: ${en}`,et);let ei=E.createWebChannel(en,et),es=!1,eo=!1,el=new __PRIVATE_StreamBridge({lo:l=>{eo?__PRIVATE_logDebug(tx,`Not sending because RPC '${n}' stream ${f} is closed:`,l):(es||(__PRIVATE_logDebug(tx,`Opening RPC '${n}' stream ${f} transport.`),ei.open(),es=!0),__PRIVATE_logDebug(tx,`RPC '${n}' stream ${f} sending:`,l),ei.send(l))},ho:()=>ei.close()}),__PRIVATE_unguardedEventListen=(n,l,d)=>{n.listen(l,n=>{try{d(n)}catch(n){setTimeout(()=>{throw n},0)}})};return __PRIVATE_unguardedEventListen(ei,tu.EventType.OPEN,()=>{eo||__PRIVATE_logDebug(tx,`RPC '${n}' stream ${f} transport opened.`)}),__PRIVATE_unguardedEventListen(ei,tu.EventType.CLOSE,()=>{eo||(eo=!0,__PRIVATE_logDebug(tx,`RPC '${n}' stream ${f} transport closed`),el.Vo())}),__PRIVATE_unguardedEventListen(ei,tu.EventType.ERROR,l=>{eo||(eo=!0,__PRIVATE_logWarn(tx,`RPC '${n}' stream ${f} transport errored:`,l),el.Vo(new FirestoreError(ty.UNAVAILABLE,"The operation could not be completed")))}),__PRIVATE_unguardedEventListen(ei,tu.EventType.MESSAGE,l=>{var d;if(!eo){let _=l.data[0];_||fail();let E=_.error||(null===(d=_[0])||void 0===d?void 0:d.error);if(E){__PRIVATE_logDebug(tx,`RPC '${n}' stream ${f} received error:`,E);let l=E.status,d=function(n){let l=z[n];if(void 0!==l)return __PRIVATE_mapCodeFromRpcCode(l)}(l),_=E.message;void 0===d&&(d=ty.INTERNAL,_="Unknown error status: "+l+" with message "+E.message),eo=!0,el.Vo(new FirestoreError(d,_)),ei.close()}else __PRIVATE_logDebug(tx,`RPC '${n}' stream ${f} received:`,_),el.mo(_)}}),__PRIVATE_unguardedEventListen(L,ta.STAT_EVENT,l=>{l.stat===tl.PROXY?__PRIVATE_logDebug(tx,`RPC '${n}' stream ${f} detected buffering proxy`):l.stat===tl.NOPROXY&&__PRIVATE_logDebug(tx,`RPC '${n}' stream ${f} detected no buffering proxy`)}),setTimeout(()=>{el.Ro()},0),el}};function getDocument(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_newSerializer(n){return new JsonProtoSerializer(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ExponentialBackoff=class __PRIVATE_ExponentialBackoff{constructor(n,l,d=1e3,f=1.5,_=6e4){this.oi=n,this.timerId=l,this.Mo=d,this.xo=f,this.Oo=_,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(n){this.cancel();let l=Math.floor(this.No+this.Qo()),d=Math.max(0,Date.now()-this.Lo),f=Math.max(0,l-d);f>0&&__PRIVATE_logDebug("ExponentialBackoff",`Backing off for ${f} ms (base delay: ${this.No} ms, delay with jitter: ${l} ms, last attempt: ${d} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,f,()=>(this.Lo=Date.now(),n())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_PersistentStream=class __PRIVATE_PersistentStream{constructor(n,l,d,f,_,E,L,z){this.oi=n,this.$o=d,this.Uo=f,this.connection=_,this.authCredentialsProvider=E,this.appCheckCredentialsProvider=L,this.listener=z,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new __PRIVATE_ExponentialBackoff(n,l)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(n){this.n_(),this.stream.send(n)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(n,l){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==n?this.jo.reset():l&&l.code===ty.RESOURCE_EXHAUSTED?(__PRIVATE_logError(l.toString()),__PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):l&&l.code===ty.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=n,await this.listener.To(l)}i_(){}auth(){this.state=1;let n=this.s_(this.Wo),l=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,d])=>{this.Wo===l&&this.o_(n,d)},l=>{n(()=>{let n=new FirestoreError(ty.UNKNOWN,"Fetching auth token failed: "+l.message);return this.__(n)})})}o_(n,l){let d=this.s_(this.Wo);this.stream=this.a_(n,l),this.stream.Po(()=>{d(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(n=>{d(()=>this.__(n))}),this.stream.onMessage(n=>{d(()=>this.onMessage(n))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(n){return __PRIVATE_logDebug("PersistentStream",`close with error: ${n}`),this.stream=null,this.close(4,n)}s_(n){return l=>{this.oi.enqueueAndForget(()=>this.Wo===n?l():(__PRIVATE_logDebug("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}};let __PRIVATE_PersistentListenStream=class __PRIVATE_PersistentListenStream extends __PRIVATE_PersistentStream{constructor(n,l,d,f,_,E){super(n,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",l,d,f,E),this.serializer=_}a_(n,l){return this.connection.Fo("Listen",n,l)}onMessage(n){this.jo.reset();let l=__PRIVATE_fromWatchChange(this.serializer,n),d=function(n){if(!("targetChange"in n))return SnapshotVersion.min();let l=n.targetChange;return l.targetIds&&l.targetIds.length?SnapshotVersion.min():l.readTime?__PRIVATE_fromVersion(l.readTime):SnapshotVersion.min()}(n);return this.listener.u_(l,d)}c_(n){let l={};l.database=__PRIVATE_getEncodedDatabaseId(this.serializer),l.addTarget=function(n,l){let d;let f=l.target;if((d=__PRIVATE_targetIsDocumentTarget(f)?{documents:__PRIVATE_toDocumentsTarget(n,f)}:{query:__PRIVATE_toQueryTarget(n,f).ut}).targetId=l.targetId,l.resumeToken.approximateByteSize()>0){d.resumeToken=__PRIVATE_toBytes(n,l.resumeToken);let f=__PRIVATE_toInt32Proto(n,l.expectedCount);null!==f&&(d.expectedCount=f)}else if(l.snapshotVersion.compareTo(SnapshotVersion.min())>0){d.readTime=toTimestamp(n,l.snapshotVersion.toTimestamp());let f=__PRIVATE_toInt32Proto(n,l.expectedCount);null!==f&&(d.expectedCount=f)}return d}(this.serializer,n);let d=__PRIVATE_toListenRequestLabels(this.serializer,n);d&&(l.labels=d),this.t_(l)}l_(n){let l={};l.database=__PRIVATE_getEncodedDatabaseId(this.serializer),l.removeTarget=n,this.t_(l)}};let __PRIVATE_PersistentWriteStream=class __PRIVATE_PersistentWriteStream extends __PRIVATE_PersistentStream{constructor(n,l,d,f,_,E){super(n,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",l,d,f,E),this.serializer=_,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(n,l){return this.connection.Fo("Write",n,l)}onMessage(n){if(n.streamToken||fail(),this.lastStreamToken=n.streamToken,this.h_){this.jo.reset();let l=__PRIVATE_fromWriteResults(n.writeResults,n.commitTime),d=__PRIVATE_fromVersion(n.commitTime);return this.listener.T_(d,l)}return n.writeResults&&0!==n.writeResults.length&&fail(),this.h_=!0,this.listener.E_()}d_(){let n={};n.database=__PRIVATE_getEncodedDatabaseId(this.serializer),this.t_(n)}I_(n){let l={streamToken:this.lastStreamToken,writes:n.map(n=>toMutation(this.serializer,n))};this.t_(l)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DatastoreImpl=class __PRIVATE_DatastoreImpl extends class{}{constructor(n,l,d,f){super(),this.authCredentials=n,this.appCheckCredentials=l,this.connection=d,this.serializer=f,this.A_=!1}R_(){if(this.A_)throw new FirestoreError(ty.FAILED_PRECONDITION,"The client has already been terminated.")}So(n,l,d,f){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([_,E])=>this.connection.So(n,__PRIVATE_toResourcePath(l,d),f,_,E)).catch(n=>{throw"FirebaseError"===n.name?(n.code===ty.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new FirestoreError(ty.UNKNOWN,n.toString())})}vo(n,l,d,f,_){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([E,L])=>this.connection.vo(n,__PRIVATE_toResourcePath(l,d),f,E,L,_)).catch(n=>{throw"FirebaseError"===n.name?(n.code===ty.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new FirestoreError(ty.UNKNOWN,n.toString())})}terminate(){this.A_=!0,this.connection.terminate()}};let __PRIVATE_OnlineStateTracker=class __PRIVATE_OnlineStateTracker{constructor(n,l){this.asyncQueue=n,this.onlineStateHandler=l,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(n){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${n.toString()}`),this.y_("Offline")))}set(n){this.b_(),this.m_=0,"Online"===n&&(this.g_=!1),this.y_(n)}y_(n){n!==this.state&&(this.state=n,this.onlineStateHandler(n))}w_(n){let l=`Could not reach Cloud Firestore backend. ${n}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(__PRIVATE_logError(l),this.g_=!1):__PRIVATE_logDebug("OnlineStateTracker",l)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_RemoteStoreImpl=class __PRIVATE_RemoteStoreImpl{constructor(n,l,d,f,_){this.localStore=n,this.datastore=l,this.asyncQueue=d,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=_,this.M_.io(n=>{d.enqueueAndForget(async()=>{__PRIVATE_canUseNetwork(this)&&(__PRIVATE_logDebug("RemoteStore","Restarting streams for network reachability change."),await async function(n){n.v_.add(4),await __PRIVATE_disableNetworkInternal(n),n.x_.set("Unknown"),n.v_.delete(4),await __PRIVATE_enableNetworkInternal(n)}(this))})}),this.x_=new __PRIVATE_OnlineStateTracker(d,f)}};async function __PRIVATE_enableNetworkInternal(n){if(__PRIVATE_canUseNetwork(n))for(let l of n.F_)await l(!0)}async function __PRIVATE_disableNetworkInternal(n){for(let l of n.F_)await l(!1)}function __PRIVATE_remoteStoreListen(n,l){n.C_.has(l.targetId)||(n.C_.set(l.targetId,l),__PRIVATE_shouldStartWatchStream(n)?__PRIVATE_startWatchStream(n):__PRIVATE_ensureWatchStream(n).Jo()&&__PRIVATE_sendWatchRequest(n,l))}function __PRIVATE_remoteStoreUnlisten(n,l){let d=__PRIVATE_ensureWatchStream(n);n.C_.delete(l),d.Jo()&&__PRIVATE_sendUnwatchRequest(n,l),0===n.C_.size&&(d.Jo()?d.Xo():__PRIVATE_canUseNetwork(n)&&n.x_.set("Unknown"))}function __PRIVATE_sendWatchRequest(n,l){if(n.O_.Oe(l.targetId),l.resumeToken.approximateByteSize()>0||l.snapshotVersion.compareTo(SnapshotVersion.min())>0){let d=n.remoteSyncer.getRemoteKeysForTarget(l.targetId).size;l=l.withExpectedCount(d)}__PRIVATE_ensureWatchStream(n).c_(l)}function __PRIVATE_sendUnwatchRequest(n,l){n.O_.Oe(l),__PRIVATE_ensureWatchStream(n).l_(l)}function __PRIVATE_startWatchStream(n){n.O_=new __PRIVATE_WatchChangeAggregator({getRemoteKeysForTarget:l=>n.remoteSyncer.getRemoteKeysForTarget(l),_t:l=>n.C_.get(l)||null,nt:()=>n.datastore.serializer.databaseId}),__PRIVATE_ensureWatchStream(n).start(),n.x_.p_()}function __PRIVATE_shouldStartWatchStream(n){return __PRIVATE_canUseNetwork(n)&&!__PRIVATE_ensureWatchStream(n).Ho()&&n.C_.size>0}function __PRIVATE_canUseNetwork(n){return 0===n.v_.size}async function __PRIVATE_onWatchStreamOpen(n){n.C_.forEach((l,d)=>{__PRIVATE_sendWatchRequest(n,l)})}async function __PRIVATE_onWatchStreamClose(n,l){n.O_=void 0,__PRIVATE_shouldStartWatchStream(n)?(n.x_.S_(l),__PRIVATE_startWatchStream(n)):n.x_.set("Unknown")}async function __PRIVATE_onWatchStreamChange(n,l,d){if(n.x_.set("Online"),l instanceof __PRIVATE_WatchTargetChange&&2===l.state&&l.cause)try{await async function(n,l){let d=l.cause;for(let f of l.targetIds)n.C_.has(f)&&(await n.remoteSyncer.rejectListen(f,d),n.C_.delete(f),n.O_.removeTarget(f))}(n,l)}catch(d){__PRIVATE_logDebug("RemoteStore","Failed to remove targets %s: %s ",l.targetIds.join(","),d),await __PRIVATE_disableNetworkUntilRecovery(n,d)}else if(l instanceof __PRIVATE_DocumentWatchChange?n.O_.$e(l):l instanceof __PRIVATE_ExistenceFilterChange?n.O_.Je(l):n.O_.Ge(l),!d.isEqual(SnapshotVersion.min()))try{let l=await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(n.localStore);d.compareTo(l)>=0&&await function(n,l){let d=n.O_.it(l);return d.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){let _=n.C_.get(f);_&&n.C_.set(f,_.withResumeToken(d.resumeToken,l))}}),d.targetMismatches.forEach((l,d)=>{let f=n.C_.get(l);if(!f)return;n.C_.set(l,f.withResumeToken(ByteString.EMPTY_BYTE_STRING,f.snapshotVersion)),__PRIVATE_sendUnwatchRequest(n,l);let _=new TargetData(f.target,l,d,f.sequenceNumber);__PRIVATE_sendWatchRequest(n,_)}),n.remoteSyncer.applyRemoteEvent(d)}(n,d)}catch(l){__PRIVATE_logDebug("RemoteStore","Failed to raise snapshot:",l),await __PRIVATE_disableNetworkUntilRecovery(n,l)}}async function __PRIVATE_disableNetworkUntilRecovery(n,l,d){if(!__PRIVATE_isIndexedDbTransactionError(l))throw l;n.v_.add(1),await __PRIVATE_disableNetworkInternal(n),n.x_.set("Offline"),d||(d=()=>__PRIVATE_localStoreGetLastRemoteSnapshotVersion(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{__PRIVATE_logDebug("RemoteStore","Retrying IndexedDB access"),await d(),n.v_.delete(1),await __PRIVATE_enableNetworkInternal(n)})}function __PRIVATE_executeWithRecovery(n,l){return l().catch(d=>__PRIVATE_disableNetworkUntilRecovery(n,d,l))}async function __PRIVATE_fillWritePipeline(n){let l=__PRIVATE_ensureWriteStream(n),d=n.D_.length>0?n.D_[n.D_.length-1].batchId:-1;for(;__PRIVATE_canAddToWritePipeline(n);)try{let f=await __PRIVATE_localStoreGetNextMutationBatch(n.localStore,d);if(null===f){0===n.D_.length&&l.Xo();break}d=f.batchId,__PRIVATE_addToWritePipeline(n,f)}catch(l){await __PRIVATE_disableNetworkUntilRecovery(n,l)}__PRIVATE_shouldStartWriteStream(n)&&__PRIVATE_startWriteStream(n)}function __PRIVATE_canAddToWritePipeline(n){return __PRIVATE_canUseNetwork(n)&&n.D_.length<10}function __PRIVATE_addToWritePipeline(n,l){n.D_.push(l);let d=__PRIVATE_ensureWriteStream(n);d.Jo()&&d.P_&&d.I_(l.mutations)}function __PRIVATE_shouldStartWriteStream(n){return __PRIVATE_canUseNetwork(n)&&!__PRIVATE_ensureWriteStream(n).Ho()&&n.D_.length>0}function __PRIVATE_startWriteStream(n){__PRIVATE_ensureWriteStream(n).start()}async function __PRIVATE_onWriteStreamOpen(n){__PRIVATE_ensureWriteStream(n).d_()}async function __PRIVATE_onWriteHandshakeComplete(n){let l=__PRIVATE_ensureWriteStream(n);for(let d of n.D_)l.I_(d.mutations)}async function __PRIVATE_onMutationResult(n,l,d){let f=n.D_.shift(),_=MutationBatchResult.from(f,l,d);await __PRIVATE_executeWithRecovery(n,()=>n.remoteSyncer.applySuccessfulWrite(_)),await __PRIVATE_fillWritePipeline(n)}async function __PRIVATE_onWriteStreamClose(n,l){l&&__PRIVATE_ensureWriteStream(n).P_&&await async function(n,l){var d;if(__PRIVATE_isPermanentError(d=l.code)&&d!==ty.ABORTED){let d=n.D_.shift();__PRIVATE_ensureWriteStream(n).Zo(),await __PRIVATE_executeWithRecovery(n,()=>n.remoteSyncer.rejectFailedWrite(d.batchId,l)),await __PRIVATE_fillWritePipeline(n)}}(n,l),__PRIVATE_shouldStartWriteStream(n)&&__PRIVATE_startWriteStream(n)}async function __PRIVATE_remoteStoreHandleCredentialChange(n,l){n.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug("RemoteStore","RemoteStore received new credentials");let d=__PRIVATE_canUseNetwork(n);n.v_.add(3),await __PRIVATE_disableNetworkInternal(n),d&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(l),n.v_.delete(3),await __PRIVATE_enableNetworkInternal(n)}async function __PRIVATE_remoteStoreApplyPrimaryState(n,l){l?(n.v_.delete(2),await __PRIVATE_enableNetworkInternal(n)):l||(n.v_.add(2),await __PRIVATE_disableNetworkInternal(n),n.x_.set("Unknown"))}function __PRIVATE_ensureWatchStream(n){var l,d,f;return n.N_||(n.N_=(l=n.datastore,d=n.asyncQueue,f={Po:__PRIVATE_onWatchStreamOpen.bind(null,n),To:__PRIVATE_onWatchStreamClose.bind(null,n),u_:__PRIVATE_onWatchStreamChange.bind(null,n)},l.R_(),new __PRIVATE_PersistentListenStream(d,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,f)),n.F_.push(async l=>{l?(n.N_.Zo(),__PRIVATE_shouldStartWatchStream(n)?__PRIVATE_startWatchStream(n):n.x_.set("Unknown")):(await n.N_.stop(),n.O_=void 0)})),n.N_}function __PRIVATE_ensureWriteStream(n){var l,d,f;return n.B_||(n.B_=(l=n.datastore,d=n.asyncQueue,f={Po:__PRIVATE_onWriteStreamOpen.bind(null,n),To:__PRIVATE_onWriteStreamClose.bind(null,n),E_:__PRIVATE_onWriteHandshakeComplete.bind(null,n),T_:__PRIVATE_onMutationResult.bind(null,n)},l.R_(),new __PRIVATE_PersistentWriteStream(d,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,f)),n.F_.push(async l=>{l?(n.B_.Zo(),await __PRIVATE_fillWritePipeline(n)):(await n.B_.stop(),n.D_.length>0&&(__PRIVATE_logDebug("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DelayedOperation=class DelayedOperation{constructor(n,l,d,f,_){this.asyncQueue=n,this.timerId=l,this.targetTimeMs=d,this.op=f,this.removalCallback=_,this.deferred=new __PRIVATE_Deferred,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(n=>{})}get promise(){return this.deferred.promise}static createAndSchedule(n,l,d,f,_){let E=Date.now()+d,L=new DelayedOperation(n,l,E,f,_);return L.start(d),L}start(n){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),n)}skipDelay(){return this.handleDelayElapsed()}cancel(n){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new FirestoreError(ty.CANCELLED,"Operation cancelled"+(n?": "+n:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(n=>this.deferred.resolve(n))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function __PRIVATE_wrapInUserErrorIfRecoverable(n,l){if(__PRIVATE_logError("AsyncQueue",`${l}: ${n}`),__PRIVATE_isIndexedDbTransactionError(n))return new FirestoreError(ty.UNAVAILABLE,`${l}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentSet=class DocumentSet{constructor(n){this.comparator=n?(l,d)=>n(l,d)||DocumentKey.comparator(l.key,d.key):(n,l)=>DocumentKey.comparator(n.key,l.key),this.keyedMap=documentMap(),this.sortedSet=new SortedMap(this.comparator)}static emptySet(n){return new DocumentSet(n.comparator)}has(n){return null!=this.keyedMap.get(n)}get(n){return this.keyedMap.get(n)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(n){let l=this.keyedMap.get(n);return l?this.sortedSet.indexOf(l):-1}get size(){return this.sortedSet.size}forEach(n){this.sortedSet.inorderTraversal((l,d)=>(n(l),!1))}add(n){let l=this.delete(n.key);return l.copy(l.keyedMap.insert(n.key,n),l.sortedSet.insert(n,null))}delete(n){let l=this.get(n);return l?this.copy(this.keyedMap.remove(n),this.sortedSet.remove(l)):this}isEqual(n){if(!(n instanceof DocumentSet)||this.size!==n.size)return!1;let l=this.sortedSet.getIterator(),d=n.sortedSet.getIterator();for(;l.hasNext();){let n=l.getNext().key,f=d.getNext().key;if(!n.isEqual(f))return!1}return!0}toString(){let n=[];return this.forEach(l=>{n.push(l.toString())}),0===n.length?"DocumentSet ()":"DocumentSet (\n  "+n.join("  \n")+"\n)"}copy(n,l){let d=new DocumentSet;return d.comparator=this.comparator,d.keyedMap=n,d.sortedSet=l,d}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DocumentChangeSet=class __PRIVATE_DocumentChangeSet{constructor(){this.L_=new SortedMap(DocumentKey.comparator)}track(n){let l=n.doc.key,d=this.L_.get(l);d?0!==n.type&&3===d.type?this.L_=this.L_.insert(l,n):3===n.type&&1!==d.type?this.L_=this.L_.insert(l,{type:d.type,doc:n.doc}):2===n.type&&2===d.type?this.L_=this.L_.insert(l,{type:2,doc:n.doc}):2===n.type&&0===d.type?this.L_=this.L_.insert(l,{type:0,doc:n.doc}):1===n.type&&0===d.type?this.L_=this.L_.remove(l):1===n.type&&2===d.type?this.L_=this.L_.insert(l,{type:1,doc:d.doc}):0===n.type&&1===d.type?this.L_=this.L_.insert(l,{type:2,doc:n.doc}):fail():this.L_=this.L_.insert(l,n)}k_(){let n=[];return this.L_.inorderTraversal((l,d)=>{n.push(d)}),n}};let ViewSnapshot=class ViewSnapshot{constructor(n,l,d,f,_,E,L,z,et){this.query=n,this.docs=l,this.oldDocs=d,this.docChanges=f,this.mutatedKeys=_,this.fromCache=E,this.syncStateChanged=L,this.excludesMetadataChanges=z,this.hasCachedResults=et}static fromInitialDocuments(n,l,d,f,_){let E=[];return l.forEach(n=>{E.push({type:0,doc:n})}),new ViewSnapshot(n,l,DocumentSet.emptySet(l),E,d,f,!0,!1,_)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(n){if(!(this.fromCache===n.fromCache&&this.hasCachedResults===n.hasCachedResults&&this.syncStateChanged===n.syncStateChanged&&this.mutatedKeys.isEqual(n.mutatedKeys)&&__PRIVATE_queryEquals(this.query,n.query)&&this.docs.isEqual(n.docs)&&this.oldDocs.isEqual(n.oldDocs)))return!1;let l=this.docChanges,d=n.docChanges;if(l.length!==d.length)return!1;for(let n=0;n<l.length;n++)if(l[n].type!==d[n].type||!l[n].doc.isEqual(d[n].doc))return!1;return!0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryListenersInfo=class __PRIVATE_QueryListenersInfo{constructor(){this.q_=void 0,this.Q_=[]}};let __PRIVATE_EventManagerImpl=class __PRIVATE_EventManagerImpl{constructor(){this.queries=new ObjectMap(n=>__PRIVATE_canonifyQuery(n),__PRIVATE_queryEquals),this.onlineState="Unknown",this.K_=new Set}};async function __PRIVATE_eventManagerListen(n,l){let d=l.query,f=!1,_=n.queries.get(d);if(_||(f=!0,_=new __PRIVATE_QueryListenersInfo),f)try{_.q_=await n.onListen(d)}catch(d){let n=__PRIVATE_wrapInUserErrorIfRecoverable(d,`Initialization of query '${__PRIVATE_stringifyQuery(l.query)}' failed`);return void l.onError(n)}n.queries.set(d,_),_.Q_.push(l),l.U_(n.onlineState),_.q_&&l.W_(_.q_)&&__PRIVATE_raiseSnapshotsInSyncEvent(n)}async function __PRIVATE_eventManagerUnlisten(n,l){let d=l.query,f=!1,_=n.queries.get(d);if(_){let n=_.Q_.indexOf(l);n>=0&&(_.Q_.splice(n,1),f=0===_.Q_.length)}if(f)return n.queries.delete(d),n.onUnlisten(d)}function __PRIVATE_eventManagerOnWatchChange(n,l){let d=!1;for(let f of l){let l=f.query,_=n.queries.get(l);if(_){for(let n of _.Q_)n.W_(f)&&(d=!0);_.q_=f}}d&&__PRIVATE_raiseSnapshotsInSyncEvent(n)}function __PRIVATE_eventManagerOnWatchError(n,l,d){let f=n.queries.get(l);if(f)for(let n of f.Q_)n.onError(d);n.queries.delete(l)}function __PRIVATE_raiseSnapshotsInSyncEvent(n){n.K_.forEach(n=>{n.next()})}let __PRIVATE_QueryListener=class __PRIVATE_QueryListener{constructor(n,l,d){this.query=n,this.G_=l,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=d||{}}W_(n){if(!this.options.includeMetadataChanges){let l=[];for(let d of n.docChanges)3!==d.type&&l.push(d);n=new ViewSnapshot(n.query,n.docs,n.oldDocs,l,n.mutatedKeys,n.fromCache,n.syncStateChanged,!0,n.hasCachedResults)}let l=!1;return this.z_?this.H_(n)&&(this.G_.next(n),l=!0):this.J_(n,this.onlineState)&&(this.Y_(n),l=!0),this.j_=n,l}onError(n){this.G_.error(n)}U_(n){this.onlineState=n;let l=!1;return this.j_&&!this.z_&&this.J_(this.j_,n)&&(this.Y_(this.j_),l=!0),l}J_(n,l){return!n.fromCache||(!this.options.Z_||!("Offline"!==l))&&(!n.docs.isEmpty()||n.hasCachedResults||"Offline"===l)}H_(n){if(n.docChanges.length>0)return!0;let l=this.j_&&this.j_.hasPendingWrites!==n.hasPendingWrites;return!(!n.syncStateChanged&&!l)&&!0===this.options.includeMetadataChanges}Y_(n){n=ViewSnapshot.fromInitialDocuments(n.query,n.docs,n.mutatedKeys,n.fromCache,n.hasCachedResults),this.z_=!0,this.G_.next(n)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AddedLimboDocument=class __PRIVATE_AddedLimboDocument{constructor(n){this.key=n}};let __PRIVATE_RemovedLimboDocument=class __PRIVATE_RemovedLimboDocument{constructor(n){this.key=n}};let __PRIVATE_View=class __PRIVATE_View{constructor(n,l){this.query=n,this.oa=l,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=__PRIVATE_documentKeySet(),this.mutatedKeys=__PRIVATE_documentKeySet(),this.ua=__PRIVATE_newQueryComparator(n),this.ca=new DocumentSet(this.ua)}get la(){return this.oa}ha(n,l){let d=l?l.Pa:new __PRIVATE_DocumentChangeSet,f=l?l.ca:this.ca,_=l?l.mutatedKeys:this.mutatedKeys,E=f,L=!1,z="F"===this.query.limitType&&f.size===this.query.limit?f.last():null,et="L"===this.query.limitType&&f.size===this.query.limit?f.first():null;if(n.inorderTraversal((n,l)=>{let er=f.get(n),en=__PRIVATE_queryMatches(this.query,l)?l:null,ei=!!er&&this.mutatedKeys.has(er.key),es=!!en&&(en.hasLocalMutations||this.mutatedKeys.has(en.key)&&en.hasCommittedMutations),eo=!1;er&&en?er.data.isEqual(en.data)?ei!==es&&(d.track({type:3,doc:en}),eo=!0):this.Ia(er,en)||(d.track({type:2,doc:en}),eo=!0,(z&&this.ua(en,z)>0||et&&0>this.ua(en,et))&&(L=!0)):!er&&en?(d.track({type:0,doc:en}),eo=!0):er&&!en&&(d.track({type:1,doc:er}),eo=!0,(z||et)&&(L=!0)),eo&&(en?(E=E.add(en),_=es?_.add(n):_.delete(n)):(E=E.delete(n),_=_.delete(n)))}),null!==this.query.limit)for(;E.size>this.query.limit;){let n="F"===this.query.limitType?E.last():E.first();E=E.delete(n.key),_=_.delete(n.key),d.track({type:1,doc:n})}return{ca:E,Pa:d,Xi:L,mutatedKeys:_}}Ia(n,l){return n.hasLocalMutations&&l.hasCommittedMutations&&!l.hasLocalMutations}applyChanges(n,l,d,f){let _=this.ca;this.ca=n.ca,this.mutatedKeys=n.mutatedKeys;let E=n.Pa.k_();E.sort((n,l)=>(function(n,l){let order=n=>{switch(n){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fail()}};return order(n)-order(l)})(n.type,l.type)||this.ua(n.doc,l.doc)),this.Ta(d),f=null!=f&&f;let L=l&&!f?this.Ea():[],z=0===this.aa.size&&this.current&&!f?1:0,et=z!==this._a;return(this._a=z,0!==E.length||et)?{snapshot:new ViewSnapshot(this.query,n.ca,_,E,n.mutatedKeys,0===z,et,!1,!!d&&d.resumeToken.approximateByteSize()>0),da:L}:{da:L}}U_(n){return this.current&&"Offline"===n?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new __PRIVATE_DocumentChangeSet,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(n){return!this.oa.has(n)&&!!this.ca.has(n)&&!this.ca.get(n).hasLocalMutations}Ta(n){n&&(n.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),n.modifiedDocuments.forEach(n=>{}),n.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=n.current)}Ea(){if(!this.current)return[];let n=this.aa;this.aa=__PRIVATE_documentKeySet(),this.ca.forEach(n=>{this.Aa(n.key)&&(this.aa=this.aa.add(n.key))});let l=[];return n.forEach(n=>{this.aa.has(n)||l.push(new __PRIVATE_RemovedLimboDocument(n))}),this.aa.forEach(d=>{n.has(d)||l.push(new __PRIVATE_AddedLimboDocument(d))}),l}Ra(n){this.oa=n.hs,this.aa=__PRIVATE_documentKeySet();let l=this.ha(n.documents);return this.applyChanges(l,!0)}Va(){return ViewSnapshot.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}};let __PRIVATE_QueryView=class __PRIVATE_QueryView{constructor(n,l,d){this.query=n,this.targetId=l,this.view=d}};let LimboResolution=class LimboResolution{constructor(n){this.key=n,this.ma=!1}};let __PRIVATE_SyncEngineImpl=class __PRIVATE_SyncEngineImpl{constructor(n,l,d,f,_,E){this.localStore=n,this.remoteStore=l,this.eventManager=d,this.sharedClientState=f,this.currentUser=_,this.maxConcurrentLimboResolutions=E,this.fa={},this.ga=new ObjectMap(n=>__PRIVATE_canonifyQuery(n),__PRIVATE_queryEquals),this.pa=new Map,this.ya=new Set,this.wa=new SortedMap(DocumentKey.comparator),this.Sa=new Map,this.ba=new __PRIVATE_ReferenceSet,this.Da={},this.Ca=new Map,this.va=__PRIVATE_TargetIdGenerator.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}};async function __PRIVATE_syncEngineListen(n,l){let d,f;let _=__PRIVATE_ensureWatchCallbacks(n),E=_.ga.get(l);if(E)d=E.targetId,_.sharedClientState.addLocalQueryTarget(d),f=E.view.Va();else{let n=await __PRIVATE_localStoreAllocateTarget(_.localStore,__PRIVATE_queryToTarget(l)),E=_.sharedClientState.addLocalQueryTarget(n.targetId);d=n.targetId,f=await __PRIVATE_initializeViewAndComputeSnapshot(_,l,d,"current"===E,n.resumeToken),_.isPrimaryClient&&__PRIVATE_remoteStoreListen(_.remoteStore,n)}return f}async function __PRIVATE_initializeViewAndComputeSnapshot(n,l,d,f,_){n.Ma=(l,d,f)=>(async function(n,l,d,f){let _=l.view.ha(d);_.Xi&&(_=await __PRIVATE_localStoreExecuteQuery(n.localStore,l.query,!1).then(({documents:n})=>l.view.ha(n,_)));let E=f&&f.targetChanges.get(l.targetId),L=f&&null!=f.targetMismatches.get(l.targetId),z=l.view.applyChanges(_,n.isPrimaryClient,E,L);return __PRIVATE_updateTrackedLimbos(n,l.targetId,z.da),z.snapshot})(n,l,d,f);let E=await __PRIVATE_localStoreExecuteQuery(n.localStore,l,!0),L=new __PRIVATE_View(l,E.hs),z=L.ha(E.documents),et=TargetChange.createSynthesizedTargetChangeForCurrentChange(d,f&&"Offline"!==n.onlineState,_),er=L.applyChanges(z,n.isPrimaryClient,et);__PRIVATE_updateTrackedLimbos(n,d,er.da);let en=new __PRIVATE_QueryView(l,d,L);return n.ga.set(l,en),n.pa.has(d)?n.pa.get(d).push(l):n.pa.set(d,[l]),er.snapshot}async function __PRIVATE_syncEngineUnlisten(n,l){let d=n.ga.get(l),f=n.pa.get(d.targetId);if(f.length>1)return n.pa.set(d.targetId,f.filter(n=>!__PRIVATE_queryEquals(n,l))),void n.ga.delete(l);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(d.targetId),n.sharedClientState.isActiveQueryTarget(d.targetId)||await __PRIVATE_localStoreReleaseTarget(n.localStore,d.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(d.targetId),__PRIVATE_remoteStoreUnlisten(n.remoteStore,d.targetId),__PRIVATE_removeAndCleanupTarget(n,d.targetId)}).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)):(__PRIVATE_removeAndCleanupTarget(n,d.targetId),await __PRIVATE_localStoreReleaseTarget(n.localStore,d.targetId,!0))}async function __PRIVATE_syncEngineWrite(n,l,d){let f=__PRIVATE_syncEngineEnsureWriteCallbacks(n);try{var _;let n;let E=await function(n,l){let d,f;let _=Timestamp.now(),E=l.reduce((n,l)=>n.add(l.key),__PRIVATE_documentKeySet());return n.persistence.runTransaction("Locally write mutations","readwrite",L=>{let z=tP,et=__PRIVATE_documentKeySet();return n.os.getEntries(L,E).next(n=>{(z=n).forEach((n,l)=>{l.isValidDocument()||(et=et.add(n))})}).next(()=>n.localDocuments.getOverlayedDocuments(L,z)).next(f=>{d=f;let E=[];for(let n of l){let l=__PRIVATE_mutationExtractBaseValue(n,d.get(n.key).overlayedDocument);null!=l&&E.push(new __PRIVATE_PatchMutation(n.key,l,__PRIVATE_extractFieldMask(l.value.mapValue),Precondition.exists(!0)))}return n.mutationQueue.addMutationBatch(L,_,E,l)}).next(l=>{f=l;let _=l.applyToLocalDocumentSet(d,et);return n.documentOverlayCache.saveOverlays(L,l.batchId,_)})}).then(()=>({batchId:f.batchId,changes:__PRIVATE_convertOverlayedDocumentMapToDocumentMap(d)}))}(f.localStore,l);f.sharedClientState.addPendingMutation(E.batchId),_=E.batchId,(n=f.Da[f.currentUser.toKey()])||(n=new SortedMap(__PRIVATE_primitiveComparator)),n=n.insert(_,d),f.Da[f.currentUser.toKey()]=n,await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(f,E.changes),await __PRIVATE_fillWritePipeline(f.remoteStore)}catch(l){let n=__PRIVATE_wrapInUserErrorIfRecoverable(l,"Failed to persist write");d.reject(n)}}async function __PRIVATE_syncEngineApplyRemoteEvent(n,l){try{let d=await __PRIVATE_localStoreApplyRemoteEventToLocalCache(n.localStore,l);l.targetChanges.forEach((l,d)=>{let f=n.Sa.get(d);f&&(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1||fail(),l.addedDocuments.size>0?f.ma=!0:l.modifiedDocuments.size>0?f.ma||fail():l.removedDocuments.size>0&&(f.ma||fail(),f.ma=!1))}),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n,d,l)}catch(n){await __PRIVATE_ignoreIfPrimaryLeaseLoss(n)}}function __PRIVATE_syncEngineApplyOnlineStateChange(n,l,d){var f;if(n.isPrimaryClient&&0===d||!n.isPrimaryClient&&1===d){let d;let _=[];n.ga.forEach((n,d)=>{let f=d.view.U_(l);f.snapshot&&_.push(f.snapshot)}),(f=n.eventManager).onlineState=l,d=!1,f.queries.forEach((n,f)=>{for(let n of f.Q_)n.U_(l)&&(d=!0)}),d&&__PRIVATE_raiseSnapshotsInSyncEvent(f),_.length&&n.fa.u_(_),n.onlineState=l,n.isPrimaryClient&&n.sharedClientState.setOnlineState(l)}}async function __PRIVATE_syncEngineRejectListen(n,l,d){n.sharedClientState.updateQueryState(l,"rejected",d);let f=n.Sa.get(l),_=f&&f.key;if(_){let d=new SortedMap(DocumentKey.comparator);d=d.insert(_,MutableDocument.newNoDocument(_,SnapshotVersion.min()));let f=__PRIVATE_documentKeySet().add(_),E=new RemoteEvent(SnapshotVersion.min(),new Map,new SortedMap(__PRIVATE_primitiveComparator),d,f);await __PRIVATE_syncEngineApplyRemoteEvent(n,E),n.wa=n.wa.remove(_),n.Sa.delete(l),__PRIVATE_pumpEnqueuedLimboResolutions(n)}else await __PRIVATE_localStoreReleaseTarget(n.localStore,l,!1).then(()=>__PRIVATE_removeAndCleanupTarget(n,l,d)).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)}async function __PRIVATE_syncEngineApplySuccessfulWrite(n,l){let d=l.batch.batchId;try{let f=await __PRIVATE_localStoreAcknowledgeBatch(n.localStore,l);__PRIVATE_processUserCallback(n,d,null),__PRIVATE_triggerPendingWritesCallbacks(n,d),n.sharedClientState.updateMutationState(d,"acknowledged"),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n,f)}catch(n){await __PRIVATE_ignoreIfPrimaryLeaseLoss(n)}}async function __PRIVATE_syncEngineRejectFailedWrite(n,l,d){var f;try{let _=await (f=n.localStore).persistence.runTransaction("Reject batch","readwrite-primary",n=>{let d;return f.mutationQueue.lookupMutationBatch(n,l).next(l=>(null!==l||fail(),d=l.keys(),f.mutationQueue.removeMutationBatch(n,l))).next(()=>f.mutationQueue.performConsistencyCheck(n)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(n,d,l)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,d)).next(()=>f.localDocuments.getDocuments(n,d))});__PRIVATE_processUserCallback(n,l,d),__PRIVATE_triggerPendingWritesCallbacks(n,l),n.sharedClientState.updateMutationState(l,"rejected",d),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n,_)}catch(n){await __PRIVATE_ignoreIfPrimaryLeaseLoss(n)}}function __PRIVATE_triggerPendingWritesCallbacks(n,l){(n.Ca.get(l)||[]).forEach(n=>{n.resolve()}),n.Ca.delete(l)}function __PRIVATE_processUserCallback(n,l,d){let f=n.Da[n.currentUser.toKey()];if(f){let _=f.get(l);_&&(d?_.reject(d):_.resolve(),f=f.remove(l)),n.Da[n.currentUser.toKey()]=f}}function __PRIVATE_removeAndCleanupTarget(n,l,d=null){for(let f of(n.sharedClientState.removeLocalQueryTarget(l),n.pa.get(l)))n.ga.delete(f),d&&n.fa.xa(f,d);n.pa.delete(l),n.isPrimaryClient&&n.ba.Vr(l).forEach(l=>{n.ba.containsKey(l)||__PRIVATE_removeLimboTarget(n,l)})}function __PRIVATE_removeLimboTarget(n,l){n.ya.delete(l.path.canonicalString());let d=n.wa.get(l);null!==d&&(__PRIVATE_remoteStoreUnlisten(n.remoteStore,d),n.wa=n.wa.remove(l),n.Sa.delete(d),__PRIVATE_pumpEnqueuedLimboResolutions(n))}function __PRIVATE_updateTrackedLimbos(n,l,d){for(let f of d)f instanceof __PRIVATE_AddedLimboDocument?(n.ba.addReference(f.key,l),__PRIVATE_trackLimboChange(n,f)):f instanceof __PRIVATE_RemovedLimboDocument?(__PRIVATE_logDebug("SyncEngine","Document no longer in limbo: "+f.key),n.ba.removeReference(f.key,l),n.ba.containsKey(f.key)||__PRIVATE_removeLimboTarget(n,f.key)):fail()}function __PRIVATE_trackLimboChange(n,l){let d=l.key,f=d.path.canonicalString();n.wa.get(d)||n.ya.has(f)||(__PRIVATE_logDebug("SyncEngine","New document in limbo: "+d),n.ya.add(f),__PRIVATE_pumpEnqueuedLimboResolutions(n))}function __PRIVATE_pumpEnqueuedLimboResolutions(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){let l=n.ya.values().next().value;n.ya.delete(l);let d=new DocumentKey(ResourcePath.fromString(l)),f=n.va.next();n.Sa.set(f,new LimboResolution(d)),n.wa=n.wa.insert(d,f),__PRIVATE_remoteStoreListen(n.remoteStore,new TargetData(__PRIVATE_queryToTarget(new __PRIVATE_QueryImpl(d.path)),f,"TargetPurposeLimboResolution",__PRIVATE_ListenSequence._e))}}async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n,l,d){let f=[],_=[],E=[];n.ga.isEmpty()||(n.ga.forEach((L,z)=>{E.push(n.Ma(z,l,d).then(l=>{if((l||d)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(z.targetId,(null==l?void 0:l.fromCache)?"not-current":"current"),l){f.push(l);let n=__PRIVATE_LocalViewChanges.Ki(z.targetId,l);_.push(n)}}))}),await Promise.all(E),n.fa.u_(f),await async function(n,l){try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>PersistencePromise.forEach(l,l=>PersistencePromise.forEach(l.qi,f=>n.persistence.referenceDelegate.addReference(d,l.targetId,f)).next(()=>PersistencePromise.forEach(l.Qi,f=>n.persistence.referenceDelegate.removeReference(d,l.targetId,f)))))}catch(n){if(!__PRIVATE_isIndexedDbTransactionError(n))throw n;__PRIVATE_logDebug("LocalStore","Failed to update sequence numbers: "+n)}for(let d of l){let l=d.targetId;if(!d.fromCache){let d=n.ns.get(l),f=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(f);n.ns=n.ns.insert(l,_)}}}(n.localStore,_))}async function __PRIVATE_syncEngineHandleCredentialChange(n,l){if(!n.currentUser.isEqual(l)){__PRIVATE_logDebug("SyncEngine","User change. New user:",l.toKey());let d=await __PRIVATE_localStoreHandleUserChange(n.localStore,l);n.currentUser=l,n.Ca.forEach(n=>{n.forEach(n=>{n.reject(new FirestoreError(ty.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),n.Ca.clear(),n.sharedClientState.handleUserChange(l,d.removedBatchIds,d.addedBatchIds),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n,d.us)}}function __PRIVATE_syncEngineGetRemoteKeysForTarget(n,l){let d=n.Sa.get(l);if(d&&d.ma)return __PRIVATE_documentKeySet().add(d.key);{let d=__PRIVATE_documentKeySet(),f=n.pa.get(l);if(!f)return d;for(let l of f){let f=n.ga.get(l);d=d.unionWith(f.view.la)}return d}}function __PRIVATE_ensureWatchCallbacks(n){return n.remoteStore.remoteSyncer.applyRemoteEvent=__PRIVATE_syncEngineApplyRemoteEvent.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=__PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=__PRIVATE_syncEngineRejectListen.bind(null,n),n.fa.u_=__PRIVATE_eventManagerOnWatchChange.bind(null,n.eventManager),n.fa.xa=__PRIVATE_eventManagerOnWatchError.bind(null,n.eventManager),n}function __PRIVATE_syncEngineEnsureWriteCallbacks(n){return n.remoteStore.remoteSyncer.applySuccessfulWrite=__PRIVATE_syncEngineApplySuccessfulWrite.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=__PRIVATE_syncEngineRejectFailedWrite.bind(null,n),n}let MemoryOfflineComponentProvider=class MemoryOfflineComponentProvider{constructor(){this.synchronizeTabs=!1}async initialize(n){this.serializer=__PRIVATE_newSerializer(n.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(n),this.persistence=this.createPersistence(n),await this.persistence.start(),this.localStore=this.createLocalStore(n),this.gcScheduler=this.createGarbageCollectionScheduler(n,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(n,this.localStore)}createGarbageCollectionScheduler(n,l){return null}createIndexBackfillerScheduler(n,l){return null}createLocalStore(n){return __PRIVATE_newLocalStore(this.persistence,new __PRIVATE_QueryEngine,n.initialUser,this.serializer)}createPersistence(n){return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Hr,this.serializer)}createSharedClientState(n){return new __PRIVATE_MemorySharedClientState}async terminate(){var n,l;null===(n=this.gcScheduler)||void 0===n||n.stop(),null===(l=this.indexBackfillerScheduler)||void 0===l||l.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};let OnlineComponentProvider=class OnlineComponentProvider{async initialize(n,l){this.localStore||(this.localStore=n.localStore,this.sharedClientState=n.sharedClientState,this.datastore=this.createDatastore(l),this.remoteStore=this.createRemoteStore(l),this.eventManager=this.createEventManager(l),this.syncEngine=this.createSyncEngine(l,!n.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=__PRIVATE_syncEngineHandleCredentialChange.bind(null,this.syncEngine),await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(n){return new __PRIVATE_EventManagerImpl}createDatastore(n){let l=__PRIVATE_newSerializer(n.databaseInfo.databaseId),d=new __PRIVATE_WebChannelConnection(n.databaseInfo);return new __PRIVATE_DatastoreImpl(n.authCredentials,n.appCheckCredentials,d,l)}createRemoteStore(n){var l;return l=this.localStore,new __PRIVATE_RemoteStoreImpl(l,this.datastore,n.asyncQueue,n=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,n,0),__PRIVATE_BrowserConnectivityMonitor.D()?new __PRIVATE_BrowserConnectivityMonitor:new __PRIVATE_NoopConnectivityMonitor)}createSyncEngine(n,l){return function(n,l,d,f,_,E,L){let z=new __PRIVATE_SyncEngineImpl(n,l,d,f,_,E);return L&&(z.Fa=!0),z}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,n.initialUser,n.maxConcurrentLimboResolutions,l)}async terminate(){var n;await async function(n){__PRIVATE_logDebug("RemoteStore","RemoteStore shutting down."),n.v_.add(5),await __PRIVATE_disableNetworkInternal(n),n.M_.shutdown(),n.x_.set("Unknown")}(this.remoteStore),null===(n=this.datastore)||void 0===n||n.terminate()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AsyncObserver=class __PRIVATE_AsyncObserver{constructor(n){this.observer=n,this.muted=!1}next(n){this.observer.next&&this.Ba(this.observer.next,n)}error(n){this.observer.error?this.Ba(this.observer.error,n):__PRIVATE_logError("Uncaught Error in snapshot listener:",n.toString())}La(){this.muted=!0}Ba(n,l){this.muted||setTimeout(()=>{this.muted||n(l)},0)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirestoreClient=class FirestoreClient{constructor(n,l,d,f){this.authCredentials=n,this.appCheckCredentials=l,this.asyncQueue=d,this.databaseInfo=f,this.user=User.UNAUTHENTICATED,this.clientId=__PRIVATE_AutoId.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(d,async n=>{__PRIVATE_logDebug("FirestoreClient","Received user=",n.uid),await this.authCredentialListener(n),this.user=n}),this.appCheckCredentials.start(d,n=>(__PRIVATE_logDebug("FirestoreClient","Received new app check token=",n),this.appCheckCredentialListener(n,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(n){this.authCredentialListener=n}setAppCheckTokenChangeListener(n){this.appCheckCredentialListener=n}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new FirestoreError(ty.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let n=new __PRIVATE_Deferred;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),n.resolve()}catch(d){let l=__PRIVATE_wrapInUserErrorIfRecoverable(d,"Failed to shutdown persistence");n.reject(l)}}),n.promise}};async function __PRIVATE_setOfflineComponentProvider(n,l){n.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug("FirestoreClient","Initializing OfflineComponentProvider");let d=n.configuration;await l.initialize(d);let f=d.initialUser;n.setCredentialChangeListener(async n=>{f.isEqual(n)||(await __PRIVATE_localStoreHandleUserChange(l.localStore,n),f=n)}),l.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=l}async function __PRIVATE_setOnlineComponentProvider(n,l){n.asyncQueue.verifyOperationInProgress();let d=await __PRIVATE_ensureOfflineComponents(n);__PRIVATE_logDebug("FirestoreClient","Initializing OnlineComponentProvider"),await l.initialize(d,n.configuration),n.setCredentialChangeListener(n=>__PRIVATE_remoteStoreHandleCredentialChange(l.remoteStore,n)),n.setAppCheckTokenChangeListener((n,d)=>__PRIVATE_remoteStoreHandleCredentialChange(l.remoteStore,d)),n._onlineComponents=l}function __PRIVATE_canFallbackFromIndexedDbError(n){return"FirebaseError"===n.name?n.code===ty.FAILED_PRECONDITION||n.code===ty.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code}async function __PRIVATE_ensureOfflineComponents(n){if(!n._offlineComponents){if(n._uninitializedComponentsProvider){__PRIVATE_logDebug("FirestoreClient","Using user provided OfflineComponentProvider");try{await __PRIVATE_setOfflineComponentProvider(n,n._uninitializedComponentsProvider._offline)}catch(l){if(!__PRIVATE_canFallbackFromIndexedDbError(l))throw l;__PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: "+l),await __PRIVATE_setOfflineComponentProvider(n,new MemoryOfflineComponentProvider)}}else __PRIVATE_logDebug("FirestoreClient","Using default OfflineComponentProvider"),await __PRIVATE_setOfflineComponentProvider(n,new MemoryOfflineComponentProvider)}return n._offlineComponents}async function __PRIVATE_ensureOnlineComponents(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(__PRIVATE_logDebug("FirestoreClient","Using user provided OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(n,n._uninitializedComponentsProvider._online)):(__PRIVATE_logDebug("FirestoreClient","Using default OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(n,new OnlineComponentProvider))),n._onlineComponents}function __PRIVATE_getSyncEngine(n){return __PRIVATE_ensureOnlineComponents(n).then(n=>n.syncEngine)}async function __PRIVATE_getEventManager(n){let l=await __PRIVATE_ensureOnlineComponents(n),d=l.eventManager;return d.onListen=__PRIVATE_syncEngineListen.bind(null,l.syncEngine),d.onUnlisten=__PRIVATE_syncEngineUnlisten.bind(null,l.syncEngine),d}function __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(n,l,d={}){let f=new __PRIVATE_Deferred;return n.asyncQueue.enqueueAndForget(async()=>(function(n,l,d,f,_){let E=new __PRIVATE_AsyncObserver({next:E=>{l.enqueueAndForget(()=>__PRIVATE_eventManagerUnlisten(n,L));let z=E.docs.has(d);!z&&E.fromCache?_.reject(new FirestoreError(ty.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&E.fromCache&&f&&"server"===f.source?_.reject(new FirestoreError(ty.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(E)},error:n=>_.reject(n)}),L=new __PRIVATE_QueryListener(new __PRIVATE_QueryImpl(d.path),E,{includeMetadataChanges:!0,Z_:!0});return __PRIVATE_eventManagerListen(n,L)})(await __PRIVATE_getEventManager(n),n.asyncQueue,l,d,f)),f.promise}function __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(n,l,d={}){let f=new __PRIVATE_Deferred;return n.asyncQueue.enqueueAndForget(async()=>(function(n,l,d,f,_){let E=new __PRIVATE_AsyncObserver({next:d=>{l.enqueueAndForget(()=>__PRIVATE_eventManagerUnlisten(n,L)),d.fromCache&&"server"===f.source?_.reject(new FirestoreError(ty.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(d)},error:n=>_.reject(n)}),L=new __PRIVATE_QueryListener(d,E,{includeMetadataChanges:!0,Z_:!0});return __PRIVATE_eventManagerListen(n,L)})(await __PRIVATE_getEventManager(n),n.asyncQueue,l,d,f)),f.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_cloneLongPollingOptions(n){let l={};return void 0!==n.timeoutSeconds&&(l.timeoutSeconds=n.timeoutSeconds),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tN=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_validateNonEmptyArgument(n,l,d){if(!d)throw new FirestoreError(ty.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${l}.`)}function __PRIVATE_validateIsNotUsedTogether(n,l,d,f){if(!0===l&&!0===f)throw new FirestoreError(ty.INVALID_ARGUMENT,`${n} and ${d} cannot be used together.`)}function __PRIVATE_validateDocumentPath(n){if(!DocumentKey.isDocumentKey(n))throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function __PRIVATE_validateCollectionPath(n){if(DocumentKey.isDocumentKey(n))throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function __PRIVATE_valueDescription(n){if(void 0===n)return"undefined";if(null===n)return"null";if("string"==typeof n)return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if("number"==typeof n||"boolean"==typeof n)return""+n;if("object"==typeof n){if(n instanceof Array)return"an array";{var l;let d=(l=n).constructor?l.constructor.name:null;return d?`a custom ${d} object`:"an object"}}return"function"==typeof n?"a function":fail()}function __PRIVATE_cast(n,l){if("_delegate"in n&&(n=n._delegate),!(n instanceof l)){if(l.name===n.constructor.name)throw new FirestoreError(ty.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let d=__PRIVATE_valueDescription(n);throw new FirestoreError(ty.INVALID_ARGUMENT,`Expected type '${l.name}', but it was: ${d}`)}}return n}function __PRIVATE_validatePositiveNumber(n,l){if(l<=0)throw new FirestoreError(ty.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${l}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirestoreSettingsImpl=class FirestoreSettingsImpl{constructor(n){var l,d;if(void 0===n.host){if(void 0!==n.ssl)throw new FirestoreError(ty.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(l=n.ssl)||void 0===l||l;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.localCache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new FirestoreError(ty.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}__PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===n.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=__PRIVATE_cloneLongPollingOptions(null!==(d=n.experimentalLongPollingOptions)&&void 0!==d?d:{}),function(n){if(void 0!==n.timeoutSeconds){if(isNaN(n.timeoutSeconds))throw new FirestoreError(ty.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new FirestoreError(ty.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new FirestoreError(ty.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!n.useFetchStreams}isEqual(n){var l,d;return this.host===n.host&&this.ssl===n.ssl&&this.credentials===n.credentials&&this.cacheSizeBytes===n.cacheSizeBytes&&this.experimentalForceLongPolling===n.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===n.experimentalAutoDetectLongPolling&&(l=this.experimentalLongPollingOptions,d=n.experimentalLongPollingOptions,l.timeoutSeconds===d.timeoutSeconds)&&this.ignoreUndefinedProperties===n.ignoreUndefinedProperties&&this.useFetchStreams===n.useFetchStreams}};let Firestore$1=class Firestore$1{constructor(n,l,d,f){this._authCredentials=n,this._appCheckCredentials=l,this._databaseId=d,this._app=f,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new FirestoreSettingsImpl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new FirestoreError(ty.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(n){if(this._settingsFrozen)throw new FirestoreError(ty.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new FirestoreSettingsImpl(n),void 0!==n.credentials&&(this._authCredentials=function(n){if(!n)return new __PRIVATE_EmptyAuthCredentialsProvider;switch(n.type){case"firstParty":return new __PRIVATE_FirstPartyAuthCredentialsProvider(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new FirestoreError(ty.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(n.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let l=tN.get(n);l&&(__PRIVATE_logDebug("ComponentProvider","Removing Datastore"),tN.delete(n),l.terminate())}(this),Promise.resolve()}};function connectFirestoreEmulator(n,l,d,f={}){var _;let E=(n=__PRIVATE_cast(n,Firestore$1))._getSettings(),L=`${l}:${d}`;if("firestore.googleapis.com"!==E.host&&E.host!==L&&__PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},E),{host:L,ssl:!1})),f.mockUserToken){let l,d;if("string"==typeof f.mockUserToken)l=f.mockUserToken,d=User.MOCK_USER;else{l=(0,eo.Sg)(f.mockUserToken,null===(_=n._app)||void 0===_?void 0:_.options.projectId);let E=f.mockUserToken.sub||f.mockUserToken.user_id;if(!E)throw new FirestoreError(ty.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new User(E)}n._authCredentials=new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(l,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Query=class Query{constructor(n,l,d){this.converter=l,this._query=d,this.type="query",this.firestore=n}withConverter(n){return new Query(this.firestore,n,this._query)}};let DocumentReference=class DocumentReference{constructor(n,l,d){this.converter=l,this._key=d,this.type="document",this.firestore=n}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new CollectionReference(this.firestore,this.converter,this._key.path.popLast())}withConverter(n){return new DocumentReference(this.firestore,n,this._key)}};let CollectionReference=class CollectionReference extends Query{constructor(n,l,d){super(n,l,new __PRIVATE_QueryImpl(d)),this._path=d,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let n=this._path.popLast();return n.isEmpty()?null:new DocumentReference(this.firestore,null,new DocumentKey(n))}withConverter(n){return new CollectionReference(this.firestore,n,this._path)}};function collection(n,l,...d){if(n=(0,eo.m9)(n),__PRIVATE_validateNonEmptyArgument("collection","path",l),n instanceof Firestore$1){let f=ResourcePath.fromString(l,...d);return __PRIVATE_validateCollectionPath(f),new CollectionReference(n,null,f)}{if(!(n instanceof DocumentReference||n instanceof CollectionReference))throw new FirestoreError(ty.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let f=n._path.child(ResourcePath.fromString(l,...d));return __PRIVATE_validateCollectionPath(f),new CollectionReference(n.firestore,null,f)}}function doc(n,l,...d){if(n=(0,eo.m9)(n),1==arguments.length&&(l=__PRIVATE_AutoId.newId()),__PRIVATE_validateNonEmptyArgument("doc","path",l),n instanceof Firestore$1){let f=ResourcePath.fromString(l,...d);return __PRIVATE_validateDocumentPath(f),new DocumentReference(n,null,new DocumentKey(f))}{if(!(n instanceof DocumentReference||n instanceof CollectionReference))throw new FirestoreError(ty.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let f=n._path.child(ResourcePath.fromString(l,...d));return __PRIVATE_validateDocumentPath(f),new DocumentReference(n.firestore,n instanceof CollectionReference?n.converter:null,new DocumentKey(f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AsyncQueueImpl=class __PRIVATE_AsyncQueueImpl{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new __PRIVATE_ExponentialBackoff(this,"async_queue_retry"),this._u=()=>{let n=getDocument();n&&__PRIVATE_logDebug("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};let n=getDocument();n&&"function"==typeof n.addEventListener&&n.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(n){this.enqueue(n)}enqueueAndForgetEvenWhileRestricted(n){this.au(),this.uu(n)}enterRestrictedMode(n){if(!this.tu){this.tu=!0,this.su=n||!1;let l=getDocument();l&&"function"==typeof l.removeEventListener&&l.removeEventListener("visibilitychange",this._u)}}enqueue(n){if(this.au(),this.tu)return new Promise(()=>{});let l=new __PRIVATE_Deferred;return this.uu(()=>this.tu&&this.su?Promise.resolve():(n().then(l.resolve,l.reject),l.promise)).then(()=>l.promise)}enqueueRetryable(n){this.enqueueAndForget(()=>(this.eu.push(n),this.cu()))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(n){if(!__PRIVATE_isIndexedDbTransactionError(n))throw n;__PRIVATE_logDebug("AsyncQueue","Operation failed with retryable error: "+n)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(n){let l=this.Xa.then(()=>(this.iu=!0,n().catch(n=>{let l;this.ru=n,this.iu=!1;let d=(l=n.message||"",n.stack&&(l=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),l);throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ",d),n}).then(n=>(this.iu=!1,n))));return this.Xa=l,l}enqueueAfterDelay(n,l,d){this.au(),this.ou.indexOf(n)>-1&&(l=0);let f=DelayedOperation.createAndSchedule(this,n,l,d,n=>this.lu(n));return this.nu.push(f),f}au(){this.ru&&fail()}verifyOperationInProgress(){}async hu(){let n;do n=this.Xa,await n;while(n!==this.Xa)}Pu(n){for(let l of this.nu)if(l.timerId===n)return!0;return!1}Iu(n){return this.hu().then(()=>{for(let l of(this.nu.sort((n,l)=>n.targetTimeMs-l.targetTimeMs),this.nu))if(l.skipDelay(),"all"!==n&&l.timerId===n)break;return this.hu()})}Tu(n){this.ou.push(n)}lu(n){let l=this.nu.indexOf(n);this.nu.splice(l,1)}};let Firestore=class Firestore extends Firestore$1{constructor(n,l,d,f){super(n,l,d,f),this.type="firestore",this._queue=new __PRIVATE_AsyncQueueImpl,this._persistenceKey=(null==f?void 0:f.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||__PRIVATE_configureFirestore(this),this._firestoreClient.terminate()}};function getFirestore(n,l){let d="object"==typeof n?n:(0,en.Mq)(),f=(0,en.qX)(d,"firestore").getImmediate({identifier:"string"==typeof n?n:l||"(default)"});if(!f._initialized){let n=(0,eo.P0)("firestore");n&&connectFirestoreEmulator(f,...n)}return f}function ensureFirestoreConfigured(n){return n._firestoreClient||__PRIVATE_configureFirestore(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function __PRIVATE_configureFirestore(n){var l,d,f,_;let E=n._freezeSettings(),L=(_=n._databaseId,new DatabaseInfo(_,(null===(l=n._app)||void 0===l?void 0:l.options.appId)||"",n._persistenceKey,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,__PRIVATE_cloneLongPollingOptions(E.experimentalLongPollingOptions),E.useFetchStreams));n._firestoreClient=new FirestoreClient(n._authCredentials,n._appCheckCredentials,n._queue,L),(null===(d=E.localCache)||void 0===d?void 0:d._offlineComponentProvider)&&(null===(f=E.localCache)||void 0===f?void 0:f._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:E.localCache.kind,_offline:E.localCache._offlineComponentProvider,_online:E.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bytes=class Bytes{constructor(n){this._byteString=n}static fromBase64String(n){try{return new Bytes(ByteString.fromBase64String(n))}catch(n){throw new FirestoreError(ty.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(n){return new Bytes(ByteString.fromUint8Array(n))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(n){return this._byteString.isEqual(n._byteString)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldPath=class FieldPath{constructor(...n){for(let l=0;l<n.length;++l)if(0===n[l].length)throw new FirestoreError(ty.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new FieldPath$1(n)}isEqual(n){return this._internalPath.isEqual(n._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldValue=class FieldValue{constructor(n){this._methodName=n}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GeoPoint=class GeoPoint{constructor(n,l){if(!isFinite(n)||n<-90||n>90)throw new FirestoreError(ty.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(l)||l<-180||l>180)throw new FirestoreError(ty.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+l);this._lat=n,this._long=l}get latitude(){return this._lat}get longitude(){return this._long}isEqual(n){return this._lat===n._lat&&this._long===n._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(n){return __PRIVATE_primitiveComparator(this._lat,n._lat)||__PRIVATE_primitiveComparator(this._long,n._long)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tM=/^__.*__$/;let ParsedSetData=class ParsedSetData{constructor(n,l,d){this.data=n,this.fieldMask=l,this.fieldTransforms=d}toMutation(n,l){return null!==this.fieldMask?new __PRIVATE_PatchMutation(n,this.data,this.fieldMask,l,this.fieldTransforms):new __PRIVATE_SetMutation(n,this.data,l,this.fieldTransforms)}};function __PRIVATE_isWrite(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fail()}}let __PRIVATE_ParseContextImpl=class __PRIVATE_ParseContextImpl{constructor(n,l,d,f,_,E){this.settings=n,this.databaseId=l,this.serializer=d,this.ignoreUndefinedProperties=f,void 0===_&&this.Eu(),this.fieldTransforms=_||[],this.fieldMask=E||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(n){return new __PRIVATE_ParseContextImpl(Object.assign(Object.assign({},this.settings),n),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(n){var l;let d=null===(l=this.path)||void 0===l?void 0:l.child(n),f=this.Au({path:d,Vu:!1});return f.mu(n),f}fu(n){var l;let d=null===(l=this.path)||void 0===l?void 0:l.child(n),f=this.Au({path:d,Vu:!1});return f.Eu(),f}gu(n){return this.Au({path:void 0,Vu:!0})}pu(n){return __PRIVATE_createError(n,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(n){return void 0!==this.fieldMask.find(l=>n.isPrefixOf(l))||void 0!==this.fieldTransforms.find(l=>n.isPrefixOf(l.field))}Eu(){if(this.path)for(let n=0;n<this.path.length;n++)this.mu(this.path.get(n))}mu(n){if(0===n.length)throw this.pu("Document fields must not be empty");if(__PRIVATE_isWrite(this.du)&&tM.test(n))throw this.pu('Document fields cannot begin and end with "__"')}};let __PRIVATE_UserDataReader=class __PRIVATE_UserDataReader{constructor(n,l,d){this.databaseId=n,this.ignoreUndefinedProperties=l,this.serializer=d||__PRIVATE_newSerializer(n)}Su(n,l,d,f=!1){return new __PRIVATE_ParseContextImpl({du:n,methodName:l,wu:d,path:FieldPath$1.emptyPath(),Vu:!1,yu:f},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function __PRIVATE_newUserDataReader(n){let l=n._freezeSettings(),d=__PRIVATE_newSerializer(n._databaseId);return new __PRIVATE_UserDataReader(n._databaseId,!!l.ignoreUndefinedProperties,d)}function __PRIVATE_parseSetData(n,l,d,f,_,E={}){let L,z;let et=n.Su(E.merge||E.mergeFields?2:0,l,d,_);__PRIVATE_validatePlainObject("Data must be an object, but it was:",et,f);let er=__PRIVATE_parseObject(f,et);if(E.merge)L=new FieldMask(et.fieldMask),z=et.fieldTransforms;else if(E.mergeFields){let n=[];for(let f of E.mergeFields){let _=__PRIVATE_fieldPathFromArgument$1(l,f,d);if(!et.contains(_))throw new FirestoreError(ty.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);__PRIVATE_fieldMaskContains(n,_)||n.push(_)}L=new FieldMask(n),z=et.fieldTransforms.filter(n=>L.covers(n.field))}else L=null,z=et.fieldTransforms;return new ParsedSetData(new ObjectValue(er),L,z)}let __PRIVATE_ServerTimestampFieldValueImpl=class __PRIVATE_ServerTimestampFieldValueImpl extends FieldValue{_toFieldTransform(n){return new FieldTransform(n.path,new __PRIVATE_ServerTimestampTransform)}isEqual(n){return n instanceof __PRIVATE_ServerTimestampFieldValueImpl}};function __PRIVATE_parseQueryValue(n,l,d,f=!1){return __PRIVATE_parseData(d,n.Su(f?4:3,l))}function __PRIVATE_parseData(n,l){if(__PRIVATE_looksLikeJsonObject(n=(0,eo.m9)(n)))return __PRIVATE_validatePlainObject("Unsupported field value:",l,n),__PRIVATE_parseObject(n,l);if(n instanceof FieldValue)return function(n,l){if(!__PRIVATE_isWrite(l.du))throw l.pu(`${n._methodName}() can only be used with update() and set()`);if(!l.path)throw l.pu(`${n._methodName}() is not currently supported inside arrays`);let d=n._toFieldTransform(l);d&&l.fieldTransforms.push(d)}(n,l),null;if(void 0===n&&l.ignoreUndefinedProperties)return null;if(l.path&&l.fieldMask.push(l.path),n instanceof Array){if(l.settings.Vu&&4!==l.du)throw l.pu("Nested arrays are not supported");return function(n,l){let d=[],f=0;for(let _ of n){let n=__PRIVATE_parseData(_,l.gu(f));null==n&&(n={nullValue:"NULL_VALUE"}),d.push(n),f++}return{arrayValue:{values:d}}}(n,l)}return function(n,l){if(null===(n=(0,eo.m9)(n)))return{nullValue:"NULL_VALUE"};if("number"==typeof n)return toNumber(l.serializer,n);if("boolean"==typeof n)return{booleanValue:n};if("string"==typeof n)return{stringValue:n};if(n instanceof Date){let d=Timestamp.fromDate(n);return{timestampValue:toTimestamp(l.serializer,d)}}if(n instanceof Timestamp){let d=new Timestamp(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:toTimestamp(l.serializer,d)}}if(n instanceof GeoPoint)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bytes)return{bytesValue:__PRIVATE_toBytes(l.serializer,n._byteString)};if(n instanceof DocumentReference){let d=l.databaseId,f=n.firestore._databaseId;if(!f.isEqual(d))throw l.pu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${d.projectId}/${d.database}`);return{referenceValue:__PRIVATE_toResourceName(n.firestore._databaseId||l.databaseId,n._key.path)}}throw l.pu(`Unsupported field value: ${__PRIVATE_valueDescription(n)}`)}(n,l)}function __PRIVATE_parseObject(n,l){let d={};return isEmpty(n)?l.path&&l.path.length>0&&l.fieldMask.push(l.path):forEach(n,(n,f)=>{let _=__PRIVATE_parseData(f,l.Ru(n));null!=_&&(d[n]=_)}),{mapValue:{fields:d}}}function __PRIVATE_looksLikeJsonObject(n){return!("object"!=typeof n||null===n||n instanceof Array||n instanceof Date||n instanceof Timestamp||n instanceof GeoPoint||n instanceof Bytes||n instanceof DocumentReference||n instanceof FieldValue)}function __PRIVATE_validatePlainObject(n,l,d){if(!__PRIVATE_looksLikeJsonObject(d)||!("object"==typeof d&&null!==d&&(Object.getPrototypeOf(d)===Object.prototype||null===Object.getPrototypeOf(d)))){let f=__PRIVATE_valueDescription(d);throw"an object"===f?l.pu(n+" a custom object"):l.pu(n+" "+f)}}function __PRIVATE_fieldPathFromArgument$1(n,l,d){if((l=(0,eo.m9)(l))instanceof FieldPath)return l._internalPath;if("string"==typeof l)return __PRIVATE_fieldPathFromDotSeparatedString(n,l);throw __PRIVATE_createError("Field path arguments must be of type string or ",n,!1,void 0,d)}let tL=RegExp("[~\\*/\\[\\]]");function __PRIVATE_fieldPathFromDotSeparatedString(n,l,d){if(l.search(tL)>=0)throw __PRIVATE_createError(`Invalid field path (${l}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,d);try{return new FieldPath(...l.split("."))._internalPath}catch(f){throw __PRIVATE_createError(`Invalid field path (${l}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,d)}}function __PRIVATE_createError(n,l,d,f,_){let E=f&&!f.isEmpty(),L=void 0!==_,z=`Function ${l}() called with invalid data`;d&&(z+=" (via `toFirestore()`)"),z+=". ";let et="";return(E||L)&&(et+=" (found",E&&(et+=` in field ${f}`),L&&(et+=` in document ${_}`),et+=")"),new FirestoreError(ty.INVALID_ARGUMENT,z+n+et)}function __PRIVATE_fieldMaskContains(n,l){return n.some(n=>n.isEqual(l))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentSnapshot$1=class DocumentSnapshot$1{constructor(n,l,d,f,_){this._firestore=n,this._userDataWriter=l,this._key=d,this._document=f,this._converter=_}get id(){return this._key.path.lastSegment()}get ref(){return new DocumentReference(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let n=new QueryDocumentSnapshot$1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(n)}return this._userDataWriter.convertValue(this._document.data.value)}}get(n){if(this._document){let l=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",n));if(null!==l)return this._userDataWriter.convertValue(l)}}};let QueryDocumentSnapshot$1=class QueryDocumentSnapshot$1 extends DocumentSnapshot$1{data(){return super.data()}};function __PRIVATE_fieldPathFromArgument(n,l){return"string"==typeof l?__PRIVATE_fieldPathFromDotSeparatedString(n,l):l instanceof FieldPath?l._internalPath:l._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_validateHasExplicitOrderByForLimitToLast(n){if("L"===n.limitType&&0===n.explicitOrderBy.length)throw new FirestoreError(ty.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}let AppliableConstraint=class AppliableConstraint{};let QueryConstraint=class QueryConstraint extends AppliableConstraint{};function query(n,l,...d){let f=[];for(let _ of(l instanceof AppliableConstraint&&f.push(l),function(n){let l=n.filter(n=>n instanceof QueryCompositeFilterConstraint).length,d=n.filter(n=>n instanceof QueryFieldFilterConstraint).length;if(l>1||l>0&&d>0)throw new FirestoreError(ty.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(f=f.concat(d)),f))n=_._apply(n);return n}let QueryFieldFilterConstraint=class QueryFieldFilterConstraint extends QueryConstraint{constructor(n,l,d){super(),this._field=n,this._op=l,this._value=d,this.type="where"}static _create(n,l,d){return new QueryFieldFilterConstraint(n,l,d)}_apply(n){let l=this._parse(n);return __PRIVATE_validateNewFieldFilter(n._query,l),new Query(n.firestore,n.converter,__PRIVATE_queryWithAddedFilter(n._query,l))}_parse(n){let l=__PRIVATE_newUserDataReader(n.firestore),d=function(n,l,d,f,_,E,L){let z;if(_.isKeyField()){if("array-contains"===E||"array-contains-any"===E)throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if("in"===E||"not-in"===E){__PRIVATE_validateDisjunctiveFilterElements(L,E);let l=[];for(let d of L)l.push(__PRIVATE_parseDocumentIdValue(f,n,d));z={arrayValue:{values:l}}}else z=__PRIVATE_parseDocumentIdValue(f,n,L)}else"in"!==E&&"not-in"!==E&&"array-contains-any"!==E||__PRIVATE_validateDisjunctiveFilterElements(L,E),z=__PRIVATE_parseQueryValue(d,l,L,"in"===E||"not-in"===E);return FieldFilter.create(_,E,z)}(n._query,"where",l,n.firestore._databaseId,this._field,this._op,this._value);return d}};function where(n,l,d){let f=__PRIVATE_fieldPathFromArgument("where",n);return QueryFieldFilterConstraint._create(f,l,d)}let QueryCompositeFilterConstraint=class QueryCompositeFilterConstraint extends AppliableConstraint{constructor(n,l){super(),this.type=n,this._queryConstraints=l}static _create(n,l){return new QueryCompositeFilterConstraint(n,l)}_parse(n){let l=this._queryConstraints.map(l=>l._parse(n)).filter(n=>n.getFilters().length>0);return 1===l.length?l[0]:CompositeFilter.create(l,this._getOperator())}_apply(n){let l=this._parse(n);return 0===l.getFilters().length?n:(function(n,l){let d=n,f=l.getFlattenedFilters();for(let n of f)__PRIVATE_validateNewFieldFilter(d,n),d=__PRIVATE_queryWithAddedFilter(d,n)}(n._query,l),new Query(n.firestore,n.converter,__PRIVATE_queryWithAddedFilter(n._query,l)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}};let QueryLimitConstraint=class QueryLimitConstraint extends QueryConstraint{constructor(n,l,d){super(),this.type=n,this._limit=l,this._limitType=d}static _create(n,l,d){return new QueryLimitConstraint(n,l,d)}_apply(n){return new Query(n.firestore,n.converter,__PRIVATE_queryWithLimit(n._query,this._limit,this._limitType))}};function limit(n){return __PRIVATE_validatePositiveNumber("limit",n),QueryLimitConstraint._create("limit",n,"F")}function __PRIVATE_parseDocumentIdValue(n,l,d){if("string"==typeof(d=(0,eo.m9)(d))){if(""===d)throw new FirestoreError(ty.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!__PRIVATE_isCollectionGroupQuery(l)&&-1!==d.indexOf("/"))throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${d}' contains a '/' character.`);let f=l.path.child(ResourcePath.fromString(d));if(!DocumentKey.isDocumentKey(f))throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${f}' is not because it has an odd number of segments (${f.length}).`);return __PRIVATE_refValue(n,new DocumentKey(f))}if(d instanceof DocumentReference)return __PRIVATE_refValue(n,d._key);throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(d)}.`)}function __PRIVATE_validateDisjunctiveFilterElements(n,l){if(!Array.isArray(n)||0===n.length)throw new FirestoreError(ty.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${l.toString()}' filters.`)}function __PRIVATE_validateNewFieldFilter(n,l){let d=function(n,l){for(let d of n)for(let n of d.getFlattenedFilters())if(l.indexOf(n.op)>=0)return n.op;return null}(n.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(l.op));if(null!==d)throw d===l.op?new FirestoreError(ty.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${l.op.toString()}' filter.`):new FirestoreError(ty.INVALID_ARGUMENT,`Invalid query. You cannot use '${l.op.toString()}' filters with '${d.toString()}' filters.`)}let AbstractUserDataWriter=class AbstractUserDataWriter{convertValue(n,l="none"){switch(__PRIVATE_typeOrder(n)){case 0:return null;case 1:return n.booleanValue;case 2:return __PRIVATE_normalizeNumber(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,l);case 5:return n.stringValue;case 6:return this.convertBytes(__PRIVATE_normalizeByteString(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,l);case 10:return this.convertObject(n.mapValue,l);default:throw fail()}}convertObject(n,l){return this.convertObjectMap(n.fields,l)}convertObjectMap(n,l="none"){let d={};return forEach(n,(n,f)=>{d[n]=this.convertValue(f,l)}),d}convertGeoPoint(n){return new GeoPoint(__PRIVATE_normalizeNumber(n.latitude),__PRIVATE_normalizeNumber(n.longitude))}convertArray(n,l){return(n.values||[]).map(n=>this.convertValue(n,l))}convertServerTimestamp(n,l){switch(l){case"previous":let d=__PRIVATE_getPreviousValue(n);return null==d?null:this.convertValue(d,l);case"estimate":return this.convertTimestamp(__PRIVATE_getLocalWriteTime(n));default:return null}}convertTimestamp(n){let l=__PRIVATE_normalizeTimestamp(n);return new Timestamp(l.seconds,l.nanos)}convertDocumentKey(n,l){let d=ResourcePath.fromString(n);__PRIVATE_isValidResourceName(d)||fail();let f=new DatabaseId(d.get(1),d.get(3)),_=new DocumentKey(d.popFirst(5));return f.isEqual(l)||__PRIVATE_logError(`Document ${_} contains a document reference within a different database (${f.projectId}/${f.database}) which is not supported. It will be treated as a reference in the current database (${l.projectId}/${l.database}) instead.`),_}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_applyFirestoreDataConverter(n,l,d){return n?d&&(d.merge||d.mergeFields)?n.toFirestore(l,d):n.toFirestore(l):l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotMetadata=class SnapshotMetadata{constructor(n,l){this.hasPendingWrites=n,this.fromCache=l}isEqual(n){return this.hasPendingWrites===n.hasPendingWrites&&this.fromCache===n.fromCache}};let DocumentSnapshot=class DocumentSnapshot extends DocumentSnapshot$1{constructor(n,l,d,f,_,E){super(n,l,d,f,E),this._firestore=n,this._firestoreImpl=n,this.metadata=_}exists(){return super.exists()}data(n={}){if(this._document){if(this._converter){let l=new QueryDocumentSnapshot(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(l,n)}return this._userDataWriter.convertValue(this._document.data.value,n.serverTimestamps)}}get(n,l={}){if(this._document){let d=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",n));if(null!==d)return this._userDataWriter.convertValue(d,l.serverTimestamps)}}};let QueryDocumentSnapshot=class QueryDocumentSnapshot extends DocumentSnapshot{data(n={}){return super.data(n)}};let QuerySnapshot=class QuerySnapshot{constructor(n,l,d,f){this._firestore=n,this._userDataWriter=l,this._snapshot=f,this.metadata=new SnapshotMetadata(f.hasPendingWrites,f.fromCache),this.query=d}get docs(){let n=[];return this.forEach(l=>n.push(l)),n}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(n,l){this._snapshot.docs.forEach(d=>{n.call(l,new QueryDocumentSnapshot(this._firestore,this._userDataWriter,d.key,d,new SnapshotMetadata(this._snapshot.mutatedKeys.has(d.key),this._snapshot.fromCache),this.query.converter))})}docChanges(n={}){let l=!!n.includeMetadataChanges;if(l&&this._snapshot.excludesMetadataChanges)throw new FirestoreError(ty.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===l||(this._cachedChanges=function(n,l){if(n._snapshot.oldDocs.isEmpty()){let l=0;return n._snapshot.docChanges.map(d=>{let f=new QueryDocumentSnapshot(n._firestore,n._userDataWriter,d.doc.key,d.doc,new SnapshotMetadata(n._snapshot.mutatedKeys.has(d.doc.key),n._snapshot.fromCache),n.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let d=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(n=>l||3!==n.type).map(l=>{let f=new QueryDocumentSnapshot(n._firestore,n._userDataWriter,l.doc.key,l.doc,new SnapshotMetadata(n._snapshot.mutatedKeys.has(l.doc.key),n._snapshot.fromCache),n.query.converter),_=-1,E=-1;return 0!==l.type&&(_=d.indexOf(l.doc.key),d=d.delete(l.doc.key)),1!==l.type&&(E=(d=d.add(l.doc)).indexOf(l.doc.key)),{type:__PRIVATE_resultChangeType(l.type),doc:f,oldIndex:_,newIndex:E}})}}(this,l),this._cachedChangesIncludeMetadataChanges=l),this._cachedChanges}};function __PRIVATE_resultChangeType(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fail()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getDoc(n){n=__PRIVATE_cast(n,DocumentReference);let l=__PRIVATE_cast(n.firestore,Firestore);return __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(ensureFirestoreConfigured(l),n._key).then(d=>__PRIVATE_convertToDocSnapshot(l,n,d))}let __PRIVATE_ExpUserDataWriter=class __PRIVATE_ExpUserDataWriter extends AbstractUserDataWriter{constructor(n){super(),this.firestore=n}convertBytes(n){return new Bytes(n)}convertReference(n){let l=this.convertDocumentKey(n,this.firestore._databaseId);return new DocumentReference(this.firestore,null,l)}};function getDocs(n){n=__PRIVATE_cast(n,Query);let l=__PRIVATE_cast(n.firestore,Firestore),d=ensureFirestoreConfigured(l),f=new __PRIVATE_ExpUserDataWriter(l);return __PRIVATE_validateHasExplicitOrderByForLimitToLast(n._query),__PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(d,n._query).then(d=>new QuerySnapshot(l,f,n,d))}function setDoc(n,l,d){n=__PRIVATE_cast(n,DocumentReference);let f=__PRIVATE_cast(n.firestore,Firestore),_=__PRIVATE_applyFirestoreDataConverter(n.converter,l,d);return executeWrite(f,[__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(f),"setDoc",n._key,_,null!==n.converter,d).toMutation(n._key,Precondition.none())])}function addDoc(n,l){let d=__PRIVATE_cast(n.firestore,Firestore),f=doc(n),_=__PRIVATE_applyFirestoreDataConverter(n.converter,l);return executeWrite(d,[__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(n.firestore),"addDoc",f._key,_,null!==n.converter,{}).toMutation(f._key,Precondition.exists(!1))]).then(()=>f)}function executeWrite(n,l){return function(n,l){let d=new __PRIVATE_Deferred;return n.asyncQueue.enqueueAndForget(async()=>__PRIVATE_syncEngineWrite(await __PRIVATE_getSyncEngine(n),l,d)),d.promise}(ensureFirestoreConfigured(n),l)}function __PRIVATE_convertToDocSnapshot(n,l,d){let f=d.docs.get(l._key),_=new __PRIVATE_ExpUserDataWriter(n);return new DocumentSnapshot(n,_,l._key,f,new SnapshotMetadata(d.hasPendingWrites,d.fromCache),l.converter)}function serverTimestamp(){return new __PRIVATE_ServerTimestampFieldValueImpl("serverTimestamp")}new WeakMap,function(n=!0){tm=en.Jn,(0,en.Xd)(new ei.wA("firestore",(l,{instanceIdentifier:d,options:f})=>{let _=l.getProvider("app").getImmediate(),E=new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(l.getProvider("auth-internal")),new __PRIVATE_FirebaseAppCheckTokenProvider(l.getProvider("app-check-internal")),function(n,l){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new FirestoreError(ty.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new DatabaseId(n.options.projectId,l)}(_,d),_);return f=Object.assign({useFetchStreams:n},f),E._setSettings(f),E},"PUBLIC").setMultipleInstances(!0)),(0,en.KN)(t_,"4.4.1",void 0),(0,en.KN)(t_,"4.4.1","esm2017")}()},4444:function(n,l,d){"use strict";d.d(l,{BH:function(){return Deferred},G6:function(){return isSafari},L:function(){return base64urlEncodeWithoutPadding},LL:function(){return ErrorFactory},P0:function(){return getDefaultEmulatorHostnameAndPort},Pz:function(){return getExperimentalSetting},Sg:function(){return createMockUserToken},ZR:function(){return FirebaseError},aH:function(){return getDefaultAppConfig},b$:function(){return isReactNative},eu:function(){return validateIndexedDBOpenable},hl:function(){return isIndexedDBAvailable},m9:function(){return getModularInstance},ne:function(){return createSubscribe},pd:function(){return extractQuerystring},q4:function(){return getDefaultEmulatorHost},ru:function(){return isBrowserExtension},tV:function(){return base64Decode},uI:function(){return isMobileCordova},vZ:function(){return deepEqual},w1:function(){return isIE},xO:function(){return querystring},xb:function(){return isEmpty},z$:function(){return getUA},zd:function(){return querystringDecode}});var f=d(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let stringToByteArray$1=function(n){let l=[],d=0;for(let f=0;f<n.length;f++){let _=n.charCodeAt(f);_<128?l[d++]=_:(_<2048?l[d++]=_>>6|192:((64512&_)==55296&&f+1<n.length&&(64512&n.charCodeAt(f+1))==56320?(_=65536+((1023&_)<<10)+(1023&n.charCodeAt(++f)),l[d++]=_>>18|240,l[d++]=_>>12&63|128):l[d++]=_>>12|224,l[d++]=_>>6&63|128),l[d++]=63&_|128)}return l},byteArrayToString=function(n){let l=[],d=0,f=0;for(;d<n.length;){let _=n[d++];if(_<128)l[f++]=String.fromCharCode(_);else if(_>191&&_<224){let E=n[d++];l[f++]=String.fromCharCode((31&_)<<6|63&E)}else if(_>239&&_<365){let E=n[d++],L=n[d++],z=n[d++],et=((7&_)<<18|(63&E)<<12|(63&L)<<6|63&z)-65536;l[f++]=String.fromCharCode(55296+(et>>10)),l[f++]=String.fromCharCode(56320+(1023&et))}else{let E=n[d++],L=n[d++];l[f++]=String.fromCharCode((15&_)<<12|(63&E)<<6|63&L)}}return l.join("")},_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(n,l){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let d=l?this.byteToCharMapWebSafe_:this.byteToCharMap_,f=[];for(let l=0;l<n.length;l+=3){let _=n[l],E=l+1<n.length,L=E?n[l+1]:0,z=l+2<n.length,et=z?n[l+2]:0,er=_>>2,en=(3&_)<<4|L>>4,ei=(15&L)<<2|et>>6,es=63&et;z||(es=64,E||(ei=64)),f.push(d[er],d[en],d[ei],d[es])}return f.join("")},encodeString(n,l){return this.HAS_NATIVE_SUPPORT&&!l?btoa(n):this.encodeByteArray(stringToByteArray$1(n),l)},decodeString(n,l){return this.HAS_NATIVE_SUPPORT&&!l?atob(n):byteArrayToString(this.decodeStringToByteArray(n,l))},decodeStringToByteArray(n,l){this.init_();let d=l?this.charToByteMapWebSafe_:this.charToByteMap_,f=[];for(let l=0;l<n.length;){let _=d[n.charAt(l++)],E=l<n.length,L=E?d[n.charAt(l)]:0;++l;let z=l<n.length,et=z?d[n.charAt(l)]:64;++l;let er=l<n.length,en=er?d[n.charAt(l)]:64;if(++l,null==_||null==L||null==et||null==en)throw new DecodeBase64StringError;let ei=_<<2|L>>4;if(f.push(ei),64!==et){let n=L<<4&240|et>>2;if(f.push(n),64!==en){let n=et<<6&192|en;f.push(n)}}}return f},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};let DecodeBase64StringError=class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};let base64Encode=function(n){let l=stringToByteArray$1(n);return _.encodeByteArray(l,!0)},base64urlEncodeWithoutPadding=function(n){return base64Encode(n).replace(/\./g,"")},base64Decode=function(n){try{return _.decodeString(n,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getGlobal(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==d.g)return d.g;throw Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let getDefaultsFromGlobal=()=>getGlobal().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(void 0===f||void 0===f.env)return;let n=f.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},getDefaultsFromCookie=()=>{let n;if("undefined"==typeof document)return;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}let l=n&&base64Decode(n[1]);return l&&JSON.parse(l)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},getDefaultEmulatorHost=n=>{var l,d;return null===(d=null===(l=getDefaults())||void 0===l?void 0:l.emulatorHosts)||void 0===d?void 0:d[n]},getDefaultEmulatorHostnameAndPort=n=>{let l=getDefaultEmulatorHost(n);if(!l)return;let d=l.lastIndexOf(":");if(d<=0||d+1===l.length)throw Error(`Invalid host ${l} with no separate hostname and port!`);let f=parseInt(l.substring(d+1),10);return"["===l[0]?[l.substring(1,d-1),f]:[l.substring(0,d),f]},getDefaultAppConfig=()=>{var n;return null===(n=getDefaults())||void 0===n?void 0:n.config},getExperimentalSetting=n=>{var l;return null===(l=getDefaults())||void 0===l?void 0:l[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Deferred=class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,l)=>{this.resolve=n,this.reject=l})}wrapCallback(n){return(l,d)=>{l?this.reject(l):this.resolve(d),"function"==typeof n&&(this.promise.catch(()=>{}),1===n.length?n(l):n(l,d))}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createMockUserToken(n,l){if(n.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let d=l||"demo-project",f=n.iat||0,_=n.sub||n.user_id;if(!_)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let E=Object.assign({iss:`https://securetoken.google.com/${d}`,aud:d,iat:f,exp:f+3600,auth_time:f,sub:_,user_id:_,firebase:{sign_in_provider:"custom",identities:{}}},n);return[base64urlEncodeWithoutPadding(JSON.stringify({alg:"none",type:"JWT"})),base64urlEncodeWithoutPadding(JSON.stringify(E)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function isMobileCordova(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isNode(){var n;let l=null===(n=getDefaults())||void 0===n?void 0:n.forceEnvironment;if("node"===l)return!0;if("browser"===l)return!1;try{return"[object process]"===Object.prototype.toString.call(d.g.process)}catch(n){return!1}}function isBrowserExtension(){let n="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof n&&void 0!==n.id}function isReactNative(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function isIE(){let n=getUA();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function isSafari(){return!isNode()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function isIndexedDBAvailable(){try{return"object"==typeof indexedDB}catch(n){return!1}}function validateIndexedDBOpenable(){return new Promise((n,l)=>{try{let d=!0,f="validate-browser-context-for-indexeddb-analytics-module",_=self.indexedDB.open(f);_.onsuccess=()=>{_.result.close(),d||self.indexedDB.deleteDatabase(f),n(!0)},_.onupgradeneeded=()=>{d=!1},_.onerror=()=>{var n;l((null===(n=_.error)||void 0===n?void 0:n.message)||"")}}catch(n){l(n)}})}let FirebaseError=class FirebaseError extends Error{constructor(n,l,d){super(l),this.code=n,this.customData=d,this.name="FirebaseError",Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}};let ErrorFactory=class ErrorFactory{constructor(n,l,d){this.service=n,this.serviceName=l,this.errors=d}create(n,...l){let d=l[0]||{},f=`${this.service}/${n}`,_=this.errors[n],E=_?replaceTemplate(_,d):"Error",L=`${this.serviceName}: ${E} (${f}).`,z=new FirebaseError(f,L,d);return z}};function replaceTemplate(n,l){return n.replace(E,(n,d)=>{let f=l[d];return null!=f?String(f):`<${d}?>`})}let E=/\{\$([^}]+)}/g;function isEmpty(n){for(let l in n)if(Object.prototype.hasOwnProperty.call(n,l))return!1;return!0}function deepEqual(n,l){if(n===l)return!0;let d=Object.keys(n),f=Object.keys(l);for(let _ of d){if(!f.includes(_))return!1;let d=n[_],E=l[_];if(isObject(d)&&isObject(E)){if(!deepEqual(d,E))return!1}else if(d!==E)return!1}for(let n of f)if(!d.includes(n))return!1;return!0}function isObject(n){return null!==n&&"object"==typeof n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(n){let l=[];for(let[d,f]of Object.entries(n))Array.isArray(f)?f.forEach(n=>{l.push(encodeURIComponent(d)+"="+encodeURIComponent(n))}):l.push(encodeURIComponent(d)+"="+encodeURIComponent(f));return l.length?"&"+l.join("&"):""}function querystringDecode(n){let l={},d=n.replace(/^\?/,"").split("&");return d.forEach(n=>{if(n){let[d,f]=n.split("=");l[decodeURIComponent(d)]=decodeURIComponent(f)}}),l}function extractQuerystring(n){let l=n.indexOf("?");if(!l)return"";let d=n.indexOf("#",l);return n.substring(l,d>0?d:void 0)}function createSubscribe(n,l){let d=new ObserverProxy(n,l);return d.subscribe.bind(d)}let ObserverProxy=class ObserverProxy{constructor(n,l){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=l,this.task.then(()=>{n(this)}).catch(n=>{this.error(n)})}next(n){this.forEachObserver(l=>{l.next(n)})}error(n){this.forEachObserver(l=>{l.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,l,d){let f;if(void 0===n&&void 0===l&&void 0===d)throw Error("Missing Observer.");void 0===(f=implementsAnyMethods(n,["next","error","complete"])?n:{next:n,error:l,complete:d}).next&&(f.next=noop),void 0===f.error&&(f.error=noop),void 0===f.complete&&(f.complete=noop);let _=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?f.error(this.finalError):f.complete()}catch(n){}}),this.observers.push(f),_}unsubscribeOne(n){void 0!==this.observers&&void 0!==this.observers[n]&&(delete this.observers[n],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let l=0;l<this.observers.length;l++)this.sendOne(l,n)}sendOne(n,l){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[n])try{l(this.observers[n])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(n){this.finalized||(this.finalized=!0,void 0!==n&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function implementsAnyMethods(n,l){if("object"!=typeof n||null===n)return!1;for(let d of l)if(d in n&&"function"==typeof n[d])return!0;return!1}function noop(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(n){return n&&n._delegate?n._delegate:n}},2711:function(n,l,d){n.exports=function(){"use strict";var n="undefined"!=typeof window?window:void 0!==d.g?d.g:"undefined"!=typeof self?self:{},l="Expected a function",f=NaN,_=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,z=/^0o[0-7]+$/i,et=parseInt,er="object"==typeof n&&n&&n.Object===Object&&n,en="object"==typeof self&&self&&self.Object===Object&&self,ei=er||en||Function("return this")(),es=Object.prototype.toString,eo=Math.max,el=Math.min,b=function(){return ei.Date.now()};function v(n,d,f){var _,E,L,z,et,er,en=0,ei=!1,es=!1,eu=!0;if("function"!=typeof n)throw TypeError(l);function y(l){var d=_,f=E;return _=E=void 0,en=l,z=n.apply(f,d)}function h(n){var l=n-er;return void 0===er||l>=d||l<0||es&&n-en>=L}function k(){var n,l=b();if(h(l))return x(l);et=setTimeout(k,(n=d-(l-er),es?el(n,L-(l-en)):n))}function x(n){return et=void 0,eu&&_?y(n):(_=E=void 0,z)}function O(){var n,l=b(),f=h(l);if(_=arguments,E=this,er=l,f){if(void 0===et)return en=n=er,et=setTimeout(k,d),ei?y(n):z;if(es)return et=setTimeout(k,d),y(er)}return void 0===et&&(et=setTimeout(k,d)),z}return d=w(d)||0,g(f)&&(ei=!!f.leading,L=(es="maxWait"in f)?eo(w(f.maxWait)||0,d):L,eu="trailing"in f?!!f.trailing:eu),O.cancel=function(){void 0!==et&&clearTimeout(et),en=0,_=er=E=et=void 0},O.flush=function(){return void 0===et?z:x(b())},O}function g(n){var l=typeof n;return!!n&&("object"==l||"function"==l)}function w(n){if("number"==typeof n)return n;if("symbol"==typeof(l=n)||l&&"object"==typeof l&&"[object Symbol]"==es.call(l))return f;if(g(n)){var l,d="function"==typeof n.valueOf?n.valueOf():n;n=g(d)?d+"":d}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(_,"");var er=L.test(n);return er||z.test(n)?et(n.slice(2),er?2:8):E.test(n)?f:+n}var y=function(n,d,f){var _=!0,E=!0;if("function"!=typeof n)throw TypeError(l);return g(f)&&(_="leading"in f?!!f.leading:_,E="trailing"in f?!!f.trailing:E),v(n,d,{leading:_,maxWait:d,trailing:E})},eu=NaN,ec=/^\s+|\s+$/g,eh=/^[-+]0x[0-9a-f]+$/i,ef=/^0b[01]+$/i,ep=/^0o[0-7]+$/i,e_=parseInt,em="object"==typeof n&&n&&n.Object===Object&&n,eg="object"==typeof self&&self&&self.Object===Object&&self,ey=em||eg||Function("return this")(),ev=Object.prototype.toString,eE=Math.max,eT=Math.min,S=function(){return ey.Date.now()};function D(n){var l=typeof n;return!!n&&("object"==l||"function"==l)}function H(n){if("number"==typeof n)return n;if("symbol"==typeof(l=n)||l&&"object"==typeof l&&"[object Symbol]"==ev.call(l))return eu;if(D(n)){var l,d="function"==typeof n.valueOf?n.valueOf():n;n=D(d)?d+"":d}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(ec,"");var f=ef.test(n);return f||ep.test(n)?e_(n.slice(2),f?2:8):eh.test(n)?eu:+n}var $=function(n,l,d){var f,_,E,L,z,et,er=0,en=!1,ei=!1,es=!0;if("function"!=typeof n)throw TypeError("Expected a function");function m(l){var d=f,E=_;return f=_=void 0,er=l,L=n.apply(E,d)}function p(n){var d=n-et;return void 0===et||d>=l||d<0||ei&&n-er>=E}function b(){var n,d=S();if(p(d))return v(d);z=setTimeout(b,(n=l-(d-et),ei?eT(n,E-(d-er)):n))}function v(n){return z=void 0,es&&f?m(n):(f=_=void 0,L)}function g(){var n,d=S(),E=p(d);if(f=arguments,_=this,et=d,E){if(void 0===z)return er=n=et,z=setTimeout(b,l),en?m(n):L;if(ei)return z=setTimeout(b,l),m(et)}return void 0===z&&(z=setTimeout(b,l)),L}return l=H(l)||0,D(d)&&(en=!!d.leading,E=(ei="maxWait"in d)?eE(H(d.maxWait)||0,l):E,es="trailing"in d?!!d.trailing:es),g.cancel=function(){void 0!==z&&clearTimeout(z),er=0,f=et=_=z=void 0},g.flush=function(){return void 0===z?L:v(S())},g},W=function(){};function P(n){n&&n.forEach(function(n){var l=Array.prototype.slice.call(n.addedNodes),d=Array.prototype.slice.call(n.removedNodes);if(function e(n){var l=void 0,d=void 0;for(l=0;l<n.length;l+=1)if((d=n[l]).dataset&&d.dataset.aos||d.children&&e(d.children))return!0;return!1}(l.concat(d)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var eI={isSupported:function(){return!!Y()},ready:function(n,l){var d=window.document,f=new(Y())(P);W=l,f.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(n,l){if(!(n instanceof l))throw TypeError("Cannot call a class as a function")},eP=function(){function e(n,l){for(var d=0;d<l.length;d++){var f=l[d];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(n,f.key,f)}}return function(n,l,d){return l&&e(n.prototype,l),d&&e(n,d),n}}(),eA=Object.assign||function(n){for(var l=1;l<arguments.length;l++){var d=arguments[l];for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(n[f]=d[f])}return n},ew=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,eR=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,eS=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,eV=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var eC=new(function(){function e(){B(this,e)}return eP(e,[{key:"phone",value:function(){var n=R();return!(!ew.test(n)&&!eR.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=R();return!(!eS.test(n)&&!eV.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(n,l){var d=void 0;return eC.ie11()?(d=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!0,{detail:l}):d=new CustomEvent(n,{detail:l}),document.dispatchEvent(d)},X=function(n){return n.forEach(function(n,l){var d,f,_,E,L,z;return d=window.pageYOffset,f=n.options,_=n.position,E=n.node,n.data,L=function(){var l;n.animated&&((l=f.animatedClassNames)&&l.forEach(function(n){return E.classList.remove(n)}),V("aos:out",E),n.options.id&&V("aos:in:"+n.options.id,E),n.animated=!1)},void(f.mirror&&d>=_.out&&!f.once?L():d>=_.in?n.animated||((z=f.animatedClassNames)&&z.forEach(function(n){return E.classList.add(n)}),V("aos:in",E),n.options.id&&V("aos:in:"+n.options.id,E),n.animated=!0):n.animated&&!f.once&&L())})},Z=function(n){for(var l=0,d=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)l+=n.offsetLeft-("BODY"!=n.tagName?n.scrollLeft:0),d+=n.offsetTop-("BODY"!=n.tagName?n.scrollTop:0),n=n.offsetParent;return{top:d,left:l}},ee=function(n,l,d){var f=n.getAttribute("data-aos-"+l);if(void 0!==f){if("true"===f)return!0;if("false"===f)return!1}return f||d},ne=function(){var n=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(n,function(n){return{node:n}})},ek=[],eD=!1,eO={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){var n,l;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(eD=!0),eD&&(n=ek,l=eO,n.forEach(function(n,d){var f,_,E,L,z,et=ee(n.node,"mirror",l.mirror),er=ee(n.node,"once",l.once),en=ee(n.node,"id"),ei=l.useClassNames&&n.node.getAttribute("data-aos"),es=[l.animatedClassName].concat(ei?ei.split(" "):[]).filter(function(n){return"string"==typeof n});l.initClassName&&n.node.classList.add(l.initClassName),n.position={in:function(n,l,d){var f=window.innerHeight,_=ee(n,"anchor"),E=ee(n,"anchor-placement"),L=Number(ee(n,"offset",E?0:l)),z=E||d,et=n;_&&document.querySelectorAll(_)&&(et=document.querySelectorAll(_)[0]);var er=Z(et).top-f;switch(z){case"top-bottom":break;case"center-bottom":er+=et.offsetHeight/2;break;case"bottom-bottom":er+=et.offsetHeight;break;case"top-center":er+=f/2;break;case"center-center":er+=f/2+et.offsetHeight/2;break;case"bottom-center":er+=f/2+et.offsetHeight;break;case"top-top":er+=f;break;case"bottom-top":er+=f+et.offsetHeight;break;case"center-top":er+=f+et.offsetHeight/2}return er+L}(n.node,l.offset,l.anchorPlacement),out:et&&(f=n.node,_=l.offset,window.innerHeight,E=ee(f,"anchor"),L=ee(f,"offset",_),z=f,E&&document.querySelectorAll(E)&&(z=document.querySelectorAll(E)[0]),Z(z).top+z.offsetHeight-L)},n.options={once:er,mirror:et,animatedClassNames:es,id:en}}),X(ek=n),window.addEventListener("scroll",y(function(){X(ek,eO.once)},eO.throttleDelay)))},se=function(){if(ek=ne(),de(eO.disable)||re())return ue();ce()},ue=function(){ek.forEach(function(n,l){n.node.removeAttribute("data-aos"),n.node.removeAttribute("data-aos-easing"),n.node.removeAttribute("data-aos-duration"),n.node.removeAttribute("data-aos-delay"),eO.initClassName&&n.node.classList.remove(eO.initClassName),eO.animatedClassName&&n.node.classList.remove(eO.animatedClassName)})},de=function(n){return!0===n||"mobile"===n&&eC.mobile()||"phone"===n&&eC.phone()||"tablet"===n&&eC.tablet()||"function"==typeof n&&!0===n()};return{init:function(n){return eO=eA(eO,n),ek=ne(),eO.disableMutationObserver||eI.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),eO.disableMutationObserver=!0),eO.disableMutationObserver||eI.ready("[data-aos]",se),de(eO.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",eO.easing),document.querySelector("body").setAttribute("data-aos-duration",eO.duration),document.querySelector("body").setAttribute("data-aos-delay",eO.delay),-1===["DOMContentLoaded","load"].indexOf(eO.startEvent)?document.addEventListener(eO.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===eO.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,eO.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,eO.debounceDelay,!0)),ek)},refresh:ce,refreshHard:se}}()},9548:function(n,l,d){"use strict";var f=d(4836);Object.defineProperty(l,"__esModule",{value:!0}),l.BroadcastChannel=BroadcastChannel,l.apiBaseUrl=apiBaseUrl,l.fetchData=fetchData,l.now=now;var _=f(d(4687)),E=f(d(8416)),L=f(d(7156));function ownKeys(n,l){var d=Object.keys(n);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);l&&(f=f.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),d.push.apply(d,f)}return d}function _objectSpread(n){for(var l=1;l<arguments.length;l++){var d=null!=arguments[l]?arguments[l]:{};l%2?ownKeys(Object(d),!0).forEach(function(l){(0,E.default)(n,l,d[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(d)):ownKeys(Object(d)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(d,l))})}return n}function fetchData(n,l,d){return _fetchData.apply(this,arguments)}function _fetchData(){return(_fetchData=(0,L.default)(_.default.mark(function _callee(n,l,d){var f,E,L,z,et,er,en,ei,es,eo=arguments;return _.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return E=(f=eo.length>3&&void 0!==eo[3]?eo[3]:{}).ctx,z=void 0===(L=f.req)?null==E?void 0:E.req:L,et="".concat(apiBaseUrl(l),"/").concat(n),_.prev=2,en={headers:_objectSpread({"Content-Type":"application/json"},null!=z&&null!==(er=z.headers)&&void 0!==er&&er.cookie?{cookie:z.headers.cookie}:{})},null!=z&&z.body&&(en.body=JSON.stringify(z.body),en.method="POST"),_.next=7,fetch(et,en);case 7:return ei=_.sent,_.next=10,ei.json();case 10:if(es=_.sent,ei.ok){_.next=13;break}throw es;case 13:return _.abrupt("return",Object.keys(es).length>0?es:null);case 16:return _.prev=16,_.t0=_.catch(2),d.error("CLIENT_FETCH_ERROR",{error:_.t0,url:et}),_.abrupt("return",null);case 20:case"end":return _.stop()}},_callee,null,[[2,16]])}))).apply(this,arguments)}function apiBaseUrl(n){return"undefined"==typeof window?"".concat(n.baseUrlServer).concat(n.basePathServer):n.basePath}function now(){return Math.floor(Date.now()/1e3)}function BroadcastChannel(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(l){var handler=function(d){if(d.key===n){var f,_=JSON.parse(null!==(f=d.newValue)&&void 0!==f?f:"{}");(null==_?void 0:_.event)==="session"&&null!=_&&_.data&&l(_)}};return window.addEventListener("storage",handler),function(){return window.removeEventListener("storage",handler)}},post:function(l){if("undefined"!=typeof window)try{localStorage.setItem(n,JSON.stringify(_objectSpread(_objectSpread({},l),{},{timestamp:now()})))}catch(n){}}}}},6925:function(n,l,d){"use strict";var f=d(4836);Object.defineProperty(l,"__esModule",{value:!0}),l.UnsupportedStrategy=l.UnknownError=l.OAuthCallbackError=l.MissingSecret=l.MissingAuthorize=l.MissingAdapterMethods=l.MissingAdapter=l.MissingAPIRoute=l.InvalidCallbackUrl=l.AccountNotLinkedError=void 0,l.adapterErrorHandler=adapterErrorHandler,l.capitalize=capitalize,l.eventsErrorHandler=eventsErrorHandler,l.upperSnake=upperSnake;var _=f(d(4687)),E=f(d(7156)),L=f(d(6115)),z=f(d(8416)),et=f(d(6690)),er=f(d(9728)),en=f(d(1655)),ei=f(d(4993)),es=f(d(3808));function _createSuper(n){var l=_isNativeReflectConstruct();return function(){var d,f=(0,es.default)(n);if(l){var _=(0,es.default)(this).constructor;d=Reflect.construct(f,arguments,_)}else d=f.apply(this,arguments);return(0,ei.default)(this,d)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}var eo=function(n){(0,en.default)(UnknownError,n);var l=_createSuper(UnknownError);function UnknownError(n){var d,f;return(0,et.default)(this,UnknownError),(f=l.call(this,null!==(d=null==n?void 0:n.message)&&void 0!==d?d:n)).name="UnknownError",f.code=n.code,n instanceof Error&&(f.stack=n.stack),f}return(0,er.default)(UnknownError,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,stack:this.stack}}}]),UnknownError}((0,f(d(3496)).default)(Error));l.UnknownError=eo;var el=function(n){(0,en.default)(OAuthCallbackError,n);var l=_createSuper(OAuthCallbackError);function OAuthCallbackError(){var n;(0,et.default)(this,OAuthCallbackError);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","OAuthCallbackError"),n}return(0,er.default)(OAuthCallbackError)}(eo);l.OAuthCallbackError=el;var eu=function(n){(0,en.default)(AccountNotLinkedError,n);var l=_createSuper(AccountNotLinkedError);function AccountNotLinkedError(){var n;(0,et.default)(this,AccountNotLinkedError);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","AccountNotLinkedError"),n}return(0,er.default)(AccountNotLinkedError)}(eo);l.AccountNotLinkedError=eu;var ec=function(n){(0,en.default)(MissingAPIRoute,n);var l=_createSuper(MissingAPIRoute);function MissingAPIRoute(){var n;(0,et.default)(this,MissingAPIRoute);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","MissingAPIRouteError"),(0,z.default)((0,L.default)(n),"code","MISSING_NEXTAUTH_API_ROUTE_ERROR"),n}return(0,er.default)(MissingAPIRoute)}(eo);l.MissingAPIRoute=ec;var eh=function(n){(0,en.default)(MissingSecret,n);var l=_createSuper(MissingSecret);function MissingSecret(){var n;(0,et.default)(this,MissingSecret);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","MissingSecretError"),(0,z.default)((0,L.default)(n),"code","NO_SECRET"),n}return(0,er.default)(MissingSecret)}(eo);l.MissingSecret=eh;var ef=function(n){(0,en.default)(MissingAuthorize,n);var l=_createSuper(MissingAuthorize);function MissingAuthorize(){var n;(0,et.default)(this,MissingAuthorize);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","MissingAuthorizeError"),(0,z.default)((0,L.default)(n),"code","CALLBACK_CREDENTIALS_HANDLER_ERROR"),n}return(0,er.default)(MissingAuthorize)}(eo);l.MissingAuthorize=ef;var ep=function(n){(0,en.default)(MissingAdapter,n);var l=_createSuper(MissingAdapter);function MissingAdapter(){var n;(0,et.default)(this,MissingAdapter);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","MissingAdapterError"),(0,z.default)((0,L.default)(n),"code","EMAIL_REQUIRES_ADAPTER_ERROR"),n}return(0,er.default)(MissingAdapter)}(eo);l.MissingAdapter=ep;var e_=function(n){(0,en.default)(MissingAdapterMethods,n);var l=_createSuper(MissingAdapterMethods);function MissingAdapterMethods(){var n;(0,et.default)(this,MissingAdapterMethods);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","MissingAdapterMethodsError"),(0,z.default)((0,L.default)(n),"code","MISSING_ADAPTER_METHODS_ERROR"),n}return(0,er.default)(MissingAdapterMethods)}(eo);l.MissingAdapterMethods=e_;var em=function(n){(0,en.default)(UnsupportedStrategy,n);var l=_createSuper(UnsupportedStrategy);function UnsupportedStrategy(){var n;(0,et.default)(this,UnsupportedStrategy);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","UnsupportedStrategyError"),(0,z.default)((0,L.default)(n),"code","CALLBACK_CREDENTIALS_JWT_ERROR"),n}return(0,er.default)(UnsupportedStrategy)}(eo);l.UnsupportedStrategy=em;var eg=function(n){(0,en.default)(InvalidCallbackUrl,n);var l=_createSuper(InvalidCallbackUrl);function InvalidCallbackUrl(){var n;(0,et.default)(this,InvalidCallbackUrl);for(var d=arguments.length,f=Array(d),_=0;_<d;_++)f[_]=arguments[_];return n=l.call.apply(l,[this].concat(f)),(0,z.default)((0,L.default)(n),"name","InvalidCallbackUrl"),(0,z.default)((0,L.default)(n),"code","INVALID_CALLBACK_URL_ERROR"),n}return(0,er.default)(InvalidCallbackUrl)}(eo);function upperSnake(n){return n.replace(/([A-Z])/g,"_$1").toUpperCase()}function capitalize(n){return"".concat(n[0].toUpperCase()).concat(n.slice(1))}function eventsErrorHandler(n,l){return Object.keys(n).reduce(function(d,f){return d[f]=(0,E.default)(_.default.mark(function _callee(){var d,E=arguments;return _.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,d=n[f],_.next=4,d.apply(void 0,E);case 4:return _.abrupt("return",_.sent);case 7:_.prev=7,_.t0=_.catch(0),l.error("".concat(upperSnake(f),"_EVENT_ERROR"),_.t0);case 10:case"end":return _.stop()}},_callee,null,[[0,7]])})),d},{})}function adapterErrorHandler(n,l){if(n)return Object.keys(n).reduce(function(d,f){return d[f]=(0,E.default)(_.default.mark(function _callee2(){var d,E,L,z,et,er=arguments;return _.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:for(_.prev=0,E=Array(d=er.length),L=0;L<d;L++)E[L]=er[L];return l.debug("adapter_".concat(f),{args:E}),z=n[f],_.next=6,z.apply(void 0,E);case 6:return _.abrupt("return",_.sent);case 9:throw _.prev=9,_.t0=_.catch(0),l.error("adapter_error_".concat(f),_.t0),(et=new eo(_.t0)).name="".concat(capitalize(f),"Error"),et;case 15:case"end":return _.stop()}},_callee2,null,[[0,9]])})),d},{})}l.InvalidCallbackUrl=eg},3299:function(n,l,d){"use strict";var f,_,E,L,z,et=d(3454),er=d(4836),en=d(8698);Object.defineProperty(l,"__esModule",{value:!0});var ei={SessionContext:!0,useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};l.SessionContext=void 0,l.SessionProvider=SessionProvider,l.getCsrfToken=getCsrfToken,l.getProviders=getProviders,l.getSession=getSession,l.signIn=signIn,l.signOut=signOut,l.useSession=useSession;var es=er(d(4687)),eo=er(d(8416)),el=er(d(7156)),eu=er(d(7424)),ec=_interopRequireWildcard(d(7294)),eh=_interopRequireWildcard(d(6553)),ef=er(d(762)),ep=d(9548),e_=d(5893),em=d(527);function _getRequireWildcardCache(n){if("function"!=typeof WeakMap)return null;var l=new WeakMap,d=new WeakMap;return(_getRequireWildcardCache=function(n){return n?d:l})(n)}function _interopRequireWildcard(n,l){if(!l&&n&&n.__esModule)return n;if(null===n||"object"!==en(n)&&"function"!=typeof n)return{default:n};var d=_getRequireWildcardCache(l);if(d&&d.has(n))return d.get(n);var f={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in n)if("default"!==E&&Object.prototype.hasOwnProperty.call(n,E)){var L=_?Object.getOwnPropertyDescriptor(n,E):null;L&&(L.get||L.set)?Object.defineProperty(f,E,L):f[E]=n[E]}return f.default=n,d&&d.set(n,f),f}function ownKeys(n,l){var d=Object.keys(n);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);l&&(f=f.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),d.push.apply(d,f)}return d}function _objectSpread(n){for(var l=1;l<arguments.length;l++){var d=null!=arguments[l]?arguments[l]:{};l%2?ownKeys(Object(d),!0).forEach(function(l){(0,eo.default)(n,l,d[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(d)):ownKeys(Object(d)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(d,l))})}return n}Object.keys(em).forEach(function(n){!("default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(ei,n))&&(n in l&&l[n]===em[n]||Object.defineProperty(l,n,{enumerable:!0,get:function(){return em[n]}}))});var eg={baseUrl:(0,ef.default)(null!==(f=et.env.NEXTAUTH_URL)&&void 0!==f?f:et.env.VERCEL_URL).origin,basePath:(0,ef.default)(et.env.NEXTAUTH_URL).path,baseUrlServer:(0,ef.default)(null!==(_=null!==(E=et.env.NEXTAUTH_URL_INTERNAL)&&void 0!==E?E:et.env.NEXTAUTH_URL)&&void 0!==_?_:et.env.VERCEL_URL).origin,basePathServer:(0,ef.default)(null!==(L=et.env.NEXTAUTH_URL_INTERNAL)&&void 0!==L?L:et.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},ey=(0,ep.BroadcastChannel)(),ev=(0,eh.proxyLogger)(eh.default,eg.basePath);function useOnline(){var n=ec.useState("undefined"!=typeof navigator&&navigator.onLine),l=(0,eu.default)(n,2),d=l[0],f=l[1],setOnline=function(){return f(!0)},setOffline=function(){return f(!1)};return ec.useEffect(function(){return window.addEventListener("online",setOnline),window.addEventListener("offline",setOffline),function(){window.removeEventListener("online",setOnline),window.removeEventListener("offline",setOffline)}},[]),d}var eE=null===(z=ec.createContext)||void 0===z?void 0:z.call(ec,void 0);function useSession(n){if(!eE)throw Error("React Context is unavailable in Server Components");var l=ec.useContext(eE),d=null!=n?n:{},f=d.required,_=d.onUnauthenticated,E=f&&"unauthenticated"===l.status;return(ec.useEffect(function(){if(E){var n="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));_?_():window.location.href=n}},[E,_]),E)?{data:l.data,update:l.update,status:"loading"}:l}function getSession(n){return _getSession2.apply(this,arguments)}function _getSession2(){return(_getSession2=(0,el.default)(es.default.mark(function _callee3(n){var l,d;return es.default.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,ep.fetchData)("session",eg,ev,n);case 2:return d=f.sent,(null===(l=null==n?void 0:n.broadcast)||void 0===l||l)&&ey.post({event:"session",data:{trigger:"getSession"}}),f.abrupt("return",d);case 5:case"end":return f.stop()}},_callee3)}))).apply(this,arguments)}function getCsrfToken(n){return _getCsrfToken.apply(this,arguments)}function _getCsrfToken(){return(_getCsrfToken=(0,el.default)(es.default.mark(function _callee4(n){var l;return es.default.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,ep.fetchData)("csrf",eg,ev,n);case 2:return l=d.sent,d.abrupt("return",null==l?void 0:l.csrfToken);case 4:case"end":return d.stop()}},_callee4)}))).apply(this,arguments)}function getProviders(){return _getProviders.apply(this,arguments)}function _getProviders(){return(_getProviders=(0,el.default)(es.default.mark(function _callee5(){return es.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,ep.fetchData)("providers",eg,ev);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},_callee5)}))).apply(this,arguments)}function signIn(n,l,d){return _signIn.apply(this,arguments)}function _signIn(){return(_signIn=(0,el.default)(es.default.mark(function _callee6(n,l,d){var f,_,E,L,z,et,er,en,ei,eo,el,eu,ec,eh,ef,e_,em;return es.default.wrap(function(es){for(;;)switch(es.prev=es.next){case 0:return E=void 0===(_=(f=null!=l?l:{}).callbackUrl)?window.location.href:_,z=void 0===(L=f.redirect)||L,et=(0,ep.apiBaseUrl)(eg),es.next=4,getProviders();case 4:if(er=es.sent){es.next=8;break}return window.location.href="".concat(et,"/error"),es.abrupt("return");case 8:if(!(!n||!(n in er))){es.next=11;break}return window.location.href="".concat(et,"/signin?").concat(new URLSearchParams({callbackUrl:E})),es.abrupt("return");case 11:return en="credentials"===er[n].type,ei="email"===er[n].type,eo=en||ei,el="".concat(et,"/").concat(en?"callback":"signin","/").concat(n),eu="".concat(el).concat(d?"?".concat(new URLSearchParams(d)):""),es.t0=fetch,es.t1=eu,es.t2={"Content-Type":"application/x-www-form-urlencoded"},es.t3=URLSearchParams,es.t4=_objectSpread,es.t5=_objectSpread({},l),es.t6={},es.next=25,getCsrfToken();case 25:return es.t7=es.sent,es.t8=E,es.t9={csrfToken:es.t7,callbackUrl:es.t8,json:!0},es.t10=(0,es.t4)(es.t5,es.t6,es.t9),es.t11=new es.t3(es.t10),es.t12={method:"post",headers:es.t2,body:es.t11},es.next=33,(0,es.t0)(es.t1,es.t12);case 33:return ec=es.sent,es.next=36,ec.json();case 36:if(eh=es.sent,!(z||!eo)){es.next=42;break}return e_=null!==(ef=eh.url)&&void 0!==ef?ef:E,window.location.href=e_,e_.includes("#")&&window.location.reload(),es.abrupt("return");case 42:if(em=new URL(eh.url).searchParams.get("error"),!ec.ok){es.next=46;break}return es.next=46,eg._getSession({event:"storage"});case 46:return es.abrupt("return",{error:em,status:ec.status,ok:ec.ok,url:em?null:eh.url});case 47:case"end":return es.stop()}},_callee6)}))).apply(this,arguments)}function signOut(n){return _signOut.apply(this,arguments)}function _signOut(){return(_signOut=(0,el.default)(es.default.mark(function _callee7(n){var l,d,f,_,E,L,z,et,er;return es.default.wrap(function(en){for(;;)switch(en.prev=en.next){case 0:return f=void 0===(d=(null!=n?n:{}).callbackUrl)?window.location.href:d,_=(0,ep.apiBaseUrl)(eg),en.t0={"Content-Type":"application/x-www-form-urlencoded"},en.t1=URLSearchParams,en.next=6,getCsrfToken();case 6:return en.t2=en.sent,en.t3=f,en.t4={csrfToken:en.t2,callbackUrl:en.t3,json:!0},en.t5=new en.t1(en.t4),E={method:"post",headers:en.t0,body:en.t5},en.next=13,fetch("".concat(_,"/signout"),E);case 13:return L=en.sent,en.next=16,L.json();case 16:if(z=en.sent,ey.post({event:"session",data:{trigger:"signout"}}),!(null===(l=null==n?void 0:n.redirect)||void 0===l||l)){en.next=23;break}return er=null!==(et=z.url)&&void 0!==et?et:f,window.location.href=er,er.includes("#")&&window.location.reload(),en.abrupt("return");case 23:return en.next=25,eg._getSession({event:"storage"});case 25:return en.abrupt("return",z);case 26:case"end":return en.stop()}},_callee7)}))).apply(this,arguments)}function SessionProvider(n){if(!eE)throw Error("React Context is unavailable in Server Components");var l=n.children,d=n.basePath,f=n.refetchInterval,_=n.refetchWhenOffline;d&&(eg.basePath=d);var E=void 0!==n.session;eg._lastSync=E?(0,ep.now)():0;var L=ec.useState(function(){return E&&(eg._session=n.session),n.session}),z=(0,eu.default)(L,2),et=z[0],er=z[1],en=ec.useState(!E),ei=(0,eu.default)(en,2),eo=ei[0],eh=ei[1];ec.useEffect(function(){return eg._getSession=(0,el.default)(es.default.mark(function _callee(){var n,l,d=arguments;return es.default.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(n=(d.length>0&&void 0!==d[0]?d[0]:{}).event,f.prev=1,!((l="storage"===n)||void 0===eg._session)){f.next=10;break}return eg._lastSync=(0,ep.now)(),f.next=7,getSession({broadcast:!l});case 7:return eg._session=f.sent,er(eg._session),f.abrupt("return");case 10:if(!(!n||null===eg._session||(0,ep.now)()<eg._lastSync)){f.next=12;break}return f.abrupt("return");case 12:return eg._lastSync=(0,ep.now)(),f.next=15,getSession();case 15:eg._session=f.sent,er(eg._session),f.next=22;break;case 19:f.prev=19,f.t0=f.catch(1),ev.error("CLIENT_SESSION_ERROR",f.t0);case 22:return f.prev=22,eh(!1),f.finish(22);case 25:case"end":return f.stop()}},_callee,null,[[1,19,22,25]])})),eg._getSession(),function(){eg._lastSync=0,eg._session=void 0,eg._getSession=function(){}}},[]),ec.useEffect(function(){var n=ey.receive(function(){return eg._getSession({event:"storage"})});return function(){return n()}},[]),ec.useEffect(function(){var l=n.refetchOnWindowFocus,d=void 0===l||l,visibilityHandler=function(){d&&"visible"===document.visibilityState&&eg._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",visibilityHandler,!1),function(){return document.removeEventListener("visibilitychange",visibilityHandler,!1)}},[n.refetchOnWindowFocus]);var ef=useOnline(),em=!1!==_||ef;ec.useEffect(function(){if(f&&em){var n=setInterval(function(){eg._session&&eg._getSession({event:"poll"})},1e3*f);return function(){return clearInterval(n)}}},[f,em]);var eT=ec.useMemo(function(){return{data:et,status:eo?"loading":et?"authenticated":"unauthenticated",update:function(n){return(0,el.default)(es.default.mark(function _callee2(){var l;return es.default.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!(eo||!et)){d.next=2;break}return d.abrupt("return");case 2:return eh(!0),d.t0=ep.fetchData,d.t1=eg,d.t2=ev,d.next=8,getCsrfToken();case 8:return d.t3=d.sent,d.t4=n,d.t5={csrfToken:d.t3,data:d.t4},d.t6={body:d.t5},d.t7={req:d.t6},d.next=15,(0,d.t0)("session",d.t1,d.t2,d.t7);case 15:return l=d.sent,eh(!1),l&&(er(l),ey.post({event:"session",data:{trigger:"getSession"}})),d.abrupt("return",l);case 19:case"end":return d.stop()}},_callee2)}))()}}},[et,eo]);return(0,e_.jsx)(eE.Provider,{value:eT,children:l})}l.SessionContext=eE},527:function(n,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0})},6553:function(n,l,d){"use strict";var f=d(4836);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0,l.proxyLogger=proxyLogger,l.setLogger=setLogger;var _=f(d(8416)),E=d(6925);function ownKeys(n,l){var d=Object.keys(n);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);l&&(f=f.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),d.push.apply(d,f)}return d}function _objectSpread(n){for(var l=1;l<arguments.length;l++){var d=null!=arguments[l]?arguments[l]:{};l%2?ownKeys(Object(d),!0).forEach(function(l){(0,_.default)(n,l,d[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(d)):ownKeys(Object(d)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(d,l))})}return n}function formatError(n){if(n instanceof Error&&!(n instanceof E.UnknownError))return{message:n.message,stack:n.stack,name:n.name};if(hasErrorProperty(n)){var l;n.error=formatError(n.error),n.message=null!==(l=n.message)&&void 0!==l?l:n.error.message}return n}function hasErrorProperty(n){return!!(null!=n&&n.error)}var L={error:function(n,l){l=formatError(l),console.error("[next-auth][error][".concat(n,"]"),"\nhttps://next-auth.js.org/errors#".concat(n.toLowerCase()),l.message,l)},warn:function(n){console.warn("[next-auth][warn][".concat(n,"]"),"\nhttps://next-auth.js.org/warnings#".concat(n.toLowerCase()))},debug:function(n,l){console.log("[next-auth][debug][".concat(n,"]"),l)}};function setLogger(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;l||(L.debug=function(){}),n.error&&(L.error=n.error),n.warn&&(L.warn=n.warn),n.debug&&(L.debug=n.debug)}function proxyLogger(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,l=arguments.length>1?arguments[1]:void 0;try{if("undefined"==typeof window)return n;var d={},_loop=function(n){d[n]=function(d,f){L[n](d,f),"error"===n&&(f=formatError(f)),f.client=!0;var _="".concat(l,"/_log"),E=new URLSearchParams(_objectSpread({level:n,code:d},f));return navigator.sendBeacon?navigator.sendBeacon(_,E):fetch(_,{method:"POST",body:E,keepalive:!0})}};for(var f in n)_loop(f);return d}catch(n){return L}}l.default=L},762:function(n,l){"use strict";function parseUrl(n){var l;let d=new URL("http://localhost:3000/api/auth");n&&!n.startsWith("http")&&(n=`https://${n}`);let f=new URL(null!==(l=n)&&void 0!==l?l:d),_=("/"===f.pathname?d.pathname:f.pathname).replace(/\/$/,""),E=`${f.origin}${_}`;return{origin:f.origin,host:f.host,path:_,base:E,toString:()=>E}}Object.defineProperty(l,"__esModule",{value:!0}),l.default=parseUrl},3454:function(n,l,d){"use strict";var f,_;n.exports=(null==(f=d.g.process)?void 0:f.env)&&"object"==typeof(null==(_=d.g.process)?void 0:_.env)?d.g.process:d(7663)},1118:function(n,l,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return d(2689)}])},425:function(n,l,d){"use strict";d.d(l,{Z:function(){return Didyouknow}});var f=d(5893);d(7294);var _=d(5675),E=d.n(_);function Didyouknow(){return(0,f.jsx)("section",{className:"little",children:(0,f.jsxs)("div",{className:"diduknow",children:[(0,f.jsx)(E(),{src:"/assets/images/didu.svg",width:300,height:100,alt:"Plus",priority:!0,className:"imageplus"}),(0,f.jsxs)("p",{className:"elite",children:["If you search on the web/internet for “ ",(0,f.jsx)("span",{children:"a Mechanic, Interior Designer, Catering services, Plumber, Electrician and many more near me,"}),"” you would get hundreds if not thousands of results, including dozens of local businesses who allege to be the best. You do not have time to vet dozens of professional service providers or businesses."]}),(0,f.jsx)("p",{children:" Well, searching through such results is a thing of the past. You just need someone you can trust, to point you in the right direction; period! Rely on Mr.KIM’s national network of vetted, trusted, experienced and reliable local professionals service providers for all your project’s service needs in your area. Mr. Kim is here to help. You Name it! We do it!"})]})})}},6776:function(n,l,d){"use strict";d.d(l,{Z:function(){return Footer}});var f=d(5893),_=d(1664),E=d.n(_),L=d(5675),z=d.n(L);function Barbottom(){return(0,f.jsx)("div",{className:"barmain",children:(0,f.jsx)("section",{className:"barbottom",children:(0,f.jsxs)("div",{className:"bottombar",children:[(0,f.jsx)("h4",{children:"Download App"}),(0,f.jsx)("p",{children:"Download Mr. Kim App for an unlimited number of Job Opportunities"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(z(),{src:"/assets/images/google-store.png",width:183,height:54,alt:"Plus",priority:!0,className:"storeicons"}),(0,f.jsx)(z(),{src:"/assets/images/apple-store.png",width:183,height:54,alt:"Plus",priority:!0,className:"storeicons"})]})]})})})}d(7294);var MainFooter_Cluster=()=>(0,f.jsx)("section",{className:"mainafoot",children:(0,f.jsxs)("div",{className:"mainfotter",children:[(0,f.jsxs)("div",{className:"spotsone",children:[(0,f.jsx)("h4",{children:"Mr.KIM ... You Name It! We Do It!"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/about",children:(0,f.jsx)("p",{children:"About Us"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/whoweare",children:(0,f.jsx)("p",{children:"Who We Are"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/corevalues",children:(0,f.jsx)("p",{children:"Our Core Values"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/corporatereposnsibility",children:(0,f.jsx)("p",{children:"Corporate Responsibility"})})})]})]}),(0,f.jsxs)("div",{className:"spotstwo",children:[(0,f.jsx)("h4",{children:"Customers"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/howitworks",children:(0,f.jsx)("p",{children:"How It Works"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/getapp",children:(0,f.jsx)("p",{children:"Get The App"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/whykim",children:(0,f.jsx)("p",{children:"Why choose Mr.KIM"})})})]})]}),(0,f.jsxs)("div",{className:"spotsthree",children:[(0,f.jsx)("h4",{children:"Resources"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/financing",children:(0,f.jsx)("p",{children:"Financing My Project"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/solution",children:(0,f.jsx)("p",{children:"Solution Center & Expert Tips"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/signup",children:(0,f.jsx)("p",{children:"Sign Up As Pro"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/legal",children:(0,f.jsx)("p",{children:"Legal"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/safety",children:(0,f.jsx)("p",{children:"Safety"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/faq",children:(0,f.jsx)("p",{children:"FAQs"})})})]})]}),(0,f.jsxs)("div",{className:"spotsfour",children:[(0,f.jsx)("h4",{children:"Support"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/help",children:(0,f.jsx)("p",{children:"Help"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(E(),{href:"/contacts",children:(0,f.jsx)("p",{children:"Contact Us"})})})]})]})]})});let et=new Date,er=et.getFullYear();function Footer(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Barbottom,{}),(0,f.jsx)(MainFooter_Cluster,{}),(0,f.jsx)("section",{className:"main-footer",children:(0,f.jsxs)("div",{className:"footer",children:[(0,f.jsx)("p",{children:(0,f.jsxs)("small",{children:["Copyright \xa9 ",er," Mr. Kim"]})}),(0,f.jsx)("div",{className:"manure"}),(0,f.jsxs)("div",{className:"socials",children:[(0,f.jsx)(z(),{src:"/assets/images/facebook.svg",width:30,height:30,alt:"facebook",className:"facebook",priority:!0}),(0,f.jsx)(z(),{src:"/assets/images/linkedin.svg",width:30,height:30,alt:"linkedin",className:"linkedin",priority:!0}),(0,f.jsx)(z(),{src:"/assets/images/instagram.svg",width:30,height:30,alt:"instagram",className:"instagram",priority:!0})]})]})})]})}},3663:function(n,l,d){"use strict";d.d(l,{Z:function(){return components_Navbar}});var f=d(5893),_=d(1664),E=d.n(_),L=d(5675),z=d.n(L);d(6770);var et=d(7294),er=d(3299),UserDropDown=()=>{let{data:n}=(0,er.useSession)(),[l,d]=(0,et.useState)(!1),[_,L]=(0,et.useState)(!0),toggleDropdown=()=>{d(!l)};if(n)return(0,f.jsxs)("div",{className:"user-dropdown",children:[(0,f.jsx)("div",{className:"user-icon",onClick:toggleDropdown,children:(0,f.jsx)(z(),{src:n.user.image,alt:n.user.name,className:"badam",width:50,height:50})}),l&&(0,f.jsx)("div",{className:"dropdown-content",children:(0,f.jsxs)("div",{className:"dropdown-arrow",children:[(0,f.jsxs)(E(),{href:"/profile","data-aos":"fade-in",onClick:toggleDropdown,children:[(0,f.jsx)(z(),{src:"/assets/images/user.png",width:20,height:20,alt:"Plus",priority:!0,className:"imageplus"}),"Profile"]}),(0,f.jsxs)(E(),{href:"/settings","data-aos":"fade-in",onClick:toggleDropdown,children:[(0,f.jsx)(z(),{src:"/assets/images/settings.png",width:20,height:20,alt:"Plus",priority:!0,className:"imageplus"}),"Settings"]}),(0,f.jsxs)(E(),{href:"/premium","data-aos":"fade-in",onClick:()=>(0,er.signOut)(),children:[(0,f.jsx)(z(),{src:"/assets/images/logout.png",width:20,height:20,alt:"Plus",priority:!0,className:"imageplus"}),"Sign Out"]})]})})]})};d(1163);var components_NavbarMobile=()=>{let{data:n}=(0,er.useSession)(),[l,d]=(0,et.useState)(!1),[_,L]=(0,et.useState)(!0),toggleDropdown=()=>{d(!l)};return n?(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:"user-icon",onClick:toggleDropdown,children:(0,f.jsx)(z(),{src:"/assets/images/menu.svg",width:30,height:30,alt:"mobile menu",className:"menusa"})}),l&&(0,f.jsx)("div",{className:"navbar-mobile",children:(0,f.jsxs)("div",{className:"unloged",children:[(0,f.jsxs)("div",{className:"welcome",children:[(0,f.jsx)("h5",{children:"Welcome"}),n.user.name.split(" ")[0]]}),(0,f.jsx)(E(),{href:"/","data-aos":"fade-in",onClick:toggleDropdown,children:"Home"}),(0,f.jsx)(E(),{href:"/jobs","data-aos":"fade-in",onClick:toggleDropdown,children:"Jobs"}),(0,f.jsx)(E(),{href:"/categories","data-aos":"fade-in",onClick:toggleDropdown,children:"Categories"}),(0,f.jsx)(E(),{href:"/profile","data-aos":"fade-in",onClick:toggleDropdown,children:"Profile"}),(0,f.jsx)(E(),{href:"/talent","data-aos":"fade-in",onClick:toggleDropdown,children:"Talent"}),(0,f.jsx)(E(),{href:"/premium","data-aos":"fade-in",onClick:toggleDropdown,children:"Premium"}),(0,f.jsx)(E(),{href:"/categories","data-aos":"fade-in",onClick:toggleDropdown,children:"Make Request"}),(0,f.jsx)(E(),{href:"/premium","data-aos":"fade-in",onClick:()=>(0,er.signOut)(),children:"Logout"})]})})]}):(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:"user-icon",onClick:toggleDropdown,children:(0,f.jsx)(z(),{src:"/assets/images/menu.svg",width:30,height:30,alt:"mobile menu",className:"menusa"})}),l&&(0,f.jsx)("div",{className:"navbar-mobile",children:(0,f.jsxs)("div",{className:"unloged",children:[(0,f.jsx)(E(),{href:"/premium","data-aos":"fade-in",onClick:()=>(0,er.signIn)(),children:"Sign In"}),(0,f.jsx)(E(),{href:"/","data-aos":"fade-in",onClick:toggleDropdown,children:"Home"}),(0,f.jsx)(E(),{href:"/jobs","data-aos":"fade-in",onClick:toggleDropdown,children:"Jobs"}),(0,f.jsx)(E(),{href:"/categories","data-aos":"fade-in",onClick:toggleDropdown,children:"Categories"}),(0,f.jsx)(E(),{href:"/talent","data-aos":"fade-in",onClick:toggleDropdown,children:"Talent"}),(0,f.jsx)(E(),{href:"/premium","data-aos":"fade-in",onClick:toggleDropdown,children:"Premium"}),(0,f.jsx)(E(),{href:"/categories","data-aos":"fade-in",onClick:toggleDropdown,children:"Make Request"})]})})]})},components_SignInButton=()=>{let{data:n}=(0,er.useSession)();return n?(0,f.jsxs)("div",{className:"udropdown",children:[(0,f.jsx)(UserDropDown,{}),(0,f.jsxs)("div",{className:"welcome",children:[(0,f.jsx)("h5",{children:"Welcome"}),n.user.name.split(" ")[0]]})]}):(0,f.jsx)("div",{children:(0,f.jsx)("button",{onClick:()=>(0,er.signIn)(),className:"signing",children:"Sign In"})})},components_Navbar=()=>(0,f.jsx)("div",{className:"navbar",children:(0,f.jsxs)("div",{className:"navbar-content",children:[(0,f.jsxs)("div",{className:"navbar-left",children:[(0,f.jsx)(E(),{href:"/",children:(0,f.jsx)(z(),{src:"/assets/images/mrkim-logo.svg",width:160,height:50,alt:"mr. kim logo",priority:!0,className:"imagelogo"})}),(0,f.jsx)("div",{className:"plus",children:(0,f.jsxs)(E(),{href:"/categories",children:["Get Service ",(0,f.jsx)(z(),{src:"/assets/images/plus2.svg",width:10,height:10,alt:"Plus",priority:!0,className:"imageplus"})]})})]}),(0,f.jsx)("div",{className:"navbar-right",children:(0,f.jsxs)("div",{className:"onsign",children:[(0,f.jsx)(E(),{href:"/",children:"Home"}),(0,f.jsx)(E(),{href:"/jobs",children:"Jobs"}),(0,f.jsx)(E(),{href:"/categories",children:"Categories"}),(0,f.jsx)(E(),{href:"/talent",children:"Talent"}),(0,f.jsx)(E(),{href:"/premium",children:"Premium"}),(0,f.jsx)(components_SignInButton,{})]})}),(0,f.jsx)("div",{className:"mobilemenu",children:(0,f.jsx)(components_NavbarMobile,{})})]})})},6770:function(n,l,d){"use strict";d.d(l,{H:function(){return AuthContextProvider}});var f=d(5893),_=d(7294);d(8036);var E=d(8335),L=d(6273);d(1163);let z=(0,_.createContext)(),AuthContextProvider=n=>{let{children:l}=n,[d,et]=(0,_.useState)(null);return(0,_.useEffect)(()=>{let n=(0,E.Aj)(L.I8,n=>{et(n)});return()=>n()},[d]),(0,f.jsx)(z.Provider,{value:{user:d,googleSignIn:()=>{let n=new E.hJ;(0,E.F6)(L.I8,n)},logOut:()=>{(0,E.w7)(L.I8),et(null)}},children:l})}},6273:function(n,l,d){"use strict";d.d(l,{I8:function(){return er},db:function(){return et},tO:function(){return en}});var f=d(2238);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,f.KN)("firebase","10.7.2","app");var _=d(9828),E=d(8335),L=d(6650);d(8481);let z=(0,f.ZF)({apiKey:"AIzaSyCQEQdiVNUjcXSC8Vfh_ExI05jS6CYWKB4",authDomain:"mrkim-dca3e.firebaseapp.com",databaseURL:"https://mrkim-dca3e-default-rtdb.firebaseio.com",projectId:"mrkim-dca3e",storageBucket:"mrkim-dca3e.appspot.com",messagingSenderId:"133099702140",appId:"1:133099702140:web:2a1775203bec214290c6f9",measurementId:"G-WQG0E9EM7R"}),et=(0,_.ad)(z),er=(0,E.v0)(z),en=(0,L.cF)(z)},7498:function(n,l){"use strict";var d,f;Object.defineProperty(l,"__esModule",{value:!0}),function(n,l){for(var d in l)Object.defineProperty(n,d,{enumerable:!0,get:l[d]})}(l,{PrefetchKind:function(){return d},ACTION_REFRESH:function(){return _},ACTION_NAVIGATE:function(){return E},ACTION_RESTORE:function(){return L},ACTION_SERVER_PATCH:function(){return z},ACTION_PREFETCH:function(){return et},ACTION_FAST_REFRESH:function(){return er},ACTION_SERVER_ACTION:function(){return en}});let _="refresh",E="navigate",L="restore",z="server-patch",et="prefetch",er="fast-refresh",en="server-action";(f=d||(d={})).AUTO="auto",f.FULL="full",f.TEMPORARY="temporary",("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),n.exports=l.default)},30:function(n,l,d){"use strict";function getDomainLocale(n,l,d,f){return!1}Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),d(2866),("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),n.exports=l.default)},3271:function(n,l,d){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Image",{enumerable:!0,get:function(){return eu}});let f=d(260),_=d(7697),E=_._(d(7294)),L=f._(d(3935)),z=f._(d(9201)),et=d(3914),er=d(5494),en=d(869);d(1905);let ei=d(1823),es=f._(d(4545)),eo={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(n,l,d,f,_,E){let L=null==n?void 0:n.src;if(!n||n["data-loaded-src"]===L)return;n["data-loaded-src"]=L;let z="decode"in n?n.decode():Promise.resolve();z.catch(()=>{}).then(()=>{if(n.parentElement&&n.isConnected){if("empty"!==l&&_(!0),null==d?void 0:d.current){let l=new Event("load");Object.defineProperty(l,"target",{writable:!1,value:n});let f=!1,_=!1;d.current({...l,nativeEvent:l,currentTarget:n,target:n,isDefaultPrevented:()=>f,isPropagationStopped:()=>_,persist:()=>{},preventDefault:()=>{f=!0,l.preventDefault()},stopPropagation:()=>{_=!0,l.stopPropagation()}})}(null==f?void 0:f.current)&&f.current(n)}})}function getDynamicProps(n){let[l,d]=E.version.split(".",2),f=parseInt(l,10),_=parseInt(d,10);return f>18||18===f&&_>=3?{fetchPriority:n}:{fetchpriority:n}}let el=(0,E.forwardRef)((n,l)=>{let{src:d,srcSet:f,sizes:_,height:L,width:z,decoding:et,className:er,style:en,fetchPriority:ei,placeholder:es,loading:eo,unoptimized:el,fill:eu,onLoadRef:ec,onLoadingCompleteRef:eh,setBlurComplete:ef,setShowAltText:ep,onLoad:e_,onError:em,...eg}=n;return E.default.createElement("img",{...eg,...getDynamicProps(ei),loading:eo,width:z,height:L,decoding:et,"data-nimg":eu?"fill":"1",className:er,style:en,sizes:_,srcSet:f,src:d,ref:(0,E.useCallback)(n=>{l&&("function"==typeof l?l(n):"object"==typeof l&&(l.current=n)),n&&(em&&(n.src=n.src),n.complete&&handleLoading(n,es,ec,eh,ef,el))},[d,es,ec,eh,ef,em,el,l]),onLoad:n=>{let l=n.currentTarget;handleLoading(l,es,ec,eh,ef,el)},onError:n=>{ep(!0),"empty"!==es&&ef(!0),em&&em(n)}})});function ImagePreload(n){let{isAppRouter:l,imgAttributes:d}=n,f={as:"image",imageSrcSet:d.srcSet,imageSizes:d.sizes,crossOrigin:d.crossOrigin,referrerPolicy:d.referrerPolicy,...getDynamicProps(d.fetchPriority)};return l&&L.default.preload?(L.default.preload(d.src,f),null):E.default.createElement(z.default,null,E.default.createElement("link",{key:"__nimg-"+d.src+d.srcSet+d.sizes,rel:"preload",href:d.srcSet?void 0:d.src,...f}))}let eu=(0,E.forwardRef)((n,l)=>{let d=(0,E.useContext)(ei.RouterContext),f=(0,E.useContext)(en.ImageConfigContext),_=(0,E.useMemo)(()=>{let n=eo||f||er.imageConfigDefault,l=[...n.deviceSizes,...n.imageSizes].sort((n,l)=>n-l),d=n.deviceSizes.sort((n,l)=>n-l);return{...n,allSizes:l,deviceSizes:d}},[f]),{onLoad:L,onLoadingComplete:z}=n,eu=(0,E.useRef)(L);(0,E.useEffect)(()=>{eu.current=L},[L]);let ec=(0,E.useRef)(z);(0,E.useEffect)(()=>{ec.current=z},[z]);let[eh,ef]=(0,E.useState)(!1),[ep,e_]=(0,E.useState)(!1),{props:em,meta:eg}=(0,et.getImgProps)(n,{defaultLoader:es.default,imgConf:_,blurComplete:eh,showAltText:ep});return E.default.createElement(E.default.Fragment,null,E.default.createElement(el,{...em,unoptimized:eg.unoptimized,placeholder:eg.placeholder,fill:eg.fill,onLoadRef:eu,onLoadingCompleteRef:ec,setBlurComplete:ef,setShowAltText:e_,ref:l}),eg.priority?E.default.createElement(ImagePreload,{isAppRouter:!d,imgAttributes:em}):null)});("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),n.exports=l.default)},5170:function(n,l,d){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return ef}});let f=d(260),_=f._(d(7294)),E=d(4450),L=d(2227),z=d(4364),et=d(109),er=d(3607),en=d(1823),ei=d(9031),es=d(920),eo=d(30),el=d(7192),eu=d(7498),ec=new Set;function prefetch(n,l,d,f,_,E){if(!E&&!(0,L.isLocalURL)(l))return;if(!f.bypassPrefetchedCheck){let _=void 0!==f.locale?f.locale:"locale"in n?n.locale:void 0,E=l+"%"+d+"%"+_;if(ec.has(E))return;ec.add(E)}let z=E?n.prefetch(l,_):n.prefetch(l,d,f);Promise.resolve(z).catch(n=>{})}function isModifiedEvent(n){let l=n.currentTarget,d=l.getAttribute("target");return d&&"_self"!==d||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&2===n.nativeEvent.which}function linkClicked(n,l,d,f,E,z,et,er,en,ei){let{nodeName:es}=n.currentTarget,eo="A"===es.toUpperCase();if(eo&&(isModifiedEvent(n)||!en&&!(0,L.isLocalURL)(d)))return;n.preventDefault();let navigate=()=>{let n=null==et||et;"beforePopState"in l?l[E?"replace":"push"](d,f,{shallow:z,locale:er,scroll:n}):l[E?"replace":"push"](f||d,{forceOptimisticNavigation:!ei,scroll:n})};en?_.default.startTransition(navigate):navigate()}function formatStringOrUrl(n){return"string"==typeof n?n:(0,z.formatUrl)(n)}let eh=_.default.forwardRef(function(n,l){let d,f;let{href:L,as:z,children:ec,prefetch:eh=null,passHref:ef,replace:ep,shallow:e_,scroll:em,locale:eg,onClick:ey,onMouseEnter:ev,onTouchStart:eE,legacyBehavior:eT=!1,...eI}=n;d=ec,eT&&("string"==typeof d||"number"==typeof d)&&(d=_.default.createElement("a",null,d));let eP=_.default.useContext(en.RouterContext),eA=_.default.useContext(ei.AppRouterContext),ew=null!=eP?eP:eA,eR=!eP,eS=!1!==eh,eV=null===eh?eu.PrefetchKind.AUTO:eu.PrefetchKind.FULL,{href:eC,as:ek}=_.default.useMemo(()=>{if(!eP){let n=formatStringOrUrl(L);return{href:n,as:z?formatStringOrUrl(z):n}}let[n,l]=(0,E.resolveHref)(eP,L,!0);return{href:n,as:z?(0,E.resolveHref)(eP,z):l||n}},[eP,L,z]),eD=_.default.useRef(eC),eO=_.default.useRef(ek);eT&&(f=_.default.Children.only(d));let ex=eT?f&&"object"==typeof f&&f.ref:l,[eN,eM,eL]=(0,es.useIntersection)({rootMargin:"200px"}),eF=_.default.useCallback(n=>{(eO.current!==ek||eD.current!==eC)&&(eL(),eO.current=ek,eD.current=eC),eN(n),ex&&("function"==typeof ex?ex(n):"object"==typeof ex&&(ex.current=n))},[ek,ex,eC,eL,eN]);_.default.useEffect(()=>{ew&&eM&&eS&&prefetch(ew,eC,ek,{locale:eg},{kind:eV},eR)},[ek,eC,eM,eg,eS,null==eP?void 0:eP.locale,ew,eR,eV]);let eU={ref:eF,onClick(n){eT||"function"!=typeof ey||ey(n),eT&&f.props&&"function"==typeof f.props.onClick&&f.props.onClick(n),ew&&!n.defaultPrevented&&linkClicked(n,ew,eC,ek,ep,e_,em,eg,eR,eS)},onMouseEnter(n){eT||"function"!=typeof ev||ev(n),eT&&f.props&&"function"==typeof f.props.onMouseEnter&&f.props.onMouseEnter(n),ew&&(eS||!eR)&&prefetch(ew,eC,ek,{locale:eg,priority:!0,bypassPrefetchedCheck:!0},{kind:eV},eR)},onTouchStart(n){eT||"function"!=typeof eE||eE(n),eT&&f.props&&"function"==typeof f.props.onTouchStart&&f.props.onTouchStart(n),ew&&(eS||!eR)&&prefetch(ew,eC,ek,{locale:eg,priority:!0,bypassPrefetchedCheck:!0},{kind:eV},eR)}};if((0,et.isAbsoluteUrl)(ek))eU.href=ek;else if(!eT||ef||"a"===f.type&&!("href"in f.props)){let n=void 0!==eg?eg:null==eP?void 0:eP.locale,l=(null==eP?void 0:eP.isLocaleDomain)&&(0,eo.getDomainLocale)(ek,n,null==eP?void 0:eP.locales,null==eP?void 0:eP.domainLocales);eU.href=l||(0,el.addBasePath)((0,er.addLocale)(ek,n,null==eP?void 0:eP.defaultLocale))}return eT?_.default.cloneElement(f,eU):_.default.createElement("a",{...eI,...eU},d)}),ef=eh;("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),n.exports=l.default)},920:function(n,l,d){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let f=d(7294),_=d(3436),E="function"==typeof IntersectionObserver,L=new Map,z=[];function createObserver(n){let l;let d={root:n.root||null,margin:n.rootMargin||""},f=z.find(n=>n.root===d.root&&n.margin===d.margin);if(f&&(l=L.get(f)))return l;let _=new Map,E=new IntersectionObserver(n=>{n.forEach(n=>{let l=_.get(n.target),d=n.isIntersecting||n.intersectionRatio>0;l&&d&&l(d)})},n);return l={id:d,observer:E,elements:_},z.push(d),L.set(d,l),l}function observe(n,l,d){let{id:f,observer:_,elements:E}=createObserver(d);return E.set(n,l),_.observe(n),function(){if(E.delete(n),_.unobserve(n),0===E.size){_.disconnect(),L.delete(f);let n=z.findIndex(n=>n.root===f.root&&n.margin===f.margin);n>-1&&z.splice(n,1)}}}function useIntersection(n){let{rootRef:l,rootMargin:d,disabled:L}=n,z=L||!E,[et,er]=(0,f.useState)(!1),en=(0,f.useRef)(null),ei=(0,f.useCallback)(n=>{en.current=n},[]);(0,f.useEffect)(()=>{if(E){if(z||et)return;let n=en.current;if(n&&n.tagName){let f=observe(n,n=>n&&er(n),{root:null==l?void 0:l.current,rootMargin:d});return f}}else if(!et){let n=(0,_.requestIdleCallback)(()=>er(!0));return()=>(0,_.cancelIdleCallback)(n)}},[z,d,l,et,en.current]);let es=(0,f.useCallback)(()=>{er(!1)},[]);return[ei,et,es]}("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),n.exports=l.default)},3914:function(n,l,d){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),d(1905);let f=d(2393),_=d(5494);function isStaticRequire(n){return void 0!==n.default}function isStaticImageData(n){return void 0!==n.src}function isStaticImport(n){return"object"==typeof n&&(isStaticRequire(n)||isStaticImageData(n))}function getInt(n){return void 0===n?n:"number"==typeof n?Number.isFinite(n)?n:NaN:"string"==typeof n&&/^[0-9]+$/.test(n)?parseInt(n,10):NaN}function getWidths(n,l,d){let{deviceSizes:f,allSizes:_}=n;if(d){let n=/(^|\s)(1?\d?\d)vw/g,l=[];for(let f;f=n.exec(d);f)l.push(parseInt(f[2]));if(l.length){let n=.01*Math.min(...l);return{widths:_.filter(l=>l>=f[0]*n),kind:"w"}}return{widths:_,kind:"w"}}if("number"!=typeof l)return{widths:f,kind:"w"};let E=[...new Set([l,2*l].map(n=>_.find(l=>l>=n)||_[_.length-1]))];return{widths:E,kind:"x"}}function generateImgAttrs(n){let{config:l,src:d,unoptimized:f,width:_,quality:E,sizes:L,loader:z}=n;if(f)return{src:d,srcSet:void 0,sizes:void 0};let{widths:et,kind:er}=getWidths(l,_,L),en=et.length-1;return{sizes:L||"w"!==er?L:"100vw",srcSet:et.map((n,f)=>z({config:l,src:d,quality:E,width:n})+" "+("w"===er?n:f+1)+er).join(", "),src:z({config:l,src:d,quality:E,width:et[en]})}}function getImgProps(n,l){let d,E,L,{src:z,sizes:et,unoptimized:er=!1,priority:en=!1,loading:ei,className:es,quality:eo,width:el,height:eu,fill:ec=!1,style:eh,onLoad:ef,onLoadingComplete:ep,placeholder:e_="empty",blurDataURL:em,fetchPriority:eg,layout:ey,objectFit:ev,objectPosition:eE,lazyBoundary:eT,lazyRoot:eI,...eP}=n,{imgConf:eA,showAltText:ew,blurComplete:eR,defaultLoader:eS}=l,eV=eA||_.imageConfigDefault;if("allSizes"in eV)d=eV;else{let n=[...eV.deviceSizes,...eV.imageSizes].sort((n,l)=>n-l),l=eV.deviceSizes.sort((n,l)=>n-l);d={...eV,allSizes:n,deviceSizes:l}}let eC=eP.loader||eS;delete eP.loader,delete eP.srcSet;let ek="__next_img_default"in eC;if(ek){if("custom"===d.loader)throw Error('Image with src "'+z+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let n=eC;eC=l=>{let{config:d,...f}=l;return n(f)}}if(ey){"fill"===ey&&(ec=!0);let n={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[ey];n&&(eh={...eh,...n});let l={responsive:"100vw",fill:"100vw"}[ey];l&&!et&&(et=l)}let eD="",eO=getInt(el),ex=getInt(eu);if(isStaticImport(z)){let n=isStaticRequire(z)?z.default:z;if(!n.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(n));if(!n.height||!n.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(n));if(E=n.blurWidth,L=n.blurHeight,em=em||n.blurDataURL,eD=n.src,!ec){if(eO||ex){if(eO&&!ex){let l=eO/n.width;ex=Math.round(n.height*l)}else if(!eO&&ex){let l=ex/n.height;eO=Math.round(n.width*l)}}else eO=n.width,ex=n.height}}let eN=!en&&("lazy"===ei||void 0===ei);(!(z="string"==typeof z?z:eD)||z.startsWith("data:")||z.startsWith("blob:"))&&(er=!0,eN=!1),d.unoptimized&&(er=!0),ek&&z.endsWith(".svg")&&!d.dangerouslyAllowSVG&&(er=!0),en&&(eg="high");let eM=getInt(eo),eL=Object.assign(ec?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:ev,objectPosition:eE}:{},ew?{}:{color:"transparent"},eh),eF=eR||"empty"===e_?null:"blur"===e_?'url("data:image/svg+xml;charset=utf-8,'+(0,f.getImageBlurSvg)({widthInt:eO,heightInt:ex,blurWidth:E,blurHeight:L,blurDataURL:em||"",objectFit:eL.objectFit})+'")':'url("'+e_+'")',eU=eF?{backgroundSize:eL.objectFit||"cover",backgroundPosition:eL.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:eF}:{},ej=generateImgAttrs({config:d,src:z,unoptimized:er,width:eO,quality:eM,sizes:et,loader:eC}),eB={...eP,loading:eN?"lazy":ei,fetchPriority:eg,width:eO,height:ex,decoding:"async",className:es,style:{...eL,...eU},sizes:ej.sizes,srcSet:ej.srcSet,src:ej.src},eq={unoptimized:er,priority:en,placeholder:e_,fill:ec};return{props:eB,meta:eq}}},2393:function(n,l){"use strict";function getImageBlurSvg(n){let{widthInt:l,heightInt:d,blurWidth:f,blurHeight:_,blurDataURL:E,objectFit:L}=n,z=f?40*f:l,et=_?40*_:d,er=z&&et?"viewBox='0 0 "+z+" "+et+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+er+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(er?"none":"contain"===L?"xMidYMid":"cover"===L?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+E+"'/%3E%3C/svg%3E"}Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(n,l,d){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(n,l){for(var d in l)Object.defineProperty(n,d,{enumerable:!0,get:l[d]})}(l,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return et}});let f=d(260),_=d(3914),E=d(1905),L=d(3271),z=f._(d(4545)),unstable_getImgProps=n=>{(0,E.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:l}=(0,_.getImgProps)(n,{defaultLoader:z.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[n,d]of Object.entries(l))void 0===d&&delete l[n];return{props:l}},et=L.Image},4545:function(n,l){"use strict";function defaultLoader(n){let{config:l,src:d,width:f,quality:_}=n;return l.path+"?url="+encodeURIComponent(d)+"&w="+f+"&q="+(_||75)}Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return d}}),defaultLoader.__next_img_default=!0;let d=defaultLoader},2689:function(n,l,d){"use strict";d.r(l),d.d(l,{default:function(){return App},metadata:function(){return eu}});var f=d(5893),_=d(6776),E=d(3663),L=d(6770),z=d(6501),et=d(425),er=d(7294),About_Subscriptiom=()=>(0,f.jsx)("section",{className:"newsletter",children:(0,f.jsxs)("div",{className:"newsletters",children:[(0,f.jsx)("h1",{children:"Deals, Inspiration, Expert Tips and Trends"}),(0,f.jsx)("p",{children:"SignUp for emails to learn more about our special Offers, promotions, Inspiration, Tips, Trends and more..."}),(0,f.jsx)("input",{type:"text",placeholder:"Full Name"}),(0,f.jsx)("input",{type:"email",placeholder:"Email Address"}),(0,f.jsx)("p",{className:"papa",children:"By clicking the button below, I agree to receive periodic deals, inspirations, expert tips, trends, and many more via email from Mr. KIM at the email address I have provided on my own volition. I authorize Mr.KIM to send such messages using automated means or otherwise. I understand that my consent to receive communications in this way is not required as a condition to use Mr.KIM platform. I understand that I may opt-out of receiving emails at any time by clicking Unsubscribe. I have read and agree to the Privacy Policy and Terms  and conditions. I agree that electronic receipt generated from clicking this button shall constitute my electronic signature for purposes of this agreement."}),(0,f.jsx)("button",{children:"SUBSCRIBE"})]})}),components_Layout=n=>{let{children:l}=n;return(0,f.jsx)("div",{className:"layout",children:(0,f.jsxs)(L.H,{children:[(0,f.jsx)(E.Z,{}),l,(0,f.jsx)(et.Z,{}),(0,f.jsx)(About_Subscriptiom,{}),(0,f.jsx)(_.Z,{}),(0,f.jsx)(z.x7,{position:"bottom-left"})]})})};d(415);var en=d(2711),ei=d.n(en);d(927);var es=d(5675),eo=d.n(es),ScrollToTop=()=>{let[n,l]=(0,er.useState)(!1);return(0,er.useEffect)(()=>{let toggleVisibility=()=>{window.scrollY>100?l(!0):l(!1)},handleScroll=()=>{toggleVisibility()};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,f.jsx)(f.Fragment,{children:n&&(0,f.jsx)("div",{className:"scroll-to-top-button",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,f.jsx)(eo(),{src:"/assets/images/up_arrow.svg",width:25,height:25,alt:"Plus",priority:!0,className:"imageplu"})})})},el=d(3299);let eu={title:"Mr. Kim",description:"Mr. Kim | Home"};function App(n){let{Component:l,pageProps:{session:d,..._}}=n;return(0,er.useEffect)(()=>{ei().init({duration:800,once:!1})},[]),(0,f.jsxs)(el.SessionProvider,{session:d,children:[(0,f.jsx)(components_Layout,{children:(0,f.jsx)(l,{..._})}),(0,f.jsx)(ScrollToTop,{})]})}},927:function(){},415:function(){},7663:function(n){!function(){var l={229:function(n){var l,d,f,_=n.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(n){if(l===setTimeout)return setTimeout(n,0);if((l===defaultSetTimout||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(d){try{return l.call(null,n,0)}catch(d){return l.call(this,n,0)}}}function runClearTimeout(n){if(d===clearTimeout)return clearTimeout(n);if((d===defaultClearTimeout||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(n);try{return d(n)}catch(l){try{return d.call(null,n)}catch(l){return d.call(this,n)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(n){l=defaultSetTimout}try{d="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(n){d=defaultClearTimeout}}();var E=[],L=!1,z=-1;function cleanUpNextTick(){L&&f&&(L=!1,f.length?E=f.concat(E):z=-1,E.length&&drainQueue())}function drainQueue(){if(!L){var n=runTimeout(cleanUpNextTick);L=!0;for(var l=E.length;l;){for(f=E,E=[];++z<l;)f&&f[z].run();z=-1,l=E.length}f=null,L=!1,runClearTimeout(n)}}function Item(n,l){this.fun=n,this.array=l}function noop(){}_.nextTick=function(n){var l=Array(arguments.length-1);if(arguments.length>1)for(var d=1;d<arguments.length;d++)l[d-1]=arguments[d];E.push(new Item(n,l)),1!==E.length||L||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},_.title="browser",_.browser=!0,_.env={},_.argv=[],_.version="",_.versions={},_.on=noop,_.addListener=noop,_.once=noop,_.off=noop,_.removeListener=noop,_.removeAllListeners=noop,_.emit=noop,_.prependListener=noop,_.prependOnceListener=noop,_.listeners=function(n){return[]},_.binding=function(n){throw Error("process.binding is not supported")},_.cwd=function(){return"/"},_.chdir=function(n){throw Error("process.chdir is not supported")},_.umask=function(){return 0}}},d={};function __nccwpck_require__(n){var f=d[n];if(void 0!==f)return f.exports;var _=d[n]={exports:{}},E=!0;try{l[n](_,_.exports,__nccwpck_require__),E=!1}finally{E&&delete d[n]}return _.exports}__nccwpck_require__.ab="//";var f=__nccwpck_require__(229);n.exports=f}()},5675:function(n,l,d){n.exports=d(645)},1664:function(n,l,d){n.exports=d(5170)},1163:function(n,l,d){n.exports=d(9974)},3897:function(n){function _arrayLikeToArray(n,l){(null==l||l>n.length)&&(l=n.length);for(var d=0,f=Array(l);d<l;d++)f[d]=n[d];return f}n.exports=_arrayLikeToArray,n.exports.__esModule=!0,n.exports.default=n.exports},5372:function(n){function _arrayWithHoles(n){if(Array.isArray(n))return n}n.exports=_arrayWithHoles,n.exports.__esModule=!0,n.exports.default=n.exports},6115:function(n){function _assertThisInitialized(n){if(void 0===n)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return n}n.exports=_assertThisInitialized,n.exports.__esModule=!0,n.exports.default=n.exports},7156:function(n){function asyncGeneratorStep(n,l,d,f,_,E,L){try{var z=n[E](L),et=z.value}catch(n){d(n);return}z.done?l(et):Promise.resolve(et).then(f,_)}function _asyncToGenerator(n){return function(){var l=this,d=arguments;return new Promise(function(f,_){var E=n.apply(l,d);function _next(n){asyncGeneratorStep(E,f,_,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(E,f,_,_next,_throw,"throw",n)}_next(void 0)})}}n.exports=_asyncToGenerator,n.exports.__esModule=!0,n.exports.default=n.exports},6690:function(n){function _classCallCheck(n,l){if(!(n instanceof l))throw TypeError("Cannot call a class as a function")}n.exports=_classCallCheck,n.exports.__esModule=!0,n.exports.default=n.exports},3515:function(n,l,d){var f=d(6015),_=d(9617);function _construct(n,l,d){if(_())return Reflect.construct.apply(null,arguments);var E=[null];E.push.apply(E,l);var L=new(n.bind.apply(n,E));return d&&f(L,d.prototype),L}n.exports=_construct,n.exports.__esModule=!0,n.exports.default=n.exports},9728:function(n,l,d){var f=d(4062);function _defineProperties(n,l){for(var d=0;d<l.length;d++){var _=l[d];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(n,f(_.key),_)}}function _createClass(n,l,d){return l&&_defineProperties(n.prototype,l),d&&_defineProperties(n,d),Object.defineProperty(n,"prototype",{writable:!1}),n}n.exports=_createClass,n.exports.__esModule=!0,n.exports.default=n.exports},8416:function(n,l,d){var f=d(4062);function _defineProperty(n,l,d){return(l=f(l))in n?Object.defineProperty(n,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):n[l]=d,n}n.exports=_defineProperty,n.exports.__esModule=!0,n.exports.default=n.exports},3808:function(n){function _getPrototypeOf(l){return n.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},n.exports.__esModule=!0,n.exports.default=n.exports,_getPrototypeOf(l)}n.exports=_getPrototypeOf,n.exports.__esModule=!0,n.exports.default=n.exports},1655:function(n,l,d){var f=d(6015);function _inherits(n,l){if("function"!=typeof l&&null!==l)throw TypeError("Super expression must either be null or a function");n.prototype=Object.create(l&&l.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),l&&f(n,l)}n.exports=_inherits,n.exports.__esModule=!0,n.exports.default=n.exports},4836:function(n){function _interopRequireDefault(n){return n&&n.__esModule?n:{default:n}}n.exports=_interopRequireDefault,n.exports.__esModule=!0,n.exports.default=n.exports},6035:function(n){function _isNativeFunction(n){try{return -1!==Function.toString.call(n).indexOf("[native code]")}catch(l){return"function"==typeof n}}n.exports=_isNativeFunction,n.exports.__esModule=!0,n.exports.default=n.exports},9617:function(n){function _isNativeReflectConstruct(){try{var l=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(n){}return(n.exports=_isNativeReflectConstruct=function(){return!!l},n.exports.__esModule=!0,n.exports.default=n.exports)()}n.exports=_isNativeReflectConstruct,n.exports.__esModule=!0,n.exports.default=n.exports},8872:function(n){function _iterableToArrayLimit(n,l){var d=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=d){var f,_,E,L,z=[],et=!0,er=!1;try{if(E=(d=d.call(n)).next,0===l){if(Object(d)!==d)return;et=!1}else for(;!(et=(f=E.call(d)).done)&&(z.push(f.value),z.length!==l);et=!0);}catch(n){er=!0,_=n}finally{try{if(!et&&null!=d.return&&(L=d.return(),Object(L)!==L))return}finally{if(er)throw _}}return z}}n.exports=_iterableToArrayLimit,n.exports.__esModule=!0,n.exports.default=n.exports},2218:function(n){function _nonIterableRest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.exports=_nonIterableRest,n.exports.__esModule=!0,n.exports.default=n.exports},4993:function(n,l,d){var f=d(8698).default,_=d(6115);function _possibleConstructorReturn(n,l){if(l&&("object"===f(l)||"function"==typeof l))return l;if(void 0!==l)throw TypeError("Derived constructors may only return object or undefined");return _(n)}n.exports=_possibleConstructorReturn,n.exports.__esModule=!0,n.exports.default=n.exports},7061:function(n,l,d){var f=d(8698).default;function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n.exports=_regeneratorRuntime=function(){return d},n.exports.__esModule=!0,n.exports.default=n.exports;var l,d={},_=Object.prototype,E=_.hasOwnProperty,L=Object.defineProperty||function(n,l,d){n[l]=d.value},z="function"==typeof Symbol?Symbol:{},et=z.iterator||"@@iterator",er=z.asyncIterator||"@@asyncIterator",en=z.toStringTag||"@@toStringTag";function define(n,l,d){return Object.defineProperty(n,l,{value:d,enumerable:!0,configurable:!0,writable:!0}),n[l]}try{define({},"")}catch(n){define=function(n,l,d){return n[l]=d}}function wrap(n,l,d,f){var _=Object.create((l&&l.prototype instanceof Generator?l:Generator).prototype);return L(_,"_invoke",{value:makeInvokeMethod(n,d,new Context(f||[]))}),_}function tryCatch(n,l,d){try{return{type:"normal",arg:n.call(l,d)}}catch(n){return{type:"throw",arg:n}}}d.wrap=wrap;var ei="suspendedStart",es="executing",eo="completed",el={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var eu={};define(eu,et,function(){return this});var ec=Object.getPrototypeOf,eh=ec&&ec(ec(values([])));eh&&eh!==_&&E.call(eh,et)&&(eu=eh);var ef=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(eu);function defineIteratorMethods(n){["next","throw","return"].forEach(function(l){define(n,l,function(n){return this._invoke(l,n)})})}function AsyncIterator(n,l){var d;function invoke(d,_,L,z){var et=tryCatch(n[d],n,_);if("throw"!==et.type){var er=et.arg,en=er.value;return en&&"object"==f(en)&&E.call(en,"__await")?l.resolve(en.__await).then(function(n){invoke("next",n,L,z)},function(n){invoke("throw",n,L,z)}):l.resolve(en).then(function(n){er.value=n,L(er)},function(n){return invoke("throw",n,L,z)})}z(et.arg)}L(this,"_invoke",{value:function(n,f){function callInvokeWithMethodAndArg(){return new l(function(l,d){invoke(n,f,l,d)})}return d=d?d.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(n,d,f){var _=ei;return function(E,L){if(_===es)throw Error("Generator is already running");if(_===eo){if("throw"===E)throw L;return{value:l,done:!0}}for(f.method=E,f.arg=L;;){var z=f.delegate;if(z){var et=maybeInvokeDelegate(z,f);if(et){if(et===el)continue;return et}}if("next"===f.method)f.sent=f._sent=f.arg;else if("throw"===f.method){if(_===ei)throw _=eo,f.arg;f.dispatchException(f.arg)}else"return"===f.method&&f.abrupt("return",f.arg);_=es;var er=tryCatch(n,d,f);if("normal"===er.type){if(_=f.done?eo:"suspendedYield",er.arg===el)continue;return{value:er.arg,done:f.done}}"throw"===er.type&&(_=eo,f.method="throw",f.arg=er.arg)}}}function maybeInvokeDelegate(n,d){var f=d.method,_=n.iterator[f];if(_===l)return d.delegate=null,"throw"===f&&n.iterator.return&&(d.method="return",d.arg=l,maybeInvokeDelegate(n,d),"throw"===d.method)||"return"!==f&&(d.method="throw",d.arg=TypeError("The iterator does not provide a '"+f+"' method")),el;var E=tryCatch(_,n.iterator,d.arg);if("throw"===E.type)return d.method="throw",d.arg=E.arg,d.delegate=null,el;var L=E.arg;return L?L.done?(d[n.resultName]=L.value,d.next=n.nextLoc,"return"!==d.method&&(d.method="next",d.arg=l),d.delegate=null,el):L:(d.method="throw",d.arg=TypeError("iterator result is not an object"),d.delegate=null,el)}function pushTryEntry(n){var l={tryLoc:n[0]};1 in n&&(l.catchLoc=n[1]),2 in n&&(l.finallyLoc=n[2],l.afterLoc=n[3]),this.tryEntries.push(l)}function resetTryEntry(n){var l=n.completion||{};l.type="normal",delete l.arg,n.completion=l}function Context(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(pushTryEntry,this),this.reset(!0)}function values(n){if(n||""===n){var d=n[et];if(d)return d.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var _=-1,i=function next(){for(;++_<n.length;)if(E.call(n,_))return next.value=n[_],next.done=!1,next;return next.value=l,next.done=!0,next};return i.next=i}}throw TypeError(f(n)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,L(ef,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),L(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,en,"GeneratorFunction"),d.isGeneratorFunction=function(n){var l="function"==typeof n&&n.constructor;return!!l&&(l===GeneratorFunction||"GeneratorFunction"===(l.displayName||l.name))},d.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,GeneratorFunctionPrototype):(n.__proto__=GeneratorFunctionPrototype,define(n,en,"GeneratorFunction")),n.prototype=Object.create(ef),n},d.awrap=function(n){return{__await:n}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,er,function(){return this}),d.AsyncIterator=AsyncIterator,d.async=function(n,l,f,_,E){void 0===E&&(E=Promise);var L=new AsyncIterator(wrap(n,l,f,_),E);return d.isGeneratorFunction(l)?L:L.next().then(function(n){return n.done?n.value:L.next()})},defineIteratorMethods(ef),define(ef,en,"Generator"),define(ef,et,function(){return this}),define(ef,"toString",function(){return"[object Generator]"}),d.keys=function(n){var l=Object(n),d=[];for(var f in l)d.push(f);return d.reverse(),function next(){for(;d.length;){var n=d.pop();if(n in l)return next.value=n,next.done=!1,next}return next.done=!0,next}},d.values=values,Context.prototype={constructor:Context,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(resetTryEntry),!n)for(var d in this)"t"===d.charAt(0)&&E.call(this,d)&&!isNaN(+d.slice(1))&&(this[d]=l)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var d=this;function handle(f,_){return L.type="throw",L.arg=n,d.next=f,_&&(d.method="next",d.arg=l),!!_}for(var f=this.tryEntries.length-1;f>=0;--f){var _=this.tryEntries[f],L=_.completion;if("root"===_.tryLoc)return handle("end");if(_.tryLoc<=this.prev){var z=E.call(_,"catchLoc"),et=E.call(_,"finallyLoc");if(z&&et){if(this.prev<_.catchLoc)return handle(_.catchLoc,!0);if(this.prev<_.finallyLoc)return handle(_.finallyLoc)}else if(z){if(this.prev<_.catchLoc)return handle(_.catchLoc,!0)}else{if(!et)throw Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return handle(_.finallyLoc)}}}},abrupt:function(n,l){for(var d=this.tryEntries.length-1;d>=0;--d){var f=this.tryEntries[d];if(f.tryLoc<=this.prev&&E.call(f,"finallyLoc")&&this.prev<f.finallyLoc){var _=f;break}}_&&("break"===n||"continue"===n)&&_.tryLoc<=l&&l<=_.finallyLoc&&(_=null);var L=_?_.completion:{};return L.type=n,L.arg=l,_?(this.method="next",this.next=_.finallyLoc,el):this.complete(L)},complete:function(n,l){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&l&&(this.next=l),el},finish:function(n){for(var l=this.tryEntries.length-1;l>=0;--l){var d=this.tryEntries[l];if(d.finallyLoc===n)return this.complete(d.completion,d.afterLoc),resetTryEntry(d),el}},catch:function(n){for(var l=this.tryEntries.length-1;l>=0;--l){var d=this.tryEntries[l];if(d.tryLoc===n){var f=d.completion;if("throw"===f.type){var _=f.arg;resetTryEntry(d)}return _}}throw Error("illegal catch attempt")},delegateYield:function(n,d,f){return this.delegate={iterator:values(n),resultName:d,nextLoc:f},"next"===this.method&&(this.arg=l),el}},d}n.exports=_regeneratorRuntime,n.exports.__esModule=!0,n.exports.default=n.exports},6015:function(n){function _setPrototypeOf(l,d){return n.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,l){return n.__proto__=l,n},n.exports.__esModule=!0,n.exports.default=n.exports,_setPrototypeOf(l,d)}n.exports=_setPrototypeOf,n.exports.__esModule=!0,n.exports.default=n.exports},7424:function(n,l,d){var f=d(5372),_=d(8872),E=d(6116),L=d(2218);function _slicedToArray(n,l){return f(n)||_(n,l)||E(n,l)||L()}n.exports=_slicedToArray,n.exports.__esModule=!0,n.exports.default=n.exports},5036:function(n,l,d){var f=d(8698).default;function toPrimitive(n,l){if("object"!=f(n)||!n)return n;var d=n[Symbol.toPrimitive];if(void 0!==d){var _=d.call(n,l||"default");if("object"!=f(_))return _;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(n)}n.exports=toPrimitive,n.exports.__esModule=!0,n.exports.default=n.exports},4062:function(n,l,d){var f=d(8698).default,_=d(5036);function toPropertyKey(n){var l=_(n,"string");return"symbol"==f(l)?l:String(l)}n.exports=toPropertyKey,n.exports.__esModule=!0,n.exports.default=n.exports},8698:function(n){function _typeof(l){return n.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.__esModule=!0,n.exports.default=n.exports,_typeof(l)}n.exports=_typeof,n.exports.__esModule=!0,n.exports.default=n.exports},6116:function(n,l,d){var f=d(3897);function _unsupportedIterableToArray(n,l){if(n){if("string"==typeof n)return f(n,l);var d=Object.prototype.toString.call(n).slice(8,-1);if("Object"===d&&n.constructor&&(d=n.constructor.name),"Map"===d||"Set"===d)return Array.from(n);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return f(n,l)}}n.exports=_unsupportedIterableToArray,n.exports.__esModule=!0,n.exports.default=n.exports},3496:function(n,l,d){var f=d(3808),_=d(6015),E=d(6035),L=d(3515);function _wrapNativeSuper(l){var d="function"==typeof Map?new Map:void 0;return n.exports=_wrapNativeSuper=function(n){if(null===n||!E(n))return n;if("function"!=typeof n)throw TypeError("Super expression must either be null or a function");if(void 0!==d){if(d.has(n))return d.get(n);d.set(n,Wrapper)}function Wrapper(){return L(n,arguments,f(this).constructor)}return Wrapper.prototype=Object.create(n.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_(Wrapper,n)},n.exports.__esModule=!0,n.exports.default=n.exports,_wrapNativeSuper(l)}n.exports=_wrapNativeSuper,n.exports.__esModule=!0,n.exports.default=n.exports},4687:function(n,l,d){var f=d(7061)();n.exports=f;try{regeneratorRuntime=f}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=f:Function("r","regeneratorRuntime = r")(f)}},2238:function(n,l,d){"use strict";d.d(l,{Jn:function(){return eu},KN:function(){return registerVersion},Mq:function(){return getApp},Xd:function(){return _registerComponent},ZF:function(){return initializeApp},qX:function(){return _getProvider}});var f=d(8463),_=d(3333),E=d(4444),L=d(6531);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PlatformLoggerServiceImpl=class PlatformLoggerServiceImpl{constructor(n){this.container=n}getPlatformInfoString(){let n=this.container.getProviders();return n.map(n=>{if(!isVersionServiceProvider(n))return null;{let l=n.getImmediate();return`${l.library}/${l.version}`}}).filter(n=>n).join(" ")}};function isVersionServiceProvider(n){let l=n.getComponent();return(null==l?void 0:l.type)==="VERSION"}let z="@firebase/app",et="0.9.26",er=new _.Yd("@firebase/app"),en="[DEFAULT]",ei={[z]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},es=new Map,eo=new Map;function _addComponent(n,l){try{n.container.addComponent(l)}catch(d){er.debug(`Component ${l.name} failed to register with FirebaseApp ${n.name}`,d)}}function _registerComponent(n){let l=n.name;if(eo.has(l))return er.debug(`There were multiple attempts to register component ${l}.`),!1;for(let d of(eo.set(l,n),es.values()))_addComponent(d,n);return!0}function _getProvider(n,l){let d=n.container.getProvider("heartbeat").getImmediate({optional:!0});return d&&d.triggerHeartbeat(),n.container.getProvider(l)}let el=new E.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirebaseAppImpl=class FirebaseAppImpl{constructor(n,l,d){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},l),this._name=l.name,this._automaticDataCollectionEnabled=l.automaticDataCollectionEnabled,this._container=d,this.container.addComponent(new f.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw el.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu="10.7.2";function initializeApp(n,l={}){let d=n;if("object"!=typeof l){let n=l;l={name:n}}let _=Object.assign({name:en,automaticDataCollectionEnabled:!1},l),L=_.name;if("string"!=typeof L||!L)throw el.create("bad-app-name",{appName:String(L)});if(d||(d=(0,E.aH)()),!d)throw el.create("no-options");let z=es.get(L);if(z){if((0,E.vZ)(d,z.options)&&(0,E.vZ)(_,z.config))return z;throw el.create("duplicate-app",{appName:L})}let et=new f.H0(L);for(let n of eo.values())et.addComponent(n);let er=new FirebaseAppImpl(d,_,et);return es.set(L,er),er}function getApp(n=en){let l=es.get(n);if(!l&&n===en&&(0,E.aH)())return initializeApp();if(!l)throw el.create("no-app",{appName:n});return l}function registerVersion(n,l,d){var _;let E=null!==(_=ei[n])&&void 0!==_?_:n;d&&(E+=`-${d}`);let L=E.match(/\s|\//),z=l.match(/\s|\//);if(L||z){let n=[`Unable to register library "${E}" with version "${l}":`];L&&n.push(`library name "${E}" contains illegal characters (whitespace or "/")`),L&&z&&n.push("and"),z&&n.push(`version name "${l}" contains illegal characters (whitespace or "/")`),er.warn(n.join(" "));return}_registerComponent(new f.wA(`${E}-version`,()=>({library:E,version:l}),"VERSION"))}let ec="firebase-heartbeat-store",eh=null;function getDbPromise(){return eh||(eh=(0,L.X3)("firebase-heartbeat-database",1,{upgrade:(n,l)=>{if(0===l)try{n.createObjectStore(ec)}catch(n){console.warn(n)}}}).catch(n=>{throw el.create("idb-open",{originalErrorMessage:n.message})})),eh}async function readHeartbeatsFromIndexedDB(n){try{let l=await getDbPromise(),d=await l.transaction(ec).objectStore(ec).get(computeKey(n));return d}catch(n){if(n instanceof E.ZR)er.warn(n.message);else{let l=el.create("idb-get",{originalErrorMessage:null==n?void 0:n.message});er.warn(l.message)}}}async function writeHeartbeatsToIndexedDB(n,l){try{let d=await getDbPromise(),f=d.transaction(ec,"readwrite"),_=f.objectStore(ec);await _.put(l,computeKey(n)),await f.done}catch(n){if(n instanceof E.ZR)er.warn(n.message);else{let l=el.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});er.warn(l.message)}}}function computeKey(n){return`${n.name}!${n.options.appId}`}let HeartbeatServiceImpl=class HeartbeatServiceImpl{constructor(n){this.container=n,this._heartbeatsCache=null;let l=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(l),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var n,l;let d=this.container.getProvider("platform-logger").getImmediate(),f=d.getPlatformInfoString(),_=getUTCDateString();return(null===(n=this._heartbeatsCache)||void 0===n?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(l=this._heartbeatsCache)||void 0===l?void 0:l.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===_||this._heartbeatsCache.heartbeats.some(n=>n.date===_)?void 0:(this._heartbeatsCache.heartbeats.push({date:_,agent:f}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{let l=new Date(n.date).valueOf(),d=Date.now();return d-l<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var n;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(n=this._heartbeatsCache)||void 0===n?void 0:n.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let l=getUTCDateString(),{heartbeatsToSend:d,unsentEntries:f}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),_=(0,E.L)(JSON.stringify({version:2,heartbeats:d}));return this._heartbeatsCache.lastSentHeartbeatDate=l,f.length>0?(this._heartbeatsCache.heartbeats=f,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),_}};function getUTCDateString(){let n=new Date;return n.toISOString().substring(0,10)}function extractHeartbeatsForHeader(n,l=1024){let d=[],f=n.slice();for(let _ of n){let n=d.find(n=>n.agent===_.agent);if(n){if(n.dates.push(_.date),countBytes(d)>l){n.dates.pop();break}}else if(d.push({agent:_.agent,dates:[_.date]}),countBytes(d)>l){d.pop();break}f=f.slice(1)}return{heartbeatsToSend:d,unsentEntries:f}}let HeartbeatStorageImpl=class HeartbeatStorageImpl{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,E.hl)()&&(0,E.eu)().then(()=>!0).catch(()=>!1)}async read(){let n=await this._canUseIndexedDBPromise;if(!n)return{heartbeats:[]};{let n=await readHeartbeatsFromIndexedDB(this.app);return(null==n?void 0:n.heartbeats)?n:{heartbeats:[]}}}async overwrite(n){var l;let d=await this._canUseIndexedDBPromise;if(d){let d=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(l=n.lastSentHeartbeatDate)&&void 0!==l?l:d.lastSentHeartbeatDate,heartbeats:n.heartbeats})}}async add(n){var l;let d=await this._canUseIndexedDBPromise;if(d){let d=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(l=n.lastSentHeartbeatDate)&&void 0!==l?l:d.lastSentHeartbeatDate,heartbeats:[...d.heartbeats,...n.heartbeats]})}}};function countBytes(n){return(0,E.L)(JSON.stringify({version:2,heartbeats:n})).length}_registerComponent(new f.wA("platform-logger",n=>new PlatformLoggerServiceImpl(n),"PRIVATE")),_registerComponent(new f.wA("heartbeat",n=>new HeartbeatServiceImpl(n),"PRIVATE")),registerVersion(z,et,""),registerVersion(z,et,"esm2017"),registerVersion("fire-js","")},8463:function(n,l,d){"use strict";d.d(l,{H0:function(){return ComponentContainer},wA:function(){return Component}});var f=d(4444);let Component=class Component{constructor(n,l,d){this.name=n,this.instanceFactory=l,this.type=d,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Provider=class Provider{constructor(n,l){this.name=n,this.container=l,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){let l=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(l)){let n=new f.BH;if(this.instancesDeferred.set(l,n),this.isInitialized(l)||this.shouldAutoInitialize())try{let d=this.getOrInitializeService({instanceIdentifier:l});d&&n.resolve(d)}catch(n){}}return this.instancesDeferred.get(l).promise}getImmediate(n){var l;let d=this.normalizeInstanceIdentifier(null==n?void 0:n.identifier),f=null!==(l=null==n?void 0:n.optional)&&void 0!==l&&l;if(this.isInitialized(d)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:d})}catch(n){if(f)return null;throw n}else{if(f)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,this.shouldAutoInitialize()){if(isComponentEager(n))try{this.getOrInitializeService({instanceIdentifier:_})}catch(n){}for(let[n,l]of this.instancesDeferred.entries()){let d=this.normalizeInstanceIdentifier(n);try{let n=this.getOrInitializeService({instanceIdentifier:d});l.resolve(n)}catch(n){}}}}clearInstance(n=_){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){let n=Array.from(this.instances.values());await Promise.all([...n.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...n.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return null!=this.component}isInitialized(n=_){return this.instances.has(n)}getOptions(n=_){return this.instancesOptions.get(n)||{}}initialize(n={}){let{options:l={}}=n,d=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(d))throw Error(`${this.name}(${d}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let f=this.getOrInitializeService({instanceIdentifier:d,options:l});for(let[n,l]of this.instancesDeferred.entries()){let _=this.normalizeInstanceIdentifier(n);d===_&&l.resolve(f)}return f}onInit(n,l){var d;let f=this.normalizeInstanceIdentifier(l),_=null!==(d=this.onInitCallbacks.get(f))&&void 0!==d?d:new Set;_.add(n),this.onInitCallbacks.set(f,_);let E=this.instances.get(f);return E&&n(E,f),()=>{_.delete(n)}}invokeOnInitCallbacks(n,l){let d=this.onInitCallbacks.get(l);if(d)for(let f of d)try{f(n,l)}catch(n){}}getOrInitializeService({instanceIdentifier:n,options:l={}}){let d=this.instances.get(n);if(!d&&this.component&&(d=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(n),options:l}),this.instances.set(n,d),this.instancesOptions.set(n,l),this.invokeOnInitCallbacks(d,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,d)}catch(n){}return d||null}normalizeInstanceIdentifier(n=_){return this.component?this.component.multipleInstances?n:_:n}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}};function normalizeIdentifierForFactory(n){return n===_?void 0:n}function isComponentEager(n){return"EAGER"===n.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ComponentContainer=class ComponentContainer{constructor(n){this.name=n,this.providers=new Map}addComponent(n){let l=this.getProvider(n.name);if(l.isComponentSet())throw Error(`Component ${n.name} has already been registered with ${this.name}`);l.setComponent(n)}addOrOverwriteComponent(n){let l=this.getProvider(n.name);l.isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);let l=new Provider(n,this);return this.providers.set(n,l),l}getProviders(){return Array.from(this.providers.values())}}},3333:function(n,l,d){"use strict";var f,_;d.d(l,{Yd:function(){return Logger},in:function(){return f}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E=[];(_=f||(f={}))[_.DEBUG=0]="DEBUG",_[_.VERBOSE=1]="VERBOSE",_[_.INFO=2]="INFO",_[_.WARN=3]="WARN",_[_.ERROR=4]="ERROR",_[_.SILENT=5]="SILENT";let L={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},z=f.INFO,et={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},defaultLogHandler=(n,l,...d)=>{if(l<n.logLevel)return;let f=new Date().toISOString(),_=et[l];if(_)console[_](`[${f}]  ${n.name}:`,...d);else throw Error(`Attempted to log a message with an invalid logType (value: ${l})`)};let Logger=class Logger{constructor(n){this.name=n,this._logLevel=z,this._logHandler=defaultLogHandler,this._userLogHandler=null,E.push(this)}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in f))throw TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel="string"==typeof n?L[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if("function"!=typeof n)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...n),this._logHandler(this,f.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...n),this._logHandler(this,f.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,f.INFO,...n),this._logHandler(this,f.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,f.WARN,...n),this._logHandler(this,f.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...n),this._logHandler(this,f.ERROR,...n)}}},8481:function(n,l,d){"use strict";let f,_;var E,L,z,et,er=d(2238),en=d(8463),ei=d(4444);let instanceOfAny=(n,l)=>l.some(l=>n instanceof l);function getIdbProxyableTypes(){return f||(f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return _||(_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}let es=new WeakMap,eo=new WeakMap,el=new WeakMap,eu=new WeakMap,ec=new WeakMap;function promisifyRequest(n){let l=new Promise((l,d)=>{let unlisten=()=>{n.removeEventListener("success",success),n.removeEventListener("error",error)},success=()=>{l(wrap_idb_value_wrap(n.result)),unlisten()},error=()=>{d(n.error),unlisten()};n.addEventListener("success",success),n.addEventListener("error",error)});return l.then(l=>{l instanceof IDBCursor&&es.set(l,n)}).catch(()=>{}),ec.set(l,n),l}function cacheDonePromiseForTransaction(n){if(eo.has(n))return;let l=new Promise((l,d)=>{let unlisten=()=>{n.removeEventListener("complete",complete),n.removeEventListener("error",error),n.removeEventListener("abort",error)},complete=()=>{l(),unlisten()},error=()=>{d(n.error||new DOMException("AbortError","AbortError")),unlisten()};n.addEventListener("complete",complete),n.addEventListener("error",error),n.addEventListener("abort",error)});eo.set(n,l)}let eh={get(n,l,d){if(n instanceof IDBTransaction){if("done"===l)return eo.get(n);if("objectStoreNames"===l)return n.objectStoreNames||el.get(n);if("store"===l)return d.objectStoreNames[1]?void 0:d.objectStore(d.objectStoreNames[0])}return wrap_idb_value_wrap(n[l])},set:(n,l,d)=>(n[l]=d,!0),has:(n,l)=>n instanceof IDBTransaction&&("done"===l||"store"===l)||l in n};function replaceTraps(n){eh=n(eh)}function wrapFunction(n){return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?getCursorAdvanceMethods().includes(n)?function(...l){return n.apply(unwrap(this),l),wrap_idb_value_wrap(es.get(this))}:function(...l){return wrap_idb_value_wrap(n.apply(unwrap(this),l))}:function(l,...d){let f=n.call(unwrap(this),l,...d);return el.set(f,l.sort?l.sort():[l]),wrap_idb_value_wrap(f)}}function transformCachableValue(n){return"function"==typeof n?wrapFunction(n):(n instanceof IDBTransaction&&cacheDonePromiseForTransaction(n),instanceOfAny(n,getIdbProxyableTypes()))?new Proxy(n,eh):n}function wrap_idb_value_wrap(n){if(n instanceof IDBRequest)return promisifyRequest(n);if(eu.has(n))return eu.get(n);let l=transformCachableValue(n);return l!==n&&(eu.set(n,l),ec.set(l,n)),l}let unwrap=n=>ec.get(n);function openDB(n,l,{blocked:d,upgrade:f,blocking:_,terminated:E}={}){let L=indexedDB.open(n,l),z=wrap_idb_value_wrap(L);return f&&L.addEventListener("upgradeneeded",n=>{f(wrap_idb_value_wrap(L.result),n.oldVersion,n.newVersion,wrap_idb_value_wrap(L.transaction))}),d&&L.addEventListener("blocked",()=>d()),z.then(n=>{E&&n.addEventListener("close",()=>E()),_&&n.addEventListener("versionchange",()=>_())}).catch(()=>{}),z}let ef=["get","getKey","getAll","getAllKeys","count"],ep=["put","add","delete","clear"],e_=new Map;function getMethod(n,l){if(!(n instanceof IDBDatabase&&!(l in n)&&"string"==typeof l))return;if(e_.get(l))return e_.get(l);let d=l.replace(/FromIndex$/,""),f=l!==d,_=ep.includes(d);if(!(d in(f?IDBIndex:IDBObjectStore).prototype)||!(_||ef.includes(d)))return;let method=async function(n,...l){let E=this.transaction(n,_?"readwrite":"readonly"),L=E.store;return f&&(L=L.index(l.shift())),(await Promise.all([L[d](...l),_&&E.done]))[0]};return e_.set(l,method),method}replaceTraps(n=>({...n,get:(l,d,f)=>getMethod(l,d)||n.get(l,d,f),has:(l,d)=>!!getMethod(l,d)||n.has(l,d)}));let em="@firebase/installations",eg="0.6.4",ey=`w:${eg}`,ev="FIS_v2",eE=new ei.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function isServerError(n){return n instanceof ei.ZR&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getInstallationsEndpoint({projectId:n}){return`https://firebaseinstallations.googleapis.com/v1/projects/${n}/installations`}function extractAuthTokenInfoFromResponse(n){return{token:n.token,requestStatus:2,expiresIn:getExpiresInFromResponseExpiresIn(n.expiresIn),creationTime:Date.now()}}async function getErrorFromResponse(n,l){let d=await l.json(),f=d.error;return eE.create("request-failed",{requestName:n,serverCode:f.code,serverMessage:f.message,serverStatus:f.status})}function getHeaders({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function getHeadersWithAuth(n,{refreshToken:l}){let d=getHeaders(n);return d.append("Authorization",getAuthorizationHeader(l)),d}async function retryIfServerError(n){let l=await n();return l.status>=500&&l.status<600?n():l}function getExpiresInFromResponseExpiresIn(n){return Number(n.replace("s","000"))}function getAuthorizationHeader(n){return`${ev} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function createInstallationRequest({appConfig:n,heartbeatServiceProvider:l},{fid:d}){let f=getInstallationsEndpoint(n),_=getHeaders(n),E=l.getImmediate({optional:!0});if(E){let n=await E.getHeartbeatsHeader();n&&_.append("x-firebase-client",n)}let L={fid:d,authVersion:ev,appId:n.appId,sdkVersion:ey},z={method:"POST",headers:_,body:JSON.stringify(L)},et=await retryIfServerError(()=>fetch(f,z));if(et.ok){let n=await et.json(),l={fid:n.fid||d,registrationStatus:2,refreshToken:n.refreshToken,authToken:extractAuthTokenInfoFromResponse(n.authToken)};return l}throw await getErrorFromResponse("Create Installation",et)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sleep(n){return new Promise(l=>{setTimeout(l,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bufferToBase64UrlSafe(n){let l=btoa(String.fromCharCode(...n));return l.replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eT=/^[cdef][\w-]{21}$/;function generateFid(){try{let n=new Uint8Array(17),l=self.crypto||self.msCrypto;l.getRandomValues(n),n[0]=112+n[0]%16;let d=encode(n);return eT.test(d)?d:""}catch(n){return""}}function encode(n){let l=bufferToBase64UrlSafe(n);return l.substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getKey(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eI=new Map;function fidChanged(n,l){let d=getKey(n);callFidChangeCallbacks(d,l),broadcastFidChange(d,l)}function callFidChangeCallbacks(n,l){let d=eI.get(n);if(d)for(let n of d)n(l)}function broadcastFidChange(n,l){let d=getBroadcastChannel();d&&d.postMessage({key:n,fid:l}),closeBroadcastChannel()}let eP=null;function getBroadcastChannel(){return!eP&&"BroadcastChannel"in self&&((eP=new BroadcastChannel("[Firebase] FID Change")).onmessage=n=>{callFidChangeCallbacks(n.data.key,n.data.fid)}),eP}function closeBroadcastChannel(){0===eI.size&&eP&&(eP.close(),eP=null)}let eA="firebase-installations-store",ew=null;function getDbPromise(){return ew||(ew=openDB("firebase-installations-database",1,{upgrade:(n,l)=>{0===l&&n.createObjectStore(eA)}})),ew}async function set(n,l){let d=getKey(n),f=await getDbPromise(),_=f.transaction(eA,"readwrite"),E=_.objectStore(eA),L=await E.get(d);return await E.put(l,d),await _.done,L&&L.fid===l.fid||fidChanged(n,l.fid),l}async function remove(n){let l=getKey(n),d=await getDbPromise(),f=d.transaction(eA,"readwrite");await f.objectStore(eA).delete(l),await f.done}async function update(n,l){let d=getKey(n),f=await getDbPromise(),_=f.transaction(eA,"readwrite"),E=_.objectStore(eA),L=await E.get(d),z=l(L);return void 0===z?await E.delete(d):await E.put(z,d),await _.done,z&&(!L||L.fid!==z.fid)&&fidChanged(n,z.fid),z}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getInstallationEntry(n){let l;let d=await update(n.appConfig,d=>{let f=updateOrCreateInstallationEntry(d),_=triggerRegistrationIfNecessary(n,f);return l=_.registrationPromise,_.installationEntry});return""===d.fid?{installationEntry:await l}:{installationEntry:d,registrationPromise:l}}function updateOrCreateInstallationEntry(n){let l=n||{fid:generateFid(),registrationStatus:0};return clearTimedOutRequest(l)}function triggerRegistrationIfNecessary(n,l){if(0===l.registrationStatus){if(!navigator.onLine){let n=Promise.reject(eE.create("app-offline"));return{installationEntry:l,registrationPromise:n}}let d={fid:l.fid,registrationStatus:1,registrationTime:Date.now()},f=registerInstallation(n,d);return{installationEntry:d,registrationPromise:f}}return 1===l.registrationStatus?{installationEntry:l,registrationPromise:waitUntilFidRegistration(n)}:{installationEntry:l}}async function registerInstallation(n,l){try{let d=await createInstallationRequest(n,l);return set(n.appConfig,d)}catch(d){throw isServerError(d)&&409===d.customData.serverCode?await remove(n.appConfig):await set(n.appConfig,{fid:l.fid,registrationStatus:0}),d}}async function waitUntilFidRegistration(n){let l=await updateInstallationRequest(n.appConfig);for(;1===l.registrationStatus;)await sleep(100),l=await updateInstallationRequest(n.appConfig);if(0===l.registrationStatus){let{installationEntry:l,registrationPromise:d}=await getInstallationEntry(n);return d||l}return l}function updateInstallationRequest(n){return update(n,n=>{if(!n)throw eE.create("installation-not-found");return clearTimedOutRequest(n)})}function clearTimedOutRequest(n){return hasInstallationRequestTimedOut(n)?{fid:n.fid,registrationStatus:0}:n}function hasInstallationRequestTimedOut(n){return 1===n.registrationStatus&&n.registrationTime+1e4<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function generateAuthTokenRequest({appConfig:n,heartbeatServiceProvider:l},d){let f=getGenerateAuthTokenEndpoint(n,d),_=getHeadersWithAuth(n,d),E=l.getImmediate({optional:!0});if(E){let n=await E.getHeartbeatsHeader();n&&_.append("x-firebase-client",n)}let L={installation:{sdkVersion:ey,appId:n.appId}},z={method:"POST",headers:_,body:JSON.stringify(L)},et=await retryIfServerError(()=>fetch(f,z));if(et.ok){let n=await et.json(),l=extractAuthTokenInfoFromResponse(n);return l}throw await getErrorFromResponse("Generate Auth Token",et)}function getGenerateAuthTokenEndpoint(n,{fid:l}){return`${getInstallationsEndpoint(n)}/${l}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function refreshAuthToken(n,l=!1){let d;let f=await update(n.appConfig,f=>{if(!isEntryRegistered(f))throw eE.create("not-registered");let _=f.authToken;if(!l&&isAuthTokenValid(_))return f;if(1===_.requestStatus)return d=waitUntilAuthTokenRequest(n,l),f;{if(!navigator.onLine)throw eE.create("app-offline");let l=makeAuthTokenRequestInProgressEntry(f);return d=fetchAuthTokenFromServer(n,l),l}}),_=d?await d:f.authToken;return _}async function waitUntilAuthTokenRequest(n,l){let d=await updateAuthTokenRequest(n.appConfig);for(;1===d.authToken.requestStatus;)await sleep(100),d=await updateAuthTokenRequest(n.appConfig);let f=d.authToken;return 0===f.requestStatus?refreshAuthToken(n,l):f}function updateAuthTokenRequest(n){return update(n,n=>{if(!isEntryRegistered(n))throw eE.create("not-registered");let l=n.authToken;return hasAuthTokenRequestTimedOut(l)?Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}):n})}async function fetchAuthTokenFromServer(n,l){try{let d=await generateAuthTokenRequest(n,l),f=Object.assign(Object.assign({},l),{authToken:d});return await set(n.appConfig,f),d}catch(d){if(isServerError(d)&&(401===d.customData.serverCode||404===d.customData.serverCode))await remove(n.appConfig);else{let d=Object.assign(Object.assign({},l),{authToken:{requestStatus:0}});await set(n.appConfig,d)}throw d}}function isEntryRegistered(n){return void 0!==n&&2===n.registrationStatus}function isAuthTokenValid(n){return 2===n.requestStatus&&!isAuthTokenExpired(n)}function isAuthTokenExpired(n){let l=Date.now();return l<n.creationTime||n.creationTime+n.expiresIn<l+36e5}function makeAuthTokenRequestInProgressEntry(n){let l={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:l})}function hasAuthTokenRequestTimedOut(n){return 1===n.requestStatus&&n.requestTime+1e4<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getId(n){let{installationEntry:l,registrationPromise:d}=await getInstallationEntry(n);return d?d.catch(console.error):refreshAuthToken(n).catch(console.error),l.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getToken(n,l=!1){await completeInstallationRegistration(n);let d=await refreshAuthToken(n,l);return d.token}async function completeInstallationRegistration(n){let{registrationPromise:l}=await getInstallationEntry(n);l&&await l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function extractAppConfig(n){if(!n||!n.options)throw getMissingValueError("App Configuration");if(!n.name)throw getMissingValueError("App Name");for(let l of["projectId","apiKey","appId"])if(!n.options[l])throw getMissingValueError(l);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function getMissingValueError(n){return eE.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eR="installations";(0,er.Xd)(new en.wA(eR,n=>{let l=n.getProvider("app").getImmediate(),d=extractAppConfig(l),f=(0,er.qX)(l,"heartbeat");return{app:l,appConfig:d,heartbeatServiceProvider:f,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,er.Xd)(new en.wA("installations-internal",n=>{let l=n.getProvider("app").getImmediate(),d=(0,er.qX)(l,eR).getImmediate();return{getId:()=>getId(d),getToken:n=>getToken(d,n)}},"PRIVATE")),(0,er.KN)(em,eg),(0,er.KN)(em,eg,"esm2017");var eS=d(6531);let eV="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",eC="google.c.a.c_id";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function arrayToBase64(n){let l=new Uint8Array(n),d=btoa(String.fromCharCode(...l));return d.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function base64ToArray(n){let l="=".repeat((4-n.length%4)%4),d=(n+l).replace(/\-/g,"+").replace(/_/g,"/"),f=atob(d),_=new Uint8Array(f.length);for(let n=0;n<f.length;++n)_[n]=f.charCodeAt(n);return _}(E=z||(z={}))[E.DATA_MESSAGE=1]="DATA_MESSAGE",E[E.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(L=et||(et={})).PUSH_RECEIVED="push-received",L.NOTIFICATION_CLICKED="notification-clicked";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ek="fcm_token_details_db",eD="fcm_token_object_Store";async function migrateOldDatabase(n){if("databases"in indexedDB){let n=await indexedDB.databases(),l=n.map(n=>n.name);if(!l.includes(ek))return null}let l=null,d=await (0,eS.X3)(ek,5,{upgrade:async(d,f,_,E)=>{var L;if(f<2||!d.objectStoreNames.contains(eD))return;let z=E.objectStore(eD),et=await z.index("fcmSenderId").get(n);if(await z.clear(),et){if(2===f){if(!et.auth||!et.p256dh||!et.endpoint)return;l={token:et.fcmToken,createTime:null!==(L=et.createTime)&&void 0!==L?L:Date.now(),subscriptionOptions:{auth:et.auth,p256dh:et.p256dh,endpoint:et.endpoint,swScope:et.swScope,vapidKey:"string"==typeof et.vapidKey?et.vapidKey:arrayToBase64(et.vapidKey)}}}else 3===f?l={token:et.fcmToken,createTime:et.createTime,subscriptionOptions:{auth:arrayToBase64(et.auth),p256dh:arrayToBase64(et.p256dh),endpoint:et.endpoint,swScope:et.swScope,vapidKey:arrayToBase64(et.vapidKey)}}:4===f&&(l={token:et.fcmToken,createTime:et.createTime,subscriptionOptions:{auth:arrayToBase64(et.auth),p256dh:arrayToBase64(et.p256dh),endpoint:et.endpoint,swScope:et.swScope,vapidKey:arrayToBase64(et.vapidKey)}})}}});return d.close(),await (0,eS.Lj)(ek),await (0,eS.Lj)("fcm_vapid_details_db"),await (0,eS.Lj)("undefined"),checkTokenDetails(l)?l:null}function checkTokenDetails(n){if(!n||!n.subscriptionOptions)return!1;let{subscriptionOptions:l}=n;return"number"==typeof n.createTime&&n.createTime>0&&"string"==typeof n.token&&n.token.length>0&&"string"==typeof l.auth&&l.auth.length>0&&"string"==typeof l.p256dh&&l.p256dh.length>0&&"string"==typeof l.endpoint&&l.endpoint.length>0&&"string"==typeof l.swScope&&l.swScope.length>0&&"string"==typeof l.vapidKey&&l.vapidKey.length>0}let eO="firebase-messaging-store",ex=null;function index_esm2017_getDbPromise(){return ex||(ex=(0,eS.X3)("firebase-messaging-database",1,{upgrade:(n,l)=>{0===l&&n.createObjectStore(eO)}})),ex}async function dbGet(n){let l=function({appConfig:n}){return n.appId}(n),d=await index_esm2017_getDbPromise(),f=await d.transaction(eO).objectStore(eO).get(l);if(f)return f;{let l=await migrateOldDatabase(n.appConfig.senderId);if(l)return await dbSet(n,l),l}}async function dbSet(n,l){let d=function({appConfig:n}){return n.appId}(n),f=await index_esm2017_getDbPromise(),_=f.transaction(eO,"readwrite");return await _.objectStore(eO).put(l,d),await _.done,l}async function dbRemove(n){let l=function({appConfig:n}){return n.appId}(n),d=await index_esm2017_getDbPromise(),f=d.transaction(eO,"readwrite");await f.objectStore(eO).delete(l),await f.done}let eN=new ei.LL("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function requestGetToken(n,l){let d;let f=await index_esm2017_getHeaders(n),_=getBody(l),E={method:"POST",headers:f,body:JSON.stringify(_)};try{let l=await fetch(getEndpoint(n.appConfig),E);d=await l.json()}catch(n){throw eN.create("token-subscribe-failed",{errorInfo:null==n?void 0:n.toString()})}if(d.error){let n=d.error.message;throw eN.create("token-subscribe-failed",{errorInfo:n})}if(!d.token)throw eN.create("token-subscribe-no-token");return d.token}async function requestUpdateToken(n,l){let d;let f=await index_esm2017_getHeaders(n),_=getBody(l.subscriptionOptions),E={method:"PATCH",headers:f,body:JSON.stringify(_)};try{let f=await fetch(`${getEndpoint(n.appConfig)}/${l.token}`,E);d=await f.json()}catch(n){throw eN.create("token-update-failed",{errorInfo:null==n?void 0:n.toString()})}if(d.error){let n=d.error.message;throw eN.create("token-update-failed",{errorInfo:n})}if(!d.token)throw eN.create("token-update-no-token");return d.token}async function requestDeleteToken(n,l){let d=await index_esm2017_getHeaders(n);try{let f=await fetch(`${getEndpoint(n.appConfig)}/${l}`,{method:"DELETE",headers:d}),_=await f.json();if(_.error){let n=_.error.message;throw eN.create("token-unsubscribe-failed",{errorInfo:n})}}catch(n){throw eN.create("token-unsubscribe-failed",{errorInfo:null==n?void 0:n.toString()})}}function getEndpoint({projectId:n}){return`https://fcmregistrations.googleapis.com/v1/projects/${n}/registrations`}async function index_esm2017_getHeaders({appConfig:n,installations:l}){let d=await l.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${d}`})}function getBody({p256dh:n,auth:l,endpoint:d,vapidKey:f}){let _={web:{endpoint:d,auth:l,p256dh:n}};return f!==eV&&(_.web.applicationPubKey=f),_}async function getTokenInternal(n){let l=await getPushSubscription(n.swRegistration,n.vapidKey),d={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:l.endpoint,auth:arrayToBase64(l.getKey("auth")),p256dh:arrayToBase64(l.getKey("p256dh"))},f=await dbGet(n.firebaseDependencies);if(!f)return getNewToken(n.firebaseDependencies,d);if(isTokenValid(f.subscriptionOptions,d))return Date.now()>=f.createTime+6048e5?updateToken(n,{token:f.token,createTime:Date.now(),subscriptionOptions:d}):f.token;try{await requestDeleteToken(n.firebaseDependencies,f.token)}catch(n){console.warn(n)}return getNewToken(n.firebaseDependencies,d)}async function deleteTokenInternal(n){let l=await dbGet(n.firebaseDependencies);l&&(await requestDeleteToken(n.firebaseDependencies,l.token),await dbRemove(n.firebaseDependencies));let d=await n.swRegistration.pushManager.getSubscription();return!d||d.unsubscribe()}async function updateToken(n,l){try{let d=await requestUpdateToken(n.firebaseDependencies,l),f=Object.assign(Object.assign({},l),{token:d,createTime:Date.now()});return await dbSet(n.firebaseDependencies,f),d}catch(l){throw await deleteTokenInternal(n),l}}async function getNewToken(n,l){let d=await requestGetToken(n,l),f={token:d,createTime:Date.now(),subscriptionOptions:l};return await dbSet(n,f),f.token}async function getPushSubscription(n,l){let d=await n.pushManager.getSubscription();return d||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:base64ToArray(l)})}function isTokenValid(n,l){let d=l.vapidKey===n.vapidKey,f=l.endpoint===n.endpoint,_=l.auth===n.auth,E=l.p256dh===n.p256dh;return d&&f&&_&&E}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function externalizePayload(n){let l={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return propagateNotificationPayload(l,n),propagateDataPayload(l,n),propagateFcmOptions(l,n),l}function propagateNotificationPayload(n,l){if(!l.notification)return;n.notification={};let d=l.notification.title;d&&(n.notification.title=d);let f=l.notification.body;f&&(n.notification.body=f);let _=l.notification.image;_&&(n.notification.image=_);let E=l.notification.icon;E&&(n.notification.icon=E)}function propagateDataPayload(n,l){l.data&&(n.data=l.data)}function propagateFcmOptions(n,l){var d,f,_,E,L;if(!l.fcmOptions&&!(null===(d=l.notification)||void 0===d?void 0:d.click_action))return;n.fcmOptions={};let z=null!==(_=null===(f=l.fcmOptions)||void 0===f?void 0:f.link)&&void 0!==_?_:null===(E=l.notification)||void 0===E?void 0:E.click_action;z&&(n.fcmOptions.link=z);let et=null===(L=l.fcmOptions)||void 0===L?void 0:L.analytics_label;et&&(n.fcmOptions.analyticsLabel=et)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function isConsoleMessage(n){return"object"==typeof n&&!!n&&eC in n}function _mergeStrings(n,l){let d=[];for(let f=0;f<n.length;f++)d.push(n.charAt(f)),f<l.length&&d.push(l.charAt(f));return d.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function index_esm2017_extractAppConfig(n){if(!n||!n.options)throw index_esm2017_getMissingValueError("App Configuration Object");if(!n.name)throw index_esm2017_getMissingValueError("App Name");let{options:l}=n;for(let n of["projectId","apiKey","appId","messagingSenderId"])if(!l[n])throw index_esm2017_getMissingValueError(n);return{appName:n.name,projectId:l.projectId,apiKey:l.apiKey,appId:l.appId,senderId:l.messagingSenderId}}function index_esm2017_getMissingValueError(n){return eN.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_mergeStrings("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),_mergeStrings("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MessagingService=class MessagingService{constructor(n,l,d){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let f=index_esm2017_extractAppConfig(n);this.firebaseDependencies={app:n,appConfig:f,installations:l,analyticsProvider:d}}_delete(){return Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function registerDefaultSw(n){try{n.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),n.swRegistration.update().catch(()=>{})}catch(n){throw eN.create("failed-service-worker-registration",{browserErrorMessage:null==n?void 0:n.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function updateSwReg(n,l){if(l||n.swRegistration||await registerDefaultSw(n),l||!n.swRegistration){if(!(l instanceof ServiceWorkerRegistration))throw eN.create("invalid-sw-registration");n.swRegistration=l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function updateVapidKey(n,l){l?n.vapidKey=l:n.vapidKey||(n.vapidKey=eV)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getToken$1(n,l){if(!navigator)throw eN.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw eN.create("permission-blocked");return await updateVapidKey(n,null==l?void 0:l.vapidKey),await updateSwReg(n,null==l?void 0:l.serviceWorkerRegistration),getTokenInternal(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function logToScion(n,l,d){let f=getEventType(l),_=await n.firebaseDependencies.analyticsProvider.get();_.logEvent(f,{message_id:d[eC],message_name:d["google.c.a.c_l"],message_time:d["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}function getEventType(n){switch(n){case et.NOTIFICATION_CLICKED:return"notification_open";case et.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function messageEventListener(n,l){let d=l.data;if(!d.isFirebaseMessaging)return;n.onMessageHandler&&d.messageType===et.PUSH_RECEIVED&&("function"==typeof n.onMessageHandler?n.onMessageHandler(externalizePayload(d)):n.onMessageHandler.next(externalizePayload(d)));let f=d.data;isConsoleMessage(f)&&"1"===f["google.c.a.e"]&&await logToScion(n,d.messageType,f)}let eM="@firebase/messaging",eL="0.12.5";(0,er.Xd)(new en.wA("messaging",n=>{let l=new MessagingService(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>messageEventListener(l,n)),l},"PUBLIC")),(0,er.Xd)(new en.wA("messaging-internal",n=>{let l=n.getProvider("messaging").getImmediate();return{getToken:n=>getToken$1(l,n)}},"PRIVATE")),(0,er.KN)(eM,eL),(0,er.KN)(eM,eL,"esm2017")},8335:function(n,l,d){"use strict";d.d(l,{hJ:function(){return GoogleAuthProvider},v0:function(){return getAuth},Aj:function(){return onAuthStateChanged},F6:function(){return signInWithRedirect},w7:function(){return signOut}});var f=d(4444),_=d(2238),E=d(3333),L=d(7582),z=d(8463);function _prodErrorMap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let et=_prodErrorMap,er=new f.LL("auth","Firebase",_prodErrorMap()),en=new E.Yd("@firebase/auth");function _logWarn(n,...l){en.logLevel<=E.in.WARN&&en.warn(`Auth (${_.Jn}): ${n}`,...l)}function _logError(n,...l){en.logLevel<=E.in.ERROR&&en.error(`Auth (${_.Jn}): ${n}`,...l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _fail(n,...l){throw createErrorInternal(n,...l)}function _createError(n,...l){return createErrorInternal(n,...l)}function _errorWithCustomMessage(n,l,d){let _=Object.assign(Object.assign({},et()),{[l]:d}),E=new f.LL("auth","Firebase",_);return E.create(l,{appName:n.name})}function _assertInstanceOf(n,l,d){if(!(l instanceof d))throw d.name!==l.constructor.name&&_fail(n,"argument-error"),_errorWithCustomMessage(n,"argument-error",`Type of ${l.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function createErrorInternal(n,...l){if("string"!=typeof n){let d=l[0],f=[...l.slice(1)];return f[0]&&(f[0].appName=n.name),n._errorFactory.create(d,...f)}return er.create(n,...l)}function _assert(n,l,...d){if(!n)throw createErrorInternal(l,...d)}function debugFail(n){let l="INTERNAL ASSERTION FAILED: "+n;throw _logError(l),Error(l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getCurrentUrl(){var n;return"undefined"!=typeof self&&(null===(n=self.location)||void 0===n?void 0:n.href)||""}function _isHttpOrHttps(){return"http:"===_getCurrentScheme()||"https:"===_getCurrentScheme()}function _getCurrentScheme(){var n;return"undefined"!=typeof self&&(null===(n=self.location)||void 0===n?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isOnline(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(_isHttpOrHttps()||(0,f.ru)()||"connection"in navigator))||navigator.onLine}function _getUserLanguage(){if("undefined"==typeof navigator)return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Delay=class Delay{constructor(n,l){this.shortDelay=n,this.longDelay=l,l>n||debugFail("Short delay should be less than long delay!"),this.isMobile=(0,f.uI)()||(0,f.b$)()}get(){return _isOnline()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _emulatorUrl(n,l){n.emulator||debugFail("Emulator should always be set here");let{url:d}=n.emulator;return l?`${d}${l.startsWith("/")?l.slice(1):l}`:d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FetchProvider=class FetchProvider{static initialize(n,l,d){this.fetchImpl=n,l&&(this.headersImpl=l),d&&(this.responseImpl=d)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},es=new Delay(3e4,6e4);function _addTidIfNecessary(n,l){return n.tenantId&&!l.tenantId?Object.assign(Object.assign({},l),{tenantId:n.tenantId}):l}async function _performApiRequest(n,l,d,_,E={}){return _performFetchWithErrorHandling(n,E,async()=>{let E={},L={};_&&("GET"===l?L=_:E={body:JSON.stringify(_)});let z=(0,f.xO)(Object.assign({key:n.config.apiKey},L)).slice(1),et=await n._getAdditionalHeaders();return et["Content-Type"]="application/json",n.languageCode&&(et["X-Firebase-Locale"]=n.languageCode),FetchProvider.fetch()(_getFinalTarget(n,n.config.apiHost,d,z),Object.assign({method:l,headers:et,referrerPolicy:"no-referrer"},E))})}async function _performFetchWithErrorHandling(n,l,d){n._canInitEmulator=!1;let _=Object.assign(Object.assign({},ei),l);try{let l=new NetworkTimeout(n),f=await Promise.race([d(),l.promise]);l.clearNetworkTimeout();let E=await f.json();if("needConfirmation"in E)throw _makeTaggedError(n,"account-exists-with-different-credential",E);if(f.ok&&!("errorMessage"in E))return E;{let l=f.ok?E.errorMessage:E.error.message,[d,L]=l.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===d)throw _makeTaggedError(n,"credential-already-in-use",E);if("EMAIL_EXISTS"===d)throw _makeTaggedError(n,"email-already-in-use",E);if("USER_DISABLED"===d)throw _makeTaggedError(n,"user-disabled",E);let z=_[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(L)throw _errorWithCustomMessage(n,z,L);_fail(n,z)}}catch(l){if(l instanceof f.ZR)throw l;_fail(n,"network-request-failed",{message:String(l)})}}async function _performSignInRequest(n,l,d,f,_={}){let E=await _performApiRequest(n,l,d,f,_);return"mfaPendingCredential"in E&&_fail(n,"multi-factor-auth-required",{_serverResponse:E}),E}function _getFinalTarget(n,l,d,f){let _=`${l}${d}?${f}`;return n.config.emulator?_emulatorUrl(n.config,_):`${n.config.apiScheme}://${_}`}function _parseEnforcementState(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let NetworkTimeout=class NetworkTimeout{constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((n,l)=>{this.timer=setTimeout(()=>l(_createError(this.auth,"network-request-failed")),es.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function _makeTaggedError(n,l,d){let f={appName:n.name};d.email&&(f.email=d.email),d.phoneNumber&&(f.phoneNumber=d.phoneNumber);let _=_createError(n,l,f);return _.customData._tokenResponse=d,_}function isEnterprise(n){return void 0!==n&&void 0!==n.enterprise}let RecaptchaConfig=class RecaptchaConfig{constructor(n){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===n.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=n.recaptchaEnforcementState}getProviderEnforcementState(n){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let l of this.recaptchaEnforcementState)if(l.provider&&l.provider===n)return _parseEnforcementState(l.enforcementState);return null}isProviderEnabled(n){return"ENFORCE"===this.getProviderEnforcementState(n)||"AUDIT"===this.getProviderEnforcementState(n)}};async function getRecaptchaConfig(n,l){return _performApiRequest(n,"GET","/v2/recaptchaConfig",_addTidIfNecessary(n,l))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function deleteAccount(n,l){return _performApiRequest(n,"POST","/v1/accounts:delete",l)}async function getAccountInfo(n,l){return _performApiRequest(n,"POST","/v1/accounts:lookup",l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function utcTimestampToDateString(n){if(n)try{let l=new Date(Number(n));if(!isNaN(l.getTime()))return l.toUTCString()}catch(n){}}async function getIdTokenResult(n,l=!1){let d=(0,f.m9)(n),_=await d.getIdToken(l),E=_parseToken(_);_assert(E&&E.exp&&E.auth_time&&E.iat,d.auth,"internal-error");let L="object"==typeof E.firebase?E.firebase:void 0,z=null==L?void 0:L.sign_in_provider;return{claims:E,token:_,authTime:utcTimestampToDateString(secondsStringToMilliseconds(E.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(E.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(E.exp)),signInProvider:z||null,signInSecondFactor:(null==L?void 0:L.sign_in_second_factor)||null}}function secondsStringToMilliseconds(n){return 1e3*Number(n)}function _parseToken(n){let[l,d,_]=n.split(".");if(void 0===l||void 0===d||void 0===_)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{let n=(0,f.tV)(d);if(!n)return _logError("Failed to decode base64 JWT payload"),null;return JSON.parse(n)}catch(n){return _logError("Caught error parsing JWT payload as JSON",null==n?void 0:n.toString()),null}}function _tokenExpiresIn(n){let l=_parseToken(n);return _assert(l,"internal-error"),_assert(void 0!==l.exp,"internal-error"),_assert(void 0!==l.iat,"internal-error"),Number(l.exp)-Number(l.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _logoutIfInvalidated(n,l,d=!1){if(d)return l;try{return await l}catch(l){throw l instanceof f.ZR&&isUserInvalidated(l)&&n.auth.currentUser===n&&await n.auth.signOut(),l}}function isUserInvalidated({code:n}){return"auth/user-disabled"===n||"auth/user-token-expired"===n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ProactiveRefresh=class ProactiveRefresh{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(n){var l;if(n){let n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}{this.errorBackoff=3e4;let n=null!==(l=this.user.stsTokenManager.expirationTime)&&void 0!==l?l:0,d=n-Date.now()-3e5;return Math.max(0,d)}}schedule(n=!1){if(!this.isRunning)return;let l=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},l)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){(null==n?void 0:n.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UserMetadata=class UserMetadata{constructor(n,l){this.createdAt=n,this.lastLoginAt=l,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reloadWithoutSaving(n){var l;let d=n.auth,f=await n.getIdToken(),_=await _logoutIfInvalidated(n,getAccountInfo(d,{idToken:f}));_assert(null==_?void 0:_.users.length,d,"internal-error");let E=_.users[0];n._notifyReloadListener(E);let L=(null===(l=E.providerUserInfo)||void 0===l?void 0:l.length)?extractProviderData(E.providerUserInfo):[],z=mergeProviderData(n.providerData,L),et=n.isAnonymous,er=!(n.email&&E.passwordHash)&&!(null==z?void 0:z.length),en={uid:E.localId,displayName:E.displayName||null,photoURL:E.photoUrl||null,email:E.email||null,emailVerified:E.emailVerified||!1,phoneNumber:E.phoneNumber||null,tenantId:E.tenantId||null,providerData:z,metadata:new UserMetadata(E.createdAt,E.lastLoginAt),isAnonymous:!!et&&er};Object.assign(n,en)}async function reload(n){let l=(0,f.m9)(n);await _reloadWithoutSaving(l),await l.auth._persistUserIfCurrent(l),l.auth._notifyListenersIfCurrent(l)}function mergeProviderData(n,l){let d=n.filter(n=>!l.some(l=>l.providerId===n.providerId));return[...d,...l]}function extractProviderData(n){return n.map(n=>{var{providerId:l}=n,d=(0,L._T)(n,["providerId"]);return{providerId:l,uid:d.rawId||"",displayName:d.displayName||null,email:d.email||null,phoneNumber:d.phoneNumber||null,photoURL:d.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function requestStsToken(n,l){let d=await _performFetchWithErrorHandling(n,{},async()=>{let d=(0,f.xO)({grant_type:"refresh_token",refresh_token:l}).slice(1),{tokenApiHost:_,apiKey:E}=n.config,L=_getFinalTarget(n,_,"/v1/token",`key=${E}`),z=await n._getAdditionalHeaders();return z["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(L,{method:"POST",headers:z,body:d})});return{accessToken:d.access_token,expiresIn:d.expires_in,refreshToken:d.refresh_token}}async function revokeToken(n,l){return _performApiRequest(n,"POST","/v2/accounts:revokeToken",_addTidIfNecessary(n,l))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StsTokenManager=class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){_assert(n.idToken,"internal-error"),_assert(void 0!==n.idToken,"internal-error"),_assert(void 0!==n.refreshToken,"internal-error");let l="expiresIn"in n&&void 0!==n.expiresIn?Number(n.expiresIn):_tokenExpiresIn(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,l)}async getToken(n,l=!1){return(_assert(!this.accessToken||this.refreshToken,n,"user-token-expired"),l||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(n,l){let{accessToken:d,refreshToken:f,expiresIn:_}=await requestStsToken(n,l);this.updateTokensAndExpiration(d,f,Number(_))}updateTokensAndExpiration(n,l,d){this.refreshToken=l||null,this.accessToken=n||null,this.expirationTime=Date.now()+1e3*d}static fromJSON(n,l){let{refreshToken:d,accessToken:f,expirationTime:_}=l,E=new StsTokenManager;return d&&(_assert("string"==typeof d,"internal-error",{appName:n}),E.refreshToken=d),f&&(_assert("string"==typeof f,"internal-error",{appName:n}),E.accessToken=f),_&&(_assert("number"==typeof _,"internal-error",{appName:n}),E.expirationTime=_),E}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function assertStringOrUndefined(n,l){_assert("string"==typeof n||void 0===n,"internal-error",{appName:l})}let UserImpl=class UserImpl{constructor(n){var{uid:l,auth:d,stsTokenManager:f}=n,_=(0,L._T)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=l,this.auth=d,this.stsTokenManager=f,this.accessToken=f.accessToken,this.displayName=_.displayName||null,this.email=_.email||null,this.emailVerified=_.emailVerified||!1,this.phoneNumber=_.phoneNumber||null,this.photoURL=_.photoURL||null,this.isAnonymous=_.isAnonymous||!1,this.tenantId=_.tenantId||null,this.providerData=_.providerData?[..._.providerData]:[],this.metadata=new UserMetadata(_.createdAt||void 0,_.lastLoginAt||void 0)}async getIdToken(n){let l=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,n));return _assert(l,this.auth,"internal-error"),this.accessToken!==l&&(this.accessToken=l,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),l}getIdTokenResult(n){return getIdTokenResult(this,n)}reload(){return reload(this)}_assign(n){this!==n&&(_assert(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(n=>Object.assign({},n)),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){let l=new UserImpl(Object.assign(Object.assign({},this),{auth:n,stsTokenManager:this.stsTokenManager._clone()}));return l.metadata._copy(this.metadata),l}_onReload(n){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,l=!1){let d=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),d=!0),l&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),d&&this.auth._notifyListenersIfCurrent(this)}async delete(){let n=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>Object.assign({},n)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,l){var d,f,_,E,L,z,et,er;let en=null!==(d=l.displayName)&&void 0!==d?d:void 0,ei=null!==(f=l.email)&&void 0!==f?f:void 0,es=null!==(_=l.phoneNumber)&&void 0!==_?_:void 0,eo=null!==(E=l.photoURL)&&void 0!==E?E:void 0,el=null!==(L=l.tenantId)&&void 0!==L?L:void 0,eu=null!==(z=l._redirectEventId)&&void 0!==z?z:void 0,ec=null!==(et=l.createdAt)&&void 0!==et?et:void 0,eh=null!==(er=l.lastLoginAt)&&void 0!==er?er:void 0,{uid:ef,emailVerified:ep,isAnonymous:e_,providerData:em,stsTokenManager:eg}=l;_assert(ef&&eg,n,"internal-error");let ey=StsTokenManager.fromJSON(this.name,eg);_assert("string"==typeof ef,n,"internal-error"),assertStringOrUndefined(en,n.name),assertStringOrUndefined(ei,n.name),_assert("boolean"==typeof ep,n,"internal-error"),_assert("boolean"==typeof e_,n,"internal-error"),assertStringOrUndefined(es,n.name),assertStringOrUndefined(eo,n.name),assertStringOrUndefined(el,n.name),assertStringOrUndefined(eu,n.name),assertStringOrUndefined(ec,n.name),assertStringOrUndefined(eh,n.name);let ev=new UserImpl({uid:ef,auth:n,email:ei,emailVerified:ep,displayName:en,isAnonymous:e_,photoURL:eo,phoneNumber:es,tenantId:el,stsTokenManager:ey,createdAt:ec,lastLoginAt:eh});return em&&Array.isArray(em)&&(ev.providerData=em.map(n=>Object.assign({},n))),eu&&(ev._redirectEventId=eu),ev}static async _fromIdTokenResponse(n,l,d=!1){let f=new StsTokenManager;f.updateFromServerResponse(l);let _=new UserImpl({uid:l.localId,auth:n,stsTokenManager:f,isAnonymous:d});return await _reloadWithoutSaving(_),_}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=new Map;function _getInstance(n){n instanceof Function||debugFail("Expected a class definition");let l=eo.get(n);return l?l instanceof n||debugFail("Instance stored in cache mismatched with class"):(l=new n,eo.set(n,l)),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let InMemoryPersistence=class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,l){this.storage[n]=l}async _get(n){let l=this.storage[n];return void 0===l?null:l}async _remove(n){delete this.storage[n]}_addListener(n,l){}_removeListener(n,l){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _persistenceKeyName(n,l,d){return`firebase:${n}:${l}:${d}`}InMemoryPersistence.type="NONE";let PersistenceUserManager=class PersistenceUserManager{constructor(n,l,d){this.persistence=n,this.auth=l,this.userKey=d;let{config:f,name:_}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,f.apiKey,_),this.fullPersistenceKey=_persistenceKeyName("persistence",f.apiKey,_),this.boundEventHandler=l._onStorageEvent.bind(l),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){let n=await this.persistence._get(this.fullUserKey);return n?UserImpl._fromJSON(this.auth,n):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;let l=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,l)return this.setCurrentUser(l)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,l,d="authUser"){if(!l.length)return new PersistenceUserManager(_getInstance(InMemoryPersistence),n,d);let f=(await Promise.all(l.map(async n=>{if(await n._isAvailable())return n}))).filter(n=>n),_=f[0]||_getInstance(InMemoryPersistence),E=_persistenceKeyName(d,n.config.apiKey,n.name),L=null;for(let d of l)try{let l=await d._get(E);if(l){let f=UserImpl._fromJSON(n,l);d!==_&&(L=f),_=d;break}}catch(n){}let z=f.filter(n=>n._shouldAllowMigration);return _._shouldAllowMigration&&z.length&&(_=z[0],L&&await _._set(E,L.toJSON()),await Promise.all(l.map(async n=>{if(n!==_)try{await n._remove(E)}catch(n){}}))),new PersistenceUserManager(_,n,d)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getBrowserName(n){let l=n.toLowerCase();if(l.includes("opera/")||l.includes("opr/")||l.includes("opios/"))return"Opera";if(_isIEMobile(l))return"IEMobile";if(l.includes("msie")||l.includes("trident/"))return"IE";{if(l.includes("edge/"))return"Edge";if(_isFirefox(l))return"Firefox";if(l.includes("silk/"))return"Silk";if(_isBlackBerry(l))return"Blackberry";if(_isWebOS(l))return"Webos";if(_isSafari(l))return"Safari";if((l.includes("chrome/")||_isChromeIOS(l))&&!l.includes("edge/"))return"Chrome";if(_isAndroid(l))return"Android";let d=n.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==d?void 0:d.length)===2)return d[1]}return"Other"}function _isFirefox(n=(0,f.z$)()){return/firefox\//i.test(n)}function _isSafari(n=(0,f.z$)()){let l=n.toLowerCase();return l.includes("safari/")&&!l.includes("chrome/")&&!l.includes("crios/")&&!l.includes("android")}function _isChromeIOS(n=(0,f.z$)()){return/crios\//i.test(n)}function _isIEMobile(n=(0,f.z$)()){return/iemobile/i.test(n)}function _isAndroid(n=(0,f.z$)()){return/android/i.test(n)}function _isBlackBerry(n=(0,f.z$)()){return/blackberry/i.test(n)}function _isWebOS(n=(0,f.z$)()){return/webos/i.test(n)}function _isIOS(n=(0,f.z$)()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _isIOSStandalone(n=(0,f.z$)()){var l;return _isIOS(n)&&!!(null===(l=window.navigator)||void 0===l?void 0:l.standalone)}function _isIE10(){return(0,f.w1)()&&10===document.documentMode}function _isMobileBrowser(n=(0,f.z$)()){return _isIOS(n)||_isAndroid(n)||_isWebOS(n)||_isBlackBerry(n)||/windows phone/i.test(n)||_isIEMobile(n)}function _isIframe(){try{return!!(window&&window!==window.top)}catch(n){return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getClientVersion(n,l=[]){let d;switch(n){case"Browser":d=_getBrowserName((0,f.z$)());break;case"Worker":d=`${_getBrowserName((0,f.z$)())}-${n}`;break;default:d=n}let E=l.length?l.join(","):"FirebaseCore-web";return`${d}/JsCore/${_.Jn}/${E}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthMiddlewareQueue=class AuthMiddlewareQueue{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,l){let wrappedCallback=l=>new Promise((d,f)=>{try{let f=n(l);d(f)}catch(n){f(n)}});wrappedCallback.onAbort=l,this.queue.push(wrappedCallback);let d=this.queue.length-1;return()=>{this.queue[d]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;let l=[];try{for(let d of this.queue)await d(n),d.onAbort&&l.push(d.onAbort)}catch(n){for(let n of(l.reverse(),l))try{n()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getPasswordPolicy(n,l={}){return _performApiRequest(n,"GET","/v2/passwordPolicy",_addTidIfNecessary(n,l))}let PasswordPolicyImpl=class PasswordPolicyImpl{constructor(n){var l,d,f,_;let E=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(l=E.minPasswordLength)&&void 0!==l?l:6,E.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=E.maxPasswordLength),void 0!==E.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=E.containsLowercaseCharacter),void 0!==E.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=E.containsUppercaseCharacter),void 0!==E.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=E.containsNumericCharacter),void 0!==E.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=E.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(f=null===(d=n.allowedNonAlphanumericCharacters)||void 0===d?void 0:d.join(""))&&void 0!==f?f:"",this.forceUpgradeOnSignin=null!==(_=n.forceUpgradeOnSignin)&&void 0!==_&&_,this.schemaVersion=n.schemaVersion}validatePassword(n){var l,d,f,_,E,L;let z={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(n,z),this.validatePasswordCharacterOptions(n,z),z.isValid&&(z.isValid=null===(l=z.meetsMinPasswordLength)||void 0===l||l),z.isValid&&(z.isValid=null===(d=z.meetsMaxPasswordLength)||void 0===d||d),z.isValid&&(z.isValid=null===(f=z.containsLowercaseLetter)||void 0===f||f),z.isValid&&(z.isValid=null===(_=z.containsUppercaseLetter)||void 0===_||_),z.isValid&&(z.isValid=null===(E=z.containsNumericCharacter)||void 0===E||E),z.isValid&&(z.isValid=null===(L=z.containsNonAlphanumericCharacter)||void 0===L||L),z}validatePasswordLengthOptions(n,l){let d=this.customStrengthOptions.minPasswordLength,f=this.customStrengthOptions.maxPasswordLength;d&&(l.meetsMinPasswordLength=n.length>=d),f&&(l.meetsMaxPasswordLength=n.length<=f)}validatePasswordCharacterOptions(n,l){let d;this.updatePasswordCharacterOptionsStatuses(l,!1,!1,!1,!1);for(let f=0;f<n.length;f++)d=n.charAt(f),this.updatePasswordCharacterOptionsStatuses(l,d>="a"&&d<="z",d>="A"&&d<="Z",d>="0"&&d<="9",this.allowedNonAlphanumericCharacters.includes(d))}updatePasswordCharacterOptionsStatuses(n,l,d,f,_){this.customStrengthOptions.containsLowercaseLetter&&(n.containsLowercaseLetter||(n.containsLowercaseLetter=l)),this.customStrengthOptions.containsUppercaseLetter&&(n.containsUppercaseLetter||(n.containsUppercaseLetter=d)),this.customStrengthOptions.containsNumericCharacter&&(n.containsNumericCharacter||(n.containsNumericCharacter=f)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(n.containsNonAlphanumericCharacter||(n.containsNonAlphanumericCharacter=_))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthImpl=class AuthImpl{constructor(n,l,d,f){this.app=n,this.heartbeatServiceProvider=l,this.appCheckServiceProvider=d,this.config=f,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=er,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=f.sdkClientVersion}_initializeWithPersistence(n,l){return l&&(this._popupRedirectResolver=_getInstance(l)),this._initializationPromise=this.queue(async()=>{var d,f;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,n),!this._deleted)){if(null===(d=this._popupRedirectResolver)||void 0===d?void 0:d._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(l),this.lastNotifiedUid=(null===(f=this.currentUser)||void 0===f?void 0:f.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let n=await this.assertedPersistence.getCurrentUser();if(this.currentUser||n){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUser(n){var l;let d=await this.assertedPersistence.getCurrentUser(),f=d,_=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let d=null===(l=this.redirectUser)||void 0===l?void 0:l._redirectEventId,E=null==f?void 0:f._redirectEventId,L=await this.tryRedirectSignIn(n);(!d||d===E)&&(null==L?void 0:L.user)&&(f=L.user,_=!0)}if(!f)return this.directlySetCurrentUser(null);if(!f._redirectEventId){if(_)try{await this.beforeStateQueue.runMiddleware(f)}catch(n){f=d,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(n))}return f?this.reloadAndSetCurrentUserOrClear(f):this.directlySetCurrentUser(null)}return(_assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===f._redirectEventId)?this.directlySetCurrentUser(f):this.reloadAndSetCurrentUserOrClear(f)}async tryRedirectSignIn(n){let l=null;try{l=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch(n){await this._setRedirectUser(null)}return l}async reloadAndSetCurrentUserOrClear(n){try{await _reloadWithoutSaving(n)}catch(n){if((null==n?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=_getUserLanguage()}async _delete(){this._deleted=!0}async updateCurrentUser(n){let l=n?(0,f.m9)(n):null;return l&&_assert(l.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(l&&l._clone(this))}async _updateCurrentUser(n,l=!1){if(!this._deleted)return n&&_assert(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),l||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(n){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(n))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(n){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let l=this._getPasswordPolicyInternal();return l.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):l.validatePassword(n)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let n=await _getPasswordPolicy(this),l=new PasswordPolicyImpl(n);null===this.tenantId?this._projectPasswordPolicy=l:this._tenantPasswordPolicies[this.tenantId]=l}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(n){this._errorFactory=new f.LL("auth","Firebase",n())}onAuthStateChanged(n,l,d){return this.registerStateListener(this.authStateSubscription,n,l,d)}beforeAuthStateChanged(n,l){return this.beforeStateQueue.pushCallback(n,l)}onIdTokenChanged(n,l,d){return this.registerStateListener(this.idTokenSubscription,n,l,d)}authStateReady(){return new Promise((n,l)=>{if(this.currentUser)n();else{let d=this.onAuthStateChanged(()=>{d(),n()},l)}})}async revokeAccessToken(n){if(this.currentUser){let l=await this.currentUser.getIdToken(),d={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:n,idToken:l};null!=this.tenantId&&(d.tenantId=this.tenantId),await revokeToken(this,d)}}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(n=this._currentUser)||void 0===n?void 0:n.toJSON()}}async _setRedirectUser(n,l){let d=await this.getOrInitRedirectPersistenceManager(l);return null===n?d.removeCurrentUser():d.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){let l=n&&_getInstance(n)||this._popupRedirectResolver;_assert(l,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(l._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var l,d;return(this._isInitialized&&await this.queue(async()=>{}),(null===(l=this._currentUser)||void 0===l?void 0:l._redirectEventId)===n)?this._currentUser:(null===(d=this.redirectUser)||void 0===d?void 0:d._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,l;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let d=null!==(l=null===(n=this.currentUser)||void 0===n?void 0:n.uid)&&void 0!==l?l:null;this.lastNotifiedUid!==d&&(this.lastNotifiedUid=d,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,l,d,f){if(this._deleted)return()=>{};let _="function"==typeof l?l:l.next.bind(l),E=!1,L=this._isInitialized?Promise.resolve():this._initializationPromise;if(_assert(L,this,"internal-error"),L.then(()=>{E||_(this.currentUser)}),"function"==typeof l){let _=n.addObserver(l,d,f);return()=>{E=!0,_()}}{let d=n.addObserver(l);return()=>{E=!0,d()}}}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh(),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;let l={"X-Client-Version":this.clientVersion};this.app.options.appId&&(l["X-Firebase-gmpid"]=this.app.options.appId);let d=await (null===(n=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader());d&&(l["X-Firebase-Client"]=d);let f=await this._getAppCheckToken();return f&&(l["X-Firebase-AppCheck"]=f),l}async _getAppCheckToken(){var n;let l=await (null===(n=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getToken());return(null==l?void 0:l.error)&&_logWarn(`Error while retrieving App Check token: ${l.error}`),null==l?void 0:l.token}};function _castAuth(n){return(0,f.m9)(n)}let Subscription=class Subscription{constructor(n){this.auth=n,this.observer=null,this.addObserver=(0,f.ne)(n=>this.observer=n)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getScriptParentElement(){var n,l;return null!==(l=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==l?l:document}function _loadJS(n){return new Promise((l,d)=>{let f=document.createElement("script");f.setAttribute("src",n),f.onload=l,f.onerror=n=>{let l=_createError("internal-error");l.customData=n,d(l)},f.type="text/javascript",f.charset="UTF-8",getScriptParentElement().appendChild(f)})}function _generateCallbackName(n){return`__${n}${Math.floor(1e6*Math.random())}`}let RecaptchaEnterpriseVerifier=class RecaptchaEnterpriseVerifier{constructor(n){this.type="recaptcha-enterprise",this.auth=_castAuth(n)}async verify(n="verify",l=!1){async function retrieveSiteKey(n){if(!l){if(null==n.tenantId&&null!=n._agentRecaptchaConfig)return n._agentRecaptchaConfig.siteKey;if(null!=n.tenantId&&void 0!==n._tenantRecaptchaConfigs[n.tenantId])return n._tenantRecaptchaConfigs[n.tenantId].siteKey}return new Promise(async(l,d)=>{getRecaptchaConfig(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(void 0===f.recaptchaKey)d(Error("recaptcha Enterprise site key undefined"));else{let d=new RecaptchaConfig(f);return null==n.tenantId?n._agentRecaptchaConfig=d:n._tenantRecaptchaConfigs[n.tenantId]=d,l(d.siteKey)}}).catch(n=>{d(n)})})}function retrieveRecaptchaToken(l,d,f){let _=window.grecaptcha;isEnterprise(_)?_.enterprise.ready(()=>{_.enterprise.execute(l,{action:n}).then(n=>{d(n)}).catch(()=>{d("NO_RECAPTCHA")})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((n,d)=>{retrieveSiteKey(this.auth).then(f=>{if(!l&&isEnterprise(window.grecaptcha))retrieveRecaptchaToken(f,n,d);else{if("undefined"==typeof window){d(Error("RecaptchaVerifier is only supported in browser"));return}_loadJS("https://www.google.com/recaptcha/enterprise.js?render="+f).then(()=>{retrieveRecaptchaToken(f,n,d)}).catch(n=>{d(n)})}}).catch(n=>{d(n)})})}};async function injectRecaptchaFields(n,l,d,f=!1){let _;let E=new RecaptchaEnterpriseVerifier(n);try{_=await E.verify(d)}catch(n){_=await E.verify(d,!0)}let L=Object.assign({},l);return f?Object.assign(L,{captchaResp:_}):Object.assign(L,{captchaResponse:_}),Object.assign(L,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(L,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),L}async function handleRecaptchaFlow(n,l,d,f){var _;if(null===(_=n._getRecaptchaConfig())||void 0===_||!_.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return f(n,l).catch(async _=>{if("auth/missing-recaptcha-token"!==_.code)return Promise.reject(_);{console.log(`${d} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let _=await injectRecaptchaFields(n,l,d,"getOobCode"===d);return f(n,_)}});{let _=await injectRecaptchaFields(n,l,d,"getOobCode"===d);return f(n,_)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function initializeAuth(n,l){let d=(0,_.qX)(n,"auth");if(d.isInitialized()){let n=d.getImmediate(),_=d.getOptions();if((0,f.vZ)(_,null!=l?l:{}))return n;_fail(n,"already-initialized")}let E=d.initialize({options:l});return E}function _initializeAuthInstance(n,l){let d=(null==l?void 0:l.persistence)||[],f=(Array.isArray(d)?d:[d]).map(_getInstance);(null==l?void 0:l.errorMap)&&n._updateErrorMap(l.errorMap),n._initializeWithPersistence(f,null==l?void 0:l.popupRedirectResolver)}function connectAuthEmulator(n,l,d){let f=_castAuth(n);_assert(f._canInitEmulator,f,"emulator-config-failed"),_assert(/^https?:\/\//.test(l),f,"invalid-emulator-scheme");let _=!!(null==d?void 0:d.disableWarnings),E=extractProtocol(l),{host:L,port:z}=extractHostAndPort(l),et=null===z?"":`:${z}`;f.config.emulator={url:`${E}//${L}${et}/`},f.settings.appVerificationDisabledForTesting=!0,f.emulatorConfig=Object.freeze({host:L,port:z,protocol:E.replace(":",""),options:Object.freeze({disableWarnings:_})}),_||emitEmulatorWarning()}function extractProtocol(n){let l=n.indexOf(":");return l<0?"":n.substr(0,l+1)}function extractHostAndPort(n){let l=extractProtocol(n),d=/(\/\/)?([^?#/]+)/.exec(n.substr(l.length));if(!d)return{host:"",port:null};let f=d[2].split("@").pop()||"",_=/^(\[[^\]]+\])(:|$)/.exec(f);if(_){let n=_[1];return{host:n,port:parsePort(f.substr(n.length+1))}}{let[n,l]=f.split(":");return{host:n,port:parsePort(l)}}}function parsePort(n){if(!n)return null;let l=Number(n);return isNaN(l)?null:l}function emitEmulatorWarning(){function attachBanner(){let n=document.createElement("p"),l=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",l.position="fixed",l.width="100%",l.backgroundColor="#ffffff",l.border=".1em solid #000000",l.color="#b50000",l.bottom="0px",l.left="0px",l.margin="0px",l.zIndex="10000",l.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",attachBanner):attachBanner())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthCredential=class AuthCredential{constructor(n,l){this.providerId=n,this.signInMethod=l}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(n){return debugFail("not implemented")}_linkToIdToken(n,l){return debugFail("not implemented")}_getReauthenticationResolver(n){return debugFail("not implemented")}};async function linkEmailPassword(n,l){return _performApiRequest(n,"POST","/v1/accounts:signUp",l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithPassword(n,l){return _performSignInRequest(n,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(n,l))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithEmailLink$1(n,l){return _performSignInRequest(n,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(n,l))}async function signInWithEmailLinkForLinking(n,l){return _performSignInRequest(n,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(n,l))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EmailAuthCredential=class EmailAuthCredential extends AuthCredential{constructor(n,l,d,f=null){super("password",d),this._email=n,this._password=l,this._tenantId=f}static _fromEmailAndPassword(n,l){return new EmailAuthCredential(n,l,"password")}static _fromEmailAndCode(n,l,d=null){return new EmailAuthCredential(n,l,"emailLink",d)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){let l="string"==typeof n?JSON.parse(n):n;if((null==l?void 0:l.email)&&(null==l?void 0:l.password)){if("password"===l.signInMethod)return this._fromEmailAndPassword(l.email,l.password);if("emailLink"===l.signInMethod)return this._fromEmailAndCode(l.email,l.password,l.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":let l={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return handleRecaptchaFlow(n,l,"signInWithPassword",signInWithPassword);case"emailLink":return signInWithEmailLink$1(n,{email:this._email,oobCode:this._password});default:_fail(n,"internal-error")}}async _linkToIdToken(n,l){switch(this.signInMethod){case"password":let d={idToken:l,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return handleRecaptchaFlow(n,d,"signUpPassword",linkEmailPassword);case"emailLink":return signInWithEmailLinkForLinking(n,{idToken:l,email:this._email,oobCode:this._password});default:_fail(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithIdp(n,l){return _performSignInRequest(n,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(n,l))}let OAuthCredential=class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){let l=new OAuthCredential(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(l.idToken=n.idToken),n.accessToken&&(l.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(l.nonce=n.nonce),n.pendingToken&&(l.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(l.accessToken=n.oauthToken,l.secret=n.oauthTokenSecret):_fail("argument-error"),l}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){let l="string"==typeof n?JSON.parse(n):n,{providerId:d,signInMethod:f}=l,_=(0,L._T)(l,["providerId","signInMethod"]);if(!d||!f)return null;let E=new OAuthCredential(d,f);return E.idToken=_.idToken||void 0,E.accessToken=_.accessToken||void 0,E.secret=_.secret,E.nonce=_.nonce,E.pendingToken=_.pendingToken||null,E}_getIdTokenResponse(n){let l=this.buildRequest();return signInWithIdp(n,l)}_linkToIdToken(n,l){let d=this.buildRequest();return d.idToken=l,signInWithIdp(n,d)}_getReauthenticationResolver(n){let l=this.buildRequest();return l.autoCreate=!1,signInWithIdp(n,l)}buildRequest(){let n={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{let l={};this.idToken&&(l.id_token=this.idToken),this.accessToken&&(l.access_token=this.accessToken),this.secret&&(l.oauth_token_secret=this.secret),l.providerId=this.providerId,this.nonce&&!this.pendingToken&&(l.nonce=this.nonce),n.postBody=(0,f.xO)(l)}return n}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sendPhoneVerificationCode(n,l){return _performApiRequest(n,"POST","/v1/accounts:sendVerificationCode",_addTidIfNecessary(n,l))}async function signInWithPhoneNumber$1(n,l){return _performSignInRequest(n,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(n,l))}async function linkWithPhoneNumber$1(n,l){let d=await _performSignInRequest(n,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(n,l));if(d.temporaryProof)throw _makeTaggedError(n,"account-exists-with-different-credential",d);return d}let el={USER_NOT_FOUND:"user-not-found"};async function verifyPhoneNumberForExisting(n,l){let d=Object.assign(Object.assign({},l),{operation:"REAUTH"});return _performSignInRequest(n,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(n,d),el)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PhoneAuthCredential=class PhoneAuthCredential extends AuthCredential{constructor(n){super("phone","phone"),this.params=n}static _fromVerification(n,l){return new PhoneAuthCredential({verificationId:n,verificationCode:l})}static _fromTokenResponse(n,l){return new PhoneAuthCredential({phoneNumber:n,temporaryProof:l})}_getIdTokenResponse(n){return signInWithPhoneNumber$1(n,this._makeVerificationRequest())}_linkToIdToken(n,l){return linkWithPhoneNumber$1(n,Object.assign({idToken:l},this._makeVerificationRequest()))}_getReauthenticationResolver(n){return verifyPhoneNumberForExisting(n,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:n,phoneNumber:l,verificationId:d,verificationCode:f}=this.params;return n&&l?{temporaryProof:n,phoneNumber:l}:{sessionInfo:d,code:f}}toJSON(){let n={providerId:this.providerId};return this.params.phoneNumber&&(n.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(n.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(n.verificationCode=this.params.verificationCode),this.params.verificationId&&(n.verificationId=this.params.verificationId),n}static fromJSON(n){"string"==typeof n&&(n=JSON.parse(n));let{verificationId:l,verificationCode:d,phoneNumber:f,temporaryProof:_}=n;return d||l||f||_?new PhoneAuthCredential({verificationId:l,verificationCode:d,phoneNumber:f,temporaryProof:_}):null}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function parseMode(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function parseDeepLink(n){let l=(0,f.zd)((0,f.pd)(n)).link,d=l?(0,f.zd)((0,f.pd)(l)).deep_link_id:null,_=(0,f.zd)((0,f.pd)(n)).deep_link_id,E=_?(0,f.zd)((0,f.pd)(_)).link:null;return E||_||d||l||n}let ActionCodeURL=class ActionCodeURL{constructor(n){var l,d,_,E,L,z;let et=(0,f.zd)((0,f.pd)(n)),er=null!==(l=et.apiKey)&&void 0!==l?l:null,en=null!==(d=et.oobCode)&&void 0!==d?d:null,ei=parseMode(null!==(_=et.mode)&&void 0!==_?_:null);_assert(er&&en&&ei,"argument-error"),this.apiKey=er,this.operation=ei,this.code=en,this.continueUrl=null!==(E=et.continueUrl)&&void 0!==E?E:null,this.languageCode=null!==(L=et.languageCode)&&void 0!==L?L:null,this.tenantId=null!==(z=et.tenantId)&&void 0!==z?z:null}static parseLink(n){let l=parseDeepLink(n);try{return new ActionCodeURL(l)}catch(n){return null}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EmailAuthProvider=class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(n,l){return EmailAuthCredential._fromEmailAndPassword(n,l)}static credentialWithLink(n,l){let d=ActionCodeURL.parseLink(l);return _assert(d,"argument-error"),EmailAuthCredential._fromEmailAndCode(n,d.code,d.tenantId)}};EmailAuthProvider.PROVIDER_ID="password",EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password",EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FederatedAuthProvider=class FederatedAuthProvider{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BaseOAuthProvider=class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FacebookAuthProvider=class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(n){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return FacebookAuthProvider.credentialFromTaggedObject(n)}static credentialFromError(n){return FacebookAuthProvider.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(n.oauthAccessToken)}catch(n){return null}}};FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com",FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GoogleAuthProvider=class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(n,l){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:l})}static credentialFromResult(n){return GoogleAuthProvider.credentialFromTaggedObject(n)}static credentialFromError(n){return GoogleAuthProvider.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;let{oauthIdToken:l,oauthAccessToken:d}=n;if(!l&&!d)return null;try{return GoogleAuthProvider.credential(l,d)}catch(n){return null}}};GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com",GoogleAuthProvider.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GithubAuthProvider=class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(n){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return GithubAuthProvider.credentialFromTaggedObject(n)}static credentialFromError(n){return GithubAuthProvider.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return GithubAuthProvider.credential(n.oauthAccessToken)}catch(n){return null}}};GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com",GithubAuthProvider.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TwitterAuthProvider=class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(n,l){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:l})}static credentialFromResult(n){return TwitterAuthProvider.credentialFromTaggedObject(n)}static credentialFromError(n){return TwitterAuthProvider.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;let{oauthAccessToken:l,oauthTokenSecret:d}=n;if(!l||!d)return null;try{return TwitterAuthProvider.credential(l,d)}catch(n){return null}}};TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com",TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UserCredentialImpl=class UserCredentialImpl{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,l,d,f=!1){let _=await UserImpl._fromIdTokenResponse(n,d,f),E=providerIdForResponse(d),L=new UserCredentialImpl({user:_,providerId:E,_tokenResponse:d,operationType:l});return L}static async _forOperation(n,l,d){await n._updateTokensIfNecessary(d,!0);let f=providerIdForResponse(d);return new UserCredentialImpl({user:n,providerId:f,_tokenResponse:d,operationType:l})}};function providerIdForResponse(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MultiFactorError=class MultiFactorError extends f.ZR{constructor(n,l,d,f){var _;super(l.code,l.message),this.operationType=d,this.user=f,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:n.name,tenantId:null!==(_=n.tenantId)&&void 0!==_?_:void 0,_serverResponse:l.customData._serverResponse,operationType:d}}static _fromErrorAndOperation(n,l,d,f){return new MultiFactorError(n,l,d,f)}};function _processCredentialSavingMfaContextIfNecessary(n,l,d,f){let _="reauthenticate"===l?d._getReauthenticationResolver(n):d._getIdTokenResponse(n);return _.catch(d=>{if("auth/multi-factor-auth-required"===d.code)throw MultiFactorError._fromErrorAndOperation(n,d,l,f);throw d})}async function _link$1(n,l,d=!1){let f=await _logoutIfInvalidated(n,l._linkToIdToken(n.auth,await n.getIdToken()),d);return UserCredentialImpl._forOperation(n,"link",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reauthenticate(n,l,d=!1){let{auth:f}=n,_="reauthenticate";try{let E=await _logoutIfInvalidated(n,_processCredentialSavingMfaContextIfNecessary(f,_,l,n),d);_assert(E.idToken,f,"internal-error");let L=_parseToken(E.idToken);_assert(L,f,"internal-error");let{sub:z}=L;return _assert(n.uid===z,f,"user-mismatch"),UserCredentialImpl._forOperation(n,_,E)}catch(n){throw(null==n?void 0:n.code)==="auth/user-not-found"&&_fail(f,"user-mismatch"),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _signInWithCredential(n,l,d=!1){let f="signIn",_=await _processCredentialSavingMfaContextIfNecessary(n,f,l),E=await UserCredentialImpl._fromIdTokenResponse(n,f,_);return d||await n._updateCurrentUser(E.user),E}function onIdTokenChanged(n,l,d,_){return(0,f.m9)(n).onIdTokenChanged(l,d,_)}function beforeAuthStateChanged(n,l,d){return(0,f.m9)(n).beforeAuthStateChanged(l,d)}function onAuthStateChanged(n,l,d,_){return(0,f.m9)(n).onAuthStateChanged(l,d,_)}function signOut(n){return(0,f.m9)(n).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function startEnrollPhoneMfa(n,l){return _performApiRequest(n,"POST","/v2/accounts/mfaEnrollment:start",_addTidIfNecessary(n,l))}function finalizeEnrollPhoneMfa(n,l){return _performApiRequest(n,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(n,l))}function startEnrollTotpMfa(n,l){return _performApiRequest(n,"POST","/v2/accounts/mfaEnrollment:start",_addTidIfNecessary(n,l))}function finalizeEnrollTotpMfa(n,l){return _performApiRequest(n,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(n,l))}new WeakMap;let eu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BrowserPersistenceClass=class BrowserPersistenceClass{constructor(n,l){this.storageRetriever=n,this.type=l}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(eu,"1"),this.storage.removeItem(eu),Promise.resolve(!0)}catch(n){return Promise.resolve(!1)}}_set(n,l){return this.storage.setItem(n,JSON.stringify(l)),Promise.resolve()}_get(n){let l=this.storage.getItem(n);return Promise.resolve(l?JSON.parse(l):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _iframeCannotSyncWebStorage(){let n=(0,f.z$)();return _isSafari(n)||_isIOS(n)}let BrowserLocalPersistence=class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,l)=>this.onStorageEvent(n,l),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_iframeCannotSyncWebStorage()&&_isIframe(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(let l of Object.keys(this.listeners)){let d=this.storage.getItem(l),f=this.localCache[l];d!==f&&n(l,f,d)}}onStorageEvent(n,l=!1){if(!n.key){this.forAllChangedKeys((n,l,d)=>{this.notifyListeners(n,d)});return}let d=n.key;if(l?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let f=this.storage.getItem(d);if(n.newValue!==f)null!==n.newValue?this.storage.setItem(d,n.newValue):this.storage.removeItem(d);else if(this.localCache[d]===n.newValue&&!l)return}let triggerListeners=()=>{let n=this.storage.getItem(d);(l||this.localCache[d]!==n)&&this.notifyListeners(d,n)},f=this.storage.getItem(d);_isIE10()&&f!==n.newValue&&n.newValue!==n.oldValue?setTimeout(triggerListeners,10):triggerListeners()}notifyListeners(n,l){this.localCache[n]=l;let d=this.listeners[n];if(d)for(let n of Array.from(d))n(l?JSON.parse(l):l)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,l,d)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:l,newValue:d}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,l){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(l)}_removeListener(n,l){this.listeners[n]&&(this.listeners[n].delete(l),0===this.listeners[n].size&&delete this.listeners[n]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(n,l){await super._set(n,l),this.localCache[n]=JSON.stringify(l)}async _get(n){let l=await super._get(n);return this.localCache[n]=JSON.stringify(l),l}async _remove(n){await super._remove(n),delete this.localCache[n]}};BrowserLocalPersistence.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BrowserSessionPersistence=class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,l){}_removeListener(n,l){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _allSettled(n){return Promise.all(n.map(async n=>{try{let l=await n;return{fulfilled:!0,value:l}}catch(n){return{fulfilled:!1,reason:n}}}))}BrowserSessionPersistence.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Receiver=class Receiver{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){let l=this.receivers.find(l=>l.isListeningto(n));if(l)return l;let d=new Receiver(n);return this.receivers.push(d),d}isListeningto(n){return this.eventTarget===n}async handleEvent(n){let{eventId:l,eventType:d,data:f}=n.data,_=this.handlersMap[d];if(!(null==_?void 0:_.size))return;n.ports[0].postMessage({status:"ack",eventId:l,eventType:d});let E=Array.from(_).map(async l=>l(n.origin,f)),L=await _allSettled(E);n.ports[0].postMessage({status:"done",eventId:l,eventType:d,response:L})}_subscribe(n,l){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(l)}_unsubscribe(n,l){this.handlersMap[n]&&l&&this.handlersMap[n].delete(l),l&&0!==this.handlersMap[n].size||delete this.handlersMap[n],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _generateEventId(n="",l=10){let d="";for(let n=0;n<l;n++)d+=Math.floor(10*Math.random());return n+d}Receiver.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sender=class Sender{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,l,d=50){let f,_;let E="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!E)throw Error("connection_unavailable");return new Promise((L,z)=>{let et=_generateEventId("",20);E.port1.start();let er=setTimeout(()=>{z(Error("unsupported_event"))},d);_={messageChannel:E,onMessage(n){if(n.data.eventId===et)switch(n.data.status){case"ack":clearTimeout(er),f=setTimeout(()=>{z(Error("timeout"))},3e3);break;case"done":clearTimeout(f),L(n.data.response);break;default:clearTimeout(er),clearTimeout(f),z(Error("invalid_response"))}}},this.handlers.add(_),E.port1.addEventListener("message",_.onMessage),this.target.postMessage({eventType:n,eventId:et,data:l},[E.port2])}).finally(()=>{_&&this.removeMessageHandler(_)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _window(){return window}function _setWindowLocation(n){_window().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isWorker(){return void 0!==_window().WorkerGlobalScope&&"function"==typeof _window().importScripts}async function _getActiveServiceWorker(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let n=await navigator.serviceWorker.ready;return n.active}catch(n){return null}}function _getServiceWorkerController(){var n;return(null===(n=null==navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null}function _getWorkerGlobalScope(){return _isWorker()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec="firebaseLocalStorageDb",eh="firebaseLocalStorage",ef="fbase_key";let DBPromise=class DBPromise{constructor(n){this.request=n}toPromise(){return new Promise((n,l)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{l(this.request.error)})})}};function getObjectStore(n,l){return n.transaction([eh],l?"readwrite":"readonly").objectStore(eh)}function _deleteDatabase(){let n=indexedDB.deleteDatabase(ec);return new DBPromise(n).toPromise()}function _openDatabase(){let n=indexedDB.open(ec,1);return new Promise((l,d)=>{n.addEventListener("error",()=>{d(n.error)}),n.addEventListener("upgradeneeded",()=>{let l=n.result;try{l.createObjectStore(eh,{keyPath:ef})}catch(n){d(n)}}),n.addEventListener("success",async()=>{let d=n.result;d.objectStoreNames.contains(eh)?l(d):(d.close(),await _deleteDatabase(),l(await _openDatabase()))})})}async function _putObject(n,l,d){let f=getObjectStore(n,!0).put({[ef]:l,value:d});return new DBPromise(f).toPromise()}async function getObject(n,l){let d=getObjectStore(n,!1).get(l),f=await new DBPromise(d).toPromise();return void 0===f?null:f.value}function _deleteObject(n,l){let d=getObjectStore(n,!0).delete(l);return new DBPromise(d).toPromise()}let IndexedDBLocalPersistence=class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await _openDatabase()),this.db}async _withRetries(n){let l=0;for(;;)try{let l=await this._openDb();return await n(l)}catch(n){if(l++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_getWorkerGlobalScope()),this.receiver._subscribe("keyChanged",async(n,l)=>{let d=await this._poll();return{keyProcessed:d.includes(l.key)}}),this.receiver._subscribe("ping",async(n,l)=>["keyChanged"])}async initializeSender(){var n,l;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);let d=await this.sender._send("ping",{},800);d&&(null===(n=d[0])||void 0===n?void 0:n.fulfilled)&&(null===(l=d[0])||void 0===l?void 0:l.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(this.sender&&this.activeServiceWorker&&_getServiceWorkerController()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;let n=await _openDatabase();return await _putObject(n,eu,"1"),await _deleteObject(n,eu),!0}catch(n){}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,l){return this._withPendingWrite(async()=>(await this._withRetries(d=>_putObject(d,n,l)),this.localCache[n]=l,this.notifyServiceWorker(n)))}async _get(n){let l=await this._withRetries(l=>getObject(l,n));return this.localCache[n]=l,l}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(l=>_deleteObject(l,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){let n=await this._withRetries(n=>{let l=getObjectStore(n,!1).getAll();return new DBPromise(l).toPromise()});if(!n||0!==this.pendingWrites)return[];let l=[],d=new Set;if(0!==n.length)for(let{fbase_key:f,value:_}of n)d.add(f),JSON.stringify(this.localCache[f])!==JSON.stringify(_)&&(this.notifyListeners(f,_),l.push(f));for(let n of Object.keys(this.localCache))this.localCache[n]&&!d.has(n)&&(this.notifyListeners(n,null),l.push(n));return l}notifyListeners(n,l){this.localCache[n]=l;let d=this.listeners[n];if(d)for(let n of Array.from(d))n(l)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,l){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(l)}_removeListener(n,l){this.listeners[n]&&(this.listeners[n].delete(l),0===this.listeners[n].size&&delete this.listeners[n]),0===Object.keys(this.listeners).length&&this.stopPolling()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function startSignInPhoneMfa(n,l){return _performApiRequest(n,"POST","/v2/accounts/mfaSignIn:start",_addTidIfNecessary(n,l))}function finalizeSignInPhoneMfa(n,l){return _performApiRequest(n,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(n,l))}function finalizeSignInTotpMfa(n,l){return _performApiRequest(n,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(n,l))}async function _verifyPhoneNumber(n,l,d){var f;let _=await d.verify();try{let E;if(_assert("string"==typeof _,n,"argument-error"),_assert("recaptcha"===d.type,n,"argument-error"),E="string"==typeof l?{phoneNumber:l}:l,"session"in E){let l=E.session;if("phoneNumber"in E){_assert("enroll"===l.type,n,"internal-error");let d=await startEnrollPhoneMfa(n,{idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:E.phoneNumber,recaptchaToken:_}});return d.phoneSessionInfo.sessionInfo}{_assert("signin"===l.type,n,"internal-error");let d=(null===(f=E.multiFactorHint)||void 0===f?void 0:f.uid)||E.multiFactorUid;_assert(d,n,"missing-multi-factor-info");let L=await startSignInPhoneMfa(n,{mfaPendingCredential:l.credential,mfaEnrollmentId:d,phoneSignInInfo:{recaptchaToken:_}});return L.phoneResponseInfo.sessionInfo}}{let{sessionInfo:l}=await sendPhoneVerificationCode(n,{phoneNumber:E.phoneNumber,recaptchaToken:_});return l}}finally{d._reset()}}IndexedDBLocalPersistence.type="LOCAL",_generateCallbackName("rcb"),new Delay(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PhoneAuthProvider=class PhoneAuthProvider{constructor(n){this.providerId=PhoneAuthProvider.PROVIDER_ID,this.auth=_castAuth(n)}verifyPhoneNumber(n,l){return _verifyPhoneNumber(this.auth,n,(0,f.m9)(l))}static credential(n,l){return PhoneAuthCredential._fromVerification(n,l)}static credentialFromResult(n){return PhoneAuthProvider.credentialFromTaggedObject(n)}static credentialFromError(n){return PhoneAuthProvider.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;let{phoneNumber:l,temporaryProof:d}=n;return l&&d?PhoneAuthCredential._fromTokenResponse(l,d):null}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _withDefaultResolver(n,l){return l?_getInstance(l):(_assert(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}PhoneAuthProvider.PROVIDER_ID="phone",PhoneAuthProvider.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IdpCredential=class IdpCredential extends AuthCredential{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return signInWithIdp(n,this._buildIdpRequest())}_linkToIdToken(n,l){return signInWithIdp(n,this._buildIdpRequest(l))}_getReauthenticationResolver(n){return signInWithIdp(n,this._buildIdpRequest())}_buildIdpRequest(n){let l={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(l.idToken=n),l}};function _signIn(n){return _signInWithCredential(n.auth,new IdpCredential(n),n.bypassAuthState)}function _reauth(n){let{auth:l,user:d}=n;return _assert(d,l,"internal-error"),_reauthenticate(d,new IdpCredential(n),n.bypassAuthState)}async function _link(n){let{auth:l,user:d}=n;return _assert(d,l,"internal-error"),_link$1(d,new IdpCredential(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AbstractPopupRedirectOperation=class AbstractPopupRedirectOperation{constructor(n,l,d,f,_=!1){this.auth=n,this.resolver=d,this.user=f,this.bypassAuthState=_,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(l)?l:[l]}execute(){return new Promise(async(n,l)=>{this.pendingPromise={resolve:n,reject:l};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(n){let{urlResponse:l,sessionId:d,postBody:f,tenantId:_,error:E,type:L}=n;if(E){this.reject(E);return}let z={auth:this.auth,requestUri:l,sessionId:d,tenantId:_||void 0,postBody:f||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(L)(z))}catch(n){this.reject(n)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(n){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ep=new Delay(2e3,1e4);let PopupOperation=class PopupOperation extends AbstractPopupRedirectOperation{constructor(n,l,d,f,_){super(n,l,f,_),this.provider=d,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){let n=await this.execute();return _assert(n,this.auth,"internal-error"),n}async onExecution(){1===this.filter.length||debugFail("Popup operations only handle one event");let n=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return(null===(n=this.authWindow)||void 0===n?void 0:n.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){let poll=()=>{var n,l;if(null===(l=null===(n=this.authWindow)||void 0===n?void 0:n.window)||void 0===l?void 0:l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(poll,ep.get())};poll()}};PopupOperation.currentPopupAction=null;let e_=new Map;let RedirectAction=class RedirectAction extends AbstractPopupRedirectOperation{constructor(n,l,d=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],l,void 0,d),this.eventId=null}async execute(){let n=e_.get(this.auth._key());if(!n){try{let l=await _getAndClearPendingRedirectStatus(this.resolver,this.auth),d=l?await super.execute():null;n=()=>Promise.resolve(d)}catch(l){n=()=>Promise.reject(l)}e_.set(this.auth._key(),n)}return this.bypassAuthState||e_.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if("signInViaRedirect"===n.type)return super.onAuthEvent(n);if("unknown"===n.type){this.resolve(null);return}if(n.eventId){let l=await this.auth._redirectUserForId(n.eventId);if(l)return this.user=l,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function _getAndClearPendingRedirectStatus(n,l){let d=pendingRedirectKey(l),f=resolverPersistence(n);if(!await f._isAvailable())return!1;let _=await f._get(d)==="true";return await f._remove(d),_}async function _setPendingRedirectStatus(n,l){return resolverPersistence(n)._set(pendingRedirectKey(l),"true")}function _overrideRedirectResult(n,l){e_.set(n._key(),l)}function resolverPersistence(n){return _getInstance(n._redirectPersistence)}function pendingRedirectKey(n){return _persistenceKeyName("pendingRedirect",n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function signInWithRedirect(n,l,d){return _signInWithRedirect(n,l,d)}async function _signInWithRedirect(n,l,d){let f=_castAuth(n);_assertInstanceOf(n,l,FederatedAuthProvider),await f._initializationPromise;let _=_withDefaultResolver(f,d);return await _setPendingRedirectStatus(_,f),_._openRedirect(f,l,"signInViaRedirect")}async function _getRedirectResult(n,l,d=!1){let f=_castAuth(n),_=_withDefaultResolver(f,l),E=new RedirectAction(f,_,d),L=await E.execute();return L&&!d&&(delete L.user._redirectEventId,await f._persistUserIfCurrent(L.user),await f._setRedirectUser(null,l)),L}let AuthEventManager=class AuthEventManager{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let l=!1;return this.consumers.forEach(d=>{this.isEventForConsumer(n,d)&&(l=!0,this.sendToConsumer(n,d),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!isRedirectEvent(n)||(this.hasHandledPotentialRedirect=!0,l||(this.queuedRedirectEvent=n,l=!0)),l}sendToConsumer(n,l){var d;if(n.error&&!isNullRedirectEvent(n)){let f=(null===(d=n.error.code)||void 0===d?void 0:d.split("auth/")[1])||"internal-error";l.onError(_createError(this.auth,f))}else l.onAuthEvent(n)}isEventForConsumer(n,l){let d=null===l.eventId||!!n.eventId&&n.eventId===l.eventId;return l.filter.includes(n.type)&&d}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(n))}saveEventToCache(n){this.cachedEventUids.add(eventUid(n)),this.lastProcessedEventTime=Date.now()}};function eventUid(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(n=>n).join("-")}function isNullRedirectEvent({type:n,error:l}){return"unknown"===n&&(null==l?void 0:l.code)==="auth/no-auth-event"}function isRedirectEvent(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getProjectConfig(n,l={}){return _performApiRequest(n,"GET","/v1/projects",l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eg=/^https?/;async function _validateOrigin(n){if(n.config.emulator)return;let{authorizedDomains:l}=await _getProjectConfig(n);for(let n of l)try{if(matchDomain(n))return}catch(n){}_fail(n,"unauthorized-domain")}function matchDomain(n){let l=_getCurrentUrl(),{protocol:d,hostname:f}=new URL(l);if(n.startsWith("chrome-extension://")){let _=new URL(n);return""===_.hostname&&""===f?"chrome-extension:"===d&&n.replace("chrome-extension://","")===l.replace("chrome-extension://",""):"chrome-extension:"===d&&_.hostname===f}if(!eg.test(d))return!1;if(em.test(n))return f===n;let _=n.replace(/\./g,"\\."),E=RegExp("^(.+\\."+_+"|"+_+")$","i");return E.test(f)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey=new Delay(3e4,6e4);function resetUnloadedGapiModules(){let n=_window().___jsl;if(null==n?void 0:n.H){for(let l of Object.keys(n.H))if(n.H[l].r=n.H[l].r||[],n.H[l].L=n.H[l].L||[],n.H[l].r=[...n.H[l].L],n.CP)for(let l=0;l<n.CP.length;l++)n.CP[l]=null}}function loadGapi(n){return new Promise((l,d)=>{var f,_,E;function loadGapiIframe(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{l(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),d(_createError(n,"network-request-failed"))},timeout:ey.get()})}if(null===(_=null===(f=_window().gapi)||void 0===f?void 0:f.iframes)||void 0===_?void 0:_.Iframe)l(gapi.iframes.getContext());else if(null===(E=_window().gapi)||void 0===E?void 0:E.load)loadGapiIframe();else{let l=_generateCallbackName("iframefcb");return _window()[l]=()=>{gapi.load?loadGapiIframe():d(_createError(n,"network-request-failed"))},_loadJS(`https://apis.google.com/js/api.js?onload=${l}`).catch(n=>d(n))}}).catch(n=>{throw ev=null,n})}let ev=null;function _loadGapi(n){return ev=ev||loadGapi(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eE=new Delay(5e3,15e3),eT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function getIframeUrl(n){let l=n.config;_assert(l.authDomain,n,"auth-domain-config-required");let d=l.emulator?_emulatorUrl(l,"emulator/auth/iframe"):`https://${n.config.authDomain}/__/auth/iframe`,E={apiKey:l.apiKey,appName:n.name,v:_.Jn},L=eI.get(n.config.apiHost);L&&(E.eid=L);let z=n._getFrameworks();return z.length&&(E.fw=z.join(",")),`${d}?${(0,f.xO)(E).slice(1)}`}async function _openIframe(n){let l=await _loadGapi(n),d=_window().gapi;return _assert(d,n,"internal-error"),l.open({where:document.body,url:getIframeUrl(n),messageHandlersFilter:d.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eT,dontclear:!0},l=>new Promise(async(d,f)=>{await l.restyle({setHideOnLeave:!1});let _=_createError(n,"network-request-failed"),E=_window().setTimeout(()=>{f(_)},eE.get());function clearTimerAndResolve(){_window().clearTimeout(E),d(l)}l.ping(clearTimerAndResolve).then(clearTimerAndResolve,()=>{f(_)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};let AuthPopup=class AuthPopup{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(n){}}};function _open(n,l,d,_=500,E=600){let L=Math.max((window.screen.availHeight-E)/2,0).toString(),z=Math.max((window.screen.availWidth-_)/2,0).toString(),et="",er=Object.assign(Object.assign({},eP),{width:_.toString(),height:E.toString(),top:L,left:z}),en=(0,f.z$)().toLowerCase();d&&(et=_isChromeIOS(en)?"_blank":d),_isFirefox(en)&&(l=l||"http://localhost",er.scrollbars="yes");let ei=Object.entries(er).reduce((n,[l,d])=>`${n}${l}=${d},`,"");if(_isIOSStandalone(en)&&"_self"!==et)return openAsNewWindowIOS(l||"",et),new AuthPopup(null);let es=window.open(l||"",et,ei);_assert(es,n,"popup-blocked");try{es.focus()}catch(n){}return new AuthPopup(es)}function openAsNewWindowIOS(n,l){let d=document.createElement("a");d.href=n,d.target=l;let f=document.createEvent("MouseEvent");f.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),d.dispatchEvent(f)}let eA=encodeURIComponent("fac");async function _getRedirectUrl(n,l,d,E,L,z){_assert(n.config.authDomain,n,"auth-domain-config-required"),_assert(n.config.apiKey,n,"invalid-api-key");let et={apiKey:n.config.apiKey,appName:n.name,authType:d,redirectUrl:E,v:_.Jn,eventId:L};if(l instanceof FederatedAuthProvider)for(let[d,_]of(l.setDefaultLanguage(n.languageCode),et.providerId=l.providerId||"",(0,f.xb)(l.getCustomParameters())||(et.customParameters=JSON.stringify(l.getCustomParameters())),Object.entries(z||{})))et[d]=_;if(l instanceof BaseOAuthProvider){let n=l.getScopes().filter(n=>""!==n);n.length>0&&(et.scopes=n.join(","))}for(let l of(n.tenantId&&(et.tid=n.tenantId),Object.keys(et)))void 0===et[l]&&delete et[l];let er=await n._getAppCheckToken(),en=er?`#${eA}=${encodeURIComponent(er)}`:"";return`${getHandlerBase(n)}?${(0,f.xO)(et).slice(1)}${en}`}function getHandlerBase({config:n}){return n.emulator?_emulatorUrl(n,"emulator/auth/handler"):`https://${n.authDomain}/__/auth/handler`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew="webStorageSupport";let BrowserPopupRedirectResolver=class BrowserPopupRedirectResolver{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BrowserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(n,l,d,f){var _;(null===(_=this.eventManagers[n._key()])||void 0===_?void 0:_.manager)||debugFail("_initialize() not called before _openPopup()");let E=await _getRedirectUrl(n,l,d,_getCurrentUrl(),f);return _open(n,E,_generateEventId())}async _openRedirect(n,l,d,f){await this._originValidation(n);let _=await _getRedirectUrl(n,l,d,_getCurrentUrl(),f);return _setWindowLocation(_),new Promise(()=>{})}_initialize(n){let l=n._key();if(this.eventManagers[l]){let{manager:n,promise:d}=this.eventManagers[l];return n?Promise.resolve(n):(d||debugFail("If manager is not set, promise should be"),d)}let d=this.initAndGetManager(n);return this.eventManagers[l]={promise:d},d.catch(()=>{delete this.eventManagers[l]}),d}async initAndGetManager(n){let l=await _openIframe(n),d=new AuthEventManager(n);return l.register("authEvent",l=>{_assert(null==l?void 0:l.authEvent,n,"invalid-auth-event");let f=d.onEvent(l.authEvent);return{status:f?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:d},this.iframes[n._key()]=l,d}_isIframeWebStorageSupported(n,l){let d=this.iframes[n._key()];d.send(ew,{type:ew},d=>{var f;let _=null===(f=null==d?void 0:d[0])||void 0===f?void 0:f[ew];void 0!==_&&l(!!_),_fail(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){let l=n._key();return this.originValidationPromises[l]||(this.originValidationPromises[l]=_validateOrigin(n)),this.originValidationPromises[l]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}};let MultiFactorAssertionImpl=class MultiFactorAssertionImpl{constructor(n){this.factorId=n}_process(n,l,d){switch(l.type){case"enroll":return this._finalizeEnroll(n,l.credential,d);case"signin":return this._finalizeSignIn(n,l.credential);default:return debugFail("unexpected MultiFactorSessionType")}}};let PhoneMultiFactorAssertionImpl=class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(n){super("phone"),this.credential=n}static _fromCredential(n){return new PhoneMultiFactorAssertionImpl(n)}_finalizeEnroll(n,l,d){return finalizeEnrollPhoneMfa(n,{idToken:l,displayName:d,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(n,l){return finalizeSignInPhoneMfa(n,{mfaPendingCredential:l,phoneVerificationInfo:this.credential._makeVerificationRequest()})}};let PhoneMultiFactorGenerator=class PhoneMultiFactorGenerator{constructor(){}static assertion(n){return PhoneMultiFactorAssertionImpl._fromCredential(n)}};PhoneMultiFactorGenerator.FACTOR_ID="phone";let TotpMultiFactorGenerator=class TotpMultiFactorGenerator{static assertionForEnrollment(n,l){return TotpMultiFactorAssertionImpl._fromSecret(n,l)}static assertionForSignIn(n,l){return TotpMultiFactorAssertionImpl._fromEnrollmentId(n,l)}static async generateSecret(n){var l;_assert(void 0!==(null===(l=n.user)||void 0===l?void 0:l.auth),"internal-error");let d=await startEnrollTotpMfa(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return TotpSecret._fromStartTotpMfaEnrollmentResponse(d,n.user.auth)}};TotpMultiFactorGenerator.FACTOR_ID="totp";let TotpMultiFactorAssertionImpl=class TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(n,l,d){super("totp"),this.otp=n,this.enrollmentId=l,this.secret=d}static _fromSecret(n,l){return new TotpMultiFactorAssertionImpl(l,void 0,n)}static _fromEnrollmentId(n,l){return new TotpMultiFactorAssertionImpl(l,n)}async _finalizeEnroll(n,l,d){return _assert(void 0!==this.secret,n,"argument-error"),finalizeEnrollTotpMfa(n,{idToken:l,displayName:d,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(n,l){_assert(void 0!==this.enrollmentId&&void 0!==this.otp,n,"argument-error");let d={verificationCode:this.otp};return finalizeSignInTotpMfa(n,{mfaPendingCredential:l,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:d})}};let TotpSecret=class TotpSecret{constructor(n,l,d,f,_,E,L){this.sessionInfo=E,this.auth=L,this.secretKey=n,this.hashingAlgorithm=l,this.codeLength=d,this.codeIntervalSeconds=f,this.enrollmentCompletionDeadline=_}static _fromStartTotpMfaEnrollmentResponse(n,l){return new TotpSecret(n.totpSessionInfo.sharedSecretKey,n.totpSessionInfo.hashingAlgorithm,n.totpSessionInfo.verificationCodeLength,n.totpSessionInfo.periodSec,new Date(n.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),n.totpSessionInfo.sessionInfo,l)}_makeTotpVerificationInfo(n){return{sessionInfo:this.sessionInfo,verificationCode:n}}generateQrCodeUrl(n,l){var d;let f=!1;return(_isEmptyString(n)||_isEmptyString(l))&&(f=!0),f&&(_isEmptyString(n)&&(n=(null===(d=this.auth.currentUser)||void 0===d?void 0:d.email)||"unknownuser"),_isEmptyString(l)&&(l=this.auth.name)),`otpauth://totp/${l}:${n}?secret=${this.secretKey}&issuer=${l}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function _isEmptyString(n){return void 0===n||(null==n?void 0:n.length)===0}var eR="@firebase/auth",eS="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthInterop=class AuthInterop{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),(null===(n=this.auth.currentUser)||void 0===n?void 0:n.uid)||null}async getToken(n){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let l=await this.auth.currentUser.getIdToken(n);return{accessToken:l}}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;let l=this.auth.onIdTokenChanged(l=>{n((null==l?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,l),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();let l=this.internalListeners.get(n);l&&(this.internalListeners.delete(n),l(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getVersionForPlatform(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function registerAuth(n){(0,_.Xd)(new z.wA("auth",(l,{options:d})=>{let f=l.getProvider("app").getImmediate(),_=l.getProvider("heartbeat"),E=l.getProvider("app-check-internal"),{apiKey:L,authDomain:z}=f.options;_assert(L&&!L.includes(":"),"invalid-api-key",{appName:f.name});let et={apiKey:L,authDomain:z,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(n)},er=new AuthImpl(f,_,E,et);return _initializeAuthInstance(er,d),er},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,l,d)=>{let f=n.getProvider("auth-internal");f.initialize()})),(0,_.Xd)(new z.wA("auth-internal",n=>{let l=_castAuth(n.getProvider("auth").getImmediate());return new AuthInterop(l)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,_.KN)(eR,eS,getVersionForPlatform(n)),(0,_.KN)(eR,eS,"esm2017")}let eV=(0,f.Pz)("authIdTokenMaxAge")||300,eC=null,mintCookieFactory=n=>async l=>{let d=l&&await l.getIdTokenResult(),f=d&&(new Date().getTime()-Date.parse(d.issuedAtTime))/1e3;if(f&&f>eV)return;let _=null==d?void 0:d.token;eC!==_&&(eC=_,await fetch(n,{method:_?"POST":"DELETE",headers:_?{Authorization:`Bearer ${_}`}:{}}))};function getAuth(n=(0,_.Mq)()){let l=(0,_.qX)(n,"auth");if(l.isInitialized())return l.getImmediate();let d=initializeAuth(n,{popupRedirectResolver:BrowserPopupRedirectResolver,persistence:[IndexedDBLocalPersistence,BrowserLocalPersistence,BrowserSessionPersistence]}),E=(0,f.Pz)("authTokenSyncURL");if(E){let n=mintCookieFactory(E);beforeAuthStateChanged(d,n,()=>n(d.currentUser)),onIdTokenChanged(d,l=>n(l))}let L=(0,f.q4)("auth");return L&&connectAuthEmulator(d,`http://${L}`),d}registerAuth("Browser")},9828:function(n,l,d){"use strict";d.d(l,{Bt:function(){return f.Bt},ET:function(){return f.ET},IO:function(){return f.IO},JU:function(){return f.JU},PL:function(){return f.PL},QT:function(){return f.QT},ad:function(){return f.ad},ar:function(){return f.ar},hJ:function(){return f.hJ},pl:function(){return f.pl}});var f=d(8036)},6650:function(n,l,d){"use strict";d.d(l,{Jt:function(){return getDownloadURL},cF:function(){return getStorage},iH:function(){return ref},KV:function(){return uploadBytes}});var f,_,E,L,z=d(2238),et=d(4444),er=d(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en="firebasestorage.googleapis.com",ei="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StorageError=class StorageError extends et.ZR{constructor(n,l,d=0){super(prependCode(n),`Firebase Storage: ${l} (${prependCode(n)})`),this.status_=d,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,StorageError.prototype)}get status(){return this.status_}set status(n){this.status_=n}_codeEquals(n){return prependCode(n)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(n){this.customData.serverResponse=n,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}};function prependCode(n){return"storage/"+n}function unknown(){return new StorageError(E.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function objectNotFound(n){return new StorageError(E.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function quotaExceeded(n){return new StorageError(E.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function unauthenticated(){return new StorageError(E.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again.")}function unauthorizedApp(){return new StorageError(E.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function unauthorized(n){return new StorageError(E.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function retryLimitExceeded(){return new StorageError(E.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function canceled(){return new StorageError(E.CANCELED,"User canceled the upload/download.")}function invalidUrl(n){return new StorageError(E.INVALID_URL,"Invalid URL '"+n+"'.")}function invalidDefaultBucket(n){return new StorageError(E.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function noDefaultBucket(){return new StorageError(E.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ei+"' property when initializing the app?")}function cannotSliceBlob(){return new StorageError(E.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function noDownloadURL(){return new StorageError(E.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function missingPolyFill(n){return new StorageError(E.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function invalidArgument(n){return new StorageError(E.INVALID_ARGUMENT,n)}function appDeleted(){return new StorageError(E.APP_DELETED,"The Firebase app was deleted.")}function invalidRootOperation(n){return new StorageError(E.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function invalidFormat(n,l){return new StorageError(E.INVALID_FORMAT,"String does not match format '"+n+"': "+l)}function internalError(n){throw new StorageError(E.INTERNAL_ERROR,"Internal error: "+n)}(f=E||(E={})).UNKNOWN="unknown",f.OBJECT_NOT_FOUND="object-not-found",f.BUCKET_NOT_FOUND="bucket-not-found",f.PROJECT_NOT_FOUND="project-not-found",f.QUOTA_EXCEEDED="quota-exceeded",f.UNAUTHENTICATED="unauthenticated",f.UNAUTHORIZED="unauthorized",f.UNAUTHORIZED_APP="unauthorized-app",f.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",f.INVALID_CHECKSUM="invalid-checksum",f.CANCELED="canceled",f.INVALID_EVENT_NAME="invalid-event-name",f.INVALID_URL="invalid-url",f.INVALID_DEFAULT_BUCKET="invalid-default-bucket",f.NO_DEFAULT_BUCKET="no-default-bucket",f.CANNOT_SLICE_BLOB="cannot-slice-blob",f.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",f.NO_DOWNLOAD_URL="no-download-url",f.INVALID_ARGUMENT="invalid-argument",f.INVALID_ARGUMENT_COUNT="invalid-argument-count",f.APP_DELETED="app-deleted",f.INVALID_ROOT_OPERATION="invalid-root-operation",f.INVALID_FORMAT="invalid-format",f.INTERNAL_ERROR="internal-error",f.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Location=class Location{constructor(n,l){this.bucket=n,this.path_=l}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let n=encodeURIComponent;return"/b/"+n(this.bucket)+"/o/"+n(this.path)}bucketOnlyServerUrl(){let n=encodeURIComponent;return"/b/"+n(this.bucket)+"/o"}static makeFromBucketSpec(n,l){let d;try{d=Location.makeFromUrl(n,l)}catch(l){return new Location(n,"")}if(""===d.path)return d;throw invalidDefaultBucket(n)}static makeFromUrl(n,l){let d=null,f="([A-Za-z0-9.\\-_]+)";function gsModify(n){"/"===n.path.charAt(n.path.length-1)&&(n.path_=n.path_.slice(0,-1))}let _=RegExp("^gs://"+f+"(/(.*))?$","i");function httpModify(n){n.path_=decodeURIComponent(n.path)}let E=l.replace(/[.]/g,"\\."),L=RegExp(`^https?://${E}/v[A-Za-z0-9_]+/b/${f}/o(/([^?#]*).*)?$`,"i"),z=RegExp(`^https?://${l===en?"(?:storage.googleapis.com|storage.cloud.google.com)":l}/${f}/([^?#]*)`,"i"),et=[{regex:_,indices:{bucket:1,path:3},postModify:gsModify},{regex:L,indices:{bucket:1,path:3},postModify:httpModify},{regex:z,indices:{bucket:1,path:2},postModify:httpModify}];for(let l=0;l<et.length;l++){let f=et[l],_=f.regex.exec(n);if(_){let n=_[f.indices.bucket],l=_[f.indices.path];l||(l=""),d=new Location(n,l),f.postModify(d);break}}if(null==d)throw invalidUrl(n);return d}};let FailRequest=class FailRequest{constructor(n){this.promise_=Promise.reject(n)}getPromise(){return this.promise_}cancel(n=!1){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function start(n,l,d){let f=1,_=null,E=null,L=!1,z=0,et=!1;function triggerCallback(...n){et||(et=!0,l.apply(null,n))}function callWithDelay(l){_=setTimeout(()=>{_=null,n(responseHandler,2===z)},l)}function clearGlobalTimeout(){E&&clearTimeout(E)}function responseHandler(n,...l){let d;if(et){clearGlobalTimeout();return}if(n){clearGlobalTimeout(),triggerCallback.call(null,n,...l);return}let _=2===z||L;if(_){clearGlobalTimeout(),triggerCallback.call(null,n,...l);return}f<64&&(f*=2),1===z?(z=2,d=0):d=(f+Math.random())*1e3,callWithDelay(d)}let er=!1;function stop(n){!er&&(er=!0,clearGlobalTimeout(),!et&&(null!==_?(n||(z=2),clearTimeout(_),callWithDelay(0)):n||(z=1)))}return callWithDelay(0),E=setTimeout(()=>{L=!0,stop(!0)},d),stop}function stop(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function isJustDef(n){return void 0!==n}function isNonArrayObject(n){return"object"==typeof n&&!Array.isArray(n)}function isString(n){return"string"==typeof n||n instanceof String}function isNativeBlob(n){return isNativeBlobDefined()&&n instanceof Blob}function isNativeBlobDefined(){return"undefined"!=typeof Blob}function validateNumber(n,l,d,f){if(f<l)throw invalidArgument(`Invalid value for '${n}'. Expected ${l} or greater.`);if(f>d)throw invalidArgument(`Invalid value for '${n}'. Expected ${d} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function makeUrl(n,l,d){let f=l;return null==d&&(f=`https://${l}`),`${d}://${f}/v0${n}`}function makeQueryString(n){let l=encodeURIComponent,d="?";for(let f in n)if(n.hasOwnProperty(f)){let _=l(f)+"="+l(n[f]);d=d+_+"&"}return d.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function isRetryStatusCode(n,l){let d=n>=500&&n<600,f=-1!==[408,429].indexOf(n),_=-1!==l.indexOf(n);return d||f||_}(_=L||(L={}))[_.NO_ERROR=0]="NO_ERROR",_[_.NETWORK_ERROR=1]="NETWORK_ERROR",_[_.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NetworkRequest=class NetworkRequest{constructor(n,l,d,f,_,E,L,z,et,er,en,ei=!0){this.url_=n,this.method_=l,this.headers_=d,this.body_=f,this.successCodes_=_,this.additionalRetryCodes_=E,this.callback_=L,this.errorCallback_=z,this.timeout_=et,this.progressCallback_=er,this.connectionFactory_=en,this.retry=ei,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((n,l)=>{this.resolve_=n,this.reject_=l,this.start_()})}start_(){let backoffDone=(n,l)=>{let d=this.resolve_,f=this.reject_,_=l.connection;if(l.wasSuccessCode)try{let n=this.callback_(_,_.getResponse());isJustDef(n)?d(n):d()}catch(n){f(n)}else if(null!==_){let n=unknown();n.serverResponse=_.getErrorText(),f(this.errorCallback_?this.errorCallback_(_,n):n)}else if(l.canceled){let n=this.appDelete_?appDeleted():canceled();f(n)}else{let n=retryLimitExceeded();f(n)}};this.canceled_?backoffDone(!1,new RequestEndStatus(!1,null,!0)):this.backoffId_=start((n,l)=>{if(l){n(!1,new RequestEndStatus(!1,null,!0));return}let d=this.connectionFactory_();this.pendingConnection_=d;let progressListener=n=>{let l=n.loaded,d=n.lengthComputable?n.total:-1;null!==this.progressCallback_&&this.progressCallback_(l,d)};null!==this.progressCallback_&&d.addUploadProgressListener(progressListener),d.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&d.removeUploadProgressListener(progressListener),this.pendingConnection_=null;let l=d.getErrorCode()===L.NO_ERROR,f=d.getStatus();if(!l||isRetryStatusCode(f,this.additionalRetryCodes_)&&this.retry){let l=d.getErrorCode()===L.ABORT;n(!1,new RequestEndStatus(!1,null,l));return}let _=-1!==this.successCodes_.indexOf(f);n(!0,new RequestEndStatus(_,d))})},backoffDone,this.timeout_)}getPromise(){return this.promise_}cancel(n){this.canceled_=!0,this.appDelete_=n||!1,null!==this.backoffId_&&stop(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}};let RequestEndStatus=class RequestEndStatus{constructor(n,l,d){this.wasSuccessCode=n,this.connection=l,this.canceled=!!d}};function addAuthHeader_(n,l){null!==l&&l.length>0&&(n.Authorization="Firebase "+l)}function addVersionHeader_(n,l){n["X-Firebase-Storage-Version"]="webjs/"+(null!=l?l:"AppManager")}function addGmpidHeader_(n,l){l&&(n["X-Firebase-GMPID"]=l)}function addAppCheckHeader_(n,l){null!==l&&(n["X-Firebase-AppCheck"]=l)}function makeRequest(n,l,d,f,_,E,L=!0){let z=makeQueryString(n.urlParams),et=n.url+z,er=Object.assign({},n.headers);return addGmpidHeader_(er,l),addAuthHeader_(er,d),addVersionHeader_(er,E),addAppCheckHeader_(er,f),new NetworkRequest(et,n.method,er,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,_,L)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getBlobBuilder(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function getBlob$1(...n){let l=getBlobBuilder();if(void 0!==l){let d=new l;for(let l=0;l<n.length;l++)d.append(n[l]);return d.getBlob()}if(isNativeBlobDefined())return new Blob(n);throw new StorageError(E.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function sliceBlob(n,l,d){return n.webkitSlice?n.webkitSlice(l,d):n.mozSlice?n.mozSlice(l,d):n.slice?n.slice(l,d):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function decodeBase64(n){if("undefined"==typeof atob)throw missingPolyFill("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};let StringData=class StringData{constructor(n,l){this.data=n,this.contentType=l||null}};function dataFromString(n,l){switch(n){case es.RAW:return new StringData(utf8Bytes_(l));case es.BASE64:case es.BASE64URL:return new StringData(base64Bytes_(n,l));case es.DATA_URL:return new StringData(dataURLBytes_(l),dataURLContentType_(l))}throw unknown()}function utf8Bytes_(n){let l=[];for(let d=0;d<n.length;d++){let f=n.charCodeAt(d);if(f<=127)l.push(f);else if(f<=2047)l.push(192|f>>6,128|63&f);else if((64512&f)==55296){let _=d<n.length-1&&(64512&n.charCodeAt(d+1))==56320;if(_){let _=f,E=n.charCodeAt(++d);f=65536|(1023&_)<<10|1023&E,l.push(240|f>>18,128|f>>12&63,128|f>>6&63,128|63&f)}else l.push(239,191,189)}else(64512&f)==56320?l.push(239,191,189):l.push(224|f>>12,128|f>>6&63,128|63&f)}return new Uint8Array(l)}function percentEncodedBytes_(n){let l;try{l=decodeURIComponent(n)}catch(n){throw invalidFormat(es.DATA_URL,"Malformed data URL.")}return utf8Bytes_(l)}function base64Bytes_(n,l){let d;switch(n){case es.BASE64:{let d=-1!==l.indexOf("-"),f=-1!==l.indexOf("_");if(d||f)throw invalidFormat(n,"Invalid character '"+(d?"-":"_")+"' found: is it base64url encoded?");break}case es.BASE64URL:{let d=-1!==l.indexOf("+"),f=-1!==l.indexOf("/");if(d||f)throw invalidFormat(n,"Invalid character '"+(d?"+":"/")+"' found: is it base64 encoded?");l=l.replace(/-/g,"+").replace(/_/g,"/")}}try{d=decodeBase64(l)}catch(l){if(l.message.includes("polyfill"))throw l;throw invalidFormat(n,"Invalid character found")}let f=new Uint8Array(d.length);for(let n=0;n<d.length;n++)f[n]=d.charCodeAt(n);return f}let DataURLParts=class DataURLParts{constructor(n){this.base64=!1,this.contentType=null;let l=n.match(/^data:([^,]+)?,/);if(null===l)throw invalidFormat(es.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let d=l[1]||null;null!=d&&(this.base64=endsWith(d,";base64"),this.contentType=this.base64?d.substring(0,d.length-7):d),this.rest=n.substring(n.indexOf(",")+1)}};function dataURLBytes_(n){let l=new DataURLParts(n);return l.base64?base64Bytes_(es.BASE64,l.rest):percentEncodedBytes_(l.rest)}function dataURLContentType_(n){let l=new DataURLParts(n);return l.contentType}function endsWith(n,l){let d=n.length>=l.length;return!!d&&n.substring(n.length-l.length)===l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FbsBlob=class FbsBlob{constructor(n,l){let d=0,f="";isNativeBlob(n)?(this.data_=n,d=n.size,f=n.type):n instanceof ArrayBuffer?(l?this.data_=new Uint8Array(n):(this.data_=new Uint8Array(n.byteLength),this.data_.set(new Uint8Array(n))),d=this.data_.length):n instanceof Uint8Array&&(l?this.data_=n:(this.data_=new Uint8Array(n.length),this.data_.set(n)),d=n.length),this.size_=d,this.type_=f}size(){return this.size_}type(){return this.type_}slice(n,l){if(isNativeBlob(this.data_)){let d=this.data_,f=sliceBlob(d,n,l);return null===f?null:new FbsBlob(f)}{let d=new Uint8Array(this.data_.buffer,n,l-n);return new FbsBlob(d,!0)}}static getBlob(...n){if(isNativeBlobDefined()){let l=n.map(n=>n instanceof FbsBlob?n.data_:n);return new FbsBlob(getBlob$1.apply(null,l))}{let l=n.map(n=>isString(n)?dataFromString(es.RAW,n).data:n.data_),d=0;l.forEach(n=>{d+=n.byteLength});let f=new Uint8Array(d),_=0;return l.forEach(n=>{for(let l=0;l<n.length;l++)f[_++]=n[l]}),new FbsBlob(f,!0)}}uploadData(){return this.data_}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jsonObjectOrNull(n){let l;try{l=JSON.parse(n)}catch(n){return null}return isNonArrayObject(l)?l:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function index_esm2017_parent(n){if(0===n.length)return null;let l=n.lastIndexOf("/");if(-1===l)return"";let d=n.slice(0,l);return d}function child(n,l){let d=l.split("/").filter(n=>n.length>0).join("/");return 0===n.length?d:n+"/"+d}function lastComponent(n){let l=n.lastIndexOf("/",n.length-2);return -1===l?n:n.slice(l+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function noXform_(n,l){return l}let Mapping=class Mapping{constructor(n,l,d,f){this.server=n,this.local=l||n,this.writable=!!d,this.xform=f||noXform_}};let eo=null;function xformPath(n){return!isString(n)||n.length<2?n:lastComponent(n)}function getMappings(){if(eo)return eo;let n=[];function mappingsXformPath(n,l){return xformPath(l)}n.push(new Mapping("bucket")),n.push(new Mapping("generation")),n.push(new Mapping("metageneration")),n.push(new Mapping("name","fullPath",!0));let l=new Mapping("name");function xformSize(n,l){return void 0!==l?Number(l):l}l.xform=mappingsXformPath,n.push(l);let d=new Mapping("size");return d.xform=xformSize,n.push(d),n.push(new Mapping("timeCreated")),n.push(new Mapping("updated")),n.push(new Mapping("md5Hash",null,!0)),n.push(new Mapping("cacheControl",null,!0)),n.push(new Mapping("contentDisposition",null,!0)),n.push(new Mapping("contentEncoding",null,!0)),n.push(new Mapping("contentLanguage",null,!0)),n.push(new Mapping("contentType",null,!0)),n.push(new Mapping("metadata","customMetadata",!0)),eo=n}function addRef(n,l){function generateRef(){let d=n.bucket,f=n.fullPath,_=new Location(d,f);return l._makeStorageReference(_)}Object.defineProperty(n,"ref",{get:generateRef})}function fromResource(n,l,d){let f={};f.type="file";let _=d.length;for(let n=0;n<_;n++){let _=d[n];f[_.local]=_.xform(f,l[_.server])}return addRef(f,n),f}function fromResourceString(n,l,d){let f=jsonObjectOrNull(l);return null===f?null:fromResource(n,f,d)}function downloadUrlFromResourceString(n,l,d,f){let _=jsonObjectOrNull(l);if(null===_||!isString(_.downloadTokens))return null;let E=_.downloadTokens;if(0===E.length)return null;let L=encodeURIComponent,z=E.split(","),et=z.map(l=>{let _=n.bucket,E=n.fullPath,z="/b/"+L(_)+"/o/"+L(E),et=makeUrl(z,d,f),er=makeQueryString({alt:"media",token:l});return et+er});return et[0]}function toResourceString(n,l){let d={},f=l.length;for(let _=0;_<f;_++){let f=l[_];f.writable&&(d[f.server]=n[f.local])}return JSON.stringify(d)}let RequestInfo=class RequestInfo{constructor(n,l,d,f){this.url=n,this.method=l,this.handler=d,this.timeout=f,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function handlerCheck(n){if(!n)throw unknown()}function metadataHandler(n,l){return function(d,f){let _=fromResourceString(n,f,l);return handlerCheck(null!==_),_}}function downloadUrlHandler(n,l){return function(d,f){let _=fromResourceString(n,f,l);return handlerCheck(null!==_),downloadUrlFromResourceString(_,f,n.host,n._protocol)}}function sharedErrorHandler(n){return function(l,d){let f;return(f=401===l.getStatus()?l.getErrorText().includes("Firebase App Check token is invalid")?unauthorizedApp():unauthenticated():402===l.getStatus()?quotaExceeded(n.bucket):403===l.getStatus()?unauthorized(n.path):d).status=l.getStatus(),f.serverResponse=d.serverResponse,f}}function objectErrorHandler(n){let l=sharedErrorHandler(n);return function(d,f){let _=l(d,f);return 404===d.getStatus()&&(_=objectNotFound(n.path)),_.serverResponse=f.serverResponse,_}}function getDownloadUrl(n,l,d){let f=l.fullServerUrl(),_=makeUrl(f,n.host,n._protocol),E=n.maxOperationRetryTime,L=new RequestInfo(_,"GET",downloadUrlHandler(n,d),E);return L.errorHandler=objectErrorHandler(l),L}function determineContentType_(n,l){return n&&n.contentType||l&&l.type()||"application/octet-stream"}function metadataForUpload_(n,l,d){let f=Object.assign({},d);return f.fullPath=n.path,f.size=l.size(),f.contentType||(f.contentType=determineContentType_(null,l)),f}function multipartUpload(n,l,d,f,_){let E=l.bucketOnlyServerUrl(),L={"X-Goog-Upload-Protocol":"multipart"};function genBoundary(){let n="";for(let l=0;l<2;l++)n+=Math.random().toString().slice(2);return n}let z=genBoundary();L["Content-Type"]="multipart/related; boundary="+z;let et=metadataForUpload_(l,f,_),er=toResourceString(et,d),en="--"+z+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+er+"\r\n--"+z+"\r\nContent-Type: "+et.contentType+"\r\n\r\n",ei=FbsBlob.getBlob(en,f,"\r\n--"+z+"--");if(null===ei)throw cannotSliceBlob();let es={name:et.fullPath},eo=makeUrl(E,n.host,n._protocol),el=n.maxUploadRetryTime,eu=new RequestInfo(eo,"POST",metadataHandler(n,d),el);return eu.urlParams=es,eu.headers=L,eu.body=ei.uploadData(),eu.errorHandler=sharedErrorHandler(l),eu}let XhrConnection=class XhrConnection{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(n=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,n()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,n()}),this.xhr_.addEventListener("load",()=>{n()})})}send(n,l,d,f){if(this.sent_)throw internalError("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(l,n,!0),void 0!==f)for(let n in f)f.hasOwnProperty(n)&&this.xhr_.setRequestHeader(n,f[n].toString());return void 0!==d?this.xhr_.send(d):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw internalError("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw internalError("cannot .getStatus() before sending");try{return this.xhr_.status}catch(n){return -1}}getResponse(){if(!this.sent_)throw internalError("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw internalError("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(n){return this.xhr_.getResponseHeader(n)}addUploadProgressListener(n){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",n)}removeUploadProgressListener(n){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",n)}};let XhrTextConnection=class XhrTextConnection extends XhrConnection{initXhr(){this.xhr_.responseType="text"}};function newTextConnection(){return new XhrTextConnection}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Reference=class Reference{constructor(n,l){this._service=n,l instanceof Location?this._location=l:this._location=Location.makeFromUrl(l,n.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(n,l){return new Reference(n,l)}get root(){let n=new Location(this._location.bucket,"");return this._newRef(this._service,n)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lastComponent(this._location.path)}get storage(){return this._service}get parent(){let n=index_esm2017_parent(this._location.path);if(null===n)return null;let l=new Location(this._location.bucket,n);return new Reference(this._service,l)}_throwIfRoot(n){if(""===this._location.path)throw invalidRootOperation(n)}};function uploadBytes$1(n,l,d){n._throwIfRoot("uploadBytes");let f=multipartUpload(n.storage,n._location,getMappings(),new FbsBlob(l,!0),d);return n.storage.makeRequestWithTokens(f,newTextConnection).then(l=>({metadata:l,ref:n}))}function getDownloadURL$1(n){n._throwIfRoot("getDownloadURL");let l=getDownloadUrl(n.storage,n._location,getMappings());return n.storage.makeRequestWithTokens(l,newTextConnection).then(n=>{if(null===n)throw noDownloadURL();return n})}function _getChild$1(n,l){let d=child(n._location.path,l),f=new Location(n._location.bucket,d);return new Reference(n.storage,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function isUrl(n){return/^[A-Za-z]+:\/\//.test(n)}function refFromURL(n,l){return new Reference(n,l)}function refFromPath(n,l){if(n instanceof FirebaseStorageImpl){if(null==n._bucket)throw noDefaultBucket();let d=new Reference(n,n._bucket);return null!=l?refFromPath(d,l):d}return void 0!==l?_getChild$1(n,l):n}function ref$1(n,l){if(!(l&&isUrl(l)))return refFromPath(n,l);if(n instanceof FirebaseStorageImpl)return refFromURL(n,l);throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.")}function extractBucket(n,l){let d=null==l?void 0:l[ei];return null==d?null:Location.makeFromBucketSpec(d,n)}function connectStorageEmulator$1(n,l,d,f={}){n.host=`${l}:${d}`,n._protocol="http";let{mockUserToken:_}=f;_&&(n._overrideAuthToken="string"==typeof _?_:(0,et.Sg)(_,n.app.options.projectId))}let FirebaseStorageImpl=class FirebaseStorageImpl{constructor(n,l,d,f,_){this.app=n,this._authProvider=l,this._appCheckProvider=d,this._url=f,this._firebaseVersion=_,this._bucket=null,this._host=en,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=f?this._bucket=Location.makeFromBucketSpec(f,this._host):this._bucket=extractBucket(this._host,this.app.options)}get host(){return this._host}set host(n){this._host=n,null!=this._url?this._bucket=Location.makeFromBucketSpec(this._url,n):this._bucket=extractBucket(n,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(n){validateNumber("time",0,Number.POSITIVE_INFINITY,n),this._maxUploadRetryTime=n}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(n){validateNumber("time",0,Number.POSITIVE_INFINITY,n),this._maxOperationRetryTime=n}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let n=this._authProvider.getImmediate({optional:!0});if(n){let l=await n.getToken();if(null!==l)return l.accessToken}return null}async _getAppCheckToken(){let n=this._appCheckProvider.getImmediate({optional:!0});if(n){let l=await n.getToken();return l.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(n=>n.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(n){return new Reference(this,n)}_makeRequest(n,l,d,f,_=!0){if(this._deleted)return new FailRequest(appDeleted());{let E=makeRequest(n,this._appId,d,f,l,this._firebaseVersion,_);return this._requests.add(E),E.getPromise().then(()=>this._requests.delete(E),()=>this._requests.delete(E)),E}}async makeRequestWithTokens(n,l){let[d,f]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(n,l,d,f).getPromise()}};let el="@firebase/storage",eu="0.12.0",ec="storage";function uploadBytes(n,l,d){return uploadBytes$1(n=(0,et.m9)(n),l,d)}function getDownloadURL(n){return getDownloadURL$1(n=(0,et.m9)(n))}function ref(n,l){return ref$1(n=(0,et.m9)(n),l)}function getStorage(n=(0,z.Mq)(),l){n=(0,et.m9)(n);let d=(0,z.qX)(n,ec),f=d.getImmediate({identifier:l}),_=(0,et.P0)("storage");return _&&connectStorageEmulator(f,..._),f}function connectStorageEmulator(n,l,d,f={}){connectStorageEmulator$1(n,l,d,f)}function factory(n,{instanceIdentifier:l}){let d=n.getProvider("app").getImmediate(),f=n.getProvider("auth-internal"),_=n.getProvider("app-check-internal");return new FirebaseStorageImpl(d,f,_,l,z.Jn)}(0,z.Xd)(new er.wA(ec,factory,"PUBLIC").setMultipleInstances(!0)),(0,z.KN)(el,eu,""),(0,z.KN)(el,eu,"esm2017")},6531:function(n,l,d){"use strict";let f,_;d.d(l,{Lj:function(){return deleteDB},X3:function(){return openDB}});let instanceOfAny=(n,l)=>l.some(l=>n instanceof l);function getIdbProxyableTypes(){return f||(f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return _||(_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}let E=new WeakMap,L=new WeakMap,z=new WeakMap,et=new WeakMap,er=new WeakMap;function promisifyRequest(n){let l=new Promise((l,d)=>{let unlisten=()=>{n.removeEventListener("success",success),n.removeEventListener("error",error)},success=()=>{l(wrap(n.result)),unlisten()},error=()=>{d(n.error),unlisten()};n.addEventListener("success",success),n.addEventListener("error",error)});return l.then(l=>{l instanceof IDBCursor&&E.set(l,n)}).catch(()=>{}),er.set(l,n),l}function cacheDonePromiseForTransaction(n){if(L.has(n))return;let l=new Promise((l,d)=>{let unlisten=()=>{n.removeEventListener("complete",complete),n.removeEventListener("error",error),n.removeEventListener("abort",error)},complete=()=>{l(),unlisten()},error=()=>{d(n.error||new DOMException("AbortError","AbortError")),unlisten()};n.addEventListener("complete",complete),n.addEventListener("error",error),n.addEventListener("abort",error)});L.set(n,l)}let en={get(n,l,d){if(n instanceof IDBTransaction){if("done"===l)return L.get(n);if("objectStoreNames"===l)return n.objectStoreNames||z.get(n);if("store"===l)return d.objectStoreNames[1]?void 0:d.objectStore(d.objectStoreNames[0])}return wrap(n[l])},set:(n,l,d)=>(n[l]=d,!0),has:(n,l)=>n instanceof IDBTransaction&&("done"===l||"store"===l)||l in n};function replaceTraps(n){en=n(en)}function wrapFunction(n){return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?getCursorAdvanceMethods().includes(n)?function(...l){return n.apply(unwrap(this),l),wrap(E.get(this))}:function(...l){return wrap(n.apply(unwrap(this),l))}:function(l,...d){let f=n.call(unwrap(this),l,...d);return z.set(f,l.sort?l.sort():[l]),wrap(f)}}function transformCachableValue(n){return"function"==typeof n?wrapFunction(n):(n instanceof IDBTransaction&&cacheDonePromiseForTransaction(n),instanceOfAny(n,getIdbProxyableTypes()))?new Proxy(n,en):n}function wrap(n){if(n instanceof IDBRequest)return promisifyRequest(n);if(et.has(n))return et.get(n);let l=transformCachableValue(n);return l!==n&&(et.set(n,l),er.set(l,n)),l}let unwrap=n=>er.get(n);function openDB(n,l,{blocked:d,upgrade:f,blocking:_,terminated:E}={}){let L=indexedDB.open(n,l),z=wrap(L);return f&&L.addEventListener("upgradeneeded",n=>{f(wrap(L.result),n.oldVersion,n.newVersion,wrap(L.transaction),n)}),d&&L.addEventListener("blocked",n=>d(n.oldVersion,n.newVersion,n)),z.then(n=>{E&&n.addEventListener("close",()=>E()),_&&n.addEventListener("versionchange",n=>_(n.oldVersion,n.newVersion,n))}).catch(()=>{}),z}function deleteDB(n,{blocked:l}={}){let d=indexedDB.deleteDatabase(n);return l&&d.addEventListener("blocked",n=>l(n.oldVersion,n)),wrap(d).then(()=>void 0)}let ei=["get","getKey","getAll","getAllKeys","count"],es=["put","add","delete","clear"],eo=new Map;function getMethod(n,l){if(!(n instanceof IDBDatabase&&!(l in n)&&"string"==typeof l))return;if(eo.get(l))return eo.get(l);let d=l.replace(/FromIndex$/,""),f=l!==d,_=es.includes(d);if(!(d in(f?IDBIndex:IDBObjectStore).prototype)||!(_||ei.includes(d)))return;let method=async function(n,...l){let E=this.transaction(n,_?"readwrite":"readonly"),L=E.store;return f&&(L=L.index(l.shift())),(await Promise.all([L[d](...l),_&&E.done]))[0]};return eo.set(l,method),method}replaceTraps(n=>({...n,get:(l,d,f)=>getMethod(l,d)||n.get(l,d,f),has:(l,d)=>!!getMethod(l,d)||n.has(l,d)}))},6501:function(n,l,d){"use strict";let f,_;d.d(l,{x7:function(){return Ie},ZP:function(){return eO}});var E=d(7294);let L={data:""},t=n=>"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||L,z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,et=/\/\*[^]*?\*\/|  +/g,er=/\n+/g,o=(n,l)=>{let d="",f="",_="";for(let E in n){let L=n[E];"@"==E[0]?"i"==E[1]?d=E+" "+L+";":f+="f"==E[1]?o(L,E):E+"{"+o(L,"k"==E[1]?"":l)+"}":"object"==typeof L?f+=o(L,l?l.replace(/([^,])+/g,n=>E.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):E):null!=L&&(E=/^--/.test(E)?E:E.replace(/[A-Z]/g,"-$&").toLowerCase(),_+=o.p?o.p(E,L):E+":"+L+";")}return d+(l&&_?l+"{"+_+"}":_)+f},en={},s=n=>{if("object"==typeof n){let l="";for(let d in n)l+=d+s(n[d]);return l}return n},i=(n,l,d,f,_)=>{var E;let L=s(n),ei=en[L]||(en[L]=(n=>{let l=0,d=11;for(;l<n.length;)d=101*d+n.charCodeAt(l++)>>>0;return"go"+d})(L));if(!en[ei]){let l=L!==n?n:(n=>{let l,d,f=[{}];for(;l=z.exec(n.replace(et,""));)l[4]?f.shift():l[3]?(d=l[3].replace(er," ").trim(),f.unshift(f[0][d]=f[0][d]||{})):f[0][l[1]]=l[2].replace(er," ").trim();return f[0]})(n);en[ei]=o(_?{["@keyframes "+ei]:l}:l,d?"":"."+ei)}let es=d&&en.g?en.g:null;return d&&(en.g=en[ei]),E=en[ei],es?l.data=l.data.replace(es,E):-1===l.data.indexOf(E)&&(l.data=f?E+l.data:l.data+E),ei},p=(n,l,d)=>n.reduce((n,f,_)=>{let E=l[_];if(E&&E.call){let n=E(d),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;E=l?"."+l:n&&"object"==typeof n?n.props?"":o(n,""):!1===n?"":n}return n+f+(null==E?"":E)},"");function u(n){let l=this||{},d=n.call?n(l.p):n;return i(d.unshift?d.raw?p(d,[].slice.call(arguments,1),l.p):d.reduce((n,d)=>Object.assign(n,d&&d.call?d(l.p):d),{}):d,t(l.target),l.g,l.o,l.k)}u.bind({g:1});let ei,es,eo,el=u.bind({k:1});function m(n,l,d,f){o.p=l,ei=n,es=d,eo=f}function j(n,l){let d=this||{};return function(){let f=arguments;function a(_,E){let L=Object.assign({},_),z=L.className||a.className;d.p=Object.assign({theme:es&&es()},L),d.o=/ *go\d+/.test(z),L.className=u.apply(d,f)+(z?" "+z:""),l&&(L.ref=E);let et=n;return n[0]&&(et=L.as||n,delete L.as),eo&&et[0]&&eo(L),ei(et,L)}return l?l(a):a}}var W=n=>"function"==typeof n,T=(n,l)=>W(n)?n(l):n,eu=(f=0,()=>(++f).toString()),dist_b=()=>{if(void 0===_&&"u">typeof window){let n=matchMedia("(prefers-reduced-motion: reduce)");_=!n||n.matches}return _},ec=new Map,$=n=>{if(ec.has(n))return;let l=setTimeout(()=>{ec.delete(n),dist_u({type:4,toastId:n})},1e3);ec.set(n,l)},J=n=>{let l=ec.get(n);l&&clearTimeout(l)},v=(n,l)=>{switch(l.type){case 0:return{...n,toasts:[l.toast,...n.toasts].slice(0,20)};case 1:return l.toast.id&&J(l.toast.id),{...n,toasts:n.toasts.map(n=>n.id===l.toast.id?{...n,...l.toast}:n)};case 2:let{toast:d}=l;return n.toasts.find(n=>n.id===d.id)?v(n,{type:1,toast:d}):v(n,{type:0,toast:d});case 3:let{toastId:f}=l;return f?$(f):n.toasts.forEach(n=>{$(n.id)}),{...n,toasts:n.toasts.map(n=>n.id===f||void 0===f?{...n,visible:!1}:n)};case 4:return void 0===l.toastId?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(n=>n.id!==l.toastId)};case 5:return{...n,pausedAt:l.time};case 6:let _=l.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(n=>({...n,pauseDuration:n.pauseDuration+_}))}}},eh=[],ef={toasts:[],pausedAt:void 0},dist_u=n=>{ef=v(ef,n),eh.forEach(n=>{n(ef)})},ep={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(n={})=>{let[l,d]=(0,E.useState)(ef);(0,E.useEffect)(()=>(eh.push(d),()=>{let n=eh.indexOf(d);n>-1&&eh.splice(n,1)}),[l]);let f=l.toasts.map(l=>{var d,f;return{...n,...n[l.type],...l,duration:l.duration||(null==(d=n[l.type])?void 0:d.duration)||(null==n?void 0:n.duration)||ep[l.type],style:{...n.style,...null==(f=n[l.type])?void 0:f.style,...l.style}}});return{...l,toasts:f}},G=(n,l="blank",d)=>({createdAt:Date.now(),visible:!0,type:l,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...d,id:(null==d?void 0:d.id)||eu()}),dist_h=n=>(l,d)=>{let f=G(l,n,d);return dist_u({type:2,toast:f}),f.id},dist_n=(n,l)=>dist_h("blank")(n,l);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=n=>{dist_u({type:3,toastId:n})},dist_n.remove=n=>dist_u({type:4,toastId:n}),dist_n.promise=(n,l,d)=>{let f=dist_n.loading(l.loading,{...d,...null==d?void 0:d.loading});return n.then(n=>(dist_n.success(T(l.success,n),{id:f,...d,...null==d?void 0:d.success}),n)).catch(n=>{dist_n.error(T(l.error,n),{id:f,...d,...null==d?void 0:d.error})}),n};var Z=(n,l)=>{dist_u({type:1,toast:{id:n,height:l}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=n=>{let{toasts:l,pausedAt:d}=I(n);(0,E.useEffect)(()=>{if(d)return;let n=Date.now(),f=l.map(l=>{if(l.duration===1/0)return;let d=(l.duration||0)+l.pauseDuration-(n-l.createdAt);if(d<0){l.visible&&dist_n.dismiss(l.id);return}return setTimeout(()=>dist_n.dismiss(l.id),d)});return()=>{f.forEach(n=>n&&clearTimeout(n))}},[l,d]);let f=(0,E.useCallback)(()=>{d&&dist_u({type:6,time:Date.now()})},[d]),_=(0,E.useCallback)((n,d)=>{let{reverseOrder:f=!1,gutter:_=8,defaultPosition:E}=d||{},L=l.filter(l=>(l.position||E)===(n.position||E)&&l.height),z=L.findIndex(l=>l.id===n.id),et=L.filter((n,l)=>l<z&&n.visible).length;return L.filter(n=>n.visible).slice(...f?[et+1]:[0,et]).reduce((n,l)=>n+(l.height||0)+_,0)},[l]);return{toasts:l,handlers:{updateHeight:Z,startPause:ee,endPause:f,calculateOffset:_}}},e_=el`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,em=el`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,eg=el`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ey=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${e_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${em} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${eg} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ev=el`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,eE=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${ev} 1s linear infinite;
`,eT=el`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,eI=el`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,eP=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eT} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${eI} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,eA=j("div")`
  position: absolute;
`,ew=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,eR=el`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,eS=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${eR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:n})=>{let{icon:l,type:d,iconTheme:f}=n;return void 0!==l?"string"==typeof l?E.createElement(eS,null,l):l:"blank"===d?null:E.createElement(ew,null,E.createElement(eE,{...f}),"loading"!==d&&E.createElement(eA,null,"error"===d?E.createElement(ey,{...f}):E.createElement(eP,{...f})))},ye=n=>`
0% {transform: translate3d(0,${-200*n}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*n}%,-1px) scale(.6); opacity:0;}
`,eV=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eC=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(n,l)=>{let d=n.includes("top")?1:-1,[f,_]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(d),ge(d)];return{animation:l?`${el(f)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${el(_)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ek=E.memo(({toast:n,position:l,style:d,children:f})=>{let _=n.height?Ae(n.position||l||"top-center",n.visible):{opacity:0},L=E.createElement(M,{toast:n}),z=E.createElement(eC,{...n.ariaProps},T(n.message,n));return E.createElement(eV,{className:n.className,style:{..._,...d,...n.style}},"function"==typeof f?f({icon:L,message:z}):E.createElement(E.Fragment,null,L,z))});m(E.createElement);var Ee=({id:n,className:l,style:d,onHeightUpdate:f,children:_})=>{let L=E.useCallback(l=>{if(l){let i=()=>{f(n,l.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[n,f]);return E.createElement("div",{ref:L,className:l,style:d},_)},Re=(n,l)=>{let d=n.includes("top"),f=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${l*(d?1:-1)}px)`,...d?{top:0}:{bottom:0},...f}},eD=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:n,position:l="top-center",toastOptions:d,gutter:f,children:_,containerStyle:L,containerClassName:z})=>{let{toasts:et,handlers:er}=D(d);return E.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...L},className:z,onMouseEnter:er.startPause,onMouseLeave:er.endPause},et.map(d=>{let L=d.position||l,z=Re(L,er.calculateOffset(d,{reverseOrder:n,gutter:f,defaultPosition:l}));return E.createElement(Ee,{id:d.id,key:d.id,onHeightUpdate:er.updateHeight,className:d.visible?eD:"",style:z},"custom"===d.type?T(d.message,d):_?_(d):E.createElement(ek,{toast:d,position:L}))}))},eO=dist_n},7582:function(n,l,d){"use strict";d.d(l,{_T:function(){return __rest},ev:function(){return __spreadArray},pi:function(){return __assign}});var __assign=function(){return(__assign=Object.assign||function(n){for(var l,d=1,f=arguments.length;d<f;d++)for(var _ in l=arguments[d])Object.prototype.hasOwnProperty.call(l,_)&&(n[_]=l[_]);return n}).apply(this,arguments)};function __rest(n,l){var d={};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&0>l.indexOf(f)&&(d[f]=n[f]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var _=0,f=Object.getOwnPropertySymbols(n);_<f.length;_++)0>l.indexOf(f[_])&&Object.prototype.propertyIsEnumerable.call(n,f[_])&&(d[f[_]]=n[f[_]]);return d}function __spreadArray(n,l,d){if(d||2==arguments.length)for(var f,_=0,E=l.length;_<E;_++)!f&&_ in l||(f||(f=Array.prototype.slice.call(l,0,_)),f[_]=l[_]);return n.concat(f||Array.prototype.slice.call(l))}"function"==typeof SuppressedError&&SuppressedError}},function(n){var __webpack_exec__=function(l){return n(n.s=l)};n.O(0,[9774,179],function(){return __webpack_exec__(1118),__webpack_exec__(9974)}),_N_E=n.O()}]);