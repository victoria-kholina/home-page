jQuery(document).ready(function(){
    $(".video-bg").hide().fadeIn(1000);
    
    $(window).resize(function() {
        if(($(window).width()>'992') && ($(".left-menu").hasClass("menu-opened")) ){
            closeMenu();
        }
    });
    
    $(".left-menu-btn").click(function () {
        if($(".left-menu").hasClass("menu-opened")){
            closeMenu();
        } else {
            openMenu();
        };
      });
    
    $(".close-menu").click(function () {
        closeMenu();
    });
    
    function openMenu() {
        $(".left-menu").animate({left: '0'},500);
        $(".left-menu").removeClass("menu-closed").addClass("menu-opened");
        $("body").css({
            "position": "relative",
            "overflow-x": "hidden",
            "left": "0"});
        $("body").animate({left: '250px'},500);
    };
    
    function closeMenu() {
        $(".left-menu").animate({left: '-250px'},500);
        $("body").animate({left: '0'},500);
        $("body").css("overflow", "auto");
        $(".left-menu").removeClass("menu-opened").addClass("menu-closed");
    };
    
});