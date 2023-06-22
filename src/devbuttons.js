const selectLeft = document.getElementById('leftSelect'); // <- обращение к левому select
const selectRight = document.getElementById('rightSelect'); // <- обращение к правому select

const valueSelectLeft = selectLeft.value; // <- берём value выбранной валюты в левом select
const valueSelectRight = selectRight.value; // <- берём value выбранной валюты в правом select

const emptyValueLeft = valueSelectLeft; // <- пустышка, принимающая значение value левой валюты
const emptyValueRight = valueSelectRight; // <- пустышка, принимающая значение value правой валюты

const clickEvent = document.querySelector('#reversButton'); // <- Обращение к кнопке
const clickCount = 0; // <- счётчик для click ивента

clickEvent.on('click', (clickCount) => {
  clickCount += 1;
  return clickCount;
}); // <- Реализация click ивента

const reversValue = (clickCount, valueSelectLeft, valueSelectRight, emptyValueLeft, emptyValueRight) => {
  if (clickCount % 2 === 0) {
    valueSelectLeft = emptyValueRight;
    valueSelectRight = emptyValueLeft;
    return (valueSelectLeft, valueSelectRight);
  }
  valueSelectLeft = emptyValueLeft;
  valueSelectRight = emptyValueRight;
  return (valueSelectLeft, valueSelectRight);
};

const reversButton = (valueSelectLeft, valueSelectRight, selectLeft, selectRight) => {
  selectLeft.value = valueSelectLeft;
  selectRight.value = valueSelectRight;
  return (selectLeft, selectRight);
};
