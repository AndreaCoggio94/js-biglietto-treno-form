// alert("Houston siamo collegati");

// Kilometers to travel

// const numKm = parseInt(prompt("Quanti Kilometri dovrai percorrere?"));

// Age of passenger

// const age = parseInt(prompt("Quanti anni hai?"));

// Cost per kilometer

const costKm = 0.21;

// discounts

const discountMinor = 20;

const discountSenior = 40;

// Calculated Price

let totalCost = numKm * costKm;

if (isNaN(numKm) || isNaN(age)) {
  alert("Inserisci solo valori numeri, grazie!");
} else {
  // Age < 18
  if (age < 18) {
    totalCost = totalCost - (totalCost * discountMinor) / 100;
  }
  //   age > 65
  else if (age > 65) {
    totalCost = totalCost - (totalCost * discountSenior) / 100;
  }

  // Decimal Price

  let finalCost = totalCost.toFixed(2);

  // Formula for printed result

  let finalCostString = finalCost.toString();

  let printedCost = "Il costo totale è di " + finalCostString + "€";

  document.getElementById("questo").innerHTML = printedCost;
}
