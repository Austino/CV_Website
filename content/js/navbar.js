$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");

    $('#nav-links').removeClass('col-6');
    $('#nav-links').addClass('col-12');
    

    $('.nav-link').removeClass('float-right');
    $('.nav-link').removeClass('pl-4');
    $('.nav-link').addClass('float-left');
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
    $('#nav-links').removeClass('col-12');
    $('#nav-links').addClass('col-6');
    
    $('.nav-link').removeClass('float-left');
    $('.nav-link').addClass('float-right');
    $('.nav-link').addClass('pl-4');
}); 