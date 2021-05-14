'use strict';

(function () {
  var tabs = document.querySelectorAll('.tab');
  var tabsContents = document.querySelectorAll('.tab-content');

  tabsContents.forEach(function (tab) {
    if (!tab.classList.contains('tab-content--start-open')) {
      tab.classList.add('tab-content--hide');
    }
  });

  if (tabs.length > 0) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (evt) {
        evt.preventDefault();
        tab.classList.toggle('tab--open');
        tab.parentNode.querySelector('.tab-content').classList.toggle('tab-content--hide');
      });
    });
  }

})();
