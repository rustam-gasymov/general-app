import{jsx as e}from"react/jsx-runtime";import{createSlice as r,configureStore as t}from"@reduxjs/toolkit";import{useDispatch as n,useSelector as o}from"react-redux";var a=function(){return a=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},a.apply(this,arguments)},c=[],i=[];!function(e,r){if(e&&"undefined"!=typeof document){var t,n=!0===r.prepend?"prepend":"append",o=!0===r.singleTag,a="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(o){var s=c.indexOf(a);-1===s&&(s=c.push(a)-1,i[s]={}),t=i[s]&&i[s][n]?i[s][n]:i[s][n]=u()}else t=u();65279===e.charCodeAt(0)&&(e=e.substring(1)),t.styleSheet?t.styleSheet.cssText+=e:t.appendChild(document.createTextNode(e))}function u(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),o=0;o<t.length;o++)e.setAttribute(t[o],r.attributes[t[o]]);var c="prepend"===n?"afterbegin":"beforeend";return a.insertAdjacentElement(c,e),e}}(".btn {\r\n  border-radius: 5px;\r\n  padding: 8px 16px;\r\n  background: rgb(109, 124, 253);\r\n  transition: 0.4s;\r\n  cursor: pointer;\r\n  border: none;\r\n  margin-left: 20px;\r\n  color: white;\r\n}\r\n\r\n.btn:hover {\r\n  background: rgb(66, 84, 245);\r\n  color: white;\r\n}\r\n",{});var s=r({name:"configureTools",initialState:{value:0},reducers:{setDecrementValue:function(e){console.log("decrement"),e.value=e.value-10}},extraReducers:{}}),u=s.actions.setDecrementValue;s.reducer,t({reducer:{configureTools:s.reducer}});var l=o,d=function(){var r=l((function(e){return e})),t=n();console.log(r),console.log("dispatch");return e("button",a({className:"btn",onClick:function(){console.log("hi i am am am am decrementussssssss!!!!"),t(u())}},{children:"Decrement"}))};export{d as Decrement};
//# sourceMappingURL=index.js.map
