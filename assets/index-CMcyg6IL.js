(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function bv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Tf={exports:{}},or={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function eb(){if(nm)return or;nm=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:c}}return or.Fragment=t,or.jsx=i,or.jsxs=i,or}var im;function tb(){return im||(im=1,Tf.exports=eb()),Tf.exports}var $=tb(),Cf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function nb(){if(sm)return se;sm=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=E&&b[E]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,q={};function B(b,L,P){this.props=b,this.context=L,this.refs=q,this.updater=P||k}B.prototype.isReactComponent={},B.prototype.setState=function(b,L){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,L,"setState")},B.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ee(){}ee.prototype=B.prototype;function pe(b,L,P){this.props=b,this.context=L,this.refs=q,this.updater=P||k}var re=pe.prototype=new ee;re.constructor=pe,x(re,B.prototype),re.isPureReactComponent=!0;var te=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},ge=Object.prototype.hasOwnProperty;function _e(b,L,P,H,F,ye){return P=ye.ref,{$$typeof:s,type:b,key:L,ref:P!==void 0?P:null,props:ye}}function je(b,L){return _e(b.type,L,void 0,void 0,void 0,b.props)}function be(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function X(b){var L={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(P){return L[P]})}var de=/\/+/g;function ie(b,L){return typeof b=="object"&&b!==null&&b.key!=null?X(""+b.key):L.toString(36)}function we(){}function Ae(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(we,we):(b.status="pending",b.then(function(L){b.status==="pending"&&(b.status="fulfilled",b.value=L)},function(L){b.status==="pending"&&(b.status="rejected",b.reason=L)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Be(b,L,P,H,F){var ye=typeof b;(ye==="undefined"||ye==="boolean")&&(b=null);var ne=!1;if(b===null)ne=!0;else switch(ye){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(b.$$typeof){case s:case t:ne=!0;break;case v:return ne=b._init,Be(ne(b._payload),L,P,H,F)}}if(ne)return F=F(b),ne=H===""?"."+ie(b,0):H,te(F)?(P="",ne!=null&&(P=ne.replace(de,"$&/")+"/"),Be(F,L,P,"",function(Hn){return Hn})):F!=null&&(be(F)&&(F=je(F,P+(F.key==null||b&&b.key===F.key?"":(""+F.key).replace(de,"$&/")+"/")+ne)),L.push(F)),1;ne=0;var Rt=H===""?".":H+":";if(te(b))for(var He=0;He<b.length;He++)H=b[He],ye=Rt+ie(H,He),ne+=Be(H,L,P,ye,F);else if(He=S(b),typeof He=="function")for(b=He.call(b),He=0;!(H=b.next()).done;)H=H.value,ye=Rt+ie(H,He++),ne+=Be(H,L,P,ye,F);else if(ye==="object"){if(typeof b.then=="function")return Be(Ae(b),L,P,H,F);throw L=String(b),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ne}function O(b,L,P){if(b==null)return b;var H=[],F=0;return Be(b,H,"","",function(ye){return L.call(P,ye,F++)}),H}function z(b){if(b._status===-1){var L=b._result;L=L(),L.then(function(P){(b._status===0||b._status===-1)&&(b._status=1,b._result=P)},function(P){(b._status===0||b._status===-1)&&(b._status=2,b._result=P)}),b._status===-1&&(b._status=0,b._result=L)}if(b._status===1)return b._result.default;throw b._result}var Y=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function Te(){}return se.Children={map:O,forEach:function(b,L,P){O(b,function(){L.apply(this,arguments)},P)},count:function(b){var L=0;return O(b,function(){L++}),L},toArray:function(b){return O(b,function(L){return L})||[]},only:function(b){if(!be(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},se.Component=B,se.Fragment=i,se.Profiler=o,se.PureComponent=pe,se.StrictMode=r,se.Suspense=_,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,se.__COMPILER_RUNTIME={__proto__:null,c:function(b){return G.H.useMemoCache(b)}},se.cache=function(b){return function(){return b.apply(null,arguments)}},se.cloneElement=function(b,L,P){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var H=x({},b.props),F=b.key,ye=void 0;if(L!=null)for(ne in L.ref!==void 0&&(ye=void 0),L.key!==void 0&&(F=""+L.key),L)!ge.call(L,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&L.ref===void 0||(H[ne]=L[ne]);var ne=arguments.length-2;if(ne===1)H.children=P;else if(1<ne){for(var Rt=Array(ne),He=0;He<ne;He++)Rt[He]=arguments[He+2];H.children=Rt}return _e(b.type,F,void 0,void 0,ye,H)},se.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:c,_context:b},b},se.createElement=function(b,L,P){var H,F={},ye=null;if(L!=null)for(H in L.key!==void 0&&(ye=""+L.key),L)ge.call(L,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(F[H]=L[H]);var ne=arguments.length-2;if(ne===1)F.children=P;else if(1<ne){for(var Rt=Array(ne),He=0;He<ne;He++)Rt[He]=arguments[He+2];F.children=Rt}if(b&&b.defaultProps)for(H in ne=b.defaultProps,ne)F[H]===void 0&&(F[H]=ne[H]);return _e(b,ye,void 0,void 0,null,F)},se.createRef=function(){return{current:null}},se.forwardRef=function(b){return{$$typeof:d,render:b}},se.isValidElement=be,se.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:z}},se.memo=function(b,L){return{$$typeof:g,type:b,compare:L===void 0?null:L}},se.startTransition=function(b){var L=G.T,P={};G.T=P;try{var H=b(),F=G.S;F!==null&&F(P,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Te,Y)}catch(ye){Y(ye)}finally{G.T=L}},se.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},se.use=function(b){return G.H.use(b)},se.useActionState=function(b,L,P){return G.H.useActionState(b,L,P)},se.useCallback=function(b,L){return G.H.useCallback(b,L)},se.useContext=function(b){return G.H.useContext(b)},se.useDebugValue=function(){},se.useDeferredValue=function(b,L){return G.H.useDeferredValue(b,L)},se.useEffect=function(b,L,P){var H=G.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(b,L)},se.useId=function(){return G.H.useId()},se.useImperativeHandle=function(b,L,P){return G.H.useImperativeHandle(b,L,P)},se.useInsertionEffect=function(b,L){return G.H.useInsertionEffect(b,L)},se.useLayoutEffect=function(b,L){return G.H.useLayoutEffect(b,L)},se.useMemo=function(b,L){return G.H.useMemo(b,L)},se.useOptimistic=function(b,L){return G.H.useOptimistic(b,L)},se.useReducer=function(b,L,P){return G.H.useReducer(b,L,P)},se.useRef=function(b){return G.H.useRef(b)},se.useState=function(b){return G.H.useState(b)},se.useSyncExternalStore=function(b,L,P){return G.H.useSyncExternalStore(b,L,P)},se.useTransition=function(){return G.H.useTransition()},se.version="19.1.0",se}var am;function ph(){return am||(am=1,Cf.exports=nb()),Cf.exports}var ve=ph();const ib=bv(ve);var wf={exports:{}},ur={},Af={exports:{}},Rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function sb(){return rm||(rm=1,function(s){function t(O,z){var Y=O.length;O.push(z);e:for(;0<Y;){var Te=Y-1>>>1,b=O[Te];if(0<o(b,z))O[Te]=z,O[Y]=b,Y=Te;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var z=O[0],Y=O.pop();if(Y!==z){O[0]=Y;e:for(var Te=0,b=O.length,L=b>>>1;Te<L;){var P=2*(Te+1)-1,H=O[P],F=P+1,ye=O[F];if(0>o(H,Y))F<b&&0>o(ye,H)?(O[Te]=ye,O[F]=Y,Te=F):(O[Te]=H,O[P]=Y,Te=P);else if(F<b&&0>o(ye,Y))O[Te]=ye,O[F]=Y,Te=F;else break e}}return z}function o(O,z){var Y=O.sortIndex-z.sortIndex;return Y!==0?Y:O.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var _=[],g=[],v=1,E=null,S=3,k=!1,x=!1,q=!1,B=!1,ee=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function te(O){for(var z=i(g);z!==null;){if(z.callback===null)r(g);else if(z.startTime<=O)r(g),z.sortIndex=z.expirationTime,t(_,z);else break;z=i(g)}}function G(O){if(q=!1,te(O),!x)if(i(_)!==null)x=!0,ge||(ge=!0,ie());else{var z=i(g);z!==null&&Be(G,z.startTime-O)}}var ge=!1,_e=-1,je=5,be=-1;function X(){return B?!0:!(s.unstable_now()-be<je)}function de(){if(B=!1,ge){var O=s.unstable_now();be=O;var z=!0;try{e:{x=!1,q&&(q=!1,pe(_e),_e=-1),k=!0;var Y=S;try{t:{for(te(O),E=i(_);E!==null&&!(E.expirationTime>O&&X());){var Te=E.callback;if(typeof Te=="function"){E.callback=null,S=E.priorityLevel;var b=Te(E.expirationTime<=O);if(O=s.unstable_now(),typeof b=="function"){E.callback=b,te(O),z=!0;break t}E===i(_)&&r(_),te(O)}else r(_);E=i(_)}if(E!==null)z=!0;else{var L=i(g);L!==null&&Be(G,L.startTime-O),z=!1}}break e}finally{E=null,S=Y,k=!1}z=void 0}}finally{z?ie():ge=!1}}}var ie;if(typeof re=="function")ie=function(){re(de)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Ae=we.port2;we.port1.onmessage=de,ie=function(){Ae.postMessage(null)}}else ie=function(){ee(de,0)};function Be(O,z){_e=ee(function(){O(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(O){switch(S){case 1:case 2:case 3:var z=3;break;default:z=S}var Y=S;S=z;try{return O()}finally{S=Y}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=S;S=O;try{return z()}finally{S=Y}},s.unstable_scheduleCallback=function(O,z,Y){var Te=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Te+Y:Te):Y=Te,O){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=Y+b,O={id:v++,callback:z,priorityLevel:O,startTime:Y,expirationTime:b,sortIndex:-1},Y>Te?(O.sortIndex=Y,t(g,O),i(_)===null&&O===i(g)&&(q?(pe(_e),_e=-1):q=!0,Be(G,Y-Te))):(O.sortIndex=b,t(_,O),x||k||(x=!0,ge||(ge=!0,ie()))),O},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(O){var z=S;return function(){var Y=S;S=z;try{return O.apply(this,arguments)}finally{S=Y}}}}(Rf)),Rf}var lm;function ab(){return lm||(lm=1,Af.exports=sb()),Af.exports}var Nf={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function rb(){if(om)return pt;om=1;var s=ph();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(_,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:_,containerInfo:g,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,pt.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(_,g,null,v)},pt.flushSync=function(_){var g=h.T,v=r.p;try{if(h.T=null,r.p=2,_)return _()}finally{h.T=g,r.p=v,r.d.f()}},pt.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},pt.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},pt.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:S,fetchPriority:k}):v==="script"&&r.d.X(_,{crossOrigin:E,integrity:S,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},pt.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(_)},pt.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin);r.d.L(_,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},pt.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=d(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(_)},pt.requestFormReset=function(_){r.d.r(_)},pt.unstable_batchedUpdates=function(_,g){return _(g)},pt.useFormState=function(_,g,v){return h.H.useFormState(_,g,v)},pt.useFormStatus=function(){return h.H.useHostTransitionStatus()},pt.version="19.1.0",pt}var um;function lb(){if(um)return Nf.exports;um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Nf.exports=rb(),Nf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function ob(){if(cm)return ur;cm=1;var s=ab(),t=ph(),i=lb();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===l)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=u,l=f;else{for(var p=!1,m=u.child;m;){if(m===a){p=!0,a=u,l=f;break}if(m===l){p=!0,l=u,a=f;break}m=m.sibling}if(!p){for(m=f.child;m;){if(m===a){p=!0,a=f,l=u;break}if(m===l){p=!0,l=f,a=u;break}m=m.sibling}if(!p)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),pe=Symbol.for("react.consumer"),re=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=de&&e[de]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case B:return"Profiler";case q:return"StrictMode";case G:return"Suspense";case ge:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case re:return(e.displayName||"Context")+".Provider";case pe:return(e._context.displayName||"Context")+".Consumer";case te:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _e:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case je:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var Be=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Te=[],b=-1;function L(e){return{current:e}}function P(e){0>b||(e.current=Te[b],Te[b]=null,b--)}function H(e,n){b++,Te[b]=e.current,e.current=n}var F=L(null),ye=L(null),ne=L(null),Rt=L(null);function He(e,n){switch(H(ne,n),H(ye,e),H(F,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Dg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Dg(n),e=Ig(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(F),H(F,e)}function Hn(){P(F),P(ye),P(ne)}function lu(e){e.memoizedState!==null&&H(Rt,e);var n=F.current,a=Ig(n,e.type);n!==a&&(H(ye,e),H(F,a))}function Kr(e){ye.current===e&&(P(F),P(ye)),Rt.current===e&&(P(Rt),ir._currentValue=Y)}var ou=Object.prototype.hasOwnProperty,uu=s.unstable_scheduleCallback,cu=s.unstable_cancelCallback,M0=s.unstable_shouldYield,x0=s.unstable_requestPaint,an=s.unstable_now,k0=s.unstable_getCurrentPriorityLevel,cd=s.unstable_ImmediatePriority,fd=s.unstable_UserBlockingPriority,Xr=s.unstable_NormalPriority,L0=s.unstable_LowPriority,hd=s.unstable_IdlePriority,U0=s.log,z0=s.unstable_setDisableYieldValue,fa=null,Nt=null;function Pn(e){if(typeof U0=="function"&&z0(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(fa,e)}catch{}}var Ot=Math.clz32?Math.clz32:B0,H0=Math.log,P0=Math.LN2;function B0(e){return e>>>=0,e===0?32:31-(H0(e)/P0|0)|0}var Wr=256,Zr=4194304;function Ri(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jr(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~f,l!==0?u=Ri(l):(p&=m,p!==0?u=Ri(p):a||(a=m&~e,a!==0&&(u=Ri(a))))):(m=l&~f,m!==0?u=Ri(m):p!==0?u=Ri(p):a||(a=l&~e,a!==0&&(u=Ri(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ha(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function q0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dd(){var e=Wr;return Wr<<=1,(Wr&4194048)===0&&(Wr=256),e}function pd(){var e=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),e}function fu(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function da(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function j0(e,n,a,l,u,f){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,y=e.expirationTimes,A=e.hiddenUpdates;for(a=p&~a;0<a;){var D=31-Ot(a),M=1<<D;m[D]=0,y[D]=-1;var R=A[D];if(R!==null)for(A[D]=null,D=0;D<R.length;D++){var N=R[D];N!==null&&(N.lane&=-536870913)}a&=~M}l!==0&&_d(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(p&~n))}function _d(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Ot(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function gd(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-Ot(a),u=1<<l;u&n|e[l]&n&&(e[l]|=n),a&=~u}}function hu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function md(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:Wg(e.type))}function V0(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var Bn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Bn,St="__reactProps$"+Bn,ss="__reactContainer$"+Bn,pu="__reactEvents$"+Bn,G0="__reactListeners$"+Bn,Y0="__reactHandles$"+Bn,vd="__reactResources$"+Bn,pa="__reactMarker$"+Bn;function _u(e){delete e[ht],delete e[St],delete e[pu],delete e[G0],delete e[Y0]}function as(e){var n=e[ht];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ss]||a[ht]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Lg(e);e!==null;){if(a=e[ht])return a;e=Lg(e)}return n}e=a,a=e.parentNode}return null}function rs(e){if(e=e[ht]||e[ss]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function _a(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ls(e){var n=e[vd];return n||(n=e[vd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tt(e){e[pa]=!0}var yd=new Set,Ed={};function Ni(e,n){os(e,n),os(e+"Capture",n)}function os(e,n){for(Ed[e]=n,e=0;e<n.length;e++)yd.add(n[e])}var F0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sd={},bd={};function Q0(e){return ou.call(bd,e)?!0:ou.call(Sd,e)?!1:F0.test(e)?bd[e]=!0:(Sd[e]=!0,!1)}function $r(e,n,a){if(Q0(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function el(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function pn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}var gu,Td;function us(e){if(gu===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);gu=n&&n[1]||"",Td=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gu+e+Td}var mu=!1;function vu(e,n){if(!e||mu)return"";mu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var R=N}Reflect.construct(e,[],M)}else{try{M.call()}catch(N){R=N}e.call(M.prototype)}}else{try{throw Error()}catch(N){R=N}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),p=f[0],m=f[1];if(p&&m){var y=p.split(`
`),A=m.split(`
`);for(u=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;u<A.length&&!A[u].includes("DetermineComponentFrameRoot");)u++;if(l===y.length||u===A.length)for(l=y.length-1,u=A.length-1;1<=l&&0<=u&&y[l]!==A[u];)u--;for(;1<=l&&0<=u;l--,u--)if(y[l]!==A[u]){if(l!==1||u!==1)do if(l--,u--,0>u||y[l]!==A[u]){var D=`
`+y[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=u);break}}}finally{mu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?us(a):""}function K0(e){switch(e.tag){case 26:case 27:case 5:return us(e.type);case 16:return us("Lazy");case 13:return us("Suspense");case 19:return us("SuspenseList");case 0:case 15:return vu(e.type,!1);case 11:return vu(e.type.render,!1);case 1:return vu(e.type,!0);case 31:return us("Activity");default:return""}}function Cd(e){try{var n="";do n+=K0(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function X0(e){var n=wd(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(p){l=""+p,f.call(this,p)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function tl(e){e._valueTracker||(e._valueTracker=X0(e))}function Ad(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=wd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var W0=/[\n"\\]/g;function Ht(e){return e.replace(W0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yu(e,n,a,l,u,f,p,m){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+zt(n)):e.value!==""+zt(n)&&(e.value=""+zt(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Eu(e,p,zt(n)):a!=null?Eu(e,p,zt(a)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+zt(m):e.removeAttribute("name")}function Rd(e,n,a,l,u,f,p,m){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+zt(a):"",n=n!=null?""+zt(n):a,m||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function Eu(e,n,a){n==="number"&&nl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cs(e,n,a,l){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+zt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Nd(e,n,a){if(n!=null&&(n=""+zt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+zt(a):""}function Od(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(Be(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=zt(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function fs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dd(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||Z0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Id(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&Dd(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&Dd(e,f,n[f])}function Su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return $0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bu=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,ds=null;function Md(e){var n=rs(e);if(n&&(e=n.stateNode)){var a=e[St]||null;e:switch(e=n.stateNode,n.type){case"input":if(yu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var u=l[St]||null;if(!u)throw Error(r(90));yu(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&Ad(l)}break e;case"textarea":Nd(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&cs(e,!!a.multiple,n,!1)}}}var Cu=!1;function xd(e,n,a){if(Cu)return e(n,a);Cu=!0;try{var l=e(n);return l}finally{if(Cu=!1,(hs!==null||ds!==null)&&(jl(),hs&&(n=hs,e=ds,ds=hs=null,Md(n),e)))for(n=0;n<e.length;n++)Md(e[n])}}function ga(e,n){var a=e.stateNode;if(a===null)return null;var l=a[St]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(_n)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){wu=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{wu=!1}var qn=null,Au=null,sl=null;function kd(){if(sl)return sl;var e,n=Au,a=n.length,l,u="value"in qn?qn.value:qn.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var p=a-e;for(l=1;l<=p&&n[a-l]===u[f-l];l++);return sl=u.slice(e,1<l?1-l:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Ld(){return!1}function bt(e){function n(a,l,u,f,p){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(f):f[m]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:Ld,this.isPropagationStopped=Ld,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=bt(Oi),va=v({},Oi,{view:0,detail:0}),eE=bt(va),Ru,Nu,ya,ol=v({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ya&&(ya&&e.type==="mousemove"?(Ru=e.screenX-ya.screenX,Nu=e.screenY-ya.screenY):Nu=Ru=0,ya=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),Ud=bt(ol),tE=v({},ol,{dataTransfer:0}),nE=bt(tE),iE=v({},va,{relatedTarget:0}),Ou=bt(iE),sE=v({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),aE=bt(sE),rE=v({},Oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lE=bt(rE),oE=v({},Oi,{data:0}),zd=bt(oE),uE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fE[e])?!!n[e]:!1}function Du(){return hE}var dE=v({},va,{key:function(e){if(e.key){var n=uE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pE=bt(dE),_E=v({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=bt(_E),gE=v({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),mE=bt(gE),vE=v({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),yE=bt(vE),EE=v({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),SE=bt(EE),bE=v({},Oi,{newState:0,oldState:0}),TE=bt(bE),CE=[9,13,27,32],Iu=_n&&"CompositionEvent"in window,Ea=null;_n&&"documentMode"in document&&(Ea=document.documentMode);var wE=_n&&"TextEvent"in window&&!Ea,Pd=_n&&(!Iu||Ea&&8<Ea&&11>=Ea),Bd=" ",qd=!1;function jd(e,n){switch(e){case"keyup":return CE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ps=!1;function AE(e,n){switch(e){case"compositionend":return Vd(n);case"keypress":return n.which!==32?null:(qd=!0,Bd);case"textInput":return e=n.data,e===Bd&&qd?null:e;default:return null}}function RE(e,n){if(ps)return e==="compositionend"||!Iu&&jd(e,n)?(e=kd(),sl=Au=qn=null,ps=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pd&&n.locale!=="ko"?null:n.data;default:return null}}var NE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!NE[e.type]:n==="textarea"}function Yd(e,n,a,l){hs?ds?ds.push(l):ds=[l]:hs=l,n=Kl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Sa=null,ba=null;function OE(e){wg(e,0)}function ul(e){var n=_a(e);if(Ad(n))return e}function Fd(e,n){if(e==="change")return n}var Qd=!1;if(_n){var Mu;if(_n){var xu="oninput"in document;if(!xu){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),xu=typeof Kd.oninput=="function"}Mu=xu}else Mu=!1;Qd=Mu&&(!document.documentMode||9<document.documentMode)}function Xd(){Sa&&(Sa.detachEvent("onpropertychange",Wd),ba=Sa=null)}function Wd(e){if(e.propertyName==="value"&&ul(ba)){var n=[];Yd(n,ba,e,Tu(e)),xd(OE,n)}}function DE(e,n,a){e==="focusin"?(Xd(),Sa=n,ba=a,Sa.attachEvent("onpropertychange",Wd)):e==="focusout"&&Xd()}function IE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(ba)}function ME(e,n){if(e==="click")return ul(n)}function xE(e,n){if(e==="input"||e==="change")return ul(n)}function kE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dt=typeof Object.is=="function"?Object.is:kE;function Ta(e,n){if(Dt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!ou.call(n,u)||!Dt(e[u],n[u]))return!1}return!0}function Zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jd(e,n){var a=Zd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zd(a)}}function $d(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$d(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=nl(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=nl(e.document)}return n}function ku(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var LE=_n&&"documentMode"in document&&11>=document.documentMode,_s=null,Lu=null,Ca=null,Uu=!1;function tp(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||_s==null||_s!==nl(l)||(l=_s,"selectionStart"in l&&ku(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ca&&Ta(Ca,l)||(Ca=l,l=Kl(Lu,"onSelect"),0<l.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=_s)))}function Di(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var gs={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionrun:Di("Transition","TransitionRun"),transitionstart:Di("Transition","TransitionStart"),transitioncancel:Di("Transition","TransitionCancel"),transitionend:Di("Transition","TransitionEnd")},zu={},np={};_n&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Ii(e){if(zu[e])return zu[e];if(!gs[e])return e;var n=gs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in np)return zu[e]=n[a];return e}var ip=Ii("animationend"),sp=Ii("animationiteration"),ap=Ii("animationstart"),UE=Ii("transitionrun"),zE=Ii("transitionstart"),HE=Ii("transitioncancel"),rp=Ii("transitionend"),lp=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function Xt(e,n){lp.set(e,n),Ni(n,[e])}var op=new WeakMap;function Pt(e,n){if(typeof e=="object"&&e!==null){var a=op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Cd(n)},op.set(e,n),n)}return{value:e,source:n,stack:Cd(n)}}var Bt=[],ms=0,Pu=0;function cl(){for(var e=ms,n=Pu=ms=0;n<e;){var a=Bt[n];Bt[n++]=null;var l=Bt[n];Bt[n++]=null;var u=Bt[n];Bt[n++]=null;var f=Bt[n];if(Bt[n++]=null,l!==null&&u!==null){var p=l.pending;p===null?u.next=u:(u.next=p.next,p.next=u),l.pending=u}f!==0&&up(a,u,f)}}function fl(e,n,a,l){Bt[ms++]=e,Bt[ms++]=n,Bt[ms++]=a,Bt[ms++]=l,Pu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Bu(e,n,a,l){return fl(e,n,a,l),hl(e)}function vs(e,n){return fl(e,null,null,n),hl(e)}function up(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=a|536870912),f):null}function hl(e){if(50<Xa)throw Xa=0,Fc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ys={};function PE(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,n,a,l){return new PE(e,n,a,l)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gn(e,n){var a=e.alternate;return a===null?(a=It(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,l,u,f){var p=0;if(l=e,typeof e=="function")qu(e)&&(p=1);else if(typeof e=="string")p=qS(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=It(31,a,n,u),e.elementType=be,e.lanes=f,e;case x:return Mi(a.children,u,f,n);case q:p=8,u|=24;break;case B:return e=It(12,a,n,u|2),e.elementType=B,e.lanes=f,e;case G:return e=It(13,a,n,u),e.elementType=G,e.lanes=f,e;case ge:return e=It(19,a,n,u),e.elementType=ge,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:case re:p=10;break e;case pe:p=9;break e;case te:p=11;break e;case _e:p=14;break e;case je:p=16,l=null;break e}p=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return n=It(p,a,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Mi(e,n,a,l){return e=It(7,e,l,n),e.lanes=a,e}function ju(e,n,a){return e=It(6,e,null,n),e.lanes=a,e}function Vu(e,n,a){return n=It(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Es=[],Ss=0,pl=null,_l=0,qt=[],jt=0,xi=null,mn=1,vn="";function ki(e,n){Es[Ss++]=_l,Es[Ss++]=pl,pl=e,_l=n}function fp(e,n,a){qt[jt++]=mn,qt[jt++]=vn,qt[jt++]=xi,xi=e;var l=mn;e=vn;var u=32-Ot(l)-1;l&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var p=u-u%5;f=(l&(1<<p)-1).toString(32),l>>=p,u-=p,mn=1<<32-Ot(n)+u|a<<u|l,vn=f+e}else mn=1<<f|a<<u|l,vn=e}function Gu(e){e.return!==null&&(ki(e,1),fp(e,1,0))}function Yu(e){for(;e===pl;)pl=Es[--Ss],Es[Ss]=null,_l=Es[--Ss],Es[Ss]=null;for(;e===xi;)xi=qt[--jt],qt[jt]=null,vn=qt[--jt],qt[jt]=null,mn=qt[--jt],qt[jt]=null}var _t=null,Ve=null,Ce=!1,Li=null,rn=!1,Fu=Error(r(519));function Ui(e){var n=Error(r(418,""));throw Ra(Pt(n,e)),Fu}function hp(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[ht]=e,n[St]=l,a){case"dialog":fe("cancel",n),fe("close",n);break;case"iframe":case"object":case"embed":fe("load",n);break;case"video":case"audio":for(a=0;a<Za.length;a++)fe(Za[a],n);break;case"source":fe("error",n);break;case"img":case"image":case"link":fe("error",n),fe("load",n);break;case"details":fe("toggle",n);break;case"input":fe("invalid",n),Rd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),tl(n);break;case"select":fe("invalid",n);break;case"textarea":fe("invalid",n),Od(n,l.value,l.defaultValue,l.children),tl(n)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||Og(n.textContent,a)?(l.popover!=null&&(fe("beforetoggle",n),fe("toggle",n)),l.onScroll!=null&&fe("scroll",n),l.onScrollEnd!=null&&fe("scrollend",n),l.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||Ui(e)}function dp(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:_t=_t.return}}function wa(e){if(e!==_t)return!1;if(!Ce)return dp(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||uf(e.type,e.memoizedProps)),a=!a),a&&Ve&&Ui(e),dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ve=Zt(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ve=null}}else n===27?(n=Ve,ii(e.type)?(e=df,df=null,Ve=e):Ve=n):Ve=_t?Zt(e.stateNode.nextSibling):null;return!0}function Aa(){Ve=_t=null,Ce=!1}function pp(){var e=Li;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),Li=null),e}function Ra(e){Li===null?Li=[e]:Li.push(e)}var Qu=L(null),zi=null,yn=null;function jn(e,n,a){H(Qu,n._currentValue),n._currentValue=a}function En(e){e._currentValue=Qu.current,P(Qu)}function Ku(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var p=u.child;f=f.firstContext;e:for(;f!==null;){var m=f;f=u;for(var y=0;y<n.length;y++)if(m.context===n[y]){f.lanes|=a,m=f.alternate,m!==null&&(m.lanes|=a),Ku(f.return,a,e),l||(p=null);break e}f=m.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(r(341));p.lanes|=a,f=p.alternate,f!==null&&(f.lanes|=a),Ku(p,a,e),p=null}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===e){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function Na(e,n,a,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var m=u.type;Dt(u.pendingProps.value,p.value)||(e!==null?e.push(m):e=[m])}}else if(u===Rt.current){if(p=u.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ir):e=[ir])}u=u.return}e!==null&&Xu(n,e,a,l),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hi(e){zi=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return _p(zi,e)}function ml(e,n){return zi===null&&Hi(e),_p(e,n)}function _p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},yn===null){if(e===null)throw Error(r(308));yn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else yn=yn.next=n;return a}var BE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},qE=s.unstable_scheduleCallback,jE=s.unstable_NormalPriority,Ze={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new BE,data:new Map,refCount:0}}function Oa(e){e.refCount--,e.refCount===0&&qE(jE,function(){e.controller.abort()})}var Da=null,Zu=0,bs=0,Ts=null;function VE(e,n){if(Da===null){var a=Da=[];Zu=0,bs=$c(),Ts={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Zu++,n.then(gp,gp),n}function gp(){if(--Zu===0&&Da!==null){Ts!==null&&(Ts.status="fulfilled");var e=Da;Da=null,bs=0,Ts=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function GE(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var mp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&VE(e,n),mp!==null&&mp(e,n)};var Pi=L(null);function Ju(){var e=Pi.current;return e!==null?e:Le.pooledCache}function vl(e,n){n===null?H(Pi,Pi.current):H(Pi,n.pool)}function vp(){var e=Ju();return e===null?null:{parent:Ze._currentValue,pool:e}}var Ia=Error(r(460)),yp=Error(r(474)),yl=Error(r(542)),$u={then:function(){}};function Ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function El(){}function Sp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e;default:if(typeof n.status=="string")n.then(El,El);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e}throw Ma=n,Ia}}var Ma=null;function bp(){if(Ma===null)throw Error(r(459));var e=Ma;return Ma=null,e}function Tp(e){if(e===Ia||e===yl)throw Error(r(483))}var Vn=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Re&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=hl(e),up(e,null,a),n}return fl(e,l,n,a),hl(e)}function xa(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,gd(e,a)}}function nc(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=p:f=f.next=p,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ic=!1;function ka(){if(ic){var e=Ts;if(e!==null)throw e}}function La(e,n,a,l){ic=!1;var u=e.updateQueue;Vn=!1;var f=u.firstBaseUpdate,p=u.lastBaseUpdate,m=u.shared.pending;if(m!==null){u.shared.pending=null;var y=m,A=y.next;y.next=null,p===null?f=A:p.next=A,p=y;var D=e.alternate;D!==null&&(D=D.updateQueue,m=D.lastBaseUpdate,m!==p&&(m===null?D.firstBaseUpdate=A:m.next=A,D.lastBaseUpdate=y))}if(f!==null){var M=u.baseState;p=0,D=A=y=null,m=f;do{var R=m.lane&-536870913,N=R!==m.lane;if(N?(me&R)===R:(l&R)===R){R!==0&&R===bs&&(ic=!0),D!==null&&(D=D.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var J=e,Q=m;R=n;var Ie=a;switch(Q.tag){case 1:if(J=Q.payload,typeof J=="function"){M=J.call(Ie,M,R);break e}M=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=Q.payload,R=typeof J=="function"?J.call(Ie,M,R):J,R==null)break e;M=v({},M,R);break e;case 2:Vn=!0}}R=m.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[R]:N.push(R))}else N={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},D===null?(A=D=N,y=M):D=D.next=N,p|=R;if(m=m.next,m===null){if(m=u.shared.pending,m===null)break;N=m,m=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);D===null&&(y=M),u.baseState=y,u.firstBaseUpdate=A,u.lastBaseUpdate=D,f===null&&(u.shared.lanes=0),$n|=p,e.lanes=p,e.memoizedState=M}}function Cp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function wp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cp(a[e],n)}var Cs=L(null),Sl=L(0);function Ap(e,n){e=Rn,H(Sl,e),H(Cs,n),Rn=e|n.baseLanes}function sc(){H(Sl,Rn),H(Cs,Cs.current)}function ac(){Rn=Sl.current,P(Cs),P(Sl)}var Fn=0,ae=null,Oe=null,Xe=null,bl=!1,ws=!1,Bi=!1,Tl=0,Ua=0,As=null,YE=0;function Qe(){throw Error(r(321))}function rc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Dt(e[a],n[a]))return!1;return!0}function lc(e,n,a,l,u,f){return Fn=f,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?u_:c_,Bi=!1,f=a(l,u),Bi=!1,ws&&(f=Np(n,a,l,u)),Rp(e),f}function Rp(e){O.H=Ol;var n=Oe!==null&&Oe.next!==null;if(Fn=0,Xe=Oe=ae=null,bl=!1,Ua=0,As=null,n)throw Error(r(300));e===null||nt||(e=e.dependencies,e!==null&&gl(e)&&(nt=!0))}function Np(e,n,a,l){ae=e;var u=0;do{if(ws&&(As=null),Ua=0,ws=!1,25<=u)throw Error(r(301));if(u+=1,Xe=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=JE,f=n(a,l)}while(ws);return f}function FE(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?za(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ae.flags|=1024),n}function oc(){var e=Tl!==0;return Tl=0,e}function uc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cc(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}Fn=0,Xe=Oe=ae=null,ws=!1,Ua=Tl=0,As=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ae.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function We(){if(Oe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=Xe===null?ae.memoizedState:Xe.next;if(n!==null)Xe=n,Oe=e;else{if(e===null)throw ae.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Xe===null?ae.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function za(e){var n=Ua;return Ua+=1,As===null&&(As=[]),e=Sp(As,e,n),n=ae,(Xe===null?n.memoizedState:Xe.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?u_:c_),e}function Cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return za(e);if(e.$$typeof===re)return dt(e)}throw Error(r(438,String(e)))}function hc(e){var n=null,a=ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fc(),ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=X;return n.index++,a}function Sn(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=We();return dc(n,Oe,e)}function dc(e,n,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var p=u.next;u.next=f.next,f.next=p}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var m=p=null,y=null,A=n,D=!1;do{var M=A.lane&-536870913;if(M!==A.lane?(me&M)===M:(Fn&M)===M){var R=A.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),M===bs&&(D=!0);else if((Fn&R)===R){A=A.next,R===bs&&(D=!0);continue}else M={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},y===null?(m=y=M,p=f):y=y.next=M,ae.lanes|=R,$n|=R;M=A.action,Bi&&a(f,M),f=A.hasEagerState?A.eagerState:a(f,M)}else R={lane:M,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},y===null?(m=y=R,p=f):y=y.next=R,ae.lanes|=M,$n|=M;A=A.next}while(A!==null&&A!==n);if(y===null?p=f:y.next=m,!Dt(f,e.memoizedState)&&(nt=!0,D&&(a=Ts,a!==null)))throw a;e.memoizedState=f,e.baseState=p,e.baseQueue=y,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function pc(e){var n=We(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var p=u=u.next;do f=e(f,p.action),p=p.next;while(p!==u);Dt(f,n.memoizedState)||(nt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function Op(e,n,a){var l=ae,u=We(),f=Ce;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var p=!Dt((Oe||u).memoizedState,a);p&&(u.memoizedState=a,nt=!0),u=u.queue;var m=Mp.bind(null,l,u,e);if(Ha(2048,8,m,[e]),u.getSnapshot!==n||p||Xe!==null&&Xe.memoizedState.tag&1){if(l.flags|=2048,Rs(9,Al(),Ip.bind(null,l,u,a,n),null),Le===null)throw Error(r(349));f||(Fn&124)!==0||Dp(l,n,a)}return a}function Dp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ae.updateQueue,n===null?(n=fc(),ae.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ip(e,n,a,l){n.value=a,n.getSnapshot=l,xp(n)&&kp(e)}function Mp(e,n,a){return a(function(){xp(n)&&kp(e)})}function xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Dt(e,a)}catch{return!0}}function kp(e){var n=vs(e,2);n!==null&&Ut(n,e,2)}function _c(e){var n=Tt();if(typeof e=="function"){var a=e;if(e=a(),Bi){Pn(!0);try{a()}finally{Pn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},n}function Lp(e,n,a,l){return e.baseState=a,dc(e,Oe,typeof l=="function"?l:Sn)}function QE(e,n,a,l,u){if(Nl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};O.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,Up(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Up(e,n){var a=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=O.T,p={};O.T=p;try{var m=a(u,l),y=O.S;y!==null&&y(p,m),zp(e,n,m)}catch(A){gc(e,n,A)}finally{O.T=f}}else try{f=a(u,l),zp(e,n,f)}catch(A){gc(e,n,A)}}function zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Hp(e,n,l)},function(l){return gc(e,n,l)}):Hp(e,n,a)}function Hp(e,n,a){n.status="fulfilled",n.value=a,Pp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Up(e,a)))}function gc(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Pp(n),n=n.next;while(n!==l)}e.action=null}function Pp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Bp(e,n){return n}function qp(e,n){if(Ce){var a=Le.formState;if(a!==null){e:{var l=ae;if(Ce){if(Ve){t:{for(var u=Ve,f=rn;u.nodeType!==8;){if(!f){u=null;break t}if(u=Zt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ve=Zt(u.nextSibling),l=u.data==="F!";break e}}Ui(l)}l=!1}l&&(n=a[0])}}return a=Tt(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bp,lastRenderedState:n},a.queue=l,a=r_.bind(null,ae,l),l.dispatch=a,l=_c(!1),f=Sc.bind(null,ae,!1,l.queue),l=Tt(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,a=QE.bind(null,ae,u,f,a),u.dispatch=a,l.memoizedState=e,[n,a,!1]}function jp(e){var n=We();return Vp(n,Oe,e)}function Vp(e,n,a){if(n=dc(e,n,Bp)[0],e=wl(Sn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=za(n)}catch(p){throw p===Ia?yl:p}else l=n;n=We();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ae.flags|=2048,Rs(9,Al(),KE.bind(null,u,a),null)),[l,f,e]}function KE(e,n){e.action=n}function Gp(e){var n=We(),a=Oe;if(a!==null)return Vp(n,a,e);We(),n=n.memoizedState,a=We();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Rs(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=ae.updateQueue,n===null&&(n=fc(),ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function Yp(){return We().memoizedState}function Rl(e,n,a,l){var u=Tt();l=l===void 0?null:l,ae.flags|=e,u.memoizedState=Rs(1|n,Al(),a,l)}function Ha(e,n,a,l){var u=We();l=l===void 0?null:l;var f=u.memoizedState.inst;Oe!==null&&l!==null&&rc(l,Oe.memoizedState.deps)?u.memoizedState=Rs(n,f,a,l):(ae.flags|=e,u.memoizedState=Rs(1|n,f,a,l))}function Fp(e,n){Rl(8390656,8,e,n)}function Qp(e,n){Ha(2048,8,e,n)}function Kp(e,n){return Ha(4,2,e,n)}function Xp(e,n){return Ha(4,4,e,n)}function Wp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zp(e,n,a){a=a!=null?a.concat([e]):null,Ha(4,4,Wp.bind(null,n,e),a)}function mc(){}function Jp(e,n){var a=We();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&rc(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function $p(e,n){var a=We();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&rc(n,l[1]))return l[0];if(l=e(),Bi){Pn(!0);try{e()}finally{Pn(!1)}}return a.memoizedState=[l,n],l}function vc(e,n,a){return a===void 0||(Fn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=ng(),ae.lanes|=e,$n|=e,a)}function e_(e,n,a,l){return Dt(a,n)?a:Cs.current!==null?(e=vc(e,a,l),Dt(e,n)||(nt=!0),e):(Fn&42)===0?(nt=!0,e.memoizedState=a):(e=ng(),ae.lanes|=e,$n|=e,n)}function t_(e,n,a,l,u){var f=z.p;z.p=f!==0&&8>f?f:8;var p=O.T,m={};O.T=m,Sc(e,!1,n,a);try{var y=u(),A=O.S;if(A!==null&&A(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var D=GE(y,l);Pa(e,n,D,Lt(e))}else Pa(e,n,l,Lt(e))}catch(M){Pa(e,n,{then:function(){},status:"rejected",reason:M},Lt())}finally{z.p=f,O.T=p}}function XE(){}function yc(e,n,a,l){if(e.tag!==5)throw Error(r(476));var u=n_(e).queue;t_(e,u,n,Y,a===null?XE:function(){return i_(e),a(l)})}function n_(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function i_(e){var n=n_(e).next.queue;Pa(e,n,{},Lt())}function Ec(){return dt(ir)}function s_(){return We().memoizedState}function a_(){return We().memoizedState}function WE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Lt();e=Gn(a);var l=Yn(n,e,a);l!==null&&(Ut(l,n,a),xa(l,n,a)),n={cache:Wu()},e.payload=n;return}n=n.return}}function ZE(e,n,a){var l=Lt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?l_(n,a):(a=Bu(e,n,a,l),a!==null&&(Ut(a,e,l),o_(a,n,l)))}function r_(e,n,a){var l=Lt();Pa(e,n,a,l)}function Pa(e,n,a,l){var u={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))l_(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,m=f(p,a);if(u.hasEagerState=!0,u.eagerState=m,Dt(m,p))return fl(e,n,u,0),Le===null&&cl(),!1}catch{}finally{}if(a=Bu(e,n,u,l),a!==null)return Ut(a,e,l),o_(a,n,l),!0}return!1}function Sc(e,n,a,l){if(l={lane:2,revertLane:$c(),action:l,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(r(479))}else n=Bu(e,a,l,2),n!==null&&Ut(n,e,2)}function Nl(e){var n=e.alternate;return e===ae||n!==null&&n===ae}function l_(e,n){ws=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function o_(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,gd(e,a)}}var Ol={readContext:dt,use:Cl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},u_={readContext:dt,use:Cl,useCallback:function(e,n){return Tt().memoizedState=[e,n===void 0?null:n],e},useContext:dt,useEffect:Fp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,Wp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=Tt();n=n===void 0?null:n;var l=e();if(Bi){Pn(!0);try{e()}finally{Pn(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=Tt();if(a!==void 0){var u=a(n);if(Bi){Pn(!0);try{a(n)}finally{Pn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=ZE.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var n=Tt();return e={current:e},n.memoizedState=e},useState:function(e){e=_c(e);var n=e.queue,a=r_.bind(null,ae,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:mc,useDeferredValue:function(e,n){var a=Tt();return vc(a,e,n)},useTransition:function(){var e=_c(!1);return e=t_.bind(null,ae,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=ae,u=Tt();if(Ce){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Le===null)throw Error(r(349));(me&124)!==0||Dp(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Fp(Mp.bind(null,l,f,e),[e]),l.flags|=2048,Rs(9,Al(),Ip.bind(null,l,f,a,n),null),a},useId:function(){var e=Tt(),n=Le.identifierPrefix;if(Ce){var a=vn,l=mn;a=(l&~(1<<32-Ot(l)-1)).toString(32)+a,n="«"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=YE++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ec,useFormState:qp,useActionState:qp,useOptimistic:function(e){var n=Tt();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sc.bind(null,ae,!0,a),a.dispatch=n,[e,n]},useMemoCache:hc,useCacheRefresh:function(){return Tt().memoizedState=WE.bind(null,ae)}},c_={readContext:dt,use:Cl,useCallback:Jp,useContext:dt,useEffect:Qp,useImperativeHandle:Zp,useInsertionEffect:Kp,useLayoutEffect:Xp,useMemo:$p,useReducer:wl,useRef:Yp,useState:function(){return wl(Sn)},useDebugValue:mc,useDeferredValue:function(e,n){var a=We();return e_(a,Oe.memoizedState,e,n)},useTransition:function(){var e=wl(Sn)[0],n=We().memoizedState;return[typeof e=="boolean"?e:za(e),n]},useSyncExternalStore:Op,useId:s_,useHostTransitionStatus:Ec,useFormState:jp,useActionState:jp,useOptimistic:function(e,n){var a=We();return Lp(a,Oe,e,n)},useMemoCache:hc,useCacheRefresh:a_},JE={readContext:dt,use:Cl,useCallback:Jp,useContext:dt,useEffect:Qp,useImperativeHandle:Zp,useInsertionEffect:Kp,useLayoutEffect:Xp,useMemo:$p,useReducer:pc,useRef:Yp,useState:function(){return pc(Sn)},useDebugValue:mc,useDeferredValue:function(e,n){var a=We();return Oe===null?vc(a,e,n):e_(a,Oe.memoizedState,e,n)},useTransition:function(){var e=pc(Sn)[0],n=We().memoizedState;return[typeof e=="boolean"?e:za(e),n]},useSyncExternalStore:Op,useId:s_,useHostTransitionStatus:Ec,useFormState:Gp,useActionState:Gp,useOptimistic:function(e,n){var a=We();return Oe!==null?Lp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hc,useCacheRefresh:a_},Ns=null,Ba=0;function Dl(e){var n=Ba;return Ba+=1,Ns===null&&(Ns=[]),Sp(Ns,e,n)}function qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===E?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function f_(e){var n=e._init;return n(e._payload)}function h_(e){function n(C,T){if(e){var w=C.deletions;w===null?(C.deletions=[T],C.flags|=16):w.push(T)}}function a(C,T){if(!e)return null;for(;T!==null;)n(C,T),T=T.sibling;return null}function l(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function u(C,T){return C=gn(C,T),C.index=0,C.sibling=null,C}function f(C,T,w){return C.index=w,e?(w=C.alternate,w!==null?(w=w.index,w<T?(C.flags|=67108866,T):w):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function p(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,T,w,I){return T===null||T.tag!==6?(T=ju(w,C.mode,I),T.return=C,T):(T=u(T,w),T.return=C,T)}function y(C,T,w,I){var j=w.type;return j===x?D(C,T,w.props.children,I,w.key):T!==null&&(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===je&&f_(j)===T.type)?(T=u(T,w.props),qa(T,w),T.return=C,T):(T=dl(w.type,w.key,w.props,null,C.mode,I),qa(T,w),T.return=C,T)}function A(C,T,w,I){return T===null||T.tag!==4||T.stateNode.containerInfo!==w.containerInfo||T.stateNode.implementation!==w.implementation?(T=Vu(w,C.mode,I),T.return=C,T):(T=u(T,w.children||[]),T.return=C,T)}function D(C,T,w,I,j){return T===null||T.tag!==7?(T=Mi(w,C.mode,I,j),T.return=C,T):(T=u(T,w),T.return=C,T)}function M(C,T,w){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=ju(""+T,C.mode,w),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case S:return w=dl(T.type,T.key,T.props,null,C.mode,w),qa(w,T),w.return=C,w;case k:return T=Vu(T,C.mode,w),T.return=C,T;case je:var I=T._init;return T=I(T._payload),M(C,T,w)}if(Be(T)||ie(T))return T=Mi(T,C.mode,w,null),T.return=C,T;if(typeof T.then=="function")return M(C,Dl(T),w);if(T.$$typeof===re)return M(C,ml(C,T),w);Il(C,T)}return null}function R(C,T,w,I){var j=T!==null?T.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return j!==null?null:m(C,T,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case S:return w.key===j?y(C,T,w,I):null;case k:return w.key===j?A(C,T,w,I):null;case je:return j=w._init,w=j(w._payload),R(C,T,w,I)}if(Be(w)||ie(w))return j!==null?null:D(C,T,w,I,null);if(typeof w.then=="function")return R(C,T,Dl(w),I);if(w.$$typeof===re)return R(C,T,ml(C,w),I);Il(C,w)}return null}function N(C,T,w,I,j){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return C=C.get(w)||null,m(T,C,""+I,j);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case S:return C=C.get(I.key===null?w:I.key)||null,y(T,C,I,j);case k:return C=C.get(I.key===null?w:I.key)||null,A(T,C,I,j);case je:var le=I._init;return I=le(I._payload),N(C,T,w,I,j)}if(Be(I)||ie(I))return C=C.get(w)||null,D(T,C,I,j,null);if(typeof I.then=="function")return N(C,T,w,Dl(I),j);if(I.$$typeof===re)return N(C,T,w,ml(T,I),j);Il(T,I)}return null}function J(C,T,w,I){for(var j=null,le=null,V=T,K=T=0,st=null;V!==null&&K<w.length;K++){V.index>K?(st=V,V=null):st=V.sibling;var Ee=R(C,V,w[K],I);if(Ee===null){V===null&&(V=st);break}e&&V&&Ee.alternate===null&&n(C,V),T=f(Ee,T,K),le===null?j=Ee:le.sibling=Ee,le=Ee,V=st}if(K===w.length)return a(C,V),Ce&&ki(C,K),j;if(V===null){for(;K<w.length;K++)V=M(C,w[K],I),V!==null&&(T=f(V,T,K),le===null?j=V:le.sibling=V,le=V);return Ce&&ki(C,K),j}for(V=l(V);K<w.length;K++)st=N(V,C,K,w[K],I),st!==null&&(e&&st.alternate!==null&&V.delete(st.key===null?K:st.key),T=f(st,T,K),le===null?j=st:le.sibling=st,le=st);return e&&V.forEach(function(oi){return n(C,oi)}),Ce&&ki(C,K),j}function Q(C,T,w,I){if(w==null)throw Error(r(151));for(var j=null,le=null,V=T,K=T=0,st=null,Ee=w.next();V!==null&&!Ee.done;K++,Ee=w.next()){V.index>K?(st=V,V=null):st=V.sibling;var oi=R(C,V,Ee.value,I);if(oi===null){V===null&&(V=st);break}e&&V&&oi.alternate===null&&n(C,V),T=f(oi,T,K),le===null?j=oi:le.sibling=oi,le=oi,V=st}if(Ee.done)return a(C,V),Ce&&ki(C,K),j;if(V===null){for(;!Ee.done;K++,Ee=w.next())Ee=M(C,Ee.value,I),Ee!==null&&(T=f(Ee,T,K),le===null?j=Ee:le.sibling=Ee,le=Ee);return Ce&&ki(C,K),j}for(V=l(V);!Ee.done;K++,Ee=w.next())Ee=N(V,C,K,Ee.value,I),Ee!==null&&(e&&Ee.alternate!==null&&V.delete(Ee.key===null?K:Ee.key),T=f(Ee,T,K),le===null?j=Ee:le.sibling=Ee,le=Ee);return e&&V.forEach(function($S){return n(C,$S)}),Ce&&ki(C,K),j}function Ie(C,T,w,I){if(typeof w=="object"&&w!==null&&w.type===x&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case S:e:{for(var j=w.key;T!==null;){if(T.key===j){if(j=w.type,j===x){if(T.tag===7){a(C,T.sibling),I=u(T,w.props.children),I.return=C,C=I;break e}}else if(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===je&&f_(j)===T.type){a(C,T.sibling),I=u(T,w.props),qa(I,w),I.return=C,C=I;break e}a(C,T);break}else n(C,T);T=T.sibling}w.type===x?(I=Mi(w.props.children,C.mode,I,w.key),I.return=C,C=I):(I=dl(w.type,w.key,w.props,null,C.mode,I),qa(I,w),I.return=C,C=I)}return p(C);case k:e:{for(j=w.key;T!==null;){if(T.key===j)if(T.tag===4&&T.stateNode.containerInfo===w.containerInfo&&T.stateNode.implementation===w.implementation){a(C,T.sibling),I=u(T,w.children||[]),I.return=C,C=I;break e}else{a(C,T);break}else n(C,T);T=T.sibling}I=Vu(w,C.mode,I),I.return=C,C=I}return p(C);case je:return j=w._init,w=j(w._payload),Ie(C,T,w,I)}if(Be(w))return J(C,T,w,I);if(ie(w)){if(j=ie(w),typeof j!="function")throw Error(r(150));return w=j.call(w),Q(C,T,w,I)}if(typeof w.then=="function")return Ie(C,T,Dl(w),I);if(w.$$typeof===re)return Ie(C,T,ml(C,w),I);Il(C,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,T!==null&&T.tag===6?(a(C,T.sibling),I=u(T,w),I.return=C,C=I):(a(C,T),I=ju(w,C.mode,I),I.return=C,C=I),p(C)):a(C,T)}return function(C,T,w,I){try{Ba=0;var j=Ie(C,T,w,I);return Ns=null,j}catch(V){if(V===Ia||V===yl)throw V;var le=It(29,V,null,C.mode);return le.lanes=I,le.return=C,le}finally{}}}var Os=h_(!0),d_=h_(!1),Vt=L(null),ln=null;function Qn(e){var n=e.alternate;H(Je,Je.current&1),H(Vt,e),ln===null&&(n===null||Cs.current!==null||n.memoizedState!==null)&&(ln=e)}function p_(e){if(e.tag===22){if(H(Je,Je.current),H(Vt,e),ln===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ln=e)}}else Kn()}function Kn(){H(Je,Je.current),H(Vt,Vt.current)}function bn(e){P(Vt),ln===e&&(ln=null),P(Je)}var Je=L(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function bc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tc={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=Lt(),u=Gn(l);u.payload=n,a!=null&&(u.callback=a),n=Yn(e,u,l),n!==null&&(Ut(n,e,l),xa(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=Lt(),u=Gn(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Yn(e,u,l),n!==null&&(Ut(n,e,l),xa(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Lt(),l=Gn(a);l.tag=2,n!=null&&(l.callback=n),n=Yn(e,l,a),n!==null&&(Ut(n,e,a),xa(n,e,a))}};function __(e,n,a,l,u,f,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,p):n.prototype&&n.prototype.isPureReactComponent?!Ta(a,l)||!Ta(u,f):!0}function g_(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&Tc.enqueueReplaceState(n,n.state,null)}function qi(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function m_(e){xl(e)}function v_(e){console.error(e)}function y_(e){xl(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function E_(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cc(e,n,a){return a=Gn(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function S_(e){return e=Gn(e),e.tag=3,e}function b_(e,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){E_(n,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){E_(n,a,l),typeof u!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function $E(e,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Na(n,a,u,!0),a=Vt.current,a!==null){switch(a.tag){case 13:return ln===null?Kc():a.alternate===null&&Ge===0&&(Ge=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===$u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Wc(e,l,u)),!1;case 22:return a.flags|=65536,l===$u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Wc(e,l,u)),!1}throw Error(r(435,a.tag))}return Wc(e,l,u),Kc(),!1}if(Ce)return n=Vt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Fu&&(e=Error(r(422),{cause:l}),Ra(Pt(e,a)))):(l!==Fu&&(n=Error(r(423),{cause:l}),Ra(Pt(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Pt(l,a),u=Cc(e.stateNode,l,u),nc(e,u),Ge!==4&&(Ge=2)),!1;var f=Error(r(520),{cause:l});if(f=Pt(f,a),Ka===null?Ka=[f]:Ka.push(f),Ge!==4&&(Ge=2),n===null)return!0;l=Pt(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Cc(a.stateNode,l,e),nc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ei===null||!ei.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=S_(u),b_(u,e,a,l),nc(a,u),!1}a=a.return}while(a!==null);return!1}var T_=Error(r(461)),nt=!1;function lt(e,n,a,l){n.child=e===null?d_(n,null,a,l):Os(n,e.child,a,l)}function C_(e,n,a,l,u){a=a.render;var f=n.ref;if("ref"in l){var p={};for(var m in l)m!=="ref"&&(p[m]=l[m])}else p=l;return Hi(n),l=lc(e,n,a,p,f,u),m=oc(),e!==null&&!nt?(uc(e,n,u),Tn(e,n,u)):(Ce&&m&&Gu(n),n.flags|=1,lt(e,n,l,u),n.child)}function w_(e,n,a,l,u){if(e===null){var f=a.type;return typeof f=="function"&&!qu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,A_(e,n,f,l,u)):(e=dl(a.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Mc(e,u)){var p=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ta,a(p,l)&&e.ref===n.ref)return Tn(e,n,u)}return n.flags|=1,e=gn(f,l),e.ref=n.ref,e.return=n,n.child=e}function A_(e,n,a,l,u){if(e!==null){var f=e.memoizedProps;if(Ta(f,l)&&e.ref===n.ref)if(nt=!1,n.pendingProps=l=f,Mc(e,u))(e.flags&131072)!==0&&(nt=!0);else return n.lanes=e.lanes,Tn(e,n,u)}return wc(e,n,a,l,u)}function R_(e,n,a){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return N_(e,n,l,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?Ap(n,f):sc(),p_(n);else return n.lanes=n.childLanes=536870912,N_(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(vl(n,f.cachePool),Ap(n,f),Kn(),n.memoizedState=null):(e!==null&&vl(n,null),sc(),Kn());return lt(e,n,u,a),n.child}function N_(e,n,a,l){var u=Ju();return u=u===null?null:{parent:Ze._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&vl(n,null),sc(),p_(n),e!==null&&Na(e,n,l,!0),null}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function wc(e,n,a,l,u){return Hi(n),a=lc(e,n,a,l,void 0,u),l=oc(),e!==null&&!nt?(uc(e,n,u),Tn(e,n,u)):(Ce&&l&&Gu(n),n.flags|=1,lt(e,n,a,u),n.child)}function O_(e,n,a,l,u,f){return Hi(n),n.updateQueue=null,a=Np(n,l,a,u),Rp(e),l=oc(),e!==null&&!nt?(uc(e,n,f),Tn(e,n,f)):(Ce&&l&&Gu(n),n.flags|=1,lt(e,n,a,f),n.child)}function D_(e,n,a,l,u){if(Hi(n),n.stateNode===null){var f=ys,p=a.contextType;typeof p=="object"&&p!==null&&(f=dt(p)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Tc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},ec(n),p=a.contextType,f.context=typeof p=="object"&&p!==null?dt(p):ys,f.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(bc(n,a,p,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&Tc.enqueueReplaceState(f,f.state,null),La(n,l,f,u),ka(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var m=n.memoizedProps,y=qi(a,m);f.props=y;var A=f.context,D=a.contextType;p=ys,typeof D=="object"&&D!==null&&(p=dt(D));var M=a.getDerivedStateFromProps;D=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function",m=n.pendingProps!==m,D||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m||A!==p)&&g_(n,f,l,p),Vn=!1;var R=n.memoizedState;f.state=R,La(n,l,f,u),ka(),A=n.memoizedState,m||R!==A||Vn?(typeof M=="function"&&(bc(n,a,M,l),A=n.memoizedState),(y=Vn||__(n,a,y,l,R,A,p))?(D||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=A),f.props=l,f.state=A,f.context=p,l=y):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,tc(e,n),p=n.memoizedProps,D=qi(a,p),f.props=D,M=n.pendingProps,R=f.context,A=a.contextType,y=ys,typeof A=="object"&&A!==null&&(y=dt(A)),m=a.getDerivedStateFromProps,(A=typeof m=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==M||R!==y)&&g_(n,f,l,y),Vn=!1,R=n.memoizedState,f.state=R,La(n,l,f,u),ka();var N=n.memoizedState;p!==M||R!==N||Vn||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof m=="function"&&(bc(n,a,m,l),N=n.memoizedState),(D=Vn||__(n,a,D,l,R,N,y)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(A||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,y)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=y,l=D):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,Ll(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Os(n,e.child,null,u),n.child=Os(n,null,a,u)):lt(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Tn(e,n,u),e}function I_(e,n,a,l){return Aa(),n.flags|=256,lt(e,n,a,l),n.child}var Ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(e){return{baseLanes:e,cachePool:vp()}}function Nc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Gt),e}function M_(e,n,a){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),p&&(u=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?Qn(n):Kn(),Ce){var m=Ve,y;if(y=m){e:{for(y=m,m=rn;y.nodeType!==8;){if(!m){m=null;break e}if(y=Zt(y.nextSibling),y===null){m=null;break e}}m=y}m!==null?(n.memoizedState={dehydrated:m,treeContext:xi!==null?{id:mn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},y=It(18,null,null,0),y.stateNode=m,y.return=n,n.child=y,_t=n,Ve=null,y=!0):y=!1}y||Ui(n)}if(m=n.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return hf(m)?n.lanes=32:n.lanes=536870912,null;bn(n)}return m=l.children,l=l.fallback,u?(Kn(),u=n.mode,m=Ul({mode:"hidden",children:m},u),l=Mi(l,u,a,null),m.return=n,l.return=n,m.sibling=l,n.child=m,u=n.child,u.memoizedState=Rc(a),u.childLanes=Nc(e,p,a),n.memoizedState=Ac,l):(Qn(n),Oc(n,m))}if(y=e.memoizedState,y!==null&&(m=y.dehydrated,m!==null)){if(f)n.flags&256?(Qn(n),n.flags&=-257,n=Dc(e,n,a)):n.memoizedState!==null?(Kn(),n.child=e.child,n.flags|=128,n=null):(Kn(),u=l.fallback,m=n.mode,l=Ul({mode:"visible",children:l.children},m),u=Mi(u,m,a,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Os(n,e.child,null,a),l=n.child,l.memoizedState=Rc(a),l.childLanes=Nc(e,p,a),n.memoizedState=Ac,n=u);else if(Qn(n),hf(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var A=p.dgst;p=A,l=Error(r(419)),l.stack="",l.digest=p,Ra({value:l,source:null,stack:null}),n=Dc(e,n,a)}else if(nt||Na(e,n,a,!1),p=(a&e.childLanes)!==0,nt||p){if(p=Le,p!==null&&(l=a&-a,l=(l&42)!==0?1:hu(l),l=(l&(p.suspendedLanes|a))!==0?0:l,l!==0&&l!==y.retryLane))throw y.retryLane=l,vs(e,l),Ut(p,e,l),T_;m.data==="$?"||Kc(),n=Dc(e,n,a)}else m.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,Ve=Zt(m.nextSibling),_t=n,Ce=!0,Li=null,rn=!1,e!==null&&(qt[jt++]=mn,qt[jt++]=vn,qt[jt++]=xi,mn=e.id,vn=e.overflow,xi=n),n=Oc(n,l.children),n.flags|=4096);return n}return u?(Kn(),u=l.fallback,m=n.mode,y=e.child,A=y.sibling,l=gn(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,A!==null?u=gn(A,u):(u=Mi(u,m,a,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,m=e.child.memoizedState,m===null?m=Rc(a):(y=m.cachePool,y!==null?(A=Ze._currentValue,y=y.parent!==A?{parent:A,pool:A}:y):y=vp(),m={baseLanes:m.baseLanes|a,cachePool:y}),u.memoizedState=m,u.childLanes=Nc(e,p,a),n.memoizedState=Ac,l):(Qn(n),a=e.child,e=a.sibling,a=gn(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function Oc(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=It(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Dc(e,n,a){return Os(n,e.child,null,a),e=Oc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function x_(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Ku(e.return,n,a)}function Ic(e,n,a,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=u)}function k_(e,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(lt(e,n,l.children,a),l=Je.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&x_(e,a,n);else if(e.tag===19)x_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(H(Je,l),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ic(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ic(n,!0,a,null,f);break;case"together":Ic(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$n|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Na(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=gn(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=gn(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Mc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function eS(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),jn(n,Ze,e.memoizedState.cache),Aa();break;case 27:case 5:lu(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:jn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(n),n.flags|=128,null):(a&n.child.childLanes)!==0?M_(e,n,a):(Qn(n),e=Tn(e,n,a),e!==null?e.sibling:null);Qn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Na(e,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return k_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),H(Je,Je.current),l)break;return null;case 22:case 23:return n.lanes=0,R_(e,n,a);case 24:jn(n,Ze,e.memoizedState.cache)}return Tn(e,n,a)}function L_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)nt=!0;else{if(!Mc(e,a)&&(n.flags&128)===0)return nt=!1,eS(e,n,a);nt=(e.flags&131072)!==0}else nt=!1,Ce&&(n.flags&1048576)!==0&&fp(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")qu(l)?(e=qi(l,e),n.tag=1,n=D_(null,n,l,e,a)):(n.tag=0,n=wc(null,n,l,e,a));else{if(l!=null){if(u=l.$$typeof,u===te){n.tag=11,n=C_(null,n,l,e,a);break e}else if(u===_e){n.tag=14,n=w_(null,n,l,e,a);break e}}throw n=Ae(l)||l,Error(r(306,n,""))}}return n;case 0:return wc(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=qi(l,n.pendingProps),D_(e,n,l,u,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,tc(e,n),La(n,l,null,a);var p=n.memoizedState;if(l=p.cache,jn(n,Ze,l),l!==f.cache&&Xu(n,[Ze],a,!0),ka(),l=p.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=I_(e,n,l,a);break e}else if(l!==u){u=Pt(Error(r(424)),n),Ra(u),n=I_(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=Zt(e.firstChild),_t=n,Ce=!0,Li=null,rn=!0,a=d_(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Aa(),l===u){n=Tn(e,n,a);break e}lt(e,n,l,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,l=Wl(ne.current).createElement(a),l[ht]=n,l[St]=e,ut(l,a,e),tt(l),n.stateNode=l):n.memoizedState=Pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return lu(n),e===null&&Ce&&(l=n.stateNode=Ug(n.type,n.pendingProps,ne.current),_t=n,rn=!0,u=Ve,ii(n.type)?(df=u,Ve=Zt(l.firstChild)):Ve=u),lt(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=l=Ve)&&(l=NS(l,n.type,n.pendingProps,rn),l!==null?(n.stateNode=l,_t=n,Ve=Zt(l.firstChild),rn=!1,u=!0):u=!1),u||Ui(n)),lu(n),u=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,l=f.children,uf(u,f)?l=null:p!==null&&uf(u,p)&&(n.flags|=32),n.memoizedState!==null&&(u=lc(e,n,FE,null,null,a),ir._currentValue=u),Ll(e,n),lt(e,n,l,a),n.child;case 6:return e===null&&Ce&&((e=a=Ve)&&(a=OS(a,n.pendingProps,rn),a!==null?(n.stateNode=a,_t=n,Ve=null,e=!0):e=!1),e||Ui(n)),null;case 13:return M_(e,n,a);case 4:return He(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Os(n,null,l,a):lt(e,n,l,a),n.child;case 11:return C_(e,n,n.type,n.pendingProps,a);case 7:return lt(e,n,n.pendingProps,a),n.child;case 8:return lt(e,n,n.pendingProps.children,a),n.child;case 12:return lt(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,jn(n,n.type,l.value),lt(e,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Hi(n),u=dt(u),l=l(u),n.flags|=1,lt(e,n,l,a),n.child;case 14:return w_(e,n,n.type,n.pendingProps,a);case 15:return A_(e,n,n.type,n.pendingProps,a);case 19:return k_(e,n,a);case 31:return l=n.pendingProps,a=n.mode,l={mode:l.mode,children:l.children},e===null?(a=Ul(l,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=gn(e.child,l),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return R_(e,n,a);case 24:return Hi(n),l=dt(Ze),e===null?(u=Ju(),u===null&&(u=Le,f=Wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:l,cache:u},ec(n),jn(n,Ze,u)):((e.lanes&a)!==0&&(tc(e,n),La(n,null,null,a),ka()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),jn(n,Ze,l)):(l=f.cache,jn(n,Ze,l),l!==u.cache&&Xu(n,[Ze],a,!0))),lt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Cn(e){e.flags|=4}function U_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gg(n)){if(n=Vt.current,n!==null&&((me&4194048)===me?ln!==null:(me&62914560)!==me&&(me&536870912)===0||n!==ln))throw Ma=$u,yp;e.flags|=8192}}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pd():536870912,e.lanes|=n,xs|=n)}function ja(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function tS(e,n,a){var l=n.pendingProps;switch(Yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),En(Ze),Hn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wa(n)?Cn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Cn(n),a!==null?(qe(n),U_(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Cn(n),qe(n),U_(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==l&&Cn(n),qe(n),n.flags&=-16777217),null;case 27:Kr(n),a=ne.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=F.current,wa(n)?hp(n):(e=Ug(u,l,a),n.stateNode=e,Cn(n))}return qe(n),null;case 5:if(Kr(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=F.current,wa(n))hp(n);else{switch(u=Wl(ne.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}e[ht]=n,e[St]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(ut(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Cn(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(e=ne.current,wa(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,u=_t,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[ht]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Og(e.nodeValue,a)),e||Ui(n)}else e=Wl(e).createTextNode(l),e[ht]=n,n.stateNode=e}return qe(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=wa(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ht]=n}else Aa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(bn(n),n):(bn(n),null)}if(bn(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),qe(n),null;case 4:return Hn(),e===null&&sf(n.stateNode.containerInfo),qe(n),null;case 10:return En(n.type),qe(n),null;case 19:if(P(Je),u=n.memoizedState,u===null)return qe(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)ja(u,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,ja(u,!1),e=f.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)cp(a,e),a=a.sibling;return H(Je,Je.current&1|2),n.child}e=e.sibling}u.tail!==null&&an()>Bl&&(n.flags|=128,l=!0,ja(u,!1),n.lanes=4194304)}else{if(!l)if(e=Ml(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),ja(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ce)return qe(n),null}else 2*an()-u.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,l=!0,ja(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=an(),n.sibling=null,e=Je.current,H(Je,l?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return bn(n),ac(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&P(Pi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),En(Ze),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function nS(e,n){switch(Yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return En(Ze),Hn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Kr(n),null;case 13:if(bn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Aa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return P(Je),null;case 4:return Hn(),null;case 10:return En(n.type),null;case 22:case 23:return bn(n),ac(),e!==null&&P(Pi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return En(Ze),null;case 25:return null;default:return null}}function z_(e,n){switch(Yu(n),n.tag){case 3:En(Ze),Hn();break;case 26:case 27:case 5:Kr(n);break;case 4:Hn();break;case 13:bn(n);break;case 19:P(Je);break;case 10:En(n.type);break;case 22:case 23:bn(n),ac(),e!==null&&P(Pi);break;case 24:En(Ze)}}function Va(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var f=a.create,p=a.inst;l=f(),p.destroy=l}a=a.next}while(a!==u)}}catch(m){ke(n,n.return,m)}}function Xn(e,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var p=l.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,u=n;var y=a,A=m;try{A()}catch(D){ke(u,y,D)}}}l=l.next}while(l!==f)}}catch(D){ke(n,n.return,D)}}function H_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{wp(n,a)}catch(l){ke(e,e.return,l)}}}function P_(e,n,a){a.props=qi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ke(e,n,l)}}function Ga(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){ke(e,n,u)}}function on(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){ke(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(e,n,u)}else a.current=null}function B_(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){ke(e,e.return,u)}}function xc(e,n,a){try{var l=e.stateNode;TS(l,e.type,a,n),l[St]=n}catch(u){ke(e,e.return,u)}}function q_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ii(e.type)||e.tag===4}function kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||q_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ii(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lc(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(l!==4&&(l===27&&ii(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Lc(e,n,a),e=e.sibling;e!==null;)Lc(e,n,a),e=e.sibling}function Hl(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&ii(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hl(e,n,a),e=e.sibling;e!==null;)Hl(e,n,a),e=e.sibling}function j_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ut(n,l,a),n[ht]=e,n[St]=a}catch(f){ke(e,e.return,f)}}var wn=!1,Ke=!1,Uc=!1,V_=typeof WeakSet=="function"?WeakSet:Set,it=null;function iS(e,n){if(e=e.containerInfo,lf=no,e=ep(e),ku(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var p=0,m=-1,y=-1,A=0,D=0,M=e,R=null;t:for(;;){for(var N;M!==a||u!==0&&M.nodeType!==3||(m=p+u),M!==f||l!==0&&M.nodeType!==3||(y=p+l),M.nodeType===3&&(p+=M.nodeValue.length),(N=M.firstChild)!==null;)R=M,M=N;for(;;){if(M===e)break t;if(R===a&&++A===u&&(m=p),R===f&&++D===l&&(y=p),(N=M.nextSibling)!==null)break;M=R,R=M.parentNode}M=N}a=m===-1||y===-1?null:{start:m,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(of={focusedElem:e,selectionRange:a},no=!1,it=n;it!==null;)if(n=it,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,it=e;else for(;it!==null;){switch(n=it,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var J=qi(a.type,u,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(J,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(Q){ke(a,a.return,Q)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,it=e;break}it=n.return}}function G_(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wn(e,a),l&4&&Va(5,a);break;case 1:if(Wn(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){ke(a,a.return,p)}else{var u=qi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ke(a,a.return,p)}}l&64&&H_(a),l&512&&Ga(a,a.return);break;case 3:if(Wn(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wp(e,n)}catch(p){ke(a,a.return,p)}}break;case 27:n===null&&l&4&&j_(a);case 26:case 5:Wn(e,a),n===null&&l&4&&B_(a),l&512&&Ga(a,a.return);break;case 12:Wn(e,a);break;case 13:Wn(e,a),l&4&&Q_(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=hS.bind(null,a),DS(e,a))));break;case 22:if(l=a.memoizedState!==null||wn,!l){n=n!==null&&n.memoizedState!==null||Ke,u=wn;var f=Ke;wn=l,(Ke=n)&&!f?Zn(e,a,(a.subtreeFlags&8772)!==0):Wn(e,a),wn=u,Ke=f}break;case 30:break;default:Wn(e,a)}}function Y_(e){var n=e.alternate;n!==null&&(e.alternate=null,Y_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&_u(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Ct=!1;function An(e,n,a){for(a=a.child;a!==null;)F_(e,n,a),a=a.sibling}function F_(e,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(fa,a)}catch{}switch(a.tag){case 26:Ke||on(a,n),An(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||on(a,n);var l=Pe,u=Ct;ii(a.type)&&(Pe=a.stateNode,Ct=!1),An(e,n,a),$a(a.stateNode),Pe=l,Ct=u;break;case 5:Ke||on(a,n);case 6:if(l=Pe,u=Ct,Pe=null,An(e,n,a),Pe=l,Ct=u,Pe!==null)if(Ct)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(a.stateNode)}catch(f){ke(a,n,f)}else try{Pe.removeChild(a.stateNode)}catch(f){ke(a,n,f)}break;case 18:Pe!==null&&(Ct?(e=Pe,kg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),lr(e)):kg(Pe,a.stateNode));break;case 4:l=Pe,u=Ct,Pe=a.stateNode.containerInfo,Ct=!0,An(e,n,a),Pe=l,Ct=u;break;case 0:case 11:case 14:case 15:Ke||Xn(2,a,n),Ke||Xn(4,a,n),An(e,n,a);break;case 1:Ke||(on(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&P_(a,n,l)),An(e,n,a);break;case 21:An(e,n,a);break;case 22:Ke=(l=Ke)||a.memoizedState!==null,An(e,n,a),Ke=l;break;default:An(e,n,a)}}function Q_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lr(e)}catch(a){ke(n,n.return,a)}}function sS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new V_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new V_),n;default:throw Error(r(435,e.tag))}}function zc(e,n){var a=sS(e);n.forEach(function(l){var u=dS.bind(null,e,l);a.has(l)||(a.add(l),l.then(u,u))})}function Mt(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=e,p=n,m=p;e:for(;m!==null;){switch(m.tag){case 27:if(ii(m.type)){Pe=m.stateNode,Ct=!1;break e}break;case 5:Pe=m.stateNode,Ct=!1;break e;case 3:case 4:Pe=m.stateNode.containerInfo,Ct=!0;break e}m=m.return}if(Pe===null)throw Error(r(160));F_(f,p,u),Pe=null,Ct=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)K_(n,e),n=n.sibling}var Wt=null;function K_(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mt(n,e),xt(e),l&4&&(Xn(3,e,e.return),Va(3,e),Xn(5,e,e.return));break;case 1:Mt(n,e),xt(e),l&512&&(Ke||a===null||on(a,a.return)),l&64&&wn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Wt;if(Mt(n,e),xt(e),l&512&&(Ke||a===null||on(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[pa]||f[ht]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),ut(f,l,a),f[ht]=e,tt(f),l=f;break e;case"link":var p=jg("link","href",u).get(l+(a.href||""));if(p){for(var m=0;m<p.length;m++)if(f=p[m],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(m,1);break t}}f=u.createElement(l),ut(f,l,a),u.head.appendChild(f);break;case"meta":if(p=jg("meta","content",u).get(l+(a.content||""))){for(m=0;m<p.length;m++)if(f=p[m],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(m,1);break t}}f=u.createElement(l),ut(f,l,a),u.head.appendChild(f);break;default:throw Error(r(468,l))}f[ht]=e,tt(f),l=f}e.stateNode=l}else Vg(u,e.type,e.stateNode);else e.stateNode=qg(u,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?Vg(u,e.type,e.stateNode):qg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&xc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Mt(n,e),xt(e),l&512&&(Ke||a===null||on(a,a.return)),a!==null&&l&4&&xc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Mt(n,e),xt(e),l&512&&(Ke||a===null||on(a,a.return)),e.flags&32){u=e.stateNode;try{fs(u,"")}catch(N){ke(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,xc(e,u,a!==null?a.memoizedProps:u)),l&1024&&(Uc=!0);break;case 6:if(Mt(n,e),xt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(N){ke(e,e.return,N)}}break;case 3:if($l=null,u=Wt,Wt=Zl(n.containerInfo),Mt(n,e),Wt=u,xt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(N){ke(e,e.return,N)}Uc&&(Uc=!1,X_(e));break;case 4:l=Wt,Wt=Zl(e.stateNode.containerInfo),Mt(n,e),xt(e),Wt=l;break;case 12:Mt(n,e),xt(e);break;case 13:Mt(n,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vc=an()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zc(e,l)));break;case 22:u=e.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,A=wn,D=Ke;if(wn=A||u,Ke=D||y,Mt(n,e),Ke=D,wn=A,xt(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||y||wn||Ke||ji(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){y=a=n;try{if(f=y.stateNode,u)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=y.stateNode;var M=y.memoizedProps.style,R=M!=null&&M.hasOwnProperty("display")?M.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){ke(y,y.return,N)}}}else if(n.tag===6){if(a===null){y=n;try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(N){ke(y,y.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,zc(e,a))));break;case 19:Mt(n,e),xt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,zc(e,l)));break;case 30:break;case 21:break;default:Mt(n,e),xt(e)}}function xt(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(q_(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=kc(e);Hl(e,f,u);break;case 5:var p=a.stateNode;a.flags&32&&(fs(p,""),a.flags&=-33);var m=kc(e);Hl(e,m,p);break;case 3:case 4:var y=a.stateNode.containerInfo,A=kc(e);Lc(e,A,y);break;default:throw Error(r(161))}}catch(D){ke(e,e.return,D)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function X_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;X_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)G_(e,n.alternate,n),n=n.sibling}function ji(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xn(4,n,n.return),ji(n);break;case 1:on(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&P_(n,n.return,a),ji(n);break;case 27:$a(n.stateNode);case 26:case 5:on(n,n.return),ji(n);break;case 22:n.memoizedState===null&&ji(n);break;case 30:ji(n);break;default:ji(n)}e=e.sibling}}function Zn(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:Zn(u,f,a),Va(4,f);break;case 1:if(Zn(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(A){ke(l,l.return,A)}if(l=f,u=l.updateQueue,u!==null){var m=l.stateNode;try{var y=u.shared.hiddenCallbacks;if(y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<y.length;u++)Cp(y[u],m)}catch(A){ke(l,l.return,A)}}a&&p&64&&H_(f),Ga(f,f.return);break;case 27:j_(f);case 26:case 5:Zn(u,f,a),a&&l===null&&p&4&&B_(f),Ga(f,f.return);break;case 12:Zn(u,f,a);break;case 13:Zn(u,f,a),a&&p&4&&Q_(u,f);break;case 22:f.memoizedState===null&&Zn(u,f,a),Ga(f,f.return);break;case 30:break;default:Zn(u,f,a)}n=n.sibling}}function Hc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Oa(a))}function Pc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Oa(e))}function un(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W_(e,n,a,l),n=n.sibling}function W_(e,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:un(e,n,a,l),u&2048&&Va(9,n);break;case 1:un(e,n,a,l);break;case 3:un(e,n,a,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Oa(e)));break;case 12:if(u&2048){un(e,n,a,l),e=n.stateNode;try{var f=n.memoizedProps,p=f.id,m=f.onPostCommit;typeof m=="function"&&m(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){ke(n,n.return,y)}}else un(e,n,a,l);break;case 13:un(e,n,a,l);break;case 23:break;case 22:f=n.stateNode,p=n.alternate,n.memoizedState!==null?f._visibility&2?un(e,n,a,l):Ya(e,n):f._visibility&2?un(e,n,a,l):(f._visibility|=2,Ds(e,n,a,l,(n.subtreeFlags&10256)!==0)),u&2048&&Hc(p,n);break;case 24:un(e,n,a,l),u&2048&&Pc(n.alternate,n);break;default:un(e,n,a,l)}}function Ds(e,n,a,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,p=n,m=a,y=l,A=p.flags;switch(p.tag){case 0:case 11:case 15:Ds(f,p,m,y,u),Va(8,p);break;case 23:break;case 22:var D=p.stateNode;p.memoizedState!==null?D._visibility&2?Ds(f,p,m,y,u):Ya(f,p):(D._visibility|=2,Ds(f,p,m,y,u)),u&&A&2048&&Hc(p.alternate,p);break;case 24:Ds(f,p,m,y,u),u&&A&2048&&Pc(p.alternate,p);break;default:Ds(f,p,m,y,u)}n=n.sibling}}function Ya(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,u=l.flags;switch(l.tag){case 22:Ya(a,l),u&2048&&Hc(l.alternate,l);break;case 24:Ya(a,l),u&2048&&Pc(l.alternate,l);break;default:Ya(a,l)}n=n.sibling}}var Fa=8192;function Is(e){if(e.subtreeFlags&Fa)for(e=e.child;e!==null;)Z_(e),e=e.sibling}function Z_(e){switch(e.tag){case 26:Is(e),e.flags&Fa&&e.memoizedState!==null&&VS(Wt,e.memoizedState,e.memoizedProps);break;case 5:Is(e);break;case 3:case 4:var n=Wt;Wt=Zl(e.stateNode.containerInfo),Is(e),Wt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Fa,Fa=16777216,Is(e),Fa=n):Is(e));break;default:Is(e)}}function J_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Qa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];it=l,eg(l,e)}J_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$_(e),e=e.sibling}function $_(e){switch(e.tag){case 0:case 11:case 15:Qa(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Qa(e);break;case 12:Qa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):Qa(e);break;default:Qa(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];it=l,eg(l,e)}J_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xn(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function eg(e,n){for(;it!==null;){var a=it;switch(a.tag){case 0:case 11:case 15:Xn(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Oa(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,it=l;else e:for(a=e;it!==null;){l=it;var u=l.sibling,f=l.return;if(Y_(l),l===a){it=null;break e}if(u!==null){u.return=f,it=u;break e}it=f}}}var aS={getCacheForType:function(e){var n=dt(Ze),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},rS=typeof WeakMap=="function"?WeakMap:Map,Re=0,Le=null,ce=null,me=0,Ne=0,kt=null,Jn=!1,Ms=!1,Bc=!1,Rn=0,Ge=0,$n=0,Vi=0,qc=0,Gt=0,xs=0,Ka=null,wt=null,jc=!1,Vc=0,Bl=1/0,ql=null,ei=null,ot=0,ti=null,ks=null,Ls=0,Gc=0,Yc=null,tg=null,Xa=0,Fc=null;function Lt(){if((Re&2)!==0&&me!==0)return me&-me;if(O.T!==null){var e=bs;return e!==0?e:$c()}return md()}function ng(){Gt===0&&(Gt=(me&536870912)===0||Ce?dd():536870912);var e=Vt.current;return e!==null&&(e.flags|=32),Gt}function Ut(e,n,a){(e===Le&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Us(e,0),ni(e,me,Gt,!1)),da(e,a),((Re&2)===0||e!==Le)&&(e===Le&&((Re&2)===0&&(Vi|=a),Ge===4&&ni(e,me,Gt,!1)),cn(e))}function ig(e,n,a){if((Re&6)!==0)throw Error(r(327));var l=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ha(e,n),u=l?uS(e,n):Xc(e,n,!0),f=l;do{if(u===0){Ms&&!l&&ni(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!lS(a)){u=Xc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var m=e;u=Ka;var y=m.current.memoizedState.isDehydrated;if(y&&(Us(m,p).flags|=256),p=Xc(m,p,!1),p!==2){if(Bc&&!y){m.errorRecoveryDisabledLanes|=f,Vi|=f,u=4;break e}f=wt,wt=u,f!==null&&(wt===null?wt=f:wt.push.apply(wt,f))}u=p}if(f=!1,u!==2)continue}}if(u===1){Us(e,0),ni(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ni(l,n,Gt,!Jn);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vc+300-an(),10<u)){if(ni(l,n,Gt,!Jn),Jr(l,0,!0)!==0)break e;l.timeoutHandle=Mg(sg.bind(null,l,a,wt,ql,jc,n,Gt,Vi,xs,Jn,f,2,-0,0),u);break e}sg(l,a,wt,ql,jc,n,Gt,Vi,xs,Jn,f,0,-0,0)}}break}while(!0);cn(e)}function sg(e,n,a,l,u,f,p,m,y,A,D,M,R,N){if(e.timeoutHandle=-1,M=n.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(nr={stylesheets:null,count:0,unsuspend:jS},Z_(n),M=GS(),M!==null)){e.cancelPendingCommit=M(fg.bind(null,e,n,f,a,l,u,p,m,y,D,1,R,N)),ni(e,f,p,!A);return}fg(e,n,f,a,l,u,p,m,y)}function lS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!Dt(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ni(e,n,a,l){n&=~qc,n&=~Vi,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),p=1<<f;l[f]=-1,u&=~p}a!==0&&_d(e,a,n)}function jl(){return(Re&6)===0?(Wa(0),!1):!0}function Qc(){if(ce!==null){if(Ne===0)var e=ce.return;else e=ce,yn=zi=null,cc(e),Ns=null,Ba=0,e=ce;for(;e!==null;)z_(e.alternate,e),e=e.return;ce=null}}function Us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,wS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qc(),Le=e,ce=a=gn(e.current,null),me=n,Ne=0,kt=null,Jn=!1,Ms=ha(e,n),Bc=!1,xs=Gt=qc=Vi=$n=Ge=0,wt=Ka=null,jc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Ot(l),f=1<<u;n|=e[u],l&=~f}return Rn=n,cl(),a}function ag(e,n){ae=null,O.H=Ol,n===Ia||n===yl?(n=bp(),Ne=3):n===yp?(n=bp(),Ne=4):Ne=n===T_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kt=n,ce===null&&(Ge=1,kl(e,Pt(n,e.current)))}function rg(){var e=O.H;return O.H=Ol,e===null?Ol:e}function lg(){var e=O.A;return O.A=aS,e}function Kc(){Ge=4,Jn||(me&4194048)!==me&&Vt.current!==null||(Ms=!0),($n&134217727)===0&&(Vi&134217727)===0||Le===null||ni(Le,me,Gt,!1)}function Xc(e,n,a){var l=Re;Re|=2;var u=rg(),f=lg();(Le!==e||me!==n)&&(ql=null,Us(e,n)),n=!1;var p=Ge;e:do try{if(Ne!==0&&ce!==null){var m=ce,y=kt;switch(Ne){case 8:Qc(),p=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(n=!0);var A=Ne;if(Ne=0,kt=null,zs(e,m,y,A),a&&Ms){p=0;break e}break;default:A=Ne,Ne=0,kt=null,zs(e,m,y,A)}}oS(),p=Ge;break}catch(D){ag(e,D)}while(!0);return n&&e.shellSuspendCounter++,yn=zi=null,Re=l,O.H=u,O.A=f,ce===null&&(Le=null,me=0,cl()),p}function oS(){for(;ce!==null;)og(ce)}function uS(e,n){var a=Re;Re|=2;var l=rg(),u=lg();Le!==e||me!==n?(ql=null,Bl=an()+500,Us(e,n)):Ms=ha(e,n);e:do try{if(Ne!==0&&ce!==null){n=ce;var f=kt;t:switch(Ne){case 1:Ne=0,kt=null,zs(e,n,f,1);break;case 2:case 9:if(Ep(f)){Ne=0,kt=null,ug(n);break}n=function(){Ne!==2&&Ne!==9||Le!==e||(Ne=7),cn(e)},f.then(n,n);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Ep(f)?(Ne=0,kt=null,ug(n)):(Ne=0,kt=null,zs(e,n,f,7));break;case 5:var p=null;switch(ce.tag){case 26:p=ce.memoizedState;case 5:case 27:var m=ce;if(!p||Gg(p)){Ne=0,kt=null;var y=m.sibling;if(y!==null)ce=y;else{var A=m.return;A!==null?(ce=A,Vl(A)):ce=null}break t}}Ne=0,kt=null,zs(e,n,f,5);break;case 6:Ne=0,kt=null,zs(e,n,f,6);break;case 8:Qc(),Ge=6;break e;default:throw Error(r(462))}}cS();break}catch(D){ag(e,D)}while(!0);return yn=zi=null,O.H=l,O.A=u,Re=a,ce!==null?0:(Le=null,me=0,cl(),Ge)}function cS(){for(;ce!==null&&!M0();)og(ce)}function og(e){var n=L_(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,n===null?Vl(e):ce=n}function ug(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=O_(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=O_(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:cc(n);default:z_(a,n),n=ce=cp(n,Rn),n=L_(a,n,Rn)}e.memoizedProps=e.pendingProps,n===null?Vl(e):ce=n}function zs(e,n,a,l){yn=zi=null,cc(n),Ns=null,Ba=0;var u=n.return;try{if($E(e,u,n,a,me)){Ge=1,kl(e,Pt(a,e.current)),ce=null;return}}catch(f){if(u!==null)throw ce=u,f;Ge=1,kl(e,Pt(a,e.current)),ce=null;return}n.flags&32768?(Ce||l===1?e=!0:Ms||(me&536870912)!==0?e=!1:(Jn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),cg(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){cg(n,Jn);return}e=n.return;var a=tS(n.alternate,n,Rn);if(a!==null){ce=a;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=e}while(n!==null);Ge===0&&(Ge=5)}function cg(e,n){do{var a=nS(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);Ge=6,ce=null}function fg(e,n,a,l,u,f,p,m,y){e.cancelPendingCommit=null;do Gl();while(ot!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Pu,j0(e,a,f,p,m,y),e===Le&&(ce=Le=null,me=0),ks=n,ti=e,Ls=a,Gc=f,Yc=u,tg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pS(Xr,function(){return gg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,u=z.p,z.p=2,p=Re,Re|=4;try{iS(e,n,a)}finally{Re=p,z.p=u,O.T=l}}ot=1,hg(),dg(),pg()}}function hg(){if(ot===1){ot=0;var e=ti,n=ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var l=z.p;z.p=2;var u=Re;Re|=4;try{K_(n,e);var f=of,p=ep(e.containerInfo),m=f.focusedElem,y=f.selectionRange;if(p!==m&&m&&m.ownerDocument&&$d(m.ownerDocument.documentElement,m)){if(y!==null&&ku(m)){var A=y.start,D=y.end;if(D===void 0&&(D=A),"selectionStart"in m)m.selectionStart=A,m.selectionEnd=Math.min(D,m.value.length);else{var M=m.ownerDocument||document,R=M&&M.defaultView||window;if(R.getSelection){var N=R.getSelection(),J=m.textContent.length,Q=Math.min(y.start,J),Ie=y.end===void 0?Q:Math.min(y.end,J);!N.extend&&Q>Ie&&(p=Ie,Ie=Q,Q=p);var C=Jd(m,Q),T=Jd(m,Ie);if(C&&T&&(N.rangeCount!==1||N.anchorNode!==C.node||N.anchorOffset!==C.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var w=M.createRange();w.setStart(C.node,C.offset),N.removeAllRanges(),Q>Ie?(N.addRange(w),N.extend(T.node,T.offset)):(w.setEnd(T.node,T.offset),N.addRange(w))}}}}for(M=[],N=m;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<M.length;m++){var I=M[m];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}no=!!lf,of=lf=null}finally{Re=u,z.p=l,O.T=a}}e.current=n,ot=2}}function dg(){if(ot===2){ot=0;var e=ti,n=ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var l=z.p;z.p=2;var u=Re;Re|=4;try{G_(e,n.alternate,n)}finally{Re=u,z.p=l,O.T=a}}ot=3}}function pg(){if(ot===4||ot===3){ot=0,x0();var e=ti,n=ks,a=Ls,l=tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ot=5:(ot=0,ks=ti=null,_g(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ei=null),du(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(fa,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,u=z.p,z.p=2,O.T=null;try{for(var f=e.onRecoverableError,p=0;p<l.length;p++){var m=l[p];f(m.value,{componentStack:m.stack})}}finally{O.T=n,z.p=u}}(Ls&3)!==0&&Gl(),cn(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Fc?Xa++:(Xa=0,Fc=e):Xa=0,Wa(0)}}function _g(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Oa(n)))}function Gl(e){return hg(),dg(),pg(),gg()}function gg(){if(ot!==5)return!1;var e=ti,n=Gc;Gc=0;var a=du(Ls),l=O.T,u=z.p;try{z.p=32>a?32:a,O.T=null,a=Yc,Yc=null;var f=ti,p=Ls;if(ot=0,ks=ti=null,Ls=0,(Re&6)!==0)throw Error(r(331));var m=Re;if(Re|=4,$_(f.current),W_(f,f.current,p,a),Re=m,Wa(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(fa,f)}catch{}return!0}finally{z.p=u,O.T=l,_g(e,n)}}function mg(e,n,a){n=Pt(a,n),n=Cc(e.stateNode,n,2),e=Yn(e,n,2),e!==null&&(da(e,2),cn(e))}function ke(e,n,a){if(e.tag===3)mg(e,e,a);else for(;n!==null;){if(n.tag===3){mg(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ei===null||!ei.has(l))){e=Pt(a,e),a=S_(2),l=Yn(n,a,2),l!==null&&(b_(a,l,n,e),da(l,2),cn(l));break}}n=n.return}}function Wc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new rS;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(Bc=!0,u.add(a),e=fS.bind(null,e,n,a),n.then(e,e))}function fS(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Le===e&&(me&a)===a&&(Ge===4||Ge===3&&(me&62914560)===me&&300>an()-Vc?(Re&2)===0&&Us(e,0):qc|=a,xs===me&&(xs=0)),cn(e)}function vg(e,n){n===0&&(n=pd()),e=vs(e,n),e!==null&&(da(e,n),cn(e))}function hS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),vg(e,a)}function dS(e,n){var a=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),vg(e,a)}function pS(e,n){return uu(e,n)}var Yl=null,Hs=null,Zc=!1,Fl=!1,Jc=!1,Gi=0;function cn(e){e!==Hs&&e.next===null&&(Hs===null?Yl=Hs=e:Hs=Hs.next=e),Fl=!0,Zc||(Zc=!0,gS())}function Wa(e,n){if(!Jc&&Fl){Jc=!0;do for(var a=!1,l=Yl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var p=l.suspendedLanes,m=l.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(p&~m),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(l,f))}else f=me,f=Jr(l,l===Le?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||ha(l,f)||(a=!0,bg(l,f));l=l.next}while(a);Jc=!1}}function _S(){yg()}function yg(){Fl=Zc=!1;var e=0;Gi!==0&&(CS()&&(e=Gi),Gi=0);for(var n=an(),a=null,l=Yl;l!==null;){var u=l.next,f=Eg(l,n);f===0?(l.next=null,a===null?Yl=u:a.next=u,u===null&&(Hs=a)):(a=l,(e!==0||(f&3)!==0)&&(Fl=!0)),l=u}Wa(e)}function Eg(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var p=31-Ot(f),m=1<<p,y=u[p];y===-1?((m&a)===0||(m&l)!==0)&&(u[p]=q0(m,n)):y<=n&&(e.expiredLanes|=m),f&=~m}if(n=Le,a=me,a=Jr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&cu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ha(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&cu(l),du(a)){case 2:case 8:a=fd;break;case 32:a=Xr;break;case 268435456:a=hd;break;default:a=Xr}return l=Sg.bind(null,e),a=uu(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&cu(l),e.callbackPriority=2,e.callbackNode=null,2}function Sg(e,n){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var l=me;return l=Jr(e,e===Le?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ig(e,l,n),Eg(e,an()),e.callbackNode!=null&&e.callbackNode===a?Sg.bind(null,e):null)}function bg(e,n){if(Gl())return null;ig(e,n,!0)}function gS(){AS(function(){(Re&6)!==0?uu(cd,_S):yg()})}function $c(){return Gi===0&&(Gi=dd()),Gi}function Tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Cg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function mS(e,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var f=Tg((u[St]||null).action),p=l.submitter;p&&(n=(n=p[St]||null)?Tg(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var m=new ll("action","action",null,l,u);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gi!==0){var y=p?Cg(u,p):new FormData(u);yc(a,{pending:!0,data:y,method:u.method,action:f},null,y)}}else typeof f=="function"&&(m.preventDefault(),y=p?Cg(u,p):new FormData(u),yc(a,{pending:!0,data:y,method:u.method,action:f},f,y))},currentTarget:u}]})}}for(var ef=0;ef<Hu.length;ef++){var tf=Hu[ef],vS=tf.toLowerCase(),yS=tf[0].toUpperCase()+tf.slice(1);Xt(vS,"on"+yS)}Xt(ip,"onAnimationEnd"),Xt(sp,"onAnimationIteration"),Xt(ap,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(UE,"onTransitionRun"),Xt(zE,"onTransitionStart"),Xt(HE,"onTransitionCancel"),Xt(rp,"onTransitionEnd"),os("onMouseEnter",["mouseout","mouseover"]),os("onMouseLeave",["mouseout","mouseover"]),os("onPointerEnter",["pointerout","pointerover"]),os("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Za));function wg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var p=l.length-1;0<=p;p--){var m=l[p],y=m.instance,A=m.currentTarget;if(m=m.listener,y!==f&&u.isPropagationStopped())break e;f=m,u.currentTarget=A;try{f(u)}catch(D){xl(D)}u.currentTarget=null,f=y}else for(p=0;p<l.length;p++){if(m=l[p],y=m.instance,A=m.currentTarget,m=m.listener,y!==f&&u.isPropagationStopped())break e;f=m,u.currentTarget=A;try{f(u)}catch(D){xl(D)}u.currentTarget=null,f=y}}}}function fe(e,n){var a=n[pu];a===void 0&&(a=n[pu]=new Set);var l=e+"__bubble";a.has(l)||(Ag(n,e,2,!1),a.add(l))}function nf(e,n,a){var l=0;n&&(l|=4),Ag(a,e,l,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function sf(e){if(!e[Ql]){e[Ql]=!0,yd.forEach(function(a){a!=="selectionchange"&&(ES.has(a)||nf(a,!1,e),nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,nf("selectionchange",!1,n))}}function Ag(e,n,a,l){switch(Wg(n)){case 2:var u=QS;break;case 8:u=KS;break;default:u=vf}a=u.bind(null,n,a,e),u=void 0,!wu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function af(e,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var m=l.stateNode.containerInfo;if(m===u)break;if(p===4)for(p=l.return;p!==null;){var y=p.tag;if((y===3||y===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;m!==null;){if(p=as(m),p===null)return;if(y=p.tag,y===5||y===6||y===26||y===27){l=f=p;continue e}m=m.parentNode}}l=l.return}xd(function(){var A=f,D=Tu(a),M=[];e:{var R=lp.get(e);if(R!==void 0){var N=ll,J=e;switch(e){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":N=pE;break;case"focusin":J="focus",N=Ou;break;case"focusout":J="blur",N=Ou;break;case"beforeblur":case"afterblur":N=Ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=nE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=mE;break;case ip:case sp:case ap:N=aE;break;case rp:N=yE;break;case"scroll":case"scrollend":N=eE;break;case"wheel":N=SE;break;case"copy":case"cut":case"paste":N=lE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Hd;break;case"toggle":case"beforetoggle":N=TE}var Q=(n&4)!==0,Ie=!Q&&(e==="scroll"||e==="scrollend"),C=Q?R!==null?R+"Capture":null:R;Q=[];for(var T=A,w;T!==null;){var I=T;if(w=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||w===null||C===null||(I=ga(T,C),I!=null&&Q.push(Ja(T,I,w))),Ie)break;T=T.return}0<Q.length&&(R=new N(R,J,null,a,D),M.push({event:R,listeners:Q}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&a!==bu&&(J=a.relatedTarget||a.fromElement)&&(as(J)||J[ss]))break e;if((N||R)&&(R=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,N?(J=a.relatedTarget||a.toElement,N=A,J=J?as(J):null,J!==null&&(Ie=c(J),Q=J.tag,J!==Ie||Q!==5&&Q!==27&&Q!==6)&&(J=null)):(N=null,J=A),N!==J)){if(Q=Ud,I="onMouseLeave",C="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Hd,I="onPointerLeave",C="onPointerEnter",T="pointer"),Ie=N==null?R:_a(N),w=J==null?R:_a(J),R=new Q(I,T+"leave",N,a,D),R.target=Ie,R.relatedTarget=w,I=null,as(D)===A&&(Q=new Q(C,T+"enter",J,a,D),Q.target=w,Q.relatedTarget=Ie,I=Q),Ie=I,N&&J)t:{for(Q=N,C=J,T=0,w=Q;w;w=Ps(w))T++;for(w=0,I=C;I;I=Ps(I))w++;for(;0<T-w;)Q=Ps(Q),T--;for(;0<w-T;)C=Ps(C),w--;for(;T--;){if(Q===C||C!==null&&Q===C.alternate)break t;Q=Ps(Q),C=Ps(C)}Q=null}else Q=null;N!==null&&Rg(M,R,N,Q,!1),J!==null&&Ie!==null&&Rg(M,Ie,J,Q,!0)}}e:{if(R=A?_a(A):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var j=Fd;else if(Gd(R))if(Qd)j=xE;else{j=IE;var le=DE}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&Su(A.elementType)&&(j=Fd):j=ME;if(j&&(j=j(e,A))){Yd(M,j,a,D);break e}le&&le(e,R,A),e==="focusout"&&A&&R.type==="number"&&A.memoizedProps.value!=null&&Eu(R,"number",R.value)}switch(le=A?_a(A):window,e){case"focusin":(Gd(le)||le.contentEditable==="true")&&(_s=le,Lu=A,Ca=null);break;case"focusout":Ca=Lu=_s=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,tp(M,a,D);break;case"selectionchange":if(LE)break;case"keydown":case"keyup":tp(M,a,D)}var V;if(Iu)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else ps?jd(e,a)&&(K="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(Pd&&a.locale!=="ko"&&(ps||K!=="onCompositionStart"?K==="onCompositionEnd"&&ps&&(V=kd()):(qn=D,Au="value"in qn?qn.value:qn.textContent,ps=!0)),le=Kl(A,K),0<le.length&&(K=new zd(K,e,null,a,D),M.push({event:K,listeners:le}),V?K.data=V:(V=Vd(a),V!==null&&(K.data=V)))),(V=wE?AE(e,a):RE(e,a))&&(K=Kl(A,"onBeforeInput"),0<K.length&&(le=new zd("onBeforeInput","beforeinput",null,a,D),M.push({event:le,listeners:K}),le.data=V)),mS(M,e,A,a,D)}wg(M,n)})}function Ja(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ga(e,a),u!=null&&l.unshift(Ja(e,u,f)),u=ga(e,n),u!=null&&l.push(Ja(e,u,f))),e.tag===3)return l;e=e.return}return[]}function Ps(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rg(e,n,a,l,u){for(var f=n._reactName,p=[];a!==null&&a!==l;){var m=a,y=m.alternate,A=m.stateNode;if(m=m.tag,y!==null&&y===l)break;m!==5&&m!==26&&m!==27||A===null||(y=A,u?(A=ga(a,f),A!=null&&p.unshift(Ja(a,A,y))):u||(A=ga(a,f),A!=null&&p.push(Ja(a,A,y)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var SS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function Ng(e){return(typeof e=="string"?e:""+e).replace(SS,`
`).replace(bS,"")}function Og(e,n){return n=Ng(n),Ng(e)===n}function Xl(){}function De(e,n,a,l,u,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||fs(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&fs(e,""+l);break;case"className":el(e,"class",l);break;case"tabIndex":el(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":el(e,a,l);break;case"style":Id(e,l,f);break;case"data":if(n!=="object"){el(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=il(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(e,n,"name",u.name,u,null),De(e,n,"formEncType",u.formEncType,u,null),De(e,n,"formMethod",u.formMethod,u,null),De(e,n,"formTarget",u.formTarget,u,null)):(De(e,n,"encType",u.encType,u,null),De(e,n,"method",u.method,u,null),De(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=il(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Xl);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":fe("beforetoggle",e),fe("toggle",e),$r(e,"popover",l);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$r(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=J0.get(a)||a,$r(e,a,l))}}function rf(e,n,a,l,u,f){switch(a){case"style":Id(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?fs(e,l):(typeof l=="number"||typeof l=="bigint")&&fs(e,""+l);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ed.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[St]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):$r(e,a,l)}}}function ut(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var p=a[f];if(p!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(e,n,f,p,a,null)}}u&&De(e,n,"srcSet",a.srcSet,a,null),l&&De(e,n,"src",a.src,a,null);return;case"input":fe("invalid",e);var m=f=p=u=null,y=null,A=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":u=D;break;case"type":p=D;break;case"checked":y=D;break;case"defaultChecked":A=D;break;case"value":f=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,n));break;default:De(e,n,l,D,a,null)}}Rd(e,f,m,y,A,p,u,!1),tl(e);return;case"select":fe("invalid",e),l=p=f=null;for(u in a)if(a.hasOwnProperty(u)&&(m=a[u],m!=null))switch(u){case"value":f=m;break;case"defaultValue":p=m;break;case"multiple":l=m;default:De(e,n,u,m,a,null)}n=f,a=p,e.multiple=!!l,n!=null?cs(e,!!l,n,!1):a!=null&&cs(e,!!l,a,!0);return;case"textarea":fe("invalid",e),f=u=l=null;for(p in a)if(a.hasOwnProperty(p)&&(m=a[p],m!=null))switch(p){case"value":l=m;break;case"defaultValue":u=m;break;case"children":f=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(r(91));break;default:De(e,n,p,m,a,null)}Od(e,l,u,f),tl(e);return;case"option":for(y in a)if(a.hasOwnProperty(y)&&(l=a[y],l!=null))switch(y){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:De(e,n,y,l,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(l=0;l<Za.length;l++)fe(Za[l],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(l=a[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(e,n,A,l,a,null)}return;default:if(Su(n)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&rf(e,n,D,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&De(e,n,m,l,a,null))}function TS(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,p=null,m=null,y=null,A=null,D=null;for(N in a){var M=a[N];if(a.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=M;default:l.hasOwnProperty(N)||De(e,n,N,null,l,M)}}for(var R in l){var N=l[R];if(M=a[R],l.hasOwnProperty(R)&&(N!=null||M!=null))switch(R){case"type":f=N;break;case"name":u=N;break;case"checked":A=N;break;case"defaultChecked":D=N;break;case"value":p=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,n));break;default:N!==M&&De(e,n,R,N,l,M)}}yu(e,p,m,y,A,D,f,u);return;case"select":N=p=m=R=null;for(f in a)if(y=a[f],a.hasOwnProperty(f)&&y!=null)switch(f){case"value":break;case"multiple":N=y;default:l.hasOwnProperty(f)||De(e,n,f,null,l,y)}for(u in l)if(f=l[u],y=a[u],l.hasOwnProperty(u)&&(f!=null||y!=null))switch(u){case"value":R=f;break;case"defaultValue":m=f;break;case"multiple":p=f;default:f!==y&&De(e,n,u,f,l,y)}n=m,a=p,l=N,R!=null?cs(e,!!a,R,!1):!!l!=!!a&&(n!=null?cs(e,!!a,n,!0):cs(e,!!a,a?[]:"",!1));return;case"textarea":N=R=null;for(m in a)if(u=a[m],a.hasOwnProperty(m)&&u!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:De(e,n,m,null,l,u)}for(p in l)if(u=l[p],f=a[p],l.hasOwnProperty(p)&&(u!=null||f!=null))switch(p){case"value":R=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&De(e,n,p,u,l,f)}Nd(e,R,N);return;case"option":for(var J in a)if(R=a[J],a.hasOwnProperty(J)&&R!=null&&!l.hasOwnProperty(J))switch(J){case"selected":e.selected=!1;break;default:De(e,n,J,null,l,R)}for(y in l)if(R=l[y],N=a[y],l.hasOwnProperty(y)&&R!==N&&(R!=null||N!=null))switch(y){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:De(e,n,y,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in a)R=a[Q],a.hasOwnProperty(Q)&&R!=null&&!l.hasOwnProperty(Q)&&De(e,n,Q,null,l,R);for(A in l)if(R=l[A],N=a[A],l.hasOwnProperty(A)&&R!==N&&(R!=null||N!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,n));break;default:De(e,n,A,R,l,N)}return;default:if(Su(n)){for(var Ie in a)R=a[Ie],a.hasOwnProperty(Ie)&&R!==void 0&&!l.hasOwnProperty(Ie)&&rf(e,n,Ie,void 0,l,R);for(D in l)R=l[D],N=a[D],!l.hasOwnProperty(D)||R===N||R===void 0&&N===void 0||rf(e,n,D,R,l,N);return}}for(var C in a)R=a[C],a.hasOwnProperty(C)&&R!=null&&!l.hasOwnProperty(C)&&De(e,n,C,null,l,R);for(M in l)R=l[M],N=a[M],!l.hasOwnProperty(M)||R===N||R==null&&N==null||De(e,n,M,R,l,N)}var lf=null,of=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function Dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function uf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cf=null;function CS(){var e=window.event;return e&&e.type==="popstate"?e===cf?!1:(cf=e,!0):(cf=null,!1)}var Mg=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(e){return xg.resolve(null).then(e).catch(RS)}:Mg;function RS(e){setTimeout(function(){throw e})}function ii(e){return e==="head"}function kg(e,n){var a=n,l=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<l&&8>l){a=l;var p=e.ownerDocument;if(a&1&&$a(p.documentElement),a&2&&$a(p.body),a&4)for(a=p.head,$a(a),p=a.firstChild;p;){var m=p.nextSibling,y=p.nodeName;p[pa]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=m}}if(u===0){e.removeChild(f),lr(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:l=a.charCodeAt(0)-48;else l=0;a=f}while(a);lr(n)}function ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ff(a),_u(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function NS(e,n,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[pa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function OS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Zt(e.nextSibling),e===null))return null;return e}function hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function DS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Zt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var df=null;function Lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Ug(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function $a(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);_u(e)}var Yt=new Map,zg=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=z.d;z.d={f:IS,r:MS,D:xS,C:kS,L:LS,m:US,X:HS,S:zS,M:PS};function IS(){var e=Nn.f(),n=jl();return e||n}function MS(e){var n=rs(e);n!==null&&n.tag===5&&n.type==="form"?i_(n):Nn.r(e)}var Bs=typeof document>"u"?null:document;function Hg(e,n,a){var l=Bs;if(l&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),zg.has(u)||(zg.add(u),e={rel:e,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),ut(n,"link",e),tt(n),l.head.appendChild(n)))}}function xS(e){Nn.D(e),Hg("dns-prefetch",e,null)}function kS(e,n){Nn.C(e,n),Hg("preconnect",e,n)}function LS(e,n,a){Nn.L(e,n,a);var l=Bs;if(l&&e&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(e)+'"]';var f=u;switch(n){case"style":f=qs(e);break;case"script":f=js(e)}Yt.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Yt.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(er(f))||n==="script"&&l.querySelector(tr(f))||(n=l.createElement("link"),ut(n,"link",e),tt(n),l.head.appendChild(n)))}}function US(e,n){Nn.m(e,n);var a=Bs;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=js(e)}if(!Yt.has(f)&&(e=v({rel:"modulepreload",href:e},n),Yt.set(f,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(tr(f)))return}l=a.createElement("link"),ut(l,"link",e),tt(l),a.head.appendChild(l)}}}function zS(e,n,a){Nn.S(e,n,a);var l=Bs;if(l&&e){var u=ls(l).hoistableStyles,f=qs(e);n=n||"default";var p=u.get(f);if(!p){var m={loading:0,preload:null};if(p=l.querySelector(er(f)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Yt.get(f))&&pf(e,a);var y=p=l.createElement("link");tt(y),ut(y,"link",e),y._p=new Promise(function(A,D){y.onload=A,y.onerror=D}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Jl(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:m},u.set(f,p)}}}function HS(e,n){Nn.X(e,n);var a=Bs;if(a&&e){var l=ls(a).hoistableScripts,u=js(e),f=l.get(u);f||(f=a.querySelector(tr(u)),f||(e=v({src:e,async:!0},n),(n=Yt.get(u))&&_f(e,n),f=a.createElement("script"),tt(f),ut(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function PS(e,n){Nn.M(e,n);var a=Bs;if(a&&e){var l=ls(a).hoistableScripts,u=js(e),f=l.get(u);f||(f=a.querySelector(tr(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=Yt.get(u))&&_f(e,n),f=a.createElement("script"),tt(f),ut(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function Pg(e,n,a,l){var u=(u=ne.current)?Zl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=qs(a.href),a=ls(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=qs(a.href);var f=ls(u).hoistableStyles,p=f.get(e);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,p),(f=u.querySelector(er(e)))&&!f._p&&(p.instance=f,p.state.loading=5),Yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yt.set(e,a),f||BS(u,e,a,p.state))),n&&l===null)throw Error(r(528,""));return p}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=js(a),a=ls(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function qs(e){return'href="'+Ht(e)+'"'}function er(e){return'link[rel="stylesheet"]['+e+"]"}function Bg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function BS(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ut(n,"link",a),tt(n),e.head.appendChild(n))}function js(e){return'[src="'+Ht(e)+'"]'}function tr(e){return"script[async]"+e}function qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(l)return n.instance=l,tt(l),l;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),tt(l),ut(l,"style",u),Jl(l,a.precedence,e),n.instance=l;case"stylesheet":u=qs(a.href);var f=e.querySelector(er(u));if(f)return n.state.loading|=4,n.instance=f,tt(f),f;l=Bg(a),(u=Yt.get(u))&&pf(l,u),f=(e.ownerDocument||e).createElement("link"),tt(f);var p=f;return p._p=new Promise(function(m,y){p.onload=m,p.onerror=y}),ut(f,"link",l),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=js(a.src),(u=e.querySelector(tr(f)))?(n.instance=u,tt(u),u):(l=a,(u=Yt.get(f))&&(l=v({},a),_f(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),tt(u),ut(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Jl(l,a.precedence,e));return n.instance}function Jl(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,p=0;p<l.length;p++){var m=l[p];if(m.dataset.precedence===n)f=m;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function _f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function jg(e,n,a){if($l===null){var l=new Map,u=$l=new Map;u.set(a,l)}else u=$l,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[pa]||f[ht]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=e+p;var m=l.get(p);m?m.push(f):l.set(p,[f])}}return l}function Vg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function qS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nr=null;function jS(){}function VS(e,n,a){if(nr===null)throw Error(r(475));var l=nr;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=qs(a.href),f=e.querySelector(er(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=eo.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,tt(f);return}f=e.ownerDocument||e,a=Bg(a),(u=Yt.get(u))&&pf(a,u),f=f.createElement("link"),tt(f);var p=f;p._p=new Promise(function(m,y){p.onload=m,p.onerror=y}),ut(f,"link",a),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=eo.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function GS(){if(nr===null)throw Error(r(475));var e=nr;return e.stylesheets&&e.count===0&&gf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&gf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function eo(){if(this.count--,this.count===0){if(this.stylesheets)gf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var to=null;function gf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,to=new Map,n.forEach(YS,e),to=null,eo.call(e))}function YS(e,n){if(!(n.state.loading&4)){var a=to.get(e);if(a)var l=a.get(null);else{a=new Map,to.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var p=u[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}u=n.instance,p=u.getAttribute("data-precedence"),f=a.get(p)||l,f===l&&a.set(null,u),a.set(p,u),this.count++,l=eo.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ir={$$typeof:re,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function FS(e,n,a,l,u,f,p,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.hiddenUpdates=fu(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Yg(e,n,a,l,u,f,p,m,y,A,D,M){return e=new FS(e,n,a,p,m,y,A,M),n=1,f===!0&&(n|=24),f=It(3,null,null,n),e.current=f,f.stateNode=e,n=Wu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},ec(f),e}function Fg(e){return e?(e=ys,e):ys}function Qg(e,n,a,l,u,f){u=Fg(u),l.context===null?l.context=u:l.pendingContext=u,l=Gn(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Yn(e,l,n),a!==null&&(Ut(a,e,n),xa(a,e,n))}function Kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function mf(e,n){Kg(e,n),(e=e.alternate)&&Kg(e,n)}function Xg(e){if(e.tag===13){var n=vs(e,67108864);n!==null&&Ut(n,e,67108864),mf(e,67108864)}}var no=!0;function QS(e,n,a,l){var u=O.T;O.T=null;var f=z.p;try{z.p=2,vf(e,n,a,l)}finally{z.p=f,O.T=u}}function KS(e,n,a,l){var u=O.T;O.T=null;var f=z.p;try{z.p=8,vf(e,n,a,l)}finally{z.p=f,O.T=u}}function vf(e,n,a,l){if(no){var u=yf(l);if(u===null)af(e,n,l,io,a),Zg(e,l);else if(WS(u,e,n,a,l))l.stopPropagation();else if(Zg(e,l),n&4&&-1<XS.indexOf(e)){for(;u!==null;){var f=rs(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=Ri(f.pendingLanes);if(p!==0){var m=f;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var y=1<<31-Ot(p);m.entanglements[1]|=y,p&=~y}cn(f),(Re&6)===0&&(Bl=an()+500,Wa(0))}}break;case 13:m=vs(f,2),m!==null&&Ut(m,f,2),jl(),mf(f,2)}if(f=yf(l),f===null&&af(e,n,l,io,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else af(e,n,l,null,a)}}function yf(e){return e=Tu(e),Ef(e)}var io=null;function Ef(e){if(io=null,e=as(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return io=e,null}function Wg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k0()){case cd:return 2;case fd:return 8;case Xr:case L0:return 32;case hd:return 268435456;default:return 32}default:return 32}}var Sf=!1,si=null,ai=null,ri=null,sr=new Map,ar=new Map,li=[],XS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(e,n){switch(e){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":sr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(n.pointerId)}}function rr(e,n,a,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rs(n),n!==null&&Xg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function WS(e,n,a,l,u){switch(n){case"focusin":return si=rr(si,e,n,a,l,u),!0;case"dragenter":return ai=rr(ai,e,n,a,l,u),!0;case"mouseover":return ri=rr(ri,e,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return sr.set(f,rr(sr.get(f)||null,e,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,ar.set(f,rr(ar.get(f)||null,e,n,a,l,u)),!0}return!1}function Jg(e){var n=as(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,V0(e.priority,function(){if(a.tag===13){var l=Lt();l=hu(l);var u=vs(a,l);u!==null&&Ut(u,a,l),mf(a,l)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);bu=l,a.target.dispatchEvent(l),bu=null}else return n=rs(a),n!==null&&Xg(n),e.blockedOn=a,!1;n.shift()}return!0}function $g(e,n,a){so(e)&&a.delete(n)}function ZS(){Sf=!1,si!==null&&so(si)&&(si=null),ai!==null&&so(ai)&&(ai=null),ri!==null&&so(ri)&&(ri=null),sr.forEach($g),ar.forEach($g)}function ao(e,n){e.blockedOn===n&&(e.blockedOn=null,Sf||(Sf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ZS)))}var ro=null;function em(e){ro!==e&&(ro=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ro===e&&(ro=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(Ef(l||a)===null)continue;break}var f=rs(a);f!==null&&(e.splice(n,3),n-=3,yc(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function lr(e){function n(y){return ao(y,e)}si!==null&&ao(si,e),ai!==null&&ao(ai,e),ri!==null&&ao(ri,e),sr.forEach(n),ar.forEach(n);for(var a=0;a<li.length;a++){var l=li[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<li.length&&(a=li[0],a.blockedOn===null);)Jg(a),a.blockedOn===null&&li.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],p=u[St]||null;if(typeof f=="function")p||em(a);else if(p){var m=null;if(f&&f.hasAttribute("formAction")){if(u=f,p=f[St]||null)m=p.formAction;else if(Ef(u)!==null)continue}else m=p.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),em(a)}}}function bf(e){this._internalRoot=e}lo.prototype.render=bf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=Lt();Qg(a,l,e,n,null,null)},lo.prototype.unmount=bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qg(e.current,2,null,e,null,null),jl(),n[ss]=null}};function lo(e){this._internalRoot=e}lo.prototype.unstable_scheduleHydration=function(e){if(e){var n=md();e={blockedOn:null,target:e,priority:n};for(var a=0;a<li.length&&n!==0&&n<li[a].priority;a++);li.splice(a,0,e),a===0&&Jg(e)}};var tm=t.version;if(tm!=="19.1.0")throw Error(r(527,tm,"19.1.0"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=_(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var JS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{fa=oo.inject(JS),Nt=oo}catch{}}return ur.createRoot=function(e,n){if(!o(e))throw Error(r(299));var a=!1,l="",u=m_,f=v_,p=y_,m=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks)),n=Yg(e,1,!1,null,null,a,l,u,f,p,m,null),e[ss]=n.current,sf(e),new bf(n)},ur.hydrateRoot=function(e,n,a){if(!o(e))throw Error(r(299));var l=!1,u="",f=m_,p=v_,m=y_,y=null,A=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(y=a.unstable_transitionCallbacks),a.formState!==void 0&&(A=a.formState)),n=Yg(e,1,!0,n,a??null,l,u,f,p,m,y,A),n.context=Fg(null),a=n.current,l=Lt(),l=hu(l),u=Gn(l),u.callback=null,Yn(a,u,l),a=l,n.current.lanes=a,da(n,a),cn(n),e[ss]=n.current,sf(e),new lo(n)},ur.version="19.1.0",ur}var fm;function ub(){if(fm)return wf.exports;fm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),wf.exports=ob(),wf.exports}var cb=ub();const fb=bv(cb);function hb({onLogin:s,onRegister:t,error:i,setError:r}){const[o,c]=ve.useState(""),[h,d]=ve.useState(""),_=async()=>{if(!o||!h){r("Please enter both email and password.");return}r(null),await t(o,h)},g=async()=>{if(!o||!h){r("Please enter both email and password.");return}r(null),await s(o,h)};return $.jsx("div",{id:"authSection",children:$.jsxs("div",{className:"auth-horizontal",children:[$.jsx("input",{type:"email",id:"email",placeholder:"Email",value:o,onChange:v=>c(v.target.value),onTouchStart:v=>v.target.focus()}),$.jsx("input",{type:"password",id:"password",placeholder:"Password",value:h,onChange:v=>d(v.target.value),onTouchStart:v=>v.target.focus()}),$.jsx("button",{id:"registerBtn",className:"register-btn",onClick:_,disabled:!o||!h,children:"Register"}),$.jsx("button",{id:"loginBtn",className:"login-btn",onClick:g,disabled:!o||!h,children:"Go"})]})})}function _h({onShowControlPanel:s,onShowSettings:t,onShowCameraPage:i,onLogout:r}){return $.jsxs("div",{className:"token-list-container",style:{position:"fixed",bottom:0,left:0,right:0,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",gap:"2px",zIndex:1e3,justifyContent:"center",padding:"10px 0"},children:[$.jsx("button",{className:"plus-menu-btn small-btn",onClick:s,children:$.jsx("img",{src:"icons/door.png",alt:"Door",className:"button-icon door-icon-large"})}),$.jsx("button",{className:"plus-menu-btn clock-button small-btn",onClick:t,children:$.jsx("img",{src:"icons/clock.webp",alt:"Clock",className:"clock-icon"})}),$.jsx("button",{className:"plus-menu-btn small-btn",onClick:i,children:$.jsx("img",{src:"icons/camera.png",alt:"Camera",className:"button-icon"})}),$.jsx("button",{className:"plus-menu-btn small-btn",onClick:r,children:$.jsx("img",{src:"icons/profile.png",alt:"Profile",className:"button-icon"})})]})}function db({tokens:s,buttonState:t,buttonNames:i,isButtonDataLoaded:r,onToggle:o,onUpdateName:c,onDelete:h,onLogout:d,onShowSettings:_,onToggleButtonPress:g,onShowControlPanel:v,onShowCameraPage:E}){const[S,k]=ve.useState(!1),[x,q]=ve.useState(!1),[B,ee]=ve.useState(!1),pe=ve.useRef([]);ve.useEffect(()=>{pe.current=pe.current.slice(0,s.length)},[s]),ve.useEffect(()=>{const te=()=>{ee(window.innerWidth<=600)};return te(),window.addEventListener("resize",te),()=>window.removeEventListener("resize",te)},[]),ve.useEffect(()=>{const te=x;pe.current.forEach(G=>{G&&(te?(G.classList.remove("vibration-ending"),G.classList.add("is-vibrating")):(G.classList.add("vibration-ending"),setTimeout(()=>{G.classList.remove("is-vibrating"),G.classList.remove("vibrating"),G.classList.remove("vibration-ending")},1e3)))})},[x,B]);const re=te=>{o(te)};return $.jsxs("div",{id:"controlSection",className:"control-panel",children:[$.jsx("div",{className:"token-header",children:$.jsx("button",{className:"plus-button",onClick:()=>q(te=>!te),children:"+"})}),$.jsx("h2",{className:"my-doors-title",children:"My Doors"}),$.jsx("div",{className:"toggle-buttons",children:s.map((te,G)=>t[te]!=="open"&&t[te]!=="closed"?null:$.jsx("div",{className:"toggle-btn-wrapper",children:$.jsx("button",{ref:ge=>pe.current[G]=ge,id:`toggle-${te}`,className:`toggle-btn ${t[te]==="open"?"open":"closed"}`,style:{animationDelay:`${G*.1}s`},onClick:()=>{if(x){const ge=(i==null?void 0:i[te])||`Button ${G+1}`,_e=prompt(`Enter new name for "${ge}"`,ge);_e!=null&&c(te,_e.trim())}else{re(te);const ge=(i==null?void 0:i[te])||`Button ${G+1}`,_e=t[te]==="open"?"closed":"open";g(ge,_e)}},children:$.jsx("span",{className:"toggle-btn-text",children:(i==null?void 0:i[te])||`Button ${G+1}`})})},te))}),$.jsx(_h,{onShowControlPanel:v,onShowSettings:_,onShowCameraPage:E,onLogout:d})]})}function pb({tokens:s,showTokenListContent:t,setShowTokenListContent:i,onLogout:r,onReturnToControlPanel:o,message:c,onShowSettings:h,onShowCameraPage:d}){return $.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#fff0fe",width:"100vw",padding:"0 20px 80px 20px",boxSizing:"border-box",overflowY:"auto"},children:[$.jsx("div",{style:{marginTop:0},children:c.map((_,g)=>$.jsx("p",{className:"message-text",children:_},g))}),$.jsx(_h,{onShowControlPanel:o,onShowSettings:h,onShowCameraPage:d,onLogout:r})]})}const _b=()=>{};var hm={};/**
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
 */const Tv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(s,t){if(!s)throw sa(t)},sa=function(s){return new Error("Firebase Database ("+Tv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const Cv=function(s){const t=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},gb=function(s){const t=[];let i=0,r=0;for(;i<s.length;){const o=s[i++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[i++];t[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[i++],h=s[i++],d=s[i++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|d&63)-65536;t[r++]=String.fromCharCode(55296+(_>>10)),t[r++]=String.fromCharCode(56320+(_&1023))}else{const c=s[i++],h=s[i++];t[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const c=s[o],h=o+1<s.length,d=h?s[o+1]:0,_=o+2<s.length,g=_?s[o+2]:0,v=c>>2,E=(c&3)<<4|d>>4;let S=(d&15)<<2|g>>6,k=g&63;_||(k=64,h||(S=64)),r.push(i[v],i[E],i[S],i[k])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(Cv(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):gb(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const c=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const g=o<s.length?i[s.charAt(o)]:64;++o;const E=o<s.length?i[s.charAt(o)]:64;if(++o,c==null||d==null||g==null||E==null)throw new mb;const S=c<<2|d>>4;if(r.push(S),g!==64){const k=d<<4&240|g>>2;if(r.push(k),E!==64){const x=g<<6&192|E;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class mb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wv=function(s){const t=Cv(s);return gh.encodeByteArray(t,!0)},Eo=function(s){return wv(s).replace(/\./g,"")},So=function(s){try{return gh.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vb(s){return Av(void 0,s)}function Av(s,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!yb(i)||(s[i]=Av(s[i],t[i]));return s}function yb(s){return s!=="__proto__"}/**
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
 */function Eb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sb=()=>Eb().__FIREBASE_DEFAULTS__,bb=()=>{if(typeof process>"u"||typeof hm>"u")return;const s=hm.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Tb=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&So(s[1]);return t&&JSON.parse(t)},mh=()=>{try{return _b()||Sb()||bb()||Tb()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Rv=s=>{var t,i;return(i=(t=mh())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},Cb=s=>{const t=Rv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),r]:[t.substring(0,i),r]},Nv=()=>{var s;return(s=mh())===null||s===void 0?void 0:s.config},Ov=s=>{var t;return(t=mh())===null||t===void 0?void 0:t[`_${s}`]};/**
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
 */class Lr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ur(s){return s.endsWith(".cloudworkstations.dev")}async function Dv(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function wb(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=t||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},s);return[Eo(JSON.stringify(i)),Eo(JSON.stringify(h)),""].join(".")}const gr={};function Ab(){const s={prod:[],emulator:[]};for(const t of Object.keys(gr))gr[t]?s.emulator.push(t):s.prod.push(t);return s}function Rb(s){let t=document.getElementById(s),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",s),i=!0),{created:i,element:t}}let dm=!1;function Go(s,t){if(typeof window>"u"||typeof document>"u"||!Ur(window.location.host)||gr[s]===t||gr[s]||dm)return;gr[s]=t;function i(S){return`__firebase__banner__${S}`}const r="__firebase__banner",c=Ab().prod.length>0;function h(){const S=document.getElementById(r);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function _(S,k){S.setAttribute("width","24"),S.setAttribute("id",k),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{dm=!0,h()},S}function v(S,k){S.setAttribute("id",k),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=Rb(r),k=i("text"),x=document.getElementById(k)||document.createElement("span"),q=i("learnmore"),B=document.getElementById(q)||document.createElement("a"),ee=i("preprendIcon"),pe=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const re=S.element;d(re),v(B,q);const te=g();_(pe,ee),re.append(pe,x,B,te),document.body.appendChild(re)}c?(x.innerText="Preview backend disconnected.",pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(pe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Nb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ob(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Iv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Db(){const s=yt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Ib(){return Tv.NODE_ADMIN===!0}function Mb(){try{return typeof indexedDB=="object"}catch{return!1}}function xb(){return new Promise((s,t)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
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
 */const kb="FirebaseError";class Ci extends Error{constructor(t,i,r){super(i),this.code=t,this.customData=r,this.name=kb,Object.setPrototypeOf(this,Ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(t,i,r){this.service=t,this.serviceName=i,this.errors=r}create(t,...i){const r=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?Lb(c,r):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Ci(o,d,r)}}function Lb(s,t){return s.replace(Ub,(i,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Ub=/\{\$([^}]+)}/g;/**
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
 */function Tr(s){return JSON.parse(s)}function et(s){return JSON.stringify(s)}/**
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
 */const Mv=function(s){let t={},i={},r={},o="";try{const c=s.split(".");t=Tr(So(c[0])||""),i=Tr(So(c[1])||""),o=c[2],r=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:r,signature:o}},zb=function(s){const t=Mv(s),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},Hb=function(s){const t=Mv(s).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function dn(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Zs(s,t){if(Object.prototype.hasOwnProperty.call(s,t))return s[t]}function Vf(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function bo(s,t,i){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=t.call(i,s[o],o,s));return r}function Ki(s,t){if(s===t)return!0;const i=Object.keys(s),r=Object.keys(t);for(const o of i){if(!r.includes(o))return!1;const c=s[o],h=t[o];if(pm(c)&&pm(h)){if(!Ki(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function pm(s){return s!==null&&typeof s=="object"}/**
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
 */function aa(s){const t=[];for(const[i,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pr(s){const t={};return s.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,c]=r.split("=");t[decodeURIComponent(o)]=decodeURIComponent(c)}}),t}function _r(s){const t=s.indexOf("?");if(!t)return"";const i=s.indexOf("#",t);return s.substring(t,i>0?i:void 0)}/**
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
 */class Pb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const r=this.W_;if(typeof t=="string")for(let E=0;E<16;E++)r[E]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let E=0;E<16;E++)r[E]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let E=16;E<80;E++){const S=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(S<<1|S>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],d=this.chain_[3],_=this.chain_[4],g,v;for(let E=0;E<80;E++){E<40?E<20?(g=d^c&(h^d),v=1518500249):(g=c^h^d,v=1859775393):E<60?(g=c&h|d&(c|h),v=2400959708):(g=c^h^d,v=3395469782);const S=(o<<5|o>>>27)+g+_+v+r[E]&4294967295;_=d,d=h,h=(c<<30|c>>>2)&4294967295,c=o,o=S}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const r=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[r]=this.chain_[o]>>c&255,++r;return t}}function Bb(s,t){const i=new qb(s,t);return i.subscribe.bind(i)}class qb{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,r){let o;if(t===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");jb(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:r},o.next===void 0&&(o.next=Of),o.error===void 0&&(o.error=Of),o.complete===void 0&&(o.complete=Of);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jb(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function Of(){}function Yo(s,t){return`${s} failed: ${t} argument `}/**
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
 */const Vb=function(s){const t=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const c=o-55296;r++,U(r<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(r)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Fo=function(s){let t=0;for(let i=0;i<s.length;i++){const r=s.charCodeAt(i);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,i++):t+=3}return t};/**
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
 */function Et(s){return s&&s._delegate?s._delegate:s}class Xi{constructor(t,i,r){this.name=t,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Yi="[DEFAULT]";/**
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
 */class Gb{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const r=new Lr;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fb(t))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(t=Yi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yi){return this.instances.has(t)}getOptions(t=Yi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(c);r===d&&h.resolve(o)}return o}onInit(t,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yb(t),options:i}),this.instances.set(t,r),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yi){return this.component?this.component.multipleInstances?t:Yi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yb(s){return s===Yi?void 0:s}function Fb(s){return s.instantiationMode==="EAGER"}/**
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
 */class Qb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new Gb(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Me||(Me={}));const Kb={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},Xb=Me.INFO,Wb={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},Zb=(s,t,...i)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),o=Wb[t];if(o)console[o](`[${r}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yh{constructor(t){this.name=t,this._logLevel=Xb,this._logHandler=Zb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Me))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...t),this._logHandler(this,Me.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...t),this._logHandler(this,Me.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...t),this._logHandler(this,Me.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...t),this._logHandler(this,Me.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...t),this._logHandler(this,Me.ERROR,...t)}}const Jb=(s,t)=>t.some(i=>s instanceof i);let _m,gm;function $b(){return _m||(_m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eT(){return gm||(gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xv=new WeakMap,Gf=new WeakMap,kv=new WeakMap,Df=new WeakMap,Eh=new WeakMap;function tT(s){const t=new Promise((i,r)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",h)},c=()=>{i(gi(s.result)),o()},h=()=>{r(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&xv.set(i,s)}).catch(()=>{}),Eh.set(t,s),t}function nT(s){if(Gf.has(s))return;const t=new Promise((i,r)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",h),s.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",h),s.addEventListener("abort",h)});Gf.set(s,t)}let Yf={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return Gf.get(s);if(t==="objectStoreNames")return s.objectStoreNames||kv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return gi(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function iT(s){Yf=s(Yf)}function sT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const r=s.call(If(this),t,...i);return kv.set(r,t.sort?t.sort():[t]),gi(r)}:eT().includes(s)?function(...t){return s.apply(If(this),t),gi(xv.get(this))}:function(...t){return gi(s.apply(If(this),t))}}function aT(s){return typeof s=="function"?sT(s):(s instanceof IDBTransaction&&nT(s),Jb(s,$b())?new Proxy(s,Yf):s)}function gi(s){if(s instanceof IDBRequest)return tT(s);if(Df.has(s))return Df.get(s);const t=aT(s);return t!==s&&(Df.set(s,t),Eh.set(t,s)),t}const If=s=>Eh.get(s);function rT(s,t,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(s,t),d=gi(h);return r&&h.addEventListener("upgradeneeded",_=>{r(gi(h.result),_.oldVersion,_.newVersion,gi(h.transaction),_)}),i&&h.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),d.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const lT=["get","getKey","getAll","getAllKeys","count"],oT=["put","add","delete","clear"],Mf=new Map;function mm(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Mf.get(t))return Mf.get(t);const i=t.replace(/FromIndex$/,""),r=t!==i,o=oT.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||lT.includes(i)))return;const c=async function(h,...d){const _=this.transaction(h,o?"readwrite":"readonly");let g=_.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[i](...d),o&&_.done]))[0]};return Mf.set(t,c),c}iT(s=>({...s,get:(t,i,r)=>mm(t,i)||s.get(t,i,r),has:(t,i)=>!!mm(t,i)||s.has(t,i)}));/**
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
 */class uT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(cT(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function cT(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ff="@firebase/app",vm="0.12.3";/**
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
 */const kn=new yh("@firebase/app"),fT="@firebase/app-compat",hT="@firebase/analytics-compat",dT="@firebase/analytics",pT="@firebase/app-check-compat",_T="@firebase/app-check",gT="@firebase/auth",mT="@firebase/auth-compat",vT="@firebase/database",yT="@firebase/data-connect",ET="@firebase/database-compat",ST="@firebase/functions",bT="@firebase/functions-compat",TT="@firebase/installations",CT="@firebase/installations-compat",wT="@firebase/messaging",AT="@firebase/messaging-compat",RT="@firebase/performance",NT="@firebase/performance-compat",OT="@firebase/remote-config",DT="@firebase/remote-config-compat",IT="@firebase/storage",MT="@firebase/storage-compat",xT="@firebase/firestore",kT="@firebase/vertexai",LT="@firebase/firestore-compat",UT="firebase",zT="11.7.3";/**
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
 */const Qf="[DEFAULT]",HT={[Ff]:"fire-core",[fT]:"fire-core-compat",[dT]:"fire-analytics",[hT]:"fire-analytics-compat",[_T]:"fire-app-check",[pT]:"fire-app-check-compat",[gT]:"fire-auth",[mT]:"fire-auth-compat",[vT]:"fire-rtdb",[yT]:"fire-data-connect",[ET]:"fire-rtdb-compat",[ST]:"fire-fn",[bT]:"fire-fn-compat",[TT]:"fire-iid",[CT]:"fire-iid-compat",[wT]:"fire-fcm",[AT]:"fire-fcm-compat",[RT]:"fire-perf",[NT]:"fire-perf-compat",[OT]:"fire-rc",[DT]:"fire-rc-compat",[IT]:"fire-gcs",[MT]:"fire-gcs-compat",[xT]:"fire-fst",[LT]:"fire-fst-compat",[kT]:"fire-vertex","fire-js":"fire-js",[UT]:"fire-js-all"};/**
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
 */const To=new Map,PT=new Map,Kf=new Map;function ym(s,t){try{s.container.addComponent(t)}catch(i){kn.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Js(s){const t=s.name;if(Kf.has(t))return kn.debug(`There were multiple attempts to register component ${t}.`),!1;Kf.set(t,s);for(const i of To.values())ym(i,s);for(const i of PT.values())ym(i,s);return!0}function Sh(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function Ft(s){return s==null?!1:s.settings!==void 0}/**
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
 */const BT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new zr("app","Firebase",BT);/**
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
 */class qT{constructor(t,i,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
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
 */const ra=zT;function Lv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qf,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw mi.create("bad-app-name",{appName:String(o)});if(i||(i=Nv()),!i)throw mi.create("no-options");const c=To.get(o);if(c){if(Ki(i,c.options)&&Ki(r,c.config))return c;throw mi.create("duplicate-app",{appName:o})}const h=new Qb(o);for(const _ of Kf.values())h.addComponent(_);const d=new qT(i,r,h);return To.set(o,d),d}function Uv(s=Qf){const t=To.get(s);if(!t&&s===Qf&&Nv())return Lv();if(!t)throw mi.create("no-app",{appName:s});return t}function vi(s,t,i){var r;let o=(r=HT[s])!==null&&r!==void 0?r:s;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const d=[`Unable to register library "${o}" with version "${t}":`];c&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&d.push("and"),h&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kn.warn(d.join(" "));return}Js(new Xi(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const jT="firebase-heartbeat-database",VT=1,Cr="firebase-heartbeat-store";let xf=null;function zv(){return xf||(xf=rT(jT,VT,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(Cr)}catch(i){console.warn(i)}}}}).catch(s=>{throw mi.create("idb-open",{originalErrorMessage:s.message})})),xf}async function GT(s){try{const i=(await zv()).transaction(Cr),r=await i.objectStore(Cr).get(Hv(s));return await i.done,r}catch(t){if(t instanceof Ci)kn.warn(t.message);else{const i=mi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kn.warn(i.message)}}}async function Em(s,t){try{const r=(await zv()).transaction(Cr,"readwrite");await r.objectStore(Cr).put(t,Hv(s)),await r.done}catch(i){if(i instanceof Ci)kn.warn(i.message);else{const r=mi.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});kn.warn(r.message)}}}function Hv(s){return`${s.name}!${s.options.appId}`}/**
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
 */const YT=1024,FT=30;class QT{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new XT(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Sm();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>FT){const h=WT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Sm(),{heartbeatsToSend:r,unsentEntries:o}=KT(this._heartbeatsCache.heartbeats),c=Eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return kn.warn(i),""}}}function Sm(){return new Date().toISOString().substring(0,10)}function KT(s,t=YT){const i=[];let r=s.slice();for(const o of s){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),bm(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),bm(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class XT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mb()?xb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await GT(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Em(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Em(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function bm(s){return Eo(JSON.stringify({version:2,heartbeats:s})).length}function WT(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let r=1;r<s.length;r++)s[r].date<i&&(i=s[r].date,t=r);return t}/**
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
 */function ZT(s){Js(new Xi("platform-logger",t=>new uT(t),"PRIVATE")),Js(new Xi("heartbeat",t=>new QT(t),"PRIVATE")),vi(Ff,vm,s),vi(Ff,vm,"esm2017"),vi("fire-js","")}ZT("");var Tm={};const Cm="@firebase/database",wm="1.0.17";/**
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
 */let Pv="";function JT(s){Pv=s}/**
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
 */class $T{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),et(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Tr(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class e1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return dn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const Bv=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const t=window[s];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new $T(t)}}catch{}return new e1},Qi=Bv("localStorage"),t1=Bv("sessionStorage");/**
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
 */const Fs=new yh("@firebase/database"),n1=function(){let s=1;return function(){return s++}}(),qv=function(s){const t=Vb(s),i=new Pb;i.update(t);const r=i.digest();return gh.encodeByteArray(r)},Hr=function(...s){let t="";for(let i=0;i<s.length;i++){const r=s[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Hr.apply(null,r):typeof r=="object"?t+=et(r):t+=r,t+=" "}return t};let mr=null,Am=!0;const i1=function(s,t){U(!0,"Can't turn on custom loggers persistently."),Fs.logLevel=Me.VERBOSE,mr=Fs.log.bind(Fs)},ct=function(...s){if(Am===!0&&(Am=!1,mr===null&&t1.get("logging_enabled")===!0&&i1()),mr){const t=Hr.apply(null,s);mr(t)}},Pr=function(s){return function(...t){ct(s,...t)}},Xf=function(...s){const t="FIREBASE INTERNAL ERROR: "+Hr(...s);Fs.error(t)},Ln=function(...s){const t=`FIREBASE FATAL ERROR: ${Hr(...s)}`;throw Fs.error(t),new Error(t)},vt=function(...s){const t="FIREBASE WARNING: "+Hr(...s);Fs.warn(t)},s1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bh=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},a1=function(s){if(document.readyState==="complete")s();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},$s="[MIN_NAME]",Wi="[MAX_NAME]",ts=function(s,t){if(s===t)return 0;if(s===$s||t===Wi)return-1;if(t===$s||s===Wi)return 1;{const i=Rm(s),r=Rm(t);return i!==null?r!==null?i-r===0?s.length-t.length:i-r:-1:r!==null?1:s<t?-1:1}},r1=function(s,t){return s===t?0:s<t?-1:1},cr=function(s,t){if(t&&s in t)return t[s];throw new Error("Missing required key ("+s+") in object: "+et(t))},Th=function(s){if(typeof s!="object"||s===null)return et(s);const t=[];for(const r in s)t.push(r);t.sort();let i="{";for(let r=0;r<t.length;r++)r!==0&&(i+=","),i+=et(t[r]),i+=":",i+=Th(s[t[r]]);return i+="}",i},jv=function(s,t){const i=s.length;if(i<=t)return[s];const r=[];for(let o=0;o<i;o+=t)o+t>i?r.push(s.substring(o,i)):r.push(s.substring(o,o+t));return r};function ft(s,t){for(const i in s)s.hasOwnProperty(i)&&t(i,s[i])}const Vv=function(s){U(!bh(s),"Invalid JSON number");const t=11,i=52,r=(1<<t-1)-1;let o,c,h,d,_;s===0?(c=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),r),c=d+r,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(c=0,h=Math.round(s/Math.pow(2,1-r-i))));const g=[];for(_=i;_;_-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(_=t;_;_-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(o?1:0),g.reverse();const v=g.join("");let E="";for(_=0;_<64;_+=8){let S=parseInt(v.substr(_,8),2).toString(16);S.length===1&&(S="0"+S),E=E+S}return E.toLowerCase()},l1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},o1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function u1(s,t){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const r=new Error(s+" at "+t._path.toString()+": "+i);return r.code=s.toUpperCase(),r}const c1=new RegExp("^-?(0*)\\d{1,10}$"),f1=-2147483648,h1=2147483647,Rm=function(s){if(c1.test(s)){const t=Number(s);if(t>=f1&&t<=h1)return t}return null},la=function(s){try{s()}catch(t){setTimeout(()=>{const i=t.stack||"";throw vt("Exception was thrown by user callback.",i),t},Math.floor(0))}},d1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vr=function(s,t){const i=setTimeout(s,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
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
 */class p1{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Ft(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){vt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _1{constructor(t,i,r){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vt(t)}}class _o{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}_o.OWNER="owner";/**
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
 */const Ch="5",Gv="v",Yv="s",Fv="r",Qv="f",Kv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xv="ls",Wv="p",Wf="ac",Zv="websocket",Jv="long_polling";/**
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
 */class $v{constructor(t,i,r,o,c=!1,h="",d=!1,_=!1,g=null){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=_,this.emulatorOptions=g,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Qi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function g1(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function ey(s,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let r;if(t===Zv)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(t===Jv)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);g1(s)&&(i.ns=s.namespace);const o=[];return ft(i,(c,h)=>{o.push(c+"="+h)}),r+o.join("&")}/**
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
 */class m1{constructor(){this.counters_={}}incrementCounter(t,i=1){dn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return vb(this.counters_)}}/**
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
 */const kf={},Lf={};function wh(s){const t=s.toString();return kf[t]||(kf[t]=new m1),kf[t]}function v1(s,t){const i=s.toString();return Lf[i]||(Lf[i]=t()),Lf[i]}/**
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
 */class y1{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&la(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Nm="start",E1="close",S1="pLPCommand",b1="pRTLPCB",ty="id",ny="pw",iy="ser",T1="cb",C1="seg",w1="ts",A1="d",R1="dframe",sy=1870,ay=30,N1=sy-ay,O1=25e3,D1=3e4;class Gs{constructor(t,i,r,o,c,h,d){this.connId=t,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pr(t),this.stats_=wh(i),this.urlFn=_=>(this.appCheckToken&&(_[Wf]=this.appCheckToken),ey(i,Jv,_))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new y1(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(D1)),a1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ah((...c)=>{const[h,d,_,g,v]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Nm)this.id=d,this.password=_;else if(h===E1)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,d]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Nm]="t",r[iy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[T1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Gv]=Ch,this.transportSessionId&&(r[Yv]=this.transportSessionId),this.lastSessionId&&(r[Xv]=this.lastSessionId),this.applicationId&&(r[Wv]=this.applicationId),this.appCheckToken&&(r[Wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kv.test(location.hostname)&&(r[Fv]=Qv);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gs.forceAllow_=!0}static forceDisallow(){Gs.forceDisallow_=!0}static isAvailable(){return Gs.forceAllow_?!0:!Gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!l1()&&!o1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=et(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=wv(i),o=jv(r,N1);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[R1]="t",r[ty]=t,r[ny]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=et(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Ah{constructor(t,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=n1(),window[S1+this.uniqueCallbackIdentifier]=t,window[b1+this.uniqueCallbackIdentifier]=i,this.myIFrame=Ah.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){ct("frame writing exception"),d.stack&&ct(d.stack),ct(d)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||ct("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[ty]=this.myID,t[ny]=this.myPW,t[iy]=this.currentSerial;let i=this.urlFn(t),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ay+r.length<=sy;){const h=this.pendingSegs.shift();r=r+"&"+C1+o+"="+h.seg+"&"+w1+o+"="+h.ts+"&"+A1+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,r){this.pendingSegs.push({seg:t,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(O1)),c=()=>{clearTimeout(o),r()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{ct("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const I1=16384,M1=45e3;let Co=null;typeof MozWebSocket<"u"?Co=MozWebSocket:typeof WebSocket<"u"&&(Co=WebSocket);class $t{constructor(t,i,r,o,c,h,d){this.connId=t,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pr(this.connId),this.stats_=wh(i),this.connURL=$t.connectionURL_(i,h,d,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,r,o,c){const h={};return h[Gv]=Ch,typeof location<"u"&&location.hostname&&Kv.test(location.hostname)&&(h[Fv]=Qv),i&&(h[Yv]=i),r&&(h[Xv]=r),o&&(h[Wf]=o),c&&(h[Wv]=c),ey(t,Zv,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qi.set("previous_websocket_failure",!0);try{let r;Ib(),this.mySock=new Co(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Co!==null&&!$t.forceDisallow_}static previouslyFailed(){return Qi.isInMemoryStorage||Qi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=Tr(i);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const i=et(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=jv(i,I1);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(M1))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class wr{static get ALL_TRANSPORTS(){return[Gs,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=$t&&$t.isAvailable();let r=i&&!$t.previouslyFailed();if(t.webSocketOnly&&(i||vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$t];else{const o=this.transports_=[];for(const c of wr.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);wr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wr.globalTransportInitialized_=!1;/**
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
 */const x1=6e4,k1=5e3,L1=10*1024,U1=100*1024,Uf="t",Om="d",z1="s",Dm="r",H1="e",Im="o",Mm="a",xm="n",km="p",P1="h";class B1{constructor(t,i,r,o,c,h,d,_,g,v){this.id=t,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=_,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pr("c:"+this.id+":"),this.transportManager_=new wr(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=vr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>U1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>L1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Uf in t){const i=t[Uf];i===Mm?this.upgradeIfSecondaryHealthy_():i===Dm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Im&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=cr("t",t),r=cr("d",t);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:km,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=cr("t",t),r=cr("d",t);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=cr(Uf,t);if(Om in t){const r=t[Om];if(i===P1){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===xm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===z1?this.onConnectionShutdown_(r):i===Dm?this.onReset_(r):i===H1?Xf("Server Error: "+r):i===Im?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,r=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Ch!==r&&vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),vr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(x1))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(k1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:km,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ry{put(t,i,r,o){}merge(t,i,r,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,r){}onDisconnectMerge(t,i,r){}onDisconnectCancel(t,i){}reportStats(t){}}/**
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
 */class ly{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(t,i,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:r});const o=this.getInitialEvent(t);o&&i.apply(r,o)}off(t,i,r){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!r||r===o[c].context)){o.splice(c,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
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
 */class wo extends ly{static getInstance(){return new wo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Lm=32,Um=768;class xe{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function Se(){return new xe("")}function oe(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Si(s){return s.pieces_.length-s.pieceNum_}function ze(s){let t=s.pieceNum_;return t<s.pieces_.length&&t++,new xe(s.pieces_,t)}function Rh(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function q1(s){let t="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(s.pieces_[i])));return t||"/"}function Ar(s,t=0){return s.pieces_.slice(s.pieceNum_+t)}function oy(s){if(s.pieceNum_>=s.pieces_.length)return null;const t=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)t.push(s.pieces_[i]);return new xe(t,0)}function Ye(s,t){const i=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)i.push(s.pieces_[r]);if(t instanceof xe)for(let r=t.pieceNum_;r<t.pieces_.length;r++)i.push(t.pieces_[r]);else{const r=t.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new xe(i,0)}function he(s){return s.pieceNum_>=s.pieces_.length}function mt(s,t){const i=oe(s),r=oe(t);if(i===null)return t;if(i===r)return mt(ze(s),ze(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+s+")")}function j1(s,t){const i=Ar(s,0),r=Ar(t,0);for(let o=0;o<i.length&&o<r.length;o++){const c=ts(i[o],r[o]);if(c!==0)return c}return i.length===r.length?0:i.length<r.length?-1:1}function Nh(s,t){if(Si(s)!==Si(t))return!1;for(let i=s.pieceNum_,r=t.pieceNum_;i<=s.pieces_.length;i++,r++)if(s.pieces_[i]!==t.pieces_[r])return!1;return!0}function Qt(s,t){let i=s.pieceNum_,r=t.pieceNum_;if(Si(s)>Si(t))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==t.pieces_[r])return!1;++i,++r}return!0}class V1{constructor(t,i){this.errorPrefix_=i,this.parts_=Ar(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Fo(this.parts_[r]);uy(this)}}function G1(s,t){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(t),s.byteLength_+=Fo(t),uy(s)}function Y1(s){const t=s.parts_.pop();s.byteLength_-=Fo(t),s.parts_.length>0&&(s.byteLength_-=1)}function uy(s){if(s.byteLength_>Um)throw new Error(s.errorPrefix_+"has a key path longer than "+Um+" bytes ("+s.byteLength_+").");if(s.parts_.length>Lm)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lm+") or object contains a cycle "+Fi(s))}function Fi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class Oh extends ly{static getInstance(){return new Oh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const fr=1e3,F1=60*5*1e3,zm=30*1e3,Q1=1.3,K1=3e4,X1="server_kill",Hm=3;class Mn extends ry{constructor(t,i,r,o,c,h,d,_){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=_,this.id=Mn.nextPersistentConnectionId_++,this.log_=Pr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fr,this.maxReconnectDelay_=F1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Oh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&wo.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,r){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(et(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),r&&(this.requestCBHash_[o]=r)}get(t){this.initConnection_();const i=new Lr,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,r,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:t,tag:r};this.listens.get(h).set(c,d),this.connected_&&this.sendListen_(d)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(t){const i=t.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const c={p:r},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,d=>{const _=d.d,g=d.s;Mn.warnOnListenWarnings_(_,i),(this.listens.get(r)&&this.listens.get(r).get(o))===t&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(r,o),t.onComplete&&t.onComplete(g,_))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&dn(t,"w")){const r=Zs(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||Hb(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zm)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=zb(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,r=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(t,i){const r=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,t._queryObject,i)}sendUnlisten_(t,i,r,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=r,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:r})}onDisconnectMerge(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:r})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,r,o){const c={p:i,d:r};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,r,o){this.putInternal("p",t,i,r,o)}merge(t,i,r,o){this.putInternal("m",t,i,r,o)}putInternal(t,i,r,o,c){this.initConnection_();const h={p:i,d:r};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,r,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const c=r.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+et(t));const i=t.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Xf("Unrecognized action received from server: "+et(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fr,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=fr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>K1&&(this.reconnectDelay_=fr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Q1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Mn.nextConnectionId_++,c=this.lastSessionId;let h=!1,d=null;const _=function(){d?d.close():(h=!0,r())},g=function(E){U(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:_,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,S]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);h?ct("getToken() completed but was canceled"):(ct("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=S&&S.token,d=new B1(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,r,k=>{vt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(X1)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&vt(E),_())}}}interrupt(t){ct("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ct("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Vf(this.interruptReasons_)&&(this.reconnectDelay_=fr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let r;i?r=i.map(c=>Th(c)).join("$"):r="default";const o=this.removeListen_(t,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const r=new xe(t).toString();let o;if(this.listens.has(r)){const c=this.listens.get(r);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(t,i){ct("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hm&&(this.reconnectDelay_=zm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){ct("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+Pv.replace(/\./g,"-")]=1,vh()?t["framework.cordova"]=1:Iv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=wo.getInstance().currentlyOnline();return Vf(this.interruptReasons_)&&t}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
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
 */class ue{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ue(t,i)}}/**
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
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const r=new ue($s,t),o=new ue($s,i);return this.compare(r,o)!==0}minPost(){return ue.MIN}}/**
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
 */let uo;class cy extends Qo{static get __EMPTY_NODE(){return uo}static set __EMPTY_NODE(t){uo=t}compare(t,i){return ts(t.name,i.name)}isDefinedOn(t){throw sa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Wi,uo)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new ue(t,uo)}toString(){return".key"}}const Qs=new cy;/**
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
 */class co{constructor(t,i,r,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?r(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class rt{constructor(t,i,r,o,c){this.key=t,this.value=i,this.color=r??rt.RED,this.left=o??At.EMPTY_NODE,this.right=c??At.EMPTY_NODE}copy(t,i,r,o,c){return new rt(t??this.key,i??this.value,r??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,r){let o=this;const c=r(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,r),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let r,o;if(r=this,i(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(t,r.key)===0){if(r.right.isEmpty())return At.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class W1{copy(t,i,r,o,c){return this}insert(t,i,r){return new rt(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(t,i=At.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new At(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(t){return new At(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(t){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(t,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(t){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(t,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new co(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new co(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new co(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new co(this.root_,null,this.comparator_,!0,t)}}At.EMPTY_NODE=new W1;/**
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
 */function Z1(s,t){return ts(s.name,t.name)}function Dh(s,t){return ts(s,t)}/**
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
 */let Zf;function J1(s){Zf=s}const fy=function(s){return typeof s=="number"?"number:"+Vv(s):"string:"+s},hy=function(s){if(s.isLeafNode()){const t=s.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&dn(t,".sv"),"Priority must be a string or number.")}else U(s===Zf||s.isEmpty(),"priority of unexpected type.");U(s===Zf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Pm;class at{static set __childrenNodeConstructor(t){Pm=t}static get __childrenNodeConstructor(){return Pm}constructor(t,i=at.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new at(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return he(t)?this:oe(t)===".priority"?this.priorityNode_:at.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:at.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const r=oe(t);return r===null?i:i.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||Si(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,at.__childrenNodeConstructor.EMPTY_NODE.updateChild(ze(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+fy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=Vv(this.value_):t+=this.value_,this.lazyHash_=qv(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===at.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof at.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,r=typeof this.value_,o=at.VALUE_TYPE_ORDER.indexOf(i),c=at.VALUE_TYPE_ORDER.indexOf(r);return U(o>=0,"Unknown leaf type: "+i),U(c>=0,"Unknown leaf type: "+r),o===c?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}at.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let dy,py;function $1(s){dy=s}function eC(s){py=s}class tC extends Qo{compare(t,i){const r=t.node.getPriority(),o=i.node.getPriority(),c=r.compareTo(o);return c===0?ts(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Wi,new at("[PRIORITY-POST]",py))}makePost(t,i){const r=dy(t);return new ue(i,new at("[PRIORITY-POST]",r))}toString(){return".priority"}}const Fe=new tC;/**
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
 */const nC=Math.log(2);class iC{constructor(t){const i=c=>parseInt(Math.log(c)/nC,10),r=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=r(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Ao=function(s,t,i,r){s.sort(t);const o=function(_,g){const v=g-_;let E,S;if(v===0)return null;if(v===1)return E=s[_],S=i?i(E):E,new rt(S,E.node,rt.BLACK,null,null);{const k=parseInt(v/2,10)+_,x=o(_,k),q=o(k+1,g);return E=s[k],S=i?i(E):E,new rt(S,E.node,rt.BLACK,x,q)}},c=function(_){let g=null,v=null,E=s.length;const S=function(x,q){const B=E-x,ee=E;E-=x;const pe=o(B+1,ee),re=s[B],te=i?i(re):re;k(new rt(te,re.node,q,null,pe))},k=function(x){g?(g.left=x,g=x):(v=x,g=x)};for(let x=0;x<_.count;++x){const q=_.nextBitIsOne(),B=Math.pow(2,_.count-(x+1));q?S(B,rt.BLACK):(S(B,rt.BLACK),S(B,rt.RED))}return v},h=new iC(s.length),d=c(h);return new At(r||t,d)};/**
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
 */let zf;const Vs={};class On{static get Default(){return U(Vs&&Fe,"ChildrenNode.ts has not been loaded"),zf=zf||new On({".priority":Vs},{".priority":Fe}),zf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Zs(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof At?i:null}hasIndex(t){return dn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==Qs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const c=i.getIterator(ue.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),r.push(h),h=c.getNext();let d;o?d=Ao(r,t.getCompare()):d=Vs;const _=t.toString(),g=Object.assign({},this.indexSet_);g[_]=t;const v=Object.assign({},this.indexes_);return v[_]=d,new On(v,g)}addToIndexes(t,i){const r=bo(this.indexes_,(o,c)=>{const h=Zs(this.indexSet_,c);if(U(h,"Missing index implementation for "+c),o===Vs)if(h.isDefinedOn(t.node)){const d=[],_=i.getIterator(ue.Wrap);let g=_.getNext();for(;g;)g.name!==t.name&&d.push(g),g=_.getNext();return d.push(t),Ao(d,h.getCompare())}else return Vs;else{const d=i.get(t.name);let _=o;return d&&(_=_.remove(new ue(t.name,d))),_.insert(t,t.node)}});return new On(r,this.indexSet_)}removeFromIndexes(t,i){const r=bo(this.indexes_,o=>{if(o===Vs)return o;{const c=i.get(t.name);return c?o.remove(new ue(t.name,c)):o}});return new On(r,this.indexSet_)}}/**
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
 */let hr;class Z{static get EMPTY_NODE(){return hr||(hr=new Z(new At(Dh),null,On.Default))}constructor(t,i,r){this.children_=t,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&hy(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hr}updatePriority(t){return this.children_.isEmpty()?this:new Z(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?hr:i}}getChild(t){const i=oe(t);return i===null?this:this.getImmediateChild(i).getChild(ze(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const r=new ue(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?hr:this.priorityNode_;return new Z(o,h,c)}}updateChild(t,i){const r=oe(t);if(r===null)return i;{U(oe(t)!==".priority"||Si(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(ze(t),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let r=0,o=0,c=!0;if(this.forEachChild(Fe,(h,d)=>{i[h]=d.val(t),r++,c&&Z.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*r){const h=[];for(const d in i)h[d]=i[d];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+fy(this.getPriority().val())+":"),this.forEachChild(Fe,(i,r)=>{const o=r.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":qv(t)}return this.lazyHash_}getPredecessorChildName(t,i,r){const o=this.resolveIndex_(r);if(o){const c=o.getPredecessorKey(new ue(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ue(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ue(i,this.children_.get(i)):null}forEachChild(t,i){const r=this.resolveIndex_(t);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ue.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ue.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Br?-1:0}withIndex(t){if(t===Qs||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new Z(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Qs||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(Fe),o=i.getIterator(Fe);let c=r.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=r.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Qs?null:this.indexMap_.get(t.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sC extends Z{constructor(){super(new At(Dh),Z.EMPTY_NODE,On.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Z.EMPTY_NODE}isEmpty(){return!1}}const Br=new sC;Object.defineProperties(ue,{MIN:{value:new ue($s,Z.EMPTY_NODE)},MAX:{value:new ue(Wi,Br)}});cy.__EMPTY_NODE=Z.EMPTY_NODE;at.__childrenNodeConstructor=Z;J1(Br);eC(Br);/**
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
 */const aC=!0;function $e(s,t=null){if(s===null)return Z.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(t=s[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new at(i,$e(t))}if(!(s instanceof Array)&&aC){const i=[];let r=!1;if(ft(s,(h,d)=>{if(h.substring(0,1)!=="."){const _=$e(d);_.isEmpty()||(r=r||!_.getPriority().isEmpty(),i.push(new ue(h,_)))}}),i.length===0)return Z.EMPTY_NODE;const c=Ao(i,Z1,h=>h.name,Dh);if(r){const h=Ao(i,Fe.getCompare());return new Z(c,$e(t),new On({".priority":h},{".priority":Fe}))}else return new Z(c,$e(t),On.Default)}else{let i=Z.EMPTY_NODE;return ft(s,(r,o)=>{if(dn(s,r)&&r.substring(0,1)!=="."){const c=$e(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(r,c))}}),i.updatePriority($e(t))}}$1($e);/**
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
 */class rC extends Qo{constructor(t){super(),this.indexPath_=t,U(!he(t)&&oe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const r=this.extractChild(t.node),o=this.extractChild(i.node),c=r.compareTo(o);return c===0?ts(t.name,i.name):c}makePost(t,i){const r=$e(t),o=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new ue(i,o)}maxPost(){const t=Z.EMPTY_NODE.updateChild(this.indexPath_,Br);return new ue(Wi,t)}toString(){return Ar(this.indexPath_,0).join("/")}}/**
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
 */class lC extends Qo{compare(t,i){const r=t.node.compareTo(i.node);return r===0?ts(t.name,i.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(t,i){const r=$e(t);return new ue(i,r)}toString(){return".value"}}const oC=new lC;/**
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
 */function _y(s){return{type:"value",snapshotNode:s}}function ea(s,t){return{type:"child_added",snapshotNode:t,childName:s}}function Rr(s,t){return{type:"child_removed",snapshotNode:t,childName:s}}function Nr(s,t,i){return{type:"child_changed",snapshotNode:t,childName:s,oldSnap:i}}function uC(s,t){return{type:"child_moved",snapshotNode:t,childName:s}}/**
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
 */class Ih{constructor(t){this.index_=t}updateChild(t,i,r,o,c,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=t.getImmediateChild(i);return d.getChild(o).equals(r.getChild(o))&&d.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?t.hasChild(i)?h.trackChildChange(Rr(i,d)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?h.trackChildChange(ea(i,r)):h.trackChildChange(Nr(i,r,d))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(i,r).withIndex(this.index_)}updateFullNode(t,i,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Fe,(o,c)=>{i.hasChild(o)||r.trackChildChange(Rr(o,c))}),i.isLeafNode()||i.forEachChild(Fe,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||r.trackChildChange(Nr(o,c,h))}else r.trackChildChange(ea(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?Z.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Or{constructor(t){this.indexedFilter_=new Ih(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Or.getStartPost_(t),this.endPost_=Or.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&r}updateChild(t,i,r,o,c,h){return this.matches(new ue(i,r))||(r=Z.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,r,o,c,h)}updateFullNode(t,i,r){i.isLeafNode()&&(i=Z.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(Z.EMPTY_NODE);const c=this;return i.forEachChild(Fe,(h,d)=>{c.matches(new ue(h,d))||(o=o.updateImmediateChild(h,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
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
 */class cC{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=i=>{const r=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Or(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,r,o,c,h){return this.rangedFilter_.matches(new ue(i,r))||(r=Z.EMPTY_NODE),t.getImmediateChild(i).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,r,o,c,h):this.fullLimitUpdateChild_(t,i,r,c,h)}updateFullNode(t,i,r){let o;if(i.isLeafNode()||i.isEmpty())o=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=Z.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const d=c.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(Z.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const d=c.getNext();h<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?h++:o=o.updateImmediateChild(d.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,r,o,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(S,k)=>E(k,S)}else h=this.index_.getCompare();const d=t;U(d.numChildren()===this.limit_,"");const _=new ue(i,r),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(_);if(d.hasChild(i)){const E=d.getImmediateChild(i);let S=o.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===i||d.hasChild(S.name));)S=o.getChildAfterChild(this.index_,S,this.reverse_);const k=S==null?1:h(S,_);if(v&&!r.isEmpty()&&k>=0)return c!=null&&c.trackChildChange(Nr(i,r,E)),d.updateImmediateChild(i,r);{c!=null&&c.trackChildChange(Rr(i,E));const q=d.updateImmediateChild(i,Z.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(c!=null&&c.trackChildChange(ea(S.name,S.node)),q.updateImmediateChild(S.name,S.node)):q}}else return r.isEmpty()?t:v&&h(g,_)>=0?(c!=null&&(c.trackChildChange(Rr(g.name,g.node)),c.trackChildChange(ea(i,r))),d.updateImmediateChild(i,r).updateImmediateChild(g.name,Z.EMPTY_NODE)):t}}/**
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
 */class Mh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const t=new Mh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function fC(s){return s.loadsAllData()?new Ih(s.getIndex()):s.hasLimit()?new cC(s):new Or(s)}function Bm(s){const t={};if(s.isDefault())return t;let i;if(s.index_===Fe?i="$priority":s.index_===oC?i="$value":s.index_===Qs?i="$key":(U(s.index_ instanceof rC,"Unrecognized index type!"),i=s.index_.toString()),t.orderBy=et(i),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";t[r]=et(s.indexStartValue_),s.startNameSet_&&(t[r]+=","+et(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";t[r]=et(s.indexEndValue_),s.endNameSet_&&(t[r]+=","+et(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?t.limitToFirst=s.limit_:t.limitToLast=s.limit_),t}function qm(s){const t={};if(s.startSet_&&(t.sp=s.indexStartValue_,s.startNameSet_&&(t.sn=s.indexStartName_),t.sin=!s.startAfterSet_),s.endSet_&&(t.ep=s.indexEndValue_,s.endNameSet_&&(t.en=s.indexEndName_),t.ein=!s.endBeforeSet_),s.limitSet_){t.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),t.vf=i}return s.index_!==Fe&&(t.i=s.index_.toString()),t}/**
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
 */class Ro extends ry{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,r,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=Pr("p:rest:"),this.listens_={}}listen(t,i,r,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=Ro.getListenId_(t,r),d={};this.listens_[h]=d;const _=Bm(t._queryParams);this.restRequest_(c+".json",_,(g,v)=>{let E=v;if(g===404&&(E=null,g=null),g===null&&this.onDataUpdate_(c,E,!1,r),Zs(this.listens_,h)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",o(S,null)}})}unlisten(t,i){const r=Ro.getListenId_(t,i);delete this.listens_[r]}get(t){const i=Bm(t._queryParams),r=t._path.toString(),o=new Lr;return this.restRequest_(r+".json",i,(c,h)=>{let d=h;c===404&&(d=null,c=null),c===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+aa(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let _=null;if(d.status>=200&&d.status<300){try{_=Tr(d.responseText)}catch{vt("Failed to parse JSON response for "+h+": "+d.responseText)}r(null,_)}else d.status!==401&&d.status!==404&&vt("Got unsuccessful REST response for "+h+" Status: "+d.status),r(d.status);r=null}},d.open("GET",h,!0),d.send()})}}/**
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
 */class hC{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
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
 */function No(){return{value:null,children:new Map}}function gy(s,t,i){if(he(t))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(t,i);else{const r=oe(t);s.children.has(r)||s.children.set(r,No());const o=s.children.get(r);t=ze(t),gy(o,t,i)}}function Jf(s,t,i){s.value!==null?i(t,s.value):dC(s,(r,o)=>{const c=new xe(t.toString()+"/"+r);Jf(o,c,i)})}function dC(s,t){s.children.forEach((i,r)=>{t(r,i)})}/**
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
 */class pC{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&ft(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=t,i}}/**
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
 */const jm=10*1e3,_C=30*1e3,gC=5*60*1e3;class mC{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new pC(t);const r=jm+(_C-jm)*Math.random();vr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),i={};let r=!1;ft(t,(o,c)=>{c>0&&dn(this.statsToReport_,o)&&(i[o]=c,r=!0)}),r&&this.server_.reportStats(i),vr(this.reportStats_.bind(this),Math.floor(Math.random()*2*gC))}}/**
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
 */var en;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function xh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
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
 */class Oo{constructor(t,i,r){this.path=t,this.affectedTree=i,this.revert=r,this.type=en.ACK_USER_WRITE,this.source=xh()}operationForChild(t){if(he(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new xe(t));return new Oo(Se(),i,this.revert)}}else return U(oe(this.path)===t,"operationForChild called for unrelated child."),new Oo(ze(this.path),this.affectedTree,this.revert)}}/**
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
 */class Dr{constructor(t,i){this.source=t,this.path=i,this.type=en.LISTEN_COMPLETE}operationForChild(t){return he(this.path)?new Dr(this.source,Se()):new Dr(this.source,ze(this.path))}}/**
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
 */class Zi{constructor(t,i,r){this.source=t,this.path=i,this.snap=r,this.type=en.OVERWRITE}operationForChild(t){return he(this.path)?new Zi(this.source,Se(),this.snap.getImmediateChild(t)):new Zi(this.source,ze(this.path),this.snap)}}/**
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
 */class ta{constructor(t,i,r){this.source=t,this.path=i,this.children=r,this.type=en.MERGE}operationForChild(t){if(he(this.path)){const i=this.children.subtree(new xe(t));return i.isEmpty()?null:i.value?new Zi(this.source,Se(),i.value):new ta(this.source,Se(),i)}else return U(oe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new ta(this.source,ze(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bi{constructor(t,i,r){this.node_=t,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(he(t))return this.isFullyInitialized()&&!this.filtered_;const i=oe(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class vC{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function yC(s,t,i,r){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(uC(h.childName,h.snapshotNode))}),dr(s,o,"child_removed",t,r,i),dr(s,o,"child_added",t,r,i),dr(s,o,"child_moved",c,r,i),dr(s,o,"child_changed",t,r,i),dr(s,o,"value",t,r,i),o}function dr(s,t,i,r,o,c){const h=r.filter(d=>d.type===i);h.sort((d,_)=>SC(s,d,_)),h.forEach(d=>{const _=EC(s,d,c);o.forEach(g=>{g.respondsTo(d.type)&&t.push(g.createEvent(_,s.query_))})})}function EC(s,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,s.index_)),t}function SC(s,t,i){if(t.childName==null||i.childName==null)throw sa("Should only compare child_ events.");const r=new ue(t.childName,t.snapshotNode),o=new ue(i.childName,i.snapshotNode);return s.index_.compare(r,o)}/**
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
 */function Ko(s,t){return{eventCache:s,serverCache:t}}function yr(s,t,i,r){return Ko(new bi(t,i,r),s.serverCache)}function my(s,t,i,r){return Ko(s.eventCache,new bi(t,i,r))}function Do(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Ji(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let Hf;const bC=()=>(Hf||(Hf=new At(r1)),Hf);class Ue{static fromObject(t){let i=new Ue(null);return ft(t,(r,o)=>{i=i.set(new xe(r),o)}),i}constructor(t,i=bC()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:Se(),value:this.value};if(he(t))return null;{const r=oe(t),o=this.children.get(r);if(o!==null){const c=o.findRootMostMatchingPathAndValue(ze(t),i);return c!=null?{path:Ye(new xe(r),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(he(t))return this;{const i=oe(t),r=this.children.get(i);return r!==null?r.subtree(ze(t)):new Ue(null)}}set(t,i){if(he(t))return new Ue(i,this.children);{const r=oe(t),c=(this.children.get(r)||new Ue(null)).set(ze(t),i),h=this.children.insert(r,c);return new Ue(this.value,h)}}remove(t){if(he(t))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const i=oe(t),r=this.children.get(i);if(r){const o=r.remove(ze(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Ue(null):new Ue(this.value,c)}else return this}}get(t){if(he(t))return this.value;{const i=oe(t),r=this.children.get(i);return r?r.get(ze(t)):null}}setTree(t,i){if(he(t))return i;{const r=oe(t),c=(this.children.get(r)||new Ue(null)).setTree(ze(t),i);let h;return c.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,c),new Ue(this.value,h)}}fold(t){return this.fold_(Se(),t)}fold_(t,i){const r={};return this.children.inorderTraversal((o,c)=>{r[o]=c.fold_(Ye(t,o),i)}),i(t,this.value,r)}findOnPath(t,i){return this.findOnPath_(t,Se(),i)}findOnPath_(t,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(he(t))return null;{const c=oe(t),h=this.children.get(c);return h?h.findOnPath_(ze(t),Ye(i,c),r):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,Se(),i)}foreachOnPath_(t,i,r){if(he(t))return this;{this.value&&r(i,this.value);const o=oe(t),c=this.children.get(o);return c?c.foreachOnPath_(ze(t),Ye(i,o),r):new Ue(null)}}foreach(t){this.foreach_(Se(),t)}foreach_(t,i){this.children.inorderTraversal((r,o)=>{o.foreach_(Ye(t,r),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,r)=>{r.value&&t(i,r.value)})}}/**
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
 */class nn{constructor(t){this.writeTree_=t}static empty(){return new nn(new Ue(null))}}function Er(s,t,i){if(he(t))return new nn(new Ue(i));{const r=s.writeTree_.findRootMostValueAndPath(t);if(r!=null){const o=r.path;let c=r.value;const h=mt(o,t);return c=c.updateChild(h,i),new nn(s.writeTree_.set(o,c))}else{const o=new Ue(i),c=s.writeTree_.setTree(t,o);return new nn(c)}}}function $f(s,t,i){let r=s;return ft(i,(o,c)=>{r=Er(r,Ye(t,o),c)}),r}function Vm(s,t){if(he(t))return nn.empty();{const i=s.writeTree_.setTree(t,new Ue(null));return new nn(i)}}function eh(s,t){return ns(s,t)!=null}function ns(s,t){const i=s.writeTree_.findRootMostValueAndPath(t);return i!=null?s.writeTree_.get(i.path).getChild(mt(i.path,t)):null}function Gm(s){const t=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Fe,(r,o)=>{t.push(new ue(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&t.push(new ue(r,o.value))}),t}function yi(s,t){if(he(t))return s;{const i=ns(s,t);return i!=null?new nn(new Ue(i)):new nn(s.writeTree_.subtree(t))}}function th(s){return s.writeTree_.isEmpty()}function na(s,t){return vy(Se(),s.writeTree_,t)}function vy(s,t,i){if(t.value!=null)return i.updateChild(s,t.value);{let r=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),r=c.value):i=vy(Ye(s,o),c,i)}),!i.getChild(s).isEmpty()&&r!==null&&(i=i.updateChild(Ye(s,".priority"),r)),i}}/**
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
 */function Xo(s,t){return by(t,s)}function TC(s,t,i,r,o){U(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:r,visible:o}),o&&(s.visibleWrites=Er(s.visibleWrites,t,i)),s.lastWriteId=r}function CC(s,t,i,r){U(r>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:t,children:i,writeId:r,visible:!0}),s.visibleWrites=$f(s.visibleWrites,t,i),s.lastWriteId=r}function wC(s,t){for(let i=0;i<s.allWrites.length;i++){const r=s.allWrites[i];if(r.writeId===t)return r}return null}function AC(s,t){const i=s.allWrites.findIndex(d=>d.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[i];s.allWrites.splice(i,1);let o=r.visible,c=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&RC(d,r.path)?o=!1:Qt(r.path,d.path)&&(c=!0)),h--}if(o){if(c)return NC(s),!0;if(r.snap)s.visibleWrites=Vm(s.visibleWrites,r.path);else{const d=r.children;ft(d,_=>{s.visibleWrites=Vm(s.visibleWrites,Ye(r.path,_))})}return!0}else return!1}function RC(s,t){if(s.snap)return Qt(s.path,t);for(const i in s.children)if(s.children.hasOwnProperty(i)&&Qt(Ye(s.path,i),t))return!0;return!1}function NC(s){s.visibleWrites=yy(s.allWrites,OC,Se()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function OC(s){return s.visible}function yy(s,t,i){let r=nn.empty();for(let o=0;o<s.length;++o){const c=s[o];if(t(c)){const h=c.path;let d;if(c.snap)Qt(i,h)?(d=mt(i,h),r=Er(r,d,c.snap)):Qt(h,i)&&(d=mt(h,i),r=Er(r,Se(),c.snap.getChild(d)));else if(c.children){if(Qt(i,h))d=mt(i,h),r=$f(r,d,c.children);else if(Qt(h,i))if(d=mt(h,i),he(d))r=$f(r,Se(),c.children);else{const _=Zs(c.children,oe(d));if(_){const g=_.getChild(ze(d));r=Er(r,Se(),g)}}}else throw sa("WriteRecord should have .snap or .children")}}return r}function Ey(s,t,i,r,o){if(!r&&!o){const c=ns(s.visibleWrites,t);if(c!=null)return c;{const h=yi(s.visibleWrites,t);if(th(h))return i;if(i==null&&!eh(h,Se()))return null;{const d=i||Z.EMPTY_NODE;return na(h,d)}}}else{const c=yi(s.visibleWrites,t);if(!o&&th(c))return i;if(!o&&i==null&&!eh(c,Se()))return null;{const h=function(g){return(g.visible||o)&&(!r||!~r.indexOf(g.writeId))&&(Qt(g.path,t)||Qt(t,g.path))},d=yy(s.allWrites,h,t),_=i||Z.EMPTY_NODE;return na(d,_)}}}function DC(s,t,i){let r=Z.EMPTY_NODE;const o=ns(s.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Fe,(c,h)=>{r=r.updateImmediateChild(c,h)}),r;if(i){const c=yi(s.visibleWrites,t);return i.forEachChild(Fe,(h,d)=>{const _=na(yi(c,new xe(h)),d);r=r.updateImmediateChild(h,_)}),Gm(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const c=yi(s.visibleWrites,t);return Gm(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function IC(s,t,i,r,o){U(r||o,"Either existingEventSnap or existingServerSnap must exist");const c=Ye(t,i);if(eh(s.visibleWrites,c))return null;{const h=yi(s.visibleWrites,c);return th(h)?o.getChild(i):na(h,o.getChild(i))}}function MC(s,t,i,r){const o=Ye(t,i),c=ns(s.visibleWrites,o);if(c!=null)return c;if(r.isCompleteForChild(i)){const h=yi(s.visibleWrites,o);return na(h,r.getNode().getImmediateChild(i))}else return null}function xC(s,t){return ns(s.visibleWrites,t)}function kC(s,t,i,r,o,c,h){let d;const _=yi(s.visibleWrites,t),g=ns(_,Se());if(g!=null)d=g;else if(i!=null)d=na(_,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=h.getCompare(),S=c?d.getReverseIteratorFrom(r,h):d.getIteratorFrom(r,h);let k=S.getNext();for(;k&&v.length<o;)E(k,r)!==0&&v.push(k),k=S.getNext();return v}else return[]}function LC(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function Io(s,t,i,r){return Ey(s.writeTree,s.treePath,t,i,r)}function Uh(s,t){return DC(s.writeTree,s.treePath,t)}function Ym(s,t,i,r){return IC(s.writeTree,s.treePath,t,i,r)}function Mo(s,t){return xC(s.writeTree,Ye(s.treePath,t))}function UC(s,t,i,r,o,c){return kC(s.writeTree,s.treePath,t,i,r,o,c)}function zh(s,t,i){return MC(s.writeTree,s.treePath,t,i)}function Sy(s,t){return by(Ye(s.treePath,t),s.writeTree)}function by(s,t){return{treePath:s,writeTree:t}}/**
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
 */class zC{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,r=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(r,Nr(r,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(r,Rr(r,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(r,ea(r,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(r,Nr(r,t.snapshotNode,o.oldSnap));else throw sa("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class HC{getCompleteChild(t){return null}getChildAfterChild(t,i,r){return null}}const Ty=new HC;class Hh{constructor(t,i,r=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new bi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zh(this.writes_,t,r)}}getChildAfterChild(t,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ji(this.viewCache_),c=UC(this.writes_,o,i,1,r,t);return c.length===0?null:c[0]}}/**
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
 */function PC(s){return{filter:s}}function BC(s,t){U(t.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function qC(s,t,i,r,o){const c=new zC;let h,d;if(i.type===en.OVERWRITE){const g=i;g.source.fromUser?h=nh(s,t,g.path,g.snap,r,o,c):(U(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered()&&!he(g.path),h=xo(s,t,g.path,g.snap,r,o,d,c))}else if(i.type===en.MERGE){const g=i;g.source.fromUser?h=VC(s,t,g.path,g.children,r,o,c):(U(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered(),h=ih(s,t,g.path,g.children,r,o,d,c))}else if(i.type===en.ACK_USER_WRITE){const g=i;g.revert?h=FC(s,t,g.path,r,o,c):h=GC(s,t,g.path,g.affectedTree,r,o,c)}else if(i.type===en.LISTEN_COMPLETE)h=YC(s,t,i.path,r,c);else throw sa("Unknown operation type: "+i.type);const _=c.getChanges();return jC(t,h,_),{viewCache:h,changes:_}}function jC(s,t,i){const r=t.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),c=Do(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(c)||!r.getNode().getPriority().equals(c.getPriority()))&&i.push(_y(Do(t)))}}function Cy(s,t,i,r,o,c){const h=t.eventCache;if(Mo(r,i)!=null)return t;{let d,_;if(he(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const g=Ji(t),v=g instanceof Z?g:Z.EMPTY_NODE,E=Uh(r,v);d=s.filter.updateFullNode(t.eventCache.getNode(),E,c)}else{const g=Io(r,Ji(t));d=s.filter.updateFullNode(t.eventCache.getNode(),g,c)}else{const g=oe(i);if(g===".priority"){U(Si(i)===1,"Can't have a priority with additional path components");const v=h.getNode();_=t.serverCache.getNode();const E=Ym(r,i,v,_);E!=null?d=s.filter.updatePriority(v,E):d=h.getNode()}else{const v=ze(i);let E;if(h.isCompleteForChild(g)){_=t.serverCache.getNode();const S=Ym(r,i,h.getNode(),_);S!=null?E=h.getNode().getImmediateChild(g).updateChild(v,S):E=h.getNode().getImmediateChild(g)}else E=zh(r,g,t.serverCache);E!=null?d=s.filter.updateChild(h.getNode(),g,E,v,o,c):d=h.getNode()}}return yr(t,d,h.isFullyInitialized()||he(i),s.filter.filtersNodes())}}function xo(s,t,i,r,o,c,h,d){const _=t.serverCache;let g;const v=h?s.filter:s.filter.getIndexedFilter();if(he(i))g=v.updateFullNode(_.getNode(),r,null);else if(v.filtersNodes()&&!_.isFiltered()){const k=_.getNode().updateChild(i,r);g=v.updateFullNode(_.getNode(),k,null)}else{const k=oe(i);if(!_.isCompleteForPath(i)&&Si(i)>1)return t;const x=ze(i),B=_.getNode().getImmediateChild(k).updateChild(x,r);k===".priority"?g=v.updatePriority(_.getNode(),B):g=v.updateChild(_.getNode(),k,B,x,Ty,null)}const E=my(t,g,_.isFullyInitialized()||he(i),v.filtersNodes()),S=new Hh(o,E,c);return Cy(s,E,i,o,S,d)}function nh(s,t,i,r,o,c,h){const d=t.eventCache;let _,g;const v=new Hh(o,t,c);if(he(i))g=s.filter.updateFullNode(t.eventCache.getNode(),r,h),_=yr(t,g,!0,s.filter.filtersNodes());else{const E=oe(i);if(E===".priority")g=s.filter.updatePriority(t.eventCache.getNode(),r),_=yr(t,g,d.isFullyInitialized(),d.isFiltered());else{const S=ze(i),k=d.getNode().getImmediateChild(E);let x;if(he(S))x=r;else{const q=v.getCompleteChild(E);q!=null?Rh(S)===".priority"&&q.getChild(oy(S)).isEmpty()?x=q:x=q.updateChild(S,r):x=Z.EMPTY_NODE}if(k.equals(x))_=t;else{const q=s.filter.updateChild(d.getNode(),E,x,S,v,h);_=yr(t,q,d.isFullyInitialized(),s.filter.filtersNodes())}}}return _}function Fm(s,t){return s.eventCache.isCompleteForChild(t)}function VC(s,t,i,r,o,c,h){let d=t;return r.foreach((_,g)=>{const v=Ye(i,_);Fm(t,oe(v))&&(d=nh(s,d,v,g,o,c,h))}),r.foreach((_,g)=>{const v=Ye(i,_);Fm(t,oe(v))||(d=nh(s,d,v,g,o,c,h))}),d}function Qm(s,t,i){return i.foreach((r,o)=>{t=t.updateChild(r,o)}),t}function ih(s,t,i,r,o,c,h,d){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let _=t,g;he(i)?g=r:g=new Ue(null).setTree(i,r);const v=t.serverCache.getNode();return g.children.inorderTraversal((E,S)=>{if(v.hasChild(E)){const k=t.serverCache.getNode().getImmediateChild(E),x=Qm(s,k,S);_=xo(s,_,new xe(E),x,o,c,h,d)}}),g.children.inorderTraversal((E,S)=>{const k=!t.serverCache.isCompleteForChild(E)&&S.value===null;if(!v.hasChild(E)&&!k){const x=t.serverCache.getNode().getImmediateChild(E),q=Qm(s,x,S);_=xo(s,_,new xe(E),q,o,c,h,d)}}),_}function GC(s,t,i,r,o,c,h){if(Mo(o,i)!=null)return t;const d=t.serverCache.isFiltered(),_=t.serverCache;if(r.value!=null){if(he(i)&&_.isFullyInitialized()||_.isCompleteForPath(i))return xo(s,t,i,_.getNode().getChild(i),o,c,d,h);if(he(i)){let g=new Ue(null);return _.getNode().forEachChild(Qs,(v,E)=>{g=g.set(new xe(v),E)}),ih(s,t,i,g,o,c,d,h)}else return t}else{let g=new Ue(null);return r.foreach((v,E)=>{const S=Ye(i,v);_.isCompleteForPath(S)&&(g=g.set(v,_.getNode().getChild(S)))}),ih(s,t,i,g,o,c,d,h)}}function YC(s,t,i,r,o){const c=t.serverCache,h=my(t,c.getNode(),c.isFullyInitialized()||he(i),c.isFiltered());return Cy(s,h,i,r,Ty,o)}function FC(s,t,i,r,o,c){let h;if(Mo(r,i)!=null)return t;{const d=new Hh(r,t,o),_=t.eventCache.getNode();let g;if(he(i)||oe(i)===".priority"){let v;if(t.serverCache.isFullyInitialized())v=Io(r,Ji(t));else{const E=t.serverCache.getNode();U(E instanceof Z,"serverChildren would be complete if leaf node"),v=Uh(r,E)}v=v,g=s.filter.updateFullNode(_,v,c)}else{const v=oe(i);let E=zh(r,v,t.serverCache);E==null&&t.serverCache.isCompleteForChild(v)&&(E=_.getImmediateChild(v)),E!=null?g=s.filter.updateChild(_,v,E,ze(i),d,c):t.eventCache.getNode().hasChild(v)?g=s.filter.updateChild(_,v,Z.EMPTY_NODE,ze(i),d,c):g=_,g.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Io(r,Ji(t)),h.isLeafNode()&&(g=s.filter.updateFullNode(g,h,c)))}return h=t.serverCache.isFullyInitialized()||Mo(r,Se())!=null,yr(t,g,h,s.filter.filtersNodes())}}/**
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
 */class QC{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new Ih(r.getIndex()),c=fC(r);this.processor_=PC(c);const h=i.serverCache,d=i.eventCache,_=o.updateFullNode(Z.EMPTY_NODE,h.getNode(),null),g=c.updateFullNode(Z.EMPTY_NODE,d.getNode(),null),v=new bi(_,h.isFullyInitialized(),o.filtersNodes()),E=new bi(g,d.isFullyInitialized(),c.filtersNodes());this.viewCache_=Ko(E,v),this.eventGenerator_=new vC(this.query_)}get query(){return this.query_}}function KC(s){return s.viewCache_.serverCache.getNode()}function XC(s){return Do(s.viewCache_)}function WC(s,t){const i=Ji(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!he(t)&&!i.getImmediateChild(oe(t)).isEmpty())?i.getChild(t):null}function Km(s){return s.eventRegistrations_.length===0}function ZC(s,t){s.eventRegistrations_.push(t)}function Xm(s,t,i){const r=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&r.push(h)})}if(t){let o=[];for(let c=0;c<s.eventRegistrations_.length;++c){const h=s.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return r}function Wm(s,t,i,r){t.type===en.MERGE&&t.source.queryId!==null&&(U(Ji(s.viewCache_),"We should always have a full cache before handling merges"),U(Do(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,c=qC(s.processor_,o,t,i,r);return BC(s.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,wy(s,c.changes,c.viewCache.eventCache.getNode(),null)}function JC(s,t){const i=s.viewCache_.eventCache,r=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Fe,(c,h)=>{r.push(ea(c,h))}),i.isFullyInitialized()&&r.push(_y(i.getNode())),wy(s,r,i.getNode(),t)}function wy(s,t,i,r){const o=r?[r]:s.eventRegistrations_;return yC(s.eventGenerator_,t,i,o)}/**
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
 */let ko;class Ay{constructor(){this.views=new Map}}function $C(s){U(!ko,"__referenceConstructor has already been defined"),ko=s}function ew(){return U(ko,"Reference.ts has not been loaded"),ko}function tw(s){return s.views.size===0}function Ph(s,t,i,r){const o=t.source.queryId;if(o!==null){const c=s.views.get(o);return U(c!=null,"SyncTree gave us an op for an invalid query."),Wm(c,t,i,r)}else{let c=[];for(const h of s.views.values())c=c.concat(Wm(h,t,i,r));return c}}function Ry(s,t,i,r,o){const c=t._queryIdentifier,h=s.views.get(c);if(!h){let d=Io(i,o?r:null),_=!1;d?_=!0:r instanceof Z?(d=Uh(i,r),_=!1):(d=Z.EMPTY_NODE,_=!1);const g=Ko(new bi(d,_,!1),new bi(r,o,!1));return new QC(t,g)}return h}function nw(s,t,i,r,o,c){const h=Ry(s,t,r,o,c);return s.views.has(t._queryIdentifier)||s.views.set(t._queryIdentifier,h),ZC(h,i),JC(h,i)}function iw(s,t,i,r){const o=t._queryIdentifier,c=[];let h=[];const d=Ti(s);if(o==="default")for(const[_,g]of s.views.entries())h=h.concat(Xm(g,i,r)),Km(g)&&(s.views.delete(_),g.query._queryParams.loadsAllData()||c.push(g.query));else{const _=s.views.get(o);_&&(h=h.concat(Xm(_,i,r)),Km(_)&&(s.views.delete(o),_.query._queryParams.loadsAllData()||c.push(_.query)))}return d&&!Ti(s)&&c.push(new(ew())(t._repo,t._path)),{removed:c,events:h}}function Ny(s){const t=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function Ei(s,t){let i=null;for(const r of s.views.values())i=i||WC(r,t);return i}function Oy(s,t){if(t._queryParams.loadsAllData())return Wo(s);{const r=t._queryIdentifier;return s.views.get(r)}}function Dy(s,t){return Oy(s,t)!=null}function Ti(s){return Wo(s)!=null}function Wo(s){for(const t of s.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Lo;function sw(s){U(!Lo,"__referenceConstructor has already been defined"),Lo=s}function aw(){return U(Lo,"Reference.ts has not been loaded"),Lo}let rw=1;class Zm{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=LC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Iy(s,t,i,r,o){return TC(s.pendingWriteTree_,t,i,r,o),o?oa(s,new Zi(xh(),t,i)):[]}function lw(s,t,i,r){CC(s.pendingWriteTree_,t,i,r);const o=Ue.fromObject(i);return oa(s,new ta(xh(),t,o))}function _i(s,t,i=!1){const r=wC(s.pendingWriteTree_,t);if(AC(s.pendingWriteTree_,t)){let c=new Ue(null);return r.snap!=null?c=c.set(Se(),!0):ft(r.children,h=>{c=c.set(new xe(h),!0)}),oa(s,new Oo(r.path,c,i))}else return[]}function qr(s,t,i){return oa(s,new Zi(kh(),t,i))}function ow(s,t,i){const r=Ue.fromObject(i);return oa(s,new ta(kh(),t,r))}function uw(s,t){return oa(s,new Dr(kh(),t))}function cw(s,t,i){const r=qh(s,i);if(r){const o=jh(r),c=o.path,h=o.queryId,d=mt(c,t),_=new Dr(Lh(h),d);return Vh(s,c,_)}else return[]}function Uo(s,t,i,r,o=!1){const c=t._path,h=s.syncPointTree_.get(c);let d=[];if(h&&(t._queryIdentifier==="default"||Dy(h,t))){const _=iw(h,t,i,r);tw(h)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const g=_.removed;if(d=_.events,!o){const v=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,E=s.syncPointTree_.findOnPath(c,(S,k)=>Ti(k));if(v&&!E){const S=s.syncPointTree_.subtree(c);if(!S.isEmpty()){const k=dw(S);for(let x=0;x<k.length;++x){const q=k[x],B=q.query,ee=Ly(s,q);s.listenProvider_.startListening(Sr(B),Ir(s,B),ee.hashFn,ee.onComplete)}}}!E&&g.length>0&&!r&&(v?s.listenProvider_.stopListening(Sr(t),null):g.forEach(S=>{const k=s.queryToTagMap.get(Zo(S));s.listenProvider_.stopListening(Sr(S),k)}))}pw(s,g)}return d}function My(s,t,i,r){const o=qh(s,r);if(o!=null){const c=jh(o),h=c.path,d=c.queryId,_=mt(h,t),g=new Zi(Lh(d),_,i);return Vh(s,h,g)}else return[]}function fw(s,t,i,r){const o=qh(s,r);if(o){const c=jh(o),h=c.path,d=c.queryId,_=mt(h,t),g=Ue.fromObject(i),v=new ta(Lh(d),_,g);return Vh(s,h,v)}else return[]}function sh(s,t,i,r=!1){const o=t._path;let c=null,h=!1;s.syncPointTree_.foreachOnPath(o,(S,k)=>{const x=mt(S,o);c=c||Ei(k,x),h=h||Ti(k)});let d=s.syncPointTree_.get(o);d?(h=h||Ti(d),c=c||Ei(d,Se())):(d=new Ay,s.syncPointTree_=s.syncPointTree_.set(o,d));let _;c!=null?_=!0:(_=!1,c=Z.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((k,x)=>{const q=Ei(x,Se());q&&(c=c.updateImmediateChild(k,q))}));const g=Dy(d,t);if(!g&&!t._queryParams.loadsAllData()){const S=Zo(t);U(!s.queryToTagMap.has(S),"View does not exist, but we have a tag");const k=_w();s.queryToTagMap.set(S,k),s.tagToQueryMap.set(k,S)}const v=Xo(s.pendingWriteTree_,o);let E=nw(d,t,i,v,c,_);if(!g&&!h&&!r){const S=Oy(d,t);E=E.concat(gw(s,t,S))}return E}function Bh(s,t,i){const o=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(t,(h,d)=>{const _=mt(h,t),g=Ei(d,_);if(g)return g});return Ey(o,t,c,i,!0)}function hw(s,t){const i=t._path;let r=null;s.syncPointTree_.foreachOnPath(i,(g,v)=>{const E=mt(g,i);r=r||Ei(v,E)});let o=s.syncPointTree_.get(i);o?r=r||Ei(o,Se()):(o=new Ay,s.syncPointTree_=s.syncPointTree_.set(i,o));const c=r!=null,h=c?new bi(r,!0,!1):null,d=Xo(s.pendingWriteTree_,t._path),_=Ry(o,t,d,c?h.getNode():Z.EMPTY_NODE,c);return XC(_)}function oa(s,t){return xy(t,s.syncPointTree_,null,Xo(s.pendingWriteTree_,Se()))}function xy(s,t,i,r){if(he(s.path))return ky(s,t,i,r);{const o=t.get(Se());i==null&&o!=null&&(i=Ei(o,Se()));let c=[];const h=oe(s.path),d=s.operationForChild(h),_=t.children.get(h);if(_&&d){const g=i?i.getImmediateChild(h):null,v=Sy(r,h);c=c.concat(xy(d,_,g,v))}return o&&(c=c.concat(Ph(o,s,r,i))),c}}function ky(s,t,i,r){const o=t.get(Se());i==null&&o!=null&&(i=Ei(o,Se()));let c=[];return t.children.inorderTraversal((h,d)=>{const _=i?i.getImmediateChild(h):null,g=Sy(r,h),v=s.operationForChild(h);v&&(c=c.concat(ky(v,d,_,g)))}),o&&(c=c.concat(Ph(o,s,r,i))),c}function Ly(s,t){const i=t.query,r=Ir(s,i);return{hashFn:()=>(KC(t)||Z.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?cw(s,i._path,r):uw(s,i._path);{const c=u1(o,i);return Uo(s,i,null,c)}}}}function Ir(s,t){const i=Zo(t);return s.queryToTagMap.get(i)}function Zo(s){return s._path.toString()+"$"+s._queryIdentifier}function qh(s,t){return s.tagToQueryMap.get(t)}function jh(s){const t=s.indexOf("$");return U(t!==-1&&t<s.length-1,"Bad queryKey."),{queryId:s.substr(t+1),path:new xe(s.substr(0,t))}}function Vh(s,t,i){const r=s.syncPointTree_.get(t);U(r,"Missing sync point for query tag that we're tracking");const o=Xo(s.pendingWriteTree_,t);return Ph(r,i,o,null)}function dw(s){return s.fold((t,i,r)=>{if(i&&Ti(i))return[Wo(i)];{let o=[];return i&&(o=Ny(i)),ft(r,(c,h)=>{o=o.concat(h)}),o}})}function Sr(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(aw())(s._repo,s._path):s}function pw(s,t){for(let i=0;i<t.length;++i){const r=t[i];if(!r._queryParams.loadsAllData()){const o=Zo(r),c=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(c)}}}function _w(){return rw++}function gw(s,t,i){const r=t._path,o=Ir(s,t),c=Ly(s,i),h=s.listenProvider_.startListening(Sr(t),o,c.hashFn,c.onComplete),d=s.syncPointTree_.subtree(r);if(o)U(!Ti(d.value),"If we're adding a query, it shouldn't be shadowed");else{const _=d.fold((g,v,E)=>{if(!he(g)&&v&&Ti(v))return[Wo(v).query];{let S=[];return v&&(S=S.concat(Ny(v).map(k=>k.query))),ft(E,(k,x)=>{S=S.concat(x)}),S}});for(let g=0;g<_.length;++g){const v=_[g];s.listenProvider_.stopListening(Sr(v),Ir(s,v))}}return h}/**
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
 */class Gh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new Gh(i)}node(){return this.node_}}class Yh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=Ye(this.path_,t);return new Yh(this.syncTree_,i)}node(){return Bh(this.syncTree_,this.path_)}}const mw=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},Jm=function(s,t,i){if(!s||typeof s!="object")return s;if(U(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return vw(s[".sv"],t,i);if(typeof s[".sv"]=="object")return yw(s[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},vw=function(s,t,i){switch(s){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+s)}},yw=function(s,t,i){s.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},Uy=function(s,t,i,r){return Fh(t,new Yh(i,s),r)},zy=function(s,t,i){return Fh(s,new Gh(t),i)};function Fh(s,t,i){const r=s.getPriority().val(),o=Jm(r,t.getImmediateChild(".priority"),i);let c;if(s.isLeafNode()){const h=s,d=Jm(h.getValue(),t,i);return d!==h.getValue()||o!==h.getPriority().val()?new at(d,$e(o)):s}else{const h=s;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new at(o))),h.forEachChild(Fe,(d,_)=>{const g=Fh(_,t.getImmediateChild(d),i);g!==_&&(c=c.updateImmediateChild(d,g))}),c}}/**
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
 */class Qh{constructor(t="",i=null,r={children:{},childCount:0}){this.name=t,this.parent=i,this.node=r}}function Kh(s,t){let i=t instanceof xe?t:new xe(t),r=s,o=oe(i);for(;o!==null;){const c=Zs(r.node.children,o)||{children:{},childCount:0};r=new Qh(o,r,c),i=ze(i),o=oe(i)}return r}function ua(s){return s.node.value}function Hy(s,t){s.node.value=t,ah(s)}function Py(s){return s.node.childCount>0}function Ew(s){return ua(s)===void 0&&!Py(s)}function Jo(s,t){ft(s.node.children,(i,r)=>{t(new Qh(i,s,r))})}function By(s,t,i,r){i&&t(s),Jo(s,o=>{By(o,t,!0)})}function Sw(s,t,i){let r=s.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function jr(s){return new xe(s.parent===null?s.name:jr(s.parent)+"/"+s.name)}function ah(s){s.parent!==null&&bw(s.parent,s.name,s)}function bw(s,t,i){const r=Ew(i),o=dn(s.node.children,t);r&&o?(delete s.node.children[t],s.node.childCount--,ah(s)):!r&&!o&&(s.node.children[t]=i.node,s.node.childCount++,ah(s))}/**
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
 */const Tw=/[\[\].#$\/\u0000-\u001F\u007F]/,Cw=/[\[\].#$\u0000-\u001F\u007F]/,Pf=10*1024*1024,Xh=function(s){return typeof s=="string"&&s.length!==0&&!Tw.test(s)},qy=function(s){return typeof s=="string"&&s.length!==0&&!Cw.test(s)},ww=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),qy(s)},Aw=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!bh(s)||s&&typeof s=="object"&&dn(s,".sv")},Rw=function(s,t,i,r){$o(Yo(s,"value"),t,i)},$o=function(s,t,i){const r=i instanceof xe?new V1(i,s):i;if(t===void 0)throw new Error(s+"contains undefined "+Fi(r));if(typeof t=="function")throw new Error(s+"contains a function "+Fi(r)+" with contents = "+t.toString());if(bh(t))throw new Error(s+"contains "+t.toString()+" "+Fi(r));if(typeof t=="string"&&t.length>Pf/3&&Fo(t)>Pf)throw new Error(s+"contains a string greater than "+Pf+" utf8 bytes "+Fi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(ft(t,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Xh(h)))throw new Error(s+" contains an invalid key ("+h+") "+Fi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);G1(r,h),$o(s,d,r),Y1(r)}),o&&c)throw new Error(s+' contains ".value" child '+Fi(r)+" in addition to actual children.")}},Nw=function(s,t){let i,r;for(i=0;i<t.length;i++){r=t[i];const c=Ar(r);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Xh(c[h]))throw new Error(s+"contains an invalid key ("+c[h]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(j1);let o=null;for(i=0;i<t.length;i++){if(r=t[i],o!==null&&Qt(o,r))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}},Ow=function(s,t,i,r){const o=Yo(s,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const c=[];ft(t,(h,d)=>{const _=new xe(h);if($o(o,d,Ye(i,_)),Rh(_)===".priority"&&!Aw(d))throw new Error(o+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(_)}),Nw(o,c)},jy=function(s,t,i,r){if(!qy(i))throw new Error(Yo(s,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Dw=function(s,t,i,r){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),jy(s,t,i)},Iw=function(s,t){if(oe(t)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},Mw=function(s,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Xh(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!ww(i))throw new Error(Yo(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class xw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eu(s,t){let i=null;for(let r=0;r<t.length;r++){const o=t[r],c=o.getPath();i!==null&&!Nh(c,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&s.eventLists_.push(i)}function Vy(s,t,i){eu(s,i),Gy(s,r=>Nh(r,t))}function Kt(s,t,i){eu(s,i),Gy(s,r=>Qt(r,t)||Qt(t,r))}function Gy(s,t){s.recursionDepth_++;let i=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const c=o.path;t(c)?(kw(s.eventLists_[r]),s.eventLists_[r]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function kw(s){for(let t=0;t<s.events.length;t++){const i=s.events[t];if(i!==null){s.events[t]=null;const r=i.getEventRunner();mr&&ct("event: "+i.toString()),la(r)}}}/**
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
 */const Lw="repo_interrupt",Uw=25;class zw{constructor(t,i,r,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=No(),this.transactionQueueTree_=new Qh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hw(s,t,i){if(s.stats_=wh(s.repoInfo_),s.forceRestClient_||d1())s.server_=new Ro(s.repoInfo_,(r,o,c,h)=>{$m(s,r,o,c,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>ev(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new Mn(s.repoInfo_,t,(r,o,c,h)=>{$m(s,r,o,c,h)},r=>{ev(s,r)},r=>{Bw(s,r)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=v1(s.repoInfo_,()=>new mC(s.stats_,s.server_)),s.infoData_=new hC,s.infoSyncTree_=new Zm({startListening:(r,o,c,h)=>{let d=[];const _=s.infoData_.getNode(r._path);return _.isEmpty()||(d=qr(s.infoSyncTree_,r._path,_),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),Wh(s,"connected",!1),s.serverSyncTree_=new Zm({startListening:(r,o,c,h)=>(s.server_.listen(r,c,o,(d,_)=>{const g=h(d,_);Kt(s.eventQueue_,r._path,g)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function Pw(s){const i=s.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function tu(s){return mw({timestamp:Pw(s)})}function $m(s,t,i,r,o){s.dataUpdateCount++;const c=new xe(t);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(r){const _=bo(i,g=>$e(g));h=fw(s.serverSyncTree_,c,_,o)}else{const _=$e(i);h=My(s.serverSyncTree_,c,_,o)}else if(r){const _=bo(i,g=>$e(g));h=ow(s.serverSyncTree_,c,_)}else{const _=$e(i);h=qr(s.serverSyncTree_,c,_)}let d=c;h.length>0&&(d=ia(s,c)),Kt(s.eventQueue_,d,h)}function ev(s,t){Wh(s,"connected",t),t===!1&&Gw(s)}function Bw(s,t){ft(t,(i,r)=>{Wh(s,i,r)})}function Wh(s,t,i){const r=new xe("/.info/"+t),o=$e(i);s.infoData_.updateSnapshot(r,o);const c=qr(s.infoSyncTree_,r,o);Kt(s.eventQueue_,r,c)}function Zh(s){return s.nextWriteId_++}function qw(s,t,i){const r=hw(s.serverSyncTree_,t);return r!=null?Promise.resolve(r):s.server_.get(t).then(o=>{const c=$e(o).withIndex(t._queryParams.getIndex());sh(s.serverSyncTree_,t,i,!0);let h;if(t._queryParams.loadsAllData())h=qr(s.serverSyncTree_,t._path,c);else{const d=Ir(s.serverSyncTree_,t);h=My(s.serverSyncTree_,t._path,c,d)}return Kt(s.eventQueue_,t._path,h),Uo(s.serverSyncTree_,t,i,null,!0),c},o=>(Vr(s,"get for query "+et(t)+" failed: "+o),Promise.reject(new Error(o))))}function jw(s,t,i,r,o){Vr(s,"set",{path:t.toString(),value:i,priority:r});const c=tu(s),h=$e(i,r),d=Bh(s.serverSyncTree_,t),_=zy(h,d,c),g=Zh(s),v=Iy(s.serverSyncTree_,t,_,g,!0);eu(s.eventQueue_,v),s.server_.put(t.toString(),h.val(!0),(S,k)=>{const x=S==="ok";x||vt("set at "+t+" failed: "+S);const q=_i(s.serverSyncTree_,g,!x);Kt(s.eventQueue_,t,q),rh(s,o,S,k)});const E=$h(s,t);ia(s,E),Kt(s.eventQueue_,E,[])}function Vw(s,t,i,r){Vr(s,"update",{path:t.toString(),value:i});let o=!0;const c=tu(s),h={};if(ft(i,(d,_)=>{o=!1,h[d]=Uy(Ye(t,d),$e(_),s.serverSyncTree_,c)}),o)ct("update() called with empty data.  Don't do anything."),rh(s,r,"ok",void 0);else{const d=Zh(s),_=lw(s.serverSyncTree_,t,h,d);eu(s.eventQueue_,_),s.server_.merge(t.toString(),i,(g,v)=>{const E=g==="ok";E||vt("update at "+t+" failed: "+g);const S=_i(s.serverSyncTree_,d,!E),k=S.length>0?ia(s,t):t;Kt(s.eventQueue_,k,S),rh(s,r,g,v)}),ft(i,g=>{const v=$h(s,Ye(t,g));ia(s,v)}),Kt(s.eventQueue_,t,[])}}function Gw(s){Vr(s,"onDisconnectEvents");const t=tu(s),i=No();Jf(s.onDisconnect_,Se(),(o,c)=>{const h=Uy(o,c,s.serverSyncTree_,t);gy(i,o,h)});let r=[];Jf(i,Se(),(o,c)=>{r=r.concat(qr(s.serverSyncTree_,o,c));const h=$h(s,o);ia(s,h)}),s.onDisconnect_=No(),Kt(s.eventQueue_,Se(),r)}function Yw(s,t,i){let r;oe(t._path)===".info"?r=sh(s.infoSyncTree_,t,i):r=sh(s.serverSyncTree_,t,i),Vy(s.eventQueue_,t._path,r)}function tv(s,t,i){let r;oe(t._path)===".info"?r=Uo(s.infoSyncTree_,t,i):r=Uo(s.serverSyncTree_,t,i),Vy(s.eventQueue_,t._path,r)}function Fw(s){s.persistentConnection_&&s.persistentConnection_.interrupt(Lw)}function Vr(s,...t){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),ct(i,...t)}function rh(s,t,i,r){t&&la(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;r&&(c+=": "+r);const h=new Error(c);h.code=o,t(h)}})}function Yy(s,t,i){return Bh(s.serverSyncTree_,t,i)||Z.EMPTY_NODE}function Jh(s,t=s.transactionQueueTree_){if(t||nu(s,t),ua(t)){const i=Qy(s,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&Qw(s,jr(t),i)}else Py(t)&&Jo(t,i=>{Jh(s,i)})}function Qw(s,t,i){const r=i.map(g=>g.currentWriteId),o=Yy(s,t,r);let c=o;const h=o.hash();for(let g=0;g<i.length;g++){const v=i[g];U(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=mt(t,v.path);c=c.updateChild(E,v.currentOutputSnapshotRaw)}const d=c.val(!0),_=t;s.server_.put(_.toString(),d,g=>{Vr(s,"transaction put response",{path:_.toString(),status:g});let v=[];if(g==="ok"){const E=[];for(let S=0;S<i.length;S++)i[S].status=2,v=v.concat(_i(s.serverSyncTree_,i[S].currentWriteId)),i[S].onComplete&&E.push(()=>i[S].onComplete(null,!0,i[S].currentOutputSnapshotResolved)),i[S].unwatcher();nu(s,Kh(s.transactionQueueTree_,t)),Jh(s,s.transactionQueueTree_),Kt(s.eventQueue_,t,v);for(let S=0;S<E.length;S++)la(E[S])}else{if(g==="datastale")for(let E=0;E<i.length;E++)i[E].status===3?i[E].status=4:i[E].status=0;else{vt("transaction at "+_.toString()+" failed: "+g);for(let E=0;E<i.length;E++)i[E].status=4,i[E].abortReason=g}ia(s,t)}},h)}function ia(s,t){const i=Fy(s,t),r=jr(i),o=Qy(s,i);return Kw(s,o,r),r}function Kw(s,t,i){if(t.length===0)return;const r=[];let o=[];const h=t.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<t.length;d++){const _=t[d],g=mt(i,_.path);let v=!1,E;if(U(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)v=!0,E=_.abortReason,o=o.concat(_i(s.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=Uw)v=!0,E="maxretry",o=o.concat(_i(s.serverSyncTree_,_.currentWriteId,!0));else{const S=Yy(s,_.path,h);_.currentInputSnapshot=S;const k=t[d].update(S.val());if(k!==void 0){$o("transaction failed: Data returned ",k,_.path);let x=$e(k);typeof k=="object"&&k!=null&&dn(k,".priority")||(x=x.updatePriority(S.getPriority()));const B=_.currentWriteId,ee=tu(s),pe=zy(x,S,ee);_.currentOutputSnapshotRaw=x,_.currentOutputSnapshotResolved=pe,_.currentWriteId=Zh(s),h.splice(h.indexOf(B),1),o=o.concat(Iy(s.serverSyncTree_,_.path,pe,_.currentWriteId,_.applyLocally)),o=o.concat(_i(s.serverSyncTree_,B,!0))}else v=!0,E="nodata",o=o.concat(_i(s.serverSyncTree_,_.currentWriteId,!0))}Kt(s.eventQueue_,i,o),o=[],v&&(t[d].status=2,function(S){setTimeout(S,Math.floor(0))}(t[d].unwatcher),t[d].onComplete&&(E==="nodata"?r.push(()=>t[d].onComplete(null,!1,t[d].currentInputSnapshot)):r.push(()=>t[d].onComplete(new Error(E),!1,null))))}nu(s,s.transactionQueueTree_);for(let d=0;d<r.length;d++)la(r[d]);Jh(s,s.transactionQueueTree_)}function Fy(s,t){let i,r=s.transactionQueueTree_;for(i=oe(t);i!==null&&ua(r)===void 0;)r=Kh(r,i),t=ze(t),i=oe(t);return r}function Qy(s,t){const i=[];return Ky(s,t,i),i.sort((r,o)=>r.order-o.order),i}function Ky(s,t,i){const r=ua(t);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);Jo(t,o=>{Ky(s,o,i)})}function nu(s,t){const i=ua(t);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,Hy(t,i.length>0?i:void 0)}Jo(t,r=>{nu(s,r)})}function $h(s,t){const i=jr(Fy(s,t)),r=Kh(s.transactionQueueTree_,t);return Sw(r,o=>{Bf(s,o)}),Bf(s,r),By(r,o=>{Bf(s,o)}),i}function Bf(s,t){const i=ua(t);if(i){const r=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(_i(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?Hy(t,void 0):i.length=c+1,Kt(s.eventQueue_,jr(t),o);for(let h=0;h<r.length;h++)la(r[h])}}/**
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
 */function Xw(s){let t="";const i=s.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function Ww(s){const t={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vt(`Invalid query segment '${i}' in query '${s}'`)}return t}const nv=function(s,t){const i=Zw(s),r=i.namespace;i.domain==="firebase.com"&&Ln(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||s1();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new $v(i.host,i.secure,r,o,t,"",r!==i.subdomain),path:new xe(i.pathString)}},Zw=function(s){let t="",i="",r="",o="",c="",h=!0,d="https",_=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(d=s.substring(0,g-1),s=s.substring(g+2));let v=s.indexOf("/");v===-1&&(v=s.length);let E=s.indexOf("?");E===-1&&(E=s.length),t=s.substring(0,Math.min(v,E)),v<E&&(o=Xw(s.substring(v,E)));const S=Ww(s.substring(Math.min(s.length,E)));g=t.indexOf(":"),g>=0?(h=d==="https"||d==="wss",_=parseInt(t.substring(g+1),10)):g=t.length;const k=t.slice(0,g);if(k.toLowerCase()==="localhost")i="localhost";else if(k.split(".").length<=2)i=k;else{const x=t.indexOf(".");r=t.substring(0,x).toLowerCase(),i=t.substring(x+1),c=r}"ns"in S&&(c=S.ns)}return{host:t,port:_,domain:i,subdomain:r,secure:h,scheme:d,pathString:o,namespace:c}};/**
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
 */class Jw{constructor(t,i,r,o){this.eventType=t,this.eventRegistration=i,this.snapshot=r,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class $w{constructor(t,i,r){this.eventRegistration=t,this.error=i,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Xy{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class ed{constructor(t,i,r,o){this._repo=t,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return he(this._path)?null:Rh(this._path)}get ref(){return new zn(this._repo,this._path)}get _queryIdentifier(){const t=qm(this._queryParams),i=Th(t);return i==="{}"?"default":i}get _queryObject(){return qm(this._queryParams)}isEqual(t){if(t=Et(t),!(t instanceof ed))return!1;const i=this._repo===t._repo,r=Nh(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+q1(this._path)}}class zn extends ed{constructor(t,i){super(t,i,new Mh,!1)}get parent(){const t=oy(this._path);return t===null?null:new zn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Mr{constructor(t,i,r){this._node=t,this.ref=i,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new xe(t),r=lh(this.ref,t);return new Mr(this._node.getChild(i),r,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>t(new Mr(o,lh(this.ref,r),Fe)))}hasChild(t){const i=new xe(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gt(s,t){return s=Et(s),s._checkNotDeleted("ref"),t!==void 0?lh(s._root,t):s._root}function lh(s,t){return s=Et(s),oe(s._path)===null?Dw("child","path",t):jy("child","path",t),new zn(s._repo,Ye(s._path,t))}function ci(s,t){s=Et(s),Iw("set",s._path),Rw("set",t,s._path);const i=new Lr;return jw(s._repo,s._path,t,null,i.wrapCallback(()=>{})),i.promise}function eA(s,t){Ow("update",t,s._path);const i=new Lr;return Vw(s._repo,s._path,t,i.wrapCallback(()=>{})),i.promise}function fo(s){s=Et(s);const t=new Xy(()=>{}),i=new iu(t);return qw(s._repo,s,i).then(r=>new Mr(r,new zn(s._repo,s._path),s._queryParams.getIndex()))}class iu{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const r=i._queryParams.getIndex();return new Jw("value",this,new Mr(t.snapshotNode,new zn(i._repo,i._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new $w(this,t,i):null}matches(t){return t instanceof iu?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tA(s,t,i,r,o){let c;if(typeof r=="object"&&(c=void 0,o=r),typeof r=="function"&&(c=r),o&&o.onlyOnce){const _=i,g=(v,E)=>{tv(s._repo,s,d),_(v,E)};g.userCallback=i.userCallback,g.context=i.context,i=g}const h=new Xy(i,c||void 0),d=new iu(h);return Yw(s._repo,s,d),()=>tv(s._repo,s,d)}function zo(s,t,i,r){return tA(s,"value",t,i,r)}$C(zn);sw(zn);/**
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
 */const nA="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let iA=!1;function sA(s,t,i,r){const o=t.lastIndexOf(":"),c=t.substring(0,o),h=Ur(c);s.repoInfo_=new $v(t,h,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),r&&(s.authTokenProvider_=r)}function aA(s,t,i,r,o){let c=r||s.options.databaseURL;c===void 0&&(s.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ct("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=nv(c,o),d=h.repoInfo,_;typeof process<"u"&&Tm&&(_=Tm[nA]),_?(c=`http://${_}?ns=${d.namespace}`,h=nv(c,o),d=h.repoInfo):h.repoInfo.secure;const g=new _1(s.name,s.options,t);Mw("Invalid Firebase Database URL",h),he(h.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const v=lA(d,s,g,new p1(s,i));return new oA(v,s)}function rA(s,t){const i=oh[t];(!i||i[s.key]!==s)&&Ln(`Database ${t}(${s.repoInfo_}) has already been deleted.`),Fw(s),delete i[s.key]}function lA(s,t,i,r){let o=oh[t.name];o||(o={},oh[t.name]=o);let c=o[s.toURLString()];return c&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new zw(s,iA,i,r),o[s.toURLString()]=c,c}class oA{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0,Go("Database",this._repo.repoInfo_.emulatorOptions!==null)),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zn(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Ln("Cannot call "+t+" on a deleted database.")}}function uh(s=Uv(),t){const i=Sh(s,"database").getImmediate({identifier:t});if(!i._instanceStarted){const r=Cb("database");r&&uA(i,...r)}return i}function uA(s,t,i,r={}){s=Et(s),s._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Ki(r,c.repoInfo_.emulatorOptions))return;Ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)r.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new _o(_o.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:wb(r.mockUserToken,s.app.options.projectId);h=new _o(d)}Ur(t)&&(Dv(t),Go("Database",!0)),sA(c,o,r,h)}/**
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
 */function cA(s){JT(ra),Js(new Xi("database",(t,{instanceIdentifier:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return aA(r,o,c,i)},"PUBLIC").setMultipleInstances(!0)),vi(Cm,wm,s),vi(Cm,wm,"esm2017")}Mn.prototype.simpleListen=function(s,t){this.sendRequest("q",{p:s},t)};Mn.prototype.echo=function(s,t){this.sendRequest("echo",{d:s},t)};cA();function td(s,t){var i={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(i[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(i[r[o]]=s[r[o]]);return i}function Wy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fA=Wy,Zy=new zr("auth","Firebase",Wy());/**
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
 */const Ho=new yh("@firebase/auth");function hA(s,...t){Ho.logLevel<=Me.WARN&&Ho.warn(`Auth (${ra}): ${s}`,...t)}function go(s,...t){Ho.logLevel<=Me.ERROR&&Ho.error(`Auth (${ra}): ${s}`,...t)}/**
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
 */function sn(s,...t){throw nd(s,...t)}function fn(s,...t){return nd(s,...t)}function Jy(s,t,i){const r=Object.assign(Object.assign({},fA()),{[t]:i});return new zr("auth","Firebase",r).create(t,{appName:s.name})}function xn(s){return Jy(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nd(s,...t){if(typeof s!="string"){const i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(i,...r)}return Zy.create(s,...t)}function W(s,t,...i){if(!s)throw nd(t,...i)}function Dn(s){const t="INTERNAL ASSERTION FAILED: "+s;throw go(t),new Error(t)}function Un(s,t){s||Dn(t)}/**
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
 */function ch(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function dA(){return iv()==="http:"||iv()==="https:"}function iv(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function pA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dA()||Ob()||"connection"in navigator)?navigator.onLine:!0}function _A(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Gr{constructor(t,i){this.shortDelay=t,this.longDelay=i,Un(i>t,"Short delay should be less than long delay!"),this.isMobile=vh()||Iv()}get(){return pA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function id(s,t){Un(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class $y{static initialize(t,i,r){this.fetchImpl=t,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vA=new Gr(3e4,6e4);function wi(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function Ai(s,t,i,r,o={}){return e0(s,o,async()=>{let c={},h={};r&&(t==="GET"?h=r:c={body:JSON.stringify(r)});const d=aa(Object.assign({key:s.config.apiKey},h)).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const g=Object.assign({method:t,headers:_},c);return Nb()||(g.referrerPolicy="no-referrer"),s.emulatorConfig&&Ur(s.emulatorConfig.host)&&(g.credentials="include"),$y.fetch()(await t0(s,s.config.apiHost,i,d),g)})}async function e0(s,t,i){s._canInitEmulator=!1;const r=Object.assign(Object.assign({},gA),t);try{const o=new EA(s),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw ho(s,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const d=c.ok?h.errorMessage:h.error.message,[_,g]=d.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(s,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw ho(s,"email-already-in-use",h);if(_==="USER_DISABLED")throw ho(s,"user-disabled",h);const v=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Jy(s,v,g);sn(s,v)}}catch(o){if(o instanceof Ci)throw o;sn(s,"network-request-failed",{message:String(o)})}}async function Yr(s,t,i,r,o={}){const c=await Ai(s,t,i,r,o);return"mfaPendingCredential"in c&&sn(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function t0(s,t,i,r){const o=`${t}${i}?${r}`,c=s,h=c.config.emulator?id(s.config,o):`${s.config.apiScheme}://${o}`;return mA.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function yA(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),vA.get())})}}function ho(s,t,i){const r={appName:s.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=fn(s,t,r);return o.customData._tokenResponse=i,o}function sv(s){return s!==void 0&&s.enterprise!==void 0}class SA{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return yA(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bA(s,t){return Ai(s,"GET","/v2/recaptchaConfig",wi(s,t))}/**
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
 */async function TA(s,t){return Ai(s,"POST","/v1/accounts:delete",t)}async function Po(s,t){return Ai(s,"POST","/v1/accounts:lookup",t)}/**
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
 */function br(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function CA(s,t=!1){const i=Et(s),r=await i.getIdToken(t),o=sd(r);W(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:br(qf(o.auth_time)),issuedAtTime:br(qf(o.iat)),expirationTime:br(qf(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function qf(s){return Number(s)*1e3}function sd(s){const[t,i,r]=s.split(".");if(t===void 0||i===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const o=So(i);return o?JSON.parse(o):(go("Failed to decode base64 JWT payload"),null)}catch(o){return go("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function av(s){const t=sd(s);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function xr(s,t,i=!1){if(i)return t;try{return await t}catch(r){throw r instanceof Ci&&wA(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function wA({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class AA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fh{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bo(s){var t;const i=s.auth,r=await s.getIdToken(),o=await xr(s,Po(i,{idToken:r}));W(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];s._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?n0(c.providerUserInfo):[],d=NA(s.providerData,h),_=s.isAnonymous,g=!(s.email&&c.passwordHash)&&!(d!=null&&d.length),v=_?g:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:d,metadata:new fh(c.createdAt,c.lastLoginAt),isAnonymous:v};Object.assign(s,E)}async function RA(s){const t=Et(s);await Bo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function NA(s,t){return[...s.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function n0(s){return s.map(t=>{var{providerId:i}=t,r=td(t,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function OA(s,t){const i=await e0(s,{},async()=>{const r=aa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,h=await t0(s,o,"/v1/token",`key=${c}`),d=await s._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",$y.fetch()(h,{method:"POST",headers:d,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function DA(s,t){return Ai(s,"POST","/v2/accounts:revokeToken",wi(s,t))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):av(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){W(t.length!==0,"internal-error");const i=av(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await OA(t,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(t,i,r){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,h=new Ks;return r&&(W(typeof r=="string","internal-error",{appName:t}),h.refreshToken=r),o&&(W(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(W(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function ui(s,t){W(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:i,auth:r,stsTokenManager:o}=t,c=td(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new fh(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await xr(this,this.stsTokenManager.getToken(this.auth,t));return W(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return CA(this,t)}reload(){return RA(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),i&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(xn(this.auth));const t=await this.getIdToken();return await xr(this,TA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var r,o,c,h,d,_,g,v;const E=(r=i.displayName)!==null&&r!==void 0?r:void 0,S=(o=i.email)!==null&&o!==void 0?o:void 0,k=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,x=(h=i.photoURL)!==null&&h!==void 0?h:void 0,q=(d=i.tenantId)!==null&&d!==void 0?d:void 0,B=(_=i._redirectEventId)!==null&&_!==void 0?_:void 0,ee=(g=i.createdAt)!==null&&g!==void 0?g:void 0,pe=(v=i.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:re,emailVerified:te,isAnonymous:G,providerData:ge,stsTokenManager:_e}=i;W(re&&_e,t,"internal-error");const je=Ks.fromJSON(this.name,_e);W(typeof re=="string",t,"internal-error"),ui(E,t.name),ui(S,t.name),W(typeof te=="boolean",t,"internal-error"),W(typeof G=="boolean",t,"internal-error"),ui(k,t.name),ui(x,t.name),ui(q,t.name),ui(B,t.name),ui(ee,t.name),ui(pe,t.name);const be=new tn({uid:re,auth:t,email:S,emailVerified:te,displayName:E,isAnonymous:G,photoURL:x,phoneNumber:k,tenantId:q,stsTokenManager:je,createdAt:ee,lastLoginAt:pe});return ge&&Array.isArray(ge)&&(be.providerData=ge.map(X=>Object.assign({},X))),B&&(be._redirectEventId=B),be}static async _fromIdTokenResponse(t,i,r=!1){const o=new Ks;o.updateFromServerResponse(i);const c=new tn({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await Bo(c),c}static async _fromGetAccountInfoResponse(t,i,r){const o=i.users[0];W(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?n0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),d=new Ks;d.updateFromIdToken(r);const _=new tn({uid:o.localId,auth:t,stsTokenManager:d,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new fh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,g),_}}/**
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
 */const rv=new Map;function In(s){Un(s instanceof Function,"Expected a class definition");let t=rv.get(s);return t?(Un(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,rv.set(s,t),t)}/**
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
 */class i0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}i0.type="NONE";const lv=i0;/**
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
 */function mo(s,t,i){return`firebase:${s}:${t}:${i}`}class Xs{constructor(t,i,r){this.persistence=t,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=mo(this.userKey,o.apiKey,c),this.fullPersistenceKey=mo("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await Po(this.auth,{idToken:t}).catch(()=>{});return i?tn._fromGetAccountInfoResponse(this.auth,i,t):null}return tn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,r="authUser"){if(!i.length)return new Xs(In(lv),t,r);const o=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=o[0]||In(lv);const h=mo(r,t.config.apiKey,t.name);let d=null;for(const g of i)try{const v=await g._get(h);if(v){let E;if(typeof v=="string"){const S=await Po(t,{idToken:v}).catch(()=>{});if(!S)break;E=await tn._fromGetAccountInfoResponse(t,S,v)}else E=tn._fromJSON(t,v);g!==c&&(d=E),c=g;break}}catch{}const _=o.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new Xs(c,t,r):(c=_[0],d&&await c._set(h,d.toJSON()),await Promise.all(i.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new Xs(c,t,r))}}/**
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
 */function ov(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(l0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(s0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(u0(t))return"Blackberry";if(c0(t))return"Webos";if(a0(t))return"Safari";if((t.includes("chrome/")||r0(t))&&!t.includes("edge/"))return"Chrome";if(o0(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function s0(s=yt()){return/firefox\//i.test(s)}function a0(s=yt()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function r0(s=yt()){return/crios\//i.test(s)}function l0(s=yt()){return/iemobile/i.test(s)}function o0(s=yt()){return/android/i.test(s)}function u0(s=yt()){return/blackberry/i.test(s)}function c0(s=yt()){return/webos/i.test(s)}function ad(s=yt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function IA(s=yt()){var t;return ad(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function MA(){return Db()&&document.documentMode===10}function f0(s=yt()){return ad(s)||o0(s)||c0(s)||u0(s)||/windows phone/i.test(s)||l0(s)}/**
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
 */function h0(s,t=[]){let i;switch(s){case"Browser":i=ov(yt());break;case"Worker":i=`${ov(yt())}-${s}`;break;default:i=s}const r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${ra}/${r}`}/**
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
 */class xA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const r=c=>new Promise((h,d)=>{try{const _=t(c);h(_)}catch(_){d(_)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const r of this.queue)await r(t),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kA(s,t={}){return Ai(s,"GET","/v2/passwordPolicy",wi(s,t))}/**
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
 */const LA=6;class UA{constructor(t){var i,r,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:LA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,r,o,c,h,d;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,_),this.validatePasswordCharacterOptions(t,_),_.isValid&&(_.isValid=(i=_.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(r=_.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(d=_.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),_}validatePasswordLengthOptions(t,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=t.length>=r),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class zA{constructor(t,i,r,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new xA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=In(i)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Po(this,{idToken:t}),r=await tn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Ft(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,d=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(t);(!h||h===d)&&(_!=null&&_.user)&&(o=_.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Bo(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=_A()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ft(this.app))return Promise.reject(xn(this));const i=t?Et(t):null;return i&&W(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ft(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await kA(this),i=new UA(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new zr("auth","Firebase",t())}onAuthStateChanged(t,i,r){return this.registerStateListener(this.authStateSubscription,t,i,r)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,r){return this.registerStateListener(this.idTokenSubscription,t,i,r)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await DA(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const r=await this.getOrInitRedirectPersistenceManager(i);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&In(t)||this._popupRedirectResolver;W(i,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[In(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(d,this,"internal-error"),d.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,r,o);return()=>{h=!0,_()}}else{const _=t.addObserver(i);return()=>{h=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=h0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&hA(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function is(s){return Et(s)}class uv{constructor(t){this.auth=t,this.observer=null,this.addObserver=Bb(i=>this.observer=i)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HA(s){su=s}function d0(s){return su.loadJS(s)}function PA(){return su.recaptchaEnterpriseScript}function BA(){return su.gapiScript}function qA(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class jA{constructor(){this.enterprise=new VA}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class VA{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const GA="recaptcha-enterprise",p0="NO_RECAPTCHA";class YA{constructor(t){this.type=GA,this.auth=is(t)}async verify(t="verify",i=!1){async function r(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,d)=>{bA(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new SA(_);return c.tenantId==null?c._agentRecaptchaConfig=g:c._tenantRecaptchaConfigs[c.tenantId]=g,h(g.siteKey)}}).catch(_=>{d(_)})})}function o(c,h,d){const _=window.grecaptcha;sv(_)?_.enterprise.ready(()=>{_.enterprise.execute(c,{action:t}).then(g=>{h(g)}).catch(()=>{h(p0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jA().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{r(this.auth).then(d=>{if(!i&&sv(window.grecaptcha))o(d,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=PA();_.length!==0&&(_+=d),d0(_).then(()=>{o(d,c,h)}).catch(g=>{h(g)})}}).catch(d=>{h(d)})})}}async function cv(s,t,i,r=!1,o=!1){const c=new YA(s);let h;if(o)h=p0;else try{h=await c.verify(i)}catch{h=await c.verify(i,!0)}const d=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const _=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const _=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function hh(s,t,i,r,o){var c;if(!((c=s._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await cv(s,t,i,i==="getOobCode");return r(s,h)}else return r(s,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await cv(s,t,i,i==="getOobCode");return r(s,d)}else return Promise.reject(h)})}/**
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
 */function FA(s,t){const i=Sh(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Ki(c,t??{}))return o;sn(o,"already-initialized")}return i.initialize({options:t})}function QA(s,t){const i=(t==null?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(In);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function KA(s,t,i){const r=is(s);W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,c=_0(t),{host:h,port:d}=XA(t),_=d===null?"":`:${d}`,g={url:`${c}//${h}${_}/`},v=Object.freeze({host:h,port:d,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(Ki(g,r.config.emulator)&&Ki(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Ur(h)?(Go("Auth",!0),Dv(`${c}//${h}${_}`)):WA()}function _0(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function XA(s){const t=_0(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:fv(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:fv(h)}}}function fv(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function WA(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class rd{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return Dn("not implemented")}_getIdTokenResponse(t){return Dn("not implemented")}_linkToIdToken(t,i){return Dn("not implemented")}_getReauthenticationResolver(t){return Dn("not implemented")}}async function ZA(s,t){return Ai(s,"POST","/v1/accounts:signUp",t)}/**
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
 */async function JA(s,t){return Yr(s,"POST","/v1/accounts:signInWithPassword",wi(s,t))}/**
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
 */async function $A(s,t){return Yr(s,"POST","/v1/accounts:signInWithEmailLink",wi(s,t))}async function eR(s,t){return Yr(s,"POST","/v1/accounts:signInWithEmailLink",wi(s,t))}/**
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
 */class kr extends rd{constructor(t,i,r,o=null){super("password",r),this._email=t,this._password=i,this._tenantId=o}static _fromEmailAndPassword(t,i){return new kr(t,i,"password")}static _fromEmailAndCode(t,i,r=null){return new kr(t,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hh(t,i,"signInWithPassword",JA);case"emailLink":return $A(t,{email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const r={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hh(t,r,"signUpPassword",ZA);case"emailLink":return eR(t,{idToken:i,email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ws(s,t){return Yr(s,"POST","/v1/accounts:signInWithIdp",wi(s,t))}/**
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
 */const tR="http://localhost";class $i extends rd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new $i(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):sn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o}=i,c=td(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new $i(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Ws(t,i)}_linkToIdToken(t,i){const r=this.buildRequest();return r.idToken=i,Ws(t,r)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ws(t,i)}buildRequest(){const t={requestUri:tR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=aa(i)}return t}}/**
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
 */function nR(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iR(s){const t=pr(_r(s)).link,i=t?pr(_r(t)).deep_link_id:null,r=pr(_r(s)).deep_link_id;return(r?pr(_r(r)).link:null)||r||i||t||s}class ld{constructor(t){var i,r,o,c,h,d;const _=pr(_r(t)),g=(i=_.apiKey)!==null&&i!==void 0?i:null,v=(r=_.oobCode)!==null&&r!==void 0?r:null,E=nR((o=_.mode)!==null&&o!==void 0?o:null);W(g&&v&&E,"argument-error"),this.apiKey=g,this.operation=E,this.code=v,this.continueUrl=(c=_.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=_.lang)!==null&&h!==void 0?h:null,this.tenantId=(d=_.tenantId)!==null&&d!==void 0?d:null}static parseLink(t){const i=iR(t);try{return new ld(i)}catch{return null}}}/**
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
 */class ca{constructor(){this.providerId=ca.PROVIDER_ID}static credential(t,i){return kr._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const r=ld.parseLink(i);return W(r,"argument-error"),kr._fromEmailAndCode(t,r.code,r.tenantId)}}ca.PROVIDER_ID="password";ca.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ca.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class g0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends g0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class fi extends Fr{constructor(){super("facebook.com")}static credential(t){return $i._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fi.credential(t.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
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
 */class hi extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return $i._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:r}=t;if(!i&&!r)return null;try{return hi.credential(i,r)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
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
 */class di extends Fr{constructor(){super("github.com")}static credential(t){return $i._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return di.credential(t.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
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
 */class pi extends Fr{constructor(){super("twitter.com")}static credential(t,i){return $i._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return pi.credentialFromTaggedObject(t)}static credentialFromError(t){return pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=t;if(!i||!r)return null;try{return pi.credential(i,r)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */async function sR(s,t){return Yr(s,"POST","/v1/accounts:signUp",wi(s,t))}/**
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
 */class es{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,r,o=!1){const c=await tn._fromIdTokenResponse(t,r,o),h=hv(r);return new es({user:c,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(t,i,r){await t._updateTokensIfNecessary(r,!0);const o=hv(r);return new es({user:t,providerId:o,_tokenResponse:r,operationType:i})}}function hv(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class qo extends Ci{constructor(t,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,i,r,o){return new qo(t,i,r,o)}}function m0(s,t,i,r){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(s,c,t,r):c})}async function aR(s,t,i=!1){const r=await xr(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return es._forOperation(s,"link",r)}/**
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
 */async function rR(s,t,i=!1){const{auth:r}=s;if(Ft(r.app))return Promise.reject(xn(r));const o="reauthenticate";try{const c=await xr(s,m0(r,o,t,s),i);W(c.idToken,r,"internal-error");const h=sd(c.idToken);W(h,r,"internal-error");const{sub:d}=h;return W(s.uid===d,r,"user-mismatch"),es._forOperation(s,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),c}}/**
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
 */async function v0(s,t,i=!1){if(Ft(s.app))return Promise.reject(xn(s));const r="signIn",o=await m0(s,r,t),c=await es._fromIdTokenResponse(s,r,o);return i||await s._updateCurrentUser(c.user),c}async function lR(s,t){return v0(is(s),t)}/**
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
 */async function y0(s){const t=is(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function oR(s,t,i){if(Ft(s.app))return Promise.reject(xn(s));const r=is(s),h=await hh(r,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sR).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&y0(s),_}),d=await es._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(d.user),d}function uR(s,t,i){return Ft(s.app)?Promise.reject(xn(s)):lR(Et(s),ca.credential(t,i)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&y0(s),r})}function cR(s,t,i,r){return Et(s).onIdTokenChanged(t,i,r)}function fR(s,t,i){return Et(s).beforeAuthStateChanged(t,i)}function hR(s,t,i,r){return Et(s).onAuthStateChanged(t,i,r)}function dR(s){return Et(s).signOut()}const jo="__sak";/**
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
 */class E0{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pR=1e3,_R=10;class S0 extends E0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=f0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&t(i,o,r)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,d,_)=>{this.notifyListeners(h,_)});return}const r=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);MA()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,_R):o()}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:r}),!0)})},pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}S0.type="LOCAL";const gR=S0;/**
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
 */class b0 extends E0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}b0.type="SESSION";const T0=b0;/**
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
 */function mR(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class au{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const r=new au(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:r,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(h).map(async g=>g(i.origin,c)),_=await mR(d);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}au.receivers=[];/**
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
 */function od(s="",t=10){let i="";for(let r=0;r<t;r++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class vR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((d,_)=>{const g=od("",20);o.port1.start();const v=setTimeout(()=>{_(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),d(S.data.response);break;default:clearTimeout(v),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:g,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function hn(){return window}function yR(s){hn().location.href=s}/**
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
 */function C0(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SR(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function bR(){return C0()?self:null}/**
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
 */const w0="firebaseLocalStorageDb",TR=1,Vo="firebaseLocalStorage",A0="fbase_key";class Qr{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function ru(s,t){return s.transaction([Vo],t?"readwrite":"readonly").objectStore(Vo)}function CR(){const s=indexedDB.deleteDatabase(w0);return new Qr(s).toPromise()}function dh(){const s=indexedDB.open(w0,TR);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Vo,{keyPath:A0})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Vo)?t(r):(r.close(),await CR(),t(await dh()))})})}async function dv(s,t,i){const r=ru(s,!0).put({[A0]:t,value:i});return new Qr(r).toPromise()}async function wR(s,t){const i=ru(s,!1).get(t),r=await new Qr(i).toPromise();return r===void 0?null:r.value}function pv(s,t){const i=ru(s,!0).delete(t);return new Qr(i).toPromise()}const AR=800,RR=3;class R0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dh(),this.db)}async _withRetries(t){let i=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(i++>RR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=au._getInstance(bR()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||SR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await dh();return await dv(t,jo,"1"),await pv(t,jo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>dv(r,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(r=>wR(r,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>pv(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=ru(o,!1).getAll();return new Qr(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const NR=R0;new Gr(3e4,6e4);/**
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
 */function OR(s,t){return t?In(t):(W(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class ud extends rd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ws(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ws(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ws(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function DR(s){return v0(s.auth,new ud(s),s.bypassAuthState)}function IR(s){const{auth:t,user:i}=s;return W(i,t,"internal-error"),rR(i,new ud(s),s.bypassAuthState)}async function MR(s){const{auth:t,user:i}=s;return W(i,t,"internal-error"),aR(i,new ud(s),s.bypassAuthState)}/**
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
 */class N0{constructor(t,i,r,o,c=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:h,type:d}=t;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(_))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return DR;case"linkViaPopup":case"linkViaRedirect":return MR;case"reauthViaPopup":case"reauthViaRedirect":return IR;default:sn(this.auth,"internal-error")}}resolve(t){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xR=new Gr(2e3,1e4);class Ys extends N0{constructor(t,i,r,o,c){super(t,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const t=od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xR.get())};t()}}Ys.currentPopupAction=null;/**
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
 */const kR="pendingRedirect",vo=new Map;class LR extends N0{constructor(t,i,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let t=vo.get(this.auth._key());if(!t){try{const r=await UR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(i){t=()=>Promise.reject(i)}vo.set(this.auth._key(),t)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UR(s,t){const i=PR(t),r=HR(s);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function zR(s,t){vo.set(s._key(),t)}function HR(s){return In(s._redirectPersistence)}function PR(s){return mo(kR,s.config.apiKey,s.name)}async function BR(s,t,i=!1){if(Ft(s.app))return Promise.reject(xn(s));const r=is(s),o=OR(r,t),h=await new LR(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,t)),h}/**
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
 */const qR=10*60*1e3;class jR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(i=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!VR(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var r;if(t.error&&!O0(t)){const o=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(fn(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const r=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=qR&&this.cachedEventUids.clear(),this.cachedEventUids.has(_v(t))}saveEventToCache(t){this.cachedEventUids.add(_v(t)),this.lastProcessedEventTime=Date.now()}}function _v(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function O0({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function VR(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(s);default:return!1}}/**
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
 */async function GR(s,t={}){return Ai(s,"GET","/v1/projects",t)}/**
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
 */const YR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FR=/^https?/;async function QR(s){if(s.config.emulator)return;const{authorizedDomains:t}=await GR(s);for(const i of t)try{if(KR(i))return}catch{}sn(s,"unauthorized-domain")}function KR(s){const t=ch(),{protocol:i,hostname:r}=new URL(t);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!FR.test(i))return!1;if(YR.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const XR=new Gr(3e4,6e4);function gv(){const s=hn().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function WR(s){return new Promise((t,i)=>{var r,o,c;function h(){gv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gv(),i(fn(s,"network-request-failed"))},timeout:XR.get()})}if(!((o=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=hn().gapi)===null||c===void 0)&&c.load)h();else{const d=qA("iframefcb");return hn()[d]=()=>{gapi.load?h():i(fn(s,"network-request-failed"))},d0(`${BA()}?onload=${d}`).catch(_=>i(_))}}).catch(t=>{throw yo=null,t})}let yo=null;function ZR(s){return yo=yo||WR(s),yo}/**
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
 */const JR=new Gr(5e3,15e3),$R="__/auth/iframe",eN="emulator/auth/iframe",tN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iN(s){const t=s.config;W(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?id(t,eN):`https://${s.config.authDomain}/${$R}`,r={apiKey:t.apiKey,appName:s.name,v:ra},o=nN.get(s.config.apiHost);o&&(r.eid=o);const c=s._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${aa(r).slice(1)}`}async function sN(s){const t=await ZR(s),i=hn().gapi;return W(i,s,"internal-error"),t.open({where:document.body,url:iN(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tN,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=fn(s,"network-request-failed"),d=hn().setTimeout(()=>{c(h)},JR.get());function _(){hn().clearTimeout(d),o(r)}r.ping(_).then(_,()=>{c(h)})}))}/**
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
 */const aN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rN=500,lN=600,oN="_blank",uN="http://localhost";class mv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cN(s,t,i,r=rN,o=lN){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const _=Object.assign(Object.assign({},aN),{width:r.toString(),height:o.toString(),top:c,left:h}),g=yt().toLowerCase();i&&(d=r0(g)?oN:i),s0(g)&&(t=t||uN,_.scrollbars="yes");const v=Object.entries(_).reduce((S,[k,x])=>`${S}${k}=${x},`,"");if(IA(g)&&d!=="_self")return fN(t||"",d),new mv(null);const E=window.open(t||"",d,v);W(E,s,"popup-blocked");try{E.focus()}catch{}return new mv(E)}function fN(s,t){const i=document.createElement("a");i.href=s,i.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const hN="__/auth/handler",dN="emulator/auth/handler",pN=encodeURIComponent("fac");async function vv(s,t,i,r,o,c){W(s.config.authDomain,s,"auth-domain-config-required"),W(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:r,v:ra,eventId:o};if(t instanceof g0){t.setDefaultLanguage(s.languageCode),h.providerId=t.providerId||"",Vf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,E]of Object.entries({}))h[v]=E}if(t instanceof Fr){const v=t.getScopes().filter(E=>E!=="");v.length>0&&(h.scopes=v.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const _=await s._getAppCheckToken(),g=_?`#${pN}=${encodeURIComponent(_)}`:"";return`${_N(s)}?${aa(d).slice(1)}${g}`}function _N({config:s}){return s.emulator?id(s,dN):`https://${s.authDomain}/${hN}`}/**
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
 */const jf="webStorageSupport";class gN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T0,this._completeRedirectFn=BR,this._overrideRedirectResult=zR}async _openPopup(t,i,r,o){var c;Un((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await vv(t,i,r,ch(),o);return cN(t,h,od())}async _openRedirect(t,i,r,o){await this._originValidation(t);const c=await vv(t,i,r,ch(),o);return yR(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Un(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(t);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(t){const i=await sN(t),r=new jR(t);return i.register("authEvent",o=>(W(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=i,r}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(jf,{type:jf},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[jf];h!==void 0&&i(!!h),sn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=QR(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return f0()||a0()||ad()}}const mN=gN;var yv="@firebase/auth",Ev="1.10.4";/**
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
 */class vN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yN(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EN(s){Js(new Xi("auth",(t,{options:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=r.options;W(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h0(s)},g=new zA(r,o,c,_);return QA(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,r)=>{t.getProvider("auth-internal").initialize()})),Js(new Xi("auth-internal",t=>{const i=is(t.getProvider("auth").getImmediate());return(r=>new vN(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi(yv,Ev,yN(s)),vi(yv,Ev,"esm2017")}/**
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
 */const SN=5*60,bN=Ov("authIdTokenMaxAge")||SN;let Sv=null;const TN=s=>async t=>{const i=t&&await t.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>bN)return;const o=i==null?void 0:i.token;Sv!==o&&(Sv=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function CN(s=Uv()){const t=Sh(s,"auth");if(t.isInitialized())return t.getImmediate();const i=FA(s,{popupRedirectResolver:mN,persistence:[NR,gR,T0]}),r=Ov("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=TN(c.toString());fR(i,h,()=>h(i.currentUser)),cR(i,d=>h(d))}}const o=Rv("auth");return o?KA(i,`http://${o}`):Go("Auth",!1),i}function wN(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}HA({loadJS(s){return new Promise((t,i)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=t,r.onerror=o=>{const c=fn("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",wN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EN("Browser");var AN="firebase",RN="11.7.3";/**
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
 */vi(AN,RN,"app");const NN={apiKey:"AIzaSyDWMkL3P7OWlosSFXXRg8gvUQg6-7Y9uu8",authDomain:"esp32door-control.firebaseapp.com",databaseURL:"https://esp32door-control-default-rtdb.firebaseio.com/",projectId:"esp32door-control",storageBucket:"esp32door-control.appspot.com",messagingSenderId:"605127991992",appId:"1:605127991992:web:4d0dccf6ae2d874603ca4d",measurementId:"G-91SJ3GLZ0Z"},D0=Lv(NN),po=CN(D0),Jt=uh(D0),ON=15,DN=()=>Array.from({length:8},()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random()*62))).join("");function I0(){const[s,t]=ve.useState(null),[i,r]=ve.useState([]),[o,c]=ve.useState({}),[h,d]=ve.useState({}),[_,g]=ve.useState(!1),[v,E]=ve.useState(!1),[S,k]=ve.useState(null),x=ve.useRef(null),q=ve.useCallback(()=>{x.current&&(clearTimeout(x.current),x.current=null),k(null)},[]),B=ve.useCallback(X=>{x.current&&clearTimeout(x.current),k(X),X&&(x.current=setTimeout(()=>{k(null),x.current=null},4e3))},[]),ee=async(X,de)=>{q();try{(await oR(po,X,de)).user&&console.log("User registered and initial tokens set.")}catch(ie){ie.code==="auth/email-already-in-use"?B("Email already registered"):ie.code==="auth/weak-password"?B("6 characters or more"):ie.code==="auth/invalid-email"?B("Invalid email"):B("Registration failed. Please try again.")}},pe=async(X,de)=>{q();try{await uR(po,X,de)}catch(ie){["auth/user-not-found","auth/invalid-credential","auth/wrong-password","auth/invalid-email"].includes(ie.code),B("Wrong email or password")}},re=async()=>{q(),await dR(po)},te=async X=>{const de=`tokens/${X}/buttonStatus`,ie=await fo(gt(Jt,de)),Ae=(ie.exists()?ie.val():"closed")==="open"?"closed":"open";await ci(gt(Jt,de),Ae)},G=async(X,de)=>{if(!s||!i.includes(X))return;const ie=`tokens/${X}/buttonName`;try{await ci(gt(Jt,ie),de||null)}catch(we){console.error("Error updating button name:",we),B("Failed to update name.")}},ge=async(X,de)=>{await ci(gt(Jt,`tokens/${X}/authorizedUsers/${de}`),!0);const ie=gt(Jt,`users/${de}/deviceTokens`),we=await fo(ie),Ae=we.exists()&&Array.isArray(we.val())?we.val():[];Ae.includes(X)||await ci(ie,[...Ae,X])},_e=async(X,de)=>{await ci(gt(Jt,`tokens/${X}/authorizedUsers/${de}`),null);const ie=gt(Jt,`users/${de}/deviceTokens`),we=await fo(ie),Ae=we.exists()&&Array.isArray(we.val())?we.val():[];Ae.includes(X)&&await ci(ie,Ae.filter(Be=>Be!==X))},je=ve.useCallback(async X=>{const de=gt(Jt,`users/${X}/deviceTokens`),ie=await fo(de);let we=[];if(ie.exists()&&Array.isArray(ie.val()))we=ie.val();else{const Ae=Array.from({length:ON},DN);we=Ae;const Be={[`/users/${X}/deviceTokens`]:we};Ae.forEach(O=>{Be[`/tokens/${O}`]={owner:X,authorizedUsers:{[X]:!0},buttonStatus:"hello"}}),await eA(gt(Jt),Be)}r(we),g(!1),be(we)},[]),be=X=>{const de={},ie={};if(c({}),d({}),g(!1),X.length===0){g(!0);return}const we=()=>{Object.keys(de).length===X.length&&Object.keys(ie).length===X.length&&g(!0)};X.forEach(Ae=>{const Be=gt(Jt,`tokens/${Ae}/buttonStatus`);zo(Be,z=>{let Y=z.val();typeof Y!="string"&&(Y="closed"),c(Te=>({...Te,[Ae]:Y})),de[Ae]=!0,we()},z=>{console.error(`Error listening to status for ${Ae}:`,z),de[Ae]=!0,we()});const O=gt(Jt,`tokens/${Ae}/buttonName`);zo(O,z=>{const Y=z.val()||null;d(Te=>({...Te,[Ae]:Y})),ie[Ae]=!0,we()},z=>{console.error(`Error listening to name for ${Ae}:`,z),ie[Ae]=!0,we()})})};return ve.useEffect(()=>hR(po,de=>{t(de),de?je(de.uid):(r([]),c({}),d({}),g(!1),q()),E(!0)}),[je,q]),ve.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]),{user:s,tokens:i,buttonState:o,buttonNames:h,isButtonDataLoaded:_,authChecked:v,error:S,register:ee,login:pe,logout:re,toggleButton:te,updateButtonName:G,shareToken:ge,revokeShare:_e,clearError:q}}function IN({onShowControlPanel:s,onShowSettings:t,onShowCameraPage:i,onLogout:r}){console.log("CameraPage component is rendering");const[o,c]=ve.useState({}),[h,d]=ve.useState({}),[_,g]=ve.useState(!0),{tokens:v,authChecked:E}=I0();ve.useEffect(()=>{if(!E)return;const x=uh(),q=[],B={};if(v.length===0){g(!1),c({}),d({});return}return g(!0),v.forEach(ee=>{const pe=gt(x,`tokens/${ee}/camera/imageUrl`),re=gt(x,`tokens/${ee}/button name`);console.log("📡 Watching:",`tokens/${ee}/camera/imageUrl`,`tokens/${ee}/button name`),B[ee]={imageUrlLoaded:!1,buttonNameLoaded:!1};const te=zo(pe,ge=>{const _e=ge.val();c(be=>{const X={...be};return _e&&typeof _e=="string"&&_e.startsWith("http")?X[ee]=_e+`&cb=${Date.now()}`:delete X[ee],X}),B[ee].imageUrlLoaded=!0,B[ee].buttonNameLoaded&&(B[ee]=!0),Object.values(B).every(be=>be===!0)&&g(!1)});q.push(te);const G=zo(re,ge=>{const _e=ge.val();d(be=>{const X={...be};return _e?X[ee]=_e:delete X[ee],X}),B[ee].buttonNameLoaded=!0,B[ee].imageUrlLoaded&&(B[ee]=!0),Object.values(B).every(be=>be===!0)&&g(!1)});q.push(G)}),()=>{q.forEach(ee=>ee())}},[v,E]);const S=async()=>{const x=uh();for(const q of v){const B=`tokens/${q}/photo`;try{await ci(gt(x,B),"snap"),console.log(`Sent 'snap' command to token: ${q}`),setTimeout(async()=>{await ci(gt(x,B),"hello"),console.log(`Sent 'hello' command to token: ${q}`)},1e3)}catch(ee){console.error(`Error sending command to token ${q}:`,ee)}}},k=Object.keys(o).length>0;return $.jsxs("div",{className:"camera-fullscreen-container",children:[$.jsx("button",{onClick:S,style:{marginTop:"20px",marginBottom:"20px",marginRight:"20px",marginLeft:"20px",padding:"10px 20px",fontSize:"16px",color:"white",backgroundColor:"#faaccc"},children:"Refresh"}),_?$.jsx("p",{style:{textAlign:"center",marginTop:"0px",minHeight:"300px"},children:"Loading cameras..."}):k?$.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"10px",width:"100%",maxWidth:"100vw",overflowX:"hidden"},children:v.map(x=>o[x]?$.jsxs("div",{style:{marginBottom:"90px",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[$.jsx("h3",{style:{marginBottom:"30px"},children:h[x]||`Token: ${x}`}),$.jsx("img",{src:o[x],alt:`Camera Snapshot for ${x}`,style:{width:"100%",maxWidth:"400px",height:"auto",objectFit:"contain",borderRadius:"16px",boxShadow:"0 5px 13px rgba(0, 0, 0, 0.2)",transform:"rotate(90deg)"}})]},x):null)}):$.jsx("p",{style:{textAlign:"center",marginTop:"70px",minHeight:"300px"},children:"No images available."}),$.jsx(_h,{onShowControlPanel:s,onShowSettings:t,onShowCameraPage:i,onLogout:r})]})}window.navigator.standalone===!0&&document.documentElement.classList.add("ios-standalone");function MN(){const{user:s,token:t,tokens:i,buttonState:r,isButtonDataLoaded:o,buttonNames:c,updateButtonName:h,error:d,register:_,login:g,logout:v,toggleButton:E,clearError:S}=I0(),[k,x]=ve.useState(!1),[q,B]=ve.useState(!1),[ee,pe]=ve.useState(!1),[re,te]=ve.useState(()=>{const be=localStorage.getItem("settingsMessages");return be?JSON.parse(be):[]});ve.useEffect(()=>{localStorage.setItem("settingsMessages",JSON.stringify(re))},[re]),ve.useEffect(()=>{if(d){x(!0);const be=setTimeout(()=>x(!1),3500);return()=>clearTimeout(be)}else x(!1)},[d]);const G=()=>{B(!1),pe(!1)},ge=()=>{B(!0),pe(!1)},_e=()=>{pe(!0),B(!1)},je=()=>{B(!1)};return $.jsxs("div",{id:"appContainer",className:"fade-in background",children:[d&&$.jsx("div",{className:`error-banner ${k?"visible":"fade-out"}`,children:d}),$.jsxs("div",{className:s?"control-panel-screen":"container",id:"containerEl",children:[$.jsx("h1",{className:"title",children:s?"":"Welcome to the future"}),s?q?$.jsx(pb,{tokens:i,onLogout:v,onClose:je,onReturnToControlPanel:G,message:re,onShowSettings:ge,onShowCameraPage:_e}):ee?$.jsx(IN,{token:t,tokens:i,onShowControlPanel:G,onShowSettings:ge,onShowCameraPage:_e,onLogout:v,buttonNames:c}):$.jsx(db,{token:t,tokens:i,onToggleButtonPress:(be,X)=>te(de=>[...de,`${be} ${X} ${new Date().toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",hourCycle:"h23"})}`]),buttonState:r,buttonNames:c,isButtonDataLoaded:o,onToggle:E,onUpdateName:h,onLogout:v,onShowSettings:ge,onShowCameraPage:_e}):$.jsx(hb,{onLogin:g,onRegister:_,error:d,setError:S})]})]})}window.navigator.standalone===!0&&document.documentElement.classList.add("ios-standalone");fb.createRoot(document.getElementById("root")).render($.jsx(ib.StrictMode,{children:$.jsx(MN,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/STARR/service-worker.js").then(s=>{console.log("✅ Service Worker registered with scope:",s.scope),s.onupdatefound=()=>{const t=s.installing;t&&(t.onstatechange=()=>{t.state==="installed"&&navigator.serviceWorker.controller&&confirm("🚀 New version available! Reload now?")&&window.location.reload()})}}).catch(s=>{console.error("❌ Service Worker registration failed:",s)})});
