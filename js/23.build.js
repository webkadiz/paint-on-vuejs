(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(r,o,a){var t=a(236);"string"==typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);(0,a(0).default)("4b0dbed2",t,!1,{})},127:function(r,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r};o.default={props:["component"],computed:t({computeClass(){return this.getGrid.findIndex(r=>r.find(r=>r.component===this.component))>this.getGrid.findIndex(r=>r.find(r=>"CanvasWrapper"===r.component))?{left:!1,right:!0}:{left:!0,right:!1}}},Vuex.mapGetters(["getGrid"]))}},128:function(r,o,a){"use strict";a.r(o);var t=a(127),e=a.n(t);for(var n in t)"default"!==n&&function(r){a.d(o,r,function(){return t[r]})}(n);o.default=e.a},189:function(r,o,a){"use strict";var t=function(){var r=this,o=r.$createElement,a=r._self._c||o;return a("div",{class:["grid-arrow-wrapper",r.computeClass]},[a("div",{staticClass:"grid-arrow",on:{click:function(o){r.$emit("switcherArrowInGrid")}}})])},e=[];t._withStripped=!0,a.d(o,"a",function(){return t}),a.d(o,"b",function(){return e})},236:function(r,o,a){(r.exports=a(1)(!1)).push([r.i,"\n.grid-arrow-wrapper {\n  flex-shrink: 0;\n  height: 10px;\n  background: var(--bg-color);\n  border-bottom: 1px solid var(--border-color);\n  position: relative;\n}\n.grid-arrow-wrapper .grid-arrow {\n    transition: .6s;\n    position: absolute;\n    width: 24px;\n    height: 100%;\n    padding: 0;\n    top: 0;\n    background: var(--bg-color);\n    cursor: pointer;\n    outline: none;\n    border: none;\n}\n.grid-arrow-wrapper .grid-arrow::before, .grid-arrow-wrapper .grid-arrow::after, .grid-arrow-wrapper.left .grid-arrow::after, .grid-arrow-wrapper.right .grid-arrow::after, .grid-arrow-wrapper.fold.left .grid-arrow::after, .grid-arrow-wrapper.fold.right .grid-arrow::after {\n      transition: .3s;\n      content: '';\n      display: block;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      margin: -4px -4px;\n      cursor: pointer;\n}\n.grid-arrow-wrapper.left .grid-arrow {\n    left: 0;\n    border-right: 1px solid var(--border-color);\n}\n.grid-arrow-wrapper.left .grid-arrow::before, .grid-arrow-wrapper.left .grid-arrow::after, .grid-arrow-wrapper.fold.left .grid-arrow::after, .grid-arrow-wrapper.left .grid-arrow-wrapper.fold.right .grid-arrow::after, .grid-arrow-wrapper.fold.right .grid-arrow-wrapper.left .grid-arrow::after {\n      border-right: 4px solid var(--text-color);\n      border-top: 4px solid transparent;\n      border-bottom: 4px solid transparent;\n      border-left: 4px solid transparent;\n}\n.grid-arrow-wrapper.left .grid-arrow::after {\n      left: calc(50% - 5px);\n}\n.grid-arrow-wrapper.right .grid-arrow {\n    right: 0;\n    border-left: 1px solid var(--border-color);\n}\n.grid-arrow-wrapper.right .grid-arrow::before, .grid-arrow-wrapper.right .grid-arrow::after, .grid-arrow-wrapper.right .grid-arrow-wrapper.fold.left .grid-arrow::after, .grid-arrow-wrapper.fold.left .grid-arrow-wrapper.right .grid-arrow::after, .grid-arrow-wrapper.fold.right .grid-arrow::after {\n      border-left: 4px solid var(--text-color);\n      border-top: 4px solid transparent;\n      border-bottom: 4px solid transparent;\n      border-right: 4px solid transparent;\n}\n.grid-arrow-wrapper.right .grid-arrow::after {\n      left: calc(50% + 5px);\n}\n.grid-arrow-wrapper.fold.left .grid-arrow::before, .grid-arrow-wrapper.fold.left .grid-arrow::after {\n  transform: rotate(180deg);\n}\n.grid-arrow-wrapper.fold.left .grid-arrow::after {\n  left: calc(50% + 5px);\n}\n.grid-arrow-wrapper.fold.right .grid-arrow::before, .grid-arrow-wrapper.fold.right .grid-arrow::after {\n  transform: rotate(180deg);\n}\n.grid-arrow-wrapper.fold.right .grid-arrow::after {\n  left: calc(50% - 5px);\n}\n",""])},237:function(r,o,a){"use strict";var t=a(126);a.n(t).a},238:function(r,o,a){"use strict";a.r(o);var t=a(189),e=a(128);for(var n in e)"default"!==n&&function(r){a.d(o,r,function(){return e[r]})}(n);a(237);var i=a(2),d=Object(i.a)(e.default,t.a,t.b,!1,null,null,null);d.options.__file="src/js/components/grid-arrow.vue",o.default=d.exports}}]);