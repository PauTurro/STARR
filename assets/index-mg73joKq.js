(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function gv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yf={exports:{}},oa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function FS(){if(Wg)return oa;Wg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:h,ref:o!==void 0?o:null,props:c}}return oa.Fragment=t,oa.jsx=i,oa.jsxs=i,oa}var Zg;function QS(){return Zg||(Zg=1,yf.exports=FS()),yf.exports}var Ee=QS(),Ef={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function KS(){if(Jg)return $;Jg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function C(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,G={};function W(S,x,P){this.props=S,this.context=x,this.refs=G,this.updater=P||M}W.prototype.isReactComponent={},W.prototype.setState=function(S,x){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,x,"setState")},W.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Ue(){}Ue.prototype=W.prototype;function Ye(S,x,P){this.props=S,this.context=x,this.refs=G,this.updater=P||M}var Re=Ye.prototype=new Ue;Re.constructor=Ye,U(Re,W.prototype),Re.isPureReactComponent=!0;var Ze=Array.isArray,re={H:null,A:null,T:null,S:null,V:null},Fe=Object.prototype.hasOwnProperty;function Je(S,x,P,H,j,fe){return P=fe.ref,{$$typeof:s,type:S,key:x,ref:P!==void 0?P:null,props:fe}}function $e(S,x){return Je(S.type,x,void 0,void 0,void 0,S.props)}function ft(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function ee(S){var x={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(P){return x[P]})}var ue=/\/+/g;function J(S,x){return typeof S=="object"&&S!==null&&S.key!=null?ee(""+S.key):x.toString(36)}function ge(){}function me(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ge,ge):(S.status="pending",S.then(function(x){S.status==="pending"&&(S.status="fulfilled",S.value=x)},function(x){S.status==="pending"&&(S.status="rejected",S.reason=x)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function ke(S,x,P,H,j){var fe=typeof S;(fe==="undefined"||fe==="boolean")&&(S=null);var Z=!1;if(S===null)Z=!0;else switch(fe){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(S.$$typeof){case s:case t:Z=!0;break;case v:return Z=S._init,ke(Z(S._payload),x,P,H,j)}}if(Z)return j=j(S),Z=H===""?"."+J(S,0):H,Ze(j)?(P="",Z!=null&&(P=Z.replace(ue,"$&/")+"/"),ke(j,x,P,"",function(Hn){return Hn})):j!=null&&(ft(j)&&(j=$e(j,P+(j.key==null||S&&S.key===j.key?"":(""+j.key).replace(ue,"$&/")+"/")+Z)),x.push(j)),1;Z=0;var wt=H===""?".":H+":";if(Ze(S))for(var Ie=0;Ie<S.length;Ie++)H=S[Ie],fe=wt+J(H,Ie),Z+=ke(H,x,P,fe,j);else if(Ie=C(S),typeof Ie=="function")for(S=Ie.call(S),Ie=0;!(H=S.next()).done;)H=H.value,fe=wt+J(H,Ie++),Z+=ke(H,x,P,fe,j);else if(fe==="object"){if(typeof S.then=="function")return ke(me(S),x,P,H,j);throw x=String(S),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return Z}function O(S,x,P){if(S==null)return S;var H=[],j=0;return ke(S,H,"","",function(fe){return x.call(P,fe,j++)}),H}function z(S){if(S._status===-1){var x=S._result;x=x(),x.then(function(P){(S._status===0||S._status===-1)&&(S._status=1,S._result=P)},function(P){(S._status===0||S._status===-1)&&(S._status=2,S._result=P)}),S._status===-1&&(S._status=0,S._result=x)}if(S._status===1)return S._result.default;throw S._result}var V=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function pe(){}return $.Children={map:O,forEach:function(S,x,P){O(S,function(){x.apply(this,arguments)},P)},count:function(S){var x=0;return O(S,function(){x++}),x},toArray:function(S){return O(S,function(x){return x})||[]},only:function(S){if(!ft(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},$.Component=W,$.Fragment=i,$.Profiler=o,$.PureComponent=Ye,$.StrictMode=a,$.Suspense=_,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,$.__COMPILER_RUNTIME={__proto__:null,c:function(S){return re.H.useMemoCache(S)}},$.cache=function(S){return function(){return S.apply(null,arguments)}},$.cloneElement=function(S,x,P){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var H=U({},S.props),j=S.key,fe=void 0;if(x!=null)for(Z in x.ref!==void 0&&(fe=void 0),x.key!==void 0&&(j=""+x.key),x)!Fe.call(x,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&x.ref===void 0||(H[Z]=x[Z]);var Z=arguments.length-2;if(Z===1)H.children=P;else if(1<Z){for(var wt=Array(Z),Ie=0;Ie<Z;Ie++)wt[Ie]=arguments[Ie+2];H.children=wt}return Je(S.type,j,void 0,void 0,fe,H)},$.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},$.createElement=function(S,x,P){var H,j={},fe=null;if(x!=null)for(H in x.key!==void 0&&(fe=""+x.key),x)Fe.call(x,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(j[H]=x[H]);var Z=arguments.length-2;if(Z===1)j.children=P;else if(1<Z){for(var wt=Array(Z),Ie=0;Ie<Z;Ie++)wt[Ie]=arguments[Ie+2];j.children=wt}if(S&&S.defaultProps)for(H in Z=S.defaultProps,Z)j[H]===void 0&&(j[H]=Z[H]);return Je(S,fe,void 0,void 0,null,j)},$.createRef=function(){return{current:null}},$.forwardRef=function(S){return{$$typeof:d,render:S}},$.isValidElement=ft,$.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:z}},$.memo=function(S,x){return{$$typeof:g,type:S,compare:x===void 0?null:x}},$.startTransition=function(S){var x=re.T,P={};re.T=P;try{var H=S(),j=re.S;j!==null&&j(P,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(pe,V)}catch(fe){V(fe)}finally{re.T=x}},$.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},$.use=function(S){return re.H.use(S)},$.useActionState=function(S,x,P){return re.H.useActionState(S,x,P)},$.useCallback=function(S,x){return re.H.useCallback(S,x)},$.useContext=function(S){return re.H.useContext(S)},$.useDebugValue=function(){},$.useDeferredValue=function(S,x){return re.H.useDeferredValue(S,x)},$.useEffect=function(S,x,P){var H=re.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(S,x)},$.useId=function(){return re.H.useId()},$.useImperativeHandle=function(S,x,P){return re.H.useImperativeHandle(S,x,P)},$.useInsertionEffect=function(S,x){return re.H.useInsertionEffect(S,x)},$.useLayoutEffect=function(S,x){return re.H.useLayoutEffect(S,x)},$.useMemo=function(S,x){return re.H.useMemo(S,x)},$.useOptimistic=function(S,x){return re.H.useOptimistic(S,x)},$.useReducer=function(S,x,P){return re.H.useReducer(S,x,P)},$.useRef=function(S){return re.H.useRef(S)},$.useState=function(S){return re.H.useState(S)},$.useSyncExternalStore=function(S,x,P){return re.H.useSyncExternalStore(S,x,P)},$.useTransition=function(){return re.H.useTransition()},$.version="19.1.0",$}var $g;function uh(){return $g||($g=1,Ef.exports=KS()),Ef.exports}var je=uh();const XS=gv(je);var Sf={exports:{}},ua={},Tf={exports:{}},bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function WS(){return em||(em=1,function(s){function t(O,z){var V=O.length;O.push(z);e:for(;0<V;){var pe=V-1>>>1,S=O[pe];if(0<o(S,z))O[pe]=z,O[V]=S,V=pe;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var z=O[0],V=O.pop();if(V!==z){O[0]=V;e:for(var pe=0,S=O.length,x=S>>>1;pe<x;){var P=2*(pe+1)-1,H=O[P],j=P+1,fe=O[j];if(0>o(H,V))j<S&&0>o(fe,H)?(O[pe]=fe,O[j]=V,pe=j):(O[pe]=H,O[P]=V,pe=P);else if(j<S&&0>o(fe,V))O[pe]=fe,O[j]=V,pe=j;else break e}}return z}function o(O,z){var V=O.sortIndex-z.sortIndex;return V!==0?V:O.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var _=[],g=[],v=1,E=null,C=3,M=!1,U=!1,G=!1,W=!1,Ue=typeof setTimeout=="function"?setTimeout:null,Ye=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function Ze(O){for(var z=i(g);z!==null;){if(z.callback===null)a(g);else if(z.startTime<=O)a(g),z.sortIndex=z.expirationTime,t(_,z);else break;z=i(g)}}function re(O){if(G=!1,Ze(O),!U)if(i(_)!==null)U=!0,Fe||(Fe=!0,J());else{var z=i(g);z!==null&&ke(re,z.startTime-O)}}var Fe=!1,Je=-1,$e=5,ft=-1;function ee(){return W?!0:!(s.unstable_now()-ft<$e)}function ue(){if(W=!1,Fe){var O=s.unstable_now();ft=O;var z=!0;try{e:{U=!1,G&&(G=!1,Ye(Je),Je=-1),M=!0;var V=C;try{t:{for(Ze(O),E=i(_);E!==null&&!(E.expirationTime>O&&ee());){var pe=E.callback;if(typeof pe=="function"){E.callback=null,C=E.priorityLevel;var S=pe(E.expirationTime<=O);if(O=s.unstable_now(),typeof S=="function"){E.callback=S,Ze(O),z=!0;break t}E===i(_)&&a(_),Ze(O)}else a(_);E=i(_)}if(E!==null)z=!0;else{var x=i(g);x!==null&&ke(re,x.startTime-O),z=!1}}break e}finally{E=null,C=V,M=!1}z=void 0}}finally{z?J():Fe=!1}}}var J;if(typeof Re=="function")J=function(){Re(ue)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,me=ge.port2;ge.port1.onmessage=ue,J=function(){me.postMessage(null)}}else J=function(){Ue(ue,0)};function ke(O,z){Je=Ue(function(){O(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_next=function(O){switch(C){case 1:case 2:case 3:var z=3;break;default:z=C}var V=C;C=z;try{return O()}finally{C=V}},s.unstable_requestPaint=function(){W=!0},s.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=C;C=O;try{return z()}finally{C=V}},s.unstable_scheduleCallback=function(O,z,V){var pe=s.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?pe+V:pe):V=pe,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=V+S,O={id:v++,callback:z,priorityLevel:O,startTime:V,expirationTime:S,sortIndex:-1},V>pe?(O.sortIndex=V,t(g,O),i(_)===null&&O===i(g)&&(G?(Ye(Je),Je=-1):G=!0,ke(re,V-pe))):(O.sortIndex=S,t(_,O),U||M||(U=!0,Fe||(Fe=!0,J()))),O},s.unstable_shouldYield=ee,s.unstable_wrapCallback=function(O){var z=C;return function(){var V=C;C=z;try{return O.apply(this,arguments)}finally{C=V}}}}(bf)),bf}var tm;function ZS(){return tm||(tm=1,Tf.exports=WS()),Tf.exports}var Cf={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function JS(){if(nm)return pt;nm=1;var s=uh();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(_,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:_,containerInfo:g,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,pt.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(_,g,null,v)},pt.flushSync=function(_){var g=h.T,v=a.p;try{if(h.T=null,a.p=2,_)return _()}finally{h.T=g,a.p=v,a.d.f()}},pt.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(_,g))},pt.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},pt.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,M=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?a.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:C,fetchPriority:M}):v==="script"&&a.d.X(_,{crossOrigin:E,integrity:C,fetchPriority:M,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},pt.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);a.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(_)},pt.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin);a.d.L(_,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},pt.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=d(g.as,g.crossOrigin);a.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(_)},pt.requestFormReset=function(_){a.d.r(_)},pt.unstable_batchedUpdates=function(_,g){return _(g)},pt.useFormState=function(_,g,v){return h.H.useFormState(_,g,v)},pt.useFormStatus=function(){return h.H.useHostTransitionStatus()},pt.version="19.1.0",pt}var im;function $S(){if(im)return Cf.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Cf.exports=JS(),Cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function eT(){if(sm)return ua;sm=1;var s=ZS(),t=uh(),i=$S();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(a(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,l=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){r=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return d(u),e;if(f===l)return d(u),n;f=f.sibling}throw Error(a(188))}if(r.return!==l.return)r=u,l=f;else{for(var p=!1,m=u.child;m;){if(m===r){p=!0,r=u,l=f;break}if(m===l){p=!0,l=u,r=f;break}m=m.sibling}if(!p){for(m=f.child;m;){if(m===r){p=!0,r=f,l=u;break}if(m===l){p=!0,l=f,r=u;break}m=m.sibling}if(!p)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),Ue=Symbol.for("react.provider"),Ye=Symbol.for("react.consumer"),Re=Symbol.for("react.context"),Ze=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),Je=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),ft=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case W:return"Profiler";case G:return"StrictMode";case re:return"Suspense";case Fe:return"SuspenseList";case ft:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case Re:return(e.displayName||"Context")+".Provider";case Ye:return(e._context.displayName||"Context")+".Consumer";case Ze:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Je:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case $e:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var ke=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},pe=[],S=-1;function x(e){return{current:e}}function P(e){0>S||(e.current=pe[S],pe[S]=null,S--)}function H(e,n){S++,pe[S]=e.current,e.current=n}var j=x(null),fe=x(null),Z=x(null),wt=x(null);function Ie(e,n){switch(H(Z,n),H(fe,e),H(j,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Cg(n),e=Ag(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(j),H(j,e)}function Hn(){P(j),P(fe),P(Z)}function iu(e){e.memoizedState!==null&&H(wt,e);var n=j.current,r=Ag(n,e.type);n!==r&&(H(fe,e),H(j,r))}function Fa(e){fe.current===e&&(P(j),P(fe)),wt.current===e&&(P(wt),ia._currentValue=V)}var su=Object.prototype.hasOwnProperty,ru=s.unstable_scheduleCallback,au=s.unstable_cancelCallback,CE=s.unstable_shouldYield,AE=s.unstable_requestPaint,rn=s.unstable_now,wE=s.unstable_getCurrentPriorityLevel,sd=s.unstable_ImmediatePriority,rd=s.unstable_UserBlockingPriority,Qa=s.unstable_NormalPriority,RE=s.unstable_LowPriority,ad=s.unstable_IdlePriority,NE=s.log,OE=s.unstable_setDisableYieldValue,fr=null,Rt=null;function Pn(e){if(typeof NE=="function"&&OE(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(fr,e)}catch{}}var Nt=Math.clz32?Math.clz32:ME,DE=Math.log,IE=Math.LN2;function ME(e){return e>>>=0,e===0?32:31-(DE(e)/IE|0)|0}var Ka=256,Xa=4194304;function wi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wa(e,n,r){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~f,l!==0?u=wi(l):(p&=m,p!==0?u=wi(p):r||(r=m&~e,r!==0&&(u=wi(r))))):(m=l&~f,m!==0?u=wi(m):p!==0?u=wi(p):r||(r=l&~e,r!==0&&(u=wi(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function hr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function kE(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(){var e=Ka;return Ka<<=1,(Ka&4194048)===0&&(Ka=256),e}function od(){var e=Xa;return Xa<<=1,(Xa&62914560)===0&&(Xa=4194304),e}function lu(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function dr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xE(e,n,r,l,u,f){var p=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var m=e.entanglements,y=e.expirationTimes,w=e.hiddenUpdates;for(r=p&~r;0<r;){var D=31-Nt(r),k=1<<D;m[D]=0,y[D]=-1;var R=w[D];if(R!==null)for(w[D]=null,D=0;D<R.length;D++){var N=R[D];N!==null&&(N.lane&=-536870913)}r&=~k}l!==0&&ud(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(p&~n))}function ud(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Nt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|r&4194090}function cd(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-Nt(r),u=1<<l;u&n|e[l]&n&&(e[l]|=n),r&=~u}}function ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function uu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fd(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function UE(e,n){var r=z.p;try{return z.p=e,n()}finally{z.p=r}}var Bn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Bn,Et="__reactProps$"+Bn,is="__reactContainer$"+Bn,cu="__reactEvents$"+Bn,LE="__reactListeners$"+Bn,zE="__reactHandles$"+Bn,hd="__reactResources$"+Bn,pr="__reactMarker$"+Bn;function fu(e){delete e[ht],delete e[Et],delete e[cu],delete e[LE],delete e[zE]}function ss(e){var n=e[ht];if(n)return n;for(var r=e.parentNode;r;){if(n=r[is]||r[ht]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Og(e);e!==null;){if(r=e[ht])return r;e=Og(e)}return n}e=r,r=e.parentNode}return null}function rs(e){if(e=e[ht]||e[is]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function _r(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function as(e){var n=e[hd];return n||(n=e[hd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(e){e[pr]=!0}var dd=new Set,pd={};function Ri(e,n){ls(e,n),ls(e+"Capture",n)}function ls(e,n){for(pd[e]=n,e=0;e<n.length;e++)dd.add(n[e])}var HE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_d={},gd={};function PE(e){return su.call(gd,e)?!0:su.call(_d,e)?!1:HE.test(e)?gd[e]=!0:(_d[e]=!0,!1)}function Za(e,n,r){if(PE(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Ja(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function pn(e,n,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+l)}}var hu,md;function os(e){if(hu===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);hu=n&&n[1]||"",md=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+e+md}var du=!1;function pu(e,n){if(!e||du)return"";du=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(N){var R=N}Reflect.construct(e,[],k)}else{try{k.call()}catch(N){R=N}e.call(k.prototype)}}else{try{throw Error()}catch(N){R=N}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),p=f[0],m=f[1];if(p&&m){var y=p.split(`
`),w=m.split(`
`);for(u=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(l===y.length||u===w.length)for(l=y.length-1,u=w.length-1;1<=l&&0<=u&&y[l]!==w[u];)u--;for(;1<=l&&0<=u;l--,u--)if(y[l]!==w[u]){if(l!==1||u!==1)do if(l--,u--,0>u||y[l]!==w[u]){var D=`
`+y[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=u);break}}}finally{du=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?os(r):""}function BE(e){switch(e.tag){case 26:case 27:case 5:return os(e.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 15:return pu(e.type,!1);case 11:return pu(e.type.render,!1);case 1:return pu(e.type,!0);case 31:return os("Activity");default:return""}}function vd(e){try{var n="";do n+=BE(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qE(e){var n=yd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(p){l=""+p,f.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $a(e){e._valueTracker||(e._valueTracker=qE(e))}function Ed(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=yd(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var VE=/[\n"\\]/g;function zt(e){return e.replace(VE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function _u(e,n,r,l,u,f,p,m){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Lt(n)):e.value!==""+Lt(n)&&(e.value=""+Lt(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?gu(e,p,Lt(n)):r!=null?gu(e,p,Lt(r)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Lt(m):e.removeAttribute("name")}function Sd(e,n,r,l,u,f,p,m){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Lt(r):"",n=n!=null?""+Lt(n):r,m||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function gu(e,n,r){n==="number"&&el(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function us(e,n,r,l){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Lt(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Td(e,n,r){if(n!=null&&(n=""+Lt(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Lt(r):""}function bd(e,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(ke(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=Lt(n),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l)}function cs(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var GE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cd(e,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,r):typeof r!="number"||r===0||GE.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Ad(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&r[u]!==l&&Cd(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&Cd(e,f,n[f])}function mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),YE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return YE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vu=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,hs=null;function wd(e){var n=rs(e);if(n&&(e=n.stateNode)){var r=e[Et]||null;e:switch(e=n.stateNode,n.type){case"input":if(_u(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+zt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var u=l[Et]||null;if(!u)throw Error(a(90));_u(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===e.form&&Ed(l)}break e;case"textarea":Td(e,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&us(e,!!r.multiple,n,!1)}}}var Eu=!1;function Rd(e,n,r){if(Eu)return e(n,r);Eu=!0;try{var l=e(n);return l}finally{if(Eu=!1,(fs!==null||hs!==null)&&(Bl(),fs&&(n=fs,e=hs,hs=fs=null,wd(n),e)))for(n=0;n<e.length;n++)wd(e[n])}}function gr(e,n){var r=e.stateNode;if(r===null)return null;var l=r[Et]||null;if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(_n)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){Su=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{Su=!1}var qn=null,Tu=null,nl=null;function Nd(){if(nl)return nl;var e,n=Tu,r=n.length,l,u="value"in qn?qn.value:qn.textContent,f=u.length;for(e=0;e<r&&n[e]===u[e];e++);var p=r-e;for(l=1;l<=p&&n[r-l]===u[f-l];l++);return nl=u.slice(e,1<l?1-l:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function Od(){return!1}function St(e){function n(r,l,u,f,p){this._reactName=r,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(f):f[m]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:Od,this.isPropagationStopped=Od,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=St(Ni),vr=v({},Ni,{view:0,detail:0}),FE=St(vr),bu,Cu,yr,al=v({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(bu=e.screenX-yr.screenX,Cu=e.screenY-yr.screenY):Cu=bu=0,yr=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),Dd=St(al),QE=v({},al,{dataTransfer:0}),KE=St(QE),XE=v({},vr,{relatedTarget:0}),Au=St(XE),WE=v({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),ZE=St(WE),JE=v({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$E=St(JE),e0=v({},Ni,{data:0}),Id=St(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=i0[e])?!!n[e]:!1}function wu(){return s0}var r0=v({},vr,{key:function(e){if(e.key){var n=t0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a0=St(r0),l0=v({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=St(l0),o0=v({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),u0=St(o0),c0=v({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=St(c0),h0=v({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=St(h0),p0=v({},Ni,{newState:0,oldState:0}),_0=St(p0),g0=[9,13,27,32],Ru=_n&&"CompositionEvent"in window,Er=null;_n&&"documentMode"in document&&(Er=document.documentMode);var m0=_n&&"TextEvent"in window&&!Er,kd=_n&&(!Ru||Er&&8<Er&&11>=Er),xd=" ",Ud=!1;function Ld(e,n){switch(e){case"keyup":return g0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function v0(e,n){switch(e){case"compositionend":return zd(n);case"keypress":return n.which!==32?null:(Ud=!0,xd);case"textInput":return e=n.data,e===xd&&Ud?null:e;default:return null}}function y0(e,n){if(ds)return e==="compositionend"||!Ru&&Ld(e,n)?(e=Nd(),nl=Tu=qn=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!E0[e.type]:n==="textarea"}function Pd(e,n,r,l){fs?hs?hs.push(l):hs=[l]:fs=l,n=Fl(n,"onChange"),0<n.length&&(r=new rl("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var Sr=null,Tr=null;function S0(e){yg(e,0)}function ll(e){var n=_r(e);if(Ed(n))return e}function Bd(e,n){if(e==="change")return n}var qd=!1;if(_n){var Nu;if(_n){var Ou="oninput"in document;if(!Ou){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Ou=typeof Vd.oninput=="function"}Nu=Ou}else Nu=!1;qd=Nu&&(!document.documentMode||9<document.documentMode)}function Gd(){Sr&&(Sr.detachEvent("onpropertychange",jd),Tr=Sr=null)}function jd(e){if(e.propertyName==="value"&&ll(Tr)){var n=[];Pd(n,Tr,e,yu(e)),Rd(S0,n)}}function T0(e,n,r){e==="focusin"?(Gd(),Sr=n,Tr=r,Sr.attachEvent("onpropertychange",jd)):e==="focusout"&&Gd()}function b0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Tr)}function C0(e,n){if(e==="click")return ll(n)}function A0(e,n){if(e==="input"||e==="change")return ll(n)}function w0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ot=typeof Object.is=="function"?Object.is:w0;function br(e,n){if(Ot(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var u=r[l];if(!su.call(n,u)||!Ot(e[u],n[u]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var r=Yd(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yd(r)}}function Qd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=el(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=el(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var R0=_n&&"documentMode"in document&&11>=document.documentMode,ps=null,Iu=null,Cr=null,Mu=!1;function Xd(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Mu||ps==null||ps!==el(l)||(l=ps,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Cr&&br(Cr,l)||(Cr=l,l=Fl(Iu,"onSelect"),0<l.length&&(n=new rl("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=ps)))}function Oi(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var _s={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionrun:Oi("Transition","TransitionRun"),transitionstart:Oi("Transition","TransitionStart"),transitioncancel:Oi("Transition","TransitionCancel"),transitionend:Oi("Transition","TransitionEnd")},ku={},Wd={};_n&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Di(e){if(ku[e])return ku[e];if(!_s[e])return e;var n=_s[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Wd)return ku[e]=n[r];return e}var Zd=Di("animationend"),Jd=Di("animationiteration"),$d=Di("animationstart"),N0=Di("transitionrun"),O0=Di("transitionstart"),D0=Di("transitioncancel"),ep=Di("transitionend"),tp=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Kt(e,n){tp.set(e,n),Ri(n,[e])}var np=new WeakMap;function Ht(e,n){if(typeof e=="object"&&e!==null){var r=np.get(e);return r!==void 0?r:(n={value:e,source:n,stack:vd(n)},np.set(e,n),n)}return{value:e,source:n,stack:vd(n)}}var Pt=[],gs=0,Uu=0;function ol(){for(var e=gs,n=Uu=gs=0;n<e;){var r=Pt[n];Pt[n++]=null;var l=Pt[n];Pt[n++]=null;var u=Pt[n];Pt[n++]=null;var f=Pt[n];if(Pt[n++]=null,l!==null&&u!==null){var p=l.pending;p===null?u.next=u:(u.next=p.next,p.next=u),l.pending=u}f!==0&&ip(r,u,f)}}function ul(e,n,r,l){Pt[gs++]=e,Pt[gs++]=n,Pt[gs++]=r,Pt[gs++]=l,Uu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lu(e,n,r,l){return ul(e,n,r,l),cl(e)}function ms(e,n){return ul(e,null,null,n),cl(e)}function ip(e,n,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var u=!1,f=e.return;f!==null;)f.childLanes|=r,l=f.alternate,l!==null&&(l.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Nt(r),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=r|536870912),f):null}function cl(e){if(50<Xr)throw Xr=0,Vc=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var vs={};function I0(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,n,r,l){return new I0(e,n,r,l)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gn(e,n){var r=e.alternate;return r===null?(r=Dt(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function sp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,r,l,u,f){var p=0;if(l=e,typeof e=="function")zu(e)&&(p=1);else if(typeof e=="string")p=kS(e,r,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ft:return e=Dt(31,r,n,u),e.elementType=ft,e.lanes=f,e;case U:return Ii(r.children,u,f,n);case G:p=8,u|=24;break;case W:return e=Dt(12,r,n,u|2),e.elementType=W,e.lanes=f,e;case re:return e=Dt(13,r,n,u),e.elementType=re,e.lanes=f,e;case Fe:return e=Dt(19,r,n,u),e.elementType=Fe,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ue:case Re:p=10;break e;case Ye:p=9;break e;case Ze:p=11;break e;case Je:p=14;break e;case $e:p=16,l=null;break e}p=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Dt(p,r,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Ii(e,n,r,l){return e=Dt(7,e,l,n),e.lanes=r,e}function Hu(e,n,r){return e=Dt(6,e,null,n),e.lanes=r,e}function Pu(e,n,r){return n=Dt(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ys=[],Es=0,hl=null,dl=0,Bt=[],qt=0,Mi=null,mn=1,vn="";function ki(e,n){ys[Es++]=dl,ys[Es++]=hl,hl=e,dl=n}function rp(e,n,r){Bt[qt++]=mn,Bt[qt++]=vn,Bt[qt++]=Mi,Mi=e;var l=mn;e=vn;var u=32-Nt(l)-1;l&=~(1<<u),r+=1;var f=32-Nt(n)+u;if(30<f){var p=u-u%5;f=(l&(1<<p)-1).toString(32),l>>=p,u-=p,mn=1<<32-Nt(n)+u|r<<u|l,vn=f+e}else mn=1<<f|r<<u|l,vn=e}function Bu(e){e.return!==null&&(ki(e,1),rp(e,1,0))}function qu(e){for(;e===hl;)hl=ys[--Es],ys[Es]=null,dl=ys[--Es],ys[Es]=null;for(;e===Mi;)Mi=Bt[--qt],Bt[qt]=null,vn=Bt[--qt],Bt[qt]=null,mn=Bt[--qt],Bt[qt]=null}var _t=null,Le=null,_e=!1,xi=null,an=!1,Vu=Error(a(519));function Ui(e){var n=Error(a(418,""));throw Rr(Ht(n,e)),Vu}function ap(e){var n=e.stateNode,r=e.type,l=e.memoizedProps;switch(n[ht]=e,n[Et]=l,r){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(r=0;r<Zr.length;r++)le(Zr[r],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":le("invalid",n),Sd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),$a(n);break;case"select":le("invalid",n);break;case"textarea":le("invalid",n),bd(n,l.value,l.defaultValue,l.children),$a(n)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||bg(n.textContent,r)?(l.popover!=null&&(le("beforetoggle",n),le("toggle",n)),l.onScroll!=null&&le("scroll",n),l.onScrollEnd!=null&&le("scrollend",n),l.onClick!=null&&(n.onclick=Ql),n=!0):n=!1,n||Ui(e)}function lp(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 13:an=!1;return;case 27:case 3:an=!0;return;default:_t=_t.return}}function Ar(e){if(e!==_t)return!1;if(!_e)return lp(e),_e=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||rf(e.type,e.memoizedProps)),r=!r),r&&Le&&Ui(e),lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){Le=Wt(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}Le=null}}else n===27?(n=Le,ii(e.type)?(e=uf,uf=null,Le=e):Le=n):Le=_t?Wt(e.stateNode.nextSibling):null;return!0}function wr(){Le=_t=null,_e=!1}function op(){var e=xi;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),xi=null),e}function Rr(e){xi===null?xi=[e]:xi.push(e)}var Gu=x(null),Li=null,yn=null;function Vn(e,n,r){H(Gu,n._currentValue),n._currentValue=r}function En(e){e._currentValue=Gu.current,P(Gu)}function ju(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function Yu(e,n,r,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var p=u.child;f=f.firstContext;e:for(;f!==null;){var m=f;f=u;for(var y=0;y<n.length;y++)if(m.context===n[y]){f.lanes|=r,m=f.alternate,m!==null&&(m.lanes|=r),ju(f.return,r,e),l||(p=null);break e}f=m.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(a(341));p.lanes|=r,f=p.alternate,f!==null&&(f.lanes|=r),ju(p,r,e),p=null}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===e){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function Nr(e,n,r,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(a(387));if(p=p.memoizedProps,p!==null){var m=u.type;Ot(u.pendingProps.value,p.value)||(e!==null?e.push(m):e=[m])}}else if(u===wt.current){if(p=u.alternate,p===null)throw Error(a(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ia):e=[ia])}u=u.return}e!==null&&Yu(n,e,r,l),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zi(e){Li=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return up(Li,e)}function _l(e,n){return Li===null&&zi(e),up(e,n)}function up(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},yn===null){if(e===null)throw Error(a(308));yn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else yn=yn.next=n;return r}var M0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},k0=s.unstable_scheduleCallback,x0=s.unstable_NormalPriority,Qe={$$typeof:Re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new M0,data:new Map,refCount:0}}function Or(e){e.refCount--,e.refCount===0&&k0(x0,function(){e.controller.abort()})}var Dr=null,Qu=0,Ss=0,Ts=null;function U0(e,n){if(Dr===null){var r=Dr=[];Qu=0,Ss=Xc(),Ts={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Qu++,n.then(cp,cp),n}function cp(){if(--Qu===0&&Dr!==null){Ts!==null&&(Ts.status="fulfilled");var e=Dr;Dr=null,Ss=0,Ts=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function L0(e,n){var r=[],l={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),l}var fp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&U0(e,n),fp!==null&&fp(e,n)};var Hi=x(null);function Ku(){var e=Hi.current;return e!==null?e:Ne.pooledCache}function gl(e,n){n===null?H(Hi,Hi.current):H(Hi,n.pool)}function hp(){var e=Ku();return e===null?null:{parent:Qe._currentValue,pool:e}}var Ir=Error(a(460)),dp=Error(a(474)),ml=Error(a(542)),Xu={then:function(){}};function pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vl(){}function _p(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(vl,vl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mp(e),e;default:if(typeof n.status=="string")n.then(vl,vl);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mp(e),e}throw Mr=n,Ir}}var Mr=null;function gp(){if(Mr===null)throw Error(a(459));var e=Mr;return Mr=null,e}function mp(e){if(e===Ir||e===ml)throw Error(a(483))}var Gn=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=cl(e),ip(e,null,r),n}return ul(e,l,n,r),cl(e)}function kr(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,cd(e,r)}}function Ju(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var p={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=p:f=f.next=p,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var $u=!1;function xr(){if($u){var e=Ts;if(e!==null)throw e}}function Ur(e,n,r,l){$u=!1;var u=e.updateQueue;Gn=!1;var f=u.firstBaseUpdate,p=u.lastBaseUpdate,m=u.shared.pending;if(m!==null){u.shared.pending=null;var y=m,w=y.next;y.next=null,p===null?f=w:p.next=w,p=y;var D=e.alternate;D!==null&&(D=D.updateQueue,m=D.lastBaseUpdate,m!==p&&(m===null?D.firstBaseUpdate=w:m.next=w,D.lastBaseUpdate=y))}if(f!==null){var k=u.baseState;p=0,D=w=y=null,m=f;do{var R=m.lane&-536870913,N=R!==m.lane;if(N?(ce&R)===R:(l&R)===R){R!==0&&R===Ss&&($u=!0),D!==null&&(D=D.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var X=e,Y=m;R=n;var be=r;switch(Y.tag){case 1:if(X=Y.payload,typeof X=="function"){k=X.call(be,k,R);break e}k=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=Y.payload,R=typeof X=="function"?X.call(be,k,R):X,R==null)break e;k=v({},k,R);break e;case 2:Gn=!0}}R=m.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[R]:N.push(R))}else N={lane:R,tag:m.tag,payload:m.payload,callback:m.callback,next:null},D===null?(w=D=N,y=k):D=D.next=N,p|=R;if(m=m.next,m===null){if(m=u.shared.pending,m===null)break;N=m,m=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);D===null&&(y=k),u.baseState=y,u.firstBaseUpdate=w,u.lastBaseUpdate=D,f===null&&(u.shared.lanes=0),$n|=p,e.lanes=p,e.memoizedState=k}}function vp(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function yp(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)vp(r[e],n)}var bs=x(null),yl=x(0);function Ep(e,n){e=Rn,H(yl,e),H(bs,n),Rn=e|n.baseLanes}function ec(){H(yl,Rn),H(bs,bs.current)}function tc(){Rn=yl.current,P(bs),P(yl)}var Fn=0,te=null,Se=null,Ve=null,El=!1,Cs=!1,Pi=!1,Sl=0,Lr=0,As=null,z0=0;function Be(){throw Error(a(321))}function nc(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Ot(e[r],n[r]))return!1;return!0}function ic(e,n,r,l,u,f){return Fn=f,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?i_:s_,Pi=!1,f=r(l,u),Pi=!1,Cs&&(f=Tp(n,r,l,u)),Sp(e),f}function Sp(e){O.H=Rl;var n=Se!==null&&Se.next!==null;if(Fn=0,Ve=Se=te=null,El=!1,Lr=0,As=null,n)throw Error(a(300));e===null||tt||(e=e.dependencies,e!==null&&pl(e)&&(tt=!0))}function Tp(e,n,r,l){te=e;var u=0;do{if(Cs&&(As=null),Lr=0,Cs=!1,25<=u)throw Error(a(301));if(u+=1,Ve=Se=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=j0,f=n(r,l)}while(Cs);return f}function H0(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?zr(n):n,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(te.flags|=1024),n}function sc(){var e=Sl!==0;return Sl=0,e}function rc(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function ac(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}Fn=0,Ve=Se=te=null,Cs=!1,Lr=Sl=0,As=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?te.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Ge(){if(Se===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var n=Ve===null?te.memoizedState:Ve.next;if(n!==null)Ve=n,Se=e;else{if(e===null)throw te.alternate===null?Error(a(467)):Error(a(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ve===null?te.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zr(e){var n=Lr;return Lr+=1,As===null&&(As=[]),e=_p(As,e,n),n=te,(Ve===null?n.memoizedState:Ve.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?i_:s_),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zr(e);if(e.$$typeof===Re)return dt(e)}throw Error(a(438,String(e)))}function oc(e){var n=null,r=te.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=lc(),te.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),l=0;l<e;l++)r[l]=ee;return n.index++,r}function Sn(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=Ge();return uc(n,Se,e)}function uc(e,n,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var p=u.next;u.next=f.next,f.next=p}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var m=p=null,y=null,w=n,D=!1;do{var k=w.lane&-536870913;if(k!==w.lane?(ce&k)===k:(Fn&k)===k){var R=w.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),k===Ss&&(D=!0);else if((Fn&R)===R){w=w.next,R===Ss&&(D=!0);continue}else k={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(m=y=k,p=f):y=y.next=k,te.lanes|=R,$n|=R;k=w.action,Pi&&r(f,k),f=w.hasEagerState?w.eagerState:r(f,k)}else R={lane:k,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(m=y=R,p=f):y=y.next=R,te.lanes|=k,$n|=k;w=w.next}while(w!==null&&w!==n);if(y===null?p=f:y.next=m,!Ot(f,e.memoizedState)&&(tt=!0,D&&(r=Ts,r!==null)))throw r;e.memoizedState=f,e.baseState=p,e.baseQueue=y,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cc(e){var n=Ge(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var p=u=u.next;do f=e(f,p.action),p=p.next;while(p!==u);Ot(f,n.memoizedState)||(tt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,l]}function bp(e,n,r){var l=te,u=Ge(),f=_e;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var p=!Ot((Se||u).memoizedState,r);p&&(u.memoizedState=r,tt=!0),u=u.queue;var m=wp.bind(null,l,u,e);if(Hr(2048,8,m,[e]),u.getSnapshot!==n||p||Ve!==null&&Ve.memoizedState.tag&1){if(l.flags|=2048,ws(9,Cl(),Ap.bind(null,l,u,r,n),null),Ne===null)throw Error(a(349));f||(Fn&124)!==0||Cp(l,n,r)}return r}function Cp(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=te.updateQueue,n===null?(n=lc(),te.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Ap(e,n,r,l){n.value=r,n.getSnapshot=l,Rp(n)&&Np(e)}function wp(e,n,r){return r(function(){Rp(n)&&Np(e)})}function Rp(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Ot(e,r)}catch{return!0}}function Np(e){var n=ms(e,2);n!==null&&Ut(n,e,2)}function fc(e){var n=Tt();if(typeof e=="function"){var r=e;if(e=r(),Pi){Pn(!0);try{r()}finally{Pn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},n}function Op(e,n,r,l){return e.baseState=r,uc(e,Se,typeof l=="function"?l:Sn)}function P0(e,n,r,l,u){if(wl(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};O.T!==null?r(!0):f.isTransition=!1,l(f),r=n.pending,r===null?(f.next=n.pending=f,Dp(n,f)):(f.next=r.next,n.pending=r.next=f)}}function Dp(e,n){var r=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=O.T,p={};O.T=p;try{var m=r(u,l),y=O.S;y!==null&&y(p,m),Ip(e,n,m)}catch(w){hc(e,n,w)}finally{O.T=f}}else try{f=r(u,l),Ip(e,n,f)}catch(w){hc(e,n,w)}}function Ip(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Mp(e,n,l)},function(l){return hc(e,n,l)}):Mp(e,n,r)}function Mp(e,n,r){n.status="fulfilled",n.value=r,kp(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,Dp(e,r)))}function hc(e,n,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,kp(n),n=n.next;while(n!==l)}e.action=null}function kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function xp(e,n){return n}function Up(e,n){if(_e){var r=Ne.formState;if(r!==null){e:{var l=te;if(_e){if(Le){t:{for(var u=Le,f=an;u.nodeType!==8;){if(!f){u=null;break t}if(u=Wt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Le=Wt(u.nextSibling),l=u.data==="F!";break e}}Ui(l)}l=!1}l&&(n=r[0])}}return r=Tt(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xp,lastRenderedState:n},r.queue=l,r=e_.bind(null,te,l),l.dispatch=r,l=fc(!1),f=mc.bind(null,te,!1,l.queue),l=Tt(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,r=P0.bind(null,te,u,f,r),u.dispatch=r,l.memoizedState=e,[n,r,!1]}function Lp(e){var n=Ge();return zp(n,Se,e)}function zp(e,n,r){if(n=uc(e,n,xp)[0],e=bl(Sn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=zr(n)}catch(p){throw p===Ir?ml:p}else l=n;n=Ge();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&(te.flags|=2048,ws(9,Cl(),B0.bind(null,u,r),null)),[l,f,e]}function B0(e,n){e.action=n}function Hp(e){var n=Ge(),r=Se;if(r!==null)return zp(n,r,e);Ge(),n=n.memoizedState,r=Ge();var l=r.queue.dispatch;return r.memoizedState=e,[n,l,!1]}function ws(e,n,r,l){return e={tag:e,create:r,deps:l,inst:n,next:null},n=te.updateQueue,n===null&&(n=lc(),te.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e),e}function Cl(){return{destroy:void 0,resource:void 0}}function Pp(){return Ge().memoizedState}function Al(e,n,r,l){var u=Tt();l=l===void 0?null:l,te.flags|=e,u.memoizedState=ws(1|n,Cl(),r,l)}function Hr(e,n,r,l){var u=Ge();l=l===void 0?null:l;var f=u.memoizedState.inst;Se!==null&&l!==null&&nc(l,Se.memoizedState.deps)?u.memoizedState=ws(n,f,r,l):(te.flags|=e,u.memoizedState=ws(1|n,f,r,l))}function Bp(e,n){Al(8390656,8,e,n)}function qp(e,n){Hr(2048,8,e,n)}function Vp(e,n){return Hr(4,2,e,n)}function Gp(e,n){return Hr(4,4,e,n)}function jp(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Yp(e,n,r){r=r!=null?r.concat([e]):null,Hr(4,4,jp.bind(null,n,e),r)}function dc(){}function Fp(e,n){var r=Ge();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&nc(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function Qp(e,n){var r=Ge();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&nc(n,l[1]))return l[0];if(l=e(),Pi){Pn(!0);try{e()}finally{Pn(!1)}}return r.memoizedState=[l,n],l}function pc(e,n,r){return r===void 0||(Fn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=W_(),te.lanes|=e,$n|=e,r)}function Kp(e,n,r,l){return Ot(r,n)?r:bs.current!==null?(e=pc(e,r,l),Ot(e,n)||(tt=!0),e):(Fn&42)===0?(tt=!0,e.memoizedState=r):(e=W_(),te.lanes|=e,$n|=e,n)}function Xp(e,n,r,l,u){var f=z.p;z.p=f!==0&&8>f?f:8;var p=O.T,m={};O.T=m,mc(e,!1,n,r);try{var y=u(),w=O.S;if(w!==null&&w(m,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var D=L0(y,l);Pr(e,n,D,xt(e))}else Pr(e,n,l,xt(e))}catch(k){Pr(e,n,{then:function(){},status:"rejected",reason:k},xt())}finally{z.p=f,O.T=p}}function q0(){}function _c(e,n,r,l){if(e.tag!==5)throw Error(a(476));var u=Wp(e).queue;Xp(e,u,n,V,r===null?q0:function(){return Zp(e),r(l)})}function Wp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:V},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Zp(e){var n=Wp(e).next.queue;Pr(e,n,{},xt())}function gc(){return dt(ia)}function Jp(){return Ge().memoizedState}function $p(){return Ge().memoizedState}function V0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=xt();e=jn(r);var l=Yn(n,e,r);l!==null&&(Ut(l,n,r),kr(l,n,r)),n={cache:Fu()},e.payload=n;return}n=n.return}}function G0(e,n,r){var l=xt();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},wl(e)?t_(n,r):(r=Lu(e,n,r,l),r!==null&&(Ut(r,e,l),n_(r,n,l)))}function e_(e,n,r){var l=xt();Pr(e,n,r,l)}function Pr(e,n,r,l){var u={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(wl(e))t_(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,m=f(p,r);if(u.hasEagerState=!0,u.eagerState=m,Ot(m,p))return ul(e,n,u,0),Ne===null&&ol(),!1}catch{}finally{}if(r=Lu(e,n,u,l),r!==null)return Ut(r,e,l),n_(r,n,l),!0}return!1}function mc(e,n,r,l){if(l={lane:2,revertLane:Xc(),action:l,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(a(479))}else n=Lu(e,r,l,2),n!==null&&Ut(n,e,2)}function wl(e){var n=e.alternate;return e===te||n!==null&&n===te}function t_(e,n){Cs=El=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function n_(e,n,r){if((r&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,cd(e,r)}}var Rl={readContext:dt,use:Tl,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},i_={readContext:dt,use:Tl,useCallback:function(e,n){return Tt().memoizedState=[e,n===void 0?null:n],e},useContext:dt,useEffect:Bp,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Al(4194308,4,jp.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var r=Tt();n=n===void 0?null:n;var l=e();if(Pi){Pn(!0);try{e()}finally{Pn(!1)}}return r.memoizedState=[l,n],l},useReducer:function(e,n,r){var l=Tt();if(r!==void 0){var u=r(n);if(Pi){Pn(!0);try{r(n)}finally{Pn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=G0.bind(null,te,e),[l.memoizedState,e]},useRef:function(e){var n=Tt();return e={current:e},n.memoizedState=e},useState:function(e){e=fc(e);var n=e.queue,r=e_.bind(null,te,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:dc,useDeferredValue:function(e,n){var r=Tt();return pc(r,e,n)},useTransition:function(){var e=fc(!1);return e=Xp.bind(null,te,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var l=te,u=Tt();if(_e){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Ne===null)throw Error(a(349));(ce&124)!==0||Cp(l,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,Bp(wp.bind(null,l,f,e),[e]),l.flags|=2048,ws(9,Cl(),Ap.bind(null,l,f,r,n),null),r},useId:function(){var e=Tt(),n=Ne.identifierPrefix;if(_e){var r=vn,l=mn;r=(l&~(1<<32-Nt(l)-1)).toString(32)+r,n="«"+n+"R"+r,r=Sl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=z0++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:gc,useFormState:Up,useActionState:Up,useOptimistic:function(e){var n=Tt();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=mc.bind(null,te,!0,r),r.dispatch=n,[e,n]},useMemoCache:oc,useCacheRefresh:function(){return Tt().memoizedState=V0.bind(null,te)}},s_={readContext:dt,use:Tl,useCallback:Fp,useContext:dt,useEffect:qp,useImperativeHandle:Yp,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Qp,useReducer:bl,useRef:Pp,useState:function(){return bl(Sn)},useDebugValue:dc,useDeferredValue:function(e,n){var r=Ge();return Kp(r,Se.memoizedState,e,n)},useTransition:function(){var e=bl(Sn)[0],n=Ge().memoizedState;return[typeof e=="boolean"?e:zr(e),n]},useSyncExternalStore:bp,useId:Jp,useHostTransitionStatus:gc,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,n){var r=Ge();return Op(r,Se,e,n)},useMemoCache:oc,useCacheRefresh:$p},j0={readContext:dt,use:Tl,useCallback:Fp,useContext:dt,useEffect:qp,useImperativeHandle:Yp,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Qp,useReducer:cc,useRef:Pp,useState:function(){return cc(Sn)},useDebugValue:dc,useDeferredValue:function(e,n){var r=Ge();return Se===null?pc(r,e,n):Kp(r,Se.memoizedState,e,n)},useTransition:function(){var e=cc(Sn)[0],n=Ge().memoizedState;return[typeof e=="boolean"?e:zr(e),n]},useSyncExternalStore:bp,useId:Jp,useHostTransitionStatus:gc,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,n){var r=Ge();return Se!==null?Op(r,Se,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:oc,useCacheRefresh:$p},Rs=null,Br=0;function Nl(e){var n=Br;return Br+=1,Rs===null&&(Rs=[]),_p(Rs,e,n)}function qr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===E?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function r_(e){var n=e._init;return n(e._payload)}function a_(e){function n(b,T){if(e){var A=b.deletions;A===null?(b.deletions=[T],b.flags|=16):A.push(T)}}function r(b,T){if(!e)return null;for(;T!==null;)n(b,T),T=T.sibling;return null}function l(b){for(var T=new Map;b!==null;)b.key!==null?T.set(b.key,b):T.set(b.index,b),b=b.sibling;return T}function u(b,T){return b=gn(b,T),b.index=0,b.sibling=null,b}function f(b,T,A){return b.index=A,e?(A=b.alternate,A!==null?(A=A.index,A<T?(b.flags|=67108866,T):A):(b.flags|=67108866,T)):(b.flags|=1048576,T)}function p(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function m(b,T,A,I){return T===null||T.tag!==6?(T=Hu(A,b.mode,I),T.return=b,T):(T=u(T,A),T.return=b,T)}function y(b,T,A,I){var B=A.type;return B===U?D(b,T,A.props.children,I,A.key):T!==null&&(T.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===$e&&r_(B)===T.type)?(T=u(T,A.props),qr(T,A),T.return=b,T):(T=fl(A.type,A.key,A.props,null,b.mode,I),qr(T,A),T.return=b,T)}function w(b,T,A,I){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=Pu(A,b.mode,I),T.return=b,T):(T=u(T,A.children||[]),T.return=b,T)}function D(b,T,A,I,B){return T===null||T.tag!==7?(T=Ii(A,b.mode,I,B),T.return=b,T):(T=u(T,A),T.return=b,T)}function k(b,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Hu(""+T,b.mode,A),T.return=b,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case C:return A=fl(T.type,T.key,T.props,null,b.mode,A),qr(A,T),A.return=b,A;case M:return T=Pu(T,b.mode,A),T.return=b,T;case $e:var I=T._init;return T=I(T._payload),k(b,T,A)}if(ke(T)||J(T))return T=Ii(T,b.mode,A,null),T.return=b,T;if(typeof T.then=="function")return k(b,Nl(T),A);if(T.$$typeof===Re)return k(b,_l(b,T),A);Ol(b,T)}return null}function R(b,T,A,I){var B=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return B!==null?null:m(b,T,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case C:return A.key===B?y(b,T,A,I):null;case M:return A.key===B?w(b,T,A,I):null;case $e:return B=A._init,A=B(A._payload),R(b,T,A,I)}if(ke(A)||J(A))return B!==null?null:D(b,T,A,I,null);if(typeof A.then=="function")return R(b,T,Nl(A),I);if(A.$$typeof===Re)return R(b,T,_l(b,A),I);Ol(b,A)}return null}function N(b,T,A,I,B){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return b=b.get(A)||null,m(T,b,""+I,B);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case C:return b=b.get(I.key===null?A:I.key)||null,y(T,b,I,B);case M:return b=b.get(I.key===null?A:I.key)||null,w(T,b,I,B);case $e:var ne=I._init;return I=ne(I._payload),N(b,T,A,I,B)}if(ke(I)||J(I))return b=b.get(A)||null,D(T,b,I,B,null);if(typeof I.then=="function")return N(b,T,A,Nl(I),B);if(I.$$typeof===Re)return N(b,T,A,_l(T,I),B);Ol(T,I)}return null}function X(b,T,A,I){for(var B=null,ne=null,q=T,F=T=0,it=null;q!==null&&F<A.length;F++){q.index>F?(it=q,q=null):it=q.sibling;var he=R(b,q,A[F],I);if(he===null){q===null&&(q=it);break}e&&q&&he.alternate===null&&n(b,q),T=f(he,T,F),ne===null?B=he:ne.sibling=he,ne=he,q=it}if(F===A.length)return r(b,q),_e&&ki(b,F),B;if(q===null){for(;F<A.length;F++)q=k(b,A[F],I),q!==null&&(T=f(q,T,F),ne===null?B=q:ne.sibling=q,ne=q);return _e&&ki(b,F),B}for(q=l(q);F<A.length;F++)it=N(q,b,F,A[F],I),it!==null&&(e&&it.alternate!==null&&q.delete(it.key===null?F:it.key),T=f(it,T,F),ne===null?B=it:ne.sibling=it,ne=it);return e&&q.forEach(function(oi){return n(b,oi)}),_e&&ki(b,F),B}function Y(b,T,A,I){if(A==null)throw Error(a(151));for(var B=null,ne=null,q=T,F=T=0,it=null,he=A.next();q!==null&&!he.done;F++,he=A.next()){q.index>F?(it=q,q=null):it=q.sibling;var oi=R(b,q,he.value,I);if(oi===null){q===null&&(q=it);break}e&&q&&oi.alternate===null&&n(b,q),T=f(oi,T,F),ne===null?B=oi:ne.sibling=oi,ne=oi,q=it}if(he.done)return r(b,q),_e&&ki(b,F),B;if(q===null){for(;!he.done;F++,he=A.next())he=k(b,he.value,I),he!==null&&(T=f(he,T,F),ne===null?B=he:ne.sibling=he,ne=he);return _e&&ki(b,F),B}for(q=l(q);!he.done;F++,he=A.next())he=N(q,b,F,he.value,I),he!==null&&(e&&he.alternate!==null&&q.delete(he.key===null?F:he.key),T=f(he,T,F),ne===null?B=he:ne.sibling=he,ne=he);return e&&q.forEach(function(YS){return n(b,YS)}),_e&&ki(b,F),B}function be(b,T,A,I){if(typeof A=="object"&&A!==null&&A.type===U&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case C:e:{for(var B=A.key;T!==null;){if(T.key===B){if(B=A.type,B===U){if(T.tag===7){r(b,T.sibling),I=u(T,A.props.children),I.return=b,b=I;break e}}else if(T.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===$e&&r_(B)===T.type){r(b,T.sibling),I=u(T,A.props),qr(I,A),I.return=b,b=I;break e}r(b,T);break}else n(b,T);T=T.sibling}A.type===U?(I=Ii(A.props.children,b.mode,I,A.key),I.return=b,b=I):(I=fl(A.type,A.key,A.props,null,b.mode,I),qr(I,A),I.return=b,b=I)}return p(b);case M:e:{for(B=A.key;T!==null;){if(T.key===B)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){r(b,T.sibling),I=u(T,A.children||[]),I.return=b,b=I;break e}else{r(b,T);break}else n(b,T);T=T.sibling}I=Pu(A,b.mode,I),I.return=b,b=I}return p(b);case $e:return B=A._init,A=B(A._payload),be(b,T,A,I)}if(ke(A))return X(b,T,A,I);if(J(A)){if(B=J(A),typeof B!="function")throw Error(a(150));return A=B.call(A),Y(b,T,A,I)}if(typeof A.then=="function")return be(b,T,Nl(A),I);if(A.$$typeof===Re)return be(b,T,_l(b,A),I);Ol(b,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(r(b,T.sibling),I=u(T,A),I.return=b,b=I):(r(b,T),I=Hu(A,b.mode,I),I.return=b,b=I),p(b)):r(b,T)}return function(b,T,A,I){try{Br=0;var B=be(b,T,A,I);return Rs=null,B}catch(q){if(q===Ir||q===ml)throw q;var ne=Dt(29,q,null,b.mode);return ne.lanes=I,ne.return=b,ne}finally{}}}var Ns=a_(!0),l_=a_(!1),Vt=x(null),ln=null;function Qn(e){var n=e.alternate;H(Ke,Ke.current&1),H(Vt,e),ln===null&&(n===null||bs.current!==null||n.memoizedState!==null)&&(ln=e)}function o_(e){if(e.tag===22){if(H(Ke,Ke.current),H(Vt,e),ln===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ln=e)}}else Kn()}function Kn(){H(Ke,Ke.current),H(Vt,Vt.current)}function Tn(e){P(Vt),ln===e&&(ln=null),P(Ke)}var Ke=x(0);function Dl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||of(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function vc(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:v({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var yc={enqueueSetState:function(e,n,r){e=e._reactInternals;var l=xt(),u=jn(l);u.payload=n,r!=null&&(u.callback=r),n=Yn(e,u,l),n!==null&&(Ut(n,e,l),kr(n,e,l))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=xt(),u=jn(l);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Yn(e,u,l),n!==null&&(Ut(n,e,l),kr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=xt(),l=jn(r);l.tag=2,n!=null&&(l.callback=n),n=Yn(e,l,r),n!==null&&(Ut(n,e,r),kr(n,e,r))}};function u_(e,n,r,l,u,f,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,p):n.prototype&&n.prototype.isPureReactComponent?!br(r,l)||!br(u,f):!0}function c_(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&yc.enqueueReplaceState(n,n.state,null)}function Bi(e,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(e=e.defaultProps){r===n&&(r=v({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function f_(e){Il(e)}function h_(e){console.error(e)}function d_(e){Il(e)}function Ml(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function p_(e,n,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ec(e,n,r){return r=jn(r),r.tag=3,r.payload={element:null},r.callback=function(){Ml(e,n)},r}function __(e){return e=jn(e),e.tag=3,e}function g_(e,n,r,l){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){p_(n,r,l)}}var p=r.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){p_(n,r,l),typeof u!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Y0(e,n,r,l,u){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&Nr(n,r,u,!0),r=Vt.current,r!==null){switch(r.tag){case 13:return ln===null?jc():r.alternate===null&&ze===0&&(ze=3),r.flags&=-257,r.flags|=65536,r.lanes=u,l===Xu?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),Fc(e,l,u)),!1;case 22:return r.flags|=65536,l===Xu?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),Fc(e,l,u)),!1}throw Error(a(435,r.tag))}return Fc(e,l,u),jc(),!1}if(_e)return n=Vt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Vu&&(e=Error(a(422),{cause:l}),Rr(Ht(e,r)))):(l!==Vu&&(n=Error(a(423),{cause:l}),Rr(Ht(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Ht(l,r),u=Ec(e.stateNode,l,u),Ju(e,u),ze!==4&&(ze=2)),!1;var f=Error(a(520),{cause:l});if(f=Ht(f,r),Kr===null?Kr=[f]:Kr.push(f),ze!==4&&(ze=2),n===null)return!0;l=Ht(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=Ec(r.stateNode,l,e),Ju(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ei===null||!ei.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=__(u),g_(u,e,r,l),Ju(r,u),!1}r=r.return}while(r!==null);return!1}var m_=Error(a(461)),tt=!1;function at(e,n,r,l){n.child=e===null?l_(n,null,r,l):Ns(n,e.child,r,l)}function v_(e,n,r,l,u){r=r.render;var f=n.ref;if("ref"in l){var p={};for(var m in l)m!=="ref"&&(p[m]=l[m])}else p=l;return zi(n),l=ic(e,n,r,p,f,u),m=sc(),e!==null&&!tt?(rc(e,n,u),bn(e,n,u)):(_e&&m&&Bu(n),n.flags|=1,at(e,n,l,u),n.child)}function y_(e,n,r,l,u){if(e===null){var f=r.type;return typeof f=="function"&&!zu(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,E_(e,n,f,l,u)):(e=fl(r.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Nc(e,u)){var p=f.memoizedProps;if(r=r.compare,r=r!==null?r:br,r(p,l)&&e.ref===n.ref)return bn(e,n,u)}return n.flags|=1,e=gn(f,l),e.ref=n.ref,e.return=n,n.child=e}function E_(e,n,r,l,u){if(e!==null){var f=e.memoizedProps;if(br(f,l)&&e.ref===n.ref)if(tt=!1,n.pendingProps=l=f,Nc(e,u))(e.flags&131072)!==0&&(tt=!0);else return n.lanes=e.lanes,bn(e,n,u)}return Sc(e,n,r,l,u)}function S_(e,n,r){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|r:r,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return T_(e,n,l,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Ep(n,f):ec(),o_(n);else return n.lanes=n.childLanes=536870912,T_(e,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(gl(n,f.cachePool),Ep(n,f),Kn(),n.memoizedState=null):(e!==null&&gl(n,null),ec(),Kn());return at(e,n,u,r),n.child}function T_(e,n,r,l){var u=Ku();return u=u===null?null:{parent:Qe._currentValue,pool:u},n.memoizedState={baseLanes:r,cachePool:u},e!==null&&gl(n,null),ec(),o_(n),e!==null&&Nr(e,n,l,!0),null}function kl(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function Sc(e,n,r,l,u){return zi(n),r=ic(e,n,r,l,void 0,u),l=sc(),e!==null&&!tt?(rc(e,n,u),bn(e,n,u)):(_e&&l&&Bu(n),n.flags|=1,at(e,n,r,u),n.child)}function b_(e,n,r,l,u,f){return zi(n),n.updateQueue=null,r=Tp(n,l,r,u),Sp(e),l=sc(),e!==null&&!tt?(rc(e,n,f),bn(e,n,f)):(_e&&l&&Bu(n),n.flags|=1,at(e,n,r,f),n.child)}function C_(e,n,r,l,u){if(zi(n),n.stateNode===null){var f=vs,p=r.contextType;typeof p=="object"&&p!==null&&(f=dt(p)),f=new r(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Wu(n),p=r.contextType,f.context=typeof p=="object"&&p!==null?dt(p):vs,f.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(vc(n,r,p,l),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&yc.enqueueReplaceState(f,f.state,null),Ur(n,l,f,u),xr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var m=n.memoizedProps,y=Bi(r,m);f.props=y;var w=f.context,D=r.contextType;p=vs,typeof D=="object"&&D!==null&&(p=dt(D));var k=r.getDerivedStateFromProps;D=typeof k=="function"||typeof f.getSnapshotBeforeUpdate=="function",m=n.pendingProps!==m,D||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m||w!==p)&&c_(n,f,l,p),Gn=!1;var R=n.memoizedState;f.state=R,Ur(n,l,f,u),xr(),w=n.memoizedState,m||R!==w||Gn?(typeof k=="function"&&(vc(n,r,k,l),w=n.memoizedState),(y=Gn||u_(n,r,y,l,R,w,p))?(D||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),f.props=l,f.state=w,f.context=p,l=y):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Zu(e,n),p=n.memoizedProps,D=Bi(r,p),f.props=D,k=n.pendingProps,R=f.context,w=r.contextType,y=vs,typeof w=="object"&&w!==null&&(y=dt(w)),m=r.getDerivedStateFromProps,(w=typeof m=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==k||R!==y)&&c_(n,f,l,y),Gn=!1,R=n.memoizedState,f.state=R,Ur(n,l,f,u),xr();var N=n.memoizedState;p!==k||R!==N||Gn||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof m=="function"&&(vc(n,r,m,l),N=n.memoizedState),(D=Gn||u_(n,r,D,l,R,N,y)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(w||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,y)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=y,l=D):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,kl(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,r,u)):at(e,n,r,u),n.memoizedState=f.state,e=n.child):e=bn(e,n,u),e}function A_(e,n,r,l){return wr(),n.flags|=256,at(e,n,r,l),n.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:hp()}}function Cc(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Gt),e}function w_(e,n,r){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),p&&(u=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(_e){if(u?Qn(n):Kn(),_e){var m=Le,y;if(y=m){e:{for(y=m,m=an;y.nodeType!==8;){if(!m){m=null;break e}if(y=Wt(y.nextSibling),y===null){m=null;break e}}m=y}m!==null?(n.memoizedState={dehydrated:m,treeContext:Mi!==null?{id:mn,overflow:vn}:null,retryLane:536870912,hydrationErrors:null},y=Dt(18,null,null,0),y.stateNode=m,y.return=n,n.child=y,_t=n,Le=null,y=!0):y=!1}y||Ui(n)}if(m=n.memoizedState,m!==null&&(m=m.dehydrated,m!==null))return of(m)?n.lanes=32:n.lanes=536870912,null;Tn(n)}return m=l.children,l=l.fallback,u?(Kn(),u=n.mode,m=xl({mode:"hidden",children:m},u),l=Ii(l,u,r,null),m.return=n,l.return=n,m.sibling=l,n.child=m,u=n.child,u.memoizedState=bc(r),u.childLanes=Cc(e,p,r),n.memoizedState=Tc,l):(Qn(n),Ac(n,m))}if(y=e.memoizedState,y!==null&&(m=y.dehydrated,m!==null)){if(f)n.flags&256?(Qn(n),n.flags&=-257,n=wc(e,n,r)):n.memoizedState!==null?(Kn(),n.child=e.child,n.flags|=128,n=null):(Kn(),u=l.fallback,m=n.mode,l=xl({mode:"visible",children:l.children},m),u=Ii(u,m,r,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ns(n,e.child,null,r),l=n.child,l.memoizedState=bc(r),l.childLanes=Cc(e,p,r),n.memoizedState=Tc,n=u);else if(Qn(n),of(m)){if(p=m.nextSibling&&m.nextSibling.dataset,p)var w=p.dgst;p=w,l=Error(a(419)),l.stack="",l.digest=p,Rr({value:l,source:null,stack:null}),n=wc(e,n,r)}else if(tt||Nr(e,n,r,!1),p=(r&e.childLanes)!==0,tt||p){if(p=Ne,p!==null&&(l=r&-r,l=(l&42)!==0?1:ou(l),l=(l&(p.suspendedLanes|r))!==0?0:l,l!==0&&l!==y.retryLane))throw y.retryLane=l,ms(e,l),Ut(p,e,l),m_;m.data==="$?"||jc(),n=wc(e,n,r)}else m.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,Le=Wt(m.nextSibling),_t=n,_e=!0,xi=null,an=!1,e!==null&&(Bt[qt++]=mn,Bt[qt++]=vn,Bt[qt++]=Mi,mn=e.id,vn=e.overflow,Mi=n),n=Ac(n,l.children),n.flags|=4096);return n}return u?(Kn(),u=l.fallback,m=n.mode,y=e.child,w=y.sibling,l=gn(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,w!==null?u=gn(w,u):(u=Ii(u,m,r,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,m=e.child.memoizedState,m===null?m=bc(r):(y=m.cachePool,y!==null?(w=Qe._currentValue,y=y.parent!==w?{parent:w,pool:w}:y):y=hp(),m={baseLanes:m.baseLanes|r,cachePool:y}),u.memoizedState=m,u.childLanes=Cc(e,p,r),n.memoizedState=Tc,l):(Qn(n),r=e.child,e=r.sibling,r=gn(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=r,n.memoizedState=null,r)}function Ac(e,n){return n=xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xl(e,n){return e=Dt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function wc(e,n,r){return Ns(n,e.child,null,r),e=Ac(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function R_(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),ju(e.return,n,r)}function Rc(e,n,r,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=r,f.tailMode=u)}function N_(e,n,r){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(at(e,n,l.children,r),l=Ke.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R_(e,r,n);else if(e.tag===19)R_(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(H(Ke,l),u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Dl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Rc(n,!1,u,r,f);break;case"backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Rc(n,!0,r,null,f);break;case"together":Rc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),$n|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Nr(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=gn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=gn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Nc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function F0(e,n,r){switch(n.tag){case 3:Ie(n,n.stateNode.containerInfo),Vn(n,Qe,e.memoizedState.cache),wr();break;case 27:case 5:iu(n);break;case 4:Ie(n,n.stateNode.containerInfo);break;case 10:Vn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(n),n.flags|=128,null):(r&n.child.childLanes)!==0?w_(e,n,r):(Qn(n),e=bn(e,n,r),e!==null?e.sibling:null);Qn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(Nr(e,n,r,!1),l=(r&n.childLanes)!==0),u){if(l)return N_(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),H(Ke,Ke.current),l)break;return null;case 22:case 23:return n.lanes=0,S_(e,n,r);case 24:Vn(n,Qe,e.memoizedState.cache)}return bn(e,n,r)}function O_(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)tt=!0;else{if(!Nc(e,r)&&(n.flags&128)===0)return tt=!1,F0(e,n,r);tt=(e.flags&131072)!==0}else tt=!1,_e&&(n.flags&1048576)!==0&&rp(n,dl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")zu(l)?(e=Bi(l,e),n.tag=1,n=C_(null,n,l,e,r)):(n.tag=0,n=Sc(null,n,l,e,r));else{if(l!=null){if(u=l.$$typeof,u===Ze){n.tag=11,n=v_(null,n,l,e,r);break e}else if(u===Je){n.tag=14,n=y_(null,n,l,e,r);break e}}throw n=me(l)||l,Error(a(306,n,""))}}return n;case 0:return Sc(e,n,n.type,n.pendingProps,r);case 1:return l=n.type,u=Bi(l,n.pendingProps),C_(e,n,l,u,r);case 3:e:{if(Ie(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Zu(e,n),Ur(n,l,null,r);var p=n.memoizedState;if(l=p.cache,Vn(n,Qe,l),l!==f.cache&&Yu(n,[Qe],r,!0),xr(),l=p.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=A_(e,n,l,r);break e}else if(l!==u){u=Ht(Error(a(424)),n),Rr(u),n=A_(e,n,l,r);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Wt(e.firstChild),_t=n,_e=!0,xi=null,an=!0,r=l_(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(wr(),l===u){n=bn(e,n,r);break e}at(e,n,l,r)}n=n.child}return n;case 26:return kl(e,n),e===null?(r=kg(n.type,null,n.pendingProps,null))?n.memoizedState=r:_e||(r=n.type,e=n.pendingProps,l=Kl(Z.current).createElement(r),l[ht]=n,l[Et]=e,ot(l,r,e),et(l),n.stateNode=l):n.memoizedState=kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return iu(n),e===null&&_e&&(l=n.stateNode=Dg(n.type,n.pendingProps,Z.current),_t=n,an=!0,u=Le,ii(n.type)?(uf=u,Le=Wt(l.firstChild)):Le=u),at(e,n,n.pendingProps.children,r),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&_e&&((u=l=Le)&&(l=ES(l,n.type,n.pendingProps,an),l!==null?(n.stateNode=l,_t=n,Le=Wt(l.firstChild),an=!1,u=!0):u=!1),u||Ui(n)),iu(n),u=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,l=f.children,rf(u,f)?l=null:p!==null&&rf(u,p)&&(n.flags|=32),n.memoizedState!==null&&(u=ic(e,n,H0,null,null,r),ia._currentValue=u),kl(e,n),at(e,n,l,r),n.child;case 6:return e===null&&_e&&((e=r=Le)&&(r=SS(r,n.pendingProps,an),r!==null?(n.stateNode=r,_t=n,Le=null,e=!0):e=!1),e||Ui(n)),null;case 13:return w_(e,n,r);case 4:return Ie(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ns(n,null,l,r):at(e,n,l,r),n.child;case 11:return v_(e,n,n.type,n.pendingProps,r);case 7:return at(e,n,n.pendingProps,r),n.child;case 8:return at(e,n,n.pendingProps.children,r),n.child;case 12:return at(e,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,Vn(n,n.type,l.value),at(e,n,l.children,r),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,zi(n),u=dt(u),l=l(u),n.flags|=1,at(e,n,l,r),n.child;case 14:return y_(e,n,n.type,n.pendingProps,r);case 15:return E_(e,n,n.type,n.pendingProps,r);case 19:return N_(e,n,r);case 31:return l=n.pendingProps,r=n.mode,l={mode:l.mode,children:l.children},e===null?(r=xl(l,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=gn(e.child,l),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return S_(e,n,r);case 24:return zi(n),l=dt(Qe),e===null?(u=Ku(),u===null&&(u=Ne,f=Fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:l,cache:u},Wu(n),Vn(n,Qe,u)):((e.lanes&r)!==0&&(Zu(e,n),Ur(n,null,null,r),xr()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Vn(n,Qe,l)):(l=f.cache,Vn(n,Qe,l),l!==u.cache&&Yu(n,[Qe],r,!0))),at(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Cn(e){e.flags|=4}function D_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n)){if(n=Vt.current,n!==null&&((ce&4194048)===ce?ln!==null:(ce&62914560)!==ce&&(ce&536870912)===0||n!==ln))throw Mr=Xu,dp;e.flags|=8192}}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?od():536870912,e.lanes|=n,Ms|=n)}function Vr(e,n){if(!_e)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function Q0(e,n,r){var l=n.pendingProps;switch(qu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(n),null;case 1:return xe(n),null;case 3:return r=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),En(Qe),Hn(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(n)?Cn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,op())),xe(n),null;case 26:return r=n.memoizedState,e===null?(Cn(n),r!==null?(xe(n),D_(n,r)):(xe(n),n.flags&=-16777217)):r?r!==e.memoizedState?(Cn(n),xe(n),D_(n,r)):(xe(n),n.flags&=-16777217):(e.memoizedProps!==l&&Cn(n),xe(n),n.flags&=-16777217),null;case 27:Fa(n),r=Z.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return xe(n),null}e=j.current,Ar(n)?ap(n):(e=Dg(u,l,r),n.stateNode=e,Cn(n))}return xe(n),null;case 5:if(Fa(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return xe(n),null}if(e=j.current,Ar(n))ap(n);else{switch(u=Kl(Z.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}e[ht]=n,e[Et]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(ot(e,r,l),r){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Cn(n)}}return xe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Cn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=Z.current,Ar(n)){if(e=n.stateNode,r=n.memoizedProps,l=null,u=_t,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[ht]=n,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||bg(e.nodeValue,r)),e||Ui(n)}else e=Kl(e).createTextNode(l),e[ht]=n,n.stateNode=e}return xe(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ar(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[ht]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xe(n),u=!1}else u=op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Tn(n),n):(Tn(n),null)}if(Tn(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=l!==null,e=e!==null&&e.memoizedState!==null,r){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Ul(n,n.updateQueue),xe(n),null;case 4:return Hn(),e===null&&$c(n.stateNode.containerInfo),xe(n),null;case 10:return En(n.type),xe(n),null;case 19:if(P(Ke),u=n.memoizedState,u===null)return xe(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)Vr(u,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Dl(e),f!==null){for(n.flags|=128,Vr(u,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)sp(r,e),r=r.sibling;return H(Ke,Ke.current&1|2),n.child}e=e.sibling}u.tail!==null&&rn()>Hl&&(n.flags|=128,l=!0,Vr(u,!1),n.lanes=4194304)}else{if(!l)if(e=Dl(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),Vr(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!_e)return xe(n),null}else 2*rn()-u.renderingStartTime>Hl&&r!==536870912&&(n.flags|=128,l=!0,Vr(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=rn(),n.sibling=null,e=Ke.current,H(Ke,l?e&1|2:e&1),n):(xe(n),null);case 22:case 23:return Tn(n),tc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(xe(n),n.subtreeFlags&6&&(n.flags|=8192)):xe(n),r=n.updateQueue,r!==null&&Ul(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),e!==null&&P(Hi),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),En(Qe),xe(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function K0(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return En(Qe),Hn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Fa(n),null;case 13:if(Tn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return P(Ke),null;case 4:return Hn(),null;case 10:return En(n.type),null;case 22:case 23:return Tn(n),tc(),e!==null&&P(Hi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return En(Qe),null;case 25:return null;default:return null}}function I_(e,n){switch(qu(n),n.tag){case 3:En(Qe),Hn();break;case 26:case 27:case 5:Fa(n);break;case 4:Hn();break;case 13:Tn(n);break;case 19:P(Ke);break;case 10:En(n.type);break;case 22:case 23:Tn(n),tc(),e!==null&&P(Hi);break;case 24:En(Qe)}}function Gr(e,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){l=void 0;var f=r.create,p=r.inst;l=f(),p.destroy=l}r=r.next}while(r!==u)}}catch(m){we(n,n.return,m)}}function Xn(e,n,r){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var p=l.inst,m=p.destroy;if(m!==void 0){p.destroy=void 0,u=n;var y=r,w=m;try{w()}catch(D){we(u,y,D)}}}l=l.next}while(l!==f)}}catch(D){we(n,n.return,D)}}function M_(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{yp(n,r)}catch(l){we(e,e.return,l)}}}function k_(e,n,r){r.props=Bi(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){we(e,n,l)}}function jr(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(u){we(e,n,u)}}function on(e,n){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(u){we(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){we(e,n,u)}else r.current=null}function x_(e){var n=e.type,r=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(u){we(e,e.return,u)}}function Oc(e,n,r){try{var l=e.stateNode;_S(l,e.type,r,n),l[Et]=n}catch(u){we(e,e.return,u)}}function U_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ii(e.type)||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||U_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ii(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ic(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ql));else if(l!==4&&(l===27&&ii(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Ic(e,n,r),e=e.sibling;e!==null;)Ic(e,n,r),e=e.sibling}function Ll(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(l===27&&ii(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ll(e,n,r),e=e.sibling;e!==null;)Ll(e,n,r),e=e.sibling}function L_(e){var n=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);ot(n,l,r),n[ht]=e,n[Et]=r}catch(f){we(e,e.return,f)}}var An=!1,qe=!1,Mc=!1,z_=typeof WeakSet=="function"?WeakSet:Set,nt=null;function X0(e,n){if(e=e.containerInfo,nf=eo,e=Kd(e),Du(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var p=0,m=-1,y=-1,w=0,D=0,k=e,R=null;t:for(;;){for(var N;k!==r||u!==0&&k.nodeType!==3||(m=p+u),k!==f||l!==0&&k.nodeType!==3||(y=p+l),k.nodeType===3&&(p+=k.nodeValue.length),(N=k.firstChild)!==null;)R=k,k=N;for(;;){if(k===e)break t;if(R===r&&++w===u&&(m=p),R===f&&++D===l&&(y=p),(N=k.nextSibling)!==null)break;k=R,R=k.parentNode}k=N}r=m===-1||y===-1?null:{start:m,end:y}}else r=null}r=r||{start:0,end:0}}else r=null;for(sf={focusedElem:e,selectionRange:r},eo=!1,nt=n;nt!==null;)if(n=nt,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,nt=e;else for(;nt!==null;){switch(n=nt,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=n,u=f.memoizedProps,f=f.memoizedState,l=r.stateNode;try{var X=Bi(r.type,u,r.elementType===r.type);e=l.getSnapshotBeforeUpdate(X,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(Y){we(r,r.return,Y)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)lf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,nt=e;break}nt=n.return}}function H_(e,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Wn(e,r),l&4&&Gr(5,r);break;case 1:if(Wn(e,r),l&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(p){we(r,r.return,p)}else{var u=Bi(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){we(r,r.return,p)}}l&64&&M_(r),l&512&&jr(r,r.return);break;case 3:if(Wn(e,r),l&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{yp(e,n)}catch(p){we(r,r.return,p)}}break;case 27:n===null&&l&4&&L_(r);case 26:case 5:Wn(e,r),n===null&&l&4&&x_(r),l&512&&jr(r,r.return);break;case 12:Wn(e,r);break;case 13:Wn(e,r),l&4&&q_(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=sS.bind(null,r),TS(e,r))));break;case 22:if(l=r.memoizedState!==null||An,!l){n=n!==null&&n.memoizedState!==null||qe,u=An;var f=qe;An=l,(qe=n)&&!f?Zn(e,r,(r.subtreeFlags&8772)!==0):Wn(e,r),An=u,qe=f}break;case 30:break;default:Wn(e,r)}}function P_(e){var n=e.alternate;n!==null&&(e.alternate=null,P_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,bt=!1;function wn(e,n,r){for(r=r.child;r!==null;)B_(e,n,r),r=r.sibling}function B_(e,n,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(fr,r)}catch{}switch(r.tag){case 26:qe||on(r,n),wn(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:qe||on(r,n);var l=Me,u=bt;ii(r.type)&&(Me=r.stateNode,bt=!1),wn(e,n,r),$r(r.stateNode),Me=l,bt=u;break;case 5:qe||on(r,n);case 6:if(l=Me,u=bt,Me=null,wn(e,n,r),Me=l,bt=u,Me!==null)if(bt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(r.stateNode)}catch(f){we(r,n,f)}else try{Me.removeChild(r.stateNode)}catch(f){we(r,n,f)}break;case 18:Me!==null&&(bt?(e=Me,Ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),la(e)):Ng(Me,r.stateNode));break;case 4:l=Me,u=bt,Me=r.stateNode.containerInfo,bt=!0,wn(e,n,r),Me=l,bt=u;break;case 0:case 11:case 14:case 15:qe||Xn(2,r,n),qe||Xn(4,r,n),wn(e,n,r);break;case 1:qe||(on(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&k_(r,n,l)),wn(e,n,r);break;case 21:wn(e,n,r);break;case 22:qe=(l=qe)||r.memoizedState!==null,wn(e,n,r),qe=l;break;default:wn(e,n,r)}}function q_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{la(e)}catch(r){we(n,n.return,r)}}function W0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new z_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new z_),n;default:throw Error(a(435,e.tag))}}function kc(e,n){var r=W0(e);n.forEach(function(l){var u=rS.bind(null,e,l);r.has(l)||(r.add(l),l.then(u,u))})}function It(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],f=e,p=n,m=p;e:for(;m!==null;){switch(m.tag){case 27:if(ii(m.type)){Me=m.stateNode,bt=!1;break e}break;case 5:Me=m.stateNode,bt=!1;break e;case 3:case 4:Me=m.stateNode.containerInfo,bt=!0;break e}m=m.return}if(Me===null)throw Error(a(160));B_(f,p,u),Me=null,bt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)V_(n,e),n=n.sibling}var Xt=null;function V_(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:It(n,e),Mt(e),l&4&&(Xn(3,e,e.return),Gr(3,e),Xn(5,e,e.return));break;case 1:It(n,e),Mt(e),l&512&&(qe||r===null||on(r,r.return)),l&64&&An&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var u=Xt;if(It(n,e),Mt(e),l&512&&(qe||r===null||on(r,r.return)),l&4){var f=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){e:{l=e.type,r=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[pr]||f[ht]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),ot(f,l,r),f[ht]=e,et(f),l=f;break e;case"link":var p=Lg("link","href",u).get(l+(r.href||""));if(p){for(var m=0;m<p.length;m++)if(f=p[m],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){p.splice(m,1);break t}}f=u.createElement(l),ot(f,l,r),u.head.appendChild(f);break;case"meta":if(p=Lg("meta","content",u).get(l+(r.content||""))){for(m=0;m<p.length;m++)if(f=p[m],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){p.splice(m,1);break t}}f=u.createElement(l),ot(f,l,r),u.head.appendChild(f);break;default:throw Error(a(468,l))}f[ht]=e,et(f),l=f}e.stateNode=l}else zg(u,e.type,e.stateNode);else e.stateNode=Ug(u,l,e.memoizedProps);else f!==l?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,l===null?zg(u,e.type,e.stateNode):Ug(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Oc(e,e.memoizedProps,r.memoizedProps)}break;case 27:It(n,e),Mt(e),l&512&&(qe||r===null||on(r,r.return)),r!==null&&l&4&&Oc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(It(n,e),Mt(e),l&512&&(qe||r===null||on(r,r.return)),e.flags&32){u=e.stateNode;try{cs(u,"")}catch(N){we(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Oc(e,u,r!==null?r.memoizedProps:u)),l&1024&&(Mc=!0);break;case 6:if(It(n,e),Mt(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(N){we(e,e.return,N)}}break;case 3:if(Zl=null,u=Xt,Xt=Xl(n.containerInfo),It(n,e),Xt=u,Mt(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{la(n.containerInfo)}catch(N){we(e,e.return,N)}Mc&&(Mc=!1,G_(e));break;case 4:l=Xt,Xt=Xl(e.stateNode.containerInfo),It(n,e),Mt(e),Xt=l;break;case 12:It(n,e),Mt(e);break;case 13:It(n,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Pc=rn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 22:u=e.memoizedState!==null;var y=r!==null&&r.memoizedState!==null,w=An,D=qe;if(An=w||u,qe=D||y,It(n,e),qe=D,An=w,Mt(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||y||An||qe||qi(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){y=r=n;try{if(f=y.stateNode,u)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{m=y.stateNode;var k=y.memoizedProps.style,R=k!=null&&k.hasOwnProperty("display")?k.display:null;m.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){we(y,y.return,N)}}}else if(n.tag===6){if(r===null){y=n;try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(N){we(y,y.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,kc(e,r))));break;case 19:It(n,e),Mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 30:break;case 21:break;default:It(n,e),Mt(e)}}function Mt(e){var n=e.flags;if(n&2){try{for(var r,l=e.return;l!==null;){if(U_(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,f=Dc(e);Ll(e,f,u);break;case 5:var p=r.stateNode;r.flags&32&&(cs(p,""),r.flags&=-33);var m=Dc(e);Ll(e,m,p);break;case 3:case 4:var y=r.stateNode.containerInfo,w=Dc(e);Ic(e,w,y);break;default:throw Error(a(161))}}catch(D){we(e,e.return,D)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function G_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;G_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)H_(e,n.alternate,n),n=n.sibling}function qi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xn(4,n,n.return),qi(n);break;case 1:on(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&k_(n,n.return,r),qi(n);break;case 27:$r(n.stateNode);case 26:case 5:on(n,n.return),qi(n);break;case 22:n.memoizedState===null&&qi(n);break;case 30:qi(n);break;default:qi(n)}e=e.sibling}}function Zn(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:Zn(u,f,r),Gr(4,f);break;case 1:if(Zn(u,f,r),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){we(l,l.return,w)}if(l=f,u=l.updateQueue,u!==null){var m=l.stateNode;try{var y=u.shared.hiddenCallbacks;if(y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<y.length;u++)vp(y[u],m)}catch(w){we(l,l.return,w)}}r&&p&64&&M_(f),jr(f,f.return);break;case 27:L_(f);case 26:case 5:Zn(u,f,r),r&&l===null&&p&4&&x_(f),jr(f,f.return);break;case 12:Zn(u,f,r);break;case 13:Zn(u,f,r),r&&p&4&&q_(u,f);break;case 22:f.memoizedState===null&&Zn(u,f,r),jr(f,f.return);break;case 30:break;default:Zn(u,f,r)}n=n.sibling}}function xc(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Or(r))}function Uc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Or(e))}function un(e,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)j_(e,n,r,l),n=n.sibling}function j_(e,n,r,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:un(e,n,r,l),u&2048&&Gr(9,n);break;case 1:un(e,n,r,l);break;case 3:un(e,n,r,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Or(e)));break;case 12:if(u&2048){un(e,n,r,l),e=n.stateNode;try{var f=n.memoizedProps,p=f.id,m=f.onPostCommit;typeof m=="function"&&m(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){we(n,n.return,y)}}else un(e,n,r,l);break;case 13:un(e,n,r,l);break;case 23:break;case 22:f=n.stateNode,p=n.alternate,n.memoizedState!==null?f._visibility&2?un(e,n,r,l):Yr(e,n):f._visibility&2?un(e,n,r,l):(f._visibility|=2,Os(e,n,r,l,(n.subtreeFlags&10256)!==0)),u&2048&&xc(p,n);break;case 24:un(e,n,r,l),u&2048&&Uc(n.alternate,n);break;default:un(e,n,r,l)}}function Os(e,n,r,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,p=n,m=r,y=l,w=p.flags;switch(p.tag){case 0:case 11:case 15:Os(f,p,m,y,u),Gr(8,p);break;case 23:break;case 22:var D=p.stateNode;p.memoizedState!==null?D._visibility&2?Os(f,p,m,y,u):Yr(f,p):(D._visibility|=2,Os(f,p,m,y,u)),u&&w&2048&&xc(p.alternate,p);break;case 24:Os(f,p,m,y,u),u&&w&2048&&Uc(p.alternate,p);break;default:Os(f,p,m,y,u)}n=n.sibling}}function Yr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,l=n,u=l.flags;switch(l.tag){case 22:Yr(r,l),u&2048&&xc(l.alternate,l);break;case 24:Yr(r,l),u&2048&&Uc(l.alternate,l);break;default:Yr(r,l)}n=n.sibling}}var Fr=8192;function Ds(e){if(e.subtreeFlags&Fr)for(e=e.child;e!==null;)Y_(e),e=e.sibling}function Y_(e){switch(e.tag){case 26:Ds(e),e.flags&Fr&&e.memoizedState!==null&&US(Xt,e.memoizedState,e.memoizedProps);break;case 5:Ds(e);break;case 3:case 4:var n=Xt;Xt=Xl(e.stateNode.containerInfo),Ds(e),Xt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Fr,Fr=16777216,Ds(e),Fr=n):Ds(e));break;default:Ds(e)}}function F_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Qr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];nt=l,K_(l,e)}F_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Q_(e),e=e.sibling}function Q_(e){switch(e.tag){case 0:case 11:case 15:Qr(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Qr(e);break;case 12:Qr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):Qr(e);break;default:Qr(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];nt=l,K_(l,e)}F_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xn(8,n,n.return),zl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function K_(e,n){for(;nt!==null;){var r=nt;switch(r.tag){case 0:case 11:case 15:Xn(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Or(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,nt=l;else e:for(r=e;nt!==null;){l=nt;var u=l.sibling,f=l.return;if(P_(l),l===r){nt=null;break e}if(u!==null){u.return=f,nt=u;break e}nt=f}}}var Z0={getCacheForType:function(e){var n=dt(Qe),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},J0=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ne=null,ae=null,ce=0,ye=0,kt=null,Jn=!1,Is=!1,Lc=!1,Rn=0,ze=0,$n=0,Vi=0,zc=0,Gt=0,Ms=0,Kr=null,Ct=null,Hc=!1,Pc=0,Hl=1/0,Pl=null,ei=null,lt=0,ti=null,ks=null,xs=0,Bc=0,qc=null,X_=null,Xr=0,Vc=null;function xt(){if((ve&2)!==0&&ce!==0)return ce&-ce;if(O.T!==null){var e=Ss;return e!==0?e:Xc()}return fd()}function W_(){Gt===0&&(Gt=(ce&536870912)===0||_e?ld():536870912);var e=Vt.current;return e!==null&&(e.flags|=32),Gt}function Ut(e,n,r){(e===Ne&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Us(e,0),ni(e,ce,Gt,!1)),dr(e,r),((ve&2)===0||e!==Ne)&&(e===Ne&&((ve&2)===0&&(Vi|=r),ze===4&&ni(e,ce,Gt,!1)),cn(e))}function Z_(e,n,r){if((ve&6)!==0)throw Error(a(327));var l=!r&&(n&124)===0&&(n&e.expiredLanes)===0||hr(e,n),u=l?tS(e,n):Yc(e,n,!0),f=l;do{if(u===0){Is&&!l&&ni(e,n,0,!1);break}else{if(r=e.current.alternate,f&&!$0(r)){u=Yc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var m=e;u=Kr;var y=m.current.memoizedState.isDehydrated;if(y&&(Us(m,p).flags|=256),p=Yc(m,p,!1),p!==2){if(Lc&&!y){m.errorRecoveryDisabledLanes|=f,Vi|=f,u=4;break e}f=Ct,Ct=u,f!==null&&(Ct===null?Ct=f:Ct.push.apply(Ct,f))}u=p}if(f=!1,u!==2)continue}}if(u===1){Us(e,0),ni(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:ni(l,n,Gt,!Jn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Pc+300-rn(),10<u)){if(ni(l,n,Gt,!Jn),Wa(l,0,!0)!==0)break e;l.timeoutHandle=wg(J_.bind(null,l,r,Ct,Pl,Hc,n,Gt,Vi,Ms,Jn,f,2,-0,0),u);break e}J_(l,r,Ct,Pl,Hc,n,Gt,Vi,Ms,Jn,f,0,-0,0)}}break}while(!0);cn(e)}function J_(e,n,r,l,u,f,p,m,y,w,D,k,R,N){if(e.timeoutHandle=-1,k=n.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(na={stylesheets:null,count:0,unsuspend:xS},Y_(n),k=LS(),k!==null)){e.cancelPendingCommit=k(rg.bind(null,e,n,f,r,l,u,p,m,y,D,1,R,N)),ni(e,f,p,!w);return}rg(e,n,f,r,l,u,p,m,y)}function $0(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var u=r[l],f=u.getSnapshot;u=u.value;try{if(!Ot(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ni(e,n,r,l){n&=~zc,n&=~Vi,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Nt(u),p=1<<f;l[f]=-1,u&=~p}r!==0&&ud(e,r,n)}function Bl(){return(ve&6)===0?(Wr(0),!1):!0}function Gc(){if(ae!==null){if(ye===0)var e=ae.return;else e=ae,yn=Li=null,ac(e),Rs=null,Br=0,e=ae;for(;e!==null;)I_(e.alternate,e),e=e.return;ae=null}}function Us(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,mS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Gc(),Ne=e,ae=r=gn(e.current,null),ce=n,ye=0,kt=null,Jn=!1,Is=hr(e,n),Lc=!1,Ms=Gt=zc=Vi=$n=ze=0,Ct=Kr=null,Hc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Nt(l),f=1<<u;n|=e[u],l&=~f}return Rn=n,ol(),r}function $_(e,n){te=null,O.H=Rl,n===Ir||n===ml?(n=gp(),ye=3):n===dp?(n=gp(),ye=4):ye=n===m_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kt=n,ae===null&&(ze=1,Ml(e,Ht(n,e.current)))}function eg(){var e=O.H;return O.H=Rl,e===null?Rl:e}function tg(){var e=O.A;return O.A=Z0,e}function jc(){ze=4,Jn||(ce&4194048)!==ce&&Vt.current!==null||(Is=!0),($n&134217727)===0&&(Vi&134217727)===0||Ne===null||ni(Ne,ce,Gt,!1)}function Yc(e,n,r){var l=ve;ve|=2;var u=eg(),f=tg();(Ne!==e||ce!==n)&&(Pl=null,Us(e,n)),n=!1;var p=ze;e:do try{if(ye!==0&&ae!==null){var m=ae,y=kt;switch(ye){case 8:Gc(),p=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(n=!0);var w=ye;if(ye=0,kt=null,Ls(e,m,y,w),r&&Is){p=0;break e}break;default:w=ye,ye=0,kt=null,Ls(e,m,y,w)}}eS(),p=ze;break}catch(D){$_(e,D)}while(!0);return n&&e.shellSuspendCounter++,yn=Li=null,ve=l,O.H=u,O.A=f,ae===null&&(Ne=null,ce=0,ol()),p}function eS(){for(;ae!==null;)ng(ae)}function tS(e,n){var r=ve;ve|=2;var l=eg(),u=tg();Ne!==e||ce!==n?(Pl=null,Hl=rn()+500,Us(e,n)):Is=hr(e,n);e:do try{if(ye!==0&&ae!==null){n=ae;var f=kt;t:switch(ye){case 1:ye=0,kt=null,Ls(e,n,f,1);break;case 2:case 9:if(pp(f)){ye=0,kt=null,ig(n);break}n=function(){ye!==2&&ye!==9||Ne!==e||(ye=7),cn(e)},f.then(n,n);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:pp(f)?(ye=0,kt=null,ig(n)):(ye=0,kt=null,Ls(e,n,f,7));break;case 5:var p=null;switch(ae.tag){case 26:p=ae.memoizedState;case 5:case 27:var m=ae;if(!p||Hg(p)){ye=0,kt=null;var y=m.sibling;if(y!==null)ae=y;else{var w=m.return;w!==null?(ae=w,ql(w)):ae=null}break t}}ye=0,kt=null,Ls(e,n,f,5);break;case 6:ye=0,kt=null,Ls(e,n,f,6);break;case 8:Gc(),ze=6;break e;default:throw Error(a(462))}}nS();break}catch(D){$_(e,D)}while(!0);return yn=Li=null,O.H=l,O.A=u,ve=r,ae!==null?0:(Ne=null,ce=0,ol(),ze)}function nS(){for(;ae!==null&&!CE();)ng(ae)}function ng(e){var n=O_(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,n===null?ql(e):ae=n}function ig(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=b_(r,n,n.pendingProps,n.type,void 0,ce);break;case 11:n=b_(r,n,n.pendingProps,n.type.render,n.ref,ce);break;case 5:ac(n);default:I_(r,n),n=ae=sp(n,Rn),n=O_(r,n,Rn)}e.memoizedProps=e.pendingProps,n===null?ql(e):ae=n}function Ls(e,n,r,l){yn=Li=null,ac(n),Rs=null,Br=0;var u=n.return;try{if(Y0(e,u,n,r,ce)){ze=1,Ml(e,Ht(r,e.current)),ae=null;return}}catch(f){if(u!==null)throw ae=u,f;ze=1,Ml(e,Ht(r,e.current)),ae=null;return}n.flags&32768?(_e||l===1?e=!0:Is||(ce&536870912)!==0?e=!1:(Jn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),sg(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){sg(n,Jn);return}e=n.return;var r=Q0(n.alternate,n,Rn);if(r!==null){ae=r;return}if(n=n.sibling,n!==null){ae=n;return}ae=n=e}while(n!==null);ze===0&&(ze=5)}function sg(e,n){do{var r=K0(e.alternate,e);if(r!==null){r.flags&=32767,ae=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ae=e;return}ae=e=r}while(e!==null);ze=6,ae=null}function rg(e,n,r,l,u,f,p,m,y){e.cancelPendingCommit=null;do Vl();while(lt!==0);if((ve&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=Uu,xE(e,r,f,p,m,y),e===Ne&&(ae=Ne=null,ce=0),ks=n,ti=e,xs=r,Bc=f,qc=u,X_=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(Qa,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,u=z.p,z.p=2,p=ve,ve|=4;try{X0(e,n,r)}finally{ve=p,z.p=u,O.T=l}}lt=1,ag(),lg(),og()}}function ag(){if(lt===1){lt=0;var e=ti,n=ks,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=z.p;z.p=2;var u=ve;ve|=4;try{V_(n,e);var f=sf,p=Kd(e.containerInfo),m=f.focusedElem,y=f.selectionRange;if(p!==m&&m&&m.ownerDocument&&Qd(m.ownerDocument.documentElement,m)){if(y!==null&&Du(m)){var w=y.start,D=y.end;if(D===void 0&&(D=w),"selectionStart"in m)m.selectionStart=w,m.selectionEnd=Math.min(D,m.value.length);else{var k=m.ownerDocument||document,R=k&&k.defaultView||window;if(R.getSelection){var N=R.getSelection(),X=m.textContent.length,Y=Math.min(y.start,X),be=y.end===void 0?Y:Math.min(y.end,X);!N.extend&&Y>be&&(p=be,be=Y,Y=p);var b=Fd(m,Y),T=Fd(m,be);if(b&&T&&(N.rangeCount!==1||N.anchorNode!==b.node||N.anchorOffset!==b.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var A=k.createRange();A.setStart(b.node,b.offset),N.removeAllRanges(),Y>be?(N.addRange(A),N.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),N.addRange(A))}}}}for(k=[],N=m;N=N.parentNode;)N.nodeType===1&&k.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<k.length;m++){var I=k[m];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}eo=!!nf,sf=nf=null}finally{ve=u,z.p=l,O.T=r}}e.current=n,lt=2}}function lg(){if(lt===2){lt=0;var e=ti,n=ks,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=z.p;z.p=2;var u=ve;ve|=4;try{H_(e,n.alternate,n)}finally{ve=u,z.p=l,O.T=r}}lt=3}}function og(){if(lt===4||lt===3){lt=0,AE();var e=ti,n=ks,r=xs,l=X_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?lt=5:(lt=0,ks=ti=null,ug(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ei=null),uu(r),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(fr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,u=z.p,z.p=2,O.T=null;try{for(var f=e.onRecoverableError,p=0;p<l.length;p++){var m=l[p];f(m.value,{componentStack:m.stack})}}finally{O.T=n,z.p=u}}(xs&3)!==0&&Vl(),cn(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===Vc?Xr++:(Xr=0,Vc=e):Xr=0,Wr(0)}}function ug(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Or(n)))}function Vl(e){return ag(),lg(),og(),cg()}function cg(){if(lt!==5)return!1;var e=ti,n=Bc;Bc=0;var r=uu(xs),l=O.T,u=z.p;try{z.p=32>r?32:r,O.T=null,r=qc,qc=null;var f=ti,p=xs;if(lt=0,ks=ti=null,xs=0,(ve&6)!==0)throw Error(a(331));var m=ve;if(ve|=4,Q_(f.current),j_(f,f.current,p,r),ve=m,Wr(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(fr,f)}catch{}return!0}finally{z.p=u,O.T=l,ug(e,n)}}function fg(e,n,r){n=Ht(r,n),n=Ec(e.stateNode,n,2),e=Yn(e,n,2),e!==null&&(dr(e,2),cn(e))}function we(e,n,r){if(e.tag===3)fg(e,e,r);else for(;n!==null;){if(n.tag===3){fg(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ei===null||!ei.has(l))){e=Ht(r,e),r=__(2),l=Yn(n,r,2),l!==null&&(g_(r,l,n,e),dr(l,2),cn(l));break}}n=n.return}}function Fc(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new J0;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(r)||(Lc=!0,u.add(r),e=iS.bind(null,e,n,r),n.then(e,e))}function iS(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ne===e&&(ce&r)===r&&(ze===4||ze===3&&(ce&62914560)===ce&&300>rn()-Pc?(ve&2)===0&&Us(e,0):zc|=r,Ms===ce&&(Ms=0)),cn(e)}function hg(e,n){n===0&&(n=od()),e=ms(e,n),e!==null&&(dr(e,n),cn(e))}function sS(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),hg(e,r)}function rS(e,n){var r=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),hg(e,r)}function aS(e,n){return ru(e,n)}var Gl=null,zs=null,Qc=!1,jl=!1,Kc=!1,Gi=0;function cn(e){e!==zs&&e.next===null&&(zs===null?Gl=zs=e:zs=zs.next=e),jl=!0,Qc||(Qc=!0,oS())}function Wr(e,n){if(!Kc&&jl){Kc=!0;do for(var r=!1,l=Gl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var p=l.suspendedLanes,m=l.pingedLanes;f=(1<<31-Nt(42|e)+1)-1,f&=u&~(p&~m),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,gg(l,f))}else f=ce,f=Wa(l,l===Ne?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||hr(l,f)||(r=!0,gg(l,f));l=l.next}while(r);Kc=!1}}function lS(){dg()}function dg(){jl=Qc=!1;var e=0;Gi!==0&&(gS()&&(e=Gi),Gi=0);for(var n=rn(),r=null,l=Gl;l!==null;){var u=l.next,f=pg(l,n);f===0?(l.next=null,r===null?Gl=u:r.next=u,u===null&&(zs=r)):(r=l,(e!==0||(f&3)!==0)&&(jl=!0)),l=u}Wr(e)}function pg(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var p=31-Nt(f),m=1<<p,y=u[p];y===-1?((m&r)===0||(m&l)!==0)&&(u[p]=kE(m,n)):y<=n&&(e.expiredLanes|=m),f&=~m}if(n=Ne,r=ce,r=Wa(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===n&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&au(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||hr(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(l!==null&&au(l),uu(r)){case 2:case 8:r=rd;break;case 32:r=Qa;break;case 268435456:r=ad;break;default:r=Qa}return l=_g.bind(null,e),r=ru(r,l),e.callbackPriority=n,e.callbackNode=r,n}return l!==null&&l!==null&&au(l),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Vl()&&e.callbackNode!==r)return null;var l=ce;return l=Wa(e,e===Ne?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Z_(e,l,n),pg(e,rn()),e.callbackNode!=null&&e.callbackNode===r?_g.bind(null,e):null)}function gg(e,n){if(Vl())return null;Z_(e,n,!0)}function oS(){vS(function(){(ve&6)!==0?ru(sd,lS):dg()})}function Xc(){return Gi===0&&(Gi=ld()),Gi}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function vg(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function uS(e,n,r,l,u){if(n==="submit"&&r&&r.stateNode===u){var f=mg((u[Et]||null).action),p=l.submitter;p&&(n=(n=p[Et]||null)?mg(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var m=new rl("action","action",null,l,u);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gi!==0){var y=p?vg(u,p):new FormData(u);_c(r,{pending:!0,data:y,method:u.method,action:f},null,y)}}else typeof f=="function"&&(m.preventDefault(),y=p?vg(u,p):new FormData(u),_c(r,{pending:!0,data:y,method:u.method,action:f},f,y))},currentTarget:u}]})}}for(var Wc=0;Wc<xu.length;Wc++){var Zc=xu[Wc],cS=Zc.toLowerCase(),fS=Zc[0].toUpperCase()+Zc.slice(1);Kt(cS,"on"+fS)}Kt(Zd,"onAnimationEnd"),Kt(Jd,"onAnimationIteration"),Kt($d,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(N0,"onTransitionRun"),Kt(O0,"onTransitionStart"),Kt(D0,"onTransitionCancel"),Kt(ep,"onTransitionEnd"),ls("onMouseEnter",["mouseout","mouseover"]),ls("onMouseLeave",["mouseout","mouseover"]),ls("onPointerEnter",["pointerout","pointerover"]),ls("onPointerLeave",["pointerout","pointerover"]),Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zr));function yg(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var p=l.length-1;0<=p;p--){var m=l[p],y=m.instance,w=m.currentTarget;if(m=m.listener,y!==f&&u.isPropagationStopped())break e;f=m,u.currentTarget=w;try{f(u)}catch(D){Il(D)}u.currentTarget=null,f=y}else for(p=0;p<l.length;p++){if(m=l[p],y=m.instance,w=m.currentTarget,m=m.listener,y!==f&&u.isPropagationStopped())break e;f=m,u.currentTarget=w;try{f(u)}catch(D){Il(D)}u.currentTarget=null,f=y}}}}function le(e,n){var r=n[cu];r===void 0&&(r=n[cu]=new Set);var l=e+"__bubble";r.has(l)||(Eg(n,e,2,!1),r.add(l))}function Jc(e,n,r){var l=0;n&&(l|=4),Eg(r,e,l,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function $c(e){if(!e[Yl]){e[Yl]=!0,dd.forEach(function(r){r!=="selectionchange"&&(hS.has(r)||Jc(r,!1,e),Jc(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Jc("selectionchange",!1,n))}}function Eg(e,n,r,l){switch(jg(n)){case 2:var u=PS;break;case 8:u=BS;break;default:u=pf}r=u.bind(null,n,r,e),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function ef(e,n,r,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var m=l.stateNode.containerInfo;if(m===u)break;if(p===4)for(p=l.return;p!==null;){var y=p.tag;if((y===3||y===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;m!==null;){if(p=ss(m),p===null)return;if(y=p.tag,y===5||y===6||y===26||y===27){l=f=p;continue e}m=m.parentNode}}l=l.return}Rd(function(){var w=f,D=yu(r),k=[];e:{var R=tp.get(e);if(R!==void 0){var N=rl,X=e;switch(e){case"keypress":if(il(r)===0)break e;case"keydown":case"keyup":N=a0;break;case"focusin":X="focus",N=Au;break;case"focusout":X="blur",N=Au;break;case"beforeblur":case"afterblur":N=Au;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=u0;break;case Zd:case Jd:case $d:N=ZE;break;case ep:N=f0;break;case"scroll":case"scrollend":N=FE;break;case"wheel":N=d0;break;case"copy":case"cut":case"paste":N=$E;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Md;break;case"toggle":case"beforetoggle":N=_0}var Y=(n&4)!==0,be=!Y&&(e==="scroll"||e==="scrollend"),b=Y?R!==null?R+"Capture":null:R;Y=[];for(var T=w,A;T!==null;){var I=T;if(A=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||A===null||b===null||(I=gr(T,b),I!=null&&Y.push(Jr(T,I,A))),be)break;T=T.return}0<Y.length&&(R=new N(R,X,null,r,D),k.push({event:R,listeners:Y}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&r!==vu&&(X=r.relatedTarget||r.fromElement)&&(ss(X)||X[is]))break e;if((N||R)&&(R=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,N?(X=r.relatedTarget||r.toElement,N=w,X=X?ss(X):null,X!==null&&(be=c(X),Y=X.tag,X!==be||Y!==5&&Y!==27&&Y!==6)&&(X=null)):(N=null,X=w),N!==X)){if(Y=Dd,I="onMouseLeave",b="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Md,I="onPointerLeave",b="onPointerEnter",T="pointer"),be=N==null?R:_r(N),A=X==null?R:_r(X),R=new Y(I,T+"leave",N,r,D),R.target=be,R.relatedTarget=A,I=null,ss(D)===w&&(Y=new Y(b,T+"enter",X,r,D),Y.target=A,Y.relatedTarget=be,I=Y),be=I,N&&X)t:{for(Y=N,b=X,T=0,A=Y;A;A=Hs(A))T++;for(A=0,I=b;I;I=Hs(I))A++;for(;0<T-A;)Y=Hs(Y),T--;for(;0<A-T;)b=Hs(b),A--;for(;T--;){if(Y===b||b!==null&&Y===b.alternate)break t;Y=Hs(Y),b=Hs(b)}Y=null}else Y=null;N!==null&&Sg(k,R,N,Y,!1),X!==null&&be!==null&&Sg(k,be,X,Y,!0)}}e:{if(R=w?_r(w):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var B=Bd;else if(Hd(R))if(qd)B=A0;else{B=b0;var ne=T0}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?w&&mu(w.elementType)&&(B=Bd):B=C0;if(B&&(B=B(e,w))){Pd(k,B,r,D);break e}ne&&ne(e,R,w),e==="focusout"&&w&&R.type==="number"&&w.memoizedProps.value!=null&&gu(R,"number",R.value)}switch(ne=w?_r(w):window,e){case"focusin":(Hd(ne)||ne.contentEditable==="true")&&(ps=ne,Iu=w,Cr=null);break;case"focusout":Cr=Iu=ps=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Xd(k,r,D);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Xd(k,r,D)}var q;if(Ru)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ds?Ld(e,r)&&(F="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(F="onCompositionStart");F&&(kd&&r.locale!=="ko"&&(ds||F!=="onCompositionStart"?F==="onCompositionEnd"&&ds&&(q=Nd()):(qn=D,Tu="value"in qn?qn.value:qn.textContent,ds=!0)),ne=Fl(w,F),0<ne.length&&(F=new Id(F,e,null,r,D),k.push({event:F,listeners:ne}),q?F.data=q:(q=zd(r),q!==null&&(F.data=q)))),(q=m0?v0(e,r):y0(e,r))&&(F=Fl(w,"onBeforeInput"),0<F.length&&(ne=new Id("onBeforeInput","beforeinput",null,r,D),k.push({event:ne,listeners:F}),ne.data=q)),uS(k,e,w,r,D)}yg(k,n)})}function Jr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Fl(e,n){for(var r=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=gr(e,r),u!=null&&l.unshift(Jr(e,u,f)),u=gr(e,n),u!=null&&l.push(Jr(e,u,f))),e.tag===3)return l;e=e.return}return[]}function Hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sg(e,n,r,l,u){for(var f=n._reactName,p=[];r!==null&&r!==l;){var m=r,y=m.alternate,w=m.stateNode;if(m=m.tag,y!==null&&y===l)break;m!==5&&m!==26&&m!==27||w===null||(y=w,u?(w=gr(r,f),w!=null&&p.unshift(Jr(r,w,y))):u||(w=gr(r,f),w!=null&&p.push(Jr(r,w,y)))),r=r.return}p.length!==0&&e.push({event:n,listeners:p})}var dS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(dS,`
`).replace(pS,"")}function bg(e,n){return n=Tg(n),Tg(e)===n}function Ql(){}function Te(e,n,r,l,u,f){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||cs(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&cs(e,""+l);break;case"className":Ja(e,"class",l);break;case"tabIndex":Ja(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ja(e,r,l);break;case"style":Ad(e,l,f);break;case"data":if(n!=="object"){Ja(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=tl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Te(e,n,"name",u.name,u,null),Te(e,n,"formEncType",u.formEncType,u,null),Te(e,n,"formMethod",u.formMethod,u,null),Te(e,n,"formTarget",u.formTarget,u,null)):(Te(e,n,"encType",u.encType,u,null),Te(e,n,"method",u.method,u,null),Te(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=tl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Ql);break;case"onScroll":l!=null&&le("scroll",e);break;case"onScrollEnd":l!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=tl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":le("beforetoggle",e),le("toggle",e),Za(e,"popover",l);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Za(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=jE.get(r)||r,Za(e,r,l))}}function tf(e,n,r,l,u,f){switch(r){case"style":Ad(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?cs(e,l):(typeof l=="number"||typeof l=="bigint")&&cs(e,""+l);break;case"onScroll":l!=null&&le("scroll",e);break;case"onScrollEnd":l!=null&&le("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pd.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),f=e[Et]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,l,u);break e}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Za(e,r,l)}}}function ot(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var l=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var p=r[f];if(p!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Te(e,n,f,p,r,null)}}u&&Te(e,n,"srcSet",r.srcSet,r,null),l&&Te(e,n,"src",r.src,r,null);return;case"input":le("invalid",e);var m=f=p=u=null,y=null,w=null;for(l in r)if(r.hasOwnProperty(l)){var D=r[l];if(D!=null)switch(l){case"name":u=D;break;case"type":p=D;break;case"checked":y=D;break;case"defaultChecked":w=D;break;case"value":f=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(137,n));break;default:Te(e,n,l,D,r,null)}}Sd(e,f,m,y,w,p,u,!1),$a(e);return;case"select":le("invalid",e),l=p=f=null;for(u in r)if(r.hasOwnProperty(u)&&(m=r[u],m!=null))switch(u){case"value":f=m;break;case"defaultValue":p=m;break;case"multiple":l=m;default:Te(e,n,u,m,r,null)}n=f,r=p,e.multiple=!!l,n!=null?us(e,!!l,n,!1):r!=null&&us(e,!!l,r,!0);return;case"textarea":le("invalid",e),f=u=l=null;for(p in r)if(r.hasOwnProperty(p)&&(m=r[p],m!=null))switch(p){case"value":l=m;break;case"defaultValue":u=m;break;case"children":f=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(a(91));break;default:Te(e,n,p,m,r,null)}bd(e,l,u,f),$a(e);return;case"option":for(y in r)if(r.hasOwnProperty(y)&&(l=r[y],l!=null))switch(y){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Te(e,n,y,l,r,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(l=0;l<Zr.length;l++)le(Zr[l],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in r)if(r.hasOwnProperty(w)&&(l=r[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Te(e,n,w,l,r,null)}return;default:if(mu(n)){for(D in r)r.hasOwnProperty(D)&&(l=r[D],l!==void 0&&tf(e,n,D,l,r,void 0));return}}for(m in r)r.hasOwnProperty(m)&&(l=r[m],l!=null&&Te(e,n,m,l,r,null))}function _S(e,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,p=null,m=null,y=null,w=null,D=null;for(N in r){var k=r[N];if(r.hasOwnProperty(N)&&k!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=k;default:l.hasOwnProperty(N)||Te(e,n,N,null,l,k)}}for(var R in l){var N=l[R];if(k=r[R],l.hasOwnProperty(R)&&(N!=null||k!=null))switch(R){case"type":f=N;break;case"name":u=N;break;case"checked":w=N;break;case"defaultChecked":D=N;break;case"value":p=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(137,n));break;default:N!==k&&Te(e,n,R,N,l,k)}}_u(e,p,m,y,w,D,f,u);return;case"select":N=p=m=R=null;for(f in r)if(y=r[f],r.hasOwnProperty(f)&&y!=null)switch(f){case"value":break;case"multiple":N=y;default:l.hasOwnProperty(f)||Te(e,n,f,null,l,y)}for(u in l)if(f=l[u],y=r[u],l.hasOwnProperty(u)&&(f!=null||y!=null))switch(u){case"value":R=f;break;case"defaultValue":m=f;break;case"multiple":p=f;default:f!==y&&Te(e,n,u,f,l,y)}n=m,r=p,l=N,R!=null?us(e,!!r,R,!1):!!l!=!!r&&(n!=null?us(e,!!r,n,!0):us(e,!!r,r?[]:"",!1));return;case"textarea":N=R=null;for(m in r)if(u=r[m],r.hasOwnProperty(m)&&u!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Te(e,n,m,null,l,u)}for(p in l)if(u=l[p],f=r[p],l.hasOwnProperty(p)&&(u!=null||f!=null))switch(p){case"value":R=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==f&&Te(e,n,p,u,l,f)}Td(e,R,N);return;case"option":for(var X in r)if(R=r[X],r.hasOwnProperty(X)&&R!=null&&!l.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:Te(e,n,X,null,l,R)}for(y in l)if(R=l[y],N=r[y],l.hasOwnProperty(y)&&R!==N&&(R!=null||N!=null))switch(y){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Te(e,n,y,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in r)R=r[Y],r.hasOwnProperty(Y)&&R!=null&&!l.hasOwnProperty(Y)&&Te(e,n,Y,null,l,R);for(w in l)if(R=l[w],N=r[w],l.hasOwnProperty(w)&&R!==N&&(R!=null||N!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(137,n));break;default:Te(e,n,w,R,l,N)}return;default:if(mu(n)){for(var be in r)R=r[be],r.hasOwnProperty(be)&&R!==void 0&&!l.hasOwnProperty(be)&&tf(e,n,be,void 0,l,R);for(D in l)R=l[D],N=r[D],!l.hasOwnProperty(D)||R===N||R===void 0&&N===void 0||tf(e,n,D,R,l,N);return}}for(var b in r)R=r[b],r.hasOwnProperty(b)&&R!=null&&!l.hasOwnProperty(b)&&Te(e,n,b,null,l,R);for(k in l)R=l[k],N=r[k],!l.hasOwnProperty(k)||R===N||R==null&&N==null||Te(e,n,k,R,l,N)}var nf=null,sf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var af=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===af?!1:(af=e,!0):(af=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(e){return Rg.resolve(null).then(e).catch(yS)}:wg;function yS(e){setTimeout(function(){throw e})}function ii(e){return e==="head"}function Ng(e,n){var r=n,l=0,u=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<l&&8>l){r=l;var p=e.ownerDocument;if(r&1&&$r(p.documentElement),r&2&&$r(p.body),r&4)for(r=p.head,$r(r),p=r.firstChild;p;){var m=p.nextSibling,y=p.nodeName;p[pr]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=m}}if(u===0){e.removeChild(f),la(n);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:l=r.charCodeAt(0)-48;else l=0;r=f}while(r);la(n)}function lf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":lf(r),fu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function ES(e,n,r,l){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[pr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function SS(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Wt(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function TS(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Wt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var uf=null;function Og(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function Dg(e,n,r){switch(n=Kl(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function $r(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fu(e)}var jt=new Map,Ig=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=z.d;z.d={f:bS,r:CS,D:AS,C:wS,L:RS,m:NS,X:DS,S:OS,M:IS};function bS(){var e=Nn.f(),n=Bl();return e||n}function CS(e){var n=rs(e);n!==null&&n.tag===5&&n.type==="form"?Zp(n):Nn.r(e)}var Ps=typeof document>"u"?null:document;function Mg(e,n,r){var l=Ps;if(l&&typeof n=="string"&&n){var u=zt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Ig.has(u)||(Ig.add(u),e={rel:e,crossOrigin:r,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),ot(n,"link",e),et(n),l.head.appendChild(n)))}}function AS(e){Nn.D(e),Mg("dns-prefetch",e,null)}function wS(e,n){Nn.C(e,n),Mg("preconnect",e,n)}function RS(e,n,r){Nn.L(e,n,r);var l=Ps;if(l&&e&&n){var u='link[rel="preload"][as="'+zt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+zt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+zt(r.imageSizes)+'"]')):u+='[href="'+zt(e)+'"]';var f=u;switch(n){case"style":f=Bs(e);break;case"script":f=qs(e)}jt.has(f)||(e=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),jt.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(ea(f))||n==="script"&&l.querySelector(ta(f))||(n=l.createElement("link"),ot(n,"link",e),et(n),l.head.appendChild(n)))}}function NS(e,n){Nn.m(e,n);var r=Ps;if(r&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=qs(e)}if(!jt.has(f)&&(e=v({rel:"modulepreload",href:e},n),jt.set(f,e),r.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ta(f)))return}l=r.createElement("link"),ot(l,"link",e),et(l),r.head.appendChild(l)}}}function OS(e,n,r){Nn.S(e,n,r);var l=Ps;if(l&&e){var u=as(l).hoistableStyles,f=Bs(e);n=n||"default";var p=u.get(f);if(!p){var m={loading:0,preload:null};if(p=l.querySelector(ea(f)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},r),(r=jt.get(f))&&cf(e,r);var y=p=l.createElement("link");et(y),ot(y,"link",e),y._p=new Promise(function(w,D){y.onload=w,y.onerror=D}),y.addEventListener("load",function(){m.loading|=1}),y.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Wl(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:m},u.set(f,p)}}}function DS(e,n){Nn.X(e,n);var r=Ps;if(r&&e){var l=as(r).hoistableScripts,u=qs(e),f=l.get(u);f||(f=r.querySelector(ta(u)),f||(e=v({src:e,async:!0},n),(n=jt.get(u))&&ff(e,n),f=r.createElement("script"),et(f),ot(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function IS(e,n){Nn.M(e,n);var r=Ps;if(r&&e){var l=as(r).hoistableScripts,u=qs(e),f=l.get(u);f||(f=r.querySelector(ta(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=jt.get(u))&&ff(e,n),f=r.createElement("script"),et(f),ot(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function kg(e,n,r,l){var u=(u=Z.current)?Xl(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Bs(r.href),r=as(u).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Bs(r.href);var f=as(u).hoistableStyles,p=f.get(e);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,p),(f=u.querySelector(ea(e)))&&!f._p&&(p.instance=f,p.state.loading=5),jt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},jt.set(e,r),f||MS(u,e,r,p.state))),n&&l===null)throw Error(a(528,""));return p}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qs(r),r=as(u).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Bs(e){return'href="'+zt(e)+'"'}function ea(e){return'link[rel="stylesheet"]['+e+"]"}function xg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function MS(e,n,r,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ot(n,"link",r),et(n),e.head.appendChild(n))}function qs(e){return'[src="'+zt(e)+'"]'}function ta(e){return"script[async]"+e}function Ug(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+zt(r.href)+'"]');if(l)return n.instance=l,et(l),l;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),et(l),ot(l,"style",u),Wl(l,r.precedence,e),n.instance=l;case"stylesheet":u=Bs(r.href);var f=e.querySelector(ea(u));if(f)return n.state.loading|=4,n.instance=f,et(f),f;l=xg(r),(u=jt.get(u))&&cf(l,u),f=(e.ownerDocument||e).createElement("link"),et(f);var p=f;return p._p=new Promise(function(m,y){p.onload=m,p.onerror=y}),ot(f,"link",l),n.state.loading|=4,Wl(f,r.precedence,e),n.instance=f;case"script":return f=qs(r.src),(u=e.querySelector(ta(f)))?(n.instance=u,et(u),u):(l=r,(u=jt.get(f))&&(l=v({},r),ff(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),et(u),ot(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Wl(l,r.precedence,e));return n.instance}function Wl(e,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,p=0;p<l.length;p++){var m=l[p];if(m.dataset.precedence===n)f=m;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function Lg(e,n,r){if(Zl===null){var l=new Map,u=Zl=new Map;u.set(r,l)}else u=Zl,l=u.get(r),l||(l=new Map,u.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var f=r[u];if(!(f[pr]||f[ht]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=e+p;var m=l.get(p);m?m.push(f):l.set(p,[f])}}return l}function zg(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function kS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var na=null;function xS(){}function US(e,n,r){if(na===null)throw Error(a(475));var l=na;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Bs(r.href),f=e.querySelector(ea(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Jl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,et(f);return}f=e.ownerDocument||e,r=xg(r),(u=jt.get(u))&&cf(r,u),f=f.createElement("link"),et(f);var p=f;p._p=new Promise(function(m,y){p.onload=m,p.onerror=y}),ot(f,"link",r),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Jl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function LS(){if(na===null)throw Error(a(475));var e=na;return e.stylesheets&&e.count===0&&hf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&hf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)hf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function hf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(zS,e),$l=null,Jl.call(e))}function zS(e,n){if(!(n.state.loading&4)){var r=$l.get(e);if(r)var l=r.get(null);else{r=new Map,$l.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var p=u[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(r.set(p.dataset.precedence,p),l=p)}l&&r.set(null,l)}u=n.instance,p=u.getAttribute("data-precedence"),f=r.get(p)||l,f===l&&r.set(null,u),r.set(p,u),this.count++,l=Jl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ia={$$typeof:Re,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function HS(e,n,r,l,u,f,p,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.hiddenUpdates=lu(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Pg(e,n,r,l,u,f,p,m,y,w,D,k){return e=new HS(e,n,r,p,m,y,w,k),n=1,f===!0&&(n|=24),f=Dt(3,null,null,n),e.current=f,f.stateNode=e,n=Fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:r,cache:n},Wu(f),e}function Bg(e){return e?(e=vs,e):vs}function qg(e,n,r,l,u,f){u=Bg(u),l.context===null?l.context=u:l.pendingContext=u,l=jn(n),l.payload={element:r},f=f===void 0?null:f,f!==null&&(l.callback=f),r=Yn(e,l,n),r!==null&&(Ut(r,e,n),kr(r,e,n))}function Vg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function df(e,n){Vg(e,n),(e=e.alternate)&&Vg(e,n)}function Gg(e){if(e.tag===13){var n=ms(e,67108864);n!==null&&Ut(n,e,67108864),df(e,67108864)}}var eo=!0;function PS(e,n,r,l){var u=O.T;O.T=null;var f=z.p;try{z.p=2,pf(e,n,r,l)}finally{z.p=f,O.T=u}}function BS(e,n,r,l){var u=O.T;O.T=null;var f=z.p;try{z.p=8,pf(e,n,r,l)}finally{z.p=f,O.T=u}}function pf(e,n,r,l){if(eo){var u=_f(l);if(u===null)ef(e,n,l,to,r),Yg(e,l);else if(VS(u,e,n,r,l))l.stopPropagation();else if(Yg(e,l),n&4&&-1<qS.indexOf(e)){for(;u!==null;){var f=rs(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=wi(f.pendingLanes);if(p!==0){var m=f;for(m.pendingLanes|=2,m.entangledLanes|=2;p;){var y=1<<31-Nt(p);m.entanglements[1]|=y,p&=~y}cn(f),(ve&6)===0&&(Hl=rn()+500,Wr(0))}}break;case 13:m=ms(f,2),m!==null&&Ut(m,f,2),Bl(),df(f,2)}if(f=_f(l),f===null&&ef(e,n,l,to,r),f===u)break;u=f}u!==null&&l.stopPropagation()}else ef(e,n,l,null,r)}}function _f(e){return e=yu(e),gf(e)}var to=null;function gf(e){if(to=null,e=ss(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wE()){case sd:return 2;case rd:return 8;case Qa:case RE:return 32;case ad:return 268435456;default:return 32}default:return 32}}var mf=!1,si=null,ri=null,ai=null,sa=new Map,ra=new Map,li=[],qS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,n){switch(e){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":sa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(n.pointerId)}}function aa(e,n,r,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rs(n),n!==null&&Gg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function VS(e,n,r,l,u){switch(n){case"focusin":return si=aa(si,e,n,r,l,u),!0;case"dragenter":return ri=aa(ri,e,n,r,l,u),!0;case"mouseover":return ai=aa(ai,e,n,r,l,u),!0;case"pointerover":var f=u.pointerId;return sa.set(f,aa(sa.get(f)||null,e,n,r,l,u)),!0;case"gotpointercapture":return f=u.pointerId,ra.set(f,aa(ra.get(f)||null,e,n,r,l,u)),!0}return!1}function Fg(e){var n=ss(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){e.blockedOn=n,UE(e.priority,function(){if(r.tag===13){var l=xt();l=ou(l);var u=ms(r,l);u!==null&&Ut(u,r,l),df(r,l)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=_f(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);vu=l,r.target.dispatchEvent(l),vu=null}else return n=rs(r),n!==null&&Gg(n),e.blockedOn=r,!1;n.shift()}return!0}function Qg(e,n,r){no(e)&&r.delete(n)}function GS(){mf=!1,si!==null&&no(si)&&(si=null),ri!==null&&no(ri)&&(ri=null),ai!==null&&no(ai)&&(ai=null),sa.forEach(Qg),ra.forEach(Qg)}function io(e,n){e.blockedOn===n&&(e.blockedOn=null,mf||(mf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,GS)))}var so=null;function Kg(e){so!==e&&(so=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){so===e&&(so=null);for(var n=0;n<e.length;n+=3){var r=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(gf(l||r)===null)continue;break}var f=rs(r);f!==null&&(e.splice(n,3),n-=3,_c(f,{pending:!0,data:u,method:r.method,action:l},l,u))}}))}function la(e){function n(y){return io(y,e)}si!==null&&io(si,e),ri!==null&&io(ri,e),ai!==null&&io(ai,e),sa.forEach(n),ra.forEach(n);for(var r=0;r<li.length;r++){var l=li[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<li.length&&(r=li[0],r.blockedOn===null);)Fg(r),r.blockedOn===null&&li.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var u=r[l],f=r[l+1],p=u[Et]||null;if(typeof f=="function")p||Kg(r);else if(p){var m=null;if(f&&f.hasAttribute("formAction")){if(u=f,p=f[Et]||null)m=p.formAction;else if(gf(u)!==null)continue}else m=p.action;typeof m=="function"?r[l+1]=m:(r.splice(l,3),l-=3),Kg(r)}}}function vf(e){this._internalRoot=e}ro.prototype.render=vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=xt();qg(r,l,e,n,null,null)},ro.prototype.unmount=vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qg(e.current,2,null,e,null,null),Bl(),n[is]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var n=fd();e={blockedOn:null,target:e,priority:n};for(var r=0;r<li.length&&n!==0&&n<li[r].priority;r++);li.splice(r,0,e),r===0&&Fg(e)}};var Xg=t.version;if(Xg!=="19.1.0")throw Error(a(527,Xg,"19.1.0"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var jS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{fr=ao.inject(jS),Rt=ao}catch{}}return ua.createRoot=function(e,n){if(!o(e))throw Error(a(299));var r=!1,l="",u=f_,f=h_,p=d_,m=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(m=n.unstable_transitionCallbacks)),n=Pg(e,1,!1,null,null,r,l,u,f,p,m,null),e[is]=n.current,$c(e),new vf(n)},ua.hydrateRoot=function(e,n,r){if(!o(e))throw Error(a(299));var l=!1,u="",f=f_,p=h_,m=d_,y=null,w=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(m=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(y=r.unstable_transitionCallbacks),r.formState!==void 0&&(w=r.formState)),n=Pg(e,1,!0,n,r??null,l,u,f,p,m,y,w),n.context=Bg(null),r=n.current,l=xt(),l=ou(l),u=jn(l),u.callback=null,Yn(r,u,l),r=l,n.current.lanes=r,dr(n,r),cn(n),e[is]=n.current,$c(e),new ro(n)},ua.version="19.1.0",ua}var rm;function tT(){if(rm)return Sf.exports;rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Sf.exports=eT(),Sf.exports}var nT=tT();const iT=gv(nT);function sT({onLogin:s,onRegister:t,error:i,setError:a}){const[o,c]=je.useState(""),[h,d]=je.useState(""),_=async()=>{if(!o||!h){a("Please enter both email and password.");return}a(null),await t(o,h)},g=async()=>{if(!o||!h){a("Please enter both email and password.");return}a(null),await s(o,h)};return Ee.jsx("div",{id:"authSection",children:Ee.jsxs("div",{className:"auth-horizontal",children:[Ee.jsx("input",{type:"email",id:"email",placeholder:"Email",value:o,onChange:v=>c(v.target.value)}),Ee.jsx("input",{type:"password",id:"password",placeholder:"Password",value:h,onChange:v=>d(v.target.value)}),Ee.jsx("button",{id:"registerBtn",className:"register-btn",onClick:_,disabled:!o||!h,children:"Register"}),Ee.jsx("button",{id:"loginBtn",className:"login-btn",onClick:g,disabled:!o||!h,children:"Go"})]})})}function rT({tokens:s,buttonState:t,buttonNames:i,isButtonDataLoaded:a,onToggle:o,onUpdateName:c,onDelete:h,onLogout:d}){const[_,g]=je.useState(!1),[v,E]=je.useState(!1),C=M=>{o(M)};return Ee.jsxs("div",{id:"controlSection",className:"control-panel",children:[Ee.jsx("div",{className:"token-header",children:Ee.jsx("button",{className:"plus-button",onClick:()=>{console.log("Plus button clicked!"),g(M=>!M)},children:"+"})}),Ee.jsx("div",{className:"toggle-buttons",children:s.map((M,U)=>t[M]!=="open"&&t[M]!=="closed"?null:Ee.jsxs("div",{className:"toggle-btn-wrapper",children:[Ee.jsx("button",{id:`toggle-${M}`,className:`toggle-btn ${t[M]==="open"?"open":"closed"}`,onClick:()=>C(M),children:Ee.jsx("span",{className:"toggle-btn-text",children:(i==null?void 0:i[M])||`Button ${U+1}`})}),Ee.jsx("button",{className:"rename-btn",onClick:G=>{G.stopPropagation();const W=(i==null?void 0:i[M])||`Button ${U+1}`,Ue=prompt(`Enter new name for "${W}"`,W);Ue!=null&&c(M,Ue.trim())},children:"Edit"})]},M))}),Ee.jsxs("div",{className:`token-list-container ${_?"visible":""}`,children:[Ee.jsx("button",{className:"plus-menu-btn",onClick:()=>E(M=>!M),children:"Tokens"}),v&&Ee.jsx("ul",{className:"token-list",children:s.map(M=>Ee.jsx("li",{children:M},M))}),Ee.jsx("button",{className:"plus-menu-btn",onClick:()=>alert("Settings clicked!"),children:"Settings"}),Ee.jsx("button",{className:"plus-menu-btn",onClick:()=>alert("Friends clicked!"),children:"Friends"}),Ee.jsx("button",{className:"plus-menu-btn",onClick:d,children:"Logout"})]})]})}const aT=()=>{};var am={};/**
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
 */const L=function(s,t){if(!s)throw sr(t)},sr=function(s){return new Error("Firebase Database ("+mv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const vv=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},lT=function(s){const t=[];let i=0,a=0;for(;i<s.length;){const o=s[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[i++];t[a++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[i++],h=s[i++],d=s[i++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|d&63)-65536;t[a++]=String.fromCharCode(55296+(_>>10)),t[a++]=String.fromCharCode(56320+(_&1023))}else{const c=s[i++],h=s[i++];t[a++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<s.length;o+=3){const c=s[o],h=o+1<s.length,d=h?s[o+1]:0,_=o+2<s.length,g=_?s[o+2]:0,v=c>>2,E=(c&3)<<4|d>>4;let C=(d&15)<<2|g>>6,M=g&63;_||(M=64,h||(C=64)),a.push(i[v],i[E],i[C],i[M])}return a.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(vv(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):lT(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<s.length;){const c=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const g=o<s.length?i[s.charAt(o)]:64;++o;const E=o<s.length?i[s.charAt(o)]:64;if(++o,c==null||d==null||g==null||E==null)throw new oT;const C=c<<2|d>>4;if(a.push(C),g!==64){const M=d<<4&240|g>>2;if(a.push(M),E!==64){const U=g<<6&192|E;a.push(U)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class oT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yv=function(s){const t=vv(s);return ch.encodeByteArray(t,!0)},vo=function(s){return yv(s).replace(/\./g,"")},yo=function(s){try{return ch.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const hT=()=>fT().__FIREBASE_DEFAULTS__,dT=()=>{if(typeof process>"u"||typeof am>"u")return;const s=am.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},pT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&yo(s[1]);return t&&JSON.parse(t)},fh=()=>{try{return aT()||hT()||dT()||pT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Sv=s=>{var t,i;return(i=(t=fh())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},_T=s=>{const t=Sv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},Tv=()=>{var s;return(s=fh())===null||s===void 0?void 0:s.config},bv=s=>{var t;return(t=fh())===null||t===void 0?void 0:t[`_${s}`]};/**
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
 */class xa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function gT(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},s);return[vo(JSON.stringify(i)),vo(JSON.stringify(h)),""].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function mT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vT(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Cv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yT(){const s=vt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function ET(){return mv.NODE_ADMIN===!0}function ST(){try{return typeof indexedDB=="object"}catch{return!1}}function TT(){return new Promise((s,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
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
 */const bT="FirebaseError";class bi extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=bT,Object.setPrototypeOf(this,bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?CT(c,a):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new bi(o,d,a)}}function CT(s,t){return s.replace(AT,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const AT=/\{\$([^}]+)}/g;/**
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
 */function Ta(s){return JSON.parse(s)}function We(s){return JSON.stringify(s)}/**
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
 */const Av=function(s){let t={},i={},a={},o="";try{const c=s.split(".");t=Ta(yo(c[0])||""),i=Ta(yo(c[1])||""),o=c[2],a=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:a,signature:o}},wT=function(s){const t=Av(s),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},RT=function(s){const t=Av(s).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function dn(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Zs(s,t){if(Object.prototype.hasOwnProperty.call(s,t))return s[t]}function Pf(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function Eo(s,t,i){const a={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=t.call(i,s[o],o,s));return a}function Qi(s,t){if(s===t)return!0;const i=Object.keys(s),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const c=s[o],h=t[o];if(lm(c)&&lm(h)){if(!Qi(c,h))return!1}else if(c!==h)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function lm(s){return s!==null&&typeof s=="object"}/**
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
 */function rr(s){const t=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function pa(s){const t={};return s.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,c]=a.split("=");t[decodeURIComponent(o)]=decodeURIComponent(c)}}),t}function _a(s){const t=s.indexOf("?");if(!t)return"";const i=s.indexOf("#",t);return s.substring(t,i>0?i:void 0)}/**
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
 */class NT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const a=this.W_;if(typeof t=="string")for(let E=0;E<16;E++)a[E]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let E=0;E<16;E++)a[E]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let E=16;E<80;E++){const C=a[E-3]^a[E-8]^a[E-14]^a[E-16];a[E]=(C<<1|C>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],d=this.chain_[3],_=this.chain_[4],g,v;for(let E=0;E<80;E++){E<40?E<20?(g=d^c&(h^d),v=1518500249):(g=c^h^d,v=1859775393):E<60?(g=c&h|d&(c|h),v=2400959708):(g=c^h^d,v=3395469782);const C=(o<<5|o>>>27)+g+_+v+a[E]&4294967295;_=d,d=h,h=(c<<30|c>>>2)&4294967295,c=o,o=C}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const a=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=a;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let a=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[a]=this.chain_[o]>>c&255,++a;return t}}function OT(s,t){const i=new DT(s,t);return i.subscribe.bind(i)}class DT{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let o;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");IT(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:a},o.next===void 0&&(o.next=Af),o.error===void 0&&(o.error=Af),o.complete===void 0&&(o.complete=Af);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IT(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function Af(){}function qo(s,t){return`${s} failed: ${t} argument `}/**
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
 */const MT=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);if(o>=55296&&o<=56319){const c=o-55296;a++,L(a<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(a)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Vo=function(s){let t=0;for(let i=0;i<s.length;i++){const a=s.charCodeAt(i);a<128?t++:a<2048?t+=2:a>=55296&&a<=56319?(t+=4,i++):t+=3}return t};/**
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
 */function yt(s){return s&&s._delegate?s._delegate:s}class Ki{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ji="[DEFAULT]";/**
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
 */class kT{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new xa;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(UT(t))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});a.resolve(c)}catch{}}}}clearInstance(t=ji){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ji){return this.instances.has(t)}getOptions(t=ji){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(c);a===d&&h.resolve(o)}return o}onInit(t,i){var a;const o=this.normalizeInstanceIdentifier(i),c=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:xT(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=ji){return this.component?this.component.multipleInstances?t:ji:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xT(s){return s===ji?void 0:s}function UT(s){return s.instantiationMode==="EAGER"}/**
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
 */var Ce;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ce||(Ce={}));const zT={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},HT=Ce.INFO,PT={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},BT=(s,t,...i)=>{if(t<s.logLevel)return;const a=new Date().toISOString(),o=PT[t];if(o)console[o](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dh{constructor(t){this.name=t,this._logLevel=HT,this._logHandler=BT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...t),this._logHandler(this,Ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...t),this._logHandler(this,Ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...t),this._logHandler(this,Ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...t),this._logHandler(this,Ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...t),this._logHandler(this,Ce.ERROR,...t)}}const qT=(s,t)=>t.some(i=>s instanceof i);let om,um;function VT(){return om||(om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GT(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,Bf=new WeakMap,Rv=new WeakMap,wf=new WeakMap,ph=new WeakMap;function jT(s){const t=new Promise((i,a)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",h)},c=()=>{i(_i(s.result)),o()},h=()=>{a(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&wv.set(i,s)}).catch(()=>{}),ph.set(t,s),t}function YT(s){if(Bf.has(s))return;const t=new Promise((i,a)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",h),s.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{a(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",h),s.addEventListener("abort",h)});Bf.set(s,t)}let qf={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return Bf.get(s);if(t==="objectStoreNames")return s.objectStoreNames||Rv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return _i(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function FT(s){qf=s(qf)}function QT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=s.call(Rf(this),t,...i);return Rv.set(a,t.sort?t.sort():[t]),_i(a)}:GT().includes(s)?function(...t){return s.apply(Rf(this),t),_i(wv.get(this))}:function(...t){return _i(s.apply(Rf(this),t))}}function KT(s){return typeof s=="function"?QT(s):(s instanceof IDBTransaction&&YT(s),qT(s,VT())?new Proxy(s,qf):s)}function _i(s){if(s instanceof IDBRequest)return jT(s);if(wf.has(s))return wf.get(s);const t=KT(s);return t!==s&&(wf.set(s,t),ph.set(t,s)),t}const Rf=s=>ph.get(s);function XT(s,t,{blocked:i,upgrade:a,blocking:o,terminated:c}={}){const h=indexedDB.open(s,t),d=_i(h);return a&&h.addEventListener("upgradeneeded",_=>{a(_i(h.result),_.oldVersion,_.newVersion,_i(h.transaction),_)}),i&&h.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),d.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const WT=["get","getKey","getAll","getAllKeys","count"],ZT=["put","add","delete","clear"],Nf=new Map;function cm(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Nf.get(t))return Nf.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=ZT.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||WT.includes(i)))return;const c=async function(h,...d){const _=this.transaction(h,o?"readwrite":"readonly");let g=_.store;return a&&(g=g.index(d.shift())),(await Promise.all([g[i](...d),o&&_.done]))[0]};return Nf.set(t,c),c}FT(s=>({...s,get:(t,i,a)=>cm(t,i)||s.get(t,i,a),has:(t,i)=>!!cm(t,i)||s.has(t,i)}));/**
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
 */class JT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if($T(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function $T(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vf="@firebase/app",fm="0.11.4";/**
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
 */const xn=new dh("@firebase/app"),eb="@firebase/app-compat",tb="@firebase/analytics-compat",nb="@firebase/analytics",ib="@firebase/app-check-compat",sb="@firebase/app-check",rb="@firebase/auth",ab="@firebase/auth-compat",lb="@firebase/database",ob="@firebase/data-connect",ub="@firebase/database-compat",cb="@firebase/functions",fb="@firebase/functions-compat",hb="@firebase/installations",db="@firebase/installations-compat",pb="@firebase/messaging",_b="@firebase/messaging-compat",gb="@firebase/performance",mb="@firebase/performance-compat",vb="@firebase/remote-config",yb="@firebase/remote-config-compat",Eb="@firebase/storage",Sb="@firebase/storage-compat",Tb="@firebase/firestore",bb="@firebase/vertexai",Cb="@firebase/firestore-compat",Ab="firebase",wb="11.6.0";/**
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
 */const Gf="[DEFAULT]",Rb={[Vf]:"fire-core",[eb]:"fire-core-compat",[nb]:"fire-analytics",[tb]:"fire-analytics-compat",[sb]:"fire-app-check",[ib]:"fire-app-check-compat",[rb]:"fire-auth",[ab]:"fire-auth-compat",[lb]:"fire-rtdb",[ob]:"fire-data-connect",[ub]:"fire-rtdb-compat",[cb]:"fire-fn",[fb]:"fire-fn-compat",[hb]:"fire-iid",[db]:"fire-iid-compat",[pb]:"fire-fcm",[_b]:"fire-fcm-compat",[gb]:"fire-perf",[mb]:"fire-perf-compat",[vb]:"fire-rc",[yb]:"fire-rc-compat",[Eb]:"fire-gcs",[Sb]:"fire-gcs-compat",[Tb]:"fire-fst",[Cb]:"fire-fst-compat",[bb]:"fire-vertex","fire-js":"fire-js",[Ab]:"fire-js-all"};/**
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
 */const So=new Map,Nb=new Map,jf=new Map;function hm(s,t){try{s.container.addComponent(t)}catch(i){xn.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Js(s){const t=s.name;if(jf.has(t))return xn.debug(`There were multiple attempts to register component ${t}.`),!1;jf.set(t,s);for(const i of So.values())hm(i,s);for(const i of Nb.values())hm(i,s);return!0}function _h(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function Yt(s){return s==null?!1:s.settings!==void 0}/**
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
 */const Ob={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new Ua("app","Firebase",Ob);/**
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
 */class Db{constructor(t,i,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const ar=wb;function Nv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const a=Object.assign({name:Gf,automaticDataCollectionEnabled:!1},t),o=a.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(i||(i=Tv()),!i)throw gi.create("no-options");const c=So.get(o);if(c){if(Qi(i,c.options)&&Qi(a,c.config))return c;throw gi.create("duplicate-app",{appName:o})}const h=new LT(o);for(const _ of jf.values())h.addComponent(_);const d=new Db(i,a,h);return So.set(o,d),d}function Ov(s=Gf){const t=So.get(s);if(!t&&s===Gf&&Tv())return Nv();if(!t)throw gi.create("no-app",{appName:s});return t}function mi(s,t,i){var a;let o=(a=Rb[s])!==null&&a!==void 0?a:s;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const d=[`Unable to register library "${o}" with version "${t}":`];c&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&d.push("and"),h&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xn.warn(d.join(" "));return}Js(new Ki(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const Ib="firebase-heartbeat-database",Mb=1,ba="firebase-heartbeat-store";let Of=null;function Dv(){return Of||(Of=XT(Ib,Mb,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(ba)}catch(i){console.warn(i)}}}}).catch(s=>{throw gi.create("idb-open",{originalErrorMessage:s.message})})),Of}async function kb(s){try{const i=(await Dv()).transaction(ba),a=await i.objectStore(ba).get(Iv(s));return await i.done,a}catch(t){if(t instanceof bi)xn.warn(t.message);else{const i=gi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xn.warn(i.message)}}}async function dm(s,t){try{const a=(await Dv()).transaction(ba,"readwrite");await a.objectStore(ba).put(t,Iv(s)),await a.done}catch(i){if(i instanceof bi)xn.warn(i.message);else{const a=gi.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});xn.warn(a.message)}}}function Iv(s){return`${s.name}!${s.options.appId}`}/**
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
 */const xb=1024,Ub=30;class Lb{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Hb(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=pm();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>Ub){const h=Pb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){xn.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=pm(),{heartbeatsToSend:a,unsentEntries:o}=zb(this._heartbeatsCache.heartbeats),c=vo(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return xn.warn(i),""}}}function pm(){return new Date().toISOString().substring(0,10)}function zb(s,t=xb){const i=[];let a=s.slice();for(const o of s){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),_m(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),_m(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class Hb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ST()?TT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await kb(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return dm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return dm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function _m(s){return vo(JSON.stringify({version:2,heartbeats:s})).length}function Pb(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,t=a);return t}/**
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
 */function Bb(s){Js(new Ki("platform-logger",t=>new JT(t),"PRIVATE")),Js(new Ki("heartbeat",t=>new Lb(t),"PRIVATE")),mi(Vf,fm,s),mi(Vf,fm,"esm2017"),mi("fire-js","")}Bb("");function gh(s,t){var i={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&t.indexOf(a)<0&&(i[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(s);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(s,a[o])&&(i[a[o]]=s[a[o]]);return i}function Mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qb=Mv,kv=new Ua("auth","Firebase",Mv());/**
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
 */const To=new dh("@firebase/auth");function Vb(s,...t){To.logLevel<=Ce.WARN&&To.warn(`Auth (${ar}): ${s}`,...t)}function ho(s,...t){To.logLevel<=Ce.ERROR&&To.error(`Auth (${ar}): ${s}`,...t)}/**
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
 */function sn(s,...t){throw mh(s,...t)}function fn(s,...t){return mh(s,...t)}function xv(s,t,i){const a=Object.assign(Object.assign({},qb()),{[t]:i});return new Ua("auth","Firebase",a).create(t,{appName:s.name})}function Mn(s){return xv(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mh(s,...t){if(typeof s!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return kv.create(s,...t)}function Q(s,t,...i){if(!s)throw mh(t,...i)}function On(s){const t="INTERNAL ASSERTION FAILED: "+s;throw ho(t),new Error(t)}function Un(s,t){s||On(t)}/**
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
 */function Yf(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function Gb(){return gm()==="http:"||gm()==="https:"}function gm(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function jb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gb()||vT()||"connection"in navigator)?navigator.onLine:!0}function Yb(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class La{constructor(t,i){this.shortDelay=t,this.longDelay=i,Un(i>t,"Short delay should be less than long delay!"),this.isMobile=hh()||Cv()}get(){return jb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Uv{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Qb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kb=new La(3e4,6e4);function Ci(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function Ai(s,t,i,a,o={}){return Lv(s,o,async()=>{let c={},h={};a&&(t==="GET"?h=a:c={body:JSON.stringify(a)});const d=rr(Object.assign({key:s.config.apiKey},h)).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const g=Object.assign({method:t,headers:_},c);return mT()||(g.referrerPolicy="no-referrer"),Uv.fetch()(await zv(s,s.config.apiHost,i,d),g)})}async function Lv(s,t,i){s._canInitEmulator=!1;const a=Object.assign(Object.assign({},Fb),t);try{const o=new Wb(s),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw lo(s,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const d=c.ok?h.errorMessage:h.error.message,[_,g]=d.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(s,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw lo(s,"email-already-in-use",h);if(_==="USER_DISABLED")throw lo(s,"user-disabled",h);const v=a[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw xv(s,v,g);sn(s,v)}}catch(o){if(o instanceof bi)throw o;sn(s,"network-request-failed",{message:String(o)})}}async function za(s,t,i,a,o={}){const c=await Ai(s,t,i,a,o);return"mfaPendingCredential"in c&&sn(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function zv(s,t,i,a){const o=`${t}${i}?${a}`,c=s,h=c.config.emulator?vh(s.config,o):`${s.config.apiScheme}://${o}`;return Qb.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Xb(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(fn(this.auth,"network-request-failed")),Kb.get())})}}function lo(s,t,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const o=fn(s,t,a);return o.customData._tokenResponse=i,o}function mm(s){return s!==void 0&&s.enterprise!==void 0}class Zb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return Xb(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Jb(s,t){return Ai(s,"GET","/v2/recaptchaConfig",Ci(s,t))}/**
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
 */function ga(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function eC(s,t=!1){const i=yt(s),a=await i.getIdToken(t),o=yh(a);Q(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:a,authTime:ga(Df(o.auth_time)),issuedAtTime:ga(Df(o.iat)),expirationTime:ga(Df(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Df(s){return Number(s)*1e3}function yh(s){const[t,i,a]=s.split(".");if(t===void 0||i===void 0||a===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const o=yo(i);return o?JSON.parse(o):(ho("Failed to decode base64 JWT payload"),null)}catch(o){return ho("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function vm(s){const t=yh(s);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ca(s,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof bi&&tC(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function tC({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class nC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ff{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Co(s){var t;const i=s.auth,a=await s.getIdToken(),o=await Ca(s,bo(i,{idToken:a}));Q(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];s._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?Hv(c.providerUserInfo):[],d=sC(s.providerData,h),_=s.isAnonymous,g=!(s.email&&c.passwordHash)&&!(d!=null&&d.length),v=_?g:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:d,metadata:new Ff(c.createdAt,c.lastLoginAt),isAnonymous:v};Object.assign(s,E)}async function iC(s){const t=yt(s);await Co(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function sC(s,t){return[...s.filter(a=>!t.some(o=>o.providerId===a.providerId)),...t]}function Hv(s){return s.map(t=>{var{providerId:i}=t,a=gh(t,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function rC(s,t){const i=await Lv(s,{},async()=>{const a=rr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,h=await zv(s,o,"/v1/token",`key=${c}`),d=await s._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Uv.fetch()(h,{method:"POST",headers:d,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function aC(s,t){return Ai(s,"POST","/v2/accounts:revokeToken",Ci(s,t))}/**
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
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):vm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const i=vm(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:o,expiresIn:c}=await rC(t,i);this.updateTokensAndExpiration(a,o,Number(c))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:o,expirationTime:c}=i,h=new Fs;return a&&(Q(typeof a=="string","internal-error",{appName:t}),h.refreshToken=a),o&&(Q(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(Q(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function ui(s,t){Q(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class en{constructor(t){var{uid:i,auth:a,stsTokenManager:o}=t,c=gh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ff(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await Ca(this,this.stsTokenManager.getToken(this.auth,t));return Q(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return eC(this,t)}reload(){return iC(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new en(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await Co(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Mn(this.auth));const t=await this.getIdToken();return await Ca(this,$b(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var a,o,c,h,d,_,g,v;const E=(a=i.displayName)!==null&&a!==void 0?a:void 0,C=(o=i.email)!==null&&o!==void 0?o:void 0,M=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,U=(h=i.photoURL)!==null&&h!==void 0?h:void 0,G=(d=i.tenantId)!==null&&d!==void 0?d:void 0,W=(_=i._redirectEventId)!==null&&_!==void 0?_:void 0,Ue=(g=i.createdAt)!==null&&g!==void 0?g:void 0,Ye=(v=i.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Re,emailVerified:Ze,isAnonymous:re,providerData:Fe,stsTokenManager:Je}=i;Q(Re&&Je,t,"internal-error");const $e=Fs.fromJSON(this.name,Je);Q(typeof Re=="string",t,"internal-error"),ui(E,t.name),ui(C,t.name),Q(typeof Ze=="boolean",t,"internal-error"),Q(typeof re=="boolean",t,"internal-error"),ui(M,t.name),ui(U,t.name),ui(G,t.name),ui(W,t.name),ui(Ue,t.name),ui(Ye,t.name);const ft=new en({uid:Re,auth:t,email:C,emailVerified:Ze,displayName:E,isAnonymous:re,photoURL:U,phoneNumber:M,tenantId:G,stsTokenManager:$e,createdAt:Ue,lastLoginAt:Ye});return Fe&&Array.isArray(Fe)&&(ft.providerData=Fe.map(ee=>Object.assign({},ee))),W&&(ft._redirectEventId=W),ft}static async _fromIdTokenResponse(t,i,a=!1){const o=new Fs;o.updateFromServerResponse(i);const c=new en({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a});return await Co(c),c}static async _fromGetAccountInfoResponse(t,i,a){const o=i.users[0];Q(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Hv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),d=new Fs;d.updateFromIdToken(a);const _=new en({uid:o.localId,auth:t,stsTokenManager:d,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ff(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,g),_}}/**
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
 */function po(s,t,i){return`firebase:${s}:${t}:${i}`}class Qs{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:o,name:c}=this.auth;this.fullUserKey=po(this.userKey,o.apiKey,c),this.fullPersistenceKey=po("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await bo(this.auth,{idToken:t}).catch(()=>{});return i?en._fromGetAccountInfoResponse(this.auth,i,t):null}return en._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new Qs(Dn(Em),t,a);const o=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=o[0]||Dn(Em);const h=po(a,t.config.apiKey,t.name);let d=null;for(const g of i)try{const v=await g._get(h);if(v){let E;if(typeof v=="string"){const C=await bo(t,{idToken:v}).catch(()=>{});if(!C)break;E=await en._fromGetAccountInfoResponse(t,C,v)}else E=en._fromJSON(t,v);g!==c&&(d=E),c=g;break}}catch{}const _=o.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new Qs(c,t,a):(c=_[0],d&&await c._set(h,d.toJSON()),await Promise.all(i.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new Qs(c,t,a))}}/**
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
 */function Sm(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Gv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Yv(t))return"Blackberry";if(Fv(t))return"Webos";if(qv(t))return"Safari";if((t.includes("chrome/")||Vv(t))&&!t.includes("edge/"))return"Chrome";if(jv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Bv(s=vt()){return/firefox\//i.test(s)}function qv(s=vt()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Vv(s=vt()){return/crios\//i.test(s)}function Gv(s=vt()){return/iemobile/i.test(s)}function jv(s=vt()){return/android/i.test(s)}function Yv(s=vt()){return/blackberry/i.test(s)}function Fv(s=vt()){return/webos/i.test(s)}function Eh(s=vt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function lC(s=vt()){var t;return Eh(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function oC(){return yT()&&document.documentMode===10}function Qv(s=vt()){return Eh(s)||jv(s)||Fv(s)||Yv(s)||/windows phone/i.test(s)||Gv(s)}/**
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
 */function Kv(s,t=[]){let i;switch(s){case"Browser":i=Sm(vt());break;case"Worker":i=`${Sm(vt())}-${s}`;break;default:i=s}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${ar}/${a}`}/**
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
 */class uC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=c=>new Promise((h,d)=>{try{const _=t(c);h(_)}catch(_){d(_)}});a.onAbort=i,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */const fC=6;class hC{constructor(t){var i,a,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:fC,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,a,o,c,h,d;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,_),this.validatePasswordCharacterOptions(t,_),_.isValid&&(_.isValid=(i=_.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(a=_.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(d=_.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),_}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let o=0;o<t.length;o++)a=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class dC{constructor(t,i,a,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tm(this),this.idTokenSubscription=new Tm(this),this.beforeStateQueue=new uC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Dn(i)),this._initializationPromise=this.queue(async()=>{var a,o,c;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,t),(a=this._resolvePersistenceManagerAvailable)===null||a===void 0||a.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await bo(this,{idToken:t}),a=await en._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Yt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,d=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(t);(!h||h===d)&&(_!=null&&_.user)&&(o=_.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Co(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Yb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Yt(this.app))return Promise.reject(Mn(this));const i=t?yt(t):null;return i&&Q(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Yt(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await cC(this),i=new hC(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ua("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await aC(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Dn(t)||this._popupRedirectResolver;Q(i,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[Dn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(d,this,"internal-error"),d.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,a,o);return()=>{h=!0,_()}}else{const _=t.addObserver(i);return()=>{h=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&Vb(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function es(s){return yt(s)}class Tm{constructor(t){this.auth=t,this.observer=null,this.addObserver=OT(i=>this.observer=i)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pC(s){Go=s}function Xv(s){return Go.loadJS(s)}function _C(){return Go.recaptchaEnterpriseScript}function gC(){return Go.gapiScript}function mC(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class vC{constructor(){this.enterprise=new yC}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class yC{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const EC="recaptcha-enterprise",Wv="NO_RECAPTCHA";class SC{constructor(t){this.type=EC,this.auth=es(t)}async verify(t="verify",i=!1){async function a(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,d)=>{Jb(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new Zb(_);return c.tenantId==null?c._agentRecaptchaConfig=g:c._tenantRecaptchaConfigs[c.tenantId]=g,h(g.siteKey)}}).catch(_=>{d(_)})})}function o(c,h,d){const _=window.grecaptcha;mm(_)?_.enterprise.ready(()=>{_.enterprise.execute(c,{action:t}).then(g=>{h(g)}).catch(()=>{h(Wv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vC().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{a(this.auth).then(d=>{if(!i&&mm(window.grecaptcha))o(d,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=_C();_.length!==0&&(_+=d),Xv(_).then(()=>{o(d,c,h)}).catch(g=>{h(g)})}}).catch(d=>{h(d)})})}}async function bm(s,t,i,a=!1,o=!1){const c=new SC(s);let h;if(o)h=Wv;else try{h=await c.verify(i)}catch{h=await c.verify(i,!0)}const d=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const _=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const _=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return a?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Qf(s,t,i,a,o){var c;if(!((c=s._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await bm(s,t,i,i==="getOobCode");return a(s,h)}else return a(s,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await bm(s,t,i,i==="getOobCode");return a(s,d)}else return Promise.reject(h)})}/**
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
 */function TC(s,t){const i=_h(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Qi(c,t??{}))return o;sn(o,"already-initialized")}return i.initialize({options:t})}function bC(s,t){const i=(t==null?void 0:t.persistence)||[],a=(Array.isArray(i)?i:[i]).map(Dn);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function CC(s,t,i){const a=es(s);Q(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const o=!1,c=Zv(t),{host:h,port:d}=AC(t),_=d===null?"":`:${d}`,g={url:`${c}//${h}${_}/`},v=Object.freeze({host:h,port:d,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){Q(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),Q(Qi(g,a.config.emulator)&&Qi(v,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=g,a.emulatorConfig=v,a.settings.appVerificationDisabledForTesting=!0,wC()}function Zv(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function AC(s){const t=Zv(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const c=o[1];return{host:c,port:Cm(a.substr(c.length+1))}}else{const[c,h]=a.split(":");return{host:c,port:Cm(h)}}}function Cm(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function wC(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */async function NC(s,t){return za(s,"POST","/v1/accounts:signInWithPassword",Ci(s,t))}/**
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
 */async function OC(s,t){return za(s,"POST","/v1/accounts:signInWithEmailLink",Ci(s,t))}async function DC(s,t){return za(s,"POST","/v1/accounts:signInWithEmailLink",Ci(s,t))}/**
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
 */class Aa extends Sh{constructor(t,i,a,o=null){super("password",a),this._email=t,this._password=i,this._tenantId=o}static _fromEmailAndPassword(t,i){return new Aa(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new Aa(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qf(t,i,"signInWithPassword",NC);case"emailLink":return OC(t,{email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qf(t,a,"signUpPassword",RC);case"emailLink":return DC(t,{idToken:i,email:this._email,oobCode:this._password});default:sn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ks(s,t){return za(s,"POST","/v1/accounts:signInWithIdp",Ci(s,t))}/**
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
 */const IC="http://localhost";class Xi extends Sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):sn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:o}=i,c=gh(i,["providerId","signInMethod"]);if(!a||!o)return null;const h=new Xi(a,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Ks(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,Ks(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ks(t,i)}buildRequest(){const t={requestUri:IC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=rr(i)}return t}}/**
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
 */function MC(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kC(s){const t=pa(_a(s)).link,i=t?pa(_a(t)).deep_link_id:null,a=pa(_a(s)).deep_link_id;return(a?pa(_a(a)).link:null)||a||i||t||s}class Th{constructor(t){var i,a,o,c,h,d;const _=pa(_a(t)),g=(i=_.apiKey)!==null&&i!==void 0?i:null,v=(a=_.oobCode)!==null&&a!==void 0?a:null,E=MC((o=_.mode)!==null&&o!==void 0?o:null);Q(g&&v&&E,"argument-error"),this.apiKey=g,this.operation=E,this.code=v,this.continueUrl=(c=_.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=_.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=_.tenantId)!==null&&d!==void 0?d:null}static parseLink(t){const i=kC(t);try{return new Th(i)}catch{return null}}}/**
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
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(t,i){return Aa._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=Th.parseLink(i);return Q(a,"argument-error"),Aa._fromEmailAndCode(t,a.code,a.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ha extends Jv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ci extends Ha{constructor(){super("facebook.com")}static credential(t){return Xi._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ci.credentialFromTaggedObject(t)}static credentialFromError(t){return ci.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ci.credential(t.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
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
 */class fi extends Ha{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Xi._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return fi.credential(i,a)}catch{return null}}}fi.GOOGLE_SIGN_IN_METHOD="google.com";fi.PROVIDER_ID="google.com";/**
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
 */class hi extends Ha{constructor(){super("github.com")}static credential(t){return Xi._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hi.credential(t.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
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
 */class di extends Ha{constructor(){super("twitter.com")}static credential(t,i){return Xi._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return di.credential(i,a)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
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
 */async function xC(s,t){return za(s,"POST","/v1/accounts:signUp",Ci(s,t))}/**
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
 */class Wi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,o=!1){const c=await en._fromIdTokenResponse(t,a,o),h=Am(a);return new Wi({user:c,providerId:h,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const o=Am(a);return new Wi({user:t,providerId:o,_tokenResponse:a,operationType:i})}}function Am(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Ao extends bi{constructor(t,i,a,o){var c;super(i.code,i.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Ao.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,o){return new Ao(t,i,a,o)}}function $v(s,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Ao._fromErrorAndOperation(s,c,t,a):c})}async function UC(s,t,i=!1){const a=await Ca(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return Wi._forOperation(s,"link",a)}/**
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
 */async function LC(s,t,i=!1){const{auth:a}=s;if(Yt(a.app))return Promise.reject(Mn(a));const o="reauthenticate";try{const c=await Ca(s,$v(a,o,t,s),i);Q(c.idToken,a,"internal-error");const h=yh(c.idToken);Q(h,a,"internal-error");const{sub:d}=h;return Q(s.uid===d,a,"user-mismatch"),Wi._forOperation(s,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&sn(a,"user-mismatch"),c}}/**
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
 */async function ey(s,t,i=!1){if(Yt(s.app))return Promise.reject(Mn(s));const a="signIn",o=await $v(s,a,t),c=await Wi._fromIdTokenResponse(s,a,o);return i||await s._updateCurrentUser(c.user),c}async function zC(s,t){return ey(es(s),t)}/**
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
 */async function ty(s){const t=es(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function HC(s,t,i){if(Yt(s.app))return Promise.reject(Mn(s));const a=es(s),h=await Qf(a,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xC).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&ty(s),_}),d=await Wi._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(d.user),d}function PC(s,t,i){return Yt(s.app)?Promise.reject(Mn(s)):zC(yt(s),lr.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ty(s),a})}function BC(s,t,i,a){return yt(s).onIdTokenChanged(t,i,a)}function qC(s,t,i){return yt(s).beforeAuthStateChanged(t,i)}function VC(s,t,i,a){return yt(s).onAuthStateChanged(t,i,a)}function GC(s){return yt(s).signOut()}const wo="__sak";/**
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
 */const jC=1e3,YC=10;class iy extends ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),o=this.localCache[i];a!==o&&t(i,o,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,d,_)=>{this.notifyListeners(h,_)});return}const a=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(a);!i&&this.localCache[a]===h||this.notifyListeners(a,h)},c=this.storage.getItem(a);oC()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,YC):o()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},jC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}iy.type="LOCAL";const FC=iy;/**
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
 */class sy extends ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}sy.type="SESSION";const ry=sy;/**
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
 */class jo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const a=new jo(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const d=Array.from(h).map(async g=>g(i.origin,c)),_=await QC(d);i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
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
 */function bh(s="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class KC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((d,_)=>{const g=bh("",20);o.port1.start();const v=setTimeout(()=>{_(new Error("unsupported_event"))},a);h={messageChannel:o,onMessage(E){const C=E;if(C.data.eventId===g)switch(C.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),d(C.data.response);break;default:clearTimeout(v),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:g,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ay(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function WC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZC(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function JC(){return ay()?self:null}/**
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
 */const ly="firebaseLocalStorageDb",$C=1,Ro="firebaseLocalStorage",oy="fbase_key";class Pa{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Yo(s,t){return s.transaction([Ro],t?"readwrite":"readonly").objectStore(Ro)}function eA(){const s=indexedDB.deleteDatabase(ly);return new Pa(s).toPromise()}function Kf(){const s=indexedDB.open(ly,$C);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(Ro,{keyPath:oy})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(Ro)?t(a):(a.close(),await eA(),t(await Kf()))})})}async function wm(s,t,i){const a=Yo(s,!0).put({[oy]:t,value:i});return new Pa(a).toPromise()}async function tA(s,t){const i=Yo(s,!1).get(t),a=await new Pa(i).toPromise();return a===void 0?null:a.value}function Rm(s,t){const i=Yo(s,!0).delete(t);return new Pa(i).toPromise()}const nA=800,iA=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>iA)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(JC()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await WC(),!this.activeServiceWorker)return;this.sender=new KC(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ZC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kf();return await wm(t,wo,"1"),await Rm(t,wo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>wm(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>tA(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Rm(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Yo(o,!1).getAll();return new Pa(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const sA=uy;new La(3e4,6e4);/**
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
 */function rA(s,t){return t?Dn(t):(Q(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Ch extends Sh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ks(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ks(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ks(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function aA(s){return ey(s.auth,new Ch(s),s.bypassAuthState)}function lA(s){const{auth:t,user:i}=s;return Q(i,t,"internal-error"),LC(i,new Ch(s),s.bypassAuthState)}async function oA(s){const{auth:t,user:i}=s;return Q(i,t,"internal-error"),UC(i,new Ch(s),s.bypassAuthState)}/**
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
 */class cy{constructor(t,i,a,o,c=!1){this.auth=t,this.resolver=a,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:o,tenantId:c,error:h,type:d}=t;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(_))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return aA;case"linkViaPopup":case"linkViaRedirect":return oA;case"reauthViaPopup":case"reauthViaRedirect":return lA;default:sn(this.auth,"internal-error")}}resolve(t){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uA=new La(2e3,1e4);class js extends cy{constructor(t,i,a,o,c){super(t,i,o,c),this.provider=a,this.authWindow=null,this.pollId=null,js.currentPopupAction&&js.currentPopupAction.cancel(),js.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const t=bh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,js.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,uA.get())};t()}}js.currentPopupAction=null;/**
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
 */const cA="pendingRedirect",_o=new Map;class fA extends cy{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=_o.get(this.auth._key());if(!t){try{const a=await hA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}_o.set(this.auth._key(),t)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hA(s,t){const i=_A(t),a=pA(s);if(!await a._isAvailable())return!1;const o=await a._get(i)==="true";return await a._remove(i),o}function dA(s,t){_o.set(s._key(),t)}function pA(s){return Dn(s._redirectPersistence)}function _A(s){return po(cA,s.config.apiKey,s.name)}async function gA(s,t,i=!1){if(Yt(s.app))return Promise.reject(Mn(s));const a=es(s),o=rA(a,t),h=await new fA(a,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,t)),h}/**
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
 */const mA=10*60*1e3;class vA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!yA(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!fy(t)){const o=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(fn(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nm(t))}saveEventToCache(t){this.cachedEventUids.add(Nm(t)),this.lastProcessedEventTime=Date.now()}}function Nm(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function fy({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function yA(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fy(s);default:return!1}}/**
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
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TA=/^https?/;async function bA(s){if(s.config.emulator)return;const{authorizedDomains:t}=await EA(s);for(const i of t)try{if(CA(i))return}catch{}sn(s,"unauthorized-domain")}function CA(s){const t=Yf(),{protocol:i,hostname:a}=new URL(t);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===a}if(!TA.test(i))return!1;if(SA.test(s))return a===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
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
 */const AA=new La(3e4,6e4);function Om(){const s=hn().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function wA(s){return new Promise((t,i)=>{var a,o,c;function h(){Om(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Om(),i(fn(s,"network-request-failed"))},timeout:AA.get()})}if(!((o=(a=hn().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=hn().gapi)===null||c===void 0)&&c.load)h();else{const d=mC("iframefcb");return hn()[d]=()=>{gapi.load?h():i(fn(s,"network-request-failed"))},Xv(`${gC()}?onload=${d}`).catch(_=>i(_))}}).catch(t=>{throw go=null,t})}let go=null;function RA(s){return go=go||wA(s),go}/**
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
 */const NA=new La(5e3,15e3),OA="__/auth/iframe",DA="emulator/auth/iframe",IA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kA(s){const t=s.config;Q(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?vh(t,DA):`https://${s.config.authDomain}/${OA}`,a={apiKey:t.apiKey,appName:s.name,v:ar},o=MA.get(s.config.apiHost);o&&(a.eid=o);const c=s._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${rr(a).slice(1)}`}async function xA(s){const t=await RA(s),i=hn().gapi;return Q(i,s,"internal-error"),t.open({where:document.body,url:kA(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IA,dontclear:!0},a=>new Promise(async(o,c)=>{await a.restyle({setHideOnLeave:!1});const h=fn(s,"network-request-failed"),d=hn().setTimeout(()=>{c(h)},NA.get());function _(){hn().clearTimeout(d),o(a)}a.ping(_).then(_,()=>{c(h)})}))}/**
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
 */const UA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LA=500,zA=600,HA="_blank",PA="http://localhost";class Dm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BA(s,t,i,a=LA,o=zA){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let d="";const _=Object.assign(Object.assign({},UA),{width:a.toString(),height:o.toString(),top:c,left:h}),g=vt().toLowerCase();i&&(d=Vv(g)?HA:i),Bv(g)&&(t=t||PA,_.scrollbars="yes");const v=Object.entries(_).reduce((C,[M,U])=>`${C}${M}=${U},`,"");if(lC(g)&&d!=="_self")return qA(t||"",d),new Dm(null);const E=window.open(t||"",d,v);Q(E,s,"popup-blocked");try{E.focus()}catch{}return new Dm(E)}function qA(s,t){const i=document.createElement("a");i.href=s,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
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
 */const VA="__/auth/handler",GA="emulator/auth/handler",jA=encodeURIComponent("fac");async function Im(s,t,i,a,o,c){Q(s.config.authDomain,s,"auth-domain-config-required"),Q(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:ar,eventId:o};if(t instanceof Jv){t.setDefaultLanguage(s.languageCode),h.providerId=t.providerId||"",Pf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,E]of Object.entries({}))h[v]=E}if(t instanceof Ha){const v=t.getScopes().filter(E=>E!=="");v.length>0&&(h.scopes=v.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const _=await s._getAppCheckToken(),g=_?`#${jA}=${encodeURIComponent(_)}`:"";return`${YA(s)}?${rr(d).slice(1)}${g}`}function YA({config:s}){return s.emulator?vh(s,GA):`https://${s.authDomain}/${VA}`}/**
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
 */const If="webStorageSupport";class FA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ry,this._completeRedirectFn=gA,this._overrideRedirectResult=dA}async _openPopup(t,i,a,o){var c;Un((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Im(t,i,a,Yf(),o);return BA(t,h,bh())}async _openRedirect(t,i,a,o){await this._originValidation(t);const c=await Im(t,i,a,Yf(),o);return XC(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Un(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await xA(t),a=new vA(t);return i.register("authEvent",o=>(Q(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(If,{type:If},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[If];h!==void 0&&i(!!h),sn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=bA(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Qv()||qv()||Eh()}}const QA=FA;var Mm="@firebase/auth",km="1.10.0";/**
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
 */class KA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XA(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WA(s){Js(new Ki("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=a.options;Q(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const _={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(s)},g=new dC(a,o,c,_);return bC(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),Js(new Ki("auth-internal",t=>{const i=es(t.getProvider("auth").getImmediate());return(a=>new KA(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(Mm,km,XA(s)),mi(Mm,km,"esm2017")}/**
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
 */const ZA=5*60,JA=bv("authIdTokenMaxAge")||ZA;let xm=null;const $A=s=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>JA)return;const o=i==null?void 0:i.token;xm!==o&&(xm=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ew(s=Ov()){const t=_h(s,"auth");if(t.isInitialized())return t.getImmediate();const i=TC(s,{popupRedirectResolver:QA,persistence:[sA,FC,ry]}),a=bv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const h=$A(c.toString());qC(i,h,()=>h(i.currentUser)),BC(i,d=>h(d))}}const o=Sv("auth");return o&&CC(i,`http://${o}`),i}function tw(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}pC({loadJS(s){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=t,a.onerror=o=>{const c=fn("internal-error");c.customData=o,i(c)},a.type="text/javascript",a.charset="UTF-8",tw().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WA("Browser");var Um={};const Lm="@firebase/database",zm="1.0.14";/**
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
 */class iw{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),We(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Ta(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */const dy=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const t=window[s];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new iw(t)}}catch{}return new sw},Fi=dy("localStorage"),rw=dy("sessionStorage");/**
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
 */const Xs=new dh("@firebase/database"),aw=function(){let s=1;return function(){return s++}}(),py=function(s){const t=MT(s),i=new NT;i.update(t);const a=i.digest();return ch.encodeByteArray(a)},Ba=function(...s){let t="";for(let i=0;i<s.length;i++){const a=s[i];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?t+=Ba.apply(null,a):typeof a=="object"?t+=We(a):t+=a,t+=" "}return t};let ma=null,Hm=!0;const lw=function(s,t){L(!0,"Can't turn on custom loggers persistently."),Xs.logLevel=Ce.VERBOSE,ma=Xs.log.bind(Xs)},ut=function(...s){if(Hm===!0&&(Hm=!1,ma===null&&rw.get("logging_enabled")===!0&&lw()),ma){const t=Ba.apply(null,s);ma(t)}},qa=function(s){return function(...t){ut(s,...t)}},Xf=function(...s){const t="FIREBASE INTERNAL ERROR: "+Ba(...s);Xs.error(t)},Ln=function(...s){const t=`FIREBASE FATAL ERROR: ${Ba(...s)}`;throw Xs.error(t),new Error(t)},mt=function(...s){const t="FIREBASE WARNING: "+Ba(...s);Xs.warn(t)},ow=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ah=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},uw=function(s){if(document.readyState==="complete")s();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},$s="[MIN_NAME]",Zi="[MAX_NAME]",ts=function(s,t){if(s===t)return 0;if(s===$s||t===Zi)return-1;if(t===$s||s===Zi)return 1;{const i=Pm(s),a=Pm(t);return i!==null?a!==null?i-a===0?s.length-t.length:i-a:-1:a!==null?1:s<t?-1:1}},cw=function(s,t){return s===t?0:s<t?-1:1},ca=function(s,t){if(t&&s in t)return t[s];throw new Error("Missing required key ("+s+") in object: "+We(t))},wh=function(s){if(typeof s!="object"||s===null)return We(s);const t=[];for(const a in s)t.push(a);t.sort();let i="{";for(let a=0;a<t.length;a++)a!==0&&(i+=","),i+=We(t[a]),i+=":",i+=wh(s[t[a]]);return i+="}",i},_y=function(s,t){const i=s.length;if(i<=t)return[s];const a=[];for(let o=0;o<i;o+=t)o+t>i?a.push(s.substring(o,i)):a.push(s.substring(o,o+t));return a};function ct(s,t){for(const i in s)s.hasOwnProperty(i)&&t(i,s[i])}const gy=function(s){L(!Ah(s),"Invalid JSON number");const t=11,i=52,a=(1<<t-1)-1;let o,c,h,d,_;s===0?(c=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-a)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),a),c=d+a,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(c=0,h=Math.round(s/Math.pow(2,1-a-i))));const g=[];for(_=i;_;_-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(_=t;_;_-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(o?1:0),g.reverse();const v=g.join("");let E="";for(_=0;_<64;_+=8){let C=parseInt(v.substr(_,8),2).toString(16);C.length===1&&(C="0"+C),E=E+C}return E.toLowerCase()},fw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dw(s,t){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const a=new Error(s+" at "+t._path.toString()+": "+i);return a.code=s.toUpperCase(),a}const pw=new RegExp("^-?(0*)\\d{1,10}$"),_w=-2147483648,gw=2147483647,Pm=function(s){if(pw.test(s)){const t=Number(s);if(t>=_w&&t<=gw)return t}return null},or=function(s){try{s()}catch(t){setTimeout(()=>{const i=t.stack||"";throw mt("Exception was thrown by user callback.",i),t},Math.floor(0))}},mw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},va=function(s,t){const i=setTimeout(s,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
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
 */class vw{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Yt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(a=>this.appCheck=a)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,a)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,a):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(a=>a.addTokenListener(t))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yw{constructor(t,i,a){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,a)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,a):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(t)}}class mo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}mo.OWNER="owner";/**
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
 */class wy{constructor(t,i,a,o,c=!1,h="",d=!1,_=!1,g=null){this.secure=i,this.namespace=a,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=_,this.emulatorOptions=g,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Fi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function Ew(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Ry(s,t,i){L(typeof t=="string","typeof type must == string"),L(typeof i=="object","typeof params must == object");let a;if(t===Cy)a=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(t===Ay)a=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);Ew(s)&&(i.ns=s.namespace);const o=[];return ct(i,(c,h)=>{o.push(c+"="+h)}),a+o.join("&")}/**
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
 */class bw{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<a.length;++o)a[o]&&or(()=>{this.onMessage_(a[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Bm="start",Cw="close",Aw="pLPCommand",ww="pRTLPCB",Ny="id",Oy="pw",Dy="ser",Rw="cb",Nw="seg",Ow="ts",Dw="d",Iw="dframe",Iy=1870,My=30,Mw=Iy-My,kw=25e3,xw=3e4;class Ys{constructor(t,i,a,o,c,h,d){this.connId=t,this.repoInfo=i,this.applicationId=a,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qa(t),this.stats_=Nh(i),this.urlFn=_=>(this.appCheckToken&&(_[Wf]=this.appCheckToken),Ry(i,Ay,_))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new bw(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xw)),uw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Oh((...c)=>{const[h,d,_,g,v]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Bm)this.id=d,this.password=_;else if(h===Cw)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,d]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const a={};a[Bm]="t",a[Dy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[Rw]=this.scriptTagHolder.uniqueCallbackIdentifier),a[my]=Rh,this.transportSessionId&&(a[vy]=this.transportSessionId),this.lastSessionId&&(a[Ty]=this.lastSessionId),this.applicationId&&(a[by]=this.applicationId),this.appCheckToken&&(a[Wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sy.test(location.hostname)&&(a[yy]=Ey);const o=this.urlFn(a);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ys.forceAllow_=!0}static forceDisallow(){Ys.forceDisallow_=!0}static isAvailable(){return Ys.forceAllow_?!0:!Ys.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fw()&&!hw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=We(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=yv(i),o=_y(a,Mw);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const a={};a[Iw]="t",a[Ny]=t,a[Oy]=i,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=We(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Oh{constructor(t,i,a,o){this.onDisconnect=a,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=aw(),window[Aw+this.uniqueCallbackIdentifier]=t,window[ww+this.uniqueCallbackIdentifier]=i,this.myIFrame=Oh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){ut("frame writing exception"),d.stack&&ut(d.stack),ut(d)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||ut("No IE domain setting required")}catch{const a=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Ny]=this.myID,t[Oy]=this.myPW,t[Dy]=this.currentSerial;let i=this.urlFn(t),a="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+My+a.length<=Iy;){const h=this.pendingSegs.shift();a=a+"&"+Nw+o+"="+h.seg+"&"+Ow+o+"="+h.ts+"&"+Dw+o+"="+h.d,o++}return i=i+a,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,a){this.pendingSegs.push({seg:t,ts:i,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const a=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(a,Math.floor(kw)),c=()=>{clearTimeout(o),a()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=t,a.onload=a.onreadystatechange=function(){const o=a.readyState;(!o||o==="loaded"||o==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),i())},a.onerror=()=>{ut("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
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
 */const Uw=16384,Lw=45e3;let No=null;typeof MozWebSocket<"u"?No=MozWebSocket:typeof WebSocket<"u"&&(No=WebSocket);class $t{constructor(t,i,a,o,c,h,d){this.connId=t,this.applicationId=a,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qa(this.connId),this.stats_=Nh(i),this.connURL=$t.connectionURL_(i,h,d,o,a),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,a,o,c){const h={};return h[my]=Rh,typeof location<"u"&&location.hostname&&Sy.test(location.hostname)&&(h[yy]=Ey),i&&(h[vy]=i),a&&(h[Ty]=a),o&&(h[Wf]=o),c&&(h[by]=c),Ry(t,Cy,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fi.set("previous_websocket_failure",!0);try{let a;ET(),this.mySock=new No(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(i);a&&a.length>1&&parseFloat(a[1])<4.4&&(t=!0)}return!t&&No!==null&&!$t.forceDisallow_}static previouslyFailed(){return Fi.isInMemoryStorage||Fi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const a=Ta(i);this.onMessage(a)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(L(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const a=this.extractFrameCount_(i);a!==null&&this.appendFrame_(a)}}send(t){this.resetKeepAlive();const i=We(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=_y(i,Uw);a.length>1&&this.sendString_(String(a.length));for(let o=0;o<a.length;o++)this.sendString_(a[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lw))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class wa{static get ALL_TRANSPORTS(){return[Ys,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=$t&&$t.isAvailable();let a=i&&!$t.previouslyFailed();if(t.webSocketOnly&&(i||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[$t];else{const o=this.transports_=[];for(const c of wa.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);wa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wa.globalTransportInitialized_=!1;/**
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
 */const zw=6e4,Hw=5e3,Pw=10*1024,Bw=100*1024,xf="t",qm="d",qw="s",Vm="r",Vw="e",Gm="o",jm="a",Ym="n",Fm="p",Gw="h";class jw{constructor(t,i,a,o,c,h,d,_,g,v){this.id=t,this.repoInfo_=i,this.applicationId_=a,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=_,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qa("c:"+this.id+":"),this.transportManager_=new wa(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,a)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=va(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(xf in t){const i=t[xf];i===jm?this.upgradeIfSecondaryHealthy_():i===Vm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=ca("t",t),a=ca("d",t);if(i==="c")this.onSecondaryControl_(a);else if(i==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=ca("t",t),a=ca("d",t);i==="c"?this.onControl_(a):i==="d"&&this.onDataMessage_(a)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=ca(xf,t);if(qm in t){const a=t[qm];if(i===Gw){const o=Object.assign({},a);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===qw?this.onConnectionShutdown_(a):i===Vm?this.onReset_(a):i===Vw?Xf("Server Error: "+a):i===Gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,a=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Rh!==a&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,a),va(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zw))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):va(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fm,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ky{put(t,i,a,o){}merge(t,i,a,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,a){}onDisconnectMerge(t,i,a){}onDisconnectCancel(t,i){}reportStats(t){}}/**
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
 */class xy{constructor(t){this.allowedEvents_=t,this.listeners_={},L(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const a=[...this.listeners_[t]];for(let o=0;o<a.length;o++)a[o].callback.apply(a[o].context,i)}}on(t,i,a){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:a});const o=this.getInitialEvent(t);o&&i.apply(a,o)}off(t,i,a){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!a||a===o[c].context)){o.splice(c,1);return}}validateEventType_(t){L(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
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
 */const Qm=32,Km=768;class Ae{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let a=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[a]=this.pieces_[o],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function de(){return new Ae("")}function ie(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Ei(s){return s.pieces_.length-s.pieceNum_}function De(s){let t=s.pieceNum_;return t<s.pieces_.length&&t++,new Ae(s.pieces_,t)}function Dh(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function Yw(s){let t="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(s.pieces_[i])));return t||"/"}function Ra(s,t=0){return s.pieces_.slice(s.pieceNum_+t)}function Uy(s){if(s.pieceNum_>=s.pieces_.length)return null;const t=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)t.push(s.pieces_[i]);return new Ae(t,0)}function He(s,t){const i=[];for(let a=s.pieceNum_;a<s.pieces_.length;a++)i.push(s.pieces_[a]);if(t instanceof Ae)for(let a=t.pieceNum_;a<t.pieces_.length;a++)i.push(t.pieces_[a]);else{const a=t.split("/");for(let o=0;o<a.length;o++)a[o].length>0&&i.push(a[o])}return new Ae(i,0)}function oe(s){return s.pieceNum_>=s.pieces_.length}function gt(s,t){const i=ie(s),a=ie(t);if(i===null)return t;if(i===a)return gt(De(s),De(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+s+")")}function Fw(s,t){const i=Ra(s,0),a=Ra(t,0);for(let o=0;o<i.length&&o<a.length;o++){const c=ts(i[o],a[o]);if(c!==0)return c}return i.length===a.length?0:i.length<a.length?-1:1}function Ih(s,t){if(Ei(s)!==Ei(t))return!1;for(let i=s.pieceNum_,a=t.pieceNum_;i<=s.pieces_.length;i++,a++)if(s.pieces_[i]!==t.pieces_[a])return!1;return!0}function Ft(s,t){let i=s.pieceNum_,a=t.pieceNum_;if(Ei(s)>Ei(t))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==t.pieces_[a])return!1;++i,++a}return!0}class Qw{constructor(t,i){this.errorPrefix_=i,this.parts_=Ra(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Vo(this.parts_[a]);Ly(this)}}function Kw(s,t){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(t),s.byteLength_+=Vo(t),Ly(s)}function Xw(s){const t=s.parts_.pop();s.byteLength_-=Vo(t),s.parts_.length>0&&(s.byteLength_-=1)}function Ly(s){if(s.byteLength_>Km)throw new Error(s.errorPrefix_+"has a key path longer than "+Km+" bytes ("+s.byteLength_+").");if(s.parts_.length>Qm)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qm+") or object contains a cycle "+Yi(s))}function Yi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class Mh extends xy{static getInstance(){return new Mh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const a=!document[t];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}getInitialEvent(t){return L(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const fa=1e3,Ww=60*5*1e3,Xm=30*1e3,Zw=1.3,Jw=3e4,$w="server_kill",Wm=3;class kn extends ky{constructor(t,i,a,o,c,h,d,_){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=a,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=_,this.id=kn.nextPersistentConnectionId_++,this.log_=qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fa,this.maxReconnectDelay_=Ww,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Oo.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,a){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(We(c)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),a&&(this.requestCBHash_[o]=a)}get(t){this.initConnection_();const i=new xa,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,a,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),L(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:t,tag:a};this.listens.get(h).set(c,d),this.connected_&&this.sendListen_(d)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,a=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(a)})}sendListen_(t){const i=t.query,a=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+a+" for "+o);const c={p:a},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,d=>{const _=d.d,g=d.s;kn.warnOnListenWarnings_(_,i),(this.listens.get(a)&&this.listens.get(a).get(o))===t&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(a,o),t.onComplete&&t.onComplete(g,_))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&dn(t,"w")){const a=Zs(t,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||RT(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xm)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=wT(t)?"auth":"gauth",a={cred:t};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(i,a,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,a=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,a)})}unlisten(t,i){const a=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+a+" "+o),L(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,o)&&this.connected_&&this.sendUnlisten_(a,o,t._queryObject,i)}sendUnlisten_(t,i,a,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=a,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,a):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:a})}onDisconnectMerge(t,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,a):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:a})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,a,o){const c={p:i,d:a};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,a,o){this.putInternal("p",t,i,a,o)}merge(t,i,a,o){this.putInternal("m",t,i,a,o)}putInternal(t,i,a,o,c){this.initConnection_();const h={p:i,d:a};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,a=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,a,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,a=>{if(a.s!=="ok"){const c=a.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+We(t));const i=t.r,a=this.requestCBHash_[i];a&&(delete this.requestCBHash_[i],a(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Xf("Unrecognized action received from server: "+We(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Jw&&(this.reconnectDelay_=fa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+kn.nextConnectionId_++,c=this.lastSessionId;let h=!1,d=null;const _=function(){d?d.close():(h=!0,a())},g=function(E){L(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:_,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,C]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);h?ut("getToken() completed but was canceled"):(ut("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=C&&C.token,d=new jw(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,a,M=>{mt(M+" ("+this.repoInfo_.toString()+")"),this.interrupt($w)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&mt(E),_())}}}interrupt(t){ut("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ut("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Pf(this.interruptReasons_)&&(this.reconnectDelay_=fa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let a;i?a=i.map(c=>wh(c)).join("$"):a="default";const o=this.removeListen_(t,a);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const a=new Ae(t).toString();let o;if(this.listens.has(a)){const c=this.listens.get(a);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(a)}else o=void 0;return o}onAuthRevoked_(t,i){ut("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wm&&(this.reconnectDelay_=Xm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){ut("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
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
 */class se{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new se(t,i)}}/**
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
 */class Fo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const a=new se($s,t),o=new se($s,i);return this.compare(a,o)!==0}minPost(){return se.MIN}}/**
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
 */let oo;class zy extends Fo{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(t){oo=t}compare(t,i){return ts(t.name,i.name)}isDefinedOn(t){throw sr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return se.MIN}maxPost(){return new se(Zi,oo)}makePost(t,i){return L(typeof t=="string","KeyIndex indexValue must always be a string."),new se(t,oo)}toString(){return".key"}}const Ws=new zy;/**
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
 */class uo{constructor(t,i,a,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?a(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class rt{constructor(t,i,a,o,c){this.key=t,this.value=i,this.color=a??rt.RED,this.left=o??At.EMPTY_NODE,this.right=c??At.EMPTY_NODE}copy(t,i,a,o,c){return new rt(t??this.key,i??this.value,a??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const c=a(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,a),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let a,o;if(a=this,i(t,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(t,i),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),i(t,a.key)===0){if(a.right.isEmpty())return At.EMPTY_NODE;o=a.right.min_(),a=a.copy(o.key,o.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(t,i))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class eR{copy(t,i,a,o,c){return this}insert(t,i,a){return new rt(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(t,i=At.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new At(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(t){return new At(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(t){let i,a=this.root_;for(;!a.isEmpty();){if(i=this.comparator_(t,a.key),i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}getPredecessorKey(t){let i,a=this.root_,o=null;for(;!a.isEmpty();)if(i=this.comparator_(t,a.key),i===0){if(a.left.isEmpty())return o?o.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else i<0?a=a.left:i>0&&(o=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new uo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new uo(this.root_,null,this.comparator_,!0,t)}}At.EMPTY_NODE=new eR;/**
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
 */let Zm;class st{static set __childrenNodeConstructor(t){Zm=t}static get __childrenNodeConstructor(){return Zm}constructor(t,i=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Py(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new st(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return oe(t)?this:ie(t)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const a=ie(t);return a===null?i:i.isEmpty()&&a!==".priority"?this:(L(a!==".priority"||Ei(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Hy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=gy(this.value_):t+=this.value_,this.lazyHash_=py(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===st.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof st.__childrenNodeConstructor?-1:(L(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,a=typeof this.value_,o=st.VALUE_TYPE_ORDER.indexOf(i),c=st.VALUE_TYPE_ORDER.indexOf(a);return L(o>=0,"Unknown leaf type: "+i),L(c>=0,"Unknown leaf type: "+a),o===c?a==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let By,qy;function iR(s){By=s}function sR(s){qy=s}class rR extends Fo{compare(t,i){const a=t.node.getPriority(),o=i.node.getPriority(),c=a.compareTo(o);return c===0?ts(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Zi,new st("[PRIORITY-POST]",qy))}makePost(t,i){const a=By(t);return new se(i,new st("[PRIORITY-POST]",a))}toString(){return".priority"}}const Pe=new rR;/**
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
 */const aR=Math.log(2);class lR{constructor(t){const i=c=>parseInt(Math.log(c)/aR,10),a=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=a(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Do=function(s,t,i,a){s.sort(t);const o=function(_,g){const v=g-_;let E,C;if(v===0)return null;if(v===1)return E=s[_],C=i?i(E):E,new rt(C,E.node,rt.BLACK,null,null);{const M=parseInt(v/2,10)+_,U=o(_,M),G=o(M+1,g);return E=s[M],C=i?i(E):E,new rt(C,E.node,rt.BLACK,U,G)}},c=function(_){let g=null,v=null,E=s.length;const C=function(U,G){const W=E-U,Ue=E;E-=U;const Ye=o(W+1,Ue),Re=s[W],Ze=i?i(Re):Re;M(new rt(Ze,Re.node,G,null,Ye))},M=function(U){g?(g.left=U,g=U):(v=U,g=U)};for(let U=0;U<_.count;++U){const G=_.nextBitIsOne(),W=Math.pow(2,_.count-(U+1));G?C(W,rt.BLACK):(C(W,rt.BLACK),C(W,rt.RED))}return v},h=new lR(s.length),d=c(h);return new At(a||t,d)};/**
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
 */let Uf;const Vs={};class In{static get Default(){return L(Vs&&Pe,"ChildrenNode.ts has not been loaded"),Uf=Uf||new In({".priority":Vs},{".priority":Pe}),Uf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Zs(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof At?i:null}hasIndex(t){return dn(this.indexSet_,t.toString())}addIndex(t,i){L(t!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let o=!1;const c=i.getIterator(se.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),a.push(h),h=c.getNext();let d;o?d=Do(a,t.getCompare()):d=Vs;const _=t.toString(),g=Object.assign({},this.indexSet_);g[_]=t;const v=Object.assign({},this.indexes_);return v[_]=d,new In(v,g)}addToIndexes(t,i){const a=Eo(this.indexes_,(o,c)=>{const h=Zs(this.indexSet_,c);if(L(h,"Missing index implementation for "+c),o===Vs)if(h.isDefinedOn(t.node)){const d=[],_=i.getIterator(se.Wrap);let g=_.getNext();for(;g;)g.name!==t.name&&d.push(g),g=_.getNext();return d.push(t),Do(d,h.getCompare())}else return Vs;else{const d=i.get(t.name);let _=o;return d&&(_=_.remove(new se(t.name,d))),_.insert(t,t.node)}});return new In(a,this.indexSet_)}removeFromIndexes(t,i){const a=Eo(this.indexes_,o=>{if(o===Vs)return o;{const c=i.get(t.name);return c?o.remove(new se(t.name,c)):o}});return new In(a,this.indexSet_)}}/**
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
 */let ha;class K{static get EMPTY_NODE(){return ha||(ha=new K(new At(kh),null,In.Default))}constructor(t,i,a){this.children_=t,this.priorityNode_=i,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&Py(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ha}updatePriority(t){return this.children_.isEmpty()?this:new K(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?ha:i}}getChild(t){const i=ie(t);return i===null?this:this.getImmediateChild(i).getChild(De(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(L(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const a=new se(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(a,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(a,this.children_));const h=o.isEmpty()?ha:this.priorityNode_;return new K(o,h,c)}}updateChild(t,i){const a=ie(t);if(a===null)return i;{L(ie(t)!==".priority"||Ei(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(a).updateChild(De(t),i);return this.updateImmediateChild(a,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let a=0,o=0,c=!0;if(this.forEachChild(Pe,(h,d)=>{i[h]=d.val(t),a++,c&&K.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*a){const h=[];for(const d in i)h[d]=i[d];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Hy(this.getPriority().val())+":"),this.forEachChild(Pe,(i,a)=>{const o=a.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":py(t)}return this.lazyHash_}getPredecessorChildName(t,i,a){const o=this.resolveIndex_(a);if(o){const c=o.getPredecessorKey(new se(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const a=i.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new se(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const a=i.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new se(i,this.children_.get(i)):null}forEachChild(t,i){const a=this.resolveIndex_(t);return a?a.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const a=this.resolveIndex_(i);if(a)return a.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,se.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const a=this.resolveIndex_(i);if(a)return a.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,se.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Va?-1:0}withIndex(t){if(t===Ws||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new K(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Ws||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const a=this.getIterator(Pe),o=i.getIterator(Pe);let c=a.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=a.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Ws?null:this.indexMap_.get(t.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oR extends K{constructor(){super(new At(kh),K.EMPTY_NODE,In.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return K.EMPTY_NODE}isEmpty(){return!1}}const Va=new oR;Object.defineProperties(se,{MIN:{value:new se($s,K.EMPTY_NODE)},MAX:{value:new se(Zi,Va)}});zy.__EMPTY_NODE=K.EMPTY_NODE;st.__childrenNodeConstructor=K;nR(Va);sR(Va);/**
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
 */const uR=!0;function Xe(s,t=null){if(s===null)return K.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(t=s[".priority"]),L(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new st(i,Xe(t))}if(!(s instanceof Array)&&uR){const i=[];let a=!1;if(ct(s,(h,d)=>{if(h.substring(0,1)!=="."){const _=Xe(d);_.isEmpty()||(a=a||!_.getPriority().isEmpty(),i.push(new se(h,_)))}}),i.length===0)return K.EMPTY_NODE;const c=Do(i,tR,h=>h.name,kh);if(a){const h=Do(i,Pe.getCompare());return new K(c,Xe(t),new In({".priority":h},{".priority":Pe}))}else return new K(c,Xe(t),In.Default)}else{let i=K.EMPTY_NODE;return ct(s,(a,o)=>{if(dn(s,a)&&a.substring(0,1)!=="."){const c=Xe(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(a,c))}}),i.updatePriority(Xe(t))}}iR(Xe);/**
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
 */class cR extends Fo{constructor(t){super(),this.indexPath_=t,L(!oe(t)&&ie(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const a=this.extractChild(t.node),o=this.extractChild(i.node),c=a.compareTo(o);return c===0?ts(t.name,i.name):c}makePost(t,i){const a=Xe(t),o=K.EMPTY_NODE.updateChild(this.indexPath_,a);return new se(i,o)}maxPost(){const t=K.EMPTY_NODE.updateChild(this.indexPath_,Va);return new se(Zi,t)}toString(){return Ra(this.indexPath_,0).join("/")}}/**
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
 */class fR extends Fo{compare(t,i){const a=t.node.compareTo(i.node);return a===0?ts(t.name,i.name):a}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(t,i){const a=Xe(t);return new se(i,a)}toString(){return".value"}}const hR=new fR;/**
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
 */function Vy(s){return{type:"value",snapshotNode:s}}function er(s,t){return{type:"child_added",snapshotNode:t,childName:s}}function Na(s,t){return{type:"child_removed",snapshotNode:t,childName:s}}function Oa(s,t,i){return{type:"child_changed",snapshotNode:t,childName:s,oldSnap:i}}function dR(s,t){return{type:"child_moved",snapshotNode:t,childName:s}}/**
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
 */class xh{constructor(t){this.index_=t}updateChild(t,i,a,o,c,h){L(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=t.getImmediateChild(i);return d.getChild(o).equals(a.getChild(o))&&d.isEmpty()===a.isEmpty()||(h!=null&&(a.isEmpty()?t.hasChild(i)?h.trackChildChange(Na(i,d)):L(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?h.trackChildChange(er(i,a)):h.trackChildChange(Oa(i,a,d))),t.isLeafNode()&&a.isEmpty())?t:t.updateImmediateChild(i,a).withIndex(this.index_)}updateFullNode(t,i,a){return a!=null&&(t.isLeafNode()||t.forEachChild(Pe,(o,c)=>{i.hasChild(o)||a.trackChildChange(Na(o,c))}),i.isLeafNode()||i.forEachChild(Pe,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||a.trackChildChange(Oa(o,c,h))}else a.trackChildChange(er(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?K.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Da{constructor(t){this.indexedFilter_=new xh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Da.getStartPost_(t),this.endPost_=Da.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,a=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&a}updateChild(t,i,a,o,c,h){return this.matches(new se(i,a))||(a=K.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,a,o,c,h)}updateFullNode(t,i,a){i.isLeafNode()&&(i=K.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(K.EMPTY_NODE);const c=this;return i.forEachChild(Pe,(h,d)=>{c.matches(new se(h,d))||(o=o.updateImmediateChild(h,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,a)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
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
 */class pR{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=i=>{const a=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new Da(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,a,o,c,h){return this.rangedFilter_.matches(new se(i,a))||(a=K.EMPTY_NODE),t.getImmediateChild(i).equals(a)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,a,o,c,h):this.fullLimitUpdateChild_(t,i,a,c,h)}updateFullNode(t,i,a){let o;if(i.isLeafNode()||i.isEmpty())o=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=K.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const d=c.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(K.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const d=c.getNext();h<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?h++:o=o.updateImmediateChild(d.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,a)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,a,o,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(C,M)=>E(M,C)}else h=this.index_.getCompare();const d=t;L(d.numChildren()===this.limit_,"");const _=new se(i,a),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(_);if(d.hasChild(i)){const E=d.getImmediateChild(i);let C=o.getChildAfterChild(this.index_,g,this.reverse_);for(;C!=null&&(C.name===i||d.hasChild(C.name));)C=o.getChildAfterChild(this.index_,C,this.reverse_);const M=C==null?1:h(C,_);if(v&&!a.isEmpty()&&M>=0)return c!=null&&c.trackChildChange(Oa(i,a,E)),d.updateImmediateChild(i,a);{c!=null&&c.trackChildChange(Na(i,E));const G=d.updateImmediateChild(i,K.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(c!=null&&c.trackChildChange(er(C.name,C.node)),G.updateImmediateChild(C.name,C.node)):G}}else return a.isEmpty()?t:v&&h(g,_)>=0?(c!=null&&(c.trackChildChange(Na(g.name,g.node)),c.trackChildChange(er(i,a))),d.updateImmediateChild(i,a).updateImmediateChild(g.name,K.EMPTY_NODE)):t}}/**
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
 */class Uh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const t=new Uh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function _R(s){return s.loadsAllData()?new xh(s.getIndex()):s.hasLimit()?new pR(s):new Da(s)}function Jm(s){const t={};if(s.isDefault())return t;let i;if(s.index_===Pe?i="$priority":s.index_===hR?i="$value":s.index_===Ws?i="$key":(L(s.index_ instanceof cR,"Unrecognized index type!"),i=s.index_.toString()),t.orderBy=We(i),s.startSet_){const a=s.startAfterSet_?"startAfter":"startAt";t[a]=We(s.indexStartValue_),s.startNameSet_&&(t[a]+=","+We(s.indexStartName_))}if(s.endSet_){const a=s.endBeforeSet_?"endBefore":"endAt";t[a]=We(s.indexEndValue_),s.endNameSet_&&(t[a]+=","+We(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?t.limitToFirst=s.limit_:t.limitToLast=s.limit_),t}function $m(s){const t={};if(s.startSet_&&(t.sp=s.indexStartValue_,s.startNameSet_&&(t.sn=s.indexStartName_),t.sin=!s.startAfterSet_),s.endSet_&&(t.ep=s.indexEndValue_,s.endNameSet_&&(t.en=s.indexEndName_),t.ein=!s.endBeforeSet_),s.limitSet_){t.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),t.vf=i}return s.index_!==Pe&&(t.i=s.index_.toString()),t}/**
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
 */class Io extends ky{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(L(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,a,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.log_=qa("p:rest:"),this.listens_={}}listen(t,i,a,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=Io.getListenId_(t,a),d={};this.listens_[h]=d;const _=Jm(t._queryParams);this.restRequest_(c+".json",_,(g,v)=>{let E=v;if(g===404&&(E=null,g=null),g===null&&this.onDataUpdate_(c,E,!1,a),Zs(this.listens_,h)===d){let C;g?g===401?C="permission_denied":C="rest_error:"+g:C="ok",o(C,null)}})}unlisten(t,i){const a=Io.getListenId_(t,i);delete this.listens_[a]}get(t){const i=Jm(t._queryParams),a=t._path.toString(),o=new xa;return this.restRequest_(a+".json",i,(c,h)=>{let d=h;c===404&&(d=null,c=null),c===null?(this.onDataUpdate_(a,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},a){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+rr(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(a&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let _=null;if(d.status>=200&&d.status<300){try{_=Ta(d.responseText)}catch{mt("Failed to parse JSON response for "+h+": "+d.responseText)}a(null,_)}else d.status!==401&&d.status!==404&&mt("Got unsuccessful REST response for "+h+" Status: "+d.status),a(d.status);a=null}},d.open("GET",h,!0),d.send()})}}/**
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
 */class gR{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
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
 */function Mo(){return{value:null,children:new Map}}function Gy(s,t,i){if(oe(t))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(t,i);else{const a=ie(t);s.children.has(a)||s.children.set(a,Mo());const o=s.children.get(a);t=De(t),Gy(o,t,i)}}function Jf(s,t,i){s.value!==null?i(t,s.value):mR(s,(a,o)=>{const c=new Ae(t.toString()+"/"+a);Jf(o,c,i)})}function mR(s,t){s.children.forEach((i,a)=>{t(a,i)})}/**
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
 */class vR{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&ct(this.last_,(a,o)=>{i[a]=i[a]-o}),this.last_=t,i}}/**
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
 */const ev=10*1e3,yR=30*1e3,ER=5*60*1e3;class SR{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new vR(t);const a=ev+(yR-ev)*Math.random();va(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const t=this.statsListener_.get(),i={};let a=!1;ct(t,(o,c)=>{c>0&&dn(this.statsToReport_,o)&&(i[o]=c,a=!0)}),a&&this.server_.reportStats(i),va(this.reportStats_.bind(this),Math.floor(Math.random()*2*ER))}}/**
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
 */class ko{constructor(t,i,a){this.path=t,this.affectedTree=i,this.revert=a,this.type=tn.ACK_USER_WRITE,this.source=Lh()}operationForChild(t){if(oe(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Ae(t));return new ko(de(),i,this.revert)}}else return L(ie(this.path)===t,"operationForChild called for unrelated child."),new ko(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ia{constructor(t,i){this.source=t,this.path=i,this.type=tn.LISTEN_COMPLETE}operationForChild(t){return oe(this.path)?new Ia(this.source,de()):new Ia(this.source,De(this.path))}}/**
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
 */class Ji{constructor(t,i,a){this.source=t,this.path=i,this.snap=a,this.type=tn.OVERWRITE}operationForChild(t){return oe(this.path)?new Ji(this.source,de(),this.snap.getImmediateChild(t)):new Ji(this.source,De(this.path),this.snap)}}/**
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
 */class tr{constructor(t,i,a){this.source=t,this.path=i,this.children=a,this.type=tn.MERGE}operationForChild(t){if(oe(this.path)){const i=this.children.subtree(new Ae(t));return i.isEmpty()?null:i.value?new Ji(this.source,de(),i.value):new tr(this.source,de(),i)}else return L(ie(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new tr(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Si{constructor(t,i,a){this.node_=t,this.fullyInitialized_=i,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(oe(t))return this.isFullyInitialized()&&!this.filtered_;const i=ie(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class TR{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function bR(s,t,i,a){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(dR(h.childName,h.snapshotNode))}),da(s,o,"child_removed",t,a,i),da(s,o,"child_added",t,a,i),da(s,o,"child_moved",c,a,i),da(s,o,"child_changed",t,a,i),da(s,o,"value",t,a,i),o}function da(s,t,i,a,o,c){const h=a.filter(d=>d.type===i);h.sort((d,_)=>AR(s,d,_)),h.forEach(d=>{const _=CR(s,d,c);o.forEach(g=>{g.respondsTo(d.type)&&t.push(g.createEvent(_,s.query_))})})}function CR(s,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,s.index_)),t}function AR(s,t,i){if(t.childName==null||i.childName==null)throw sr("Should only compare child_ events.");const a=new se(t.childName,t.snapshotNode),o=new se(i.childName,i.snapshotNode);return s.index_.compare(a,o)}/**
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
 */function Qo(s,t){return{eventCache:s,serverCache:t}}function ya(s,t,i,a){return Qo(new Si(t,i,a),s.serverCache)}function jy(s,t,i,a){return Qo(s.eventCache,new Si(t,i,a))}function xo(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function $i(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let Lf;const wR=()=>(Lf||(Lf=new At(cw)),Lf);class Oe{static fromObject(t){let i=new Oe(null);return ct(t,(a,o)=>{i=i.set(new Ae(a),o)}),i}constructor(t,i=wR()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:de(),value:this.value};if(oe(t))return null;{const a=ie(t),o=this.children.get(a);if(o!==null){const c=o.findRootMostMatchingPathAndValue(De(t),i);return c!=null?{path:He(new Ae(a),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(oe(t))return this;{const i=ie(t),a=this.children.get(i);return a!==null?a.subtree(De(t)):new Oe(null)}}set(t,i){if(oe(t))return new Oe(i,this.children);{const a=ie(t),c=(this.children.get(a)||new Oe(null)).set(De(t),i),h=this.children.insert(a,c);return new Oe(this.value,h)}}remove(t){if(oe(t))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const i=ie(t),a=this.children.get(i);if(a){const o=a.remove(De(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Oe(null):new Oe(this.value,c)}else return this}}get(t){if(oe(t))return this.value;{const i=ie(t),a=this.children.get(i);return a?a.get(De(t)):null}}setTree(t,i){if(oe(t))return i;{const a=ie(t),c=(this.children.get(a)||new Oe(null)).setTree(De(t),i);let h;return c.isEmpty()?h=this.children.remove(a):h=this.children.insert(a,c),new Oe(this.value,h)}}fold(t){return this.fold_(de(),t)}fold_(t,i){const a={};return this.children.inorderTraversal((o,c)=>{a[o]=c.fold_(He(t,o),i)}),i(t,this.value,a)}findOnPath(t,i){return this.findOnPath_(t,de(),i)}findOnPath_(t,i,a){const o=this.value?a(i,this.value):!1;if(o)return o;if(oe(t))return null;{const c=ie(t),h=this.children.get(c);return h?h.findOnPath_(De(t),He(i,c),a):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,de(),i)}foreachOnPath_(t,i,a){if(oe(t))return this;{this.value&&a(i,this.value);const o=ie(t),c=this.children.get(o);return c?c.foreachOnPath_(De(t),He(i,o),a):new Oe(null)}}foreach(t){this.foreach_(de(),t)}foreach_(t,i){this.children.inorderTraversal((a,o)=>{o.foreach_(He(t,a),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,a)=>{a.value&&t(i,a.value)})}}/**
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
 */class nn{constructor(t){this.writeTree_=t}static empty(){return new nn(new Oe(null))}}function Ea(s,t,i){if(oe(t))return new nn(new Oe(i));{const a=s.writeTree_.findRootMostValueAndPath(t);if(a!=null){const o=a.path;let c=a.value;const h=gt(o,t);return c=c.updateChild(h,i),new nn(s.writeTree_.set(o,c))}else{const o=new Oe(i),c=s.writeTree_.setTree(t,o);return new nn(c)}}}function $f(s,t,i){let a=s;return ct(i,(o,c)=>{a=Ea(a,He(t,o),c)}),a}function tv(s,t){if(oe(t))return nn.empty();{const i=s.writeTree_.setTree(t,new Oe(null));return new nn(i)}}function eh(s,t){return ns(s,t)!=null}function ns(s,t){const i=s.writeTree_.findRootMostValueAndPath(t);return i!=null?s.writeTree_.get(i.path).getChild(gt(i.path,t)):null}function nv(s){const t=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Pe,(a,o)=>{t.push(new se(a,o))}):s.writeTree_.children.inorderTraversal((a,o)=>{o.value!=null&&t.push(new se(a,o.value))}),t}function vi(s,t){if(oe(t))return s;{const i=ns(s,t);return i!=null?new nn(new Oe(i)):new nn(s.writeTree_.subtree(t))}}function th(s){return s.writeTree_.isEmpty()}function nr(s,t){return Yy(de(),s.writeTree_,t)}function Yy(s,t,i){if(t.value!=null)return i.updateChild(s,t.value);{let a=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(L(c.value!==null,"Priority writes must always be leaf nodes"),a=c.value):i=Yy(He(s,o),c,i)}),!i.getChild(s).isEmpty()&&a!==null&&(i=i.updateChild(He(s,".priority"),a)),i}}/**
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
 */function Ko(s,t){return Xy(t,s)}function RR(s,t,i,a,o){L(a>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:a,visible:o}),o&&(s.visibleWrites=Ea(s.visibleWrites,t,i)),s.lastWriteId=a}function NR(s,t,i,a){L(a>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:t,children:i,writeId:a,visible:!0}),s.visibleWrites=$f(s.visibleWrites,t,i),s.lastWriteId=a}function OR(s,t){for(let i=0;i<s.allWrites.length;i++){const a=s.allWrites[i];if(a.writeId===t)return a}return null}function DR(s,t){const i=s.allWrites.findIndex(d=>d.writeId===t);L(i>=0,"removeWrite called with nonexistent writeId.");const a=s.allWrites[i];s.allWrites.splice(i,1);let o=a.visible,c=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&IR(d,a.path)?o=!1:Ft(a.path,d.path)&&(c=!0)),h--}if(o){if(c)return MR(s),!0;if(a.snap)s.visibleWrites=tv(s.visibleWrites,a.path);else{const d=a.children;ct(d,_=>{s.visibleWrites=tv(s.visibleWrites,He(a.path,_))})}return!0}else return!1}function IR(s,t){if(s.snap)return Ft(s.path,t);for(const i in s.children)if(s.children.hasOwnProperty(i)&&Ft(He(s.path,i),t))return!0;return!1}function MR(s){s.visibleWrites=Fy(s.allWrites,kR,de()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function kR(s){return s.visible}function Fy(s,t,i){let a=nn.empty();for(let o=0;o<s.length;++o){const c=s[o];if(t(c)){const h=c.path;let d;if(c.snap)Ft(i,h)?(d=gt(i,h),a=Ea(a,d,c.snap)):Ft(h,i)&&(d=gt(h,i),a=Ea(a,de(),c.snap.getChild(d)));else if(c.children){if(Ft(i,h))d=gt(i,h),a=$f(a,d,c.children);else if(Ft(h,i))if(d=gt(h,i),oe(d))a=$f(a,de(),c.children);else{const _=Zs(c.children,ie(d));if(_){const g=_.getChild(De(d));a=Ea(a,de(),g)}}}else throw sr("WriteRecord should have .snap or .children")}}return a}function Qy(s,t,i,a,o){if(!a&&!o){const c=ns(s.visibleWrites,t);if(c!=null)return c;{const h=vi(s.visibleWrites,t);if(th(h))return i;if(i==null&&!eh(h,de()))return null;{const d=i||K.EMPTY_NODE;return nr(h,d)}}}else{const c=vi(s.visibleWrites,t);if(!o&&th(c))return i;if(!o&&i==null&&!eh(c,de()))return null;{const h=function(g){return(g.visible||o)&&(!a||!~a.indexOf(g.writeId))&&(Ft(g.path,t)||Ft(t,g.path))},d=Fy(s.allWrites,h,t),_=i||K.EMPTY_NODE;return nr(d,_)}}}function xR(s,t,i){let a=K.EMPTY_NODE;const o=ns(s.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Pe,(c,h)=>{a=a.updateImmediateChild(c,h)}),a;if(i){const c=vi(s.visibleWrites,t);return i.forEachChild(Pe,(h,d)=>{const _=nr(vi(c,new Ae(h)),d);a=a.updateImmediateChild(h,_)}),nv(c).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}else{const c=vi(s.visibleWrites,t);return nv(c).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}}function UR(s,t,i,a,o){L(a||o,"Either existingEventSnap or existingServerSnap must exist");const c=He(t,i);if(eh(s.visibleWrites,c))return null;{const h=vi(s.visibleWrites,c);return th(h)?o.getChild(i):nr(h,o.getChild(i))}}function LR(s,t,i,a){const o=He(t,i),c=ns(s.visibleWrites,o);if(c!=null)return c;if(a.isCompleteForChild(i)){const h=vi(s.visibleWrites,o);return nr(h,a.getNode().getImmediateChild(i))}else return null}function zR(s,t){return ns(s.visibleWrites,t)}function HR(s,t,i,a,o,c,h){let d;const _=vi(s.visibleWrites,t),g=ns(_,de());if(g!=null)d=g;else if(i!=null)d=nr(_,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=h.getCompare(),C=c?d.getReverseIteratorFrom(a,h):d.getIteratorFrom(a,h);let M=C.getNext();for(;M&&v.length<o;)E(M,a)!==0&&v.push(M),M=C.getNext();return v}else return[]}function PR(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function Uo(s,t,i,a){return Qy(s.writeTree,s.treePath,t,i,a)}function Ph(s,t){return xR(s.writeTree,s.treePath,t)}function iv(s,t,i,a){return UR(s.writeTree,s.treePath,t,i,a)}function Lo(s,t){return zR(s.writeTree,He(s.treePath,t))}function BR(s,t,i,a,o,c){return HR(s.writeTree,s.treePath,t,i,a,o,c)}function Bh(s,t,i){return LR(s.writeTree,s.treePath,t,i)}function Ky(s,t){return Xy(He(s.treePath,t),s.writeTree)}function Xy(s,t){return{treePath:s,writeTree:t}}/**
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
 */class qR{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,a=t.childName;L(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),L(a!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(a);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(a,Oa(a,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(a);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(a,Na(a,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(a,er(a,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(a,Oa(a,t.snapshotNode,o.oldSnap));else throw sr("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(a,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class VR{getCompleteChild(t){return null}getChildAfterChild(t,i,a){return null}}const Wy=new VR;class qh{constructor(t,i,a=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=a}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const a=this.optCompleteServerCache_!=null?new Si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bh(this.writes_,t,a)}}getChildAfterChild(t,i,a){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$i(this.viewCache_),c=BR(this.writes_,o,i,1,a,t);return c.length===0?null:c[0]}}/**
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
 */function GR(s){return{filter:s}}function jR(s,t){L(t.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),L(t.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function YR(s,t,i,a,o){const c=new qR;let h,d;if(i.type===tn.OVERWRITE){const g=i;g.source.fromUser?h=nh(s,t,g.path,g.snap,a,o,c):(L(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered()&&!oe(g.path),h=zo(s,t,g.path,g.snap,a,o,d,c))}else if(i.type===tn.MERGE){const g=i;g.source.fromUser?h=QR(s,t,g.path,g.children,a,o,c):(L(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered(),h=ih(s,t,g.path,g.children,a,o,d,c))}else if(i.type===tn.ACK_USER_WRITE){const g=i;g.revert?h=WR(s,t,g.path,a,o,c):h=KR(s,t,g.path,g.affectedTree,a,o,c)}else if(i.type===tn.LISTEN_COMPLETE)h=XR(s,t,i.path,a,c);else throw sr("Unknown operation type: "+i.type);const _=c.getChanges();return FR(t,h,_),{viewCache:h,changes:_}}function FR(s,t,i){const a=t.eventCache;if(a.isFullyInitialized()){const o=a.getNode().isLeafNode()||a.getNode().isEmpty(),c=xo(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!a.getNode().equals(c)||!a.getNode().getPriority().equals(c.getPriority()))&&i.push(Vy(xo(t)))}}function Zy(s,t,i,a,o,c){const h=t.eventCache;if(Lo(a,i)!=null)return t;{let d,_;if(oe(i))if(L(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const g=$i(t),v=g instanceof K?g:K.EMPTY_NODE,E=Ph(a,v);d=s.filter.updateFullNode(t.eventCache.getNode(),E,c)}else{const g=Uo(a,$i(t));d=s.filter.updateFullNode(t.eventCache.getNode(),g,c)}else{const g=ie(i);if(g===".priority"){L(Ei(i)===1,"Can't have a priority with additional path components");const v=h.getNode();_=t.serverCache.getNode();const E=iv(a,i,v,_);E!=null?d=s.filter.updatePriority(v,E):d=h.getNode()}else{const v=De(i);let E;if(h.isCompleteForChild(g)){_=t.serverCache.getNode();const C=iv(a,i,h.getNode(),_);C!=null?E=h.getNode().getImmediateChild(g).updateChild(v,C):E=h.getNode().getImmediateChild(g)}else E=Bh(a,g,t.serverCache);E!=null?d=s.filter.updateChild(h.getNode(),g,E,v,o,c):d=h.getNode()}}return ya(t,d,h.isFullyInitialized()||oe(i),s.filter.filtersNodes())}}function zo(s,t,i,a,o,c,h,d){const _=t.serverCache;let g;const v=h?s.filter:s.filter.getIndexedFilter();if(oe(i))g=v.updateFullNode(_.getNode(),a,null);else if(v.filtersNodes()&&!_.isFiltered()){const M=_.getNode().updateChild(i,a);g=v.updateFullNode(_.getNode(),M,null)}else{const M=ie(i);if(!_.isCompleteForPath(i)&&Ei(i)>1)return t;const U=De(i),W=_.getNode().getImmediateChild(M).updateChild(U,a);M===".priority"?g=v.updatePriority(_.getNode(),W):g=v.updateChild(_.getNode(),M,W,U,Wy,null)}const E=jy(t,g,_.isFullyInitialized()||oe(i),v.filtersNodes()),C=new qh(o,E,c);return Zy(s,E,i,o,C,d)}function nh(s,t,i,a,o,c,h){const d=t.eventCache;let _,g;const v=new qh(o,t,c);if(oe(i))g=s.filter.updateFullNode(t.eventCache.getNode(),a,h),_=ya(t,g,!0,s.filter.filtersNodes());else{const E=ie(i);if(E===".priority")g=s.filter.updatePriority(t.eventCache.getNode(),a),_=ya(t,g,d.isFullyInitialized(),d.isFiltered());else{const C=De(i),M=d.getNode().getImmediateChild(E);let U;if(oe(C))U=a;else{const G=v.getCompleteChild(E);G!=null?Dh(C)===".priority"&&G.getChild(Uy(C)).isEmpty()?U=G:U=G.updateChild(C,a):U=K.EMPTY_NODE}if(M.equals(U))_=t;else{const G=s.filter.updateChild(d.getNode(),E,U,C,v,h);_=ya(t,G,d.isFullyInitialized(),s.filter.filtersNodes())}}}return _}function sv(s,t){return s.eventCache.isCompleteForChild(t)}function QR(s,t,i,a,o,c,h){let d=t;return a.foreach((_,g)=>{const v=He(i,_);sv(t,ie(v))&&(d=nh(s,d,v,g,o,c,h))}),a.foreach((_,g)=>{const v=He(i,_);sv(t,ie(v))||(d=nh(s,d,v,g,o,c,h))}),d}function rv(s,t,i){return i.foreach((a,o)=>{t=t.updateChild(a,o)}),t}function ih(s,t,i,a,o,c,h,d){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let _=t,g;oe(i)?g=a:g=new Oe(null).setTree(i,a);const v=t.serverCache.getNode();return g.children.inorderTraversal((E,C)=>{if(v.hasChild(E)){const M=t.serverCache.getNode().getImmediateChild(E),U=rv(s,M,C);_=zo(s,_,new Ae(E),U,o,c,h,d)}}),g.children.inorderTraversal((E,C)=>{const M=!t.serverCache.isCompleteForChild(E)&&C.value===null;if(!v.hasChild(E)&&!M){const U=t.serverCache.getNode().getImmediateChild(E),G=rv(s,U,C);_=zo(s,_,new Ae(E),G,o,c,h,d)}}),_}function KR(s,t,i,a,o,c,h){if(Lo(o,i)!=null)return t;const d=t.serverCache.isFiltered(),_=t.serverCache;if(a.value!=null){if(oe(i)&&_.isFullyInitialized()||_.isCompleteForPath(i))return zo(s,t,i,_.getNode().getChild(i),o,c,d,h);if(oe(i)){let g=new Oe(null);return _.getNode().forEachChild(Ws,(v,E)=>{g=g.set(new Ae(v),E)}),ih(s,t,i,g,o,c,d,h)}else return t}else{let g=new Oe(null);return a.foreach((v,E)=>{const C=He(i,v);_.isCompleteForPath(C)&&(g=g.set(v,_.getNode().getChild(C)))}),ih(s,t,i,g,o,c,d,h)}}function XR(s,t,i,a,o){const c=t.serverCache,h=jy(t,c.getNode(),c.isFullyInitialized()||oe(i),c.isFiltered());return Zy(s,h,i,a,Wy,o)}function WR(s,t,i,a,o,c){let h;if(Lo(a,i)!=null)return t;{const d=new qh(a,t,o),_=t.eventCache.getNode();let g;if(oe(i)||ie(i)===".priority"){let v;if(t.serverCache.isFullyInitialized())v=Uo(a,$i(t));else{const E=t.serverCache.getNode();L(E instanceof K,"serverChildren would be complete if leaf node"),v=Ph(a,E)}v=v,g=s.filter.updateFullNode(_,v,c)}else{const v=ie(i);let E=Bh(a,v,t.serverCache);E==null&&t.serverCache.isCompleteForChild(v)&&(E=_.getImmediateChild(v)),E!=null?g=s.filter.updateChild(_,v,E,De(i),d,c):t.eventCache.getNode().hasChild(v)?g=s.filter.updateChild(_,v,K.EMPTY_NODE,De(i),d,c):g=_,g.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Uo(a,$i(t)),h.isLeafNode()&&(g=s.filter.updateFullNode(g,h,c)))}return h=t.serverCache.isFullyInitialized()||Lo(a,de())!=null,ya(t,g,h,s.filter.filtersNodes())}}/**
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
 */class ZR{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const a=this.query_._queryParams,o=new xh(a.getIndex()),c=_R(a);this.processor_=GR(c);const h=i.serverCache,d=i.eventCache,_=o.updateFullNode(K.EMPTY_NODE,h.getNode(),null),g=c.updateFullNode(K.EMPTY_NODE,d.getNode(),null),v=new Si(_,h.isFullyInitialized(),o.filtersNodes()),E=new Si(g,d.isFullyInitialized(),c.filtersNodes());this.viewCache_=Qo(E,v),this.eventGenerator_=new TR(this.query_)}get query(){return this.query_}}function JR(s){return s.viewCache_.serverCache.getNode()}function $R(s){return xo(s.viewCache_)}function e1(s,t){const i=$i(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!oe(t)&&!i.getImmediateChild(ie(t)).isEmpty())?i.getChild(t):null}function av(s){return s.eventRegistrations_.length===0}function t1(s,t){s.eventRegistrations_.push(t)}function lv(s,t,i){const a=[];if(i){L(t==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&a.push(h)})}if(t){let o=[];for(let c=0;c<s.eventRegistrations_.length;++c){const h=s.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return a}function ov(s,t,i,a){t.type===tn.MERGE&&t.source.queryId!==null&&(L($i(s.viewCache_),"We should always have a full cache before handling merges"),L(xo(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,c=YR(s.processor_,o,t,i,a);return jR(s.processor_,c.viewCache),L(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,Jy(s,c.changes,c.viewCache.eventCache.getNode(),null)}function n1(s,t){const i=s.viewCache_.eventCache,a=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Pe,(c,h)=>{a.push(er(c,h))}),i.isFullyInitialized()&&a.push(Vy(i.getNode())),Jy(s,a,i.getNode(),t)}function Jy(s,t,i,a){const o=a?[a]:s.eventRegistrations_;return bR(s.eventGenerator_,t,i,o)}/**
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
 */let Ho;class $y{constructor(){this.views=new Map}}function i1(s){L(!Ho,"__referenceConstructor has already been defined"),Ho=s}function s1(){return L(Ho,"Reference.ts has not been loaded"),Ho}function r1(s){return s.views.size===0}function Vh(s,t,i,a){const o=t.source.queryId;if(o!==null){const c=s.views.get(o);return L(c!=null,"SyncTree gave us an op for an invalid query."),ov(c,t,i,a)}else{let c=[];for(const h of s.views.values())c=c.concat(ov(h,t,i,a));return c}}function eE(s,t,i,a,o){const c=t._queryIdentifier,h=s.views.get(c);if(!h){let d=Uo(i,o?a:null),_=!1;d?_=!0:a instanceof K?(d=Ph(i,a),_=!1):(d=K.EMPTY_NODE,_=!1);const g=Qo(new Si(d,_,!1),new Si(a,o,!1));return new ZR(t,g)}return h}function a1(s,t,i,a,o,c){const h=eE(s,t,a,o,c);return s.views.has(t._queryIdentifier)||s.views.set(t._queryIdentifier,h),t1(h,i),n1(h,i)}function l1(s,t,i,a){const o=t._queryIdentifier,c=[];let h=[];const d=Ti(s);if(o==="default")for(const[_,g]of s.views.entries())h=h.concat(lv(g,i,a)),av(g)&&(s.views.delete(_),g.query._queryParams.loadsAllData()||c.push(g.query));else{const _=s.views.get(o);_&&(h=h.concat(lv(_,i,a)),av(_)&&(s.views.delete(o),_.query._queryParams.loadsAllData()||c.push(_.query)))}return d&&!Ti(s)&&c.push(new(s1())(t._repo,t._path)),{removed:c,events:h}}function tE(s){const t=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function yi(s,t){let i=null;for(const a of s.views.values())i=i||e1(a,t);return i}function nE(s,t){if(t._queryParams.loadsAllData())return Xo(s);{const a=t._queryIdentifier;return s.views.get(a)}}function iE(s,t){return nE(s,t)!=null}function Ti(s){return Xo(s)!=null}function Xo(s){for(const t of s.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Po;function o1(s){L(!Po,"__referenceConstructor has already been defined"),Po=s}function u1(){return L(Po,"Reference.ts has not been loaded"),Po}let c1=1;class uv{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=PR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sE(s,t,i,a,o){return RR(s.pendingWriteTree_,t,i,a,o),o?ur(s,new Ji(Lh(),t,i)):[]}function f1(s,t,i,a){NR(s.pendingWriteTree_,t,i,a);const o=Oe.fromObject(i);return ur(s,new tr(Lh(),t,o))}function pi(s,t,i=!1){const a=OR(s.pendingWriteTree_,t);if(DR(s.pendingWriteTree_,t)){let c=new Oe(null);return a.snap!=null?c=c.set(de(),!0):ct(a.children,h=>{c=c.set(new Ae(h),!0)}),ur(s,new ko(a.path,c,i))}else return[]}function Ga(s,t,i){return ur(s,new Ji(zh(),t,i))}function h1(s,t,i){const a=Oe.fromObject(i);return ur(s,new tr(zh(),t,a))}function d1(s,t){return ur(s,new Ia(zh(),t))}function p1(s,t,i){const a=jh(s,i);if(a){const o=Yh(a),c=o.path,h=o.queryId,d=gt(c,t),_=new Ia(Hh(h),d);return Fh(s,c,_)}else return[]}function Bo(s,t,i,a,o=!1){const c=t._path,h=s.syncPointTree_.get(c);let d=[];if(h&&(t._queryIdentifier==="default"||iE(h,t))){const _=l1(h,t,i,a);r1(h)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const g=_.removed;if(d=_.events,!o){const v=g.findIndex(C=>C._queryParams.loadsAllData())!==-1,E=s.syncPointTree_.findOnPath(c,(C,M)=>Ti(M));if(v&&!E){const C=s.syncPointTree_.subtree(c);if(!C.isEmpty()){const M=m1(C);for(let U=0;U<M.length;++U){const G=M[U],W=G.query,Ue=oE(s,G);s.listenProvider_.startListening(Sa(W),Ma(s,W),Ue.hashFn,Ue.onComplete)}}}!E&&g.length>0&&!a&&(v?s.listenProvider_.stopListening(Sa(t),null):g.forEach(C=>{const M=s.queryToTagMap.get(Wo(C));s.listenProvider_.stopListening(Sa(C),M)}))}v1(s,g)}return d}function rE(s,t,i,a){const o=jh(s,a);if(o!=null){const c=Yh(o),h=c.path,d=c.queryId,_=gt(h,t),g=new Ji(Hh(d),_,i);return Fh(s,h,g)}else return[]}function _1(s,t,i,a){const o=jh(s,a);if(o){const c=Yh(o),h=c.path,d=c.queryId,_=gt(h,t),g=Oe.fromObject(i),v=new tr(Hh(d),_,g);return Fh(s,h,v)}else return[]}function sh(s,t,i,a=!1){const o=t._path;let c=null,h=!1;s.syncPointTree_.foreachOnPath(o,(C,M)=>{const U=gt(C,o);c=c||yi(M,U),h=h||Ti(M)});let d=s.syncPointTree_.get(o);d?(h=h||Ti(d),c=c||yi(d,de())):(d=new $y,s.syncPointTree_=s.syncPointTree_.set(o,d));let _;c!=null?_=!0:(_=!1,c=K.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((M,U)=>{const G=yi(U,de());G&&(c=c.updateImmediateChild(M,G))}));const g=iE(d,t);if(!g&&!t._queryParams.loadsAllData()){const C=Wo(t);L(!s.queryToTagMap.has(C),"View does not exist, but we have a tag");const M=y1();s.queryToTagMap.set(C,M),s.tagToQueryMap.set(M,C)}const v=Ko(s.pendingWriteTree_,o);let E=a1(d,t,i,v,c,_);if(!g&&!h&&!a){const C=nE(d,t);E=E.concat(E1(s,t,C))}return E}function Gh(s,t,i){const o=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(t,(h,d)=>{const _=gt(h,t),g=yi(d,_);if(g)return g});return Qy(o,t,c,i,!0)}function g1(s,t){const i=t._path;let a=null;s.syncPointTree_.foreachOnPath(i,(g,v)=>{const E=gt(g,i);a=a||yi(v,E)});let o=s.syncPointTree_.get(i);o?a=a||yi(o,de()):(o=new $y,s.syncPointTree_=s.syncPointTree_.set(i,o));const c=a!=null,h=c?new Si(a,!0,!1):null,d=Ko(s.pendingWriteTree_,t._path),_=eE(o,t,d,c?h.getNode():K.EMPTY_NODE,c);return $R(_)}function ur(s,t){return aE(t,s.syncPointTree_,null,Ko(s.pendingWriteTree_,de()))}function aE(s,t,i,a){if(oe(s.path))return lE(s,t,i,a);{const o=t.get(de());i==null&&o!=null&&(i=yi(o,de()));let c=[];const h=ie(s.path),d=s.operationForChild(h),_=t.children.get(h);if(_&&d){const g=i?i.getImmediateChild(h):null,v=Ky(a,h);c=c.concat(aE(d,_,g,v))}return o&&(c=c.concat(Vh(o,s,a,i))),c}}function lE(s,t,i,a){const o=t.get(de());i==null&&o!=null&&(i=yi(o,de()));let c=[];return t.children.inorderTraversal((h,d)=>{const _=i?i.getImmediateChild(h):null,g=Ky(a,h),v=s.operationForChild(h);v&&(c=c.concat(lE(v,d,_,g)))}),o&&(c=c.concat(Vh(o,s,a,i))),c}function oE(s,t){const i=t.query,a=Ma(s,i);return{hashFn:()=>(JR(t)||K.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return a?p1(s,i._path,a):d1(s,i._path);{const c=dw(o,i);return Bo(s,i,null,c)}}}}function Ma(s,t){const i=Wo(t);return s.queryToTagMap.get(i)}function Wo(s){return s._path.toString()+"$"+s._queryIdentifier}function jh(s,t){return s.tagToQueryMap.get(t)}function Yh(s){const t=s.indexOf("$");return L(t!==-1&&t<s.length-1,"Bad queryKey."),{queryId:s.substr(t+1),path:new Ae(s.substr(0,t))}}function Fh(s,t,i){const a=s.syncPointTree_.get(t);L(a,"Missing sync point for query tag that we're tracking");const o=Ko(s.pendingWriteTree_,t);return Vh(a,i,o,null)}function m1(s){return s.fold((t,i,a)=>{if(i&&Ti(i))return[Xo(i)];{let o=[];return i&&(o=tE(i)),ct(a,(c,h)=>{o=o.concat(h)}),o}})}function Sa(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(u1())(s._repo,s._path):s}function v1(s,t){for(let i=0;i<t.length;++i){const a=t[i];if(!a._queryParams.loadsAllData()){const o=Wo(a),c=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(c)}}}function y1(){return c1++}function E1(s,t,i){const a=t._path,o=Ma(s,t),c=oE(s,i),h=s.listenProvider_.startListening(Sa(t),o,c.hashFn,c.onComplete),d=s.syncPointTree_.subtree(a);if(o)L(!Ti(d.value),"If we're adding a query, it shouldn't be shadowed");else{const _=d.fold((g,v,E)=>{if(!oe(g)&&v&&Ti(v))return[Xo(v).query];{let C=[];return v&&(C=C.concat(tE(v).map(M=>M.query))),ct(E,(M,U)=>{C=C.concat(U)}),C}});for(let g=0;g<_.length;++g){const v=_[g];s.listenProvider_.stopListening(Sa(v),Ma(s,v))}}return h}/**
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
 */class Qh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new Qh(i)}node(){return this.node_}}class Kh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=He(this.path_,t);return new Kh(this.syncTree_,i)}node(){return Gh(this.syncTree_,this.path_)}}const S1=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},cv=function(s,t,i){if(!s||typeof s!="object")return s;if(L(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return T1(s[".sv"],t,i);if(typeof s[".sv"]=="object")return b1(s[".sv"],t);L(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},T1=function(s,t,i){switch(s){case"timestamp":return i.timestamp;default:L(!1,"Unexpected server value: "+s)}},b1=function(s,t,i){s.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const a=s.increment;typeof a!="number"&&L(!1,"Unexpected increment value: "+a);const o=t.node();if(L(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return a;const h=o.getValue();return typeof h!="number"?a:h+a},uE=function(s,t,i,a){return Xh(t,new Kh(i,s),a)},cE=function(s,t,i){return Xh(s,new Qh(t),i)};function Xh(s,t,i){const a=s.getPriority().val(),o=cv(a,t.getImmediateChild(".priority"),i);let c;if(s.isLeafNode()){const h=s,d=cv(h.getValue(),t,i);return d!==h.getValue()||o!==h.getPriority().val()?new st(d,Xe(o)):s}else{const h=s;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new st(o))),h.forEachChild(Pe,(d,_)=>{const g=Xh(_,t.getImmediateChild(d),i);g!==_&&(c=c.updateImmediateChild(d,g))}),c}}/**
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
 */class Wh{constructor(t="",i=null,a={children:{},childCount:0}){this.name=t,this.parent=i,this.node=a}}function Zh(s,t){let i=t instanceof Ae?t:new Ae(t),a=s,o=ie(i);for(;o!==null;){const c=Zs(a.node.children,o)||{children:{},childCount:0};a=new Wh(o,a,c),i=De(i),o=ie(i)}return a}function cr(s){return s.node.value}function fE(s,t){s.node.value=t,rh(s)}function hE(s){return s.node.childCount>0}function C1(s){return cr(s)===void 0&&!hE(s)}function Zo(s,t){ct(s.node.children,(i,a)=>{t(new Wh(i,s,a))})}function dE(s,t,i,a){i&&t(s),Zo(s,o=>{dE(o,t,!0)})}function A1(s,t,i){let a=s.parent;for(;a!==null;){if(t(a))return!0;a=a.parent}return!1}function ja(s){return new Ae(s.parent===null?s.name:ja(s.parent)+"/"+s.name)}function rh(s){s.parent!==null&&w1(s.parent,s.name,s)}function w1(s,t,i){const a=C1(i),o=dn(s.node.children,t);a&&o?(delete s.node.children[t],s.node.childCount--,rh(s)):!a&&!o&&(s.node.children[t]=i.node,s.node.childCount++,rh(s))}/**
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
 */const R1=/[\[\].#$\/\u0000-\u001F\u007F]/,N1=/[\[\].#$\u0000-\u001F\u007F]/,zf=10*1024*1024,Jh=function(s){return typeof s=="string"&&s.length!==0&&!R1.test(s)},pE=function(s){return typeof s=="string"&&s.length!==0&&!N1.test(s)},O1=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),pE(s)},D1=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!Ah(s)||s&&typeof s=="object"&&dn(s,".sv")},I1=function(s,t,i,a){Jo(qo(s,"value"),t,i)},Jo=function(s,t,i){const a=i instanceof Ae?new Qw(i,s):i;if(t===void 0)throw new Error(s+"contains undefined "+Yi(a));if(typeof t=="function")throw new Error(s+"contains a function "+Yi(a)+" with contents = "+t.toString());if(Ah(t))throw new Error(s+"contains "+t.toString()+" "+Yi(a));if(typeof t=="string"&&t.length>zf/3&&Vo(t)>zf)throw new Error(s+"contains a string greater than "+zf+" utf8 bytes "+Yi(a)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(ct(t,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Jh(h)))throw new Error(s+" contains an invalid key ("+h+") "+Yi(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Kw(a,h),Jo(s,d,a),Xw(a)}),o&&c)throw new Error(s+' contains ".value" child '+Yi(a)+" in addition to actual children.")}},M1=function(s,t){let i,a;for(i=0;i<t.length;i++){a=t[i];const c=Ra(a);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Jh(c[h]))throw new Error(s+"contains an invalid key ("+c[h]+") in path "+a.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(Fw);let o=null;for(i=0;i<t.length;i++){if(a=t[i],o!==null&&Ft(o,a))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+a.toString());o=a}},k1=function(s,t,i,a){const o=qo(s,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const c=[];ct(t,(h,d)=>{const _=new Ae(h);if(Jo(o,d,He(i,_)),Dh(_)===".priority"&&!D1(d))throw new Error(o+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(_)}),M1(o,c)},_E=function(s,t,i,a){if(!pE(i))throw new Error(qo(s,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x1=function(s,t,i,a){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),_E(s,t,i)},U1=function(s,t){if(ie(t)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},L1=function(s,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Jh(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!O1(i))throw new Error(qo(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class z1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $o(s,t){let i=null;for(let a=0;a<t.length;a++){const o=t[a],c=o.getPath();i!==null&&!Ih(c,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&s.eventLists_.push(i)}function gE(s,t,i){$o(s,i),mE(s,a=>Ih(a,t))}function Qt(s,t,i){$o(s,i),mE(s,a=>Ft(a,t)||Ft(t,a))}function mE(s,t){s.recursionDepth_++;let i=!0;for(let a=0;a<s.eventLists_.length;a++){const o=s.eventLists_[a];if(o){const c=o.path;t(c)?(H1(s.eventLists_[a]),s.eventLists_[a]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function H1(s){for(let t=0;t<s.events.length;t++){const i=s.events[t];if(i!==null){s.events[t]=null;const a=i.getEventRunner();ma&&ut("event: "+i.toString()),or(a)}}}/**
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
 */const P1="repo_interrupt",B1=25;class q1{constructor(t,i,a,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=a,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new z1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mo(),this.transactionQueueTree_=new Wh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function V1(s,t,i){if(s.stats_=Nh(s.repoInfo_),s.forceRestClient_||mw())s.server_=new Io(s.repoInfo_,(a,o,c,h)=>{fv(s,a,o,c,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>hv(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(i)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}s.persistentConnection_=new kn(s.repoInfo_,t,(a,o,c,h)=>{fv(s,a,o,c,h)},a=>{hv(s,a)},a=>{j1(s,a)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(a=>{s.server_.refreshAuthToken(a)}),s.appCheckProvider_.addTokenChangeListener(a=>{s.server_.refreshAppCheckToken(a.token)}),s.statsReporter_=Tw(s.repoInfo_,()=>new SR(s.stats_,s.server_)),s.infoData_=new gR,s.infoSyncTree_=new uv({startListening:(a,o,c,h)=>{let d=[];const _=s.infoData_.getNode(a._path);return _.isEmpty()||(d=Ga(s.infoSyncTree_,a._path,_),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),$h(s,"connected",!1),s.serverSyncTree_=new uv({startListening:(a,o,c,h)=>(s.server_.listen(a,c,o,(d,_)=>{const g=h(d,_);Qt(s.eventQueue_,a._path,g)}),[]),stopListening:(a,o)=>{s.server_.unlisten(a,o)}})}function G1(s){const i=s.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function eu(s){return S1({timestamp:G1(s)})}function fv(s,t,i,a,o){s.dataUpdateCount++;const c=new Ae(t);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(a){const _=Eo(i,g=>Xe(g));h=_1(s.serverSyncTree_,c,_,o)}else{const _=Xe(i);h=rE(s.serverSyncTree_,c,_,o)}else if(a){const _=Eo(i,g=>Xe(g));h=h1(s.serverSyncTree_,c,_)}else{const _=Xe(i);h=Ga(s.serverSyncTree_,c,_)}let d=c;h.length>0&&(d=ir(s,c)),Qt(s.eventQueue_,d,h)}function hv(s,t){$h(s,"connected",t),t===!1&&K1(s)}function j1(s,t){ct(t,(i,a)=>{$h(s,i,a)})}function $h(s,t,i){const a=new Ae("/.info/"+t),o=Xe(i);s.infoData_.updateSnapshot(a,o);const c=Ga(s.infoSyncTree_,a,o);Qt(s.eventQueue_,a,c)}function ed(s){return s.nextWriteId_++}function Y1(s,t,i){const a=g1(s.serverSyncTree_,t);return a!=null?Promise.resolve(a):s.server_.get(t).then(o=>{const c=Xe(o).withIndex(t._queryParams.getIndex());sh(s.serverSyncTree_,t,i,!0);let h;if(t._queryParams.loadsAllData())h=Ga(s.serverSyncTree_,t._path,c);else{const d=Ma(s.serverSyncTree_,t);h=rE(s.serverSyncTree_,t._path,c,d)}return Qt(s.eventQueue_,t._path,h),Bo(s.serverSyncTree_,t,i,null,!0),c},o=>(Ya(s,"get for query "+We(t)+" failed: "+o),Promise.reject(new Error(o))))}function F1(s,t,i,a,o){Ya(s,"set",{path:t.toString(),value:i,priority:a});const c=eu(s),h=Xe(i,a),d=Gh(s.serverSyncTree_,t),_=cE(h,d,c),g=ed(s),v=sE(s.serverSyncTree_,t,_,g,!0);$o(s.eventQueue_,v),s.server_.put(t.toString(),h.val(!0),(C,M)=>{const U=C==="ok";U||mt("set at "+t+" failed: "+C);const G=pi(s.serverSyncTree_,g,!U);Qt(s.eventQueue_,t,G),ah(s,o,C,M)});const E=nd(s,t);ir(s,E),Qt(s.eventQueue_,E,[])}function Q1(s,t,i,a){Ya(s,"update",{path:t.toString(),value:i});let o=!0;const c=eu(s),h={};if(ct(i,(d,_)=>{o=!1,h[d]=uE(He(t,d),Xe(_),s.serverSyncTree_,c)}),o)ut("update() called with empty data.  Don't do anything."),ah(s,a,"ok",void 0);else{const d=ed(s),_=f1(s.serverSyncTree_,t,h,d);$o(s.eventQueue_,_),s.server_.merge(t.toString(),i,(g,v)=>{const E=g==="ok";E||mt("update at "+t+" failed: "+g);const C=pi(s.serverSyncTree_,d,!E),M=C.length>0?ir(s,t):t;Qt(s.eventQueue_,M,C),ah(s,a,g,v)}),ct(i,g=>{const v=nd(s,He(t,g));ir(s,v)}),Qt(s.eventQueue_,t,[])}}function K1(s){Ya(s,"onDisconnectEvents");const t=eu(s),i=Mo();Jf(s.onDisconnect_,de(),(o,c)=>{const h=uE(o,c,s.serverSyncTree_,t);Gy(i,o,h)});let a=[];Jf(i,de(),(o,c)=>{a=a.concat(Ga(s.serverSyncTree_,o,c));const h=nd(s,o);ir(s,h)}),s.onDisconnect_=Mo(),Qt(s.eventQueue_,de(),a)}function X1(s,t,i){let a;ie(t._path)===".info"?a=sh(s.infoSyncTree_,t,i):a=sh(s.serverSyncTree_,t,i),gE(s.eventQueue_,t._path,a)}function dv(s,t,i){let a;ie(t._path)===".info"?a=Bo(s.infoSyncTree_,t,i):a=Bo(s.serverSyncTree_,t,i),gE(s.eventQueue_,t._path,a)}function W1(s){s.persistentConnection_&&s.persistentConnection_.interrupt(P1)}function Ya(s,...t){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),ut(i,...t)}function ah(s,t,i,a){t&&or(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;a&&(c+=": "+a);const h=new Error(c);h.code=o,t(h)}})}function vE(s,t,i){return Gh(s.serverSyncTree_,t,i)||K.EMPTY_NODE}function td(s,t=s.transactionQueueTree_){if(t||tu(s,t),cr(t)){const i=EE(s,t);L(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&Z1(s,ja(t),i)}else hE(t)&&Zo(t,i=>{td(s,i)})}function Z1(s,t,i){const a=i.map(g=>g.currentWriteId),o=vE(s,t,a);let c=o;const h=o.hash();for(let g=0;g<i.length;g++){const v=i[g];L(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=gt(t,v.path);c=c.updateChild(E,v.currentOutputSnapshotRaw)}const d=c.val(!0),_=t;s.server_.put(_.toString(),d,g=>{Ya(s,"transaction put response",{path:_.toString(),status:g});let v=[];if(g==="ok"){const E=[];for(let C=0;C<i.length;C++)i[C].status=2,v=v.concat(pi(s.serverSyncTree_,i[C].currentWriteId)),i[C].onComplete&&E.push(()=>i[C].onComplete(null,!0,i[C].currentOutputSnapshotResolved)),i[C].unwatcher();tu(s,Zh(s.transactionQueueTree_,t)),td(s,s.transactionQueueTree_),Qt(s.eventQueue_,t,v);for(let C=0;C<E.length;C++)or(E[C])}else{if(g==="datastale")for(let E=0;E<i.length;E++)i[E].status===3?i[E].status=4:i[E].status=0;else{mt("transaction at "+_.toString()+" failed: "+g);for(let E=0;E<i.length;E++)i[E].status=4,i[E].abortReason=g}ir(s,t)}},h)}function ir(s,t){const i=yE(s,t),a=ja(i),o=EE(s,i);return J1(s,o,a),a}function J1(s,t,i){if(t.length===0)return;const a=[];let o=[];const h=t.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<t.length;d++){const _=t[d],g=gt(i,_.path);let v=!1,E;if(L(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)v=!0,E=_.abortReason,o=o.concat(pi(s.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=B1)v=!0,E="maxretry",o=o.concat(pi(s.serverSyncTree_,_.currentWriteId,!0));else{const C=vE(s,_.path,h);_.currentInputSnapshot=C;const M=t[d].update(C.val());if(M!==void 0){Jo("transaction failed: Data returned ",M,_.path);let U=Xe(M);typeof M=="object"&&M!=null&&dn(M,".priority")||(U=U.updatePriority(C.getPriority()));const W=_.currentWriteId,Ue=eu(s),Ye=cE(U,C,Ue);_.currentOutputSnapshotRaw=U,_.currentOutputSnapshotResolved=Ye,_.currentWriteId=ed(s),h.splice(h.indexOf(W),1),o=o.concat(sE(s.serverSyncTree_,_.path,Ye,_.currentWriteId,_.applyLocally)),o=o.concat(pi(s.serverSyncTree_,W,!0))}else v=!0,E="nodata",o=o.concat(pi(s.serverSyncTree_,_.currentWriteId,!0))}Qt(s.eventQueue_,i,o),o=[],v&&(t[d].status=2,function(C){setTimeout(C,Math.floor(0))}(t[d].unwatcher),t[d].onComplete&&(E==="nodata"?a.push(()=>t[d].onComplete(null,!1,t[d].currentInputSnapshot)):a.push(()=>t[d].onComplete(new Error(E),!1,null))))}tu(s,s.transactionQueueTree_);for(let d=0;d<a.length;d++)or(a[d]);td(s,s.transactionQueueTree_)}function yE(s,t){let i,a=s.transactionQueueTree_;for(i=ie(t);i!==null&&cr(a)===void 0;)a=Zh(a,i),t=De(t),i=ie(t);return a}function EE(s,t){const i=[];return SE(s,t,i),i.sort((a,o)=>a.order-o.order),i}function SE(s,t,i){const a=cr(t);if(a)for(let o=0;o<a.length;o++)i.push(a[o]);Zo(t,o=>{SE(s,o,i)})}function tu(s,t){const i=cr(t);if(i){let a=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[a]=i[o],a++);i.length=a,fE(t,i.length>0?i:void 0)}Zo(t,a=>{tu(s,a)})}function nd(s,t){const i=ja(yE(s,t)),a=Zh(s.transactionQueueTree_,t);return A1(a,o=>{Hf(s,o)}),Hf(s,a),dE(a,o=>{Hf(s,o)}),i}function Hf(s,t){const i=cr(t);if(i){const a=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(L(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(L(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(pi(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&a.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?fE(t,void 0):i.length=c+1,Qt(s.eventQueue_,ja(t),o);for(let h=0;h<a.length;h++)or(a[h])}}/**
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
 */function $1(s){let t="";const i=s.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let o=i[a];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function eN(s){const t={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const a=i.split("=");a.length===2?t[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):mt(`Invalid query segment '${i}' in query '${s}'`)}return t}const pv=function(s,t){const i=tN(s),a=i.namespace;i.domain==="firebase.com"&&Ln(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&i.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||ow();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new wy(i.host,i.secure,a,o,t,"",a!==i.subdomain),path:new Ae(i.pathString)}},tN=function(s){let t="",i="",a="",o="",c="",h=!0,d="https",_=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(d=s.substring(0,g-1),s=s.substring(g+2));let v=s.indexOf("/");v===-1&&(v=s.length);let E=s.indexOf("?");E===-1&&(E=s.length),t=s.substring(0,Math.min(v,E)),v<E&&(o=$1(s.substring(v,E)));const C=eN(s.substring(Math.min(s.length,E)));g=t.indexOf(":"),g>=0?(h=d==="https"||d==="wss",_=parseInt(t.substring(g+1),10)):g=t.length;const M=t.slice(0,g);if(M.toLowerCase()==="localhost")i="localhost";else if(M.split(".").length<=2)i=M;else{const U=t.indexOf(".");a=t.substring(0,U).toLowerCase(),i=t.substring(U+1),c=a}"ns"in C&&(c=C.ns)}return{host:t,port:_,domain:i,subdomain:a,secure:h,scheme:d,pathString:o,namespace:c}};/**
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
 */class nN{constructor(t,i,a,o){this.eventType=t,this.eventRegistration=i,this.snapshot=a,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class iN{constructor(t,i,a){this.eventRegistration=t,this.error=i,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class id{constructor(t,i,a,o){this._repo=t,this._path=i,this._queryParams=a,this._orderByCalled=o}get key(){return oe(this._path)?null:Dh(this._path)}get ref(){return new zn(this._repo,this._path)}get _queryIdentifier(){const t=$m(this._queryParams),i=wh(t);return i==="{}"?"default":i}get _queryObject(){return $m(this._queryParams)}isEqual(t){if(t=yt(t),!(t instanceof id))return!1;const i=this._repo===t._repo,a=Ih(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&a&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yw(this._path)}}class zn extends id{constructor(t,i){super(t,i,new Uh,!1)}get parent(){const t=Uy(this._path);return t===null?null:new zn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class ka{constructor(t,i,a){this._node=t,this.ref=i,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Ae(t),a=lh(this.ref,t);return new ka(this._node.getChild(i),a,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,o)=>t(new ka(o,lh(this.ref,a),Pe)))}hasChild(t){const i=new Ae(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zt(s,t){return s=yt(s),s._checkNotDeleted("ref"),t!==void 0?lh(s._root,t):s._root}function lh(s,t){return s=yt(s),ie(s._path)===null?x1("child","path",t):_E("child","path",t),new zn(s._repo,He(s._path,t))}function Gs(s,t){s=yt(s),U1("set",s._path),I1("set",t,s._path);const i=new xa;return F1(s._repo,s._path,t,null,i.wrapCallback(()=>{})),i.promise}function sN(s,t){k1("update",t,s._path);const i=new xa;return Q1(s._repo,s._path,t,i.wrapCallback(()=>{})),i.promise}function co(s){s=yt(s);const t=new TE(()=>{}),i=new nu(t);return Y1(s._repo,s,i).then(a=>new ka(a,new zn(s._repo,s._path),s._queryParams.getIndex()))}class nu{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const a=i._queryParams.getIndex();return new nN("value",this,new ka(t.snapshotNode,new zn(i._repo,i._path),a))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new iN(this,t,i):null}matches(t){return t instanceof nu?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rN(s,t,i,a,o){let c;if(typeof a=="object"&&(c=void 0,o=a),typeof a=="function"&&(c=a),o&&o.onlyOnce){const _=i,g=(v,E)=>{dv(s._repo,s,d),_(v,E)};g.userCallback=i.userCallback,g.context=i.context,i=g}const h=new TE(i,c||void 0),d=new nu(h);return X1(s._repo,s,d),()=>dv(s._repo,s,d)}function _v(s,t,i,a){return rN(s,"value",t,i,a)}i1(zn);o1(zn);/**
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
 */const aN="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let lN=!1;function oN(s,t,i,a){s.repoInfo_=new wy(t,!1,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),a&&(s.authTokenProvider_=a)}function uN(s,t,i,a,o){let c=a||s.options.databaseURL;c===void 0&&(s.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ut("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=pv(c,o),d=h.repoInfo,_;typeof process<"u"&&Um&&(_=Um[aN]),_?(c=`http://${_}?ns=${d.namespace}`,h=pv(c,o),d=h.repoInfo):h.repoInfo.secure;const g=new yw(s.name,s.options,t);L1("Invalid Firebase Database URL",h),oe(h.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const v=fN(d,s,g,new vw(s,i));return new hN(v,s)}function cN(s,t){const i=oh[t];(!i||i[s.key]!==s)&&Ln(`Database ${t}(${s.repoInfo_}) has already been deleted.`),W1(s),delete i[s.key]}function fN(s,t,i,a){let o=oh[t.name];o||(o={},oh[t.name]=o);let c=o[s.toURLString()];return c&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new q1(s,lN,i,a),o[s.toURLString()]=c,c}class hN{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(V1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zn(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Ln("Cannot call "+t+" on a deleted database.")}}function dN(s=Ov(),t){const i=_h(s,"database").getImmediate({identifier:t});if(!i._instanceStarted){const a=_T("database");a&&pN(i,...a)}return i}function pN(s,t,i,a={}){s=yt(s),s._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Qi(a,c.repoInfo_.emulatorOptions))return;Ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)a.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new mo(mo.OWNER);else if(a.mockUserToken){const d=typeof a.mockUserToken=="string"?a.mockUserToken:gT(a.mockUserToken,s.app.options.projectId);h=new mo(d)}oN(c,o,a,h)}/**
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
 */function _N(s){nw(ar),Js(new Ki("database",(t,{instanceIdentifier:i})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return uN(a,o,c,i)},"PUBLIC").setMultipleInstances(!0)),mi(Lm,zm,s),mi(Lm,zm,"esm2017")}kn.prototype.simpleListen=function(s,t){this.sendRequest("q",{p:s},t)};kn.prototype.echo=function(s,t){this.sendRequest("echo",{d:s},t)};_N();var gN="firebase",mN="11.6.0";/**
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
 */mi(gN,mN,"app");const vN={apiKey:"AIzaSyDWMkL3P7OWlosSFXXRg8gvUQg6-7Y9uu8",authDomain:"esp32door-control.firebaseapp.com",databaseURL:"https://esp32door-control-default-rtdb.firebaseio.com/",projectId:"esp32door-control",storageBucket:"esp32door-control.appspot.com",messagingSenderId:"605127991992",appId:"1:605127991992:web:4d0dccf6ae2d874603ca4d",measurementId:"G-91SJ3GLZ0Z"},bE=Nv(vN),fo=ew(bE),Jt=dN(bE),yN=15,EN=()=>Array.from({length:8},()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random()*62))).join("");function SN(){const[s,t]=je.useState(null),[i,a]=je.useState([]),[o,c]=je.useState({}),[h,d]=je.useState({}),[_,g]=je.useState(!1),[v,E]=je.useState(!1),[C,M]=je.useState(null),U=je.useRef(null),G=je.useCallback(()=>{U.current&&(clearTimeout(U.current),U.current=null),M(null)},[]),W=je.useCallback(ee=>{U.current&&clearTimeout(U.current),M(ee),ee&&(U.current=setTimeout(()=>{M(null),U.current=null},4e3))},[]),Ue=async(ee,ue)=>{G();try{await HC(fo,ee,ue)}catch(J){J.code==="auth/email-already-in-use"?W("Email already registered"):J.code==="auth/weak-password"?W("6 characters or more"):J.code==="auth/invalid-email"?W("Invalid email"):W("Registration failed. Please try again.")}},Ye=async(ee,ue)=>{G();try{await PC(fo,ee,ue)}catch(J){["auth/user-not-found","auth/invalid-credential","auth/wrong-password","auth/invalid-email"].includes(J.code),W("Wrong email or password")}},Re=async()=>{G(),await GC(fo)},Ze=async ee=>{const ue=`tokens/${ee}/buttonStatus`,J=await co(Zt(Jt,ue)),me=(J.exists()?J.val():"closed")==="open"?"closed":"open";await Gs(Zt(Jt,ue),me)},re=async(ee,ue)=>{if(!s||!i.includes(ee))return;const J=`tokens/${ee}/buttonName`;try{await Gs(Zt(Jt,J),ue||null)}catch(ge){console.error("Error updating button name:",ge),W("Failed to update name.")}},Fe=async(ee,ue)=>{await Gs(Zt(Jt,`tokens/${ee}/authorizedUsers/${ue}`),!0);const J=Zt(Jt,`users/${ue}/deviceTokens`),ge=await co(J),me=ge.exists()&&Array.isArray(ge.val())?ge.val():[];me.includes(ee)||await Gs(J,[...me,ee])},Je=async(ee,ue)=>{await Gs(Zt(Jt,`tokens/${ee}/authorizedUsers/${ue}`),null);const J=Zt(Jt,`users/${ue}/deviceTokens`),ge=await co(J),me=ge.exists()&&Array.isArray(ge.val())?ge.val():[];me.includes(ee)&&await Gs(J,me.filter(ke=>ke!==ee))},$e=je.useCallback(async ee=>{const ue=Zt(Jt,`users/${ee}/deviceTokens`),J=await co(ue);let ge=[];if(J.exists()&&Array.isArray(J.val()))ge=J.val();else{const me=Array.from({length:yN},EN);ge=me;const ke={[`/users/${ee}/deviceTokens`]:ge};me.forEach(O=>{ke[`/tokens/${O}`]={owner:ee,authorizedUsers:{[ee]:!0},buttonStatus:"closed"}}),await sN(Zt(Jt),ke)}a(ge),g(!1),ft(ge)},[]),ft=ee=>{const ue={},J={};if(c({}),d({}),g(!1),ee.length===0){g(!0),g(!0);return}const ge=()=>{Object.keys(ue).length===ee.length&&Object.keys(J).length===ee.length&&g(!0)};ee.forEach(me=>{const ke=Zt(Jt,`tokens/${me}/buttonStatus`);_v(ke,z=>{let V=z.val();typeof V!="string"&&(V="closed"),c(pe=>({...pe,[me]:V})),ue[me]=!0,ge()},z=>{console.error(`Error listening to status for ${me}:`,z),ue[me]=!0,ge()});const O=Zt(Jt,`tokens/${me}/buttonName`);_v(O,z=>{const V=z.val()||null;d(pe=>({...pe,[me]:V})),J[me]=!0,ge()},z=>{console.error(`Error listening to name for ${me}:`,z),J[me]=!0,ge()})})};return je.useEffect(()=>VC(fo,ue=>{t(ue),ue?$e(ue.uid):(a([]),c({}),d({}),g(!1),G()),E(!0)}),[$e,G]),je.useEffect(()=>()=>{U.current&&clearTimeout(U.current)},[]),{user:s,tokens:i,buttonState:o,buttonNames:h,isButtonDataLoaded:_,authChecked:v,error:C,register:Ue,login:Ye,logout:Re,toggleButton:Ze,updateButtonName:re,shareToken:Fe,revokeShare:Je,clearError:G}}function TN(){const{user:s,token:t,tokens:i,buttonState:a,isButtonDataLoaded:o,buttonNames:c,updateButtonName:h,error:d,register:_,login:g,logout:v,toggleButton:E,clearError:C}=SN(),[M,U]=je.useState(!1);return je.useEffect(()=>{if(d){U(!0);const G=setTimeout(()=>U(!1),3500);return()=>clearTimeout(G)}else U(!1)},[d]),Ee.jsxs("div",{id:"appContainer",className:"fade-in background",children:[d&&Ee.jsx("div",{className:`error-banner ${M?"visible":"fade-out"}`,children:d}),Ee.jsxs("div",{className:s?"control-panel-screen":"container",id:"containerEl",children:[Ee.jsx("h1",{className:"title",children:s?"":"Welcome to the future"}),s?Ee.jsx(rT,{token:t,tokens:i,buttonState:a,buttonNames:c,isButtonDataLoaded:o,onToggle:E,onUpdateName:h,onLogout:v}):Ee.jsx(sT,{onLogin:g,onRegister:_,error:d,setError:C})]})]})}iT.createRoot(document.getElementById("root")).render(Ee.jsx(XS.StrictMode,{children:Ee.jsx(TN,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/STARR/service-worker.js").then(s=>{console.log("✅ Service Worker registered with scope:",s.scope)}).catch(s=>{console.error("❌ Service Worker registration failed:",s)})});
