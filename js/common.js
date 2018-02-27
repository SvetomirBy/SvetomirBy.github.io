$(document).ready(function() {
    
    // $(".popup").magnificPopup({type:"image"});

    $(".animation-left").animated("fadeInLeft", "fadeOutDown");
    $(".section_header").animated("fadeInUp", "fadeOutDown");
    $(".animation-middle").animated("fadeInDown", "fadeOutUp");
    $(".animation-right").animated("fadeInRight", "fadeOutDown");

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

    $(".main_head").css("min-height", $(window).height()); // растяжка хедера на ширину экрана
	
	$(".sandwich, .menu_item").click(function() {
        $(".sandwich").toggleClass("active");
      });

    $(".toggle_mnu").click(function(){
        if ($(".top_mnu").is(":visible")){
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else{ 
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
      });
      $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
      });

});