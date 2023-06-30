const { translateText } = require('../src/language');

const getTranslatedElementText = (dataTranslateAttribute) => document.querySelector(`[data-translate="${dataTranslateAttribute}"]`).textContent;

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

  const getTranslatedText = (language) => {
    translateText(language);

    return {
      headerTitle: getTranslatedElementText('header_title'),
      headerButton: getTranslatedElementText('header_button'),
      textlineOne: getTranslatedElementText('textline_one'),
    };
  };

  describe('translateText', () => {
    it('translates elements to the specified language', () => {
      const language = 'ru';

      const translatedText = getTranslatedText(language);

      expect(translatedText.headerTitle).toBe('Конвертер валют');
      expect(translatedText.headerButton).toBe('Главная');
      expect(translatedText.textlineOne).toBe(
        'Конвертер валют - от CONVERhex поможет вам быстро конвертировать одну валюту в другую по текущему рыночному курсу.',
      );
    });

    it('does not translate elements without translation for the specified language', () => {
      const language = 'es';

      const untranslatedText = getTranslatedText(language);

      expect(untranslatedText.headerTitle).toBe('Currency converter');
      expect(untranslatedText.headerButton).toBe('Main');
      expect(untranslatedText.textlineOne).toBe(
        'Currency Converter - from CONVERhex will help you quickly convert one currency to another at the current market rate.',
      );
    });
  });
});
