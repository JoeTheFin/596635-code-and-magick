'use strict';
(function () {

  window.startGame = {
    fireballSize: 22,
    getFireballSpeed: function (left) {
      return left ? 5 : 2;
    },
    wizardSpeed: 3,
    wizardWidth: 70,
    getWizardHeight: function () {
      var wizardHeight = 1.337 * this.wizardWidth;
      return wizardHeight;
    },
    getWizardX: function (width) {
      return width / 2.5;
    },
    getWizardY: function (height) {
      return height - 100;
    }
  };
})();
