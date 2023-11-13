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
    console.log(start + " F");
  } else if (scale === "F") {
    start = ((start - 32) * 5) / 9;
    console.log(start + " C");
  } else {
    console.log("Use celsius or Fahrenheit");
  }
}

//final report

function convertTemperatureRange(startValue, endValue, scale) {
  for (let temp = startValue; temp <= endValue; temp++) {
    if (scale === "C") {
      let convertedTemp = Math.round((temp * 9) / 5 + 32);
      console.log(convertedTemp + " F");
    } else if (scale === "F") {
      let convertedTemp = Math.round(((temp - 32) * 5) / 9);
      console.log(convertedTemp + " C");
    } else {
      console.log("use celsius or fahrenehit");
    }
  }
}

let startTemperature = Number(prompt("Enter starting temperature:"));
let endTemperature = Number(prompt("Enter ending temperature:"));
let scale = prompt("Scale:  C or F");

convertTemperatureRange(startTemperature, endTemperature, scale);
