import{jsx as e}from"react/jsx-runtime";import{useSelector as t}from"react-redux";var r=function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},n=[],o=[];!function(e,t){if(e&&"undefined"!=typeof document){var r,c=!0===t.prepend?"prepend":"append",a=!0===t.singleTag,i="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(a){var s=n.indexOf(i);-1===s&&(s=n.push(i)-1,o[s]={}),r=o[s]&&o[s][c]?o[s][c]:o[s][c]=u()}else r=u();65279===e.charCodeAt(0)&&(e=e.substring(1)),r.styleSheet?r.styleSheet.cssText+=e:r.appendChild(document.createTextNode(e))}function u(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var r=Object.keys(t.attributes),n=0;n<r.length;n++)e.setAttribute(r[n],t.attributes[r[n]]);var o="prepend"===c?"afterbegin":"beforeend";return i.insertAdjacentElement(o,e),e}}(".btn {\r\n  border-radius: 5px;\r\n  padding: 8px 16px;\r\n  background: rgb(109, 124, 253);\r\n  transition: 0.4s;\r\n  cursor: pointer;\r\n  border: none;\r\n  margin-left: 20px;\r\n  color: white;\r\n}\r\n\r\n.btn:hover {\r\n  background: rgb(66, 84, 245);\r\n  color: white;\r\n}\r\n",{});var c=function(){var n=t((function(e){return e})),o=useAppDispatch();console.log(n),console.log("dispatch");return e("button",r({className:"btn",onClick:function(){console.log("helloccccc world"),o(setDecrementValue())}},{children:"Decrement"}))};export{c as Decrement};
//# sourceMappingURL=index.js.map
