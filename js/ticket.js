// event listener

document.getElementById("generate").addEventListener("click", ticketGenerator);

// function to generate ticket value

function ticketGenerator() {
  // kilometers to travel

  const userKm = parseInt(document.getElementById("userKm").value);
  console.log("i tuoi kilometri " + userKm);

  // Age inserted by passenger

  const userAge = document.getElementById("userAge").value;
  console.log("la tua fascia di età " + userAge);

  // Cost per kilometer

  const costKm = 0.21;

  // discounts

  const discountMinor = 20;

  const discountSenior = 40;

  // Calculated Price

  let totalCost = userKm * costKm;

  if (isNaN(userKm)) {
    alert("Inserisci solo valori numerici nei kilometri, grazie!");
  } else {
    // Age < 18
    if (userAge < 18) {
      totalCost = totalCost - (totalCost * discountMinor) / 100;
    }
    //   age > 65
    else if (userAge > 65) {
      totalCost = totalCost - (totalCost * discountSenior) / 100;
    }

    // Decimal Price

    let finalCost = totalCost.toFixed(2);

    // Formula for printed result

    let finalCostString = finalCost.toString();

    let printedCost = "Il costo totale è di " + finalCostString + "€";

    console.log(printedCost);

    // document.getElementById("questo").innerHTML = printedCost;
  }
}
