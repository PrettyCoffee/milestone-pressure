var e,t,n,_,r,l,o,i,u={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function f(t,n,_){var r,l,o,i={};for(o in n)"key"==o?r=n[o]:"ref"==o?l=n[o]:i[o]=n[o];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===i[o]&&(i[o]=t.defaultProps[o]);return p(t,i,r,l,null)}function p(e,_,r,l,o){var i={type:e,props:_,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n:o};return null==o&&null!=t.vnode&&t.vnode(i),i}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function y(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return y(e)}}function $(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!g.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||l)(g)}function g(){var e,t,n,r,l,i,u,s;for(_.sort(o);e=_.shift();)e.__d&&(t=_.length,r=void 0,l=void 0,u=(i=(n=e).__v).__e,(s=n.__P)&&(r=[],(l=c({},i)).__v=i.__v+1,S(s,i,l,n.__n,void 0!==s.ownerSVGElement,null!=i.__h?[u]:null,r,null==u?m(i):u,i.__h),T(r,i),i.__e!=u&&y(i)),_.length>t&&_.sort(o));g.__r=0}function b(e,t,n,_,r,l,o,i,a,c){var d,f,v,y,$,g,b,N=_&&_.__k||s,C=N.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(y=n.__k[d]=null==(y=t[d])||"boolean"==typeof y||"function"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?p(null,y,null,null,y):Array.isArray(y)?p(h,{children:y},null,null,null):y.__b>0?p(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=N[d])||v&&y.key==v.key&&y.type===v.type)N[d]=void 0;else for(f=0;f<C;f++){if((v=N[f])&&y.key==v.key&&y.type===v.type){N[f]=void 0;break}v=null}S(e,y,v=v||u,r,l,o,i,a,c),$=y.__e,(f=y.ref)&&v.ref!=f&&(b||(b=[]),v.ref&&b.push(v.ref,null,y),b.push(f,y.__c||$,y)),null!=$?(null==g&&(g=$),"function"==typeof y.type&&y.__k===v.__k?y.__d=a=k(y,a,e):a=w(e,y,v,N,$,a),"function"==typeof n.type&&(n.__d=a)):a&&v.__e==a&&a.parentNode!=e&&(a=m(v))}for(n.__e=g,d=C;d--;)null!=N[d]&&("function"==typeof n.type&&null!=N[d].__e&&N[d].__e==n.__d&&(n.__d=x(_).nextSibling),A(N[d],N[d]));if(b)for(d=0;d<b.length;d++)P(b[d],b[++d],b[++d])}function k(e,t,n){for(var _,r=e.__k,l=0;r&&l<r.length;l++)(_=r[l])&&(_.__=e,t="function"==typeof _.type?k(_,t,n):w(n,_,_,r,_.__e,t));return t}function w(e,t,n,_,r,l){var o,i,u;if(void 0!==t.__d)o=t.__d,t.__d=void 0;else if(null==n||r!=l||null==r.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(r),o=null;else{for(i=l,u=0;(i=i.nextSibling)&&u<_.length;u+=1)if(i==r)break e;e.insertBefore(r,l),o=l}return void 0!==o?o:r.nextSibling}function x(e){var t,n,_;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(_=x(n)))return _;return null}function N(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function C(e,t,n,_,r){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||N(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||N(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?_||e.addEventListener(t,l?H:D,l):e.removeEventListener(t,l?H:D,l);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function D(e){return this.l[e.type+!1](t.event?t.event(e):e)}function H(e){return this.l[e.type+!0](t.event?t.event(e):e)}function S(e,n,_,r,l,o,i,u,s){var a,d,f,p,m,y,$,g,k,w,x,N,C,D,H,S=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(s=_.__h,u=n.__e=_.__e,n.__h=null,o=[u]),(a=t.__b)&&a(n);try{e:if("function"==typeof S){if(g=n.props,k=(a=S.contextType)&&r[a.__c],w=a?k?k.props.value:a.__:r,_.__c?$=(d=n.__c=_.__c).__=d.__E:("prototype"in S&&S.prototype.render?n.__c=d=new S(g,w):(n.__c=d=new v(g,w),d.constructor=S,d.render=U),k&&k.sub(d),d.props=g,d.state||(d.state={}),d.context=w,d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=S.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=c({},d.__s)),c(d.__s,S.getDerivedStateFromProps(g,d.__s))),p=d.props,m=d.state,d.__v=n,f)null==S.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==p&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,w),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,w)||n.__v===_.__v){for(n.__v!==_.__v&&(d.props=g,d.state=d.__s,d.__d=!1),d.__e=!1,n.__e=_.__e,n.__k=_.__k,n.__k.forEach((function(e){e&&(e.__=n)})),x=0;x<d._sb.length;x++)d.__h.push(d._sb[x]);d._sb=[],d.__h.length&&i.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,w),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(p,m,y)}))}if(d.context=w,d.props=g,d.__P=e,N=t.__r,C=0,"prototype"in S&&S.prototype.render){for(d.state=d.__s,d.__d=!1,N&&N(n),a=d.render(d.props,d.state,d.context),D=0;D<d._sb.length;D++)d.__h.push(d._sb[D]);d._sb=[]}else do{d.__d=!1,N&&N(n),a=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++C<25);d.state=d.__s,null!=d.getChildContext&&(r=c(c({},r),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(p,m)),H=null!=a&&a.type===h&&null==a.key?a.props.children:a,b(e,Array.isArray(H)?H:[H],n,_,r,l,o,i,u,s),d.base=n.__e,n.__h=null,d.__h.length&&i.push(d),$&&(d.__E=d.__=null),d.__e=!1}else null==o&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=E(_.__e,n,_,r,l,o,i,s);(a=t.diffed)&&a(n)}catch(e){n.__v=null,(s||null!=o)&&(n.__e=u,n.__h=!!s,o[o.indexOf(u)]=null),t.__e(e,n,_)}}function T(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function E(t,n,_,r,l,o,i,s){var a,c,f,p=_.props,h=n.props,v=n.type,y=0;if("svg"===v&&(l=!0),null!=o)for(;y<o.length;y++)if((a=o[y])&&"setAttribute"in a==!!v&&(v?a.localName===v:3===a.nodeType)){t=a,o[y]=null;break}if(null==t){if(null===v)return document.createTextNode(h);t=l?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),o=null,s=!1}if(null===v)p===h||s&&t.data===h||(t.data=h);else{if(o=o&&e.call(t.childNodes),c=(p=_.props||u).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!s){if(null!=o)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(f||c)&&(f&&(c&&f.__html==c.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(e,t,n,_,r){var l;for(l in n)"children"===l||"key"===l||l in t||C(e,l,null,n[l],_);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||C(e,l,t[l],n[l],_)}(t,h,p,l,s),f)n.__k=[];else if(y=n.props.children,b(t,Array.isArray(y)?y:[y],n,_,r,l&&"foreignObject"!==v,o,i,o?o[0]:_.__k&&m(_,0),s),null!=o)for(y=o.length;y--;)null!=o[y]&&d(o[y]);s||("value"in h&&void 0!==(y=h.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&C(t,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==t.checked&&C(t,"checked",y,p.checked,!1))}return t}function P(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function A(e,n,_){var r,l;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&A(r[l],n,_||"function"!=typeof e.type);_||null==e.__e||d(e.__e),e.__=e.__e=e.__d=void 0}function U(e,t,n){return this.constructor(e,n)}function M(n,_,r){var l,o,i;t.__&&t.__(n,_),o=(l="function"==typeof r)?null:r&&r.__k||_.__k,i=[],S(_,n=(!l&&r||_).__k=f(h,null,[n]),o||u,u,void 0!==_.ownerSVGElement,!l&&r?[r]:o?null:_.firstChild?e.call(_.childNodes):null,i,!l&&r?r:o?o.__e:_.firstChild,l),T(i,n)}function O(e,t){M(e,t,O)}function W(t,n,_){var r,l,o,i=c({},t.props);for(o in n)"key"==o?r=n[o]:"ref"==o?l=n[o]:i[o]=n[o];return arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),p(t.type,i,r||t.key,l||t.ref,null)}function L(e,t){var n={__c:t="__cC"+i++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,_;return this.getChildContext||(n=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,$(e)}))},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}e=s.slice,t={__e:function(e,t,n,_){for(var r,l,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((l=r.constructor)&&null!=l.getDerivedStateFromError&&(r.setState(l.getDerivedStateFromError(e)),o=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,_||{}),o=r.__d),o)return r.__E=r}catch(t){e=t}throw e}},n=0,v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),$(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),$(this))},v.prototype.render=h,_=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=function(e,t){return e.__v.__b-t.__v.__b},g.__r=0,i=0;var F=function(e,t,n,_){var r;t[0]=0;for(var l=1;l<t.length;l++){var o=t[l++],i=t[l]?(t[0]|=o?1:2,n[t[l++]]):t[++l];3===o?_[0]=i:4===o?_[1]=Object.assign(_[1]||{},i):5===o?(_[1]=_[1]||{})[t[++l]]=i:6===o?_[1][t[++l]]+=i+"":o?(r=e.apply(i,F(e,i,n,["",null])),_.push(r),i[0]?t[0]|=2:(t[l-2]=0,t[l]=r)):_.push(i)}return _},z=new Map;var V,q,I,j,B=function(e){var t=z.get(this);return t||(t=new Map,z.set(this,t)),(t=F(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,_=1,r="",l="",o=[0],i=function(e){1===_&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(0,e,r):3===_&&(e||r)?(o.push(3,e,r),_=2):2===_&&"..."===r&&e?o.push(4,e,0):2===_&&r&&!e?o.push(5,0,!0,r):_>=5&&((r||!e&&5===_)&&(o.push(_,0,r,n),_=6),e&&(o.push(_,e,0,n),_=6)),r=""},u=0;u<e.length;u++){u&&(1===_&&i(),i(u));for(var s=0;s<e[u].length;s++)t=e[u][s],1===_?"<"===t?(i(),o=[o],_=3):r+=t:4===_?"--"===r&&">"===t?(_=1,r=""):r=t+r[0]:l?t===l?l="":r+=t:'"'===t||"'"===t?l=t:">"===t?(i(),_=1):_&&("="===t?(_=5,n=r,r=""):"/"===t&&(_<5||">"===e[u][s+1])?(i(),3===_&&(o=o[0]),_=o,(o=o[0]).push(2,0,_),_=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(i(),_=2):r+=t),3===_&&"!--"===r&&(_=4,o=o[0])}return i(),o}(e)),t),arguments,[])).length>1?t:t[0]}.bind(f),R=0,G=[],K=[],J=t.__b,Q=t.__r,X=t.diffed,Y=t.__c,Z=t.unmount;function ee(e,n){t.__h&&t.__h(q,e,R||n),R=0;var _=q.__H||(q.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:K}),_.__[e]}function te(e){return R=1,function(e,t,n){var _=ee(V++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):de(void 0,t),function(e){var t=_.__N?_.__N[0]:_.__[0],n=_.t(t,e);t!==n&&(_.__N=[n,_.__[1]],_.__c.setState({}))}],_.__c=q,!q.u)){var r=function(e,t,n){if(!_.__c.__H)return!0;var r=_.__c.__H.__.filter((function(e){return e.__c}));if(r.every((function(e){return!e.__N})))return!l||l.call(this,e,t,n);var o=!1;return r.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}})),!(!o&&_.__c.props===e)&&(!l||l.call(this,e,t,n))};q.u=!0;var l=q.shouldComponentUpdate,o=q.componentWillUpdate;q.componentWillUpdate=function(e,t,n){if(this.__e){var _=l;l=void 0,r(e,t,n),l=_}o&&o.call(this,e,t,n)},q.shouldComponentUpdate=r}return _.__N||_.__}(de,e)}function ne(e,n){var _=ee(V++,3);!t.__s&&ce(_.__H,n)&&(_.__=e,_.i=n,q.__H.__h.push(_))}function _e(e){return R=5,re((function(){return{current:e}}),[])}function re(e,t){var n=ee(V++,7);return ce(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function le(e,t){return R=8,re((function(){return e}),t)}function oe(){for(var e;e=G.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(se),e.__H.__h.forEach(ae),e.__H.__h=[]}catch(q){e.__H.__h=[],t.__e(q,e.__v)}}t.__b=function(e){q=null,J&&J(e)},t.__r=function(e){Q&&Q(e),V=0;var t=(q=e.__c).__H;t&&(I===q?(t.__h=[],q.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=K,e.__N=e.i=void 0}))):(t.__h.forEach(se),t.__h.forEach(ae),t.__h=[])),I=q},t.diffed=function(e){X&&X(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==G.push(n)&&j===t.requestAnimationFrame||((j=t.requestAnimationFrame)||ue)(oe)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==K&&(e.__=e.__V),e.i=void 0,e.__V=K}))),I=q=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(se),e.__h=e.__h.filter((function(e){return!e.__||ae(e)}))}catch(I){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(I,e.__v)}})),Y&&Y(e,n)},t.unmount=function(e){Z&&Z(e);var n,_=e.__c;_&&_.__H&&(_.__H.__.forEach((function(e){try{se(e)}catch(e){n=e}})),_.__H=void 0,n&&t.__e(n,_.__v))};var ie="function"==typeof requestAnimationFrame;function ue(e){var t,n=function(){clearTimeout(_),ie&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);ie&&(t=requestAnimationFrame(n))}function se(e){var t=q,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),q=t}function ae(e){var t=q;e.__c=e.__(),q=t}function ce(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function de(e,t){return"function"==typeof t?t(e):t}Promise.resolve(),L({}),L({});const fe=t.__e;let pe;t.__e=(e,t,n)=>{if(e&&e.then){let _=t;for(;_=_.__;)if(_.__c&&_.__c.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),t.__k||(t.__k=[]),_.__c.__c(e,t)}fe&&fe(e,t,n)};function he(e){if("undefined"==typeof document)wmr.ssr.head.elements.add({type:"link",props:{rel:"stylesheet",href:e}});else{if(document.querySelector('link[rel=stylesheet][href="'+e+'"]'))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}null;const ve="timer_15ah3r4",me="delimiter_15ah3r4",ye="blink_15ah3r4",$e=(e,t)=>e>2?"var(--text)":e>1?"var(--rosewater)":e>0?"var(--yellow)":t>16?"var(--peach)":t>8?"var(--maroon)":"var(--red)",ge={days:1,hours:2,minutes:2,seconds:2,milliseconds:3},be=({type:e,value:t})=>{const n=((e,t)=>String(Math.max(0,t)).padStart(ge[e],"0"))(e,t);return B`${[...n].map(((e,t)=>B`<span key=${t} className="digit">${e}</span>`))}`},ke=({value:e,blink:t})=>B`<span className=${`${me} ${t?ye:""}`}>${e}</span>`,we=({time:e,style:t="short",className:n=""})=>{const{days:_,hours:r,minutes:l,seconds:o,milliseconds:i}=(e=>{const t=e/1e3,n=t/60,_=n/60;return{days:Math.floor(_/24),hours:Math.floor(_%24),minutes:Math.floor(n%60),seconds:Math.floor(t%60),milliseconds:Math.floor(e%1e3)}})(e);return"short"===t?B`<div className=${`${ve} ${n}`} style=${{color:$e(_,r)}}><${be} type="days" value=${_}/><${ke} value="d"/><${be} type="hours" value=${r}/><${ke} value="h"/><${be} type="minutes" value=${l}/><${ke} value="m"/></div>`:B`<div className=${`${ve} ${n}`} style=${{color:$e(_,r)}}><${be} type="days" value=${_}/><${ke} value="d"/><${be} type="hours" value=${r}/><${ke} value=":" blink/><${be} type="minutes" value=${l}/><${ke} value=":" blink/><${be} type="seconds" value=${o}/><${ke} value="." blink/><${be} type="milliseconds" value=${i}/></div>`},xe={sm:{size:"0.75rem",stroke:"0.25rem"},md:{size:"1rem",stroke:"0.125rem"}},Ne=({icon:e,size:t,...n})=>{const{size:_,stroke:r}="string"==typeof t?xe[t]:{size:t,stroke:void 0};return B`<${e} size=${_} strokeWidth=${r} ...${n}/>`};const Ce=({color:e="currentColor",size:t=24,children:n,fill:_,strokeWidth:r,...l})=>{return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=${_?"currentColor":"none"} stroke=${e} stroke-width=${o=r,i=()=>"0.25rem",null!=o?o:i()} stroke-linecap="round" stroke-linejoin="round" style=${(e=>({height:e,minHeight:e,width:e,minWidth:e}))(t)} ...${l}>${n}</svg>`;var o,i},De=({listener:e,fps:t})=>{const n=(e=>{const t=_e(e);return ne((()=>{t.current=e}),[e]),t})(e),_=_e(),r=le((()=>{clearInterval(_.current),_.current=void 0}),[]),l=le((()=>{null!=_.current&&r();const e=setInterval((()=>{n.current(r)}),1e3/t);_.current=e}),[t,n,r]);return ne((()=>(l(),r)),[l,r]),{start:l,stop:r}},He=({endDate:e,fps:t})=>{const[n,_]=te(e.valueOf()-Date.now());return De({fps:t,listener:t=>{const n=e.valueOf()-Date.now();_(n),n<=0&&t()}}),n};null;const Se="table_e0myww",Te=({label:e,deadline:t,start:n,current:_})=>{const r=re((()=>(e=>e.toLocaleString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"}))(t)),[t]),l=He({endDate:t,fps:1}),o=(([e,t],n=!1)=>{const _=Date.now(),r=e.valueOf()-_<=0;return t.valueOf()-_>0&&r&&0!==e.valueOf()||0===e.valueOf()&&n})([n,t],_);return{status:l<=0?"success":o?"current":"none",label:e,timeLeft:l,deadline:r}},Ee={current:e=>B`<${Ce} ...${e}><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/><//>`,failed:e=>B`<${Ce} ...${e}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/><//>`,success:e=>B`<${Ce} ...${e}><polyline points="20 6 9 17 4 12"/><//>`,none:void 0},Pe=e=>{const{status:t,label:n,timeLeft:_,deadline:r}=Te(e),l=[];_<=0&&l.push("finished"),e.current&&l.push("current");const o=Ee[t];return B`<tr className=${l.join(" ")}><td data-type="timeline" data-status=${t}>${o&&B`<${Ne} icon=${o} size="sm"/>`}</td><td data-type="text">${n}</td><td data-type="date">${r}</td><td data-type="timer">${_>0?B`<${we} time=${_} style="short"/>`:"-"}</td></tr>`},Ae=()=>B`<tr><th className="visually-hidden" data-type="timeline">Status</th><th data-type="text">Label</th><th data-type="date">Deadline</th><th data-type="timer">Time left</th></tr>`,Ue=({milestones:e})=>B`<table className=${Se}><thead><${Ae}/></thead><tbody>${e.map((e=>B`<${Pe} key=${e.id} ...${e}/>`))}</tbody></table>`;null;const Me={wrapper:"wrapper_nevem8",label:"label_nevem8"},Oe=({endDate:e,label:t})=>{const n=He({endDate:e,fps:60});return B`<div className=${`${Me.wrapper}`}><div className=${Me.label}>${t}</div><${we} time=${n} className=${Me.timer} style="long"/></div>`};function We(e,t){return null!=e?e:t()}function Le(e){let t,n=e[0],_=1;for(;_<e.length;){const r=e[_],l=e[_+1];if(_+=2,("optionalAccess"===r||"optionalCall"===r)&&null==n)return;"access"===r||"optionalAccess"===r?(t=n,n=l(n)):"call"!==r&&"optionalCall"!==r||(n=l(((...e)=>n.call(t,...e))),t=void 0)}return n}const Fe=[{id:"1",deadline:"2023-03-23T00:00:00",label:"Kickoff"},{id:"2",deadline:"2023-04-15T00:00:00",label:"Code things"},{id:"3",start:"2023-04-13T00:00:00",deadline:"2023-04-20T00:00:00",label:"Write docs"},{id:"4",start:"2023-04-14T12:00:00",deadline:"2023-04-23T00:00:00",label:"Create presentation"},{id:"5",deadline:"2023-04-23T00:00:00",label:"Hand in thesis"},{id:"6",deadline:"2023-04-30T00:00:00",label:"Presentation"}].map((({deadline:e,start:t,...n})=>({...n,deadline:new Date(e),start:t?new Date(t):new Date(0)}))).sort(((e,t)=>{const n=new Date(e.deadline),_=new Date(t.deadline);return n.valueOf()-_.valueOf()})),ze=Fe.find((({deadline:e,start:t})=>{const n=Date.now(),_=e.valueOf()-n>0,r=t.valueOf()-n<=0;return _&&r})),Ve=Fe.map((({deadline:e,id:t,...n})=>({...n,id:t,deadline:new Date(e),current:Le([ze,"optionalAccess",e=>e.id])===t}))),qe=()=>B`<div className=${"app"}><${Oe} label=${We(Le([ze,"optionalAccess",e=>e.label]),(()=>""))} endDate=${new Date(We(Le([ze,"optionalAccess",e=>e.deadline]),(()=>"")))}/><div className="main"><${Ue} milestones=${Ve}/></div></div>`;async function Ie(e){return await(t=B`<${qe} ...${e}/>`,import("./chunks/prerender.ca6b9e5f.js").then((e=>e.default(t,n))));var t,n}!function(e,t){if("undefined"==typeof window)return;let n=document.querySelector("script[type=isodata]");t=t||n&&n.parentNode||document.body,!pe&&n?O(e,t):M(e,t),pe=!0}(B`<${qe}/>`);export{qe as App,W as E,h as _,t as l,Ie as prerender,f as y};