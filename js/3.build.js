(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(t,n,e){var o=e(210);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(0).default)("0eae2ef8",o,!1,{})},129:function(t,n,e){var o=e(239);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(0).default)("41147d28",o,!1,{})},130:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["TopNot","BottomNot","LeftNot","RightNot"],mounted(){$(".casing",this.$el).unwrap(),Interact(".casing").dropzone({max:1/0,maxPerElement:1/0,accept:".grid-item",ondrop:t=>{let n,e,o=t.relatedTarget,i=t.target,r=o.getAttribute("data-component"),a=i.parentElement.getAttribute("data-component");i.classList.contains("casing-right")?[n,e]=[1,"COL"]:i.classList.contains("casing-left")?[n,e]=[0,"COL"]:i.classList.contains("casing-bottom")?[n,e]=[1,"ROW"]:i.classList.contains("casing-top")&&([n,e]=[0,"ROW"]),this.$store.commit({type:"loopGrid",component:r,dropzoneComponent:a,flagPlace:n,flagGrid:e}),$(o).css({opacity:"1",transform:"translate(0, 0)"})},ondragenter:t=>t.relatedTarget.style.opacity=".5",ondragleave:t=>t.relatedTarget.style.opacity="1"})}}},131:function(t,n,e){"use strict";e.r(n);var o=e(130),i=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n.default=i.a},132:function(t,n,e){var o=e(241);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(0).default)("52253dec",o,!1,{})},142:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={components:{Canvas:()=>e.e(13).then(e.bind(null,251)),CanvasTitle:()=>e.e(12).then(e.bind(null,245))},computed:Vuex.mapState(["canvases","canvas"])}},143:function(t,n,e){"use strict";e.r(n);var o=e(142),i=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n.default=i.a},144:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i=a(e(252)),r=a(e(175));function a(t){return t&&t.__esModule?t:{default:t}}n.default={components:{CanvasWrapper:i.default,Casing:r.default,GridArrow:()=>e.e(23).then(e.bind(null,238)),DragTools:()=>e.e(22).then(e.bind(null,235)),FoldTools:()=>e.e(21).then(e.bind(null,232)),TransformTools:()=>e.e(20).then(e.bind(null,229)),CommonTools:()=>e.e(19).then(e.bind(null,226)),TextTools:()=>e.e(18).then(e.bind(null,223)),LayerTools:()=>e.e(17).then(e.bind(null,220)),PencilTools:()=>e.e(16).then(e.bind(null,217)),FillTools:()=>e.e(15).then(e.bind(null,214))},props:["component","rowsAmount","isFold","isActive","title"],mounted(){bus.$on("switchArrow",this.switchArrow),"CanvasWrapper"!==this.component&&Interact(this.$el).draggable({max:1/0,maxPerElement:1/0,allowFrom:".drag, .in-grid, .fold-wrapper",inertia:{smoothEndDuration:1e3},restrict:{restriction:"parent"},onmove(t){let n=t.target,e=(parseFloat(n.getAttribute("data-x"))||0)+t.dx,o=(parseFloat(n.getAttribute("data-y"))||0)+t.dy;n.style.webkitTransform=n.style.transform=`translate(${e}px, ${o}px)`,n.setAttribute("data-x",e),n.setAttribute("data-y",o)},onstart:t=>{let n=t.target;if(n.classList.contains("in-grid")){let t,e=n.getAttribute("data-component");this.getGrid.forEach(n=>{(t=n.find(t=>t.component===e))&&(1!==n.length?n.remove(t):this.getGrid.remove(n),setLocalStorageField("grids",this.$store.state.grids))}),n.setAttribute("data-x",n.getBoundingClientRect().left),n.setAttribute("data-y",n.getBoundingClientRect().top)}n.style.pointerEvents="none",$(".casing").css("z-index",1e9)},onend:t=>{t.target.style.pointerEvents="auto",$(".casing").css("z-index",-100)}})},computed:o({inGrid(){for(let t of this.getGrid)if(~_.findIndex(t,{component:this.component}))return!0;return!1},computeRow(){for(let t of this.getGrid){let n,e=this.rowsAmount/t.length;if(~(n=_.findIndex(t,{component:this.component})))return`${n*e+1} / ${n*e+e+1}`}},computeDisplayComponent(){return!this.isFold||this.switcher}},Vuex.mapGetters(["getGrid"])),methods:{computePosition(){if(this.$el&&this.isFold)return{left:this.$el.getBoundingClientRect().left<$("html").width()/2?"103%":"",right:this.$el.getBoundingClientRect().left>$("html").width()/2?"103%":""}},switchArrow(t){t&&!t.find(t=>t.component===this.component)||(this.switcher=!!this.isFold,this.$emit("fold"))},switcherArrowInGrid(){bus.$emit("switchArrow",this.getGrid.find(t=>t[0].component===this.component))}},data:()=>({switcher:!1})}},145:function(t,n,e){"use strict";e.r(n);var o=e(144),i=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n.default=i.a},175:function(t,n,e){"use strict";e.r(n);var o=e(187),i=e(131);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e(240);var a=e(2),s=Object(a.a)(i.default,o.a,o.b,!1,null,null,null);s.options.__file="src/js/components/casing.vue",n.default=s.exports},187:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.LeftNot?t._e():e("div",{staticClass:"casing casing-left"}),t._v(" "),t.RightNot?t._e():e("div",{staticClass:"casing casing-right"}),t._v(" "),t.BottomNot?t._e():e("div",{staticClass:"casing casing-bottom"}),t._v(" "),t.TopNot?t._e():e("div",{staticClass:"casing casing-top"})])},i=[];o._withStripped=!0,e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},193:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"canvas-wrapper-outer"},[t.canvases.length?e("div",{staticClass:"canvas-wrapper-title"},t._l(t.canvases,function(n){return e("CanvasTitle",{key:n.id,class:{active:t.canvas.title===n.title},attrs:{title:n.title}})})):t._e(),t._v(" "),t._l(t.canvases,function(n){return e("Canvas",{directives:[{name:"show",rawName:"v-show",value:t.canvas.title===n.title,expression:"canvas.title === canvasAlias.title"}],key:n.id})})],2)},i=[];o._withStripped=!0,e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},200:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["grid-item",{"in-grid":t.inGrid,"in-fold":t.isFold}],style:{"grid-row":t.computeRow},attrs:{"data-component":t.component},on:{mousedown:function(n){t.$emit("mousedown")}}},["CanvasWrapper"!==t.component&&t.inGrid&&t.getGrid.find(function(n){return n[0].component===t.component})?e("GridArrow",{class:{fold:t.isFold},attrs:{component:t.component},on:{switcherArrowInGrid:t.switcherArrowInGrid}}):t._e(),t._v(" "),"CanvasWrapper"===t.component||t.inGrid?t._e():e("DragTools",{class:{fold:t.isFold},on:{closeComponent:function(n){t.$emit("closeComponent")},switchArrow:t.switchArrow}}),t._v(" "),e("keep-alive",[e(t.component,{directives:[{name:"scroll",rawName:"v-scroll"},{name:"show",rawName:"v-show",value:t.computeDisplayComponent,expression:"computeDisplayComponent"}],ref:"component",tag:"component",class:[{"component-fold":t.isFold},{tools:"CanvasWrapper"!==t.component}],style:t.computePosition()})],1),t._v(" "),t.isFold?e("FoldTools",{attrs:{title:t.title,active:t.switcher},on:{switcher:function(n){t.switcher=!t.switcher}}}):t._e(),t._v(" "),"CanvasWrapper"!==t.component?e("Casing"):"CanvasWrapper"===t.component?e("Casing",{attrs:{BottomNot:"true",TopNot:"true"}}):t._e()],1)},i=[];o._withStripped=!0,e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},210:function(t,n,e){(t.exports=e(1)(!1)).push([t.i,'\n.grid-item {\n  transition: opacity .8s;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  border-radius: 3px;\n  box-shadow: 0 0px 14px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n  border: 1px solid var(--border-color);\n}\n.grid-item .casing {\n    display: none;\n}\n.grid-item .component-fold {\n    position: absolute;\n    top: 14px;\n    border: 1px solid var(--border-color);\n}\n.grid-item.in-grid {\n  overflow: hidden;\n  position: relative;\n  border-radius: 0;\n  box-shadow: none;\n  background: var(--main-color);\n  border-top: none;\n}\n.grid-item.in-grid .casing {\n    display: block;\n}\n.grid-item.in-grid .tools {\n    border-bottom: 1px solid var(--border-color);\n}\n.grid-item.in-grid .component-fold {\n    height: auto;\n    top: 0;\n}\n.grid-item.in-grid .fold-wrapper {\n    height: 100%;\n}\n.grid-item.in-grid.in-fold {\n  overflow: visible;\n}\n.grid-item.in-grid[data-component="CanvasWrapper"] {\n  background: transparent;\n  border: none;\n}\n',""])},211:function(t,n,e){"use strict";var o=e(101);e.n(o).a},239:function(t,n,e){(t.exports=e(1)(!1)).push([t.i,"\n.casing {\n  z-index: -10;\n  position: absolute;\n  opacity: 0;\n  box-shadow: 0 0 80px 5px blue;\n  background: rgba(0, 0, 255, 0.4);\n  transition: .8s .2s;\n}\n.casing-left {\n    left: 0;\n    top: 0;\n    width: 10px;\n    height: 100%;\n}\n.casing-right {\n    right: 0;\n    top: 0;\n    width: 10px;\n    height: 100%;\n}\n.casing-top {\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 10px;\n}\n.casing-bottom {\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 10px;\n}\n.casing:hover {\n  opacity: 1;\n}\n",""])},240:function(t,n,e){"use strict";var o=e(129);e.n(o).a},241:function(t,n,e){(t.exports=e(1)(!1)).push([t.i,"\n.canvas-wrapper-outer {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.canvas-wrapper-outer .canvas-wrapper-title {\n    height: 25px;\n    font-size: 1.2rem;\n    line-height: 25px;\n    background: var(--bg-color);\n    border-bottom: 1px solid var(--border-color);\n}\n",""])},242:function(t,n,e){"use strict";var o=e(132);e.n(o).a},252:function(t,n,e){"use strict";e.r(n);var o=e(193),i=e(143);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e(242);var a=e(2),s=Object(a.a)(i.default,o.a,o.b,!1,null,null,null);s.options.__file="src/js/components/canvas-wrapper.vue",n.default=s.exports},90:function(t,n,e){"use strict";e.r(n);var o=e(200),i=e(145);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e(211);var a=e(2),s=Object(a.a)(i.default,o.a,o.b,!1,null,null,null);s.options.__file="src/js/components/grid-item.vue",n.default=s.exports}}]);