(function () {
  console.dir(window.location);
  let url = window.location.href;
  console.dir(url.split("/"));

  document.getElementById("myHeading").innerHTML = "Your Name Here";

  let filename = url.split("/").pop();
  console.info(filename);
  let allLinks = document.querySelectorAll("nav ul li");
  for (let i = 0; i < allLinks.length; i++) {
    console.info(allLinks[i].querySelector("a").getAttribute("href"));
    if (allLinks[i].querySelector("a").getAttribute("href") === filename) {
      allLinks[i].setAttribute("class", "currentPage");
      break;
    }
  }

  //
  // document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');
  // document.getElementById('myTestEvent').addEventListener('click', function(){
  //     console.info('hi');
  // })
  // document.querySelector(".red").addEventListener('click', function(ev){
  //     document.querySelector('body').setAttribute('class', "redBack");
  // })
  // document.querySelector(".blue").addEventListener('click', function(ev){
  //     document.querySelector('body').setAttribute('class', "blueBack");
  // })
  // document.querySelector(".green").addEventListener('click', function(ev){
  //     document.querySelector('body').setAttribute('class', "greenBack");
  // })
  // document.querySelector(".reset").addEventListener('click', function(ev){
  //     document.querySelector('body').removeAttribute('class');
  // })
  if (filename === "index.html") {
    let colourButtons = document.querySelectorAll(".colPicker");
    console.dir(colourButtons);

    for (let i = 0; i < colourButtons.length; i++) {
      colourButtons[i].addEventListener("click", chgColour);
    }

    function chgColour(ev) {
      console.dir(ev.target.classList);
      console.dir(ev.target.classList[0]);
      let colourPicked = ev.target.classList[0] + "Back";
      let bodyElement = document.querySelector("body");
      if (colourPicked === "resetBack") {
        bodyElement.removeAttribute("class");
      } else {
        bodyElement.setAttribute("class", colourPicked);
      }
    }

    let imageAr = [
      "images/view1.jpg",
      "images/view2.jpg",
      "images/view3.jpg",
      "images/view4.jpg",
      "images/view5.jpg",
      "images/view6.jpg",
    ];
    let counter = 0;
    if (document.getElementById("myImages")) {
      document.getElementById("myImages").setAttribute("src", imageAr[counter]);
    }
    // to automate
    setInterval(chgImage, 2000);
    // manually
    //document.getElementById('myImages').addEventListener('click', chgImage);
    function chgImage() {
      counter++;
      if (counter == imageAr.length) {
        counter = 0;
      }
      document.getElementById("myImages").setAttribute("src", imageAr[counter]);
    }
  }
  // test event
  if (document.getElementById("myTestEvent")) {
    document.getElementById("myTestEvent").onclick = function () {
      console.info("hi");
    };
  }
})();
