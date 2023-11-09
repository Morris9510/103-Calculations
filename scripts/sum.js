function sum() {
  let a = prompt("Enter the first value (a):");

  let b = prompt("enter the second value(b):");

  let total;
  total = Number(a) + Number(b);

  console.log(total);
}

function mult() {
  let a = prompt("Enter a value here(a):");

  let b = 5;

  totalMult = Number(a) * b;

  console.log(totalMult);
}

function convert() {
  let temperature = Number(prompt("Enter the temperature in Celsius"));
  temperature = (temperature * 9) / 5 + 32;
  console.log(temperature);
}
const temperature = convert;
