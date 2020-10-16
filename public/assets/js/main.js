$(document).ready(function()  {
    if(screen.width <= 1023) {
        $('.fa-bars').on('click', function(){
            $('#sidebar').css('margin-left','0px');
        });
        $('.menu a').on('click', function(){
            $('#sidebar').css('margin-left','-240px');
        });
    }
});