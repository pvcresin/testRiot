!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){(function(t){/* Riot v3.7.3, @license MIT */
!function(t,n){n(e)}(0,function(e){"use strict";function n(t,e){for(var n=t?t.length:0,r=0;r<n;r++)e(t[r],r);return t}function r(t,e){return-1!==t.indexOf(e)}function i(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function o(t,e){return t.slice(0,e.length)===e}function a(t,e,n,r){return Object.defineProperty(t,e,s({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function s(t){for(var e,n=1,r=arguments,i=r.length;n<i;n++)if(e=r[n])for(var o in e)m(t,o)&&(t[o]=e[o]);return t}function u(t){return Wt.test(t)}function l(t){return typeof t===Ut}function c(t){return t&&typeof t===Ht}function f(t){return typeof t===Vt}function p(t){return typeof t===$t}function d(t){return h(t)||""===t}function h(t){return f(t)||null===t}function g(t){return Array.isArray(t)||t instanceof Array}function m(t,e){var n=Yt(t,e);return f(t[e])||n&&n.writable}function v(t,e){return Array.prototype.slice.call((e||document).querySelectorAll(t))}function y(t,e){return(e||document).querySelector(t)}function _(){return document.createDocumentFragment()}function x(){return document.createTextNode("")}function b(t){return!!t.ownerSVGElement}function w(t){return"svg"===t?document.createElementNS(zt,t):document.createElement(t)}function N(t,e){if(f(t.innerHTML)){var n=(new DOMParser).parseFromString(e,"application/xml"),r=t.ownerDocument.importNode(n.documentElement,!0);t.appendChild(r)}else t.innerHTML=e}function O(t,e){t.style.display=e?"":"none",t.hidden=!e}function C(t,e){t.removeAttribute(e)}function j(t){return Object.keys(t).reduce(function(e,n){return e+" "+n+": "+t[n]+";"},"")}function E(t,e){return t.getAttribute(e)}function T(t,e,n){var r=Ft.exec(e);r&&r[1]?t.setAttributeNS(Bt,r[1],n):t.setAttribute(e,n)}function k(t,e,n){t.insertBefore(e,n.parentNode&&n)}function A(t,e){if(t)for(var n;n=Gt.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function L(t,e,n){if(t){var r,i=e(t,n);if(!1===i)return;for(t=t.firstChild;t;)r=t.nextSibling,L(t,e,i),t=r}}function M(t,e,n){var r=this.__.parent,i=this.__.item;if(!i)for(;r&&!i;)i=r.__.item,r=r.__.parent;if(m(n,"currentTarget")&&(n.currentTarget=t),m(n,"target")&&(n.target=n.srcElement),m(n,"which")&&(n.which=n.charCode||n.keyCode),n.item=i,e.call(this,n),fe.autoUpdate&&!n.preventUpdate){var o=ft(this);o.isMounted&&o.update()}}function S(t,e,n,i){var o,a=M.bind(i,n,e);n[t]=null,o=t.replace(Zt,""),r(i.__.listeners,n)||i.__.listeners.push(n),n[Pt]||(n[Pt]={}),n[Pt][t]&&n.removeEventListener(o,n[Pt][t]),n[Pt][t]=a,n.addEventListener(o,a,!1)}function I(t,e,r){var i,o=t.tag||t.dom._tag,a=o?o.__:{},s=a.head,u="VIRTUAL"===t.dom.tagName;if(o&&t.tagName===r)return void o.update();o&&(u&&(i=x(),s.parentNode.insertBefore(i,s)),o.unmount(!0)),p(r)&&(t.impl=Ot[r],t.impl&&(t.tag=o=ct(t.impl,{root:t.dom,parent:e,tagName:r},t.dom.innerHTML,e),n(t.attrs,function(t){return T(o.root,t.name,t.value)}),t.tagName=r,o.mount(),u&&vt(o,i||o.root),e.__.onUnmount=function(){var t=o.opts.dataIs;gt(o.parent.tags,t,o),gt(o.__.parent.tags,t,o),o.unmount()}))}function R(t){return t?(t=t.replace(Et,""),Qt[t]&&(t=Qt[t]),t):null}function P(t){if(!this.root||!E(this.root,"virtualized")){var e,n=t.dom,i=R(t.attr),o=r([St,It],i),a=t.root&&"VIRTUAL"===t.root.tagName,u=this.__,f=u.isAnonymous,p=n&&(t.parent||n.parentNode),h="style"===i,g="class"===i;if(t._riot_id)return void(t.__.wasCreated?t.update():(t.mount(),a&&vt(t,t.root)));if(t.update)return t.update();var m=o&&!f?s(Object.create(this),this.parent):this;e=le(t.expr,m);var v=!d(e),y=c(e);if(y&&(g?e=le(JSON.stringify(e),this):h&&(e=j(e))),!t.attr||t.wasParsedOnce&&v&&!1!==e||C(n,E(n,t.attr)?t.attr:i),t.bool&&(e=!!e&&i),t.isRtag)return I(t,this,e);if((!t.wasParsedOnce||t.value!==e)&&(t.value=e,t.wasParsedOnce=!0,!y||g||h||o)){if(v||(e=""),!i)return e+="",void(p&&(t.parent=p,"TEXTAREA"===p.tagName?(p.value=e,Jt||(n.nodeValue=e)):n.nodeValue=e));l(e)?S(i,e,n,this):o?O(n,i===It?!e:e):(t.bool&&(n[i]=e),"value"===i&&n.value!==e?n.value=e:v&&!1!==e&&T(n,i,e),h&&n.hidden&&O(n,!1))}}}function $(t){n(t,P.bind(this))}function H(t,e,n,r){var i=r?Object.create(r):{};return i[t.key]=e,t.pos&&(i[t.pos]=n),i}function V(t,e){for(var n=e.length,r=t.length;n>r;)n--,U.apply(e[n],[e,n])}function U(t,e){t.splice(e,1),this.unmount(),gt(this.parent,this,this.__.tagName,!0)}function B(t){var e=this;n(Object.keys(this.tags),function(n){lt.apply(e.tags[n],[n,t])})}function z(t,e,n){n?_t.apply(this,[t,e]):k(t,this.root,e.root)}function F(t,e,n){n?yt.apply(this,[t,e]):k(t,this.root,e.root)}function D(t,e){e?yt.call(this,t):t.appendChild(this.root)}function K(t,e,n,r){return t?r?le(t,n):e[t]:e}function q(t,e,i){var o,a=typeof E(t,Mt)!==$t||C(t,Mt),u=E(t,Rt),l=!!u&&le.hasExpr(u),c=dt(t),f=Ot[c],d=t.parentNode,h=x(),m=ut(t),v=E(t,At),y=[],b=t.innerHTML,w=!Ot[c],N="VIRTUAL"===t.tagName,O=[];return C(t,Lt),C(t,Rt),i=le.loopKeys(i),i.isLoop=!0,v&&C(t,At),d.insertBefore(h,t),d.removeChild(t),i.update=function(){i.value=le(i.val,e);var d=i.value,x=_(),C=!g(d)&&!p(d),j=h.parentNode,E=[];j&&(C?(o=d||!1,d=o?Object.keys(d).map(function(t){return H(i,d[t],t)}):[]):o=!1,v&&(d=d.filter(function(t,n){return i.key&&!C?!!le(v,H(i,t,n,e)):!!le(v,s(Object.create(e),t))})),n(d,function(n,s){var p=!o&&i.key?H(i,n,s):n,h=K(u,n,p,l),g=a&&typeof n===Ht&&!o,v=O.indexOf(h),_=-1===v,C=!_&&g?v:s,T=y[C],k=s>=O.length,A=g&&_||!g&&!T;A?(T=st(f,{parent:e,isLoop:!0,isAnonymous:w,tagName:c,root:t.cloneNode(w),item:p,index:s},b),T.mount(),k?D.apply(T,[x||j,N]):F.apply(T,[j,y[s],N]),k||O.splice(s,0,p),y.splice(s,0,T),m&&ht(e.tags,c,T,!0)):C!==s&&g&&((u||r(d,O[C]))&&(z.apply(T,[j,y[s],N]),y.splice(s,0,y.splice(C,1)[0]),O.splice(s,0,O.splice(C,1)[0])),i.pos&&(T[i.pos]=s),!m&&T.tags&&B.call(T,s)),T.__.item=p,T.__.index=s,T.__.parent=e,E[s]=h,A||T.update(p)}),V(d,y),O=E.slice(),j.insertBefore(x,h))},i.unmount=function(){n(y,function(t){t.unmount()})},i}function Z(t,e,n){var r=this,i={parent:{children:e}};L(t,function(e,i){var o,a,s,u=e.nodeType,l=i.parent;if(!n&&e===t)return{parent:l};if(3===u&&"STYLE"!==e.parentNode.tagName&&le.hasExpr(e.nodeValue)&&l.children.push({dom:e,expr:e.nodeValue}),1!==u)return i;var c="VIRTUAL"===e.tagName;if(o=E(e,Lt))return c&&T(e,"loopVirtual",!0),l.children.push(q(e,r,o)),!1;if(o=E(e,At))return l.children.push(Object.create(pe).init(e,r,o)),!1;if((a=E(e,kt))&&le.hasExpr(a))return l.children.push({isRtag:!0,expr:a,dom:e,attrs:[].slice.call(e.attributes)}),!1;if(s=ut(e),c&&(E(e,"virtualized")&&e.parentElement.removeChild(e),s||E(e,"virtualized")||E(e,"loopVirtual")||(s={tmpl:e.outerHTML})),s&&(e!==t||n)){if(!c||E(e,kt))return l.children.push(ct(s,{root:e,parent:r},e.innerHTML,r)),!1;T(e,"virtualized",!0);var f=st({tmpl:e.outerHTML},{root:e,parent:r},e.innerHTML);l.children.push(f)}return G.apply(r,[e,e.attributes,function(t,e){e&&l.children.push(e)}]),{parent:l}},i)}function G(t,e,i){var o=this;n(e,function(e){if(!e)return!1;var n,a=e.name,s=u(a);r(Tt,a)&&t.tagName.toLowerCase()!==Ct?n=Object.create(de).init(t,o,a,e.value):le.hasExpr(e.value)&&(n={dom:t,expr:e.value,attr:a,bool:s}),i(e,n)})}function Q(t,e,n){var r="o"===n[0],i=r?"select>":"table>";if(t.innerHTML="<"+i+e.trim()+"</"+i,i=t.firstChild,r)i.selectedIndex=-1;else{var o=ye[n];o&&1===i.childElementCount&&(i=y(o,i))}return i}function W(t,e){if(!he.test(t))return t;var n={};return e=e&&e.replace(me,function(t,e,r){return n[e]=n[e]||r,""}).trim(),t.replace(ve,function(t,e,r){return n[e]||r||""}).replace(ge,function(t,n){return e||n||""})}function J(t,e,n){var r=t&&t.match(/^\s*<([-\w]+)/),i=r&&r[1].toLowerCase(),o=w(n?be:xe);return t=W(t,e),_e.test(i)?o=Q(o,t,i):N(o,t),o}function X(t,e){var n=this,r=n.name,i=n.tmpl,o=n.css,a=n.attrs,s=n.onCreate;return Ot[r]||(Y(r,i,o,a,s),Ot[r].class=this.constructor),mt(t,r,e,this),o&&ae.inject(),this}function Y(t,e,n,r,i){return l(r)&&(i=r,/^[\w-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(l(n)?i=n:ae.add(n)),t=t.toLowerCase(),Ot[t]={name:t,tmpl:e,attrs:r,fn:i},t}function tt(t,e,n,r,i){return n&&ae.add(n,t),Ot[t]={name:t,tmpl:e,attrs:r,fn:i},t}function et(t,e,r){function i(t){if(t.tagName){var o,a=E(t,kt);e&&a!==e&&(a=e,T(t,kt,e)),o=mt(t,a||t.tagName.toLowerCase(),r),o&&s.push(o)}else t.length&&n(t,i)}var o,a,s=[];if(ae.inject(),c(e)&&(r=e,e=0),p(t)?(t="*"===t?a=xt():t+xt(t.split(/, */)),o=t?v(t):[]):o=t,"*"===e){if(e=a||xt(),o.tagName)o=v(e,o);else{var u=[];n(o,function(t){return u.push(v(e,t))}),o=u}e=0}return i(o),s}function nt(t,e,n){if(c(t))return void nt("__"+Oe+++"__",t,!0);var r=n?Ne:we;if(!e){if(f(r[t]))throw new Error("Unregistered mixin: "+t);return r[t]}r[t]=l(e)?s(e.prototype,r[t]||{})&&e:s(r[t]||{},e)}function rt(){return n(Nt,function(t){return t.update()})}function it(t){Ot[t]=null}function ot(t,e,r,o,a){if(!t||!r){var s=!r&&t?this:e||this;n(a,function(t){t.expr&&$.call(s,[t.expr]),o[i(t.name).replace(Et,"")]=t.expr?t.expr.value:t.value})}}function at(t){var e=this.__,n=e.isAnonymous;a(this,"isMounted",t),n||(t?this.trigger("mount"):(this.trigger("unmount"),this.off("*"),this.__.wasCreated=!1))}function st(t,e,i){void 0===t&&(t={}),void 0===e&&(e={});var u,c=e.context||{},f=s({},e.opts),d=e.parent,h=e.isLoop,g=!!e.isAnonymous,m=fe.skipAnonymousTags&&g,v=e.item,y=e.index,_=[],x=[],w=[],O=e.root,j=e.tagName||dt(O),E="virtual"===j,k=!E&&!t.tmpl;return m||ce(c),t.name&&O._tag&&O._tag.unmount(!0),a(c,"isMounted",!1),a(c,"__",{isAnonymous:g,instAttrs:_,innerHTML:i,tagName:j,index:y,isLoop:h,isInline:k,listeners:[],virts:[],wasCreated:!1,tail:null,head:null,parent:null,item:null}),a(c,"_riot_id",Xt()),a(c,"root",O),s(c,{opts:f},v),a(c,"parent",d||null),a(c,"tags",{}),a(c,"refs",{}),k||h&&g?u=O:(E||(O.innerHTML=""),u=J(t.tmpl,i,b(O))),a(c,"update",function(t){var e={},n=c.isMounted&&!m;return g&&d&&s(c,d),s(c,t),ot.apply(c,[h,d,g,e,_]),n&&c.isMounted&&l(c.shouldUpdate)&&!c.shouldUpdate(t,e)?c:(s(f,e),n&&c.trigger("update",t),$.call(c,w),n&&c.trigger("updated"),c)}),a(c,"mixin",function(){return n(arguments,function(t){var e,i,o=[],a=["init","__proto__"];t=p(t)?nt(t):t,e=l(t)?new t:t;var s=Object.getPrototypeOf(e);do{o=o.concat(Object.getOwnPropertyNames(i||e))}while(i=Object.getPrototypeOf(i||e));n(o,function(t){if(!r(a,t)){var n=Yt(e,t)||Yt(s,t),i=n&&(n.get||n.set);!c.hasOwnProperty(t)&&i?Object.defineProperty(c,t,n):c[t]=l(e[t])?e[t].bind(c):e[t]}}),e.init&&e.init.bind(c)(f)}),c}),a(c,"mount",function(){O._tag=c,G.apply(d,[O,O.attributes,function(t,e){!g&&de.isPrototypeOf(e)&&(e.tag=c),t.expr=e,_.push(t)}]),A(t.attrs,function(t,e){x.push({name:t,value:e})}),G.apply(c,[O,x,function(t,e){e?w.push(e):T(O,t.name,t.value)}]),ot.apply(c,[h,d,g,f,_]);var e=nt(jt);if(e&&!m)for(var n in e)e.hasOwnProperty(n)&&c.mixin(e[n]);if(t.fn&&t.fn.call(c,f),m||c.trigger("before-mount"),Z.apply(c,[u,w,g]),c.update(v),!g&&!k)for(;u.firstChild;)O.appendChild(u.firstChild);if(a(c,"root",O),!m&&c.parent){var r=ft(c.parent);r.one(r.isMounted?"updated":"mount",function(){at.call(c,!0)})}else at.call(c,!0);return c.__.wasCreated=!0,c}),a(c,"unmount",function(e){var r,i=c.root,a=i.parentNode,s=Nt.indexOf(c);return m||c.trigger("before-unmount"),A(t.attrs,function(t){o(t,Et)&&(t=t.slice(Et.length)),C(O,t)}),c.__.listeners.forEach(function(t){Object.keys(t[Pt]).forEach(function(e){t.removeEventListener(e,t[Pt][e])})}),-1!==s&&Nt.splice(s,1),(a||E)&&(d?(r=ft(d),E?Object.keys(c.tags).forEach(function(t){gt(r.tags,t,c.tags[t])}):(gt(r.tags,j,c),d!==r&&gt(d.tags,j,c))):N(i,""),a&&!e&&a.removeChild(i)),c.__.virts&&n(c.__.virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),pt(w),n(_,function(t){return t.expr&&t.expr.unmount&&t.expr.unmount()}),c.__.onUnmount&&c.__.onUnmount(),c.isMounted||at.call(c,!0),at.call(c,!1),delete c.root._tag,c}),c}function ut(t){return t.tagName&&Ot[E(t,kt)||E(t,kt)||t.tagName.toLowerCase()]}function lt(t,e){var n,r=this.parent;r&&(n=r.tags[t],g(n)?n.splice(e,0,n.splice(n.indexOf(this),1)[0]):ht(r.tags,t,this))}function ct(t,e,n,r){var i=st(t,e,n),o=e.tagName||dt(e.root,!0),s=ft(r);return a(i,"parent",s),i.__.parent=r,ht(s.tags,o,i),s!==r&&ht(r.tags,o,i),i}function ft(t){for(var e=t;e.__.isAnonymous&&e.parent;)e=e.parent;return e}function pt(t){n(t,function(t){t.unmount?t.unmount(!0):t.tagName?t.tag.unmount(!0):t.unmount&&t.unmount()})}function dt(t,e){var n=ut(t),r=!e&&E(t,kt);return r&&!le.hasExpr(r)?r:n?n.name:t.tagName.toLowerCase()}function ht(t,e,n,r,i){var o=t[e],a=g(o),s=!f(i);if(!o||o!==n)if(!o&&r)t[e]=[n];else if(o)if(a){var u=o.indexOf(n);if(u===i)return;-1!==u&&o.splice(u,1),s?o.splice(i,0,n):o.push(n)}else t[e]=[o,n];else t[e]=n}function gt(t,e,n,r){if(g(t[e])){var i=t[e].indexOf(n);-1!==i&&t[e].splice(i,1),t[e].length?1!==t[e].length||r||(t[e]=t[e][0]):delete t[e]}else delete t[e]}function mt(t,e,n,i){var o,a=Ot[e],u=Ot[e].class,l=i||(u?Object.create(u.prototype):{}),c=t._innerHTML=t._innerHTML||t.innerHTML,f=s({root:t,opts:n,context:l},{parent:n?n.parent:null});return a&&t&&(o=st(a,f,c)),o&&o.mount&&(o.mount(!0),r(Nt,o)||Nt.push(o)),o}function vt(t,e){var n=_();yt.call(t,n),e.parentNode.replaceChild(n,e)}function yt(t,e){var n,r,i=this,o=x(),a=x(),s=_();for(this.root.insertBefore(o,this.root.firstChild),this.root.appendChild(a),this.__.head=r=o,this.__.tail=a;r;)n=r.nextSibling,s.appendChild(r),i.__.virts.push(r),r=n;e?t.insertBefore(s,e.__.head):t.appendChild(s)}function _t(t,e){for(var n,r=this,i=this.__.head,o=_();i;)if(n=i.nextSibling,o.appendChild(i),(i=n)===r.__.tail){o.appendChild(i),t.insertBefore(o,e.__.head);break}}function xt(t){if(!t){var e=Object.keys(Ot);return e+xt(e)}return t.filter(function(t){return!/[^-\w]/.test(t)}).reduce(function(t,e){var n=e.trim().toLowerCase();return t+",["+kt+'="'+n+'"]'},"")}var bt,wt,Nt=[],Ot={},Ct="yield",jt="__global_mixin",Et="riot-",Tt=["ref","data-ref"],kt="data-is",At="if",Lt="each",Mt="no-reorder",St="show",It="hide",Rt="key",Pt="__riot-events__",$t="string",Ht="object",Vt="undefined",Ut="function",Bt="http://www.w3.org/1999/xlink",zt="http://www.w3.org/2000/svg",Ft=/^xlink:(\w+)/,Dt=typeof window===Vt?void 0:window,Kt=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,qt=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,Zt=/^on/,Gt=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,Qt={viewbox:"viewBox",preserveaspectratio:"preserveAspectRatio"},Wt=/^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,Jt=0|(Dt&&Dt.document||{}).documentMode,Xt=function(){var t=0;return function(){return++t}}(),Yt=function(t,e){return Object.getOwnPropertyDescriptor(t,e)},te=Object.freeze({each:n,contains:r,toCamel:i,startsWith:o,defineProperty:a,uid:Xt,getPropDescriptor:Yt,extend:s}),ee=Object.freeze({isBoolAttr:u,isFunction:l,isObject:c,isUndefined:f,isString:p,isBlank:d,isNil:h,isArray:g,isWritable:m}),ne=Object.freeze({$$:v,$:y,createFrag:_,createDOMPlaceholder:x,isSvg:b,mkEl:w,setInnerHTML:N,toggleVisibility:O,remAttr:C,styleObjectToString:j,getAttr:E,setAttr:T,safeInsert:k,walkAttrs:A,walkNodes:L}),re={},ie=[],oe=!1;Dt&&(bt=function(){var t=w("style"),e=y("style[type=riot]");return T(t,"type","text/css"),e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),wt=bt.styleSheet);var ae={styleNode:bt,add:function(t,e){e?re[e]=t:ie.push(t),oe=!0},inject:function(){if(Dt&&oe){oe=!1;var t=Object.keys(re).map(function(t){return re[t]}).concat(ie).join("\n");wt?wt.cssText=t:bt.innerHTML=t}}},se=function(){function t(t,e){for(;--e>=0&&/\s/.test(t[e]););return e}function e(e,s){var u=/.*/g,l=u.lastIndex=s++,c=u.exec(e)[0].match(o);if(c){var f=l+c[0].length;l=t(e,l);var p=e[l];if(l<0||~n.indexOf(p))return f;if("."===p)"."===e[l-1]&&(s=f);else if("+"===p||"-"===p)(e[--l]!==p||(l=t(e,l))<0||!a.test(e[l]))&&(s=f);else if(~i.indexOf(p)){for(var d=l+1;--l>=0&&a.test(e[l]););~r.indexOf(e.slice(l+1,d))&&(s=f)}}return s}var n="[{(,;:?=|&!^~>%*/",r=["case","default","do","else","in","instanceof","prefix","return","typeof","void","yield"],i=r.reduce(function(t,e){return t+e.slice(-1)},""),o=/^\/(?=[^*>\/])[^[\/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\\/]*)*?\/[gimuy]*/,a=/[$\w]/;return e}(),ue=function(e){function n(t){return t}function r(t,e){return e||(e=b),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?c:"")}function i(t){if(t===y)return _;var e=t.split(" ");if(2!==e.length||h.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(g,"\\").split(" ")),e[4]=r(e[1].length>1?/{[\S\s]*?}/:_[4],e),e[5]=r(t.length>3?/\\({|})/g:_[5],e),e[6]=r(_[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+m,c),e[8]=t,e}function o(t){return t instanceof RegExp?u(t):b[t]}function a(t){(t||(t=y))!==b[8]&&(b=i(t),u=t===y?n:r,b[9]=u(_[9])),x=t}function s(t){var e;t=t||{},e=t.brackets,Object.defineProperty(t,"brackets",{set:a,get:function(){return x},enumerable:!0}),l=t,a(e)}var u,l,c="g",f=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,p=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,d=p.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,h=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),g=/(?=[[\]()*+?.^$|])/g,m=p.source+"|"+/(\/)(?![*\/])/.source,v={"(":RegExp("([()])|"+m,c),"[":RegExp("([[\\]])|"+m,c),"{":RegExp("([{}])|"+m,c)},y="{ }",_=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+m,c),y,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],x=void 0,b=[];return o.split=function(t,e,n){function r(t){h&&(t=h+t,h=""),e||a?f.push(t&&t.replace(n[5],"$1")):f.push(t)}function i(n,r,i){return i&&(r=se(t,n)),e&&r>n+2&&(l="⁗"+d.length+"~",d.push(t.slice(n,r)),h+=t.slice(s,n)+l,s=r),r}n||(n=b);var o,a,s,u,l,c,f=[],p=n[6],d=[],h="";for(a=s=p.lastIndex=0;o=p.exec(t);){if(c=p.lastIndex,u=o.index,a){if(o[2]){var g=o[2],m=v[g],y=1;for(m.lastIndex=c;o=m.exec(t);)if(o[1]){if(o[1]===g)++y;else if(!--y)break}else m.lastIndex=i(o.index,m.lastIndex,o[2]);p.lastIndex=y?t.length:m.lastIndex;continue}if(!o[3]){p.lastIndex=i(u,c,o[4]);continue}}o[1]||(r(t.slice(s,u)),s=p.lastIndex,p=n[6+(a^=1)],p.lastIndex=s)}return t&&s<t.length&&r(t.slice(s)),f.qblocks=d,f},o.hasExpr=function(t){return b[4].test(t)},o.loopKeys=function(t){var e=t.match(b[9]);return e?{key:e[1],pos:e[2],val:b[0]+e[3].trim()+b[1]}:{val:t.trim()}},o.array=function(t){return t?i(t):b},Object.defineProperty(o,"settings",{set:s,get:function(){return l}}),o.settings=void 0!==t&&t.settings||{},o.set=a,o.skipRegex=se,o.R_STRINGS=p,o.R_MLCOMMS=f,o.S_QBLOCKS=d,o.S_QBLOCK2=m,o}(),le=function(){function t(t,r){return t?(a[t]||(a[t]=n(t))).call(r,e.bind({data:r,tmpl:t})):t}function e(e,n){e.riotData={tagName:n&&n.__&&n.__.tagName,_riot_id:n&&n._riot_id},t.errorHandler?t.errorHandler(e):"undefined"!=typeof console&&"function"==typeof console.error&&(console.error(e.message),console.log("<%s> %s",e.riotData.tagName||"Unknown tag",this.tmpl),console.log(this.data))}function n(t){var e=r(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function r(t){var e,n=ue.split(t.replace(s,'"'),1),r=n.qblocks;if(n.length>2||n[0]){var o,a,l=[];for(o=a=0;o<n.length;++o)(e=n[o])&&(e=1&o?i(e,1,r):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(l[a++]=e);e=a<2?l[0]:"["+l.join(",")+'].join("")'}else e=i(n[1],0,r);return r.length&&(e=e.replace(u,function(t,e){return r[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function i(t,e,n){if(t=t.replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var r,i=[],a=0;t&&(r=t.match(l))&&!r.index;){var s,u,f=/,|([[{(])|$/g;for(t=RegExp.rightContext,s=r[2]?n[r[2]].slice(1,-1).trim().replace(/\s+/g," "):r[1];u=(r=f.exec(t))[1];)!function(e,n){var r,i=1,o=c[e];for(o.lastIndex=n.lastIndex;r=o.exec(t);)if(r[0]===e)++i;else if(!--i)break;n.lastIndex=i?t.length:o.lastIndex}(u,f);u=t.slice(0,r.index),t=RegExp.rightContext,i[a++]=o(u,1,s)}t=a?a>1?"["+i.join(",")+'].join(" ").trim()':i[0]:o(t,e)}return t}function o(t,e,n){var r;return t=t.replace(p,function(t,e,n,i,o){return n&&(i=r?0:i+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+f+n,i&&(r="."===(o=o[i])||"("===o||"["===o)):i&&(r=!d.test(o.slice(i)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var a={};t.hasExpr=ue.hasExpr,t.loopKeys=ue.loopKeys,t.clearCache=function(){a={}},t.errorHandler=null;var s=/\u2057/g,u=/\u2057(\d+)~/g,l=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,c={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},f='"in this?this:'+("object"!=typeof window?"global":"window")+").",p=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,d=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return t.version=ue.version="v3.0.8",t}(),ce=function(t){t=t||{};var e={},n=Array.prototype.slice;return Object.defineProperties(t,{on:{value:function(n,r){return"function"==typeof r&&(e[n]=e[n]||[]).push(r),t},enumerable:!1,writable:!1,configurable:!1},off:{value:function(n,r){if("*"!=n||r)if(r)for(var i,o=e[n],a=0;i=o&&o[a];++a)i==r&&o.splice(a--,1);else delete e[n];else e={};return t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(r){var i,o,a,s=arguments,u=arguments.length-1,l=new Array(u);for(a=0;a<u;a++)l[a]=s[a+1];for(i=n.call(e[r]||[],0),a=0;o=i[a];++a)o.apply(t,l);return e["*"]&&"*"!=r&&t.trigger.apply(t,["*",r].concat(l)),t},enumerable:!1,writable:!1,configurable:!1}}),t},fe=s(Object.create(ue.settings),{skipAnonymousTags:!0,autoUpdate:!0}),pe={init:function(t,e,n){C(t,At),this.tag=e,this.expr=n,this.stub=x(),this.pristine=t;var r=t.parentNode;return r.insertBefore(this.stub,t),r.removeChild(t),this},update:function(){this.value=le(this.expr,this.tag),this.value&&!this.current?(this.current=this.pristine.cloneNode(!0),this.stub.parentNode.insertBefore(this.current,this.stub),this.expressions=[],Z.apply(this.tag,[this.current,this.expressions,!0])):!this.value&&this.current&&(pt(this.expressions),this.current._tag?this.current._tag.unmount():this.current.parentNode&&this.current.parentNode.removeChild(this.current),this.current=null,this.expressions=[]),this.value&&$.call(this.tag,this.expressions)},unmount:function(){pt(this.expressions||[])}},de={init:function(t,e,n,r){return this.dom=t,this.attr=n,this.rawValue=r,this.parent=e,this.hasExp=le.hasExpr(r),this},update:function(){var t=this.value,e=this.parent&&ft(this.parent),n=this.dom.__ref||this.tag||this.dom;this.value=this.hasExp?le(this.rawValue,this.parent):this.rawValue,!d(t)&&e&&gt(e.refs,t,n),!d(this.value)&&p(this.value)?(e&&ht(e.refs,this.value,n,null,this.parent.__.index),this.value!==t&&T(this.dom,this.attr,this.value)):C(this.dom,this.attr),this.dom.__ref||(this.dom.__ref=n)},unmount:function(){var t=this.tag||this.dom,e=this.parent&&ft(this.parent);!d(this.value)&&e&&gt(e.refs,this.value,t)}},he=/<yield\b/i,ge=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,me=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,ve=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,ye={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},_e=Jt&&Jt<10?Kt:qt,xe="div",be="svg",we={},Ne=we[jt]={},Oe=0,Ce=Object.freeze({Tag:X,tag:Y,tag2:tt,mount:et,mixin:nt,update:rt,unregister:it,version:"v3.7.3"}),je=Object.freeze({getTag:ut,moveChildTag:lt,initChildTag:ct,getImmediateCustomParentTag:ft,unmountAll:pt,getTagName:dt,arrayishAdd:ht,arrayishRemove:gt,mountTo:mt,makeReplaceVirtual:vt,makeVirtual:yt,moveVirtual:_t,selectTags:xt}),Ee=fe,Te={tmpl:le,brackets:ue,styleManager:ae,vdom:Nt,styleNode:ae.styleNode,dom:ne,check:ee,misc:te,tags:je},ke=X,Ae=Y,Le=tt,Me=et,Se=nt,Ie=rt,Re=it,Pe=ce,$e=s({},Ce,{observable:ce,settings:Ee,util:Te});e.settings=Ee,e.util=Te,e.Tag=ke,e.tag=Ae,e.tag2=Le,e.mount=Me,e.mixin=Se,e.update=Ie,e.unregister=Re,e.version="v3.7.3",e.observable=Pe,e.default=$e,Object.defineProperty(e,"__esModule",{value:!0})})}).call(e,n(0))},function(t,e,n){"use strict";(function(t){var e=n(2);!function(t){t&&t.__esModule}(e);console.log("index.js"),t.mount("app")}).call(e,n(0))},function(t,e,n){"use strict";n(0).tag2("app",'<div> <h1>app.tag</h1> <button click="{clicked}">count: {this.list.length}</button> <ul> <li each="{item, index in list}">{index}: {item}</li> </ul> </div>',"div { background: cyan; } button { font-size: 1.5rem; }","",function(t){this.list=[],this.on("mount",function(){console.log("app.tag mounted",t)}),this.clicked=function(t){this.list.push((new Date).toString())}.bind(this)})}]);