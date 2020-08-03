var min = 0
var sec = 0
var mil = 0
var chrono = null
var $chrono = document.querySelector('#chrono')


function showChrono() {
    var _min = ('0' + min).slice(-2)
    var _sec = ('0' + sec).slice(-2)
    var _mil = ('0' + mil).slice(-2)
    $chrono.innerHTML = _min + ':' + _sec + ':' + _mil
}

function start() {
    if (chrono) return
    chrono = setInterval(() => {
        mil++

        if (mil == 10) {
            mil = 0
            sec++
        }
        
        if (sec == 60) {
            sec = 0
            min++
        }
        
        showChrono()

    }, 100)
}

function stop() {
    clearInterval(chrono)
    chrono = null
}

function reset() {
    stop()
    min = sec = mil = 0
    chrono = null
    showChrono()
}




// sound

var bleep = new Audio();
bleep.src = 'button.mp3';



$("#play").click(function(){
     $("#play").addClass("myclass2");  
     $(".play").addClass("icons2");  
      $("#pause").removeClass("myclass2");  
     $(".pause").removeClass("icons2");  
    $("#stop").removeClass("myclass2");  
     $(".stop").removeClass("icons2"); 
});

$("#pause").click(function(){
     $("#play").removeClass("myclass2");  
     $(".play").removeClass("icons2");
     $("#pause").addClass("myclass2");  
     $(".pause").addClass("icons2");  
     $("#stop").removeClass("myclass2");  
     $(".stop").removeClass("icons2"); 
});


$("#stop").click(function(){
     $("#stop").addClass("myclass2");  
     $(".stop").addClass("icons2");  
     $("#pause").removeClass("myclass2");  
     $(".pause").removeClass("icons2"); 
});


$("#reset").click(function(){
     $("#play").addClass("myclass2");  
     $(".play").addClass("icons2");  
      $("#pause").removeClass("myclass2");  
     $(".pause").removeClass("icons2");  
    $("#stop").removeClass("myclass2");  
     $(".stop").removeClass("icons2"); 
});

// adclass remove class