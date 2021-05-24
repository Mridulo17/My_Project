$('.navigation nav a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
// smooth scroll js
$navOffset=$('.navigation').offset().top;
$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navOffset){
        $('.navigation').addClass('fixed');   
    }
    else{
        $('.navigation').removeClass('fixed');  
    }
});

$('body').scrollspy({ target: '#navbarSupportedContent' });
$('button.btn-link').click(function(){
    $('button.btn-link').removeClass('active');
    $(this).addClass('active');
});

// smooth scroll js
$('.team_part').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
    dots: true,
    arrows:false,
    autoplay: true,
    
     responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//team-part slide end

$('.client_part').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
    dots: true,
    arrows:false,
    autoplay: true,
    
});
//client slide end

var mixer = mixitup('.filter', {
    selectors: {
        target: '.iteam'
    },
    animation: {
        duration: 300
    }
});
//filter ends

$('.testimonials_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
    dots: true,
    arrows:false,
    autoplay: true,
    
});
//testimonials slide ends