'use strict';
(function () {
  var NAME_MAG = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var LASTNAME_MAG = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var getExampleArray = function (number) {
    var array = [];
    for (var i = 0; i < number; i++) {
      array[i] = {
        name: NAME_MAG[window.util.getRandomInt(0, NAME_MAG.length)] + ' ' + LASTNAME_MAG[window.util.getRandomInt(0, LASTNAME_MAG.length)],
        coatColor: window.color.COLOR_MAG[window.util.getRandomInt(0, window.color.COLOR_MAG.length)],
        eyesColor: window.color.EYES_MAG[window.util.getRandomInt(0, window.color.EYES_MAG.length)]
      };
    }
    return array;
  };

  var numberWizards = 4;
  var randomWizards = getExampleArray(numberWizards);

  var setup = document.querySelector('.setup');
  var templateWizard = document.querySelector('#similar-wizard-template');
  var templateWizardItem = templateWizard.content.querySelector('.setup-similar-item');
  var setupSimilar = setup.querySelector('.setup-similar');
  var setupSimilarList = document.querySelector('.setup-similar-list');

  var renderSimilarWizard = function (arrayWizards) {
    var wizardElement = templateWizardItem.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = arrayWizards.name;

    var wizardCoatFill = wizardElement.querySelector('.wizard-coat');
    wizardCoatFill.style.fill = arrayWizards.coatColor;

    var wizardEyesFill = wizardElement.querySelector('.wizard-eyes');
    wizardEyesFill.style.fill = arrayWizards.eyesColor;

    return wizardElement;
  };

  var createSimilarWizard = function (arrayWizards) {
    var wizardFragment = document.createDocumentFragment();

    for (var i = 0; i < arrayWizards.length; i++) {
      var resultWizard = renderSimilarWizard(arrayWizards[i]);
      wizardFragment.appendChild(resultWizard);
    }

    setupSimilarList.appendChild(wizardFragment);
    return wizardFragment;
  };

  createSimilarWizard(randomWizards);

  setupSimilar.classList.remove('hidden');

})();
