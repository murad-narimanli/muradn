 $(document).ready(function(){

  $( function() {
    $( ".datepicker" ).datepicker();
  } );



  function scrolling(){ 
  			 if ($(window).scrollTop()>100){
  			 		$(".navbar").removeClass("navbar-dark" );
  			 		$(".navbar").addClass("bg-white navbar-light .shadow");

  			 }
  			  if ($(window).scrollTop()<100){
  			 		$(".navbar").addClass("navbar-dark");
  			 		$(".navbar").removeClass("bg-white navbar-light .shadow",);

  			 }
  			  if ($(window).scrollTop()>300){
      			  $(".mytext1").fadeIn(800);
      			  $("#ext").fadeIn(800);
  			  }
  			   if ($(window).scrollTop()>1000){
      			  $("#services").fadeIn(900);
  			  }
  			   if ($(window).scrollTop()>1300){
      			  $("#internal").fadeIn(900);
  			  }
  	 }
        $(window).scroll(function(){
            scrolling();
        });
        $("#mytext").fadeIn(500);
        $(".internal").click(function(){
            $(".external").removeClass("orange");
            $(".internal").addClass("orange");
            
        });
        $(".external").click(function(){
            $(".internal").removeClass("orange");
            $(".external").addClass("orange");       
        });
});

