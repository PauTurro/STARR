(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function gv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yf={exports:{}},or={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function FS(){if(Wg)return or;Wg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:c}}return or.Fragment=t,or.jsx=i,or.jsxs=i,or}var Zg;function QS(){return Zg||(Zg=1,yf.exports=FS()),yf.exports}var fe=QS(),Ef={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function KS(){if(Jg)return ee;Jg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function C(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,G={};function W(S,k,B){this.props=S,this.context=k,this.refs=G,this.updater=B||x}W.prototype.isReactComponent={},W.prototype.setState=function(S,k){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,k,"setState")},W.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function je(){}je.prototype=W.prototype;function xe(S,k,B){this.props=S,this.context=k,this.refs=G,this.updater=B||x}var Te=xe.prototype=new je;Te.constructor=xe,U(Te,W.prototype),Te.isPureReactComponent=!0;var Qe=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},me=Object.prototype.hasOwnProperty;function De(S,k,B,H,Y,he){return B=he.ref,{$$typeof:s,type:S,key:k,ref:B!==void 0?B:null,props:he}}function Ge(S,k){return De(S.type,k,void 0,void 0,void 0,S.props)}function ft(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function te(S){var k={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(B){return k[B]})}var ue=/\/+/g;function $(S,k){return typeof S=="object"&&S!==null&&S.key!=null?te(""+S.key):k.toString(36)}function ve(){}function ye(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ve,ve):(S.status="pending",S.then(function(k){S.status==="pending"&&(S.status="fulfilled",S.value=k)},function(k){S.status==="pending"&&(S.status="rejected",S.reason=k)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function ze(S,k,B,H,Y){var he=typeof S;(he==="undefined"||he==="boolean")&&(S=null);var J=!1;if(S===null)J=!0;else switch(he){case"bigint":case"string":case"number":J=!0;break;case"object":switch(S.$$typeof){case s:case t:J=!0;break;case v:return J=S._init,ze(J(S._payload),k,B,H,Y)}}if(J)return Y=Y(S),J=H===""?"."+$(S,0):H,Qe(Y)?(B="",J!=null&&(B=J.replace(ue,"$&/")+"/"),ze(Y,k,B,"",function(Hn){return Hn})):Y!=null&&(ft(Y)&&(Y=Ge(Y,B+(Y.key==null||S&&S.key===Y.key?"":(""+Y.key).replace(ue,"$&/")+"/")+J)),k.push(Y)),1;J=0;var wt=H===""?".":H+":";if(Qe(S))for(var Ue=0;Ue<S.length;Ue++)H=S[Ue],he=wt+$(H,Ue),J+=ze(H,k,B,he,Y);else if(Ue=C(S),typeof Ue=="function")for(S=Ue.call(S),Ue=0;!(H=S.next()).done;)H=H.value,he=wt+$(H,Ue++),J+=ze(H,k,B,he,Y);else if(he==="object"){if(typeof S.then=="function")return ze(ye(S),k,B,H,Y);throw k=String(S),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return J}function O(S,k,B){if(S==null)return S;var H=[],Y=0;return ze(S,H,"","",function(he){return k.call(B,he,Y++)}),H}function z(S){if(S._status===-1){var k=S._result;k=k(),k.then(function(B){(S._status===0||S._status===-1)&&(S._status=1,S._result=B)},function(B){(S._status===0||S._status===-1)&&(S._status=2,S._result=B)}),S._status===-1&&(S._status=0,S._result=k)}if(S._status===1)return S._result.default;throw S._result}var j=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function _e(){}return ee.Children={map:O,forEach:function(S,k,B){O(S,function(){k.apply(this,arguments)},B)},count:function(S){var k=0;return O(S,function(){k++}),k},toArray:function(S){return O(S,function(k){return k})||[]},only:function(S){if(!ft(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ee.Component=W,ee.Fragment=i,ee.Profiler=o,ee.PureComponent=xe,ee.StrictMode=r,ee.Suspense=_,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ee.__COMPILER_RUNTIME={__proto__:null,c:function(S){return P.H.useMemoCache(S)}},ee.cache=function(S){return function(){return S.apply(null,arguments)}},ee.cloneElement=function(S,k,B){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var H=U({},S.props),Y=S.key,he=void 0;if(k!=null)for(J in k.ref!==void 0&&(he=void 0),k.key!==void 0&&(Y=""+k.key),k)!me.call(k,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&k.ref===void 0||(H[J]=k[J]);var J=arguments.length-2;if(J===1)H.children=B;else if(1<J){for(var wt=Array(J),Ue=0;Ue<J;Ue++)wt[Ue]=arguments[Ue+2];H.children=wt}return De(S.type,Y,void 0,void 0,he,H)},ee.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},ee.createElement=function(S,k,B){var H,Y={},he=null;if(k!=null)for(H in k.key!==void 0&&(he=""+k.key),k)me.call(k,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Y[H]=k[H]);var J=arguments.length-2;if(J===1)Y.children=B;else if(1<J){for(var wt=Array(J),Ue=0;Ue<J;Ue++)wt[Ue]=arguments[Ue+2];Y.children=wt}if(S&&S.defaultProps)for(H in J=S.defaultProps,J)Y[H]===void 0&&(Y[H]=J[H]);return De(S,he,void 0,void 0,null,Y)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(S){return{$$typeof:d,render:S}},ee.isValidElement=ft,ee.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:z}},ee.memo=function(S,k){return{$$typeof:g,type:S,compare:k===void 0?null:k}},ee.startTransition=function(S){var k=P.T,B={};P.T=B;try{var H=S(),Y=P.S;Y!==null&&Y(B,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(_e,j)}catch(he){j(he)}finally{P.T=k}},ee.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ee.use=function(S){return P.H.use(S)},ee.useActionState=function(S,k,B){return P.H.useActionState(S,k,B)},ee.useCallback=function(S,k){return P.H.useCallback(S,k)},ee.useContext=function(S){return P.H.useContext(S)},ee.useDebugValue=function(){},ee.useDeferredValue=function(S,k){return P.H.useDeferredValue(S,k)},ee.useEffect=function(S,k,B){var H=P.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(S,k)},ee.useId=function(){return P.H.useId()},ee.useImperativeHandle=function(S,k,B){return P.H.useImperativeHandle(S,k,B)},ee.useInsertionEffect=function(S,k){return P.H.useInsertionEffect(S,k)},ee.useLayoutEffect=function(S,k){return P.H.useLayoutEffect(S,k)},ee.useMemo=function(S,k){return P.H.useMemo(S,k)},ee.useOptimistic=function(S,k){return P.H.useOptimistic(S,k)},ee.useReducer=function(S,k,B){return P.H.useReducer(S,k,B)},ee.useRef=function(S){return P.H.useRef(S)},ee.useState=function(S){return P.H.useState(S)},ee.useSyncExternalStore=function(S,k,B){return P.H.useSyncExternalStore(S,k,B)},ee.useTransition=function(){return P.H.useTransition()},ee.version="19.1.0",ee}var $g;function uh(){return $g||($g=1,Ef.exports=KS()),Ef.exports}var Oe=uh();const XS=gv(Oe);var Sf={exports:{}},ur={},Tf={exports:{}},bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function WS(){return em||(em=1,function(s){function t(O,z){var j=O.length;O.push(z);e:for(;0<j;){var _e=j-1>>>1,S=O[_e];if(0<o(S,z))O[_e]=z,O[j]=S,j=_e;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var z=O[0],j=O.pop();if(j!==z){O[0]=j;e:for(var _e=0,S=O.length,k=S>>>1;_e<k;){var B=2*(_e+1)-1,H=O[B],Y=B+1,he=O[Y];if(0>o(H,j))Y<S&&0>o(he,H)?(O[_e]=he,O[Y]=j,_e=Y):(O[_e]=H,O[B]=j,_e=B);else if(Y<S&&0>o(he,j))O[_e]=he,O[Y]=j,_e=Y;else break e}}return z}function o(O,z){var j=O.sortIndex-z.sortIndex;return j!==0?j:O.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var _=[],g=[],v=1,E=null,C=3,x=!1,U=!1,G=!1,W=!1,je=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,Te=typeof setImmediate<"u"?setImmediate:null;function Qe(O){for(var z=i(g);z!==null;){if(z.callback===null)r(g);else if(z.startTime<=O)r(g),z.sortIndex=z.expirationTime,t(_,z);else break;z=i(g)}}function P(O){if(G=!1,Qe(O),!U)if(i(_)!==null)U=!0,me||(me=!0,$());else{var z=i(g);z!==null&&ze(P,z.startTime-O)}}var me=!1,De=-1,Ge=5,ft=-1;function te(){return W?!0:!(s.unstable_now()-ft<Ge)}function ue(){if(W=!1,me){var O=s.unstable_now();ft=O;var z=!0;try{e:{U=!1,G&&(G=!1,xe(De),De=-1),x=!0;var j=C;try{t:{for(Qe(O),E=i(_);E!==null&&!(E.expirationTime>O&&te());){var _e=E.callback;if(typeof _e=="function"){E.callback=null,C=E.priorityLevel;var S=_e(E.expirationTime<=O);if(O=s.unstable_now(),typeof S=="function"){E.callback=S,Qe(O),z=!0;break t}E===i(_)&&r(_),Qe(O)}else r(_);E=i(_)}if(E!==null)z=!0;else{var k=i(g);k!==null&&ze(P,k.startTime-O),z=!1}}break e}finally{E=null,C=j,x=!1}z=void 0}}finally{z?$():me=!1}}}var $;if(typeof Te=="function")$=function(){Te(ue)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ye=ve.port2;ve.port1.onmessage=ue,$=function(){ye.postMessage(null)}}else $=function(){je(ue,0)};function ze(O,z){De=je(function(){O(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_next=function(O){switch(C){case 1:case 2:case 3:var z=3;break;default:z=C}var j=C;C=z;try{return O()}finally{C=j}},s.unstable_requestPaint=function(){W=!0},s.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=C;C=O;try{return z()}finally{C=j}},s.unstable_scheduleCallback=function(O,z,j){var _e=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?_e+j:_e):j=_e,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=j+S,O={id:v++,callback:z,priorityLevel:O,startTime:j,expirationTime:S,sortIndex:-1},j>_e?(O.sortIndex=j,t(g,O),i(_)===null&&O===i(g)&&(G?(xe(De),De=-1):G=!0,ze(P,j-_e))):(O.sortIndex=S,t(_,O),U||x||(U=!0,me||(me=!0,$()))),O},s.unstable_shouldYield=te,s.unstable_wrapCallback=function(O){var z=C;return function(){var j=C;C=z;try{return O.apply(this,arguments)}finally{C=j}}}}(bf)),bf}var tm;function ZS(){return tm||(tm=1,Tf.exports=WS()),Tf.exports}var Cf={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function JS(){if(nm)return pt;nm=1;var s=uh();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(_,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:_,containerInfo:g,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,pt.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(_,g,null,v)},pt.flushSync=function(_){var g=h.T,v=r.p;try{if(h.T=null,r.p=2,_)return _()}finally{h.T=g,r.p=v,r.d.f()}},pt.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},pt.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},pt.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:C,fetchPriority:x}):v==="script"&&r.d.X(_,{crossOrigin:E,integrity:C,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},pt.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(_)},pt.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin);r.d.L(_,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},pt.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=d(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(_)},pt.requestFormReset=function(_){r.d.r(_)},pt.unstable_batchedUpdates=function(_,g){return _(g)},pt.useFormState=function(_,g,v){return h.H.useFormState(_,g,v)},pt.useFormStatus=function(){return h.H.useHostTransitionStatus()},pt.version="19.1.0",pt}var im;function $S(){if(im)return Cf.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Cf.exports=JS(),Cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function eT(){if(sm)return ur;sm=1;var s=ZS(),t=uh(),i=$S();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===l)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=u,l=f;else{for(var p=!1,m=u.child;m;){if(m===a){p=!0,a=u,l=f;break}if(m===l){p=!0,l=u,a=f;break}m=m.sibling}if(!p){for(m=f.child;m;){if(m===a){p=!0,a=f,l=u;break}if(m===l){p=!0,l=f,a=u;break}m=m.sibling}if(!p)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),xe=Symbol.for("react.consumer"),Te=Symbol.for("react.context"),Qe=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),ft=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case W:return"Profiler";case G:return"StrictMode";case P:return"Suspense";case me:return"SuspenseList";case ft:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case Te:return(e.displayName||"Context")+".Provider";case xe:return(e._context.displayName||"Context")+".Consumer";case Qe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return n=e.displayName||null,n!==null?n:ye(e.type)||"Memo";case Ge:n=e._payload,e=e._init;try{return ye(e(n))}catch{}}return null}var ze=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},_e=[],S=-1;function k(e){return{current:e}}function B(e){0>S||(e.current=_e[S],_e[S]=null,S--)}function H(e,n){S++,_e[S]=e.current,e.current=n}var Y=k(null),he=k(null),J=k(null),wt=k(null);function Ue(e,n){switch(H(J,n),H(he,e),H(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Cg(n),e=Ag(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Y),H(Y,e)}function Hn(){B(Y),B(he),B(J)}function iu(e){e.memoizedState!==null&&H(wt,e);var n=Y.current,a=Ag(n,e.type);n!==a&&(H(he,e),H(Y,a))}function Fr(e){he.current===e&&(B(Y),B(he)),wt.current===e&&(B(wt),ir._currentValue=j)}var su=Object.prototype.hasOwnProperty,au=s.unstable_scheduleCallback,ru=s.unstable_cancelCallback,CE=s.unstable_shouldYield,AE=s.unstable_requestPaint,an=s.unstable_now,wE=s.unstable_getCurrentPriorityLevel,sd=s.unstable_ImmediatePriority,ad=s.unstable_UserBlockingPriority,Qr=s.unstable_NormalPriority,RE=s.unstable_LowPriority,rd=s.unstable_IdlePriority,NE=s.log,OE=s.unstable_setDisableYieldValue,fa=null,Rt=null;function Pn(e){if(typeof NE=="function"&&OE(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(fa,e)}catch{}}var Nt=Math.clz32?Math.clz32:ME,DE=Math.log,IE=Math.LN2;function ME(e){return e>>>=0,e===0?32:31-(DE(e)/IE|0)|0}var Kr=256,Xr=4194304;function wi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wr(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~f,l!==0?u=wi(l):(p&=m,p!==0?u=wi(p):a||(a=m&~e,a!==0&&(u=wi(a))))):(m=l&~f,m!==0?u=wi(m):p!==0?u=wi(p):a||(a=l&~e,a!==0&&(u=wi(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ha(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function kE(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(){var e=Kr;return Kr<<=1,(Kr&4194048)===0&&(Kr=256),e}function od(){var e=Xr;return Xr<<=1,(Xr&62914560)===0&&(Xr=4194304),e}function lu(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function da(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xE(e,n,a,l,u,f){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,y=e.expirationTimes,w=e.hiddenUpdates;for(a=p&~a;0<a;){var D=31-Nt(a),M=1<<D;m[D]=0,y[D]=-1;var R=w[D];if(R!==null)for(w[D]=null,D=0;D<R.length;D++){var N=R[D];N!==null&&(N.lane&=-536870913)}a&=~M}l!==0&&ud(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(p&~n))}function ud(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Nt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function cd(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-Nt(a),u=1<<l;u&n|e[l]&n&&(e[l]|=n),a&=~u}}function ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function uu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fd(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:Gg(e.type))}function UE(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var Bn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Bn,Et="__reactProps$"+Bn,is="__reactContainer$"+Bn,cu="__reactEvents$"+Bn,LE="__reactListeners$"+Bn,zE="__reactHandles$"+Bn,hd="__reactResources$"+Bn,pa="__reactMarker$"+Bn;function fu(e){delete e[ht],delete e[Et],delete e[cu],delete e[LE],delete e[zE]}function ss(e){var n=e[ht];if(n)return n;for(var a=e.parentNode;a;){if(n=a[is]||a[ht]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Og(e);e!==null;){if(a=e[ht])return a;e=Og(e)}return n}e=a,a=e.parentNode}return null}function as(e){if(e=e[ht]||e[is]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function _a(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function rs(e){var n=e[hd];return n||(n=e[hd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(e){e[pa]=!0}var dd=new Set,pd={};function Ri(e,n){ls(e,n),ls(e+"Capture",n)}function ls(e,n){for(pd[e]=n,e=0;e<n.length;e++)dd.add(n[e])}var HE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_d={},gd={};function PE(e){return su.call(gd,e)?!0:su.call(_d,e)?!1:HE.test(e)?gd[e]=!0:(_d[e]=!0,!1)}function Zr(e,n,a){if(PE(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jr(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function pn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}var hu,md;function os(e){if(hu===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);hu=n&&n[1]||"",md=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+e+md}var du=!1;function pu(e,n){if(!e||du)return"";du=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var R=N}Reflect.construct(e,[],M)}else{try{M.call()}catch(N){R=N}e.call(M.prototype)}}else{try{throw Error()}catch(N){R=N}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),p=f[0],m=f[1];if(p&&m){var y=p.split(`
`),w=m.split(`
`);for(u=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(l===y.length||u===w.length)for(l=y.length-1,u=w.length-1;1<=l&&0<=u&&y[l]!==w[u];)u--;for(;1<=l&&0<=u;l--,u--)if(y[l]!==w[u]){if(l!==1||u!==1)do if(l--,u--,0>u||y[l]!==w[u]){var D=`
`+y[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=u);break}}}finally{du=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?os(a):""}function BE(e){switch(e.tag){case 26:case 27:case 5:return os(e.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 15:return pu(e.type,!1);case 11:return pu(e.type.render,!1);case 1:return pu(e.type,!0);case 31:return os("Activity");default:return""}}function vd(e){try{var n="";do n+=BE(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qE(e){var n=yd(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(p){l=""+p,f.call(this,p)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $r(e){e._valueTracker||(e._valueTracker=qE(e))}function Ed(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=yd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var VE=/[\n"\\]/g;function zt(e){return e.replace(VE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _u(e,n,a,l,u,f,p,m){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Lt(n)):e.value!==""+Lt(n)&&(e.value=""+Lt(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?gu(e,p,Lt(n)):a!=null?gu(e,p,Lt(a)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Lt(m):e.removeAttribute("name")}function Sd(e,n,a,l,u,f,p,m){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Lt(a):"",n=n!=null?""+Lt(n):a,m||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function gu(e,n,a){n==="number"&&el(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function us(e,n,a,l){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Lt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Td(e,n,a){if(n!=null&&(n=""+Lt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Lt(a):""}function bd(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(ze(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Lt(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function cs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var jE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cd(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||jE.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ad(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&Cd(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&Cd(e,f,n[f])}function mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),YE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return YE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vu=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,hs=null;function wd(e){var n=as(e);if(n&&(e=n.stateNode)){var a=e[Et]||null;e:switch(e=n.stateNode,n.type){case"input":if(_u(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var u=l[Et]||null;if(!u)throw Error(r(90));_u(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&Ed(l)}break e;case"textarea":Td(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&us(e,!!a.multiple,n,!1)}}}var Eu=!1;function Rd(e,n,a){if(Eu)return e(n,a);Eu=!0;try{var l=e(n);return l}finally{if(Eu=!1,(fs!==null||hs!==null)&&(Bl(),fs&&(n=fs,e=hs,hs=fs=null,wd(n),e)))for(n=0;n<e.length;n++)wd(e[n])}}function ga(e,n){var a=e.stateNode;if(a===null)return null;var l=a[Et]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(_n)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Su=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Su=!1}var qn=null,Tu=null,nl=null;function Nd(){if(nl)return nl;var e,n=Tu,a=n.length,l,u="value"in qn?qn.value:qn.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var p=a-e;for(l=1;l<=p&&n[a-l]===u[f-l];l++);return nl=u.slice(e,1<l?1-l:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function Od(){return!1}function St(e){function n(a,l,u,f,p){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(f):f[m]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:Od,this.isPropagationStopped=Od,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=St(Ni),va=v({},Ni,{view:0,detail:0}),FE=St(va),bu,Cu,ya,rl=v({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ya&&(ya&&e.type==="mousemove"?(bu=e.screenX-ya.screenX,Cu=e.screenY-ya.screenY):Cu=bu=0,ya=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),Dd=St(rl),QE=v({},rl,{dataTransfer:0}),KE=St(QE),XE=v({},va,{relatedTarget:0}),Au=St(XE),WE=v({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),ZE=St(WE),JE=v({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$E=St(JE),e0=v({},Ni,{data:0}),Id=St(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=i0[e])?!!n[e]:!1}function wu(){return s0}var a0=v({},va,{key:function(e){if(e.key){var n=t0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r0=St(a0),l0=v({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=St(l0),o0=v({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),u0=St(o0),c0=v({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=St(c0),h0=v({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=St(h0),p0=v({},Ni,{newState:0,oldState:0}),_0=St(p0),g0=[9,13,27,32],Ru=_n&&"CompositionEvent"in window,Ea=null;_n&&"documentMode"in document&&(Ea=document.documentMode);var m0=_n&&"TextEvent"in window&&!Ea,kd=_n&&(!Ru||Ea&&8<Ea&&11>=Ea),xd=" ",Ud=!1;function Ld(e,n){switch(e){case"keyup":return g0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function v0(e,n){switch(e){case"compositionend":return zd(n);case"keypress":return n.which!==32?null:(Ud=!0,xd);case"textInput":return e=n.data,e===xd&&Ud?null:e;default:return null}}function y0(e,n){if(ds)return e==="compositionend"||!Ru&&Ld(e,n)?(e=Nd(),nl=Tu=qn=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!E0[e.type]:n==="textarea"}function Pd(e,n,a,l){fs?hs?hs.push(l):hs=[l]:fs=l,n=Fl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Sa=null,Ta=null;function S0(e){yg(e,0)}function ll(e){var n=_a(e);if(Ed(n))return e}function Bd(e,n){if(e==="change")return n}var qd=!1;if(_n){var Nu;if(_n){var Ou="oninput"in document;if(!Ou){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Ou=typeof Vd.oninput=="function"}Nu=Ou}else Nu=!1;qd=Nu&&(!document.documentMode||9<document.documentMode)}function jd(){Sa&&(Sa.detachEvent("onpropertychange",Gd),Ta=Sa=null)}function Gd(e){if(e.propertyName==="value"&&ll(Ta)){var n=[];Pd(n,Ta,e,yu(e)),Rd(S0,n)}}function T0(e,n,a){e==="focusin"?(jd(),Sa=n,Ta=a,Sa.attachEvent("onpropertychange",Gd)):e==="focusout"&&jd()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Ta)}function C0(e,n){if(e==="click")return ll(n)}function A0(e,n){if(e==="input"||e==="change")return ll(n)}function w0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ot=typeof Object.is=="function"?Object.is:w0;function ba(e,n){if(Ot(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!su.call(n,u)||!Ot(e[u],n[u]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var a=Yd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yd(a)}}function Qd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=el(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=el(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var R0=_n&&"documentMode"in document&&11>=document.documentMode,ps=null,Iu=null,Ca=null,Mu=!1;function Xd(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||ps==null||ps!==el(l)||(l=ps,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ca&&ba(Ca,l)||(Ca=l,l=Fl(Iu,"onSelect"),0<l.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=ps)))}function Oi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var _s={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionrun:Oi("Transition","TransitionRun"),transitionstart:Oi("Transition","TransitionStart"),transitioncancel:Oi("Transition","TransitionCancel"),transitionend:Oi("Transition","TransitionEnd")},ku={},Wd={};_n&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Di(e){if(ku[e])return ku[e];if(!_s[e])return e;var n=_s[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wd)return ku[e]=n[a];return e}var Zd=Di("animationend"),Jd=Di("animationiteration"),$d=Di("animationstart"),N0=Di("transitionrun"),O0=Di("transitionstart"),D0=Di("transitioncancel"),ep=Di("transitionend"),tp=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Kt(e,n){tp.set(e,n),Ri(n,[e])}var np=new WeakMap;function Ht(e,n){if(typeof e=="object"&&e!==null){var a=np.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vd(n)},np.set(e,n),n)}return{value:e,source:n,stack:vd(n)}}var Pt=[],gs=0,Uu=0;function ol(){for(var e=gs,n=Uu=gs=0;n<e;){var a=Pt[n];Pt[n++]=null;var l=Pt[n];Pt[n++]=null;var u=Pt[n];Pt[n++]=null;var f=Pt[n];if(Pt[n++]=null,l!==null&&u!==null){var p=l.pending;p===null?u.next=u:(u.next=p.next,p.next=u),l.pending=u}f!==0&&ip(a,u,f)}}function ul(e,n,a,l){Pt[gs++]=e,Pt[gs++]=n,Pt[gs++]=a,Pt[gs++]=l,Uu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lu(e,n,a,l){return ul(e,n,a,l),cl(e)}function ms(e,n){return ul(e,null,null,n),cl(e)}function ip(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Nt(a),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=a|536870912),f):null}function cl(e){if(50<Xa)throw Xa=0,Vc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var vs={};function I0(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,n,a,l){return new I0(e,n,a,l)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gn(e,n){var a=e.alternate;return a===null?(a=Dt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,l,u,f){var p=0;if(l=e,typeof e=="function")zu(e)&&(p=1);else if(typeof e=="string")p=kS(e,a,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ft:return e=Dt(31,a,n,u),e.elementType=ft,e.lanes=f,e;case U:return Ii(a.children,u,f,n);case G:p=8,u|=24;break;case W:return e=Dt(12,a,n,u|2),e.elementType=W,e.lanes=f,e;case P:return e=Dt(13,a,n,u),e.elementType=P,e.lanes=f,e;case me:return e=Dt(19,a,n,u),e.elementType=me,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:case Te:p=10;break e;case xe:p=9;break e;case Qe:p=11;break e;case De:p=14;break e;case Ge:p=16,l=null;break e}p=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return n=Dt(p,a,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Ii(e,n,a,l){return e=Dt(7,e,l,n),e.lanes=a,e}function Hu(e,n,a){return e=Dt(6,e,null,n),e.lanes=a,e}function Pu(e,n,a){return n=Dt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ys=[],Es=0,hl=null,dl=0,Bt=[],qt=0,Mi=null,mn=1,vn="";function ki(e,n){ys[Es++]=dl,ys[Es++]=hl,hl=e,dl=n}function ap(e,n,a){Bt[qt++]=mn,Bt[qt++]=vn,Bt[qt++]=Mi,Mi=e;var l=mn;e=vn;var u=32-Nt(l)-1;l&=~(1<<u),a+=1;var f=32-Nt(n)+u;if(30<f){var p=u-u%5;f=(l&(1<<p)-1).toString(32),l>>=p,u-=p,mn=1<<32-Nt(n)+u|a<<u|l,vn=f+e}else mn=1<<f|a<<u|l,vn=e}function Bu(e){e.return!==null&&(ki(e,1),ap(e,1,0))}function qu(e){for(;e===hl;)hl=ys[--Es],ys[Es]=null,dl=ys[--Es],ys[Es]=null;for(;e===Mi;)Mi=Bt[--qt],Bt[qt]=null,vn=Bt[--qt],Bt[qt]=null,mn=Bt[--qt],Bt[qt]=null}var _t=null,Pe=null,ge=!1,xi=null,rn=!1,Vu=Error(r(519));function Ui(e){var n=Error(r(418,""));throw Ra(Ht(n,e)),Vu}function rp(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[ht]=e,n[Et]=l,a){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(a=0;a<Za.length;a++)le(Za[a],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":le("invalid",n),Sd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),$r(n);break;case"select":le("invalid",n);break;case"textarea":le("invalid",n),bd(n,l.value,l.defaultValue,l.children),$r(n)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||bg(n.textContent,a)?(l.popover!=null&&(le("beforetoggle",n),le("toggle",n)),l.onScroll!=null&&le("scroll",n),l.onScrollEnd!=null&&le("scrollend",n),l.onClick!=null&&(n.onclick=Ql),n=!0):n=!1,n||Ui(e)}function lp(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:_t=_t.return}}function Aa(e){if(e!==_t)return!1;if(!ge)return lp(e),ge=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||af(e.type,e.memoizedProps)),a=!a),a&&Pe&&Ui(e),lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Pe=Wt(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Pe=null}}else n===27?(n=Pe,ii(e.type)?(e=uf,uf=null,Pe=e):Pe=n):Pe=_t?Wt(e.stateNode.nextSibling):null;return!0}function wa(){Pe=_t=null,ge=!1}function op(){var e=xi;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),xi=null),e}function Ra(e){xi===null?xi=[e]:xi.push(e)}var ju=k(null),Li=null,yn=null;function Vn(e,n,a){H(ju,n._currentValue),n._currentValue=a}function En(e){e._currentValue=ju.current,B(ju)}function Gu(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Yu(e,n,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var p=u.child;f=f.firstContext;e:for(;f!==null;){var m=f;f=u;for(var y=0;y<n.length;y++)if(m.context===n[y]){f.lanes|=a,m=f.alternate,m!==null&&(m.lanes|=a),Gu(f.return,a,e),l||(p=null);break e}f=m.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(r(341));p.lanes|=a,f=p.alternate,f!==null&&(f.lanes|=a),Gu(p,a,e),p=null}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===e){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function Na(e,n,a,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var m=u.type;Ot(u.pendingProps.value,p.value)||(e!==null?e.push(m):e=[m])}}else if(u===wt.current){if(p=u.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ir):e=[ir])}u=u.return}e!==null&&Yu(n,e,a,l),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zi(e){Li=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return up(Li,e)}function _l(e,n){return Li===null&&zi(e),up(e,n)}function up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},yn===null){if(e===null)throw Error(r(308));yn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else yn=yn.next=n;return a}var M0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},k0=s.unstable_scheduleCallback,x0=s.unstable_NormalPriority,We={$$typeof:Te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new M0,data:new Map,refCount:0}}function Oa(e){e.refCount--,e.refCount===0&&k0(x0,function(){e.controller.abort()})}var Da=null,Qu=0,Ss=0,Ts=null;function U0(e,n){if(Da===null){var a=Da=[];Qu=0,Ss=Xc(),Ts={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Qu++,n.then(cp,cp),n}function cp(){if(--Qu===0&&Da!==null){Ts!==null&&(Ts.status="fulfilled");var e=Da;Da=null,Ss=0,Ts=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function L0(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var fp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&U0(e,n),fp!==null&&fp(e,n)};var Hi=k(null);function Ku(){var e=Hi.current;return e!==null?e:Ie.pooledCache}function gl(e,n){n===null?H(Hi,Hi.current):H(Hi,n.pool)}function hp(){var e=Ku();return e===null?null:{parent:We._currentValue,pool:e}}var Ia=Error(r(460)),dp=Error(r(474)),ml=Error(r(542)),Xu={then:function(){}};function pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vl(){}function _p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(vl,vl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mp(e),e;default:if(typeof n.status=="string")n.then(vl,vl);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mp(e),e}throw Ma=n,Ia}}var Ma=null;function gp(){if(Ma===null)throw Error(r(459));var e=Ma;return Ma=null,e}function mp(e){if(e===Ia||e===ml)throw Error(r(483))}var jn=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=cl(e),ip(e,null,a),n}return ul(e,l,n,a),cl(e)}function ka(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,cd(e,a)}}function Ju(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=p:f=f.next=p,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var $u=!1;function xa(){if($u){var e=Ts;if(e!==null)throw e}}function Ua(e,n,a,l){$u=!1;var u=e.updateQueue;jn=!1;var f=u.firstBaseUpdate,p=u.lastBaseUpdate,m=u.shared.pending;if(m!==null){u.shared.pending=null;var y=m,w=y.next;y.next=null,p===null?f=w:p.next=w,p=y;var D=e.alternate;D!==null&&(D=D.updateQueue,m=D.lastBaseUpdate,m!==p&&(m===null?D.firstBaseUpdate=w:m.next=w,D.lastBaseUpdate=y))}if(f!==null){var M=u.baseState;p=0,D=w=y=null,m=f;do{var R=m.lane&-536870913,N=R!==m.lane;if(N?(ce&R)===R:(l&R)===R){R!==0&&R===Ss&&($u=!0),D!==null&&(D=D.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var Z=e,F=m;R=n;var Ae=a;switch(F.tag){case 1:if(Z=F.payload,typeof Z=="function"){M=Z.call(Ae,M,R);break e}M=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=F.payload,R=typeof Z=="function"?Z.call(Ae,M,R):Z,R==null)break e;M=v({},M,R);break e;case 2:jn=!0}}R=m.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[R]:N.push(R))}else N={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},D===null?(w=D=N,y=M):D=D.next=N,p|=R;if(m=m.next,m===null){if(m=u.shared.pending,m===null)break;N=m,m=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);D===null&&(y=M),u.baseState=y,u.firstBaseUpdate=w,u.lastBaseUpdate=D,f===null&&(u.shared.lanes=0),$n|=p,e.lanes=p,e.memoizedState=M}}function vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function yp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vp(a[e],n)}var bs=k(null),yl=k(0);function Ep(e,n){e=Rn,H(yl,e),H(bs,n),Rn=e|n.baseLanes}function ec(){H(yl,Rn),H(bs,bs.current)}function tc(){Rn=yl.current,B(bs),B(yl)}var Fn=0,ne=null,be=null,Ke=null,El=!1,Cs=!1,Pi=!1,Sl=0,La=0,As=null,z0=0;function Ye(){throw Error(r(321))}function nc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Ot(e[a],n[a]))return!1;return!0}function ic(e,n,a,l,u,f){return Fn=f,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?i_:s_,Pi=!1,f=a(l,u),Pi=!1,Cs&&(f=Tp(n,a,l,u)),Sp(e),f}function Sp(e){O.H=Rl;var n=be!==null&&be.next!==null;if(Fn=0,Ke=be=ne=null,El=!1,La=0,As=null,n)throw Error(r(300));e===null||tt||(e=e.dependencies,e!==null&&pl(e)&&(tt=!0))}function Tp(e,n,a,l){ne=e;var u=0;do{if(Cs&&(As=null),La=0,Cs=!1,25<=u)throw Error(r(301));if(u+=1,Ke=be=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=G0,f=n(a,l)}while(Cs);return f}function H0(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?za(n):n,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(ne.flags|=1024),n}function sc(){var e=Sl!==0;return Sl=0,e}function ac(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function rc(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}Fn=0,Ke=be=ne=null,Cs=!1,La=Sl=0,As=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ne.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Xe(){if(be===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var n=Ke===null?ne.memoizedState:Ke.next;if(n!==null)Ke=n,be=e;else{if(e===null)throw ne.alternate===null?Error(r(467)):Error(r(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ke===null?ne.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function za(e){var n=La;return La+=1,As===null&&(As=[]),e=_p(As,e,n),n=ne,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?i_:s_),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return za(e);if(e.$$typeof===Te)return dt(e)}throw Error(r(438,String(e)))}function oc(e){var n=null,a=ne.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=lc(),ne.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=te;return n.index++,a}function Sn(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=Xe();return uc(n,be,e)}function uc(e,n,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var p=u.next;u.next=f.next,f.next=p}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var m=p=null,y=null,w=n,D=!1;do{var M=w.lane&-536870913;if(M!==w.lane?(ce&M)===M:(Fn&M)===M){var R=w.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),M===Ss&&(D=!0);else if((Fn&R)===R){w=w.next,R===Ss&&(D=!0);continue}else M={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(m=y=M,p=f):y=y.next=M,ne.lanes|=R,$n|=R;M=w.action,Pi&&a(f,M),f=w.hasEagerState?w.eagerState:a(f,M)}else R={lane:M,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(m=y=R,p=f):y=y.next=R,ne.lanes|=M,$n|=M;w=w.next}while(w!==null&&w!==n);if(y===null?p=f:y.next=m,!Ot(f,e.memoizedState)&&(tt=!0,D&&(a=Ts,a!==null)))throw a;e.memoizedState=f,e.baseState=p,e.baseQueue=y,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cc(e){var n=Xe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var p=u=u.next;do f=e(f,p.action),p=p.next;while(p!==u);Ot(f,n.memoizedState)||(tt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function bp(e,n,a){var l=ne,u=Xe(),f=ge;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var p=!Ot((be||u).memoizedState,a);p&&(u.memoizedState=a,tt=!0),u=u.queue;var m=wp.bind(null,l,u,e);if(Ha(2048,8,m,[e]),u.getSnapshot!==n||p||Ke!==null&&Ke.memoizedState.tag&1){if(l.flags|=2048,ws(9,Cl(),Ap.bind(null,l,u,a,n),null),Ie===null)throw Error(r(349));f||(Fn&124)!==0||Cp(l,n,a)}return a}function Cp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ne.updateQueue,n===null?(n=lc(),ne.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ap(e,n,a,l){n.value=a,n.getSnapshot=l,Rp(n)&&Np(e)}function wp(e,n,a){return a(function(){Rp(n)&&Np(e)})}function Rp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Ot(e,a)}catch{return!0}}function Np(e){var n=ms(e,2);n!==null&&Ut(n,e,2)}function fc(e){var n=Tt();if(typeof e=="function"){var a=e;if(e=a(),Pi){Pn(!0);try{a()}finally{Pn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},n}function Op(e,n,a,l){return e.baseState=a,uc(e,be,typeof l=="function"?l:Sn)}function P0(e,n,a,l,u){if(wl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};O.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,Dp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dp(e,n){var a=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=O.T,p={};O.T=p;try{var m=a(u,l),y=O.S;y!==null&&y(p,m),Ip(e,n,m)}catch(w){hc(e,n,w)}finally{O.T=f}}else try{f=a(u,l),Ip(e,n,f)}catch(w){hc(e,n,w)}}function Ip(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Mp(e,n,l)},function(l){return hc(e,n,l)}):Mp(e,n,a)}function Mp(e,n,a){n.status="fulfilled",n.value=a,kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dp(e,a)))}function hc(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,kp(n),n=n.next;while(n!==l)}e.action=null}function kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function xp(e,n){return n}function Up(e,n){if(ge){var a=Ie.formState;if(a!==null){e:{var l=ne;if(ge){if(Pe){t:{for(var u=Pe,f=rn;u.nodeType!==8;){if(!f){u=null;break t}if(u=Wt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Pe=Wt(u.nextSibling),l=u.data==="F!";break e}}Ui(l)}l=!1}l&&(n=a[0])}}return a=Tt(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xp,lastRenderedState:n},a.queue=l,a=e_.bind(null,ne,l),l.dispatch=a,l=fc(!1),f=mc.bind(null,ne,!1,l.queue),l=Tt(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,a=P0.bind(null,ne,u,f,a),u.dispatch=a,l.memoizedState=e,[n,a,!1]}function Lp(e){var n=Xe();return zp(n,be,e)}function zp(e,n,a){if(n=uc(e,n,xp)[0],e=bl(Sn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=za(n)}catch(p){throw p===Ia?ml:p}else l=n;n=Xe();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ne.flags|=2048,ws(9,Cl(),B0.bind(null,u,a),null)),[l,f,e]}function B0(e,n){e.action=n}function Hp(e){var n=Xe(),a=be;if(a!==null)return zp(n,a,e);Xe(),n=n.memoizedState,a=Xe();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function ws(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=ne.updateQueue,n===null&&(n=lc(),ne.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function Cl(){return{destroy:void 0,resource:void 0}}function Pp(){return Xe().memoizedState}function Al(e,n,a,l){var u=Tt();l=l===void 0?null:l,ne.flags|=e,u.memoizedState=ws(1|n,Cl(),a,l)}function Ha(e,n,a,l){var u=Xe();l=l===void 0?null:l;var f=u.memoizedState.inst;be!==null&&l!==null&&nc(l,be.memoizedState.deps)?u.memoizedState=ws(n,f,a,l):(ne.flags|=e,u.memoizedState=ws(1|n,f,a,l))}function Bp(e,n){Al(8390656,8,e,n)}function qp(e,n){Ha(2048,8,e,n)}function Vp(e,n){return Ha(4,2,e,n)}function jp(e,n){return Ha(4,4,e,n)}function Gp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Yp(e,n,a){a=a!=null?a.concat([e]):null,Ha(4,4,Gp.bind(null,n,e),a)}function dc(){}function Fp(e,n){var a=Xe();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&nc(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Qp(e,n){var a=Xe();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&nc(n,l[1]))return l[0];if(l=e(),Pi){Pn(!0);try{e()}finally{Pn(!1)}}return a.memoizedState=[l,n],l}function pc(e,n,a){return a===void 0||(Fn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=W_(),ne.lanes|=e,$n|=e,a)}function Kp(e,n,a,l){return Ot(a,n)?a:bs.current!==null?(e=pc(e,a,l),Ot(e,n)||(tt=!0),e):(Fn&42)===0?(tt=!0,e.memoizedState=a):(e=W_(),ne.lanes|=e,$n|=e,n)}function Xp(e,n,a,l,u){var f=z.p;z.p=f!==0&&8>f?f:8;var p=O.T,m={};O.T=m,mc(e,!1,n,a);try{var y=u(),w=O.S;if(w!==null&&w(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var D=L0(y,l);Pa(e,n,D,xt(e))}else Pa(e,n,l,xt(e))}catch(M){Pa(e,n,{then:function(){},status:"rejected",reason:M},xt())}finally{z.p=f,O.T=p}}function q0(){}function _c(e,n,a,l){if(e.tag!==5)throw Error(r(476));var u=Wp(e).queue;Xp(e,u,n,j,a===null?q0:function(){return Zp(e),a(l)})}function Wp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Zp(e){var n=Wp(e).next.queue;Pa(e,n,{},xt())}function gc(){return dt(ir)}function Jp(){return Xe().memoizedState}function $p(){return Xe().memoizedState}function V0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=xt();e=Gn(a);var l=Yn(n,e,a);l!==null&&(Ut(l,n,a),ka(l,n,a)),n={cache:Fu()},e.payload=n;return}n=n.return}}function j0(e,n,a){var l=xt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?t_(n,a):(a=Lu(e,n,a,l),a!==null&&(Ut(a,e,l),n_(a,n,l)))}function e_(e,n,a){var l=xt();Pa(e,n,a,l)}function Pa(e,n,a,l){var u={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))t_(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,m=f(p,a);if(u.hasEagerState=!0,u.eagerState=m,Ot(m,p))return ul(e,n,u,0),Ie===null&&ol(),!1}catch{}finally{}if(a=Lu(e,n,u,l),a!==null)return Ut(a,e,l),n_(a,n,l),!0}return!1}function mc(e,n,a,l){if(l={lane:2,revertLane:Xc(),action:l,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(r(479))}else n=Lu(e,a,l,2),n!==null&&Ut(n,e,2)}function wl(e){var n=e.alternate;return e===ne||n!==null&&n===ne}function t_(e,n){Cs=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function n_(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,cd(e,a)}}var Rl={readContext:dt,use:Tl,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye},i_={readContext:dt,use:Tl,useCallback:function(e,n){return Tt().memoizedState=[e,n===void 0?null:n],e},useContext:dt,useEffect:Bp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Al(4194308,4,Gp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var a=Tt();n=n===void 0?null:n;var l=e();if(Pi){Pn(!0);try{e()}finally{Pn(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=Tt();if(a!==void 0){var u=a(n);if(Pi){Pn(!0);try{a(n)}finally{Pn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=j0.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var n=Tt();return e={current:e},n.memoizedState=e},useState:function(e){e=fc(e);var n=e.queue,a=e_.bind(null,ne,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:dc,useDeferredValue:function(e,n){var a=Tt();return pc(a,e,n)},useTransition:function(){var e=fc(!1);return e=Xp.bind(null,ne,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=ne,u=Tt();if(ge){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(ce&124)!==0||Cp(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Bp(wp.bind(null,l,f,e),[e]),l.flags|=2048,ws(9,Cl(),Ap.bind(null,l,f,a,n),null),a},useId:function(){var e=Tt(),n=Ie.identifierPrefix;if(ge){var a=vn,l=mn;a=(l&~(1<<32-Nt(l)-1)).toString(32)+a,n="«"+n+"R"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=z0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:gc,useFormState:Up,useActionState:Up,useOptimistic:function(e){var n=Tt();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mc.bind(null,ne,!0,a),a.dispatch=n,[e,n]},useMemoCache:oc,useCacheRefresh:function(){return Tt().memoizedState=V0.bind(null,ne)}},s_={readContext:dt,use:Tl,useCallback:Fp,useContext:dt,useEffect:qp,useImperativeHandle:Yp,useInsertionEffect:Vp,useLayoutEffect:jp,useMemo:Qp,useReducer:bl,useRef:Pp,useState:function(){return bl(Sn)},useDebugValue:dc,useDeferredValue:function(e,n){var a=Xe();return Kp(a,be.memoizedState,e,n)},useTransition:function(){var e=bl(Sn)[0],n=Xe().memoizedState;return[typeof e=="boolean"?e:za(e),n]},useSyncExternalStore:bp,useId:Jp,useHostTransitionStatus:gc,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,n){var a=Xe();return Op(a,be,e,n)},useMemoCache:oc,useCacheRefresh:$p},G0={readContext:dt,use:Tl,useCallback:Fp,useContext:dt,useEffect:qp,useImperativeHandle:Yp,useInsertionEffect:Vp,useLayoutEffect:jp,useMemo:Qp,useReducer:cc,useRef:Pp,useState:function(){return cc(Sn)},useDebugValue:dc,useDeferredValue:function(e,n){var a=Xe();return be===null?pc(a,e,n):Kp(a,be.memoizedState,e,n)},useTransition:function(){var e=cc(Sn)[0],n=Xe().memoizedState;return[typeof e=="boolean"?e:za(e),n]},useSyncExternalStore:bp,useId:Jp,useHostTransitionStatus:gc,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,n){var a=Xe();return be!==null?Op(a,be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:oc,useCacheRefresh:$p},Rs=null,Ba=0;function Nl(e){var n=Ba;return Ba+=1,Rs===null&&(Rs=[]),_p(Rs,e,n)}function qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===E?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function a_(e){var n=e._init;return n(e._payload)}function r_(e){function n(b,T){if(e){var A=b.deletions;A===null?(b.deletions=[T],b.flags|=16):A.push(T)}}function a(b,T){if(!e)return null;for(;T!==null;)n(b,T),T=T.sibling;return null}function l(b){for(var T=new Map;b!==null;)b.key!==null?T.set(b.key,b):T.set(b.index,b),b=b.sibling;return T}function u(b,T){return b=gn(b,T),b.index=0,b.sibling=null,b}function f(b,T,A){return b.index=A,e?(A=b.alternate,A!==null?(A=A.index,A<T?(b.flags|=67108866,T):A):(b.flags|=67108866,T)):(b.flags|=1048576,T)}function p(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function m(b,T,A,I){return T===null||T.tag!==6?(T=Hu(A,b.mode,I),T.return=b,T):(T=u(T,A),T.return=b,T)}function y(b,T,A,I){var q=A.type;return q===U?D(b,T,A.props.children,I,A.key):T!==null&&(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ge&&a_(q)===T.type)?(T=u(T,A.props),qa(T,A),T.return=b,T):(T=fl(A.type,A.key,A.props,null,b.mode,I),qa(T,A),T.return=b,T)}function w(b,T,A,I){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=Pu(A,b.mode,I),T.return=b,T):(T=u(T,A.children||[]),T.return=b,T)}function D(b,T,A,I,q){return T===null||T.tag!==7?(T=Ii(A,b.mode,I,q),T.return=b,T):(T=u(T,A),T.return=b,T)}function M(b,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Hu(""+T,b.mode,A),T.return=b,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case C:return A=fl(T.type,T.key,T.props,null,b.mode,A),qa(A,T),A.return=b,A;case x:return T=Pu(T,b.mode,A),T.return=b,T;case Ge:var I=T._init;return T=I(T._payload),M(b,T,A)}if(ze(T)||$(T))return T=Ii(T,b.mode,A,null),T.return=b,T;if(typeof T.then=="function")return M(b,Nl(T),A);if(T.$$typeof===Te)return M(b,_l(b,T),A);Ol(b,T)}return null}function R(b,T,A,I){var q=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return q!==null?null:m(b,T,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case C:return A.key===q?y(b,T,A,I):null;case x:return A.key===q?w(b,T,A,I):null;case Ge:return q=A._init,A=q(A._payload),R(b,T,A,I)}if(ze(A)||$(A))return q!==null?null:D(b,T,A,I,null);if(typeof A.then=="function")return R(b,T,Nl(A),I);if(A.$$typeof===Te)return R(b,T,_l(b,A),I);Ol(b,A)}return null}function N(b,T,A,I,q){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return b=b.get(A)||null,m(T,b,""+I,q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case C:return b=b.get(I.key===null?A:I.key)||null,y(T,b,I,q);case x:return b=b.get(I.key===null?A:I.key)||null,w(T,b,I,q);case Ge:var ie=I._init;return I=ie(I._payload),N(b,T,A,I,q)}if(ze(I)||$(I))return b=b.get(A)||null,D(T,b,I,q,null);if(typeof I.then=="function")return N(b,T,A,Nl(I),q);if(I.$$typeof===Te)return N(b,T,A,_l(T,I),q);Ol(T,I)}return null}function Z(b,T,A,I){for(var q=null,ie=null,V=T,Q=T=0,it=null;V!==null&&Q<A.length;Q++){V.index>Q?(it=V,V=null):it=V.sibling;var de=R(b,V,A[Q],I);if(de===null){V===null&&(V=it);break}e&&V&&de.alternate===null&&n(b,V),T=f(de,T,Q),ie===null?q=de:ie.sibling=de,ie=de,V=it}if(Q===A.length)return a(b,V),ge&&ki(b,Q),q;if(V===null){for(;Q<A.length;Q++)V=M(b,A[Q],I),V!==null&&(T=f(V,T,Q),ie===null?q=V:ie.sibling=V,ie=V);return ge&&ki(b,Q),q}for(V=l(V);Q<A.length;Q++)it=N(V,b,Q,A[Q],I),it!==null&&(e&&it.alternate!==null&&V.delete(it.key===null?Q:it.key),T=f(it,T,Q),ie===null?q=it:ie.sibling=it,ie=it);return e&&V.forEach(function(oi){return n(b,oi)}),ge&&ki(b,Q),q}function F(b,T,A,I){if(A==null)throw Error(r(151));for(var q=null,ie=null,V=T,Q=T=0,it=null,de=A.next();V!==null&&!de.done;Q++,de=A.next()){V.index>Q?(it=V,V=null):it=V.sibling;var oi=R(b,V,de.value,I);if(oi===null){V===null&&(V=it);break}e&&V&&oi.alternate===null&&n(b,V),T=f(oi,T,Q),ie===null?q=oi:ie.sibling=oi,ie=oi,V=it}if(de.done)return a(b,V),ge&&ki(b,Q),q;if(V===null){for(;!de.done;Q++,de=A.next())de=M(b,de.value,I),de!==null&&(T=f(de,T,Q),ie===null?q=de:ie.sibling=de,ie=de);return ge&&ki(b,Q),q}for(V=l(V);!de.done;Q++,de=A.next())de=N(V,b,Q,de.value,I),de!==null&&(e&&de.alternate!==null&&V.delete(de.key===null?Q:de.key),T=f(de,T,Q),ie===null?q=de:ie.sibling=de,ie=de);return e&&V.forEach(function(YS){return n(b,YS)}),ge&&ki(b,Q),q}function Ae(b,T,A,I){if(typeof A=="object"&&A!==null&&A.type===U&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case C:e:{for(var q=A.key;T!==null;){if(T.key===q){if(q=A.type,q===U){if(T.tag===7){a(b,T.sibling),I=u(T,A.props.children),I.return=b,b=I;break e}}else if(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ge&&a_(q)===T.type){a(b,T.sibling),I=u(T,A.props),qa(I,A),I.return=b,b=I;break e}a(b,T);break}else n(b,T);T=T.sibling}A.type===U?(I=Ii(A.props.children,b.mode,I,A.key),I.return=b,b=I):(I=fl(A.type,A.key,A.props,null,b.mode,I),qa(I,A),I.return=b,b=I)}return p(b);case x:e:{for(q=A.key;T!==null;){if(T.key===q)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){a(b,T.sibling),I=u(T,A.children||[]),I.return=b,b=I;break e}else{a(b,T);break}else n(b,T);T=T.sibling}I=Pu(A,b.mode,I),I.return=b,b=I}return p(b);case Ge:return q=A._init,A=q(A._payload),Ae(b,T,A,I)}if(ze(A))return Z(b,T,A,I);if($(A)){if(q=$(A),typeof q!="function")throw Error(r(150));return A=q.call(A),F(b,T,A,I)}if(typeof A.then=="function")return Ae(b,T,Nl(A),I);if(A.$$typeof===Te)return Ae(b,T,_l(b,A),I);Ol(b,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(a(b,T.sibling),I=u(T,A),I.return=b,b=I):(a(b,T),I=Hu(A,b.mode,I),I.return=b,b=I),p(b)):a(b,T)}return function(b,T,A,I){try{Ba=0;var q=Ae(b,T,A,I);return Rs=null,q}catch(V){if(V===Ia||V===ml)throw V;var ie=Dt(29,V,null,b.mode);return ie.lanes=I,ie.return=b,ie}finally{}}}var Ns=r_(!0),l_=r_(!1),Vt=k(null),ln=null;function Qn(e){var n=e.alternate;H(Ze,Ze.current&1),H(Vt,e),ln===null&&(n===null||bs.current!==null||n.memoizedState!==null)&&(ln=e)}function o_(e){if(e.tag===22){if(H(Ze,Ze.current),H(Vt,e),ln===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ln=e)}}else Kn()}function Kn(){H(Ze,Ze.current),H(Vt,Vt.current)}function Tn(e){B(Vt),ln===e&&(ln=null),B(Ze)}var Ze=k(0);function Dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||of(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function vc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yc={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=xt(),u=Gn(l);u.payload=n,a!=null&&(u.callback=a),n=Yn(e,u,l),n!==null&&(Ut(n,e,l),ka(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=xt(),u=Gn(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Yn(e,u,l),n!==null&&(Ut(n,e,l),ka(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=xt(),l=Gn(a);l.tag=2,n!=null&&(l.callback=n),n=Yn(e,l,a),n!==null&&(Ut(n,e,a),ka(n,e,a))}};function u_(e,n,a,l,u,f,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,p):n.prototype&&n.prototype.isPureReactComponent?!ba(a,l)||!ba(u,f):!0}function c_(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&yc.enqueueReplaceState(n,n.state,null)}function Bi(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function f_(e){Il(e)}function h_(e){console.error(e)}function d_(e){Il(e)}function Ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function p_(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ec(e,n,a){return a=Gn(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(e,n)},a}function __(e){return e=Gn(e),e.tag=3,e}function g_(e,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){p_(n,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){p_(n,a,l),typeof u!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Y0(e,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Na(n,a,u,!0),a=Vt.current,a!==null){switch(a.tag){case 13:return ln===null?Gc():a.alternate===null&&Be===0&&(Be=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Xu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Fc(e,l,u)),!1;case 22:return a.flags|=65536,l===Xu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Fc(e,l,u)),!1}throw Error(r(435,a.tag))}return Fc(e,l,u),Gc(),!1}if(ge)return n=Vt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Vu&&(e=Error(r(422),{cause:l}),Ra(Ht(e,a)))):(l!==Vu&&(n=Error(r(423),{cause:l}),Ra(Ht(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Ht(l,a),u=Ec(e.stateNode,l,u),Ju(e,u),Be!==4&&(Be=2)),!1;var f=Error(r(520),{cause:l});if(f=Ht(f,a),Ka===null?Ka=[f]:Ka.push(f),Be!==4&&(Be=2),n===null)return!0;l=Ht(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ec(a.stateNode,l,e),Ju(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ei===null||!ei.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=__(u),g_(u,e,a,l),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var m_=Error(r(461)),tt=!1;function rt(e,n,a,l){n.child=e===null?l_(n,null,a,l):Ns(n,e.child,a,l)}function v_(e,n,a,l,u){a=a.render;var f=n.ref;if("ref"in l){var p={};for(var m in l)m!=="ref"&&(p[m]=l[m])}else p=l;return zi(n),l=ic(e,n,a,p,f,u),m=sc(),e!==null&&!tt?(ac(e,n,u),bn(e,n,u)):(ge&&m&&Bu(n),n.flags|=1,rt(e,n,l,u),n.child)}function y_(e,n,a,l,u){if(e===null){var f=a.type;return typeof f=="function"&&!zu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,E_(e,n,f,l,u)):(e=fl(a.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Nc(e,u)){var p=f.memoizedProps;if(a=a.compare,a=a!==null?a:ba,a(p,l)&&e.ref===n.ref)return bn(e,n,u)}return n.flags|=1,e=gn(f,l),e.ref=n.ref,e.return=n,n.child=e}function E_(e,n,a,l,u){if(e!==null){var f=e.memoizedProps;if(ba(f,l)&&e.ref===n.ref)if(tt=!1,n.pendingProps=l=f,Nc(e,u))(e.flags&131072)!==0&&(tt=!0);else return n.lanes=e.lanes,bn(e,n,u)}return Sc(e,n,a,l,u)}function S_(e,n,a){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return T_(e,n,l,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Ep(n,f):ec(),o_(n);else return n.lanes=n.childLanes=536870912,T_(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(gl(n,f.cachePool),Ep(n,f),Kn(),n.memoizedState=null):(e!==null&&gl(n,null),ec(),Kn());return rt(e,n,u,a),n.child}function T_(e,n,a,l){var u=Ku();return u=u===null?null:{parent:We._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&gl(n,null),ec(),o_(n),e!==null&&Na(e,n,l,!0),null}function kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Sc(e,n,a,l,u){return zi(n),a=ic(e,n,a,l,void 0,u),l=sc(),e!==null&&!tt?(ac(e,n,u),bn(e,n,u)):(ge&&l&&Bu(n),n.flags|=1,rt(e,n,a,u),n.child)}function b_(e,n,a,l,u,f){return zi(n),n.updateQueue=null,a=Tp(n,l,a,u),Sp(e),l=sc(),e!==null&&!tt?(ac(e,n,f),bn(e,n,f)):(ge&&l&&Bu(n),n.flags|=1,rt(e,n,a,f),n.child)}function C_(e,n,a,l,u){if(zi(n),n.stateNode===null){var f=vs,p=a.contextType;typeof p=="object"&&p!==null&&(f=dt(p)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Wu(n),p=a.contextType,f.context=typeof p=="object"&&p!==null?dt(p):vs,f.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(vc(n,a,p,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&yc.enqueueReplaceState(f,f.state,null),Ua(n,l,f,u),xa(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var m=n.memoizedProps,y=Bi(a,m);f.props=y;var w=f.context,D=a.contextType;p=vs,typeof D=="object"&&D!==null&&(p=dt(D));var M=a.getDerivedStateFromProps;D=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function",m=n.pendingProps!==m,D||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m||w!==p)&&c_(n,f,l,p),jn=!1;var R=n.memoizedState;f.state=R,Ua(n,l,f,u),xa(),w=n.memoizedState,m||R!==w||jn?(typeof M=="function"&&(vc(n,a,M,l),w=n.memoizedState),(y=jn||u_(n,a,y,l,R,w,p))?(D||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),f.props=l,f.state=w,f.context=p,l=y):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Zu(e,n),p=n.memoizedProps,D=Bi(a,p),f.props=D,M=n.pendingProps,R=f.context,w=a.contextType,y=vs,typeof w=="object"&&w!==null&&(y=dt(w)),m=a.getDerivedStateFromProps,(w=typeof m=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==M||R!==y)&&c_(n,f,l,y),jn=!1,R=n.memoizedState,f.state=R,Ua(n,l,f,u),xa();var N=n.memoizedState;p!==M||R!==N||jn||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof m=="function"&&(vc(n,a,m,l),N=n.memoizedState),(D=jn||u_(n,a,D,l,R,N,y)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(w||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,y)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=y,l=D):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,kl(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,a,u)):rt(e,n,a,u),n.memoizedState=f.state,e=n.child):e=bn(e,n,u),e}function A_(e,n,a,l){return wa(),n.flags|=256,rt(e,n,a,l),n.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:hp()}}function Cc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=jt),e}function w_(e,n,a){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),p&&(u=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(ge){if(u?Qn(n):Kn(),ge){var m=Pe,y;if(y=m){e:{for(y=m,m=rn;y.nodeType!==8;){if(!m){m=null;break e}if(y=Wt(y.nextSibling),y===null){m=null;break e}}m=y}m!==null?(n.memoizedState={dehydrated:m,treeContext:Mi!==null?{id:mn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},y=Dt(18,null,null,0),y.stateNode=m,y.return=n,n.child=y,_t=n,Pe=null,y=!0):y=!1}y||Ui(n)}if(m=n.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return of(m)?n.lanes=32:n.lanes=536870912,null;Tn(n)}return m=l.children,l=l.fallback,u?(Kn(),u=n.mode,m=xl({mode:"hidden",children:m},u),l=Ii(l,u,a,null),m.return=n,l.return=n,m.sibling=l,n.child=m,u=n.child,u.memoizedState=bc(a),u.childLanes=Cc(e,p,a),n.memoizedState=Tc,l):(Qn(n),Ac(n,m))}if(y=e.memoizedState,y!==null&&(m=y.dehydrated,m!==null)){if(f)n.flags&256?(Qn(n),n.flags&=-257,n=wc(e,n,a)):n.memoizedState!==null?(Kn(),n.child=e.child,n.flags|=128,n=null):(Kn(),u=l.fallback,m=n.mode,l=xl({mode:"visible",children:l.children},m),u=Ii(u,m,a,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ns(n,e.child,null,a),l=n.child,l.memoizedState=bc(a),l.childLanes=Cc(e,p,a),n.memoizedState=Tc,n=u);else if(Qn(n),of(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var w=p.dgst;p=w,l=Error(r(419)),l.stack="",l.digest=p,Ra({value:l,source:null,stack:null}),n=wc(e,n,a)}else if(tt||Na(e,n,a,!1),p=(a&e.childLanes)!==0,tt||p){if(p=Ie,p!==null&&(l=a&-a,l=(l&42)!==0?1:ou(l),l=(l&(p.suspendedLanes|a))!==0?0:l,l!==0&&l!==y.retryLane))throw y.retryLane=l,ms(e,l),Ut(p,e,l),m_;m.data==="$?"||Gc(),n=wc(e,n,a)}else m.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,Pe=Wt(m.nextSibling),_t=n,ge=!0,xi=null,rn=!1,e!==null&&(Bt[qt++]=mn,Bt[qt++]=vn,Bt[qt++]=Mi,mn=e.id,vn=e.overflow,Mi=n),n=Ac(n,l.children),n.flags|=4096);return n}return u?(Kn(),u=l.fallback,m=n.mode,y=e.child,w=y.sibling,l=gn(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,w!==null?u=gn(w,u):(u=Ii(u,m,a,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,m=e.child.memoizedState,m===null?m=bc(a):(y=m.cachePool,y!==null?(w=We._currentValue,y=y.parent!==w?{parent:w,pool:w}:y):y=hp(),m={baseLanes:m.baseLanes|a,cachePool:y}),u.memoizedState=m,u.childLanes=Cc(e,p,a),n.memoizedState=Tc,l):(Qn(n),a=e.child,e=a.sibling,a=gn(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function Ac(e,n){return n=xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xl(e,n){return e=Dt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function wc(e,n,a){return Ns(n,e.child,null,a),e=Ac(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function R_(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Gu(e.return,n,a)}function Rc(e,n,a,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=u)}function N_(e,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(rt(e,n,l.children,a),l=Ze.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R_(e,a,n);else if(e.tag===19)R_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(H(Ze,l),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Dl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Rc(n,!0,a,null,f);break;case"together":Rc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$n|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Na(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=gn(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=gn(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Nc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function F0(e,n,a){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),Vn(n,We,e.memoizedState.cache),wa();break;case 27:case 5:iu(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:Vn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(n),n.flags|=128,null):(a&n.child.childLanes)!==0?w_(e,n,a):(Qn(n),e=bn(e,n,a),e!==null?e.sibling:null);Qn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Na(e,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return N_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),H(Ze,Ze.current),l)break;return null;case 22:case 23:return n.lanes=0,S_(e,n,a);case 24:Vn(n,We,e.memoizedState.cache)}return bn(e,n,a)}function O_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)tt=!0;else{if(!Nc(e,a)&&(n.flags&128)===0)return tt=!1,F0(e,n,a);tt=(e.flags&131072)!==0}else tt=!1,ge&&(n.flags&1048576)!==0&&ap(n,dl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")zu(l)?(e=Bi(l,e),n.tag=1,n=C_(null,n,l,e,a)):(n.tag=0,n=Sc(null,n,l,e,a));else{if(l!=null){if(u=l.$$typeof,u===Qe){n.tag=11,n=v_(null,n,l,e,a);break e}else if(u===De){n.tag=14,n=y_(null,n,l,e,a);break e}}throw n=ye(l)||l,Error(r(306,n,""))}}return n;case 0:return Sc(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=Bi(l,n.pendingProps),C_(e,n,l,u,a);case 3:e:{if(Ue(n,n.stateNode.containerInfo),e===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Zu(e,n),Ua(n,l,null,a);var p=n.memoizedState;if(l=p.cache,Vn(n,We,l),l!==f.cache&&Yu(n,[We],a,!0),xa(),l=p.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=A_(e,n,l,a);break e}else if(l!==u){u=Ht(Error(r(424)),n),Ra(u),n=A_(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Pe=Wt(e.firstChild),_t=n,ge=!0,xi=null,rn=!0,a=l_(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wa(),l===u){n=bn(e,n,a);break e}rt(e,n,l,a)}n=n.child}return n;case 26:return kl(e,n),e===null?(a=kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(a=n.type,e=n.pendingProps,l=Kl(J.current).createElement(a),l[ht]=n,l[Et]=e,ot(l,a,e),et(l),n.stateNode=l):n.memoizedState=kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return iu(n),e===null&&ge&&(l=n.stateNode=Dg(n.type,n.pendingProps,J.current),_t=n,rn=!0,u=Pe,ii(n.type)?(uf=u,Pe=Wt(l.firstChild)):Pe=u),rt(e,n,n.pendingProps.children,a),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ge&&((u=l=Pe)&&(l=ES(l,n.type,n.pendingProps,rn),l!==null?(n.stateNode=l,_t=n,Pe=Wt(l.firstChild),rn=!1,u=!0):u=!1),u||Ui(n)),iu(n),u=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,l=f.children,af(u,f)?l=null:p!==null&&af(u,p)&&(n.flags|=32),n.memoizedState!==null&&(u=ic(e,n,H0,null,null,a),ir._currentValue=u),kl(e,n),rt(e,n,l,a),n.child;case 6:return e===null&&ge&&((e=a=Pe)&&(a=SS(a,n.pendingProps,rn),a!==null?(n.stateNode=a,_t=n,Pe=null,e=!0):e=!1),e||Ui(n)),null;case 13:return w_(e,n,a);case 4:return Ue(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ns(n,null,l,a):rt(e,n,l,a),n.child;case 11:return v_(e,n,n.type,n.pendingProps,a);case 7:return rt(e,n,n.pendingProps,a),n.child;case 8:return rt(e,n,n.pendingProps.children,a),n.child;case 12:return rt(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Vn(n,n.type,l.value),rt(e,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,zi(n),u=dt(u),l=l(u),n.flags|=1,rt(e,n,l,a),n.child;case 14:return y_(e,n,n.type,n.pendingProps,a);case 15:return E_(e,n,n.type,n.pendingProps,a);case 19:return N_(e,n,a);case 31:return l=n.pendingProps,a=n.mode,l={mode:l.mode,children:l.children},e===null?(a=xl(l,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=gn(e.child,l),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return S_(e,n,a);case 24:return zi(n),l=dt(We),e===null?(u=Ku(),u===null&&(u=Ie,f=Fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:l,cache:u},Wu(n),Vn(n,We,u)):((e.lanes&a)!==0&&(Zu(e,n),Ua(n,null,null,a),xa()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Vn(n,We,l)):(l=f.cache,Vn(n,We,l),l!==u.cache&&Yu(n,[We],a,!0))),rt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Cn(e){e.flags|=4}function D_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n)){if(n=Vt.current,n!==null&&((ce&4194048)===ce?ln!==null:(ce&62914560)!==ce&&(ce&536870912)===0||n!==ln))throw Ma=Xu,dp;e.flags|=8192}}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?od():536870912,e.lanes|=n,Ms|=n)}function Va(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function He(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function Q0(e,n,a){var l=n.pendingProps;switch(qu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return He(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),En(We),Hn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Aa(n)?Cn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,op())),He(n),null;case 26:return a=n.memoizedState,e===null?(Cn(n),a!==null?(He(n),D_(n,a)):(He(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Cn(n),He(n),D_(n,a)):(He(n),n.flags&=-16777217):(e.memoizedProps!==l&&Cn(n),He(n),n.flags&=-16777217),null;case 27:Fr(n),a=J.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return He(n),null}e=Y.current,Aa(n)?rp(n):(e=Dg(u,l,a),n.stateNode=e,Cn(n))}return He(n),null;case 5:if(Fr(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return He(n),null}if(e=Y.current,Aa(n))rp(n);else{switch(u=Kl(J.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}e[ht]=n,e[Et]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(ot(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Cn(n)}}return He(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(e=J.current,Aa(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,u=_t,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[ht]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||bg(e.nodeValue,a)),e||Ui(n)}else e=Kl(e).createTextNode(l),e[ht]=n,n.stateNode=e}return He(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Aa(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ht]=n}else wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;He(n),u=!1}else u=op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Tn(n),n):(Tn(n),null)}if(Tn(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),He(n),null;case 4:return Hn(),e===null&&$c(n.stateNode.containerInfo),He(n),null;case 10:return En(n.type),He(n),null;case 19:if(B(Ze),u=n.memoizedState,u===null)return He(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)Va(u,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Dl(e),f!==null){for(n.flags|=128,Va(u,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)sp(a,e),a=a.sibling;return H(Ze,Ze.current&1|2),n.child}e=e.sibling}u.tail!==null&&an()>Hl&&(n.flags|=128,l=!0,Va(u,!1),n.lanes=4194304)}else{if(!l)if(e=Dl(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),Va(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!ge)return He(n),null}else 2*an()-u.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,l=!0,Va(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=an(),n.sibling=null,e=Ze.current,H(Ze,l?e&1|2:e&1),n):(He(n),null);case 22:case 23:return Tn(n),tc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&B(Hi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),En(We),He(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function K0(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return En(We),Hn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Fr(n),null;case 13:if(Tn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));wa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(Ze),null;case 4:return Hn(),null;case 10:return En(n.type),null;case 22:case 23:return Tn(n),tc(),e!==null&&B(Hi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return En(We),null;case 25:return null;default:return null}}function I_(e,n){switch(qu(n),n.tag){case 3:En(We),Hn();break;case 26:case 27:case 5:Fr(n);break;case 4:Hn();break;case 13:Tn(n);break;case 19:B(Ze);break;case 10:En(n.type);break;case 22:case 23:Tn(n),tc(),e!==null&&B(Hi);break;case 24:En(We)}}function ja(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var f=a.create,p=a.inst;l=f(),p.destroy=l}a=a.next}while(a!==u)}}catch(m){Ne(n,n.return,m)}}function Xn(e,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var p=l.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,u=n;var y=a,w=m;try{w()}catch(D){Ne(u,y,D)}}}l=l.next}while(l!==f)}}catch(D){Ne(n,n.return,D)}}function M_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{yp(n,a)}catch(l){Ne(e,e.return,l)}}}function k_(e,n,a){a.props=Bi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ne(e,n,l)}}function Ga(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){Ne(e,n,u)}}function on(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Ne(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ne(e,n,u)}else a.current=null}function x_(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Ne(e,e.return,u)}}function Oc(e,n,a){try{var l=e.stateNode;_S(l,e.type,a,n),l[Et]=n}catch(u){Ne(e,e.return,u)}}function U_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ii(e.type)||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||U_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ii(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ic(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ql));else if(l!==4&&(l===27&&ii(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ic(e,n,a),e=e.sibling;e!==null;)Ic(e,n,a),e=e.sibling}function Ll(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&ii(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function L_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ot(n,l,a),n[ht]=e,n[Et]=a}catch(f){Ne(e,e.return,f)}}var An=!1,Fe=!1,Mc=!1,z_=typeof WeakSet=="function"?WeakSet:Set,nt=null;function X0(e,n){if(e=e.containerInfo,nf=eo,e=Kd(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var p=0,m=-1,y=-1,w=0,D=0,M=e,R=null;t:for(;;){for(var N;M!==a||u!==0&&M.nodeType!==3||(m=p+u),M!==f||l!==0&&M.nodeType!==3||(y=p+l),M.nodeType===3&&(p+=M.nodeValue.length),(N=M.firstChild)!==null;)R=M,M=N;for(;;){if(M===e)break t;if(R===a&&++w===u&&(m=p),R===f&&++D===l&&(y=p),(N=M.nextSibling)!==null)break;M=R,R=M.parentNode}M=N}a=m===-1||y===-1?null:{start:m,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(sf={focusedElem:e,selectionRange:a},eo=!1,nt=n;nt!==null;)if(n=nt,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,nt=e;else for(;nt!==null;){switch(n=nt,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var Z=Bi(a.type,u,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Z,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){Ne(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)lf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,nt=e;break}nt=n.return}}function H_(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wn(e,a),l&4&&ja(5,a);break;case 1:if(Wn(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){Ne(a,a.return,p)}else{var u=Bi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ne(a,a.return,p)}}l&64&&M_(a),l&512&&Ga(a,a.return);break;case 3:if(Wn(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{yp(e,n)}catch(p){Ne(a,a.return,p)}}break;case 27:n===null&&l&4&&L_(a);case 26:case 5:Wn(e,a),n===null&&l&4&&x_(a),l&512&&Ga(a,a.return);break;case 12:Wn(e,a);break;case 13:Wn(e,a),l&4&&q_(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sS.bind(null,a),TS(e,a))));break;case 22:if(l=a.memoizedState!==null||An,!l){n=n!==null&&n.memoizedState!==null||Fe,u=An;var f=Fe;An=l,(Fe=n)&&!f?Zn(e,a,(a.subtreeFlags&8772)!==0):Wn(e,a),An=u,Fe=f}break;case 30:break;default:Wn(e,a)}}function P_(e){var n=e.alternate;n!==null&&(e.alternate=null,P_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,bt=!1;function wn(e,n,a){for(a=a.child;a!==null;)B_(e,n,a),a=a.sibling}function B_(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(fa,a)}catch{}switch(a.tag){case 26:Fe||on(a,n),wn(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||on(a,n);var l=Le,u=bt;ii(a.type)&&(Le=a.stateNode,bt=!1),wn(e,n,a),$a(a.stateNode),Le=l,bt=u;break;case 5:Fe||on(a,n);case 6:if(l=Le,u=bt,Le=null,wn(e,n,a),Le=l,bt=u,Le!==null)if(bt)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(a.stateNode)}catch(f){Ne(a,n,f)}else try{Le.removeChild(a.stateNode)}catch(f){Ne(a,n,f)}break;case 18:Le!==null&&(bt?(e=Le,Ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),lr(e)):Ng(Le,a.stateNode));break;case 4:l=Le,u=bt,Le=a.stateNode.containerInfo,bt=!0,wn(e,n,a),Le=l,bt=u;break;case 0:case 11:case 14:case 15:Fe||Xn(2,a,n),Fe||Xn(4,a,n),wn(e,n,a);break;case 1:Fe||(on(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&k_(a,n,l)),wn(e,n,a);break;case 21:wn(e,n,a);break;case 22:Fe=(l=Fe)||a.memoizedState!==null,wn(e,n,a),Fe=l;break;default:wn(e,n,a)}}function q_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lr(e)}catch(a){Ne(n,n.return,a)}}function W0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new z_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new z_),n;default:throw Error(r(435,e.tag))}}function kc(e,n){var a=W0(e);n.forEach(function(l){var u=aS.bind(null,e,l);a.has(l)||(a.add(l),l.then(u,u))})}function It(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=e,p=n,m=p;e:for(;m!==null;){switch(m.tag){case 27:if(ii(m.type)){Le=m.stateNode,bt=!1;break e}break;case 5:Le=m.stateNode,bt=!1;break e;case 3:case 4:Le=m.stateNode.containerInfo,bt=!0;break e}m=m.return}if(Le===null)throw Error(r(160));B_(f,p,u),Le=null,bt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)V_(n,e),n=n.sibling}var Xt=null;function V_(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:It(n,e),Mt(e),l&4&&(Xn(3,e,e.return),ja(3,e),Xn(5,e,e.return));break;case 1:It(n,e),Mt(e),l&512&&(Fe||a===null||on(a,a.return)),l&64&&An&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Xt;if(It(n,e),Mt(e),l&512&&(Fe||a===null||on(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[pa]||f[ht]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),ot(f,l,a),f[ht]=e,et(f),l=f;break e;case"link":var p=Lg("link","href",u).get(l+(a.href||""));if(p){for(var m=0;m<p.length;m++)if(f=p[m],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(m,1);break t}}f=u.createElement(l),ot(f,l,a),u.head.appendChild(f);break;case"meta":if(p=Lg("meta","content",u).get(l+(a.content||""))){for(m=0;m<p.length;m++)if(f=p[m],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(m,1);break t}}f=u.createElement(l),ot(f,l,a),u.head.appendChild(f);break;default:throw Error(r(468,l))}f[ht]=e,et(f),l=f}e.stateNode=l}else zg(u,e.type,e.stateNode);else e.stateNode=Ug(u,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?zg(u,e.type,e.stateNode):Ug(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Oc(e,e.memoizedProps,a.memoizedProps)}break;case 27:It(n,e),Mt(e),l&512&&(Fe||a===null||on(a,a.return)),a!==null&&l&4&&Oc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(It(n,e),Mt(e),l&512&&(Fe||a===null||on(a,a.return)),e.flags&32){u=e.stateNode;try{cs(u,"")}catch(N){Ne(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Oc(e,u,a!==null?a.memoizedProps:u)),l&1024&&(Mc=!0);break;case 6:if(It(n,e),Mt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(N){Ne(e,e.return,N)}}break;case 3:if(Zl=null,u=Xt,Xt=Xl(n.containerInfo),It(n,e),Xt=u,Mt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(N){Ne(e,e.return,N)}Mc&&(Mc=!1,j_(e));break;case 4:l=Xt,Xt=Xl(e.stateNode.containerInfo),It(n,e),Mt(e),Xt=l;break;case 12:It(n,e),Mt(e);break;case 13:It(n,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pc=an()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 22:u=e.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,w=An,D=Fe;if(An=w||u,Fe=D||y,It(n,e),Fe=D,An=w,Mt(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||y||An||Fe||qi(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){y=a=n;try{if(f=y.stateNode,u)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=y.stateNode;var M=y.memoizedProps.style,R=M!=null&&M.hasOwnProperty("display")?M.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){Ne(y,y.return,N)}}}else if(n.tag===6){if(a===null){y=n;try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(N){Ne(y,y.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,kc(e,a))));break;case 19:It(n,e),Mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 30:break;case 21:break;default:It(n,e),Mt(e)}}function Mt(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(U_(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Dc(e);Ll(e,f,u);break;case 5:var p=a.stateNode;a.flags&32&&(cs(p,""),a.flags&=-33);var m=Dc(e);Ll(e,m,p);break;case 3:case 4:var y=a.stateNode.containerInfo,w=Dc(e);Ic(e,w,y);break;default:throw Error(r(161))}}catch(D){Ne(e,e.return,D)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function j_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;j_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)H_(e,n.alternate,n),n=n.sibling}function qi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xn(4,n,n.return),qi(n);break;case 1:on(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&k_(n,n.return,a),qi(n);break;case 27:$a(n.stateNode);case 26:case 5:on(n,n.return),qi(n);break;case 22:n.memoizedState===null&&qi(n);break;case 30:qi(n);break;default:qi(n)}e=e.sibling}}function Zn(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:Zn(u,f,a),ja(4,f);break;case 1:if(Zn(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){Ne(l,l.return,w)}if(l=f,u=l.updateQueue,u!==null){var m=l.stateNode;try{var y=u.shared.hiddenCallbacks;if(y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<y.length;u++)vp(y[u],m)}catch(w){Ne(l,l.return,w)}}a&&p&64&&M_(f),Ga(f,f.return);break;case 27:L_(f);case 26:case 5:Zn(u,f,a),a&&l===null&&p&4&&x_(f),Ga(f,f.return);break;case 12:Zn(u,f,a);break;case 13:Zn(u,f,a),a&&p&4&&q_(u,f);break;case 22:f.memoizedState===null&&Zn(u,f,a),Ga(f,f.return);break;case 30:break;default:Zn(u,f,a)}n=n.sibling}}function xc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Oa(a))}function Uc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Oa(e))}function un(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)G_(e,n,a,l),n=n.sibling}function G_(e,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:un(e,n,a,l),u&2048&&ja(9,n);break;case 1:un(e,n,a,l);break;case 3:un(e,n,a,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Oa(e)));break;case 12:if(u&2048){un(e,n,a,l),e=n.stateNode;try{var f=n.memoizedProps,p=f.id,m=f.onPostCommit;typeof m=="function"&&m(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){Ne(n,n.return,y)}}else un(e,n,a,l);break;case 13:un(e,n,a,l);break;case 23:break;case 22:f=n.stateNode,p=n.alternate,n.memoizedState!==null?f._visibility&2?un(e,n,a,l):Ya(e,n):f._visibility&2?un(e,n,a,l):(f._visibility|=2,Os(e,n,a,l,(n.subtreeFlags&10256)!==0)),u&2048&&xc(p,n);break;case 24:un(e,n,a,l),u&2048&&Uc(n.alternate,n);break;default:un(e,n,a,l)}}function Os(e,n,a,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,p=n,m=a,y=l,w=p.flags;switch(p.tag){case 0:case 11:case 15:Os(f,p,m,y,u),ja(8,p);break;case 23:break;case 22:var D=p.stateNode;p.memoizedState!==null?D._visibility&2?Os(f,p,m,y,u):Ya(f,p):(D._visibility|=2,Os(f,p,m,y,u)),u&&w&2048&&xc(p.alternate,p);break;case 24:Os(f,p,m,y,u),u&&w&2048&&Uc(p.alternate,p);break;default:Os(f,p,m,y,u)}n=n.sibling}}function Ya(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,u=l.flags;switch(l.tag){case 22:Ya(a,l),u&2048&&xc(l.alternate,l);break;case 24:Ya(a,l),u&2048&&Uc(l.alternate,l);break;default:Ya(a,l)}n=n.sibling}}var Fa=8192;function Ds(e){if(e.subtreeFlags&Fa)for(e=e.child;e!==null;)Y_(e),e=e.sibling}function Y_(e){switch(e.tag){case 26:Ds(e),e.flags&Fa&&e.memoizedState!==null&&US(Xt,e.memoizedState,e.memoizedProps);break;case 5:Ds(e);break;case 3:case 4:var n=Xt;Xt=Xl(e.stateNode.containerInfo),Ds(e),Xt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Fa,Fa=16777216,Ds(e),Fa=n):Ds(e));break;default:Ds(e)}}function F_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Qa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];nt=l,K_(l,e)}F_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Q_(e),e=e.sibling}function Q_(e){switch(e.tag){case 0:case 11:case 15:Qa(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Qa(e);break;case 12:Qa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):Qa(e);break;default:Qa(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];nt=l,K_(l,e)}F_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xn(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function K_(e,n){for(;nt!==null;){var a=nt;switch(a.tag){case 0:case 11:case 15:Xn(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Oa(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,nt=l;else e:for(a=e;nt!==null;){l=nt;var u=l.sibling,f=l.return;if(P_(l),l===a){nt=null;break e}if(u!==null){u.return=f,nt=u;break e}nt=f}}}var Z0={getCacheForType:function(e){var n=dt(We),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},J0=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ie=null,re=null,ce=0,Se=0,kt=null,Jn=!1,Is=!1,Lc=!1,Rn=0,Be=0,$n=0,Vi=0,zc=0,jt=0,Ms=0,Ka=null,Ct=null,Hc=!1,Pc=0,Hl=1/0,Pl=null,ei=null,lt=0,ti=null,ks=null,xs=0,Bc=0,qc=null,X_=null,Xa=0,Vc=null;function xt(){if((Ee&2)!==0&&ce!==0)return ce&-ce;if(O.T!==null){var e=Ss;return e!==0?e:Xc()}return fd()}function W_(){jt===0&&(jt=(ce&536870912)===0||ge?ld():536870912);var e=Vt.current;return e!==null&&(e.flags|=32),jt}function Ut(e,n,a){(e===Ie&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Us(e,0),ni(e,ce,jt,!1)),da(e,a),((Ee&2)===0||e!==Ie)&&(e===Ie&&((Ee&2)===0&&(Vi|=a),Be===4&&ni(e,ce,jt,!1)),cn(e))}function Z_(e,n,a){if((Ee&6)!==0)throw Error(r(327));var l=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ha(e,n),u=l?tS(e,n):Yc(e,n,!0),f=l;do{if(u===0){Is&&!l&&ni(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!$0(a)){u=Yc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var m=e;u=Ka;var y=m.current.memoizedState.isDehydrated;if(y&&(Us(m,p).flags|=256),p=Yc(m,p,!1),p!==2){if(Lc&&!y){m.errorRecoveryDisabledLanes|=f,Vi|=f,u=4;break e}f=Ct,Ct=u,f!==null&&(Ct===null?Ct=f:Ct.push.apply(Ct,f))}u=p}if(f=!1,u!==2)continue}}if(u===1){Us(e,0),ni(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ni(l,n,jt,!Jn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Pc+300-an(),10<u)){if(ni(l,n,jt,!Jn),Wr(l,0,!0)!==0)break e;l.timeoutHandle=wg(J_.bind(null,l,a,Ct,Pl,Hc,n,jt,Vi,Ms,Jn,f,2,-0,0),u);break e}J_(l,a,Ct,Pl,Hc,n,jt,Vi,Ms,Jn,f,0,-0,0)}}break}while(!0);cn(e)}function J_(e,n,a,l,u,f,p,m,y,w,D,M,R,N){if(e.timeoutHandle=-1,M=n.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(nr={stylesheets:null,count:0,unsuspend:xS},Y_(n),M=LS(),M!==null)){e.cancelPendingCommit=M(ag.bind(null,e,n,f,a,l,u,p,m,y,D,1,R,N)),ni(e,f,p,!w);return}ag(e,n,f,a,l,u,p,m,y)}function $0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!Ot(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ni(e,n,a,l){n&=~zc,n&=~Vi,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Nt(u),p=1<<f;l[f]=-1,u&=~p}a!==0&&ud(e,a,n)}function Bl(){return(Ee&6)===0?(Wa(0),!1):!0}function jc(){if(re!==null){if(Se===0)var e=re.return;else e=re,yn=Li=null,rc(e),Rs=null,Ba=0,e=re;for(;e!==null;)I_(e.alternate,e),e=e.return;re=null}}function Us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,mS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),jc(),Ie=e,re=a=gn(e.current,null),ce=n,Se=0,kt=null,Jn=!1,Is=ha(e,n),Lc=!1,Ms=jt=zc=Vi=$n=Be=0,Ct=Ka=null,Hc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Nt(l),f=1<<u;n|=e[u],l&=~f}return Rn=n,ol(),a}function $_(e,n){ne=null,O.H=Rl,n===Ia||n===ml?(n=gp(),Se=3):n===dp?(n=gp(),Se=4):Se=n===m_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kt=n,re===null&&(Be=1,Ml(e,Ht(n,e.current)))}function eg(){var e=O.H;return O.H=Rl,e===null?Rl:e}function tg(){var e=O.A;return O.A=Z0,e}function Gc(){Be=4,Jn||(ce&4194048)!==ce&&Vt.current!==null||(Is=!0),($n&134217727)===0&&(Vi&134217727)===0||Ie===null||ni(Ie,ce,jt,!1)}function Yc(e,n,a){var l=Ee;Ee|=2;var u=eg(),f=tg();(Ie!==e||ce!==n)&&(Pl=null,Us(e,n)),n=!1;var p=Be;e:do try{if(Se!==0&&re!==null){var m=re,y=kt;switch(Se){case 8:jc(),p=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(n=!0);var w=Se;if(Se=0,kt=null,Ls(e,m,y,w),a&&Is){p=0;break e}break;default:w=Se,Se=0,kt=null,Ls(e,m,y,w)}}eS(),p=Be;break}catch(D){$_(e,D)}while(!0);return n&&e.shellSuspendCounter++,yn=Li=null,Ee=l,O.H=u,O.A=f,re===null&&(Ie=null,ce=0,ol()),p}function eS(){for(;re!==null;)ng(re)}function tS(e,n){var a=Ee;Ee|=2;var l=eg(),u=tg();Ie!==e||ce!==n?(Pl=null,Hl=an()+500,Us(e,n)):Is=ha(e,n);e:do try{if(Se!==0&&re!==null){n=re;var f=kt;t:switch(Se){case 1:Se=0,kt=null,Ls(e,n,f,1);break;case 2:case 9:if(pp(f)){Se=0,kt=null,ig(n);break}n=function(){Se!==2&&Se!==9||Ie!==e||(Se=7),cn(e)},f.then(n,n);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:pp(f)?(Se=0,kt=null,ig(n)):(Se=0,kt=null,Ls(e,n,f,7));break;case 5:var p=null;switch(re.tag){case 26:p=re.memoizedState;case 5:case 27:var m=re;if(!p||Hg(p)){Se=0,kt=null;var y=m.sibling;if(y!==null)re=y;else{var w=m.return;w!==null?(re=w,ql(w)):re=null}break t}}Se=0,kt=null,Ls(e,n,f,5);break;case 6:Se=0,kt=null,Ls(e,n,f,6);break;case 8:jc(),Be=6;break e;default:throw Error(r(462))}}nS();break}catch(D){$_(e,D)}while(!0);return yn=Li=null,O.H=l,O.A=u,Ee=a,re!==null?0:(Ie=null,ce=0,ol(),Be)}function nS(){for(;re!==null&&!CE();)ng(re)}function ng(e){var n=O_(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,n===null?ql(e):re=n}function ig(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=b_(a,n,n.pendingProps,n.type,void 0,ce);break;case 11:n=b_(a,n,n.pendingProps,n.type.render,n.ref,ce);break;case 5:rc(n);default:I_(a,n),n=re=sp(n,Rn),n=O_(a,n,Rn)}e.memoizedProps=e.pendingProps,n===null?ql(e):re=n}function Ls(e,n,a,l){yn=Li=null,rc(n),Rs=null,Ba=0;var u=n.return;try{if(Y0(e,u,n,a,ce)){Be=1,Ml(e,Ht(a,e.current)),re=null;return}}catch(f){if(u!==null)throw re=u,f;Be=1,Ml(e,Ht(a,e.current)),re=null;return}n.flags&32768?(ge||l===1?e=!0:Is||(ce&536870912)!==0?e=!1:(Jn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),sg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){sg(n,Jn);return}e=n.return;var a=Q0(n.alternate,n,Rn);if(a!==null){re=a;return}if(n=n.sibling,n!==null){re=n;return}re=n=e}while(n!==null);Be===0&&(Be=5)}function sg(e,n){do{var a=K0(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Be=6,re=null}function ag(e,n,a,l,u,f,p,m,y){e.cancelPendingCommit=null;do Vl();while(lt!==0);if((Ee&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Uu,xE(e,a,f,p,m,y),e===Ie&&(re=Ie=null,ce=0),ks=n,ti=e,xs=a,Bc=f,qc=u,X_=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rS(Qr,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,u=z.p,z.p=2,p=Ee,Ee|=4;try{X0(e,n,a)}finally{Ee=p,z.p=u,O.T=l}}lt=1,rg(),lg(),og()}}function rg(){if(lt===1){lt=0;var e=ti,n=ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var l=z.p;z.p=2;var u=Ee;Ee|=4;try{V_(n,e);var f=sf,p=Kd(e.containerInfo),m=f.focusedElem,y=f.selectionRange;if(p!==m&&m&&m.ownerDocument&&Qd(m.ownerDocument.documentElement,m)){if(y!==null&&Du(m)){var w=y.start,D=y.end;if(D===void 0&&(D=w),"selectionStart"in m)m.selectionStart=w,m.selectionEnd=Math.min(D,m.value.length);else{var M=m.ownerDocument||document,R=M&&M.defaultView||window;if(R.getSelection){var N=R.getSelection(),Z=m.textContent.length,F=Math.min(y.start,Z),Ae=y.end===void 0?F:Math.min(y.end,Z);!N.extend&&F>Ae&&(p=Ae,Ae=F,F=p);var b=Fd(m,F),T=Fd(m,Ae);if(b&&T&&(N.rangeCount!==1||N.anchorNode!==b.node||N.anchorOffset!==b.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var A=M.createRange();A.setStart(b.node,b.offset),N.removeAllRanges(),F>Ae?(N.addRange(A),N.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),N.addRange(A))}}}}for(M=[],N=m;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<M.length;m++){var I=M[m];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}eo=!!nf,sf=nf=null}finally{Ee=u,z.p=l,O.T=a}}e.current=n,lt=2}}function lg(){if(lt===2){lt=0;var e=ti,n=ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var l=z.p;z.p=2;var u=Ee;Ee|=4;try{H_(e,n.alternate,n)}finally{Ee=u,z.p=l,O.T=a}}lt=3}}function og(){if(lt===4||lt===3){lt=0,AE();var e=ti,n=ks,a=xs,l=X_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?lt=5:(lt=0,ks=ti=null,ug(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ei=null),uu(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(fa,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,u=z.p,z.p=2,O.T=null;try{for(var f=e.onRecoverableError,p=0;p<l.length;p++){var m=l[p];f(m.value,{componentStack:m.stack})}}finally{O.T=n,z.p=u}}(xs&3)!==0&&Vl(),cn(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Vc?Xa++:(Xa=0,Vc=e):Xa=0,Wa(0)}}function ug(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Oa(n)))}function Vl(e){return rg(),lg(),og(),cg()}function cg(){if(lt!==5)return!1;var e=ti,n=Bc;Bc=0;var a=uu(xs),l=O.T,u=z.p;try{z.p=32>a?32:a,O.T=null,a=qc,qc=null;var f=ti,p=xs;if(lt=0,ks=ti=null,xs=0,(Ee&6)!==0)throw Error(r(331));var m=Ee;if(Ee|=4,Q_(f.current),G_(f,f.current,p,a),Ee=m,Wa(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(fa,f)}catch{}return!0}finally{z.p=u,O.T=l,ug(e,n)}}function fg(e,n,a){n=Ht(a,n),n=Ec(e.stateNode,n,2),e=Yn(e,n,2),e!==null&&(da(e,2),cn(e))}function Ne(e,n,a){if(e.tag===3)fg(e,e,a);else for(;n!==null;){if(n.tag===3){fg(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ei===null||!ei.has(l))){e=Ht(a,e),a=__(2),l=Yn(n,a,2),l!==null&&(g_(a,l,n,e),da(l,2),cn(l));break}}n=n.return}}function Fc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new J0;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(Lc=!0,u.add(a),e=iS.bind(null,e,n,a),n.then(e,e))}function iS(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(ce&a)===a&&(Be===4||Be===3&&(ce&62914560)===ce&&300>an()-Pc?(Ee&2)===0&&Us(e,0):zc|=a,Ms===ce&&(Ms=0)),cn(e)}function hg(e,n){n===0&&(n=od()),e=ms(e,n),e!==null&&(da(e,n),cn(e))}function sS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),hg(e,a)}function aS(e,n){var a=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),hg(e,a)}function rS(e,n){return au(e,n)}var jl=null,zs=null,Qc=!1,Gl=!1,Kc=!1,ji=0;function cn(e){e!==zs&&e.next===null&&(zs===null?jl=zs=e:zs=zs.next=e),Gl=!0,Qc||(Qc=!0,oS())}function Wa(e,n){if(!Kc&&Gl){Kc=!0;do for(var a=!1,l=jl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var p=l.suspendedLanes,m=l.pingedLanes;f=(1<<31-Nt(42|e)+1)-1,f&=u&~(p&~m),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,gg(l,f))}else f=ce,f=Wr(l,l===Ie?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||ha(l,f)||(a=!0,gg(l,f));l=l.next}while(a);Kc=!1}}function lS(){dg()}function dg(){Gl=Qc=!1;var e=0;ji!==0&&(gS()&&(e=ji),ji=0);for(var n=an(),a=null,l=jl;l!==null;){var u=l.next,f=pg(l,n);f===0?(l.next=null,a===null?jl=u:a.next=u,u===null&&(zs=a)):(a=l,(e!==0||(f&3)!==0)&&(Gl=!0)),l=u}Wa(e)}function pg(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var p=31-Nt(f),m=1<<p,y=u[p];y===-1?((m&a)===0||(m&l)!==0)&&(u[p]=kE(m,n)):y<=n&&(e.expiredLanes|=m),f&=~m}if(n=Ie,a=ce,a=Wr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ru(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ha(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&ru(l),uu(a)){case 2:case 8:a=ad;break;case 32:a=Qr;break;case 268435456:a=rd;break;default:a=Qr}return l=_g.bind(null,e),a=au(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&ru(l),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var l=ce;return l=Wr(e,e===Ie?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Z_(e,l,n),pg(e,an()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function gg(e,n){if(Vl())return null;Z_(e,n,!0)}function oS(){vS(function(){(Ee&6)!==0?au(sd,lS):dg()})}function Xc(){return ji===0&&(ji=ld()),ji}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uS(e,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var f=mg((u[Et]||null).action),p=l.submitter;p&&(n=(n=p[Et]||null)?mg(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var m=new al("action","action",null,l,u);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ji!==0){var y=p?vg(u,p):new FormData(u);_c(a,{pending:!0,data:y,method:u.method,action:f},null,y)}}else typeof f=="function"&&(m.preventDefault(),y=p?vg(u,p):new FormData(u),_c(a,{pending:!0,data:y,method:u.method,action:f},f,y))},currentTarget:u}]})}}for(var Wc=0;Wc<xu.length;Wc++){var Zc=xu[Wc],cS=Zc.toLowerCase(),fS=Zc[0].toUpperCase()+Zc.slice(1);Kt(cS,"on"+fS)}Kt(Zd,"onAnimationEnd"),Kt(Jd,"onAnimationIteration"),Kt($d,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(N0,"onTransitionRun"),Kt(O0,"onTransitionStart"),Kt(D0,"onTransitionCancel"),Kt(ep,"onTransitionEnd"),ls("onMouseEnter",["mouseout","mouseover"]),ls("onMouseLeave",["mouseout","mouseover"]),ls("onPointerEnter",["pointerout","pointerover"]),ls("onPointerLeave",["pointerout","pointerover"]),Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Za));function yg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var p=l.length-1;0<=p;p--){var m=l[p],y=m.instance,w=m.currentTarget;if(m=m.listener,y!==f&&u.isPropagationStopped())break e;f=m,u.currentTarget=w;try{f(u)}catch(D){Il(D)}u.currentTarget=null,f=y}else for(p=0;p<l.length;p++){if(m=l[p],y=m.instance,w=m.currentTarget,m=m.listener,y!==f&&u.isPropagationStopped())break e;f=m,u.currentTarget=w;try{f(u)}catch(D){Il(D)}u.currentTarget=null,f=y}}}}function le(e,n){var a=n[cu];a===void 0&&(a=n[cu]=new Set);var l=e+"__bubble";a.has(l)||(Eg(n,e,2,!1),a.add(l))}function Jc(e,n,a){var l=0;n&&(l|=4),Eg(a,e,l,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function $c(e){if(!e[Yl]){e[Yl]=!0,dd.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||Jc(a,!1,e),Jc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Jc("selectionchange",!1,n))}}function Eg(e,n,a,l){switch(Gg(n)){case 2:var u=PS;break;case 8:u=BS;break;default:u=pf}a=u.bind(null,n,a,e),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ef(e,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var m=l.stateNode.containerInfo;if(m===u)break;if(p===4)for(p=l.return;p!==null;){var y=p.tag;if((y===3||y===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;m!==null;){if(p=ss(m),p===null)return;if(y=p.tag,y===5||y===6||y===26||y===27){l=f=p;continue e}m=m.parentNode}}l=l.return}Rd(function(){var w=f,D=yu(a),M=[];e:{var R=tp.get(e);if(R!==void 0){var N=al,Z=e;switch(e){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":N=r0;break;case"focusin":Z="focus",N=Au;break;case"focusout":Z="blur",N=Au;break;case"beforeblur":case"afterblur":N=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=u0;break;case Zd:case Jd:case $d:N=ZE;break;case ep:N=f0;break;case"scroll":case"scrollend":N=FE;break;case"wheel":N=d0;break;case"copy":case"cut":case"paste":N=$E;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Md;break;case"toggle":case"beforetoggle":N=_0}var F=(n&4)!==0,Ae=!F&&(e==="scroll"||e==="scrollend"),b=F?R!==null?R+"Capture":null:R;F=[];for(var T=w,A;T!==null;){var I=T;if(A=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||A===null||b===null||(I=ga(T,b),I!=null&&F.push(Ja(T,I,A))),Ae)break;T=T.return}0<F.length&&(R=new N(R,Z,null,a,D),M.push({event:R,listeners:F}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&a!==vu&&(Z=a.relatedTarget||a.fromElement)&&(ss(Z)||Z[is]))break e;if((N||R)&&(R=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,N?(Z=a.relatedTarget||a.toElement,N=w,Z=Z?ss(Z):null,Z!==null&&(Ae=c(Z),F=Z.tag,Z!==Ae||F!==5&&F!==27&&F!==6)&&(Z=null)):(N=null,Z=w),N!==Z)){if(F=Dd,I="onMouseLeave",b="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(F=Md,I="onPointerLeave",b="onPointerEnter",T="pointer"),Ae=N==null?R:_a(N),A=Z==null?R:_a(Z),R=new F(I,T+"leave",N,a,D),R.target=Ae,R.relatedTarget=A,I=null,ss(D)===w&&(F=new F(b,T+"enter",Z,a,D),F.target=A,F.relatedTarget=Ae,I=F),Ae=I,N&&Z)t:{for(F=N,b=Z,T=0,A=F;A;A=Hs(A))T++;for(A=0,I=b;I;I=Hs(I))A++;for(;0<T-A;)F=Hs(F),T--;for(;0<A-T;)b=Hs(b),A--;for(;T--;){if(F===b||b!==null&&F===b.alternate)break t;F=Hs(F),b=Hs(b)}F=null}else F=null;N!==null&&Sg(M,R,N,F,!1),Z!==null&&Ae!==null&&Sg(M,Ae,Z,F,!0)}}e:{if(R=w?_a(w):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var q=Bd;else if(Hd(R))if(qd)q=A0;else{q=b0;var ie=T0}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?w&&mu(w.elementType)&&(q=Bd):q=C0;if(q&&(q=q(e,w))){Pd(M,q,a,D);break e}ie&&ie(e,R,w),e==="focusout"&&w&&R.type==="number"&&w.memoizedProps.value!=null&&gu(R,"number",R.value)}switch(ie=w?_a(w):window,e){case"focusin":(Hd(ie)||ie.contentEditable==="true")&&(ps=ie,Iu=w,Ca=null);break;case"focusout":Ca=Iu=ps=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Xd(M,a,D);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Xd(M,a,D)}var V;if(Ru)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else ds?Ld(e,a)&&(Q="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Q="onCompositionStart");Q&&(kd&&a.locale!=="ko"&&(ds||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&ds&&(V=Nd()):(qn=D,Tu="value"in qn?qn.value:qn.textContent,ds=!0)),ie=Fl(w,Q),0<ie.length&&(Q=new Id(Q,e,null,a,D),M.push({event:Q,listeners:ie}),V?Q.data=V:(V=zd(a),V!==null&&(Q.data=V)))),(V=m0?v0(e,a):y0(e,a))&&(Q=Fl(w,"onBeforeInput"),0<Q.length&&(ie=new Id("onBeforeInput","beforeinput",null,a,D),M.push({event:ie,listeners:Q}),ie.data=V)),uS(M,e,w,a,D)}yg(M,n)})}function Ja(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ga(e,a),u!=null&&l.unshift(Ja(e,u,f)),u=ga(e,n),u!=null&&l.push(Ja(e,u,f))),e.tag===3)return l;e=e.return}return[]}function Hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sg(e,n,a,l,u){for(var f=n._reactName,p=[];a!==null&&a!==l;){var m=a,y=m.alternate,w=m.stateNode;if(m=m.tag,y!==null&&y===l)break;m!==5&&m!==26&&m!==27||w===null||(y=w,u?(w=ga(a,f),w!=null&&p.unshift(Ja(a,w,y))):u||(w=ga(a,f),w!=null&&p.push(Ja(a,w,y)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var dS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(dS,`
`).replace(pS,"")}function bg(e,n){return n=Tg(n),Tg(e)===n}function Ql(){}function Ce(e,n,a,l,u,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||cs(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&cs(e,""+l);break;case"className":Jr(e,"class",l);break;case"tabIndex":Jr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jr(e,a,l);break;case"style":Ad(e,l,f);break;case"data":if(n!=="object"){Jr(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=tl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ce(e,n,"name",u.name,u,null),Ce(e,n,"formEncType",u.formEncType,u,null),Ce(e,n,"formMethod",u.formMethod,u,null),Ce(e,n,"formTarget",u.formTarget,u,null)):(Ce(e,n,"encType",u.encType,u,null),Ce(e,n,"method",u.method,u,null),Ce(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=tl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Ql);break;case"onScroll":l!=null&&le("scroll",e);break;case"onScrollEnd":l!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":le("beforetoggle",e),le("toggle",e),Zr(e,"popover",l);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Zr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=GE.get(a)||a,Zr(e,a,l))}}function tf(e,n,a,l,u,f){switch(a){case"style":Ad(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?cs(e,l):(typeof l=="number"||typeof l=="bigint")&&cs(e,""+l);break;case"onScroll":l!=null&&le("scroll",e);break;case"onScrollEnd":l!=null&&le("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Et]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Zr(e,a,l)}}}function ot(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var p=a[f];if(p!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ce(e,n,f,p,a,null)}}u&&Ce(e,n,"srcSet",a.srcSet,a,null),l&&Ce(e,n,"src",a.src,a,null);return;case"input":le("invalid",e);var m=f=p=u=null,y=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":u=D;break;case"type":p=D;break;case"checked":y=D;break;case"defaultChecked":w=D;break;case"value":f=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,n));break;default:Ce(e,n,l,D,a,null)}}Sd(e,f,m,y,w,p,u,!1),$r(e);return;case"select":le("invalid",e),l=p=f=null;for(u in a)if(a.hasOwnProperty(u)&&(m=a[u],m!=null))switch(u){case"value":f=m;break;case"defaultValue":p=m;break;case"multiple":l=m;default:Ce(e,n,u,m,a,null)}n=f,a=p,e.multiple=!!l,n!=null?us(e,!!l,n,!1):a!=null&&us(e,!!l,a,!0);return;case"textarea":le("invalid",e),f=u=l=null;for(p in a)if(a.hasOwnProperty(p)&&(m=a[p],m!=null))switch(p){case"value":l=m;break;case"defaultValue":u=m;break;case"children":f=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(r(91));break;default:Ce(e,n,p,m,a,null)}bd(e,l,u,f),$r(e);return;case"option":for(y in a)if(a.hasOwnProperty(y)&&(l=a[y],l!=null))switch(y){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ce(e,n,y,l,a,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(l=0;l<Za.length;l++)le(Za[l],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ce(e,n,w,l,a,null)}return;default:if(mu(n)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&tf(e,n,D,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&Ce(e,n,m,l,a,null))}function _S(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,p=null,m=null,y=null,w=null,D=null;for(N in a){var M=a[N];if(a.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=M;default:l.hasOwnProperty(N)||Ce(e,n,N,null,l,M)}}for(var R in l){var N=l[R];if(M=a[R],l.hasOwnProperty(R)&&(N!=null||M!=null))switch(R){case"type":f=N;break;case"name":u=N;break;case"checked":w=N;break;case"defaultChecked":D=N;break;case"value":p=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,n));break;default:N!==M&&Ce(e,n,R,N,l,M)}}_u(e,p,m,y,w,D,f,u);return;case"select":N=p=m=R=null;for(f in a)if(y=a[f],a.hasOwnProperty(f)&&y!=null)switch(f){case"value":break;case"multiple":N=y;default:l.hasOwnProperty(f)||Ce(e,n,f,null,l,y)}for(u in l)if(f=l[u],y=a[u],l.hasOwnProperty(u)&&(f!=null||y!=null))switch(u){case"value":R=f;break;case"defaultValue":m=f;break;case"multiple":p=f;default:f!==y&&Ce(e,n,u,f,l,y)}n=m,a=p,l=N,R!=null?us(e,!!a,R,!1):!!l!=!!a&&(n!=null?us(e,!!a,n,!0):us(e,!!a,a?[]:"",!1));return;case"textarea":N=R=null;for(m in a)if(u=a[m],a.hasOwnProperty(m)&&u!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Ce(e,n,m,null,l,u)}for(p in l)if(u=l[p],f=a[p],l.hasOwnProperty(p)&&(u!=null||f!=null))switch(p){case"value":R=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ce(e,n,p,u,l,f)}Td(e,R,N);return;case"option":for(var Z in a)if(R=a[Z],a.hasOwnProperty(Z)&&R!=null&&!l.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:Ce(e,n,Z,null,l,R)}for(y in l)if(R=l[y],N=a[y],l.hasOwnProperty(y)&&R!==N&&(R!=null||N!=null))switch(y){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Ce(e,n,y,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)R=a[F],a.hasOwnProperty(F)&&R!=null&&!l.hasOwnProperty(F)&&Ce(e,n,F,null,l,R);for(w in l)if(R=l[w],N=a[w],l.hasOwnProperty(w)&&R!==N&&(R!=null||N!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,n));break;default:Ce(e,n,w,R,l,N)}return;default:if(mu(n)){for(var Ae in a)R=a[Ae],a.hasOwnProperty(Ae)&&R!==void 0&&!l.hasOwnProperty(Ae)&&tf(e,n,Ae,void 0,l,R);for(D in l)R=l[D],N=a[D],!l.hasOwnProperty(D)||R===N||R===void 0&&N===void 0||tf(e,n,D,R,l,N);return}}for(var b in a)R=a[b],a.hasOwnProperty(b)&&R!=null&&!l.hasOwnProperty(b)&&Ce(e,n,b,null,l,R);for(M in l)R=l[M],N=a[M],!l.hasOwnProperty(M)||R===N||R==null&&N==null||Ce(e,n,M,R,l,N)}var nf=null,sf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function af(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rf=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===rf?!1:(rf=e,!0):(rf=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(e){return Rg.resolve(null).then(e).catch(yS)}:wg;function yS(e){setTimeout(function(){throw e})}function ii(e){return e==="head"}function Ng(e,n){var a=n,l=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<l&&8>l){a=l;var p=e.ownerDocument;if(a&1&&$a(p.documentElement),a&2&&$a(p.body),a&4)for(a=p.head,$a(a),p=a.firstChild;p;){var m=p.nextSibling,y=p.nodeName;p[pa]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=m}}if(u===0){e.removeChild(f),lr(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:l=a.charCodeAt(0)-48;else l=0;a=f}while(a);lr(n)}function lf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lf(a),fu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ES(e,n,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[pa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function SS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Wt(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function TS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Wt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var uf=null;function Og(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Dg(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function $a(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fu(e)}var Gt=new Map,Ig=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=z.d;z.d={f:bS,r:CS,D:AS,C:wS,L:RS,m:NS,X:DS,S:OS,M:IS};function bS(){var e=Nn.f(),n=Bl();return e||n}function CS(e){var n=as(e);n!==null&&n.tag===5&&n.type==="form"?Zp(n):Nn.r(e)}var Ps=typeof document>"u"?null:document;function Mg(e,n,a){var l=Ps;if(l&&typeof n=="string"&&n){var u=zt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ig.has(u)||(Ig.add(u),e={rel:e,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),ot(n,"link",e),et(n),l.head.appendChild(n)))}}function AS(e){Nn.D(e),Mg("dns-prefetch",e,null)}function wS(e,n){Nn.C(e,n),Mg("preconnect",e,n)}function RS(e,n,a){Nn.L(e,n,a);var l=Ps;if(l&&e&&n){var u='link[rel="preload"][as="'+zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+zt(a.imageSizes)+'"]')):u+='[href="'+zt(e)+'"]';var f=u;switch(n){case"style":f=Bs(e);break;case"script":f=qs(e)}Gt.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Gt.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(er(f))||n==="script"&&l.querySelector(tr(f))||(n=l.createElement("link"),ot(n,"link",e),et(n),l.head.appendChild(n)))}}function NS(e,n){Nn.m(e,n);var a=Ps;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qs(e)}if(!Gt.has(f)&&(e=v({rel:"modulepreload",href:e},n),Gt.set(f,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(tr(f)))return}l=a.createElement("link"),ot(l,"link",e),et(l),a.head.appendChild(l)}}}function OS(e,n,a){Nn.S(e,n,a);var l=Ps;if(l&&e){var u=rs(l).hoistableStyles,f=Bs(e);n=n||"default";var p=u.get(f);if(!p){var m={loading:0,preload:null};if(p=l.querySelector(er(f)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Gt.get(f))&&cf(e,a);var y=p=l.createElement("link");et(y),ot(y,"link",e),y._p=new Promise(function(w,D){y.onload=w,y.onerror=D}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Wl(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:m},u.set(f,p)}}}function DS(e,n){Nn.X(e,n);var a=Ps;if(a&&e){var l=rs(a).hoistableScripts,u=qs(e),f=l.get(u);f||(f=a.querySelector(tr(u)),f||(e=v({src:e,async:!0},n),(n=Gt.get(u))&&ff(e,n),f=a.createElement("script"),et(f),ot(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function IS(e,n){Nn.M(e,n);var a=Ps;if(a&&e){var l=rs(a).hoistableScripts,u=qs(e),f=l.get(u);f||(f=a.querySelector(tr(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=Gt.get(u))&&ff(e,n),f=a.createElement("script"),et(f),ot(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function kg(e,n,a,l){var u=(u=J.current)?Xl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Bs(a.href),a=rs(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Bs(a.href);var f=rs(u).hoistableStyles,p=f.get(e);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,p),(f=u.querySelector(er(e)))&&!f._p&&(p.instance=f,p.state.loading=5),Gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gt.set(e,a),f||MS(u,e,a,p.state))),n&&l===null)throw Error(r(528,""));return p}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qs(a),a=rs(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Bs(e){return'href="'+zt(e)+'"'}function er(e){return'link[rel="stylesheet"]['+e+"]"}function xg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function MS(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ot(n,"link",a),et(n),e.head.appendChild(n))}function qs(e){return'[src="'+zt(e)+'"]'}function tr(e){return"script[async]"+e}function Ug(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(l)return n.instance=l,et(l),l;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),et(l),ot(l,"style",u),Wl(l,a.precedence,e),n.instance=l;case"stylesheet":u=Bs(a.href);var f=e.querySelector(er(u));if(f)return n.state.loading|=4,n.instance=f,et(f),f;l=xg(a),(u=Gt.get(u))&&cf(l,u),f=(e.ownerDocument||e).createElement("link"),et(f);var p=f;return p._p=new Promise(function(m,y){p.onload=m,p.onerror=y}),ot(f,"link",l),n.state.loading|=4,Wl(f,a.precedence,e),n.instance=f;case"script":return f=qs(a.src),(u=e.querySelector(tr(f)))?(n.instance=u,et(u),u):(l=a,(u=Gt.get(f))&&(l=v({},a),ff(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),et(u),ot(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Wl(l,a.precedence,e));return n.instance}function Wl(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,p=0;p<l.length;p++){var m=l[p];if(m.dataset.precedence===n)f=m;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function Lg(e,n,a){if(Zl===null){var l=new Map,u=Zl=new Map;u.set(a,l)}else u=Zl,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[pa]||f[ht]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=e+p;var m=l.get(p);m?m.push(f):l.set(p,[f])}}return l}function zg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function kS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nr=null;function xS(){}function US(e,n,a){if(nr===null)throw Error(r(475));var l=nr;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Bs(a.href),f=e.querySelector(er(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Jl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,et(f);return}f=e.ownerDocument||e,a=xg(a),(u=Gt.get(u))&&cf(a,u),f=f.createElement("link"),et(f);var p=f;p._p=new Promise(function(m,y){p.onload=m,p.onerror=y}),ot(f,"link",a),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Jl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function LS(){if(nr===null)throw Error(r(475));var e=nr;return e.stylesheets&&e.count===0&&hf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&hf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)hf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function hf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(zS,e),$l=null,Jl.call(e))}function zS(e,n){if(!(n.state.loading&4)){var a=$l.get(e);if(a)var l=a.get(null);else{a=new Map,$l.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var p=u[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}u=n.instance,p=u.getAttribute("data-precedence"),f=a.get(p)||l,f===l&&a.set(null,u),a.set(p,u),this.count++,l=Jl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ir={$$typeof:Te,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function HS(e,n,a,l,u,f,p,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.hiddenUpdates=lu(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Pg(e,n,a,l,u,f,p,m,y,w,D,M){return e=new HS(e,n,a,p,m,y,w,M),n=1,f===!0&&(n|=24),f=Dt(3,null,null,n),e.current=f,f.stateNode=e,n=Fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},Wu(f),e}function Bg(e){return e?(e=vs,e):vs}function qg(e,n,a,l,u,f){u=Bg(u),l.context===null?l.context=u:l.pendingContext=u,l=Gn(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Yn(e,l,n),a!==null&&(Ut(a,e,n),ka(a,e,n))}function Vg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function df(e,n){Vg(e,n),(e=e.alternate)&&Vg(e,n)}function jg(e){if(e.tag===13){var n=ms(e,67108864);n!==null&&Ut(n,e,67108864),df(e,67108864)}}var eo=!0;function PS(e,n,a,l){var u=O.T;O.T=null;var f=z.p;try{z.p=2,pf(e,n,a,l)}finally{z.p=f,O.T=u}}function BS(e,n,a,l){var u=O.T;O.T=null;var f=z.p;try{z.p=8,pf(e,n,a,l)}finally{z.p=f,O.T=u}}function pf(e,n,a,l){if(eo){var u=_f(l);if(u===null)ef(e,n,l,to,a),Yg(e,l);else if(VS(u,e,n,a,l))l.stopPropagation();else if(Yg(e,l),n&4&&-1<qS.indexOf(e)){for(;u!==null;){var f=as(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=wi(f.pendingLanes);if(p!==0){var m=f;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var y=1<<31-Nt(p);m.entanglements[1]|=y,p&=~y}cn(f),(Ee&6)===0&&(Hl=an()+500,Wa(0))}}break;case 13:m=ms(f,2),m!==null&&Ut(m,f,2),Bl(),df(f,2)}if(f=_f(l),f===null&&ef(e,n,l,to,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else ef(e,n,l,null,a)}}function _f(e){return e=yu(e),gf(e)}var to=null;function gf(e){if(to=null,e=ss(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function Gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wE()){case sd:return 2;case ad:return 8;case Qr:case RE:return 32;case rd:return 268435456;default:return 32}default:return 32}}var mf=!1,si=null,ai=null,ri=null,sr=new Map,ar=new Map,li=[],qS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,n){switch(e){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":sr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(n.pointerId)}}function rr(e,n,a,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=as(n),n!==null&&jg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function VS(e,n,a,l,u){switch(n){case"focusin":return si=rr(si,e,n,a,l,u),!0;case"dragenter":return ai=rr(ai,e,n,a,l,u),!0;case"mouseover":return ri=rr(ri,e,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return sr.set(f,rr(sr.get(f)||null,e,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,ar.set(f,rr(ar.get(f)||null,e,n,a,l,u)),!0}return!1}function Fg(e){var n=ss(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,UE(e.priority,function(){if(a.tag===13){var l=xt();l=ou(l);var u=ms(a,l);u!==null&&Ut(u,a,l),df(a,l)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=_f(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);vu=l,a.target.dispatchEvent(l),vu=null}else return n=as(a),n!==null&&jg(n),e.blockedOn=a,!1;n.shift()}return!0}function Qg(e,n,a){no(e)&&a.delete(n)}function jS(){mf=!1,si!==null&&no(si)&&(si=null),ai!==null&&no(ai)&&(ai=null),ri!==null&&no(ri)&&(ri=null),sr.forEach(Qg),ar.forEach(Qg)}function io(e,n){e.blockedOn===n&&(e.blockedOn=null,mf||(mf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,jS)))}var so=null;function Kg(e){so!==e&&(so=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){so===e&&(so=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(gf(l||a)===null)continue;break}var f=as(a);f!==null&&(e.splice(n,3),n-=3,_c(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function lr(e){function n(y){return io(y,e)}si!==null&&io(si,e),ai!==null&&io(ai,e),ri!==null&&io(ri,e),sr.forEach(n),ar.forEach(n);for(var a=0;a<li.length;a++){var l=li[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<li.length&&(a=li[0],a.blockedOn===null);)Fg(a),a.blockedOn===null&&li.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],p=u[Et]||null;if(typeof f=="function")p||Kg(a);else if(p){var m=null;if(f&&f.hasAttribute("formAction")){if(u=f,p=f[Et]||null)m=p.formAction;else if(gf(u)!==null)continue}else m=p.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),Kg(a)}}}function vf(e){this._internalRoot=e}ao.prototype.render=vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=xt();qg(a,l,e,n,null,null)},ao.prototype.unmount=vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qg(e.current,2,null,e,null,null),Bl(),n[is]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var n=fd();e={blockedOn:null,target:e,priority:n};for(var a=0;a<li.length&&n!==0&&n<li[a].priority;a++);li.splice(a,0,e),a===0&&Fg(e)}};var Xg=t.version;if(Xg!=="19.1.0")throw Error(r(527,Xg,"19.1.0"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=_(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var GS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{fa=ro.inject(GS),Rt=ro}catch{}}return ur.createRoot=function(e,n){if(!o(e))throw Error(r(299));var a=!1,l="",u=f_,f=h_,p=d_,m=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks)),n=Pg(e,1,!1,null,null,a,l,u,f,p,m,null),e[is]=n.current,$c(e),new vf(n)},ur.hydrateRoot=function(e,n,a){if(!o(e))throw Error(r(299));var l=!1,u="",f=f_,p=h_,m=d_,y=null,w=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(y=a.unstable_transitionCallbacks),a.formState!==void 0&&(w=a.formState)),n=Pg(e,1,!0,n,a??null,l,u,f,p,m,y,w),n.context=Bg(null),a=n.current,l=xt(),l=ou(l),u=Gn(l),u.callback=null,Yn(a,u,l),a=l,n.current.lanes=a,da(n,a),cn(n),e[is]=n.current,$c(e),new ao(n)},ur.version="19.1.0",ur}var am;function tT(){if(am)return Sf.exports;am=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Sf.exports=eT(),Sf.exports}var nT=tT();const iT=gv(nT);function sT({onLogin:s,onRegister:t,error:i,setError:r}){const[o,c]=Oe.useState(""),[h,d]=Oe.useState(""),_=async()=>{if(!o||!h){r("Please enter both email and password.");return}r(null),await t(o,h)},g=async()=>{if(!o||!h){r("Please enter both email and password.");return}r(null),await s(o,h)};return fe.jsx("div",{id:"authSection",children:fe.jsxs("div",{className:"auth-horizontal",children:[fe.jsx("input",{type:"email",id:"email",placeholder:"Email",value:o,onChange:v=>c(v.target.value),onTouchStart:v=>v.target.focus()}),fe.jsx("input",{type:"password",id:"password",placeholder:"Password",value:h,onChange:v=>d(v.target.value),onTouchStart:v=>v.target.focus()}),fe.jsx("button",{id:"registerBtn",className:"register-btn",onClick:_,disabled:!o||!h,children:"Register"}),fe.jsx("button",{id:"loginBtn",className:"login-btn",onClick:g,disabled:!o||!h,children:"Go"})]})})}function aT({tokens:s,buttonState:t,buttonNames:i,isButtonDataLoaded:r,onToggle:o,onUpdateName:c,onDelete:h,onLogout:d}){const[_,g]=Oe.useState(!1),[v,E]=Oe.useState(!1),[C,x]=Oe.useState(!1),[U,G]=Oe.useState(!1),[W,je]=Oe.useState(!1),xe=Oe.useRef([]);Oe.useEffect(()=>{xe.current=xe.current.slice(0,s.length)},[s]),Oe.useEffect(()=>{const P=()=>{je(window.innerWidth<=600)};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]),Oe.useEffect(()=>{const P=W?U:C;xe.current.forEach(me=>{if(me)if(P)me.classList.add("is-vibrating");else{const De=()=>{me.classList.remove("is-vibrating"),me.removeEventListener("animationiteration",De)};me.addEventListener("animationiteration",De)}})},[C,U,W]);const Te=P=>{o(P)},Qe=()=>{W?(G(P=>!P),x(P=>!P)):x(P=>!P),g(P=>!P)};return fe.jsxs("div",{id:"controlSection",className:"control-panel",children:[fe.jsx("div",{className:"token-header",children:fe.jsx("button",{className:`plus-button ${_?"menu-visible":""}`,onClick:Qe,children:"+"})}),fe.jsx("h2",{className:"my-doors-title",children:"My Doors"}),fe.jsx("div",{className:"toggle-buttons",children:s.map((P,me)=>t[P]!=="open"&&t[P]!=="closed"?null:fe.jsx("div",{className:"toggle-btn-wrapper",children:fe.jsx("button",{ref:De=>xe.current[me]=De,id:`toggle-${P}`,className:`toggle-btn ${t[P]==="open"?"open":"closed"}`,style:{animationDelay:`${me*.1}s`},onClick:()=>{if(W?U:C){const De=(i==null?void 0:i[P])||`Button ${me+1}`,Ge=prompt(`Enter new name for "${De}"`,De);Ge!=null&&c(P,Ge.trim())}else Te(P)},children:fe.jsx("span",{className:"toggle-btn-text",children:(i==null?void 0:i[P])||`Button ${me+1}`})})},P))}),fe.jsxs("div",{className:`token-list-container ${_?"visible":""}`,style:{position:"fixed",bottom:0,left:0,right:0,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",gap:"2px",zIndex:1e3,justifyContent:"center",padding:"10px 0"},children:[fe.jsx("button",{className:"plus-menu-btn small-btn",onClick:()=>E(P=>!P),children:fe.jsx("img",{src:"icons/token.png",alt:"Tokens",className:"button-icon"})}),v&&fe.jsx("ul",{className:"token-list",children:s.map(P=>fe.jsx("li",{children:P},P))}),fe.jsx("button",{className:"plus-menu-btn settings-button small-btn",onClick:()=>alert("Settings clicked!"),children:fe.jsx("img",{src:"icons/gear.png",alt:"Settings",className:"settings-icon"})}),fe.jsx("button",{className:"plus-menu-btn small-btn",onClick:()=>alert("Friends clicked!"),children:fe.jsx("img",{src:"icons/friends.png",alt:"Friends",className:"button-icon"})}),fe.jsx("button",{className:"plus-menu-btn small-btn",onClick:d,children:fe.jsx("img",{src:"icons/tl.webp",alt:"Logout",className:"button-icon"})})]})]})}const rT=()=>{};var rm={};/**
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
 */const mv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const L=function(s,t){if(!s)throw sa(t)},sa=function(s){return new Error("Firebase Database ("+mv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const vv=function(s){const t=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},lT=function(s){const t=[];let i=0,r=0;for(;i<s.length;){const o=s[i++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[i++];t[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[i++],h=s[i++],d=s[i++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|d&63)-65536;t[r++]=String.fromCharCode(55296+(_>>10)),t[r++]=String.fromCharCode(56320+(_&1023))}else{const c=s[i++],h=s[i++];t[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const c=s[o],h=o+1<s.length,d=h?s[o+1]:0,_=o+2<s.length,g=_?s[o+2]:0,v=c>>2,E=(c&3)<<4|d>>4;let C=(d&15)<<2|g>>6,x=g&63;_||(x=64,h||(C=64)),r.push(i[v],i[E],i[C],i[x])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(vv(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):lT(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const c=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const g=o<s.length?i[s.charAt(o)]:64;++o;const E=o<s.length?i[s.charAt(o)]:64;if(++o,c==null||d==null||g==null||E==null)throw new oT;const C=c<<2|d>>4;if(r.push(C),g!==64){const x=d<<4&240|g>>2;if(r.push(x),E!==64){const U=g<<6&192|E;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class oT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yv=function(s){const t=vv(s);return ch.encodeByteArray(t,!0)},vo=function(s){return yv(s).replace(/\./g,"")},yo=function(s){try{return ch.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function uT(s){return Ev(void 0,s)}function Ev(s,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!cT(i)||(s[i]=Ev(s[i],t[i]));return s}function cT(s){return s!=="__proto__"}/**
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
 */function fT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hT=()=>fT().__FIREBASE_DEFAULTS__,dT=()=>{if(typeof process>"u"||typeof rm>"u")return;const s=rm.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},pT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&yo(s[1]);return t&&JSON.parse(t)},fh=()=>{try{return rT()||hT()||dT()||pT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Sv=s=>{var t,i;return(i=(t=fh())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},_T=s=>{const t=Sv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),r]:[t.substring(0,i),r]},Tv=()=>{var s;return(s=fh())===null||s===void 0?void 0:s.config},bv=s=>{var t;return(t=fh())===null||t===void 0?void 0:t[`_${s}`]};/**
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
 */class xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,r))}}}/**
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
 */function gT(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=t||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},s);return[vo(JSON.stringify(i)),vo(JSON.stringify(h)),""].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function mT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vT(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Cv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yT(){const s=vt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function ET(){return mv.NODE_ADMIN===!0}function ST(){try{return typeof indexedDB=="object"}catch{return!1}}function TT(){return new Promise((s,t)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
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
 */const bT="FirebaseError";class bi extends Error{constructor(t,i,r){super(i),this.code=t,this.customData=r,this.name=bT,Object.setPrototypeOf(this,bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(t,i,r){this.service=t,this.serviceName=i,this.errors=r}create(t,...i){const r=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?CT(c,r):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new bi(o,d,r)}}function CT(s,t){return s.replace(AT,(i,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const AT=/\{\$([^}]+)}/g;/**
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
 */function Tr(s){return JSON.parse(s)}function $e(s){return JSON.stringify(s)}/**
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
 */const Av=function(s){let t={},i={},r={},o="";try{const c=s.split(".");t=Tr(yo(c[0])||""),i=Tr(yo(c[1])||""),o=c[2],r=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:r,signature:o}},wT=function(s){const t=Av(s),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},RT=function(s){const t=Av(s).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function dn(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Zs(s,t){if(Object.prototype.hasOwnProperty.call(s,t))return s[t]}function Pf(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function Eo(s,t,i){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=t.call(i,s[o],o,s));return r}function Qi(s,t){if(s===t)return!0;const i=Object.keys(s),r=Object.keys(t);for(const o of i){if(!r.includes(o))return!1;const c=s[o],h=t[o];if(lm(c)&&lm(h)){if(!Qi(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function lm(s){return s!==null&&typeof s=="object"}/**
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
 */class NT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const r=this.W_;if(typeof t=="string")for(let E=0;E<16;E++)r[E]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let E=0;E<16;E++)r[E]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let E=16;E<80;E++){const C=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(C<<1|C>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],d=this.chain_[3],_=this.chain_[4],g,v;for(let E=0;E<80;E++){E<40?E<20?(g=d^c&(h^d),v=1518500249):(g=c^h^d,v=1859775393):E<60?(g=c&h|d&(c|h),v=2400959708):(g=c^h^d,v=3395469782);const C=(o<<5|o>>>27)+g+_+v+r[E]&4294967295;_=d,d=h,h=(c<<30|c>>>2)&4294967295,c=o,o=C}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const r=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[r]=this.chain_[o]>>c&255,++r;return t}}function OT(s,t){const i=new DT(s,t);return i.subscribe.bind(i)}class DT{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,r){let o;if(t===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");IT(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:r},o.next===void 0&&(o.next=Af),o.error===void 0&&(o.error=Af),o.complete===void 0&&(o.complete=Af);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IT(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function Af(){}function qo(s,t){return`${s} failed: ${t} argument `}/**
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
 */const MT=function(s){const t=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const c=o-55296;r++,L(r<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(r)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Vo=function(s){let t=0;for(let i=0;i<s.length;i++){const r=s.charCodeAt(i);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,i++):t+=3}return t};/**
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
 */function yt(s){return s&&s._delegate?s._delegate:s}class Ki{constructor(t,i,r){this.name=t,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gi="[DEFAULT]";/**
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
 */class kT{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const r=new xr;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(UT(t))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(t=Gi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gi){return this.instances.has(t)}getOptions(t=Gi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(c);r===d&&h.resolve(o)}return o}onInit(t,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xT(t),options:i}),this.instances.set(t,r),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gi){return this.component?this.component.multipleInstances?t:Gi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xT(s){return s===Gi?void 0:s}function UT(s){return s.instantiationMode==="EAGER"}/**
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
 */class LT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new kT(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(we||(we={}));const zT={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},HT=we.INFO,PT={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},BT=(s,t,...i)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),o=PT[t];if(o)console[o](`[${r}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dh{constructor(t){this.name=t,this._logLevel=HT,this._logHandler=BT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in we))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...t),this._logHandler(this,we.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...t),this._logHandler(this,we.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,we.INFO,...t),this._logHandler(this,we.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,we.WARN,...t),this._logHandler(this,we.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...t),this._logHandler(this,we.ERROR,...t)}}const qT=(s,t)=>t.some(i=>s instanceof i);let om,um;function VT(){return om||(om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jT(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,Bf=new WeakMap,Rv=new WeakMap,wf=new WeakMap,ph=new WeakMap;function GT(s){const t=new Promise((i,r)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",h)},c=()=>{i(_i(s.result)),o()},h=()=>{r(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&wv.set(i,s)}).catch(()=>{}),ph.set(t,s),t}function YT(s){if(Bf.has(s))return;const t=new Promise((i,r)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",h),s.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",h),s.addEventListener("abort",h)});Bf.set(s,t)}let qf={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return Bf.get(s);if(t==="objectStoreNames")return s.objectStoreNames||Rv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return _i(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function FT(s){qf=s(qf)}function QT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const r=s.call(Rf(this),t,...i);return Rv.set(r,t.sort?t.sort():[t]),_i(r)}:jT().includes(s)?function(...t){return s.apply(Rf(this),t),_i(wv.get(this))}:function(...t){return _i(s.apply(Rf(this),t))}}function KT(s){return typeof s=="function"?QT(s):(s instanceof IDBTransaction&&YT(s),qT(s,VT())?new Proxy(s,qf):s)}function _i(s){if(s instanceof IDBRequest)return GT(s);if(wf.has(s))return wf.get(s);const t=KT(s);return t!==s&&(wf.set(s,t),ph.set(t,s)),t}const Rf=s=>ph.get(s);function XT(s,t,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(s,t),d=_i(h);return r&&h.addEventListener("upgradeneeded",_=>{r(_i(h.result),_.oldVersion,_.newVersion,_i(h.transaction),_)}),i&&h.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),d.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const WT=["get","getKey","getAll","getAllKeys","count"],ZT=["put","add","delete","clear"],Nf=new Map;function cm(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Nf.get(t))return Nf.get(t);const i=t.replace(/FromIndex$/,""),r=t!==i,o=ZT.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||WT.includes(i)))return;const c=async function(h,...d){const _=this.transaction(h,o?"readwrite":"readonly");let g=_.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[i](...d),o&&_.done]))[0]};return Nf.set(t,c),c}FT(s=>({...s,get:(t,i,r)=>cm(t,i)||s.get(t,i,r),has:(t,i)=>!!cm(t,i)||s.has(t,i)}));/**
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
 */class JT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if($T(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function $T(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vf="@firebase/app",fm="0.11.4";/**
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
 */const xn=new dh("@firebase/app"),eb="@firebase/app-compat",tb="@firebase/analytics-compat",nb="@firebase/analytics",ib="@firebase/app-check-compat",sb="@firebase/app-check",ab="@firebase/auth",rb="@firebase/auth-compat",lb="@firebase/database",ob="@firebase/data-connect",ub="@firebase/database-compat",cb="@firebase/functions",fb="@firebase/functions-compat",hb="@firebase/installations",db="@firebase/installations-compat",pb="@firebase/messaging",_b="@firebase/messaging-compat",gb="@firebase/performance",mb="@firebase/performance-compat",vb="@firebase/remote-config",yb="@firebase/remote-config-compat",Eb="@firebase/storage",Sb="@firebase/storage-compat",Tb="@firebase/firestore",bb="@firebase/vertexai",Cb="@firebase/firestore-compat",Ab="firebase",wb="11.6.0";/**
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
 */const jf="[DEFAULT]",Rb={[Vf]:"fire-core",[eb]:"fire-core-compat",[nb]:"fire-analytics",[tb]:"fire-analytics-compat",[sb]:"fire-app-check",[ib]:"fire-app-check-compat",[ab]:"fire-auth",[rb]:"fire-auth-compat",[lb]:"fire-rtdb",[ob]:"fire-data-connect",[ub]:"fire-rtdb-compat",[cb]:"fire-fn",[fb]:"fire-fn-compat",[hb]:"fire-iid",[db]:"fire-iid-compat",[pb]:"fire-fcm",[_b]:"fire-fcm-compat",[gb]:"fire-perf",[mb]:"fire-perf-compat",[vb]:"fire-rc",[yb]:"fire-rc-compat",[Eb]:"fire-gcs",[Sb]:"fire-gcs-compat",[Tb]:"fire-fst",[Cb]:"fire-fst-compat",[bb]:"fire-vertex","fire-js":"fire-js",[Ab]:"fire-js-all"};/**
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
 */const So=new Map,Nb=new Map,Gf=new Map;function hm(s,t){try{s.container.addComponent(t)}catch(i){xn.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Js(s){const t=s.name;if(Gf.has(t))return xn.debug(`There were multiple attempts to register component ${t}.`),!1;Gf.set(t,s);for(const i of So.values())hm(i,s);for(const i of Nb.values())hm(i,s);return!0}function _h(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function Yt(s){return s==null?!1:s.settings!==void 0}/**
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
 */const Ob={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new Ur("app","Firebase",Ob);/**
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
 */class Db{constructor(t,i,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const ra=wb;function Nv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const r=Object.assign({name:jf,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(i||(i=Tv()),!i)throw gi.create("no-options");const c=So.get(o);if(c){if(Qi(i,c.options)&&Qi(r,c.config))return c;throw gi.create("duplicate-app",{appName:o})}const h=new LT(o);for(const _ of Gf.values())h.addComponent(_);const d=new Db(i,r,h);return So.set(o,d),d}function Ov(s=jf){const t=So.get(s);if(!t&&s===jf&&Tv())return Nv();if(!t)throw gi.create("no-app",{appName:s});return t}function mi(s,t,i){var r;let o=(r=Rb[s])!==null&&r!==void 0?r:s;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const d=[`Unable to register library "${o}" with version "${t}":`];c&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&d.push("and"),h&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xn.warn(d.join(" "));return}Js(new Ki(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Ib="firebase-heartbeat-database",Mb=1,br="firebase-heartbeat-store";let Of=null;function Dv(){return Of||(Of=XT(Ib,Mb,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(br)}catch(i){console.warn(i)}}}}).catch(s=>{throw gi.create("idb-open",{originalErrorMessage:s.message})})),Of}async function kb(s){try{const i=(await Dv()).transaction(br),r=await i.objectStore(br).get(Iv(s));return await i.done,r}catch(t){if(t instanceof bi)xn.warn(t.message);else{const i=gi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xn.warn(i.message)}}}async function dm(s,t){try{const r=(await Dv()).transaction(br,"readwrite");await r.objectStore(br).put(t,Iv(s)),await r.done}catch(i){if(i instanceof bi)xn.warn(i.message);else{const r=gi.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});xn.warn(r.message)}}}function Iv(s){return`${s.name}!${s.options.appId}`}/**
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
 */const xb=1024,Ub=30;class Lb{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Hb(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=pm();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>Ub){const h=Pb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=pm(),{heartbeatsToSend:r,unsentEntries:o}=zb(this._heartbeatsCache.heartbeats),c=vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return xn.warn(i),""}}}function pm(){return new Date().toISOString().substring(0,10)}function zb(s,t=xb){const i=[];let r=s.slice();for(const o of s){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),_m(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),_m(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class Hb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ST()?TT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await kb(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return dm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return dm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function _m(s){return vo(JSON.stringify({version:2,heartbeats:s})).length}function Pb(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let r=1;r<s.length;r++)s[r].date<i&&(i=s[r].date,t=r);return t}/**
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
 */function Bb(s){Js(new Ki("platform-logger",t=>new JT(t),"PRIVATE")),Js(new Ki("heartbeat",t=>new Lb(t),"PRIVATE")),mi(Vf,fm,s),mi(Vf,fm,"esm2017"),mi("fire-js","")}Bb("");function gh(s,t){var i={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(i[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(i[r[o]]=s[r[o]]);return i}function Mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qb=Mv,kv=new Ur("auth","Firebase",Mv());/**
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
 */const To=new dh("@firebase/auth");function Vb(s,...t){To.logLevel<=we.WARN&&To.warn(`Auth (${ra}): ${s}`,...t)}function ho(s,...t){To.logLevel<=we.ERROR&&To.error(`Auth (${ra}): ${s}`,...t)}/**
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
 */function sn(s,...t){throw mh(s,...t)}function fn(s,...t){return mh(s,...t)}function xv(s,t,i){const r=Object.assign(Object.assign({},qb()),{[t]:i});return new Ur("auth","Firebase",r).create(t,{appName:s.name})}function Mn(s){return xv(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mh(s,...t){if(typeof s!="string"){const i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(i,...r)}return kv.create(s,...t)}function K(s,t,...i){if(!s)throw mh(t,...i)}function On(s){const t="INTERNAL ASSERTION FAILED: "+s;throw ho(t),new Error(t)}function Un(s,t){s||On(t)}/**
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
 */function Yf(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function jb(){return gm()==="http:"||gm()==="https:"}function gm(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function Gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jb()||vT()||"connection"in navigator)?navigator.onLine:!0}function Yb(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Lr{constructor(t,i){this.shortDelay=t,this.longDelay=i,Un(i>t,"Short delay should be less than long delay!"),this.isMobile=hh()||Cv()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vh(s,t){Un(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class Uv{static initialize(t,i,r){this.fetchImpl=t,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Qb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kb=new Lr(3e4,6e4);function Ci(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function Ai(s,t,i,r,o={}){return Lv(s,o,async()=>{let c={},h={};r&&(t==="GET"?h=r:c={body:JSON.stringify(r)});const d=aa(Object.assign({key:s.config.apiKey},h)).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const g=Object.assign({method:t,headers:_},c);return mT()||(g.referrerPolicy="no-referrer"),Uv.fetch()(await zv(s,s.config.apiHost,i,d),g)})}async function Lv(s,t,i){s._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fb),t);try{const o=new Wb(s),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw lo(s,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const d=c.ok?h.errorMessage:h.error.message,[_,g]=d.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(s,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw lo(s,"email-already-in-use",h);if(_==="USER_DISABLED")throw lo(s,"user-disabled",h);const v=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw xv(s,v,g);sn(s,v)}}catch(o){if(o instanceof bi)throw o;sn(s,"network-request-failed",{message:String(o)})}}async function zr(s,t,i,r,o={}){const c=await Ai(s,t,i,r,o);return"mfaPendingCredential"in c&&sn(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function zv(s,t,i,r){const o=`${t}${i}?${r}`,c=s,h=c.config.emulator?vh(s.config,o):`${s.config.apiScheme}://${o}`;return Qb.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Xb(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),Kb.get())})}}function lo(s,t,i){const r={appName:s.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=fn(s,t,r);return o.customData._tokenResponse=i,o}function mm(s){return s!==void 0&&s.enterprise!==void 0}class Zb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return Xb(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Jb(s,t){return Ai(s,"GET","/v2/recaptchaConfig",Ci(s,t))}/**
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
 */async function $b(s,t){return Ai(s,"POST","/v1/accounts:delete",t)}async function bo(s,t){return Ai(s,"POST","/v1/accounts:lookup",t)}/**
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
 */function gr(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function eC(s,t=!1){const i=yt(s),r=await i.getIdToken(t),o=yh(r);K(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:gr(Df(o.auth_time)),issuedAtTime:gr(Df(o.iat)),expirationTime:gr(Df(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Df(s){return Number(s)*1e3}function yh(s){const[t,i,r]=s.split(".");if(t===void 0||i===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const o=yo(i);return o?JSON.parse(o):(ho("Failed to decode base64 JWT payload"),null)}catch(o){return ho("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function vm(s){const t=yh(s);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Cr(s,t,i=!1){if(i)return t;try{return await t}catch(r){throw r instanceof bi&&tC(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function tC({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class nC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ff{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Co(s){var t;const i=s.auth,r=await s.getIdToken(),o=await Cr(s,bo(i,{idToken:r}));K(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];s._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?Hv(c.providerUserInfo):[],d=sC(s.providerData,h),_=s.isAnonymous,g=!(s.email&&c.passwordHash)&&!(d!=null&&d.length),v=_?g:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:d,metadata:new Ff(c.createdAt,c.lastLoginAt),isAnonymous:v};Object.assign(s,E)}async function iC(s){const t=yt(s);await Co(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function sC(s,t){return[...s.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function Hv(s){return s.map(t=>{var{providerId:i}=t,r=gh(t,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aC(s,t){const i=await Lv(s,{},async()=>{const r=aa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,h=await zv(s,o,"/v1/token",`key=${c}`),d=await s._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Uv.fetch()(h,{method:"POST",headers:d,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function rC(s,t){return Ai(s,"POST","/v2/accounts:revokeToken",Ci(s,t))}/**
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
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){K(t.length!==0,"internal-error");const i=vm(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await aC(t,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(t,i,r){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,h=new Fs;return r&&(K(typeof r=="string","internal-error",{appName:t}),h.refreshToken=r),o&&(K(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(K(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function ui(s,t){K(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class en{constructor(t){var{uid:i,auth:r,stsTokenManager:o}=t,c=gh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ff(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await Cr(this,this.stsTokenManager.getToken(this.auth,t));return K(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return eC(this,t)}reload(){return iC(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new en(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),i&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Mn(this.auth));const t=await this.getIdToken();return await Cr(this,$b(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var r,o,c,h,d,_,g,v;const E=(r=i.displayName)!==null&&r!==void 0?r:void 0,C=(o=i.email)!==null&&o!==void 0?o:void 0,x=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,U=(h=i.photoURL)!==null&&h!==void 0?h:void 0,G=(d=i.tenantId)!==null&&d!==void 0?d:void 0,W=(_=i._redirectEventId)!==null&&_!==void 0?_:void 0,je=(g=i.createdAt)!==null&&g!==void 0?g:void 0,xe=(v=i.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Te,emailVerified:Qe,isAnonymous:P,providerData:me,stsTokenManager:De}=i;K(Te&&De,t,"internal-error");const Ge=Fs.fromJSON(this.name,De);K(typeof Te=="string",t,"internal-error"),ui(E,t.name),ui(C,t.name),K(typeof Qe=="boolean",t,"internal-error"),K(typeof P=="boolean",t,"internal-error"),ui(x,t.name),ui(U,t.name),ui(G,t.name),ui(W,t.name),ui(je,t.name),ui(xe,t.name);const ft=new en({uid:Te,auth:t,email:C,emailVerified:Qe,displayName:E,isAnonymous:P,photoURL:U,phoneNumber:x,tenantId:G,stsTokenManager:Ge,createdAt:je,lastLoginAt:xe});return me&&Array.isArray(me)&&(ft.providerData=me.map(te=>Object.assign({},te))),W&&(ft._redirectEventId=W),ft}static async _fromIdTokenResponse(t,i,r=!1){const o=new Fs;o.updateFromServerResponse(i);const c=new en({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await Co(c),c}static async _fromGetAccountInfoResponse(t,i,r){const o=i.users[0];K(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Hv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),d=new Fs;d.updateFromIdToken(r);const _=new en({uid:o.localId,auth:t,stsTokenManager:d,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ff(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,g),_}}/**
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
 */const ym=new Map;function Dn(s){Un(s instanceof Function,"Expected a class definition");let t=ym.get(s);return t?(Un(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,ym.set(s,t),t)}/**
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
 */class Pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Pv.type="NONE";const Em=Pv;/**
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
 */function po(s,t,i){return`firebase:${s}:${t}:${i}`}class Qs{constructor(t,i,r){this.persistence=t,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=po(this.userKey,o.apiKey,c),this.fullPersistenceKey=po("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await bo(this.auth,{idToken:t}).catch(()=>{});return i?en._fromGetAccountInfoResponse(this.auth,i,t):null}return en._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,r="authUser"){if(!i.length)return new Qs(Dn(Em),t,r);const o=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=o[0]||Dn(Em);const h=po(r,t.config.apiKey,t.name);let d=null;for(const g of i)try{const v=await g._get(h);if(v){let E;if(typeof v=="string"){const C=await bo(t,{idToken:v}).catch(()=>{});if(!C)break;E=await en._fromGetAccountInfoResponse(t,C,v)}else E=en._fromJSON(t,v);g!==c&&(d=E),c=g;break}}catch{}const _=o.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new Qs(c,t,r):(c=_[0],d&&await c._set(h,d.toJSON()),await Promise.all(i.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new Qs(c,t,r))}}/**
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
 */function Sm(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Yv(t))return"Blackberry";if(Fv(t))return"Webos";if(qv(t))return"Safari";if((t.includes("chrome/")||Vv(t))&&!t.includes("edge/"))return"Chrome";if(Gv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bv(s=vt()){return/firefox\//i.test(s)}function qv(s=vt()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Vv(s=vt()){return/crios\//i.test(s)}function jv(s=vt()){return/iemobile/i.test(s)}function Gv(s=vt()){return/android/i.test(s)}function Yv(s=vt()){return/blackberry/i.test(s)}function Fv(s=vt()){return/webos/i.test(s)}function Eh(s=vt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function lC(s=vt()){var t;return Eh(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function oC(){return yT()&&document.documentMode===10}function Qv(s=vt()){return Eh(s)||Gv(s)||Fv(s)||Yv(s)||/windows phone/i.test(s)||jv(s)}/**
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
 */function Kv(s,t=[]){let i;switch(s){case"Browser":i=Sm(vt());break;case"Worker":i=`${Sm(vt())}-${s}`;break;default:i=s}const r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${ra}/${r}`}/**
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
 */class uC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const r=c=>new Promise((h,d)=>{try{const _=t(c);h(_)}catch(_){d(_)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const r of this.queue)await r(t),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cC(s,t={}){return Ai(s,"GET","/v2/passwordPolicy",Ci(s,t))}/**
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
 */const fC=6;class hC{constructor(t){var i,r,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:fC,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,r,o,c,h,d;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,_),this.validatePasswordCharacterOptions(t,_),_.isValid&&(_.isValid=(i=_.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(r=_.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(d=_.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),_}validatePasswordLengthOptions(t,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=t.length>=r),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class dC{constructor(t,i,r,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tm(this),this.idTokenSubscription=new Tm(this),this.beforeStateQueue=new uC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Dn(i)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await bo(this,{idToken:t}),r=await en._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Yt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,d=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(t);(!h||h===d)&&(_!=null&&_.user)&&(o=_.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Co(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Yb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Yt(this.app))return Promise.reject(Mn(this));const i=t?yt(t):null;return i&&K(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Yt(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await cC(this),i=new hC(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ur("auth","Firebase",t())}onAuthStateChanged(t,i,r){return this.registerStateListener(this.authStateSubscription,t,i,r)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,r){return this.registerStateListener(this.idTokenSubscription,t,i,r)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await rC(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const r=await this.getOrInitRedirectPersistenceManager(i);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Dn(t)||this._popupRedirectResolver;K(i,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[Dn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(d,this,"internal-error"),d.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,r,o);return()=>{h=!0,_()}}else{const _=t.addObserver(i);return()=>{h=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&Vb(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function es(s){return yt(s)}class Tm{constructor(t){this.auth=t,this.observer=null,this.addObserver=OT(i=>this.observer=i)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pC(s){jo=s}function Xv(s){return jo.loadJS(s)}function _C(){return jo.recaptchaEnterpriseScript}function gC(){return jo.gapiScript}function mC(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class vC{constructor(){this.enterprise=new yC}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class yC{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const EC="recaptcha-enterprise",Wv="NO_RECAPTCHA";class SC{constructor(t){this.type=EC,this.auth=es(t)}async verify(t="verify",i=!1){async function r(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,d)=>{Jb(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new Zb(_);return c.tenantId==null?c._agentRecaptchaConfig=g:c._tenantRecaptchaConfigs[c.tenantId]=g,h(g.siteKey)}}).catch(_=>{d(_)})})}function o(c,h,d){const _=window.grecaptcha;mm(_)?_.enterprise.ready(()=>{_.enterprise.execute(c,{action:t}).then(g=>{h(g)}).catch(()=>{h(Wv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vC().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{r(this.auth).then(d=>{if(!i&&mm(window.grecaptcha))o(d,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=_C();_.length!==0&&(_+=d),Xv(_).then(()=>{o(d,c,h)}).catch(g=>{h(g)})}}).catch(d=>{h(d)})})}}async function bm(s,t,i,r=!1,o=!1){const c=new SC(s);let h;if(o)h=Wv;else try{h=await c.verify(i)}catch{h=await c.verify(i,!0)}const d=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const _=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const _=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Qf(s,t,i,r,o){var c;if(!((c=s._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await bm(s,t,i,i==="getOobCode");return r(s,h)}else return r(s,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await bm(s,t,i,i==="getOobCode");return r(s,d)}else return Promise.reject(h)})}/**
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
 */function TC(s,t){const i=_h(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Qi(c,t??{}))return o;sn(o,"already-initialized")}return i.initialize({options:t})}function bC(s,t){const i=(t==null?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Dn);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function CC(s,t,i){const r=es(s);K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,c=Zv(t),{host:h,port:d}=AC(t),_=d===null?"":`:${d}`,g={url:`${c}//${h}${_}/`},v=Object.freeze({host:h,port:d,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Qi(g,r.config.emulator)&&Qi(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,wC()}function Zv(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function AC(s){const t=Zv(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:Cm(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:Cm(h)}}}function Cm(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function wC(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class Sh{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return On("not implemented")}_getIdTokenResponse(t){return On("not implemented")}_linkToIdToken(t,i){return On("not implemented")}_getReauthenticationResolver(t){return On("not implemented")}}async function RC(s,t){return Ai(s,"POST","/v1/accounts:signUp",t)}/**
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
 */async function NC(s,t){return zr(s,"POST","/v1/accounts:signInWithPassword",Ci(s,t))}/**
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
 */async function OC(s,t){return zr(s,"POST","/v1/accounts:signInWithEmailLink",Ci(s,t))}async function DC(s,t){return zr(s,"POST","/v1/accounts:signInWithEmailLink",Ci(s,t))}/**
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
 */class Ar extends Sh{constructor(t,i,r,o=null){super("password",r),this._email=t,this._password=i,this._tenantId=o}static _fromEmailAndPassword(t,i){return new Ar(t,i,"password")}static _fromEmailAndCode(t,i,r=null){return new Ar(t,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qf(t,i,"signInWithPassword",NC);case"emailLink":return OC(t,{email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const r={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qf(t,r,"signUpPassword",RC);case"emailLink":return DC(t,{idToken:i,email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ks(s,t){return zr(s,"POST","/v1/accounts:signInWithIdp",Ci(s,t))}/**
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
 */const IC="http://localhost";class Xi extends Sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):sn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o}=i,c=gh(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new Xi(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Ks(t,i)}_linkToIdToken(t,i){const r=this.buildRequest();return r.idToken=i,Ks(t,r)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ks(t,i)}buildRequest(){const t={requestUri:IC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=aa(i)}return t}}/**
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
 */function MC(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kC(s){const t=pr(_r(s)).link,i=t?pr(_r(t)).deep_link_id:null,r=pr(_r(s)).deep_link_id;return(r?pr(_r(r)).link:null)||r||i||t||s}class Th{constructor(t){var i,r,o,c,h,d;const _=pr(_r(t)),g=(i=_.apiKey)!==null&&i!==void 0?i:null,v=(r=_.oobCode)!==null&&r!==void 0?r:null,E=MC((o=_.mode)!==null&&o!==void 0?o:null);K(g&&v&&E,"argument-error"),this.apiKey=g,this.operation=E,this.code=v,this.continueUrl=(c=_.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=_.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=_.tenantId)!==null&&d!==void 0?d:null}static parseLink(t){const i=kC(t);try{return new Th(i)}catch{return null}}}/**
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
 */class la{constructor(){this.providerId=la.PROVIDER_ID}static credential(t,i){return Ar._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const r=Th.parseLink(i);return K(r,"argument-error"),Ar._fromEmailAndCode(t,r.code,r.tenantId)}}la.PROVIDER_ID="password";la.EMAIL_PASSWORD_SIGN_IN_METHOD="password";la.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hr extends Jv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ci extends Hr{constructor(){super("facebook.com")}static credential(t){return Xi._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ci.credentialFromTaggedObject(t)}static credentialFromError(t){return ci.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ci.credential(t.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
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
 */class fi extends Hr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Xi._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:r}=t;if(!i&&!r)return null;try{return fi.credential(i,r)}catch{return null}}}fi.GOOGLE_SIGN_IN_METHOD="google.com";fi.PROVIDER_ID="google.com";/**
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
 */class hi extends Hr{constructor(){super("github.com")}static credential(t){return Xi._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hi.credential(t.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
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
 */class di extends Hr{constructor(){super("twitter.com")}static credential(t,i){return Xi._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=t;if(!i||!r)return null;try{return di.credential(i,r)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
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
 */async function xC(s,t){return zr(s,"POST","/v1/accounts:signUp",Ci(s,t))}/**
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
 */class Wi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,r,o=!1){const c=await en._fromIdTokenResponse(t,r,o),h=Am(r);return new Wi({user:c,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(t,i,r){await t._updateTokensIfNecessary(r,!0);const o=Am(r);return new Wi({user:t,providerId:o,_tokenResponse:r,operationType:i})}}function Am(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Ao extends bi{constructor(t,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Ao.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,i,r,o){return new Ao(t,i,r,o)}}function $v(s,t,i,r){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Ao._fromErrorAndOperation(s,c,t,r):c})}async function UC(s,t,i=!1){const r=await Cr(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return Wi._forOperation(s,"link",r)}/**
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
 */async function LC(s,t,i=!1){const{auth:r}=s;if(Yt(r.app))return Promise.reject(Mn(r));const o="reauthenticate";try{const c=await Cr(s,$v(r,o,t,s),i);K(c.idToken,r,"internal-error");const h=yh(c.idToken);K(h,r,"internal-error");const{sub:d}=h;return K(s.uid===d,r,"user-mismatch"),Wi._forOperation(s,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),c}}/**
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
 */async function ey(s,t,i=!1){if(Yt(s.app))return Promise.reject(Mn(s));const r="signIn",o=await $v(s,r,t),c=await Wi._fromIdTokenResponse(s,r,o);return i||await s._updateCurrentUser(c.user),c}async function zC(s,t){return ey(es(s),t)}/**
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
 */async function ty(s){const t=es(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function HC(s,t,i){if(Yt(s.app))return Promise.reject(Mn(s));const r=es(s),h=await Qf(r,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xC).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&ty(s),_}),d=await Wi._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(d.user),d}function PC(s,t,i){return Yt(s.app)?Promise.reject(Mn(s)):zC(yt(s),la.credential(t,i)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ty(s),r})}function BC(s,t,i,r){return yt(s).onIdTokenChanged(t,i,r)}function qC(s,t,i){return yt(s).beforeAuthStateChanged(t,i)}function VC(s,t,i,r){return yt(s).onAuthStateChanged(t,i,r)}function jC(s){return yt(s).signOut()}const wo="__sak";/**
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
 */class ny{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(wo,"1"),this.storage.removeItem(wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const GC=1e3,YC=10;class iy extends ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&t(i,o,r)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,d,_)=>{this.notifyListeners(h,_)});return}const r=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);oC()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,YC):o()}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:r}),!0)})},GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}iy.type="LOCAL";const FC=iy;/**
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
 */class sy extends ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}sy.type="SESSION";const ay=sy;/**
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
 */function QC(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Go{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const r=new Go(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:r,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(h).map(async g=>g(i.origin,c)),_=await QC(d);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
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
 */function bh(s="",t=10){let i="";for(let r=0;r<t;r++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class KC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((d,_)=>{const g=bh("",20);o.port1.start();const v=setTimeout(()=>{_(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(E){const C=E;if(C.data.eventId===g)switch(C.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),d(C.data.response);break;default:clearTimeout(v),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:g,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function hn(){return window}function XC(s){hn().location.href=s}/**
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
 */function ry(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function WC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZC(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function JC(){return ry()?self:null}/**
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
 */const ly="firebaseLocalStorageDb",$C=1,Ro="firebaseLocalStorage",oy="fbase_key";class Pr{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Yo(s,t){return s.transaction([Ro],t?"readwrite":"readonly").objectStore(Ro)}function eA(){const s=indexedDB.deleteDatabase(ly);return new Pr(s).toPromise()}function Kf(){const s=indexedDB.open(ly,$C);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Ro,{keyPath:oy})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Ro)?t(r):(r.close(),await eA(),t(await Kf()))})})}async function wm(s,t,i){const r=Yo(s,!0).put({[oy]:t,value:i});return new Pr(r).toPromise()}async function tA(s,t){const i=Yo(s,!1).get(t),r=await new Pr(i).toPromise();return r===void 0?null:r.value}function Rm(s,t){const i=Yo(s,!0).delete(t);return new Pr(i).toPromise()}const nA=800,iA=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(i++>iA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(JC()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await WC(),!this.activeServiceWorker)return;this.sender=new KC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ZC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kf();return await wm(t,wo,"1"),await Rm(t,wo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>wm(r,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(r=>tA(r,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Rm(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Yo(o,!1).getAll();return new Pr(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const sA=uy;new Lr(3e4,6e4);/**
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
 */function aA(s,t){return t?Dn(t):(K(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Ch extends Sh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ks(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ks(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ks(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function rA(s){return ey(s.auth,new Ch(s),s.bypassAuthState)}function lA(s){const{auth:t,user:i}=s;return K(i,t,"internal-error"),LC(i,new Ch(s),s.bypassAuthState)}async function oA(s){const{auth:t,user:i}=s;return K(i,t,"internal-error"),UC(i,new Ch(s),s.bypassAuthState)}/**
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
 */class cy{constructor(t,i,r,o,c=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:h,type:d}=t;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(_))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rA;case"linkViaPopup":case"linkViaRedirect":return oA;case"reauthViaPopup":case"reauthViaRedirect":return lA;default:sn(this.auth,"internal-error")}}resolve(t){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uA=new Lr(2e3,1e4);class Gs extends cy{constructor(t,i,r,o,c){super(t,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const t=bh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,uA.get())};t()}}Gs.currentPopupAction=null;/**
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
 */const cA="pendingRedirect",_o=new Map;class fA extends cy{constructor(t,i,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let t=_o.get(this.auth._key());if(!t){try{const r=await hA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(i){t=()=>Promise.reject(i)}_o.set(this.auth._key(),t)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hA(s,t){const i=_A(t),r=pA(s);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function dA(s,t){_o.set(s._key(),t)}function pA(s){return Dn(s._redirectPersistence)}function _A(s){return po(cA,s.config.apiKey,s.name)}async function gA(s,t,i=!1){if(Yt(s.app))return Promise.reject(Mn(s));const r=es(s),o=aA(r,t),h=await new fA(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,t)),h}/**
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
 */const mA=10*60*1e3;class vA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(i=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!yA(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var r;if(t.error&&!fy(t)){const o=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(fn(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const r=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nm(t))}saveEventToCache(t){this.cachedEventUids.add(Nm(t)),this.lastProcessedEventTime=Date.now()}}function Nm(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function fy({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function yA(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fy(s);default:return!1}}/**
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
 */async function EA(s,t={}){return Ai(s,"GET","/v1/projects",t)}/**
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
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TA=/^https?/;async function bA(s){if(s.config.emulator)return;const{authorizedDomains:t}=await EA(s);for(const i of t)try{if(CA(i))return}catch{}sn(s,"unauthorized-domain")}function CA(s){const t=Yf(),{protocol:i,hostname:r}=new URL(t);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!TA.test(i))return!1;if(SA.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const AA=new Lr(3e4,6e4);function Om(){const s=hn().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function wA(s){return new Promise((t,i)=>{var r,o,c;function h(){Om(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Om(),i(fn(s,"network-request-failed"))},timeout:AA.get()})}if(!((o=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=hn().gapi)===null||c===void 0)&&c.load)h();else{const d=mC("iframefcb");return hn()[d]=()=>{gapi.load?h():i(fn(s,"network-request-failed"))},Xv(`${gC()}?onload=${d}`).catch(_=>i(_))}}).catch(t=>{throw go=null,t})}let go=null;function RA(s){return go=go||wA(s),go}/**
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
 */const NA=new Lr(5e3,15e3),OA="__/auth/iframe",DA="emulator/auth/iframe",IA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kA(s){const t=s.config;K(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?vh(t,DA):`https://${s.config.authDomain}/${OA}`,r={apiKey:t.apiKey,appName:s.name,v:ra},o=MA.get(s.config.apiHost);o&&(r.eid=o);const c=s._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${aa(r).slice(1)}`}async function xA(s){const t=await RA(s),i=hn().gapi;return K(i,s,"internal-error"),t.open({where:document.body,url:kA(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IA,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=fn(s,"network-request-failed"),d=hn().setTimeout(()=>{c(h)},NA.get());function _(){hn().clearTimeout(d),o(r)}r.ping(_).then(_,()=>{c(h)})}))}/**
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
 */const UA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LA=500,zA=600,HA="_blank",PA="http://localhost";class Dm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BA(s,t,i,r=LA,o=zA){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const _=Object.assign(Object.assign({},UA),{width:r.toString(),height:o.toString(),top:c,left:h}),g=vt().toLowerCase();i&&(d=Vv(g)?HA:i),Bv(g)&&(t=t||PA,_.scrollbars="yes");const v=Object.entries(_).reduce((C,[x,U])=>`${C}${x}=${U},`,"");if(lC(g)&&d!=="_self")return qA(t||"",d),new Dm(null);const E=window.open(t||"",d,v);K(E,s,"popup-blocked");try{E.focus()}catch{}return new Dm(E)}function qA(s,t){const i=document.createElement("a");i.href=s,i.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const VA="__/auth/handler",jA="emulator/auth/handler",GA=encodeURIComponent("fac");async function Im(s,t,i,r,o,c){K(s.config.authDomain,s,"auth-domain-config-required"),K(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:r,v:ra,eventId:o};if(t instanceof Jv){t.setDefaultLanguage(s.languageCode),h.providerId=t.providerId||"",Pf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,E]of Object.entries({}))h[v]=E}if(t instanceof Hr){const v=t.getScopes().filter(E=>E!=="");v.length>0&&(h.scopes=v.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const _=await s._getAppCheckToken(),g=_?`#${GA}=${encodeURIComponent(_)}`:"";return`${YA(s)}?${aa(d).slice(1)}${g}`}function YA({config:s}){return s.emulator?vh(s,jA):`https://${s.authDomain}/${VA}`}/**
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
 */const If="webStorageSupport";class FA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ay,this._completeRedirectFn=gA,this._overrideRedirectResult=dA}async _openPopup(t,i,r,o){var c;Un((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Im(t,i,r,Yf(),o);return BA(t,h,bh())}async _openRedirect(t,i,r,o){await this._originValidation(t);const c=await Im(t,i,r,Yf(),o);return XC(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Un(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(t);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(t){const i=await xA(t),r=new vA(t);return i.register("authEvent",o=>(K(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=i,r}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(If,{type:If},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[If];h!==void 0&&i(!!h),sn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=bA(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Qv()||qv()||Eh()}}const QA=FA;var Mm="@firebase/auth",km="1.10.0";/**
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
 */class KA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XA(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WA(s){Js(new Ki("auth",(t,{options:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=r.options;K(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(s)},g=new dC(r,o,c,_);return bC(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,r)=>{t.getProvider("auth-internal").initialize()})),Js(new Ki("auth-internal",t=>{const i=es(t.getProvider("auth").getImmediate());return(r=>new KA(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(Mm,km,XA(s)),mi(Mm,km,"esm2017")}/**
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
 */const ZA=5*60,JA=bv("authIdTokenMaxAge")||ZA;let xm=null;const $A=s=>async t=>{const i=t&&await t.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>JA)return;const o=i==null?void 0:i.token;xm!==o&&(xm=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ew(s=Ov()){const t=_h(s,"auth");if(t.isInitialized())return t.getImmediate();const i=TC(s,{popupRedirectResolver:QA,persistence:[sA,FC,ay]}),r=bv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=$A(c.toString());qC(i,h,()=>h(i.currentUser)),BC(i,d=>h(d))}}const o=Sv("auth");return o&&CC(i,`http://${o}`),i}function tw(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}pC({loadJS(s){return new Promise((t,i)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=t,r.onerror=o=>{const c=fn("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",tw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WA("Browser");var Um={};const Lm="@firebase/database",zm="1.0.14";/**
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
 */let hy="";function nw(s){hy=s}/**
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
 */class iw{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),$e(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Tr(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class sw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return dn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const dy=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const t=window[s];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new iw(t)}}catch{}return new sw},Fi=dy("localStorage"),aw=dy("sessionStorage");/**
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
 */const Xs=new dh("@firebase/database"),rw=function(){let s=1;return function(){return s++}}(),py=function(s){const t=MT(s),i=new NT;i.update(t);const r=i.digest();return ch.encodeByteArray(r)},Br=function(...s){let t="";for(let i=0;i<s.length;i++){const r=s[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Br.apply(null,r):typeof r=="object"?t+=$e(r):t+=r,t+=" "}return t};let mr=null,Hm=!0;const lw=function(s,t){L(!0,"Can't turn on custom loggers persistently."),Xs.logLevel=we.VERBOSE,mr=Xs.log.bind(Xs)},ut=function(...s){if(Hm===!0&&(Hm=!1,mr===null&&aw.get("logging_enabled")===!0&&lw()),mr){const t=Br.apply(null,s);mr(t)}},qr=function(s){return function(...t){ut(s,...t)}},Xf=function(...s){const t="FIREBASE INTERNAL ERROR: "+Br(...s);Xs.error(t)},Ln=function(...s){const t=`FIREBASE FATAL ERROR: ${Br(...s)}`;throw Xs.error(t),new Error(t)},mt=function(...s){const t="FIREBASE WARNING: "+Br(...s);Xs.warn(t)},ow=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ah=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},uw=function(s){if(document.readyState==="complete")s();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},$s="[MIN_NAME]",Zi="[MAX_NAME]",ts=function(s,t){if(s===t)return 0;if(s===$s||t===Zi)return-1;if(t===$s||s===Zi)return 1;{const i=Pm(s),r=Pm(t);return i!==null?r!==null?i-r===0?s.length-t.length:i-r:-1:r!==null?1:s<t?-1:1}},cw=function(s,t){return s===t?0:s<t?-1:1},cr=function(s,t){if(t&&s in t)return t[s];throw new Error("Missing required key ("+s+") in object: "+$e(t))},wh=function(s){if(typeof s!="object"||s===null)return $e(s);const t=[];for(const r in s)t.push(r);t.sort();let i="{";for(let r=0;r<t.length;r++)r!==0&&(i+=","),i+=$e(t[r]),i+=":",i+=wh(s[t[r]]);return i+="}",i},_y=function(s,t){const i=s.length;if(i<=t)return[s];const r=[];for(let o=0;o<i;o+=t)o+t>i?r.push(s.substring(o,i)):r.push(s.substring(o,o+t));return r};function ct(s,t){for(const i in s)s.hasOwnProperty(i)&&t(i,s[i])}const gy=function(s){L(!Ah(s),"Invalid JSON number");const t=11,i=52,r=(1<<t-1)-1;let o,c,h,d,_;s===0?(c=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),r),c=d+r,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(c=0,h=Math.round(s/Math.pow(2,1-r-i))));const g=[];for(_=i;_;_-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(_=t;_;_-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(o?1:0),g.reverse();const v=g.join("");let E="";for(_=0;_<64;_+=8){let C=parseInt(v.substr(_,8),2).toString(16);C.length===1&&(C="0"+C),E=E+C}return E.toLowerCase()},fw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dw(s,t){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const r=new Error(s+" at "+t._path.toString()+": "+i);return r.code=s.toUpperCase(),r}const pw=new RegExp("^-?(0*)\\d{1,10}$"),_w=-2147483648,gw=2147483647,Pm=function(s){if(pw.test(s)){const t=Number(s);if(t>=_w&&t<=gw)return t}return null},oa=function(s){try{s()}catch(t){setTimeout(()=>{const i=t.stack||"";throw mt("Exception was thrown by user callback.",i),t},Math.floor(0))}},mw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vr=function(s,t){const i=setTimeout(s,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
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
 */class vw{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Yt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yw{constructor(t,i,r){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(t)}}class mo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}mo.OWNER="owner";/**
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
 */const Rh="5",my="v",vy="s",yy="r",Ey="f",Sy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ty="ls",by="p",Wf="ac",Cy="websocket",Ay="long_polling";/**
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
 */class wy{constructor(t,i,r,o,c=!1,h="",d=!1,_=!1,g=null){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=_,this.emulatorOptions=g,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Fi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function Ew(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Ry(s,t,i){L(typeof t=="string","typeof type must == string"),L(typeof i=="object","typeof params must == object");let r;if(t===Cy)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(t===Ay)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);Ew(s)&&(i.ns=s.namespace);const o=[];return ct(i,(c,h)=>{o.push(c+"="+h)}),r+o.join("&")}/**
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
 */class Sw{constructor(){this.counters_={}}incrementCounter(t,i=1){dn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return uT(this.counters_)}}/**
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
 */const Mf={},kf={};function Nh(s){const t=s.toString();return Mf[t]||(Mf[t]=new Sw),Mf[t]}function Tw(s,t){const i=s.toString();return kf[i]||(kf[i]=t()),kf[i]}/**
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
 */class bw{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&oa(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Bm="start",Cw="close",Aw="pLPCommand",ww="pRTLPCB",Ny="id",Oy="pw",Dy="ser",Rw="cb",Nw="seg",Ow="ts",Dw="d",Iw="dframe",Iy=1870,My=30,Mw=Iy-My,kw=25e3,xw=3e4;class Ys{constructor(t,i,r,o,c,h,d){this.connId=t,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qr(t),this.stats_=Nh(i),this.urlFn=_=>(this.appCheckToken&&(_[Wf]=this.appCheckToken),Ry(i,Ay,_))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new bw(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xw)),uw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Oh((...c)=>{const[h,d,_,g,v]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Bm)this.id=d,this.password=_;else if(h===Cw)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,d]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Bm]="t",r[Dy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Rw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[my]=Rh,this.transportSessionId&&(r[vy]=this.transportSessionId),this.lastSessionId&&(r[Ty]=this.lastSessionId),this.applicationId&&(r[by]=this.applicationId),this.appCheckToken&&(r[Wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sy.test(location.hostname)&&(r[yy]=Ey);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ys.forceAllow_=!0}static forceDisallow(){Ys.forceDisallow_=!0}static isAvailable(){return Ys.forceAllow_?!0:!Ys.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fw()&&!hw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=$e(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=yv(i),o=_y(r,Mw);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[Iw]="t",r[Ny]=t,r[Oy]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=$e(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Oh{constructor(t,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rw(),window[Aw+this.uniqueCallbackIdentifier]=t,window[ww+this.uniqueCallbackIdentifier]=i,this.myIFrame=Oh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){ut("frame writing exception"),d.stack&&ut(d.stack),ut(d)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||ut("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Ny]=this.myID,t[Oy]=this.myPW,t[Dy]=this.currentSerial;let i=this.urlFn(t),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+My+r.length<=Iy;){const h=this.pendingSegs.shift();r=r+"&"+Nw+o+"="+h.seg+"&"+Ow+o+"="+h.ts+"&"+Dw+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,r){this.pendingSegs.push({seg:t,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(kw)),c=()=>{clearTimeout(o),r()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{ut("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Uw=16384,Lw=45e3;let No=null;typeof MozWebSocket<"u"?No=MozWebSocket:typeof WebSocket<"u"&&(No=WebSocket);class $t{constructor(t,i,r,o,c,h,d){this.connId=t,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qr(this.connId),this.stats_=Nh(i),this.connURL=$t.connectionURL_(i,h,d,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,r,o,c){const h={};return h[my]=Rh,typeof location<"u"&&location.hostname&&Sy.test(location.hostname)&&(h[yy]=Ey),i&&(h[vy]=i),r&&(h[Ty]=r),o&&(h[Wf]=o),c&&(h[by]=c),Ry(t,Cy,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fi.set("previous_websocket_failure",!0);try{let r;ET(),this.mySock=new No(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&No!==null&&!$t.forceDisallow_}static previouslyFailed(){return Fi.isInMemoryStorage||Fi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=Tr(i);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(L(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const i=$e(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=_y(i,Uw);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lw))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class wr{static get ALL_TRANSPORTS(){return[Ys,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=$t&&$t.isAvailable();let r=i&&!$t.previouslyFailed();if(t.webSocketOnly&&(i||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$t];else{const o=this.transports_=[];for(const c of wr.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);wr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wr.globalTransportInitialized_=!1;/**
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
 */const zw=6e4,Hw=5e3,Pw=10*1024,Bw=100*1024,xf="t",qm="d",qw="s",Vm="r",Vw="e",jm="o",Gm="a",Ym="n",Fm="p",jw="h";class Gw{constructor(t,i,r,o,c,h,d,_,g,v){this.id=t,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=_,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qr("c:"+this.id+":"),this.transportManager_=new wr(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=vr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(xf in t){const i=t[xf];i===Gm?this.upgradeIfSecondaryHealthy_():i===Vm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===jm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=cr("t",t),r=cr("d",t);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=cr("t",t),r=cr("d",t);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=cr(xf,t);if(qm in t){const r=t[qm];if(i===jw){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===qw?this.onConnectionShutdown_(r):i===Vm?this.onReset_(r):i===Vw?Xf("Server Error: "+r):i===jm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,r=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Rh!==r&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),vr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zw))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fm,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ky{put(t,i,r,o){}merge(t,i,r,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,r){}onDisconnectMerge(t,i,r){}onDisconnectCancel(t,i){}reportStats(t){}}/**
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
 */class xy{constructor(t){this.allowedEvents_=t,this.listeners_={},L(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(t,i,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:r});const o=this.getInitialEvent(t);o&&i.apply(r,o)}off(t,i,r){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!r||r===o[c].context)){o.splice(c,1);return}}validateEventType_(t){L(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
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
 */class Oo extends xy{static getInstance(){return new Oo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return L(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Qm=32,Km=768;class Re{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function pe(){return new Re("")}function se(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Ei(s){return s.pieces_.length-s.pieceNum_}function ke(s){let t=s.pieceNum_;return t<s.pieces_.length&&t++,new Re(s.pieces_,t)}function Dh(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function Yw(s){let t="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(s.pieces_[i])));return t||"/"}function Rr(s,t=0){return s.pieces_.slice(s.pieceNum_+t)}function Uy(s){if(s.pieceNum_>=s.pieces_.length)return null;const t=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)t.push(s.pieces_[i]);return new Re(t,0)}function qe(s,t){const i=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)i.push(s.pieces_[r]);if(t instanceof Re)for(let r=t.pieceNum_;r<t.pieces_.length;r++)i.push(t.pieces_[r]);else{const r=t.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new Re(i,0)}function oe(s){return s.pieceNum_>=s.pieces_.length}function gt(s,t){const i=se(s),r=se(t);if(i===null)return t;if(i===r)return gt(ke(s),ke(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+s+")")}function Fw(s,t){const i=Rr(s,0),r=Rr(t,0);for(let o=0;o<i.length&&o<r.length;o++){const c=ts(i[o],r[o]);if(c!==0)return c}return i.length===r.length?0:i.length<r.length?-1:1}function Ih(s,t){if(Ei(s)!==Ei(t))return!1;for(let i=s.pieceNum_,r=t.pieceNum_;i<=s.pieces_.length;i++,r++)if(s.pieces_[i]!==t.pieces_[r])return!1;return!0}function Ft(s,t){let i=s.pieceNum_,r=t.pieceNum_;if(Ei(s)>Ei(t))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==t.pieces_[r])return!1;++i,++r}return!0}class Qw{constructor(t,i){this.errorPrefix_=i,this.parts_=Rr(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Vo(this.parts_[r]);Ly(this)}}function Kw(s,t){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(t),s.byteLength_+=Vo(t),Ly(s)}function Xw(s){const t=s.parts_.pop();s.byteLength_-=Vo(t),s.parts_.length>0&&(s.byteLength_-=1)}function Ly(s){if(s.byteLength_>Km)throw new Error(s.errorPrefix_+"has a key path longer than "+Km+" bytes ("+s.byteLength_+").");if(s.parts_.length>Qm)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qm+") or object contains a cycle "+Yi(s))}function Yi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class Mh extends xy{static getInstance(){return new Mh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(t){return L(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const fr=1e3,Ww=60*5*1e3,Xm=30*1e3,Zw=1.3,Jw=3e4,$w="server_kill",Wm=3;class kn extends ky{constructor(t,i,r,o,c,h,d,_){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=_,this.id=kn.nextPersistentConnectionId_++,this.log_=qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fr,this.maxReconnectDelay_=Ww,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Oo.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,r){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_($e(c)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),r&&(this.requestCBHash_[o]=r)}get(t){this.initConnection_();const i=new xr,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,r,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),L(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:t,tag:r};this.listens.get(h).set(c,d),this.connected_&&this.sendListen_(d)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(t){const i=t.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const c={p:r},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,d=>{const _=d.d,g=d.s;kn.warnOnListenWarnings_(_,i),(this.listens.get(r)&&this.listens.get(r).get(o))===t&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(r,o),t.onComplete&&t.onComplete(g,_))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&dn(t,"w")){const r=Zs(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||RT(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xm)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=wT(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,r=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(t,i){const r=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),L(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,t._queryObject,i)}sendUnlisten_(t,i,r,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=r,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:r})}onDisconnectMerge(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:r})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,r,o){const c={p:i,d:r};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,r,o){this.putInternal("p",t,i,r,o)}merge(t,i,r,o){this.putInternal("m",t,i,r,o)}putInternal(t,i,r,o,c){this.initConnection_();const h={p:i,d:r};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,r,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const c=r.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$e(t));const i=t.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Xf("Unrecognized action received from server: "+$e(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fr,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=fr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Jw&&(this.reconnectDelay_=fr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+kn.nextConnectionId_++,c=this.lastSessionId;let h=!1,d=null;const _=function(){d?d.close():(h=!0,r())},g=function(E){L(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:_,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,C]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);h?ut("getToken() completed but was canceled"):(ut("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=C&&C.token,d=new Gw(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,r,x=>{mt(x+" ("+this.repoInfo_.toString()+")"),this.interrupt($w)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&mt(E),_())}}}interrupt(t){ut("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ut("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Pf(this.interruptReasons_)&&(this.reconnectDelay_=fr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let r;i?r=i.map(c=>wh(c)).join("$"):r="default";const o=this.removeListen_(t,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const r=new Re(t).toString();let o;if(this.listens.has(r)){const c=this.listens.get(r);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(t,i){ut("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wm&&(this.reconnectDelay_=Xm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){ut("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+hy.replace(/\./g,"-")]=1,hh()?t["framework.cordova"]=1:Cv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Oo.getInstance().currentlyOnline();return Pf(this.interruptReasons_)&&t}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
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
 */class ae{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ae(t,i)}}/**
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
 */class Fo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const r=new ae($s,t),o=new ae($s,i);return this.compare(r,o)!==0}minPost(){return ae.MIN}}/**
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
 */let oo;class zy extends Fo{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(t){oo=t}compare(t,i){return ts(t.name,i.name)}isDefinedOn(t){throw sa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Zi,oo)}makePost(t,i){return L(typeof t=="string","KeyIndex indexValue must always be a string."),new ae(t,oo)}toString(){return".key"}}const Ws=new zy;/**
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
 */class uo{constructor(t,i,r,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?r(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class at{constructor(t,i,r,o,c){this.key=t,this.value=i,this.color=r??at.RED,this.left=o??At.EMPTY_NODE,this.right=c??At.EMPTY_NODE}copy(t,i,r,o,c){return new at(t??this.key,i??this.value,r??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,r){let o=this;const c=r(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,r),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let r,o;if(r=this,i(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(t,r.key)===0){if(r.right.isEmpty())return At.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}at.RED=!0;at.BLACK=!1;class eR{copy(t,i,r,o,c){return this}insert(t,i,r){return new at(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(t,i=At.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new At(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,at.BLACK,null,null))}remove(t){return new At(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,at.BLACK,null,null))}get(t){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(t,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(t){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(t,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new uo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new uo(this.root_,null,this.comparator_,!0,t)}}At.EMPTY_NODE=new eR;/**
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
 */function tR(s,t){return ts(s.name,t.name)}function kh(s,t){return ts(s,t)}/**
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
 */let Zf;function nR(s){Zf=s}const Hy=function(s){return typeof s=="number"?"number:"+gy(s):"string:"+s},Py=function(s){if(s.isLeafNode()){const t=s.val();L(typeof t=="string"||typeof t=="number"||typeof t=="object"&&dn(t,".sv"),"Priority must be a string or number.")}else L(s===Zf||s.isEmpty(),"priority of unexpected type.");L(s===Zf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Zm;class st{static set __childrenNodeConstructor(t){Zm=t}static get __childrenNodeConstructor(){return Zm}constructor(t,i=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Py(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new st(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return oe(t)?this:se(t)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const r=se(t);return r===null?i:i.isEmpty()&&r!==".priority"?this:(L(r!==".priority"||Ei(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Hy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=gy(this.value_):t+=this.value_,this.lazyHash_=py(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===st.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof st.__childrenNodeConstructor?-1:(L(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,r=typeof this.value_,o=st.VALUE_TYPE_ORDER.indexOf(i),c=st.VALUE_TYPE_ORDER.indexOf(r);return L(o>=0,"Unknown leaf type: "+i),L(c>=0,"Unknown leaf type: "+r),o===c?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let By,qy;function iR(s){By=s}function sR(s){qy=s}class aR extends Fo{compare(t,i){const r=t.node.getPriority(),o=i.node.getPriority(),c=r.compareTo(o);return c===0?ts(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Zi,new st("[PRIORITY-POST]",qy))}makePost(t,i){const r=By(t);return new ae(i,new st("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ve=new aR;/**
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
 */const rR=Math.log(2);class lR{constructor(t){const i=c=>parseInt(Math.log(c)/rR,10),r=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=r(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Do=function(s,t,i,r){s.sort(t);const o=function(_,g){const v=g-_;let E,C;if(v===0)return null;if(v===1)return E=s[_],C=i?i(E):E,new at(C,E.node,at.BLACK,null,null);{const x=parseInt(v/2,10)+_,U=o(_,x),G=o(x+1,g);return E=s[x],C=i?i(E):E,new at(C,E.node,at.BLACK,U,G)}},c=function(_){let g=null,v=null,E=s.length;const C=function(U,G){const W=E-U,je=E;E-=U;const xe=o(W+1,je),Te=s[W],Qe=i?i(Te):Te;x(new at(Qe,Te.node,G,null,xe))},x=function(U){g?(g.left=U,g=U):(v=U,g=U)};for(let U=0;U<_.count;++U){const G=_.nextBitIsOne(),W=Math.pow(2,_.count-(U+1));G?C(W,at.BLACK):(C(W,at.BLACK),C(W,at.RED))}return v},h=new lR(s.length),d=c(h);return new At(r||t,d)};/**
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
 */let Uf;const Vs={};class In{static get Default(){return L(Vs&&Ve,"ChildrenNode.ts has not been loaded"),Uf=Uf||new In({".priority":Vs},{".priority":Ve}),Uf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Zs(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof At?i:null}hasIndex(t){return dn(this.indexSet_,t.toString())}addIndex(t,i){L(t!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const c=i.getIterator(ae.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),r.push(h),h=c.getNext();let d;o?d=Do(r,t.getCompare()):d=Vs;const _=t.toString(),g=Object.assign({},this.indexSet_);g[_]=t;const v=Object.assign({},this.indexes_);return v[_]=d,new In(v,g)}addToIndexes(t,i){const r=Eo(this.indexes_,(o,c)=>{const h=Zs(this.indexSet_,c);if(L(h,"Missing index implementation for "+c),o===Vs)if(h.isDefinedOn(t.node)){const d=[],_=i.getIterator(ae.Wrap);let g=_.getNext();for(;g;)g.name!==t.name&&d.push(g),g=_.getNext();return d.push(t),Do(d,h.getCompare())}else return Vs;else{const d=i.get(t.name);let _=o;return d&&(_=_.remove(new ae(t.name,d))),_.insert(t,t.node)}});return new In(r,this.indexSet_)}removeFromIndexes(t,i){const r=Eo(this.indexes_,o=>{if(o===Vs)return o;{const c=i.get(t.name);return c?o.remove(new ae(t.name,c)):o}});return new In(r,this.indexSet_)}}/**
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
 */let hr;class X{static get EMPTY_NODE(){return hr||(hr=new X(new At(kh),null,In.Default))}constructor(t,i,r){this.children_=t,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Py(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hr}updatePriority(t){return this.children_.isEmpty()?this:new X(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?hr:i}}getChild(t){const i=se(t);return i===null?this:this.getImmediateChild(i).getChild(ke(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(L(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const r=new ae(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?hr:this.priorityNode_;return new X(o,h,c)}}updateChild(t,i){const r=se(t);if(r===null)return i;{L(se(t)!==".priority"||Ei(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(ke(t),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let r=0,o=0,c=!0;if(this.forEachChild(Ve,(h,d)=>{i[h]=d.val(t),r++,c&&X.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*r){const h=[];for(const d in i)h[d]=i[d];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Hy(this.getPriority().val())+":"),this.forEachChild(Ve,(i,r)=>{const o=r.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":py(t)}return this.lazyHash_}getPredecessorChildName(t,i,r){const o=this.resolveIndex_(r);if(o){const c=o.getPredecessorKey(new ae(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ae(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ae(i,this.children_.get(i)):null}forEachChild(t,i){const r=this.resolveIndex_(t);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ae.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ae.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Vr?-1:0}withIndex(t){if(t===Ws||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new X(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Ws||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(Ve),o=i.getIterator(Ve);let c=r.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=r.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Ws?null:this.indexMap_.get(t.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oR extends X{constructor(){super(new At(kh),X.EMPTY_NODE,In.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return X.EMPTY_NODE}isEmpty(){return!1}}const Vr=new oR;Object.defineProperties(ae,{MIN:{value:new ae($s,X.EMPTY_NODE)},MAX:{value:new ae(Zi,Vr)}});zy.__EMPTY_NODE=X.EMPTY_NODE;st.__childrenNodeConstructor=X;nR(Vr);sR(Vr);/**
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
 */const uR=!0;function Je(s,t=null){if(s===null)return X.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(t=s[".priority"]),L(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new st(i,Je(t))}if(!(s instanceof Array)&&uR){const i=[];let r=!1;if(ct(s,(h,d)=>{if(h.substring(0,1)!=="."){const _=Je(d);_.isEmpty()||(r=r||!_.getPriority().isEmpty(),i.push(new ae(h,_)))}}),i.length===0)return X.EMPTY_NODE;const c=Do(i,tR,h=>h.name,kh);if(r){const h=Do(i,Ve.getCompare());return new X(c,Je(t),new In({".priority":h},{".priority":Ve}))}else return new X(c,Je(t),In.Default)}else{let i=X.EMPTY_NODE;return ct(s,(r,o)=>{if(dn(s,r)&&r.substring(0,1)!=="."){const c=Je(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(r,c))}}),i.updatePriority(Je(t))}}iR(Je);/**
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
 */class cR extends Fo{constructor(t){super(),this.indexPath_=t,L(!oe(t)&&se(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const r=this.extractChild(t.node),o=this.extractChild(i.node),c=r.compareTo(o);return c===0?ts(t.name,i.name):c}makePost(t,i){const r=Je(t),o=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(i,o)}maxPost(){const t=X.EMPTY_NODE.updateChild(this.indexPath_,Vr);return new ae(Zi,t)}toString(){return Rr(this.indexPath_,0).join("/")}}/**
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
 */class fR extends Fo{compare(t,i){const r=t.node.compareTo(i.node);return r===0?ts(t.name,i.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(t,i){const r=Je(t);return new ae(i,r)}toString(){return".value"}}const hR=new fR;/**
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
 */function Vy(s){return{type:"value",snapshotNode:s}}function ea(s,t){return{type:"child_added",snapshotNode:t,childName:s}}function Nr(s,t){return{type:"child_removed",snapshotNode:t,childName:s}}function Or(s,t,i){return{type:"child_changed",snapshotNode:t,childName:s,oldSnap:i}}function dR(s,t){return{type:"child_moved",snapshotNode:t,childName:s}}/**
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
 */class xh{constructor(t){this.index_=t}updateChild(t,i,r,o,c,h){L(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=t.getImmediateChild(i);return d.getChild(o).equals(r.getChild(o))&&d.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?t.hasChild(i)?h.trackChildChange(Nr(i,d)):L(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?h.trackChildChange(ea(i,r)):h.trackChildChange(Or(i,r,d))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(i,r).withIndex(this.index_)}updateFullNode(t,i,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Ve,(o,c)=>{i.hasChild(o)||r.trackChildChange(Nr(o,c))}),i.isLeafNode()||i.forEachChild(Ve,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||r.trackChildChange(Or(o,c,h))}else r.trackChildChange(ea(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?X.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Dr{constructor(t){this.indexedFilter_=new xh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Dr.getStartPost_(t),this.endPost_=Dr.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&r}updateChild(t,i,r,o,c,h){return this.matches(new ae(i,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,r,o,c,h)}updateFullNode(t,i,r){i.isLeafNode()&&(i=X.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(X.EMPTY_NODE);const c=this;return i.forEachChild(Ve,(h,d)=>{c.matches(new ae(h,d))||(o=o.updateImmediateChild(h,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
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
 */class pR{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=i=>{const r=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Dr(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,r,o,c,h){return this.rangedFilter_.matches(new ae(i,r))||(r=X.EMPTY_NODE),t.getImmediateChild(i).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,r,o,c,h):this.fullLimitUpdateChild_(t,i,r,c,h)}updateFullNode(t,i,r){let o;if(i.isLeafNode()||i.isEmpty())o=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=X.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const d=c.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(X.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const d=c.getNext();h<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?h++:o=o.updateImmediateChild(d.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,r,o,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(C,x)=>E(x,C)}else h=this.index_.getCompare();const d=t;L(d.numChildren()===this.limit_,"");const _=new ae(i,r),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(_);if(d.hasChild(i)){const E=d.getImmediateChild(i);let C=o.getChildAfterChild(this.index_,g,this.reverse_);for(;C!=null&&(C.name===i||d.hasChild(C.name));)C=o.getChildAfterChild(this.index_,C,this.reverse_);const x=C==null?1:h(C,_);if(v&&!r.isEmpty()&&x>=0)return c!=null&&c.trackChildChange(Or(i,r,E)),d.updateImmediateChild(i,r);{c!=null&&c.trackChildChange(Nr(i,E));const G=d.updateImmediateChild(i,X.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(c!=null&&c.trackChildChange(ea(C.name,C.node)),G.updateImmediateChild(C.name,C.node)):G}}else return r.isEmpty()?t:v&&h(g,_)>=0?(c!=null&&(c.trackChildChange(Nr(g.name,g.node)),c.trackChildChange(ea(i,r))),d.updateImmediateChild(i,r).updateImmediateChild(g.name,X.EMPTY_NODE)):t}}/**
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
 */class Uh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const t=new Uh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function _R(s){return s.loadsAllData()?new xh(s.getIndex()):s.hasLimit()?new pR(s):new Dr(s)}function Jm(s){const t={};if(s.isDefault())return t;let i;if(s.index_===Ve?i="$priority":s.index_===hR?i="$value":s.index_===Ws?i="$key":(L(s.index_ instanceof cR,"Unrecognized index type!"),i=s.index_.toString()),t.orderBy=$e(i),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";t[r]=$e(s.indexStartValue_),s.startNameSet_&&(t[r]+=","+$e(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";t[r]=$e(s.indexEndValue_),s.endNameSet_&&(t[r]+=","+$e(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?t.limitToFirst=s.limit_:t.limitToLast=s.limit_),t}function $m(s){const t={};if(s.startSet_&&(t.sp=s.indexStartValue_,s.startNameSet_&&(t.sn=s.indexStartName_),t.sin=!s.startAfterSet_),s.endSet_&&(t.ep=s.indexEndValue_,s.endNameSet_&&(t.en=s.indexEndName_),t.ein=!s.endBeforeSet_),s.limitSet_){t.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),t.vf=i}return s.index_!==Ve&&(t.i=s.index_.toString()),t}/**
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
 */class Io extends ky{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(L(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,r,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=qr("p:rest:"),this.listens_={}}listen(t,i,r,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=Io.getListenId_(t,r),d={};this.listens_[h]=d;const _=Jm(t._queryParams);this.restRequest_(c+".json",_,(g,v)=>{let E=v;if(g===404&&(E=null,g=null),g===null&&this.onDataUpdate_(c,E,!1,r),Zs(this.listens_,h)===d){let C;g?g===401?C="permission_denied":C="rest_error:"+g:C="ok",o(C,null)}})}unlisten(t,i){const r=Io.getListenId_(t,i);delete this.listens_[r]}get(t){const i=Jm(t._queryParams),r=t._path.toString(),o=new xr;return this.restRequest_(r+".json",i,(c,h)=>{let d=h;c===404&&(d=null,c=null),c===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+aa(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let _=null;if(d.status>=200&&d.status<300){try{_=Tr(d.responseText)}catch{mt("Failed to parse JSON response for "+h+": "+d.responseText)}r(null,_)}else d.status!==401&&d.status!==404&&mt("Got unsuccessful REST response for "+h+" Status: "+d.status),r(d.status);r=null}},d.open("GET",h,!0),d.send()})}}/**
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
 */class gR{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
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
 */function Mo(){return{value:null,children:new Map}}function jy(s,t,i){if(oe(t))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(t,i);else{const r=se(t);s.children.has(r)||s.children.set(r,Mo());const o=s.children.get(r);t=ke(t),jy(o,t,i)}}function Jf(s,t,i){s.value!==null?i(t,s.value):mR(s,(r,o)=>{const c=new Re(t.toString()+"/"+r);Jf(o,c,i)})}function mR(s,t){s.children.forEach((i,r)=>{t(r,i)})}/**
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
 */class vR{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&ct(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=t,i}}/**
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
 */const ev=10*1e3,yR=30*1e3,ER=5*60*1e3;class SR{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new vR(t);const r=ev+(yR-ev)*Math.random();vr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),i={};let r=!1;ct(t,(o,c)=>{c>0&&dn(this.statsToReport_,o)&&(i[o]=c,r=!0)}),r&&this.server_.reportStats(i),vr(this.reportStats_.bind(this),Math.floor(Math.random()*2*ER))}}/**
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
 */var tn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function Lh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
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
 */class ko{constructor(t,i,r){this.path=t,this.affectedTree=i,this.revert=r,this.type=tn.ACK_USER_WRITE,this.source=Lh()}operationForChild(t){if(oe(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Re(t));return new ko(pe(),i,this.revert)}}else return L(se(this.path)===t,"operationForChild called for unrelated child."),new ko(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ir{constructor(t,i){this.source=t,this.path=i,this.type=tn.LISTEN_COMPLETE}operationForChild(t){return oe(this.path)?new Ir(this.source,pe()):new Ir(this.source,ke(this.path))}}/**
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
 */class Ji{constructor(t,i,r){this.source=t,this.path=i,this.snap=r,this.type=tn.OVERWRITE}operationForChild(t){return oe(this.path)?new Ji(this.source,pe(),this.snap.getImmediateChild(t)):new Ji(this.source,ke(this.path),this.snap)}}/**
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
 */class ta{constructor(t,i,r){this.source=t,this.path=i,this.children=r,this.type=tn.MERGE}operationForChild(t){if(oe(this.path)){const i=this.children.subtree(new Re(t));return i.isEmpty()?null:i.value?new Ji(this.source,pe(),i.value):new ta(this.source,pe(),i)}else return L(se(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new ta(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Si{constructor(t,i,r){this.node_=t,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(oe(t))return this.isFullyInitialized()&&!this.filtered_;const i=se(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class TR{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function bR(s,t,i,r){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(dR(h.childName,h.snapshotNode))}),dr(s,o,"child_removed",t,r,i),dr(s,o,"child_added",t,r,i),dr(s,o,"child_moved",c,r,i),dr(s,o,"child_changed",t,r,i),dr(s,o,"value",t,r,i),o}function dr(s,t,i,r,o,c){const h=r.filter(d=>d.type===i);h.sort((d,_)=>AR(s,d,_)),h.forEach(d=>{const _=CR(s,d,c);o.forEach(g=>{g.respondsTo(d.type)&&t.push(g.createEvent(_,s.query_))})})}function CR(s,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,s.index_)),t}function AR(s,t,i){if(t.childName==null||i.childName==null)throw sa("Should only compare child_ events.");const r=new ae(t.childName,t.snapshotNode),o=new ae(i.childName,i.snapshotNode);return s.index_.compare(r,o)}/**
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
 */function Qo(s,t){return{eventCache:s,serverCache:t}}function yr(s,t,i,r){return Qo(new Si(t,i,r),s.serverCache)}function Gy(s,t,i,r){return Qo(s.eventCache,new Si(t,i,r))}function xo(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function $i(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let Lf;const wR=()=>(Lf||(Lf=new At(cw)),Lf);class Me{static fromObject(t){let i=new Me(null);return ct(t,(r,o)=>{i=i.set(new Re(r),o)}),i}constructor(t,i=wR()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:pe(),value:this.value};if(oe(t))return null;{const r=se(t),o=this.children.get(r);if(o!==null){const c=o.findRootMostMatchingPathAndValue(ke(t),i);return c!=null?{path:qe(new Re(r),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(oe(t))return this;{const i=se(t),r=this.children.get(i);return r!==null?r.subtree(ke(t)):new Me(null)}}set(t,i){if(oe(t))return new Me(i,this.children);{const r=se(t),c=(this.children.get(r)||new Me(null)).set(ke(t),i),h=this.children.insert(r,c);return new Me(this.value,h)}}remove(t){if(oe(t))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const i=se(t),r=this.children.get(i);if(r){const o=r.remove(ke(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Me(null):new Me(this.value,c)}else return this}}get(t){if(oe(t))return this.value;{const i=se(t),r=this.children.get(i);return r?r.get(ke(t)):null}}setTree(t,i){if(oe(t))return i;{const r=se(t),c=(this.children.get(r)||new Me(null)).setTree(ke(t),i);let h;return c.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,c),new Me(this.value,h)}}fold(t){return this.fold_(pe(),t)}fold_(t,i){const r={};return this.children.inorderTraversal((o,c)=>{r[o]=c.fold_(qe(t,o),i)}),i(t,this.value,r)}findOnPath(t,i){return this.findOnPath_(t,pe(),i)}findOnPath_(t,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(oe(t))return null;{const c=se(t),h=this.children.get(c);return h?h.findOnPath_(ke(t),qe(i,c),r):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,pe(),i)}foreachOnPath_(t,i,r){if(oe(t))return this;{this.value&&r(i,this.value);const o=se(t),c=this.children.get(o);return c?c.foreachOnPath_(ke(t),qe(i,o),r):new Me(null)}}foreach(t){this.foreach_(pe(),t)}foreach_(t,i){this.children.inorderTraversal((r,o)=>{o.foreach_(qe(t,r),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,r)=>{r.value&&t(i,r.value)})}}/**
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
 */class nn{constructor(t){this.writeTree_=t}static empty(){return new nn(new Me(null))}}function Er(s,t,i){if(oe(t))return new nn(new Me(i));{const r=s.writeTree_.findRootMostValueAndPath(t);if(r!=null){const o=r.path;let c=r.value;const h=gt(o,t);return c=c.updateChild(h,i),new nn(s.writeTree_.set(o,c))}else{const o=new Me(i),c=s.writeTree_.setTree(t,o);return new nn(c)}}}function $f(s,t,i){let r=s;return ct(i,(o,c)=>{r=Er(r,qe(t,o),c)}),r}function tv(s,t){if(oe(t))return nn.empty();{const i=s.writeTree_.setTree(t,new Me(null));return new nn(i)}}function eh(s,t){return ns(s,t)!=null}function ns(s,t){const i=s.writeTree_.findRootMostValueAndPath(t);return i!=null?s.writeTree_.get(i.path).getChild(gt(i.path,t)):null}function nv(s){const t=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Ve,(r,o)=>{t.push(new ae(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&t.push(new ae(r,o.value))}),t}function vi(s,t){if(oe(t))return s;{const i=ns(s,t);return i!=null?new nn(new Me(i)):new nn(s.writeTree_.subtree(t))}}function th(s){return s.writeTree_.isEmpty()}function na(s,t){return Yy(pe(),s.writeTree_,t)}function Yy(s,t,i){if(t.value!=null)return i.updateChild(s,t.value);{let r=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(L(c.value!==null,"Priority writes must always be leaf nodes"),r=c.value):i=Yy(qe(s,o),c,i)}),!i.getChild(s).isEmpty()&&r!==null&&(i=i.updateChild(qe(s,".priority"),r)),i}}/**
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
 */function Ko(s,t){return Xy(t,s)}function RR(s,t,i,r,o){L(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:r,visible:o}),o&&(s.visibleWrites=Er(s.visibleWrites,t,i)),s.lastWriteId=r}function NR(s,t,i,r){L(r>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:t,children:i,writeId:r,visible:!0}),s.visibleWrites=$f(s.visibleWrites,t,i),s.lastWriteId=r}function OR(s,t){for(let i=0;i<s.allWrites.length;i++){const r=s.allWrites[i];if(r.writeId===t)return r}return null}function DR(s,t){const i=s.allWrites.findIndex(d=>d.writeId===t);L(i>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[i];s.allWrites.splice(i,1);let o=r.visible,c=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&IR(d,r.path)?o=!1:Ft(r.path,d.path)&&(c=!0)),h--}if(o){if(c)return MR(s),!0;if(r.snap)s.visibleWrites=tv(s.visibleWrites,r.path);else{const d=r.children;ct(d,_=>{s.visibleWrites=tv(s.visibleWrites,qe(r.path,_))})}return!0}else return!1}function IR(s,t){if(s.snap)return Ft(s.path,t);for(const i in s.children)if(s.children.hasOwnProperty(i)&&Ft(qe(s.path,i),t))return!0;return!1}function MR(s){s.visibleWrites=Fy(s.allWrites,kR,pe()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function kR(s){return s.visible}function Fy(s,t,i){let r=nn.empty();for(let o=0;o<s.length;++o){const c=s[o];if(t(c)){const h=c.path;let d;if(c.snap)Ft(i,h)?(d=gt(i,h),r=Er(r,d,c.snap)):Ft(h,i)&&(d=gt(h,i),r=Er(r,pe(),c.snap.getChild(d)));else if(c.children){if(Ft(i,h))d=gt(i,h),r=$f(r,d,c.children);else if(Ft(h,i))if(d=gt(h,i),oe(d))r=$f(r,pe(),c.children);else{const _=Zs(c.children,se(d));if(_){const g=_.getChild(ke(d));r=Er(r,pe(),g)}}}else throw sa("WriteRecord should have .snap or .children")}}return r}function Qy(s,t,i,r,o){if(!r&&!o){const c=ns(s.visibleWrites,t);if(c!=null)return c;{const h=vi(s.visibleWrites,t);if(th(h))return i;if(i==null&&!eh(h,pe()))return null;{const d=i||X.EMPTY_NODE;return na(h,d)}}}else{const c=vi(s.visibleWrites,t);if(!o&&th(c))return i;if(!o&&i==null&&!eh(c,pe()))return null;{const h=function(g){return(g.visible||o)&&(!r||!~r.indexOf(g.writeId))&&(Ft(g.path,t)||Ft(t,g.path))},d=Fy(s.allWrites,h,t),_=i||X.EMPTY_NODE;return na(d,_)}}}function xR(s,t,i){let r=X.EMPTY_NODE;const o=ns(s.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Ve,(c,h)=>{r=r.updateImmediateChild(c,h)}),r;if(i){const c=vi(s.visibleWrites,t);return i.forEachChild(Ve,(h,d)=>{const _=na(vi(c,new Re(h)),d);r=r.updateImmediateChild(h,_)}),nv(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const c=vi(s.visibleWrites,t);return nv(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function UR(s,t,i,r,o){L(r||o,"Either existingEventSnap or existingServerSnap must exist");const c=qe(t,i);if(eh(s.visibleWrites,c))return null;{const h=vi(s.visibleWrites,c);return th(h)?o.getChild(i):na(h,o.getChild(i))}}function LR(s,t,i,r){const o=qe(t,i),c=ns(s.visibleWrites,o);if(c!=null)return c;if(r.isCompleteForChild(i)){const h=vi(s.visibleWrites,o);return na(h,r.getNode().getImmediateChild(i))}else return null}function zR(s,t){return ns(s.visibleWrites,t)}function HR(s,t,i,r,o,c,h){let d;const _=vi(s.visibleWrites,t),g=ns(_,pe());if(g!=null)d=g;else if(i!=null)d=na(_,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=h.getCompare(),C=c?d.getReverseIteratorFrom(r,h):d.getIteratorFrom(r,h);let x=C.getNext();for(;x&&v.length<o;)E(x,r)!==0&&v.push(x),x=C.getNext();return v}else return[]}function PR(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function Uo(s,t,i,r){return Qy(s.writeTree,s.treePath,t,i,r)}function Ph(s,t){return xR(s.writeTree,s.treePath,t)}function iv(s,t,i,r){return UR(s.writeTree,s.treePath,t,i,r)}function Lo(s,t){return zR(s.writeTree,qe(s.treePath,t))}function BR(s,t,i,r,o,c){return HR(s.writeTree,s.treePath,t,i,r,o,c)}function Bh(s,t,i){return LR(s.writeTree,s.treePath,t,i)}function Ky(s,t){return Xy(qe(s.treePath,t),s.writeTree)}function Xy(s,t){return{treePath:s,writeTree:t}}/**
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
 */class qR{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,r=t.childName;L(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),L(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(r,Or(r,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(r,Nr(r,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(r,ea(r,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(r,Or(r,t.snapshotNode,o.oldSnap));else throw sa("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class VR{getCompleteChild(t){return null}getChildAfterChild(t,i,r){return null}}const Wy=new VR;class qh{constructor(t,i,r=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bh(this.writes_,t,r)}}getChildAfterChild(t,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),c=BR(this.writes_,o,i,1,r,t);return c.length===0?null:c[0]}}/**
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
 */function jR(s){return{filter:s}}function GR(s,t){L(t.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),L(t.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function YR(s,t,i,r,o){const c=new qR;let h,d;if(i.type===tn.OVERWRITE){const g=i;g.source.fromUser?h=nh(s,t,g.path,g.snap,r,o,c):(L(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered()&&!oe(g.path),h=zo(s,t,g.path,g.snap,r,o,d,c))}else if(i.type===tn.MERGE){const g=i;g.source.fromUser?h=QR(s,t,g.path,g.children,r,o,c):(L(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered(),h=ih(s,t,g.path,g.children,r,o,d,c))}else if(i.type===tn.ACK_USER_WRITE){const g=i;g.revert?h=WR(s,t,g.path,r,o,c):h=KR(s,t,g.path,g.affectedTree,r,o,c)}else if(i.type===tn.LISTEN_COMPLETE)h=XR(s,t,i.path,r,c);else throw sa("Unknown operation type: "+i.type);const _=c.getChanges();return FR(t,h,_),{viewCache:h,changes:_}}function FR(s,t,i){const r=t.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),c=xo(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(c)||!r.getNode().getPriority().equals(c.getPriority()))&&i.push(Vy(xo(t)))}}function Zy(s,t,i,r,o,c){const h=t.eventCache;if(Lo(r,i)!=null)return t;{let d,_;if(oe(i))if(L(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const g=$i(t),v=g instanceof X?g:X.EMPTY_NODE,E=Ph(r,v);d=s.filter.updateFullNode(t.eventCache.getNode(),E,c)}else{const g=Uo(r,$i(t));d=s.filter.updateFullNode(t.eventCache.getNode(),g,c)}else{const g=se(i);if(g===".priority"){L(Ei(i)===1,"Can't have a priority with additional path components");const v=h.getNode();_=t.serverCache.getNode();const E=iv(r,i,v,_);E!=null?d=s.filter.updatePriority(v,E):d=h.getNode()}else{const v=ke(i);let E;if(h.isCompleteForChild(g)){_=t.serverCache.getNode();const C=iv(r,i,h.getNode(),_);C!=null?E=h.getNode().getImmediateChild(g).updateChild(v,C):E=h.getNode().getImmediateChild(g)}else E=Bh(r,g,t.serverCache);E!=null?d=s.filter.updateChild(h.getNode(),g,E,v,o,c):d=h.getNode()}}return yr(t,d,h.isFullyInitialized()||oe(i),s.filter.filtersNodes())}}function zo(s,t,i,r,o,c,h,d){const _=t.serverCache;let g;const v=h?s.filter:s.filter.getIndexedFilter();if(oe(i))g=v.updateFullNode(_.getNode(),r,null);else if(v.filtersNodes()&&!_.isFiltered()){const x=_.getNode().updateChild(i,r);g=v.updateFullNode(_.getNode(),x,null)}else{const x=se(i);if(!_.isCompleteForPath(i)&&Ei(i)>1)return t;const U=ke(i),W=_.getNode().getImmediateChild(x).updateChild(U,r);x===".priority"?g=v.updatePriority(_.getNode(),W):g=v.updateChild(_.getNode(),x,W,U,Wy,null)}const E=Gy(t,g,_.isFullyInitialized()||oe(i),v.filtersNodes()),C=new qh(o,E,c);return Zy(s,E,i,o,C,d)}function nh(s,t,i,r,o,c,h){const d=t.eventCache;let _,g;const v=new qh(o,t,c);if(oe(i))g=s.filter.updateFullNode(t.eventCache.getNode(),r,h),_=yr(t,g,!0,s.filter.filtersNodes());else{const E=se(i);if(E===".priority")g=s.filter.updatePriority(t.eventCache.getNode(),r),_=yr(t,g,d.isFullyInitialized(),d.isFiltered());else{const C=ke(i),x=d.getNode().getImmediateChild(E);let U;if(oe(C))U=r;else{const G=v.getCompleteChild(E);G!=null?Dh(C)===".priority"&&G.getChild(Uy(C)).isEmpty()?U=G:U=G.updateChild(C,r):U=X.EMPTY_NODE}if(x.equals(U))_=t;else{const G=s.filter.updateChild(d.getNode(),E,U,C,v,h);_=yr(t,G,d.isFullyInitialized(),s.filter.filtersNodes())}}}return _}function sv(s,t){return s.eventCache.isCompleteForChild(t)}function QR(s,t,i,r,o,c,h){let d=t;return r.foreach((_,g)=>{const v=qe(i,_);sv(t,se(v))&&(d=nh(s,d,v,g,o,c,h))}),r.foreach((_,g)=>{const v=qe(i,_);sv(t,se(v))||(d=nh(s,d,v,g,o,c,h))}),d}function av(s,t,i){return i.foreach((r,o)=>{t=t.updateChild(r,o)}),t}function ih(s,t,i,r,o,c,h,d){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let _=t,g;oe(i)?g=r:g=new Me(null).setTree(i,r);const v=t.serverCache.getNode();return g.children.inorderTraversal((E,C)=>{if(v.hasChild(E)){const x=t.serverCache.getNode().getImmediateChild(E),U=av(s,x,C);_=zo(s,_,new Re(E),U,o,c,h,d)}}),g.children.inorderTraversal((E,C)=>{const x=!t.serverCache.isCompleteForChild(E)&&C.value===null;if(!v.hasChild(E)&&!x){const U=t.serverCache.getNode().getImmediateChild(E),G=av(s,U,C);_=zo(s,_,new Re(E),G,o,c,h,d)}}),_}function KR(s,t,i,r,o,c,h){if(Lo(o,i)!=null)return t;const d=t.serverCache.isFiltered(),_=t.serverCache;if(r.value!=null){if(oe(i)&&_.isFullyInitialized()||_.isCompleteForPath(i))return zo(s,t,i,_.getNode().getChild(i),o,c,d,h);if(oe(i)){let g=new Me(null);return _.getNode().forEachChild(Ws,(v,E)=>{g=g.set(new Re(v),E)}),ih(s,t,i,g,o,c,d,h)}else return t}else{let g=new Me(null);return r.foreach((v,E)=>{const C=qe(i,v);_.isCompleteForPath(C)&&(g=g.set(v,_.getNode().getChild(C)))}),ih(s,t,i,g,o,c,d,h)}}function XR(s,t,i,r,o){const c=t.serverCache,h=Gy(t,c.getNode(),c.isFullyInitialized()||oe(i),c.isFiltered());return Zy(s,h,i,r,Wy,o)}function WR(s,t,i,r,o,c){let h;if(Lo(r,i)!=null)return t;{const d=new qh(r,t,o),_=t.eventCache.getNode();let g;if(oe(i)||se(i)===".priority"){let v;if(t.serverCache.isFullyInitialized())v=Uo(r,$i(t));else{const E=t.serverCache.getNode();L(E instanceof X,"serverChildren would be complete if leaf node"),v=Ph(r,E)}v=v,g=s.filter.updateFullNode(_,v,c)}else{const v=se(i);let E=Bh(r,v,t.serverCache);E==null&&t.serverCache.isCompleteForChild(v)&&(E=_.getImmediateChild(v)),E!=null?g=s.filter.updateChild(_,v,E,ke(i),d,c):t.eventCache.getNode().hasChild(v)?g=s.filter.updateChild(_,v,X.EMPTY_NODE,ke(i),d,c):g=_,g.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Uo(r,$i(t)),h.isLeafNode()&&(g=s.filter.updateFullNode(g,h,c)))}return h=t.serverCache.isFullyInitialized()||Lo(r,pe())!=null,yr(t,g,h,s.filter.filtersNodes())}}/**
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
 */class ZR{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new xh(r.getIndex()),c=_R(r);this.processor_=jR(c);const h=i.serverCache,d=i.eventCache,_=o.updateFullNode(X.EMPTY_NODE,h.getNode(),null),g=c.updateFullNode(X.EMPTY_NODE,d.getNode(),null),v=new Si(_,h.isFullyInitialized(),o.filtersNodes()),E=new Si(g,d.isFullyInitialized(),c.filtersNodes());this.viewCache_=Qo(E,v),this.eventGenerator_=new TR(this.query_)}get query(){return this.query_}}function JR(s){return s.viewCache_.serverCache.getNode()}function $R(s){return xo(s.viewCache_)}function e1(s,t){const i=$i(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!oe(t)&&!i.getImmediateChild(se(t)).isEmpty())?i.getChild(t):null}function rv(s){return s.eventRegistrations_.length===0}function t1(s,t){s.eventRegistrations_.push(t)}function lv(s,t,i){const r=[];if(i){L(t==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&r.push(h)})}if(t){let o=[];for(let c=0;c<s.eventRegistrations_.length;++c){const h=s.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return r}function ov(s,t,i,r){t.type===tn.MERGE&&t.source.queryId!==null&&(L($i(s.viewCache_),"We should always have a full cache before handling merges"),L(xo(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,c=YR(s.processor_,o,t,i,r);return GR(s.processor_,c.viewCache),L(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,Jy(s,c.changes,c.viewCache.eventCache.getNode(),null)}function n1(s,t){const i=s.viewCache_.eventCache,r=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Ve,(c,h)=>{r.push(ea(c,h))}),i.isFullyInitialized()&&r.push(Vy(i.getNode())),Jy(s,r,i.getNode(),t)}function Jy(s,t,i,r){const o=r?[r]:s.eventRegistrations_;return bR(s.eventGenerator_,t,i,o)}/**
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
 */let Ho;class $y{constructor(){this.views=new Map}}function i1(s){L(!Ho,"__referenceConstructor has already been defined"),Ho=s}function s1(){return L(Ho,"Reference.ts has not been loaded"),Ho}function a1(s){return s.views.size===0}function Vh(s,t,i,r){const o=t.source.queryId;if(o!==null){const c=s.views.get(o);return L(c!=null,"SyncTree gave us an op for an invalid query."),ov(c,t,i,r)}else{let c=[];for(const h of s.views.values())c=c.concat(ov(h,t,i,r));return c}}function eE(s,t,i,r,o){const c=t._queryIdentifier,h=s.views.get(c);if(!h){let d=Uo(i,o?r:null),_=!1;d?_=!0:r instanceof X?(d=Ph(i,r),_=!1):(d=X.EMPTY_NODE,_=!1);const g=Qo(new Si(d,_,!1),new Si(r,o,!1));return new ZR(t,g)}return h}function r1(s,t,i,r,o,c){const h=eE(s,t,r,o,c);return s.views.has(t._queryIdentifier)||s.views.set(t._queryIdentifier,h),t1(h,i),n1(h,i)}function l1(s,t,i,r){const o=t._queryIdentifier,c=[];let h=[];const d=Ti(s);if(o==="default")for(const[_,g]of s.views.entries())h=h.concat(lv(g,i,r)),rv(g)&&(s.views.delete(_),g.query._queryParams.loadsAllData()||c.push(g.query));else{const _=s.views.get(o);_&&(h=h.concat(lv(_,i,r)),rv(_)&&(s.views.delete(o),_.query._queryParams.loadsAllData()||c.push(_.query)))}return d&&!Ti(s)&&c.push(new(s1())(t._repo,t._path)),{removed:c,events:h}}function tE(s){const t=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function yi(s,t){let i=null;for(const r of s.views.values())i=i||e1(r,t);return i}function nE(s,t){if(t._queryParams.loadsAllData())return Xo(s);{const r=t._queryIdentifier;return s.views.get(r)}}function iE(s,t){return nE(s,t)!=null}function Ti(s){return Xo(s)!=null}function Xo(s){for(const t of s.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Po;function o1(s){L(!Po,"__referenceConstructor has already been defined"),Po=s}function u1(){return L(Po,"Reference.ts has not been loaded"),Po}let c1=1;class uv{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Me(null),this.pendingWriteTree_=PR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sE(s,t,i,r,o){return RR(s.pendingWriteTree_,t,i,r,o),o?ua(s,new Ji(Lh(),t,i)):[]}function f1(s,t,i,r){NR(s.pendingWriteTree_,t,i,r);const o=Me.fromObject(i);return ua(s,new ta(Lh(),t,o))}function pi(s,t,i=!1){const r=OR(s.pendingWriteTree_,t);if(DR(s.pendingWriteTree_,t)){let c=new Me(null);return r.snap!=null?c=c.set(pe(),!0):ct(r.children,h=>{c=c.set(new Re(h),!0)}),ua(s,new ko(r.path,c,i))}else return[]}function jr(s,t,i){return ua(s,new Ji(zh(),t,i))}function h1(s,t,i){const r=Me.fromObject(i);return ua(s,new ta(zh(),t,r))}function d1(s,t){return ua(s,new Ir(zh(),t))}function p1(s,t,i){const r=Gh(s,i);if(r){const o=Yh(r),c=o.path,h=o.queryId,d=gt(c,t),_=new Ir(Hh(h),d);return Fh(s,c,_)}else return[]}function Bo(s,t,i,r,o=!1){const c=t._path,h=s.syncPointTree_.get(c);let d=[];if(h&&(t._queryIdentifier==="default"||iE(h,t))){const _=l1(h,t,i,r);a1(h)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const g=_.removed;if(d=_.events,!o){const v=g.findIndex(C=>C._queryParams.loadsAllData())!==-1,E=s.syncPointTree_.findOnPath(c,(C,x)=>Ti(x));if(v&&!E){const C=s.syncPointTree_.subtree(c);if(!C.isEmpty()){const x=m1(C);for(let U=0;U<x.length;++U){const G=x[U],W=G.query,je=oE(s,G);s.listenProvider_.startListening(Sr(W),Mr(s,W),je.hashFn,je.onComplete)}}}!E&&g.length>0&&!r&&(v?s.listenProvider_.stopListening(Sr(t),null):g.forEach(C=>{const x=s.queryToTagMap.get(Wo(C));s.listenProvider_.stopListening(Sr(C),x)}))}v1(s,g)}return d}function aE(s,t,i,r){const o=Gh(s,r);if(o!=null){const c=Yh(o),h=c.path,d=c.queryId,_=gt(h,t),g=new Ji(Hh(d),_,i);return Fh(s,h,g)}else return[]}function _1(s,t,i,r){const o=Gh(s,r);if(o){const c=Yh(o),h=c.path,d=c.queryId,_=gt(h,t),g=Me.fromObject(i),v=new ta(Hh(d),_,g);return Fh(s,h,v)}else return[]}function sh(s,t,i,r=!1){const o=t._path;let c=null,h=!1;s.syncPointTree_.foreachOnPath(o,(C,x)=>{const U=gt(C,o);c=c||yi(x,U),h=h||Ti(x)});let d=s.syncPointTree_.get(o);d?(h=h||Ti(d),c=c||yi(d,pe())):(d=new $y,s.syncPointTree_=s.syncPointTree_.set(o,d));let _;c!=null?_=!0:(_=!1,c=X.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((x,U)=>{const G=yi(U,pe());G&&(c=c.updateImmediateChild(x,G))}));const g=iE(d,t);if(!g&&!t._queryParams.loadsAllData()){const C=Wo(t);L(!s.queryToTagMap.has(C),"View does not exist, but we have a tag");const x=y1();s.queryToTagMap.set(C,x),s.tagToQueryMap.set(x,C)}const v=Ko(s.pendingWriteTree_,o);let E=r1(d,t,i,v,c,_);if(!g&&!h&&!r){const C=nE(d,t);E=E.concat(E1(s,t,C))}return E}function jh(s,t,i){const o=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(t,(h,d)=>{const _=gt(h,t),g=yi(d,_);if(g)return g});return Qy(o,t,c,i,!0)}function g1(s,t){const i=t._path;let r=null;s.syncPointTree_.foreachOnPath(i,(g,v)=>{const E=gt(g,i);r=r||yi(v,E)});let o=s.syncPointTree_.get(i);o?r=r||yi(o,pe()):(o=new $y,s.syncPointTree_=s.syncPointTree_.set(i,o));const c=r!=null,h=c?new Si(r,!0,!1):null,d=Ko(s.pendingWriteTree_,t._path),_=eE(o,t,d,c?h.getNode():X.EMPTY_NODE,c);return $R(_)}function ua(s,t){return rE(t,s.syncPointTree_,null,Ko(s.pendingWriteTree_,pe()))}function rE(s,t,i,r){if(oe(s.path))return lE(s,t,i,r);{const o=t.get(pe());i==null&&o!=null&&(i=yi(o,pe()));let c=[];const h=se(s.path),d=s.operationForChild(h),_=t.children.get(h);if(_&&d){const g=i?i.getImmediateChild(h):null,v=Ky(r,h);c=c.concat(rE(d,_,g,v))}return o&&(c=c.concat(Vh(o,s,r,i))),c}}function lE(s,t,i,r){const o=t.get(pe());i==null&&o!=null&&(i=yi(o,pe()));let c=[];return t.children.inorderTraversal((h,d)=>{const _=i?i.getImmediateChild(h):null,g=Ky(r,h),v=s.operationForChild(h);v&&(c=c.concat(lE(v,d,_,g)))}),o&&(c=c.concat(Vh(o,s,r,i))),c}function oE(s,t){const i=t.query,r=Mr(s,i);return{hashFn:()=>(JR(t)||X.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?p1(s,i._path,r):d1(s,i._path);{const c=dw(o,i);return Bo(s,i,null,c)}}}}function Mr(s,t){const i=Wo(t);return s.queryToTagMap.get(i)}function Wo(s){return s._path.toString()+"$"+s._queryIdentifier}function Gh(s,t){return s.tagToQueryMap.get(t)}function Yh(s){const t=s.indexOf("$");return L(t!==-1&&t<s.length-1,"Bad queryKey."),{queryId:s.substr(t+1),path:new Re(s.substr(0,t))}}function Fh(s,t,i){const r=s.syncPointTree_.get(t);L(r,"Missing sync point for query tag that we're tracking");const o=Ko(s.pendingWriteTree_,t);return Vh(r,i,o,null)}function m1(s){return s.fold((t,i,r)=>{if(i&&Ti(i))return[Xo(i)];{let o=[];return i&&(o=tE(i)),ct(r,(c,h)=>{o=o.concat(h)}),o}})}function Sr(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(u1())(s._repo,s._path):s}function v1(s,t){for(let i=0;i<t.length;++i){const r=t[i];if(!r._queryParams.loadsAllData()){const o=Wo(r),c=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(c)}}}function y1(){return c1++}function E1(s,t,i){const r=t._path,o=Mr(s,t),c=oE(s,i),h=s.listenProvider_.startListening(Sr(t),o,c.hashFn,c.onComplete),d=s.syncPointTree_.subtree(r);if(o)L(!Ti(d.value),"If we're adding a query, it shouldn't be shadowed");else{const _=d.fold((g,v,E)=>{if(!oe(g)&&v&&Ti(v))return[Xo(v).query];{let C=[];return v&&(C=C.concat(tE(v).map(x=>x.query))),ct(E,(x,U)=>{C=C.concat(U)}),C}});for(let g=0;g<_.length;++g){const v=_[g];s.listenProvider_.stopListening(Sr(v),Mr(s,v))}}return h}/**
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
 */class Qh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new Qh(i)}node(){return this.node_}}class Kh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=qe(this.path_,t);return new Kh(this.syncTree_,i)}node(){return jh(this.syncTree_,this.path_)}}const S1=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},cv=function(s,t,i){if(!s||typeof s!="object")return s;if(L(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return T1(s[".sv"],t,i);if(typeof s[".sv"]=="object")return b1(s[".sv"],t);L(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},T1=function(s,t,i){switch(s){case"timestamp":return i.timestamp;default:L(!1,"Unexpected server value: "+s)}},b1=function(s,t,i){s.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&L(!1,"Unexpected increment value: "+r);const o=t.node();if(L(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},uE=function(s,t,i,r){return Xh(t,new Kh(i,s),r)},cE=function(s,t,i){return Xh(s,new Qh(t),i)};function Xh(s,t,i){const r=s.getPriority().val(),o=cv(r,t.getImmediateChild(".priority"),i);let c;if(s.isLeafNode()){const h=s,d=cv(h.getValue(),t,i);return d!==h.getValue()||o!==h.getPriority().val()?new st(d,Je(o)):s}else{const h=s;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new st(o))),h.forEachChild(Ve,(d,_)=>{const g=Xh(_,t.getImmediateChild(d),i);g!==_&&(c=c.updateImmediateChild(d,g))}),c}}/**
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
 */class Wh{constructor(t="",i=null,r={children:{},childCount:0}){this.name=t,this.parent=i,this.node=r}}function Zh(s,t){let i=t instanceof Re?t:new Re(t),r=s,o=se(i);for(;o!==null;){const c=Zs(r.node.children,o)||{children:{},childCount:0};r=new Wh(o,r,c),i=ke(i),o=se(i)}return r}function ca(s){return s.node.value}function fE(s,t){s.node.value=t,ah(s)}function hE(s){return s.node.childCount>0}function C1(s){return ca(s)===void 0&&!hE(s)}function Zo(s,t){ct(s.node.children,(i,r)=>{t(new Wh(i,s,r))})}function dE(s,t,i,r){i&&t(s),Zo(s,o=>{dE(o,t,!0)})}function A1(s,t,i){let r=s.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Gr(s){return new Re(s.parent===null?s.name:Gr(s.parent)+"/"+s.name)}function ah(s){s.parent!==null&&w1(s.parent,s.name,s)}function w1(s,t,i){const r=C1(i),o=dn(s.node.children,t);r&&o?(delete s.node.children[t],s.node.childCount--,ah(s)):!r&&!o&&(s.node.children[t]=i.node,s.node.childCount++,ah(s))}/**
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
 */const R1=/[\[\].#$\/\u0000-\u001F\u007F]/,N1=/[\[\].#$\u0000-\u001F\u007F]/,zf=10*1024*1024,Jh=function(s){return typeof s=="string"&&s.length!==0&&!R1.test(s)},pE=function(s){return typeof s=="string"&&s.length!==0&&!N1.test(s)},O1=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),pE(s)},D1=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!Ah(s)||s&&typeof s=="object"&&dn(s,".sv")},I1=function(s,t,i,r){Jo(qo(s,"value"),t,i)},Jo=function(s,t,i){const r=i instanceof Re?new Qw(i,s):i;if(t===void 0)throw new Error(s+"contains undefined "+Yi(r));if(typeof t=="function")throw new Error(s+"contains a function "+Yi(r)+" with contents = "+t.toString());if(Ah(t))throw new Error(s+"contains "+t.toString()+" "+Yi(r));if(typeof t=="string"&&t.length>zf/3&&Vo(t)>zf)throw new Error(s+"contains a string greater than "+zf+" utf8 bytes "+Yi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(ct(t,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Jh(h)))throw new Error(s+" contains an invalid key ("+h+") "+Yi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Kw(r,h),Jo(s,d,r),Xw(r)}),o&&c)throw new Error(s+' contains ".value" child '+Yi(r)+" in addition to actual children.")}},M1=function(s,t){let i,r;for(i=0;i<t.length;i++){r=t[i];const c=Rr(r);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Jh(c[h]))throw new Error(s+"contains an invalid key ("+c[h]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(Fw);let o=null;for(i=0;i<t.length;i++){if(r=t[i],o!==null&&Ft(o,r))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}},k1=function(s,t,i,r){const o=qo(s,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const c=[];ct(t,(h,d)=>{const _=new Re(h);if(Jo(o,d,qe(i,_)),Dh(_)===".priority"&&!D1(d))throw new Error(o+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(_)}),M1(o,c)},_E=function(s,t,i,r){if(!pE(i))throw new Error(qo(s,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x1=function(s,t,i,r){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),_E(s,t,i)},U1=function(s,t){if(se(t)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},L1=function(s,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Jh(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!O1(i))throw new Error(qo(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class z1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $o(s,t){let i=null;for(let r=0;r<t.length;r++){const o=t[r],c=o.getPath();i!==null&&!Ih(c,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&s.eventLists_.push(i)}function gE(s,t,i){$o(s,i),mE(s,r=>Ih(r,t))}function Qt(s,t,i){$o(s,i),mE(s,r=>Ft(r,t)||Ft(t,r))}function mE(s,t){s.recursionDepth_++;let i=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const c=o.path;t(c)?(H1(s.eventLists_[r]),s.eventLists_[r]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function H1(s){for(let t=0;t<s.events.length;t++){const i=s.events[t];if(i!==null){s.events[t]=null;const r=i.getEventRunner();mr&&ut("event: "+i.toString()),oa(r)}}}/**
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
 */const P1="repo_interrupt",B1=25;class q1{constructor(t,i,r,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new z1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mo(),this.transactionQueueTree_=new Wh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function V1(s,t,i){if(s.stats_=Nh(s.repoInfo_),s.forceRestClient_||mw())s.server_=new Io(s.repoInfo_,(r,o,c,h)=>{fv(s,r,o,c,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>hv(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new kn(s.repoInfo_,t,(r,o,c,h)=>{fv(s,r,o,c,h)},r=>{hv(s,r)},r=>{G1(s,r)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=Tw(s.repoInfo_,()=>new SR(s.stats_,s.server_)),s.infoData_=new gR,s.infoSyncTree_=new uv({startListening:(r,o,c,h)=>{let d=[];const _=s.infoData_.getNode(r._path);return _.isEmpty()||(d=jr(s.infoSyncTree_,r._path,_),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),$h(s,"connected",!1),s.serverSyncTree_=new uv({startListening:(r,o,c,h)=>(s.server_.listen(r,c,o,(d,_)=>{const g=h(d,_);Qt(s.eventQueue_,r._path,g)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function j1(s){const i=s.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function eu(s){return S1({timestamp:j1(s)})}function fv(s,t,i,r,o){s.dataUpdateCount++;const c=new Re(t);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(r){const _=Eo(i,g=>Je(g));h=_1(s.serverSyncTree_,c,_,o)}else{const _=Je(i);h=aE(s.serverSyncTree_,c,_,o)}else if(r){const _=Eo(i,g=>Je(g));h=h1(s.serverSyncTree_,c,_)}else{const _=Je(i);h=jr(s.serverSyncTree_,c,_)}let d=c;h.length>0&&(d=ia(s,c)),Qt(s.eventQueue_,d,h)}function hv(s,t){$h(s,"connected",t),t===!1&&K1(s)}function G1(s,t){ct(t,(i,r)=>{$h(s,i,r)})}function $h(s,t,i){const r=new Re("/.info/"+t),o=Je(i);s.infoData_.updateSnapshot(r,o);const c=jr(s.infoSyncTree_,r,o);Qt(s.eventQueue_,r,c)}function ed(s){return s.nextWriteId_++}function Y1(s,t,i){const r=g1(s.serverSyncTree_,t);return r!=null?Promise.resolve(r):s.server_.get(t).then(o=>{const c=Je(o).withIndex(t._queryParams.getIndex());sh(s.serverSyncTree_,t,i,!0);let h;if(t._queryParams.loadsAllData())h=jr(s.serverSyncTree_,t._path,c);else{const d=Mr(s.serverSyncTree_,t);h=aE(s.serverSyncTree_,t._path,c,d)}return Qt(s.eventQueue_,t._path,h),Bo(s.serverSyncTree_,t,i,null,!0),c},o=>(Yr(s,"get for query "+$e(t)+" failed: "+o),Promise.reject(new Error(o))))}function F1(s,t,i,r,o){Yr(s,"set",{path:t.toString(),value:i,priority:r});const c=eu(s),h=Je(i,r),d=jh(s.serverSyncTree_,t),_=cE(h,d,c),g=ed(s),v=sE(s.serverSyncTree_,t,_,g,!0);$o(s.eventQueue_,v),s.server_.put(t.toString(),h.val(!0),(C,x)=>{const U=C==="ok";U||mt("set at "+t+" failed: "+C);const G=pi(s.serverSyncTree_,g,!U);Qt(s.eventQueue_,t,G),rh(s,o,C,x)});const E=nd(s,t);ia(s,E),Qt(s.eventQueue_,E,[])}function Q1(s,t,i,r){Yr(s,"update",{path:t.toString(),value:i});let o=!0;const c=eu(s),h={};if(ct(i,(d,_)=>{o=!1,h[d]=uE(qe(t,d),Je(_),s.serverSyncTree_,c)}),o)ut("update() called with empty data.  Don't do anything."),rh(s,r,"ok",void 0);else{const d=ed(s),_=f1(s.serverSyncTree_,t,h,d);$o(s.eventQueue_,_),s.server_.merge(t.toString(),i,(g,v)=>{const E=g==="ok";E||mt("update at "+t+" failed: "+g);const C=pi(s.serverSyncTree_,d,!E),x=C.length>0?ia(s,t):t;Qt(s.eventQueue_,x,C),rh(s,r,g,v)}),ct(i,g=>{const v=nd(s,qe(t,g));ia(s,v)}),Qt(s.eventQueue_,t,[])}}function K1(s){Yr(s,"onDisconnectEvents");const t=eu(s),i=Mo();Jf(s.onDisconnect_,pe(),(o,c)=>{const h=uE(o,c,s.serverSyncTree_,t);jy(i,o,h)});let r=[];Jf(i,pe(),(o,c)=>{r=r.concat(jr(s.serverSyncTree_,o,c));const h=nd(s,o);ia(s,h)}),s.onDisconnect_=Mo(),Qt(s.eventQueue_,pe(),r)}function X1(s,t,i){let r;se(t._path)===".info"?r=sh(s.infoSyncTree_,t,i):r=sh(s.serverSyncTree_,t,i),gE(s.eventQueue_,t._path,r)}function dv(s,t,i){let r;se(t._path)===".info"?r=Bo(s.infoSyncTree_,t,i):r=Bo(s.serverSyncTree_,t,i),gE(s.eventQueue_,t._path,r)}function W1(s){s.persistentConnection_&&s.persistentConnection_.interrupt(P1)}function Yr(s,...t){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),ut(i,...t)}function rh(s,t,i,r){t&&oa(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;r&&(c+=": "+r);const h=new Error(c);h.code=o,t(h)}})}function vE(s,t,i){return jh(s.serverSyncTree_,t,i)||X.EMPTY_NODE}function td(s,t=s.transactionQueueTree_){if(t||tu(s,t),ca(t)){const i=EE(s,t);L(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&Z1(s,Gr(t),i)}else hE(t)&&Zo(t,i=>{td(s,i)})}function Z1(s,t,i){const r=i.map(g=>g.currentWriteId),o=vE(s,t,r);let c=o;const h=o.hash();for(let g=0;g<i.length;g++){const v=i[g];L(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=gt(t,v.path);c=c.updateChild(E,v.currentOutputSnapshotRaw)}const d=c.val(!0),_=t;s.server_.put(_.toString(),d,g=>{Yr(s,"transaction put response",{path:_.toString(),status:g});let v=[];if(g==="ok"){const E=[];for(let C=0;C<i.length;C++)i[C].status=2,v=v.concat(pi(s.serverSyncTree_,i[C].currentWriteId)),i[C].onComplete&&E.push(()=>i[C].onComplete(null,!0,i[C].currentOutputSnapshotResolved)),i[C].unwatcher();tu(s,Zh(s.transactionQueueTree_,t)),td(s,s.transactionQueueTree_),Qt(s.eventQueue_,t,v);for(let C=0;C<E.length;C++)oa(E[C])}else{if(g==="datastale")for(let E=0;E<i.length;E++)i[E].status===3?i[E].status=4:i[E].status=0;else{mt("transaction at "+_.toString()+" failed: "+g);for(let E=0;E<i.length;E++)i[E].status=4,i[E].abortReason=g}ia(s,t)}},h)}function ia(s,t){const i=yE(s,t),r=Gr(i),o=EE(s,i);return J1(s,o,r),r}function J1(s,t,i){if(t.length===0)return;const r=[];let o=[];const h=t.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<t.length;d++){const _=t[d],g=gt(i,_.path);let v=!1,E;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)v=!0,E=_.abortReason,o=o.concat(pi(s.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=B1)v=!0,E="maxretry",o=o.concat(pi(s.serverSyncTree_,_.currentWriteId,!0));else{const C=vE(s,_.path,h);_.currentInputSnapshot=C;const x=t[d].update(C.val());if(x!==void 0){Jo("transaction failed: Data returned ",x,_.path);let U=Je(x);typeof x=="object"&&x!=null&&dn(x,".priority")||(U=U.updatePriority(C.getPriority()));const W=_.currentWriteId,je=eu(s),xe=cE(U,C,je);_.currentOutputSnapshotRaw=U,_.currentOutputSnapshotResolved=xe,_.currentWriteId=ed(s),h.splice(h.indexOf(W),1),o=o.concat(sE(s.serverSyncTree_,_.path,xe,_.currentWriteId,_.applyLocally)),o=o.concat(pi(s.serverSyncTree_,W,!0))}else v=!0,E="nodata",o=o.concat(pi(s.serverSyncTree_,_.currentWriteId,!0))}Qt(s.eventQueue_,i,o),o=[],v&&(t[d].status=2,function(C){setTimeout(C,Math.floor(0))}(t[d].unwatcher),t[d].onComplete&&(E==="nodata"?r.push(()=>t[d].onComplete(null,!1,t[d].currentInputSnapshot)):r.push(()=>t[d].onComplete(new Error(E),!1,null))))}tu(s,s.transactionQueueTree_);for(let d=0;d<r.length;d++)oa(r[d]);td(s,s.transactionQueueTree_)}function yE(s,t){let i,r=s.transactionQueueTree_;for(i=se(t);i!==null&&ca(r)===void 0;)r=Zh(r,i),t=ke(t),i=se(t);return r}function EE(s,t){const i=[];return SE(s,t,i),i.sort((r,o)=>r.order-o.order),i}function SE(s,t,i){const r=ca(t);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);Zo(t,o=>{SE(s,o,i)})}function tu(s,t){const i=ca(t);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,fE(t,i.length>0?i:void 0)}Zo(t,r=>{tu(s,r)})}function nd(s,t){const i=Gr(yE(s,t)),r=Zh(s.transactionQueueTree_,t);return A1(r,o=>{Hf(s,o)}),Hf(s,r),dE(r,o=>{Hf(s,o)}),i}function Hf(s,t){const i=ca(t);if(i){const r=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(L(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(L(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(pi(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?fE(t,void 0):i.length=c+1,Qt(s.eventQueue_,Gr(t),o);for(let h=0;h<r.length;h++)oa(r[h])}}/**
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
 */function $1(s){let t="";const i=s.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function eN(s){const t={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):mt(`Invalid query segment '${i}' in query '${s}'`)}return t}const pv=function(s,t){const i=tN(s),r=i.namespace;i.domain==="firebase.com"&&Ln(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||ow();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new wy(i.host,i.secure,r,o,t,"",r!==i.subdomain),path:new Re(i.pathString)}},tN=function(s){let t="",i="",r="",o="",c="",h=!0,d="https",_=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(d=s.substring(0,g-1),s=s.substring(g+2));let v=s.indexOf("/");v===-1&&(v=s.length);let E=s.indexOf("?");E===-1&&(E=s.length),t=s.substring(0,Math.min(v,E)),v<E&&(o=$1(s.substring(v,E)));const C=eN(s.substring(Math.min(s.length,E)));g=t.indexOf(":"),g>=0?(h=d==="https"||d==="wss",_=parseInt(t.substring(g+1),10)):g=t.length;const x=t.slice(0,g);if(x.toLowerCase()==="localhost")i="localhost";else if(x.split(".").length<=2)i=x;else{const U=t.indexOf(".");r=t.substring(0,U).toLowerCase(),i=t.substring(U+1),c=r}"ns"in C&&(c=C.ns)}return{host:t,port:_,domain:i,subdomain:r,secure:h,scheme:d,pathString:o,namespace:c}};/**
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
 */class nN{constructor(t,i,r,o){this.eventType=t,this.eventRegistration=i,this.snapshot=r,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class iN{constructor(t,i,r){this.eventRegistration=t,this.error=i,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class TE{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class id{constructor(t,i,r,o){this._repo=t,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return oe(this._path)?null:Dh(this._path)}get ref(){return new zn(this._repo,this._path)}get _queryIdentifier(){const t=$m(this._queryParams),i=wh(t);return i==="{}"?"default":i}get _queryObject(){return $m(this._queryParams)}isEqual(t){if(t=yt(t),!(t instanceof id))return!1;const i=this._repo===t._repo,r=Ih(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yw(this._path)}}class zn extends id{constructor(t,i){super(t,i,new Uh,!1)}get parent(){const t=Uy(this._path);return t===null?null:new zn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class kr{constructor(t,i,r){this._node=t,this.ref=i,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Re(t),r=lh(this.ref,t);return new kr(this._node.getChild(i),r,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>t(new kr(o,lh(this.ref,r),Ve)))}hasChild(t){const i=new Re(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zt(s,t){return s=yt(s),s._checkNotDeleted("ref"),t!==void 0?lh(s._root,t):s._root}function lh(s,t){return s=yt(s),se(s._path)===null?x1("child","path",t):_E("child","path",t),new zn(s._repo,qe(s._path,t))}function js(s,t){s=yt(s),U1("set",s._path),I1("set",t,s._path);const i=new xr;return F1(s._repo,s._path,t,null,i.wrapCallback(()=>{})),i.promise}function sN(s,t){k1("update",t,s._path);const i=new xr;return Q1(s._repo,s._path,t,i.wrapCallback(()=>{})),i.promise}function co(s){s=yt(s);const t=new TE(()=>{}),i=new nu(t);return Y1(s._repo,s,i).then(r=>new kr(r,new zn(s._repo,s._path),s._queryParams.getIndex()))}class nu{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const r=i._queryParams.getIndex();return new nN("value",this,new kr(t.snapshotNode,new zn(i._repo,i._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new iN(this,t,i):null}matches(t){return t instanceof nu?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function aN(s,t,i,r,o){let c;if(typeof r=="object"&&(c=void 0,o=r),typeof r=="function"&&(c=r),o&&o.onlyOnce){const _=i,g=(v,E)=>{dv(s._repo,s,d),_(v,E)};g.userCallback=i.userCallback,g.context=i.context,i=g}const h=new TE(i,c||void 0),d=new nu(h);return X1(s._repo,s,d),()=>dv(s._repo,s,d)}function _v(s,t,i,r){return aN(s,"value",t,i,r)}i1(zn);o1(zn);/**
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
 */const rN="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let lN=!1;function oN(s,t,i,r){s.repoInfo_=new wy(t,!1,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),r&&(s.authTokenProvider_=r)}function uN(s,t,i,r,o){let c=r||s.options.databaseURL;c===void 0&&(s.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ut("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=pv(c,o),d=h.repoInfo,_;typeof process<"u"&&Um&&(_=Um[rN]),_?(c=`http://${_}?ns=${d.namespace}`,h=pv(c,o),d=h.repoInfo):h.repoInfo.secure;const g=new yw(s.name,s.options,t);L1("Invalid Firebase Database URL",h),oe(h.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const v=fN(d,s,g,new vw(s,i));return new hN(v,s)}function cN(s,t){const i=oh[t];(!i||i[s.key]!==s)&&Ln(`Database ${t}(${s.repoInfo_}) has already been deleted.`),W1(s),delete i[s.key]}function fN(s,t,i,r){let o=oh[t.name];o||(o={},oh[t.name]=o);let c=o[s.toURLString()];return c&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new q1(s,lN,i,r),o[s.toURLString()]=c,c}class hN{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(V1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zn(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Ln("Cannot call "+t+" on a deleted database.")}}function dN(s=Ov(),t){const i=_h(s,"database").getImmediate({identifier:t});if(!i._instanceStarted){const r=_T("database");r&&pN(i,...r)}return i}function pN(s,t,i,r={}){s=yt(s),s._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Qi(r,c.repoInfo_.emulatorOptions))return;Ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)r.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new mo(mo.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:gT(r.mockUserToken,s.app.options.projectId);h=new mo(d)}oN(c,o,r,h)}/**
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
 */function _N(s){nw(ra),Js(new Ki("database",(t,{instanceIdentifier:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return uN(r,o,c,i)},"PUBLIC").setMultipleInstances(!0)),mi(Lm,zm,s),mi(Lm,zm,"esm2017")}kn.prototype.simpleListen=function(s,t){this.sendRequest("q",{p:s},t)};kn.prototype.echo=function(s,t){this.sendRequest("echo",{d:s},t)};_N();var gN="firebase",mN="11.6.0";/**
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
 */mi(gN,mN,"app");const vN={apiKey:"AIzaSyDWMkL3P7OWlosSFXXRg8gvUQg6-7Y9uu8",authDomain:"esp32door-control.firebaseapp.com",databaseURL:"https://esp32door-control-default-rtdb.firebaseio.com/",projectId:"esp32door-control",storageBucket:"esp32door-control.appspot.com",messagingSenderId:"605127991992",appId:"1:605127991992:web:4d0dccf6ae2d874603ca4d",measurementId:"G-91SJ3GLZ0Z"},bE=Nv(vN),fo=ew(bE),Jt=dN(bE),yN=15,EN=()=>Array.from({length:8},()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random()*62))).join("");function SN(){const[s,t]=Oe.useState(null),[i,r]=Oe.useState([]),[o,c]=Oe.useState({}),[h,d]=Oe.useState({}),[_,g]=Oe.useState(!1),[v,E]=Oe.useState(!1),[C,x]=Oe.useState(null),U=Oe.useRef(null),G=Oe.useCallback(()=>{U.current&&(clearTimeout(U.current),U.current=null),x(null)},[]),W=Oe.useCallback(te=>{U.current&&clearTimeout(U.current),x(te),te&&(U.current=setTimeout(()=>{x(null),U.current=null},4e3))},[]),je=async(te,ue)=>{G();try{(await HC(fo,te,ue)).user&&console.log("User registered and initial tokens set.")}catch($){$.code==="auth/email-already-in-use"?W("Email already registered"):$.code==="auth/weak-password"?W("6 characters or more"):$.code==="auth/invalid-email"?W("Invalid email"):W("Registration failed. Please try again.")}},xe=async(te,ue)=>{G();try{await PC(fo,te,ue)}catch($){["auth/user-not-found","auth/invalid-credential","auth/wrong-password","auth/invalid-email"].includes($.code),W("Wrong email or password")}},Te=async()=>{G(),await jC(fo)},Qe=async te=>{const ue=`tokens/${te}/buttonStatus`,$=await co(Zt(Jt,ue)),ye=($.exists()?$.val():"closed")==="open"?"closed":"open";await js(Zt(Jt,ue),ye)},P=async(te,ue)=>{if(!s||!i.includes(te))return;const $=`tokens/${te}/buttonName`;try{await js(Zt(Jt,$),ue||null)}catch(ve){console.error("Error updating button name:",ve),W("Failed to update name.")}},me=async(te,ue)=>{await js(Zt(Jt,`tokens/${te}/authorizedUsers/${ue}`),!0);const $=Zt(Jt,`users/${ue}/deviceTokens`),ve=await co($),ye=ve.exists()&&Array.isArray(ve.val())?ve.val():[];ye.includes(te)||await js($,[...ye,te])},De=async(te,ue)=>{await js(Zt(Jt,`tokens/${te}/authorizedUsers/${ue}`),null);const $=Zt(Jt,`users/${ue}/deviceTokens`),ve=await co($),ye=ve.exists()&&Array.isArray(ve.val())?ve.val():[];ye.includes(te)&&await js($,ye.filter(ze=>ze!==te))},Ge=Oe.useCallback(async te=>{const ue=Zt(Jt,`users/${te}/deviceTokens`),$=await co(ue);let ve=[];if($.exists()&&Array.isArray($.val()))ve=$.val();else{const ye=Array.from({length:yN},EN);ve=ye;const ze={[`/users/${te}/deviceTokens`]:ve};ye.forEach(O=>{ze[`/tokens/${O}`]={owner:te,authorizedUsers:{[te]:!0},buttonStatus:"hello"}}),await sN(Zt(Jt),ze)}r(ve),g(!1),ft(ve)},[]),ft=te=>{const ue={},$={};if(c({}),d({}),g(!1),te.length===0){g(!0);return}const ve=()=>{Object.keys(ue).length===te.length&&Object.keys($).length===te.length&&g(!0)};te.forEach(ye=>{const ze=Zt(Jt,`tokens/${ye}/buttonStatus`);_v(ze,z=>{let j=z.val();typeof j!="string"&&(j="closed"),c(_e=>({..._e,[ye]:j})),ue[ye]=!0,ve()},z=>{console.error(`Error listening to status for ${ye}:`,z),ue[ye]=!0,ve()});const O=Zt(Jt,`tokens/${ye}/buttonName`);_v(O,z=>{const j=z.val()||null;d(_e=>({..._e,[ye]:j})),$[ye]=!0,ve()},z=>{console.error(`Error listening to name for ${ye}:`,z),$[ye]=!0,ve()})})};return Oe.useEffect(()=>VC(fo,ue=>{t(ue),ue?Ge(ue.uid):(r([]),c({}),d({}),g(!1),G()),E(!0)}),[Ge,G]),Oe.useEffect(()=>()=>{U.current&&clearTimeout(U.current)},[]),{user:s,tokens:i,buttonState:o,buttonNames:h,isButtonDataLoaded:_,authChecked:v,error:C,register:je,login:xe,logout:Te,toggleButton:Qe,updateButtonName:P,shareToken:me,revokeShare:De,clearError:G}}window.navigator.standalone===!0&&document.documentElement.classList.add("ios-standalone");function TN(){const{user:s,token:t,tokens:i,buttonState:r,isButtonDataLoaded:o,buttonNames:c,updateButtonName:h,error:d,register:_,login:g,logout:v,toggleButton:E,clearError:C}=SN(),[x,U]=Oe.useState(!1);return Oe.useEffect(()=>{if(d){U(!0);const G=setTimeout(()=>U(!1),3500);return()=>clearTimeout(G)}else U(!1)},[d]),fe.jsxs("div",{id:"appContainer",className:"fade-in background",children:[d&&fe.jsx("div",{className:`error-banner ${x?"visible":"fade-out"}`,children:d}),fe.jsxs("div",{className:s?"control-panel-screen":"container",id:"containerEl",children:[fe.jsx("h1",{className:"title",children:s?"":"Welcome to the future"}),s?fe.jsx(aT,{token:t,tokens:i,buttonState:r,buttonNames:c,isButtonDataLoaded:o,onToggle:E,onUpdateName:h,onLogout:v}):fe.jsx(sT,{onLogin:g,onRegister:_,error:d,setError:C})]})]})}window.navigator.standalone===!0&&document.documentElement.classList.add("ios-standalone");iT.createRoot(document.getElementById("root")).render(fe.jsx(XS.StrictMode,{children:fe.jsx(TN,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/STARR/service-worker.js").then(s=>{console.log("✅ Service Worker registered with scope:",s.scope),s.onupdatefound=()=>{const t=s.installing;t&&(t.onstatechange=()=>{t.state==="installed"&&navigator.serviceWorker.controller&&confirm("🚀 New version available! Reload now?")&&window.location.reload()})}}).catch(s=>{console.error("❌ Service Worker registration failed:",s)})});
