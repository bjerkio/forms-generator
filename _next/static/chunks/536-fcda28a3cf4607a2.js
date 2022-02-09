"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{7536:function(e,t,r){r.d(t,{cI:function(){return Ve}});var s=r(7294),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"===typeof e;var l=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),u=e=>l(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>[...e].some((e=>(e=>e.substring(0,e.search(/.\d/))||e)(t)===e)),d=e=>(e||[]).filter(Boolean),f=e=>void 0===e,g=(e,t,r)=>{if(l(e)&&t){const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s}};const m="blur",y="onBlur",b="onChange",h="onSubmit",v="onTouched",p="all",_="max",O="min",V="maxLength",j="minLength",w="pattern",A="required",F="validate";var x=(e,t)=>{const r=Object.assign({},e);return delete r[t],r};s.createContext(null);var S=(e,t,r,s=!0)=>{function a(a){return()=>{if(a in e)return t[a]!==p&&(t[a]=!s||p),r&&(r[a]=!0),e[a]}}const i={};for(const n in e)Object.defineProperty(i,n,{get:a(n)});return i},k=e=>l(e)&&!Object.keys(e).length,D=(e,t,r)=>{const s=x(e,"name");return k(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find((e=>t[e]===(!r||p)))},E=e=>Array.isArray(e)?e:[e];function C(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var N=e=>"string"===typeof e,T=(e,t,r,s)=>{const a=Array.isArray(e);return N(e)?(s&&t.watch.add(e),g(r,e)):a?e.map((e=>(s&&t.watch.add(e),g(r,e)))):(s&&(t.watchAll=!0),r)},U=e=>"function"===typeof e,B=e=>{for(const t in e)if(U(e[t]))return!0;return!1};var L=(e,t,r,s,a)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[s]:a||!0})}):{},M=e=>/^\w*$/.test(e),q=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function I(e,t,r){let s=-1;const a=M(t)?[t]:q(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=l(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}const R=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=g(e,s);if(r){const e=r._f,s=x(r,"_f");if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else l(s)&&R(s,t)}}};var $=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));function H(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(!r&&!l(e))return e;t=r?[]:{};for(const r in e){if(U(e[r])){t=e;break}t[r]=H(e[r])}}return t}function P(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var W=e=>n(e)||!o(e);function z(e,t){if(W(e)||W(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!z(r,e):r!==e)return!1}}return!0}var G=e=>({isOnSubmit:!e||e===h,isOnBlur:e===y,isOnChange:e===b,isOnAll:e===p,isOnTouch:e===v}),J=e=>"boolean"===typeof e,K=e=>"file"===e.type,Q=e=>e instanceof HTMLElement,X=e=>"select-multiple"===e.type,Y=e=>"radio"===e.type,Z="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document,ee=e=>Q(e)&&document.contains(e);function te(e,t){const r=M(t)?[t]:q(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let i;s&&delete s[a];for(let n=0;n<r.slice(0,-1).length;n++){let t,s=-1;const a=r.slice(0,-(n+1)),o=a.length-1;for(n>0&&(i=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(l(t)&&k(t)||Array.isArray(t)&&!t.filter((e=>l(e)&&!k(e)||J(e))).length)&&(i?delete i[r]:delete e[r]),i=t}}return e}function re(e,t={}){const r=Array.isArray(e);if(l(e)||r)for(const s in e)Array.isArray(e[s])||l(e[s])&&!B(e[s])?(t[s]=Array.isArray(e[s])?[]:{},re(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function se(e,t,r){const s=Array.isArray(e);if(l(e)||s)for(const a in e)Array.isArray(e[a])||l(e[a])&&!B(e[a])?f(t)||W(r[a])?r[a]=Array.isArray(e[a])?re(e[a],[]):Object.assign({},re(e[a])):se(e[a],n(t)?{}:t[a],r[a]):r[a]=!z(e[a],t[a]);return r}var ae=(e,t)=>se(e,t,re(t));const ie={value:!1,isValid:!1},ne={value:!0,isValid:!0};var oe=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?ne:{value:e[0].value,isValid:!0}:ne:ie}return ie},le=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:+e:r&&N(e)?new Date(e):s?s(e):e;const ue={isValid:!1,value:null};var ce=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ue):ue;function de(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return K(t)?t.files:Y(t)?ce(e.refs).value:X(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?oe(e.refs).value:le(f(t.value)?e.ref.value:t.value,e)}var fe=e=>e instanceof RegExp,ge=e=>f(e)?void 0:fe(e)?e.source:l(e)?fe(e.value)?e.value.source:e.value:e;function me(e,t,r){const s=g(e,r);if(s||M(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=g(t,s),n=g(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var ye=(e,t)=>!d(g(e,t)).length&&te(e,t),be=e=>N(e)||s.isValidElement(e);function he(e,t,r="validate"){if(be(e)||Array.isArray(e)&&e.every(be)||J(e)&&!e)return{type:r,message:be(e)?e:"",ref:t}}var ve=e=>l(e)&&!fe(e)?e:{value:e,message:""},pe=async(e,t,r,s)=>{const{ref:i,refs:o,required:u,maxLength:c,minLength:d,min:f,max:g,pattern:m,validate:y,name:b,valueAsNumber:h,mount:v,disabled:p}=e._f;if(!v||p)return{};const x=o?o[0]:i,S=e=>{s&&x.reportValidity&&(x.setCustomValidity(J(e)?"":e||" "),x.reportValidity())},D={},E=Y(i),C=a(i),T=E||C,B=(h||K(i))&&!i.value||""===t||Array.isArray(t)&&!t.length,M=L.bind(null,b,r,D),q=(e,t,r,s=V,a=j)=>{const n=e?t:r;D[b]=Object.assign({type:e?s:a,message:n,ref:i},M(e?s:a,n))};if(u&&(!T&&(B||n(t))||J(t)&&!t||C&&!oe(o).isValid||E&&!ce(o).isValid)){const{value:e,message:t}=be(u)?{value:!!u,message:u}:ve(u);if(e&&(D[b]=Object.assign({type:A,message:t,ref:x},M(A,t)),!r))return S(t),D}if(!B&&(!n(f)||!n(g))){let e,s;const a=ve(g),o=ve(f);if(isNaN(t)){const r=i.valueAsDate||new Date(t);N(a.value)&&(e=r>new Date(a.value)),N(o.value)&&(s=r<new Date(o.value))}else{const r=i.valueAsNumber||parseFloat(t);n(a.value)||(e=r>a.value),n(o.value)||(s=r<o.value)}if((e||s)&&(q(!!e,a.message,o.message,_,O),!r))return S(D[b].message),D}if((c||d)&&!B&&N(t)){const e=ve(c),s=ve(d),a=!n(e.value)&&t.length>e.value,i=!n(s.value)&&t.length<s.value;if((a||i)&&(q(a,e.message,s.message),!r))return S(D[b].message),D}if(m&&!B&&N(t)){const{value:e,message:s}=ve(m);if(fe(e)&&!t.match(e)&&(D[b]=Object.assign({type:w,message:s,ref:i},M(w,s)),!r))return S(s),D}if(y)if(U(y)){const e=he(await y(t),x);if(e&&(D[b]=Object.assign(Object.assign({},e),M(F,e.message)),!r))return S(e.message),D}else if(l(y)){let e={};for(const s in y){if(!k(e)&&!r)break;const a=he(await y[s](t),x,s);a&&(e=Object.assign(Object.assign({},a),M(s,a.message)),S(a.message),r&&(D[b]=e))}if(!k(e)&&(D[b]=Object.assign({ref:x},e),!r))return D}return S(!0),D};const _e={mode:h,reValidateMode:b,shouldFocusError:!0};function Oe(e={}){let t,r=Object.assign(Object.assign({},_e),e),s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},l=r.defaultValues||{},y=r.shouldUnregister?{}:H(l),b={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v=0,_={};const O={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},V={watch:P(),array:P(),state:P()},j=G(r.mode),w=G(r.reValidateMode),A=r.criteriaMode===p,F=async e=>{let t=!1;return O.isValid&&(t=r.resolver?k((await L()).errors):await M(o,!0),e||t===s.isValid||(s.isValid=t,V.state.next({isValid:t}))),t},S=(e,t)=>(I(s.errors,e,t),V.state.next({errors:s.errors})),D=(e,t,r)=>{const s=g(o,e);if(s){const a=g(y,e,g(l,e));f(a)||r&&r.defaultChecked||t?I(y,e,t?a:de(s._f)):se(e,a)}b.mount&&F()},C=(e,t,r,a=!0)=>{let i=!1;const n={name:e},o=g(s.touchedFields,e);if(O.isDirty){const e=s.isDirty;s.isDirty=n.isDirty=q(),i=e!==n.isDirty}if(O.dirtyFields&&!r){const r=g(s.dirtyFields,e);z(g(l,e),t)?te(s.dirtyFields,e):I(s.dirtyFields,e,!0),n.dirtyFields=s.dirtyFields,i=i||r!==g(s.dirtyFields,e)}return r&&!o&&(I(s.touchedFields,e,r),n.touchedFields=s.touchedFields,i=i||O.touchedFields&&o!==r),i&&a&&V.state.next(n),i?n:{}},B=async(r,a,i,n,o)=>{const l=g(s.errors,a),u=O.isValid&&s.isValid!==i;var c,d;if(e.delayError&&n?(t=t||(c=S,d=e.delayError,(...e)=>{clearTimeout(v),v=window.setTimeout((()=>c(...e)),d)}),t(a,n)):(clearTimeout(v),n?I(s.errors,a,n):te(s.errors,a)),((n?!z(l,n):l)||!k(o)||u)&&!r){const e=Object.assign(Object.assign(Object.assign({},o),u?{isValid:i}:{}),{errors:s.errors,name:a});s=Object.assign(Object.assign({},s),e),V.state.next(e)}_[a]--,O.isValidating&&!_[a]&&(V.state.next({isValidating:!1}),_={})},L=async e=>r.resolver?await r.resolver(Object.assign({},y),r.context,((e,t,r,s)=>{const a={};for(const i of e){const e=g(t,i);e&&I(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||h.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},M=async(e,t,a={valid:!0})=>{for(const i in e){const n=e[i];if(n){const e=n._f,i=x(n,"_f");if(e){const i=await pe(n,g(y,e.name),A,r.shouldUseNativeValidation);if(i[e.name]&&(a.valid=!1,t))break;t||(i[e.name]?I(s.errors,e.name,i[e.name]):te(s.errors,e.name))}i&&await M(i,t,a)}}return a.valid},q=(e,t)=>(e&&t&&I(y,e,t),!z(ce(),l)),re=(e,t,r)=>{const s=Object.assign({},b.mount?y:f(t)?l:N(e)?{[e]:t}:t);return T(e,h,s,r)},se=(e,t,r={})=>{const s=g(o,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&I(y,e,le(t,r)),i=Z&&Q(r.ref)&&n(t)?"":t,X(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value)):r.refs[0].checked=!!i:r.refs.forEach((e=>e.checked=e.value===i)):K(r.ref)||(r.ref.value=i,r.ref.type||V.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&C(e,i,r.shouldTouch),r.shouldValidate&&ue(e)},ie=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,l=g(o,n);!h.array.has(e)&&W(a)&&(!l||l._f)||i(a)?se(n,a,r):ie(n,a,r)}},ne=(e,t,r={})=>{const a=g(o,e),i=h.array.has(e);I(y,e,t),i?(V.array.next({name:e,values:y}),(O.isDirty||O.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=ae(l,y),V.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:q(e,t)}))):!a||a._f||n(t)?se(e,t,r):ie(e,t,r),$(e,h)&&V.state.next({}),V.watch.next({name:e})},oe=async e=>{const t=e.target;let a=t.name;const i=g(o,a);if(i){let l,c;const d=t.type?de(i._f):u(e),f=e.type===m,b=!((n=i._f).mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate))&&!r.resolver&&!g(s.errors,a)&&!i._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(f,g(s.touchedFields,a),s.isSubmitted,w,j),v=$(a,h,f);f?i._f.onBlur&&i._f.onBlur(e):i._f.onChange&&i._f.onChange(e),I(y,a,d);const p=C(a,d,f,!1),x=!k(p)||v;if(!f&&V.watch.next({name:a,type:e.type}),b)return x&&V.state.next(Object.assign({name:a},v?{}:p));if(!f&&v&&V.state.next({}),_[a]=(_[a],1),O.isValidating&&V.state.next({isValidating:!0}),r.resolver){const{errors:e}=await L([a]),t=me(s.errors,o,a),r=me(e,o,t.name||a);l=r.error,a=r.name,c=k(e)}else l=(await pe(i,g(y,a),A,r.shouldUseNativeValidation))[a],c=await F(!0);i._f.deps&&ue(i._f.deps),B(!1,a,c,l,p)}var n},ue=async(e,t={})=>{let a,i;const n=E(e);if(V.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await L();if(e)for(const r of e){const e=g(t,r);e?I(s.errors,r,e):te(s.errors,r)}else s.errors=t;return t})(f(e)?e:n);a=k(t),i=e?!n.some((e=>g(t,e))):a}else e?(i=(await Promise.all(n.map((async e=>{const t=g(o,e);return await M(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||s.isValid)&&F()):i=a=await M(o);return V.state.next(Object.assign(Object.assign(Object.assign({},!N(e)||O.isValid&&a!==s.isValid?{}:{name:e}),r.resolver?{isValid:a}:{}),{errors:s.errors,isValidating:!1})),t.shouldFocus&&!i&&R(o,(e=>g(s.errors,e)),e?n:h.mount),i},ce=e=>{const t=Object.assign(Object.assign({},l),b.mount?y:{});return f(e)?t:N(e)?g(t,e):e.map((e=>g(t,e)))},fe=(e,t={})=>{for(const a of e?E(e):h.mount)h.mount.delete(a),h.array.delete(a),g(o,a)&&(t.keepValue||(te(o,a),te(y,a)),!t.keepError&&te(s.errors,a),!t.keepDirty&&te(s.dirtyFields,a),!t.keepTouched&&te(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&te(l,a));V.watch.next({}),V.state.next(Object.assign(Object.assign({},s),t.keepDirty?{isDirty:q()}:{})),!t.keepIsValid&&F()},be=(e,t={})=>{let s=g(o,e);return I(o,e,{_f:Object.assign(Object.assign(Object.assign({},s&&s._f?s._f:{ref:{name:e}}),{name:e,mount:!0}),t)}),h.mount.add(e),!f(t.value)&&!t.disabled&&I(y,e,g(y,e,t.value)),s?J(t.disabled)&&I(y,e,t.disabled?void 0:g(y,e,de(s._f))):D(e,!0),Object.assign(Object.assign(Object.assign({},J(t.disabled)?{disabled:t.disabled}:{}),r.shouldUseNativeValidation?{required:!!t.required,min:ge(t.min),max:ge(t.max),minLength:ge(t.minLength),maxLength:ge(t.maxLength),pattern:ge(t.pattern)}:{}),{name:e,onChange:oe,onBlur:oe,ref:i=>{if(i){be(e,t),s=g(o,e);const r=f(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,n=(e=>Y(e)||a(e))(r);if(r===s._f.ref||n&&d(s._f.refs).find((e=>e===r)))return;I(o,e,{_f:n?Object.assign(Object.assign({},s._f),{refs:[...d(s._f.refs).filter(ee),r],ref:{type:r.type,name:e}}):Object.assign(Object.assign({},s._f),{ref:r})}),D(e,!1,r)}else s=g(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(h.array,e)||!b.action)&&h.unMount.add(e)}})};return{control:{register:be,unregister:fe,_executeSchema:L,_getWatch:re,_getDirty:q,_updateValid:F,_removeUnmounted:()=>{for(const e of h.unMount){const t=g(o,e);t&&(t._f.refs?t._f.refs.every((e=>!ee(e))):!ee(t._f.ref))&&fe(e)}h.unMount=new Set},_updateFieldArray:(e,t,r,a=[],i=!0,n=!0,u=!0)=>{if(b.action=!0,n&&g(o,e)){const s=t(g(o,e),r.argA,r.argB);i&&I(o,e,s)}if(u&&Array.isArray(g(s.errors,e))){const a=t(g(s.errors,e),r.argA,r.argB);i&&I(s.errors,e,a),ye(s.errors,e)}if(O.touchedFields&&g(s.touchedFields,e)){const a=t(g(s.touchedFields,e),r.argA,r.argB);i&&I(s.touchedFields,e,a),ye(s.touchedFields,e)}(O.dirtyFields||O.isDirty)&&(s.dirtyFields=ae(l,y)),V.state.next({isDirty:q(e,a),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})},_getFieldArray:t=>d(g(b.mount?y:l,t,e.shouldUnregister?g(l,t,[]):[])),_subjects:V,_proxyFormState:O,get _fields(){return o},set _fields(e){o=e},get _formValues(){return y},set _formValues(e){y=e},get _stateFlags(){return b},set _stateFlags(e){b=e},get _defaultValues(){return l},set _defaultValues(e){l=e},get _names(){return h},set _names(e){h=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r=Object.assign(Object.assign({},r),e)}},trigger:ue,register:be,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let i=!0,n=r.shouldUnregister?H(y):Object.assign({},y);V.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await L();s.errors=e,n=t}else await M(o);k(s.errors)&&Object.keys(s.errors).every((e=>g(n,e)))?(V.state.next({errors:{},isSubmitting:!0}),await e(n,a)):(t&&await t(s.errors,a),r.shouldFocusError&&R(o,(e=>g(s.errors,e)),h.mount))}catch(l){throw i=!1,l}finally{s.isSubmitted=!0,V.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:k(s.errors)&&i,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>U(e)?V.watch.subscribe({next:r=>e(re(void 0,t),r)}):re(e,t,!0),setValue:ne,getValues:ce,reset:(t,r={})=>{const a=t||l,i=H(a),n=t&&!k(t)?i:l;if(r.keepDefaultValues||(l=a),!r.keepValues){if(Z&&f(t))for(const e of h.mount){const t=g(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{Q(e)&&e.closest("form").reset();break}catch(u){}}}y=e.shouldUnregister?r.keepDefaultValues?H(l):{}:i,o={},V.array.next({values:n}),V.watch.next({values:n})}h={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},b.mount=!O.isValid||!!r.keepIsValid,b.watch=!!e.shouldUnregister,V.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty?s.isDirty:!!r.keepDefaultValues&&!z(t,l),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty?s.dirtyFields:r.keepDefaultValues&&t?Object.entries(t).reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r!==g(l,t)})),{}):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{f(t.defaultValue)?ne(e,g(l,e)):(ne(e,t.defaultValue),I(l,e,t.defaultValue)),t.keepTouched||te(s.touchedFields,e),t.keepDirty||(te(s.dirtyFields,e),s.isDirty=t.defaultValue?q(e,g(l,e)):q()),t.keepError||(te(s.errors,e),O.isValid&&F()),V.state.next(Object.assign({},s))},clearErrors:e=>{e?E(e).forEach((e=>te(s.errors,e))):s.errors={},V.state.next({errors:s.errors,isValid:!0})},unregister:fe,setError:(e,t,r)=>{const a=(g(o,e,{_f:{}})._f||{}).ref;I(s.errors,e,Object.assign(Object.assign({},t),{ref:a})),V.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:e=>{const t=g(o,e)._f;(t.ref.focus?t.ref:t.refs[0]).focus()}}}function Ve(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=Object.assign(Object.assign({},Oe(e)),{formState:r});const i=t.current.control;return C({subject:i._subjects.state,callback:e=>{D(e,i._proxyFormState,!0)&&(i._formState=Object.assign(Object.assign({},i._formState),e),a(Object.assign({},i._formState)))}}),s.useEffect((()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),t.current.formState=S(r,i._proxyFormState),t.current}}}]);