const rates = {};

async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;

  rates.USD = result.Valute.USD;
  rates.EUR = result.Valute.EUR;
}

// getCurrencies(); delete comment

const input = document.querySelector('#inputV');
const result = document.querySelector('#resultV');
const leftSelect = document.querySelector('#leftSelect');
const rightSelect = document.querySelector('#rightSelect');

input.oninput = function() {
  result.value = (parseFloat(input.value) / rates[rightSelect.value].Value).toFixed(2);
};
