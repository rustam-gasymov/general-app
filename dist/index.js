import{jsx as e}from"react/jsx-runtime";import{useState as t}from"react";import{configureStore as r,createSlice as n}from"@reduxjs/toolkit";import{useDispatch as o,useSelector as a}from"react-redux";var c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};r({reducer:{}});var u=a,i=n({name:"decrement",initialState:{value:0},reducers:{setDecrementValue:function(e,t){var r=t.payload;console.log("setIncrementValue new state",r),e.value=e.value-r}},extraReducers:{}}),l=i.actions.setDecrementValue;i.reducer;var s={btn:"mc2737ac78_btn"},m=function(){var r=t(0),n=r[0],a=r[1],i=u((function(e){return e})),m=o();console.log(i),console.log("dispatch",s);return e("button",c({className:s.btn,onClick:function(){console.log("hi i am decrementus with state and new reducer!!!! Am ia working????? If not say me!"),a((function(e){return e+112})),m(l(n)),console.log("its current value from usestate",n),console.log(i.configureTools)}},{children:"Decrement"}))};export{m as Decrement,i as decrementSlice,l as setDecrementValue};
//# sourceMappingURL=index.js.map
