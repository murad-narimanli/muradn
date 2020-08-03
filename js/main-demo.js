$(function() {

    $('.theme-options .toggle-btn').on('click', function() {
        $('.theme-options').toggleClass('active');
    });
    $('#anim-type').on('change', function() {
        $html = $('html');
        var animNum = $(this).val();
        if(animNum >= 0 &&  animNum <= 36 ) {
            if( animNum == 0 ) {
                $html.data('random-animation', true);
            } else {
                $('html').data('animation', parseInt(animNum, 10));
                $html.data('random-animation', false);
            }
        }
    });


// reng deyishmi

//     var l = ["css/blue-color.css","css/green-color.css","css/purple-color.css" ,"css/red-color.css","css/yellow-color.css"], c = 0;
// setInterval(function(){
//   $("#colorrr").attr("href",l[c]);
//   if (c++ > l.length) c = 0;
// }, 10000);

//     var l = ["css/blue-color.css","css/green-color.css","css/purple-color.css" ,"css/red-color.css","css/yellow-color.css"], c = 0;
// $( "#bodymain" ).click(function(){
//   $("#colorrr").attr("href",l[c]);
//   if (c++ > l.length) c = 0;
// });



});

$(window).on('load', function(){
    var options = [], i;
    for( i = 1; i < 37 ; i++ )
    {
        options.push('<option value="' + i + '">' + i + '</option>');
    }

    $('#anim-type').append(options);
});


 $("#effects").click(function(){
    $("#effeccontent1").fadeToggle();
  });

 $("#closecontent").click(function(){
    $("#effeccontent1").fadeToggle();
  });



  $(".header-main").click(function(){
    $("#effeccontent1").fadeOut();
  });


//   $( ".lightmodess" ).click(function(){
//   $(".lightdark").attr("href","css/style-light.css");
//   $("#signature").attr("src","img/signature-black.png");
// });

// $( ".darkmodess" ).click(function(){
//   $(".lightdark").attr("href","css/style-dark.css");
//   $("#signature").attr("src","img/signature-white.png");
// });

   $(function()
      {
      $('[name="my_checkbox"]').change(function()
      {
        if ($(this).is(':checked')) {
           // Do something...
           $(".lightdark").attr("href","css/style-light.css");
           $("#signature").attr("src","img/signature-black.png");
           $(".label .ball").css("transform", "translateX(44px)")
        }
        else {

         $(".lightdark").attr("href","css/style-dark.css");
        $("#signature").attr("src","img/signature-white.png");
         $(".label .ball").css("transform", "translateX(0px)")
    } 
      });
    });


$( ".modes-li" ).click(function(){
     $(".modes").slideToggle();
});


  $( "#red" ).click(function(){
  $("#colorrr").attr("href","css/red-color.css");
});

  $( "#purple" ).click(function(){
  $("#colorrr").attr("href","css/purple-color.css");
});

    $( "#green" ).click(function(){
  $("#colorrr").attr("href","css/green-color.css");
});