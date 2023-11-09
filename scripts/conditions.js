let yourName = "Morris";

if (confirm("Are you " + yourName + "?")) {
  console.log("Hello " + yourName);
} else {
  console.log("Then what is your name?");
}

let number = 90000000;
if (number == 99) {
  console.log("The number is correct");
}

let password = "Test1234";
let userInput = prompt("Enter the password");
if (password == userInput) {
  console.log("welcome to the system");
} else {
  console.log("invalid credentials");
}
