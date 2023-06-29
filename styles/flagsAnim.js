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
    alert('Выбрана одинаковая валюта в обоих полях | Selected the same currency in both fields');
    const { options } = select;
    const { selectedIndex } = select;
    const nextIndex = (selectedIndex + 1) % options.length;
    select.selectedIndex = nextIndex;
    changeFlagImage(flagId, selectId);
    const event = new Event('change');
    leftSelect.dispatchEvent(event);
  }
}

module.exports = { changeFlagImage };
