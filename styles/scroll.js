const header = document.querySelector('.header');
let prevScrollPos = window.scrollY;

function handleScroll() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    header.classList.toggle('scroll-up', false);
    header.classList.toggle('scroll-down', true);
  } else {
    header.classList.toggle('scroll-up', true);
    header.classList.toggle('scroll-down', false);
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', handleScroll);

module.exports = { handleScroll };
