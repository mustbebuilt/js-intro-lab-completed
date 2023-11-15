(() => {
  // Get input and output elements from the DOM
  const poundsIO = document.getElementById("pounds");
  const euroIO = document.getElementById("euro");
  const msg = document.getElementById("msg");

  // Get all input buttons with type "button"
  const conversionBtns = document.querySelectorAll("input[type=button]");

  // Display the properties of the conversionBtns in the console
  console.dir(conversionBtns);

  // Add click event listeners to each conversion button
  conversionBtns.forEach(function (button) {
    button.addEventListener("click", function (ev) {
      // Call the exchange function with the clicked button's id
      exchange(ev.target.id);
    });
  });

  // Function to perform the currency exchange
  function exchange(id) {
    let inputBox, outputBox, inVal, outVal, exchangeRate;

    // Determine input and output elements based on the clicked button's id
    switch (id) {
      case "p2e":
        inputBox = poundsIO;
        outputBox = euroIO;
        exchangeRate = 1.12;
        break;
      case "e2p":
        inputBox = euroIO;
        outputBox = poundsIO;
        exchangeRate = 0.89;
        break;
    }

    // Initialize output value to 0 and get the input value as a float
    outVal = 0;
    inVal = parseFloat(inputBox.value);

    // Check if the input is not a valid number
    if (isNaN(inVal)) {
      msg.style.display = "block";
      msg.innerHTML = "You must enter a number";
      msg.setAttribute("class", "error");
    } else {
      // Clear error message
      msg.innerHTML = "";

      // Check if the input is greater than zero
      if (inVal === 0) {
        msg.style.display = "block";
        msg.innerHTML = "You must enter more than zero.";
        msg.setAttribute("class", "error");
      } else {
        // Perform the currency exchange and display the result
        outVal = inVal * exchangeRate;
        msg.style.display = "block";
        // Format the output value to two decimal places
        outVal = outVal.toFixed(2);
        outputBox.value = outVal;
      }
    }
  }
})();