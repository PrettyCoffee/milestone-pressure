var e,n,t,r,l,_,o,i,s={},a=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function d(e){var n=e.parentNode;n&&n.removeChild(e)}function f(n,t,r){var l,_,o,i={};for(o in t)"key"==o?l=t[o]:"ref"==o?_=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===i[o]&&(i[o]=n.defaultProps[o]);return p(n,i,l,_,null)}function p(e,r,l,_,o){var i={type:e,props:r,key:l,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++t:o};return null==o&&null!=n.vnode&&n.vnode(i),i}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function m(e,n){if(null==n)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?m(e):null}function y(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return y(e)}}function $(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!g.__r++||l!==n.debounceRendering)&&((l=n.debounceRendering)||_)(g)}function g(){var e,n,t,l,_,i,s,a;for(r.sort(o);e=r.shift();)e.__d&&(n=r.length,l=void 0,_=void 0,s=(i=(t=e).__v).__e,(a=t.__P)&&(l=[],(_=c({},i)).__v=i.__v+1,H(a,i,_,t.__n,void 0!==a.ownerSVGElement,null!=i.__h?[s]:null,l,null==s?m(i):s,i.__h),T(l,i),i.__e!=s&&y(i)),r.length>n&&r.sort(o));g.__r=0}function b(e,n,t,r,l,_,o,i,u,c){var d,f,v,y,$,g,b,x=r&&r.__k||a,C=x.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(y=t.__k[d]=null==(y=n[d])||"boolean"==typeof y||"function"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?p(null,y,null,null,y):Array.isArray(y)?p(h,{children:y},null,null,null):y.__b>0?p(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(v=x[d])||v&&y.key==v.key&&y.type===v.type)x[d]=void 0;else for(f=0;f<C;f++){if((v=x[f])&&y.key==v.key&&y.type===v.type){x[f]=void 0;break}v=null}H(e,y,v=v||s,l,_,o,i,u,c),$=y.__e,(f=y.ref)&&v.ref!=f&&(b||(b=[]),v.ref&&b.push(v.ref,null,y),b.push(f,y.__c||$,y)),null!=$?(null==g&&(g=$),"function"==typeof y.type&&y.__k===v.__k?y.__d=u=k(y,u,e):u=w(e,y,v,x,$,u),"function"==typeof t.type&&(t.__d=u)):u&&v.__e==u&&u.parentNode!=e&&(u=m(v))}for(t.__e=g,d=C;d--;)null!=x[d]&&("function"==typeof t.type&&null!=x[d].__e&&x[d].__e==t.__d&&(t.__d=N(r).nextSibling),P(x[d],x[d]));if(b)for(d=0;d<b.length;d++)E(b[d],b[++d],b[++d])}function k(e,n,t){for(var r,l=e.__k,_=0;l&&_<l.length;_++)(r=l[_])&&(r.__=e,n="function"==typeof r.type?k(r,n,t):w(t,r,r,l,r.__e,n));return n}function w(e,n,t,r,l,_){var o,i,s;if(void 0!==n.__d)o=n.__d,n.__d=void 0;else if(null==t||l!=_||null==l.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(l),o=null;else{for(i=_,s=0;(i=i.nextSibling)&&s<r.length;s+=1)if(i==l)break e;e.insertBefore(l,_),o=_}return void 0!==o?o:l.nextSibling}function N(e){var n,t,r;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(r=N(t)))return r;return null}function x(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||u.test(n)?t:t+"px"}function C(e,n,t,r,l){var _;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||x(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||x(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+_]=t,t?r||e.addEventListener(n,_?S:D,_):e.removeEventListener(n,_?S:D,_);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&-1==n.indexOf("-")?e.removeAttribute(n):e.setAttribute(n,t))}}function D(e){return this.l[e.type+!1](n.event?n.event(e):e)}function S(e){return this.l[e.type+!0](n.event?n.event(e):e)}function H(e,t,r,l,_,o,i,s,a){var u,d,f,p,m,y,$,g,k,w,N,x,C,D,S,H=t.type;if(void 0!==t.constructor)return null;null!=r.__h&&(a=r.__h,s=t.__e=r.__e,t.__h=null,o=[s]),(u=n.__b)&&u(t);try{e:if("function"==typeof H){if(g=t.props,k=(u=H.contextType)&&l[u.__c],w=u?k?k.props.value:u.__:l,r.__c?$=(d=t.__c=r.__c).__=d.__E:("prototype"in H&&H.prototype.render?t.__c=d=new H(g,w):(t.__c=d=new v(g,w),d.constructor=H,d.render=O),k&&k.sub(d),d.props=g,d.state||(d.state={}),d.context=w,d.__n=l,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=H.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=c({},d.__s)),c(d.__s,H.getDerivedStateFromProps(g,d.__s))),p=d.props,m=d.state,d.__v=t,f)null==H.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==H.getDerivedStateFromProps&&g!==p&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,w),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,w)||t.__v===r.__v){for(t.__v!==r.__v&&(d.props=g,d.state=d.__s,d.__d=!1),d.__e=!1,t.__e=r.__e,t.__k=r.__k,t.__k.forEach((function(e){e&&(e.__=t)})),N=0;N<d._sb.length;N++)d.__h.push(d._sb[N]);d._sb=[],d.__h.length&&i.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,w),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(p,m,y)}))}if(d.context=w,d.props=g,d.__P=e,x=n.__r,C=0,"prototype"in H&&H.prototype.render){for(d.state=d.__s,d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),D=0;D<d._sb.length;D++)d.__h.push(d._sb[D]);d._sb=[]}else do{d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++C<25);d.state=d.__s,null!=d.getChildContext&&(l=c(c({},l),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(p,m)),S=null!=u&&u.type===h&&null==u.key?u.props.children:u,b(e,Array.isArray(S)?S:[S],t,r,l,_,o,i,s,a),d.base=t.__e,t.__h=null,d.__h.length&&i.push(d),$&&(d.__E=d.__=null),d.__e=!1}else null==o&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=A(r.__e,t,r,l,_,o,i,a);(u=n.diffed)&&u(t)}catch(e){t.__v=null,(a||null!=o)&&(t.__e=s,t.__h=!!a,o[o.indexOf(s)]=null),n.__e(e,t,r)}}function T(e,t){n.__c&&n.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){n.__e(e,t.__v)}}))}function A(n,t,r,l,_,o,i,a){var u,c,f,p=r.props,h=t.props,v=t.type,y=0;if("svg"===v&&(_=!0),null!=o)for(;y<o.length;y++)if((u=o[y])&&"setAttribute"in u==!!v&&(v?u.localName===v:3===u.nodeType)){n=u,o[y]=null;break}if(null==n){if(null===v)return document.createTextNode(h);n=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),o=null,a=!1}if(null===v)p===h||a&&n.data===h||(n.data=h);else{if(o=o&&e.call(n.childNodes),c=(p=r.props||s).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!a){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(f||c)&&(f&&(c&&f.__html==c.__html||f.__html===n.innerHTML)||(n.innerHTML=f&&f.__html||""))}if(function(e,n,t,r,l){var _;for(_ in t)"children"===_||"key"===_||_ in n||C(e,_,null,t[_],r);for(_ in n)l&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||C(e,_,n[_],t[_],r)}(n,h,p,_,a),f)t.__k=[];else if(y=t.props.children,b(n,Array.isArray(y)?y:[y],t,r,l,_&&"foreignObject"!==v,o,i,o?o[0]:r.__k&&m(r,0),a),null!=o)for(y=o.length;y--;)null!=o[y]&&d(o[y]);a||("value"in h&&void 0!==(y=h.value)&&(y!==n.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&C(n,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==n.checked&&C(n,"checked",y,p.checked,!1))}return n}function E(e,t,r){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,r)}}function P(e,t,r){var l,_;if(n.unmount&&n.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||E(l,null,t)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){n.__e(e,t)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(_=0;_<l.length;_++)l[_]&&P(l[_],t,r||"function"!=typeof e.type);r||null==e.__e||d(e.__e),e.__=e.__e=e.__d=void 0}function O(e,n,t){return this.constructor(e,t)}function U(t,r,l){var _,o,i;n.__&&n.__(t,r),o=(_="function"==typeof l)?null:l&&l.__k||r.__k,i=[],H(r,t=(!_&&l||r).__k=f(h,null,[t]),o||s,s,void 0!==r.ownerSVGElement,!_&&l?[l]:o?null:r.firstChild?e.call(r.childNodes):null,i,!_&&l?l:o?o.__e:r.firstChild,_),T(i,t)}function M(e,n){U(e,n,M)}function W(n,t,r){var l,_,o,i=c({},n.props);for(o in t)"key"==o?l=t[o]:"ref"==o?_=t[o]:i[o]=t[o];return arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):r),p(n.type,i,l||n.key,_||n.ref,null)}function L(e,n){var t={__c:n="__cC"+i++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some((function(e){e.__e=!0,$(e)}))},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}e=a.slice,n={__e:function(e,n,t,r){for(var l,_,o;n=n.__;)if((l=n.__c)&&!l.__)try{if((_=l.constructor)&&null!=_.getDerivedStateFromError&&(l.setState(_.getDerivedStateFromError(e)),o=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,r||{}),o=l.__d),o)return l.__E=l}catch(n){e=n}throw e}},t=0,v.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},t),this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),$(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),$(this))},v.prototype.render=h,r=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=function(e,n){return e.__v.__b-n.__v.__b},g.__r=0,i=0;var F=function(e,n,t,r){var l;n[0]=0;for(var _=1;_<n.length;_++){var o=n[_++],i=n[_]?(n[0]|=o?1:2,t[n[_++]]):n[++_];3===o?r[0]=i:4===o?r[1]=Object.assign(r[1]||{},i):5===o?(r[1]=r[1]||{})[n[++_]]=i:6===o?r[1][n[++_]]+=i+"":o?(l=e.apply(i,F(e,i,t,["",null])),r.push(l),i[0]?n[0]|=2:(n[_-2]=0,n[_]=l)):r.push(i)}return r},z=new Map;var V,I,j,q,B=function(e){var n=z.get(this);return n||(n=new Map,z.set(this,n)),(n=F(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,l="",_="",o=[0],i=function(e){1===r&&(e||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,e,l):3===r&&(e||l)?(o.push(3,e,l),r=2):2===r&&"..."===l&&e?o.push(4,e,0):2===r&&l&&!e?o.push(5,0,!0,l):r>=5&&((l||!e&&5===r)&&(o.push(r,0,l,t),r=6),e&&(o.push(r,e,0,t),r=6)),l=""},s=0;s<e.length;s++){s&&(1===r&&i(),i(s));for(var a=0;a<e[s].length;a++)n=e[s][a],1===r?"<"===n?(i(),o=[o],r=3):l+=n:4===r?"--"===l&&">"===n?(r=1,l=""):l=n+l[0]:_?n===_?_="":l+=n:'"'===n||"'"===n?_=n:">"===n?(i(),r=1):r&&("="===n?(r=5,t=l,l=""):"/"===n&&(r<5||">"===e[s][a+1])?(i(),3===r&&(o=o[0]),r=o,(o=o[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(i(),r=2):l+=n),3===r&&"!--"===l&&(r=4,o=o[0])}return i(),o}(e)),n),arguments,[])).length>1?n:n[0]}.bind(f),R=0,G=[],J=[],K=n.__b,Q=n.__r,X=n.diffed,Y=n.__c,Z=n.unmount;function ee(e,t){n.__h&&n.__h(I,e,R||t),R=0;var r=I.__H||(I.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:J}),r.__[e]}function ne(e){return R=1,function(e,n,t){var r=ee(V++,2);if(r.t=e,!r.__c&&(r.__=[t?t(n):de(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=I,!I.u)){var l=function(e,n,t){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter((function(e){return e.__c}));if(l.every((function(e){return!e.__N})))return!_||_.call(this,e,n,t);var o=!1;return l.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(o=!0)}})),!(!o&&r.__c.props===e)&&(!_||_.call(this,e,n,t))};I.u=!0;var _=I.shouldComponentUpdate,o=I.componentWillUpdate;I.componentWillUpdate=function(e,n,t){if(this.__e){var r=_;_=void 0,l(e,n,t),_=r}o&&o.call(this,e,n,t)},I.shouldComponentUpdate=l}return r.__N||r.__}(de,e)}function te(e,t){var r=ee(V++,3);!n.__s&&ce(r.__H,t)&&(r.__=e,r.i=t,I.__H.__h.push(r))}function re(e){return R=5,le((function(){return{current:e}}),[])}function le(e,n){var t=ee(V++,7);return ce(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function _e(e,n){return R=8,le((function(){return e}),n)}function oe(){for(var e;e=G.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ae),e.__H.__h.forEach(ue),e.__H.__h=[]}catch(I){e.__H.__h=[],n.__e(I,e.__v)}}n.__b=function(e){I=null,K&&K(e)},n.__r=function(e){Q&&Q(e),V=0;var n=(I=e.__c).__H;n&&(j===I?(n.__h=[],I.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=J,e.__N=e.i=void 0}))):(n.__h.forEach(ae),n.__h.forEach(ue),n.__h=[])),j=I},n.diffed=function(e){X&&X(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==G.push(t)&&q===n.requestAnimationFrame||((q=n.requestAnimationFrame)||se)(oe)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==J&&(e.__=e.__V),e.i=void 0,e.__V=J}))),j=I=null},n.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ae),e.__h=e.__h.filter((function(e){return!e.__||ue(e)}))}catch(j){t.some((function(e){e.__h&&(e.__h=[])})),t=[],n.__e(j,e.__v)}})),Y&&Y(e,t)},n.unmount=function(e){Z&&Z(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{ae(e)}catch(e){t=e}})),r.__H=void 0,t&&n.__e(t,r.__v))};var ie="function"==typeof requestAnimationFrame;function se(e){var n,t=function(){clearTimeout(r),ie&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ie&&(n=requestAnimationFrame(t))}function ae(e){var n=I,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),I=n}function ue(e){var n=I;e.__c=e.__(),I=n}function ce(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function de(e,n){return"function"==typeof n?n(e):n}Promise.resolve(),L({}),L({});const fe=n.__e;let pe;n.__e=(e,n,t)=>{if(e&&e.then){let r=n;for(;r=r.__;)if(r.__c&&r.__c.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),n.__k||(n.__k=[]),r.__c.__c(e,n)}fe&&fe(e,n,t)};function he(e){if("undefined"==typeof document)wmr.ssr.head.elements.add({type:"link",props:{rel:"stylesheet",href:e}});else{if(document.querySelector('link[rel=stylesheet][href="'+e+'"]'))return;const n=document.createElement("link");n.rel="stylesheet",n.href=e,document.head.appendChild(n)}}null;const ve="timer_15ah3r4",me="delimiter_15ah3r4",ye="blink_15ah3r4",$e=(e,n)=>e>2?"var(--text)":e>1?"var(--rosewater)":e>0?"var(--yellow)":n>16?"var(--peach)":n>8?"var(--maroon)":"var(--red)",ge={days:1,hours:2,minutes:2,seconds:2,milliseconds:3},be=({type:e,value:n})=>{const t=((e,n)=>String(Math.max(0,n)).padStart(ge[e],"0"))(e,n);return B`${[...t].map(((e,n)=>B`<span key=${n} className="digit">${e}</span>`))}`},ke=({value:e,blink:n})=>B`<span className=${`${me} ${n?ye:""}`}>${e}</span>`,we=({time:e,style:n="short",className:t=""})=>{const{days:r,hours:l,minutes:_,seconds:o,milliseconds:i}=(e=>{const n=e/1e3,t=n/60,r=t/60;return{days:Math.floor(r/24),hours:Math.floor(r%24),minutes:Math.floor(t%60),seconds:Math.floor(n%60),milliseconds:Math.floor(e%1e3)}})(e);return"short"===n?B`<div className=${`${ve} ${t}`} style=${{color:$e(r,l)}}><${be} type="days" value=${r}/><${ke} value="d"/><${be} type="hours" value=${l}/><${ke} value="h"/><${be} type="minutes" value=${_}/><${ke} value="m"/></div>`:B`<div className=${`${ve} ${t}`} style=${{color:$e(r,l)}}><${be} type="days" value=${r}/><${ke} value="d"/><${be} type="hours" value=${l}/><${ke} value=":" blink/><${be} type="minutes" value=${_}/><${ke} value=":" blink/><${be} type="seconds" value=${o}/><${ke} value="." blink/><${be} type="milliseconds" value=${i}/></div>`},Ne={sm:{size:"0.75rem",stroke:"0.25rem"},md:{size:"1rem",stroke:"0.125rem"}},xe=({icon:e,size:n,...t})=>{const{size:r,stroke:l}="string"==typeof n?Ne[n]:{size:n,stroke:void 0};return B`<${e} size=${r} strokeWidth=${l} ...${t}/>`};const Ce=({color:e="currentColor",size:n=24,children:t,fill:r,strokeWidth:l,..._})=>{return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=${r?"currentColor":"none"} stroke=${e} stroke-width=${o=l,i=()=>"0.25rem",null!=o?o:i()} stroke-linecap="round" stroke-linejoin="round" style=${(e=>({height:e,minHeight:e,width:e,minWidth:e}))(n)} ...${_}>${t}</svg>`;var o,i};null;const De="table_1f11lhc",Se="header_1f11lhc",He="body_1f11lhc",Te="row_1f11lhc",Ae="cell_1f11lhc",Ee=(...e)=>e.filter(Boolean).join(" "),Pe=({className:e,...n})=>B`<div role="table" className=${Ee(De,e)} ...${n}/>`,Oe=({className:e,...n})=>B`<div role="rowgroup" className=${Ee(Se,e)} ...${n}/>`,Ue=({className:e,...n})=>B`<div role="rowgroup" className=${Ee(He,e)} ...${n}/>`,Me=({className:e,...n})=>B`<div role="row" className=${Ee(Te,e)} ...${n}/>`,We=({className:e,header:n=!1,align:t="start",...r})=>B`<div role=${n?"columnheader":"cell"} className=${Ee(Ae,e)} style=${{textAlign:t}} ...${r}/>`,Le=({listener:e,fps:n})=>{const t=(e=>{const n=re(e);return te((()=>{n.current=e}),[e]),n})(e),r=re(),l=_e((()=>{clearInterval(r.current),r.current=void 0}),[]),_=_e((()=>{null!=r.current&&l();const e=setInterval((()=>{t.current(l)}),1e3/n);r.current=e}),[n,t,l]);return te((()=>(_(),l)),[_,l]),{start:_,stop:l}},Fe=({endDate:e,fps:n})=>{const[t,r]=ne(e.valueOf()-Date.now());const{start:l}=Le({fps:n,listener:n=>{const t=e.valueOf()-Date.now();r(t),t<=0&&n()}});return te((()=>{console.log(e),l()}),[e,l]),t},ze=(e,n)=>{"undefined"!=typeof window&&window.localStorage.setItem(e,JSON.stringify(n))},Ve=e=>{if("undefined"==typeof window)return null;const n=window.localStorage.getItem(e);if(null==n)return null;try{return JSON.parse(n)}catch(K){return null}},Ie=(e,n)=>{const[t,r]=ne(((e,n)=>{const t=Ve(e);return null!=t?t:(ze(e,n),n)})("miles-"+e,n));return[t,_e((n=>{ze("miles-"+e,n),r(n)}),[e])]};null;const je="timeline_e0myww",qe="table_e0myww",Be=({label:e,deadline:n,start:t,current:r})=>{const l=le((()=>(e=>e.toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"}))(n)),[n]),_=Fe({endDate:n,fps:1}),o=(([e,n],t=!1)=>{const r=Date.now(),l=e.valueOf()-r<=0;return n.valueOf()-r>0&&l&&0!==e.valueOf()||0===e.valueOf()&&t})([t,n],r);return{status:_<=0?"success":o?"current":"none",label:e,timeLeft:_,deadline:l}},Re={current:e=>B`<${Ce} ...${e}><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/><//>`,failed:e=>B`<${Ce} ...${e}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/><//>`,success:e=>B`<${Ce} ...${e}><polyline points="20 6 9 17 4 12"/><//>`,none:void 0},Ge=e=>{const{status:n,label:t,timeLeft:r,deadline:l}=Be(e),_=[];r<=0&&_.push("finished"),e.current&&_.push("current");const o=Re[n];return B`<${Me} className=${_.join(" ")}><${We} align="center"><div className=${je} data-status=${n}>${o&&B`<${xe} icon=${o} size="sm"/>`}</div><//><${We} align="start">${t}<//><${We} align="center">${l}<//><${We} align="end">${r>0?B`<${we} time=${r} style="short"/>`:"-"}<//><//>`},Je=()=>B`<${Me}><${We} header align="center" className="visually-hidden">Status<//><${We} header align="start">Label<//><${We} header align="center">Deadline<//><${We} header align="end">Time left<//><//>`,Ke=({milestones:e})=>B`<${Pe} className=${qe}><${Oe}><${Je}/><//><${Ue}>${e.map((e=>B`<${Ge} key=${e.id} ...${e}/>`))}<//><//>`;null;const Qe={wrapper:"wrapper_nevem8",label:"label_nevem8"},Xe=({endDate:e,label:n})=>{const t=Fe({endDate:e,fps:60});return B`<div className=${`${Qe.wrapper}`}><div className=${Qe.label}>${n}</div><${we} time=${t} className=${Qe.timer} style="long"/></div>`};null;const Ye="wrapper_lsd9uo",Ze="button_lsd9uo",en="bubbles_lsd9uo",nn=({current:e,options:n,onChange:t})=>B`<div className=${Ye}>${n.map((n=>B`<button key=${n} className=${Ee(Ze)} role="radio" aria-checked=${e===n} onClick=${()=>t(n)}><div className=${Ee(en,n)}><span/><span/><span/></div><span className="visually-hidden">Change theme to ${n}</span></button>`))}</div>`;function tn(e,n){return null!=e?e:n()}function rn(e){let n,t=e[0],r=1;for(;r<e.length;){const l=e[r],_=e[r+1];if(r+=2,("optionalAccess"===l||"optionalCall"===l)&&null==t)return;"access"===l||"optionalAccess"===l?(n=t,t=_(t)):"call"!==l&&"optionalCall"!==l||(t=_(((...e)=>t.call(n,...e))),n=void 0)}return t}const ln=[{id:"1",deadline:"2023-03-23T00:00:00",label:"Kickoff"},{id:"2",deadline:"2023-04-15T00:00:00",label:"Code things"},{id:"3",start:"2023-04-13T00:00:00",deadline:"2023-04-20T00:00:00",label:"Write docs"},{id:"4",start:"2023-04-14T12:00:00",deadline:"2023-04-23T00:00:00",label:"Create presentation"},{id:"5",deadline:"2023-04-23T00:00:00",label:"Hand in thesis"},{id:"6",deadline:"2023-04-30T00:00:00",label:"Presentation"}].map((({deadline:e,start:n,...t})=>({...t,deadline:new Date(e),start:n?new Date(n):new Date(0)}))).sort(((e,n)=>{const t=new Date(e.deadline),r=new Date(n.deadline);return t.valueOf()-r.valueOf()})),_n=e=>e.find((({deadline:e,start:n})=>{const t=Date.now(),r=e.valueOf()-t>0,l=n.valueOf()-t<=0;return r&&l})),on=["mocha","macchiato","frappe","latte"],sn=()=>{const[e,n]=Ie("theme",on[0]);te((()=>{on.forEach((n=>{document.body.classList[n===e?"add":"remove"](n)}))}),[e]);const t=le((()=>ln.map((({deadline:e,id:n,...t})=>({...t,id:n,deadline:new Date(e),current:!1})))),[]),{current:r,data:l}=(e=>{const[n,t]=ne(_n(e)),r=re(),l=_e((()=>{console.log("reset"),t(_n(e))}),[e]);te((()=>(rn([n,"optionalAccess",e=>e.deadline])&&(r.current=setTimeout(l,n.deadline.valueOf()-Date.now())),()=>clearTimeout(r.current))),[rn([n,"optionalAccess",e=>e.deadline]),l]);const _=le((()=>e.map((e=>e.id===rn([n,"optionalAccess",e=>e.id])?{...e,current:!0}:{...e,current:!1}))),[rn([n,"optionalAccess",e=>e.id]),e]);return{current:n,data:_}})(t);return B`<div className="app"><div className="theme-toggle-position"><${nn} current=${e} options=${on} onChange=${n}/></div><${Xe} label=${tn(rn([r,"optionalAccess",e=>e.label]),(()=>""))} endDate=${tn(rn([r,"optionalAccess",e=>e.deadline]),(()=>new Date("")))}/><div className="main"><${Ke} milestones=${l}/></div></div>`};async function an(e){return await(n=B`<${sn} ...${e}/>`,import("./chunks/prerender.b2e28e89.js").then((e=>e.default(n,t))));var n,t}!function(e,n){if("undefined"==typeof window)return;let t=document.querySelector("script[type=isodata]");n=n||t&&t.parentNode||document.body,!pe&&t?M(e,n):U(e,n),pe=!0}(B`<${sn}/>`);export{sn as App,W as E,h as _,n as l,an as prerender,f as y};