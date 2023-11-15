(() => {
  // Variables to store the converted prices
  let pricePounds;
  let priceEuros;

  // Exchange rate for converting pounds to euros
  const exchangeRate = 1.12;

  // Get the form and message elements from the DOM
  let convertForm = document.getElementById("myForm");
  let poundsInput = document.getElementById("pounds");
  let msg = document.getElementById("msg");

  // Add a submit event listener to the form
  convertForm.addEventListener("submit", (ev) => {
    // Prevent the default form submission
    ev.preventDefault();

    // Reset the euros price to 0
    priceEuros = 0;

    // Get the input value for pounds and convert it to a floating-point number
    pricePounds = parseFloat(poundsInput.value);

    // Check if the entered value is not a valid number
    if (isNaN(pricePounds)) {
      // Display an error message if the input is not a number
      msg.style.display = "block";
      msg.innerHTML = "You must enter a number";
      msg.setAttribute("class", "error");
    } else {
      // Check if the entered value is greater than zero
      if (pricePounds === 0) {
        // Display an error message if the input is zero
        msg.style.display = "block";
        msg.innerHTML = "You must enter more than zero.";
        msg.setAttribute("class", "error");
      } else {
        // Calculate the euros price and display the result
        priceEuros = pricePounds * exchangeRate;
        msg.style.display = "block";
        // Format the euros price to two decimal places
        priceEuros = priceEuros.toFixed(2);
        msg.innerHTML = `You will get &euro;${priceEuros}`;
        msg.removeAttribute("class");
      }
    }
  });

  // Add a focus event listener to the pounds input
  poundsInput.addEventListener("focus", () => {
    // Clear the input value and reset the message
    poundsInput.value = "";
    msg.innerHTML = "";
    msg.removeAttribute("class");
  });
})();
