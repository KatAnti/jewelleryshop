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
