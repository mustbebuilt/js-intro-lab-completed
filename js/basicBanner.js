(function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slides = document.querySelector(".slides");
  let currentIndex = 0;

  // functions
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
  };
  // cycle
  const autoSlide = () => nextSlide();

  // events
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  setInterval(autoSlide, 5000);
})();
