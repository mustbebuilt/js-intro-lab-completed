(function () {
  // show what window.location produces
  console.dir(window.location);
  let url = window.location.href;
  // show the how split creates an array
  console.dir(url.split("/"));
  document.getElementById("myHeading").innerHTML = "Your Name Here";
  let filename = url.split("/").pop();
  // show the last value popped from the array
  console.info(filename);
  let allLinks = document.querySelectorAll("nav ul li");
  for (let i = 0; i < allLinks.length; i++) {
    // show how we get retrieve the href attribute of the link
    console.info(allLinks[i].querySelector("a").getAttribute("href"));
    if (allLinks[i].querySelector("a").getAttribute("href") === filename) {
      allLinks[i].setAttribute("class", "currentPage");
      break;
    }
  }
})();
