const rates = {};

async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();

  rates.USD = data.Valute.USD;
  rates.EUR = data.Valute.EUR;
}

function calculateResult() {
  const inputValue = parseFloat(input.value);
  const leftValue = leftSelect.value;
  const rightValue = rightSelect.value;

  if (leftValue === 'RUB') {
    result.value = (inputValue / rates[rightValue].Value).toFixed(2);
  } else if (rightValue === 'RUB') {
    result.value = (inputValue * rates[leftValue].Value).toFixed(2);
  } else {
    result.value = (inputValue * (rates[leftValue].Value / rates[rightValue].Value)).toFixed(2);
  }
}

function calculateReverseResult() {
  const resultValue = parseFloat(result.value);
  const leftValue = leftSelect.value;
  const rightValue = rightSelect.value;

  if (leftValue === 'RUB') {
    input.value = (resultValue * rates[rightValue].Value).toFixed(2);
  } else if (rightValue === 'RUB') {
    input.value = (resultValue / rates[leftValue].Value).toFixed(2);
  } else {
    input.value = (resultValue * (rates[rightValue].Value / rates[leftValue].Value)).toFixed(2);
  }
}

const input = document.getElementById('inputV');
const result = document.getElementById('resultV');
const leftSelect = document.getElementById('leftSelect');
const rightSelect = document.getElementById('rightSelect');

input.addEventListener('input', calculateResult);
result.addEventListener('input', calculateReverseResult);
leftSelect.addEventListener('change', function () {
  calculateResult();
  changeFlagImage('flagImage1', 'leftSelect');
});
rightSelect.addEventListener('input', function () {
  calculateResult();
  changeFlagImage('flagImage2', 'rightSelect');
});

getCurrencies();

window.onload = function () {
  changeFlagImage('flagImage1', 'leftSelect');
  changeFlagImage('flagImage2', 'rightSelect');
};
