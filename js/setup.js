'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIRECOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var setup = document.querySelector('.setup');

var similarListElement = setup.querySelector(newFunction());

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizardQuantity = 4;

var wizards = [];

for (var i = 0; i < wizardQuantity; i++) {

    wizards[i] = 
     {
      name: WIZARD_NAMES[getRandomNumber(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandomNumber(0, WIZARD_SURNAMES.length - 1)],
      coatColor: WIZARD_COATCOLORS[getRandomNumber(0, WIZARD_COATCOLORS.length - 1)],
      eyesColor: WIZARD_EYESCOLORS[getRandomNumber(0, WIZARD_EYESCOLORS.length - 1)]
     }
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');
function newFunction() {
    return '.setup-similar-list';
}
//4.1
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');


var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (document.querySelector('.setup-user-name') != document.activeElement) {
     closePopup();
    };
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
     closePopup();
  }
});

//4.2
var setupWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
setupWizardCoat.addEventListener('click', function(){
  setupWizardCoat.style.fill = WIZARD_COATCOLORS[getRandomNumber(0, WIZARD_COATCOLORS.length - 1)];
});

var setupWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
setupWizardEyes.addEventListener('click', function(){
  setupWizardEyes.style.fill = WIZARD_EYESCOLORS[getRandomNumber(0, WIZARD_EYESCOLORS.length - 1)];
});

WIZARD_FIRECOLORS

var setupWizardFire = document.querySelector('.setup-fireball-wrap');
setupWizardFire.addEventListener('click', function(){
 setupWizardFire.style = 'background: ' + WIZARD_FIRECOLORS[getRandomNumber(0, WIZARD_FIRECOLORS.length - 1)];
});