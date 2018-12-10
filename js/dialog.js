'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var data = setup.querySelector('.setup-user-name');
  var icon = document.querySelector('.setup-open-icon');

  var dialogHandler = setup.querySelector('.upload');
  var save = setup.querySelector('.setup-submit');
  var form = setup.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, popupClose);
  };

  var popupOpen = function () {
    if (setup.classList.contains('hidden')) {
      setup.classList.remove('hidden');
      document.addEventListener('keydown', onPopupEscPress);

      setupWizardCoat.addEventListener('click', changeWizardAttributes);
      setupWizardEyes.addEventListener('click', changeWizardAttributes);
      setupFireball.addEventListener('click', changeWizardAttributes);

      setup.style = '';
    }
  };

  var popupClose = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);

    setupWizardCoat.removeEventListener('click', changeWizardAttributes);
    setupWizardEyes.removeEventListener('click', changeWizardAttributes);
    setupFireball.removeEventListener('click', changeWizardAttributes);
  };

  setupOpen.addEventListener('click', function () {
    popupOpen();
  });

  icon.addEventListener('focus', function () {
    icon.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, popupOpen);
    });
  });

  setupClose.addEventListener('click', function () {
    popupClose();
  });

  setupClose.addEventListener('focus', function () {
    setupClose.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, popupClose);
    });
  });

  data.addEventListener('focus', function () {
    document.addEventListener('keydown', function (evt) {
      if (window.util.isEscEvent(evt, popupClose)) {
        evt.stopPropagation();
      }
    });
  });

  save.addEventListener('focus', function () {
    save.addEventListener('keydown', function (evt) {
      if (window.util.isEnterEvent(evt)) {
        // eslint-disable-next-line no-unused-expressions
        form.submit;
      }
    });
  });

  var changeWizardAttributes = function (element, input, cssProperty, array) {
    element.addEventListener('click', function () {
      var color = array[window.util.getRandomInt(0, array.length)];
      element.style[cssProperty] = color;
      input.value = color;
    });
  };

  var setupWizardCoat = setup.querySelector('.wizard-coat');
  var setupWizardCoatInput = setup.querySelector('input[name = coat-color]');
  changeWizardAttributes(setupWizardCoat, setupWizardCoatInput, 'fill', window.color.COLOR_MAG);

  var setupWizardEyes = setup.querySelector('.wizard-eyes');
  var setupWizardEyesInput = setup.querySelector('input[name = eyes-color]');
  changeWizardAttributes(setupWizardEyes, setupWizardEyesInput, 'fill', window.color.EYES_MAG);

  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var setupFireballInput = setup.querySelector('input[name = fireball-color]');
  changeWizardAttributes(setupFireball, setupFireballInput, 'backgroundColor', window.color.FIREBALLS_COLORS);

  dialogHandler.addEventListener('mousedown', function (event) {
    event.preventDefault();

    var startCoords = {
      x: event.clientX,
      y: event.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
