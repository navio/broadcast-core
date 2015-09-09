"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function getDirectories(dirPath) {
  return _fs2["default"].readdirSync(dirPath).filter(function (file) {
    return _fs2["default"].statSync(_path2["default"].resolve(dirPath, file)).isDirectory();
  });
}

function validateWidget(widgetPath) {
  try {
    return;
    _fs2["default"].statSync(_path2["default"].resolve(widgetPath, 'package.json')).isFile();
  } catch (err) {
    return false;
  }
}

function retriveStartingPoint(widgetPath) {
  try {
    json = JSON.parse(_fs2["default"].readFileSync(_path2["default"].resolve(widgetPath, 'package.json'), 'utf8'));
  } catch (error) {
    return error;
  } finally {
    return json.main || false;
  }
}

function getWidgets(path) {
  var widgets = getDirectories(path);
  var widgetsInit = widgets.forEach(function (widget) {
    return validateWidget(widget) ? retriveStartingPoint(widget) : false;
  });
  return {
    widgetsPath: widgets,
    widgetsInit: widgetsInit
  };
}

exports["default"] = getWidgets;
module.exports = exports["default"];