const { calculateResult } = require('./src/converter');
const { changeFlagImage } = require('./styles/flagsAnim');

const leftSelect = document.getElementById('leftSelect');
const rightSelect = document.getElementById('rightSelect');

if (leftSelect) {
  leftSelect.addEventListener('change', () => {
    calculateResult();
    changeFlagImage('flagImage1', 'leftSelect');
  });
}

if (rightSelect) {
  rightSelect.addEventListener('input', () => {
    calculateResult();
    changeFlagImage('flagImage2', 'rightSelect');
  });
}

window.onload = function () {
  changeFlagImage('flagImage1', 'leftSelect');
  changeFlagImage('flagImage2', 'rightSelect');
};
