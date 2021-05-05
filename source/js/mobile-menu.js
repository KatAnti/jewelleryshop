'use strict';

(function () {
  var mobileWidth = window.matchMedia('(max-width: 768px)');
  var body = document.querySelector('.body');
  var header = body.querySelector('.header');
  var menu = header.querySelector('.main-nav');
  var menuToggle = header.querySelector('.header_mobile-menu-btn');
  var logo = header.querySelector('.header_logo');
  var basket = header.querySelector('.header_basket-link');

  menu.classList.remove('main-nav--nojs');
  header.classList.remove('header--nojs');
  logo.classList.remove('header_logo--white');
  basket.classList.remove('header_basket-link--white');

  var toggleMobileMenu = function () {
    body.classList.toggle('body--overflow');
    menu.classList.toggle('main-nav--open');
    header.classList.toggle('header--beige');
    logo.classList.toggle('header_logo--white');
    basket.classList.toggle('header_basket-link--white');
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
