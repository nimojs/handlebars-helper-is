!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.helperIs=t():e.helperIs=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var r=function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=function(){this.expressions=[]};o.prototype.add=function(e,t){this.expressions[e]=t},o.prototype.call=function(e,t,n){if(!this.expressions.hasOwnProperty(e))throw new Error('Unknown operator "'+e+'"');return this.expressions[e](t,n)};var s=new o;s.add("in",function(e,t){return r(t)||(t=t.split(",")),-1!==t.indexOf(e)});var i=function(){var e=arguments,t=e[0],n=e[1],r=e[2],o=e[3];return 2==e.length?(o=e[1],t?o.fn(this):o.inverse(this)):3==e.length?(r=e[1],o=e[2],t==r?o.fn(this):o.inverse(this)):s.call(n,t,r)?o.fn(this):o.inverse(this)};e.exports=i}])});