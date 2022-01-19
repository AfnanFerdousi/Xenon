$(document).ready(function() {
    /*Magnific Pop-up Js*/
    $('.single-project').magnificPopup({
        type:'image',
        delegate:'a',
        gallery:{
            enabled:true
        },
    });
//CounterUp JS
$('.counter-increament').counterUp();

//Slick Slider JS
$('.testimonials').slick({
    arrows:false,  
    dots:true,
    loop:true,
    infinite:true,
    speed:1000,
    autoplay:true,  
    });
});
