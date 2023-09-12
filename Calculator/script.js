const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mousedown', function() {
    this.classList.add('clicked');
  });

  buttons[i].addEventListener('mouseup', function() {
    this.classList.remove('clicked');
  });
}

let displayValue = '';
let disValue = document.getElementById('display');

let appendCharacter = (char) => {
  displayValue += char;
  disValue.value = displayValue;
}

let backspace = () => {
  displayValue = displayValue.slice(0, -1);
  disValue.value = displayValue;
}

let clearDisplay = () => {
  displayValue = '';
  disValue.value = displayValue;
}

let sqrt = () => {
  displayValue = Math.sqrt(parseFloat(displayValue)).toString();
  disValue.value = displayValue;
}

let cubeRoot = () => {
  displayValue = Math.cbrt(parseFloat(displayValue)).toString();
  disValue.value = displayValue;
}

let calculate = () => {
  try {
    displayValue = eval(displayValue).toString();
    disValue.value = displayValue;
  } catch (error) {
    disValue.value = 'Error';
  }
}
