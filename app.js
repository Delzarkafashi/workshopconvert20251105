// import { convert as convertWeightModul } from "./convertWeightModul.js";

// const input = document.getElementById("weightInput");
// const button = document.getElementById("convertBtn");
// const result = document.getElementById("result");

// button.addEventListener("click", () => {
//   const value = parseFloat(input.value);
//   if (isNaN(value)) {
//     result.textContent = "Skriv in en siffra tack!";
//     return;
//   }
//   const pounds = convertWeightModul(value, "kg", "lbs");
//   console.log(`${value} kg = ${pounds.toFixed(2)} lbs`);
//   result.textContent = `${value} kg = ${pounds.toFixed(2)} lbs`;
// });


import { convert as converttemp } from "./temperature.js";

const lengthinput = document.getElementById("tempInput");
const tempbutton = document.getElementById("convertBtn");
const tempresult = document.getElementById("result");

tempbutton.addEventListener("click", () => {
  const value = parseFloat(lengthinput.value);
  if (isNaN(value)) {
    result.textContent = "Skriv in en siffra tack!";
    return;
  }
  const fernhit = converttemp(value, "C", "F");
  console.log(`${value} C = ${fernhit.toFixed(2)} F`);
  result.textContent = `${value} C = ${fernhit.toFixed(2)} F`;
});



import { convert as convertlength } from "./lengthModule.js";

const lengthInput = document.getElementById("lengthInput");
const lengthbutton = document.getElementById("lengthconvertBtn");
const lengthresult = document.getElementById("lengtresult");

lengthbutton.addEventListener("click", () => {
  const value = parseFloat(lengthInput.value);
  if (isNaN(value)) {
    lengthresult.textContent = "Skriv in en siffra tack!";
    return;
  }
  const inch = convertlength(value, "C", "F");
  console.log(`${value} Inch = ${inch.toFixed(2)} CM`);
  result.textContent = `${value} C = ${inch.toFixed(2)} F`;
});