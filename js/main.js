$(document).ready(function(){
    $('#event-carousel').carousel({
        indicators: false
    });

    $('.carousel-next').on('touchstart', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#event-carousel').carousel('next');
    });
    
    $('.carousel-prev').on('touchstart', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#event-carousel').carousel('prev');
    });

    $("#toggle").click(function() {
        $(".menu").toggleClass("on");
        $("#menu").slideToggle();
      });
});
