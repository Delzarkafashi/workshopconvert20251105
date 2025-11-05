import { convert as convertWeightModul } from "./convertWeightModul.js";

const input = document.getElementById("weightInput");
const button = document.getElementById("convertBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const value = parseFloat(input.value);
  if (isNaN(value)) {
    result.textContent = "Skriv in en siffra tack!";
    return;
  }
  const pounds = convertWeightModul(value, "kg", "lbs");
  console.log(`${value} kg = ${pounds.toFixed(2)} lbs`);
  result.textContent = `${value} kg = ${pounds.toFixed(2)} lbs`;
});