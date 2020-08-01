
   
var swiper = new Swiper('.product-slider', {

  
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },

    fadeEffect: {
        crossFade: true
    },

   
    
    
    autoplay:  {
       
        delay: 2500,
        
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    loop: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    mousewheel: {
        invert: true
    },
    
    on: {
        init: function () {
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#' + target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#' + target).addClass('active');

    if (swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if (swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function () {
    $(this).find('.heart').toggleClass("is-active");
});