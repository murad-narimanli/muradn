$('.message').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
    $("#Company").click(function(){
            $(".Company").removeClass("mybtn2");
            $(".Company").addClass("mybtn1");  
            $(".User").removeClass("mybtn1");     
            $(".User").addClass("mybtn2");  

             $("#Uname").hide();
            $("#Uemail").hide();
            $("#Upass").hide();


            $("#Cname").slideDown();
            $("#logo").slideDown();      
            $("#CEmail").slideDown();
            $("#CFile").slideDown();
            $("#CPass").slideDown();      
            $(".removable").slideDown();
        });
   $("#User").click(function(){
            $(".User").removeClass("mybtn2");
            $(".User").addClass("mybtn1");  
            $(".Company").removeClass("mybtn1");     
            $(".Company").addClass("mybtn2");  


            $("#Cname").hide();
            $("#CFile").hide();
            $("#CEmail").hide();
            $("#CPass").hide();
            $("#logo").hide();
            $(".removable").hide();


            $("#Uname").slideDown();     
            $("#Uemail").slideDown();
            $("#Upass").slideDown();     
        });
// $('#list li:eq(1)').append('<li>Position 3</li>');