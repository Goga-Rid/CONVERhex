global.TextEncoder = require('util').TextEncoder;
const { JSDOM } = require('jsdom');
const { handleScroll } = require('../styles/scroll');

// Создание виртуального DOM с помощью jsdom
const dom = new JSDOM('<html><body></body></html>', { runScripts: 'outside-only' });
const { window } = dom;

// Глобальное окружение для тестов
global.window = window;
global.document = window.document;

// Загрузка и выполнение скрипта scroll.js
window.eval(handleScroll);

describe('scroll.js', () => {
  beforeEach(() => {
    // Сброс состояния перед каждым тестом
    document.documentElement.innerHTML = '<div class="header"></div>';
    window.scrollY = 0;
  });

  const simulateScroll = (scrollY) => {
    window.scrollY = scrollY;
    window.dispatchEvent(new window.Event('scroll'));
  };

  it('should add "scroll-up" class to header when scrolling down', () => {
    const header = document.querySelector('.header');

    simulateScroll(100);

    // Проверка наличия класса "scroll-up"
    expect(header.classList.contains('scroll-up')).toBe(false);
    // Проверка наличия класса "scroll-down"
    expect(header.classList.contains('scroll-down')).toBe(false);
  });

  it('should add "scroll-down" class to header when scrolling up', () => {
    const header = document.querySelector('.header');

    simulateScroll(50);

    // Проверка наличия класса "scroll-down"
    expect(header.classList.contains('scroll-down')).toBe(false);
    // Проверка наличия класса "scroll-up"
    expect(header.classList.contains('scroll-up')).toBe(false);
  });
});
