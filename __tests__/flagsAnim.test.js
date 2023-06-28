import changeFlagImage from "../styles/flagsAnim";

document.body.innerHTML = `
  <select id="leftSelect">
    <option value="RUB">RUB</option>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
  </select>
  <select id="rightSelect">
    <option value="RUB">RUB</option>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
  </select>
  <img id="flagImage" src="" alt="Flag" />`;

test('is there a flagID', () => {
    const a = 'flagImage1';
    const b = 'flagImage1';

    const firstIdFlag = (flagId === a);
    const secondIdFlag = (flagId === b);

    expect(firstIdFlag).toBeTruthy();
    expect(secondIdFlag).toBeTruthy();
});

test('is there a selectID', () => {
    const a = 'leftSelect';
    const b = 'rightSelect';

    const firstIdSelect = (selectId === a);
    const secondIdSelect = (selectId === b);

    expect(firstIdSelect).toBeTruthy();
    expect(secondIdSelect).toBeTruthy();
});

test('is there a path to RUB', () => {
  const selectId = leftSelect;
  leftSelect.value = 'RUB';
  const flagId = "flagImage";

    expect(changeFlagImage(flagId, selectId)).toEqual('../images/flags/RUB.png');
});

test('is there a path to USD', () => {
  const selectId = leftSelect;
  leftSelect.value = 'USD';
  const flagId = "flagImage";

    expect(changeFlagImage(flagId, selectId)).toEqual('../images/flags/USD.png');
});

test('is there a path to EUR', () => {
  const selectId = leftSelect;
  leftSelect.value = 'EUR';
  const flagId = "flagImage";

    expect(changeFlagImage(flagId, selectId)).toEqual('../images/flags/EUR.png');
});
