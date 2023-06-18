// const valueInputNode = document.querySelector('.input-group mb-3');
let currencies = document.querySelector('#currencies');
console.log(currencies);

let baseCurr = document.querySelector('#base_currency');
const APIKey = 'A029StvJl0JE8mEktoDdadbzgg70ipzxccdHrJPb';


let queryURL = `"https://api.currencyapi.com/v3/latest?apikey=${APIKey}&currencies=${currencies}&base_currency=${baseCurr}"`;

console.log(queryURL)
    currencies.addEventListener('input', () => {
        console.log(queryURL)
    });