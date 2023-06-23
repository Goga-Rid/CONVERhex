function swapSelectedOptions() {
  const leftSelect = document.getElementById('leftSelect');
  const rightSelect = document.getElementById('rightSelect');

  const value1 = leftSelect.value;
  const value2 = rightSelect.value;

  document.getElementById('leftSelect').value = value2;
  document.getElementById('rightSelect').value = value1;
}
