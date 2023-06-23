function changeOptionAndImage() {
  var leftSelect = document.getElementById('leftSelect');
  var rightSelect = document.getElementById('rightSelect');
  var flagImage1 = document.getElementById('flagImage1');
  var flagImage2 = document.getElementById('flagImage2');

  // Получаем выбранное значение в левом и правом селекторах
  var leftValue = leftSelect.value;
  var rightValue = rightSelect.value;

  // Меняем значение выбранного элемента в левом селекторе
  leftSelect.value = rightValue;
  // Меняем значение выбранного элемента в правом селекторе
  rightSelect.value = leftValue;

  // Меняем картинку, связанную с выбранным значением в левом селекторе
  flagImage1.src = './images/flags/' + rightValue + '.png';
  // Меняем картинку, связанную с выбранным значением в правом селекторе
  flagImage2.src = './images/flags/' + leftValue + '.png';

  const input = document.querySelector('#inputV');
  const result = document.querySelector('#resultV');

  const tempInput = input.value;
  const tempResult = result.value;
  input.value = tempResult;
  result.value = tempInput;
}
