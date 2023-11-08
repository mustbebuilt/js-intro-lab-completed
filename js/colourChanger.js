(() => {
  // Color Picker
  const colourButtons = document.querySelectorAll(".colPicker");

  const chgColour = (ev) => {
    const colourPicked = ev.target.classList[0] + "Back";
    const bodyElement = document.body;
    bodyElement.className = colourPicked === "resetBack" ? "" : colourPicked;
  };

  colourButtons.forEach((button) =>
    button.addEventListener("click", chgColour)
  );

 
})();