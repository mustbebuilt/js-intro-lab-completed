(function () {
  const poundsIO = document.getElementById("pounds");
  const euroIO = document.getElementById("euro");
  const msg = document.getElementById("msg");
  const conversionBtns = document.querySelectorAll("input[type=button]");
  console.dir(conversionBtns);
  conversionBtns.forEach(function (button) {
    button.addEventListener("click", function (ev) {
      exchange(ev.target.id);
    });
  });

  function exchange(id) {
    let inputBox, outputBox, inVal, outVal, exchangeRate;
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
    outVal = 0;
    inVal = parseFloat(inputBox.value);
    if (isNaN(inVal)) {
      msg.style.display = "block";
      msg.innerHTML = "You must enter a number";
      msg.setAttribute("class", "error");
    } else {
      msg.innerHTML = "";
      if (inVal === 0) {
        msg.style.display = "block";
        msg.innerHTML = "You must enter more than zero.";
        msg.setAttribute("class", "error");
      } else {
        outVal = inVal * exchangeRate;
        msg.style.display = "block";
        outVal = outVal.toFixed(2);
        outputBox.value = outVal;
      }
    }
  }
})();
