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
