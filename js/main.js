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

  // Image Slider
  const images = [
    { path: "images/banner-image-1.jpg", alt: "Silver Ball Fountains" },
    { path: "images/banner-image-2.jpg", alt: "Winter Gardens Roof External" },
    {
      path: "images/banner-image-3.jpg",
      alt: "Winter Gardens Roof Internal",
    },
    { path: "images/banner-image-4.jpg", alt: "Crucible Theatre" },
    { path: "images/banner-image-5.jpg", alt: "Now Then Graffiti" },
    { path: "images/banner-image-6.jpg", alt: "Winter Gardens Palm Trees" },
  ];
  const slides = document.querySelector(".slides");
  const dotContainer = document.querySelector(".dots-container");
  let currentIndex = 0;

  // Create and add images to the DOM
  images.forEach((imageData) => {
    const img = document.createElement("img");
    img.src = imageData.path;
    img.alt = imageData.alt;
    slides.appendChild(img);
  });

  const showSlide = (index) => {
    slides.style.transform = `translateX(-${index * 100}%)`;
  };

  const prevSlide = () => {
    currentIndex =
      (currentIndex - 1 + slides.children.length) % slides.children.length;
    showSlide(currentIndex);
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    showSlide(currentIndex);
    updateDots();
  };

  const autoSlide = () => {
    nextSlide();
  };

  const createDots = () => {
    for (let i = 0; i < slides.children.length; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.addEventListener("click", () => goToSlide(i));
      dotContainer.appendChild(dot);
    }
    updateDots();
  };

  const updateDots = () => {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  const goToSlide = (index) => {
    currentIndex = index;
    showSlide(currentIndex);
    updateDots();
  };

  createDots();
  setInterval(autoSlide, 5000);
})();
