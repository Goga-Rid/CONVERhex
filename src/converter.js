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
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');

function initVars() {
  const leftValue = leftSelect.value;
  const rightValue = rightSelect.value;
  return [leftValue, rightValue];
}

function calculateResult() {
  const inputValue = parseFloat(input.value);
  const [leftValue, rightValue] = initVars();

  let calculatedValue;
  if (leftValue === 'RUB') {
    calculatedValue = inputValue / rates[rightValue].Value;
  } else if (rightValue === 'RUB') {
    calculatedValue = inputValue * rates[leftValue].Value;
  } else {
    calculatedValue = inputValue * (rates[leftValue].Value / rates[rightValue].Value);
  }

  result.value = calculatedValue.toFixed(2);
}

function calculateReverseResult() {
  const resultValue = parseFloat(result.value);
  const [leftValue, rightValue] = initVars();

  let calculatedValue;
  if (leftValue === 'RUB') {
    calculatedValue = resultValue * rates[rightValue].Value;
  } else if (rightValue === 'RUB') {
    calculatedValue = resultValue / rates[leftValue].Value;
  } else {
    calculatedValue = resultValue * (rates[rightValue].Value / rates[leftValue].Value);
  }

  input.value = calculatedValue.toFixed(2);
}

function toggleLabelsDisplay() {
  label1.style.display = input.value ? 'none' : 'block';
  label2.style.display = input.value ? 'none' : 'block';
}

function handleInputChange() {
  calculateResult();
  toggleLabelsDisplay();
}

function handleResultChange() {
  calculateReverseResult();
  toggleLabelsDisplay();
}

if (input) {
  input.addEventListener('input', handleInputChange);
}

if (result) {
  result.addEventListener('input', handleResultChange);
}

if (input) {
  input.addEventListener('input', toggleLabelsDisplay);
}

if (result) {
  result.addEventListener('input', toggleLabelsDisplay);
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

  USDChange.textContent = changeUSD > 0 ? `+ ${changeUSD}` : changeUSD;
  EURChange.textContent = changeEUR > 0 ? `+ ${changeEUR}` : changeEUR;

  USDBlock.textContent = currUSD.toFixed(2);
  EURBlock.textContent = currEUR.toFixed(2);
}

setTimeout(() => {
  getInfoInBlocks();
}, 1000);

function createDataForGraph(chartName, rate) {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  const formattedDateYesterday = `${year}-${month}-${day - 1}`;

  return [
    { date: formattedDateYesterday, rate: rate.Previous },
    { date: formattedDate, rate: rate.Value },
  ];
}

function createDataForGraphUSD() {
  return createDataForGraph('USD', rates.USD);
}

function createDataForGraphEUR() {
  return createDataForGraph('EUR', rates.EUR);
}

setTimeout(() => {
  getInfoInBlocks();
}, 1000);

module.exports = { createDataForGraphUSD, createDataForGraphEUR };
