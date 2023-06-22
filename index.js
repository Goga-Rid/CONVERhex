import CurrencyAPI from './node_modules/@everapi/currencyapi-js/index.js';

const APIKey = 'A029StvJl0JE8mEktoDdadbzgg70ipzxccdHrJPb';

const currencyApi = new CurrencyAPI(APIKey);

const generationQuer = () => {
  const promise = currencyApi.latest({
    base_currency: 'RUB',
    currencies: 'EUR,USD',
  }).then((response) => response.data);
  return promise;
};

export default generationQuer;
