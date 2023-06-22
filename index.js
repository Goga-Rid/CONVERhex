import CurrencyAPI from '@everapi/currencyapi-js/index.js';

const APIKey = 'A029StvJl0JE8mEktoDdadbzgg70ipzxccdHrJPb';

const currencyApi = new CurrencyAPI(APIKey);

const generationQuer = () => {
  currencyApi.latest({
    base_currency: 'RUB',
    currencies: 'EUR,USD',
  }).then((response) => {
    console.log(response);
  });
};

generationQuer();
