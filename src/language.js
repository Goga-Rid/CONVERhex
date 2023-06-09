const translations = {
  "header_title": {
    "en" : "Currency converter",
    "ru" : "Конвертер валют",
  },
  "header_button": {
    "en" : "Main",
    "ru" : "Главная",
  },
  "textline_one": {
    "en" : "Currency Converter - from CONVERhex will help you quickly convert one currency to another at the current market rate.",
    "ru" : "Конвертер валют - от CONVERhex поможет вам быстро конвертировать одну валюту в другую по текущему рыночному курсу.",
  },
  "textline_two": {
    "en" : "All popular currency pairs in one converter - just enter the currency and the amount, and the service will calculate",
    "ru" : "Все популярные валютные пары в одном конвертере - просто введите валюту и сумму, и сервис рассчитает",
  },
  "textline_three": {
    "en" : "everything automatically!",
    "ru" : "все автоматически!",
  },
  "text_card_one": {
    "en" : "I want to exchange",
    "ru" : "Я хочу обменять",
  },
  "labels": {
    "en" : "Enter the amount",
    "ru" : "Введите сумму",
  },
  "russian_currency": {
    "en" : "Russian Ruble",
    "ru" : "Российский рубль",
  },
  "american_currency": {
    "en" : "US Dollar",
    "ru" : "Доллар США",
  },
  "europian_currency": {
    "en" : "Euro",
    "ru" : "Евро",
  },
  "text_card_two": {
    "en" : "I want to get",
    "ru" : "Я хочу получить",
  },
  "footer_button": {
    "en" : "Contacts",
    "ru" : "Контакты",
  },
  "rateday_title":{
    "en" : "Currency rate for today:",
    "ru" : "Курс валюты на сегодня:",
  },
  "th_rate1": {
    "en" : "Currency",
    "ru" : "Валюта",
  },
  "th_rate2": {
    "en" : "Course(rub)",
    "ru" : "Курс(руб)",
  },
  "th_rate3": {
    "en" : "Intraday change",
    "ru" : "Сегодняшнее изменение",
  },
  "graph_usd": {
    "en" : "Graph of the change in the exchange rate of the dollar to the ruble",
    "ru" : "График изменения обменного курса доллара к рублю",
  },
  "graph_eur": {
    "en" : "Graph of the change in the exchange rate of the euro to the ruble",
    "ru" : "График изменения обменного курса евро к рублю",
  },
};

function translateText(language) {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    const translation = translations[key]?.[language];

    if (translation !== undefined) {
      element.textContent = translation;
    }
  });
}

function changeLanguage(language) {
  translateText(language);
}

window.addEventListener('DOMContentLoaded', () => {
  const language = 'en';
  translateText(language);
});

module.exports = {
  translations,
  translateText,
  changeLanguage,
};
