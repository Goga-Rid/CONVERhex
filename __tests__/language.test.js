const { translateText, changeLanguage } = require('../src/language');

describe('language.js', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <span data-translate="header_title">Currency converter</span>
        <button data-translate="header_button">Main</button>
        <p data-translate="textline_one">Currency Converter - from CONVERhex will help you quickly convert one currency to another at the current market rate.</p>
      </div>
    `;
  });

  describe('translateText', () => {
    it('translates elements to the specified language', () => {
      const language = 'ru';

      translateText(language);

      const translatedHeaderTitle = document.querySelector('[data-translate="header_title"]').textContent;
      const translatedHeaderButton = document.querySelector('[data-translate="header_button"]').textContent;
      const translatedTextlineOne = document.querySelector('[data-translate="textline_one"]').textContent;

      expect(translatedHeaderTitle).toBe('Конвертер валют');
      expect(translatedHeaderButton).toBe('Главная');
      expect(translatedTextlineOne).toBe(
        'Конвертер валют - от CONVERhex поможет вам быстро конвертировать одну валюту в другую по текущему рыночному курсу.',
      );
    });

    it('does not translate elements without translation for the specified language', () => {
      const language = 'es';

      translateText(language);

      const untranslatedHeaderTitle = document.querySelector('[data-translate="header_title"]').textContent;
      const untranslatedHeaderButton = document.querySelector('[data-translate="header_button"]').textContent;
      const untranslatedTextlineOne = document.querySelector('[data-translate="textline_one"]').textContent;

      expect(untranslatedHeaderTitle).toBe('Currency converter');
      expect(untranslatedHeaderButton).toBe('Main');
      expect(untranslatedTextlineOne).toBe(
        'Currency Converter - from CONVERhex will help you quickly convert one currency to another at the current market rate.',
      );
    });
  });

  describe('changeLanguage', () => {
    it('changes the language of the translated elements', () => {
      const language = 'ru';

      changeLanguage(language);

      const translatedHeaderTitle = document.querySelector('[data-translate="header_title"]').textContent;
      const translatedHeaderButton = document.querySelector('[data-translate="header_button"]').textContent;
      const translatedTextlineOne = document.querySelector('[data-translate="textline_one"]').textContent;

      expect(translatedHeaderTitle).toBe('Конвертер валют');
      expect(translatedHeaderButton).toBe('Главная');
      expect(translatedTextlineOne).toBe(
        'Конвертер валют - от CONVERhex поможет вам быстро конвертировать одну валюту в другую по текущему рыночному курсу.',
      );
    });
  });
});
