import{jsx as e}from"react/jsx-runtime";import{createSlice as r,configureStore as t}from"@reduxjs/toolkit";import{useDispatch as n,useSelector as o}from"react-redux";import c from"react";var s=function(){return s=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},s.apply(this,arguments)},a=[],u=[];var i;!function(e,r){if(e&&"undefined"!=typeof document){var t,n=!0===r.prepend?"prepend":"append",o=!0===r.singleTag,c="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(o){var s=a.indexOf(c);-1===s&&(s=a.push(c)-1,u[s]={}),t=u[s]&&u[s][n]?u[s][n]:u[s][n]=i()}else t=i();65279===e.charCodeAt(0)&&(e=e.substring(1)),t.styleSheet?t.styleSheet.cssText+=e:t.appendChild(document.createTextNode(e))}function i(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),o=0;o<t.length;o++)e.setAttribute(t[o],r.attributes[t[o]]);var s="prepend"===n?"afterbegin":"beforeend";return c.insertAdjacentElement(s,e),e}}(".btn {\r\n  border-radius: 5px;\r\n  padding: 8px 16px;\r\n  background: rgb(109, 124, 253);\r\n  transition: 0.4s;\r\n  cursor: pointer;\r\n  border: none;\r\n  margin-left: 20px;\r\n  color: white;\r\n}\r\n\r\n.btn:hover {\r\n  background: rgb(66, 84, 245);\r\n  color: white;\r\n}\r\n",{});var l=r({name:"configureTools",initialState:{value:0,counter:0},reducers:{setNumber:function(e,r){var t=r.payload;console.log("settnumberits new reducer from slice",t),e.counter+=t},setDecrementValue:function(e){console.log("decrement"),e.value=e.value-10}},extraReducers:{}}),d=(i=l.actions).setDecrementValue,m=i.setNumber;l.reducer,t({reducer:{configureTools:l.reducer}});var f=o,p=function(){var r=c.useState(0),t=r[0],o=r[1],a=f((function(e){return e})),u=n();console.log(a),console.log("dispatch");return e("button",s({className:"btn",onClick:function(){console.log("hi i am am am am decrementussssssss with state and new reducer!!!!"),o((function(e){return e+112})),u(d()),u(m(100)),console.log("its current value from usestate",t),console.log(a.configureTools)}},{children:"Decrement"}))};export{p as Decrement};
//# sourceMappingURL=index.js.map
