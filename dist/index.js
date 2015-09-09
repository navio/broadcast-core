"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _widgetloader = require("./widgetloader");

var _widgetloader2 = _interopRequireDefault(_widgetloader);

var _broadcastjs = require("broadcastjs");

var _broadcastjs2 = _interopRequireDefault(_broadcastjs);

var playDispatch = new _broadcastjs2["default"]();
var widgetPath = "./widgets";

function boot(dispatcher, path) {
  var widgetsToStart = (0, _widgetloader2["default"])(path).widgetsInit;
  var widgets = [];
  var i = 0,
      max = widgetsToStart.length;
  for (; i < max; i++) {
    widgets.push(require(widgetsToStart[i])(dispatcher));
  }
  return widgets;
}

function subscribeWidgets(widgets) {
  widgets.forEach(function (widget) {
    return widget.subscribeWidget();
  });
}

function sendBeat(dispatcher, message) {
  dispatcher.pushMessage(message);
}