$(document).ready(function(){
    $('.yourCar').owlCarousel({
        stagePadding: 0,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplaySpeed: 1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $('#main-menu li').hover(function(){
        $(this).find('.sub-menu:first').slideDown(600);
      }, function(){
        $(this).find('.sub-menu:first').slideUp(600);
      });
    
      $(window).scroll(function(){
          if ($(this).scrollTop() > 1500) {
              $('.back-to-top').fadeIn();
          } else {
              $('.back-to-top').fadeOut();
          }
      });
      $('.back-to-top').click(function(){
          $("html, body").animate({ scrollTop: 0 }, 600);
          return false;
      });
    
      $('.search-box').hover(function(){
        $('#main-menu li a').toggleClass('menu-hover');
      });

      $('.product-buy, .post-buy, .post-add').click(function () { 
        alert('Chức năng chưa hoàn thiện');
        return false;
      });
});