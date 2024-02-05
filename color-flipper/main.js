import './style.css'

const COLOR_PALETTE = {

  '#242124ff': 'raisin-black',
  '#0095b6ff': 'bondi-blue',
  '#fff0f5ff': 'lavender-blush',
  '#8b008bff': 'dark-magenta',
  '#002387ff': 'resolution-blue'
};



Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = COLOR_PALETTE[color];
});

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}



const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    //Almacenamos el codigo de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el color seleccionado


  });
};
/*
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
*/
addOptionsToColorPicker();
addEventListenerToColorPicker();