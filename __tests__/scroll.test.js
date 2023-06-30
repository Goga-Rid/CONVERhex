global.TextEncoder = require('text-encoding-utf-8').TextEncoder;
global.TextDecoder = require('text-encoding-utf-8').TextDecoder;
const { JSDOM } = require('jsdom');
const { handleScroll } = require('../styles/scroll');

const dom = new JSDOM('<html><body></body></html>', { runScripts: 'outside-only' });
const { window } = dom;

global.window = window;
global.document = window.document;

window.eval(handleScroll);

describe('scroll.js', () => {
  beforeEach(() => {
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

    expect(header.classList.contains('scroll-up')).toBe(false);

    expect(header.classList.contains('scroll-down')).toBe(false);
  });

  it('should add "scroll-down" class to header when scrolling up', () => {
    const header = document.querySelector('.header');

    simulateScroll(50);

    expect(header.classList.contains('scroll-down')).toBe(false);

    expect(header.classList.contains('scroll-up')).toBe(false);
  });
});
