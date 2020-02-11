$(document).ready(function(){
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

      $('.product-buy, .number-pagi').click(function () { 
        alert('Chức năng chưa hoàn thiện');
        return false;
      });
});