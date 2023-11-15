(() => {
  // Colour Picker

  // Select all elements with the class "colPicker"
  const colourButtons = document.querySelectorAll(".colPicker");
  // Select the body element of the document
  const bodyElement = document.body;

  // Function to change the background color based on the clicked button
  const chgColour = (ev) => {
    // Get the class of the clicked button and append "Back" to it
    const colourPicked = ev.target.classList[0] + "Back";
    // Set the body's class to the picked color, or clear it if "resetBack" is selected
    // Using a ternary operator to check if the picked color is "resetBack"
    bodyElement.className = colourPicked === "resetBack" ? "" : colourPicked;
  };

  // Add click event listeners to each color picker button
  colourButtons.forEach((button) =>
    button.addEventListener("click", chgColour)
  );
})();
