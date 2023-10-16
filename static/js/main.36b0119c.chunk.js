(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,n,e){t.exports=e(32)},32:function(t,n,e){"use strict";e.r(n);var r,o,i,a,c,l,u,s,f,h,p,d,m,g,y,v,b,x,w,E=e(1),L=e.n(E),j=e(15),O=e.n(j),k=e(11),_=e(6),G=e(3),F=e(4),A=function(t){return t.WHITE="#ffffff",t.BLACK="#000000",t.BLUE="#00A5FF",t.LIGHT_BLUE="#89D1F8",t.GRAY="#9A9A9A",t.LIGHT_GRAY="#E9E9E9",t.BACKGROUND_BLUE="#DDF3FF",t}(A||{}),T=F.b.li(r||(r=Object(G.a)(["\n  display: flex;\n  flex-direction: column;\n\n  justify-content: flex-end;\n  width: 100%;\n  height: 342px;\n  min-width: 240px;\n\n  cursor: pointer;\n"]))),I=F.b.p(o||(o=Object(G.a)(["\n  display: -webkit-box;\n  min-height: 45px;\n\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 130%; /* 23.4px */\n  text-align: left;\n\n  margin-top: 22;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"]))),P=F.b.p(i||(i=Object(G.a)(['\n  margin-top: 15px;\n  margin-bottom: 0px;\n  font-size: 27px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 36.963px;\n\n  &:after {\n    content: "\u0440\u0443\u0431.";\n\n    margin-left: 5px;\n\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 136.9%;\n  }\n\n  &::before {\n    content: "','";\n\n    color: ',";\n\n    margin-right: 5px;\n\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 136.9%;\n    text-decoration: line-through;\n  }\n"])),function(t){return t.$oldPrice},A.GRAY),N=F.b.div(a||(a=Object(G.a)(["\n  position: relative;\n  border-radius: 6.75px;\n  border: 1px solid ",";\n\n  height: 100%;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n"])),A.LIGHT_GRAY,function(t){return t.$imageUrl}),B=F.b.img(c||(c=Object(G.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n"]))),S=function(t){t.id;var n=t.title,e=t.image,r=t.price,o=t.oldPrice;return L.a.createElement(L.a.Fragment,null,L.a.createElement(T,null,L.a.createElement(N,{$imageUrl:e},L.a.createElement(B,{src:"./images/favorites.svg",alt:"Favorites"})),L.a.createElement(I,null,n),L.a.createElement(P,{$oldPrice:o},r)))},z=F.b.ul(l||(l=Object(G.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 18%);\n  gap: 30px;\n  justify-content: space-between;\n\n  @media (max-width: 1415px) {\n    grid-template-columns: repeat(auto-fill, 22%);\n  }\n\n  @media (max-width: 1080px) {\n    grid-template-columns: repeat(auto-fill, 30%);\n  }\n\n  @media (max-width: 824px) {\n    grid-template-columns: repeat(auto-fill, 46%);\n  }\n\n  @media (max-width: 549px) {\n    grid-template-columns: repeat(auto-fill, 100%);\n  }\n"]))),C=F.b.h1(u||(u=Object(G.a)(["\n  max-width: 700px;\n  color: ",';\n\n  font-family: "Inter", sans-serif;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n\n  @media (max-width: 549px) {\n    font-size: 25px;\n  }\n'])),A.BLACK),U=F.b.h2(s||(s=Object(G.a)(["\n  max-width: 600px;\n  color: ",';\n\n  font-family: "Inter", sans-serif;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n\n  @media (max-width: 549px) {\n    font-size: 14px;\n  }\n'])),A.BLACK),Y=function(t){var n=t.title,e=t.subtitle;return L.a.createElement(L.a.Fragment,null,L.a.createElement(C,null,n),L.a.createElement(U,null,e))},R=Object(E.memo)(function(t){var n=t.products;return L.a.createElement(L.a.Fragment,null,L.a.createElement(Y,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",subtitle:"\u041c\u044b \u043f\u043e\u0434\u043e\u0431\u0440\u0430\u043b\u0438 \u0434\u043b\u044f \u0432\u0430\u0441 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"}),L.a.createElement(z,null,n.map(function(t){var n=t.id,e=t.title,r=t.image,o=t.price,i=t.oldPrice;return L.a.createElement(S,{id:n,title:e,image:r,price:o,oldPrice:i,key:n})})))}),K=F.b.div(f||(f=Object(G.a)(["\n  display: flex;\n\n  :nth-child(",") {\n    background-color: ",";\n  }\n\n  :last-child {\n    margin-right: 0px;\n  }\n"])),function(t){return t.$id},A.LIGHT_BLUE),q=F.b.div(h||(h=Object(G.a)(["\n  height: 20px;\n  width: 20px;\n\n  margin-right: 10px;\n\n  border-radius: 50%;\n  background-color: ",";\n"])),A.BLUE),H=function(t){for(var n=t.questions,e=t.currentQuestion,r=[],o=0;o<n.length;o++)r.push(L.a.createElement(q,{key:o}));return L.a.createElement(K,{$id:e},r)},$=F.b.div(p||(p=Object(G.a)(["\n  max-width: 846px;\n  padding: 35px;\n  border-radius: 10px;\n  background-color: ",";\n"])),A.BACKGROUND_BLUE),D=F.b.span(d||(d=Object(G.a)(["\n  display: flex;\n  margin-top: 16px;\n  margin-bottom: 38px;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  color: ",";\n"])),A.GRAY),W=F.b.button(m||(m=Object(G.a)(["\n  color: ",";\n\n  padding: 10px 15px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 5px;\n  background: ",";\n\n  text-align: center;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n\n  margin-bottom: 65px;\n\n  &:hover {\n    box-shadow: 2px 2px 2px ",";\n  }\n"])),A.WHITE,A.BLUE,A.GRAY),J=F.b.button(g||(g=Object(G.a)(["\n  color: ",";\n\n  padding: 10px 15px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-right: 10px;\n  margin-bottom: 65px;\n\n  border-radius: 5px;\n  background: ",";\n\n  text-align: center;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n\n  &:hover {\n    box-shadow: 2px 2px 2px ",";\n  }\n"])),A.BLACK,A.WHITE,A.GRAY),Q=Object(E.memo)(function(t){var n=t.questions,e=Object(E.useState)(1),r=Object(_.a)(e,2),o=r[0],i=r[1],a=Object(E.useState)(!1),c=Object(_.a)(a,2),l=c[0],u=c[1];console.log(o),console.log(n);var s=function(){console.log("clicked next"),i(o+1)},f=function(){console.log("clicked prev"),i(o-1)},h=n[o-1],p=h.id,d=h.title,m=h.options;return l?L.a.createElement(ot,null):L.a.createElement(L.a.Fragment,null,L.a.createElement(Y,{title:"\u041e\u043d\u043b\u0430\u0439\u043d-\u043f\u043e\u0434\u0431\u043e\u0440 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043b\u0438\u0446\u0430",subtitle:"\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0442\u0435\u0441\u0442 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0434\u043b\u044f \u0432\u0430\u0441 \u043a\u043e\u0441\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"}),L.a.createElement($,null,L.a.createElement(H,{questions:n,currentQuestion:o}),L.a.createElement(D,null,"\u0412\u043e\u043f\u0440\u043e\u0441 ",p," \u0438\u0437 ",n.length),L.a.createElement(nt,{id:p,title:d,options:m}),1===o?L.a.createElement(W,{onClick:s,id:"next"},"\u0414\u0430\u043b\u044c\u0448\u0435"):o===n.length?L.a.createElement(L.a.Fragment,null,L.a.createElement(J,{onClick:f,id:"prev"},"\u041d\u0430\u0437\u0430\u0434"),L.a.createElement(W,{type:"submit",onClick:function(){console.log("clicked result"),u(!0)},id:"result"},"\u0423\u0437\u043d\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")):L.a.createElement(L.a.Fragment,null,L.a.createElement(J,{onClick:f,id:"prev"},"\u041d\u0430\u0437\u0430\u0434"),L.a.createElement(W,{onClick:s,id:"next"},"\u0414\u0430\u043b\u044c\u0448\u0435"))))}),M=F.b.h2(y||(y=Object(G.a)(["\n  color: ",";\n\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n\n  margin-top: 0px;\n  margin-bottom: 32px;\n"])),A.BLACK),V=F.b.ul(v||(v=Object(G.a)(["\n  min-height: 250px;\n"]))),X=F.b.li(b||(b=Object(G.a)(["\n  color: ",";\n\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n\n  padding-bottom: 15px;\n"])),A.BLACK),Z=F.b.input(x||(x=Object(G.a)(["\n  vertical-align: middle;\n  margin: -3px 0 0 0;\n  cursor: pointer;\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n"]))),tt=F.b.label(w||(w=Object(G.a)([""]))),nt=Object(E.memo)(function(t){t.id;var n=t.title,e=t.options,r=Object(E.useState)(""),o=Object(_.a)(r,2),i=o[0],a=o[1],c=function(t){a(t.target.value)};return L.a.createElement(L.a.Fragment,null,L.a.createElement(V,null,L.a.createElement(M,null,n),e.map(function(t){return L.a.createElement(X,{key:t},L.a.createElement(Z,{type:"radio",checked:i===t,name:n,value:t,onChange:c}),L.a.createElement(tt,{htmlFor:t},t))})))}),et=e(33);function rt(){rt=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),c=new A(r||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",m="completed",g={};function y(){}function v(){}function b(){}var x={};u(x,a,function(){return this});var w=Object.getPrototypeOf,E=w&&w(w(T([])));E&&E!==e&&r.call(E,a)&&(x=E);var L=b.prototype=y.prototype=Object.create(x);function j(t){["next","throw","return"].forEach(function(n){u(t,n,function(t){return this._invoke(n,t)})})}function O(t,n){function e(o,i,a,c){var l=f(t[o],t,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?n.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):n.resolve(s).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,c)})}c(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n(function(n,o){e(t,r,n,o)})}return i=i?i.then(o,o):o()}})}function k(n,e,r){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=_(c,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var u=f(n,e,r);if("normal"===u.type){if(o=r.done?m:p,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function _(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,_(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=f(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function G(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function F(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return v.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=u(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},j(O.prototype),u(O.prototype,c,function(){return this}),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(s(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(L),u(L,l,"Generator"),u(L,a,function(){return this}),u(L,"toString",function(){return"[object Generator]"}),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,A.prototype={constructor:A,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),F(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;F(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}var ot=Object(E.memo)(function(){var t=Object(E.useState)({isLoading:!0,products:[]}),n=Object(_.a)(t,2),e=n[0],r=n[1];return Object(E.useEffect)(function(){(function(){var t=Object(k.a)(rt().mark(function t(){return rt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et.a.get("products.json").then(function(t){console.log("\u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b"),r({isLoading:!1,products:t.data})});case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()(),console.log("\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435")},[r]),e.isLoading?L.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"):L.a.createElement(R,{isLoading:e.isLoading,products:e.products})});function it(){it=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),c=new A(r||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",m="completed",g={};function y(){}function v(){}function b(){}var x={};u(x,a,function(){return this});var w=Object.getPrototypeOf,E=w&&w(w(T([])));E&&E!==e&&r.call(E,a)&&(x=E);var L=b.prototype=y.prototype=Object.create(x);function j(t){["next","throw","return"].forEach(function(n){u(t,n,function(t){return this._invoke(n,t)})})}function O(t,n){function e(o,i,a,c){var l=f(t[o],t,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?n.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):n.resolve(s).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,c)})}c(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n(function(n,o){e(t,r,n,o)})}return i=i?i.then(o,o):o()}})}function k(n,e,r){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=_(c,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var u=f(n,e,r);if("normal"===u.type){if(o=r.done?m:p,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function _(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,_(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=f(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function G(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function F(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return v.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=u(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},j(O.prototype),u(O.prototype,c,function(){return this}),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(s(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(L),u(L,l,"Generator"),u(L,a,function(){return this}),u(L,"toString",function(){return"[object Generator]"}),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,A.prototype={constructor:A,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),F(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;F(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}var at,ct=function(){var t=Object(E.useState)({isLoading:!0,questions:[]}),n=Object(_.a)(t,2),e=n[0],r=n[1];return Object(E.useEffect)(function(){(function(){var t=Object(k.a)(it().mark(function t(){return it().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,et.a.get("questions.json").then(function(t){console.log("\u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b"),r({isLoading:!1,questions:t.data})});case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()(),console.log("\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435")},[r]),e.isLoading?L.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"):L.a.createElement("div",{id:"content-wrapper"},L.a.createElement(Q,{questions:e.questions}))},lt=function(){return L.a.createElement(ct,null)},ut=Object(F.a)(at||(at=Object(G.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\n\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\n\n  font-family: 'Inter', sans-serif;\n  padding: 0;\n  color: ",";\n  \n}\n\nbody {\n  margin: 0 auto;\n  background-color: ",";\n}\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0; \n}\n\nbutton {\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n  border-spacing: 0;\n  color: #26589F;\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 1.42rem;\n  list-style: none outside none;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none;\n  text-indent: 0;\n  cursor: pointer;\n}\n\n\na {\n  text-decoration: none;\n}\n\n#root {\n\n}\n\n#content-wrapper { \n  margin: 0 auto;\n  max-width: 1440px;\n  min-width: 320px;\n  padding: 20px;\n}\n"])),A.BLACK,A.WHITE);O.a.createRoot(document.getElementById("root")).render(L.a.createElement(L.a.Fragment,null,L.a.createElement(ut,null),L.a.createElement(lt,null)))}},[[20,1,2]]]);
//# sourceMappingURL=main.36b0119c.chunk.js.map