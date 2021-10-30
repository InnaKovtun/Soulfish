$(document).ready(function(){
    let menuBtn = $('.top-nav_btn');
    let sidebarBtn = $('.left-sidebar_btn');
    let menu = $('.top-nav_menu');
    let sidebarMenu = $('.left-sidebar_menu');

    menuBtn.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('top-nav_menu__active');
    });

    sidebarBtn.on('click', function(event){
        event.preventDefault();
        sidebarMenu.toggleClass('left-sidebar_menu__active');
    });

    $('.gallery').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});

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