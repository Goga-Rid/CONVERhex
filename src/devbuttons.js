function changeOptionAndImage() {
  const leftSelect = document.getElementById('leftSelect');
  const rightSelect = document.getElementById('rightSelect');
  const flagImage1 = document.getElementById('flagImage1');
  const flagImage2 = document.getElementById('flagImage2');

  const leftValue = leftSelect.value;
  const rightValue = rightSelect.value;

  leftSelect.value = rightValue;
  rightSelect.value = leftValue;

  flagImage1.src = `../images/flags/${rightValue}.png`;
  flagImage2.src = `../images/flags/${leftValue}.png`;

  const input = document.querySelector('#inputV');
  const result = document.querySelector('#resultV');

  const tempInput = input.value;
  const tempResult = result.value;
  input.value = tempResult;
  result.value = tempInput;
}
