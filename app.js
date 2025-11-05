import { convert as convertWeight } from "./convertWeightModul.js";
import { convert as convertLength } from "./lengthModule.js";
import { convert as convertTemp } from "./convertTemperature.js";

const tempInput  = document.getElementById("tempInput");
const tempButton = document.getElementById("tempconvertBtn");
const tempResult = document.getElementById("tempresult");

tempButton.addEventListener("click", () => {
  const value = parseFloat(tempInput.value);
  if (Number.isNaN(value)) {
    tempResult.textContent = "Skriv in en siffra tack!";
    return;
  }
  const celsius = Number(convertTemp(value, "F", "C"));
  console.log(`${value} F = ${celsius.toFixed(2)} C`);
  tempResult.textContent = `${value} F = ${celsius.toFixed(2)} C`;
});



const weightInput = document.getElementById("weigthInput");  
const weightBtn = document.getElementById("convertBtn");     
const weightResult = document.getElementById("wigthresult");  

weightBtn.addEventListener("click", () => {
  const value = parseFloat(weightInput.value);
  if (isNaN(value)) {
    weightResult.textContent = "Skriv in en siffra tack!";
    return;
  }
  const pounds = convertWeight(value, "kg", "lbs");
  console.log(`${value} kg = ${pounds.toFixed(2)} lbs`);
  weightResult.textContent = `${value} kg = ${pounds.toFixed(2)} lbs`;
});




const lengthInput = document.getElementById("lengthInput");          
const lengthButton = document.getElementById("lengthconvertBtn");   
const lengthResult = document.getElementById("lengthresult");        

lengthButton.addEventListener("click", () => {
  const value = parseFloat(lengthInput.value);
  if (isNaN(value)) {
    lengthResult.textContent = "Skriv in en siffra tack!";
    return;
  }
const cm = Number(convertLength(value, "in", "cm"));
console.log(`${value} in = ${cm.toFixed(2)} cm`);
lengthResult.textContent = `${value} in = ${cm.toFixed(2)} cm`;
});
