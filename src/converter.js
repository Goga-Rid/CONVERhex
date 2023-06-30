const rates = {};

async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();

  rates.USD = data.Valute.USD;
  rates.EUR = data.Valute.EUR;
}

getCurrencies();

const input = document.getElementById('inputV');
const result = document.getElementById('resultV');
const leftSelect = document.getElementById('leftSelect');
const rightSelect = document.getElementById('rightSelect');

function initVars() {
  const leftValue = leftSelect.value;
  const rightValue = rightSelect.value;
  return [leftValue, rightValue];
}

function calculateResult() {
  const inputValue = parseFloat(input.value);
  const [leftValue, rightValue] = initVars();

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
  const [leftValue, rightValue] = initVars();

  if (leftValue === 'RUB') {
    input.value = (resultValue * rates[rightValue].Value).toFixed(2);
  } else if (rightValue === 'RUB') {
    input.value = (resultValue / rates[leftValue].Value).toFixed(2);
  } else {
    input.value = (resultValue * (rates[rightValue].Value / rates[leftValue].Value)).toFixed(2);
  }
}

if (input) {
  input.addEventListener('input', calculateResult);
}
if (result) {
  result.addEventListener('input', calculateReverseResult);
}
if (leftSelect) {
  leftSelect.addEventListener('change', () => {
    calculateResult();
    changeFlagImage('flagImage1', 'leftSelect');
  });
}
if (rightSelect) {
  rightSelect.addEventListener('input', () => {
    calculateResult();
    changeFlagImage('flagImage2', 'rightSelect');
  });
}

window.onload = function () {
  changeFlagImage('flagImage1', 'leftSelect');
  changeFlagImage('flagImage2', 'rightSelect');
};

const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');

if (input) {
  input.addEventListener('input', () => {
    label1.style.display = input.value ? 'none' : 'block';
    label2.style.display = input.value ? 'none' : 'block';
  });
}

if (result) {
  result.addEventListener('input', () => {
    label1.style.display = input.value ? 'none' : 'block';
    label2.style.display = input.value ? 'none' : 'block';
  });
}

function getInfoInBlocks() {
  const USDBlock = document.getElementById('USD-block');
  const EURBlock = document.getElementById('EUR-block');

  const currUSD = rates.USD.Value;
  const currEUR = rates.EUR.Value;

  const USDChange = document.getElementById('USD-change');
  const EURChange = document.getElementById('EUR-change');

  const changeUSD = (currUSD - rates.USD.Previous).toFixed(2);
  const changeEUR = (currEUR - rates.EUR.Previous).toFixed(2);

  USDChange.textContent = changeUSD > 0 ? '+ ' + changeUSD : changeUSD;
  EURChange.textContent = changeEUR > 0 ? '+ ' + changeEUR : changeEUR;

  USDBlock.textContent = currUSD.toFixed(2);
  EURBlock.textContent = currEUR.toFixed(2);
}

function createDataForGraphUSD() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  const formattedDateYesterday = `${year}-${month}-${day - 1}`;
  return [{ date: formattedDateYesterday, rate: rates.USD.Previous },
    { date: formattedDate, rate: rates.USD.Value }];
}

setTimeout(() => {
  getInfoInBlocks();
}, 1000);



function createDataForGraphEUR() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  const formattedDateYesterday = `${year}-${month}-${day - 1}`;
  return [{ date: formattedDateYesterday, rate: rates.EUR.Previous },
    { date: formattedDate, rate: rates.EUR.Value }];
}

setTimeout(() => {
  getInfoInBlocks();
}, 1000);

module.exports = { createDataForGraphUSD, createDataForGraphEUR };
