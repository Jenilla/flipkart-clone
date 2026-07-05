const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        if(card.innerText.toLowerCase().includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});
let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("click", function(){

        alert("Product Selected");

    });

});
let buy = document.querySelectorAll(".buy-btn");

buy.forEach(function(btn){

    btn.addEventListener("click", function(){

        alert("Proceeding to Payment");

    });

});
let cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        alert("Product Added to Cart");

    });

});
