"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _broadcastjs = require("broadcastjs");

var _broadcastjs2 = _interopRequireDefault(_broadcastjs);

var playDispatch = new _broadcastjs2["default"]();

var widget1 = new _broadcastjs.Widget("one", playDispatch);
var widget2 = new _broadcastjs.Widget("two", playDispatch);
var widget3 = new _broadcastjs.Widget("three", playDispatch);

widget1.subscribeWidget();
widget2.subscribeWidget();
widget3.subscribeWidget();

//console.log(playDispatch._showSubscribers().length)

playDispatch.pushMessage("hola");