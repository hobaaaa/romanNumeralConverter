const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const arabicArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanArr = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

const convertToRoman = (num) => {
  let result = "";
  for (let i = 0; i < arabicArr.length; i++) {
    while (num >= arabicArr[i]) {
      result += romanArr[i];
      num -= arabicArr[i];
    }
  }
  return result;
};
const inOut = () => {
  const value = parseInt(number.value);

  if (number.value == "") {
    output.innerText = "Please enter a valid number";
  } else if (number.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = convertToRoman(value);
  }
};

convertBtn.addEventListener("click", () => {
  inOut();
});
