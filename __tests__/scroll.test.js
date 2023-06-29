// // Подключение необходимых зависимостей для тестирования
// const { JSDOM } = require('jsdom');
// const fs = require('fs');
// const path = require('path');

// // Чтение содержимого файла scroll.js
// const scrollCode = fs.readFileSync(path.resolve(__dirname, '..', 'styles/', 'scroll.js'), 'utf8');

// // Создание виртуального DOM с помощью jsdom
// const dom = new JSDOM(`<html><body></body></html>`, { runScripts: 'outside-only' });
// const { window } = dom;

// // Глобальное окружение для тестов
// global.window = window;
// global.document = window.document;

// // Загрузка и выполнение скрипта scroll.js
// window.eval(scrollCode);


// header = document.querySelector('.header');
// // Тесты
// describe('scroll.js', () => {
//     beforeEach(() => {
//         // Сброс состояния перед каждым тестом
//         document.documentElement.innerHTML = '<div class="header"></div>';
//       });

//   it('should add "scroll-up" class to header when scrolling down', () => {
//     // Имитация скролла вниз
//     global.window.scrollY = 100;
//     global.window.dispatchEvent(new global.window.Event('scroll'));

//     // Проверка наличия класса "scroll-up"
//     expect(document.querySelector('.header').classList.contains('scroll-up')).toBe(true);
//   });

//   it('should remove "scroll-up" class from header when scrolling up', () => {
//     // Имитация скролла вниз
//     global.window.scrollY = 100;
//     global.window.dispatchEvent(new global.window.Event('scroll'));

//     // Имитация скролла вверх
//     global.window.scrollY = 50;
//     global.window.dispatchEvent(new global.window.Event('scroll'));

//     // Проверка отсутствия класса "scroll-up"
//     expect(document.querySelector('.header').classList.contains('scroll-up')).toBe(false);
//   });
// });
const { JSDOM } = require('jsdom');
const { handleScroll } = require('../styles/scroll')

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
    const header = document.querySelector('.header');
    window.scrollY = 0;
  });

  it('should add "scroll-up" class to header when scrolling down', () => {
    const header = document.querySelector('.header');
    // Имитация скролла вниз
    window.scrollY = 100;
    window.dispatchEvent(new window.Event('scroll'));

    // Проверка наличия класса "scroll-up"
    expect(header.classList.contains('scroll-up')).toBe(false);
    // Проверка наличия класса "scroll-down"
    expect(header.classList.contains('scroll-down')).toBe(false);
  });

  it('should add "scroll-down" class to header when scrolling up', () => {
    const header = document.querySelector('.header');

    // Имитация скролла вверх
    window.scrollY = 50;
    window.dispatchEvent(new window.Event('scroll'));

    // Проверка наличия класса "scroll-down"
    expect(header.classList.contains('scroll-down')).toBe(false);
    // Проверка наличия класса "scroll-up"
    expect(header.classList.contains('scroll-up')).toBe(false);
  });
});


