const rates = {};

async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;

  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
}

getCurrencies();

const input = document.querySelector('#inputV');
const result = document.querySelector('#resultV');
const leftSelect = document.querySelector('#leftSelect');
const rightSelect = document.querySelector('#rightSelect');

input.oninput = function () {
  if (leftSelect.value === 'RUB') {
    result.value = (parseFloat(input.value) / rates[rightSelect.value].Value).toFixed(2);
  }
  if (rightSelect.value === 'RUB') {
    result.value = (parseFloat(input.value * rates[leftSelect.value].Value)).toFixed(2);
  } else {
    result.value = (parseFloat(input.value
      * (rates[leftSelect.value].Value / rates[rightSelect.value].Value))).toFixed(2);
  }
};

leftSelect.onchange = function () {
  if (leftSelect.value === 'RUB') {
    result.value = (parseFloat(input.value) / rates[rightSelect.value].Value).toFixed(2);
  }
  if (rightSelect.value === 'RUB') {
    result.value = (parseFloat(input.value * rates[leftSelect.value].Value)).toFixed(2);
  } else {
    result.value = (parseFloat(input.value
      * (rates[leftSelect.value].Value / rates[rightSelect.value].Value))).toFixed(2);
  }
};

rightSelect.onchange = function () {
  if (leftSelect.value === 'RUB') {
    result.value = (parseFloat(input.value) / rates[rightSelect.value].Value).toFixed(2);
  }
  if (rightSelect.value === 'RUB') {
    result.value = (parseFloat(input.value * rates[leftSelect.value].Value)).toFixed(2);
  } else {
    result.value = (parseFloat(input.value
      * (rates[leftSelect.value].Value / rates[rightSelect.value].Value))).toFixed(2);
  }
};
