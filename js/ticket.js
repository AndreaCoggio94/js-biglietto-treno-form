// event listener

document.getElementById("generate").addEventListener("click", ticketGenerator);

// function to generate ticket value

function ticketGenerator() {
  // name of traveler

  const userName = document.getElementById("userName").value;
  console.log("il tuo nome è " + userName);

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

  // offer

  let offer = "Standard";

  if (isNaN(userKm)) {
    alert("Inserisci solo valori numerici nei kilometri, grazie!");
  } else {
    // Age < 18
    if (userAge < 18) {
      totalCost = totalCost - (totalCost * discountMinor) / 100;
      offer = "Minor";
    }
    //   age > 65
    else if (userAge > 65) {
      totalCost = totalCost - (totalCost * discountSenior) / 100;
      offer = "Senior";
    }

    // Decimal Price

    let finalCost = totalCost.toFixed(2);

    // Formula for printed cost result

    let finalCostString = finalCost.toString();

    let printedCost = finalCostString + "€";

    document.getElementById("showPrice").innerHTML = printedCost;

    // Formula for printed offer result

    document.getElementById("showOffer").innerHTML = offer;
  }
}
