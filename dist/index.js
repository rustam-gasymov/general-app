import{jsx as e}from"react/jsx-runtime";import{useState as r}from"react";import{configureStore as t,createSlice as n}from"@reduxjs/toolkit";import{useDispatch as o,useSelector as a}from"react-redux";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},c.apply(this,arguments)};t({reducer:{}});var i=a,s=n({name:"decrement",initialState:{value:0},reducers:{setDecrementValue:function(e,r){var t=r.payload;console.log("setIncrementValue new state",t),e.value=e.value-t}}}),l=s.actions.setDecrementValue;s.reducer;!function(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".btn {\r\n  border-radius: 5px;\r\n  padding: 8px 16px;\r\n  background: rgb(109, 124, 253);\r\n  transition: 0.4s;\r\n  cursor: pointer;\r\n  border: none;\r\n  margin-left: 20px;\r\n  color: white;\r\n}\r\n\r\n.btn:hover {\r\n  background: rgb(66, 84, 245);\r\n  color: white;\r\n}\r\n");var u=function(){var t=r(0),n=t[0],a=t[1],s=i((function(e){return e})),u=o();console.log(s),console.log("dispatch");return e("button",c({className:"btn",onClick:function(){console.log("hi i am decrementus with state and new reducer!!!! Am ia working????? If not say me!"),a((function(e){return e+112})),u(l(n)),console.log("its current value from usestate",n),console.log(s.configureTools)}},{children:"Decrement"}))};export{u as Decrement,s as decrementSlice,l as setDecrementValue};
//# sourceMappingURL=index.js.map
