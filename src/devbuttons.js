function swapSelectedOptions() {
  const leftSelect = document.getElementById('leftSelect');
  const rightSelect = document.getElementById('rightSelect');

  const value1 = leftSelect.value;
  const value2 = rightSelect.value;

  leftSelect.value = value2;
  rightSelect.value = value1;
}
