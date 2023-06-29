const header = document.querySelector('.header');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('scroll-up');
  } else {
    header.classList.add('scroll-up');
  }

  prevScrollPos = currentScrollPos;
});
