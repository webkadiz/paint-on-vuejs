import APP from "../class_app";
import TOOLS_COMPONENTS from "./class_tools_components";
import {
  get_height,
  get_width,
  get_x,
  get_y,
  get_left,
  get_top,
  visible,
  hidden,
  switcher,
  block,
  none,
  once
} from "../addition_function";
import "fabric";

export default class TOOL_ALL extends TOOLS_COMPONENTS {
  constructor(wrapper, func_panel) {
    super(wrapper, func_panel);

    this.default_settings = {
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      width: 0,
      height: 0,
      hoverCursor: "default"
    };

    this.move = {
      elem_setting: document.querySelector(".header-panel-settings-move"),
      elem: document.querySelector(".move-badge"),
      class_name: ".move-badge",
      event: "mouse:move",
      func_event: this.move_func_event.bind(this),
      func_start: this.move_func_start.bind(this),
      func_end: this.move_func_end.bind(this),
      settings: {}
    };
    this.pencil = {
      elem_setting: document.querySelector(".header-panel-settings-pencil"),
      elem: document.querySelector(".pencil-badge"),
      class_name: ".pencil-badge",
      event: "mouse:move",
      func_event: this.pencil_func_event.bind(this),
      func_start: this.pencil_func_start.bind(this),
      func_end: this.pencil_func_end.bind(this),
      settings: {
        width: 1,
        color: "#000"
      }
    };
    this.text = {
      elem_setting: document.querySelector(".header-panel-settings-text"),
      elem: document.querySelector(".text-badge"),
      class_name: ".text-badge",
      event: "mouse:down",
      func_event: this.text_func_event.bind(this),
      func_start: this.text_func_start.bind(this),
      func_end: this.text_func_end.bind(this),
      settings: {}
    };
    this.pouring = {
      elem_setting: document.querySelector(".header-panel-settings-pouring"),
      elem: document.querySelector(".pouring-badge"),
      class_name: ".pouring-badge",
      event: "mouse:down",
      func_event: this.pouring_func_event.bind(this),
      func_start: this.pouring_func_start.bind(this),
      func_end: this.pouring_func_end.bind(this),
      settings: {}
    };
    this.rubber = {
      elem_setting: document.querySelector(".header-panel-settings-rubber"),
      elem: document.querySelector(".rubber-badge"),
      class_name: ".rubber-badge",
      event: "mouse:move",
      func_event: this.rubber_func_event.bind(this),
      func_start: this.rubber_func_start.bind(this),
      func_end: this.rubber_func_end.bind(this),
      settings: {
        stroke: "#000"
      }
    };
    this.square = {
      elem_setting: document.querySelector(".header-panel-settings-square"),
      elem: document.querySelector(".square-badge"),
      class_name: ".square-badge",
      event: "mouse:down",
      func_event: this.square_func_event.bind(this),
      func_start: this.square_func_start.bind(this),
      func_end: this.square_func_end.bind(this),
      settings: {
        stroke: "#000"
      }
    };
    this.line = {
      elem_setting: document.querySelector(".header-panel-settings-line"),
      elem: document.querySelector(".line-badge"),
      class_name: ".line-badge",
      event: "mouse:down",
      func_event: this.line_func_event.bind(this),
      func_start: this.line_func_start.bind(this),
      func_end: this.line_func_end.bind(this),
      settings: {
        stroke: "#000"
      }
    };
  }

  // START
  move_func_start() {
    APP.canvas.on(this.move.event, this.move.func_event);

    APP.canvas.selection = true;

    APP.canvas.getActiveObjects().forEach(item => {});

    APP.canvas.forEachObject(item => {
      item.hasControls = true;
      item.hasBorders = true;
      item.hoverCursor = "move";
      item.lockMovementX = false;
      item.lockMovementY = false;
    });
  }
  pencil_func_start() {
    APP.canvas.selection = false;
    APP.canvas.isDrawingMode = true;
    APP.canvas.on(this.pencil.event, this.pencil.func_event);
  }
  text_func_start() {
    APP.canvas.on(this.text.event, this.text.func_event);
  }
  pouring_func_start() {
    APP.canvas.on(this.pouring.event, this.pouring.func_event);
  }
  rubber_func_start() {
    APP.canvas.on(this.rubber.event, this.rubber.func_event);
  }
  square_func_start() {
    APP.canvas.on(this.square.event, this.square.func_event);
  }
  line_func_start() {
    APP.canvas.on(this.line.event, this.line.func_event);
  }

