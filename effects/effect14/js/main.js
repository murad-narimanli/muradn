	$('.carousel-new').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    padding:10,
    dots:true,
    items:1,	
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
       
});


$(".nice-select").click(function () {
    $(this).toggleClass("open")
});


$(".togglebutton").click(function () {
    $(".mobile").animate({left: '0'}, "500");
    $(".black").css('display' , 'block')
});

$('.cancel , .black').click(function () {
       $(".mobile").animate({left: '-100%'}, "500");
    $(".black").css('display' , 'none')
});

$('#lang').click(function () {
    $('.lang').slideToggle();
     $('.usetype').slideUp();
});
$('#usetype').click(function () {
    $('.usetype').slideToggle();
       $('.lang').slideUp();
});