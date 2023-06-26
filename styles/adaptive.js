function changeInnerWidth() {
  const width = window.innerWidth;
  if (width < 1100) {
    document.getElementById('AJ').style.flexDirection = 'column';
  } else {
    document.getElementById('AJ').style.flexDirection = 'row';
  }
}

window.addEventListener('resize', changeInnerWidth);

changeInnerWidth();
