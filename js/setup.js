'use strict';

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

var FIREBALLS_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ESC_KEY = 27;
var ENTER_KEY = 13;

var numberWizards = 4;
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getExampleArray = function (number) {
  var array = [];
  for (var i = 0; i < number; i++) {
    array[i] = {
      name: NAME_MAG[getRandomInt(0, NAME_MAG.length)] + ' ' + LASTNAME_MAG[getRandomInt(0, LASTNAME_MAG.length)],
      coatColor: COLOR_MAG[getRandomInt(0, COLOR_MAG.length)],
      eyesColor: EYES_MAG[getRandomInt(0, EYES_MAG.length)]
    };
  }
  return array;
};

var randomWizardOption = getExampleArray(numberWizards);

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var icon = document.querySelector('.setup-open-icon');
var data = setup.querySelector('.setup-user-name');
var save = setup.querySelector('.setup-submit');
var form = setup.querySelector('.setup-wizard-form');
var setupSimilar = setup.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var templateWizard = document.querySelector('#similar-wizard-template');
var templateWizardItem = templateWizard.content.querySelector('.setup-similar-item');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

icon.addEventListener('focus', function () {
  icon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      setup.classList.remove('hidden');
    }
  });
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupClose.addEventListener('focus', function () {
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      setup.classList.add('hidden');
    }
  });
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEY && document.activeElement !== data) {
    setup.classList.add('hidden');
  }
});

save.addEventListener('focus', function () {
  save.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      // eslint-disable-next-line no-unused-expressions
      form.submit;
    }
  });
});

var changeWizardAttributes = function (element, input, cssProperty, array) {
  element.addEventListener('click', function () {
    var color = array[getRandomInt(0, array.length)];
    element.style[cssProperty] = color;
    input.value = color;
  });
};

var setupWizardCoat = setup.querySelector('.wizard-coat');
var setupWizardCoatInput = setup.querySelector('input[name = coat-color]');
changeWizardAttributes(setupWizardCoat, setupWizardCoatInput, 'fill', COLOR_MAG);

var setupWizardEyes = setup.querySelector('.wizard-eyes');
var setupWizardEyesInput = setup.querySelector('input[name = eyes-color]');
changeWizardAttributes(setupWizardEyes, setupWizardEyesInput, 'fill', EYES_MAG);

var setupFireball = setup.querySelector('.setup-fireball-wrap');
var setupFireballInput = setup.querySelector('input[name = fireball-color]');
changeWizardAttributes(setupFireball, setupFireballInput, 'backgroundColor', FIREBALLS_COLORS);

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

createSimilarWizard(randomWizardOption);

setupSimilar.classList.remove('hidden');
