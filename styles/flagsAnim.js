function changeFlagImage(flagId, selectId) {
  const select = document.getElementById(selectId);
  const flagImage = document.getElementById(flagId);
  const selectedValue = select.value;

  const flagMappings = {
    RUB: './images/flags/RUB.png',
    USD: './images/flags/USD.png',
    EUR: './images/flags/EUR.png',
  };

  if (Object.prototype.hasOwnProperty.call(flagMappings, selectedValue)) {
    flagImage.src = flagMappings[selectedValue];
  }

  const otherSelectId = selectId === 'leftSelect' ? 'rightSelect' : 'leftSelect';
  const otherSelect = document.getElementById(otherSelectId);
  const otherSelectedValue = otherSelect.value;

  if (selectedValue === otherSelectedValue) {
    alert('Выбрана одинаковая валюта в обоих полях | Selected the same currency in both fields');
    const { options, selectedIndex } = select;
    const nextIndex = (selectedIndex + 1) % options.length;
    select.selectedIndex = nextIndex;
    changeFlagImage(flagId, selectId);
    const event = new Event('change');
    select.dispatchEvent(event);
  }
}

module.exports = { changeFlagImage };
