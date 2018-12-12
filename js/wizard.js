'use strict';
(function () {
  var SIMILAR_WIZARDS_NUMBER = 4;

  var setup = document.querySelector('.setup');
  var templateWizard = document.querySelector('#similar-wizard-template');
  var templateWizardItem = templateWizard.content.querySelector('.setup-similar-item');
  var setupSimilar = setup.querySelector('.setup-similar');
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var form = setup.querySelector('.setup-wizard-form');

  var renderSimilarWizard = function (arrayWizards) {

    var wizardElement = templateWizardItem.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arrayWizards.name;

    var wizardCoatFill = wizardElement.querySelector('.wizard-coat');
    wizardCoatFill.style.fill = arrayWizards.colorCoat;

    var wizardEyesFill = wizardElement.querySelector('.wizard-eyes');
    wizardEyesFill.style.fill = arrayWizards.colorEyes;
    return wizardElement;
  };

  var createSimilarWizard = function (arrayWizards) {
    var wizardFragment = document.createDocumentFragment();

    for (var i = 0; i < SIMILAR_WIZARDS_NUMBER; i++) {
      var resultWizard = renderSimilarWizard(arrayWizards[i]);
      wizardFragment.appendChild(resultWizard);
    }

    setupSimilarList.appendChild(wizardFragment);
    return wizardFragment;
  };

  var successHandler = function (wizards) {
    createSimilarWizard(wizards);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('error-message');
    node.style = 'z-index: 10; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '40px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  setupSimilar.classList.remove('hidden');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

})();
