const currencies = document.querySelector('#currencies');
console.log(currencies);

const baseCurr = document.querySelector('#base_currency');
const APIKey = 'A029StvJl0JE8mEktoDdadbzgg70ipzxccdHrJPb';

const queryURL = `"https://api.currencyapi.com/v3/latest?apikey=${APIKey}&currencies=${currencies}&base_currency=${baseCurr}"`;

console.log(queryURL);
currencies.addEventListener('input', () => {
  console.log(queryURL);
});
