'use strict';

var setupDiv = document.querySelector('.setup');
setupDiv.classList.remove('hidden');
var setupSimilar = document.querySelector('.setup-similar-list');

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

var COLOR_MAG = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_MAG = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var numberPins = 8;
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getExampleArray = function (number) {
  var array = [];
  for (var i = 1; i <= number; i++) {
    array[i] = {
      name: NAME_MAG[getRandomInt(0, NAME_MAG.length)] + ' ' + LASTNAME_MAG[getRandomInt(0, LASTNAME_MAG.length)],
      coatColor: COLOR_MAG[getRandomInt(0, COLOR_MAG.length)],
      eyesColor: EYES_MAG[getRandomInt(0, EYES_MAG.length)]
    };
  }
};

var templateWizard = document.querySelector('#similar-wizard-template');
var setupSimilarList = document.querySelector('.setup-similar-list');

var renderSimilarWizard = function (array) {
  var wizardElement = templateWizard.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = array.name;

  var wizardCoatFill = wizardElement.querySelector('#wizard-coat');
  wizardCoatFill.fill = array.coatColor;

  var wizardEyesFill = wizardElement.querySelector('#wizard-eyes');
  wizardEyesFill.fill = array.eyesColor;
};

var createSimilarWizard = function (array) {
  var wizardFragment = Document.createDocumentFragment();

  for (var i = 0; i < array.length - 1; i++) {
    var resultWizard = renderSimilarWizard(array[i]);
    wizardFragment.appendChild(resultWizard);
  }

  setupSimilarList.appendChild(wizardFragment);
};

var exampleArray = getExampleArray(numberPins);
createSimilarWizard(exampleArray);

setupSimilar.classList.remove('hidden');
