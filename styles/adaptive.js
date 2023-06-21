window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width < 1046) {
    document.getElementById('AJ').style.flexDirection = 'column';
  } else {
    document.getElementById('AJ').style.flexDirection = 'row';
  }
});
