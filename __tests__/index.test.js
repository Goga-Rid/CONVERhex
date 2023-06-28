const {choosingTheCurrencyPath, checkingForTheSameSelect} = require("../styles/flagsAnim.js");

describe('The currency has value', () => {

  test('RUB', () => {
    const flagImageValue = 'flagImage1';
    const selectedValueRUB = 'RUB';
    expect(choosingTheCurrencyPath(selectedValueRUB, flagImageValue)).toEqual('../images/flags/RUB.png');
  })

  test('USD', () => {
    const flagImageValue = 'flagImage1';
    const selectedValueUSD= 'USD';
    expect(choosingTheCurrencyPath(selectedValueUSD, flagImageValue)).toEqual('../images/flags/USD.png');
  })

  test('EUR', () => {
    const flagImageValue = 'flagImage1';
    const selectedValueEUR= 'EUR';
    expect(choosingTheCurrencyPath(selectedValueEUR, flagImageValue)).toEqual('../images/flags/EUR.png');
  })
});

describe('Interaction of identical select', () => {
    test('Calling an alert message', () => {
        const selectedValueOne = 'a';
        const selectedValueTwo = 'a';
        expect(checkingForTheSameSelect(selectedValueOne, selectedValueTwo)).toEqual('Выбрана одинаковая валюта в обоих полях | Selected the same currency in both fields');
    })
});