  //END
  move_func_end() {
    APP.canvas.off(this.move.event, this.move.func_event);

    APP.canvas.forEachObject(item => {
      item.hasControls = false;
      item.hasBorders = false;
      item.hoverCursor = "default";
      item.lockMovementX = true;
      item.lockMovementY = true;
    });
  }
  pencil_func_end() {
    APP.canvas.off(this.pencil.event, this.pencil.func_event);

    APP.canvas.isDrawingMode = false;
  }
  text_func_end() {
    APP.canvas.off(this.text.event, this.text.func_event);

    try {
      APP.canvas.item(APP.canvas.size() - 1).exitEditing();
    } catch (e) {}
  }
  pouring_func_end() {
    APP.canvas.off(this.pouring.event, this.pouring.func_event);
  }
  rubber_func_end() {
    APP.canvas.off(this.rubber.event, this.rubber.func_event);
  }
  square_func_end() {
    APP.canvas.off(this.square.event, this.square.func_event);
  }
  line_func_end() {
    APP.canvas.off(this.line.event, this.line.func_event);
  }

  //EVENT
  move_func_event(e) {}
  pencil_func_event(props) {
    APP.canvas.freeDrawingBrush.width = this.pencil.settings.width;
    APP.canvas.freeDrawingBrush.color = this.pencil.settings.color;
  }
  text_func_event(props) {
    let x = get_x(props.e);
    let y = get_y(props.e);

    Object.assign(this.text.settings, this.default_settings, {
      left: x,
      top: y
    });

    let text = new fabric.IText("", this.text.settings);

    APP.canvas.add(text);

    text.enterEditing();

    text.on("editing:exited", () => {
      if (text.text === "") APP.canvas.remove(text);
    });
  }

  pouring_func_event(e) {}
  rubber_func_event({ e }) {
    let x = get_x(e);
    let y = get_y(e);

    this.rubber.settings.radius = 16;
    this.rubber.settings.left = x - 16;
    this.rubber.settings.top = y - 16;
    this.rubber.settings.fill = "transparent";

    let circle = new fabric.Circle(this.rubber.settings);

    APP.canvas.renderAll();

    console.log(123);

    circle.render(APP.canvas.getContext());
  }
  square_func_event(props) {
    APP.canvas.selection = false;

    let x1 = get_x(props.e);
    let y1 = get_y(props.e);

    Object.assign(this.square.settings, this.default_settings);

    this.square.settings.left = x1;
    this.square.settings.top = y1;

    let rect = new fabric.Rect(this.square.settings);

    APP.canvas.on("mouse:move", function(props) {
      let x = get_x(props.e);
      let y = get_y(props.e);
      let x2 = x - x1;
      let y2 = y - y1;

      if (x < x1 && y < y1) {
        rect.set({ left: x, top: y, width: Math.abs(x2), height: Math.abs(y2) });
      } else if (x < x1) {
        rect.set({ left: x, width: Math.abs(x2), height: Math.abs(y2) });
      } else if (y < y1) {
        rect.set({ top: y, width: Math.abs(x2), height: Math.abs(y2) });
      } else {
        rect.set({ width: x2, height: y2 });
      }

      APP.canvas.renderAll();

      rect.render(APP.canvas.getContext());
    });

    APP.canvas.on("mouse:up", function() {
      APP.canvas.add(rect);

      APP.canvas.renderAll();

      APP.canvas.off("mouse:move");
      APP.canvas.off("mouse:up");
    });
  }
  line_func_event(props) {
    APP.canvas.selection = false;

    let x = get_x(props.e);
    let y = get_y(props.e);

    Object.assign(this.line.settings, this.default_settings);

    let line = new fabric.Line([x, y, x, y], this.line.settings);

    APP.canvas.on("mouse:move", function(props) {
      let x = get_x(props.e);
      let y = get_y(props.e);

      line.set({ x2: x, y2: y });

      APP.canvas.renderAll();

      line.render(APP.canvas.getContext());
    });

    APP.canvas.on("mouse:up", function() {
      APP.canvas.add(line);

      APP.canvas.off("mouse:move");
      APP.canvas.off("mouse:up");
    });
  }
}
