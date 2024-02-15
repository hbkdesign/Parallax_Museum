
$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();

    $('#parallax1').css('background-position', 'center ' + ((scrolledY*0.5)) + 'px');
    $('#parallax2').css('background-position', 'center ' + ((scrolledY*0.4)) + 'px');
  

    
});
