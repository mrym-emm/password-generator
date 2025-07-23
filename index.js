const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// get password element
let firstPassword = document.getElementById("first-pw");
let secondPassword = document.getElementById("second-pw");

function genPassword() {
  let firstRandomIndex = [];
  let secondRandomIndex = [];

  //empty out password
  firstPassword.textContent = "";
  secondPassword.textContent = "";

  // generating password
  for (let i = 0; i < 16; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    let randomNum2 = Math.floor(Math.random() * characters.length);
    firstRandomIndex.push(randomNum);
    secondRandomIndex.push(randomNum2);
  }

  for (let i = 0; i < firstRandomIndex.length; i++) {
    firstPassword.textContent += characters[firstRandomIndex[i]];
  }
  for (let i = 0; i < firstRandomIndex.length; i++) {
    secondPassword.textContent += characters[secondRandomIndex[i]];
  }
}

function savePassword(button) {
  if (button.id === "first-pw") {
    console.log(firstPassword.textContent);
    navigator.clipboard.writeText(firstPassword.textContent);
    alert("Password copied to clipboard");
  } else if (button.id === "second-pw") {
    console.log(secondPassword.textContent);
    navigator.clipboard.writeText(secondPassword.textContent);
    alert("Password copied to clipboard");
  }
}
