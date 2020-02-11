$(document).ready(function () {
  $('.yourCar').owlCarousel({
    stagePadding: 0,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplaySpeed: 1500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  $('.myCar').owlCarousel({
    stagePadding: 0,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplaySpeed: 1500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  

  $('#main-menu li').hover(function(){
    $(this).find('.sub-menu:first').slideDown(600);
  }, function(){
    $(this).find('.sub-menu:first').slideUp(600);
  });

  $(window).scroll(function(){
      if ($(this).scrollTop() > 2800) {
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

  $('.product-buy').click(function () { 
    alert('Chức năng chưa hoàn thiện');
    return false;
  });

  $('.content-more').slideUp(0);
  $('.product-detail').click(function(){
    $('.content-more').slideToggle(600);
    return false;
  });
});
