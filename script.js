 (function($){
     $(function(){
         //scroll to sections
         $(".jq--scroll-home").click(function(){
            $("html, body").animate({scrollTop: $(".jq--home").offset().top},100); 
         });
        
           $(".jq--scroll-about").click(function(){
            $("html, body").animate({scrollTop: $(".jq--about").offset().top}, 100); 
         });
        
         $(".jq--scroll-skills").click(function(){
            $("html, body").animate({scrollTop: $(".jq--skills").offset().top}, 100); 
         });
        
         $(".jq--scroll-projects").click(function(){
            $("html, body").animate({scrollTop: $(".jq--projects").offset().top}, 100); 
         });
        
         $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 100); 
         });
        
//         //Scroll button
//          $(".jq--scroll-button-first").click(function(){
//            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000); 
//         });
        
//          $(".jq--scroll-button-second").click(function(){
//            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1000); 
//         });
        
         //Mobile Navigation
        
         $(".jq--nav-icon").click(function(){
             $(".nav-background").slideToggle();
             $(".mobile-nav-back").fadeToggle();
             $("nav ul").fadeToggle();
            
         });
         //Podminky change hamburger icon and close icon
        
         $(".jq--image-hamburger").click(function(){
             if($(".jq--image-hamburger").attr("src")=="images/hamburgerMenu.png"){
             $($(".jq--image-hamburger").attr("src","images/crossMenu.png"));
         }
         else{
             $($(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
         } 
            
         })
        
       
     });
 })(jQuery);

