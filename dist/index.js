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
***************************************************************************** */var c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},c.apply(this,arguments)};t({reducer:{}});var u=a,l=n({name:"decrement",initialState:{value:0},reducers:{setDecrementValue:function(e,r){var t=r.payload;console.log("setIncrementValue new state",t),e.value=e.value-t}},extraReducers:{}}),i=l.actions.setDecrementValue;l.reducer;var s="Decrement-module_btn__U-4Jn",m=function(){var t=r(0),n=t[0],a=t[1],l=u((function(e){return e})),m=o();console.log(l),console.log("dispatch");return e("button",c({className:s,onClick:function(){console.log("hi i am decrementus with state and new reducer!!!! Am ia working????? If not say me!"),a((function(e){return e+112})),m(i(n)),console.log("its current value from usestate",n),console.log(l.configureTools)}},{children:"Decrement"}))};export{m as Decrement,l as decrementSlice,i as setDecrementValue};
//# sourceMappingURL=index.js.map
