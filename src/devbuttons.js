function swapSelectedOptions() {
    var leftSelect = document.getElementById("leftSelect");
    var rightSelect = document.getElementById("rightSelect");

    var value1 = leftSelect.value;
    var value2 = rightSelect.value;

    leftSelect.value = value2;
    rightSelect.value = value1;
  }