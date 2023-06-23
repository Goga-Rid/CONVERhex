function swapSelectedOptions() {
  const leftSelect = document.getElementById('leftSelect');
  const rightSelect = document.getElementById('rightSelect');

  const tempOption = leftSelect.options[leftSelect.selectedIndex].value;
  leftSelect.value = rightSelect.options[rightSelect.selectedIndex].value;
  rightSelect.value = tempOption;

  const leftInput = document.getElementById('currencies');
  const rightInput = document.getElementById('base_currency');
  const tempValue = leftInput.value;
  leftInput.value = rightInput.value;
  rightInput.value = tempValue;
}
