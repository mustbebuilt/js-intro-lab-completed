(function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slides = document.querySelector(".slides");
  let currentIndex = 0;
  // events
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  // functions
  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + slides.children.length) % slides.children.length;
    showSlide(currentIndex);
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.children.length;
    showSlide(currentIndex);
  }
  // cycle
  function autoSlide() {
    nextSlide();
  }
  setInterval(autoSlide, 5000);
})();
