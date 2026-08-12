"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var w=f(function(h,x){
var v=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),g=require('@stdlib/ndarray-base-numel-dimension/dist'),o=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/blas-ext-base-ccopy-within/dist').ndarray;function m(e){var r,a,u,n,s,d,i,t;return i=e[0],t=e[4],d=c(i),n=o(i,0),s=q(i),u=c(t),r=o(t,0),a=q(t),l(g(i,0),v(e[1]),v(e[2]),v(e[3]),d,n,s,u,r,a),i}x.exports=m
});var p=w();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
