(function(){
    //
    // var allLinks = document.querySelectorAll('nav ul li');
    // allLinks[1].setAttribute('class', 'currentPage');
    //
    var pricePounds;
    var exchangeRate = 0.87;
    var priceEuros;
    var poundsIO = document.getElementById('pounds');
    var euroIO = document.getElementById('euro');
    var p2e = document.getElementById('p2e');
    var e2p = document.getElementById('e2p');
    var msg = document.getElementById('msg');
    p2e.addEventListener('click', function(ev){
        ev.preventDefault();
        priceEuros = 0;
        pricePounds = parseFloat(poundsIO.value);
        if(isNaN(pricePounds)){
            msg.style.display = "block";
            msg.innerHTML = "You must enter a number";
            msg.setAttribute('class', 'error');
        }else{
            if(pricePounds === 0){
                msg.style.display = "block";
                msg.innerHTML = "You must enter more than zero."
                msg.setAttribute('class', 'error');
            }else{
                priceEuros = pricePounds * exchangeRate;
                msg.style.display = "block";
                priceEuros = priceEuros.toFixed(2);
                euroIO.value = priceEuros
                // msg.removeAttribute('class');
            }
            
        } 

    });


    //     priceEuros = 0;
    //     exchangeRate = 0.87;
    //     pricePounds = parseFloat(document.getElementById('pounds').value);
    //     if(isNaN(pricePounds)){
    //         msg.style.display = "block";
    //         msg.innerHTML = "You must enter a number";
    //         msg.setAttribute('class', 'error');
    //     }else{
    //         if(pricePounds === 0){
    //             msg.style.display = "block";
    //             msg.innerHTML = "You must enter more than zero."
    //             msg.setAttribute('class', 'error');
    //         }else{
    //             priceEuros = pricePounds * exchangeRate;
    //             msg.style.display = "block";
    //             priceEuros = priceEuros.toFixed(2);
    //             msg.innerHTML = "You will get &euro;"+priceEuros;
    //             msg.removeAttribute('class');
    //         }
            
    //     } 
    // })
    // document.getElementById('pounds').addEventListener('focus', function(){
    //     this.value = "";
    //     msg.innerHTML = "";
    //     msg.removeAttribute('class');
    // })
    
    


})();
