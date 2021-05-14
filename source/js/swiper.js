'use strict';

(function () {
  var mobileWidth = window.matchMedia('(max-width: 768px)');
  var sliderContainer = document.querySelector('.swiper-container');

  var swiper = new window.Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    init: false,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });

  var setSlidesCounter = function () {
    var bullets = Array.from(document.querySelectorAll('.swiper-pagination-bullet'));
    var currentDots = document.querySelector('.swiper-count-mobile__current');
    var totalDots = document.querySelector('.swiper-count-mobile__total');
    var countOfActiveBullet = bullets.findIndex(function (item) {
      return item.classList.contains('swiper-pagination-bullet-active');
    }) + 1;


    totalDots.textContent = bullets.length;
    currentDots.textContent = countOfActiveBullet;
  };

  swiper.init();

  if (sliderContainer) {
    setSlidesCounter();

    mobileWidth.addEventListener('change', function () {
      setSlidesCounter();
    });

    swiper.on('slideChangeTransitionEnd', function () {
      setSlidesCounter();
    });
  }

})();
