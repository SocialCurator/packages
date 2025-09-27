"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transition = require("./transition");

Object.keys(_transition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transition[key];
    }
  });
});

//# sourceMappingURL=index.js.map