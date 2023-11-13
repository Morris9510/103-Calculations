//assignment 2
function convert() {
  let temperature = Number(prompt("Enter the temperature in Celsius"));
  temperature = (temperature * 9) / 5 + 32;
  console.log(temperature);
}

//assignment 3
function convertTemperature() {
  let start = Number(prompt("Enter the temperature"));
  let scale = prompt("Enter the scale (C or F)");
  if (scale === "C") {
    start = (start * 9) / 5 + 32;
    console.log(start + " °F");
  } else if (scale === "F") {
    start = ((start - 32) * 5) / 9;
    console.log(start + " C");
  } else {
    console.log("Use celsius or Fahrenheit");
  }
}
