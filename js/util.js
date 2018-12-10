'use strict';

(function () {
  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  window.util = {
    ESC_KEY: 27,
    ENTER_KEY: 13,

    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEY) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEY) {
        action();
      }
    },

    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  };
})();
