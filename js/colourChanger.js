(() => {
  // Color Picker
  const colourButtons = document.querySelectorAll(".colPicker");
  const bodyElement = document.body;

  const chgColour = (ev) => {
    const colourPicked = ev.target.classList[0] + "Back";
    bodyElement.className = colourPicked === "resetBack" ? "" : colourPicked;
  };

  colourButtons.forEach((button) =>
    button.addEventListener("click", chgColour)
  );

 
})();