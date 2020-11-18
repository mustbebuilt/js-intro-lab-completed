(function(){
    console.dir(window.location);
    var url = window.location.href;
    console.dir(url.split('/'));


    document.getElementById("myHeading").innerHTML ="Your Name Here";

    var url = window.location.href;
    var filename = url.split('/').pop();
    console.info(filename);
    var allLinks = document.querySelectorAll('nav ul li');
    for(var i=0; i<allLinks.length; i++){
        console.info(allLinks[i].querySelector("a").getAttribute("href"));
        if(allLinks[i].querySelector("a").getAttribute("href") === filename){
            allLinks[i].setAttribute('class', 'currentPage');
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
if(filename === "index.html"){
var colourButtons = document.querySelectorAll(".colPicker")
console.dir(colourButtons)

for(var i=0; i < colourButtons.length; i++){
    colourButtons[i].addEventListener("click", chgColour)
}

function chgColour(ev){
    console.dir(ev.target.classList)
    console.dir(ev.target.classList[0])
    var colourPicked = ev.target.classList[0] + "Back"
    var bodyElement = document.querySelector('body')
    if(colourPicked === "resetBack"){
		bodyElement.removeAttribute('class')
	}else{
    	bodyElement.setAttribute('class', colourPicked)
	}
}


    var imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg'];
    var counter = 0;
    if(document.getElementById('myImages')){
       document.getElementById('myImages').setAttribute('src', imageAr[counter]); 
    }
    // to automate
    setInterval(chgImage, 2000);
    // manually
    //document.getElementById('myImages').addEventListener('click', chgImage);
    function chgImage(){
        counter++;
        if(counter == imageAr.length){
            counter = 0;	
        }
        document.getElementById('myImages').setAttribute('src', imageAr[counter]);	
    }
}
})();
