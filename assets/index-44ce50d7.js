(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Ut(n,t){const s=Object.create(null),o=n.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return t?l=>!!s[l.toLowerCase()]:l=>!!s[l]}function tn(n){if(ue(n)){const t={};for(let s=0;s<n.length;s++){const o=n[s],l=We(o)?ph(o):tn(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(We(n))return n;if(Re(n))return n}}const ah=/;(?![^(]*\))/g,ih=/:([^]+)/,ch=/\/\*.*?\*\//gs;function ph(n){const t={};return n.replace(ch,"").split(ah).forEach(s=>{if(s){const o=s.split(ih);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ge(n){let t="";if(We(n))t=n;else if(ue(n))for(let s=0;s<n.length;s++){const o=Ge(n[s]);o&&(t+=o+" ")}else if(Re(n))for(const s in n)n[s]&&(t+=s+" ");return t.trim()}function te(n){if(!n)return null;let{class:t,style:s}=n;return t&&!We(t)&&(n.class=Ge(t)),s&&(n.style=tn(s)),n}const uh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",dh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",bu=Ut(uh),yh=Ut(dh),fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hh=Ut(fh);function Du(n){return!!n||n===""}const lt=n=>We(n)?n:n==null?"":ue(n)||Re(n)&&(n.toString===Eu||!he(n.toString))?JSON.stringify(n,wu,2):String(n),wu=(n,t)=>t&&t.__v_isRef?wu(n,t.value):us(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:ku(t)?{[`Set(${t.size})`]:[...t.values()]}:Re(t)&&!ue(t)&&!Tu(t)?String(t):t,Ve=Object.freeze({}),Ps=Object.freeze([]),Bn=()=>{},xu=()=>!1,mh=/^on[^a-z]/,qo=n=>mh.test(n),El=n=>n.startsWith("onUpdate:"),ze=Object.assign,Xa=(n,t)=>{const s=n.indexOf(t);s>-1&&n.splice(s,1)},gh=Object.prototype.hasOwnProperty,Ee=(n,t)=>gh.call(n,t),ue=Array.isArray,us=n=>Wo(n)==="[object Map]",ku=n=>Wo(n)==="[object Set]",Ah=n=>Wo(n)==="[object RegExp]",he=n=>typeof n=="function",We=n=>typeof n=="string",ei=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",ni=n=>Re(n)&&he(n.then)&&he(n.catch),Eu=Object.prototype.toString,Wo=n=>Eu.call(n),ti=n=>Wo(n).slice(8,-1),Tu=n=>Wo(n)==="[object Object]",si=n=>We(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gl=Ut(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_h=Ut("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Zl=n=>{const t=Object.create(null);return s=>t[s]||(t[s]=n(s))},vh=/-(\w)/g,rt=Zl(n=>n.replace(vh,(t,s)=>s?s.toUpperCase():"")),Bh=/\B([A-Z])/g,At=Zl(n=>n.replace(Bh,"-$1").toLowerCase()),As=Zl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xt=Zl(n=>n?`on${As(n)}`:""),wo=(n,t)=>!Object.is(n,t),ts=(n,t)=>{for(let s=0;s<n.length;s++)n[s](t)},Tl=(n,t,s)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:s})},Ch=n=>{const t=parseFloat(n);return isNaN(t)?n:t},bh=n=>{const t=We(n)?Number(n):NaN;return isNaN(t)?n:t};let ec;const Fu=()=>ec||(ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(n,...t){console.warn(`[Vue warn] ${n}`,...t)}let kn;class Su{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kn,!t&&kn&&(this.index=(kn.scopes||(kn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const s=kn;try{return kn=this,t()}finally{kn=s}}else Fl("cannot run an inactive effect scope.")}on(){kn=this}off(){kn=this.parent}stop(t){if(this._active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Dh(n){return new Su(n)}function wh(n,t=kn){t&&t.active&&t.effects.push(n)}function Jl(){return kn}function oi(n){kn?kn.cleanups.push(n):Fl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const li=n=>{const t=new Set(n);return t.w=0,t.n=0,t},$u=n=>(n.w&qt)>0,Iu=n=>(n.n&qt)>0,xh=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=qt},kh=n=>{const{deps:t}=n;if(t.length){let s=0;for(let o=0;o<t.length;o++){const l=t[o];$u(l)&&!Iu(l)?l.delete(n):t[s++]=l,l.w&=~qt,l.n&=~qt}t.length=s}},Sl=new WeakMap;let ro=0,qt=1;const Xr=30;let hn;const ds=Symbol("iterate"),ea=Symbol("Map key iterate");class ri{constructor(t,s=null,o){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,wh(this,o)}run(){if(!this.active)return this.fn();let t=hn,s=Ot;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=hn,hn=this,Ot=!0,qt=1<<++ro,ro<=Xr?xh(this):nc(this),this.fn()}finally{ro<=Xr&&kh(this),qt=1<<--ro,hn=this.parent,Ot=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(nc(this),this.onStop&&this.onStop(),this.active=!1)}}function nc(n){const{deps:t}=n;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(n);t.length=0}}let Ot=!0;const Pu=[];function vs(){Pu.push(Ot),Ot=!1}function Bs(){const n=Pu.pop();Ot=n===void 0?!0:n}function bn(n,t,s){if(Ot&&hn){let o=Sl.get(n);o||Sl.set(n,o=new Map);let l=o.get(s);l||o.set(s,l=li()),Ou(l,{effect:hn,target:n,type:t,key:s})}}function Ou(n,t){let s=!1;ro<=Xr?Iu(n)||(n.n|=qt,s=!$u(n)):s=!n.has(hn),s&&(n.add(hn),hn.deps.push(n),hn.onTrack&&hn.onTrack(Object.assign({effect:hn},t)))}function _t(n,t,s,o,l,r){const a=Sl.get(n);if(!a)return;let c=[];if(t==="clear")c=[...a.values()];else if(s==="length"&&ue(n)){const u=Number(o);a.forEach((d,y)=>{(y==="length"||y>=u)&&c.push(d)})}else switch(s!==void 0&&c.push(a.get(s)),t){case"add":ue(n)?si(s)&&c.push(a.get("length")):(c.push(a.get(ds)),us(n)&&c.push(a.get(ea)));break;case"delete":ue(n)||(c.push(a.get(ds)),us(n)&&c.push(a.get(ea)));break;case"set":us(n)&&c.push(a.get(ds));break}const p={target:n,type:t,key:s,newValue:o,oldValue:l,oldTarget:r};if(c.length===1)c[0]&&na(c[0],p);else{const u=[];for(const d of c)d&&u.push(...d);na(li(u),p)}}function na(n,t){const s=ue(n)?n:[...n];for(const o of s)o.computed&&tc(o,t);for(const o of s)o.computed||tc(o,t)}function tc(n,t){(n!==hn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(ze({effect:n},t)),n.scheduler?n.scheduler():n.run())}function Eh(n,t){var s;return(s=Sl.get(n))===null||s===void 0?void 0:s.get(t)}const Th=Ut("__proto__,__v_isRef,__isVue"),Mu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ei)),Fh=Ql(),Sh=Ql(!1,!0),$h=Ql(!0),Ih=Ql(!0,!0),sc=Ph();function Ph(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...s){const o=ge(this);for(let r=0,a=this.length;r<a;r++)bn(o,"get",r+"");const l=o[t](...s);return l===-1||l===!1?o[t](...s.map(ge)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...s){vs();const o=ge(this)[t].apply(this,s);return Bs(),o}}),n}function Oh(n){const t=ge(this);return bn(t,"has",n),t.hasOwnProperty(n)}function Ql(n=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!n;if(l==="__v_isReadonly")return n;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(n?t?Wu:qu:t?Vu:Hu).get(o))return o;const a=ue(o);if(!n){if(a&&Ee(sc,l))return Reflect.get(sc,l,r);if(l==="hasOwnProperty")return Oh}const c=Reflect.get(o,l,r);return(ei(l)?Mu.has(l):Th(l))||(n||bn(o,"get",l),t)?c:Oe(c)?a&&si(l)?c:c.value:Re(c)?n?zn(c):Ue(c):c}}const Mh=Lu(),Lh=Lu(!0);function Lu(n=!1){return function(s,o,l,r){let a=s[o];if(Wt(a)&&Oe(a)&&!Oe(l))return!1;if(!n&&(!$l(l)&&!Wt(l)&&(a=ge(a),l=ge(l)),!ue(s)&&Oe(a)&&!Oe(l)))return a.value=l,!0;const c=ue(s)&&si(o)?Number(o)<s.length:Ee(s,o),p=Reflect.set(s,o,l,r);return s===ge(r)&&(c?wo(l,a)&&_t(s,"set",o,l,a):_t(s,"add",o,l)),p}}function Rh(n,t){const s=Ee(n,t),o=n[t],l=Reflect.deleteProperty(n,t);return l&&s&&_t(n,"delete",t,void 0,o),l}function jh(n,t){const s=Reflect.has(n,t);return(!ei(t)||!Mu.has(t))&&bn(n,"has",t),s}function Nh(n){return bn(n,"iterate",ue(n)?"length":ds),Reflect.ownKeys(n)}const Ru={get:Fh,set:Mh,deleteProperty:Rh,has:jh,ownKeys:Nh},ju={get:$h,set(n,t){return Fl(`Set operation on key "${String(t)}" failed: target is readonly.`,n),!0},deleteProperty(n,t){return Fl(`Delete operation on key "${String(t)}" failed: target is readonly.`,n),!0}},Hh=ze({},Ru,{get:Sh,set:Lh}),Vh=ze({},ju,{get:Ih}),ai=n=>n,Xl=n=>Reflect.getPrototypeOf(n);function Xo(n,t,s=!1,o=!1){n=n.__v_raw;const l=ge(n),r=ge(t);s||(t!==r&&bn(l,"get",t),bn(l,"get",r));const{has:a}=Xl(l),c=o?ai:s?ii:xo;if(a.call(l,t))return c(n.get(t));if(a.call(l,r))return c(n.get(r));n!==l&&n.get(t)}function el(n,t=!1){const s=this.__v_raw,o=ge(s),l=ge(n);return t||(n!==l&&bn(o,"has",n),bn(o,"has",l)),n===l?s.has(n):s.has(n)||s.has(l)}function nl(n,t=!1){return n=n.__v_raw,!t&&bn(ge(n),"iterate",ds),Reflect.get(n,"size",n)}function oc(n){n=ge(n);const t=ge(this);return Xl(t).has.call(t,n)||(t.add(n),_t(t,"add",n,n)),this}function lc(n,t){t=ge(t);const s=ge(this),{has:o,get:l}=Xl(s);let r=o.call(s,n);r?Nu(s,o,n):(n=ge(n),r=o.call(s,n));const a=l.call(s,n);return s.set(n,t),r?wo(t,a)&&_t(s,"set",n,t,a):_t(s,"add",n,t),this}function rc(n){const t=ge(this),{has:s,get:o}=Xl(t);let l=s.call(t,n);l?Nu(t,s,n):(n=ge(n),l=s.call(t,n));const r=o?o.call(t,n):void 0,a=t.delete(n);return l&&_t(t,"delete",n,void 0,r),a}function ac(){const n=ge(this),t=n.size!==0,s=us(n)?new Map(n):new Set(n),o=n.clear();return t&&_t(n,"clear",void 0,void 0,s),o}function tl(n,t){return function(o,l){const r=this,a=r.__v_raw,c=ge(a),p=t?ai:n?ii:xo;return!n&&bn(c,"iterate",ds),a.forEach((u,d)=>o.call(l,p(u),p(d),r))}}function sl(n,t,s){return function(...o){const l=this.__v_raw,r=ge(l),a=us(r),c=n==="entries"||n===Symbol.iterator&&a,p=n==="keys"&&a,u=l[n](...o),d=s?ai:t?ii:xo;return!t&&bn(r,"iterate",p?ea:ds),{next(){const{value:y,done:f}=u.next();return f?{value:y,done:f}:{value:c?[d(y[0]),d(y[1])]:d(y),done:f}},[Symbol.iterator](){return this}}}}function wt(n){return function(...t){{const s=t[0]?`on key "${t[0]}" `:"";console.warn(`${As(n)} operation ${s}failed: target is readonly.`,ge(this))}return n==="delete"?!1:this}}function qh(){const n={get(r){return Xo(this,r)},get size(){return nl(this)},has:el,add:oc,set:lc,delete:rc,clear:ac,forEach:tl(!1,!1)},t={get(r){return Xo(this,r,!1,!0)},get size(){return nl(this)},has:el,add:oc,set:lc,delete:rc,clear:ac,forEach:tl(!1,!0)},s={get(r){return Xo(this,r,!0)},get size(){return nl(this,!0)},has(r){return el.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:tl(!0,!1)},o={get(r){return Xo(this,r,!0,!0)},get size(){return nl(this,!0)},has(r){return el.call(this,r,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:tl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=sl(r,!1,!1),s[r]=sl(r,!0,!1),t[r]=sl(r,!1,!0),o[r]=sl(r,!0,!0)}),[n,s,t,o]}const[Wh,Gh,Uh,zh]=qh();function er(n,t){const s=t?n?zh:Uh:n?Gh:Wh;return(o,l,r)=>l==="__v_isReactive"?!n:l==="__v_isReadonly"?n:l==="__v_raw"?o:Reflect.get(Ee(s,l)&&l in o?s:o,l,r)}const Yh={get:er(!1,!1)},Kh={get:er(!1,!0)},Zh={get:er(!0,!1)},Jh={get:er(!0,!0)};function Nu(n,t,s){const o=ge(s);if(o!==s&&t.call(n,o)){const l=ti(n);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Hu=new WeakMap,Vu=new WeakMap,qu=new WeakMap,Wu=new WeakMap;function Qh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xh(n){return n.__v_skip||!Object.isExtensible(n)?0:Qh(ti(n))}function Ue(n){return Wt(n)?n:nr(n,!1,Ru,Yh,Hu)}function em(n){return nr(n,!1,Hh,Kh,Vu)}function zn(n){return nr(n,!0,ju,Zh,qu)}function $s(n){return nr(n,!0,Vh,Jh,Wu)}function nr(n,t,s,o,l){if(!Re(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=l.get(n);if(r)return r;const a=Xh(n);if(a===0)return n;const c=new Proxy(n,a===2?o:s);return l.set(n,c),c}function ys(n){return Wt(n)?ys(n.__v_raw):!!(n&&n.__v_isReactive)}function Wt(n){return!!(n&&n.__v_isReadonly)}function $l(n){return!!(n&&n.__v_isShallow)}function Il(n){return ys(n)||Wt(n)}function ge(n){const t=n&&n.__v_raw;return t?ge(t):n}function tr(n){return Tl(n,"__v_skip",!0),n}const xo=n=>Re(n)?Ue(n):n,ii=n=>Re(n)?zn(n):n;function ci(n){Ot&&hn&&(n=ge(n),Ou(n.dep||(n.dep=li()),{target:n,type:"get",key:"value"}))}function pi(n,t){n=ge(n);const s=n.dep;s&&na(s,{target:n,type:"set",key:"value",newValue:t})}function Oe(n){return!!(n&&n.__v_isRef===!0)}function Z(n){return Gu(n,!1)}function at(n){return Gu(n,!0)}function Gu(n,t){return Oe(n)?n:new nm(n,t)}class nm{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:ge(t),this._value=s?t:xo(t)}get value(){return ci(this),this._value}set value(t){const s=this.__v_isShallow||$l(t)||Wt(t);t=s?t:ge(t),wo(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:xo(t),pi(this,t))}}function x(n){return Oe(n)?n.value:n}const tm={get:(n,t,s)=>x(Reflect.get(n,t,s)),set:(n,t,s,o)=>{const l=n[t];return Oe(l)&&!Oe(s)?(l.value=s,!0):Reflect.set(n,t,s,o)}};function Uu(n){return ys(n)?n:new Proxy(n,tm)}class sm{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=t(()=>ci(this),()=>pi(this));this._get=s,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function ui(n){return new sm(n)}function om(n){Il(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=ue(n)?new Array(n.length):{};for(const s in n)t[s]=zu(n,s);return t}class lm{constructor(t,s,o){this._object=t,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Eh(ge(this._object),this._key)}}function zu(n,t,s){const o=n[t];return Oe(o)?o:new lm(n,t,s)}var Yu;class rm{constructor(t,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Yu]=!1,this._dirty=!0,this.effect=new ri(t,()=>{this._dirty||(this._dirty=!0,pi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=ge(this);return ci(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Yu="__v_isReadonly";function am(n,t,s=!1){let o,l;const r=he(n);r?(o=n,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,l=n.set);const a=new rm(o,l,r||!l,s);return t&&!s&&(a.effect.onTrack=t.onTrack,a.effect.onTrigger=t.onTrigger),a}const fs=[];function Al(n){fs.push(n)}function _l(){fs.pop()}function H(n,...t){vs();const s=fs.length?fs[fs.length-1].component:null,o=s&&s.appContext.config.warnHandler,l=im();if(o)mt(o,s,11,[n+t.join(""),s&&s.proxy,l.map(({vnode:r})=>`at <${dr(s,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${n}`,...t];l.length&&r.push(`
`,...cm(l)),console.warn(...r)}Bs()}function im(){let n=fs[fs.length-1];if(!n)return[];const t=[];for(;n;){const s=t[0];s&&s.vnode===n?s.recurseCount++:t.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return t}function cm(n){const t=[];return n.forEach((s,o)=>{t.push(...o===0?[]:[`
`],...pm(s))}),t}function pm({vnode:n,recurseCount:t}){const s=t>0?`... (${t} recursive calls)`:"",o=n.component?n.component.parent==null:!1,l=` at <${dr(n.component,n.type,o)}`,r=">"+s;return n.props?[l,...um(n.props),r]:[l+r]}function um(n){const t=[],s=Object.keys(n);return s.slice(0,3).forEach(o=>{t.push(...Ku(o,n[o]))}),s.length>3&&t.push(" ..."),t}function Ku(n,t,s){return We(t)?(t=JSON.stringify(t),s?t:[`${n}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?s?t:[`${n}=${t}`]:Oe(t)?(t=Ku(n,ge(t.value),!0),s?t:[`${n}=Ref<`,t,">"]):he(t)?[`${n}=fn${t.name?`<${t.name}>`:""}`]:(t=ge(t),s?t:[`${n}=`,t])}function dm(n,t){n!==void 0&&(typeof n!="number"?H(`${t} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&H(`${t} is NaN - the duration expression might be incorrect.`))}const di={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function mt(n,t,s,o){let l;try{l=o?n(...o):n()}catch(r){sr(r,t,s)}return l}function Rn(n,t,s,o){if(he(n)){const r=mt(n,t,s,o);return r&&ni(r)&&r.catch(a=>{sr(a,t,s)}),r}const l=[];for(let r=0;r<n.length;r++)l.push(Rn(n[r],t,s,o));return l}function sr(n,t,s,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,c=di[s];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,a,c)===!1)return}r=r.parent}const p=t.appContext.config.errorHandler;if(p){mt(p,null,10,[n,a,c]);return}}ym(n,s,l,o)}function ym(n,t,s,o=!0){{const l=di[t];if(s&&Al(s),H(`Unhandled error${l?` during execution of ${l}`:""}`),s&&_l(),o)throw n;console.error(n)}}let ko=!1,ta=!1;const cn=[];let et=0;const Os=[];let Xn=null,Tt=0;const Zu=Promise.resolve();let yi=null;const fm=100;function ln(n){const t=yi||Zu;return n?t.then(this?n.bind(this):n):t}function hm(n){let t=et+1,s=cn.length;for(;t<s;){const o=t+s>>>1;Eo(cn[o])<n?t=o+1:s=o}return t}function or(n){(!cn.length||!cn.includes(n,ko&&n.allowRecurse?et+1:et))&&(n.id==null?cn.push(n):cn.splice(hm(n.id),0,n),Ju())}function Ju(){!ko&&!ta&&(ta=!0,yi=Zu.then(ed))}function mm(n){const t=cn.indexOf(n);t>et&&cn.splice(t,1)}function Qu(n){ue(n)?Os.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?Tt+1:Tt))&&Os.push(n),Ju()}function ic(n,t=ko?et+1:0){for(n=n||new Map;t<cn.length;t++){const s=cn[t];if(s&&s.pre){if(fi(n,s))continue;cn.splice(t,1),t--,s()}}}function Xu(n){if(Os.length){const t=[...new Set(Os)];if(Os.length=0,Xn){Xn.push(...t);return}for(Xn=t,n=n||new Map,Xn.sort((s,o)=>Eo(s)-Eo(o)),Tt=0;Tt<Xn.length;Tt++)fi(n,Xn[Tt])||Xn[Tt]();Xn=null,Tt=0}}const Eo=n=>n.id==null?1/0:n.id,gm=(n,t)=>{const s=Eo(n)-Eo(t);if(s===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return s};function ed(n){ta=!1,ko=!0,n=n||new Map,cn.sort(gm);const t=s=>fi(n,s);try{for(et=0;et<cn.length;et++){const s=cn[et];if(s&&s.active!==!1){if(t(s))continue;mt(s,null,14)}}}finally{et=0,cn.length=0,Xu(n),ko=!1,yi=null,(cn.length||Os.length)&&ed(n)}}function fi(n,t){if(!n.has(t))n.set(t,1);else{const s=n.get(t);if(s>fm){const o=t.ownerInstance,l=o&&$o(o.type);return H(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(t,s+1)}}let Mt=!1;const Ss=new Set;Fu().__VUE_HMR_RUNTIME__={createRecord:Br(nd),rerender:Br(vm),reload:Br(Bm)};const _s=new Map;function Am(n){const t=n.type.__hmrId;let s=_s.get(t);s||(nd(t,n.type),s=_s.get(t)),s.instances.add(n)}function _m(n){_s.get(n.type.__hmrId).instances.delete(n)}function nd(n,t){return _s.has(n)?!1:(_s.set(n,{initialDef:uo(t),instances:new Set}),!0)}function uo(n){return Pd(n)?n.__vccOpts:n}function vm(n,t){const s=_s.get(n);s&&(s.initialDef.render=t,[...s.instances].forEach(o=>{t&&(o.render=t,uo(o.type).render=t),o.renderCache=[],Mt=!0,o.update(),Mt=!1}))}function Bm(n,t){const s=_s.get(n);if(!s)return;t=uo(t),cc(s.initialDef,t);const o=[...s.instances];for(const l of o){const r=uo(l.type);Ss.has(r)||(r!==s.initialDef&&cc(r,t),Ss.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(Ss.add(r),l.ceReload(t.styles),Ss.delete(r)):l.parent?or(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Qu(()=>{for(const l of o)Ss.delete(uo(l.type))})}function cc(n,t){ze(n,t);for(const s in n)s!=="__file"&&!(s in t)&&delete n[s]}function Br(n){return(t,s)=>{try{return n(t,s)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let nt,ao=[],sa=!1;function Go(n,...t){nt?nt.emit(n,...t):sa||ao.push({event:n,args:t})}function td(n,t){var s,o;nt=n,nt?(nt.enabled=!0,ao.forEach(({event:l,args:r})=>nt.emit(l,...r)),ao=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{td(r,t)}),setTimeout(()=>{nt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,sa=!0,ao=[])},3e3)):(sa=!0,ao=[])}function Cm(n,t){Go("app:init",n,t,{Fragment:Pe,Text:Yo,Comment:sn,Static:vl})}function bm(n){Go("app:unmount",n)}const oa=hi("component:added"),sd=hi("component:updated"),Dm=hi("component:removed"),wm=n=>{nt&&typeof nt.cleanupBuffer=="function"&&!nt.cleanupBuffer(n)&&Dm(n)};function hi(n){return t=>{Go(n,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const xm=od("perf:start"),km=od("perf:end");function od(n){return(t,s,o)=>{Go(n,t.appContext.app,t.uid,t,s,o)}}function Em(n,t,s){Go("component:emit",n.appContext.app,n,t,s)}function Tm(n,t,...s){if(n.isUnmounted)return;const o=n.vnode.props||Ve;{const{emitsOptions:d,propsOptions:[y]}=n;if(d)if(!(t in d))(!y||!(Xt(t)in y))&&H(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xt(t)}" prop.`);else{const f=d[t];he(f)&&(f(...s)||H(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=s;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:y,trim:f}=o[d]||Ve;f&&(l=s.map(h=>We(h)?h.trim():h)),y&&(l=s.map(Ch))}Em(n,t,l);{const d=t.toLowerCase();d!==t&&o[Xt(d)]&&H(`Event "${d}" is emitted in component ${dr(n,n.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${At(t)}" instead of "${t}".`)}let c,p=o[c=Xt(t)]||o[c=Xt(rt(t))];!p&&r&&(p=o[c=Xt(At(t))]),p&&Rn(p,n,6,l);const u=o[c+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Rn(u,n,6,l)}}function ld(n,t,s=!1){const o=t.emitsCache,l=o.get(n);if(l!==void 0)return l;const r=n.emits;let a={},c=!1;if(!he(n)){const p=u=>{const d=ld(u,t,!0);d&&(c=!0,ze(a,d))};!s&&t.mixins.length&&t.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}return!r&&!c?(Re(n)&&o.set(n,null),null):(ue(r)?r.forEach(p=>a[p]=null):ze(a,r),Re(n)&&o.set(n,a),a)}function lr(n,t){return!n||!qo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ee(n,t[0].toLowerCase()+t.slice(1))||Ee(n,At(t))||Ee(n,t))}let en=null,rr=null;function Pl(n){const t=en;return en=n,rr=n&&n.type.__scopeId||null,t}function NS(n){rr=n}function HS(){rr=null}function E(n,t=en,s){if(!t||n._n)return n;const o=(...l)=>{o._d&&bc(-1);const r=Pl(t);let a;try{a=n(...l)}finally{Pl(r),o._d&&bc(1)}return sd(t),a};return o._n=!0,o._c=!0,o._d=!0,o}let la=!1;function Ol(){la=!0}function Cr(n){const{type:t,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:c,attrs:p,emit:u,render:d,renderCache:y,data:f,setupState:h,ctx:m,inheritAttrs:_}=n;let B,C;const b=Pl(n);la=!1;try{if(s.shapeFlag&4){const $=l||o;B=Un(d.call($,$,y,r,h,f,m)),C=p}else{const $=t;p===r&&Ol(),B=Un($.length>1?$(r,{get attrs(){return Ol(),p},slots:c,emit:u}):$(r,null)),C=t.props?p:Sm(p)}}catch($){fo.length=0,sr($,n,1),B=F(sn)}let v=B,w;if(B.patchFlag>0&&B.patchFlag&2048&&([v,w]=Fm(B)),C&&_!==!1){const $=Object.keys(C),{shapeFlag:S}=v;if($.length){if(S&7)a&&$.some(El)&&(C=$m(C,a)),v=Kn(v,C);else if(!la&&v.type!==sn){const N=Object.keys(p),I=[],G=[];for(let se=0,de=N.length;se<de;se++){const K=N[se];qo(K)?El(K)||I.push(K[2].toLowerCase()+K.slice(3)):G.push(K)}G.length&&H(`Extraneous non-props attributes (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),I.length&&H(`Extraneous non-emits event listeners (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(pc(v)||H("Runtime directive used on component with non-element root node. The directives will not function as intended."),v=Kn(v),v.dirs=v.dirs?v.dirs.concat(s.dirs):s.dirs),s.transition&&(pc(v)||H("Component inside <Transition> renders non-element root node that cannot be animated."),v.transition=s.transition),w?w(v):B=v,Pl(b),B}const Fm=n=>{const t=n.children,s=n.dynamicChildren,o=rd(t);if(!o)return[n,void 0];const l=t.indexOf(o),r=s?s.indexOf(o):-1,a=c=>{t[l]=c,s&&(r>-1?s[r]=c:c.patchFlag>0&&(n.dynamicChildren=[...s,c]))};return[Un(o),a]};function rd(n){let t;for(let s=0;s<n.length;s++){const o=n[s];if(it(o)){if(o.type!==sn||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Sm=n=>{let t;for(const s in n)(s==="class"||s==="style"||qo(s))&&((t||(t={}))[s]=n[s]);return t},$m=(n,t)=>{const s={};for(const o in n)(!El(o)||!(o.slice(9)in t))&&(s[o]=n[o]);return s},pc=n=>n.shapeFlag&7||n.type===sn;function Im(n,t,s){const{props:o,children:l,component:r}=n,{props:a,children:c,patchFlag:p}=t,u=r.emitsOptions;if((l||c)&&Mt||t.dirs||t.transition)return!0;if(s&&p>=0){if(p&1024)return!0;if(p&16)return o?uc(o,a,u):!!a;if(p&8){const d=t.dynamicProps;for(let y=0;y<d.length;y++){const f=d[y];if(a[f]!==o[f]&&!lr(u,f))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===a?!1:o?a?uc(o,a,u):!0:!!a;return!1}function uc(n,t,s){const o=Object.keys(t);if(o.length!==Object.keys(n).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==n[r]&&!lr(s,r))return!0}return!1}function Pm({vnode:n,parent:t},s){for(;t&&t.subTree===n;)(n=t.vnode).el=s,t=t.parent}const ad=n=>n.__isSuspense;function Om(n,t){t&&t.pendingBranch?ue(n)?t.effects.push(...n):t.effects.push(n):Qu(n)}function En(n,t){if(!Ye)H("provide() can only be used inside setup().");else{let s=Ye.provides;const o=Ye.parent&&Ye.parent.provides;o===s&&(s=Ye.provides=Object.create(o)),s[n]=t}}function M(n,t,s=!1){const o=Ye||en;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&n in l)return l[n];if(arguments.length>1)return s&&he(t)?t.call(o.proxy):t;H(`injection "${String(n)}" not found.`)}else H("inject() can only be used inside setup() or functional components.")}function Cs(n,t){return mi(n,null,t)}const ol={};function Be(n,t,s){return he(t)||H("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),mi(n,t,s)}function mi(n,t,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Ve){t||(s!==void 0&&H('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&H('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=w=>{H("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=Jl()===(Ye==null?void 0:Ye.scope)?Ye:null;let u,d=!1,y=!1;if(Oe(n)?(u=()=>n.value,d=$l(n)):ys(n)?(u=()=>n,o=!0):ue(n)?(y=!0,d=n.some(w=>ys(w)||$l(w)),u=()=>n.map(w=>{if(Oe(w))return w.value;if(ys(w))return is(w);if(he(w))return mt(w,p,2);c(w)})):he(n)?t?u=()=>mt(n,p,2):u=()=>{if(!(p&&p.isUnmounted))return f&&f(),Rn(n,p,3,[h])}:(u=Bn,c(n)),t&&o){const w=u;u=()=>is(w())}let f,h=w=>{f=b.onStop=()=>{mt(w,p,4)}},m;if(So)if(h=Bn,t?s&&Rn(t,p,3,[u(),y?[]:void 0,h]):u(),l==="sync"){const w=H8();m=w.__watcherHandles||(w.__watcherHandles=[])}else return Bn;let _=y?new Array(n.length).fill(ol):ol;const B=()=>{if(b.active)if(t){const w=b.run();(o||d||(y?w.some(($,S)=>wo($,_[S])):wo(w,_)))&&(f&&f(),Rn(t,p,3,[w,_===ol?void 0:y&&_[0]===ol?[]:_,h]),_=w)}else b.run()};B.allowRecurse=!!t;let C;l==="sync"?C=B:l==="post"?C=()=>on(B,p&&p.suspense):(B.pre=!0,p&&(B.id=p.uid),C=()=>or(B));const b=new ri(u,C);b.onTrack=r,b.onTrigger=a,t?s?B():_=b.run():l==="post"?on(b.run.bind(b),p&&p.suspense):b.run();const v=()=>{b.stop(),p&&p.scope&&Xa(p.scope.effects,b)};return m&&m.push(v),v}function Mm(n,t,s){const o=this.proxy,l=We(n)?n.includes(".")?id(o,n):()=>o[n]:n.bind(o,o);let r;he(t)?r=t:(r=t.handler,s=t);const a=Ye;Hs(this);const c=mi(l,r.bind(o),s);return a?Hs(a):ms(),c}function id(n,t){const s=t.split(".");return()=>{let o=n;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function is(n,t){if(!Re(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Oe(n))is(n.value,t);else if(ue(n))for(let s=0;s<n.length;s++)is(n[s],t);else if(ku(n)||us(n))n.forEach(s=>{is(s,t)});else if(Tu(n))for(const s in n)is(n[s],t);return n}function cd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bt(()=>{n.isMounted=!0}),zo(()=>{n.isUnmounting=!0}),n}const In=[Function,Array],Lm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:In,onEnter:In,onAfterEnter:In,onEnterCancelled:In,onBeforeLeave:In,onLeave:In,onAfterLeave:In,onLeaveCancelled:In,onBeforeAppear:In,onAppear:In,onAfterAppear:In,onAppearCancelled:In},setup(n,{slots:t}){const s=gn(),o=cd();let l;return()=>{const r=t.default&&gi(t.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let _=!1;for(const B of r)if(B.type!==sn){if(_){H("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=B,_=!0}}const c=ge(n),{mode:p}=c;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&H(`invalid <transition> mode: ${p}`),o.isLeaving)return br(a);const u=dc(a);if(!u)return br(a);const d=To(u,c,o,s);js(u,d);const y=s.subTree,f=y&&dc(y);let h=!1;const{getTransitionKey:m}=u.type;if(m){const _=m();l===void 0?l=_:_!==l&&(l=_,h=!0)}if(f&&f.type!==sn&&(!It(u,f)||h)){const _=To(f,c,o,s);if(js(f,_),p==="out-in")return o.isLeaving=!0,_.afterLeave=()=>{o.isLeaving=!1,s.update.active!==!1&&s.update()},br(a);p==="in-out"&&u.type!==sn&&(_.delayLeave=(B,C,b)=>{const v=pd(o,f);v[String(f.key)]=f,B._leaveCb=()=>{C(),B._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=b})}return a}}},Rm=Lm;function pd(n,t){const{leavingVNodes:s}=n;let o=s.get(t.type);return o||(o=Object.create(null),s.set(t.type,o)),o}function To(n,t,s,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:y,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:_,onAppear:B,onAfterAppear:C,onAppearCancelled:b}=t,v=String(n.key),w=pd(s,n),$=(I,G)=>{I&&Rn(I,o,9,G)},S=(I,G)=>{const se=G[1];$(I,G),ue(I)?I.every(de=>de.length<=1)&&se():I.length<=1&&se()},N={mode:r,persisted:a,beforeEnter(I){let G=c;if(!s.isMounted)if(l)G=_||c;else return;I._leaveCb&&I._leaveCb(!0);const se=w[v];se&&It(n,se)&&se.el._leaveCb&&se.el._leaveCb(),$(G,[I])},enter(I){let G=p,se=u,de=d;if(!s.isMounted)if(l)G=B||p,se=C||u,de=b||d;else return;let K=!1;const De=I._enterCb=ve=>{K||(K=!0,ve?$(de,[I]):$(se,[I]),N.delayedLeave&&N.delayedLeave(),I._enterCb=void 0)};G?S(G,[I,De]):De()},leave(I,G){const se=String(n.key);if(I._enterCb&&I._enterCb(!0),s.isUnmounting)return G();$(y,[I]);let de=!1;const K=I._leaveCb=De=>{de||(de=!0,G(),De?$(m,[I]):$(h,[I]),I._leaveCb=void 0,w[se]===n&&delete w[se])};w[se]=n,f?S(f,[I,K]):K()},clone(I){return To(I,t,s,o)}};return N}function br(n){if(Uo(n))return n=Kn(n),n.children=null,n}function dc(n){return Uo(n)?n.children?n.children[0]:void 0:n}function js(n,t){n.shapeFlag&6&&n.component?js(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function gi(n,t=!1,s){let o=[],l=0;for(let r=0;r<n.length;r++){let a=n[r];const c=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===Pe?(a.patchFlag&128&&l++,o=o.concat(gi(a.children,t,c))):(t||a.type!==sn)&&o.push(c!=null?Kn(a,{key:c}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Se(n){return he(n)?{setup:n,name:n.name}:n}const Ms=n=>!!n.type.__asyncLoader,Uo=n=>n.type.__isKeepAlive,jm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const s=gn(),o=s.ctx;if(!o.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const l=new Map,r=new Set;let a=null;s.__v_cache=l;const c=s.suspense,{renderer:{p,m:u,um:d,o:{createElement:y}}}=o,f=y("div");o.activate=(b,v,w,$,S)=>{const N=b.component;u(b,v,w,0,c),p(N.vnode,b,v,w,N,c,$,b.slotScopeIds,S),on(()=>{N.isDeactivated=!1,N.a&&ts(N.a);const I=b.props&&b.props.onVnodeMounted;I&&Pn(I,N.parent,b)},c),oa(N)},o.deactivate=b=>{const v=b.component;u(b,f,null,1,c),on(()=>{v.da&&ts(v.da);const w=b.props&&b.props.onVnodeUnmounted;w&&Pn(w,v.parent,b),v.isDeactivated=!0},c),oa(v)};function h(b){Dr(b),d(b,s,c,!0)}function m(b){l.forEach((v,w)=>{const $=$o(v.type);$&&(!b||!b($))&&_(w)})}function _(b){const v=l.get(b);!a||!It(v,a)?h(v):a&&Dr(a),l.delete(b),r.delete(b)}Be(()=>[n.include,n.exclude],([b,v])=>{b&&m(w=>io(b,w)),v&&m(w=>!io(v,w))},{flush:"post",deep:!0});let B=null;const C=()=>{B!=null&&l.set(B,wr(s.subTree))};return bt(C),ir(C),zo(()=>{l.forEach(b=>{const{subTree:v,suspense:w}=s,$=wr(v);if(b.type===$.type&&b.key===$.key){Dr($);const S=$.component.da;S&&on(S,w);return}h(b)})}),()=>{if(B=null,!t.default)return null;const b=t.default(),v=b[0];if(b.length>1)return H("KeepAlive should contain exactly one component child."),a=null,b;if(!it(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return a=null,v;let w=wr(v);const $=w.type,S=$o(Ms(w)?w.type.__asyncResolved||{}:$),{include:N,exclude:I,max:G}=n;if(N&&(!S||!io(N,S))||I&&S&&io(I,S))return a=w,v;const se=w.key==null?$:w.key,de=l.get(se);return w.el&&(w=Kn(w),v.shapeFlag&128&&(v.ssContent=w)),B=se,de?(w.el=de.el,w.component=de.component,w.transition&&js(w,w.transition),w.shapeFlag|=512,r.delete(se),r.add(se)):(r.add(se),G&&r.size>parseInt(G,10)&&_(r.values().next().value)),w.shapeFlag|=256,a=w,ad(v.type)?v:w}}},ud=jm;function io(n,t){return ue(n)?n.some(s=>io(s,t)):We(n)?n.split(",").includes(t):Ah(n)?n.test(t):!1}function dd(n,t){fd(n,"a",t)}function yd(n,t){fd(n,"da",t)}function fd(n,t,s=Ye){const o=n.__wdc||(n.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return n()});if(ar(t,o,s),s){let l=s.parent;for(;l&&l.parent;)Uo(l.parent.vnode)&&Nm(o,t,s,l),l=l.parent}}function Nm(n,t,s,o){const l=ar(t,n,o,!0);cr(()=>{Xa(o[t],l)},s)}function Dr(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function wr(n){return n.shapeFlag&128?n.ssContent:n}function ar(n,t,s=Ye,o=!1){if(s){const l=s[n]||(s[n]=[]),r=t.__weh||(t.__weh=(...a)=>{if(s.isUnmounted)return;vs(),Hs(s);const c=Rn(t,s,n,a);return ms(),Bs(),c});return o?l.unshift(r):l.push(r),r}else{const l=Xt(di[n].replace(/ hook$/,""));H(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Ct=n=>(t,s=Ye)=>(!So||n==="sp")&&ar(n,(...o)=>t(...o),s),Hm=Ct("bm"),bt=Ct("m"),Vm=Ct("bu"),ir=Ct("u"),zo=Ct("bum"),cr=Ct("um"),qm=Ct("sp"),Wm=Ct("rtg"),Gm=Ct("rtc");function Um(n,t=Ye){ar("ec",n,t)}function hd(n){_h(n)&&H("Do not use built-in directive ids as custom directive id: "+n)}function Ai(n,t){const s=en;if(s===null)return H("withDirectives can only be used inside render functions."),n;const o=ur(s)||s.proxy,l=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[a,c,p,u=Ve]=t[r];a&&(he(a)&&(a={mounted:a,updated:a}),a.deep&&is(c),l.push({dir:a,instance:o,value:c,oldValue:void 0,arg:p,modifiers:u}))}return n}function Yt(n,t,s,o){const l=n.dirs,r=t&&t.dirs;for(let a=0;a<l.length;a++){const c=l[a];r&&(c.oldValue=r[a].value);let p=c.dir[o];p&&(vs(),Rn(p,s,8,[n.el,c,n,t]),Bs())}}const ra="components",zm="directives";function Ns(n,t){return md(ra,n,!0,t)||n}const Ym=Symbol();function yc(n){return md(zm,n)}function md(n,t,s=!0,o=!1){const l=en||Ye;if(l){const r=l.type;if(n===ra){const c=$o(r,!1);if(c&&(c===t||c===rt(t)||c===As(rt(t))))return r}const a=fc(l[n]||r[n],t)||fc(l.appContext[n],t);if(!a&&o)return r;if(s&&!a){const c=n===ra?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";H(`Failed to resolve ${n.slice(0,-1)}: ${t}${c}`)}return a}else H(`resolve${As(n.slice(0,-1))} can only be used in render() or setup().`)}function fc(n,t){return n&&(n[t]||n[rt(t)]||n[As(rt(t))])}function bs(n,t,s,o){let l;const r=s&&s[o];if(ue(n)||We(n)){l=new Array(n.length);for(let a=0,c=n.length;a<c;a++)l[a]=t(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){Number.isInteger(n)||H(`The v-for range expect an integer value but got ${n}.`),l=new Array(n);for(let a=0;a<n;a++)l[a]=t(a+1,a,void 0,r&&r[a])}else if(Re(n))if(n[Symbol.iterator])l=Array.from(n,(a,c)=>t(a,c,void 0,r&&r[c]));else{const a=Object.keys(n);l=new Array(a.length);for(let c=0,p=a.length;c<p;c++){const u=a[c];l[c]=t(n[u],u,c,r&&r[c])}}else l=[];return s&&(s[o]=l),l}function Sn(n,t,s={},o,l){if(en.isCE||en.parent&&Ms(en.parent)&&en.parent.isCE)return t!=="default"&&(s.name=t),F("slot",s,o&&o());let r=n[t];r&&r.length>1&&(H("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),A();const a=r&&gd(r(s)),c=R(Pe,{key:s.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&n._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function gd(n){return n.some(t=>it(t)?!(t.type===sn||t.type===Pe&&!gd(t.children)):!0)?n:null}const aa=n=>n?Sd(n)?ur(n)||n.proxy:aa(n.parent):null,hs=ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>$s(n.props),$attrs:n=>$s(n.attrs),$slots:n=>$s(n.slots),$refs:n=>$s(n.refs),$parent:n=>aa(n.parent),$root:n=>aa(n.root),$emit:n=>n.emit,$options:n=>vi(n),$forceUpdate:n=>n.f||(n.f=()=>or(n.update)),$nextTick:n=>n.n||(n.n=ln.bind(n.proxy)),$watch:n=>Mm.bind(n)}),_i=n=>n==="_"||n==="$",xr=(n,t)=>n!==Ve&&!n.__isScriptSetup&&Ee(n,t),Ad={get({_:n},t){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:c,appContext:p}=n;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return l[t];case 4:return s[t];case 3:return r[t]}else{if(xr(o,t))return a[t]=1,o[t];if(l!==Ve&&Ee(l,t))return a[t]=2,l[t];if((u=n.propsOptions[0])&&Ee(u,t))return a[t]=3,r[t];if(s!==Ve&&Ee(s,t))return a[t]=4,s[t];ia&&(a[t]=0)}}const d=hs[t];let y,f;if(d)return t==="$attrs"&&(bn(n,"get",t),Ol()),d(n);if((y=c.__cssModules)&&(y=y[t]))return y;if(s!==Ve&&Ee(s,t))return a[t]=4,s[t];if(f=p.config.globalProperties,Ee(f,t))return f[t];en&&(!We(t)||t.indexOf("__v")!==0)&&(l!==Ve&&_i(t[0])&&Ee(l,t)?H(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===en&&H(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:n},t,s){const{data:o,setupState:l,ctx:r}=n;return xr(l,t)?(l[t]=s,!0):l.__isScriptSetup&&Ee(l,t)?(H(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Ve&&Ee(o,t)?(o[t]=s,!0):Ee(n.props,t)?(H(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in n?(H(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in n.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:s}):r[t]=s,!0)},has({_:{data:n,setupState:t,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let c;return!!s[a]||n!==Ve&&Ee(n,a)||xr(t,a)||(c=r[0])&&Ee(c,a)||Ee(o,a)||Ee(hs,a)||Ee(l.config.globalProperties,a)},defineProperty(n,t,s){return s.get!=null?n._.accessCache[t]=0:Ee(s,"value")&&this.set(n,t,s.value,null),Reflect.defineProperty(n,t,s)}};Ad.ownKeys=n=>(H("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function Km(n){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(hs).forEach(s=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,get:()=>hs[s](n),set:Bn})}),t}function Zm(n){const{ctx:t,propsOptions:[s]}=n;s&&Object.keys(s).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:Bn})})}function Jm(n){const{ctx:t,setupState:s}=n;Object.keys(ge(s)).forEach(o=>{if(!s.__isScriptSetup){if(_i(o[0])){H(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s[o],set:Bn})}})}function Qm(){const n=Object.create(null);return(t,s)=>{n[s]?H(`${t} property "${s}" is already defined in ${n[s]}.`):n[s]=t}}let ia=!0;function Xm(n){const t=vi(n),s=n.proxy,o=n.ctx;ia=!1,t.beforeCreate&&hc(t.beforeCreate,n,"bc");const{data:l,computed:r,methods:a,watch:c,provide:p,inject:u,created:d,beforeMount:y,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:B,beforeDestroy:C,beforeUnmount:b,destroyed:v,unmounted:w,render:$,renderTracked:S,renderTriggered:N,errorCaptured:I,serverPrefetch:G,expose:se,inheritAttrs:de,components:K,directives:De,filters:ve}=t,we=Qm();{const[X]=n.propsOptions;if(X)for(const pe in X)we("Props",pe)}if(u&&e8(u,o,we,n.appContext.config.unwrapInjectedRef),a)for(const X in a){const pe=a[X];he(pe)?(Object.defineProperty(o,X,{value:pe.bind(s),configurable:!0,enumerable:!0,writable:!0}),we("Methods",X)):H(`Method "${X}" has type "${typeof pe}" in the component definition. Did you reference the function correctly?`)}if(l){he(l)||H("The data option must be a function. Plain object usage is no longer supported.");const X=l.call(s,s);if(ni(X)&&H("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Re(X))H("data() should return an object.");else{n.data=Ue(X);for(const pe in X)we("Data",pe),_i(pe[0])||Object.defineProperty(o,pe,{configurable:!0,enumerable:!0,get:()=>X[pe],set:Bn})}}if(ia=!0,r)for(const X in r){const pe=r[X],xe=he(pe)?pe.bind(s,s):he(pe.get)?pe.get.bind(s,s):Bn;xe===Bn&&H(`Computed property "${X}" has no getter.`);const Ne=!he(pe)&&he(pe.set)?pe.set.bind(s):()=>{H(`Write operation failed: computed property "${X}" is readonly.`)},Dn=P({get:xe,set:Ne});Object.defineProperty(o,X,{enumerable:!0,configurable:!0,get:()=>Dn.value,set:an=>Dn.value=an}),we("Computed",X)}if(c)for(const X in c)_d(c[X],o,s,X);if(p){const X=he(p)?p.call(s):p;Reflect.ownKeys(X).forEach(pe=>{En(pe,X[pe])})}d&&hc(d,n,"c");function Me(X,pe){ue(pe)?pe.forEach(xe=>X(xe.bind(s))):pe&&X(pe.bind(s))}if(Me(Hm,y),Me(bt,f),Me(Vm,h),Me(ir,m),Me(dd,_),Me(yd,B),Me(Um,I),Me(Gm,S),Me(Wm,N),Me(zo,b),Me(cr,w),Me(qm,G),ue(se))if(se.length){const X=n.exposed||(n.exposed={});se.forEach(pe=>{Object.defineProperty(X,pe,{get:()=>s[pe],set:xe=>s[pe]=xe})})}else n.exposed||(n.exposed={});$&&n.render===Bn&&(n.render=$),de!=null&&(n.inheritAttrs=de),K&&(n.components=K),De&&(n.directives=De)}function e8(n,t,s=Bn,o=!1){ue(n)&&(n=ca(n));for(const l in n){const r=n[l];let a;Re(r)?"default"in r?a=M(r.from||l,r.default,!0):a=M(r.from||l):a=M(r),Oe(a)?o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:c=>a.value=c}):(H(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[l]=a):t[l]=a,s("Inject",l)}}function hc(n,t,s){Rn(ue(n)?n.map(o=>o.bind(t.proxy)):n.bind(t.proxy),t,s)}function _d(n,t,s,o){const l=o.includes(".")?id(s,o):()=>s[o];if(We(n)){const r=t[n];he(r)?Be(l,r):H(`Invalid watch handler specified by key "${n}"`,r)}else if(he(n))Be(l,n.bind(s));else if(Re(n))if(ue(n))n.forEach(r=>_d(r,t,s,o));else{const r=he(n.handler)?n.handler.bind(s):t[n.handler];he(r)?Be(l,r,n):H(`Invalid watch handler specified by key "${n.handler}"`,r)}else H(`Invalid watch option: "${o}"`,n)}function vi(n){const t=n.type,{mixins:s,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,c=r.get(t);let p;return c?p=c:!l.length&&!s&&!o?p=t:(p={},l.length&&l.forEach(u=>Ml(p,u,a,!0)),Ml(p,t,a)),Re(t)&&r.set(t,p),p}function Ml(n,t,s,o=!1){const{mixins:l,extends:r}=t;r&&Ml(n,r,s,!0),l&&l.forEach(a=>Ml(n,a,s,!0));for(const a in t)if(o&&a==="expose")H('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=n8[a]||s&&s[a];n[a]=c?c(n[a],t[a]):t[a]}return n}const n8={data:mc,props:es,emits:es,methods:es,computed:es,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:es,directives:es,watch:s8,provide:mc,inject:t8};function mc(n,t){return t?n?function(){return ze(he(n)?n.call(this,this):n,he(t)?t.call(this,this):t)}:t:n}function t8(n,t){return es(ca(n),ca(t))}function ca(n){if(ue(n)){const t={};for(let s=0;s<n.length;s++)t[n[s]]=n[s];return t}return n}function dn(n,t){return n?[...new Set([].concat(n,t))]:t}function es(n,t){return n?ze(ze(Object.create(null),n),t):t}function s8(n,t){if(!n)return t;if(!t)return n;const s=ze(Object.create(null),n);for(const o in t)s[o]=dn(n[o],t[o]);return s}function o8(n,t,s,o=!1){const l={},r={};Tl(r,pr,1),n.propsDefaults=Object.create(null),vd(n,t,l,r);for(const a in n.propsOptions[0])a in l||(l[a]=void 0);Cd(t||{},l,n),s?n.props=o?l:em(l):n.type.props?n.props=l:n.props=r,n.attrs=r}function l8(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function r8(n,t,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=n,c=ge(l),[p]=n.propsOptions;let u=!1;if(!l8(n)&&(o||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let y=0;y<d.length;y++){let f=d[y];if(lr(n.emitsOptions,f))continue;const h=t[f];if(p)if(Ee(r,f))h!==r[f]&&(r[f]=h,u=!0);else{const m=rt(f);l[m]=pa(p,c,m,h,n,!1)}else h!==r[f]&&(r[f]=h,u=!0)}}}else{vd(n,t,l,r)&&(u=!0);let d;for(const y in c)(!t||!Ee(t,y)&&((d=At(y))===y||!Ee(t,d)))&&(p?s&&(s[y]!==void 0||s[d]!==void 0)&&(l[y]=pa(p,c,y,void 0,n,!0)):delete l[y]);if(r!==c)for(const y in r)(!t||!Ee(t,y))&&(delete r[y],u=!0)}u&&_t(n,"set","$attrs"),Cd(t||{},l,n)}function vd(n,t,s,o){const[l,r]=n.propsOptions;let a=!1,c;if(t)for(let p in t){if(gl(p))continue;const u=t[p];let d;l&&Ee(l,d=rt(p))?!r||!r.includes(d)?s[d]=u:(c||(c={}))[d]=u:lr(n.emitsOptions,p)||(!(p in o)||u!==o[p])&&(o[p]=u,a=!0)}if(r){const p=ge(s),u=c||Ve;for(let d=0;d<r.length;d++){const y=r[d];s[y]=pa(l,p,y,u[y],n,!Ee(u,y))}}return a}function pa(n,t,s,o,l,r){const a=n[s];if(a!=null){const c=Ee(a,"default");if(c&&o===void 0){const p=a.default;if(a.type!==Function&&he(p)){const{propsDefaults:u}=l;s in u?o=u[s]:(Hs(l),o=u[s]=p.call(null,t),ms())}else o=p}a[0]&&(r&&!c?o=!1:a[1]&&(o===""||o===At(s))&&(o=!0))}return o}function Bd(n,t,s=!1){const o=t.propsCache,l=o.get(n);if(l)return l;const r=n.props,a={},c=[];let p=!1;if(!he(n)){const d=y=>{p=!0;const[f,h]=Bd(y,t,!0);ze(a,f),h&&c.push(...h)};!s&&t.mixins.length&&t.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!p)return Re(n)&&o.set(n,Ps),Ps;if(ue(r))for(let d=0;d<r.length;d++){We(r[d])||H("props must be strings when using array syntax.",r[d]);const y=rt(r[d]);gc(y)&&(a[y]=Ve)}else if(r){Re(r)||H("invalid props options",r);for(const d in r){const y=rt(d);if(gc(y)){const f=r[d],h=a[y]=ue(f)||he(f)?{type:f}:Object.assign({},f);if(h){const m=_c(Boolean,h.type),_=_c(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||Ee(h,"default"))&&c.push(y)}}}}const u=[a,c];return Re(n)&&o.set(n,u),u}function gc(n){return n[0]!=="$"?!0:(H(`Invalid prop name: "${n}" is a reserved property.`),!1)}function ua(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function Ac(n,t){return ua(n)===ua(t)}function _c(n,t){return ue(t)?t.findIndex(s=>Ac(s,n)):he(t)&&Ac(t,n)?0:-1}function Cd(n,t,s){const o=ge(t),l=s.propsOptions[0];for(const r in l){let a=l[r];a!=null&&a8(r,o[r],a,!Ee(n,r)&&!Ee(n,At(r)))}}function a8(n,t,s,o){const{type:l,required:r,validator:a}=s;if(r&&o){H('Missing required prop: "'+n+'"');return}if(!(t==null&&!s.required)){if(l!=null&&l!==!0){let c=!1;const p=ue(l)?l:[l],u=[];for(let d=0;d<p.length&&!c;d++){const{valid:y,expectedType:f}=c8(t,p[d]);u.push(f||""),c=y}if(!c){H(p8(n,t,u));return}}a&&!a(t)&&H('Invalid prop: custom validator check failed for prop "'+n+'".')}}const i8=Ut("String,Number,Boolean,Function,Symbol,BigInt");function c8(n,t){let s;const o=ua(t);if(i8(o)){const l=typeof n;s=l===o.toLowerCase(),!s&&l==="object"&&(s=n instanceof t)}else o==="Object"?s=Re(n):o==="Array"?s=ue(n):o==="null"?s=n===null:s=n instanceof t;return{valid:s,expectedType:o}}function p8(n,t,s){let o=`Invalid prop: type check failed for prop "${n}". Expected ${s.map(As).join(" | ")}`;const l=s[0],r=ti(t),a=vc(t,l),c=vc(t,r);return s.length===1&&Bc(l)&&!u8(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,Bc(r)&&(o+=`with value ${c}.`),o}function vc(n,t){return t==="String"?`"${n}"`:t==="Number"?`${Number(n)}`:`${n}`}function Bc(n){return["string","number","boolean"].some(s=>n.toLowerCase()===s)}function u8(...n){return n.some(t=>t.toLowerCase()==="boolean")}const bd=n=>n[0]==="_"||n==="$stable",Bi=n=>ue(n)?n.map(Un):[Un(n)],d8=(n,t,s)=>{if(t._n)return t;const o=E((...l)=>(Ye&&H(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Bi(t(...l))),s);return o._c=!1,o},Dd=(n,t,s)=>{const o=n._ctx;for(const l in n){if(bd(l))continue;const r=n[l];if(he(r))t[l]=d8(l,r,o);else if(r!=null){H(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Bi(r);t[l]=()=>a}}},wd=(n,t)=>{Uo(n.vnode)||H("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=Bi(t);n.slots.default=()=>s},y8=(n,t)=>{if(n.vnode.shapeFlag&32){const s=t._;s?(n.slots=ge(t),Tl(t,"_",s)):Dd(t,n.slots={})}else n.slots={},t&&wd(n,t);Tl(n.slots,pr,1)},f8=(n,t,s)=>{const{vnode:o,slots:l}=n;let r=!0,a=Ve;if(o.shapeFlag&32){const c=t._;c?Mt?ze(l,t):s&&c===1?r=!1:(ze(l,t),!s&&c===1&&delete l._):(r=!t.$stable,Dd(t,l)),a=t}else t&&(wd(n,t),a={default:1});if(r)for(const c in l)!bd(c)&&!(c in a)&&delete l[c]};function xd(){return{app:null,config:{isNativeTag:xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let h8=0;function m8(n,t){return function(o,l=null){he(o)||(o=Object.assign({},o)),l!=null&&!Re(l)&&(H("root props passed to app.mount() must be an object."),l=null);const r=xd(),a=new Set;let c=!1;const p=r.app={_uid:h8++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Rl,get config(){return r.config},set config(u){H("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?H("Plugin has already been applied to target app."):u&&he(u.install)?(a.add(u),u.install(p,...d)):he(u)?(a.add(u),u(p,...d)):H('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return r.mixins.includes(u)?H("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),p},component(u,d){return fa(u,r.config),d?(r.components[u]&&H(`Component "${u}" has already been registered in target app.`),r.components[u]=d,p):r.components[u]},directive(u,d){return hd(u),d?(r.directives[u]&&H(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,p):r.directives[u]},mount(u,d,y){if(c)H("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&H("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=F(o,l);return f.appContext=r,r.reload=()=>{n(Kn(f),u,y)},d&&t?t(f,u):n(f,u,y),c=!0,p._container=u,u.__vue_app__=p,p._instance=f.component,Cm(p,Rl),ur(f.component)||f.component.proxy}},unmount(){c?(n(null,p._container),p._instance=null,bm(p),delete p._container.__vue_app__):H("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&H(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,p}};return p}}function da(n,t,s,o,l=!1){if(ue(n)){n.forEach((f,h)=>da(f,t&&(ue(t)?t[h]:t),s,o,l));return}if(Ms(o)&&!l)return;const r=o.shapeFlag&4?ur(o.component)||o.component.proxy:o.el,a=l?null:r,{i:c,r:p}=n;if(!c){H("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,d=c.refs===Ve?c.refs={}:c.refs,y=c.setupState;if(u!=null&&u!==p&&(We(u)?(d[u]=null,Ee(y,u)&&(y[u]=null)):Oe(u)&&(u.value=null)),he(p))mt(p,c,12,[a,d]);else{const f=We(p),h=Oe(p);if(f||h){const m=()=>{if(n.f){const _=f?Ee(y,p)?y[p]:d[p]:p.value;l?ue(_)&&Xa(_,r):ue(_)?_.includes(r)||_.push(r):f?(d[p]=[r],Ee(y,p)&&(y[p]=d[p])):(p.value=[r],n.k&&(d[n.k]=p.value))}else f?(d[p]=a,Ee(y,p)&&(y[p]=a)):h?(p.value=a,n.k&&(d[n.k]=a)):H("Invalid template ref type:",p,`(${typeof p})`)};a?(m.id=-1,on(m,s)):m()}else H("Invalid template ref type:",p,`(${typeof p})`)}}let Ys,$t;function pt(n,t){n.appContext.config.performance&&Ll()&&$t.mark(`vue-${t}-${n.uid}`),xm(n,t,Ll()?$t.now():Date.now())}function ut(n,t){if(n.appContext.config.performance&&Ll()){const s=`vue-${t}-${n.uid}`,o=s+":end";$t.mark(o),$t.measure(`<${dr(n,n.type)}> ${t}`,s,o),$t.clearMarks(s),$t.clearMarks(o)}km(n,t,Ll()?$t.now():Date.now())}function Ll(){return Ys!==void 0||(typeof window<"u"&&window.performance?(Ys=!0,$t=window.performance):Ys=!1),Ys}function g8(){const n=[];if(n.length){const t=n.length>1;console.warn(`Feature flag${t?"s":""} ${n.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const on=Om;function A8(n){return _8(n)}function _8(n,t){g8();const s=Fu();s.__VUE__=!0,td(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:o,remove:l,patchProp:r,createElement:a,createText:c,createComment:p,setText:u,setElementText:d,parentNode:y,nextSibling:f,setScopeId:h=Bn,insertStaticContent:m}=n,_=(g,D,T,j=null,L=null,z=null,Q=!1,U=null,Y=Mt?!1:!!D.dynamicChildren)=>{if(g===D)return;g&&!It(g,D)&&(j=re(g),An(g,L,z,!0),g=null),D.patchFlag===-2&&(Y=!1,D.dynamicChildren=null);const{type:W,ref:ie,shapeFlag:ae}=D;switch(W){case Yo:B(g,D,T,j);break;case sn:C(g,D,T,j);break;case vl:g==null?b(D,T,j,Q):v(g,D,T,Q);break;case Pe:De(g,D,T,j,L,z,Q,U,Y);break;default:ae&1?S(g,D,T,j,L,z,Q,U,Y):ae&6?ve(g,D,T,j,L,z,Q,U,Y):ae&64||ae&128?W.process(g,D,T,j,L,z,Q,U,Y,Fe):H("Invalid VNode type:",W,`(${typeof W})`)}ie!=null&&L&&da(ie,g&&g.ref,z,D||g,!D)},B=(g,D,T,j)=>{if(g==null)o(D.el=c(D.children),T,j);else{const L=D.el=g.el;D.children!==g.children&&u(L,D.children)}},C=(g,D,T,j)=>{g==null?o(D.el=p(D.children||""),T,j):D.el=g.el},b=(g,D,T,j)=>{[g.el,g.anchor]=m(g.children,D,T,j,g.el,g.anchor)},v=(g,D,T,j)=>{if(D.children!==g.children){const L=f(g.anchor);$(g),[D.el,D.anchor]=m(D.children,T,L,j)}else D.el=g.el,D.anchor=g.anchor},w=({el:g,anchor:D},T,j)=>{let L;for(;g&&g!==D;)L=f(g),o(g,T,j),g=L;o(D,T,j)},$=({el:g,anchor:D})=>{let T;for(;g&&g!==D;)T=f(g),l(g),g=T;l(D)},S=(g,D,T,j,L,z,Q,U,Y)=>{Q=Q||D.type==="svg",g==null?N(D,T,j,L,z,Q,U,Y):se(g,D,L,z,Q,U,Y)},N=(g,D,T,j,L,z,Q,U)=>{let Y,W;const{type:ie,props:ae,shapeFlag:ce,transition:_e,dirs:Te}=g;if(Y=g.el=a(g.type,z,ae&&ae.is,ae),ce&8?d(Y,g.children):ce&16&&G(g.children,Y,null,j,L,z&&ie!=="foreignObject",Q,U),Te&&Yt(g,null,j,"created"),I(Y,g,g.scopeId,Q,j),ae){for(const He in ae)He!=="value"&&!gl(He)&&r(Y,He,null,ae[He],z,g.children,j,L,J);"value"in ae&&r(Y,"value",null,ae.value),(W=ae.onVnodeBeforeMount)&&Pn(W,j,g)}Object.defineProperty(Y,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(Y,"__vueParentComponent",{value:j,enumerable:!1}),Te&&Yt(g,null,j,"beforeMount");const qe=(!L||L&&!L.pendingBranch)&&_e&&!_e.persisted;qe&&_e.beforeEnter(Y),o(Y,D,T),((W=ae&&ae.onVnodeMounted)||qe||Te)&&on(()=>{W&&Pn(W,j,g),qe&&_e.enter(Y),Te&&Yt(g,null,j,"mounted")},L)},I=(g,D,T,j,L)=>{if(T&&h(g,T),j)for(let z=0;z<j.length;z++)h(g,j[z]);if(L){let z=L.subTree;if(z.patchFlag>0&&z.patchFlag&2048&&(z=rd(z.children)||z),D===z){const Q=L.vnode;I(g,Q,Q.scopeId,Q.slotScopeIds,L.parent)}}},G=(g,D,T,j,L,z,Q,U,Y=0)=>{for(let W=Y;W<g.length;W++){const ie=g[W]=U?Ft(g[W]):Un(g[W]);_(null,ie,D,T,j,L,z,Q,U)}},se=(g,D,T,j,L,z,Q)=>{const U=D.el=g.el;let{patchFlag:Y,dynamicChildren:W,dirs:ie}=D;Y|=g.patchFlag&16;const ae=g.props||Ve,ce=D.props||Ve;let _e;T&&Kt(T,!1),(_e=ce.onVnodeBeforeUpdate)&&Pn(_e,T,D,g),ie&&Yt(D,g,T,"beforeUpdate"),T&&Kt(T,!0),Mt&&(Y=0,Q=!1,W=null);const Te=L&&D.type!=="foreignObject";if(W?(de(g.dynamicChildren,W,U,T,j,Te,z),T&&T.type.__hmrId&&yo(g,D)):Q||xe(g,D,U,null,T,j,Te,z,!1),Y>0){if(Y&16)K(U,D,ae,ce,T,j,L);else if(Y&2&&ae.class!==ce.class&&r(U,"class",null,ce.class,L),Y&4&&r(U,"style",ae.style,ce.style,L),Y&8){const qe=D.dynamicProps;for(let He=0;He<qe.length;He++){const Ze=qe[He],Vn=ae[Ze],xs=ce[Ze];(xs!==Vn||Ze==="value")&&r(U,Ze,Vn,xs,L,g.children,T,j,J)}}Y&1&&g.children!==D.children&&d(U,D.children)}else!Q&&W==null&&K(U,D,ae,ce,T,j,L);((_e=ce.onVnodeUpdated)||ie)&&on(()=>{_e&&Pn(_e,T,D,g),ie&&Yt(D,g,T,"updated")},j)},de=(g,D,T,j,L,z,Q)=>{for(let U=0;U<D.length;U++){const Y=g[U],W=D[U],ie=Y.el&&(Y.type===Pe||!It(Y,W)||Y.shapeFlag&70)?y(Y.el):T;_(Y,W,ie,null,j,L,z,Q,!0)}},K=(g,D,T,j,L,z,Q)=>{if(T!==j){if(T!==Ve)for(const U in T)!gl(U)&&!(U in j)&&r(g,U,T[U],null,Q,D.children,L,z,J);for(const U in j){if(gl(U))continue;const Y=j[U],W=T[U];Y!==W&&U!=="value"&&r(g,U,W,Y,Q,D.children,L,z,J)}"value"in j&&r(g,"value",T.value,j.value)}},De=(g,D,T,j,L,z,Q,U,Y)=>{const W=D.el=g?g.el:c(""),ie=D.anchor=g?g.anchor:c("");let{patchFlag:ae,dynamicChildren:ce,slotScopeIds:_e}=D;(Mt||ae&2048)&&(ae=0,Y=!1,ce=null),_e&&(U=U?U.concat(_e):_e),g==null?(o(W,T,j),o(ie,T,j),G(D.children,T,ie,L,z,Q,U,Y)):ae>0&&ae&64&&ce&&g.dynamicChildren?(de(g.dynamicChildren,ce,T,L,z,Q,U),L&&L.type.__hmrId?yo(g,D):(D.key!=null||L&&D===L.subTree)&&yo(g,D,!0)):xe(g,D,T,ie,L,z,Q,U,Y)},ve=(g,D,T,j,L,z,Q,U,Y)=>{D.slotScopeIds=U,g==null?D.shapeFlag&512?L.ctx.activate(D,T,j,Q,Y):we(D,T,j,L,z,Q,Y):Me(g,D,Y)},we=(g,D,T,j,L,z,Q)=>{const U=g.component=F8(g,j,L);if(U.type.__hmrId&&Am(U),Al(g),pt(U,"mount"),Uo(g)&&(U.ctx.renderer=Fe),pt(U,"init"),$8(U),ut(U,"init"),U.asyncDep){if(L&&L.registerDep(U,X),!g.el){const Y=U.subTree=F(sn);C(null,Y,D,T)}return}X(U,g,D,T,L,z,Q),_l(),ut(U,"mount")},Me=(g,D,T)=>{const j=D.component=g.component;if(Im(g,D,T))if(j.asyncDep&&!j.asyncResolved){Al(D),pe(j,D,T),_l();return}else j.next=D,mm(j.update),j.update();else D.el=g.el,j.vnode=D},X=(g,D,T,j,L,z,Q)=>{const U=()=>{if(g.isMounted){let{next:ie,bu:ae,u:ce,parent:_e,vnode:Te}=g,qe=ie,He;Al(ie||g.vnode),Kt(g,!1),ie?(ie.el=Te.el,pe(g,ie,Q)):ie=Te,ae&&ts(ae),(He=ie.props&&ie.props.onVnodeBeforeUpdate)&&Pn(He,_e,ie,Te),Kt(g,!0),pt(g,"render");const Ze=Cr(g);ut(g,"render");const Vn=g.subTree;g.subTree=Ze,pt(g,"patch"),_(Vn,Ze,y(Vn.el),re(Vn),g,L,z),ut(g,"patch"),ie.el=Ze.el,qe===null&&Pm(g,Ze.el),ce&&on(ce,L),(He=ie.props&&ie.props.onVnodeUpdated)&&on(()=>Pn(He,_e,ie,Te),L),sd(g),_l()}else{let ie;const{el:ae,props:ce}=D,{bm:_e,m:Te,parent:qe}=g,He=Ms(D);if(Kt(g,!1),_e&&ts(_e),!He&&(ie=ce&&ce.onVnodeBeforeMount)&&Pn(ie,qe,D),Kt(g,!0),ae&&fe){const Ze=()=>{pt(g,"render"),g.subTree=Cr(g),ut(g,"render"),pt(g,"hydrate"),fe(ae,g.subTree,g,L,null),ut(g,"hydrate")};He?D.type.__asyncLoader().then(()=>!g.isUnmounted&&Ze()):Ze()}else{pt(g,"render");const Ze=g.subTree=Cr(g);ut(g,"render"),pt(g,"patch"),_(null,Ze,T,j,g,L,z),ut(g,"patch"),D.el=Ze.el}if(Te&&on(Te,L),!He&&(ie=ce&&ce.onVnodeMounted)){const Ze=D;on(()=>Pn(ie,qe,Ze),L)}(D.shapeFlag&256||qe&&Ms(qe.vnode)&&qe.vnode.shapeFlag&256)&&g.a&&on(g.a,L),g.isMounted=!0,oa(g),D=T=j=null}},Y=g.effect=new ri(U,()=>or(W),g.scope),W=g.update=()=>Y.run();W.id=g.uid,Kt(g,!0),Y.onTrack=g.rtc?ie=>ts(g.rtc,ie):void 0,Y.onTrigger=g.rtg?ie=>ts(g.rtg,ie):void 0,W.ownerInstance=g,W()},pe=(g,D,T)=>{D.component=g;const j=g.vnode.props;g.vnode=D,g.next=null,r8(g,D.props,j,T),f8(g,D.children,T),vs(),ic(),Bs()},xe=(g,D,T,j,L,z,Q,U,Y=!1)=>{const W=g&&g.children,ie=g?g.shapeFlag:0,ae=D.children,{patchFlag:ce,shapeFlag:_e}=D;if(ce>0){if(ce&128){Dn(W,ae,T,j,L,z,Q,U,Y);return}else if(ce&256){Ne(W,ae,T,j,L,z,Q,U,Y);return}}_e&8?(ie&16&&J(W,L,z),ae!==W&&d(T,ae)):ie&16?_e&16?Dn(W,ae,T,j,L,z,Q,U,Y):J(W,L,z,!0):(ie&8&&d(T,""),_e&16&&G(ae,T,j,L,z,Q,U,Y))},Ne=(g,D,T,j,L,z,Q,U,Y)=>{g=g||Ps,D=D||Ps;const W=g.length,ie=D.length,ae=Math.min(W,ie);let ce;for(ce=0;ce<ae;ce++){const _e=D[ce]=Y?Ft(D[ce]):Un(D[ce]);_(g[ce],_e,T,null,L,z,Q,U,Y)}W>ie?J(g,L,z,!0,!1,ae):G(D,T,j,L,z,Q,U,Y,ae)},Dn=(g,D,T,j,L,z,Q,U,Y)=>{let W=0;const ie=D.length;let ae=g.length-1,ce=ie-1;for(;W<=ae&&W<=ce;){const _e=g[W],Te=D[W]=Y?Ft(D[W]):Un(D[W]);if(It(_e,Te))_(_e,Te,T,null,L,z,Q,U,Y);else break;W++}for(;W<=ae&&W<=ce;){const _e=g[ae],Te=D[ce]=Y?Ft(D[ce]):Un(D[ce]);if(It(_e,Te))_(_e,Te,T,null,L,z,Q,U,Y);else break;ae--,ce--}if(W>ae){if(W<=ce){const _e=ce+1,Te=_e<ie?D[_e].el:j;for(;W<=ce;)_(null,D[W]=Y?Ft(D[W]):Un(D[W]),T,Te,L,z,Q,U,Y),W++}}else if(W>ce)for(;W<=ae;)An(g[W],L,z,!0),W++;else{const _e=W,Te=W,qe=new Map;for(W=Te;W<=ce;W++){const un=D[W]=Y?Ft(D[W]):Un(D[W]);un.key!=null&&(qe.has(un.key)&&H("Duplicate keys found during update:",JSON.stringify(un.key),"Make sure keys are unique."),qe.set(un.key,W))}let He,Ze=0;const Vn=ce-Te+1;let xs=!1,Ji=0;const zs=new Array(Vn);for(W=0;W<Vn;W++)zs[W]=0;for(W=_e;W<=ae;W++){const un=g[W];if(Ze>=Vn){An(un,L,z,!0);continue}let Qn;if(un.key!=null)Qn=qe.get(un.key);else for(He=Te;He<=ce;He++)if(zs[He-Te]===0&&It(un,D[He])){Qn=He;break}Qn===void 0?An(un,L,z,!0):(zs[Qn-Te]=W+1,Qn>=Ji?Ji=Qn:xs=!0,_(un,D[Qn],T,null,L,z,Q,U,Y),Ze++)}const Qi=xs?v8(zs):Ps;for(He=Qi.length-1,W=Vn-1;W>=0;W--){const un=Te+W,Qn=D[un],Xi=un+1<ie?D[un+1].el:j;zs[W]===0?_(null,Qn,T,Xi,L,z,Q,U,Y):xs&&(He<0||W!==Qi[He]?an(Qn,T,Xi,2):He--)}}},an=(g,D,T,j,L=null)=>{const{el:z,type:Q,transition:U,children:Y,shapeFlag:W}=g;if(W&6){an(g.component.subTree,D,T,j);return}if(W&128){g.suspense.move(D,T,j);return}if(W&64){Q.move(g,D,T,Fe);return}if(Q===Pe){o(z,D,T);for(let ae=0;ae<Y.length;ae++)an(Y[ae],D,T,j);o(g.anchor,D,T);return}if(Q===vl){w(g,D,T);return}if(j!==2&&W&1&&U)if(j===0)U.beforeEnter(z),o(z,D,T),on(()=>U.enter(z),L);else{const{leave:ae,delayLeave:ce,afterLeave:_e}=U,Te=()=>o(z,D,T),qe=()=>{ae(z,()=>{Te(),_e&&_e()})};ce?ce(z,Te,qe):qe()}else o(z,D,T)},An=(g,D,T,j=!1,L=!1)=>{const{type:z,props:Q,ref:U,children:Y,dynamicChildren:W,shapeFlag:ie,patchFlag:ae,dirs:ce}=g;if(U!=null&&da(U,null,T,g,!0),ie&256){D.ctx.deactivate(g);return}const _e=ie&1&&ce,Te=!Ms(g);let qe;if(Te&&(qe=Q&&Q.onVnodeBeforeUnmount)&&Pn(qe,D,g),ie&6)oe(g.component,T,j);else{if(ie&128){g.suspense.unmount(T,j);return}_e&&Yt(g,null,D,"beforeUnmount"),ie&64?g.type.remove(g,D,T,L,Fe,j):W&&(z!==Pe||ae>0&&ae&64)?J(W,D,T,!1,!0):(z===Pe&&ae&384||!L&&ie&16)&&J(Y,D,T),j&&Dt(g)}(Te&&(qe=Q&&Q.onVnodeUnmounted)||_e)&&on(()=>{qe&&Pn(qe,D,g),_e&&Yt(g,null,D,"unmounted")},T)},Dt=g=>{const{type:D,el:T,anchor:j,transition:L}=g;if(D===Pe){g.patchFlag>0&&g.patchFlag&2048&&L&&!L.persisted?g.children.forEach(Q=>{Q.type===sn?l(Q.el):Dt(Q)}):O(T,j);return}if(D===vl){$(g);return}const z=()=>{l(T),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(g.shapeFlag&1&&L&&!L.persisted){const{leave:Q,delayLeave:U}=L,Y=()=>Q(T,z);U?U(g.el,z,Y):Y()}else z()},O=(g,D)=>{let T;for(;g!==D;)T=f(g),l(g),g=T;l(D)},oe=(g,D,T)=>{g.type.__hmrId&&_m(g);const{bum:j,scope:L,update:z,subTree:Q,um:U}=g;j&&ts(j),L.stop(),z&&(z.active=!1,An(Q,g,D,T)),U&&on(U,D),on(()=>{g.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve()),wm(g)},J=(g,D,T,j=!1,L=!1,z=0)=>{for(let Q=z;Q<g.length;Q++)An(g[Q],D,T,j,L)},re=g=>g.shapeFlag&6?re(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),ke=(g,D,T)=>{g==null?D._vnode&&An(D._vnode,null,null,!0):_(D._vnode||null,g,D,null,null,null,T),ic(),Xu(),D._vnode=g},Fe={p:_,um:An,m:an,r:Dt,mt:we,mc:G,pc:xe,pbc:de,n:re,o:n};let Ae,fe;return t&&([Ae,fe]=t(Fe)),{render:ke,hydrate:Ae,createApp:m8(ke,Ae)}}function Kt({effect:n,update:t},s){n.allowRecurse=t.allowRecurse=s}function yo(n,t,s=!1){const o=n.children,l=t.children;if(ue(o)&&ue(l))for(let r=0;r<o.length;r++){const a=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=Ft(l[r]),c.el=a.el),s||yo(a,c)),c.type===Yo&&(c.el=a.el),c.type===sn&&!c.el&&(c.el=a.el)}}function v8(n){const t=n.slice(),s=[0];let o,l,r,a,c;const p=n.length;for(o=0;o<p;o++){const u=n[o];if(u!==0){if(l=s[s.length-1],n[l]<u){t[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)c=r+a>>1,n[s[c]]<u?r=c+1:a=c;u<n[s[r]]&&(r>0&&(t[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=t[a];return s}const B8=n=>n.__isTeleport,Ls=n=>n&&(n.disabled||n.disabled===""),Cc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ya=(n,t)=>{const s=n&&n.to;if(We(s))if(t){const o=t(s);return o||H(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return H("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Ls(n)&&H(`Invalid Teleport target: ${s}`),s},C8={__isTeleport:!0,process(n,t,s,o,l,r,a,c,p,u){const{mc:d,pc:y,pbc:f,o:{insert:h,querySelector:m,createText:_,createComment:B}}=u,C=Ls(t.props);let{shapeFlag:b,children:v,dynamicChildren:w}=t;if(Mt&&(p=!1,w=null),n==null){const $=t.el=B("teleport start"),S=t.anchor=B("teleport end");h($,s,o),h(S,s,o);const N=t.target=ya(t.props,m),I=t.targetAnchor=_("");N?(h(I,N),a=a||Cc(N)):C||H("Invalid Teleport target on mount:",N,`(${typeof N})`);const G=(se,de)=>{b&16&&d(v,se,de,l,r,a,c,p)};C?G(s,S):N&&G(N,I)}else{t.el=n.el;const $=t.anchor=n.anchor,S=t.target=n.target,N=t.targetAnchor=n.targetAnchor,I=Ls(n.props),G=I?s:S,se=I?$:N;if(a=a||Cc(S),w?(f(n.dynamicChildren,w,G,l,r,a,c),yo(n,t,!0)):p||y(n,t,G,se,l,r,a,c,!1),C)I||ll(t,s,$,u,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const de=t.target=ya(t.props,m);de?ll(t,de,null,u,0):H("Invalid Teleport target on update:",S,`(${typeof S})`)}else I&&ll(t,S,N,u,1)}kd(t)},remove(n,t,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:c,children:p,anchor:u,targetAnchor:d,target:y,props:f}=n;if(y&&r(d),(a||!Ls(f))&&(r(u),c&16))for(let h=0;h<p.length;h++){const m=p[h];l(m,t,s,!0,!!m.dynamicChildren)}},move:ll,hydrate:b8};function ll(n,t,s,{o:{insert:o},m:l},r=2){r===0&&o(n.targetAnchor,t,s);const{el:a,anchor:c,shapeFlag:p,children:u,props:d}=n,y=r===2;if(y&&o(a,t,s),(!y||Ls(d))&&p&16)for(let f=0;f<u.length;f++)l(u[f],t,s,2);y&&o(c,t,s)}function b8(n,t,s,o,l,r,{o:{nextSibling:a,parentNode:c,querySelector:p}},u){const d=t.target=ya(t.props,p);if(d){const y=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Ls(t.props))t.anchor=u(a(n),t,c(n),s,o,l,r),t.targetAnchor=y;else{t.anchor=a(n);let f=y;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(y,t,d,s,o,l,r)}kd(t)}return t.anchor&&a(t.anchor)}const D8=C8;function kd(n){const t=n.ctx;if(t&&t.ut){let s=n.children[0].el;for(;s!==n.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}const Pe=Symbol("Fragment"),Yo=Symbol("Text"),sn=Symbol("Comment"),vl=Symbol("Static"),fo=[];let Yn=null;function A(n=!1){fo.push(Yn=n?null:[])}function w8(){fo.pop(),Yn=fo[fo.length-1]||null}let Fo=1;function bc(n){Fo+=n}function Ed(n){return n.dynamicChildren=Fo>0?Yn||Ps:null,w8(),Fo>0&&Yn&&Yn.push(n),n}function k(n,t,s,o,l,r){return Ed(e(n,t,s,o,l,r,!0))}function R(n,t,s,o,l){return Ed(F(n,t,s,o,l,!0))}function it(n){return n?n.__v_isVNode===!0:!1}function It(n,t){return t.shapeFlag&6&&Ss.has(t.type)?(n.shapeFlag&=-257,t.shapeFlag&=-513,!1):n.type===t.type&&n.key===t.key}const x8=(...n)=>k8(...n),pr="__vInternal",Td=({key:n})=>n??null,Bl=({ref:n,ref_key:t,ref_for:s})=>n!=null?We(n)||Oe(n)||he(n)?{i:en,r:n,k:t,f:!!s}:n:null;function e(n,t=null,s=null,o=0,l=null,r=n===Pe?0:1,a=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Td(t),ref:t&&Bl(t),scopeId:rr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:en};return c?(Ci(p,s),r&128&&n.normalize(p)):s&&(p.shapeFlag|=We(s)?8:16),p.key!==p.key&&H("VNode created with invalid key (NaN). VNode type:",p.type),Fo>0&&!a&&Yn&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&Yn.push(p),p}const F=x8;function k8(n,t=null,s=null,o=0,l=null,r=!1){if((!n||n===Ym)&&(n||H(`Invalid vnode type when creating vnode: ${n}.`),n=sn),it(n)){const c=Kn(n,t,!0);return s&&Ci(c,s),Fo>0&&!r&&Yn&&(c.shapeFlag&6?Yn[Yn.indexOf(n)]=c:Yn.push(c)),c.patchFlag|=-2,c}if(Pd(n)&&(n=n.__vccOpts),t){t=ee(t);let{class:c,style:p}=t;c&&!We(c)&&(t.class=Ge(c)),Re(p)&&(Il(p)&&!ue(p)&&(p=ze({},p)),t.style=tn(p))}const a=We(n)?1:ad(n)?128:B8(n)?64:Re(n)?4:he(n)?2:0;return a&4&&Il(n)&&(n=ge(n),H("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,t,s,o,l,a,r,!0)}function ee(n){return n?Il(n)||pr in n?ze({},n):n:null}function Kn(n,t,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=n,c=t?ne(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Td(c),ref:t&&t.ref?s&&l?ue(l)?l.concat(Bl(t)):[l,Bl(t)]:Bl(t):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r===-1&&ue(a)?a.map(Fd):a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Pe?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Kn(n.ssContent),ssFallback:n.ssFallback&&Kn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Fd(n){const t=Kn(n);return ue(n.children)&&(t.children=n.children.map(Fd)),t}function i(n=" ",t=0){return F(Yo,null,n,t)}function Ce(n="",t=!1){return t?(A(),R(sn,null,n)):F(sn,null,n)}function Un(n){return n==null||typeof n=="boolean"?F(sn):ue(n)?F(Pe,null,n.slice()):typeof n=="object"?Ft(n):F(Yo,null,String(n))}function Ft(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Kn(n)}function Ci(n,t){let s=0;const{shapeFlag:o}=n;if(t==null)t=null;else if(ue(t))s=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),Ci(n,l()),l._c&&(l._d=!0));return}else{s=32;const l=t._;!l&&!(pr in t)?t._ctx=en:l===3&&en&&(en.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:en},s=32):(t=String(t),o&64?(s=16,t=[i(t)]):s=8);n.children=t,n.shapeFlag|=s}function ne(...n){const t={};for(let s=0;s<n.length;s++){const o=n[s];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=Ge([t.class,o.class]));else if(l==="style")t.style=tn([t.style,o.style]);else if(qo(l)){const r=t[l],a=o[l];a&&r!==a&&!(ue(r)&&r.includes(a))&&(t[l]=r?[].concat(r,a):a)}else l!==""&&(t[l]=o[l])}return t}function Pn(n,t,s,o=null){Rn(n,t,7,[s,o])}const E8=xd();let T8=0;function F8(n,t,s){const o=n.type,l=(t?t.appContext:n.appContext)||E8,r={uid:T8++,vnode:n,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Su(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(o,l),emitsOptions:ld(o,l),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:o.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Km(r),r.root=t?t.root:r,r.emit=Tm.bind(null,r),n.ce&&n.ce(r),r}let Ye=null;const gn=()=>Ye||en,Hs=n=>{Ye=n,n.scope.on()},ms=()=>{Ye&&Ye.scope.off(),Ye=null},S8=Ut("slot,component");function fa(n,t){const s=t.isNativeTag||xu;(S8(n)||s(n))&&H("Do not use built-in or reserved HTML elements as component id: "+n)}function Sd(n){return n.vnode.shapeFlag&4}let So=!1;function $8(n,t=!1){So=t;const{props:s,children:o}=n.vnode,l=Sd(n);o8(n,s,l,t),y8(n,o);const r=l?I8(n,t):void 0;return So=!1,r}function I8(n,t){var s;const o=n.type;{if(o.name&&fa(o.name,n.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)fa(r[a],n.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)hd(r[a])}o.compilerOptions&&P8()&&H('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=tr(new Proxy(n.ctx,Ad)),Zm(n);const{setup:l}=o;if(l){const r=n.setupContext=l.length>1?Id(n):null;Hs(n),vs();const a=mt(l,n,0,[$s(n.props),r]);if(Bs(),ms(),ni(a)){if(a.then(ms,ms),t)return a.then(c=>{Dc(n,c,t)}).catch(c=>{sr(c,n,0)});if(n.asyncDep=a,!n.suspense){const c=(s=o.name)!==null&&s!==void 0?s:"Anonymous";H(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Dc(n,a,t)}else $d(n,t)}function Dc(n,t,s){he(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Re(t)?(it(t)&&H("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=t,n.setupState=Uu(t),Jm(n)):t!==void 0&&H(`setup() should return an object. Received: ${t===null?"null":typeof t}`),$d(n,s)}let ha;const P8=()=>!ha;function $d(n,t,s){const o=n.type;if(!n.render){if(!t&&ha&&!o.render){const l=o.template||vi(n).template;if(l){pt(n,"compile");const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:c,compilerOptions:p}=o,u=ze(ze({isCustomElement:r,delimiters:c},a),p);o.render=ha(l,u),ut(n,"compile")}}n.render=o.render||Bn}Hs(n),vs(),Xm(n),Bs(),ms(),!o.render&&n.render===Bn&&!t&&(o.template?H('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):H("Component is missing template or render function."))}function O8(n){return new Proxy(n.attrs,{get(t,s){return Ol(),bn(n,"get","$attrs"),t[s]},set(){return H("setupContext.attrs is readonly."),!1},deleteProperty(){return H("setupContext.attrs is readonly."),!1}})}function Id(n){const t=o=>{if(n.exposed&&H("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(ue(o)?l="array":Oe(o)&&(l="ref")),l!=="object"&&H(`expose() should be passed a plain object, received ${l}.`)}n.exposed=o||{}};let s;return Object.freeze({get attrs(){return s||(s=O8(n))},get slots(){return $s(n.slots)},get emit(){return(o,...l)=>n.emit(o,...l)},expose:t})}function ur(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Uu(tr(n.exposed)),{get(t,s){if(s in t)return t[s];if(s in hs)return hs[s](n)},has(t,s){return s in t||s in hs}}))}const M8=/(?:^|[-_])(\w)/g,L8=n=>n.replace(M8,t=>t.toUpperCase()).replace(/[-_]/g,"");function $o(n,t=!0){return he(n)?n.displayName||n.name:n.name||t&&n.__name}function dr(n,t,s=!1){let o=$o(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&n&&n.parent){const l=r=>{for(const a in r)if(r[a]===t)return a};o=l(n.components||n.parent.type.components)||l(n.appContext.components)}return o?L8(o):s?"App":"Anonymous"}function Pd(n){return he(n)&&"__vccOpts"in n}const P=(n,t)=>am(n,t,So);function R8(){return j8().slots}function j8(){const n=gn();return n||H("useContext() called without active instance."),n.setupContext||(n.setupContext=Id(n))}function nn(n,t,s){const o=arguments.length;return o===2?Re(t)&&!ue(t)?it(t)?F(n,null,[t]):F(n,t):F(n,null,t):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&it(s)&&(s=[s]),F(n,t,s))}const N8=Symbol("ssrContext"),H8=()=>{{const n=M(N8);return n||H("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function kr(n){return!!(n&&n.__v_isShallow)}function V8(){if(typeof window>"u")return;const n={style:"color:#3ba776"},t={style:"color:#0b1bc9"},s={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(y){return Re(y)?y.__isVue?["div",n,"VueInstance"]:Oe(y)?["div",{},["span",n,d(y)],"<",c(y.value),">"]:ys(y)?["div",{},["span",n,kr(y)?"ShallowReactive":"Reactive"],"<",c(y),`>${Wt(y)?" (readonly)":""}`]:Wt(y)?["div",{},["span",n,kr(y)?"ShallowReadonly":"Readonly"],"<",c(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...r(y.$)]}};function r(y){const f=[];y.type.props&&y.props&&f.push(a("props",ge(y.props))),y.setupState!==Ve&&f.push(a("setup",y.setupState)),y.data!==Ve&&f.push(a("data",ge(y.data)));const h=p(y,"computed");h&&f.push(a("computed",h));const m=p(y,"inject");return m&&f.push(a("injected",m)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),f}function a(y,f){return f=ze({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",o,h+": "],c(f[h],!1)])]]:["span",{}]}function c(y,f=!0){return typeof y=="number"?["span",t,y]:typeof y=="string"?["span",s,JSON.stringify(y)]:typeof y=="boolean"?["span",o,y]:Re(y)?["object",{object:f?ge(y):y}]:["span",s,String(y)]}function p(y,f){const h=y.type;if(he(h))return;const m={};for(const _ in y.ctx)u(h,_,f)&&(m[_]=y.ctx[_]);return m}function u(y,f,h){const m=y[h];if(ue(m)&&m.includes(f)||Re(m)&&f in m||y.extends&&u(y.extends,f,h)||y.mixins&&y.mixins.some(_=>u(_,f,h)))return!0}function d(y){return kr(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Rl="3.2.47",q8="http://www.w3.org/2000/svg",ss=typeof document<"u"?document:null,wc=ss&&ss.createElement("template"),W8={insert:(n,t,s)=>{t.insertBefore(n,s||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,s,o)=>{const l=t?ss.createElementNS(q8,n):ss.createElement(n,s?{is:s}:void 0);return n==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:n=>ss.createTextNode(n),createComment:n=>ss.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ss.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,s,o,l,r){const a=s?s.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{wc.innerHTML=o?`<svg>${n}</svg>`:n;const c=wc.content;if(o){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}t.insertBefore(c,s)}return[a?a.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function G8(n,t,s){const o=n._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?n.removeAttribute("class"):s?n.setAttribute("class",t):n.className=t}function U8(n,t,s){const o=n.style,l=We(s);if(s&&!l){if(t&&!We(t))for(const r in t)s[r]==null&&ma(o,r,"");for(const r in s)ma(o,r,s[r])}else{const r=o.display;l?t!==s&&(o.cssText=s):t&&n.removeAttribute("style"),"_vod"in n&&(o.display=r)}}const z8=/[^\\];\s*$/,xc=/\s*!important$/;function ma(n,t,s){if(ue(s))s.forEach(o=>ma(n,t,o));else if(s==null&&(s=""),z8.test(s)&&H(`Unexpected semicolon at the end of '${t}' style value: '${s}'`),t.startsWith("--"))n.setProperty(t,s);else{const o=Y8(n,t);xc.test(s)?n.setProperty(At(o),s.replace(xc,""),"important"):n[o]=s}}const kc=["Webkit","Moz","ms"],Er={};function Y8(n,t){const s=Er[t];if(s)return s;let o=rt(t);if(o!=="filter"&&o in n)return Er[t]=o;o=As(o);for(let l=0;l<kc.length;l++){const r=kc[l]+o;if(r in n)return Er[t]=r}return t}const Ec="http://www.w3.org/1999/xlink";function K8(n,t,s,o,l){if(o&&t.startsWith("xlink:"))s==null?n.removeAttributeNS(Ec,t.slice(6,t.length)):n.setAttributeNS(Ec,t,s);else{const r=hh(t);s==null||r&&!Du(s)?n.removeAttribute(t):n.setAttribute(t,r?"":s)}}function Z8(n,t,s,o,l,r,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,l,r),n[t]=s??"";return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=s;const p=s??"";(n.value!==p||n.tagName==="OPTION")&&(n.value=p),s==null&&n.removeAttribute(t);return}let c=!1;if(s===""||s==null){const p=typeof n[t];p==="boolean"?s=Du(s):s==null&&p==="string"?(s="",c=!0):p==="number"&&(s=0,c=!0)}try{n[t]=s}catch(p){c||H(`Failed setting prop "${t}" on <${n.tagName.toLowerCase()}>: value ${s} is invalid.`,p)}c&&n.removeAttribute(t)}function J8(n,t,s,o){n.addEventListener(t,s,o)}function Q8(n,t,s,o){n.removeEventListener(t,s,o)}function X8(n,t,s,o,l=null){const r=n._vei||(n._vei={}),a=r[t];if(o&&a)a.value=o;else{const[c,p]=eg(t);if(o){const u=r[t]=sg(o,l);J8(n,c,u,p)}else a&&(Q8(n,c,a,p),r[t]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function eg(n){let t;if(Tc.test(n)){t={};let o;for(;o=n.match(Tc);)n=n.slice(0,n.length-o[0].length),t[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):At(n.slice(2)),t]}let Tr=0;const ng=Promise.resolve(),tg=()=>Tr||(ng.then(()=>Tr=0),Tr=Date.now());function sg(n,t){const s=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=s.attached)return;Rn(og(o,s.value),t,5,[o])};return s.value=n,s.attached=tg(),s}function og(n,t){if(ue(t)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Fc=/^on[a-z]/,lg=(n,t,s,o,l=!1,r,a,c,p)=>{t==="class"?G8(n,o,l):t==="style"?U8(n,s,o):qo(t)?El(t)||X8(n,t,s,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rg(n,t,o,l))?Z8(n,t,o,r,a,c,p):(t==="true-value"?n._trueValue=o:t==="false-value"&&(n._falseValue=o),K8(n,t,o,l))};function rg(n,t,s,o){return o?!!(t==="innerHTML"||t==="textContent"||t in n&&Fc.test(t)&&he(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Fc.test(t)&&We(s)?!1:t in n}const xt="transition",Ks="animation",Od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ag=ze({},Rm.props,Od),Zt=(n,t=[])=>{ue(n)?n.forEach(s=>s(...t)):n&&n(...t)},Sc=n=>n?ue(n)?n.some(t=>t.length>1):n.length>1:!1;function ig(n){const t={};for(const K in n)K in Od||(t[K]=n[K]);if(n.css===!1)return t;const{name:s="v",type:o,duration:l,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:p=r,appearActiveClass:u=a,appearToClass:d=c,leaveFromClass:y=`${s}-leave-from`,leaveActiveClass:f=`${s}-leave-active`,leaveToClass:h=`${s}-leave-to`}=n,m=cg(l),_=m&&m[0],B=m&&m[1],{onBeforeEnter:C,onEnter:b,onEnterCancelled:v,onLeave:w,onLeaveCancelled:$,onBeforeAppear:S=C,onAppear:N=b,onAppearCancelled:I=v}=t,G=(K,De,ve)=>{Et(K,De?d:c),Et(K,De?u:a),ve&&ve()},se=(K,De)=>{K._isLeaving=!1,Et(K,y),Et(K,h),Et(K,f),De&&De()},de=K=>(De,ve)=>{const we=K?N:b,Me=()=>G(De,K,ve);Zt(we,[De,Me]),$c(()=>{Et(De,K?p:r),dt(De,K?d:c),Sc(we)||Ic(De,o,_,Me)})};return ze(t,{onBeforeEnter(K){Zt(C,[K]),dt(K,r),dt(K,a)},onBeforeAppear(K){Zt(S,[K]),dt(K,p),dt(K,u)},onEnter:de(!1),onAppear:de(!0),onLeave(K,De){K._isLeaving=!0;const ve=()=>se(K,De);dt(K,y),Ld(),dt(K,f),$c(()=>{K._isLeaving&&(Et(K,y),dt(K,h),Sc(w)||Ic(K,o,B,ve))}),Zt(w,[K,ve])},onEnterCancelled(K){G(K,!1),Zt(v,[K])},onAppearCancelled(K){G(K,!0),Zt(I,[K])},onLeaveCancelled(K){se(K),Zt($,[K])}})}function cg(n){if(n==null)return null;if(Re(n))return[Fr(n.enter),Fr(n.leave)];{const t=Fr(n);return[t,t]}}function Fr(n){const t=bh(n);return dm(t,"<transition> explicit duration"),t}function dt(n,t){t.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n._vtc||(n._vtc=new Set)).add(t)}function Et(n,t){t.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:s}=n;s&&(s.delete(t),s.size||(n._vtc=void 0))}function $c(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let pg=0;function Ic(n,t,s,o){const l=n._endId=++pg,r=()=>{l===n._endId&&o()};if(s)return setTimeout(r,s);const{type:a,timeout:c,propCount:p}=Md(n,t);if(!a)return o();const u=a+"end";let d=0;const y=()=>{n.removeEventListener(u,f),r()},f=h=>{h.target===n&&++d>=p&&y()};setTimeout(()=>{d<p&&y()},c+1),n.addEventListener(u,f)}function Md(n,t){const s=window.getComputedStyle(n),o=m=>(s[m]||"").split(", "),l=o(`${xt}Delay`),r=o(`${xt}Duration`),a=Pc(l,r),c=o(`${Ks}Delay`),p=o(`${Ks}Duration`),u=Pc(c,p);let d=null,y=0,f=0;t===xt?a>0&&(d=xt,y=a,f=r.length):t===Ks?u>0&&(d=Ks,y=u,f=p.length):(y=Math.max(a,u),d=y>0?a>u?xt:Ks:null,f=d?d===xt?r.length:p.length:0);const h=d===xt&&/\b(transform|all)(,|$)/.test(o(`${xt}Property`).toString());return{type:d,timeout:y,propCount:f,hasTransform:h}}function Pc(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((s,o)=>Oc(s)+Oc(n[o])))}function Oc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Ld(){return document.body.offsetHeight}const Rd=new WeakMap,jd=new WeakMap,Nd={name:"TransitionGroup",props:ze({},ag,{tag:String,moveClass:String}),setup(n,{slots:t}){const s=gn(),o=cd();let l,r;return ir(()=>{if(!l.length)return;const a=n.moveClass||`${n.name||"v"}-move`;if(!mg(l[0].el,s.vnode.el,a))return;l.forEach(yg),l.forEach(fg);const c=l.filter(hg);Ld(),c.forEach(p=>{const u=p.el,d=u.style;dt(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const y=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",y),u._moveCb=null,Et(u,a))};u.addEventListener("transitionend",y)})}),()=>{const a=ge(n),c=ig(a);let p=a.tag||Pe;l=r,r=t.default?gi(t.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?js(d,To(d,c,o,s)):H("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];js(d,To(d,c,o,s)),Rd.set(d,d.el.getBoundingClientRect())}return F(p,null,r)}}},ug=n=>delete n.mode;Nd.props;const dg=Nd;function yg(n){const t=n.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function fg(n){jd.set(n,n.el.getBoundingClientRect())}function hg(n){const t=Rd.get(n),s=jd.get(n),o=t.left-s.left,l=t.top-s.top;if(o||l){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",n}}function mg(n,t,s){const o=n.cloneNode();n._vtc&&n._vtc.forEach(a=>{a.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),s.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(o);const{hasTransform:r}=Md(o);return l.removeChild(o),r}const gg=["ctrl","shift","alt","meta"],Ag={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>gg.some(s=>n[`${s}Key`]&&!t.includes(s))},_g=(n,t)=>(s,...o)=>{for(let l=0;l<t.length;l++){const r=Ag[t[l]];if(r&&r(s,t))return}return n(s,...o)},vg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rl=(n,t)=>s=>{if(!("key"in s))return;const o=At(s.key);if(t.some(l=>l===o||vg[l]===o))return n(s)},Hd={beforeMount(n,{value:t},{transition:s}){n._vod=n.style.display==="none"?"":n.style.display,s&&t?s.beforeEnter(n):Zs(n,t)},mounted(n,{value:t},{transition:s}){s&&t&&s.enter(n)},updated(n,{value:t,oldValue:s},{transition:o}){!t!=!s&&(o?t?(o.beforeEnter(n),Zs(n,!0),o.enter(n)):o.leave(n,()=>{Zs(n,!1)}):Zs(n,t))},beforeUnmount(n,{value:t}){Zs(n,t)}};function Zs(n,t){n.style.display=t?n._vod:"none"}const Bg=ze({patchProp:lg},W8);let Mc;function Cg(){return Mc||(Mc=A8(Bg))}const bg=(...n)=>{const t=Cg().createApp(...n);Dg(t),wg(t);const{mount:s}=t;return t.mount=o=>{const l=xg(o);if(!l)return;const r=t._component;!he(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},t};function Dg(n){Object.defineProperty(n.config,"isNativeTag",{value:t=>bu(t)||yh(t),writable:!1})}function wg(n){{const t=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return t},set(){H("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(n.config,"compilerOptions",{get(){return H(o),s},set(){H(o)}})}}function xg(n){if(We(n)){const t=document.querySelector(n);return t||H(`Failed to mount app: mount target selector "${n}" returned null.`),t}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&H('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function kg(){V8()}kg();function ga(n,t={},s){for(const o in n){const l=n[o],r=s?`${s}:${o}`:o;typeof l=="object"&&l!==null?ga(l,t,r):typeof l=="function"&&(t[r]=l)}return t}const Eg={run:n=>n()},Tg=()=>Eg,Vd=typeof console.createTask<"u"?console.createTask:Tg;function Fg(n,t){const s=t.shift(),o=Vd(s);return n.reduce((l,r)=>l.then(()=>o.run(()=>r(...t))),Promise.resolve())}function Sg(n,t){const s=t.shift(),o=Vd(s);return Promise.all(n.map(l=>o.run(()=>l(...t))))}function Sr(n,t){for(const s of[...n])s(t)}class $g{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,s,o={}){if(!t||typeof s!="function")return()=>{};const l=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!s.name)try{Object.defineProperty(s,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(s),()=>{s&&(this.removeHook(t,s),s=void 0)}}hookOnce(t,s){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,s(...r));return o=this.hook(t,l),o}removeHook(t,s){if(this._hooks[t]){const o=this._hooks[t].indexOf(s);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,s){this._deprecatedHooks[t]=typeof s=="string"?{to:s}:s;const o=this._hooks[t]||[];delete this._hooks[t];for(const l of o)this.hook(t,l)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const s in t)this.deprecateHook(s,t[s])}addHooks(t){const s=ga(t),o=Object.keys(s).map(l=>this.hook(l,s[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(t){const s=ga(t);for(const o in s)this.removeHook(o,s[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...s){return s.unshift(t),this.callHookWith(Fg,t,...s)}callHookParallel(t,...s){return s.unshift(t),this.callHookWith(Sg,t,...s)}callHookWith(t,s,...o){const l=this._before||this._after?{name:s,args:o,context:{}}:void 0;this._before&&Sr(this._before,l);const r=t(s in this._hooks?[...this._hooks[s]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Sr(this._after,l)}):(this._after&&l&&Sr(this._after,l),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const s=this._before.indexOf(t);s!==-1&&this._before.splice(s,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const s=this._after.indexOf(t);s!==-1&&this._after.splice(s,1)}}}}function Ig(){return new $g}function Pg(n){return Array.isArray(n)?n:[n]}const qd=["title","script","style","noscript"],Wd=["base","meta","link","style","script","noscript"],Og=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Mg=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Lg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Gd(n){let t=9;for(let s=0;s<n.length;)t=Math.imul(t^n.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Aa(n){return Gd(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([t,s])=>`${t}:${String(s)}`).join(",")}`)}function Rg(n){let t=9;for(const s of n)for(let o=0;o<s.length;)t=Math.imul(t^s.charCodeAt(o++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ud(n,t){const{props:s,tag:o}=n;if(Mg.includes(o))return o;if(o==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof s[r]<"u"){const a=String(s[r]);return t&&!t(a)?!1:`${o}:${r}:${a}`}return!1}function Lc(n,t){return n==null?t||null:typeof n=="function"?n(t):n}function al(n,t=!1,s){const{tag:o,$el:l}=n;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const c=`attr:${r}`;if(r==="class"){if(!a)return;for(const p of a.split(" ")){const u=`${c}:${p}`;s&&s(n,u,()=>l.classList.remove(p)),l.classList.contains(p)||l.classList.add(p)}return}s&&!r.startsWith("data-h-")&&s(n,c,()=>l.removeAttribute(r)),(t||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),qd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let Js=!1;async function zd(n,t={}){var f,h;const s={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const o=t.document||n.resolvedOptions.document||window.document,l=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(Js=Js||n._hash||!1,Js)){const m=Rg(l.map(_=>_.tag._h));if(Js===m)return;Js=m}const r=n._popSideEffectQueue();n.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([_,B])=>{r[_]=B})});const a=(m,_,B)=>{_=`${m.renderId}:${_}`,m.entry&&(m.entry._sde[_]=B),delete r[_]};function c(m){const _=n.headEntries().find(C=>C._i===m._e),B={renderId:m._d||Aa(m),$el:null,shouldRender:!0,tag:m,entry:_,markSideEffect:(C,b)=>a(B,C,b)};return B}const p=[],u={body:[],head:[]},d=m=>{n._elMap[m.renderId]=m.$el,p.push(m),a(m,"el",()=>{var _;(_=m.$el)==null||_.remove(),delete n._elMap[m.renderId]})};for(const m of l){if(await n.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:_}=m;if(_.tag==="title"){o.title=_.textContent||"",p.push(m);continue}if(_.tag==="htmlAttrs"||_.tag==="bodyAttrs"){m.$el=o[_.tag==="htmlAttrs"?"documentElement":"body"],al(m,!1,a),p.push(m);continue}if(m.$el=n._elMap[m.renderId],!m.$el&&_.key&&(m.$el=o.querySelector(`${(f=_.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${_.tag}[data-h-${_._h}]`)),m.$el){m.tag._d&&al(m),d(m);continue}u[(h=_.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const y={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,_])=>{var C;if(!_.length)return;const B=(C=o==null?void 0:o[m])==null?void 0:C.children;if(B){for(const b of[...B].reverse()){const v=b.tagName.toLowerCase();if(!Wd.includes(v))continue;const w=b.getAttributeNames().reduce((I,G)=>({...I,[G]:b.getAttribute(G)}),{}),$={tag:v,props:w};b.innerHTML&&($.innerHTML=b.innerHTML);const S=Aa($);let N=_.findIndex(I=>(I==null?void 0:I.renderId)===S);if(N===-1){const I=Ud($);N=_.findIndex(G=>(G==null?void 0:G.tag._d)&&G.tag._d===I)}if(N!==-1){const I=_[N];I.$el=b,al(I),d(I),delete _[N]}}_.forEach(b=>{const v=b.tag.tagPosition||"head";y[v]=y[v]||o.createDocumentFragment(),b.$el||(b.$el=o.createElement(b.tag.tag),al(b,!0)),y[v].appendChild(b.$el),d(b)})}}),y.head&&o.head.appendChild(y.head),y.bodyOpen&&o.body.insertBefore(y.bodyOpen,o.body.firstChild),y.bodyClose&&o.body.appendChild(y.bodyClose);for(const m of p)await n.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let $r=null;async function Yd(n,t={}){function s(){return $r=null,zd(n,t)}const o=t.delayFn||(l=>setTimeout(l,10));return $r=$r||new Promise(l=>o(()=>l(s())))}function jg(n){return{hooks:{"entries:updated":function(t){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let s=n==null?void 0:n.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Yd(t,{document:(n==null?void 0:n.document)||window.document,delayFn:s})}}}}function Ng(n){var t;return((t=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Rc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function jc(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const t=n.tagPriority||n.tag;return t in Rc?Rc[t]:10}const Hg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Vg(){return{hooks:{"tags:resolve":n=>{const t=s=>{var o;return(o=n.tags.find(l=>l._d===s))==null?void 0:o._p};for(const{prefix:s,offset:o}of Hg)for(const l of n.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=t(l.tagPriority.replace(s,""));typeof r<"u"&&(l._p=r+o)}n.tags.sort((s,o)=>s._p-o._p).sort((s,o)=>jc(s)-jc(o))}}}}function qg(){return{hooks:{"tags:resolve":n=>{const{tags:t}=n;let s=t.findIndex(l=>l.tag==="titleTemplate");const o=t.findIndex(l=>l.tag==="title");if(o!==-1&&s!==-1){const l=Lc(t[s].textContent,t[o].textContent);l!==null?t[o].textContent=l||t[o].textContent:delete t[o]}else if(s!==-1){const l=Lc(t[s].textContent);l!==null&&(t[s].textContent=l,t[s].tag="title",s=-1)}s!==-1&&delete t[s],n.tags=t.filter(Boolean)}}}}function Wg(){return{hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}}const Gg=["link","style","script","noscript"];function Ug(){return{hooks:{"tag:normalise":({tag:n,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(n._h=Aa(n)),n.key&&Gg.includes(n.tag)&&(n._h=Gd(n.key),n.props[`data-h-${n._h}`]="")}}}}const Nc=["script","link","bodyAttrs"];function zg(){const n=(t,s)=>{const o={},l={};Object.entries(s.props).forEach(([a,c])=>{a.startsWith("on")&&typeof c=="function"?l[a]=c:o[a]=c});let r;return t==="dom"&&s.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(s=>(!Nc.includes(s.tag)||!Object.entries(s.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(s.props=n("ssr",s).props),s))},"dom:beforeRenderTag":function(t){if(!Nc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:o,delayedSrc:l}=n("dom",t.tag);Object.keys(o).length&&(t.tag.props=s,t.tag._eventHandlers=o,t.tag._delayedSrc=l)},"dom:renderTag":function(t){const s=t.$el;if(!t.tag._eventHandlers||!s)return;const o=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(t.tag._eventHandlers).forEach(([l,r])=>{const a=`${t.tag._d||t.tag._p}:${l}`,c=l.slice(2).toLowerCase(),p=`data-h-${c}`;if(t.markSideEffect(a,()=>{}),s.hasAttribute(p))return;const u=r;s.setAttribute(p,""),o.addEventListener(c,u),t.entry&&(t.entry._sde[a]=()=>{o.removeEventListener(c,u),s.removeAttribute(p)})}),t.tag._delayedSrc&&s.setAttribute("src",t.tag._delayedSrc)}}}}const Yg=["templateParams","htmlAttrs","bodyAttrs"];function Kg(){return{hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(o=>{n.props[o]&&(n.key=n.props[o],delete n.props[o])});const s=Ud(n)||(n.key?`${n.tag}:${n.key}`:!1);s&&(n._d=s)},"tags:resolve":function(n){const t={};n.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=t[l];if(r){let c=o==null?void 0:o.tagDuplicateStrategy;if(!c&&Yg.includes(o.tag)&&(c="merge"),c==="merge"){const p=r.props;["class","style"].forEach(u=>{o.props[u]&&p[u]&&(u==="style"&&!p[u].endsWith(";")&&(p[u]+=";"),o.props[u]=`${p[u]} ${o.props[u]}`)}),t[l].props={...p,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Wd.includes(o.tag)&&a===0){delete t[l];return}t[l]=o});const s=[];Object.values(t).forEach(o=>{const l=o._duped;delete o._duped,s.push(o),l&&s.push(...l)}),n.tags=s}}}}function il(n,t){function s(r){if(["s","pageTitle"].includes(r))return t.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((c,p)=>c&&c[p]||void 0,t):a=t[r],typeof a<"u"?a||"":!1}let o=n;try{o=decodeURI(n)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=s(r.slice(1));typeof a=="string"&&(n=n.replaceAll(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),t.separator&&(n.endsWith(t.separator)&&(n=n.slice(0,-t.separator.length).trim()),n.startsWith(t.separator)&&(n=n.slice(t.separator.length).trim()),n=n.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),n}function Zg(){return{hooks:{"tags:resolve":n=>{var r;const{tags:t}=n,s=(r=t.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=t.findIndex(a=>a.tag==="templateParams"),l=o!==-1?t[o].props:{};l.pageTitle=l.pageTitle||s||"";for(const a of t)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=il(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=il(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=il(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(c,p)=>typeof p=="string"?il(p,l):p)}catch{}n.tags=t.filter(a=>a.tag!=="templateParams")}}}}const Jg=typeof window<"u";let Kd;function Qg(n){return Kd=n}function Xg(){return Kd}async function e5(n,t){const s={tag:n,props:{}};return n==="templateParams"?(s.props=t,s):["title","titleTemplate"].includes(n)?(s.textContent=t instanceof Promise?await t:t,s):typeof t=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?s.props.src=t:s.innerHTML=t,s):!1:(s.props=await t5(n,{...t}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(o=>Lg.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||qd.includes(s.tag))&&(s[o]=s.props[o]),delete s.props[o]}),["innerHTML","textContent"].forEach(o=>{if(s.tag==="script"&&typeof s[o]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[o]=JSON.parse(s[o])}catch{s[o]=""}typeof s[o]=="object"&&(s[o]=JSON.stringify(s[o]))}),s.props.class&&(s.props.class=n5(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s)}function n5(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(t=>n[t])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function t5(n,t){for(const s of Object.keys(t)){const o=s.startsWith("data-");t[s]instanceof Promise&&(t[s]=await t[s]),String(t[s])==="true"?t[s]=o?"true":"":String(t[s])==="false"&&(o?t[s]="false":delete t[s])}return t}const s5=10;async function o5(n){const t=[];return Object.entries(n.resolvedInput).filter(([s,o])=>typeof o<"u"&&Og.includes(s)).forEach(([s,o])=>{const l=Pg(o);t.push(...l.map(r=>e5(s,r)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((s,o)=>(s._e=n._i,s._p=(n._i<<s5)+o,s))}function l5(){return[Kg(),Vg(),Zg(),qg(),Ug(),zg(),Wg()]}function r5(n={}){return[jg({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})]}function a5(n={}){const t=i5({...n,plugins:[...r5(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Ng(t.resolvedOptions.document)),Qg(t),t}function i5(n={}){let t=[],s={},o=0;const l=Ig();n!=null&&n.hooks&&l.addHooks(n.hooks),n.plugins=[...l5(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&l.addHooks(c.hooks)),n.document=n.document||(Jg?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:n,headEntries(){return t},get hooks(){return l},use(c){c.hooks&&l.addHooks(c.hooks)},push(c,p){const u={_i:o++,input:c,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),t.push(u),r(),{dispose(){t=t.filter(d=>d._i!==u._i?!0:(s={...s,...d._sde||{}},d._sde={},r(),!1))},patch(d){t=t.map(y=>(y._i===u._i&&(u.input=y.input=d,r()),y))}}},async resolveTags(){const c={tags:[],entries:[...t]};await l.callHook("entries:resolve",c);for(const p of c.entries){const u=p._t||(d=>d);if(p.resolvedInput=u(p.resolvedInput||p.input),p.resolvedInput)for(const d of await o5(p)){const y={tag:d,entry:p,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",y),c.tags.push(y.tag)}}return await l.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...s};return s={},c},_elMap:{}};return a.hooks.callHook("init",a),a}function c5(n){return typeof n=="function"?n():x(n)}function jl(n,t=""){if(n instanceof Promise)return n;const s=c5(n);return!n||!s?s:Array.isArray(s)?s.map(o=>jl(o,t)):typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,x(l)]:[o,jl(l,o)])):s}const p5=Rl.startsWith("3"),u5=typeof window<"u",Zd="usehead";function bi(){return gn()&&M(Zd)||Xg()}function d5(n){return{install(s){p5&&(s.config.globalProperties.$unhead=n,s.config.globalProperties.$head=n,s.provide(Zd,n))}}.install}function y5(n={}){const t=a5({...n,domDelayFn:s=>setTimeout(()=>ln(()=>s()),10),plugins:[f5(),...(n==null?void 0:n.plugins)||[]]});return t.install=d5(t),t}function f5(){return{hooks:{"entries:resolve":function(n){for(const t of n.entries)t.resolvedInput=jl(t.input)}}}}function h5(n,t={}){const s=bi(),o=Z(!1),l=Z({});Cs(()=>{l.value=o.value?{}:jl(n)});const r=s.push(l.value,t);return Be(l,c=>{r.patch(c)}),gn()&&(zo(()=>{r.dispose()}),yd(()=>{o.value=!0}),dd(()=>{o.value=!1})),r}function m5(n,t={}){return bi().push(n,t)}function Jd(n,t={}){var o;const s=bi();if(s){const l=u5||!!((o=s.resolvedOptions)!=null&&o.document);return t.mode==="server"&&l||t.mode==="client"&&!l?void 0:l?h5(n,t):m5(n,t)}}function g5(n,t){const s=y5(t||{}),o={unhead:s,install(l){Rl.startsWith("3")&&(l.config.globalProperties.$head=s,l.provide("usehead",s))},use(l){s.use(l)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(l,r){return s.push(l,r)},addEntry(l,r){return s.push(l,r)},addHeadObjs(l,r){return s.push(l,r)},addReactiveEntry(l,r){const a=Jd(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?zd(s,{document:l}):Yd(s,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=o.addHeadObjs,s.updateDOM=o.updateDOM,s.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),n&&o.addHeadObjs(n),o}const ho=Symbol("v-click-clicks"),os=Symbol("v-click-clicks-elements"),_a=Symbol("v-click-clicks-order-map"),mo=Symbol("v-click-clicks-disabled"),Qd=Symbol("slidev-slide-scale"),V=Symbol("slidev-slidev-context"),A5=Symbol("slidev-route"),_5=Symbol("slidev-slide-context"),ns="slidev-vclick-target",Ir="slidev-vclick-hidden",v5="slidev-vclick-fade",Pr="slidev-vclick-hidden-explicitly",Qs="slidev-vclick-current",cl="slidev-vclick-prior",B5=["localhost","127.0.0.1"];let C5=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,s)=>(s&=63,s<36?t+=s.toString(36):s<62?t+=(s-26).toString(36).toUpperCase():s>62?t+="-":t+="_",t),"");function Xd(n){return n=n??[],Array.isArray(n)?n:[n]}function va(n,t){if(!n)return!1;const s=n.indexOf(t);return s>=0?(n.splice(s,1),!0):!1}function b5(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function D5(n){return n!=null}function w5(n,t){return Object.fromEntries(Object.entries(n).map(([s,o])=>t(s,o)).filter(D5))}const co={theme:"seriph",title:"Rust",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Rust Programming Language</h2>
<p>Have fun !!</p>
<p>Learn more at <a href="https://www.rust-lang.org/" target="_blank" rel="noopener">Rust</a></p>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",hideInToc:!0},Ie=co,Lt=Ie.aspectRatio??16/9,Rt=Ie.canvasWidth??980,Di=Math.ceil(Rt/Lt),wi=P(()=>w5(Ie.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function ey(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Nn(n,t,s){Object.defineProperty(n,t,{value:s,writable:!0,enumerable:!1})}const Ds=Ue({page:0,clicks:0});let x5=[],k5=[];Nn(Ds,"$syncUp",!0);Nn(Ds,"$syncDown",!0);Nn(Ds,"$paused",!1);Nn(Ds,"$onSet",n=>x5.push(n));Nn(Ds,"$onPatch",n=>k5.push(n));ey();Nn(Ds,"$patch",async()=>!1);function ny(n,t,s=!1){const o=[];let l=!1,r=!1,a,c;const p=Ue(t);function u(h){o.push(h)}function d(h,m){p[h]!==m&&(clearTimeout(a),l=!0,p[h]=m,a=setTimeout(()=>l=!1,0))}function y(h){l||(clearTimeout(c),r=!0,Object.entries(h).forEach(([m,_])=>{p[m]=_}),c=setTimeout(()=>r=!1,0))}function f(h){let m;s?s&&window.addEventListener("storage",B=>{B&&B.key===h&&B.newValue&&y(JSON.parse(B.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",B=>y(B.data)));function _(){!s&&m&&!r?m.postMessage(ge(p)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(p)),l||o.forEach(B=>B(p))}if(Be(p,_,{deep:!0,flush:"sync"}),s){const B=window.localStorage.getItem(h);B&&y(JSON.parse(B))}}return{init:f,onPatch:u,patch:d,state:p}}const{init:E5,onPatch:T5,patch:Xs,state:Or}=ny(Ds,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ws=Ue({});let F5=[],S5=[];Nn(ws,"$syncUp",!0);Nn(ws,"$syncDown",!0);Nn(ws,"$paused",!1);Nn(ws,"$onSet",n=>F5.push(n));Nn(ws,"$onPatch",n=>S5.push(n));ey();Nn(ws,"$patch",async()=>!1);const{init:$5,onPatch:I5,patch:ty,state:Nl}=ny(ws,{},!1),P5="modulepreload",O5=function(n){return"/rust-slidev/"+n},Hc={},jt=function(t,s,o){if(!s||s.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=O5(r),r in Hc)return;Hc[r]=!0;const a=r.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const y=l[d];if(y.href===r&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":P5,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,y)=>{u.addEventListener("load",d),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function M5(n,t){let s,o,l;const r=Z(!0),a=()=>{r.value=!0,l()};Be(n,a,{flush:"sync"});const c=typeof t=="function"?t:t.get,p=typeof t=="function"?void 0:t.set,u=ui((d,y)=>(o=d,l=y,{get(){return r.value&&(s=c(),r.value=!1),o(),s},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function vt(n){return Jl()?(oi(n),!0):!1}function Xe(n){return typeof n=="function"?n():x(n)}function L5(n){if(!Oe(n))return Ue(n);const t=new Proxy({},{get(s,o,l){return x(Reflect.get(n.value,o,l))},set(s,o,l){return Oe(n.value[o])&&!Oe(l)?n.value[o].value=l:n.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(n.value,o)},has(s,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ue(t)}const Zn=typeof window<"u",R5=n=>typeof n<"u",Ba=()=>+Date.now(),yr=()=>{},j5=N5();function N5(){var n;return Zn&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function H5(n,t){function s(...o){return new Promise((l,r)=>{Promise.resolve(n(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return s}const sy=n=>n();function V5(n=sy){const t=Z(!0);function s(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&n(...r)};return{isActive:zn(t),pause:s,resume:o,eventFilter:l}}function q5(n,t){var s;if(typeof n=="number")return n+t;const o=((s=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=n.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?n:r+l}function oy(...n){if(n.length!==1)return zu(...n);const t=n[0];return typeof t=="function"?zn(ui(()=>({get:t,set:yr}))):Z(t)}var W5=Object.defineProperty,G5=Object.defineProperties,U5=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,z5=Object.prototype.hasOwnProperty,Y5=Object.prototype.propertyIsEnumerable,qc=(n,t,s)=>t in n?W5(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,K5=(n,t)=>{for(var s in t||(t={}))z5.call(t,s)&&qc(n,s,t[s]);if(Vc)for(var s of Vc(t))Y5.call(t,s)&&qc(n,s,t[s]);return n},Z5=(n,t)=>G5(n,U5(t));function J5(n){if(!Oe(n))return om(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const s in n.value)t[s]=ui(()=>({get(){return n.value[s]},set(o){if(Array.isArray(n.value)){const l=[...n.value];l[s]=o,n.value=l}else{const l=Z5(K5({},n.value),{[s]:o});Object.setPrototypeOf(l,n.value),n.value=l}}}));return t}function ly(n,t=!0){gn()?bt(n):t?n():ln(n)}function Q5(n,t=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=Z(!1);function c(){r&&(clearInterval(r),r=null)}function p(){a.value=!1,c()}function u(){const d=Xe(t);d<=0||(a.value=!0,l&&n(),c(),r=setInterval(n,d))}if(o&&Zn&&u(),Oe(t)||typeof t=="function"){const d=Be(t,()=>{a.value&&Zn&&u()});vt(d)}return vt(p),{isActive:a,pause:p,resume:u}}function X5(n,t,s={}){const{immediate:o=!0}=s,l=Z(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,a()}function p(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,n(...u)},Xe(t))}return o&&(l.value=!0,Zn&&p()),vt(c),{isPending:zn(l),start:p,stop:c}}function ry(n=!1,t={}){const{truthyValue:s=!0,falsyValue:o=!1}=t,l=Oe(n),r=Z(n);function a(c){if(arguments.length)return r.value=c,r.value;{const p=Xe(s);return r.value=r.value===p?Xe(o):p,r.value}}return l?a:[r,a]}var Wc=Object.getOwnPropertySymbols,e3=Object.prototype.hasOwnProperty,n3=Object.prototype.propertyIsEnumerable,t3=(n,t)=>{var s={};for(var o in n)e3.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Wc)for(var o of Wc(n))t.indexOf(o)<0&&n3.call(n,o)&&(s[o]=n[o]);return s};function s3(n,t,s={}){const o=s,{eventFilter:l=sy}=o,r=t3(o,["eventFilter"]);return Be(n,H5(l,t),r)}var o3=Object.defineProperty,l3=Object.defineProperties,r3=Object.getOwnPropertyDescriptors,Hl=Object.getOwnPropertySymbols,ay=Object.prototype.hasOwnProperty,iy=Object.prototype.propertyIsEnumerable,Gc=(n,t,s)=>t in n?o3(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,a3=(n,t)=>{for(var s in t||(t={}))ay.call(t,s)&&Gc(n,s,t[s]);if(Hl)for(var s of Hl(t))iy.call(t,s)&&Gc(n,s,t[s]);return n},i3=(n,t)=>l3(n,r3(t)),c3=(n,t)=>{var s={};for(var o in n)ay.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Hl)for(var o of Hl(n))t.indexOf(o)<0&&iy.call(n,o)&&(s[o]=n[o]);return s};function p3(n,t,s={}){const o=s,{eventFilter:l}=o,r=c3(o,["eventFilter"]),{eventFilter:a,pause:c,resume:p,isActive:u}=V5(l);return{stop:s3(n,t,i3(a3({},r),{eventFilter:a})),pause:c,resume:p,isActive:u}}function Mn(n){var t;const s=Xe(n);return(t=s==null?void 0:s.$el)!=null?t:s}const rn=Zn?window:void 0,cy=Zn?window.document:void 0,u3=Zn?window.navigator:void 0;function je(...n){let t,s,o,l;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,o,l]=n,t=rn):[t,s,o,l]=n,!t)return yr;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},c=(d,y,f,h)=>(d.addEventListener(y,f,h),()=>d.removeEventListener(y,f,h)),p=Be(()=>[Mn(t),Xe(l)],([d,y])=>{a(),d&&r.push(...s.flatMap(f=>o.map(h=>c(d,f,h,y))))},{immediate:!0,flush:"post"}),u=()=>{p(),a()};return vt(u),u}let Uc=!1;function d3(n,t,s={}){const{window:o=rn,ignore:l=[],capture:r=!0,detectIframe:a=!1}=s;if(!o)return;j5&&!Uc&&(Uc=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",yr)));let c=!0;const p=f=>l.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(m=>m===f.target||f.composedPath().includes(m));{const m=Mn(h);return m&&(f.target===m||f.composedPath().includes(m))}}),d=[je(o,"click",f=>{const h=Mn(n);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(c=!p(f)),!c){c=!0;return}t(f)}},{passive:!0,capture:r}),je(o,"pointerdown",f=>{const h=Mn(n);h&&(c=!f.composedPath().includes(h)&&!p(f))},{passive:!0}),a&&je(o,"blur",f=>{var h;const m=Mn(n);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function y3(n){return typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):()=>!0}function f3(...n){let t,s,o={};n.length===3?(t=n[0],s=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(t=!0,s=n[0],o=n[1]):(t=n[0],s=n[1]):(t=!0,s=n[0]);const{target:l=rn,eventName:r="keydown",passive:a=!1,dedupe:c=!1}=o,p=y3(t);return je(l,r,d=>{d.repeat&&Xe(c)||p(d)&&s(d)},a)}function h3(n={}){var t;const{window:s=rn}=n,o=(t=n.document)!=null?t:s==null?void 0:s.document,l=M5(()=>null,()=>o==null?void 0:o.activeElement);return s&&(je(s,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),je(s,"focus",l.trigger,!0)),l}function m3(){const n=Z(!1);return gn()&&bt(()=>{n.value=!0}),n}function fr(n){const t=m3();return P(()=>(t.value,!!n()))}function g3(n,t={}){const{immediate:s=!0,window:o=rn}=t,l=Z(!1);let r=0,a=null;function c(d){if(!l.value||!o)return;const y=d-r;n({delta:y,timestamp:d}),r=d,a=o.requestAnimationFrame(c)}function p(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(c))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return s&&p(),vt(u),{isActive:zn(l),pause:u,resume:p}}function ls(n,t={}){const{window:s=rn}=t,o=fr(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=Z(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{o.value&&(a(),l=s.matchMedia(oy(n).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",c):l.addListener(c)))};return Cs(c),vt(()=>a()),r}const A3={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function _3(n,t={}){function s(c,p){let u=n[c];return p!=null&&(u=q5(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=rn}=t;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>ls(`(min-width: ${s(c)})`,t),a=Object.keys(n).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>r(p),enumerable:!0,configurable:!0}),c),{});return Object.assign(a,{greater(c){return ls(`(min-width: ${s(c,.1)})`,t)},greaterOrEqual:r,smaller(c){return ls(`(max-width: ${s(c,-.1)})`,t)},smallerOrEqual(c){return ls(`(max-width: ${s(c)})`,t)},between(c,p){return ls(`(min-width: ${s(c)}) and (max-width: ${s(p,-.1)})`,t)},isGreater(c){return l(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${s(c)})`)},isSmaller(c){return l(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${s(c)})`)},isInBetween(c,p){return l(`(min-width: ${s(c)}) and (max-width: ${s(p,-.1)})`)},current(){const c=Object.keys(n).map(p=>[p,r(p)]);return P(()=>c.filter(([,p])=>p.value).map(([p])=>p))}})}function v3(n={}){const{navigator:t=u3,read:s=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=n,a=["copy","cut"],c=fr(()=>t&&"clipboard"in t),p=P(()=>c.value||r),u=Z(""),d=Z(!1),y=X5(()=>d.value=!1,l);function f(){c.value?t.clipboard.readText().then(B=>{u.value=B}):u.value=_()}if(p.value&&s)for(const B of a)je(B,f);async function h(B=Xe(o)){p.value&&B!=null&&(c.value?await t.clipboard.writeText(B):m(B),u.value=B,d.value=!0,y.start())}function m(B){const C=document.createElement("textarea");C.value=B??"",C.style.position="absolute",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove()}function _(){var B,C,b;return(b=(C=(B=document==null?void 0:document.getSelection)==null?void 0:B.call(document))==null?void 0:C.toString())!=null?b:""}return{isSupported:p,text:u,copied:d,copy:h}}function B3(n){return JSON.parse(JSON.stringify(n))}const pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ul="__vueuse_ssr_handlers__",C3=b3();function b3(){return ul in pl||(pl[ul]=pl[ul]||{}),pl[ul]}function D3(n,t){return C3[n]||t}function w3(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var x3=Object.defineProperty,zc=Object.getOwnPropertySymbols,k3=Object.prototype.hasOwnProperty,E3=Object.prototype.propertyIsEnumerable,Yc=(n,t,s)=>t in n?x3(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Kc=(n,t)=>{for(var s in t||(t={}))k3.call(t,s)&&Yc(n,s,t[s]);if(zc)for(var s of zc(t))E3.call(t,s)&&Yc(n,s,t[s]);return n};const T3={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Zc="vueuse-storage";function F3(n,t,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:d,window:y=rn,eventFilter:f,onError:h=I=>{console.error(I)}}=o,m=(d?at:Z)(t);if(!s)try{s=D3("getDefaultStorage",()=>{var I;return(I=rn)==null?void 0:I.localStorage})()}catch(I){h(I)}if(!s)return m;const _=Xe(t),B=w3(_),C=(l=o.serializer)!=null?l:T3[B],{pause:b,resume:v}=p3(m,()=>w(m.value),{flush:r,deep:a,eventFilter:f});return y&&c&&(je(y,"storage",N),je(y,Zc,S)),N(),m;function w(I){try{if(I==null)s.removeItem(n);else{const G=C.write(I),se=s.getItem(n);se!==G&&(s.setItem(n,G),y&&y.dispatchEvent(new CustomEvent(Zc,{detail:{key:n,oldValue:se,newValue:G,storageArea:s}})))}}catch(G){h(G)}}function $(I){const G=I?I.newValue:s.getItem(n);if(G==null)return p&&_!==null&&s.setItem(n,C.write(_)),_;if(!I&&u){const se=C.read(G);return typeof u=="function"?u(se,_):B==="object"&&!Array.isArray(se)?Kc(Kc({},_),se):se}else return typeof G!="string"?G:C.read(G)}function S(I){N(I.detail)}function N(I){if(!(I&&I.storageArea!==s)){if(I&&I.key==null){m.value=_;return}if(!(I&&I.key!==n)){b();try{m.value=$(I)}catch(G){h(G)}finally{I?ln(v):v()}}}}}function S3(n){return ls("(prefers-color-scheme: dark)",n)}var $3=Object.defineProperty,I3=Object.defineProperties,P3=Object.getOwnPropertyDescriptors,Jc=Object.getOwnPropertySymbols,O3=Object.prototype.hasOwnProperty,M3=Object.prototype.propertyIsEnumerable,Qc=(n,t,s)=>t in n?$3(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,L3=(n,t)=>{for(var s in t||(t={}))O3.call(t,s)&&Qc(n,s,t[s]);if(Jc)for(var s of Jc(t))M3.call(t,s)&&Qc(n,s,t[s]);return n},R3=(n,t)=>I3(n,P3(t));function VS(n,t={}){var s,o;const{pointerTypes:l,preventDefault:r,stopPropagation:a,exact:c,onMove:p,onEnd:u,onStart:d,initialValue:y,axis:f="both",draggingElement:h=rn,handle:m=n}=t,_=Z((s=Xe(y))!=null?s:{x:0,y:0}),B=Z(),C=S=>l?l.includes(S.pointerType):!0,b=S=>{Xe(r)&&S.preventDefault(),Xe(a)&&S.stopPropagation()},v=S=>{if(!C(S)||Xe(c)&&S.target!==Xe(n))return;const N=Xe(n).getBoundingClientRect(),I={x:S.clientX-N.left,y:S.clientY-N.top};(d==null?void 0:d(I,S))!==!1&&(B.value=I,b(S))},w=S=>{if(!C(S)||!B.value)return;let{x:N,y:I}=_.value;(f==="x"||f==="both")&&(N=S.clientX-B.value.x),(f==="y"||f==="both")&&(I=S.clientY-B.value.y),_.value={x:N,y:I},p==null||p(_.value,S),b(S)},$=S=>{C(S)&&B.value&&(B.value=void 0,u==null||u(_.value,S),b(S))};if(Zn){const S={capture:(o=t.capture)!=null?o:!0};je(m,"pointerdown",v,S),je(h,"pointermove",w,S),je(h,"pointerup",$,S)}return R3(L3({},J5(_)),{position:_,isDragging:P(()=>!!B.value),style:P(()=>`left:${_.value.x}px;top:${_.value.y}px;`)})}var Xc=Object.getOwnPropertySymbols,j3=Object.prototype.hasOwnProperty,N3=Object.prototype.propertyIsEnumerable,H3=(n,t)=>{var s={};for(var o in n)j3.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Xc)for(var o of Xc(n))t.indexOf(o)<0&&N3.call(n,o)&&(s[o]=n[o]);return s};function V3(n,t,s={}){const o=s,{window:l=rn}=o,r=H3(o,["window"]);let a;const c=fr(()=>l&&"ResizeObserver"in l),p=()=>{a&&(a.disconnect(),a=void 0)},u=P(()=>Array.isArray(n)?n.map(f=>Mn(f)):[Mn(n)]),d=Be(u,f=>{if(p(),c.value&&l){a=new ResizeObserver(t);for(const h of f)h&&a.observe(h,r)}},{immediate:!0,flush:"post",deep:!0}),y=()=>{p(),d()};return vt(y),{isSupported:c,stop:y}}function q3(n,t={width:0,height:0},s={}){const{window:o=rn,box:l="content-box"}=s,r=P(()=>{var p,u;return(u=(p=Mn(n))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),a=Z(t.width),c=Z(t.height);return V3(n,([p])=>{const u=l==="border-box"?p.borderBoxSize:l==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(o&&r.value){const d=Mn(n);if(d){const y=o.getComputedStyle(d);a.value=parseFloat(y.width),c.value=parseFloat(y.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((y,{inlineSize:f})=>y+f,0),c.value=d.reduce((y,{blockSize:f})=>y+f,0)}else a.value=p.contentRect.width,c.value=p.contentRect.height},s),Be(()=>Mn(n),p=>{a.value=p?t.width:0,c.value=p?t.height:0}),{width:a,height:c}}const ep=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function W3(n,t={}){const{document:s=cy,autoExit:o=!1}=t,l=P(()=>{var C;return(C=Mn(n))!=null?C:s==null?void 0:s.querySelector("html")}),r=Z(!1),a=P(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(C=>s&&C in s||l.value&&C in l.value)),c=P(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(C=>s&&C in s||l.value&&C in l.value)),p=P(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(C=>s&&C in s||l.value&&C in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(C=>s&&C in s),d=fr(()=>l.value&&s&&a.value!==void 0&&c.value!==void 0&&p.value!==void 0),y=()=>u?(s==null?void 0:s[u])===l.value:!1,f=()=>{if(p.value){if(s&&s[p.value]!=null)return s[p.value];{const C=l.value;if((C==null?void 0:C[p.value])!=null)return!!C[p.value]}}return!1};async function h(){if(d.value){if(c.value)if((s==null?void 0:s[c.value])!=null)await s[c.value]();else{const C=l.value;(C==null?void 0:C[c.value])!=null&&await C[c.value]()}r.value=!1}}async function m(){if(!d.value)return;f()&&await h();const C=l.value;a.value&&(C==null?void 0:C[a.value])!=null&&(await C[a.value](),r.value=!0)}async function _(){await(r.value?h():m())}const B=()=>{const C=f();(!C||C&&y())&&(r.value=C)};return je(s,ep,B,!1),je(()=>Mn(l),ep,B,!1),o&&vt(h),{isSupported:d,isFullscreen:r,enter:m,exit:h,toggle:_}}function Jn(n,t,s={}){const{window:o=rn}=s;return F3(n,t,o==null?void 0:o.localStorage,s)}const G3={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function U3(n={}){const{reactive:t=!1,target:s=rn,aliasMap:o=G3,passive:l=!0,onEventFired:r=yr}=n,a=Ue(new Set),c={toJSON(){return{}},current:a},p=t?Ue(c):c,u=new Set,d=new Set;function y(_,B){_ in p&&(t?p[_]=B:p[_].value=B)}function f(){a.clear();for(const _ of d)y(_,!1)}function h(_,B){var C,b;const v=(C=_.key)==null?void 0:C.toLowerCase(),$=[(b=_.code)==null?void 0:b.toLowerCase(),v].filter(Boolean);v&&(B?a.add(v):a.delete(v));for(const S of $)d.add(S),y(S,B);v==="meta"&&!B?(u.forEach(S=>{a.delete(S),y(S,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&B&&[...a,...$].forEach(S=>u.add(S))}je(s,"keydown",_=>(h(_,!0),r(_)),{passive:l}),je(s,"keyup",_=>(h(_,!1),r(_)),{passive:l}),je("blur",f,{passive:!0}),je("focus",f,{passive:!0});const m=new Proxy(p,{get(_,B,C){if(typeof B!="string")return Reflect.get(_,B,C);if(B=B.toLowerCase(),B in o&&(B=o[B]),!(B in p))if(/[+_-]/.test(B)){const v=B.split(/[+_-]/g).map(w=>w.trim());p[B]=P(()=>v.every(w=>Xe(m[w])))}else p[B]=Z(!1);const b=Reflect.get(_,B,C);return t?Xe(b):b}});return m}const z3={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof Touch?null:[n.movementX,n.movementY]};function qS(n={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=rn,target:a=r,eventFilter:c}=n,p=Z(l.x),u=Z(l.y),d=Z(null),y=typeof t=="function"?t:z3[t],f=C=>{const b=y(C);b&&([p.value,u.value]=b,d.value="mouse")},h=C=>{if(C.touches.length>0){const b=y(C.touches[0]);b&&([p.value,u.value]=b,d.value="touch")}},m=()=>{p.value=l.x,u.value=l.y},_=c?C=>c(()=>f(C),{}):C=>f(C),B=c?C=>c(()=>h(C),{}):C=>h(C);return a&&(je(a,"mousemove",_,{passive:!0}),je(a,"dragover",_,{passive:!0}),s&&t!=="movement"&&(je(a,"touchstart",B,{passive:!0}),je(a,"touchmove",B,{passive:!0}),o&&je(a,"touchend",m,{passive:!0}))),{x:p,y:u,sourceType:d}}function Y3(n,t={}){const s=oy(n),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=t,c=Ue({x:0,y:0}),p=(S,N)=>{c.x=S,c.y=N},u=Ue({x:0,y:0}),d=(S,N)=>{u.x=S,u.y=N},y=P(()=>c.x-u.x),f=P(()=>c.y-u.y),{max:h,abs:m}=Math,_=P(()=>h(m(y.value),m(f.value))>=o),B=Z(!1),C=Z(!1),b=P(()=>_.value?m(y.value)>m(f.value)?y.value>0?"left":"right":f.value>0?"up":"down":"none"),v=S=>{var N,I,G;const se=S.buttons===0,de=S.buttons===1;return(G=(I=(N=t.pointerTypes)==null?void 0:N.includes(S.pointerType))!=null?I:se||de)!=null?G:!0},w=[je(n,"pointerdown",S=>{var N,I;if(!v(S))return;C.value=!0,(I=(N=s.value)==null?void 0:N.style)==null||I.setProperty("touch-action","none");const G=S.target;G==null||G.setPointerCapture(S.pointerId);const{clientX:se,clientY:de}=S;p(se,de),d(se,de),a==null||a(S)}),je(n,"pointermove",S=>{if(!v(S)||!C.value)return;const{clientX:N,clientY:I}=S;d(N,I),!B.value&&_.value&&(B.value=!0),B.value&&(l==null||l(S))}),je(n,"pointerup",S=>{var N,I;v(S)&&(B.value&&(r==null||r(S,b.value)),C.value=!1,B.value=!1,(I=(N=s.value)==null?void 0:N.style)==null||I.setProperty("touch-action","initial"))})],$=()=>w.forEach(S=>S());return{isSwiping:zn(B),direction:zn(b),posStart:zn(c),posEnd:zn(u),distanceX:y,distanceY:f,stop:$}}let K3=0;function WS(n,t={}){const s=Z(!1),{document:o=cy,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++K3}`}=t,c=Z(n);let p=()=>{};const u=()=>{if(!o)return;const y=o.getElementById(a)||o.createElement("style");y.isConnected||(y.type="text/css",y.id=a,t.media&&(y.media=t.media),o.head.appendChild(y)),!s.value&&(p=Be(c,f=>{y.textContent=f},{immediate:!0}),s.value=!0)},d=()=>{!o||!s.value||(p(),o.head.removeChild(o.getElementById(a)),s.value=!1)};return l&&!r&&ly(u),r||vt(d),{id:a,css:c,unload:d,load:u,isLoaded:zn(s)}}var Z3=Object.defineProperty,np=Object.getOwnPropertySymbols,J3=Object.prototype.hasOwnProperty,Q3=Object.prototype.propertyIsEnumerable,tp=(n,t,s)=>t in n?Z3(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,X3=(n,t)=>{for(var s in t||(t={}))J3.call(t,s)&&tp(n,s,t[s]);if(np)for(var s of np(t))Q3.call(t,s)&&tp(n,s,t[s]);return n};function GS(n={}){const{controls:t=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=n,a=Z(Ba()+s),c=()=>a.value=Ba()+s,p=r?()=>{c(),r(a.value)}:c,u=l==="requestAnimationFrame"?g3(p,{immediate:o}):Q5(p,l,{immediate:o});return t?X3({timestamp:a},u):a}function tt(n,t,s,o={}){var l,r,a;const{clone:c=!1,passive:p=!1,eventName:u,deep:d=!1,defaultValue:y,shouldEmit:f}=o,h=gn(),m=s||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((a=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let _=u;t||(t="modelValue"),_=u||_||`update:${t.toString()}`;const B=v=>c?typeof c=="function"?c(v):B3(v):v,C=()=>R5(n[t])?B(n[t]):y,b=v=>{f?f(v)&&m(_,v):m(_,v)};if(p){const v=C(),w=Z(v);return Be(()=>n[t],$=>w.value=B($)),Be(w,$=>{($!==n[t]||d)&&b($)},{deep:d}),w}else return P({get(){return C()},set(v){b(v)}})}function US({window:n=rn}={}){if(!n)return Z(!1);const t=Z(n.document.hasFocus());return je(n,"blur",()=>{t.value=!1}),je(n,"focus",()=>{t.value=!0}),t}function eA(n={}){const{window:t=rn,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=n,a=Z(s),c=Z(o),p=()=>{t&&(r?(a.value=t.innerWidth,c.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};if(p(),ly(p),je("resize",p,{passive:!0}),l){const u=ls("(orientation: portrait)");Be(u,()=>p())}return{width:a,height:c}}function nA(){return py().__VUE_DEVTOOLS_GLOBAL_HOOK__}function py(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const tA=typeof Proxy=="function",sA="devtools-plugin:setup",oA="plugin:settings:set";let ks,Ca;function lA(){var n;return ks!==void 0||(typeof window<"u"&&window.performance?(ks=!0,Ca=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(ks=!0,Ca=global.perf_hooks.performance):ks=!1),ks}function rA(){return lA()?Ca.now():Date.now()}class aA{constructor(t,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=s;const o={};if(t.settings)for(const a in t.settings){const c=t.settings[a];o[a]=c.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),c=JSON.parse(a);Object.assign(r,c)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return rA()}},s&&s.on(oA,(a,c)=>{a===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(a,c)=>this.target?this.target.on[c]:(...p)=>{this.onQueue.push({method:c,args:p})}}),this.proxiedTarget=new Proxy({},{get:(a,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...p)=>(this.targetQueue.push({method:c,args:p,resolve:()=>{}}),this.fallbacks[c](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:c,args:p,resolve:u})})})}async setRealTarget(t){this.target=t;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function iA(n,t){const s=n,o=py(),l=nA(),r=tA&&s.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(sA,n,t);else{const a=r?new aA(s,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ft=typeof window<"u";function cA(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Le=Object.assign;function Mr(n,t){const s={};for(const o in t){const l=t[o];s[o]=$n(l)?l.map(n):n(l)}return s}const go=()=>{},$n=Array.isArray;function $e(n){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(t))}const pA=/\/$/,uA=n=>n.replace(pA,"");function Lr(n,t,s="/"){let o,l={},r="",a="";const c=t.indexOf("#");let p=t.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(o=t.slice(0,p),r=t.slice(p+1,c>-1?c:t.length),l=n(r)),c>-1&&(o=o||t.slice(0,c),a=t.slice(c,t.length)),o=fA(o??t,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function dA(n,t){const s=t.query?n(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function sp(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function op(n,t,s){const o=t.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&Gt(t.matched[o],s.matched[l])&&uy(t.params,s.params)&&n(t.query)===n(s.query)&&t.hash===s.hash}function Gt(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function uy(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const s in n)if(!yA(n[s],t[s]))return!1;return!0}function yA(n,t){return $n(n)?lp(n,t):$n(t)?lp(t,n):n===t}function lp(n,t){return $n(t)?n.length===t.length&&n.every((s,o)=>s===t[o]):n.length===1&&n[0]===t}function fA(n,t){if(n.startsWith("/"))return n;if(!t.startsWith("/"))return $e(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${t}". It should look like "/${t}".`),n;if(!n)return t;const s=t.split("/"),o=n.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Io;(function(n){n.pop="pop",n.push="push"})(Io||(Io={}));var Ao;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ao||(Ao={}));function hA(n){if(!n)if(ft){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),uA(n)}const mA=/^[^#]+#/;function gA(n,t){return n.replace(mA,"#")+t}function AA(n,t){const s=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:t.behavior,left:o.left-s.left-(t.left||0),top:o.top-s.top-(t.top||0)}}const hr=()=>({left:window.pageXOffset,top:window.pageYOffset});function _A(n){let t;if("el"in n){const s=n.el,o=typeof s=="string"&&s.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const r=document.querySelector(n.el);if(o&&r){$e(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{$e(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l){$e(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}t=AA(l,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function rp(n,t){return(history.state?history.state.position-t:-1)+n}const ba=new Map;function vA(n,t){ba.set(n,t)}function BA(n){const t=ba.get(n);return ba.delete(n),t}let CA=()=>location.protocol+"//"+location.host;function dy(n,t){const{pathname:s,search:o,hash:l}=t,r=n.indexOf("#");if(r>-1){let c=l.includes(n.slice(r))?n.slice(r).length:1,p=l.slice(c);return p[0]!=="/"&&(p="/"+p),sp(p,"")}return sp(s,n)+o+l}function bA(n,t,s,o){let l=[],r=[],a=null;const c=({state:f})=>{const h=dy(n,location),m=s.value,_=t.value;let B=0;if(f){if(s.value=h,t.value=f,a&&a===m){a=null;return}B=_?f.position-_.position:0}else o(h);l.forEach(C=>{C(s.value,m,{delta:B,type:Io.pop,direction:B?B>0?Ao.forward:Ao.back:Ao.unknown})})};function p(){a=s.value}function u(f){l.push(f);const h=()=>{const m=l.indexOf(f);m>-1&&l.splice(m,1)};return r.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(Le({},f.state,{scroll:hr()}),"")}function y(){for(const f of r)f();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:p,listen:u,destroy:y}}function ap(n,t,s,o=!1,l=!1){return{back:n,current:t,forward:s,replaced:o,position:window.history.length,scroll:l?hr():null}}function DA(n){const{history:t,location:s}=window,o={value:dy(n,s)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(p,u,d){const y=n.indexOf("#"),f=y>-1?(s.host&&document.querySelector("base")?n:n.slice(y))+p:CA()+n+p;try{t[d?"replaceState":"pushState"](u,"",f),l.value=u}catch(h){$e("Error with push/replace State",h),s[d?"replace":"assign"](f)}}function a(p,u){const d=Le({},t.state,ap(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});r(p,d,!0),o.value=p}function c(p,u){const d=Le({},l.value,t.state,{forward:p,scroll:hr()});t.state||$e(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const y=Le({},ap(o.value,p,null),{position:d.position+1},u);r(p,y,!1),o.value=p}return{location:o,state:l,push:c,replace:a}}function wA(n){n=hA(n);const t=DA(n),s=bA(n,t.state,t.location,t.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=Le({location:"",base:n,go:o,createHref:gA.bind(null,n)},t,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function xA(n){return typeof n=="string"||n&&typeof n=="object"}function yy(n){return typeof n=="string"||typeof n=="symbol"}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fy=Symbol("navigation failure");var ip;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ip||(ip={}));const kA={[1]({location:n,currentLocation:t}){return`No match for
 ${JSON.stringify(n)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:n,to:t}){return`Redirected from "${n.fullPath}" to "${TA(t)}" via a navigation guard.`},[4]({from:n,to:t}){return`Navigation aborted from "${n.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:n,to:t}){return`Navigation cancelled from "${n.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:n,to:t}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function Vs(n,t){return Le(new Error(kA[n](t)),{type:n,[fy]:!0},t)}function ct(n,t){return n instanceof Error&&fy in n&&(t==null||!!(n.type&t))}const EA=["params","query","hash"];function TA(n){if(typeof n=="string")return n;if("path"in n)return n.path;const t={};for(const s of EA)s in n&&(t[s]=n[s]);return JSON.stringify(t,null,2)}const cp="[^/]+?",FA={sensitive:!1,strict:!1,start:!0,end:!0},SA=/[.+*?^${}()[\]/\\]/g;function $A(n,t){const s=Le({},FA,t),o=[];let l=s.start?"^":"";const r=[];for(const u of n){const d=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let y=0;y<u.length;y++){const f=u[y];let h=40+(s.sensitive?.25:0);if(f.type===0)y||(l+="/"),l+=f.value.replace(SA,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:_,optional:B,regexp:C}=f;r.push({name:m,repeatable:_,optional:B});const b=C||cp;if(b!==cp){h+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+w.message)}}let v=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;y||(v=B&&u.length<2?`(?:/${v})`:"/"+v),B&&(v+="?"),l+=v,h+=20,B&&(h+=-8),_&&(h+=-20),b===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function c(u){const d=u.match(a),y={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",m=r[f-1];y[m.name]=h&&m.repeatable?h.split("/"):h}return y}function p(u){let d="",y=!1;for(const f of n){(!y||!d.endsWith("/"))&&(d+="/"),y=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:B}=h,C=m in u?u[m]:"";if($n(C)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=$n(C)?C.join("/"):C;if(!b)if(B)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):y=!0);else throw new Error(`Missing required param "${m}"`);d+=b}}return d||"/"}return{re:a,score:o,keys:r,parse:c,stringify:p}}function IA(n,t){let s=0;for(;s<n.length&&s<t.length;){const o=t[s]-n[s];if(o)return o;s++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function PA(n,t){let s=0;const o=n.score,l=t.score;for(;s<o.length&&s<l.length;){const r=IA(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(pp(o))return 1;if(pp(l))return-1}return l.length-o.length}function pp(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const OA={type:0,value:""},MA=/[a-zA-Z0-9_]/;function LA(n){if(!n)return[[]];if(n==="/")return[[OA]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function t(h){throw new Error(`ERR (${s})/"${u}": ${h}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let c=0,p,u="",d="";function y(){u&&(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;c<n.length;){if(p=n[c++],p==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:p==="/"?(u&&y(),a()):p===":"?(y(),s=1):f();break;case 4:f(),s=o;break;case 1:p==="("?s=2:MA.test(p)?f():(y(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+p:s=3:d+=p;break;case 3:y(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,d="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${u}"`),y(),a(),l}function RA(n,t,s){const o=$A(LA(n.path),s);{const r=new Set;for(const a of o.keys)r.has(a.name)&&$e(`Found duplicated params with name "${a.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=Le(o,{record:n,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function jA(n,t){const s=[],o=new Map;t=yp({strict:!1,end:!0,sensitive:!1},t);function l(d){return o.get(d)}function r(d,y,f){const h=!f,m=NA(d);WA(m,y),m.aliasOf=f&&f.record;const _=yp(t,d),B=[m];if("alias"in d){const v=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of v)B.push(Le({},m,{components:f?f.record.components:m.components,path:w,aliasOf:f?f.record:m}))}let C,b;for(const v of B){const{path:w}=v;if(y&&w[0]!=="/"){const $=y.record.path,S=$[$.length-1]==="/"?"":"/";v.path=y.record.path+(w&&S+w)}if(v.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(C=RA(v,y,_),y&&w[0]==="/"&&GA(C,y),f?(f.alias.push(C),qA(f,C)):(b=b||C,b!==C&&b.alias.push(C),h&&d.name&&!dp(C)&&a(d.name)),m.children){const $=m.children;for(let S=0;S<$.length;S++)r($[S],C,f&&f.children[S])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&p(C)}return b?()=>{a(b)}:go}function a(d){if(yy(d)){const y=o.get(d);y&&(o.delete(d),s.splice(s.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=s.indexOf(d);y>-1&&(s.splice(y,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function c(){return s}function p(d){let y=0;for(;y<s.length&&PA(d,s[y])>=0&&(d.record.path!==s[y].record.path||!hy(d,s[y]));)y++;s.splice(y,0,d),d.record.name&&!dp(d)&&o.set(d.record.name,d)}function u(d,y){let f,h={},m,_;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw Vs(1,{location:d});{const b=Object.keys(d.params||{}).filter(v=>!f.keys.find(w=>w.name===v));b.length&&$e(`Discarded invalid param(s) "${b.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=f.record.name,h=Le(up(y.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),d.params&&up(d.params,f.keys.map(b=>b.name))),m=f.stringify(h)}else if("path"in d)m=d.path,m.startsWith("/")||$e(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=s.find(b=>b.re.test(m)),f&&(h=f.parse(m),_=f.record.name);else{if(f=y.name?o.get(y.name):s.find(b=>b.re.test(y.path)),!f)throw Vs(1,{location:d,currentLocation:y});_=f.record.name,h=Le({},y.params,d.params),m=f.stringify(h)}const B=[];let C=f;for(;C;)B.unshift(C.record),C=C.parent;return{name:_,path:m,params:h,matched:B,meta:VA(B)}}return n.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:c,getRecordMatcher:l}}function up(n,t){const s={};for(const o of t)o in n&&(s[o]=n[o]);return s}function NA(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:HA(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function HA(n){const t={},s=n.props||!1;if("component"in n)t.default=s;else for(const o in n.components)t[o]=typeof s=="boolean"?s:s[o];return t}function dp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function VA(n){return n.reduce((t,s)=>Le(t,s.meta),{})}function yp(n,t){const s={};for(const o in n)s[o]=o in t?t[o]:n[o];return s}function Da(n,t){return n.name===t.name&&n.optional===t.optional&&n.repeatable===t.repeatable}function qA(n,t){for(const s of n.keys)if(!s.optional&&!t.keys.find(Da.bind(null,s)))return $e(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`);for(const s of t.keys)if(!s.optional&&!n.keys.find(Da.bind(null,s)))return $e(`Alias "${t.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${s.name}"`)}function WA(n,t){t&&t.record.name&&!n.name&&!n.path&&$e(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function GA(n,t){for(const s of t.keys)if(!n.keys.find(Da.bind(null,s)))return $e(`Absolute path "${n.record.path}" must have the exact same param named "${s.name}" as its parent "${t.record.path}".`)}function hy(n,t){return t.children.some(s=>s===n||hy(n,s))}const my=/#/g,UA=/&/g,zA=/\//g,YA=/=/g,KA=/\?/g,gy=/\+/g,ZA=/%5B/g,JA=/%5D/g,Ay=/%5E/g,QA=/%60/g,_y=/%7B/g,XA=/%7C/g,vy=/%7D/g,e_=/%20/g;function xi(n){return encodeURI(""+n).replace(XA,"|").replace(ZA,"[").replace(JA,"]")}function n_(n){return xi(n).replace(_y,"{").replace(vy,"}").replace(Ay,"^")}function wa(n){return xi(n).replace(gy,"%2B").replace(e_,"+").replace(my,"%23").replace(UA,"%26").replace(QA,"`").replace(_y,"{").replace(vy,"}").replace(Ay,"^")}function t_(n){return wa(n).replace(YA,"%3D")}function s_(n){return xi(n).replace(my,"%23").replace(KA,"%3F")}function o_(n){return n==null?"":s_(n).replace(zA,"%2F")}function Po(n){try{return decodeURIComponent(""+n)}catch{$e(`Error decoding "${n}". Using original value`)}return""+n}function l_(n){const t={};if(n===""||n==="?")return t;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(gy," "),a=r.indexOf("="),c=Po(a<0?r:r.slice(0,a)),p=a<0?null:Po(r.slice(a+1));if(c in t){let u=t[c];$n(u)||(u=t[c]=[u]),u.push(p)}else t[c]=p}return t}function fp(n){let t="";for(let s in n){const o=n[s];if(s=t_(s),o==null){o!==void 0&&(t+=(t.length?"&":"")+s);continue}($n(o)?o.map(r=>r&&wa(r)):[o&&wa(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function r_(n){const t={};for(const s in n){const o=n[s];o!==void 0&&(t[s]=$n(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const a_=Symbol("router view location matched"),hp=Symbol("router view depth"),ki=Symbol("router"),By=Symbol("route location"),xa=Symbol("router view location");function eo(){let n=[];function t(o){return n.push(o),()=>{const l=n.indexOf(o);l>-1&&n.splice(l,1)}}function s(){n=[]}return{add:t,list:()=>n,reset:s}}function St(n,t,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,c)=>{const p=y=>{y===!1?c(Vs(4,{from:s,to:t})):y instanceof Error?c(y):xA(y)?c(Vs(2,{from:t,to:y})):(r&&o.enterCallbacks[l]===r&&typeof y=="function"&&r.push(y),a())},u=n.call(o&&o.instances[l],t,s,i_(p,t,s));let d=Promise.resolve(u);if(n.length<3&&(d=d.then(p)),n.length>2){const y=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>p._called?f:($e(y),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){$e(y),c(new Error("Invalid navigation guard"));return}}d.catch(y=>c(y))})}function i_(n,t,s){let o=0;return function(){o++===1&&$e(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function Rr(n,t,s,o){const l=[];for(const r of n){!r.components&&!r.children.length&&$e(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let c=r.components[a];{if(!c||typeof c!="object"&&typeof c!="function")throw $e(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){$e(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=c;c=()=>p}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,$e(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(c_(c)){const u=(c.__vccOpts||c)[t];u&&l.push(St(u,s,o,r,a))}else{let p=c();"catch"in p||($e(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=cA(u)?u.default:u;r.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&St(f,s,o,r,a)()}))}}}return l}function c_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function mp(n){const t=M(ki),s=M(By),o=P(()=>t.resolve(x(n.to))),l=P(()=>{const{matched:p}=o.value,{length:u}=p,d=p[u-1],y=s.matched;if(!d||!y.length)return-1;const f=y.findIndex(Gt.bind(null,d));if(f>-1)return f;const h=gp(p[u-2]);return u>1&&gp(d)===h&&y[y.length-1].path!==h?y.findIndex(Gt.bind(null,p[u-2])):f}),r=P(()=>l.value>-1&&y_(s.params,o.value.params)),a=P(()=>l.value>-1&&l.value===s.matched.length-1&&uy(s.params,o.value.params));function c(p={}){return d_(p)?t[x(n.replace)?"replace":"push"](x(n.to)).catch(go):Promise.resolve()}if(ft){const p=gn();if(p){const u={route:o.value,isActive:r.value,isExactActive:a.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),Cs(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:P(()=>o.value.href),isActive:r,isExactActive:a,navigate:c}}const p_=Se({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mp,setup(n,{slots:t}){const s=Ue(mp(n)),{options:o}=M(ki),l=P(()=>({[Ap(n.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Ap(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&t.default(s);return n.custom?r:nn("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),u_=p_;function d_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function y_(n,t){for(const s in t){const o=t[s],l=n[s];if(typeof o=="string"){if(o!==l)return!1}else if(!$n(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function gp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ap=(n,t,s)=>n??t??s,f_=Se({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:s}){m_();const o=M(xa),l=P(()=>n.route||o.value),r=M(hp,0),a=P(()=>{let u=x(r);const{matched:d}=l.value;let y;for(;(y=d[u])&&!y.components;)u++;return u}),c=P(()=>l.value.matched[a.value]);En(hp,P(()=>a.value+1)),En(a_,c),En(xa,l);const p=Z();return Be(()=>[p.value,c.value,n.name],([u,d,y],[f,h,m])=>{d&&(d.instances[y]=u,h&&h!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!Gt(d,h)||!f)&&(d.enterCallbacks[y]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=l.value,d=n.name,y=c.value,f=y&&y.components[d];if(!f)return _p(s.default,{Component:f,route:u});const h=y.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,B=nn(f,Le({},m,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(y.instances[d]=null)},ref:p}));if(ft&&B.ref){const C={depth:a.value,name:y.name,path:y.path,meta:y.meta};($n(B.ref)?B.ref.map(v=>v.i):[B.ref.i]).forEach(v=>{v.__vrv_devtools=C})}return _p(s.default,{Component:B,route:u})||B}}});function _p(n,t){if(!n)return null;const s=n(t);return s.length===1?s[0]:s}const h_=f_;function m_(){const n=gn(),t=n.parent&&n.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const s=t==="KeepAlive"?"keep-alive":"transition";$e(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function no(n,t){const s=Le({},n,{matched:n.matched.map(o=>w_(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:t,value:s}}}function dl(n){return{_custom:{display:n}}}let g_=0;function A_(n,t,s){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=g_++;iA({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,y)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:no(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:y})=>{if(y.__vrv_devtools){const f=y.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Cy})}$n(y.__vrl_devtools)&&(y.__devtoolsApi=l,y.__vrl_devtools.forEach(f=>{let h=wy,m="";f.isExactActive?(h=Dy,m="This is exactly active"):f.isActive&&(h=by,m="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),Be(t.currentRoute,()=>{p(),l.notifyComponentUpdate(),l.sendInspectorTree(c),l.sendInspectorState(c)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((d,y)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:y.meta.__navigationId}})});let a=0;t.beforeEach((d,y)=>{const f={guard:dl("beforeEach"),from:no(y,"Current Location during this navigation"),to:no(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),t.afterEach((d,y,f)=>{const h={guard:dl("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=dl("❌")):h.status=dl("✅"),h.from=no(y,"Current Location during this navigation"),h.to=no(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;l.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const d=u;let y=s.getRoutes().filter(f=>!f.parent);y.forEach(Ey),d.filter&&(y=y.filter(f=>ka(f,d.filter.toLowerCase()))),y.forEach(f=>ky(f,t.currentRoute.value)),d.rootNodes=y.map(xy)}let u;l.on.getInspectorTree(d=>{u=d,d.app===n&&d.inspectorId===c&&p()}),l.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=s.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:v_(f)})}}),l.sendInspectorTree(c),l.sendInspectorState(c)})}function __(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function v_(n){const{record:t}=n,s=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&s.push({editable:!1,key:"name",value:t.name}),s.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${__(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),t.redirect!=null&&s.push({editable:!1,key:"redirect",value:t.redirect}),n.alias.length&&s.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&s.push({editable:!1,key:"meta",value:n.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),s}const Cy=15485081,by=2450411,Dy=8702998,B_=2282478,wy=16486972,C_=6710886;function xy(n){const t=[],{record:s}=n;s.name!=null&&t.push({label:String(s.name),textColor:0,backgroundColor:B_}),s.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:wy}),n.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Cy}),n.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Dy}),n.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:by}),s.redirect&&t.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:C_});let o=s.__vd_id;return o==null&&(o=String(b_++),s.__vd_id=o),{id:o,label:s.path,tags:t,children:n.children.map(xy)}}let b_=0;const D_=/^\/(.*)\/([a-z]*)$/;function ky(n,t){const s=t.matched.length&&Gt(t.matched[t.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=s,s||(n.__vd_active=t.matched.some(o=>Gt(o,n.record))),n.children.forEach(o=>ky(o,t))}function Ey(n){n.__vd_match=!1,n.children.forEach(Ey)}function ka(n,t){const s=String(n.re).match(D_);if(n.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(t))return n.children.forEach(a=>ka(a,t)),n.record.path!=="/"||t==="/"?(n.__vd_match=n.re.test(t),!0):!1;const l=n.record.path.toLowerCase(),r=Po(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||n.record.name&&String(n.record.name).includes(t)?!0:n.children.some(a=>ka(a,t))}function w_(n,t){const s={};for(const o in n)t.includes(o)||(s[o]=n[o]);return s}function x_(n){const t=jA(n.routes,n),s=n.parseQuery||l_,o=n.stringifyQuery||fp,l=n.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=eo(),a=eo(),c=eo(),p=at(kt);let u=kt;ft&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Mr.bind(null,O=>""+O),y=Mr.bind(null,o_),f=Mr.bind(null,Po);function h(O,oe){let J,re;return yy(O)?(J=t.getRecordMatcher(O),re=oe):re=O,t.addRoute(re,J)}function m(O){const oe=t.getRecordMatcher(O);oe?t.removeRoute(oe):$e(`Cannot remove non-existent route "${String(O)}"`)}function _(){return t.getRoutes().map(O=>O.record)}function B(O){return!!t.getRecordMatcher(O)}function C(O,oe){if(oe=Le({},oe||p.value),typeof O=="string"){const fe=Lr(s,O,oe.path),g=t.resolve({path:fe.path},oe),D=l.createHref(fe.fullPath);return D.startsWith("//")?$e(`Location "${O}" resolved to "${D}". A resolved location cannot start with multiple slashes.`):g.matched.length||$e(`No match found for location with path "${O}"`),Le(fe,g,{params:f(g.params),hash:Po(fe.hash),redirectedFrom:void 0,href:D})}let J;if("path"in O)"params"in O&&!("name"in O)&&Object.keys(O.params).length&&$e(`Path "${O.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),J=Le({},O,{path:Lr(s,O.path,oe.path).path});else{const fe=Le({},O.params);for(const g in fe)fe[g]==null&&delete fe[g];J=Le({},O,{params:y(O.params)}),oe.params=y(oe.params)}const re=t.resolve(J,oe),ke=O.hash||"";ke&&!ke.startsWith("#")&&$e(`A \`hash\` should always start with the character "#". Replace "${ke}" with "#${ke}".`),re.params=d(f(re.params));const Fe=dA(o,Le({},O,{hash:n_(ke),path:re.path})),Ae=l.createHref(Fe);return Ae.startsWith("//")?$e(`Location "${O}" resolved to "${Ae}". A resolved location cannot start with multiple slashes.`):re.matched.length||$e(`No match found for location with path "${"path"in O?O.path:O}"`),Le({fullPath:Fe,hash:ke,query:o===fp?r_(O.query):O.query||{}},re,{redirectedFrom:void 0,href:Ae})}function b(O){return typeof O=="string"?Lr(s,O,p.value.path):Le({},O)}function v(O,oe){if(u!==O)return Vs(8,{from:oe,to:O})}function w(O){return N(O)}function $(O){return w(Le(b(O),{replace:!0}))}function S(O){const oe=O.matched[O.matched.length-1];if(oe&&oe.redirect){const{redirect:J}=oe;let re=typeof J=="function"?J(O):J;if(typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=b(re):{path:re},re.params={}),!("path"in re)&&!("name"in re))throw $e(`Invalid redirect found:
${JSON.stringify(re,null,2)}
 when navigating to "${O.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Le({query:O.query,hash:O.hash,params:"path"in re?{}:O.params},re)}}function N(O,oe){const J=u=C(O),re=p.value,ke=O.state,Fe=O.force,Ae=O.replace===!0,fe=S(J);if(fe)return N(Le(b(fe),{state:typeof fe=="object"?Le({},ke,fe.state):ke,force:Fe,replace:Ae}),oe||J);const g=J;g.redirectedFrom=oe;let D;return!Fe&&op(o,re,J)&&(D=Vs(16,{to:g,from:re}),Ne(re,re,!0,!1)),(D?Promise.resolve(D):G(g,re)).catch(T=>ct(T)?ct(T,2)?T:xe(T):X(T,g,re)).then(T=>{if(T){if(ct(T,2))return op(o,C(T.to),g)&&oe&&(oe._count=oe._count?oe._count+1:1)>10?($e(`Detected an infinite redirection in a navigation guard when going from "${re.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):N(Le({replace:Ae},b(T.to),{state:typeof T.to=="object"?Le({},ke,T.to.state):ke,force:Fe}),oe||g)}else T=de(g,re,!0,Ae,ke);return se(g,re,T),T})}function I(O,oe){const J=v(O,oe);return J?Promise.reject(J):Promise.resolve()}function G(O,oe){let J;const[re,ke,Fe]=k_(O,oe);J=Rr(re.reverse(),"beforeRouteLeave",O,oe);for(const fe of re)fe.leaveGuards.forEach(g=>{J.push(St(g,O,oe))});const Ae=I.bind(null,O,oe);return J.push(Ae),Es(J).then(()=>{J=[];for(const fe of r.list())J.push(St(fe,O,oe));return J.push(Ae),Es(J)}).then(()=>{J=Rr(ke,"beforeRouteUpdate",O,oe);for(const fe of ke)fe.updateGuards.forEach(g=>{J.push(St(g,O,oe))});return J.push(Ae),Es(J)}).then(()=>{J=[];for(const fe of O.matched)if(fe.beforeEnter&&!oe.matched.includes(fe))if($n(fe.beforeEnter))for(const g of fe.beforeEnter)J.push(St(g,O,oe));else J.push(St(fe.beforeEnter,O,oe));return J.push(Ae),Es(J)}).then(()=>(O.matched.forEach(fe=>fe.enterCallbacks={}),J=Rr(Fe,"beforeRouteEnter",O,oe),J.push(Ae),Es(J))).then(()=>{J=[];for(const fe of a.list())J.push(St(fe,O,oe));return J.push(Ae),Es(J)}).catch(fe=>ct(fe,8)?fe:Promise.reject(fe))}function se(O,oe,J){for(const re of c.list())re(O,oe,J)}function de(O,oe,J,re,ke){const Fe=v(O,oe);if(Fe)return Fe;const Ae=oe===kt,fe=ft?history.state:{};J&&(re||Ae?l.replace(O.fullPath,Le({scroll:Ae&&fe&&fe.scroll},ke)):l.push(O.fullPath,ke)),p.value=O,Ne(O,oe,J,Ae),xe()}let K;function De(){K||(K=l.listen((O,oe,J)=>{if(!Dt.listening)return;const re=C(O),ke=S(re);if(ke){N(Le(ke,{replace:!0}),re).catch(go);return}u=re;const Fe=p.value;ft&&vA(rp(Fe.fullPath,J.delta),hr()),G(re,Fe).catch(Ae=>ct(Ae,12)?Ae:ct(Ae,2)?(N(Ae.to,re).then(fe=>{ct(fe,20)&&!J.delta&&J.type===Io.pop&&l.go(-1,!1)}).catch(go),Promise.reject()):(J.delta&&l.go(-J.delta,!1),X(Ae,re,Fe))).then(Ae=>{Ae=Ae||de(re,Fe,!1),Ae&&(J.delta&&!ct(Ae,8)?l.go(-J.delta,!1):J.type===Io.pop&&ct(Ae,20)&&l.go(-1,!1)),se(re,Fe,Ae)}).catch(go)}))}let ve=eo(),we=eo(),Me;function X(O,oe,J){xe(O);const re=we.list();return re.length?re.forEach(ke=>ke(O,oe,J)):($e("uncaught error during route navigation:"),console.error(O)),Promise.reject(O)}function pe(){return Me&&p.value!==kt?Promise.resolve():new Promise((O,oe)=>{ve.add([O,oe])})}function xe(O){return Me||(Me=!O,De(),ve.list().forEach(([oe,J])=>O?J(O):oe()),ve.reset()),O}function Ne(O,oe,J,re){const{scrollBehavior:ke}=n;if(!ft||!ke)return Promise.resolve();const Fe=!J&&BA(rp(O.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return ln().then(()=>ke(O,oe,Fe)).then(Ae=>Ae&&_A(Ae)).catch(Ae=>X(Ae,O,oe))}const Dn=O=>l.go(O);let an;const An=new Set,Dt={currentRoute:p,listening:!0,addRoute:h,removeRoute:m,hasRoute:B,getRoutes:_,resolve:C,options:n,push:w,replace:$,go:Dn,back:()=>Dn(-1),forward:()=>Dn(1),beforeEach:r.add,beforeResolve:a.add,afterEach:c.add,onError:we.add,isReady:pe,install(O){const oe=this;O.component("RouterLink",u_),O.component("RouterView",h_),O.config.globalProperties.$router=oe,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>x(p)}),ft&&!an&&p.value===kt&&(an=!0,w(l.location).catch(ke=>{$e("Unexpected error when starting the router:",ke)}));const J={};for(const ke in kt)J[ke]=P(()=>p.value[ke]);O.provide(ki,oe),O.provide(By,Ue(J)),O.provide(xa,p);const re=O.unmount;An.add(O),O.unmount=function(){An.delete(O),An.size<1&&(u=kt,K&&K(),K=null,p.value=kt,an=!1,Me=!1),re()},ft&&A_(O,oe,t)}};return Dt}function Es(n){return n.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function k_(n,t){const s=[],o=[],l=[],r=Math.max(t.matched.length,n.matched.length);for(let a=0;a<r;a++){const c=t.matched[a];c&&(n.matched.find(u=>Gt(u,c))?o.push(c):s.push(c));const p=n.matched[a];p&&(t.matched.find(u=>Gt(u,p))||l.push(p))}return[s,o,l]}const jr=Z(!1),_o=Z(!1),Is=Z(!1),E_=Z(!0),Ea=_3({xs:460,...A3}),gs=eA(),Ty=U3(),T_=P(()=>gs.height.value-gs.width.value/Lt>180),Fy=W3(Zn?document.body:null),Nt=h3(),F_=P(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=Nt.value)==null?void 0:n.tagName)||"")||((t=Nt.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),S_=P(()=>{var n;return["BUTTON","A"].includes(((n=Nt.value)==null?void 0:n.tagName)||"")});Jn("slidev-camera","default");Jn("slidev-mic","default");const Cl=Jn("slidev-scale",0),yn=Jn("slidev-show-overview",!1),Nr=Jn("slidev-presenter-cursor",!0),vp=Jn("slidev-show-editor",!1);Jn("slidev-editor-width",Zn?window.innerWidth*.4:100);const Sy=ry(yn);function Bp(n,t,s,o=l=>l){return n*o(.5-t*(.5-s))}function $_(n){return[-n[0],-n[1]]}function Gn(n,t){return[n[0]+t[0],n[1]+t[1]]}function On(n,t){return[n[0]-t[0],n[1]-t[1]]}function Wn(n,t){return[n[0]*t,n[1]*t]}function I_(n,t){return[n[0]/t,n[1]/t]}function to(n){return[n[1],-n[0]]}function Cp(n,t){return n[0]*t[0]+n[1]*t[1]}function P_(n,t){return n[0]===t[0]&&n[1]===t[1]}function O_(n){return Math.hypot(n[0],n[1])}function M_(n){return n[0]*n[0]+n[1]*n[1]}function bp(n,t){return M_(On(n,t))}function $y(n){return I_(n,O_(n))}function L_(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function so(n,t,s){let o=Math.sin(s),l=Math.cos(s),r=n[0]-t[0],a=n[1]-t[1],c=r*l-a*o,p=r*o+a*l;return[c+t[0],p+t[1]]}function Ta(n,t,s){return Gn(n,Wn(On(t,n),s))}function Dp(n,t,s){return Gn(n,Wn(t,s))}var{min:Ts,PI:R_}=Math,wp=.275,oo=R_+1e-4;function j_(n,t={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=X=>X,start:c={},end:p={},last:u=!1}=t,{cap:d=!0,easing:y=X=>X*(2-X)}=c,{cap:f=!0,easing:h=X=>--X*X*X+1}=p;if(n.length===0||s<=0)return[];let m=n[n.length-1].runningLength,_=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,B=p.taper===!1?0:p.taper===!0?Math.max(s,m):p.taper,C=Math.pow(s*o,2),b=[],v=[],w=n.slice(0,10).reduce((X,pe)=>{let xe=pe.pressure;if(r){let Ne=Ts(1,pe.distance/s),Dn=Ts(1,1-Ne);xe=Ts(1,X+(Dn-X)*(Ne*wp))}return(X+xe)/2},n[0].pressure),$=Bp(s,l,n[n.length-1].pressure,a),S,N=n[0].vector,I=n[0].point,G=I,se=I,de=G,K=!1;for(let X=0;X<n.length;X++){let{pressure:pe}=n[X],{point:xe,vector:Ne,distance:Dn,runningLength:an}=n[X];if(X<n.length-1&&m-an<3)continue;if(l){if(r){let Fe=Ts(1,Dn/s),Ae=Ts(1,1-Fe);pe=Ts(1,w+(Ae-w)*(Fe*wp))}$=Bp(s,l,pe,a)}else $=s/2;S===void 0&&(S=$);let An=an<_?y(an/_):1,Dt=m-an<B?h((m-an)/B):1;$=Math.max(.01,$*Math.min(An,Dt));let O=(X<n.length-1?n[X+1]:n[X]).vector,oe=X<n.length-1?Cp(Ne,O):1,J=Cp(Ne,N)<0&&!K,re=oe!==null&&oe<0;if(J||re){let Fe=Wn(to(N),$);for(let Ae=1/13,fe=0;fe<=1;fe+=Ae)se=so(On(xe,Fe),xe,oo*fe),b.push(se),de=so(Gn(xe,Fe),xe,oo*-fe),v.push(de);I=se,G=de,re&&(K=!0);continue}if(K=!1,X===n.length-1){let Fe=Wn(to(Ne),$);b.push(On(xe,Fe)),v.push(Gn(xe,Fe));continue}let ke=Wn(to(Ta(O,Ne,oe)),$);se=On(xe,ke),(X<=1||bp(I,se)>C)&&(b.push(se),I=se),de=Gn(xe,ke),(X<=1||bp(G,de)>C)&&(v.push(de),G=de),w=pe,N=Ne}let De=n[0].point.slice(0,2),ve=n.length>1?n[n.length-1].point.slice(0,2):Gn(n[0].point,[1,1]),we=[],Me=[];if(n.length===1){if(!(_||B)||u){let X=Dp(De,$y(to(On(De,ve))),-(S||$)),pe=[];for(let xe=1/13,Ne=xe;Ne<=1;Ne+=xe)pe.push(so(X,De,oo*2*Ne));return pe}}else{if(!(_||B&&n.length===1))if(d)for(let pe=1/13,xe=pe;xe<=1;xe+=pe){let Ne=so(v[0],De,oo*xe);we.push(Ne)}else{let pe=On(b[0],v[0]),xe=Wn(pe,.5),Ne=Wn(pe,.51);we.push(On(De,xe),On(De,Ne),Gn(De,Ne),Gn(De,xe))}let X=to($_(n[n.length-1].vector));if(B||_&&n.length===1)Me.push(ve);else if(f){let pe=Dp(ve,X,$);for(let xe=1/29,Ne=xe;Ne<1;Ne+=xe)Me.push(so(pe,ve,oo*3*Ne))}else Me.push(Gn(ve,Wn(X,$)),Gn(ve,Wn(X,$*.99)),On(ve,Wn(X,$*.99)),On(ve,Wn(X,$)))}return b.concat(Me,v.reverse(),we)}function N_(n,t={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(n.length===0)return[];let a=.15+(1-o)*.85,c=Array.isArray(n[0])?n:n.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let m=1;m<5;m++)c.push(Ta(c[0],h,m/4))}c.length===1&&(c=[...c,[...Gn(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,y=p[0],f=c.length-1;for(let h=1;h<c.length;h++){let m=r&&h===f?c[h].slice(0,2):Ta(y.point,c[h],a);if(P_(y.point,m))continue;let _=L_(m,y.point);if(d+=_,h<f&&!u){if(d<l)continue;u=!0}y={point:m,pressure:c[h][2]>=0?c[h][2]:.5,vector:$y(On(y.point,m)),distance:_,runningLength:d},p.push(y)}return p[0].vector=((s=p[1])==null?void 0:s.vector)||[0,0],p}function H_(n,t={}){return j_(N_(n,t),t)}var V_=()=>({events:{},emit(n,...t){let s=this.events[n]||[];for(let o=0,l=s.length;o<l;o++)s[o](...t)},on(n,t){var s;return(s=this.events[n])!=null&&s.push(t)||(this.events[n]=[t]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(l=>t!==l)}}});function Vl(n,t){return n-t}function q_(n){return n<0?-1:1}function ql(n){return[Math.abs(n),q_(n)]}function Iy(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var W_=2,ht=W_,Ws=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var t;const s=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-l.left)*o,y:(n.pageY-l.top)*o,pressure:n.pressure}}else{const l=this.drauu.svgPoint;l.x=n.clientX,l.y=n.clientY;const r=l.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*o,y:r.y*o,pressure:n.pressure}}}createElement(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg",n),o=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",o.fill??"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(ht))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},G_=class extends Ws{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=H_(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((o,[l,r],a,c)=>{const[p,u]=c[(a+1)%c.length];return o.push(l,r,(l+p)/2,(r+u)/2),o},["M",...t[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},U_=class extends Ws{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=ql(n.x-this.start.x),[o,l]=ql(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Vl),[c,p]=[this.start.y,this.start.y+o*l].sort(Vl);this.attr("cx",(r+a)/2),this.attr("cy",(c+p)/2),this.attr("rx",(a-r)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function Py(n,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var z_=class extends Ws{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=Iy(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Py(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:s}=n;if(this.shiftPressed){const o=n.x-this.start.x,l=n.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,s=this.start.y+l):(t=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},Y_=class extends Ws{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,s]=ql(n.x-this.start.x),[o,l]=ql(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+t*s].sort(Vl),[c,p]=[this.start.y,this.start.y+o*l].sort(Vl);this.attr("x",r),this.attr("y",c),this.attr("width",a-r),this.attr("height",p-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function K_(n,t){const s=n.x-t.x,o=n.y-t.y;return s*s+o*o}function Z_(n,t,s){let o=t.x,l=t.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const c=((n.x-o)*r+(n.y-l)*a)/(r*r+a*a);c>1?(o=s.x,l=s.y):c>0&&(o+=r*c,l+=a*c)}return r=n.x-o,a=n.y-l,r*r+a*a}function J_(n,t){let s=n[0];const o=[s];let l;for(let r=1,a=n.length;r<a;r++)l=n[r],K_(l,s)>t&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function Fa(n,t,s,o,l){let r=o,a=0;for(let c=t+1;c<s;c++){const p=Z_(n[c],n[t],n[s]);p>r&&(a=c,r=p)}r>o&&(a-t>1&&Fa(n,t,a,o,l),l.push(n[a]),s-a>1&&Fa(n,a,s,o,l))}function Q_(n,t){const s=n.length-1,o=[n[0]];return Fa(n,0,s,t,o),o.push(n[s]),o}function xp(n,t,s=!1){if(n.length<=2)return n;const o=t!==void 0?t*t:1;return n=s?n:J_(n,o),n=Q_(n,o),n}var X_=class extends Ws{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=Iy();const t=Py(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=xp(this.points,1,!0),this.count=0),this.attr("d",Ep(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Ep(xp(this.points,1,!0))),!n.getTotalLength()))}};function ev(n,t){const s=t.x-n.x,o=t.y-n.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function kp(n,t,s,o){const l=t||n,r=s||n,a=.2,c=ev(l,r),p=c.angle+(o?Math.PI:0),u=c.length*a,d=n.x+Math.cos(p)*u,y=n.y+Math.sin(p)*u;return{x:d,y}}function nv(n,t,s){const o=kp(s[t-1],s[t-2],n),l=kp(n,s[t-1],s[t+1],!0);return`C ${o.x.toFixed(ht)},${o.y.toFixed(ht)} ${l.x.toFixed(ht)},${l.y.toFixed(ht)} ${n.x.toFixed(ht)},${n.y.toFixed(ht)}`}function Ep(n){return n.reduce((t,s,o,l)=>o===0?`M ${s.x.toFixed(ht)},${s.y.toFixed(ht)}`:`${t} ${nv(s,o,l)}`,"")}var tv=class extends Ws{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=r.getPointAtLength(a*c/this.pathSubFactor),u=r.getPointAtLength(a*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:o||r})}}else r.children&&t(r.children,r)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!n.includes(s))),n.length>0}lineLineIntersect(n,t){const s=n.x1,o=n.x2,l=t.x1,r=t.x2,a=n.y1,c=n.y2,p=t.y1,u=t.y2,d=(s-o)*(p-u)-(a-c)*(l-r),y=(s*c-a*o)*(l-r)-(s-o)*(l*u-p*r),f=(s*c-a*o)*(p-u)-(a-c)*(l*u-p*r),h=(m,_,B)=>m>=_&&m<=B?!0:m>=B&&m<=_;if(d===0)return!1;{const m={x:y/d,y:f/d};return h(m.x,s,o)&&h(m.y,a,c)&&h(m.x,l,r)&&h(m.y,p,u)}}};function sv(n){return{draw:new X_(n),stylus:new G_(n),line:new z_(n),rectangle:new Y_(n),ellipse:new U_(n),eraseLine:new tv(n)}}var ov=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=V_(),this._models=sv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function lv(n){return new ov(n)}const Sa=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],st=Jn("slidev-drawing-enabled",!1),zS=Jn("slidev-drawing-pinned",!1),rv=Z(!1),av=Z(!1),iv=Z(!1),Oo=Z(!1),cs=L5(Jn("slidev-drawing-brush",{color:Sa[0],size:4,mode:"stylus"})),Tp=Z("stylus"),Oy=P(()=>Ie.drawings.syncAll||vn.value);let Mo=!1;const lo=P({get(){return Tp.value},set(n){Tp.value=n,n==="arrow"?(cs.mode="line",cs.arrowEnd=!0):(cs.mode=n,cs.arrowEnd=!1)}}),cv=Ue({brush:cs,acceptsInputTypes:P(()=>st.value&&(!Ie.drawings.presenterOnly||vn.value)?void 0:["pen"]),coordinateTransform:!1}),mn=tr(lv(cv));function pv(){mn.clear(),Oy.value&&ty(Ke.value,"")}function Ei(){var n;av.value=mn.canRedo(),rv.value=mn.canUndo(),iv.value=!!((n=mn.el)!=null&&n.children.length)}function uv(n){Mo=!0;const t=Nl[n||Ke.value];t!=null?mn.load(t):mn.clear(),Ei(),Mo=!1}mn.on("changed",()=>{if(Ei(),!Mo){const n=mn.dump(),t=Ke.value;(Nl[t]||"")!==n&&Oy.value&&ty(t,mn.dump())}});I5(n=>{Mo=!0,n[Ke.value]!=null&&mn.load(n[Ke.value]||""),Mo=!1,Ei()});ln(()=>{Be(Ke,()=>{mn.mounted&&uv()},{immediate:!0})});mn.on("start",()=>Oo.value=!0);mn.on("end",()=>Oo.value=!1);window.addEventListener("keydown",n=>{if(!st.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let s=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?mn.redo():mn.undo():n.code==="Escape"?st.value=!1:n.code==="KeyL"&&t?lo.value="line":n.code==="KeyA"&&t?lo.value="arrow":n.code==="KeyS"&&t?lo.value="stylus":n.code==="KeyR"&&t?lo.value="rectangle":n.code==="KeyE"&&t?lo.value="ellipse":n.code==="KeyC"&&t?pv():n.code.startsWith("Digit")&&t&&+n.code[5]<=Sa.length?cs.color=Sa[+n.code[5]-1]:s=!1,s&&(n.preventDefault(),n.stopPropagation())},!1);function Qe(...n){return P(()=>n.every(t=>Xe(t)))}function xn(n){return P(()=>!Xe(n))}const Fp=S3(),Hr=Jn("slidev-color-schema","auto"),$a=P(()=>Ie.colorSchema!=="auto"),Ti=P({get(){return $a.value?Ie.colorSchema==="dark":Hr.value==="auto"?Fp.value:Hr.value==="dark"},set(n){$a.value||(Hr.value=n===Fp.value?"auto":n?"dark":"light")}}),My=ry(Ti);Zn&&Be(Ti,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const bl=Z(1),Dl=P(()=>Je.length-1),Fn=Z(0),Fi=Z(0);function dv(){Fn.value>bl.value&&(Fn.value-=1)}function yv(){Fn.value<Dl.value&&(Fn.value+=1)}function fv(){if(Fn.value>bl.value){let n=Fn.value-Fi.value;n<bl.value&&(n=bl.value),Fn.value=n}}function hv(){if(Fn.value<Dl.value){let n=Fn.value+Fi.value;n>Dl.value&&(n=Dl.value),Fn.value=n}}function mv(){const{escape:n,space:t,shift:s,left:o,right:l,up:r,down:a,enter:c,d:p,g:u,o:d}=Ty;let y=[{name:"next_space",key:Qe(t,xn(s)),fn:Ht,autoRepeat:!0},{name:"prev_space",key:Qe(t,s),fn:Vt,autoRepeat:!0},{name:"next_right",key:Qe(l,xn(s),xn(yn)),fn:Ht,autoRepeat:!0},{name:"prev_left",key:Qe(o,xn(s),xn(yn)),fn:Vt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ht,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Vt,autoRepeat:!0},{name:"next_down",key:Qe(a,xn(yn)),fn:Ro,autoRepeat:!0},{name:"prev_up",key:Qe(r,xn(yn)),fn:()=>jo(!1),autoRepeat:!0},{name:"next_shift",key:Qe(l,s),fn:Ro,autoRepeat:!0},{name:"prev_shift",key:Qe(o,s),fn:()=>jo(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(p,xn(st)),fn:My},{name:"toggle_overview",key:Qe(d,xn(st)),fn:Sy},{name:"hide_overview",key:Qe(n,xn(st)),fn:()=>yn.value=!1},{name:"goto",key:Qe(u,xn(st)),fn:()=>Is.value=!Is.value},{name:"next_overview",key:Qe(l,yn),fn:yv},{name:"prev_overview",key:Qe(o,yn),fn:dv},{name:"up_overview",key:Qe(r,yn),fn:fv},{name:"down_overview",key:Qe(a,yn),fn:hv},{name:"goto_from_overview",key:Qe(c,yn),fn:()=>{qs(Fn.value),yn.value=!1}}];const f=new Set(y.map(m=>m.name));if(y.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return y}const Ly=Qe(xn(F_),xn(S_),E_);function gv(n,t,s=!1){typeof n=="string"&&(n=Ty[n]);const o=Qe(n,Ly);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),t()};return Be(o,a,{flush:"sync"})}function Av(n,t){return f3(n,s=>{Ly.value&&(s.repeat||t())})}function _v(){const n=mv();new Map(n.map(s=>[s.key,s])).forEach(s=>{s.fn&&gv(s.key,s.fn,s.autoRepeat)}),Av("f",()=>Fy.toggle())}const vv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bv=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Cv=[Bv];function bv(n,t){return A(),k("svg",vv,Cv)}const Dv={name:"carbon-close",render:bv};function Si(n,t=""){var l,r;const s=["slidev-page",t],o=(r=(l=n==null?void 0:n.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&s.push(`slidev-page-${o}`),s.filter(Boolean).join(" ")}const wv=Se({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;M(V);const s=Z(),o=q3(s),l=P(()=>t.width?t.width:o.width.value),r=P(()=>t.width?t.width/Lt:o.height.value);t.width&&Cs(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=P(()=>l.value/r.value),c=P(()=>t.scale&&!gt.value?t.scale:a.value<Lt?l.value/Rt:r.value*Lt/Rt),p=P(()=>({height:`${Di}px`,width:`${Rt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=P(()=>({"select-none":!Ie.selectable,"slidev-code-line-numbers":Ie.lineNumbers}));return En(Qd,c),(d,y)=>(A(),k("div",{id:"slide-container",ref_key:"root",ref:s,class:Ge(x(u))},[e("div",{id:"slide-content",style:tn(x(p))},[Sn(d.$slots,"default")],4),Sn(d.$slots,"controls")],2))}});const q=(n,t)=>{const s=n.__vccOpts||n;for(const[o,l]of t)s[o]=l;return s},Ry=q(wv,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/SlideContainer.vue"]]),$i=Se({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const s=tt(n,"clicks",t),o=tt(n,"clicksElements",t),l=tt(n,"clicksDisabled",t),r=tt(n,"clicksOrderMap",t);o.value.length=0,En(A5,n.route),En(_5,n.context),En(ho,s),En(mo,l),En(os,o),En(_a,r)},render(){var n,t;return this.$props.is?nn(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),xv=["innerHTML"],kv=Se({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return M(V),(t,s)=>x(Nl)[n.page]?(A(),k("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:x(Nl)[n.page]},null,8,xv)):Ce("v-if",!0)}}),jy=q(kv,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ev=Object.freeze(Object.defineProperty({__proto__:null,default:jy},Symbol.toStringTag,{value:"Module"})),Tv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Fv=["onClick"],Sv=Se({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:t}){const s=n;M(V);const o=tt(s,"modelValue",t);function l(){o.value=!1}function r(h){qs(h),l()}function a(h){return h===Fn.value}const c=Ea.smaller("xs"),p=Ea.smaller("sm"),u=4*16*2,d=2*16,y=P(()=>c.value?gs.width.value-u:p.value?(gs.width.value-u-d)/2:300),f=P(()=>Math.floor((gs.width.value-u)/(y.value+d)));return Cs(()=>{Fn.value=Ke.value,Fi.value=f.value}),(h,m)=>{const _=Dv;return A(),k(Pe,null,[Ai(e("div",Tv,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${x(y)}px,1fr))`)},[(A(!0),k(Pe,null,bs(x(Je).slice(0,-1),(B,C)=>(A(),k("div",{key:B.path,class:"relative"},[e("div",{class:Ge(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(C+1),"border-gray-400":!a(C+1)}]),style:tn(x(wi)),onClick:b=>r(+B.path)},[(A(),R(Ry,{key:B.path,width:x(y),"clicks-disabled":!0,class:"pointer-events-none"},{default:E(()=>[B!=null&&B.component?(A(),R(x($i),{key:0,is:B.component,"clicks-disabled":!0,class:Ge(x(Si)(B)),route:B,context:"overview"},null,8,["is","class","route"])):Ce("v-if",!0),F(jy,{page:+B.path},null,8,["page"])]),_:2},1032,["width"]))],14,Fv),e("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${x(y)+5}px`)},lt(C+1),5)]))),128))],4)],512),[[Hd,x(o)]]),x(o)?(A(),k("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[F(_)])):Ce("v-if",!0)],64)}}});const $v=q(Sv,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Iv="/rust-slidev/assets/logo-b72bde5d.png",Pv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Ov=Se({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const s=n;M(V);const o=tt(s,"modelValue",t);function l(){o.value=!1}return(r,a)=>(A(),R(ud,null,[x(o)?(A(),k("div",Pv,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=c=>l())}),e("div",{class:Ge(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[Sn(r.$slots,"default")],2)])):Ce("v-if",!0)],1024))}}),Mv=q(Ov,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/Modal.vue"]]),Lv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Rv=["innerHTML"],jv=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Iv,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),i("dev ")])])],-1),Nv=Se({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const s=n;M(V);const o=tt(s,"modelValue",t),l=P(()=>typeof Ie.info=="string");return(r,a)=>(A(),R(Mv,{modelValue:x(o),"onUpdate:modelValue":a[0]||(a[0]=c=>Oe(o)?o.value=c:null),class:"px-6 py-4"},{default:E(()=>[e("div",Lv,[x(l)?(A(),k("div",{key:0,class:"mb-4",innerHTML:x(Ie).info},null,8,Rv)):Ce("v-if",!0),jv])]),_:1},8,["modelValue"]))}});const Hv=q(Nv,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function Bt(n){return Array.isArray?Array.isArray(n):Vy(n)==="[object Array]"}const Vv=1/0;function qv(n){if(typeof n=="string")return n;let t=n+"";return t=="0"&&1/n==-Vv?"-0":t}function Wv(n){return n==null?"":qv(n)}function ot(n){return typeof n=="string"}function Ny(n){return typeof n=="number"}function Gv(n){return n===!0||n===!1||Uv(n)&&Vy(n)=="[object Boolean]"}function Hy(n){return typeof n=="object"}function Uv(n){return Hy(n)&&n!==null}function Tn(n){return n!=null}function Vr(n){return!n.trim().length}function Vy(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const zv="Incorrect 'index' type",Yv=n=>`Invalid value for key ${n}`,Kv=n=>`Pattern length exceeds max of ${n}.`,Zv=n=>`Missing ${n} property in key`,Jv=n=>`Property 'weight' in key '${n}' must be a positive integer`,Sp=Object.prototype.hasOwnProperty;class Qv{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(o=>{let l=qy(o);s+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,s+=l.weight}),this._keys.forEach(o=>{o.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function qy(n){let t=null,s=null,o=null,l=1,r=null;if(ot(n)||Bt(n))o=n,t=$p(n),s=Ia(n);else{if(!Sp.call(n,"name"))throw new Error(Zv("name"));const a=n.name;if(o=a,Sp.call(n,"weight")&&(l=n.weight,l<=0))throw new Error(Jv(a));t=$p(a),s=Ia(a),r=n.getFn}return{path:t,id:s,weight:l,src:o,getFn:r}}function $p(n){return Bt(n)?n:n.split(".")}function Ia(n){return Bt(n)?n.join("."):n}function Xv(n,t){let s=[],o=!1;const l=(r,a,c)=>{if(Tn(r))if(!a[c])s.push(r);else{let p=a[c];const u=r[p];if(!Tn(u))return;if(c===a.length-1&&(ot(u)||Ny(u)||Gv(u)))s.push(Wv(u));else if(Bt(u)){o=!0;for(let d=0,y=u.length;d<y;d+=1)l(u[d],a,c+1)}else a.length&&l(u,a,c+1)}};return l(n,ot(t)?t.split("."):t,0),o?s:s[0]}const e1={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},n1={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,t)=>n.score===t.score?n.idx<t.idx?-1:1:n.score<t.score?-1:1},t1={location:0,threshold:.6,distance:100},s1={useExtendedSearch:!1,getFn:Xv,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var me={...n1,...e1,...t1,...s1};const o1=/[^ ]+/g;function l1(n=1,t=3){const s=new Map,o=Math.pow(10,t);return{get(l){const r=l.match(o1).length;if(s.has(r))return s.get(r);const a=1/Math.pow(r,.5*n),c=parseFloat(Math.round(a*o)/o);return s.set(r,c),c},clear(){s.clear()}}}class Ii{constructor({getFn:t=me.getFn,fieldNormWeight:s=me.fieldNormWeight}={}){this.norm=l1(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ot(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();ot(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!Tn(t)||Vr(t))return;let o={v:t,i:s,n:this.norm.get(t)};this.records.push(o)}_addObject(t,s){let o={i:s,$:{}};this.keys.forEach((l,r)=>{let a=l.getFn?l.getFn(t):this.getFn(t,l.path);if(Tn(a)){if(Bt(a)){let c=[];const p=[{nestedArrIndex:-1,value:a}];for(;p.length;){const{nestedArrIndex:u,value:d}=p.pop();if(Tn(d))if(ot(d)&&!Vr(d)){let y={v:d,i:u,n:this.norm.get(d)};c.push(y)}else Bt(d)&&d.forEach((y,f)=>{p.push({nestedArrIndex:f,value:y})})}o.$[r]=c}else if(ot(a)&&!Vr(a)){let c={v:a,n:this.norm.get(a)};o.$[r]=c}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Wy(n,t,{getFn:s=me.getFn,fieldNormWeight:o=me.fieldNormWeight}={}){const l=new Ii({getFn:s,fieldNormWeight:o});return l.setKeys(n.map(qy)),l.setSources(t),l.create(),l}function r1(n,{getFn:t=me.getFn,fieldNormWeight:s=me.fieldNormWeight}={}){const{keys:o,records:l}=n,r=new Ii({getFn:t,fieldNormWeight:s});return r.setKeys(o),r.setIndexRecords(l),r}function yl(n,{errors:t=0,currentLocation:s=0,expectedLocation:o=0,distance:l=me.distance,ignoreLocation:r=me.ignoreLocation}={}){const a=t/n.length;if(r)return a;const c=Math.abs(o-s);return l?a+c/l:c?1:a}function a1(n=[],t=me.minMatchCharLength){let s=[],o=-1,l=-1,r=0;for(let a=n.length;r<a;r+=1){let c=n[r];c&&o===-1?o=r:!c&&o!==-1&&(l=r-1,l-o+1>=t&&s.push([o,l]),o=-1)}return n[r-1]&&r-o>=t&&s.push([o,r-1]),s}const rs=32;function i1(n,t,s,{location:o=me.location,distance:l=me.distance,threshold:r=me.threshold,findAllMatches:a=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,includeMatches:p=me.includeMatches,ignoreLocation:u=me.ignoreLocation}={}){if(t.length>rs)throw new Error(Kv(rs));const d=t.length,y=n.length,f=Math.max(0,Math.min(o,y));let h=r,m=f;const _=c>1||p,B=_?Array(y):[];let C;for(;(C=n.indexOf(t,m))>-1;){let N=yl(t,{currentLocation:C,expectedLocation:f,distance:l,ignoreLocation:u});if(h=Math.min(N,h),m=C+d,_){let I=0;for(;I<d;)B[C+I]=1,I+=1}}m=-1;let b=[],v=1,w=d+y;const $=1<<d-1;for(let N=0;N<d;N+=1){let I=0,G=w;for(;I<G;)yl(t,{errors:N,currentLocation:f+G,expectedLocation:f,distance:l,ignoreLocation:u})<=h?I=G:w=G,G=Math.floor((w-I)/2+I);w=G;let se=Math.max(1,f-G+1),de=a?y:Math.min(f+G,y)+d,K=Array(de+2);K[de+1]=(1<<N)-1;for(let ve=de;ve>=se;ve-=1){let we=ve-1,Me=s[n.charAt(we)];if(_&&(B[we]=+!!Me),K[ve]=(K[ve+1]<<1|1)&Me,N&&(K[ve]|=(b[ve+1]|b[ve])<<1|1|b[ve+1]),K[ve]&$&&(v=yl(t,{errors:N,currentLocation:we,expectedLocation:f,distance:l,ignoreLocation:u}),v<=h)){if(h=v,m=we,m<=f)break;se=Math.max(1,2*f-m)}}if(yl(t,{errors:N+1,currentLocation:f,expectedLocation:f,distance:l,ignoreLocation:u})>h)break;b=K}const S={isMatch:m>=0,score:Math.max(.001,v)};if(_){const N=a1(B,c);N.length?p&&(S.indices=N):S.isMatch=!1}return S}function c1(n){let t={};for(let s=0,o=n.length;s<o;s+=1){const l=n.charAt(s);t[l]=(t[l]||0)|1<<o-s-1}return t}class Gy{constructor(t,{location:s=me.location,threshold:o=me.threshold,distance:l=me.distance,includeMatches:r=me.includeMatches,findAllMatches:a=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,isCaseSensitive:p=me.isCaseSensitive,ignoreLocation:u=me.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:p,ignoreLocation:u},this.pattern=p?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:c1(f),startIndex:h})},y=this.pattern.length;if(y>rs){let f=0;const h=y%rs,m=y-h;for(;f<m;)d(this.pattern.substr(f,rs),f),f+=rs;if(h){const _=y-rs;d(this.pattern.substr(_),_)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,t.length-1]]),m}const{location:l,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:p,ignoreLocation:u}=this.options;let d=[],y=0,f=!1;this.chunks.forEach(({pattern:m,alphabet:_,startIndex:B})=>{const{isMatch:C,score:b,indices:v}=i1(t,m,_,{location:l+B,distance:r,threshold:a,findAllMatches:c,minMatchCharLength:p,includeMatches:o,ignoreLocation:u});C&&(f=!0),y+=b,C&&v&&(d=[...d,...v])});let h={isMatch:f,score:f?y/this.chunks.length:1};return f&&o&&(h.indices=d),h}}class zt{constructor(t){this.pattern=t}static isMultiMatch(t){return Ip(t,this.multiRegex)}static isSingleMatch(t){return Ip(t,this.singleRegex)}search(){}}function Ip(n,t){const s=n.match(t);return s?s[1]:null}class p1 extends zt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class u1 extends zt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const o=t.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,t.length-1]}}}class d1 extends zt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class y1 extends zt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class f1 extends zt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class h1 extends zt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Uy extends zt{constructor(t,{location:s=me.location,threshold:o=me.threshold,distance:l=me.distance,includeMatches:r=me.includeMatches,findAllMatches:a=me.findAllMatches,minMatchCharLength:c=me.minMatchCharLength,isCaseSensitive:p=me.isCaseSensitive,ignoreLocation:u=me.ignoreLocation}={}){super(t),this._bitapSearch=new Gy(t,{location:s,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:p,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class zy extends zt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,o;const l=[],r=this.pattern.length;for(;(o=t.indexOf(this.pattern,s))>-1;)s=o+r,l.push([o,s-1]);const a=!!l.length;return{isMatch:a,score:a?0:1,indices:l}}}const Pa=[p1,zy,d1,y1,h1,f1,u1,Uy],Pp=Pa.length,m1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,g1="|";function A1(n,t={}){return n.split(g1).map(s=>{let o=s.trim().split(m1).filter(r=>r&&!!r.trim()),l=[];for(let r=0,a=o.length;r<a;r+=1){const c=o[r];let p=!1,u=-1;for(;!p&&++u<Pp;){const d=Pa[u];let y=d.isMultiMatch(c);y&&(l.push(new d(y,t)),p=!0)}if(!p)for(u=-1;++u<Pp;){const d=Pa[u];let y=d.isSingleMatch(c);if(y){l.push(new d(y,t));break}}}return l})}const _1=new Set([Uy.type,zy.type]);class v1{constructor(t,{isCaseSensitive:s=me.isCaseSensitive,includeMatches:o=me.includeMatches,minMatchCharLength:l=me.minMatchCharLength,ignoreLocation:r=me.ignoreLocation,findAllMatches:a=me.findAllMatches,location:c=me.location,threshold:p=me.threshold,distance:u=me.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:l,findAllMatches:a,ignoreLocation:r,location:c,threshold:p,distance:u},this.pattern=s?t:t.toLowerCase(),this.query=A1(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;t=l?t:t.toLowerCase();let r=0,a=[],c=0;for(let p=0,u=s.length;p<u;p+=1){const d=s[p];a.length=0,r=0;for(let y=0,f=d.length;y<f;y+=1){const h=d[y],{isMatch:m,indices:_,score:B}=h.search(t);if(m){if(r+=1,c+=B,o){const C=h.constructor.type;_1.has(C)?a=[...a,..._]:a.push(_)}}else{c=0,r=0,a.length=0;break}}if(r){let y={isMatch:!0,score:c/r};return o&&(y.indices=a),y}}return{isMatch:!1,score:1}}}const Oa=[];function B1(...n){Oa.push(...n)}function Ma(n,t){for(let s=0,o=Oa.length;s<o;s+=1){let l=Oa[s];if(l.condition(n,t))return new l(n,t)}return new Gy(n,t)}const Wl={AND:"$and",OR:"$or"},La={PATH:"$path",PATTERN:"$val"},Ra=n=>!!(n[Wl.AND]||n[Wl.OR]),C1=n=>!!n[La.PATH],b1=n=>!Bt(n)&&Hy(n)&&!Ra(n),Op=n=>({[Wl.AND]:Object.keys(n).map(t=>({[t]:n[t]}))});function Yy(n,t,{auto:s=!0}={}){const o=l=>{let r=Object.keys(l);const a=C1(l);if(!a&&r.length>1&&!Ra(l))return o(Op(l));if(b1(l)){const p=a?l[La.PATH]:r[0],u=a?l[La.PATTERN]:l[p];if(!ot(u))throw new Error(Yv(p));const d={keyId:Ia(p),pattern:u};return s&&(d.searcher=Ma(u,t)),d}let c={children:[],operator:r[0]};return r.forEach(p=>{const u=l[p];Bt(u)&&u.forEach(d=>{c.children.push(o(d))})}),c};return Ra(n)||(n=Op(n)),o(n)}function D1(n,{ignoreFieldNorm:t=me.ignoreFieldNorm}){n.forEach(s=>{let o=1;s.matches.forEach(({key:l,norm:r,score:a})=>{const c=l?l.weight:null;o*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(t?1:r))}),s.score=o})}function w1(n,t){const s=n.matches;t.matches=[],Tn(s)&&s.forEach(o=>{if(!Tn(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let a={indices:l,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),t.matches.push(a)})}function x1(n,t){t.score=n.score}function k1(n,t,{includeMatches:s=me.includeMatches,includeScore:o=me.includeScore}={}){const l=[];return s&&l.push(w1),o&&l.push(x1),n.map(r=>{const{idx:a}=r,c={item:t[a],refIndex:a};return l.length&&l.forEach(p=>{p(r,c)}),c})}class Gs{constructor(t,s={},o){this.options={...me,...s},this.options.useExtendedSearch,this._keyStore=new Qv(this.options.keys),this.setCollection(t,o)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof Ii))throw new Error(zv);this._myIndex=s||Wy(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Tn(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];t(r,o)&&(this.removeAt(o),o-=1,l-=1,s.push(r))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:a,ignoreFieldNorm:c}=this.options;let p=ot(t)?ot(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return D1(p,{ignoreFieldNorm:c}),r&&p.sort(a),Ny(s)&&s>-1&&(p=p.slice(0,s)),k1(p,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(t){const s=Ma(t,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i:a,n:c})=>{if(!Tn(r))return;const{isMatch:p,score:u,indices:d}=s.searchIn(r);p&&l.push({item:r,idx:a,matches:[{score:u,value:r,norm:c,indices:d}]})}),l}_searchLogical(t){const s=Yy(t,this.options),o=(c,p,u)=>{if(!c.children){const{keyId:y,searcher:f}=c,h=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(p,y),searcher:f});return h&&h.length?[{idx:u,item:p,matches:h}]:[]}const d=[];for(let y=0,f=c.children.length;y<f;y+=1){const h=c.children[y],m=o(h,p,u);if(m.length)d.push(...m);else if(c.operator===Wl.AND)return[]}return d},l=this._myIndex.records,r={},a=[];return l.forEach(({$:c,i:p})=>{if(Tn(c)){let u=o(s,c,p);u.length&&(r[p]||(r[p]={idx:p,item:c,matches:[]},a.push(r[p])),u.forEach(({matches:d})=>{r[p].matches.push(...d)}))}}),a}_searchObjectList(t){const s=Ma(t,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:a,i:c})=>{if(!Tn(a))return;let p=[];o.forEach((u,d)=>{p.push(...this._findMatches({key:u,value:a[d],searcher:s}))}),p.length&&r.push({idx:c,item:a,matches:p})}),r}_findMatches({key:t,value:s,searcher:o}){if(!Tn(s))return[];let l=[];if(Bt(s))s.forEach(({v:r,i:a,n:c})=>{if(!Tn(r))return;const{isMatch:p,score:u,indices:d}=o.searchIn(r);p&&l.push({score:u,key:t,value:r,idx:a,norm:c,indices:d})});else{const{v:r,n:a}=s,{isMatch:c,score:p,indices:u}=o.searchIn(r);c&&l.push({score:p,key:t,value:r,norm:a,indices:u})}return l}}Gs.version="6.6.2";Gs.createIndex=Wy;Gs.parseIndex=r1;Gs.config=me;Gs.parseQuery=Yy;B1(v1);const E1={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},T1=["value","disabled","onKeydown"],F1=["border","onClick"],S1={"w-4":"","text-right":"",op50:"","text-sm":""},$1=Se({__name:"Goto",setup(n){M(V);const t=Z(),s=Z(),o=Z(),l=Z(),r=Z(""),a=Z(0);function c(v){return v!=null}const p=P(()=>new Gs(Je.map(v=>{var w;return(w=v.meta)==null?void 0:w.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=P(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=P(()=>p.value.search(u.value).map(v=>v.item)),y=P(()=>!!d.value.length);function f(){if(y.value){const v=d.value.at(a.value||0);v&&qs(v.no)}h()}function h(){r.value="",Is.value=!1}function m(v){v.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),B()}function _(v){v.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),B()}function B(){var w;const v=(w=l.value)==null?void 0:w[a.value];v&&o.value&&(v.offsetTop+v.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:v.offsetTop+v.offsetHeight-o.value.offsetHeight+1}):v.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:v.offsetTop}))}function C(v){a.value=0,r.value=v.target.value}function b(v){qs(v),h()}return Be(Is,async v=>{var w;v?(r.value="",a.value=0,setTimeout(()=>{var $;return($=s.value)==null?void 0:$.focus()},0)):(w=s.value)==null||w.blur()}),Be(Nt,()=>{var v;(v=t.value)!=null&&v.contains(Nt.value)||h()}),(v,w)=>(A(),k("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:Ge(["fixed right-5 transition-all",x(Is)?"top-5":"-top-20"]),"w-90":""},[e("div",E1,[e("input",{ref_key:"input",ref:s,value:r.value,type:"text",disabled:!x(Is),class:Ge(["outline-none bg-transparent",{"text-red-400":!x(y)&&r.value}]),placeholder:"Goto...",onKeydown:[rl(f,["enter"]),rl(h,["escape"]),rl(m,["down"]),rl(_,["up"])],onInput:C},null,42,T1)]),x(d).length>0?(A(),k("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(A(!0),k(Pe,null,bs(x(d),($,S)=>(A(),k("li",{ref_for:!0,ref_key:"items",ref:l,key:$.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","items-center":"",border:S===0?"":"t main",class:Ge(a.value===S?"bg-active op100":"op80"),onClick:_g(N=>b($.no),["stop"])},[e("div",S1,lt($.no),1),i(" "+lt($.title),1)],10,F1))),128))],512)):Ce("v-if",!0)],2))}});const I1=q($1,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/Goto.vue"]]),P1=Se({__name:"Controls",setup(n){M(V);const t=at(),s=at();return(o,l)=>(A(),k(Pe,null,[F($v,{modelValue:x(yn),"onUpdate:modelValue":l[0]||(l[0]=r=>Oe(yn)?yn.value=r:null)},null,8,["modelValue"]),F(I1),x(t)?(A(),R(x(t),{key:0})):Ce("v-if",!0),x(s)?(A(),R(x(s),{key:1,modelValue:x(jr),"onUpdate:modelValue":l[1]||(l[1]=r=>Oe(jr)?jr.value=r:null)},null,8,["modelValue"])):Ce("v-if",!0),x(Ie).info?(A(),R(Hv,{key:2,modelValue:x(_o),"onUpdate:modelValue":l[2]||(l[2]=r=>Oe(_o)?_o.value=r:null)},null,8,["modelValue"])):Ce("v-if",!0)],64))}}),O1=q(P1,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/Controls.vue"]]),M1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L1=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),R1=[L1];function j1(n,t){return A(),k("svg",M1,R1)}const N1={name:"carbon-settings-adjust",render:j1},H1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V1=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),q1=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),W1=[V1,q1];function G1(n,t){return A(),k("svg",H1,W1)}const U1={name:"carbon-information",render:G1},z1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y1=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),K1=[Y1];function Z1(n,t){return A(),k("svg",z1,K1)}const J1={name:"carbon-download",render:Z1},Q1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X1=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),eB=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),nB=[X1,eB];function tB(n,t){return A(),k("svg",Q1,nB)}const sB={name:"carbon-user-speaker",render:tB},oB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lB=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),rB=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),aB=[lB,rB];function iB(n,t){return A(),k("svg",oB,aB)}const cB={name:"carbon-presentation-file",render:iB},pB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uB=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),dB=[uB];function yB(n,t){return A(),k("svg",pB,dB)}const fB={name:"carbon-pen",render:yB},hB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},mB=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),gB=[mB];function AB(n,t){return A(),k("svg",hB,gB)}const _B={name:"ph-cursor-duotone",render:AB},vB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},BB=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),CB=[BB];function bB(n,t){return A(),k("svg",vB,CB)}const Ky={name:"ph-cursor-fill",render:bB},DB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wB=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),xB=[wB];function kB(n,t){return A(),k("svg",DB,xB)}const EB={name:"carbon-sun",render:kB},TB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},FB=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),SB=[FB];function $B(n,t){return A(),k("svg",TB,SB)}const IB={name:"carbon-moon",render:$B},PB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},OB=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),MB=[OB];function LB(n,t){return A(),k("svg",PB,MB)}const RB={name:"carbon-apps",render:LB},jB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},NB=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),HB=[NB];function VB(n,t){return A(),k("svg",jB,HB)}const Zy={name:"carbon-arrow-right",render:VB},qB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WB=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),GB=[WB];function UB(n,t){return A(),k("svg",qB,GB)}const zB={name:"carbon-arrow-left",render:UB},YB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},KB=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),ZB=[KB];function JB(n,t){return A(),k("svg",YB,ZB)}const QB={name:"carbon-maximize",render:JB},XB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eC=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),nC=[eC];function tC(n,t){return A(),k("svg",XB,nC)}const sC={name:"carbon-minimize",render:tC},oC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lC=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),rC=[lC];function aC(n,t){return A(),k("svg",oC,rC)}const iC={name:"carbon-checkmark",render:aC},cC={class:"select-list"},pC={class:"title"},uC={class:"items"},dC=["onClick"],yC=Se({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const s=n;M(V);const o=tt(s,"modelValue",t,{passive:!0});return(l,r)=>{const a=iC;return A(),k("div",cC,[e("div",pC,lt(n.title),1),e("div",uC,[(A(!0),k(Pe,null,bs(n.items,c=>(A(),k("div",{key:c.value,class:Ge(["item",{active:x(o)===c.value}]),onClick:()=>{var p;o.value=c.value,(p=c.onClick)==null||p.call(c)}},[F(a,{class:Ge(["text-green-500",{"opacity-0":x(o)!==c.value}])},null,8,["class"]),i(" "+lt(c.display||c.value),1)],10,dC))),128))])])}}});const fC=q(yC,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/SelectList.vue"]]),hC={class:"text-sm"},mC=Se({__name:"Settings",setup(n){M(V);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(A(),k("div",hC,[F(fC,{modelValue:x(Cl),"onUpdate:modelValue":o[0]||(o[0]=l=>Oe(Cl)?Cl.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),gC=q(mC,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/Settings.vue"]]),AC={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},_C=Se({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const s=n;M(V);const o=tt(s,"modelValue",t,{passive:!0}),l=Z();return d3(l,()=>{o.value=!1}),(r,a)=>(A(),k("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Ge({disabled:n.disabled}),onClick:a[0]||(a[0]=c=>o.value=!x(o))},[Sn(r.$slots,"button",{class:Ge({disabled:n.disabled})})],2),(A(),R(ud,null,[x(o)?(A(),k("div",AC,[Sn(r.$slots,"menu")])):Ce("v-if",!0)],1024))],512))}}),vC=q(_C,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/MenuButton.vue"]]),BC={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},CC={__name:"VerticalDivider",setup(n){return M(V),(t,s)=>(A(),k("div",BC))}},fl=q(CC,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),bC={render(){return[]}},DC={class:"slidev-icon-btn"},wC={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},xC={class:"my-auto"},kC={class:"opacity-50"},EC=Se({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;M(V);const s=Ea.smaller("md"),{isFullscreen:o,toggle:l}=Fy,r=P(()=>Na.value?`?password=${Na.value}`:""),a=P(()=>`/presenter/${Ke.value}${r.value}`),c=P(()=>`/${Ke.value}${r.value}`),p=Z();function u(){p.value&&Nt.value&&p.value.contains(Nt.value)&&Nt.value.blur()}const d=P(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=at(),f=at();return jt(()=>import("./DrawingControls-0bd6b117.js"),[]).then(h=>f.value=h.default),(h,m)=>{const _=sC,B=QB,C=zB,b=Zy,v=RB,w=IB,$=EB,S=Ky,N=_B,I=fB,G=cB,se=Ns("RouterLink"),de=sB,K=J1,De=U1,ve=N1;return A(),k("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Ge(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",x(d)]),onMouseleave:u},[x(yt)?Ce("v-if",!0):(A(),k("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...we)=>x(l)&&x(l)(...we))},[x(o)?(A(),R(_,{key:0})):(A(),R(B,{key:1}))])),e("button",{class:Ge(["slidev-icon-btn",{disabled:!x(Zk)}]),onClick:m[1]||(m[1]=(...we)=>x(Vt)&&x(Vt)(...we))},[F(C)],2),e("button",{class:Ge(["slidev-icon-btn",{disabled:!x(Kk)}]),title:"Next",onClick:m[2]||(m[2]=(...we)=>x(Ht)&&x(Ht)(...we))},[F(b)],2),x(yt)?Ce("v-if",!0):(A(),k("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=we=>x(Sy)())},[F(v)])),x($a)?Ce("v-if",!0):(A(),k("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=we=>x(My)())},[x(Ti)?(A(),R(w,{key:0})):(A(),R($,{key:1}))])),F(fl),x(yt)?Ce("v-if",!0):(A(),k(Pe,{key:3},[!x(vn)&&!x(s)&&x(y)?(A(),k(Pe,{key:0},[F(x(y)),F(fl)],64)):Ce("v-if",!0),x(vn)?(A(),k("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=we=>Nr.value=!x(Nr))},[x(Nr)?(A(),R(S,{key:0})):(A(),R(N,{key:1,class:"opacity-50"}))])):Ce("v-if",!0)],64)),(!x(Ie).drawings.presenterOnly||x(vn))&&!x(yt)?(A(),k(Pe,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=we=>st.value=!x(st))},[F(I),x(st)?(A(),k("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:x(cs).color})},null,4)):Ce("v-if",!0)]),F(fl)],64)):Ce("v-if",!0),x(yt)?Ce("v-if",!0):(A(),k(Pe,{key:5},[x(vn)?(A(),R(se,{key:0,to:x(c),class:"slidev-icon-btn",title:"Play Mode"},{default:E(()=>[F(G)]),_:1},8,["to"])):Ce("v-if",!0),x(Wk)?(A(),R(se,{key:1,to:x(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:E(()=>[F(de)]),_:1},8,["to"])):Ce("v-if",!0),Ce("v-if",!0)],64)),(A(),k(Pe,{key:6},[x(Ie).download?(A(),k("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(...we)=>x(Ha)&&x(Ha)(...we))},[F(K)])):Ce("v-if",!0)],64)),!x(vn)&&x(Ie).info&&!x(yt)?(A(),k("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=we=>_o.value=!x(_o))},[F(De)])):Ce("v-if",!0),!x(vn)&&!x(yt)?(A(),R(vC,{key:8},{button:E(()=>[e("button",DC,[F(ve)])]),menu:E(()=>[F(gC)]),_:1})):Ce("v-if",!0),x(yt)?Ce("v-if",!0):(A(),R(fl,{key:9})),e("div",wC,[e("div",xC,[i(lt(x(Ke))+" ",1),e("span",kC,"/ "+lt(x(Gk)),1)])]),F(x(bC))],34)],512)}}}),TC=q(EC,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/NavControls.vue"]]),Jy={render(){return[]}},Qy={render(){return[]}},FC={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},SC=Se({__name:"PresenterMouse",setup(n){return M(V),(t,s)=>{const o=Ky;return x(Or).cursor?(A(),k("div",FC,[F(o,{class:"absolute",style:tn({left:`${x(Or).cursor.x}%`,top:`${x(Or).cursor.y}%`})},null,8,["style"])])):Ce("v-if",!0)}}}),$C=q(SC,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),IC=Se({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){M(V),Be(fn,()=>{var o,l;(o=fn.value)!=null&&o.meta&&fn.value.meta.preload!==!1&&(fn.value.meta.__preloaded=!0),(l=qr.value)!=null&&l.meta&&qr.value.meta.preload!==!1&&(qr.value.meta.__preloaded=!0)},{immediate:!0});const t=at();jt(()=>import("./DrawingLayer-dc92a328.js"),[]).then(o=>t.value=o.default);const s=P(()=>Je.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===fn.value}));return(o,l)=>(A(),k(Pe,null,[Ce(" Global Bottom "),F(x(Qy)),Ce(" Slides "),F(dg,ne(x(Xk),{id:"slideshow",tag:"div"}),{default:E(()=>[(A(!0),k(Pe,null,bs(x(s),r=>{var a;return Ai((A(),R(x($i),{key:r.path,is:r==null?void 0:r.component,clicks:r===x(fn)?x(Ln):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Ge(x(Si)(r)),route:r,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Hd,r===x(fn)]])}),128))]),_:1},16),Ce(" Global Top "),F(x(Jy)),x(t)?(A(),R(x(t),{key:0})):Ce("v-if",!0),x(vn)?Ce("v-if",!0):(A(),R($C,{key:1}))],64))}});const PC=q(IC,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/SlidesShow.vue"]]),OC=Se({__name:"PrintStyle",setup(n){M(V);function t(s,{slots:o}){if(o.default)return nn("style",o.default())}return(s,o)=>(A(),R(t,null,{default:E(()=>[i(" @page { size: "+lt(x(Rt))+"px "+lt(x(Di))+"px; margin: 0px; } ",1)]),_:1}))}}),Xy=q(OC,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/PrintStyle.vue"]]),MC=Se({__name:"Play",setup(n){M(V),_v();const t=Z();function s(r){var a;vp.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Ht():Vt())}eE(t);const o=P(()=>T_.value||vp.value);at();const l=at();return jt(()=>import("./DrawingControls-0bd6b117.js"),[]).then(r=>l.value=r.default),(r,a)=>(A(),k(Pe,null,[x(gt)?(A(),R(Xy,{key:0})):Ce("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:tn(x(wi))},[F(Ry,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:x(gt)?x(gs).width.value:void 0,scale:x(Cl),onPointerdown:s},{default:E(()=>[F(PC,{context:"slide"})]),controls:E(()=>[e("div",{class:Ge(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[x(o)?"opacity-100 right-0":"opacity-0 p-2",x(Oo)?"pointer-events-none":""]])},[F(TC,{class:"m-auto",persist:x(o)},null,8,["persist"])],2),!x(Ie).drawings.presenterOnly&&!x(yt)&&x(l)?(A(),R(x(l),{key:0,class:"ml-0"})):Ce("v-if",!0)]),_:1},8,["style","width","scale"]),Ce("v-if",!0)],4),F(O1)],64))}}),LC=q(MC,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ef(n){return typeof n>"u"||n===null}function RC(n){return typeof n=="object"&&n!==null}function jC(n){return Array.isArray(n)?n:ef(n)?[]:[n]}function NC(n,t){var s,o,l,r;if(t)for(r=Object.keys(t),s=0,o=r.length;s<o;s+=1)l=r[s],n[l]=t[l];return n}function HC(n,t){var s="",o;for(o=0;o<t;o+=1)s+=n;return s}function VC(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var qC=ef,WC=RC,GC=jC,UC=HC,zC=VC,YC=NC,Pi={isNothing:qC,isObject:WC,toArray:GC,repeat:UC,isNegativeZero:zC,extend:YC};function nf(n,t){var s="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(s+='in "'+n.mark.name+'" '),s+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(s+=`

`+n.mark.snippet),o+" "+s):o}function Lo(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=nf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Lo.prototype=Object.create(Error.prototype);Lo.prototype.constructor=Lo;Lo.prototype.toString=function(t){return this.name+": "+nf(this,t)};var as=Lo,KC=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ZC=["scalar","sequence","mapping"];function JC(n){var t={};return n!==null&&Object.keys(n).forEach(function(s){n[s].forEach(function(o){t[String(o)]=s})}),t}function QC(n,t){if(t=t||{},Object.keys(t).forEach(function(s){if(KC.indexOf(s)===-1)throw new as('Unknown option "'+s+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(s){return s},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=JC(t.styleAliases||null),ZC.indexOf(this.kind)===-1)throw new as('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var pn=QC;function Mp(n,t){var s=[];return n[t].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function XC(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,s;function o(l){l.multi?(n.multi[l.kind].push(l),n.multi.fallback.push(l)):n[l.kind][l.tag]=n.fallback[l.tag]=l}for(t=0,s=arguments.length;t<s;t+=1)arguments[t].forEach(o);return n}function ja(n){return this.extend(n)}ja.prototype.extend=function(t){var s=[],o=[];if(t instanceof pn)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(s=s.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new as("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof pn))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new as("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new as("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof pn))throw new as("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(ja.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Mp(l,"implicit"),l.compiledExplicit=Mp(l,"explicit"),l.compiledTypeMap=XC(l.compiledImplicit,l.compiledExplicit),l};var eb=ja,nb=new pn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),tb=new pn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),sb=new pn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),ob=new eb({explicit:[nb,tb,sb]});function lb(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function rb(){return null}function ab(n){return n===null}var ib=new pn("tag:yaml.org,2002:null",{kind:"scalar",resolve:lb,construct:rb,predicate:ab,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function cb(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function pb(n){return n==="true"||n==="True"||n==="TRUE"}function ub(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var db=new pn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:cb,construct:pb,predicate:ub,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function yb(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function fb(n){return 48<=n&&n<=55}function hb(n){return 48<=n&&n<=57}function mb(n){if(n===null)return!1;var t=n.length,s=0,o=!1,l;if(!t)return!1;if(l=n[s],(l==="-"||l==="+")&&(l=n[++s]),l==="0"){if(s+1===t)return!0;if(l=n[++s],l==="b"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(!yb(n.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<t;s++)if(l=n[s],l!=="_"){if(!fb(n.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<t;s++)if(l=n[s],l!=="_"){if(!hb(n.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function gb(n){var t=n,s=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return s*parseInt(t.slice(2),2);if(t[1]==="x")return s*parseInt(t.slice(2),16);if(t[1]==="o")return s*parseInt(t.slice(2),8)}return s*parseInt(t,10)}function Ab(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Pi.isNegativeZero(n)}var _b=new pn("tag:yaml.org,2002:int",{kind:"scalar",resolve:mb,construct:gb,predicate:Ab,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),vb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Bb(n){return!(n===null||!vb.test(n)||n[n.length-1]==="_")}function Cb(n){var t,s;return t=n.replace(/_/g,"").toLowerCase(),s=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:s*parseFloat(t,10)}var bb=/^[-+]?[0-9]+e/;function Db(n,t){var s;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Pi.isNegativeZero(n))return"-0.0";return s=n.toString(10),bb.test(s)?s.replace("e",".e"):s}function wb(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Pi.isNegativeZero(n))}var xb=new pn("tag:yaml.org,2002:float",{kind:"scalar",resolve:Bb,construct:Cb,predicate:wb,represent:Db,defaultStyle:"lowercase"}),kb=ob.extend({implicit:[ib,db,_b,xb]}),Eb=kb,tf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),sf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Tb(n){return n===null?!1:tf.exec(n)!==null||sf.exec(n)!==null}function Fb(n){var t,s,o,l,r,a,c,p=0,u=null,d,y,f;if(t=tf.exec(n),t===null&&(t=sf.exec(n)),t===null)throw new Error("Date resolve error");if(s=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(s,o,l));if(r=+t[4],a=+t[5],c=+t[6],t[7]){for(p=t[7].slice(0,3);p.length<3;)p+="0";p=+p}return t[9]&&(d=+t[10],y=+(t[11]||0),u=(d*60+y)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(s,o,l,r,a,c,p)),u&&f.setTime(f.getTime()-u),f}function Sb(n){return n.toISOString()}var $b=new pn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Tb,construct:Fb,instanceOf:Date,represent:Sb});function Ib(n){return n==="<<"||n===null}var Pb=new pn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Ib}),Oi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ob(n){if(n===null)return!1;var t,s,o=0,l=n.length,r=Oi;for(s=0;s<l;s++)if(t=r.indexOf(n.charAt(s)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Mb(n){var t,s,o=n.replace(/[\r\n=]/g,""),l=o.length,r=Oi,a=0,c=[];for(t=0;t<l;t++)t%4===0&&t&&(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)),a=a<<6|r.indexOf(o.charAt(t));return s=l%4*6,s===0?(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)):s===18?(c.push(a>>10&255),c.push(a>>2&255)):s===12&&c.push(a>>4&255),new Uint8Array(c)}function Lb(n){var t="",s=0,o,l,r=n.length,a=Oi;for(o=0;o<r;o++)o%3===0&&o&&(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]),s=(s<<8)+n[o];return l=r%3,l===0?(t+=a[s>>18&63],t+=a[s>>12&63],t+=a[s>>6&63],t+=a[s&63]):l===2?(t+=a[s>>10&63],t+=a[s>>4&63],t+=a[s<<2&63],t+=a[64]):l===1&&(t+=a[s>>2&63],t+=a[s<<4&63],t+=a[64],t+=a[64]),t}function Rb(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var jb=new pn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ob,construct:Mb,predicate:Rb,represent:Lb}),Nb=Object.prototype.hasOwnProperty,Hb=Object.prototype.toString;function Vb(n){if(n===null)return!0;var t=[],s,o,l,r,a,c=n;for(s=0,o=c.length;s<o;s+=1){if(l=c[s],a=!1,Hb.call(l)!=="[object Object]")return!1;for(r in l)if(Nb.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function qb(n){return n!==null?n:[]}var Wb=new pn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Vb,construct:qb}),Gb=Object.prototype.toString;function Ub(n){if(n===null)return!0;var t,s,o,l,r,a=n;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1){if(o=a[t],Gb.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function zb(n){if(n===null)return[];var t,s,o,l,r,a=n;for(r=new Array(a.length),t=0,s=a.length;t<s;t+=1)o=a[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var Yb=new pn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Ub,construct:zb}),Kb=Object.prototype.hasOwnProperty;function Zb(n){if(n===null)return!0;var t,s=n;for(t in s)if(Kb.call(s,t)&&s[t]!==null)return!1;return!0}function Jb(n){return n!==null?n:{}}var Qb=new pn("tag:yaml.org,2002:set",{kind:"mapping",resolve:Zb,construct:Jb});Eb.extend({implicit:[$b,Pb],explicit:[jb,Wb,Yb,Qb]});function Lp(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var Xb=new Array(256),e9=new Array(256);for(var Fs=0;Fs<256;Fs++)Xb[Fs]=Lp(Fs)?1:0,e9[Fs]=Lp(Fs);function n9(n){return Array.from(new Set(n))}function Rp(...n){let t,s,o;n.length===1?(t=0,o=1,[s]=n):[t,s,o=1]=n;const l=[];let r=t;for(;r<s;)l.push(r),r+=o||1;return l}function of(n,t){if(!t||t==="all"||t==="*")return Rp(1,n+1);const s=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...Rp(+l,r?+r+1:n+1))}return n9(s).filter(o=>o<=n).sort((o,l)=>o-l)}function lf(n){const t=P(()=>n.value.path),s=P(()=>Je.length-1),o=P(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=P(()=>gr(o.value)),r=P(()=>Je.find(f=>f.path===`${o.value}`)),a=P(()=>{var f,h,m;return(m=(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),c=P(()=>{var f,h;return((h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),p=P(()=>Je.find(f=>f.path===`${Math.min(Je.length,o.value+1)}`)),u=P(()=>Je.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(Mi(f,h),f),[])),d=P(()=>Li(u.value,r.value)),y=P(()=>Ri(d.value));return{route:n,path:t,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:d,tree:y,downloadPDF:Ha,next:Ht,nextSlide:Ro,openInEditor:nE,prev:Vt,prevSlide:jo}}function rf(n,t,s){const o=Z(0);ln(()=>{Cn.afterEach(async()=>{await ln(),o.value+=1})});const l=P(()=>{var p,u;return o.value,((u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),r=P(()=>{var p,u;return+(((u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.clicks)??l.value.length)}),a=P(()=>s.value<Je.length-1||n.value<r.value),c=P(()=>s.value>1||n.value>0);return{clicks:n,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:c}}const t9=["id"],s9=Se({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:t}){const s=n,o=tt(s,"clicksElements",t),l=P(()=>({height:`${Di}px`,width:`${Rt}px`})),r=at();jt(()=>Promise.resolve().then(()=>Ev),void 0).then(u=>r.value=u.default);const a=P(()=>s.clicks),c=rf(a,s.nav.currentRoute,s.nav.currentPage),p=P(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return En(V,Ue({nav:{...s.nav,...c},configs:Ie,themeConfigs:P(()=>Ie.themeConfig)})),(u,d)=>{var y;return A(),k("div",{id:x(p),class:"print-slide-container",style:tn(x(l))},[F(x(Qy)),F(x($i),{is:(y=n.route)==null?void 0:y.component,"clicks-elements":x(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>Oe(o)?o.value=f:null),clicks:x(a),"clicks-disabled":!1,class:Ge(x(Si)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),x(r)?(A(),R(x(r),{key:0,page:+n.route.path},null,8,["page"])):Ce("v-if",!0),F(x(Jy))],12,t9)}}}),jp=q(s9,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),o9=Se({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var r;const t=n;M(V);const s=Z(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=P(()=>t.route),l=lf(o);return(a,c)=>(A(),k(Pe,null,[F(jp,{"clicks-elements":s.value,"onUpdate:clicksElements":c[0]||(c[0]=p=>s.value=p),clicks:0,nav:x(l),route:x(o)},null,8,["clicks-elements","nav","route"]),x(vo)?Ce("v-if",!0):(A(!0),k(Pe,{key:0},bs(s.value.length,p=>(A(),R(jp,{key:p,clicks:p,nav:x(l),route:x(o)},null,8,["clicks","nav","route"]))),128))],64))}}),l9=q(o9,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),r9={id:"print-content"},a9=Se({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const t=n;M(V);const s=P(()=>t.width),o=P(()=>t.width/Lt),l=P(()=>s.value/o.value),r=P(()=>l.value<Lt?s.value/Rt:o.value*Lt/Rt);let a=Je.slice(0,-1);jn.value.query.range&&(a=of(a.length,jn.value.query.range).map(u=>a[u-1]));const c=P(()=>({"select-none":!Ie.selectable,"slidev-code-line-numbers":Ie.lineNumbers}));return En(Qd,r),(p,u)=>(A(),k("div",{id:"print-container",class:Ge(x(c))},[e("div",r9,[(A(!0),k(Pe,null,bs(x(a),d=>(A(),R(l9,{key:d.path,route:d},null,8,["route"]))),128))]),Sn(p.$slots,"controls")],2))}});const i9=q(a9,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),c9=Se({__name:"Print",setup(n){return M(V),Cs(()=>{gt?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(A(),k(Pe,null,[x(gt)?(A(),R(Xy,{key:0})):Ce("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(x(wi))},[F(i9,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:x(gs).width.value},null,8,["style","width"])],4)],64))}});const p9=q(c9,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/internals/Print.vue"]]);const u9={class:"slidev-layout end"},d9={__name:"end",setup(n){return M(V),(t,s)=>(A(),k("div",u9,[Sn(t.$slots,"default",{},()=>[i("END")],!0)]))}},y9=q(d9,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/layouts/end.vue"]]),f9={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h9=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),m9=[h9];function g9(n,t){return A(),k("svg",f9,m9)}const af={name:"carbon-logo-github",render:g9};function Np(n){return n.startsWith("/")?"/rust-slidev"+n.slice(1):n}function A9(n,t=!1){const s=n&&["#","rgb","hsl"].some(l=>n.indexOf(l)===0),o={background:s?n:void 0,color:n&&!s?"white":void 0,backgroundImage:s?void 0:n?t?`linear-gradient(#0005, #0008), url(${Np(n)})`:`url("${Np(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const _9={class:"my-auto w-full"},v9=Se({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(n){const t=n;M(V);const s=P(()=>A9(t.background,!0));return(o,l)=>(A(),k("div",{class:"slidev-layout cover text-center",style:tn(x(s))},[e("div",_9,[Sn(o.$slots,"default")])],4))}}),B9=q(v9,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),C9=e("h1",null,"Welcome to Rust Slidev",-1),b9={class:"pt-12"},D9={class:"abs-br m-6 flex gap-2"},w9={href:"https://github.com/gnitoahc/rust-slidev",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},x9={__name:"1",setup(n){const t={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Rust Programming Language
Have fun !!

Learn more at [Rust](https://www.rust-lang.org/)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",hideInToc:!0},s=M(V);return(o,l)=>{const r=Zy,a=af;return A(),R(B9,te(ee(t)),{default:E(()=>[C9,e("div",b9,[e("span",{onClick:l[0]||(l[0]=(...c)=>x(s).nav.next&&x(s).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[i(" Start "),F(r,{class:"inline"})])]),e("div",D9,[e("a",w9,[F(a)])])]),_:1},16)}}},k9=q(x9,[["__file","/@slidev/slides/1.md"]]),E9=["href","innerHTML"],T9=["href"],F9=Se({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(n){return M(V),(t,s)=>{const o=Ns("RouterLink");return!x(gt)&&n.title?(A(),R(o,{key:0,to:String(n.to),onClick:s[0]||(s[0]=l=>l.target.blur()),innerHTML:n.title},null,8,["to","innerHTML"])):!x(gt)&&!n.title?(A(),R(o,{key:1,to:String(n.to),onClick:s[1]||(s[1]=l=>l.target.blur())},{default:E(()=>[Sn(t.$slots,"default")]),_:3},8,["to"])):x(gt)&&n.title?(A(),k("a",{key:2,href:`#${n.to}`,innerHTML:n.title},null,8,E9)):(A(),k("a",{key:3,href:`#${n.to}`},[Sn(t.$slots,"default")],8,T9))}}}),S9=q(F9,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/builtin/Link.vue"]]),$9={key:0},I9={key:1},P9={key:2},O9={key:3},M9={key:4},L9={key:5},R9={key:6},j9={key:7},N9={key:8},H9={key:9},V9={key:10},q9={key:11},W9={key:12},G9={key:13},U9={key:14},z9={key:15},Y9={key:16},K9={key:17},Z9={key:18},J9={key:19},Q9={key:20},X9={key:21},e7={key:22},n7={key:23},t7={key:24},s7={key:25},o7={key:26},l7={key:27},r7={key:28},a7={key:29},i7={key:30},c7={key:31},p7={key:32},u7={key:33},d7={key:34},y7={key:35},f7={key:36},h7={key:37},m7={key:38},g7={key:39},A7={key:40},_7={key:41},v7={key:42},B7={key:43},C7={key:44},b7={key:45},D7={key:46},w7={key:47},x7={key:48},k7={key:49},E7={key:50},T7={key:51},F7={key:52},S7={key:53},$7={key:54},I7={key:55},P7={key:56},O7={key:57},M7={key:58},L7={key:59},R7={key:60},j7={key:61},N7={key:62},H7={key:63},V7={key:64},q7={key:65},W7={key:66},G7={key:67},U7={key:68},z7={key:69},Y7=Se({__name:"titles",props:{no:{type:[Number,String],required:!0}},setup(n){return(t,s)=>(A(),k("div",null,[+n.no==1?(A(),k("p",$9,"Rust")):+n.no==2?(A(),k("p",I9,"undefined")):+n.no==3?(A(),k("p",P9,"Chapter 1: Getting Started")):+n.no==4?(A(),k("p",O9,"1.1 Installations")):+n.no==5?(A(),k("p",M9,"1.2 Hello World!")):+n.no==6?(A(),k("p",L9,"1.3 Using Cargo")):+n.no==7?(A(),k("p",R9,"Creating project")):+n.no==8?(A(),k("p",j9,"Creating project (cont.)")):+n.no==9?(A(),k("p",N9,"Building project & Running project")):+n.no==10?(A(),k("p",H9,"Building project & Running project (cont.)")):+n.no==11?(A(),k("p",V9,"Chapter 2: Common Programming Concepts")):+n.no==12?(A(),k("p",q9,"2.1 Variables and Mutability")):+n.no==13?(A(),k("p",W9,"Mutable & Immutable")):+n.no==14?(A(),k("p",G9,"Mutable & Immutable (cont.)")):+n.no==15?(A(),k("p",U9,"Mutable & Immutable (cont.)")):+n.no==16?(A(),k("p",z9,"Constants")):+n.no==17?(A(),k("p",Y9,"Shadowing")):+n.no==18?(A(),k("p",K9,"Shadowing (cont.)")):+n.no==19?(A(),k("p",Z9,"Shadowing (cont.)")):+n.no==20?(A(),k("p",J9,"2.2 Data types")):+n.no==21?(A(),k("p",Q9,"Scalar Types")):+n.no==22?(A(),k("p",X9,"Integer Types")):+n.no==23?(A(),k("p",e7,"Floating-Point Types")):+n.no==24?(A(),k("p",n7,"The Boolean Type")):+n.no==25?(A(),k("p",t7,"The Character Type")):+n.no==26?(A(),k("p",s7,"Compound Types")):+n.no==27?(A(),k("p",o7,"Tuples")):+n.no==28?(A(),k("p",l7,"Tuples (cont.)")):+n.no==29?(A(),k("p",r7,"Array")):+n.no==30?(A(),k("p",a7,"2.3 Functions")):+n.no==31?(A(),k("p",i7,"Main function")):+n.no==32?(A(),k("p",c7,"Main function (cont.)")):+n.no==33?(A(),k("p",p7,"Parameters")):+n.no==34?(A(),k("p",u7,"Statements and Expressions")):+n.no==35?(A(),k("p",d7,"Functions with Return values")):+n.no==36?(A(),k("p",y7,"2.4 Comments")):+n.no==37?(A(),k("p",f7,"2.5 Control Flow")):+n.no==38?(A(),k("p",h7,"If experssion")):+n.no==39?(A(),k("p",m7,"If expression (cont.)")):+n.no==40?(A(),k("p",g7,"If expression (cont.)")):+n.no==41?(A(),k("p",A7,"Loop")):+n.no==42?(A(),k("p",_7,"loop")):+n.no==43?(A(),k("p",v7,"loop (cont.)")):+n.no==44?(A(),k("p",B7,"loop (cont.)")):+n.no==45?(A(),k("p",C7,"loop (cont.)")):+n.no==46?(A(),k("p",b7,"while")):+n.no==47?(A(),k("p",D7,"for")):+n.no==48?(A(),k("p",w7,"for (cont.)")):+n.no==49?(A(),k("p",x7,"Chapter 3: Project I - Guessing Game")):+n.no==50?(A(),k("p",k7,"Setting Up New Project")):+n.no==51?(A(),k("p",E7,"Processing a Game Part I")):+n.no==52?(A(),k("p",T7,"Processing a Game Part I (cont.)")):+n.no==53?(A(),k("p",F7,"Processing a Game Part I (cont.)")):+n.no==54?(A(),k("p",S7,"Processing a Game Part I (cont.)")):+n.no==55?(A(),k("p",$7,"Tesing of First Part")):+n.no==56?(A(),k("p",I7,"Processing a Game Part II")):+n.no==57?(A(),k("p",P7,"Processing a Game Part II (cont.)")):+n.no==58?(A(),k("p",O7,"Processing a Game Part II (cont.)")):+n.no==59?(A(),k("p",M7,"Processing a Game Part II (cont.)")):+n.no==60?(A(),k("p",L7,"Processing a Game Part II (cont.)")):+n.no==61?(A(),k("p",R7,"Processing a Game Part II (cont.)")):+n.no==62?(A(),k("p",j7,"Processing a Game Part II (cont.)")):+n.no==63?(A(),k("p",N7,"Processing a Game Part II (cont.)")):+n.no==64?(A(),k("p",H7,"Processing a Game Part II (cont.)")):+n.no==65?(A(),k("p",V7,"Processing a Game Part III")):+n.no==66?(A(),k("p",q7,"Recap")):+n.no==67?(A(),k("p",W7,"Import libraries")):+n.no==68?(A(),k("p",G7,"Use a loop to read the answer until the the user guess the right answer")):+n.no==69?(A(),k("p",U7,"If the user guess the right answer, break")):+n.no==70?(A(),k("p",z7,"undefined")):Ce("v-if",!0)]))}}),K7=q(Y7,[["__file","/@slidev/titles.md"]]),Z7=Se({__name:"TocList",props:{level:{type:Number,required:!0,default:1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(n){const t=n;M(V);const s=P(()=>[...Xd(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(o,l)=>{const r=S9,a=Ns("TocList",!0);return n.list&&n.list.length>0?(A(),k("ol",{key:0,class:Ge(x(s))},[(A(!0),k(Pe,null,bs(n.list,c=>(A(),k("li",{key:c.path,class:Ge(["slidev-toc-item",[{"slidev-toc-item-active":c.active},{"slidev-toc-item-parent-active":c.activeParent}]])},[F(r,{to:c.path},{default:E(()=>[F(x(K7),{no:c.path},null,8,["no"])]),_:2},1032,["to"]),c.children.length>0?(A(),R(a,{key:0,level:n.level+1,list:c.children,"list-class":n.listClass},null,8,["level","list","list-class"])):Ce("v-if",!0)],2))),128))],2)):Ce("v-if",!0)}}});const J7=q(Z7,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/builtin/TocList.vue"]]),Q7=Se({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:1/0},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(n){const t=n,s=M(V);function o(c,p=1){if(p>Number(t.maxDepth))return[];if(p<Number(t.minDepth)){const u=c.find(d=>d.active||d.activeParent);return u?o(u.children,p+1):[]}return c.map(u=>({...u,children:o(u.children,p+1)}))}function l(c){return c.filter(p=>p.active||p.activeParent||p.hasActiveParent).map(p=>({...p,children:l(p.children)}))}function r(c){const p=c.some(u=>u.active||u.activeParent||u.hasActiveParent);return c.filter(()=>p).map(u=>({...u,children:r(u.children)}))}const a=P(()=>{const c=s==null?void 0:s.nav.tree;if(!c)return[];let p=o(c);return t.mode==="onlyCurrentTree"?p=l(p):t.mode==="onlySiblings"&&(p=r(p)),p});return(c,p)=>{const u=J7;return A(),k("div",{class:"slidev-toc",style:tn(`column-count:${n.columns}`)},[F(u,{level:1,list:x(a),"list-class":n.listClass},null,8,["list","list-class"])],4)}}}),Hn=q(Q7,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/builtin/Toc.vue"]]),X7={class:"slidev-layout default"},e6={__name:"default",setup(n){return M(V),(t,s)=>(A(),k("div",X7,[Sn(t.$slots,"default")]))}},le=q(e6,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/layouts/default.vue"]]),n6={__name:"2",setup(n){const t={};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[F(l,{listClass:"toc",maxDepth:"1"})]),_:1},16)}}},t6=q(n6,[["__file","/@slidev/slides/2.md"]]),s6={class:"slidev-layout center h-full grid place-content-center"},o6={class:"my-auto"},l6={__name:"center",setup(n){return M(V),(t,s)=>(A(),k("div",s6,[e("div",o6,[Sn(t.$slots,"default")])]))}},mr=q(l6,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/layouts/center.vue"]]),r6=e("h1",null,"Chapter 1: Getting Started",-1),a6={__name:"3",setup(n){const t={info:`Chapter 1: Getting Started
`,transition:"slide-left",layout:"center",hide:!1,srcSequence:"./pages/Chapter1.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(mr,te(ee(t)),{default:E(()=>[r6,F(l,{listClass:"toc",minDepth:"2",mode:"onlyCurrentTree"})]),_:1},16)}}},i6=q(a6,[["__file","/@slidev/slides/3.md"]]),c6={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},p6=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),u6=[p6];function d6(n,t){return A(),k("svg",c6,u6)}const y6={name:"ph-clipboard",render:d6},f6={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},h6=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),m6=[h6];function g6(n,t){return A(),k("svg",f6,m6)}const A6={name:"ph-check-circle",render:g6},_6=["title"],v6=Se({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;M(V);const s=M(ho),o=M(os),l=M(mo);function r(y=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let _=0;_<y;_++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const a=Z(),c=gn();bt(()=>{const y=t.at==null?o==null?void 0:o.value.length:t.at,f=P(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(y||0)),t.ranges.length-1)),h=P(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),_=b5(t.ranges.length-1).map(B=>m+B);o!=null&&o.value&&(o.value.push(..._),cr(()=>_.forEach(B=>va(o.value,B)),c))}Cs(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const B of _){const C=Array.from(B.querySelectorAll(".line")),b=of(C.length,h.value);if(C.forEach((v,w)=>{const $=b.includes(w+1);v.classList.toggle(ns,!0),v.classList.toggle("highlighted",$),v.classList.toggle("dishonored",!$)}),t.maxHeight){const v=Array.from(B.querySelectorAll(".line.highlighted"));v.reduce(($,S)=>S.offsetHeight+$,0)>a.value.offsetHeight?v[0].scrollIntoView({behavior:"smooth",block:"start"}):v.length>0&&v[Math.round((v.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=v3();function d(){var f,h;const y=(h=(f=a.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;y&&u(y)}return(y,f)=>{const h=A6,m=y6;return A(),k("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:tn({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Sn(y.$slots,"default"),x(Ie).codeCopy?(A(),k("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:x(p)?"Copied":"Copy",onClick:f[0]||(f[0]=_=>d())},[x(p)?(A(),R(h,{key:0,class:"p-2 w-8 h-8"})):(A(),R(m,{key:1,class:"p-2 w-8 h-8"}))],8,_6)):Ce("v-if",!0)],4)}}}),ye=q(v6,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),B6=e("h2",null,"1.1 Installations",-1),C6=e("br",null,null,-1),b6=e("ol",null,[e("li",null,[i("macOS - "),e("code",null,"brew install rustup-init")]),e("li",null,[i("Windows - "),e("code",null,"winget install -e --id Rustlang.Rustup")])],-1),D6=e("br",null,null,-1),w6=e("br",null,null,-1),x6=e("p",null,"For updating or uninstalling",-1),k6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"rustup"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"update"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# Updating ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"rustup"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"self"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"uninstall"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# Uninstalling")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"rustup"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"update"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# Updating ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"rustup"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"self"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"uninstall"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# Uninstalling")])])])],-1),E6={__name:"4",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter1.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[B6,C6,b6,D6,w6,x6,F(l,ne({},{ranges:[""]}),{default:E(()=>[k6]),_:1},16)]),_:1},16)}}},T6=q(E6,[["__file","/@slidev/slides/4.md"]]),F6=e("h2",null,"1.2 Hello World!",-1),S6=e("p",null,[i("Inside "),e("code",null,"main.rs")],-1),$6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello, world!"'),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello, world!"'),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),I6=e("p",null,"To run the program:",-1),P6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"rustc"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"main.rs"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# Compile main file")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"./main"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# For Unix")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"."),e("span",{style:{color:"#DBD7CA"}},"\\main "),e("span",{style:{color:"#758575"}},"# For Windows")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"rustc"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"main.rs"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# Compile main file")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"./main"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# For Unix")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"."),e("span",{style:{color:"#393A34"}},"\\main "),e("span",{style:{color:"#A0ADA0"}},"# For Windows")])])])],-1),O6={__name:"5",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter1.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[F6,S6,$6,I6,F(l,ne({},{ranges:[""]}),{default:E(()=>[P6]),_:1},16)]),_:1},16)}}},M6=q(O6,[["__file","/@slidev/slides/5.md"]]),L6=e("h2",null,"1.3 Using Cargo",-1),R6=e("p",null,"Rust’s package manager",-1),j6={__name:"6",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter1.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[L6,R6,F(l,{listClass:"toc",minDepth:"3",mode:"onlyCurrentTree"})]),_:1},16)}}},N6=q(j6,[["__file","/@slidev/slides/6.md"]]),H6=e("h3",null,"Creating project",-1),V6=e("p",null,[e("code",null,"cargo new my-app"),i(" for creating project (change "),e("code",null,"my-app"),i(" to your app name)")],-1),q6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"my-app/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── .gitignore")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── Cargo.toml")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  └── src/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"       └── main.rs")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"my-app/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── .gitignore")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── Cargo.toml")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  └── src/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"       └── main.rs")])])])],-1),W6={__name:"7",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter1.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[H6,V6,F(l,ne({},{ranges:[""]}),{default:E(()=>[q6]),_:1},16)]),_:1},16)}}},G6=q(W6,[["__file","/@slidev/slides/7.md"]]),U6=e("h3",null,"Creating project (cont.)",-1),z6=e("p",null,"Files inside initial project.",-1),Y6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# my-app/Cargo.toml")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"package"),e("span",{style:{color:"#858585"}},"]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"project"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"version"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"0.1.0"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"edition"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"2021"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"dependencies"),e("span",{style:{color:"#858585"}},"]")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# my-app/Cargo.toml")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"package"),e("span",{style:{color:"#8E8F8B"}},"]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"project"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"version"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"0.1.0"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"edition"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"2021"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"dependencies"),e("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),K6=e("br",null,null,-1),Z6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// my-app/src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello, world!"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// my-app/src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello, world!"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),J6={__name:"8",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter1.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[U6,z6,F(l,ne({},{ranges:[""]}),{default:E(()=>[Y6]),_:1},16),K6,F(l,ne({},{ranges:[""]}),{default:E(()=>[Z6]),_:1},16)]),_:1},16)}}},Q6=q(J6,[["__file","/@slidev/slides/8.md"]]),X6=e("h3",null,"Building project & Running project",-1),e0=e("p",null,[i("Build your project using "),e("code",null,"cargo build")],-1),n0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"cargo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"build"),e("span",{style:{color:"#DBD7CA"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Compiling"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"repo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"v0.1.0"),e("span",{style:{color:"#DBD7CA"}}," (/path/to/repo)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"Finished"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"dev"),e("span",{style:{color:"#DBD7CA"}}," [unoptimized "),e("span",{style:{color:"#C98A7D"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"debuginfo]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"target"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.32"),e("span",{style:{color:"#C98A7D"}},"s")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"cargo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"build"),e("span",{style:{color:"#393A34"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Compiling"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"repo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"v0.1.0"),e("span",{style:{color:"#393A34"}}," (/path/to/repo)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"Finished"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"dev"),e("span",{style:{color:"#393A34"}}," [unoptimized "),e("span",{style:{color:"#B56959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"debuginfo]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"target"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.32"),e("span",{style:{color:"#B56959"}},"s")])])])],-1),t0=e("br",null,null,-1),s0=e("p",null,"Run the project by executing binary",-1),o0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"./target/debug/my-app"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# `. \\target\\debug\\my-app.exe` on Windows")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"Hello,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"world!")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"./target/debug/my-app"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# `. \\target\\debug\\my-app.exe` on Windows")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"Hello,"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"world!")])])])],-1),l0={__name:"9",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter1.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[X6,e0,F(l,ne({},{ranges:[""]}),{default:E(()=>[n0]),_:1},16),t0,s0,F(l,ne({},{ranges:[""]}),{default:E(()=>[o0]),_:1},16)]),_:1},16)}}},r0=q(l0,[["__file","/@slidev/slides/9.md"]]),a0=e("h3",null,"Building project & Running project (cont.)",-1),i0=e("p",null,[i("To build and run project, run "),e("code",null,"cargo run")],-1),c0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"cargo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"run")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Finished"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"dev"),e("span",{style:{color:"#DBD7CA"}}," [unoptimized "),e("span",{style:{color:"#C98A7D"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"debuginfo]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"target"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.32"),e("span",{style:{color:"#C98A7D"}},"s")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},"running"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"/target/debug/my-app"),e("span",{style:{color:"#858585"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"Hello,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"world!")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"cargo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"run")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Finished"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"dev"),e("span",{style:{color:"#393A34"}}," [unoptimized "),e("span",{style:{color:"#B56959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"debuginfo]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"target"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.32"),e("span",{style:{color:"#B56959"}},"s")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#6C7834"}},"running"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"/target/debug/my-app"),e("span",{style:{color:"#8E8F8B"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"Hello,"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"world!")])])])],-1),p0=e("p",null,"Or simply checking the file",-1),u0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"cargo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"check"),e("span",{style:{color:"#DBD7CA"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Finished"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"dev"),e("span",{style:{color:"#DBD7CA"}}," [unoptimized "),e("span",{style:{color:"#C98A7D"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"debuginfo]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"target"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.04"),e("span",{style:{color:"#C98A7D"}},"s")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Simply compiles but doesn't generate executable")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"cargo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"check"),e("span",{style:{color:"#393A34"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Finished"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"dev"),e("span",{style:{color:"#393A34"}}," [unoptimized "),e("span",{style:{color:"#B56959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"debuginfo]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"target"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.04"),e("span",{style:{color:"#B56959"}},"s")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Simply compiles but doesn't generate executable")])])])],-1),d0={__name:"10",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter1.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[a0,i0,F(l,ne({},{ranges:[""]}),{default:E(()=>[c0]),_:1},16),p0,F(l,ne({},{ranges:[""]}),{default:E(()=>[u0]),_:1},16)]),_:1},16)}}},y0=q(d0,[["__file","/@slidev/slides/10.md"]]),f0=e("h1",null,"Chapter 2: Common Programming Concepts",-1),h0={__name:"11",setup(n){const t={info:`Chapter 2: Common Programming Concepts
`,transition:"slide-left",layout:"center",hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(mr,te(ee(t)),{default:E(()=>[f0,F(l,{listClass:"toc",minDepth:"2",maxDepth:"3",mode:"onlyCurrentTree",columns:"3"})]),_:1},16)}}},m0=q(h0,[["__file","/@slidev/slides/11.md"]]),g0=e("h2",null,"2.1 Variables and Mutability",-1),A0={__name:"12",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[g0,F(l,{listClass:"toc",minDepth:"3",mode:"onlyCurrentTree"})]),_:1},16)}}},_0=q(A0,[["__file","/@slidev/slides/12.md"]]),v0=e("h3",null,"Mutable & Immutable",-1),B0=e("p",null,"When a variable is immutable, once it bound to a name, it’s can’t be change.",-1),C0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Declare a variable")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Error: cannot assign twice to immutable variable")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // Error")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Declare a variable")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Error: cannot assign twice to immutable variable")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // Error")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),b0={__name:"13",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[v0,B0,F(l,ne({},{ranges:[""]}),{default:E(()=>[C0]),_:1},16)]),_:1},16)}}},D0=q(b0,[["__file","/@slidev/slides/13.md"]]),w0=e("h3",null,"Mutable & Immutable (cont.)",-1),x0=e("p",null,"Error message",-1),k0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"cargo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"run")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       "),e("span",{style:{color:"#A1B567"}},"Compiling"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"variables"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"v0.1.0"),e("span",{style:{color:"#DBD7CA"}}," (file:///projects/variables)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"error[E0384]:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"cannot"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"assign"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"twice"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"immutable"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"variable"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"x"),e("span",{style:{color:"#858585"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#A1B567"}},"-->"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"src/main.rs:4:5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"2"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#E0A569"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"         "),e("span",{style:{color:"#A1B567"}},"-")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"         "),e("span",{style:{color:"#CB7676"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"         "),e("span",{style:{color:"#A1B567"}},"first"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"assignment"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"x"),e("span",{style:{color:"#858585"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"         "),e("span",{style:{color:"#A1B567"}},"help:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"consider"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"making"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"this"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"binding"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"mutable:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"mut"),e("span",{style:{color:"#C98A7D"}}," x"),e("span",{style:{color:"#858585"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"3"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#A1B567"}},"println!("),e("span",{style:{color:"#A1B567"}},'"The value of x is: {x}"'),e("span",{style:{color:"#DBD7CA"}},")"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"4"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#A1B567"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#A1B567"}},"^^^^^"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"cannot"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"assign"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"twice"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"immutable"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"variable")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"For"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"more"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"information"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"about"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"this"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"error,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"try"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"rustc"),e("span",{style:{color:"#C98A7D"}}," "),e("span",{style:{color:"#D4976C"}},"--explain"),e("span",{style:{color:"#C98A7D"}}," E0384"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#E0A569"}},".")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"error:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"could"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"not"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"compile"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"variables"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"due"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"previous"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"error")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"cargo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"run")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       "),e("span",{style:{color:"#6C7834"}},"Compiling"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"variables"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"v0.1.0"),e("span",{style:{color:"#393A34"}}," (file:///projects/variables)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"error[E0384]:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"cannot"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"assign"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"twice"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"immutable"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"variable"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"x"),e("span",{style:{color:"#8E8F8B"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#6C7834"}},"-->"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"src/main.rs:4:5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"2"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#B58451"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"         "),e("span",{style:{color:"#6C7834"}},"-")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"         "),e("span",{style:{color:"#AB5959"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"         "),e("span",{style:{color:"#6C7834"}},"first"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"assignment"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"x"),e("span",{style:{color:"#8E8F8B"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"         "),e("span",{style:{color:"#6C7834"}},"help:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"consider"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"making"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"this"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"binding"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"mutable:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"mut"),e("span",{style:{color:"#B56959"}}," x"),e("span",{style:{color:"#8E8F8B"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"3"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#6C7834"}},"println!("),e("span",{style:{color:"#6C7834"}},'"The value of x is: {x}"'),e("span",{style:{color:"#393A34"}},")"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"4"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#6C7834"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#6C7834"}},"^^^^^"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"cannot"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"assign"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"twice"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"immutable"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"variable")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"For"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"more"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"information"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"about"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"this"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"error,"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"try"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"rustc"),e("span",{style:{color:"#B56959"}}," "),e("span",{style:{color:"#A65E2B"}},"--explain"),e("span",{style:{color:"#B56959"}}," E0384"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#B58451"}},".")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"error:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"could"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"not"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"compile"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"variables"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"due"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"previous"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"error")])])])],-1),E0={__name:"14",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[w0,x0,F(l,ne({},{ranges:["all","9-10"]}),{default:E(()=>[k0]),_:1},16)]),_:1},16)}}},T0=q(E0,[["__file","/@slidev/slides/14.md"]]),F0=e("h3",null,"Mutable & Immutable (cont.)",-1),S0=e("p",null,[i("Change "),e("code",null,"x"),i(" to mutable variable.")],-1),$0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),I0=e("p",null,[i("Change from "),e("code",null,"let x = 5"),i(" to "),e("code",null,"let mut x = 5"),i(".")],-1),P0={__name:"15",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[F0,S0,F(l,ne({},{ranges:["all","2"]}),{default:E(()=>[$0]),_:1},16),I0]),_:1},16)}}},O0=q(P0,[["__file","/@slidev/slides/15.md"]]),Hp=["ul","ol"],cf=Se({props:{depth:{type:[Number,String],default:1},every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var c,p;const n=yc("click"),t=yc("after"),s=(u,d,y)=>Ai(u,[[d,y,"",{hide:this.hide,fade:this.fade}]]);let o=(p=(c=this.$slots).default)==null?void 0:p.call(c);if(!o)return;o=Xd(o);const l=(u,d=1)=>{let y=0;return[u.map(h=>{if(!it(h))return h;if(Hp.includes(h.type)&&Array.isArray(h.children)){const[m,_]=a(h.children,d+1);return y+=_,nn(h,{},[m])}return nn(h)}),y]};let r=0;const a=(u,d=1)=>{let y=0;return[u.map(h=>{if(!it(h))return h;const m=y%this.every===0?n:t;let _,B=0;if(d<+this.depth&&Array.isArray(h.children)){const[b,v]=l(h.children,d);_=nn(h,{},[b]),B=v,y+=v+1}else _=nn(h),y++;const C=this.at!=null?Number(this.at)+Math.floor(r/this.every)+d:(d-1-B).toString();return r++,s(_,m,typeof C=="string"&&!C.startsWith("-")?`+${C}`:C)}),y]};return o.length===1&&Hp.includes(o[0].type)&&Array.isArray(o[0].children)?nn(o[0],{},[a(o[0].children)[0]]):a(o)[0]}}),M0=e("h3",null,"Constants",-1),L0=e("p",null,"Like immutable variables, constants are values that are bound to a name and are not allowed to change, but there are a few differences between constants and variables.",-1),R0=e("li",null,[e("b",null,[e("i",null,"Not")]),i(" allow to use `mut` with constants.")],-1),j0=e("li",null,[i("Constants aren’t just immutable by default — they’re "),e("b",null,[e("i",null,"always")]),i(" immutable.")],-1),N0=e("li",null,"You declare constants using the `const` keyword instead of the `let` keyword.",-1),H0=e("li",null,[i("The type of the value "),e("b",null,[e("i",null,"must")]),i(" be annotated.")],-1),V0=e("li",null,[i("i.e. "),e("code",null,"const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;")],-1),q0={__name:"16",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=cf;return A(),R(le,te(ee(t)),{default:E(()=>[M0,L0,F(l,null,{default:E(()=>[R0,j0,N0,H0,V0]),_:1})]),_:1},16)}}},W0=q(q0,[["__file","/@slidev/slides/16.md"]]),G0=e("h3",null,"Shadowing",-1),U0=e("p",null,[i("We can shadow a variable by repeating the use of "),e("code",null,"let"),i(".")],-1),z0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x in the inner scope is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The value of x in the inner scope is: 12")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The value of x is: 6")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x in the inner scope is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The value of x in the inner scope is: 12")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The value of x is: 6")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Y0={__name:"17",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[G0,U0,F(l,ne({},{ranges:["all","2","2,4,7"]}),{default:E(()=>[z0]),_:1},16)]),_:1},16)}}},K0=q(Y0,[["__file","/@slidev/slides/17.md"]]),Z0=e("h3",null,"Shadowing (cont.)",-1),J0=e("p",null,[i("Shadowing is different from marking a variable as "),e("code",null,"mut"),i(" because we’ll get a compile-time error if we accidentally try to reassign to this variable without using the "),e("code",null,"let"),i(" keyword.")],-1),Q0=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Ok")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Compile-time error.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Ok")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Compile-time error.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),X0=e("p",null,[i("But with "),e("code",null,"mut"),i(" on the other hand.")],-1),eD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Ok")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Ok")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),nD={__name:"18",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[Z0,J0,F(l,ne({},{ranges:[""]}),{default:E(()=>[Q0]),_:1},16),X0,F(l,ne({},{ranges:[""]}),{default:E(()=>[eD]),_:1},16)]),_:1},16)}}},tD=q(nD,[["__file","/@slidev/slides/18.md"]]),sD=e("h3",null,"Shadowing (cont.)",-1),oD=e("p",null,[i("The other difference between "),e("code",null,"mut"),i(" and shadowing is that because we’re effectively creating a new variable when we use the "),e("code",null,"let"),i(" keyword again we can change the type of the value but reuse the same name.")],-1),lD=e("p",null,"Example:",-1),rD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"spaces"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"   "'),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"spaces"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"spaces"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"len"),e("span",{style:{color:"#858585"}},"();")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"spaces"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"   "'),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"spaces"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"spaces"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"len"),e("span",{style:{color:"#8E8F8B"}},"();")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),aD=e("p",null,"Error:",-1),iD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"spaces"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"   "'),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"spaces"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"spaces"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"len"),e("span",{style:{color:"#858585"}},"();"),e("span",{style:{color:"#758575"}}," // Not allowed to mutate a variable’s type")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"spaces"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"   "'),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"spaces"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"spaces"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"len"),e("span",{style:{color:"#8E8F8B"}},"();"),e("span",{style:{color:"#A0ADA0"}}," // Not allowed to mutate a variable’s type")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),cD={__name:"19",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[sD,oD,lD,F(l,ne({},{ranges:[""]}),{default:E(()=>[rD]),_:1},16),aD,F(l,ne({},{ranges:[""]}),{default:E(()=>[iD]),_:1},16)]),_:1},16)}}},pD=q(cD,[["__file","/@slidev/slides/19.md"]]),uD=e("h2",null,"2.2 Data types",-1),dD={__name:"20",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[uD,F(l,{listClass:"toc",minDepth:"3",mode:"onlyCurrentTree"})]),_:1},16)}}},yD=q(dD,[["__file","/@slidev/slides/20.md"]]),fD=e("h3",null,"Scalar Types",-1),hD={__name:"21",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[fD,F(l,{listClass:"toc",minDepth:"4",mode:"onlyCurrentTree"})]),_:1},16)}}},mD=q(hD,[["__file","/@slidev/slides/21.md"]]),gD=e("h4",null,"Integer Types",-1),AD=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Length"),e("th",null,"Signed"),e("th",null,"Unsigned")])]),e("tbody",null,[e("tr",null,[e("td",null,"8-bit"),e("td",null,"i8"),e("td",null,"u8")]),e("tr",null,[e("td",null,"16-bit"),e("td",null,"i16"),e("td",null,"u16")]),e("tr",null,[e("td",null,"32-bit"),e("td",null,"i32"),e("td",null,"u32")]),e("tr",null,[e("td",null,"64-bit"),e("td",null,"i64"),e("td",null,"u64")]),e("tr",null,[e("td",null,"128-bit"),e("td",null,"i128"),e("td",null,"u128")]),e("tr",null,[e("td",null,"arch"),e("td",null,"isize"),e("td",null,"usize")])])],-1),_D={__name:"22",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>(A(),R(le,te(ee(t)),{default:E(()=>[gD,AD]),_:1},16))}},vD=q(_D,[["__file","/@slidev/slides/22.md"]]),BD=e("h4",null,"Floating-Point Types",-1),CD=e("br",null,null,-1),bD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // f64 is default")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"f32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // f32")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // f64 is default")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"f32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // f32")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),DD={__name:"23",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>(A(),R(le,te(ee(t)),{default:E(()=>[BD,CD,bD]),_:1},16))}},wD=q(DD,[["__file","/@slidev/slides/23.md"]]),xD=e("h4",null,"The Boolean Type",-1),kD=e("br",null,null,-1),ED=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"t"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"f"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"bool"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"false"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // with explicit type annotation")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"t"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"f"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"bool"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"false"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // with explicit type annotation")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),TD={__name:"24",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>(A(),R(le,te(ee(t)),{default:E(()=>[xD,kD,ED]),_:1},16))}},FD=q(TD,[["__file","/@slidev/slides/24.md"]]),SD=e("h4",null,"The Character Type",-1),$D=e("br",null,null,-1),ID=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#C98A7D"}},"z"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"z"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#C98A7D"}},"ℤ"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // with explicit type annotation")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"heart_eyed_cat"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#C98A7D"}},"😻"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#B56959"}},"z"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"z"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#B56959"}},"ℤ"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // with explicit type annotation")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"heart_eyed_cat"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#B56959"}},"😻"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),PD=e("br",null,null,-1),OD=e("blockquote",null,[e("p",null,[i("Rust’s "),e("code",null,"char"),i(" type is four bytes in size and represents a Unicode Scalar Value,"),e("br"),i(" which mean it can represents a lot more than ASCII (even emoji)")])],-1),MD={__name:"25",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[SD,$D,F(l,ne({},{ranges:[""]}),{default:E(()=>[ID]),_:1},16),PD,OD]),_:1},16)}}},LD=q(MD,[["__file","/@slidev/slides/25.md"]]),RD=e("h3",null,"Compound Types",-1),jD={__name:"26",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[RD,F(l,{listClass:"toc",minDepth:"4",mode:"onlyCurrentTree"})]),_:1},16)}}},ND=q(jD,[["__file","/@slidev/slides/26.md"]]),HD=e("h4",null,"Tuples",-1),VD=e("p",null,"Declare approach 1",-1),qD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"tup"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"f64"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"500"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"tup"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"f64"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"500"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),WD=e("p",null,"Declare approach 2",-1),GD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"tup"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"500"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // Create tup")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"z"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"tup"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Bind 3 seperate variables")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of y is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"y"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The value of y is: 6.4")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"tup"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"500"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // Create tup")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"z"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"tup"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Bind 3 seperate variables")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of y is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"y"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The value of y is: 6.4")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),UD={__name:"27",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[HD,VD,F(l,ne({},{ranges:[""]}),{default:E(()=>[qD]),_:1},16),WD,F(l,ne({},{ranges:[""]}),{default:E(()=>[GD]),_:1},16)]),_:1},16)}}},zD=q(UD,[["__file","/@slidev/slides/27.md"]]),YD=e("h4",null,"Tuples (cont.)",-1),KD=e("p",null,[i("We can also access a tuple element directly by using a period ("),e("code",null,"."),i(") followed by the index of the value we want to access.")],-1),ZD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"f64"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u8"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"500"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"five_hundred"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"six_point_four"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"one"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"f64"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u8"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"500"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"five_hundred"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"six_point_four"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"one"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),JD={__name:"28",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[YD,KD,F(l,ne({},{ranges:[""]}),{default:E(()=>[ZD]),_:1},16)]),_:1},16)}}},QD=q(JD,[["__file","/@slidev/slides/28.md"]]),XD=e("h4",null,"Array",-1),e4=e("p",null,"Write the values in an array as a comma-separated list inside square brackets.",-1),n4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"];")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"];")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"];"),e("span",{style:{color:"#758575"}}," // Same as `let c = [3, 3, 3, 3, 3];`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"months"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},'"January"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"February"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"March"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"April"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"May"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"June"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"July"'),e("span",{style:{color:"#858585"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"              "),e("span",{style:{color:"#C98A7D"}},'"August"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"September"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"October"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"November"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"December"'),e("span",{style:{color:"#858585"}},"];")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"];")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"];")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"];"),e("span",{style:{color:"#A0ADA0"}}," // Same as `let c = [3, 3, 3, 3, 3];`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"months"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},'"January"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"February"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"March"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"April"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"May"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"June"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"July"'),e("span",{style:{color:"#8E8F8B"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"              "),e("span",{style:{color:"#B56959"}},'"August"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"September"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"October"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"November"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"December"'),e("span",{style:{color:"#8E8F8B"}},"];")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),t4=e("p",null,"Accessing array elements",-1),s4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/* declare as above*/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},", "),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},", "),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},", "),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"months"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},"]);"),e("span",{style:{color:"#758575"}}," // 1, 3, 3, May")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/* declare as above*/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},", "),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},", "),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},", "),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"b"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},"],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"months"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},"]);"),e("span",{style:{color:"#A0ADA0"}}," // 1, 3, 3, May")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),o4={__name:"29",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[XD,e4,F(l,ne({},{ranges:[""]}),{default:E(()=>[n4]),_:1},16),t4,F(l,ne({},{ranges:[""]}),{default:E(()=>[s4]),_:1},16)]),_:1},16)}}},l4=q(o4,[["__file","/@slidev/slides/29.md"]]),r4=e("h2",null,"2.3 Functions",-1),a4={__name:"30",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[r4,F(l,{listClass:"toc",minDepth:"3",mode:"onlyCurrentTree"})]),_:1},16)}}},i4=q(a4,[["__file","/@slidev/slides/30.md"]]),c4=e("h3",null,"Main function",-1),p4=e("p",null,[e("code",null,"main"),i(" function: Entry point of a program.")],-1),u4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello, world!"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello, world!"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),d4=e("br",null,null,-1),y4=e("blockquote",null,[e("p",null,"An entry point is the place in a program where the execution of a program begins, and where the program has access to command line arguments.")],-1),f4={__name:"31",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[c4,p4,F(l,ne({},{ranges:[""]}),{default:E(()=>[u4]),_:1},16),d4,y4]),_:1},16)}}},h4=q(f4,[["__file","/@slidev/slides/31.md"]]),m4=e("h3",null,"Main function (cont.)",-1),g4=e("br",null,null,-1),A4=e("blockquote",null,[e("p",null,"Rust code uses snake case as the conventional style for function and variable names")],-1),_4=e("br",null,null,-1),v4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello, world!"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"another_function"),e("span",{style:{color:"#858585"}},"();")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"another_function"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Another function."'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello, world!"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"another_function"),e("span",{style:{color:"#8E8F8B"}},"();")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"another_function"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Another function."'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),B4=e("br",null,null,-1),C4=e("blockquote",null,[e("p",null,[i("Snake case: "),e("code",null,"let number_of_donuts = 5"),e("br"),i(" Kebab case: "),e("code",null,"let number-of-donuts = 5"),e("br"),i(" Camel case: "),e("code",null,"let numberOfDonuts = 5"),e("br"),i(" Pascal case: "),e("code",null,"let NumberOfDonuts = 5")])],-1),b4={__name:"32",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[m4,g4,A4,_4,F(l,ne({},{ranges:["all","4,7-9"]}),{default:E(()=>[v4]),_:1},16),B4,C4]),_:1},16)}}},D4=q(b4,[["__file","/@slidev/slides/32.md"]]),w4=e("h3",null,"Parameters",-1),x4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"another_function"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"print_labeled_measurement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#C98A7D"}},"h"),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Single parameter")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"another_function"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The value of x is: 5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Multi-parameters")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"print_labeled_measurement"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"unit_label"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"char"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The measurement is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"value"),e("span",{style:{color:"#858585"}},"}{"),e("span",{style:{color:"#C98A7D"}},"unit_label"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The measurement is: 5h")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"another_function"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"print_labeled_measurement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#B56959"}},"h"),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Single parameter")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"another_function"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The value of x is: 5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Multi-parameters")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"print_labeled_measurement"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"unit_label"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"char"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The measurement is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"value"),e("span",{style:{color:"#8E8F8B"}},"}{"),e("span",{style:{color:"#B56959"}},"unit_label"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The measurement is: 5h")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),k4={__name:"33",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[w4,F(l,ne({},{ranges:["all","2,6-9","3,11-14"]}),{default:E(()=>[x4]),_:1},16)]),_:1},16)}}},E4=q(k4,[["__file","/@slidev/slides/33.md"]]),T4=e("h3",null,"Statements and Expressions",-1),F4=e("p",null,[e("strong",null,"Statements"),i(" are instructions that perform some action and "),e("em",null,"do not return a value"),i("."),e("br"),e("strong",null,"Expressions"),i(" evaluate to a "),e("em",null,"resultant value"),i(".")],-1),S4=e("br",null,null,-1),$4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Statement, which set x to 3")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#758575"}}," // Expression, which return `x + 1`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of y is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"y"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The value of y is 4")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Statement, which set x to 3")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#A0ADA0"}}," // Expression, which return `x + 1`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of y is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"y"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The value of y is 4")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),I4=e("p",null,[i("The "),e("code",null,"x + 1"),i(" doesn’t have a semicolon at the end of the line, which return the value of "),e("code",null,"x + 1"),i("."),e("br"),i(" If you add a semicolon at the end of the line, you turn it into a statement, which does not return a value.")],-1),P4={__name:"34",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[T4,F4,S4,F(l,ne({},{ranges:["all","3","4"]}),{default:E(()=>[$4]),_:1},16),I4]),_:1},16)}}},O4=q(P4,[["__file","/@slidev/slides/34.md"]]),M4=e("h3",null,"Functions with Return values",-1),L4=e("br",null,null,-1),R4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Perfectly valid function in Rust")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"five"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#6394BF"}},"5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Perfectly valid function in Rust")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"five"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#296AA3"}},"5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),j4=e("p",null,"Another example:",-1),N4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"plus_one"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"plus_two"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // Error")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // `The value of x is: 6`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of y is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"y"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // Error")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"plus_one"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#758575"}},"  // Expression, which return `x + 1` as an i32")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"plus_two"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"i32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#758575"}}," // This function requires a return with type i32.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Statement, which do not return an i32, and therefore no return value in this function -> Error")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"plus_one"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"plus_two"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // Error")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // `The value of x is: 6`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of y is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"y"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // Error")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"plus_one"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#A0ADA0"}},"  // Expression, which return `x + 1` as an i32")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"plus_two"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"i32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A0ADA0"}}," // This function requires a return with type i32.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Statement, which do not return an i32, and therefore no return value in this function -> Error")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),H4={__name:"35",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[M4,L4,F(l,ne({},{ranges:[""]}),{default:E(()=>[R4]),_:1},16),j4,F(l,ne({},{ranges:["all","2,5,10","3,6,14"]}),{default:E(()=>[N4]),_:1},16)]),_:1},16)}}},V4=q(H4,[["__file","/@slidev/slides/35.md"]]),q4=e("h2",null,"2.4 Comments",-1),W4=e("ul",null,[e("li",null,[i("Add "),e("code",null,"//"),i(" before your comment")])],-1),G4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// This is a comment")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Hello, world"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // This is a comment, too.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// This is a comment")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Hello, world"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // This is a comment, too.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),U4={__name:"36",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[q4,W4,F(l,ne({},{ranges:[""]}),{default:E(()=>[G4]),_:1},16)]),_:1},16)}}},z4=q(U4,[["__file","/@slidev/slides/36.md"]]),Y4=e("h2",null,"2.5 Control Flow",-1),K4={__name:"37",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[Y4,F(l,{listClass:"toc",minDepth:"3",mode:"onlyCurrentTree"})]),_:1},16)}}},Z4=q(K4,[["__file","/@slidev/slides/37.md"]]),J4=e("h3",null,"If experssion",-1),Q4=e("p",null,"Example:",-1),X4=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Set number to 6")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"number is divisible by 4"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#758575"}}," // 6 % 3 equal to 0, therefore use this condition")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"number is divisible by 3"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // number is divisible by 3")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"number is divisible by 2"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"number is not divisible by 4, 3, or 2"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Set number to 6")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"number is divisible by 4"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A0ADA0"}}," // 6 % 3 equal to 0, therefore use this condition")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"number is divisible by 3"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // number is divisible by 3")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"number is divisible by 2"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"number is not divisible by 4, 3, or 2"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ew={__name:"38",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[J4,Q4,F(l,ne({},{ranges:[""]}),{default:E(()=>[X4]),_:1},16)]),_:1},16)}}},nw=q(ew,[["__file","/@slidev/slides/38.md"]]),tw=e("h3",null,"If expression (cont.)",-1),sw=e("p",null,[i("Using "),e("code",null,"if"),i(" in "),e("code",null,"let"),i(" statement")],-1),ow=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"condition"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"condition"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of number is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"number"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The value of number is: 5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"condition"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"condition"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of number is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"number"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The value of number is: 5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),lw=e("p",null,"If the types are mismatched, as in the following example, we’ll get an error.",-1),rw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"condition"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"condition"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"six"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of number is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"number"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // Error")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"condition"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"condition"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"six"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of number is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"number"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // Error")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),aw={__name:"39",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[tw,sw,F(l,ne({},{ranges:[""]}),{default:E(()=>[ow]),_:1},16),lw,F(l,ne({},{ranges:["all","4"]}),{default:E(()=>[rw]),_:1},16)]),_:1},16)}}},iw=q(aw,[["__file","/@slidev/slides/39.md"]]),cw=e("h3",null,"If expression (cont.)",-1),pw=e("p",null,"Error message:",-1),uw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"cargo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"run")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#A1B567"}},"Compiling"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"branches"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"v0.1.0"),e("span",{style:{color:"#DBD7CA"}}," (file:///projects/branches)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"error[E0308]:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#C98A7D"}},"if"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"and"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#C98A7D"}},"else"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"have"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"incompatible"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"types")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"-->"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"src/main.rs:4:44")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"4"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#E0A569"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"condition"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"six"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"                                 "),e("span",{style:{color:"#A1B567"}},"-"),e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#C98A7D"}},"^^^^^"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"expected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"integer,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"found"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`&"),e("span",{style:{color:"#A1B567"}},"str"),e("span",{style:{color:"#858585"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"                                 "),e("span",{style:{color:"#CB7676"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"                                 "),e("span",{style:{color:"#A1B567"}},"expected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"because"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"this")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"For"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"more"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"information"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"about"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"this"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"error,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"try"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"rustc"),e("span",{style:{color:"#C98A7D"}}," "),e("span",{style:{color:"#D4976C"}},"--explain"),e("span",{style:{color:"#C98A7D"}}," E0308"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#E0A569"}},".")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"error:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"could"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"not"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"compile"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"branches"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"due"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"previous"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"error")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"cargo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"run")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#6C7834"}},"Compiling"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"branches"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"v0.1.0"),e("span",{style:{color:"#393A34"}}," (file:///projects/branches)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"error[E0308]:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#B56959"}},"if"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"and"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#B56959"}},"else"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"have"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"incompatible"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"types")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"-->"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"src/main.rs:4:44")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"4"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#B58451"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"condition"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"six"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"                                 "),e("span",{style:{color:"#6C7834"}},"-"),e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#B56959"}},"^^^^^"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"expected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"integer,"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"found"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`&"),e("span",{style:{color:"#6C7834"}},"str"),e("span",{style:{color:"#8E8F8B"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"                                 "),e("span",{style:{color:"#AB5959"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"                                 "),e("span",{style:{color:"#6C7834"}},"expected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"because"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"of"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"this")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"For"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"more"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"information"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"about"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"this"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"error,"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"try"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"rustc"),e("span",{style:{color:"#B56959"}}," "),e("span",{style:{color:"#A65E2B"}},"--explain"),e("span",{style:{color:"#B56959"}}," E0308"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#B58451"}},".")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"error:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"could"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"not"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"compile"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"branches"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"due"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"previous"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"error")])])])],-1),dw={__name:"40",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[cw,pw,F(l,ne({},{ranges:["all","7,9"]}),{default:E(()=>[uw]),_:1},16)]),_:1},16)}}},yw=q(dw,[["__file","/@slidev/slides/40.md"]]),fw=e("h3",null,"Loop",-1),hw=e("p",null,[i("Rust has three kinds of loops: "),e("code",null,"loop"),i(", "),e("code",null,"while"),i(", and "),e("code",null,"for"),i(".")],-1),mw={__name:"41",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(le,te(ee(t)),{default:E(()=>[fw,hw,F(l,{listClass:"toc",minDepth:"4",maxDepth:"4",mode:"onlyCurrentTree",columns:"1"})]),_:1},16)}}},gw=q(mw,[["__file","/@slidev/slides/41.md"]]),Aw=e("h4",null,"loop",-1),_w=e("br",null,null,-1),vw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"counter"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // First, set counter to 0.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"result"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"loop"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"counter"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Every loop iteration, counter is incremented by 1.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"counter"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"break"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"counter"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // When counter reaches 10, break with `counter * 2`.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The result is '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"result"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // `The result is 20`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"counter"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // First, set counter to 0.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"result"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"loop"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"counter"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Every loop iteration, counter is incremented by 1.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"counter"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"break"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"counter"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // When counter reaches 10, break with `counter * 2`.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The result is '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"result"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // `The result is 20`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Bw={__name:"42",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[Aw,_w,F(l,ne({},{ranges:["all","2","5","4","7","8","12"]}),{default:E(()=>[vw]),_:1},16)]),_:1},16)}}},Cw=q(Bw,[["__file","/@slidev/slides/42.md"]]),bw=e("h4",null,"loop (cont.)",-1),Dw=e("ul",null,[e("li",null,[e("p",null,[i("If you have loops within loops, "),e("code",null,"break"),i(" and "),e("code",null,"continue"),i(" apply to the innermost loop at that point. "),e("br"),i(" You can optionally specify a "),e("em",null,"loop label"),i(" on a loop that you can then use with "),e("code",null,"break"),i(" or "),e("code",null,"continue"),i(" to "),e("br"),i(" specify that those keywords apply to the labeled loop instead of the innermost loop.")])]),e("li",null,[e("p",null,"Loop labels must begin with a single quote.")])],-1),ww=e("p",null,"Ex.",-1),xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"break"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#A1B567"}},"label")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"break"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#6C7834"}},"label")])])])],-1),kw={__name:"43",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[bw,Dw,ww,F(l,ne({},{ranges:[""]}),{default:E(()=>[xw]),_:1},16)]),_:1},16)}}},Ew=q(kw,[["__file","/@slidev/slides/43.md"]]),Tw=e("h4",null,"loop (cont.)",-1),Fw=e("p",null,"Example:",-1),Sw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Set count to 0.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#A1B567"}},"counting_up"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"loop"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#758575"}}," // label `counting_up`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"count = '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"count"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"remaining"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Set remaining to 10")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"loop"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"remaining = '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"remaining"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"remaining"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"9"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#758575"}}," // When remaining is 9.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#4D9375"}},"break"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Doesn't specify a lable, will exit the inner loop only.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#4D9375"}},"break"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"'"),e("span",{style:{color:"#A1B567"}},"counting_up"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Will exit the outer loop")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#B8A965"}},"remaining"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Every loop iteration will decrece the remaining by 1.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"End count = '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"count"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // `End count = 1`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Set count to 0.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#6C7834"}},"counting_up"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"loop"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A0ADA0"}}," // label `counting_up`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"count = '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"count"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"remaining"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Set remaining to 10")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"loop"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"remaining = '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"remaining"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"remaining"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"9"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A0ADA0"}}," // When remaining is 9.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#1C6B48"}},"break"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Doesn't specify a lable, will exit the inner loop only.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#1C6B48"}},"break"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"'"),e("span",{style:{color:"#6C7834"}},"counting_up"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Will exit the outer loop")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8C862B"}},"remaining"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Every loop iteration will decrece the remaining by 1.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"End count = '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"count"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // `End count = 1`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$w={__name:"44",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[Tw,Fw,F(l,ne({},{ranges:["all","2","3-5","7-16","15","9-11","18","3-5","7-16","12-14","20","all"]}),{default:E(()=>[Sw]),_:1},16)]),_:1},16)}}},Iw=q($w,[["__file","/@slidev/slides/44.md"]]),Pw=e("h4",null,"loop (cont.)",-1),Ow=e("br",null,null,-1),Mw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Example outout: ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"       "),e("span",{style:{color:"#758575"}},'# line 4: `println!("count = {count}");`')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"remaining"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},'# line 8: `println!("remaining = {remaining}");`')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"remaining"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"9"),e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#758575"}},"# After one inner loop iteration, print remaining value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},"       "),e("span",{style:{color:"#758575"}},"# line 4: Print count value after breaking inner loop iteration")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"remaining"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"# line 5: Reset remaining value to 10j")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"End"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"count"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#758575"}},"# line 20: While count value isn't reset, `count = 1` and break outer loop")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Example outout: ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"       "),e("span",{style:{color:"#A0ADA0"}},'# line 4: `println!("count = {count}");`')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"remaining"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},'# line 8: `println!("remaining = {remaining}");`')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"remaining"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"9"),e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#A0ADA0"}},"# After one inner loop iteration, print remaining value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},"       "),e("span",{style:{color:"#A0ADA0"}},"# line 4: Print count value after breaking inner loop iteration")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"remaining"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# line 5: Reset remaining value to 10j")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"End"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"count"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#A0ADA0"}},"# line 20: While count value isn't reset, `count = 1` and break outer loop")])])])],-1),Lw={__name:"45",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[Pw,Ow,F(l,ne({},{ranges:[""]}),{default:E(()=>[Mw]),_:1},16)]),_:1},16)}}},Rw=q(Lw,[["__file","/@slidev/slides/45.md"]]),jw=e("h4",null,"while",-1),Nw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"while"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#758575"}}," // When number isn't equal to 0, continue the loop.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"number"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'!"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // Every loop iteration will print number with `!` at the end.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Every loop iteration will decrete number by 1.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"LIFTOFF!!!"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // After loop iteration, print `LIFTOFF!!`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"3"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"while"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A0ADA0"}}," // When number isn't equal to 0, continue the loop.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"number"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'!"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // Every loop iteration will print number with `!` at the end.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Every loop iteration will decrete number by 1.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"LIFTOFF!!!"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // After loop iteration, print `LIFTOFF!!`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Hw=e("p",null,"Output:",-1),Vw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"3!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"2!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"1!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"LIFTOFF!!!")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"3!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"2!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"1!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"LIFTOFF!!!")])])])],-1),qw={__name:"46",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[jw,F(l,ne({},{ranges:[""]}),{default:E(()=>[Nw]),_:1},16),Hw,F(l,ne({},{ranges:[""]}),{default:E(()=>[Vw]),_:1},16)]),_:1},16)}}},Ww=q(qw,[["__file","/@slidev/slides/46.md"]]),Gw=e("h4",null,"for",-1),Uw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"20"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"30"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"40"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"50"),e("span",{style:{color:"#858585"}},"];")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"element"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#758575"}}," // Iterate through the element in array a as `element`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"print!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"element"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},', "'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // 10, 20, 30, 40, 50,")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    //or")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},".."),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"rev"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#758575"}}," // Iterate through the element from 1 to 4 in reverse order as `number`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"number"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},', "'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // 3, 2, 1,")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"20"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"30"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"40"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"50"),e("span",{style:{color:"#8E8F8B"}},"];")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"element"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"a"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A0ADA0"}}," // Iterate through the element in array a as `element`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"print!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"element"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},', "'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // 10, 20, 30, 40, 50,")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    //or")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},".."),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"rev"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A0ADA0"}}," // Iterate through the element from 1 to 4 in reverse order as `number`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"number"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},', "'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // 3, 2, 1,")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),zw={__name:"47",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[Gw,F(l,ne({},{ranges:[""]}),{default:E(()=>[Uw]),_:1},16)]),_:1},16)}}},Yw=q(zw,[["__file","/@slidev/slides/47.md"]]),Kw=e("h4",null,"for (cont.)",-1),Zw=e("br",null,null,-1),Jw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"e"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},".."),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#758575"}}," // Only iterate through 1 to 3 ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"e"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},', "'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // 1, 2, 3,")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"e"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},".."),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#A0ADA0"}}," // Only iterate through 1 to 3 ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"e"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},', "'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // 1, 2, 3,")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Qw=e("p",null,[i("If you want to iterate through the elements contain start and end, use "),e("code",null,"..="),i(" instead.")],-1),Xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"e"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"..="),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"e"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},', "'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // 1, 2, 3, 4, ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"e"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"..="),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"e"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},', "'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // 1, 2, 3, 4, ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),e2={__name:"48",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[Kw,Zw,F(l,ne({},{ranges:[""]}),{default:E(()=>[Jw]),_:1},16),Qw,F(l,ne({},{ranges:[""]}),{default:E(()=>[Xw]),_:1},16)]),_:1},16)}}},n2=q(e2,[["__file","/@slidev/slides/48.md"]]),t2=e("h1",null,"Chapter 3: Project I - Guessing Game",-1),s2={__name:"49",setup(n){const t={info:`Chapter 2: Common Programming Concepts
`,transition:"slide-left",layout:"center",hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=Hn;return A(),R(mr,te(ee(t)),{default:E(()=>[t2,F(l,{listClass:"toc",minDepth:"2",maxDepth:"3",mode:"onlyCurrentTree"})]),_:1},16)}}},o2=q(s2,[["__file","/@slidev/slides/49.md"]]),l2=e("h2",null,"Setting Up New Project",-1),r2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"cargo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"guessing_game"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# Create a new project named `guessing_game`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"cd"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"guessing_game"),e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#758575"}},"# Move into the project repository")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"cargo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"guessing_game"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# Create a new project named `guessing_game`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"cd"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"guessing_game"),e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#A0ADA0"}},"# Move into the project repository")])])])],-1),a2=e("p",null,"Project structure:",-1),i2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"guessing_game/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── .gitignore")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  ├── Cargo.toml")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"  └── src/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"       └── main.rs")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"guessing_game/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── .gitignore")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  ├── Cargo.toml")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"  └── src/")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"       └── main.rs")])])])],-1),c2={__name:"50",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[l2,F(l,ne({},{ranges:[""]}),{default:E(()=>[r2]),_:1},16),a2,F(l,ne({},{ranges:[""]}),{default:E(()=>[i2]),_:1},16)]),_:1},16)}}},p2=q(c2,[["__file","/@slidev/slides/50.md"]]),u2=e("h2",null,"Processing a Game Part I",-1),d2=e("br",null,null,-1),y2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#DBD7CA"}},"io"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Bring `io` library into code. This library provides stdin function we will use later.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"main"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Guess the number!!"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Please input your guess."'),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // Make a new string name `guess`, we will store your input later inside this variable.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"new"),e("span",{style:{color:"#858585"}},"();")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#393A34"}},"io"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Bring `io` library into code. This library provides stdin function we will use later.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"main"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Guess the number!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Please input your guess."'),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // Make a new string name `guess`, we will store your input later inside this variable.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"new"),e("span",{style:{color:"#8E8F8B"}},"();")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),f2={__name:"51",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[u2,d2,F(l,ne({},{ranges:["all","2","4-10","8,9"]}),{default:E(()=>[y2]),_:1},16)]),_:1},16)}}},h2=q(f2,[["__file","/@slidev/slides/51.md"]]),m2=e("h2",null,"Processing a Game Part I (cont.)",-1),g2=e("br",null,null,-1),A2=e("p",null,[i("To read in the user input, we need "),e("code",null,"stdin"),i(" from "),e("code",null,"io"),i(" library.")],-1),_2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"io"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"stdin"),e("span",{style:{color:"#858585"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"read_line"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#758575"}}," // Read input into `guess`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"expect"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Failed to read line"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}},' // If we failed to read line, `expect` will return "Failed to read line".')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"io"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"stdin"),e("span",{style:{color:"#8E8F8B"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"read_line"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#A0ADA0"}}," // Read input into `guess`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"expect"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Failed to read line"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}},' // If we failed to read line, `expect` will return "Failed to read line".')])])])],-1),v2=e("p",null,[i("This block of code could be written in one line, but it’ll be difficult to read. It’s often wise to introduce a new line. We will cover this "),e("code",null,"method_name()"),i(" syntax more detail in the future.")],-1),B2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"io"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"stdin"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"read_line"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"expect"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Failed to read line"'),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"io"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"stdin"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"read_line"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"expect"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Failed to read line"'),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),C2=e("p",null,"After reading value, we print out the value of input.",-1),b2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Your guess is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"guess"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // This will print out the value of `guess`.")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Your guess is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"guess"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // This will print out the value of `guess`.")])])])],-1),D2=e("p",null,[i("As we read the input into variable "),e("code",null,"guess"),i(" via "),e("code",null,"io::stdin()"),i(", we now can print it out using "),e("code",null,"{}"),i("."),e("br"),i(" We will discuss this in the next page.")],-1),w2={__name:"52",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[m2,g2,A2,F(l,ne({},{ranges:[""]}),{default:E(()=>[_2]),_:1},16),v2,F(l,ne({},{ranges:[""]}),{default:E(()=>[B2]),_:1},16),C2,F(l,ne({},{ranges:[""]}),{default:E(()=>[b2]),_:1},16),D2]),_:1},16)}}},x2=q(w2,[["__file","/@slidev/slides/52.md"]]),k2=e("h2",null,"Processing a Game Part I (cont.)",-1),E2=e("br",null,null,-1),T2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Your guess is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"guess"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // This will print out the value of `guess`.")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Your guess is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"guess"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // This will print out the value of `guess`.")])])])],-1),F2=e("p",null,[i("This line now print not only string but also contains the user’s input. The "),e("code",null,"{}"),i(" set of curly brackets is a placeholder."),e("br"),i(" When printing the value of a variable, the variable name can go inside the curly brackets.")],-1),S2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'."'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The value of x is 5.")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'."'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The value of x is 5.")])])])],-1),$2=e("p",null,"When printing the result of evaluating an expression, place empty curly brackets in the format string, then follow the format string with a comma-separated list of expressions to print in each empty curly bracket placeholder in the same order.",-1),I2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is '),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}}," and the value of y is "),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'."'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"x"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // The value of x is 5 and the value of y is 6.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"The value of x is '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"x"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}}," and the value of y is "),e("span",{style:{color:"#858585"}},"{}"),e("span",{style:{color:"#C98A7D"}},'."'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"y"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}},"   // You can alse do this and it has the same output as above.")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is '),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}}," and the value of y is "),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'."'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"x"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // The value of x is 5 and the value of y is 6.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"The value of x is '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"x"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}}," and the value of y is "),e("span",{style:{color:"#8E8F8B"}},"{}"),e("span",{style:{color:"#B56959"}},'."'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"y"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}},"   // You can alse do this and it has the same output as above.")])])])],-1),P2={__name:"53",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[k2,E2,F(l,ne({},{ranges:[""]}),{default:E(()=>[T2]),_:1},16),F2,F(l,ne({},{ranges:[""]}),{default:E(()=>[S2]),_:1},16),$2,F(l,ne({},{ranges:[""]}),{default:E(()=>[I2]),_:1},16)]),_:1},16)}}},O2=q(P2,[["__file","/@slidev/slides/53.md"]]),M2=e("h2",null,"Processing a Game Part I (cont.)",-1),L2=e("p",null,"So the final code of first part will be:",-1),R2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#DBD7CA"}},"io"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Bring `io` library into code. This library provides stdin function we will use later.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"main"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Guess the number!!"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Please input your guess."'),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // Make a new string name `guess`, we will store your input later inside this variable.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"new"),e("span",{style:{color:"#858585"}},"();")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"io"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"stdin"),e("span",{style:{color:"#858585"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"read_line"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#758575"}}," // Read input into `guess`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"expect"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Failed to read line"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}},' // If we failed to read line, `expect` will return "Failed to read line".')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Your guess is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"guess"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // This will print out the value of `guess`.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#393A34"}},"io"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Bring `io` library into code. This library provides stdin function we will use later.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"main"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Guess the number!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Please input your guess."'),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // Make a new string name `guess`, we will store your input later inside this variable.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"new"),e("span",{style:{color:"#8E8F8B"}},"();")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"io"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"stdin"),e("span",{style:{color:"#8E8F8B"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"read_line"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#A0ADA0"}}," // Read input into `guess`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"expect"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Failed to read line"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}},' // If we failed to read line, `expect` will return "Failed to read line".')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Your guess is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"guess"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // This will print out the value of `guess`.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),j2={__name:"54",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[M2,L2,F(l,ne({},{ranges:[""]}),{default:E(()=>[R2]),_:1},16)]),_:1},16)}}},N2=q(j2,[["__file","/@slidev/slides/54.md"]]),H2=e("h2",null,"Tesing of First Part",-1),V2=e("br",null,null,-1),q2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"cargo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"run"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# Run our project.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#A1B567"}},"Compiling"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"guessing_game"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"v0.1.0"),e("span",{style:{color:"#DBD7CA"}}," (file:///projects/guessing_game)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Finished"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"dev"),e("span",{style:{color:"#DBD7CA"}}," [unoptimized "),e("span",{style:{color:"#C98A7D"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"debuginfo]"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"target"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"in"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6.44"),e("span",{style:{color:"#C98A7D"}},"s")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#A1B567"}},"Running"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"target/debug/guessing_game"),e("span",{style:{color:"#858585"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"Guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"the"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"number!!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"Please"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"input"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"your"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"guess.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"6")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"Your"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"is:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"6")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"cargo"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"run"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# Run our project.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#6C7834"}},"Compiling"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"guessing_game"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"v0.1.0"),e("span",{style:{color:"#393A34"}}," (file:///projects/guessing_game)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Finished"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"dev"),e("span",{style:{color:"#393A34"}}," [unoptimized "),e("span",{style:{color:"#B56959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"debuginfo]"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"target"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"in"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6.44"),e("span",{style:{color:"#B56959"}},"s")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#6C7834"}},"Running"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"target/debug/guessing_game"),e("span",{style:{color:"#8E8F8B"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"Guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"the"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"number!!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"Please"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"input"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"your"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"guess.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"6")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"Your"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"is:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"6")])])])],-1),W2={__name:"55",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[H2,V2,F(l,ne({},{ranges:[""]}),{default:E(()=>[q2]),_:1},16)]),_:1},16)}}},G2=q(W2,[["__file","/@slidev/slides/55.md"]]),U2=e("h2",null,"Processing a Game Part II",-1),z2=e("p",null,[i("Now, we need to generate a random(secret) number for user to guess. While Rust doesn’t include random number functionality, we need to import "),e("code",null,"rand"),i(" crate to use this function in our project.")],-1),Y2=e("p",null,[i("Inside "),e("code",null,"Cargo.toml"),i(", we need to add the "),e("code",null,"rand"),i(" crate.")],-1),K2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"dependencies"),e("span",{style:{color:"#858585"}},"]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"rand"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"0.8.5"')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"dependencies"),e("span",{style:{color:"#8E8F8B"}},"]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"rand"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"0.8.5"')])])])],-1),Z2=e("p",null,[i("You can think of this as a tool box and "),e("code",null,"std"),i(" is a built in tool box. If you need any addition tool that’s not inside "),e("code",null,"std"),i(", we need to mention it explicitly in "),e("code",null,"Cargo.toml"),i(".")],-1),J2=e("p",null,[i("Now, without changing other code in "),e("code",null,"src/main.rs"),i(", run "),e("code",null,"cargo build"),i(". When we include new external dependency, "),e("code",null,"cargo"),i(" will check it and download it inside "),e("code",null,"./target"),i(". For more Cargo and it’s ecosystem, we’ll discuss in the later chapter.")],-1),Q2={__name:"56",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[U2,z2,Y2,F(l,ne({},{ranges:[""]}),{default:E(()=>[K2]),_:1},16),Z2,J2]),_:1},16)}}},X2=q(Q2,[["__file","/@slidev/slides/56.md"]]),ex=e("h2",null,"Processing a Game Part II (cont.)",-1),nx=e("p",null,[i("To generate a random number, we write "),e("code",null,"rand::thread_rng().gen_range(1..=100)"),i(".")],-1),tx=e("ol",null,[e("li",null,[i("First, we call the "),e("code",null,"rand::thread_rng()"),i(" function that gives us a particaular random number.")]),e("li",null,[i("Then, we call "),e("code",null,"gen_range()"),i(" method on the random number generator.")]),e("li",null,[i("The above method takes a range expression as an argument and generates a random number in the range. So, we specify it by passing "),e("code",null,"1..=100"),i(".")])],-1),sx=e("p",null,[i("Now, we add the following into "),e("code",null,"main.rs"),i(":")],-1),ox=e("ul",null,[e("li",null,[e("code",null,"use rand::Rng;")]),e("li",null,[e("code",null,"let secret_numner = rand::thread_rng().gen_range(1..=100);")])],-1),lx={__name:"57",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>(A(),R(le,te(ee(t)),{default:E(()=>[ex,nx,tx,sx,ox]),_:1},16))}},rx=q(lx,[["__file","/@slidev/slides/57.md"]]),ax=e("h2",null,"Processing a Game Part II (cont.)",-1),ix=e("br",null,null,-1),cx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#DBD7CA"}},"io"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"    // Bring `io` library into code. This library provides stdin function we will use later.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"rand"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Rng"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}},"  // Use the tool box `rand::Rng` so that we can use the tool inside such as `rand::thread_rng()`.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"main"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Guess the number!!"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"secret_numner"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"rand"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"thread_rng"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"gen_range"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"..="),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // Generate the secret number using our new imported tool.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Please input your guess."'),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // Make a new string name `guess`, we will store your input later inside this variable.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"new"),e("span",{style:{color:"#858585"}},"();")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"io"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"stdin"),e("span",{style:{color:"#858585"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"read_line"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#758575"}}," // Read input into `guess`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"expect"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Failed to read line"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}},' // If we failed to read line, `expect` will return "Failed to read line".')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Your guess is: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"guess"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#758575"}}," // This will print out the value of `guess`.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#393A34"}},"io"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"    // Bring `io` library into code. This library provides stdin function we will use later.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"rand"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Rng"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}},"  // Use the tool box `rand::Rng` so that we can use the tool inside such as `rand::thread_rng()`.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"main"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Guess the number!!"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"secret_numner"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"rand"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"thread_rng"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"gen_range"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"..="),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // Generate the secret number using our new imported tool.")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Please input your guess."'),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // Make a new string name `guess`, we will store your input later inside this variable.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"new"),e("span",{style:{color:"#8E8F8B"}},"();")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"io"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"stdin"),e("span",{style:{color:"#8E8F8B"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"read_line"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#A0ADA0"}}," // Read input into `guess`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"expect"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Failed to read line"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}},' // If we failed to read line, `expect` will return "Failed to read line".')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Your guess is: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"guess"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#A0ADA0"}}," // This will print out the value of `guess`.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),px={__name:"58",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[ax,ix,F(l,ne({},{ranges:["all","3","8"]}),{default:E(()=>[cx]),_:1},16)]),_:1},16)}}},ux=q(px,[["__file","/@slidev/slides/58.md"]]),dx=e("h2",null,"Processing a Game Part II (cont.)",-1),yx=e("p",null,"Comparing the guess to the input.",-1),fx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#DBD7CA"}},"io"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"cmp"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#758575"}}," // Import a new tool called Ordering, this could help us in comparing numbers.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"rand"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Rng"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"main"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // -- snip -- ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"cmp"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"secret_numner"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Less"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too small!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Greater"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too big!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Equal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"You win!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src/main.rs")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#393A34"}},"io"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"cmp"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A0ADA0"}}," // Import a new tool called Ordering, this could help us in comparing numbers.")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"rand"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Rng"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"main"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // -- snip -- ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"cmp"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"secret_numner"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Less"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too small!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Greater"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too big!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Equal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"You win!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),hx={__name:"59",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[dx,yx,F(l,ne({},{ranges:[""]}),{default:E(()=>[fx]),_:1},16)]),_:1},16)}}},mx=q(hx,[["__file","/@slidev/slides/59.md"]]),gx=e("h2",null,"Processing a Game Part II (cont.)",-1),Ax=e("p",null,[i("The "),e("code",null,"match"),i(" expression will get the return value of "),e("code",null,"guess.cmp(&secret_number)"),i(" and compare it to the following arms.")],-1),_x=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"cmp"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"secret_numner"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Less"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too small!"'),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#758575"}},"  // <- arm")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Greater"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too big!"'),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#758575"}}," // <- arm")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Equal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"You win!"'),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#758575"}},"   // <- arm")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"cmp"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"secret_numner"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Less"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too small!"'),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#A0ADA0"}},"  // <- arm")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Greater"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too big!"'),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#A0ADA0"}}," // <- arm")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Equal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"You win!"'),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#A0ADA0"}},"   // <- arm")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),vx=e("p",null,[i("If the return value of "),e("code",null,"guess.cmp(&secret_number)"),i(" is "),e("code",null,"Ordering::Less"),i(", the associated code will be execute and print "),e("code",null,"Too small!"),i(" to the screen. The "),e("code",null,"match"),i(" expression ends after the first successful match.")],-1),Bx={__name:"60",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[gx,Ax,F(l,ne({},{ranges:[""]}),{default:E(()=>[_x]),_:1},16),vx]),_:1},16)}}},Cx=q(Bx,[["__file","/@slidev/slides/60.md"]]),bx=e("h2",null,"Processing a Game Part II (cont.)",-1),Dx=e("p",null,[i("However, this "),e("strong",null,"won’t"),i(" compile. (mismatched type)")],-1),wx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"error[E0308]:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"mismatched"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"types")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},"-->"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"src/main.rs:22:21")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#CB7676"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"22"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#A1B567"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"guess.cmp"),e("span",{style:{color:"#858585"}},"(&"),e("span",{style:{color:"#A1B567"}},"secret_number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"                 "),e("span",{style:{color:"#A1B567"}},"---"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"^^^^^^^^^^^^^^"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"expected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"struct"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"found"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"integer")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"                 "),e("span",{style:{color:"#CB7676"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}},"                 "),e("span",{style:{color:"#A1B567"}},"arguments"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"to"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"this"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"are"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"incorrect")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#CB7676"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   = "),e("span",{style:{color:"#C98A7D"}},"note:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"expected"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"reference"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`&"),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#858585"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"              "),e("span",{style:{color:"#A1B567"}},"found"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"reference"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`&"),e("span",{style:{color:"#C98A7D"}},"{integer}`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"note:"),e("span",{style:{color:"#C98A7D"}}," associated function defined here")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"error[E0308]:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"mismatched"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"types")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#6C7834"}},"-->"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"src/main.rs:22:21")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#AB5959"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"22"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#6C7834"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"guess.cmp"),e("span",{style:{color:"#8E8F8B"}},"(&"),e("span",{style:{color:"#6C7834"}},"secret_number"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"                 "),e("span",{style:{color:"#6C7834"}},"---"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"^^^^^^^^^^^^^^"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"expected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"struct"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"found"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"integer")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"                 "),e("span",{style:{color:"#AB5959"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#AB5959"}},"|"),e("span",{style:{color:"#393A34"}},"                 "),e("span",{style:{color:"#6C7834"}},"arguments"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"to"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"this"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"are"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"incorrect")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#AB5959"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   = "),e("span",{style:{color:"#B56959"}},"note:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"expected"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"reference"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`&"),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#8E8F8B"}},"`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"              "),e("span",{style:{color:"#6C7834"}},"found"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"reference"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`&"),e("span",{style:{color:"#B56959"}},"{integer}`")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"note:"),e("span",{style:{color:"#B56959"}}," associated function defined here")])])])],-1),xx={__name:"61",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[bx,Dx,F(l,ne({},{ranges:[""]}),{default:E(()=>[wx]),_:1},16)]),_:1},16)}}},kx=q(xx,[["__file","/@slidev/slides/61.md"]]),Ex=e("h2",null,"Processing a Game Part II (cont.)",-1),Tx=e("br",null,null,-1),Fx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"trim"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"parse"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"expect"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Please type a number!"'),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"trim"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"parse"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"expect"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Please type a number!"'),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1),Sx=e("br",null,null,-1),$x=e("li",null,[i("The "),e("code",null,"trim()"),i(" method on a "),e("code",null,"String"),i(" will eliminate any whitespace at the beginning and end, which we must do to be able to compare the string to the "),e("code",null,"u32"),i(", which can only contain numerical data.")],-1),Ix=e("li",null,[i("The "),e("code",null,"parse()"),i(" method converts a string to another type.")],-1),Px=e("li",null,[i("If we failed to "),e("code",null,"trim()"),i(" or "),e("code",null,"parse()"),i(", "),e("code",null,"expect()"),i(' will return "Please type a number",')],-1),Ox={__name:"62",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye,r=cf;return A(),R(le,te(ee(t)),{default:E(()=>[Ex,Tx,F(l,ne({},{ranges:[""]}),{default:E(()=>[Fx]),_:1},16),Sx,F(r,null,{default:E(()=>[$x,Ix,Px]),_:1})]),_:1},16)}}},Mx=q(Ox,[["__file","/@slidev/slides/62.md"]]),Lx=e("h2",null,"Processing a Game Part II (cont.)",-1),Rx=e("p",null,[i("Now, to make multiple guesses available, we can use "),e("code",null,"loop"),i(".")],-1),jx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"loop"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Please input your guess."'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // --snip--")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"cmp"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"secret_number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Less"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too small!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Greater"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too big!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Equal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"You win!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"loop"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Please input your guess."'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // --snip--")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"cmp"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"secret_number"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Less"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too small!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Greater"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too big!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Equal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"You win!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Nx={__name:"63",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[Lx,Rx,F(l,ne({},{ranges:[""]}),{default:E(()=>[jx]),_:1},16)]),_:1},16)}}},Hx=q(Nx,[["__file","/@slidev/slides/63.md"]]),Vx=e("h2",null,"Processing a Game Part II (cont.)",-1),qx=e("p",null,[i("To quit after correct guess, add "),e("code",null,"break"),i(" if equal.")],-1),Wx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"loop"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Please input your guess."'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    // --snip--")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"cmp"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"secret_number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Less"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too small!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Greater"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too big!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Equal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"You win!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"break"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"loop"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Please input your guess."'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    // --snip--")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"cmp"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"secret_number"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Less"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too small!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Greater"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too big!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Equal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"You win!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"break"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Gx={__name:"64",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[Vx,qx,F(l,ne({},{ranges:["all","9-12"]}),{default:E(()=>[Wx]),_:1},16)]),_:1},16)}}},Ux=q(Gx,[["__file","/@slidev/slides/64.md"]]),zx=e("h2",null,"Processing a Game Part III",-1),Yx=e("p",null,[i("To handle invalid input, use "),e("code",null,"Ok()"),i(" and "),e("code",null,"Err()"),i(". If "),e("code",null,"guess.trim().parse()"),i(" return "),e("code",null,"Ok()"),i(", set "),e("code",null,"guess"),i(" to the input number, else simply "),e("code",null,"continue"),i(".")],-1),Kx=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"trim"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"parse"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Ok"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#858585"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"Err"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"_"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"continue"),e("span",{style:{color:"#858585"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"};")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"trim"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"parse"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Ok"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#8E8F8B"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"Err"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"_"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"continue"),e("span",{style:{color:"#8E8F8B"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),Zx={__name:"65",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[zx,Yx,F(l,ne({},{ranges:[""]}),{default:E(()=>[Kx]),_:1},16)]),_:1},16)}}},Jx=q(Zx,[["__file","/@slidev/slides/65.md"]]),Qx=e("h2",null,"Recap",-1),Xx=e("ol",null,[e("li",null,"Import libraries"),e("li",null,"Generate the secret number"),e("li",null,"Use a loop to read the answer"),e("li",null,"If the user guess the right answer, break")],-1),ek={__name:"66",setup(n){const t={hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>(A(),R(le,te(ee(t)),{default:E(()=>[Qx,Xx]),_:1},16))}},nk=q(ek,[["__file","/@slidev/slides/66.md"]]),tk=e("h3",null,"Import libraries",-1),sk=e("br",null,null,-1),ok=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"rand"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Rng"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"cmp"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"std"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#DBD7CA"}},"io"),e("span",{style:{color:"#858585"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"rand"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Rng"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"cmp"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"std"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#393A34"}},"io"),e("span",{style:{color:"#8E8F8B"}},";")])])])],-1),lk=e("br",null,null,-1),rk=e("h3",null,"Generate the secret number",-1),ak=e("br",null,null,-1),ik=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"fn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"main"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Guess the number!"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"secret_number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"rand"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"thread_rng"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"gen_range"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#CB7676"}},"..="),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/* --- snip --- */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"fn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"main"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Guess the number!"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"secret_number"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"rand"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"thread_rng"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"gen_range"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#AB5959"}},"..="),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/* --- snip --- */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ck={__name:"67",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye;return A(),R(le,te(ee(t)),{default:E(()=>[tk,sk,F(l,ne({},{ranges:[""]}),{default:E(()=>[ok]),_:1},16),lk,rk,ak,ik]),_:1},16)}}},pk=q(ck,[["__file","/@slidev/slides/67.md"]]),uk=e("h3",null,"Use a loop to read the answer until the the user guess the right answer",-1),dk=e("br",null,null,-1),yk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"loop"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Please input your guess."'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"String"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"new"),e("span",{style:{color:"#858585"}},"();")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"io"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"stdin"),e("span",{style:{color:"#858585"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"read_line"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&mut"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"expect"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Failed to read line"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"u32"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"trim"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"parse"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ok"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"num"),e("span",{style:{color:"#858585"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Err"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"_"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"continue"),e("span",{style:{color:"#858585"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"You guessed: '),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#C98A7D"}},"guess"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/* --- snip --- */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"loop"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Please input your guess."'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"String"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"new"),e("span",{style:{color:"#8E8F8B"}},"();")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"io"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"stdin"),e("span",{style:{color:"#8E8F8B"}},"()")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"read_line"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&mut"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"expect"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Failed to read line"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"u32"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"trim"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"parse"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ok"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"num"),e("span",{style:{color:"#8E8F8B"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Err"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"_"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"continue"),e("span",{style:{color:"#8E8F8B"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"};")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"You guessed: '),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B56959"}},"guess"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/* --- snip --- */")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),fk={__name:"68",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>(A(),R(le,te(ee(t)),{default:E(()=>[uk,dk,yk]),_:1},16))}},hk=q(fk,[["__file","/@slidev/slides/68.md"]]),mk={inject:{$slidev:{from:V}},props:{filePath:{type:String,required:!0},name:{type:String,required:!0}},methods:{downloadFile(){const n=document.createElement("a");n.href=this.filePath,n.download=this.filePath.split("/").pop(),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}};function gk(n,t,s,o,l,r){return A(),k("div",null,[e("button",{onClick:t[0]||(t[0]=(...a)=>r.downloadFile&&r.downloadFile(...a))},lt(s.name),1)])}const Ak=q(mk,[["render",gk],["__file","/home/runner/work/rust-slidev/rust-slidev/components/Download.vue"]]),_k=e("h3",null,"If the user guess the right answer, break",-1),vk=e("br",null,null,-1),Bk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"loop"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#758575"}},"/* --- snip --- */"),e("span",{style:{color:"#DBD7CA"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"match"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"guess"),e("span",{style:{color:"#CB7676"}},"."),e("span",{style:{color:"#A1B567"}},"cmp"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#B8A965"}},"secret_number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Less"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too small!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Greater"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Too big!"'),e("span",{style:{color:"#858585"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#A1B567"}},"Ordering"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"Equal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#A1B567"}},"println!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"You win!"'),e("span",{style:{color:"#858585"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"break"),e("span",{style:{color:"#858585"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"loop"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A0ADA0"}},"/* --- snip --- */"),e("span",{style:{color:"#393A34"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"match"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"guess"),e("span",{style:{color:"#AB5959"}},"."),e("span",{style:{color:"#6C7834"}},"cmp"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#8C862B"}},"secret_number"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Less"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too small!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Greater"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Too big!"'),e("span",{style:{color:"#8E8F8B"}},"),")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#6C7834"}},"Ordering"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"Equal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#6C7834"}},"println!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"You win!"'),e("span",{style:{color:"#8E8F8B"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#1C6B48"}},"break"),e("span",{style:{color:"#8E8F8B"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ck=e("br",null,null,-1),bk={__name:"69",setup(n){const t={hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"};return M(V),(s,o)=>{const l=ye,r=Ak;return A(),R(le,te(ee(t)),{default:E(()=>[_k,vk,F(l,ne({},{ranges:[""]}),{default:E(()=>[Bk]),_:1},16),Ck,F(r,{filePath:"./sources/guessing_game.rs",name:"Click to download the final main.rs"})]),_:1},16)}}},Dk=q(bk,[["__file","/@slidev/slides/69.md"]]),wk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xk=e("path",{fill:"currentColor",d:"M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"},null,-1),kk=[xk];function Ek(n,t){return A(),k("svg",wk,kk)}const Tk={name:"carbon-logo-linkedin",render:Ek},Fk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sk=e("path",{fill:"currentColor",d:"m27.45 15.11l-22-11a1 1 0 0 0-1.08.12a1 1 0 0 0-.33 1L6.69 15H18v2H6.69L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78Z"},null,-1),$k=[Sk];function Ik(n,t){return A(),k("svg",Fk,$k)}const Pk={name:"carbon-send-filled",render:Ik},Ok={href:"https://github.com/gnitoahc/rust-slidev",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},Mk={href:"mailto:chaotingchen10@gmail.com",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},Lk={href:"https://www.linkedin.com/in/chaoting-chen/",target:"_blank",alt:"GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},Rk={__name:"70",setup(n){const t={layout:"center",hideInToc:!0};return M(V),(s,o)=>{const l=af,r=Pk,a=Tk;return A(),R(mr,te(ee(t)),{default:E(()=>[e("div",null,[e("a",Ok,[F(l)]),e("a",Mk,[F(r)]),e("a",Lk,[F(a)])])]),_:1},16)}}},jk=q(Rk,[["__file","/@slidev/slides/70.md"]]),Nk=[{path:"1",name:"page-1",component:k9,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Rust Programming Language
Have fun !!

Learn more at [Rust](https://www.rust-lang.org/)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",hideInToc:!0,title:"Rust",slide:{raw:`---
theme: seriph

# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080

# apply any windi css classes to the current slide
class: 'text-center'

# https://sli.dev/custom/highlighters.html
highlighter: shiki

# show line numbers in code blocks
lineNumbers: true

# some information about the slides, markdown enabled
info: |
  ## Rust Programming Language
  Have fun !!

  Learn more at [Rust](https://www.rust-lang.org/)

# persist drawings in exports and build
drawings:
  persist: false

# page transition
transition: slide-left

# use UnoCSS
css: unocss

hideInToc: true
title: Rust
---

# Welcome to Rust Slidev

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Start <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/gnitoahc/rust-slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
`,title:"Rust",content:`# Welcome to Rust Slidev

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Start <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/gnitoahc/rust-slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## Rust Programming Language
Have fun !!

Learn more at [Rust](https://www.rust-lang.org/)
`,drawings:{persist:!1},transition:"slide-left",css:"unocss",hideInToc:!0,title:"Rust"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:56,noteHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"/home/runner/work/rust-slidev/rust-slidev/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:t6,meta:{slide:{raw:`
<Toc listClass="toc" maxDepth="1" />
`,content:'<Toc listClass="toc" maxDepth="1" />',frontmatter:{},index:1,start:57,end:60,noteHTML:"",filepath:"/home/runner/work/rust-slidev/rust-slidev/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:i6,meta:{info:`Chapter 1: Getting Started
`,transition:"slide-left",layout:"center",title:"Chapter 1: Getting Started",hide:!1,srcSequence:"./pages/Chapter1.md",slide:{raw:null,title:"Chapter 1: Getting Started",level:1,content:`# Chapter 1: Getting Started

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{info:`Chapter 1: Getting Started
`,transition:"slide-left",layout:"center",title:"Chapter 1: Getting Started",hide:!1,srcSequence:"./pages/Chapter1.md"},note:"Here is another comment.",index:2,start:0,end:15,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",raw:`---
info: |
  Chapter 1: Getting Started
transition: slide-left
layout: center
---

# Chapter 1: Getting Started

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

<!--
Here is another comment.
-->
`,title:"Chapter 1: Getting Started",level:1,content:`# Chapter 1: Getting Started

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />`,frontmatter:{info:`Chapter 1: Getting Started
`,transition:"slide-left",layout:"center",title:"Chapter 1: Getting Started"},note:"Here is another comment.",index:0,start:0,end:15},inline:{raw:`---
src: ./pages/Chapter1.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:2,start:60,end:65},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",noteHTML:`<p>Here is another comment.</p>
`,id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:T6,meta:{hide:!1,srcSequence:"./pages/Chapter1.md",slide:{raw:`
## 1.1 Installations

<br />

1. macOS - \`brew install rustup-init\`
2. Windows - \`winget install -e --id Rustlang.Rustup\`

<br />
<br />

For updating or uninstalling 

\`\`\`shell
rustup update # Updating 
rustup self uninstall # Uninstalling
\`\`\`
`,title:"1.1 Installations",level:2,content:`## 1.1 Installations

<br />

1. macOS - \`brew install rustup-init\`
2. Windows - \`winget install -e --id Rustlang.Rustup\`

<br />
<br />

For updating or uninstalling 

\`\`\`shell
rustup update # Updating 
rustup self uninstall # Uninstalling
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter1.md"},index:3,start:16,end:34,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",raw:`
## 1.1 Installations

<br />

1. macOS - \`brew install rustup-init\`
2. Windows - \`winget install -e --id Rustlang.Rustup\`

<br />
<br />

For updating or uninstalling 

\`\`\`shell
rustup update # Updating 
rustup self uninstall # Uninstalling
\`\`\`
`,title:"1.1 Installations",level:2,content:`## 1.1 Installations

<br />

1. macOS - \`brew install rustup-init\`
2. Windows - \`winget install -e --id Rustlang.Rustup\`

<br />
<br />

For updating or uninstalling 

\`\`\`shell
rustup update # Updating 
rustup self uninstall # Uninstalling
\`\`\``,frontmatter:{},index:1,start:16,end:34},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:M6,meta:{hide:!1,srcSequence:"./pages/Chapter1.md",slide:{raw:`
## 1.2 Hello World!

Inside \`main.rs\`

\`\`\`rust 
fn main() {
    println!("Hello, world!")
}
\`\`\`

To run the program: 

\`\`\`shell
rustc main.rs # Compile main file
./main # For Unix
.\\main # For Windows
\`\`\`
`,title:"1.2 Hello World!",level:2,content:`## 1.2 Hello World!

Inside \`main.rs\`

\`\`\`rust 
fn main() {
    println!("Hello, world!")
}
\`\`\`

To run the program: 

\`\`\`shell
rustc main.rs # Compile main file
./main # For Unix
.\\main # For Windows
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter1.md"},index:4,start:35,end:54,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",raw:`
## 1.2 Hello World!

Inside \`main.rs\`

\`\`\`rust 
fn main() {
    println!("Hello, world!")
}
\`\`\`

To run the program: 

\`\`\`shell
rustc main.rs # Compile main file
./main # For Unix
.\\main # For Windows
\`\`\`
`,title:"1.2 Hello World!",level:2,content:`## 1.2 Hello World!

Inside \`main.rs\`

\`\`\`rust 
fn main() {
    println!("Hello, world!")
}
\`\`\`

To run the program: 

\`\`\`shell
rustc main.rs # Compile main file
./main # For Unix
.\\main # For Windows
\`\`\``,frontmatter:{},index:2,start:35,end:54},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:N6,meta:{hide:!1,srcSequence:"./pages/Chapter1.md",slide:{raw:`
## 1.3 Using Cargo
Rust's package manager

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"1.3 Using Cargo",level:2,content:`## 1.3 Using Cargo
Rust's package manager

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter1.md"},index:5,start:55,end:61,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",raw:`
## 1.3 Using Cargo
Rust's package manager

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"1.3 Using Cargo",level:2,content:`## 1.3 Using Cargo
Rust's package manager

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{},index:3,start:55,end:61},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:G6,meta:{hide:!1,srcSequence:"./pages/Chapter1.md",slide:{raw:`
### Creating project

\`cargo new my-app\` for creating project (change \`my-app\` to your app name)

\`\`\`txt
my-app/
  ├── .gitignore
  ├── Cargo.toml
  └── src/
       └── main.rs
\`\`\`
`,title:"Creating project",level:3,content:"### Creating project\n\n`cargo new my-app` for creating project (change `my-app` to your app name)\n\n```txt\nmy-app/\n  ├── .gitignore\n  ├── Cargo.toml\n  └── src/\n       └── main.rs\n```",frontmatter:{hide:!1,srcSequence:"./pages/Chapter1.md"},index:6,start:62,end:75,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",raw:`
### Creating project

\`cargo new my-app\` for creating project (change \`my-app\` to your app name)

\`\`\`txt
my-app/
  ├── .gitignore
  ├── Cargo.toml
  └── src/
       └── main.rs
\`\`\`
`,title:"Creating project",level:3,content:"### Creating project\n\n`cargo new my-app` for creating project (change `my-app` to your app name)\n\n```txt\nmy-app/\n  ├── .gitignore\n  ├── Cargo.toml\n  └── src/\n       └── main.rs\n```",frontmatter:{},index:4,start:62,end:75},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Q6,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter1.md",slide:{raw:`---
hideInToc: true
---

### Creating project (cont.)

Files inside initial project.

\`\`\`toml
# my-app/Cargo.toml
[package]
name = "project"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
\`\`\`
<br />

\`\`\`rust
// my-app/src/main.rs
fn main() {
    println!("Hello, world!");
}
\`\`\`

`,title:"Creating project (cont.)",level:3,content:`### Creating project (cont.)

Files inside initial project.

\`\`\`toml
# my-app/Cargo.toml
[package]
name = "project"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
\`\`\`
<br />

\`\`\`rust
// my-app/src/main.rs
fn main() {
    println!("Hello, world!");
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter1.md"},index:7,start:75,end:104,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",raw:`---
hideInToc: true
---

### Creating project (cont.)

Files inside initial project.

\`\`\`toml
# my-app/Cargo.toml
[package]
name = "project"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
\`\`\`
<br />

\`\`\`rust
// my-app/src/main.rs
fn main() {
    println!("Hello, world!");
}
\`\`\`

`,title:"Creating project (cont.)",level:3,content:`### Creating project (cont.)

Files inside initial project.

\`\`\`toml
# my-app/Cargo.toml
[package]
name = "project"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
\`\`\`
<br />

\`\`\`rust
// my-app/src/main.rs
fn main() {
    println!("Hello, world!");
}
\`\`\``,frontmatter:{hideInToc:!0},index:5,start:75,end:104},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:r0,meta:{hide:!1,srcSequence:"./pages/Chapter1.md",slide:{raw:`
### Building project & Running project

Build your project using \`cargo build\`

\`\`\`shell
$ cargo build 
    Compiling repo v0.1.0 (/path/to/repo)
      Finished dev [unoptimized + debuginfo] target(s) in 0.32s
\`\`\`

<br />

Run the project by executing binary

\`\`\`shell
$ ./target/debug/my-app # \`. \\target\\debug\\my-app.exe\` on Windows
Hello, world!
\`\`\`
`,title:"Building project & Running project",level:3,content:`### Building project & Running project

Build your project using \`cargo build\`

\`\`\`shell
$ cargo build 
    Compiling repo v0.1.0 (/path/to/repo)
      Finished dev [unoptimized + debuginfo] target(s) in 0.32s
\`\`\`

<br />

Run the project by executing binary

\`\`\`shell
$ ./target/debug/my-app # \`. \\target\\debug\\my-app.exe\` on Windows
Hello, world!
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter1.md"},index:8,start:105,end:125,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",raw:`
### Building project & Running project

Build your project using \`cargo build\`

\`\`\`shell
$ cargo build 
    Compiling repo v0.1.0 (/path/to/repo)
      Finished dev [unoptimized + debuginfo] target(s) in 0.32s
\`\`\`

<br />

Run the project by executing binary

\`\`\`shell
$ ./target/debug/my-app # \`. \\target\\debug\\my-app.exe\` on Windows
Hello, world!
\`\`\`
`,title:"Building project & Running project",level:3,content:`### Building project & Running project

Build your project using \`cargo build\`

\`\`\`shell
$ cargo build 
    Compiling repo v0.1.0 (/path/to/repo)
      Finished dev [unoptimized + debuginfo] target(s) in 0.32s
\`\`\`

<br />

Run the project by executing binary

\`\`\`shell
$ ./target/debug/my-app # \`. \\target\\debug\\my-app.exe\` on Windows
Hello, world!
\`\`\``,frontmatter:{},index:6,start:105,end:125},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:y0,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter1.md",slide:{raw:`---
hideInToc: true
---

### Building project & Running project (cont.)

To build and run project, run \`cargo run\`

\`\`\`shell
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.32s
      running \`/target/debug/my-app\`
Hello, world!
\`\`\`

Or simply checking the file 

\`\`\`shell
$ cargo check 
    Finished dev [unoptimized + debuginfo] target(s) in 0.04s

# Simply compiles but doesn't generate executable
\`\`\`

`,title:"Building project & Running project (cont.)",level:3,content:`### Building project & Running project (cont.)

To build and run project, run \`cargo run\`

\`\`\`shell
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.32s
      running \`/target/debug/my-app\`
Hello, world!
\`\`\`

Or simply checking the file 

\`\`\`shell
$ cargo check 
    Finished dev [unoptimized + debuginfo] target(s) in 0.04s

# Simply compiles but doesn't generate executable
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter1.md"},index:9,start:125,end:150,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",raw:`---
hideInToc: true
---

### Building project & Running project (cont.)

To build and run project, run \`cargo run\`

\`\`\`shell
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.32s
      running \`/target/debug/my-app\`
Hello, world!
\`\`\`

Or simply checking the file 

\`\`\`shell
$ cargo check 
    Finished dev [unoptimized + debuginfo] target(s) in 0.04s

# Simply compiles but doesn't generate executable
\`\`\`

`,title:"Building project & Running project (cont.)",level:3,content:`### Building project & Running project (cont.)

To build and run project, run \`cargo run\`

\`\`\`shell
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.32s
      running \`/target/debug/my-app\`
Hello, world!
\`\`\`

Or simply checking the file 

\`\`\`shell
$ cargo check 
    Finished dev [unoptimized + debuginfo] target(s) in 0.04s

# Simply compiles but doesn't generate executable
\`\`\``,frontmatter:{hideInToc:!0},index:7,start:125,end:150},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter1.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:m0,meta:{info:`Chapter 2: Common Programming Concepts
`,transition:"slide-left",layout:"center",title:"Chapter 2: Common Programming Concepts",hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:null,title:"Chapter 2: Common Programming Concepts",level:1,content:`# Chapter 2: Common Programming Concepts

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" columns="3" />`,frontmatter:{info:`Chapter 2: Common Programming Concepts
`,transition:"slide-left",layout:"center",title:"Chapter 2: Common Programming Concepts",hide:!1,srcSequence:"./pages/Chapter2.md"},note:"Here is another comment.",index:10,start:0,end:15,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
info: |
  Chapter 2: Common Programming Concepts
transition: slide-left
layout: center
---

# Chapter 2: Common Programming Concepts

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" columns="3" />

<!--
Here is another comment.
-->
`,title:"Chapter 2: Common Programming Concepts",level:1,content:`# Chapter 2: Common Programming Concepts

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" columns="3" />`,frontmatter:{info:`Chapter 2: Common Programming Concepts
`,transition:"slide-left",layout:"center",title:"Chapter 2: Common Programming Concepts"},note:"Here is another comment.",index:0,start:0,end:15},inline:{raw:`---
src: ./pages/Chapter2.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:3,start:65,end:70},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:`<p>Here is another comment.</p>
`,id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:_0,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
## 2.1 Variables and Mutability

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"2.1 Variables and Mutability",level:2,content:`## 2.1 Variables and Mutability

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:11,start:16,end:21,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
## 2.1 Variables and Mutability

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"2.1 Variables and Mutability",level:2,content:`## 2.1 Variables and Mutability

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{},index:1,start:16,end:21},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:D0,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Mutable & Immutable

When a variable is immutable, once it bound to a name, it's can't be change.

\`\`\`rust
fn main() {
    let x = 5; // Declare a variable
    println!("The value of x is: {x}");
    x = 6; // Error: cannot assign twice to immutable variable
    println!("The value of x is: {x}"); // Error
}
\`\`\`
`,title:"Mutable & Immutable",level:3,content:`### Mutable & Immutable

When a variable is immutable, once it bound to a name, it's can't be change.

\`\`\`rust
fn main() {
    let x = 5; // Declare a variable
    println!("The value of x is: {x}");
    x = 6; // Error: cannot assign twice to immutable variable
    println!("The value of x is: {x}"); // Error
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:12,start:22,end:36,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Mutable & Immutable

When a variable is immutable, once it bound to a name, it's can't be change.

\`\`\`rust
fn main() {
    let x = 5; // Declare a variable
    println!("The value of x is: {x}");
    x = 6; // Error: cannot assign twice to immutable variable
    println!("The value of x is: {x}"); // Error
}
\`\`\`
`,title:"Mutable & Immutable",level:3,content:`### Mutable & Immutable

When a variable is immutable, once it bound to a name, it's can't be change.

\`\`\`rust
fn main() {
    let x = 5; // Declare a variable
    println!("The value of x is: {x}");
    x = 6; // Error: cannot assign twice to immutable variable
    println!("The value of x is: {x}"); // Error
}
\`\`\``,frontmatter:{},index:2,start:22,end:36},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:T0,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

### Mutable & Immutable (cont.)

Error message

\`\`\`sh {all|9-10}
    $ cargo run
       Compiling variables v0.1.0 (file:///projects/variables)
    error[E0384]: cannot assign twice to immutable variable \`x\`
     --> src/main.rs:4:5
      |
    2 |     let x = 5;
      |         -
      |         |
      |         first assignment to \`x\`
      |         help: consider making this binding mutable: \`mut x\`
    3 |     println!("The value of x is: {x}");
    4 |     x = 6;
      |     ^^^^^ cannot assign twice to immutable variable

    For more information about this error, try \`rustc --explain E0384\`.
    error: could not compile \`variables\` due to previous error
\`\`\`
`,title:"Mutable & Immutable (cont.)",level:3,content:`### Mutable & Immutable (cont.)

Error message

\`\`\`sh {all|9-10}
    $ cargo run
       Compiling variables v0.1.0 (file:///projects/variables)
    error[E0384]: cannot assign twice to immutable variable \`x\`
     --> src/main.rs:4:5
      |
    2 |     let x = 5;
      |         -
      |         |
      |         first assignment to \`x\`
      |         help: consider making this binding mutable: \`mut x\`
    3 |     println!("The value of x is: {x}");
    4 |     x = 6;
      |     ^^^^^ cannot assign twice to immutable variable

    For more information about this error, try \`rustc --explain E0384\`.
    error: could not compile \`variables\` due to previous error
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:13,start:36,end:63,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

### Mutable & Immutable (cont.)

Error message

\`\`\`sh {all|9-10}
    $ cargo run
       Compiling variables v0.1.0 (file:///projects/variables)
    error[E0384]: cannot assign twice to immutable variable \`x\`
     --> src/main.rs:4:5
      |
    2 |     let x = 5;
      |         -
      |         |
      |         first assignment to \`x\`
      |         help: consider making this binding mutable: \`mut x\`
    3 |     println!("The value of x is: {x}");
    4 |     x = 6;
      |     ^^^^^ cannot assign twice to immutable variable

    For more information about this error, try \`rustc --explain E0384\`.
    error: could not compile \`variables\` due to previous error
\`\`\`
`,title:"Mutable & Immutable (cont.)",level:3,content:`### Mutable & Immutable (cont.)

Error message

\`\`\`sh {all|9-10}
    $ cargo run
       Compiling variables v0.1.0 (file:///projects/variables)
    error[E0384]: cannot assign twice to immutable variable \`x\`
     --> src/main.rs:4:5
      |
    2 |     let x = 5;
      |         -
      |         |
      |         first assignment to \`x\`
      |         help: consider making this binding mutable: \`mut x\`
    3 |     println!("The value of x is: {x}");
    4 |     x = 6;
      |     ^^^^^ cannot assign twice to immutable variable

    For more information about this error, try \`rustc --explain E0384\`.
    error: could not compile \`variables\` due to previous error
\`\`\``,frontmatter:{hideInToc:!0},index:3,start:36,end:63},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:O0,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

### Mutable & Immutable (cont.)

Change \`x\` to mutable variable.

\`\`\`rust {all|2}
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
\`\`\`

Change from \`let x = 5\` to \`let mut x = 5\`.
`,title:"Mutable & Immutable (cont.)",level:3,content:`### Mutable & Immutable (cont.)

Change \`x\` to mutable variable.

\`\`\`rust {all|2}
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
\`\`\`

Change from \`let x = 5\` to \`let mut x = 5\`.`,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:14,start:63,end:82,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

### Mutable & Immutable (cont.)

Change \`x\` to mutable variable.

\`\`\`rust {all|2}
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
\`\`\`

Change from \`let x = 5\` to \`let mut x = 5\`.
`,title:"Mutable & Immutable (cont.)",level:3,content:`### Mutable & Immutable (cont.)

Change \`x\` to mutable variable.

\`\`\`rust {all|2}
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
\`\`\`

Change from \`let x = 5\` to \`let mut x = 5\`.`,frontmatter:{hideInToc:!0},index:4,start:63,end:82},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:W0,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Constants

Like immutable variables, constants are values that are bound to a name and are not allowed to change, 
but there are a few differences between constants and variables.

<v-clicks>
    <li><b><i>Not</i></b> allow to use \`mut\` with constants.</li>
    <li>Constants aren’t just immutable by default — they’re <b><i>always</i></b> immutable.</li>
    <li>You declare constants using the \`const\` keyword instead of the \`let\` keyword.</li>
    <li>The type of the value <b><i>must</i></b> be annotated.</li>
    <li>i.e. <code>const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;</code></li>
</v-clicks>
`,title:"Constants",level:3,content:`### Constants

Like immutable variables, constants are values that are bound to a name and are not allowed to change, 
but there are a few differences between constants and variables.

<v-clicks>
    <li><b><i>Not</i></b> allow to use \`mut\` with constants.</li>
    <li>Constants aren’t just immutable by default — they’re <b><i>always</i></b> immutable.</li>
    <li>You declare constants using the \`const\` keyword instead of the \`let\` keyword.</li>
    <li>The type of the value <b><i>must</i></b> be annotated.</li>
    <li>i.e. <code>const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;</code></li>
</v-clicks>`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:15,start:83,end:97,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Constants

Like immutable variables, constants are values that are bound to a name and are not allowed to change, 
but there are a few differences between constants and variables.

<v-clicks>
    <li><b><i>Not</i></b> allow to use \`mut\` with constants.</li>
    <li>Constants aren’t just immutable by default — they’re <b><i>always</i></b> immutable.</li>
    <li>You declare constants using the \`const\` keyword instead of the \`let\` keyword.</li>
    <li>The type of the value <b><i>must</i></b> be annotated.</li>
    <li>i.e. <code>const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;</code></li>
</v-clicks>
`,title:"Constants",level:3,content:`### Constants

Like immutable variables, constants are values that are bound to a name and are not allowed to change, 
but there are a few differences between constants and variables.

<v-clicks>
    <li><b><i>Not</i></b> allow to use \`mut\` with constants.</li>
    <li>Constants aren’t just immutable by default — they’re <b><i>always</i></b> immutable.</li>
    <li>You declare constants using the \`const\` keyword instead of the \`let\` keyword.</li>
    <li>The type of the value <b><i>must</i></b> be annotated.</li>
    <li>i.e. <code>const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;</code></li>
</v-clicks>`,frontmatter:{},index:5,start:83,end:97},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:K0,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Shadowing 

We can shadow a variable by repeating the use of \`let\`. 

\`\`\`rust {all|2|2,4,7}
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}"); // The value of x in the inner scope is: 12
    }

    println!("The value of x is: {x}"); // The value of x is: 6
}
\`\`\`
`,title:"Shadowing",level:3,content:`### Shadowing 

We can shadow a variable by repeating the use of \`let\`. 

\`\`\`rust {all|2|2,4,7}
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}"); // The value of x in the inner scope is: 12
    }

    println!("The value of x is: {x}"); // The value of x is: 6
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:16,start:98,end:118,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Shadowing 

We can shadow a variable by repeating the use of \`let\`. 

\`\`\`rust {all|2|2,4,7}
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}"); // The value of x in the inner scope is: 12
    }

    println!("The value of x is: {x}"); // The value of x is: 6
}
\`\`\`
`,title:"Shadowing",level:3,content:`### Shadowing 

We can shadow a variable by repeating the use of \`let\`. 

\`\`\`rust {all|2|2,4,7}
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}"); // The value of x in the inner scope is: 12
    }

    println!("The value of x is: {x}"); // The value of x is: 6
}
\`\`\``,frontmatter:{},index:6,start:98,end:118},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:tD,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

### Shadowing (cont.)

Shadowing is different from marking a variable as \`mut\` 
because we’ll get a compile-time error if we accidentally try to reassign to this variable without using the \`let\` keyword.  

\`\`\`rust
fn main() {
    let x = 5;

    let x = x + 1; // Ok
    x = x + 1; // Compile-time error.
}
\`\`\`

But with \`mut\` on the other hand.

\`\`\`rust
fn main() {
    let mut x = 5;

    x = x + 1; // Ok
}
\`\`\`
`,title:"Shadowing (cont.)",level:3,content:`### Shadowing (cont.)

Shadowing is different from marking a variable as \`mut\` 
because we’ll get a compile-time error if we accidentally try to reassign to this variable without using the \`let\` keyword.  

\`\`\`rust
fn main() {
    let x = 5;

    let x = x + 1; // Ok
    x = x + 1; // Compile-time error.
}
\`\`\`

But with \`mut\` on the other hand.

\`\`\`rust
fn main() {
    let mut x = 5;

    x = x + 1; // Ok
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:17,start:118,end:146,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

### Shadowing (cont.)

Shadowing is different from marking a variable as \`mut\` 
because we’ll get a compile-time error if we accidentally try to reassign to this variable without using the \`let\` keyword.  

\`\`\`rust
fn main() {
    let x = 5;

    let x = x + 1; // Ok
    x = x + 1; // Compile-time error.
}
\`\`\`

But with \`mut\` on the other hand.

\`\`\`rust
fn main() {
    let mut x = 5;

    x = x + 1; // Ok
}
\`\`\`
`,title:"Shadowing (cont.)",level:3,content:`### Shadowing (cont.)

Shadowing is different from marking a variable as \`mut\` 
because we’ll get a compile-time error if we accidentally try to reassign to this variable without using the \`let\` keyword.  

\`\`\`rust
fn main() {
    let x = 5;

    let x = x + 1; // Ok
    x = x + 1; // Compile-time error.
}
\`\`\`

But with \`mut\` on the other hand.

\`\`\`rust
fn main() {
    let mut x = 5;

    x = x + 1; // Ok
}
\`\`\``,frontmatter:{hideInToc:!0},index:7,start:118,end:146},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:pD,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

### Shadowing (cont.)

The other difference between \`mut\` and shadowing 
is that because we’re effectively creating a new variable when we use the \`let\` keyword again 
we can change the type of the value but reuse the same name.

Example:  

\`\`\`rust
fn main() {
    let spaces = "   ";
    let spaces = spaces.len();
}
\`\`\`

Error:  

\`\`\`rust
fn main() {
    let mut spaces = "   ";
    spaces = spaces.len(); // Not allowed to mutate a variable’s type
}
\`\`\`
`,title:"Shadowing (cont.)",level:3,content:`### Shadowing (cont.)

The other difference between \`mut\` and shadowing 
is that because we’re effectively creating a new variable when we use the \`let\` keyword again 
we can change the type of the value but reuse the same name.

Example:  

\`\`\`rust
fn main() {
    let spaces = "   ";
    let spaces = spaces.len();
}
\`\`\`

Error:  

\`\`\`rust
fn main() {
    let mut spaces = "   ";
    spaces = spaces.len(); // Not allowed to mutate a variable’s type
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:18,start:146,end:174,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

### Shadowing (cont.)

The other difference between \`mut\` and shadowing 
is that because we’re effectively creating a new variable when we use the \`let\` keyword again 
we can change the type of the value but reuse the same name.

Example:  

\`\`\`rust
fn main() {
    let spaces = "   ";
    let spaces = spaces.len();
}
\`\`\`

Error:  

\`\`\`rust
fn main() {
    let mut spaces = "   ";
    spaces = spaces.len(); // Not allowed to mutate a variable’s type
}
\`\`\`
`,title:"Shadowing (cont.)",level:3,content:`### Shadowing (cont.)

The other difference between \`mut\` and shadowing 
is that because we’re effectively creating a new variable when we use the \`let\` keyword again 
we can change the type of the value but reuse the same name.

Example:  

\`\`\`rust
fn main() {
    let spaces = "   ";
    let spaces = spaces.len();
}
\`\`\`

Error:  

\`\`\`rust
fn main() {
    let mut spaces = "   ";
    spaces = spaces.len(); // Not allowed to mutate a variable’s type
}
\`\`\``,frontmatter:{hideInToc:!0},index:8,start:146,end:174},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:yD,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
## 2.2 Data types 

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"2.2 Data types",level:2,content:`## 2.2 Data types 

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:19,start:175,end:180,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
## 2.2 Data types 

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"2.2 Data types",level:2,content:`## 2.2 Data types 

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{},index:9,start:175,end:180},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:mD,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Scalar Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />
`,title:"Scalar Types",level:3,content:`### Scalar Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:20,start:181,end:186,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Scalar Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />
`,title:"Scalar Types",level:3,content:`### Scalar Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />`,frontmatter:{},index:10,start:181,end:186},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:vD,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### Integer Types

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |
`,title:"Integer Types",level:4,content:`#### Integer Types

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:21,start:187,end:199,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### Integer Types

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |
`,title:"Integer Types",level:4,content:`#### Integer Types

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |`,frontmatter:{},index:11,start:187,end:199},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:wD,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### Floating-Point Types

<br />

\`\`\`rust 
fn main() {
    let x = 2.0; // f64 is default

    let y: f32 = 3.0; // f32
}
\`\`\`
`,title:"Floating-Point Types",level:4,content:`#### Floating-Point Types

<br />

\`\`\`rust 
fn main() {
    let x = 2.0; // f64 is default

    let y: f32 = 3.0; // f32
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:22,start:200,end:213,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### Floating-Point Types

<br />

\`\`\`rust 
fn main() {
    let x = 2.0; // f64 is default

    let y: f32 = 3.0; // f32
}
\`\`\`
`,title:"Floating-Point Types",level:4,content:`#### Floating-Point Types

<br />

\`\`\`rust 
fn main() {
    let x = 2.0; // f64 is default

    let y: f32 = 3.0; // f32
}
\`\`\``,frontmatter:{},index:12,start:200,end:213},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:FD,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### The Boolean Type

<br />

\`\`\`rust 
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
\`\`\`
`,title:"The Boolean Type",level:4,content:`#### The Boolean Type

<br />

\`\`\`rust 
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:23,start:214,end:227,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### The Boolean Type

<br />

\`\`\`rust 
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
\`\`\`
`,title:"The Boolean Type",level:4,content:`#### The Boolean Type

<br />

\`\`\`rust 
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
\`\`\``,frontmatter:{},index:13,start:214,end:227},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:LD,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### The Character Type

<br />

\`\`\`rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}
\`\`\`

<br />

> Rust’s \`char\` type is four bytes in size and represents a Unicode Scalar Value,  
> which mean it can represents a lot more than ASCII (even emoji)
`,title:"The Character Type",level:4,content:`#### The Character Type

<br />

\`\`\`rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}
\`\`\`

<br />

> Rust’s \`char\` type is four bytes in size and represents a Unicode Scalar Value,  
> which mean it can represents a lot more than ASCII (even emoji)`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:24,start:228,end:246,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### The Character Type

<br />

\`\`\`rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}
\`\`\`

<br />

> Rust’s \`char\` type is four bytes in size and represents a Unicode Scalar Value,  
> which mean it can represents a lot more than ASCII (even emoji)
`,title:"The Character Type",level:4,content:`#### The Character Type

<br />

\`\`\`rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}
\`\`\`

<br />

> Rust’s \`char\` type is four bytes in size and represents a Unicode Scalar Value,  
> which mean it can represents a lot more than ASCII (even emoji)`,frontmatter:{},index:14,start:228,end:246},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:ND,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Compound Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />
`,title:"Compound Types",level:3,content:`### Compound Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:25,start:247,end:252,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Compound Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />
`,title:"Compound Types",level:3,content:`### Compound Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />`,frontmatter:{},index:15,start:247,end:252},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:zD,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### Tuples

Declare approach 1

\`\`\`rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
\`\`\`

Declare approach 2

\`\`\`rust
fn main() {
    let tup = (500, 6.4, 1); // Create tup

    let (x, y, z) = tup; // Bind 3 seperate variables

    println!("The value of y is: {y}"); // The value of y is: 6.4
}
\`\`\`
`,title:"Tuples",level:4,content:`#### Tuples

Declare approach 1

\`\`\`rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
\`\`\`

Declare approach 2

\`\`\`rust
fn main() {
    let tup = (500, 6.4, 1); // Create tup

    let (x, y, z) = tup; // Bind 3 seperate variables

    println!("The value of y is: {y}"); // The value of y is: 6.4
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:26,start:253,end:276,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### Tuples

Declare approach 1

\`\`\`rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
\`\`\`

Declare approach 2

\`\`\`rust
fn main() {
    let tup = (500, 6.4, 1); // Create tup

    let (x, y, z) = tup; // Bind 3 seperate variables

    println!("The value of y is: {y}"); // The value of y is: 6.4
}
\`\`\`
`,title:"Tuples",level:4,content:`#### Tuples

Declare approach 1

\`\`\`rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
\`\`\`

Declare approach 2

\`\`\`rust
fn main() {
    let tup = (500, 6.4, 1); // Create tup

    let (x, y, z) = tup; // Bind 3 seperate variables

    println!("The value of y is: {y}"); // The value of y is: 6.4
}
\`\`\``,frontmatter:{},index:16,start:253,end:276},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:QD,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

#### Tuples (cont.)

We can also access a tuple element directly by using a period (\`.\`) followed by the index of the value we want to access.

\`\`\`rust
fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
\`\`\`
`,title:"Tuples (cont.)",level:4,content:`#### Tuples (cont.)

We can also access a tuple element directly by using a period (\`.\`) followed by the index of the value we want to access.

\`\`\`rust
fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:27,start:276,end:296,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

#### Tuples (cont.)

We can also access a tuple element directly by using a period (\`.\`) followed by the index of the value we want to access.

\`\`\`rust
fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
\`\`\`
`,title:"Tuples (cont.)",level:4,content:`#### Tuples (cont.)

We can also access a tuple element directly by using a period (\`.\`) followed by the index of the value we want to access.

\`\`\`rust
fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
\`\`\``,frontmatter:{hideInToc:!0},index:17,start:276,end:296},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:l4,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### Array

Write the values in an array as a comma-separated list inside square brackets. 

\`\`\`rust
fn main() {
    let a = [1, 2, 3, 4, 5];
    let b: [i32; 5] = [1, 2, 3, 4, 5];
    let c = [3; 5]; // Same as \`let c = [3, 3, 3, 3, 3];\`
    let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
}
\`\`\`

Accessing array elements 

\`\`\`rust
fn main() {
    /* declare as above*/
    println!("{}, {}, {}, {}", a[0], b[2], c[3], months[4]); // 1, 3, 3, May
}
\`\`\`
`,title:"Array",level:4,content:`#### Array

Write the values in an array as a comma-separated list inside square brackets. 

\`\`\`rust
fn main() {
    let a = [1, 2, 3, 4, 5];
    let b: [i32; 5] = [1, 2, 3, 4, 5];
    let c = [3; 5]; // Same as \`let c = [3, 3, 3, 3, 3];\`
    let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
}
\`\`\`

Accessing array elements 

\`\`\`rust
fn main() {
    /* declare as above*/
    println!("{}, {}, {}, {}", a[0], b[2], c[3], months[4]); // 1, 3, 3, May
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:28,start:297,end:321,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### Array

Write the values in an array as a comma-separated list inside square brackets. 

\`\`\`rust
fn main() {
    let a = [1, 2, 3, 4, 5];
    let b: [i32; 5] = [1, 2, 3, 4, 5];
    let c = [3; 5]; // Same as \`let c = [3, 3, 3, 3, 3];\`
    let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
}
\`\`\`

Accessing array elements 

\`\`\`rust
fn main() {
    /* declare as above*/
    println!("{}, {}, {}, {}", a[0], b[2], c[3], months[4]); // 1, 3, 3, May
}
\`\`\`
`,title:"Array",level:4,content:`#### Array

Write the values in an array as a comma-separated list inside square brackets. 

\`\`\`rust
fn main() {
    let a = [1, 2, 3, 4, 5];
    let b: [i32; 5] = [1, 2, 3, 4, 5];
    let c = [3; 5]; // Same as \`let c = [3, 3, 3, 3, 3];\`
    let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
}
\`\`\`

Accessing array elements 

\`\`\`rust
fn main() {
    /* declare as above*/
    println!("{}, {}, {}, {}", a[0], b[2], c[3], months[4]); // 1, 3, 3, May
}
\`\`\``,frontmatter:{},index:18,start:297,end:321},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:i4,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
## 2.3 Functions

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"2.3 Functions",level:2,content:`## 2.3 Functions

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:29,start:322,end:327,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
## 2.3 Functions

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"2.3 Functions",level:2,content:`## 2.3 Functions

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{},index:19,start:322,end:327},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:h4,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Main function

\`main\` function: Entry point of a program.

\`\`\`rust
fn main() {
    println!("Hello, world!");
}
\`\`\`

<br />

> An entry point is the place in a program where the execution of a program begins,
> and where the program has access to command line arguments.
`,title:"Main function",level:3,content:`### Main function

\`main\` function: Entry point of a program.

\`\`\`rust
fn main() {
    println!("Hello, world!");
}
\`\`\`

<br />

> An entry point is the place in a program where the execution of a program begins,
> and where the program has access to command line arguments.`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:30,start:328,end:344,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Main function

\`main\` function: Entry point of a program.

\`\`\`rust
fn main() {
    println!("Hello, world!");
}
\`\`\`

<br />

> An entry point is the place in a program where the execution of a program begins,
> and where the program has access to command line arguments.
`,title:"Main function",level:3,content:`### Main function

\`main\` function: Entry point of a program.

\`\`\`rust
fn main() {
    println!("Hello, world!");
}
\`\`\`

<br />

> An entry point is the place in a program where the execution of a program begins,
> and where the program has access to command line arguments.`,frontmatter:{},index:20,start:328,end:344},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:D4,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

### Main function (cont.)

<br />

> Rust code uses snake case as the conventional style for function and variable names

<br />

\`\`\`rust {all|4,7-9}
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
\`\`\`

<br />

> Snake case: \`let number_of_donuts = 5\`  
> Kebab case: \`let number-of-donuts = 5\`  
> Camel case: \`let numberOfDonuts = 5\`  
> Pascal case: \`let NumberOfDonuts = 5\`
`,title:"Main function (cont.)",level:3,content:`### Main function (cont.)

<br />

> Rust code uses snake case as the conventional style for function and variable names

<br />

\`\`\`rust {all|4,7-9}
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
\`\`\`

<br />

> Snake case: \`let number_of_donuts = 5\`  
> Kebab case: \`let number-of-donuts = 5\`  
> Camel case: \`let numberOfDonuts = 5\`  
> Pascal case: \`let NumberOfDonuts = 5\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:31,start:344,end:375,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

### Main function (cont.)

<br />

> Rust code uses snake case as the conventional style for function and variable names

<br />

\`\`\`rust {all|4,7-9}
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
\`\`\`

<br />

> Snake case: \`let number_of_donuts = 5\`  
> Kebab case: \`let number-of-donuts = 5\`  
> Camel case: \`let numberOfDonuts = 5\`  
> Pascal case: \`let NumberOfDonuts = 5\`
`,title:"Main function (cont.)",level:3,content:`### Main function (cont.)

<br />

> Rust code uses snake case as the conventional style for function and variable names

<br />

\`\`\`rust {all|4,7-9}
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
\`\`\`

<br />

> Snake case: \`let number_of_donuts = 5\`  
> Kebab case: \`let number-of-donuts = 5\`  
> Camel case: \`let numberOfDonuts = 5\`  
> Pascal case: \`let NumberOfDonuts = 5\``,frontmatter:{hideInToc:!0},index:21,start:344,end:375},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:E4,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Parameters

\`\`\`rust {all|2,6-9|3,11-14}
fn main() {
    another_function(5);
    print_labeled_measurement(5, 'h');
}

// Single parameter
fn another_function(x: i32) {
    println!("The value of x is: {x}"); // The value of x is: 5
}

// Multi-parameters
fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}"); // The measurement is: 5h
}
\`\`\`
`,title:"Parameters",level:3,content:`### Parameters

\`\`\`rust {all|2,6-9|3,11-14}
fn main() {
    another_function(5);
    print_labeled_measurement(5, 'h');
}

// Single parameter
fn another_function(x: i32) {
    println!("The value of x is: {x}"); // The value of x is: 5
}

// Multi-parameters
fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}"); // The measurement is: 5h
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:32,start:376,end:396,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Parameters

\`\`\`rust {all|2,6-9|3,11-14}
fn main() {
    another_function(5);
    print_labeled_measurement(5, 'h');
}

// Single parameter
fn another_function(x: i32) {
    println!("The value of x is: {x}"); // The value of x is: 5
}

// Multi-parameters
fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}"); // The measurement is: 5h
}
\`\`\`
`,title:"Parameters",level:3,content:`### Parameters

\`\`\`rust {all|2,6-9|3,11-14}
fn main() {
    another_function(5);
    print_labeled_measurement(5, 'h');
}

// Single parameter
fn another_function(x: i32) {
    println!("The value of x is: {x}"); // The value of x is: 5
}

// Multi-parameters
fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}"); // The measurement is: 5h
}
\`\`\``,frontmatter:{},index:22,start:376,end:396},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:O4,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Statements and Expressions

**Statements** are instructions that perform some action and _do not return a value_.  
**Expressions** evaluate to a _resultant value_.

<br />

\`\`\`rust {all|3|4}
fn main() {
    let y = {
        let x = 3; // Statement, which set x to 3
        x + 1 // Expression, which return \`x + 1\`
    };

    println!("The value of y is: {y}"); // The value of y is 4
}
\`\`\`

The \`x + 1\` doesn't have a semicolon at the end of the line, which return the value of \`x + 1\`.  
If you add a semicolon at the end of the line, you turn it into a statement, which does not return a value.
`,title:"Statements and Expressions",level:3,content:`### Statements and Expressions

**Statements** are instructions that perform some action and _do not return a value_.  
**Expressions** evaluate to a _resultant value_.

<br />

\`\`\`rust {all|3|4}
fn main() {
    let y = {
        let x = 3; // Statement, which set x to 3
        x + 1 // Expression, which return \`x + 1\`
    };

    println!("The value of y is: {y}"); // The value of y is 4
}
\`\`\`

The \`x + 1\` doesn't have a semicolon at the end of the line, which return the value of \`x + 1\`.  
If you add a semicolon at the end of the line, you turn it into a statement, which does not return a value.`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:33,start:397,end:419,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Statements and Expressions

**Statements** are instructions that perform some action and _do not return a value_.  
**Expressions** evaluate to a _resultant value_.

<br />

\`\`\`rust {all|3|4}
fn main() {
    let y = {
        let x = 3; // Statement, which set x to 3
        x + 1 // Expression, which return \`x + 1\`
    };

    println!("The value of y is: {y}"); // The value of y is 4
}
\`\`\`

The \`x + 1\` doesn't have a semicolon at the end of the line, which return the value of \`x + 1\`.  
If you add a semicolon at the end of the line, you turn it into a statement, which does not return a value.
`,title:"Statements and Expressions",level:3,content:`### Statements and Expressions

**Statements** are instructions that perform some action and _do not return a value_.  
**Expressions** evaluate to a _resultant value_.

<br />

\`\`\`rust {all|3|4}
fn main() {
    let y = {
        let x = 3; // Statement, which set x to 3
        x + 1 // Expression, which return \`x + 1\`
    };

    println!("The value of y is: {y}"); // The value of y is 4
}
\`\`\`

The \`x + 1\` doesn't have a semicolon at the end of the line, which return the value of \`x + 1\`.  
If you add a semicolon at the end of the line, you turn it into a statement, which does not return a value.`,frontmatter:{},index:23,start:397,end:419},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:V4,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### Functions with Return values

<br />

\`\`\`rust
// Perfectly valid function in Rust
fn five() -> i32 {
    5
}
\`\`\`

Another example:

\`\`\`rust {all|2,5,10|3,6,14}
fn main() {
    let x = plus_one(5);
    let y = plus_two(5); // Error

    println!("The value of x is: {x}"); // \`The value of x is: 6\`
    println!("The value of y is: {y}"); // Error
}

fn plus_one(x: i32) -> i32 {
    x + 1  // Expression, which return \`x + 1\` as an i32
}

fn plus_two(x: i32) -> i32 { // This function requires a return with type i32.
    x + 2; // Statement, which do not return an i32, and therefore no return value in this function -> Error
}
\`\`\`
`,title:"Functions with Return values",level:3,content:`### Functions with Return values

<br />

\`\`\`rust
// Perfectly valid function in Rust
fn five() -> i32 {
    5
}
\`\`\`

Another example:

\`\`\`rust {all|2,5,10|3,6,14}
fn main() {
    let x = plus_one(5);
    let y = plus_two(5); // Error

    println!("The value of x is: {x}"); // \`The value of x is: 6\`
    println!("The value of y is: {y}"); // Error
}

fn plus_one(x: i32) -> i32 {
    x + 1  // Expression, which return \`x + 1\` as an i32
}

fn plus_two(x: i32) -> i32 { // This function requires a return with type i32.
    x + 2; // Statement, which do not return an i32, and therefore no return value in this function -> Error
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:34,start:420,end:452,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### Functions with Return values

<br />

\`\`\`rust
// Perfectly valid function in Rust
fn five() -> i32 {
    5
}
\`\`\`

Another example:

\`\`\`rust {all|2,5,10|3,6,14}
fn main() {
    let x = plus_one(5);
    let y = plus_two(5); // Error

    println!("The value of x is: {x}"); // \`The value of x is: 6\`
    println!("The value of y is: {y}"); // Error
}

fn plus_one(x: i32) -> i32 {
    x + 1  // Expression, which return \`x + 1\` as an i32
}

fn plus_two(x: i32) -> i32 { // This function requires a return with type i32.
    x + 2; // Statement, which do not return an i32, and therefore no return value in this function -> Error
}
\`\`\`
`,title:"Functions with Return values",level:3,content:`### Functions with Return values

<br />

\`\`\`rust
// Perfectly valid function in Rust
fn five() -> i32 {
    5
}
\`\`\`

Another example:

\`\`\`rust {all|2,5,10|3,6,14}
fn main() {
    let x = plus_one(5);
    let y = plus_two(5); // Error

    println!("The value of x is: {x}"); // \`The value of x is: 6\`
    println!("The value of y is: {y}"); // Error
}

fn plus_one(x: i32) -> i32 {
    x + 1  // Expression, which return \`x + 1\` as an i32
}

fn plus_two(x: i32) -> i32 { // This function requires a return with type i32.
    x + 2; // Statement, which do not return an i32, and therefore no return value in this function -> Error
}
\`\`\``,frontmatter:{},index:24,start:420,end:452},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:z4,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
## 2.4 Comments

- Add \`//\` before your comment

\`\`\`rust
// This is a comment
fn main() {
    println!("Hello, world"); // This is a comment, too.
}
\`\`\`
`,title:"2.4 Comments",level:2,content:`## 2.4 Comments

- Add \`//\` before your comment

\`\`\`rust
// This is a comment
fn main() {
    println!("Hello, world"); // This is a comment, too.
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:35,start:453,end:465,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
## 2.4 Comments

- Add \`//\` before your comment

\`\`\`rust
// This is a comment
fn main() {
    println!("Hello, world"); // This is a comment, too.
}
\`\`\`
`,title:"2.4 Comments",level:2,content:`## 2.4 Comments

- Add \`//\` before your comment

\`\`\`rust
// This is a comment
fn main() {
    println!("Hello, world"); // This is a comment, too.
}
\`\`\``,frontmatter:{},index:25,start:453,end:465},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Z4,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
## 2.5 Control Flow

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"2.5 Control Flow",level:2,content:`## 2.5 Control Flow

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:36,start:466,end:471,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
## 2.5 Control Flow

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />
`,title:"2.5 Control Flow",level:2,content:`## 2.5 Control Flow

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />`,frontmatter:{},index:26,start:466,end:471},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:nw,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
### If experssion

Example:

\`\`\`rust
fn main() {
    let number = 6; // Set number to 6

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 { // 6 % 3 equal to 0, therefore use this condition
        println!("number is divisible by 3"); // number is divisible by 3
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
\`\`\`
`,title:"If experssion",level:3,content:`### If experssion

Example:

\`\`\`rust
fn main() {
    let number = 6; // Set number to 6

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 { // 6 % 3 equal to 0, therefore use this condition
        println!("number is divisible by 3"); // number is divisible by 3
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:37,start:472,end:493,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
### If experssion

Example:

\`\`\`rust
fn main() {
    let number = 6; // Set number to 6

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 { // 6 % 3 equal to 0, therefore use this condition
        println!("number is divisible by 3"); // number is divisible by 3
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
\`\`\`
`,title:"If experssion",level:3,content:`### If experssion

Example:

\`\`\`rust
fn main() {
    let number = 6; // Set number to 6

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 { // 6 % 3 equal to 0, therefore use this condition
        println!("number is divisible by 3"); // number is divisible by 3
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
\`\`\``,frontmatter:{},index:27,start:472,end:493},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:iw,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

### If expression (cont.)

Using \`if\` in \`let\` statement

\`\`\`rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}"); // The value of number is: 5
}
\`\`\`

If the types are mismatched, as in the following example, we’ll get an error.

\`\`\`rust {all|4}
fn main() {
    let condition = true;

    let number = if condition { 5 } else { "six" };

    println!("The value of number is: {number}"); // Error
}
\`\`\`
`,title:"If expression (cont.)",level:3,content:`### If expression (cont.)

Using \`if\` in \`let\` statement

\`\`\`rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}"); // The value of number is: 5
}
\`\`\`

If the types are mismatched, as in the following example, we’ll get an error.

\`\`\`rust {all|4}
fn main() {
    let condition = true;

    let number = if condition { 5 } else { "six" };

    println!("The value of number is: {number}"); // Error
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:38,start:493,end:522,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

### If expression (cont.)

Using \`if\` in \`let\` statement

\`\`\`rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}"); // The value of number is: 5
}
\`\`\`

If the types are mismatched, as in the following example, we’ll get an error.

\`\`\`rust {all|4}
fn main() {
    let condition = true;

    let number = if condition { 5 } else { "six" };

    println!("The value of number is: {number}"); // Error
}
\`\`\`
`,title:"If expression (cont.)",level:3,content:`### If expression (cont.)

Using \`if\` in \`let\` statement

\`\`\`rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}"); // The value of number is: 5
}
\`\`\`

If the types are mismatched, as in the following example, we’ll get an error.

\`\`\`rust {all|4}
fn main() {
    let condition = true;

    let number = if condition { 5 } else { "six" };

    println!("The value of number is: {number}"); // Error
}
\`\`\``,frontmatter:{hideInToc:!0},index:28,start:493,end:522},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:yw,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

### If expression (cont.)

Error message:

\`\`\`shell {all|7,9}
$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
error[E0308]: \`if\` and \`else\` have incompatible types
 --> src/main.rs:4:44
  |
4 |     let number = if condition { 5 } else { "six" };
  |                                 -          ^^^^^ expected integer, found \`&str\`
  |                                 |
  |                                 expected because of this

For more information about this error, try \`rustc --explain E0308\`.
error: could not compile \`branches\` due to previous error
\`\`\`
`,title:"If expression (cont.)",level:3,content:`### If expression (cont.)

Error message:

\`\`\`shell {all|7,9}
$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
error[E0308]: \`if\` and \`else\` have incompatible types
 --> src/main.rs:4:44
  |
4 |     let number = if condition { 5 } else { "six" };
  |                                 -          ^^^^^ expected integer, found \`&str\`
  |                                 |
  |                                 expected because of this

For more information about this error, try \`rustc --explain E0308\`.
error: could not compile \`branches\` due to previous error
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:39,start:522,end:545,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

### If expression (cont.)

Error message:

\`\`\`shell {all|7,9}
$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
error[E0308]: \`if\` and \`else\` have incompatible types
 --> src/main.rs:4:44
  |
4 |     let number = if condition { 5 } else { "six" };
  |                                 -          ^^^^^ expected integer, found \`&str\`
  |                                 |
  |                                 expected because of this

For more information about this error, try \`rustc --explain E0308\`.
error: could not compile \`branches\` due to previous error
\`\`\`
`,title:"If expression (cont.)",level:3,content:`### If expression (cont.)

Error message:

\`\`\`shell {all|7,9}
$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
error[E0308]: \`if\` and \`else\` have incompatible types
 --> src/main.rs:4:44
  |
4 |     let number = if condition { 5 } else { "six" };
  |                                 -          ^^^^^ expected integer, found \`&str\`
  |                                 |
  |                                 expected because of this

For more information about this error, try \`rustc --explain E0308\`.
error: could not compile \`branches\` due to previous error
\`\`\``,frontmatter:{hideInToc:!0},index:29,start:522,end:545},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:gw,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:'\n### Loop\n\nRust has three kinds of loops: `loop`, `while`, and `for`.\n\n<Toc listClass="toc" minDepth="4" maxDepth="4" mode="onlyCurrentTree" columns="1" />\n',title:"Loop",level:3,content:'### Loop\n\nRust has three kinds of loops: `loop`, `while`, and `for`.\n\n<Toc listClass="toc" minDepth="4" maxDepth="4" mode="onlyCurrentTree" columns="1" />',frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:40,start:546,end:553,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:'\n### Loop\n\nRust has three kinds of loops: `loop`, `while`, and `for`.\n\n<Toc listClass="toc" minDepth="4" maxDepth="4" mode="onlyCurrentTree" columns="1" />\n',title:"Loop",level:3,content:'### Loop\n\nRust has three kinds of loops: `loop`, `while`, and `for`.\n\n<Toc listClass="toc" minDepth="4" maxDepth="4" mode="onlyCurrentTree" columns="1" />',frontmatter:{},index:30,start:546,end:553},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Cw,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### loop

<br />

\`\`\`rust {all|2|5|4|7|8|12}
fn main() {
    let mut counter = 0; // First, set counter to 0.

    let result = loop {
        counter += 1; // Every loop iteration, counter is incremented by 1.

        if counter == 10 { 
            break counter * 2; // When counter reaches 10, break with \`counter * 2\`.
        }
    };

    println!("The result is {result}"); // \`The result is 20\`
}
\`\`\`
`,title:"loop",level:4,content:`#### loop

<br />

\`\`\`rust {all|2|5|4|7|8|12}
fn main() {
    let mut counter = 0; // First, set counter to 0.

    let result = loop {
        counter += 1; // Every loop iteration, counter is incremented by 1.

        if counter == 10 { 
            break counter * 2; // When counter reaches 10, break with \`counter * 2\`.
        }
    };

    println!("The result is {result}"); // \`The result is 20\`
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:41,start:554,end:575,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### loop

<br />

\`\`\`rust {all|2|5|4|7|8|12}
fn main() {
    let mut counter = 0; // First, set counter to 0.

    let result = loop {
        counter += 1; // Every loop iteration, counter is incremented by 1.

        if counter == 10 { 
            break counter * 2; // When counter reaches 10, break with \`counter * 2\`.
        }
    };

    println!("The result is {result}"); // \`The result is 20\`
}
\`\`\`
`,title:"loop",level:4,content:`#### loop

<br />

\`\`\`rust {all|2|5|4|7|8|12}
fn main() {
    let mut counter = 0; // First, set counter to 0.

    let result = loop {
        counter += 1; // Every loop iteration, counter is incremented by 1.

        if counter == 10 { 
            break counter * 2; // When counter reaches 10, break with \`counter * 2\`.
        }
    };

    println!("The result is {result}"); // \`The result is 20\`
}
\`\`\``,frontmatter:{},index:31,start:554,end:575},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:Ew,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

#### loop (cont.)

- If you have loops within loops, \`break\` and \`continue\` apply to the innermost loop at that point. \\
  You can optionally specify a _loop label_ on a loop that you can then use with \`break\` or \`continue\` to \\
  specify that those keywords apply to the labeled loop instead of the innermost loop.

- Loop labels must begin with a single quote.

Ex.

\`\`\`rust
break 'label
\`\`\`
`,title:"loop (cont.)",level:4,content:"#### loop (cont.)\n\n- If you have loops within loops, `break` and `continue` apply to the innermost loop at that point. \\\n  You can optionally specify a _loop label_ on a loop that you can then use with `break` or `continue` to \\\n  specify that those keywords apply to the labeled loop instead of the innermost loop.\n\n- Loop labels must begin with a single quote.\n\nEx.\n\n```rust\nbreak 'label\n```",frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:42,start:575,end:593,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

#### loop (cont.)

- If you have loops within loops, \`break\` and \`continue\` apply to the innermost loop at that point. \\
  You can optionally specify a _loop label_ on a loop that you can then use with \`break\` or \`continue\` to \\
  specify that those keywords apply to the labeled loop instead of the innermost loop.

- Loop labels must begin with a single quote.

Ex.

\`\`\`rust
break 'label
\`\`\`
`,title:"loop (cont.)",level:4,content:"#### loop (cont.)\n\n- If you have loops within loops, `break` and `continue` apply to the innermost loop at that point. \\\n  You can optionally specify a _loop label_ on a loop that you can then use with `break` or `continue` to \\\n  specify that those keywords apply to the labeled loop instead of the innermost loop.\n\n- Loop labels must begin with a single quote.\n\nEx.\n\n```rust\nbreak 'label\n```",frontmatter:{hideInToc:!0},index:32,start:575,end:593},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:Iw,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

#### loop (cont.)

Example:

\`\`\`rust {all|2|3-5|7-16|15|9-11|18|3-5|7-16|12-14|20|all}
fn main() {
    let mut count = 0; // Set count to 0.
    'counting_up: loop { // label \`counting_up\`
        println!("count = {count}");
        let mut remaining = 10; // Set remaining to 10

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 { // When remaining is 9.
                break; // Doesn't specify a lable, will exit the inner loop only.
            }
            if count == 1 {
                break 'counting_up; // Will exit the outer loop
            }
            remaining -= 1; // Every loop iteration will decrece the remaining by 1.
        }

        count += 1;
    }
    println!("End count = {count}"); // \`End count = 1\`
}
\`\`\`
`,title:"loop (cont.)",level:4,content:`#### loop (cont.)

Example:

\`\`\`rust {all|2|3-5|7-16|15|9-11|18|3-5|7-16|12-14|20|all}
fn main() {
    let mut count = 0; // Set count to 0.
    'counting_up: loop { // label \`counting_up\`
        println!("count = {count}");
        let mut remaining = 10; // Set remaining to 10

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 { // When remaining is 9.
                break; // Doesn't specify a lable, will exit the inner loop only.
            }
            if count == 1 {
                break 'counting_up; // Will exit the outer loop
            }
            remaining -= 1; // Every loop iteration will decrece the remaining by 1.
        }

        count += 1;
    }
    println!("End count = {count}"); // \`End count = 1\`
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:43,start:593,end:625,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

#### loop (cont.)

Example:

\`\`\`rust {all|2|3-5|7-16|15|9-11|18|3-5|7-16|12-14|20|all}
fn main() {
    let mut count = 0; // Set count to 0.
    'counting_up: loop { // label \`counting_up\`
        println!("count = {count}");
        let mut remaining = 10; // Set remaining to 10

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 { // When remaining is 9.
                break; // Doesn't specify a lable, will exit the inner loop only.
            }
            if count == 1 {
                break 'counting_up; // Will exit the outer loop
            }
            remaining -= 1; // Every loop iteration will decrece the remaining by 1.
        }

        count += 1;
    }
    println!("End count = {count}"); // \`End count = 1\`
}
\`\`\`
`,title:"loop (cont.)",level:4,content:`#### loop (cont.)

Example:

\`\`\`rust {all|2|3-5|7-16|15|9-11|18|3-5|7-16|12-14|20|all}
fn main() {
    let mut count = 0; // Set count to 0.
    'counting_up: loop { // label \`counting_up\`
        println!("count = {count}");
        let mut remaining = 10; // Set remaining to 10

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 { // When remaining is 9.
                break; // Doesn't specify a lable, will exit the inner loop only.
            }
            if count == 1 {
                break 'counting_up; // Will exit the outer loop
            }
            remaining -= 1; // Every loop iteration will decrece the remaining by 1.
        }

        count += 1;
    }
    println!("End count = {count}"); // \`End count = 1\`
}
\`\`\``,frontmatter:{hideInToc:!0},index:33,start:593,end:625},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:Rw,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

#### loop (cont.)

<br />

\`\`\`shell
# Example outout: 
count = 0       # line 4: \`println!("count = {count}");\`
remaining = 10  # line 8: \`println!("remaining = {remaining}");\`
remaining = 9   # After one inner loop iteration, print remaining value
count = 1       # line 4: Print count value after breaking inner loop iteration
remaining = 10  # line 5: Reset remaining value to 10j
End count = 1   # line 20: While count value isn't reset, \`count = 1\` and break outer loop
\`\`\`
`,title:"loop (cont.)",level:4,content:`#### loop (cont.)

<br />

\`\`\`shell
# Example outout: 
count = 0       # line 4: \`println!("count = {count}");\`
remaining = 10  # line 8: \`println!("remaining = {remaining}");\`
remaining = 9   # After one inner loop iteration, print remaining value
count = 1       # line 4: Print count value after breaking inner loop iteration
remaining = 10  # line 5: Reset remaining value to 10j
End count = 1   # line 20: While count value isn't reset, \`count = 1\` and break outer loop
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:44,start:625,end:643,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

#### loop (cont.)

<br />

\`\`\`shell
# Example outout: 
count = 0       # line 4: \`println!("count = {count}");\`
remaining = 10  # line 8: \`println!("remaining = {remaining}");\`
remaining = 9   # After one inner loop iteration, print remaining value
count = 1       # line 4: Print count value after breaking inner loop iteration
remaining = 10  # line 5: Reset remaining value to 10j
End count = 1   # line 20: While count value isn't reset, \`count = 1\` and break outer loop
\`\`\`
`,title:"loop (cont.)",level:4,content:`#### loop (cont.)

<br />

\`\`\`shell
# Example outout: 
count = 0       # line 4: \`println!("count = {count}");\`
remaining = 10  # line 8: \`println!("remaining = {remaining}");\`
remaining = 9   # After one inner loop iteration, print remaining value
count = 1       # line 4: Print count value after breaking inner loop iteration
remaining = 10  # line 5: Reset remaining value to 10j
End count = 1   # line 20: While count value isn't reset, \`count = 1\` and break outer loop
\`\`\``,frontmatter:{hideInToc:!0},index:34,start:625,end:643},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:Ww,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### while

\`\`\`rust
fn main() {
    let mut number = 3;

    while number != 0 { // When number isn't equal to 0, continue the loop.
        println!("{number}!"); // Every loop iteration will print number with \`!\` at the end.

        number -= 1; // Every loop iteration will decrete number by 1.
    }

    println!("LIFTOFF!!!"); // After loop iteration, print \`LIFTOFF!!\`
}
\`\`\`

Output:

\`\`\`shell
3!
2!
1!
LIFTOFF!!!
\`\`\`
`,title:"while",level:4,content:`#### while

\`\`\`rust
fn main() {
    let mut number = 3;

    while number != 0 { // When number isn't equal to 0, continue the loop.
        println!("{number}!"); // Every loop iteration will print number with \`!\` at the end.

        number -= 1; // Every loop iteration will decrete number by 1.
    }

    println!("LIFTOFF!!!"); // After loop iteration, print \`LIFTOFF!!\`
}
\`\`\`

Output:

\`\`\`shell
3!
2!
1!
LIFTOFF!!!
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:45,start:644,end:670,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### while

\`\`\`rust
fn main() {
    let mut number = 3;

    while number != 0 { // When number isn't equal to 0, continue the loop.
        println!("{number}!"); // Every loop iteration will print number with \`!\` at the end.

        number -= 1; // Every loop iteration will decrete number by 1.
    }

    println!("LIFTOFF!!!"); // After loop iteration, print \`LIFTOFF!!\`
}
\`\`\`

Output:

\`\`\`shell
3!
2!
1!
LIFTOFF!!!
\`\`\`
`,title:"while",level:4,content:`#### while

\`\`\`rust
fn main() {
    let mut number = 3;

    while number != 0 { // When number isn't equal to 0, continue the loop.
        println!("{number}!"); // Every loop iteration will print number with \`!\` at the end.

        number -= 1; // Every loop iteration will decrete number by 1.
    }

    println!("LIFTOFF!!!"); // After loop iteration, print \`LIFTOFF!!\`
}
\`\`\`

Output:

\`\`\`shell
3!
2!
1!
LIFTOFF!!!
\`\`\``,frontmatter:{},index:35,start:644,end:670},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Yw,meta:{hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`
#### for

\`\`\`rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a { // Iterate through the element in array a as \`element\`
        print!("{element}, "); // 10, 20, 30, 40, 50,
    }

    //or

    for number in (1..4).rev() { // Iterate through the element from 1 to 4 in reverse order as \`number\`
        println!("{number}, "); // 3, 2, 1,
    }
}
\`\`\`
`,title:"for",level:4,content:`#### for

\`\`\`rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a { // Iterate through the element in array a as \`element\`
        print!("{element}, "); // 10, 20, 30, 40, 50,
    }

    //or

    for number in (1..4).rev() { // Iterate through the element from 1 to 4 in reverse order as \`number\`
        println!("{number}, "); // 3, 2, 1,
    }
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter2.md"},index:46,start:671,end:690,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`
#### for

\`\`\`rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a { // Iterate through the element in array a as \`element\`
        print!("{element}, "); // 10, 20, 30, 40, 50,
    }

    //or

    for number in (1..4).rev() { // Iterate through the element from 1 to 4 in reverse order as \`number\`
        println!("{number}, "); // 3, 2, 1,
    }
}
\`\`\`
`,title:"for",level:4,content:`#### for

\`\`\`rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a { // Iterate through the element in array a as \`element\`
        print!("{element}, "); // 10, 20, 30, 40, 50,
    }

    //or

    for number in (1..4).rev() { // Iterate through the element from 1 to 4 in reverse order as \`number\`
        println!("{number}, "); // 3, 2, 1,
    }
}
\`\`\``,frontmatter:{},index:36,start:671,end:690},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:n2,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md",slide:{raw:`---
hideInToc: true
---

#### for (cont.)

<br />

\`\`\`rust
for e in 1..4 { // Only iterate through 1 to 3 
    println!("{e}, "); // 1, 2, 3,
}
\`\`\`

If you want to iterate through the elements contain start and end, use \`..=\` instead.

\`\`\`rust
for e in 1..=4 {
    println!("{e}, "); // 1, 2, 3, 4, 
}
\`\`\`
`,title:"for (cont.)",level:4,content:`#### for (cont.)

<br />

\`\`\`rust
for e in 1..4 { // Only iterate through 1 to 3 
    println!("{e}, "); // 1, 2, 3,
}
\`\`\`

If you want to iterate through the elements contain start and end, use \`..=\` instead.

\`\`\`rust
for e in 1..=4 {
    println!("{e}, "); // 1, 2, 3, 4, 
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter2.md"},index:47,start:690,end:712,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",raw:`---
hideInToc: true
---

#### for (cont.)

<br />

\`\`\`rust
for e in 1..4 { // Only iterate through 1 to 3 
    println!("{e}, "); // 1, 2, 3,
}
\`\`\`

If you want to iterate through the elements contain start and end, use \`..=\` instead.

\`\`\`rust
for e in 1..=4 {
    println!("{e}, "); // 1, 2, 3, 4, 
}
\`\`\`
`,title:"for (cont.)",level:4,content:`#### for (cont.)

<br />

\`\`\`rust
for e in 1..4 { // Only iterate through 1 to 3 
    println!("{e}, "); // 1, 2, 3,
}
\`\`\`

If you want to iterate through the elements contain start and end, use \`..=\` instead.

\`\`\`rust
for e in 1..=4 {
    println!("{e}, "); // 1, 2, 3, 4, 
}
\`\`\``,frontmatter:{hideInToc:!0},index:37,start:690,end:712},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter2.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:o2,meta:{info:`Chapter 2: Common Programming Concepts
`,transition:"slide-left",layout:"center",title:"Chapter 3: Project I - Guessing Game",hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:null,title:"Chapter 3: Project I - Guessing Game",level:1,content:`# Chapter 3: Project I - Guessing Game

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />`,frontmatter:{info:`Chapter 2: Common Programming Concepts
`,transition:"slide-left",layout:"center",title:"Chapter 3: Project I - Guessing Game",hide:!1,srcSequence:"./pages/Chapter3.md"},index:48,start:0,end:11,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
info: |
  Chapter 2: Common Programming Concepts
transition: slide-left
layout: center
---

# Chapter 3: Project I - Guessing Game

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />
`,title:"Chapter 3: Project I - Guessing Game",level:1,content:`# Chapter 3: Project I - Guessing Game

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />`,frontmatter:{info:`Chapter 2: Common Programming Concepts
`,transition:"slide-left",layout:"center",title:"Chapter 3: Project I - Guessing Game"},index:0,start:0,end:11},inline:{raw:`---
src: ./pages/Chapter3.md
hide: false
---
`,content:"",frontmatter:{hide:!1},index:4,start:70,end:75},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:p2,meta:{hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`
## Setting Up New Project

\`\`\`shell
cargo new guessing_game # Create a new project named \`guessing_game\`
cd guessing_game        # Move into the project repository
\`\`\`

Project structure:

\`\`\`txt
guessing_game/
  ├── .gitignore
  ├── Cargo.toml
  └── src/
       └── main.rs
\`\`\`
`,title:"Setting Up New Project",level:2,content:`## Setting Up New Project

\`\`\`shell
cargo new guessing_game # Create a new project named \`guessing_game\`
cd guessing_game        # Move into the project repository
\`\`\`

Project structure:

\`\`\`txt
guessing_game/
  ├── .gitignore
  ├── Cargo.toml
  └── src/
       └── main.rs
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter3.md"},index:49,start:12,end:30,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`
## Setting Up New Project

\`\`\`shell
cargo new guessing_game # Create a new project named \`guessing_game\`
cd guessing_game        # Move into the project repository
\`\`\`

Project structure:

\`\`\`txt
guessing_game/
  ├── .gitignore
  ├── Cargo.toml
  └── src/
       └── main.rs
\`\`\`
`,title:"Setting Up New Project",level:2,content:`## Setting Up New Project

\`\`\`shell
cargo new guessing_game # Create a new project named \`guessing_game\`
cd guessing_game        # Move into the project repository
\`\`\`

Project structure:

\`\`\`txt
guessing_game/
  ├── .gitignore
  ├── Cargo.toml
  └── src/
       └── main.rs
\`\`\``,frontmatter:{},index:1,start:12,end:30},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:h2,meta:{hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`
## Processing a Game Part I

<br />

\`\`\`rust {all|2|4-10|8,9}
// src/main.rs
use std::io; // Bring \`io\` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();
}
\`\`\`
`,title:"Processing a Game Part I",level:2,content:`## Processing a Game Part I

<br />

\`\`\`rust {all|2|4-10|8,9}
// src/main.rs
use std::io; // Bring \`io\` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();
}
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter3.md"},index:50,start:31,end:49,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`
## Processing a Game Part I

<br />

\`\`\`rust {all|2|4-10|8,9}
// src/main.rs
use std::io; // Bring \`io\` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();
}
\`\`\`
`,title:"Processing a Game Part I",level:2,content:`## Processing a Game Part I

<br />

\`\`\`rust {all|2|4-10|8,9}
// src/main.rs
use std::io; // Bring \`io\` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();
}
\`\`\``,frontmatter:{},index:2,start:31,end:49},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:x2,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:'---\nhideInToc: true\n---\n\n## Processing a Game Part I (cont.)\n\n<br />\n\nTo read in the user input, we need `stdin` from `io` library.\n\n```rust\nio::stdin()\n    .read_line(&mut guess) // Read input into `guess`\n    .expect("Failed to read line"); // If we failed to read line, `expect` will return "Failed to read line".\n```\n\nThis block of code could be written in one line, but it\'ll be difficult to read. It\'s often wise to introduce a new line.\nWe will cover this `method_name()` syntax more detail in the future.\n\n```rust\nio::stdin().read_line(&mut guess).expect("Failed to read line");\n```\n\nAfter reading value, we print out the value of input.\n\n```rust\nprintln!("Your guess is: {guess}"); // This will print out the value of `guess`.\n```\n\nAs we read the input into variable `guess` via `io::stdin()`, we now can print it out using `{}`.  \nWe will discuss this in the next page.\n',title:"Processing a Game Part I (cont.)",level:2,content:'## Processing a Game Part I (cont.)\n\n<br />\n\nTo read in the user input, we need `stdin` from `io` library.\n\n```rust\nio::stdin()\n    .read_line(&mut guess) // Read input into `guess`\n    .expect("Failed to read line"); // If we failed to read line, `expect` will return "Failed to read line".\n```\n\nThis block of code could be written in one line, but it\'ll be difficult to read. It\'s often wise to introduce a new line.\nWe will cover this `method_name()` syntax more detail in the future.\n\n```rust\nio::stdin().read_line(&mut guess).expect("Failed to read line");\n```\n\nAfter reading value, we print out the value of input.\n\n```rust\nprintln!("Your guess is: {guess}"); // This will print out the value of `guess`.\n```\n\nAs we read the input into variable `guess` via `io::stdin()`, we now can print it out using `{}`.  \nWe will discuss this in the next page.',frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:51,start:49,end:81,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:'---\nhideInToc: true\n---\n\n## Processing a Game Part I (cont.)\n\n<br />\n\nTo read in the user input, we need `stdin` from `io` library.\n\n```rust\nio::stdin()\n    .read_line(&mut guess) // Read input into `guess`\n    .expect("Failed to read line"); // If we failed to read line, `expect` will return "Failed to read line".\n```\n\nThis block of code could be written in one line, but it\'ll be difficult to read. It\'s often wise to introduce a new line.\nWe will cover this `method_name()` syntax more detail in the future.\n\n```rust\nio::stdin().read_line(&mut guess).expect("Failed to read line");\n```\n\nAfter reading value, we print out the value of input.\n\n```rust\nprintln!("Your guess is: {guess}"); // This will print out the value of `guess`.\n```\n\nAs we read the input into variable `guess` via `io::stdin()`, we now can print it out using `{}`.  \nWe will discuss this in the next page.\n',title:"Processing a Game Part I (cont.)",level:2,content:'## Processing a Game Part I (cont.)\n\n<br />\n\nTo read in the user input, we need `stdin` from `io` library.\n\n```rust\nio::stdin()\n    .read_line(&mut guess) // Read input into `guess`\n    .expect("Failed to read line"); // If we failed to read line, `expect` will return "Failed to read line".\n```\n\nThis block of code could be written in one line, but it\'ll be difficult to read. It\'s often wise to introduce a new line.\nWe will cover this `method_name()` syntax more detail in the future.\n\n```rust\nio::stdin().read_line(&mut guess).expect("Failed to read line");\n```\n\nAfter reading value, we print out the value of input.\n\n```rust\nprintln!("Your guess is: {guess}"); // This will print out the value of `guess`.\n```\n\nAs we read the input into variable `guess` via `io::stdin()`, we now can print it out using `{}`.  \nWe will discuss this in the next page.',frontmatter:{hideInToc:!0},index:3,start:49,end:81},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:O2,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true
---

## Processing a Game Part I (cont.)

<br />

\`\`\`rust
println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
\`\`\`

This line now print not only string but also contains the user's input. The \`{}\` set of curly brackets is a placeholder.  
When printing the value of a variable, the variable name can go inside the curly brackets.

\`\`\`rust
let x = 5;
println!("The value of x is {x}."); // The value of x is 5.
\`\`\`

When printing the result of evaluating an expression, place empty curly brackets in the format string, 
then follow the format string with a comma-separated list of expressions to print in each empty curly bracket placeholder in the same order.

\`\`\`rust
let x = 5;
let y = 6;
println!("The value of x is {} and the value of y is {}.", x, y); // The value of x is 5 and the value of y is 6.
println!("The value of x is {x} and the value of y is {}.", y);   // You can alse do this and it has the same output as above.
\`\`\`
`,title:"Processing a Game Part I (cont.)",level:2,content:`## Processing a Game Part I (cont.)

<br />

\`\`\`rust
println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
\`\`\`

This line now print not only string but also contains the user's input. The \`{}\` set of curly brackets is a placeholder.  
When printing the value of a variable, the variable name can go inside the curly brackets.

\`\`\`rust
let x = 5;
println!("The value of x is {x}."); // The value of x is 5.
\`\`\`

When printing the result of evaluating an expression, place empty curly brackets in the format string, 
then follow the format string with a comma-separated list of expressions to print in each empty curly bracket placeholder in the same order.

\`\`\`rust
let x = 5;
let y = 6;
println!("The value of x is {} and the value of y is {}.", x, y); // The value of x is 5 and the value of y is 6.
println!("The value of x is {x} and the value of y is {}.", y);   // You can alse do this and it has the same output as above.
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:52,start:81,end:111,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true
---

## Processing a Game Part I (cont.)

<br />

\`\`\`rust
println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
\`\`\`

This line now print not only string but also contains the user's input. The \`{}\` set of curly brackets is a placeholder.  
When printing the value of a variable, the variable name can go inside the curly brackets.

\`\`\`rust
let x = 5;
println!("The value of x is {x}."); // The value of x is 5.
\`\`\`

When printing the result of evaluating an expression, place empty curly brackets in the format string, 
then follow the format string with a comma-separated list of expressions to print in each empty curly bracket placeholder in the same order.

\`\`\`rust
let x = 5;
let y = 6;
println!("The value of x is {} and the value of y is {}.", x, y); // The value of x is 5 and the value of y is 6.
println!("The value of x is {x} and the value of y is {}.", y);   // You can alse do this and it has the same output as above.
\`\`\`
`,title:"Processing a Game Part I (cont.)",level:2,content:`## Processing a Game Part I (cont.)

<br />

\`\`\`rust
println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
\`\`\`

This line now print not only string but also contains the user's input. The \`{}\` set of curly brackets is a placeholder.  
When printing the value of a variable, the variable name can go inside the curly brackets.

\`\`\`rust
let x = 5;
println!("The value of x is {x}."); // The value of x is 5.
\`\`\`

When printing the result of evaluating an expression, place empty curly brackets in the format string, 
then follow the format string with a comma-separated list of expressions to print in each empty curly bracket placeholder in the same order.

\`\`\`rust
let x = 5;
let y = 6;
println!("The value of x is {} and the value of y is {}.", x, y); // The value of x is 5 and the value of y is 6.
println!("The value of x is {x} and the value of y is {}.", y);   // You can alse do this and it has the same output as above.
\`\`\``,frontmatter:{hideInToc:!0},index:4,start:81,end:111},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:N2,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true
---

## Processing a Game Part I (cont.)

So the final code of first part will be:

\`\`\`rust
// src/main.rs
use std::io; // Bring \`io\` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into \`guess\`
        .expect("Failed to read line"); // If we failed to read line, \`expect\` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
}
\`\`\`
`,title:"Processing a Game Part I (cont.)",level:2,content:`## Processing a Game Part I (cont.)

So the final code of first part will be:

\`\`\`rust
// src/main.rs
use std::io; // Bring \`io\` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into \`guess\`
        .expect("Failed to read line"); // If we failed to read line, \`expect\` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:53,start:111,end:138,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true
---

## Processing a Game Part I (cont.)

So the final code of first part will be:

\`\`\`rust
// src/main.rs
use std::io; // Bring \`io\` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into \`guess\`
        .expect("Failed to read line"); // If we failed to read line, \`expect\` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
}
\`\`\`
`,title:"Processing a Game Part I (cont.)",level:2,content:`## Processing a Game Part I (cont.)

So the final code of first part will be:

\`\`\`rust
// src/main.rs
use std::io; // Bring \`io\` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into \`guess\`
        .expect("Failed to read line"); // If we failed to read line, \`expect\` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
}
\`\`\``,frontmatter:{hideInToc:!0},index:5,start:111,end:138},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:G2,meta:{hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`
## Tesing of First Part

<br />

\`\`\`shell
$ cargo run # Run our project.
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 6.44s
     Running \`target/debug/guessing_game\`
Guess the number!!
Please input your guess.
6
Your guess is: 6
\`\`\``,title:"Tesing of First Part",level:2,content:`## Tesing of First Part

<br />

\`\`\`shell
$ cargo run # Run our project.
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 6.44s
     Running \`target/debug/guessing_game\`
Guess the number!!
Please input your guess.
6
Your guess is: 6
\`\`\``,frontmatter:{hide:!1,srcSequence:"./pages/Chapter3.md"},index:54,start:139,end:154,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`
## Tesing of First Part

<br />

\`\`\`shell
$ cargo run # Run our project.
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 6.44s
     Running \`target/debug/guessing_game\`
Guess the number!!
Please input your guess.
6
Your guess is: 6
\`\`\``,title:"Tesing of First Part",level:2,content:`## Tesing of First Part

<br />

\`\`\`shell
$ cargo run # Run our project.
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 6.44s
     Running \`target/debug/guessing_game\`
Guess the number!!
Please input your guess.
6
Your guess is: 6
\`\`\``,frontmatter:{},index:6,start:139,end:154},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:X2,meta:{hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:"\n## Processing a Game Part II\n\nNow, we need to generate a random(secret) number for user to guess.\nWhile Rust doesn't include random number functionality, we need to import `rand` crate to use this function in our project.\n\nInside `Cargo.toml`, we need to add the `rand` crate.\n\n```toml\n[dependencies]\nrand = \"0.8.5\"\n```\n\nYou can think of this as a tool box and `std` is a built in tool box.\nIf you need any addition tool that's not inside `std`, we need to mention it explicitly in `Cargo.toml`.\n\nNow, without changing other code in `src/main.rs`, run `cargo build`. When we include new external dependency, \n`cargo` will check it and download it inside `./target`. For more Cargo and it's ecosystem, we'll discuss in the later chapter.\n",title:"Processing a Game Part II",level:2,content:"## Processing a Game Part II\n\nNow, we need to generate a random(secret) number for user to guess.\nWhile Rust doesn't include random number functionality, we need to import `rand` crate to use this function in our project.\n\nInside `Cargo.toml`, we need to add the `rand` crate.\n\n```toml\n[dependencies]\nrand = \"0.8.5\"\n```\n\nYou can think of this as a tool box and `std` is a built in tool box.\nIf you need any addition tool that's not inside `std`, we need to mention it explicitly in `Cargo.toml`.\n\nNow, without changing other code in `src/main.rs`, run `cargo build`. When we include new external dependency, \n`cargo` will check it and download it inside `./target`. For more Cargo and it's ecosystem, we'll discuss in the later chapter.",frontmatter:{hide:!1,srcSequence:"./pages/Chapter3.md"},index:55,start:155,end:174,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:"\n## Processing a Game Part II\n\nNow, we need to generate a random(secret) number for user to guess.\nWhile Rust doesn't include random number functionality, we need to import `rand` crate to use this function in our project.\n\nInside `Cargo.toml`, we need to add the `rand` crate.\n\n```toml\n[dependencies]\nrand = \"0.8.5\"\n```\n\nYou can think of this as a tool box and `std` is a built in tool box.\nIf you need any addition tool that's not inside `std`, we need to mention it explicitly in `Cargo.toml`.\n\nNow, without changing other code in `src/main.rs`, run `cargo build`. When we include new external dependency, \n`cargo` will check it and download it inside `./target`. For more Cargo and it's ecosystem, we'll discuss in the later chapter.\n",title:"Processing a Game Part II",level:2,content:"## Processing a Game Part II\n\nNow, we need to generate a random(secret) number for user to guess.\nWhile Rust doesn't include random number functionality, we need to import `rand` crate to use this function in our project.\n\nInside `Cargo.toml`, we need to add the `rand` crate.\n\n```toml\n[dependencies]\nrand = \"0.8.5\"\n```\n\nYou can think of this as a tool box and `std` is a built in tool box.\nIf you need any addition tool that's not inside `std`, we need to mention it explicitly in `Cargo.toml`.\n\nNow, without changing other code in `src/main.rs`, run `cargo build`. When we include new external dependency, \n`cargo` will check it and download it inside `./target`. For more Cargo and it's ecosystem, we'll discuss in the later chapter.",frontmatter:{},index:7,start:155,end:174},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:rx,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:"---\nhideInToc: true\n---\n\n## Processing a Game Part II (cont.)\n\nTo generate a random number, we write `rand::thread_rng().gen_range(1..=100)`.\n1. First, we call the `rand::thread_rng()` function that gives us a particaular random number. \n2. Then, we call `gen_range()` method on the random number generator.\n3. The above method takes a range expression as an argument and generates a random number in the range. So, we specify it by passing `1..=100`.\n\nNow, we add the following into `main.rs`:\n- `use rand::Rng;`\n- `let secret_numner = rand::thread_rng().gen_range(1..=100);`\n",title:"Processing a Game Part II (cont.)",level:2,content:"## Processing a Game Part II (cont.)\n\nTo generate a random number, we write `rand::thread_rng().gen_range(1..=100)`.\n1. First, we call the `rand::thread_rng()` function that gives us a particaular random number. \n2. Then, we call `gen_range()` method on the random number generator.\n3. The above method takes a range expression as an argument and generates a random number in the range. So, we specify it by passing `1..=100`.\n\nNow, we add the following into `main.rs`:\n- `use rand::Rng;`\n- `let secret_numner = rand::thread_rng().gen_range(1..=100);`",frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:56,start:174,end:189,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:"---\nhideInToc: true\n---\n\n## Processing a Game Part II (cont.)\n\nTo generate a random number, we write `rand::thread_rng().gen_range(1..=100)`.\n1. First, we call the `rand::thread_rng()` function that gives us a particaular random number. \n2. Then, we call `gen_range()` method on the random number generator.\n3. The above method takes a range expression as an argument and generates a random number in the range. So, we specify it by passing `1..=100`.\n\nNow, we add the following into `main.rs`:\n- `use rand::Rng;`\n- `let secret_numner = rand::thread_rng().gen_range(1..=100);`\n",title:"Processing a Game Part II (cont.)",level:2,content:"## Processing a Game Part II (cont.)\n\nTo generate a random number, we write `rand::thread_rng().gen_range(1..=100)`.\n1. First, we call the `rand::thread_rng()` function that gives us a particaular random number. \n2. Then, we call `gen_range()` method on the random number generator.\n3. The above method takes a range expression as an argument and generates a random number in the range. So, we specify it by passing `1..=100`.\n\nNow, we add the following into `main.rs`:\n- `use rand::Rng;`\n- `let secret_numner = rand::thread_rng().gen_range(1..=100);`",frontmatter:{hideInToc:!0},index:8,start:174,end:189},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:ux,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

<br />

\`\`\`rust {all|3|8}
// src/main.rs
use std::io;    // Bring \`io\` library into code. This library provides stdin function we will use later.
use rand::Rng;  // Use the tool box \`rand::Rng\` so that we can use the tool inside such as \`rand::thread_rng()\`.

fn main () {
    println!("Guess the number!!");

    let secret_numner = rand::thread_rng().gen_range(1..=100); // Generate the secret number using our new imported tool.

    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into \`guess\`
        .expect("Failed to read line"); // If we failed to read line, \`expect\` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
}
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

<br />

\`\`\`rust {all|3|8}
// src/main.rs
use std::io;    // Bring \`io\` library into code. This library provides stdin function we will use later.
use rand::Rng;  // Use the tool box \`rand::Rng\` so that we can use the tool inside such as \`rand::thread_rng()\`.

fn main () {
    println!("Guess the number!!");

    let secret_numner = rand::thread_rng().gen_range(1..=100); // Generate the secret number using our new imported tool.

    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into \`guess\`
        .expect("Failed to read line"); // If we failed to read line, \`expect\` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:57,start:189,end:220,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

<br />

\`\`\`rust {all|3|8}
// src/main.rs
use std::io;    // Bring \`io\` library into code. This library provides stdin function we will use later.
use rand::Rng;  // Use the tool box \`rand::Rng\` so that we can use the tool inside such as \`rand::thread_rng()\`.

fn main () {
    println!("Guess the number!!");

    let secret_numner = rand::thread_rng().gen_range(1..=100); // Generate the secret number using our new imported tool.

    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into \`guess\`
        .expect("Failed to read line"); // If we failed to read line, \`expect\` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
}
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

<br />

\`\`\`rust {all|3|8}
// src/main.rs
use std::io;    // Bring \`io\` library into code. This library provides stdin function we will use later.
use rand::Rng;  // Use the tool box \`rand::Rng\` so that we can use the tool inside such as \`rand::thread_rng()\`.

fn main () {
    println!("Guess the number!!");

    let secret_numner = rand::thread_rng().gen_range(1..=100); // Generate the secret number using our new imported tool.

    println!("Please input your guess.")
    
    // Make a new string name \`guess\`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into \`guess\`
        .expect("Failed to read line"); // If we failed to read line, \`expect\` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of \`guess\`.
}
\`\`\``,frontmatter:{hideInToc:!0},index:9,start:189,end:220},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:mx,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

Comparing the guess to the input. 

\`\`\`rust
// src/main.rs
use std::io;
use std::cmp::Ordering; // Import a new tool called Ordering, this could help us in comparing numbers.
use rand::Rng;

fn main () {
    // -- snip -- 
    match guess.cmp(&secret_numner) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

Comparing the guess to the input. 

\`\`\`rust
// src/main.rs
use std::io;
use std::cmp::Ordering; // Import a new tool called Ordering, this could help us in comparing numbers.
use rand::Rng;

fn main () {
    // -- snip -- 
    match guess.cmp(&secret_numner) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:58,start:220,end:244,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

Comparing the guess to the input. 

\`\`\`rust
// src/main.rs
use std::io;
use std::cmp::Ordering; // Import a new tool called Ordering, this could help us in comparing numbers.
use rand::Rng;

fn main () {
    // -- snip -- 
    match guess.cmp(&secret_numner) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

Comparing the guess to the input. 

\`\`\`rust
// src/main.rs
use std::io;
use std::cmp::Ordering; // Import a new tool called Ordering, this could help us in comparing numbers.
use rand::Rng;

fn main () {
    // -- snip -- 
    match guess.cmp(&secret_numner) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
\`\`\``,frontmatter:{hideInToc:!0},index:10,start:220,end:244},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:Cx,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:'---\nhideInToc: true \n---\n\n## Processing a Game Part II (cont.)\n\nThe `match` expression will get the return value of `guess.cmp(&secret_number)` and compare it to the following arms.  \n\n```rust\nmatch guess.cmp(&secret_numner) {\n    Ordering::Less => println!("Too small!"),  // <- arm\n    Ordering::Greater => println!("Too big!"), // <- arm\n    Ordering::Equal => println!("You win!"),   // <- arm\n}\n```\n\nIf the return value of `guess.cmp(&secret_number)` is `Ordering::Less`, the associated code will be execute and print `Too small!` to the screen. The `match` expression\nends after the first successful match.\n',title:"Processing a Game Part II (cont.)",level:2,content:'## Processing a Game Part II (cont.)\n\nThe `match` expression will get the return value of `guess.cmp(&secret_number)` and compare it to the following arms.  \n\n```rust\nmatch guess.cmp(&secret_numner) {\n    Ordering::Less => println!("Too small!"),  // <- arm\n    Ordering::Greater => println!("Too big!"), // <- arm\n    Ordering::Equal => println!("You win!"),   // <- arm\n}\n```\n\nIf the return value of `guess.cmp(&secret_number)` is `Ordering::Less`, the associated code will be execute and print `Too small!` to the screen. The `match` expression\nends after the first successful match.',frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:59,start:244,end:263,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:'---\nhideInToc: true \n---\n\n## Processing a Game Part II (cont.)\n\nThe `match` expression will get the return value of `guess.cmp(&secret_number)` and compare it to the following arms.  \n\n```rust\nmatch guess.cmp(&secret_numner) {\n    Ordering::Less => println!("Too small!"),  // <- arm\n    Ordering::Greater => println!("Too big!"), // <- arm\n    Ordering::Equal => println!("You win!"),   // <- arm\n}\n```\n\nIf the return value of `guess.cmp(&secret_number)` is `Ordering::Less`, the associated code will be execute and print `Too small!` to the screen. The `match` expression\nends after the first successful match.\n',title:"Processing a Game Part II (cont.)",level:2,content:'## Processing a Game Part II (cont.)\n\nThe `match` expression will get the return value of `guess.cmp(&secret_number)` and compare it to the following arms.  \n\n```rust\nmatch guess.cmp(&secret_numner) {\n    Ordering::Less => println!("Too small!"),  // <- arm\n    Ordering::Greater => println!("Too big!"), // <- arm\n    Ordering::Equal => println!("You win!"),   // <- arm\n}\n```\n\nIf the return value of `guess.cmp(&secret_number)` is `Ordering::Less`, the associated code will be execute and print `Too small!` to the screen. The `match` expression\nends after the first successful match.',frontmatter:{hideInToc:!0},index:11,start:244,end:263},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:kx,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

However, this **won't** compile. (mismatched type)

\`\`\`shell
error[E0308]: mismatched types
  --> src/main.rs:22:21
   |
22 |     match guess.cmp(&secret_number) {
   |                 --- ^^^^^^^^^^^^^^ expected struct \`String\`, found integer
   |                 |
   |                 arguments to this function are incorrect
   |
   = note: expected reference \`&String\`
              found reference \`&{integer}\`
note: associated function defined here
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

However, this **won't** compile. (mismatched type)

\`\`\`shell
error[E0308]: mismatched types
  --> src/main.rs:22:21
   |
22 |     match guess.cmp(&secret_number) {
   |                 --- ^^^^^^^^^^^^^^ expected struct \`String\`, found integer
   |                 |
   |                 arguments to this function are incorrect
   |
   = note: expected reference \`&String\`
              found reference \`&{integer}\`
note: associated function defined here
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:60,start:263,end:285,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

However, this **won't** compile. (mismatched type)

\`\`\`shell
error[E0308]: mismatched types
  --> src/main.rs:22:21
   |
22 |     match guess.cmp(&secret_number) {
   |                 --- ^^^^^^^^^^^^^^ expected struct \`String\`, found integer
   |                 |
   |                 arguments to this function are incorrect
   |
   = note: expected reference \`&String\`
              found reference \`&{integer}\`
note: associated function defined here
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

However, this **won't** compile. (mismatched type)

\`\`\`shell
error[E0308]: mismatched types
  --> src/main.rs:22:21
   |
22 |     match guess.cmp(&secret_number) {
   |                 --- ^^^^^^^^^^^^^^ expected struct \`String\`, found integer
   |                 |
   |                 arguments to this function are incorrect
   |
   = note: expected reference \`&String\`
              found reference \`&{integer}\`
note: associated function defined here
\`\`\``,frontmatter:{hideInToc:!0},index:12,start:263,end:285},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:Mx,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

<br />

\`\`\`rust
let guess: u32 = guess.trim().parse().expect("Please type a number!");
\`\`\`

<br />

<v-clicks>
    <li>The <code>trim()</code> method on a <code>String</code> will eliminate any whitespace at the beginning and end, 
        which we must do to be able to compare the string to the <code>u32</code>, which can only contain numerical data.</li>
    <li>The <code>parse()</code> method converts a string to another type.</li>
    <li>If we failed to <code>trim()</code> or <code>parse()</code>, <code>expect()</code> will return "Please type a number",</li>
</v-clicks>
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

<br />

\`\`\`rust
let guess: u32 = guess.trim().parse().expect("Please type a number!");
\`\`\`

<br />

<v-clicks>
    <li>The <code>trim()</code> method on a <code>String</code> will eliminate any whitespace at the beginning and end, 
        which we must do to be able to compare the string to the <code>u32</code>, which can only contain numerical data.</li>
    <li>The <code>parse()</code> method converts a string to another type.</li>
    <li>If we failed to <code>trim()</code> or <code>parse()</code>, <code>expect()</code> will return "Please type a number",</li>
</v-clicks>`,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:61,start:285,end:306,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

<br />

\`\`\`rust
let guess: u32 = guess.trim().parse().expect("Please type a number!");
\`\`\`

<br />

<v-clicks>
    <li>The <code>trim()</code> method on a <code>String</code> will eliminate any whitespace at the beginning and end, 
        which we must do to be able to compare the string to the <code>u32</code>, which can only contain numerical data.</li>
    <li>The <code>parse()</code> method converts a string to another type.</li>
    <li>If we failed to <code>trim()</code> or <code>parse()</code>, <code>expect()</code> will return "Please type a number",</li>
</v-clicks>
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

<br />

\`\`\`rust
let guess: u32 = guess.trim().parse().expect("Please type a number!");
\`\`\`

<br />

<v-clicks>
    <li>The <code>trim()</code> method on a <code>String</code> will eliminate any whitespace at the beginning and end, 
        which we must do to be able to compare the string to the <code>u32</code>, which can only contain numerical data.</li>
    <li>The <code>parse()</code> method converts a string to another type.</li>
    <li>If we failed to <code>trim()</code> or <code>parse()</code>, <code>expect()</code> will return "Please type a number",</li>
</v-clicks>`,frontmatter:{hideInToc:!0},index:13,start:285,end:306},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:Hx,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

Now, to make multiple guesses available, we can use \`loop\`.  


\`\`\`rust
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

Now, to make multiple guesses available, we can use \`loop\`.  


\`\`\`rust
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:62,start:306,end:329,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

Now, to make multiple guesses available, we can use \`loop\`.  


\`\`\`rust
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

Now, to make multiple guesses available, we can use \`loop\`.  


\`\`\`rust
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
\`\`\``,frontmatter:{hideInToc:!0},index:14,start:306,end:329},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:Ux,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

To quit after correct guess, add \`break\` if equal.

\`\`\`rust {all|9-12}
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!"),
            break;
        }
    }
}
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

To quit after correct guess, add \`break\` if equal.

\`\`\`rust {all|9-12}
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!"),
            break;
        }
    }
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:63,start:329,end:354,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true
---

## Processing a Game Part II (cont.)

To quit after correct guess, add \`break\` if equal.

\`\`\`rust {all|9-12}
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!"),
            break;
        }
    }
}
\`\`\`
`,title:"Processing a Game Part II (cont.)",level:2,content:`## Processing a Game Part II (cont.)

To quit after correct guess, add \`break\` if equal.

\`\`\`rust {all|9-12}
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!"),
            break;
        }
    }
}
\`\`\``,frontmatter:{hideInToc:!0},index:15,start:329,end:354},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:Jx,meta:{hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:"\n## Processing a Game Part III \n\nTo handle invalid input, use `Ok()` and `Err()`. If `guess.trim().parse()` return `Ok()`, set `guess` to the input number, else simply `continue`.\n\n```rust\nlet guess: u32 = match guess.trim().parse() {\n    Ok(num) => num,\n    Err(_) => continue,\n};\n```\n",title:"Processing a Game Part III",level:2,content:"## Processing a Game Part III \n\nTo handle invalid input, use `Ok()` and `Err()`. If `guess.trim().parse()` return `Ok()`, set `guess` to the input number, else simply `continue`.\n\n```rust\nlet guess: u32 = match guess.trim().parse() {\n    Ok(num) => num,\n    Err(_) => continue,\n};\n```",frontmatter:{hide:!1,srcSequence:"./pages/Chapter3.md"},index:64,start:355,end:367,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:"\n## Processing a Game Part III \n\nTo handle invalid input, use `Ok()` and `Err()`. If `guess.trim().parse()` return `Ok()`, set `guess` to the input number, else simply `continue`.\n\n```rust\nlet guess: u32 = match guess.trim().parse() {\n    Ok(num) => num,\n    Err(_) => continue,\n};\n```\n",title:"Processing a Game Part III",level:2,content:"## Processing a Game Part III \n\nTo handle invalid input, use `Ok()` and `Err()`. If `guess.trim().parse()` return `Ok()`, set `guess` to the input number, else simply `continue`.\n\n```rust\nlet guess: u32 = match guess.trim().parse() {\n    Ok(num) => num,\n    Err(_) => continue,\n};\n```",frontmatter:{},index:16,start:355,end:367},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:nk,meta:{hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`
## Recap

1. Import libraries
2. Generate the secret number
3. Use a loop to read the answer
4. If the user guess the right answer, break
`,title:"Recap",level:2,content:`## Recap

1. Import libraries
2. Generate the secret number
3. Use a loop to read the answer
4. If the user guess the right answer, break`,frontmatter:{hide:!1,srcSequence:"./pages/Chapter3.md"},index:65,start:368,end:376,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`
## Recap

1. Import libraries
2. Generate the secret number
3. Use a loop to read the answer
4. If the user guess the right answer, break
`,title:"Recap",level:2,content:`## Recap

1. Import libraries
2. Generate the secret number
3. Use a loop to read the answer
4. If the user guess the right answer, break`,frontmatter:{},index:17,start:368,end:376},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:pk,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true 
---

### Import libraries

<br />

\`\`\`rust
use rand::Rng;
use std::cmp::Ordering;
use std::io;
\`\`\`

<br />

### Generate the secret number

<br />

\`\`\`rust 
fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    /* --- snip --- */
}
\`\`\`
`,title:"Import libraries",level:3,content:`### Import libraries

<br />

\`\`\`rust
use rand::Rng;
use std::cmp::Ordering;
use std::io;
\`\`\`

<br />

### Generate the secret number

<br />

\`\`\`rust 
fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    /* --- snip --- */
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:66,start:376,end:406,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true 
---

### Import libraries

<br />

\`\`\`rust
use rand::Rng;
use std::cmp::Ordering;
use std::io;
\`\`\`

<br />

### Generate the secret number

<br />

\`\`\`rust 
fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    /* --- snip --- */
}
\`\`\`
`,title:"Import libraries",level:3,content:`### Import libraries

<br />

\`\`\`rust
use rand::Rng;
use std::cmp::Ordering;
use std::io;
\`\`\`

<br />

### Generate the secret number

<br />

\`\`\`rust 
fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    /* --- snip --- */
}
\`\`\``,frontmatter:{hideInToc:!0},index:18,start:376,end:406},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:hk,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`---
hideInToc: true 
---

### Use a loop to read the answer until the the user guess the right answer

<br />

\`\`\`rust 
loop {
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    let guess: u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => continue,
    };

    println!("You guessed: {guess}");

    /* --- snip --- */
}
\`\`\`
`,title:"Use a loop to read the answer until the the user guess the right answer",level:3,content:`### Use a loop to read the answer until the the user guess the right answer

<br />

\`\`\`rust 
loop {
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    let guess: u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => continue,
    };

    println!("You guessed: {guess}");

    /* --- snip --- */
}
\`\`\``,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:67,start:406,end:435,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`---
hideInToc: true 
---

### Use a loop to read the answer until the the user guess the right answer

<br />

\`\`\`rust 
loop {
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    let guess: u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => continue,
    };

    println!("You guessed: {guess}");

    /* --- snip --- */
}
\`\`\`
`,title:"Use a loop to read the answer until the the user guess the right answer",level:3,content:`### Use a loop to read the answer until the the user guess the right answer

<br />

\`\`\`rust 
loop {
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    let guess: u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => continue,
    };

    println!("You guessed: {guess}");

    /* --- snip --- */
}
\`\`\``,frontmatter:{hideInToc:!0},index:19,start:406,end:435},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:Dk,meta:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md",slide:{raw:`--- 
hideInToc: true 
---

### If the user guess the right answer, break

<br />

\`\`\`rust
loop {
    /* --- snip --- */ 
    
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!");
            break;
        }
    }
}
\`\`\`

<br />

<Download filePath="./sources/guessing_game.rs" name="Click to download the final main.rs" />
`,title:"If the user guess the right answer, break",level:3,content:`### If the user guess the right answer, break

<br />

\`\`\`rust
loop {
    /* --- snip --- */ 
    
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!");
            break;
        }
    }
}
\`\`\`

<br />

<Download filePath="./sources/guessing_game.rs" name="Click to download the final main.rs" />`,frontmatter:{hideInToc:!0,hide:!1,srcSequence:"./pages/Chapter3.md"},index:68,start:435,end:462,source:{filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",raw:`--- 
hideInToc: true 
---

### If the user guess the right answer, break

<br />

\`\`\`rust
loop {
    /* --- snip --- */ 
    
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!");
            break;
        }
    }
}
\`\`\`

<br />

<Download filePath="./sources/guessing_game.rs" name="Click to download the final main.rs" />
`,title:"If the user guess the right answer, break",level:3,content:`### If the user guess the right answer, break

<br />

\`\`\`rust
loop {
    /* --- snip --- */ 
    
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!");
            break;
        }
    }
}
\`\`\`

<br />

<Download filePath="./sources/guessing_game.rs" name="Click to download the final main.rs" />`,frontmatter:{hideInToc:!0},index:20,start:435,end:462},filepath:"/home/runner/work/rust-slidev/rust-slidev/pages/Chapter3.md",noteHTML:"",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:jk,meta:{layout:"center",hideInToc:!0,slide:{raw:`---
layout: center 
hideInToc: true
---

<div>
  <a href="https://github.com/gnitoahc/rust-slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="mailto:chaotingchen10@gmail.com" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-send-filled />
  </a>
  <a href="https://www.linkedin.com/in/chaoting-chen/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-linkedin />
  </a>
</div>
`,content:`<div>
  <a href="https://github.com/gnitoahc/rust-slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="mailto:chaotingchen10@gmail.com" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-send-filled />
  </a>
  <a href="https://www.linkedin.com/in/chaoting-chen/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-linkedin />
  </a>
</div>`,frontmatter:{layout:"center",hideInToc:!0},index:69,start:75,end:95,noteHTML:"",filepath:"/home/runner/work/rust-slidev/rust-slidev/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",component:y9,meta:{layout:"end"}}],Je=Nk,po=[{name:"play",path:"/",component:LC,children:[...Je]},{name:"print",path:"/print",component:p9},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(t){if(!co.remote||co.remote===t.query.password)return!0;if(co.remote&&t.query.password===void 0){const s=prompt("Enter password");if(co.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};po.push({path:"/presenter/print",component:()=>jt(()=>import("./PresenterPrint-88d2f21e.js"),["assets/PresenterPrint-88d2f21e.js","assets/NoteDisplay-11013fc8.js"])}),po.push({name:"notes",path:"/notes",component:()=>jt(()=>import("./NotesView-827c88ef.js"),["assets/NotesView-827c88ef.js","assets/NoteDisplay-11013fc8.js"]),beforeEnter:n}),po.push({name:"presenter",path:"/presenter/:no",component:()=>jt(()=>import("./Presenter-2e470400.js"),["assets/Presenter-2e470400.js","assets/NoteDisplay-11013fc8.js","assets/DrawingControls-0bd6b117.js","assets/Presenter-aa6741a8.css"]),beforeEnter:n}),po.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Cn=x_({history:wA("/rust-slidev"),routes:po});function Hk(n,t,{mode:s="replace"}={}){return P({get(){const o=Cn.currentRoute.value.query[n];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){ln(()=>{Cn[x(s)]({query:{...Cn.currentRoute.value.query,[n]:o}})})}})}const pf=Z(0);ln(()=>{Cn.afterEach(async()=>{await ln(),pf.value+=1})});const uf=Z(0),jn=P(()=>Cn.currentRoute.value),gt=P(()=>jn.value.query.print!==void 0),Vk=P(()=>jn.value.query.print==="clicks"),yt=P(()=>jn.value.query.embedded!==void 0),vn=P(()=>jn.value.path.startsWith("/presenter")),qk=P(()=>jn.value.path.startsWith("/notes")),vo=P(()=>gt.value&&!Vk.value),Na=P(()=>jn.value.query.password),Wk=P(()=>!vn.value&&(!Ie.remote||Na.value===Ie.remote)),Vp=Hk("clicks","0"),Gk=P(()=>Je.length-1),Uk=P(()=>jn.value.path),Ke=P(()=>parseInt(Uk.value.split(/\//g).slice(-1)[0])||1);P(()=>gr(Ke.value));const fn=P(()=>Je.find(n=>n.path===`${Ke.value}`));P(()=>{var n,t,s;return(s=(t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:s.id});P(()=>{var n,t;return((t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.layout)||(Ke.value===1?"cover":"default")});const qr=P(()=>Je.find(n=>n.path===`${Math.min(Je.length,Ke.value+1)}`)),zk=P(()=>Je.find(n=>n.path===`${Math.max(1,Ke.value-1)}`)),Yk=P(()=>{var n,t;return pf.value,((t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),Ln=P({get(){if(vo.value)return 99999;let n=+(Vp.value||0);return isNaN(n)&&(n=0),n},set(n){Vp.value=n.toString()}}),Gl=P(()=>{var n,t;return+(((t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.clicks)??Yk.value.length)}),Kk=P(()=>Ke.value<Je.length-1||Ln.value<Gl.value),Zk=P(()=>Ke.value>1||Ln.value>0),Jk=P(()=>Je.filter(n=>{var t,s;return(s=(t=n.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((n,t)=>(Mi(n,t),n),[])),Qk=P(()=>Li(Jk.value,fn.value));P(()=>Ri(Qk.value));const Xk=P(()=>oE(uf.value,fn.value,zk.value));Be(fn,(n,t)=>{uf.value=Number(n==null?void 0:n.path)-Number(t==null?void 0:t.path)});function Ht(){Gl.value<=Ln.value?Ro():Ln.value+=1}async function Vt(){Ln.value<=0?await jo():Ln.value-=1}function gr(n){return vn.value?`/presenter/${n}`:`/${n}`}function Ro(){const n=Math.min(Je.length,Ke.value+1);return qs(n)}async function jo(n=!0){const t=Math.max(1,Ke.value-1);await qs(t),n&&Gl.value&&Cn.replace({query:{...jn.value.query,clicks:Gl.value}})}function qs(n,t){return Cn.push({path:gr(n),query:{...jn.value.query,clicks:t}})}function eE(n){const t=Z(0),{direction:s,distanceX:o,distanceY:l}=Y3(n,{onSwipeStart(r){r.pointerType==="touch"&&(Oo.value||(t.value=Ba()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||Oo.value)return;const a=Math.abs(o.value),c=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value==="left"?Ht():Vt():(c/window.innerHeight>.4||c>200)&&(s.value==="down"?jo():Ro())}})}async function Ha(){const{saveAs:n}=await jt(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);n(typeof Ie.download=="string"?Ie.download:Ie.exportFilename?`${Ie.exportFilename}.pdf`:"/rust-slidevslidev-exported.pdf",`${Ie.title}.pdf`)}async function nE(n){var t,s;if(n==null){const o=(s=(t=fn.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Mi(n,t,s=1){var l,r,a,c,p;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&n.length>0?Mi(n[n.length-1].children,t,s+1):n.push({children:[],level:s,path:t.path,hideInToc:!!((a=t.meta)!=null&&a.hideInToc),title:(p=(c=t.meta)==null?void 0:c.slide)==null?void 0:p.title})}function Li(n,t,s=!1,o){return n.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:s};return r.children.length>0&&(r.children=Li(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function Ri(n,t=1){return n.filter(s=>!s.hideInToc).map(s=>({...s,children:Ri(s.children,t+1)}))}const tE={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function sE(n,t=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let s=n.name.includes("|")?n.name:tE[n.name]||n.name;if(s.includes("|")){const[o,l]=s.split("|").map(r=>r.trim());s=t?l:o}if(s)return{...n,name:s}}function oE(n,t,s){var l,r;let o=n>0?(l=s==null?void 0:s.meta)==null?void 0:l.transition:(r=t==null?void 0:t.meta)==null?void 0:r.transition;return o||(o=Ie.transition),sE(o,n<0)}function lE(){const n=Ie.titleTemplate.replace("%s",Ie.title||"Slidev");Jd({title:n,htmlAttrs:Ie.htmlAttrs}),E5(`${n} - shared`),$5(`${n} - drawings`);const t=`${location.origin}_${C5()}`;function s(){qk.value||!vn.value&&!B5.includes(location.host.split(":")[0])||(vn.value?(Xs("page",+Ke.value),Xs("clicks",Ln.value)):(Xs("viewerPage",+Ke.value),Xs("viewerClicks",Ln.value)),Xs("lastUpdate",{id:t,type:vn.value?"presenter":"viewer",time:new Date().getTime()}))}Cn.afterEach(s),Be(Ln,s),T5(o=>{var r;Cn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ke.value||+Ln.value!=+o.clicks)&&Cn.replace({path:gr(o.page),query:{...Cn.currentRoute.value.query,clicks:o.clicks||0}})})}const rE=Se({__name:"App",setup(n){return M(V),lE(),(t,s)=>{const o=Ns("RouterView"),l=Ns("StarportCarrier");return A(),k(Pe,null,[F(o),F(l)],64)}}}),aE=q(rE,[["__file","/home/runner/work/rust-slidev/rust-slidev/node_modules/@slidev/client/App.vue"]]);function Wr(n){return n!==null&&typeof n=="object"}function Va(n,t,s=".",o){if(!Wr(t))return Va(n,{},s,o);const l=Object.assign({},t);for(const r in n){if(r==="__proto__"||r==="constructor")continue;const a=n[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:Wr(a)&&Wr(l[r])?l[r]=Va(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function iE(n){return(...t)=>t.reduce((s,o)=>Va(s,o,"",n),{})}const cE=iE();var qp;const df=typeof window<"u",pE=Object.prototype.toString,uE=n=>typeof n=="number",dE=n=>typeof n=="string",qa=n=>pE.call(n)==="[object Object]",wl=()=>{};df&&((qp=window==null?void 0:window.navigator)!=null&&qp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function yf(n){return typeof n=="function"?n():x(n)}function yE(n){return n}function ff(n){return Jl()?(oi(n),!0):!1}function fE(n,t=!0){gn()?bt(n):t?n():ln(n)}function hE(n){gn()&&cr(n)}function Ul(n){var t;const s=yf(n);return(t=s==null?void 0:s.$el)!=null?t:s}const hf=df?window:void 0;function qn(...n){let t,s,o,l;if(dE(n[0])||Array.isArray(n[0])?([s,o,l]=n,t=hf):[t,s,o,l]=n,!t)return wl;Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},c=(d,y,f,h)=>(d.addEventListener(y,f,h),()=>d.removeEventListener(y,f,h)),p=Be(()=>[Ul(t),yf(l)],([d,y])=>{a(),d&&r.push(...s.flatMap(f=>o.map(h=>c(d,f,h,y))))},{immediate:!0,flush:"post"}),u=()=>{p(),a()};return ff(u),u}function mE(n,t=!1){const s=Z(),o=()=>s.value=!!n();return o(),fE(o,t),s}const Wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gp="__vueuse_ssr_handlers__";Wp[Gp]=Wp[Gp]||{};function gE(n,t,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=hf}=s,c=mE(()=>a&&"IntersectionObserver"in a);let p=wl;const u=c.value?Be(()=>({el:Ul(n),root:Ul(o)}),({el:y,root:f})=>{if(p(),!y)return;const h=new IntersectionObserver(t,{root:f,rootMargin:l,threshold:r});h.observe(y),p=()=>{h.disconnect(),p=wl}},{immediate:!0,flush:"post"}):wl,d=()=>{p(),u()};return ff(d),{isSupported:c,stop:d}}var Up;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Up||(Up={}));var AE=Object.defineProperty,zp=Object.getOwnPropertySymbols,_E=Object.prototype.hasOwnProperty,vE=Object.prototype.propertyIsEnumerable,Yp=(n,t,s)=>t in n?AE(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,BE=(n,t)=>{for(var s in t||(t={}))_E.call(t,s)&&Yp(n,s,t[s]);if(zp)for(var s of zp(t))vE.call(t,s)&&Yp(n,s,t[s]);return n};const CE={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};BE({linear:yE},CE);const mf=1/60*1e3,bE=typeof performance<"u"?()=>performance.now():()=>Date.now(),gf=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(bE()),mf);function DE(n){let t=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,c={schedule:(p,u=!1,d=!1)=>{const y=d&&l,f=y?t:s;return u&&a.add(p),f.indexOf(p)===-1&&(f.push(p),y&&l&&(o=t.length)),p},cancel:p=>{const u=s.indexOf(p);u!==-1&&s.splice(u,1),a.delete(p)},process:p=>{if(l){r=!0;return}if(l=!0,[t,s]=[s,t],s.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(p),a.has(d)&&(c.schedule(d),n())}l=!1,r&&(r=!1,c.process(p))}};return c}const wE=40;let Wa=!0,No=!1,Ga=!1;const Rs={delta:0,timestamp:0},Ko=["read","update","preRender","render","postRender"],Ar=Ko.reduce((n,t)=>(n[t]=DE(()=>No=!0),n),{}),Ua=Ko.reduce((n,t)=>{const s=Ar[t];return n[t]=(o,l=!1,r=!1)=>(No||EE(),s.schedule(o,l,r)),n},{}),xE=Ko.reduce((n,t)=>(n[t]=Ar[t].cancel,n),{});Ko.reduce((n,t)=>(n[t]=()=>Ar[t].process(Rs),n),{});const kE=n=>Ar[n].process(Rs),Af=n=>{No=!1,Rs.delta=Wa?mf:Math.max(Math.min(n-Rs.timestamp,wE),1),Rs.timestamp=n,Ga=!0,Ko.forEach(kE),Ga=!1,No&&(Wa=!1,gf(Af))},EE=()=>{No=!0,Wa=!0,Ga||gf(Af)},_f=()=>Rs;function vf(n,t){var s={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(n);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(n,o[l])&&(s[o[l]]=n[o[l]]);return s}var ji=function(){},Ho=function(){};ji=function(n,t){!n&&typeof console<"u"&&console.warn(t)},Ho=function(n,t){if(!n)throw new Error(t)};const za=(n,t,s)=>Math.min(Math.max(s,n),t),Gr=.001,TE=.01,Kp=10,FE=.05,SE=1;function $E({duration:n=800,bounce:t=.25,velocity:s=0,mass:o=1}){let l,r;ji(n<=Kp*1e3,"Spring duration must be 10 seconds or less");let a=1-t;a=za(FE,SE,a),n=za(TE,Kp,n/1e3),a<1?(l=u=>{const d=u*a,y=d*n,f=d-s,h=Ya(u,a),m=Math.exp(-y);return Gr-f/h*m},r=u=>{const y=u*a*n,f=y*s+s,h=Math.pow(a,2)*Math.pow(u,2)*n,m=Math.exp(-y),_=Ya(Math.pow(u,2),a);return(-l(u)+Gr>0?-1:1)*((f-h)*m)/_}):(l=u=>{const d=Math.exp(-u*n),y=(u-s)*n+1;return-Gr+d*y},r=u=>{const d=Math.exp(-u*n),y=(s-u)*(n*n);return d*y});const c=5/n,p=PE(l,r,c);if(n=n*1e3,isNaN(p))return{stiffness:100,damping:10,duration:n};{const u=Math.pow(p,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:n}}}const IE=12;function PE(n,t,s){let o=s;for(let l=1;l<IE;l++)o=o-n(o)/t(o);return o}function Ya(n,t){return n*Math.sqrt(1-t*t)}const OE=["duration","bounce"],ME=["stiffness","damping","mass"];function Zp(n,t){return t.some(s=>n[s]!==void 0)}function LE(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Zp(n,ME)&&Zp(n,OE)){const s=$E(n);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Ni(n){var{from:t=0,to:s=1,restSpeed:o=2,restDelta:l}=n,r=vf(n,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:c,damping:p,mass:u,velocity:d,duration:y,isResolvedFromDuration:f}=LE(r),h=Jp,m=Jp;function _(){const B=d?-(d/1e3):0,C=s-t,b=p/(2*Math.sqrt(c*u)),v=Math.sqrt(c/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-t)/100,.4)),b<1){const w=Ya(v,b);h=$=>{const S=Math.exp(-b*v*$);return s-S*((B+b*v*C)/w*Math.sin(w*$)+C*Math.cos(w*$))},m=$=>{const S=Math.exp(-b*v*$);return b*v*S*(Math.sin(w*$)*(B+b*v*C)/w+C*Math.cos(w*$))-S*(Math.cos(w*$)*(B+b*v*C)-w*C*Math.sin(w*$))}}else if(b===1)h=w=>s-Math.exp(-v*w)*(C+(B+v*C)*w);else{const w=v*Math.sqrt(b*b-1);h=$=>{const S=Math.exp(-b*v*$),N=Math.min(w*$,300);return s-S*((B+b*v*C)*Math.sinh(N)+w*C*Math.cosh(N))/w}}}return _(),{next:B=>{const C=h(B);if(f)a.done=B>=y;else{const b=m(B)*1e3,v=Math.abs(b)<=o,w=Math.abs(s-C)<=l;a.done=v&&w}return a.value=a.done?s:C,a},flipTarget:()=>{d=-d,[t,s]=[s,t],_()}}}Ni.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const Jp=n=>0,Bf=(n,t,s)=>{const o=t-n;return o===0?1:(s-n)/o},Hi=(n,t,s)=>-s*n+s*t+n,Cf=(n,t)=>s=>Math.max(Math.min(s,t),n),Bo=n=>n%1?Number(n.toFixed(5)):n,Vo=/(-)?([\d]*\.?[\d])+/g,Ka=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,RE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Zo(n){return typeof n=="string"}const Jo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Co=Object.assign(Object.assign({},Jo),{transform:Cf(0,1)}),hl=Object.assign(Object.assign({},Jo),{default:1}),Vi=n=>({test:t=>Zo(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),Jt=Vi("deg"),bo=Vi("%"),be=Vi("px"),Qp=Object.assign(Object.assign({},bo),{parse:n=>bo.parse(n)/100,transform:n=>bo.transform(n*100)}),qi=(n,t)=>s=>!!(Zo(s)&&RE.test(s)&&s.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(s,t)),bf=(n,t,s)=>o=>{if(!Zo(o))return o;const[l,r,a,c]=o.match(Vo);return{[n]:parseFloat(l),[t]:parseFloat(r),[s]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},ps={test:qi("hsl","hue"),parse:bf("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:s,alpha:o=1})=>"hsla("+Math.round(n)+", "+bo.transform(Bo(t))+", "+bo.transform(Bo(s))+", "+Bo(Co.transform(o))+")"},jE=Cf(0,255),Ur=Object.assign(Object.assign({},Jo),{transform:n=>Math.round(jE(n))}),Pt={test:qi("rgb","red"),parse:bf("red","green","blue"),transform:({red:n,green:t,blue:s,alpha:o=1})=>"rgba("+Ur.transform(n)+", "+Ur.transform(t)+", "+Ur.transform(s)+", "+Bo(Co.transform(o))+")"};function NE(n){let t="",s="",o="",l="";return n.length>5?(t=n.substr(1,2),s=n.substr(3,2),o=n.substr(5,2),l=n.substr(7,2)):(t=n.substr(1,1),s=n.substr(2,1),o=n.substr(3,1),l=n.substr(4,1),t+=t,s+=s,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Za={test:qi("#"),parse:NE,transform:Pt.transform},_n={test:n=>Pt.test(n)||Za.test(n)||ps.test(n),parse:n=>Pt.test(n)?Pt.parse(n):ps.test(n)?ps.parse(n):Za.parse(n),transform:n=>Zo(n)?n:n.hasOwnProperty("red")?Pt.transform(n):ps.transform(n)},Df="${c}",wf="${n}";function HE(n){var t,s,o,l;return isNaN(n)&&Zo(n)&&((s=(t=n.match(Vo))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((l=(o=n.match(Ka))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function xf(n){typeof n=="number"&&(n=`${n}`);const t=[];let s=0;const o=n.match(Ka);o&&(s=o.length,n=n.replace(Ka,Df),t.push(...o.map(_n.parse)));const l=n.match(Vo);return l&&(n=n.replace(Vo,wf),t.push(...l.map(Jo.parse))),{values:t,numColors:s,tokenised:n}}function kf(n){return xf(n).values}function Ef(n){const{values:t,numColors:s,tokenised:o}=xf(n),l=t.length;return r=>{let a=o;for(let c=0;c<l;c++)a=a.replace(c<s?Df:wf,c<s?_n.transform(r[c]):Bo(r[c]));return a}}const VE=n=>typeof n=="number"?0:n;function qE(n){const t=kf(n);return Ef(n)(t.map(VE))}const Qo={test:HE,parse:kf,createTransformer:Ef,getAnimatableNone:qE},WE=new Set(["brightness","contrast","saturate","opacity"]);function GE(n){let[t,s]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[o]=s.match(Vo)||[];if(!o)return n;const l=s.replace(o,"");let r=WE.has(t)?1:0;return o!==s&&(r*=100),t+"("+r+l+")"}const UE=/([a-z-]*)\(.*?\)/g,Ja=Object.assign(Object.assign({},Qo),{getAnimatableNone:n=>{const t=n.match(UE);return t?t.map(GE).join(" "):n}});function zr(n,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(t-n)*6*s:s<1/2?t:s<2/3?n+(t-n)*(2/3-s)*6:n}function Xp({hue:n,saturation:t,lightness:s,alpha:o}){n/=360,t/=100,s/=100;let l=0,r=0,a=0;if(!t)l=r=a=s;else{const c=s<.5?s*(1+t):s+t-s*t,p=2*s-c;l=zr(p,c,n+1/3),r=zr(p,c,n),a=zr(p,c,n-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const zE=(n,t,s)=>{const o=n*n,l=t*t;return Math.sqrt(Math.max(0,s*(l-o)+o))},YE=[Za,Pt,ps],eu=n=>YE.find(t=>t.test(n)),nu=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,Tf=(n,t)=>{let s=eu(n),o=eu(t);Ho(!!s,nu(n)),Ho(!!o,nu(t));let l=s.parse(n),r=o.parse(t);s===ps&&(l=Xp(l),s=Pt),o===ps&&(r=Xp(r),o=Pt);const a=Object.assign({},l);return c=>{for(const p in a)p!=="alpha"&&(a[p]=zE(l[p],r[p],c));return a.alpha=Hi(l.alpha,r.alpha,c),s.transform(a)}},KE=n=>typeof n=="number",ZE=(n,t)=>s=>t(n(s)),Ff=(...n)=>n.reduce(ZE);function Sf(n,t){return KE(n)?s=>Hi(n,t,s):_n.test(n)?Tf(n,t):If(n,t)}const $f=(n,t)=>{const s=[...n],o=s.length,l=n.map((r,a)=>Sf(r,t[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},JE=(n,t)=>{const s=Object.assign(Object.assign({},n),t),o={};for(const l in s)n[l]!==void 0&&t[l]!==void 0&&(o[l]=Sf(n[l],t[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function tu(n){const t=Qo.parse(n),s=t.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?r++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:r}}const If=(n,t)=>{const s=Qo.createTransformer(t),o=tu(n),l=tu(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Ff($f(o.parsed,l.parsed),s):(ji(!0,`Complex values '${n}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?t:n}`)},QE=(n,t)=>s=>Hi(n,t,s);function XE(n){if(typeof n=="number")return QE;if(typeof n=="string")return _n.test(n)?Tf:If;if(Array.isArray(n))return $f;if(typeof n=="object")return JE}function eT(n,t,s){const o=[],l=s||XE(n[0]),r=n.length-1;for(let a=0;a<r;a++){let c=l(n[a],n[a+1]);if(t){const p=Array.isArray(t)?t[a]:t;c=Ff(p,c)}o.push(c)}return o}function nT([n,t],[s]){return o=>s(Bf(n,t,o))}function tT(n,t){const s=n.length,o=s-1;return l=>{let r=0,a=!1;if(l<=n[0]?a=!0:l>=n[o]&&(r=o-1,a=!0),!a){let p=1;for(;p<s&&!(n[p]>l||p===o);p++);r=p-1}const c=Bf(n[r],n[r+1],l);return t[r](c)}}function Pf(n,t,{clamp:s=!0,ease:o,mixer:l}={}){const r=n.length;Ho(r===t.length,"Both input and output ranges must be the same length"),Ho(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[r-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const a=eT(t,o,l),c=r===2?nT(n,a):tT(n,a);return s?p=>c(za(n[0],n[r-1],p)):c}const _r=n=>t=>1-n(1-t),Wi=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,sT=n=>t=>Math.pow(t,n),Of=n=>t=>t*t*((n+1)*t-n),oT=n=>{const t=Of(n);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},Mf=1.525,lT=4/11,rT=8/11,aT=9/10,Lf=n=>n,Gi=sT(2),iT=_r(Gi),Rf=Wi(Gi),jf=n=>1-Math.sin(Math.acos(n)),Nf=_r(jf),cT=Wi(Nf),Ui=Of(Mf),pT=_r(Ui),uT=Wi(Ui),dT=oT(Mf),yT=4356/361,fT=35442/1805,hT=16061/1805,zl=n=>{if(n===1||n===0)return n;const t=n*n;return n<lT?7.5625*t:n<rT?9.075*t-9.9*n+3.4:n<aT?yT*t-fT*n+hT:10.8*n*n-20.52*n+10.72},mT=_r(zl),gT=n=>n<.5?.5*(1-zl(1-n*2)):.5*zl(n*2-1)+.5;function AT(n,t){return n.map(()=>t||Rf).splice(0,n.length-1)}function _T(n){const t=n.length;return n.map((s,o)=>o!==0?o/(t-1):0)}function vT(n,t){return n.map(s=>s*t)}function xl({from:n=0,to:t=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:n},a=Array.isArray(t)?t:[n,t],c=vT(o&&o.length===a.length?o:_T(a),l);function p(){return Pf(c,a,{ease:Array.isArray(s)?s:AT(a,s)})}let u=p();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),u=p()}}}function BT({velocity:n=0,from:t=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:t};let c=s*n;const p=t+c,u=r===void 0?p:r(p);return u!==p&&(c=u-t),{next:d=>{const y=-c*Math.exp(-d/o);return a.done=!(y>l||y<-l),a.value=a.done?u:u+y,a},flipTarget:()=>{}}}const su={keyframes:xl,spring:Ni,decay:BT};function CT(n){if(Array.isArray(n.to))return xl;if(su[n.type])return su[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?xl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Ni:xl}function Hf(n,t,s=0){return n-t-s}function bT(n,t,s=0,o=!0){return o?Hf(t+-n,t,s):t-(n-t)+s}function DT(n,t,s,o){return o?n>=t+s:n<=-s}const wT=n=>{const t=({delta:s})=>n(s);return{start:()=>Ua.update(t,!0),stop:()=>xE.update(t)}};function Vf(n){var t,s,{from:o,autoplay:l=!0,driver:r=wT,elapsed:a=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:d,onStop:y,onComplete:f,onRepeat:h,onUpdate:m}=n,_=vf(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:B}=_,C,b=0,v=_.duration,w,$=!1,S=!0,N;const I=CT(_);!((s=(t=I).needsInterpolation)===null||s===void 0)&&s.call(t,o,B)&&(N=Pf([0,100],[o,B],{clamp:!1}),o=0,B=100);const G=I(Object.assign(Object.assign({},_),{from:o,to:B}));function se(){b++,p==="reverse"?(S=b%2===0,a=bT(a,v,u,S)):(a=Hf(a,v,u),p==="mirror"&&G.flipTarget()),$=!1,h&&h()}function de(){C.stop(),f&&f()}function K(ve){if(S||(ve=-ve),a+=ve,!$){const we=G.next(Math.max(0,a));w=we.value,N&&(w=N(w)),$=S?we.done:a<=0}m==null||m(w),$&&(b===0&&(v??(v=a)),b<c?DT(a,v,u,S)&&se():de())}function De(){d==null||d(),C=r(K),C.start()}return l&&De(),{stop:()=>{y==null||y(),C.stop()}}}function qf(n,t){return t?n*(1e3/t):0}function xT({from:n=0,velocity:t=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:d,onUpdate:y,onComplete:f,onStop:h}){let m;function _(v){return s!==void 0&&v<s||o!==void 0&&v>o}function B(v){return s===void 0?o:o===void 0||Math.abs(s-v)<Math.abs(o-v)?s:o}function C(v){m==null||m.stop(),m=Vf(Object.assign(Object.assign({},v),{driver:d,onUpdate:w=>{var $;y==null||y(w),($=v.onUpdate)===null||$===void 0||$.call(v,w)},onComplete:f,onStop:h}))}function b(v){C(Object.assign({type:"spring",stiffness:a,damping:c,restDelta:p},v))}if(_(n))b({from:n,velocity:t,to:B(n)});else{let v=l*t+n;typeof u<"u"&&(v=u(v));const w=B(v),$=w===s?-1:1;let S,N;const I=G=>{S=N,N=G,t=qf(G-S,_f().delta),($===1&&G>w||$===-1&&G<w)&&b({from:G,to:w,velocity:t})};C({type:"decay",from:n,velocity:t,timeConstant:r,power:l,restDelta:p,modifyTarget:u,onUpdate:_(v)?I:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Wf=(n,t)=>1-3*t+3*n,Gf=(n,t)=>3*t-6*n,Uf=n=>3*n,Yl=(n,t,s)=>((Wf(t,s)*n+Gf(t,s))*n+Uf(t))*n,zf=(n,t,s)=>3*Wf(t,s)*n*n+2*Gf(t,s)*n+Uf(t),kT=1e-7,ET=10;function TT(n,t,s,o,l){let r,a,c=0;do a=t+(s-t)/2,r=Yl(a,o,l)-n,r>0?s=a:t=a;while(Math.abs(r)>kT&&++c<ET);return a}const FT=8,ST=.001;function $T(n,t,s,o){for(let l=0;l<FT;++l){const r=zf(t,s,o);if(r===0)return t;const a=Yl(t,s,o)-n;t-=a/r}return t}const kl=11,ml=1/(kl-1);function IT(n,t,s,o){if(n===t&&s===o)return Lf;const l=new Float32Array(kl);for(let a=0;a<kl;++a)l[a]=Yl(a*ml,n,s);function r(a){let c=0,p=1;const u=kl-1;for(;p!==u&&l[p]<=a;++p)c+=ml;--p;const d=(a-l[p])/(l[p+1]-l[p]),y=c+d*ml,f=zf(y,n,s);return f>=ST?$T(a,y,n,s):f===0?y:TT(a,c,c+ml,n,s)}return a=>a===0||a===1?a:Yl(r(a),t,o)}const Yr={};class PT{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(t,s,o)}clear(){this.subscriptions.clear()}}const ou=n=>!isNaN(parseFloat(n));class OT{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new PT,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=_f();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Ua.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ua.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=ou(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=ou(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?qf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:o}=t(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function MT(n){return new OT(n)}const{isArray:LT}=Array;function RT(){const n=Z({}),t=o=>{const l=r=>{n.value[r]&&(n.value[r].stop(),n.value[r].destroy(),delete n.value[r])};o?LT(o)?o.forEach(l):l(o):Object.keys(n.value).forEach(l)},s=(o,l,r)=>{if(n.value[o])return n.value[o];const a=MT(l);return a.onChange(c=>r[o]=c),n.value[o]=a,a};return hE(t),{motionValues:n,get:s,stop:t}}const jT=n=>Array.isArray(n),Qt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Kr=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),NT=n=>({type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}),Zr=()=>({type:"keyframes",ease:"linear",duration:300}),HT=n=>({type:"keyframes",duration:800,values:n}),lu={default:NT,x:Qt,y:Qt,z:Qt,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scaleX:Kr,scaleY:Kr,scale:Kr,backgroundColor:Zr,color:Zr,opacity:Zr},Yf=(n,t)=>{let s;return jT(t)?s=HT:s=lu[n]||lu.default,{to:t,...s(t)}},ru={...Jo,transform:Math.round},Kf={color:_n,backgroundColor:_n,outlineColor:_n,fill:_n,stroke:_n,borderColor:_n,borderTopColor:_n,borderRightColor:_n,borderBottomColor:_n,borderLeftColor:_n,borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,size:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,rotate:Jt,rotateX:Jt,rotateY:Jt,rotateZ:Jt,scale:hl,scaleX:hl,scaleY:hl,scaleZ:hl,skew:Jt,skewX:Jt,skewY:Jt,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:Co,originX:Qp,originY:Qp,originZ:be,zIndex:ru,filter:Ja,WebkitFilter:Ja,fillOpacity:Co,strokeOpacity:Co,numOctaves:ru},zi=n=>Kf[n],Zf=(n,t)=>t&&typeof n=="number"&&t.transform?t.transform(n):n;function VT(n,t){let s=zi(n);return s!==Ja&&(s=Qo),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const qT={linear:Lf,easeIn:Gi,easeInOut:Rf,easeOut:iT,circIn:jf,circInOut:cT,circOut:Nf,backIn:Ui,backInOut:uT,backOut:pT,anticipate:dT,bounceIn:mT,bounceInOut:gT,bounceOut:zl},au=n=>{if(Array.isArray(n)){const[t,s,o,l]=n;return IT(t,s,o,l)}else if(typeof n=="string")return qT[n];return n},WT=n=>Array.isArray(n)&&typeof n[0]!="number",iu=(n,t)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Qo.test(t)&&!t.startsWith("url("));function GT(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function UT({ease:n,times:t,delay:s,...o}){const l={...o};return t&&(l.offset=t),n&&(l.ease=WT(n)?n.map(au):au(n)),s&&(l.elapsed=-s),l}function zT(n,t,s){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),GT(t),YT(n)||(n={...n,...Yf(s,t.to)}),{...t,...UT(n)}}function YT({delay:n,repeat:t,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function KT(n,t){return n[t]||n.default||n}function ZT(n,t,s,o,l){const r=KT(o,n);let a=r.from===null||r.from===void 0?t.get():r.from;const c=iu(n,s);a==="none"&&c&&typeof s=="string"&&(a=VT(n,s));const p=iu(n,a);function u(y){const f={from:a,to:s,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return r.type==="inertia"||r.type==="decay"?xT({...f,...r}):Vf({...zT(r,f,n),onUpdate:h=>{f.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),y&&y()}})}function d(y){return t.set(s),o.onComplete&&o.onComplete(),l&&l(),y&&y(),{stop:()=>{}}}return!p||!c||r.type===!1?d:u}function JT(){const{motionValues:n,stop:t,get:s}=RT();return{motionValues:n,stop:t,push:(l,r,a,c={},p)=>{const u=a[l],d=s(l,u,a);if(c&&c.immediate){d.set(r);return}const y=ZT(l,d,r,c,p);d.start(y)}}}function QT(n,t={},{motionValues:s,push:o,stop:l}=JT()){const r=x(t),a=Z(!1);Be(s,y=>{a.value=Object.values(y).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=y=>{if(!r||!r[y])throw new Error(`The variant ${y} does not exist.`);return r[y]},p=y=>(typeof y=="string"&&(y=c(y)),Promise.all(Object.entries(y).map(([f,h])=>{if(f!=="transition")return new Promise(m=>o(f,h,n,y.transition||Yf(f,y[f]),m))}).filter(Boolean)));return{isAnimating:a,apply:p,set:y=>{const f=qa(y)?y:c(y);Object.entries(f).forEach(([h,m])=>{h!=="transition"&&o(h,m,n,{immediate:!0})})},leave:async y=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){y();return}await p(f),y()},stop:l}}const Yi=typeof window<"u",XT=()=>Yi&&window.onpointerdown===null,eF=()=>Yi&&window.ontouchstart===null,nF=()=>Yi&&window.onmousedown===null;function tF({target:n,state:t,variants:s,apply:o}){const l=x(s),r=Z(!1),a=Z(!1),c=Z(!1),p=P(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=P(()=>{const d={};Object.assign(d,t.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),c.value&&l.focused&&Object.assign(d,l.focused);for(const y in d)p.value.includes(y)||delete d[y];return d});l.hovered&&(qn(n,"mouseenter",()=>r.value=!0),qn(n,"mouseleave",()=>{r.value=!1,a.value=!1}),qn(n,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(nF()&&(qn(n,"mousedown",()=>a.value=!0),qn(n,"mouseup",()=>a.value=!1)),XT()&&(qn(n,"pointerdown",()=>a.value=!0),qn(n,"pointerup",()=>a.value=!1)),eF()&&(qn(n,"touchstart",()=>a.value=!0),qn(n,"touchend",()=>a.value=!1))),l.focused&&(qn(n,"focus",()=>c.value=!0),qn(n,"blur",()=>c.value=!1)),Be(u,o)}function sF({set:n,target:t,apply:s,variants:o,variant:l}){const r=x(o);Be(()=>t,()=>{r&&(r.initial&&n("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function oF({state:n,apply:t}){Be(n,s=>{s&&t(s)},{immediate:!0})}function lF({target:n,variants:t,variant:s}){const o=x(t);o&&(o.visible||o.visibleOnce)&&gE(n,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function rF(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&sF(n),t.syncVariants&&oF(n),t.visibilityHooks&&lF(n),t.eventListeners&&tF(n)}function Jf(n={}){const t=Ue({...n}),s=Z({});return Be(t,()=>{const o={};for(const[l,r]of Object.entries(t)){const a=zi(l),c=Zf(r,a);o[l]=c}s.value=o},{immediate:!0,deep:!0}),{state:t,style:s}}function Ki(n,t){Be(()=>Ul(n),s=>{s&&t(s)},{immediate:!0})}const aF={x:"translateX",y:"translateY",z:"translateZ"};function Qf(n={},t=!0){const s=Ue({...n}),o=Z("");return Be(s,l=>{let r="",a=!1;if(t&&(l.x||l.y||l.z)){const c=[l.x||0,l.y||0,l.z||0].map(be.transform).join(",");r+=`translate3d(${c}) `,a=!0}for(const[c,p]of Object.entries(l)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const u=zi(c),d=Zf(p,u);r+=`${aF[c]||c}(${d}) `}t&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const iF=["","X","Y","Z"],cF=["perspective","translate","scale","rotate","skew"],Xf=["transformPerspective","x","y","z"];cF.forEach(n=>{iF.forEach(t=>{const s=n+t;Xf.push(s)})});const pF=new Set(Xf);function Zi(n){return pF.has(n)}const uF=new Set(["originX","originY","originZ"]);function eh(n){return uF.has(n)}function dF(n){const t={},s={};return Object.entries(n).forEach(([o,l])=>{Zi(o)||eh(o)?t[o]=l:s[o]=l}),{transform:t,style:s}}function nh(n){const{transform:t,style:s}=dF(n),{transform:o}=Qf(t),{style:l}=Jf(s);return o.value&&(l.value.transform=o.value),l.value}function yF(n,t){let s,o;const{state:l,style:r}=Jf();return Ki(n,a=>{o=a;for(const c of Object.keys(Kf))a.style[c]===null||a.style[c]===""||Zi(c)||eh(c)||(l[c]=a.style[c]);s&&Object.entries(s).forEach(([c,p])=>a.style[c]=p),t&&t(l)}),Be(r,a=>{if(!o){s=a;return}for(const c in a)o.style[c]=a[c]},{immediate:!0}),{style:l}}function fF(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),p=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=p.length===1?p[0]:p;return{...o,[r]:u}},{})}function hF(n,t){Object.entries(fF(t)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>n[r]=0);return}o.forEach((r,a)=>n[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){n.x=o;return}if(s==="translateY"){n.y=o;return}if(s==="translateZ"){n.z=o;return}n[s]=o})}function mF(n,t){let s,o;const{state:l,transform:r}=Qf();return Ki(n,a=>{o=a,a.style.transform&&hF(l,a.style.transform),s&&(a.style.transform=s),t&&t(l)}),Be(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function gF(n,t){const s=Ue({}),o=a=>Object.entries(a).forEach(([c,p])=>s[c]=p),{style:l}=yF(n,o),{transform:r}=mF(n,o);return Be(s,a=>{Object.entries(a).forEach(([c,p])=>{const u=Zi(c)?r:l;u[c]&&u[c]===p||(u[c]=p)})},{immediate:!0,deep:!0}),Ki(n,()=>t&&o(t)),{motionProperties:s,style:l,transform:r}}function AF(n={}){const t=x(n),s=Z();return{state:P(()=>{if(s.value)return t[s.value]}),variant:s}}function th(n,t={},s){const{motionProperties:o}=gF(n),{variant:l,state:r}=AF(t),a=QT(o,t),c={target:n,variant:l,variants:t,state:r,motionProperties:o,...a};return rF(c,s),c}const _F=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],vF=(n,t)=>{const s=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};s&&(s.variants&&qa(s.variants)&&(t.value={...t.value,...s.variants}),_F.forEach(o=>{if(o==="delay"){if(s&&s[o]&&uE(s[o])){const l=s[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&qa(s[o])&&(t.value[o]=s[o])}))},Jr=n=>({created:(s,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Yr[r]&&Yr[r].stop();const a=Z(n||{});typeof o.value=="object"&&(a.value=o.value),vF(l,a);const c=th(s,a);s.motionInstance=c,r&&(Yr[r]=c)},getSSRProps(s,o){let{initial:l}=s.value||o&&(o==null?void 0:o.props)||{};l=x(l);const r=cE((n==null?void 0:n.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:nh(r)}}}),BF={initial:{opacity:0},enter:{opacity:1}},CF={initial:{opacity:0},visible:{opacity:1}},bF={initial:{opacity:0},visibleOnce:{opacity:1}},DF={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},wF={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},xF={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},kF={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},EF={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},TF={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},FF={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},SF={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$F={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},IF={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},PF={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},OF={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},MF={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},LF={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},RF={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},jF={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},NF={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},HF={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},VF={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},qF={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},WF={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},GF={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},UF={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},zF={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},YF={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},KF={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},ZF={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Qa={__proto__:null,fade:BF,fadeVisible:CF,fadeVisibleOnce:bF,pop:DF,popVisible:wF,popVisibleOnce:xF,rollBottom:MF,rollLeft:kF,rollRight:FF,rollTop:IF,rollVisibleBottom:LF,rollVisibleLeft:EF,rollVisibleOnceBottom:RF,rollVisibleOnceLeft:TF,rollVisibleOnceRight:$F,rollVisibleOnceTop:OF,rollVisibleRight:SF,rollVisibleTop:PF,slideBottom:YF,slideLeft:jF,slideRight:VF,slideTop:GF,slideVisibleBottom:KF,slideVisibleLeft:NF,slideVisibleOnceBottom:ZF,slideVisibleOnceLeft:HF,slideVisibleOnceRight:WF,slideVisibleOnceTop:zF,slideVisibleRight:qF,slideVisibleTop:UF},JF=Se({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const t=R8(),s=Ue({});if(!n.is&&!t.default)return()=>nn("div",{});const o=P(()=>{let p;return n.preset&&(p=Qa[n.preset]),p}),l=P(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),r=P(()=>{const p={...l.value,...o.value||{},...n.variants||{}};return n.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(n.delay)),p}),a=P(()=>{if(!n.is)return;let p=n.is;return typeof a.value=="string"&&!bu(p)&&(p=Ns(p)),p});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var y,f,h;(y=u.variants)!=null&&y.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};ir(()=>Object.entries(s).forEach(([u,d])=>p(d)))}return{slots:t,component:a,motionConfig:r,instances:s}},render({slots:n,motionConfig:t,instances:s,component:o}){var c;const l=nh(t.initial||{}),r=(p,u)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:d})=>{const y=th(d,t);s[u]=y},p);if(o){const p=nn(o,void 0,n);return r(p,0),p}return(((c=n.default)==null?void 0:c.call(n))||[]).map((p,u)=>r(p,u))}});function QF(n){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const XF={install(n,t){if(n.directive("motion",Jr()),n.component("Motion",JF),!t||t&&!t.excludePresets)for(const s in Qa){const o=Qa[s];n.directive(`motion-${QF(s)}`,Jr(o))}if(t&&t.directives)for(const s in t.directives){const o=t.directives[s];o.initial,n.directive(`motion-${s}`,Jr(o))}}};var cu;const Do=typeof window<"u",eS=Object.prototype.toString,nS=n=>eS.call(n)==="[object Object]";Do&&((cu=window==null?void 0:window.navigator)!=null&&cu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function tS(n){return Jl()?(oi(n),!0):!1}function sS(n){var t;const s=x(n);return(t=s==null?void 0:s.$el)!=null?t:s}const oS=Do?window:void 0,pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},uu="__vueuse_ssr_handlers__";pu[uu]=pu[uu]||{};function lS(n,t={}){const{immediate:s=!0,window:o=oS}=t,l=Z(!1);let r=null;function a(){!l.value||!o||(n(),r=o.requestAnimationFrame(a))}function c(){!l.value&&o&&(l.value=!0,a())}function p(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&c(),tS(p),{isActive:l,pause:p,resume:c}}var du;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(du||(du={}));const vr="vue-starport-injection",sh="vue-starport-options",rS={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},oh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var aS=Object.defineProperty,Kl=Object.getOwnPropertySymbols,lh=Object.prototype.hasOwnProperty,rh=Object.prototype.propertyIsEnumerable,yu=(n,t,s)=>t in n?aS(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,iS=(n,t)=>{for(var s in t||(t={}))lh.call(t,s)&&yu(n,s,t[s]);if(Kl)for(var s of Kl(t))rh.call(t,s)&&yu(n,s,t[s]);return n},fu=(n,t)=>{var s={};for(var o in n)lh.call(n,o)&&t.indexOf(o)<0&&(s[o]=n[o]);if(n!=null&&Kl)for(var o of Kl(n))t.indexOf(o)<0&&rh.call(n,o)&&(s[o]=n[o]);return s};const cS=Se({name:"StarportProxy",props:iS({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},oh),setup(n,t){const s=M(vr),o=P(()=>s.getInstance(n.port,n.component)),l=Z(),r=o.value.generateId(),a=Z(!1);return o.value.isVisible||(o.value.land(),a.value=!0),bt(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await ln(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const c=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),zo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await ln(),await ln(),!o.value.el&&s.dispose(o.value.port))}),Be(()=>n,async()=>{o.value.props&&await ln();const c=n,{props:p}=c,u=fu(c,["props"]);o.value.props=p||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:p,mountedProps:u}=c,d=fu(c,["initialProps","mountedProps"]),y=ne(d,(a.value?u:p)||{});return nn("div",ne(y,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?nn(t.slots.default):void 0)}}});var pS=Object.defineProperty,uS=Object.defineProperties,dS=Object.getOwnPropertyDescriptors,hu=Object.getOwnPropertySymbols,yS=Object.prototype.hasOwnProperty,fS=Object.prototype.propertyIsEnumerable,mu=(n,t,s)=>t in n?pS(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,hS=(n,t)=>{for(var s in t||(t={}))yS.call(t,s)&&mu(n,s,t[s]);if(hu)for(var s of hu(t))fS.call(t,s)&&mu(n,s,t[s]);return n},mS=(n,t)=>uS(n,dS(t));const gS=Se({name:"Starport",inheritAttrs:!0,props:oh,setup(n,t){const s=Z(!1);return bt(()=>{if(s.value=!0,!M(vr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,c;const o=(c=(a=t.slots).default)==null?void 0:c.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!nS(r)||it(r))&&(r={render(){return o}}),nn(cS,mS(hS({},n),{key:n.port,component:tr(r),props:l.props}))}}});function AS(n){const t=Ue({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=Do?document.documentElement||document.body:void 0;function o(){if(!Do)return;const c=sS(n);if(!c)return;const{height:p,width:u,left:d,top:y}=c.getBoundingClientRect(),f=window.getComputedStyle(c),h=f.margin,m=f.padding;Object.assign(t,{height:p,width:u,left:d,top:s.scrollTop+y,margin:h,padding:m})}const l=lS(o,{immediate:!1});function r(){Do&&(o(),l.resume())}function a(){l.pause()}return t}let _S=(n,t=21)=>(s=t)=>{let o="",l=s;for(;l--;)o+=n[Math.random()*n.length|0];return o};const gu=_S("abcdefghijklmnopqrstuvwxyz",5);function Au(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function vS(n){var t;return n.name||((t=n.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var BS=Object.defineProperty,_u=Object.getOwnPropertySymbols,CS=Object.prototype.hasOwnProperty,bS=Object.prototype.propertyIsEnumerable,vu=(n,t,s)=>t in n?BS(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,Qr=(n,t)=>{for(var s in t||(t={}))CS.call(t,s)&&vu(n,s,t[s]);if(_u)for(var s of _u(t))bS.call(t,s)&&vu(n,s,t[s]);return n};function DS(n,t,s={}){const o=vS(t),l=Au(o)||gu(),r=Z(),a=Z(null),c=Z(!1),p=Z(!1),u=Dh(!0),d=Z({}),y=P(()=>Qr(Qr(Qr({},rS),s),d.value)),f=Z(0);let h;u.run(()=>{h=AS(r),Be(r,async C=>{C&&(p.value=!0),await ln(),r.value||(p.value=!1)})});const m=Au(n);function _(){return`starport-${l}-${m}-${gu()}`}const B=_();return Ue({el:r,id:B,port:n,props:a,rect:h,scope:u,isLanded:c,isVisible:p,options:y,liftOffTime:f,component:t,componentName:o,componentId:l,generateId:_,setLocalOptions(C={}){d.value=JSON.parse(JSON.stringify(C))},elRef(){return r},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function wS(n){const t=Ue(new Map);function s(l,r){let a=t.get(l);return a||(a=DS(l,r,n),t.set(l,a)),a.component=r,a}function o(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:s}}var xS=Object.defineProperty,kS=Object.defineProperties,ES=Object.getOwnPropertyDescriptors,Bu=Object.getOwnPropertySymbols,TS=Object.prototype.hasOwnProperty,FS=Object.prototype.propertyIsEnumerable,Cu=(n,t,s)=>t in n?xS(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,SS=(n,t)=>{for(var s in t||(t={}))TS.call(t,s)&&Cu(n,s,t[s]);if(Bu)for(var s of Bu(t))FS.call(t,s)&&Cu(n,s,t[s]);return n},$S=(n,t)=>kS(n,ES(t));const IS=Se({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const t=M(vr);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=P(()=>t.getInstance(n.port,n.component)),o=P(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=P(()=>{const a=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-a),p=s.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!s.value.isVisible||!s.value.el?$S(SS({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return nn("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},nn(D8,{to:a?`#${o.value}`:"body",disabled:!a},nn(s.value.component,ne(r,s.value.props))))}}}),PS=Se({name:"StarportCarrier",setup(n,{slots:t}){const s=wS(M(sh,{}));return gn().appContext.app.provide(vr,s),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(s.portMap.entries()).map(([r,{component:a}])=>nn(IS,{key:r,port:r,component:a}))]}}});function OS(n={}){return{install(t){t.provide(sh,n),t.component("Starport",gS),t.component("StarportCarrier",PS)}}}function MS(n){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),n.app.use(XF),n.app.use(OS({keepAlive:!0}))}function wn(n,t,s){var o;return((o=n.instance)==null?void 0:o.$).provides[t]??s}function LS(){return{install(n){n.directive("click",{name:"v-click",mounted(t,s){var d,y,f,h,m,_;if(vo.value||(d=wn(s,mo))!=null&&d.value)return;const o=wn(s,os),l=wn(s,ho),r=wn(s,_a),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,p=((y=o==null?void 0:o.value)==null?void 0:y.length)||0,u=c?v5:Ir;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),s.value==null&&(s.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(s.value)),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[t]);else if(!((_=r==null?void 0:r.value.get(s.value))!=null&&_.includes(t))){const B=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[t].concat(B))}t==null||t.classList.toggle(ns,!0),l&&Be(l,()=>{const B=(l==null?void 0:l.value)??0,C=s.value!=null?B>=s.value:B>p;t.classList.contains(Pr)||t.classList.toggle(u,!C),a!==!1&&a!==void 0&&t.classList.toggle(u,C),t.classList.toggle(Qs,!1);const b=r==null?void 0:r.value.get(B);b==null||b.forEach((v,w)=>{v.classList.toggle(cl,!1),w===b.length-1?v.classList.toggle(Qs,!0):v.classList.toggle(cl,!0)}),t.classList.contains(Qs)||t.classList.toggle(cl,C)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(ns,!1);const o=wn(s,os);o!=null&&o.value&&va(o.value,t)}}),n.directive("after",{name:"v-after",mounted(t,s){var c,p,u;if(vo.value||(c=wn(s,mo))!=null&&c.value)return;const o=wn(s,os),l=wn(s,ho),r=wn(s,_a),a=o==null?void 0:o.value.length;s.value==null&&(s.value=o==null?void 0:o.value.length),typeof s.value=="string"&&(s.value.startsWith("+")||s.value.startsWith("-"))&&(s.value=(((p=o==null?void 0:o.value)==null?void 0:p.length)||0)+Number(s.value)),r!=null&&r.value.has(s.value)?(u=r==null?void 0:r.value.get(s.value))==null||u.push(t):r==null||r.value.set(s.value,[t]),t==null||t.classList.toggle(ns,!0),l&&Be(l,()=>{const d=(l.value??0)>=(s.value??a??0);t.classList.contains(Pr)||t.classList.toggle(Ir,!d),t.classList.toggle(Qs,!1),t.classList.contains(Qs)||t.classList.toggle(cl,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(ns,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(t,s){var a,c,p;if(vo.value||(a=wn(s,mo))!=null&&a.value)return;const o=wn(s,os),l=wn(s,ho),r=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(t))&&o.value.push(t),t==null||t.classList.toggle(ns,!0),l&&Be(l,()=>{const u=(l==null?void 0:l.value)??0,d=s.value!=null?u>=s.value:u>r;t.classList.toggle(Ir,d),t.classList.toggle(Pr,d)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(ns,!1);const o=wn(s,os);o!=null&&o.value&&va(o.value,t)}})}}}function RS(n,t){const s=lf(n),o=rf(t,s.currentRoute,s.currentPage);return{nav:{...s,...o},configs:Ie,themeConfigs:P(()=>Ie.themeConfig)}}function jS(){return{install(n){const t=RS(jn,Ln);n.provide(V,Ue(t))}}}const Us=bg(aE);Us.use(Cn);Us.use(g5());Us.use(LS());Us.use(jS());MS({app:Us,router:Cn});Us.mount("#app");export{PC as $,QB as A,Z as B,GS as C,fn as D,Ge as E,Pe as F,_v as G,eE as H,Ln as I,Gl as J,Kk as K,qr as L,bt as M,Ue as N,qS as O,US as P,Be as Q,E as R,Ry as S,Oe as T,yn as U,$v as V,NS as W,HS as X,Oo as Y,Nr as Z,q as _,V as a,Si as a0,$i as a1,Ke as a2,TC as a3,I1 as a4,VS as a5,Sn as a6,lo as a7,cs as a8,st as a9,Sa as aa,rv as ab,av as ac,iv as ad,pv as ae,Ai as af,Hd as ag,zS as ah,mn as ai,fl as aj,fB as ak,Qd as al,uv as am,zo as an,Jd as b,Ie as c,Se as d,am as e,k as f,e as g,x as h,M as i,Je as j,Gk as k,i as l,F as m,tn as n,A as o,Ce as p,wi as q,bs as r,Jn as s,lt as t,WS as u,P as v,Or as w,R as x,Fy as y,sC as z};
