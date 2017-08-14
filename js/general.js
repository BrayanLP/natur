$( document ).ready(function() { 
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome/') > -1;
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox/') > -1;
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf('opera/') > -1;
    var is_ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (isMobile.any()) {
    } else {
        /* NiceScroll proys */
    $("html").niceScroll({
        touchbehavior:false,
        cursorcolor:"#fdcb42",
        cursoropacitymax:16,
        cursorborder:"0px dashed #ffffff",
        cursorwidth:15,
        cursorborderradius:"7.5px",
        background:"#fff",
        zindex:9999
       });
        switch (true) {
            case (is_chrome):
                break;
            case (is_firefox):
                break;
            case (is_safari):
                break;
            case (is_opera):
                break;
            default:
                $('body').addClass('iexplorer');
                break;
        }
    } 
 

    function initCarousel(){
        $("#slider_carousel").owlCarousel({
            autoPlay: 3000,
            navigation : false,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            navigation : false,
            pagination: false
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false 
        });

        $("#noticias_carousel").owlCarousel({ 
            autoPlay: 3000, //Set AutoPlay to 3 seconds 
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            pagination: false

        });

        $("#productos_carousel").owlCarousel({ 
            autoPlay: 3000, //Set AutoPlay to 3 seconds 
            items : 5,
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [979,4],
            pagination: false

        });
    };

    function initProductos(){ 
        $('#carousel_productos').carousel({
            shift: -25,
            dist: -30,
            padding: 100,
            indicators: true
        }); 
    };

    function initSelect(){
        $('select').material_select();
    }

    new WOW().init();

    initCarousel();
    initProductos(); 
    initSelect();

});
$(document).on("scroll",function(){
    if($(document).scrollTop()>91 ){ 
         
        $("header nav").addClass("cont-menu-top2"); 
      
    } else{
        $("header nav").removeClass("cont-menu-top2"); 
        
    } 
});

