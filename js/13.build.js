(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{136:function(t,e,s){var i=s(246);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(0).default)("26102f7e",i,!1,{})},140:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};e.default={components:{CanvasCoords:()=>s.e(11).then(s.bind(null,250))},computed:i({},Vuex.mapState(["canvas"]),Vuex.mapGetters(["getCanvasWidth","getCanvasHeight"])),methods:{width(){if(this.$el)return this.$el.clientWidth-20},height(){if(this.$el)return this.$el.clientHeight-20},init(){let t=new fabric.Rect({width:this.canvas.width,height:this.canvas.height,strokeWidth:0}),e=new fabric.StaticCanvas(document.createElement("canvas"),{width:10,height:10});e.add(new fabric.Rect({left:0,top:0,width:5,height:5,fill:"#e2e2e2",strokeWidth:0}),new fabric.Rect({left:5,top:0,width:5,height:5,fill:"white",strokeWidth:0}),new fabric.Rect({left:0,top:5,width:5,height:5,fill:"white",strokeWidth:0}),new fabric.Rect({left:5,top:5,width:5,height:5,fill:"#e2e2e2",strokeWidth:0})),this.canvas.transparent=e,t.setPatternFill({source:e.getElement(),repeat:"repeat"}),this.c.add(t),t.center(),t.sendToBack(),this.c.requestRenderAll();let s=new fabric.Rect({width:this.canvas.width,height:this.canvas.height,fill:this.canvas.background}),i=this.canvas.background=new fabric.Group([s],{selectable:!1,hasControls:!1,hasBorders:!1,lockMovementX:!0,lockMovementY:!0,hoverCursor:"default",strokeWidth:0});if(i.type="background",this.c.add(i),i.center(),this.canvas.file){let t=new fabric.Group([this.canvas.file]);this.c.add(t),t.center(),this.c.requestRenderAll()}},updateSize(){let t,e,s,i,n=this.c.viewportTransform,a=this.c.item(0).getBoundingRect();t=n[5]+200-a.top,e=n[4]+200-a.left,s=t-a.height,i=e-a.width,this.canvas.bounds={top:t,bottom:s,left:e,right:i,width:a.width,height:a.height}}},mounted(){bus.$on("updateSize",this.updateSize);let t=1;this.canvas.c=this.c=new fabric.Canvas(this.$refs.canvas,{width:this.getCanvasWidth,height:this.getCanvasHeight,skipTargetFind:!0,selection:!1,preserveObjectStacking:!0,fireRightClick:!0,fireMiddleClick:!0,centeredKey:"ctrlKey",altSelectionKey:"ctrlKey"}),this.canvas.wrapper=this.$el,this.c.on("selection:created",t=>{t.target.unactive||(this.canvas.activeLayer=this.canvas.layers.find(e=>e.group===t.target))}),this.c.on("selection:updated",t=>{t.target.unactive||(this.canvas.activeLayer=this.canvas.layers.find(e=>e.group===t.target))}),this.c.on("selection:cleared",t=>{console.log(t,"selection cleared")}),this.c.on("object:added",e=>{let s,i,n=e.target,a=!1;"background"===n.type?(s=`Фон ${this.canvas.layers.length+1}`,a=!0):"pencil"===n.type?(s=`Карандаш ${this.canvas.layers.length+1}`,a=!0):"brush"===n.type?(s=`Карандаш ${this.canvas.layers.length+1}`,a=!0):"text"===n.type?(s=`Текст ${this.canvas.layers.length+1}`,a=!0):"square"===n.type?(s=`Прямоугольник ${this.canvas.layers.length+1}`,a=!0):"lines"===n.type?(s=`Линия ${this.canvas.layers.length+1}`,a=!0):"empty"===n.type&&(s=`Пустой ${this.canvas.layers.length+1}`,a=!0),a&&(i={object:n.object,type:n.type,group:n,title:s,id:t++,visible:!0},this.canvas.layers.push(i),this.canvas.activeLayer=i,this.c.setActiveObject(i.group),this.c.requestRenderAll())}),this.c.on("object:removed",t=>{}),this.c.on("mouse:down",t=>{let e,s,i,n;t.e.ctrlKey&&3===t.button&&(i=t.e.clientX,n=t.e.clientY,this.c.on("mouse:move",e=(t=>{this.c.viewportTransform[4]+=t.e.clientX-i,this.c.viewportTransform[5]+=t.e.clientY-n,this.c.requestRenderAll(),i=t.e.clientX,n=t.e.clientY})),this.c.on("mouse:up",s=(t=>{this.c.off("mouse:move",e),this.c.off("mouse:up",s)})))}),this.init(),this.updateSize(),this.ps=this.canvas.ps=new PerfectScrollbar(this.$el),this.$el.addEventListener("ps-scroll-x",()=>{let t=this.$el.scrollWidth-this.$el.clientWidth,e=this.$el.scrollLeft/t*this.canvas.width*this.canvas.zoom,s=this.c.viewportTransform;s[4]=this.canvas.bounds.left-e,this.canvas.c.setViewportTransform(s),this.canvas.c.wrapperEl.style.left=this.$el.scrollLeft+COORDS_SIZE+"px",this.scrollLeft=this.$el.scrollLeft}),this.$el.addEventListener("ps-scroll-y",()=>{let t=this.$el.scrollHeight-this.$el.clientHeight,e=this.$el.scrollTop/t*this.canvas.height*this.canvas.zoom,s=this.c.viewportTransform;s[5]=this.canvas.bounds.top-e,this.canvas.c.setViewportTransform(s),this.canvas.c.wrapperEl.style.top=this.$el.scrollTop+COORDS_SIZE+"px",this.scrollTop=this.$el.scrollTop}),this.ps.update(),bus.$emit("toolEventActive")},data:()=>({scrollTop:0,scrollLeft:0})}},141:function(t,e,s){"use strict";s.r(e);var i=s(140),n=s.n(i);for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);e.default=n.a},185:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvas-wrapper"},[e("CanvasCoords",{attrs:{top:this.scrollTop,axis:"x"}}),this._v(" "),e("CanvasCoords",{attrs:{left:this.scrollLeft,axis:"y"}}),this._v(" "),e("canvas",{ref:"canvas",staticClass:"no-invert canvas"})],1)},n=[];i._withStripped=!0,s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n})},246:function(t,e,s){(t.exports=s(1)(!1)).push([t.i,"\n.canvas-wrapper {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n}\n.canvas-wrapper .canvas-wrapper-inner {\n    position: absolute;\n    display: inline-block;\n}\n.canvas-container {\n  left: 20px;\n  top: 20px;\n}\n.coords-x-wrapper, .coords-y-wrapper {\n  font-size: .7rem;\n  line-height: 30px;\n  display: flex;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 20;\n  height: 20px;\n  width: 100%;\n  background: var(--bg-color);\n  color: var(--text-color);\n}\n.coords-x-wrapper .coords-x, .coords-y-wrapper .coords-x {\n    width: calc(100% - 20px);\n    display: flex;\n}\n.coords-x-wrapper .coords-x div, .coords-y-wrapper .coords-x div {\n      flex-shrink: 0;\n      height: 20px;\n      text-indent: 2px;\n      border-left: 1px solid var(--border-color);\n}\n.coords-y-wrapper {\n  line-height: inherit;\n  position: absolute;\n  z-index: 10;\n  flex-direction: column;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 20px;\n}\n.coords-y-wrapper .coords-y div {\n    flex-shrink: 0;\n    white-space: pre-wrap;\n    text-align: center;\n    border-top: 1px solid var(--border-color);\n    width: 20px;\n}\n",""])},247:function(t,e,s){"use strict";var i=s(136);s.n(i).a},251:function(t,e,s){"use strict";s.r(e);var i=s(185),n=s(141);for(var a in n)"default"!==a&&function(t){s.d(e,t,function(){return n[t]})}(a);s(247);var r=s(2),o=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);o.options.__file="src/js/components/canvas.vue",e.default=o.exports}}]);