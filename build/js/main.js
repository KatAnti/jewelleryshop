'use strict';

(function () {
  var buttonMobile = document.querySelector('.catalog__mobile-filter');
  var filter = document.querySelector('.catalog__filter');
  var buttonCloseFilter = document.querySelector('.catalog__filter-close');

  if (filter && buttonMobile && buttonCloseFilter) {
    filter.classList.add('catalog__filter--hide');

    buttonMobile.addEventListener('click', function (evt) {
      evt.preventDefault();
      filter.classList.remove('catalog__filter--hide');
      buttonMobile.classList.add('catalog__mobile-filter--hide');
    });

    buttonCloseFilter.addEventListener('click', function (evt) {
      evt.preventDefault();
      filter.classList.add('catalog__filter--hide');
      buttonMobile.classList.remove('catalog__mobile-filter--hide');
    });
  }
})();

'use strict';

(function () {
  var mobileWidth = window.matchMedia('(max-width: 768px)');
  var body = document.querySelector('.body');
  var header = body.querySelector('.header');
  var menu = header.querySelector('.main-nav');
  var menuToggle = header.querySelector('.header__mobile-menu-btn');
  var logo = header.querySelector('.header__logo');
  var basket = header.querySelector('.header__basket-link');

  menu.classList.remove('main-nav--nojs');
  header.classList.remove('header--nojs');
  logo.classList.remove('header__logo--nojs');
  basket.classList.remove('header__basket-link--nojs');

  var toggleMobileMenu = function () {
    body.classList.toggle('body--overflow');
    menu.classList.toggle('main-nav--open');
    header.classList.toggle('header--beige');
    logo.classList.toggle('header__logo--white');
    basket.classList.toggle('header__basket-link--white');
  };

  menuToggle.addEventListener('click', function () {
    toggleMobileMenu();
  });

  mobileWidth.addEventListener('change', function () {
    if (!mobileWidth.matches && menu.classList.contains('main-nav--open')) {
      toggleMobileMenu();
    }
  });

})();

'use strict';

(function () {
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
      }
    },
  });

  swiper.init();
})();

'use strict';

(function () {
  var tabs = document.querySelectorAll('.tab');
  var tabsContents = document.querySelectorAll('.tab__content');

  tabsContents.forEach(function (tab) {
    tab.classList.add('tab__content--hide');
  });

  if (tabs.length > 0) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        tab.classList.toggle('tab--open');
        tab.parentNode.querySelector('.tab__content').classList.toggle('tab__content--hide');
      });
    });
  }

})();
