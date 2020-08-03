// Call RotateMe Plugin
$.fn.RotateMe = function() {
  $this = $(this);
  
  $(".rotatable").on("mousedown touchstart", function() {
    rotateable = 1;
    if (rotateable) {
      $this.each(function() {
        var body = $(document),
            angler = $this.find(".rotatable").parent(),
            angler2 = angler.siblings();
        angler.on("mousedown touchstart", mouseDown);
        body.on("mouseup touchend", mouseUp);
        
        function setAngle(value) {
          angler.css("transform", "rotate(" + value + "deg)");
        }
        
        function mouseDown(event) {
          body.on("mousemove.rotatable", handleMove);
          body.on("touchmove.rotatable", handleMove);
          handleMove(event);
          event.preventDefault();
        }
        
        function mouseUp(event) {
          body.off("mousemove.rotatable", handleMove);
          body.off("touchmove.rotatable", handleMove);
          rotateable = false;
        }
        
        function handleMove(event) {
          if (rotateable) {
            var mouseX = event.pageX;
            var mouseY = event.pageY;
            
            setAngle(0);
            var ofs = angler.offset();
            ofs.left += angler.height()/2;
            ofs.top += angler.width()/2;
            
            var x = mouseX - ofs.left;
            var y = mouseY - ofs.top;
            
            var angle = Math.atan2(x, y) * 180 / Math.PI;
            angle = 180 - angle;
            // strip decimal, go between 0-360
            angle = ((angle + 360) | 0) % 360;
            setAngle(angle);
          }
        }
      });
    }
  });
};

// Initialize Demo
$(document).ready(function() {
  var rotateable = false;
  
  $('.element').drag('start',function( ev, dd ){
    dd.attr = $( ev.target ).prop("className");
    dd.width = $( this ).width();
    dd.height = $( this ).height();
  }).drag(function( ev, dd ) {
    var props = {};
    if ( dd.attr.indexOf("E") > -1 ){
      props.width = Math.max( 32, dd.width + dd.deltaX );
    }
    if ( dd.attr.indexOf("S") > -1 ){
      props.height = Math.max( 32, dd.height + dd.deltaY );
    }
    if ( dd.attr.indexOf("W") > -1 ){
      props.width = Math.max( 32, dd.width - dd.deltaX );
      props.left = dd.originalX + dd.width - props.width;
    }
    if ( dd.attr.indexOf("N") > -1 ){
      props.height = Math.max( 32, dd.height - dd.deltaY );
      props.top = dd.originalY + dd.height - props.height;
    }
    if ( dd.attr.indexOf("element") > -1 ){
      props.top = dd.offsetY;
      props.left = dd.offsetX;
    }
    $( this ).css( props );
  });
  
  // Rotate 360 Degrees 
  $(".element").RotateMe();
});

