const elementRU1 = document.querySelector('#ru1');
const elementUSD1 = document.querySelector('#usd1');
const elementEUR1 = document.querySelector('#eur1');

const elementRU2 = document.querySelector('#ru2');
const elementUSD2 = document.querySelector('#usd2');
const elementEUR2 = document.querySelector('#eur2');

const leftArrCurrency = [elementRU1, elementUSD1, elementEUR1];

const rightArrCurrency = [elementRU2, elementUSD2, elementEUR2];

const selectLeft = document.getElementById('leftSelect');
const selectRight = document.getElementById('rightSelect');

const valueSelectLeft = selectLeft.options[select.selectedIndex].value;
const valueSelectRight = selectRight.options[select.selectedIndex].value; 

let clickIvent = document.querySelector('#reversButton');
let ckickCount = 0;

clickIvent.addEventListener('click', function() {
    ckickCount += 1;
    return ckickCount;
});

const reversButton = (clickIvent, valueSelectLeft, valueSelectRight, leftArrCurrency, rightArrCurrency) => {
    let positionOptionLeft = 0;
    let positionOptionRigt = 0;
    for ( let i = 0; i < leftArrCurrency.length - 1; i++) {
        if (valueSelectLeft === leftArrCurrency[i]){
            positionOptionLeft = leftArrCurrency.length - 3 + i;
            return (positionOptionLeft)
        } else continue;
    };

    for ( let i = 0; i < rightArrCurrency.length - 1; i++) {
        if (valueSelectRight === rightArrCurrency[i]){
            positionOptionRigt = rightArrCurrency.length - 3 + i;
            return (positionOptionRigt)
        } else continue;
    };

    
}