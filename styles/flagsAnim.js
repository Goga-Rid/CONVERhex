window.onload = function () {
  changeFlagImage('flagImage1');
  changeFlagImage('flagImage2');
};

function changeFlagImage(flagId, selectId) {
  const select = document.getElementById(selectId);
  const flagImage = document.getElementById(flagId);
  const selectedValue = select.value;

  let imagePath;

  if (selectedValue === 'RUB') {
    imagePath = './images/flags/RUB.png';
  } else if (selectedValue === 'USD') {
    imagePath = './images/flags/USD.png';
  } else if (selectedValue === 'EUR') {
    imagePath = './images/flags/EUR.png';
  }

  flagImage.src = imagePath;

  const otherSelectId = selectId === 'leftSelect' ? 'rightSelect' : 'leftSelect';
  const otherSelect = document.getElementById(otherSelectId);
  const otherSelectedValue = otherSelect.value;

  if (selectedValue === otherSelectedValue) {
    alert('Выбрана одинаковая валюта в обоих полях');
  }
}


