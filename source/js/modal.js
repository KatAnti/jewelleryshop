'use strict';

(function () {
  var ESCAPE = 'Escape';

  var pageBody = document.querySelector('.body');

  var cartPopup = pageBody.querySelector('.cart-popup');
  var addToCartBtn = pageBody.querySelector('.product-detail__cart-btn');

  var loginPopup = pageBody.querySelector('.login-popup');
  var loginBtn = pageBody.querySelector('.header__login-link');
  var loginMobileBtn = pageBody.querySelector('.main-nav__login-link');

  var overlay = pageBody.querySelector('.body__overlay');

  var storageEmail = localStorage.getItem('email');

  if (loginPopup) {
    var emailInput = loginPopup.querySelector('#login-email');
  }

  if (cartPopup || loginPopup) {
    var closeButtons = pageBody.querySelectorAll('.popup__close-button');
  }

  var onEscKeypress = function (evt) {
    if (evt.key === ESCAPE) {
      var currentPopup = pageBody.querySelector('.popup--show');
      closePopup(currentPopup);
    }
  };

  var closePopup = function (popup) {
    popup.classList.remove('popup--show');
    overlay.classList.remove('body__overlay--show');
    pageBody.classList.remove('body--overflow');

    document.removeEventListener('keydown', onEscKeypress);
  };

  var openPopup = function (popup) {
    popup.classList.add('popup--show');
    overlay.classList.add('body__overlay--show');
    pageBody.classList.add('body--overflow');

    document.addEventListener('keydown', onEscKeypress);
  };

  var setEmail = function () {
    emailInput.focus();

    if (storageEmail) {
      emailInput.value = storageEmail;
    }
  };

  if (closeButtons) {
    closeButtons.forEach(function (closeButton) {
      closeButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        var currentPopup = evt.target.closest('.popup');
        closePopup(currentPopup);
      });
    });
  }

  if (addToCartBtn && cartPopup && overlay) {
    addToCartBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup(cartPopup);
      cartPopup.focus();
    });


    overlay.addEventListener('click', function (evt) {
      if (evt.target === overlay) {
        closePopup(cartPopup);
      }
    });
  }

  if (loginBtn && loginPopup && overlay) {
    loginBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup(loginPopup);
      setEmail();
    });

    loginMobileBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup(loginPopup);
      setEmail();
    });

    overlay.addEventListener('click', function (evt) {
      if (evt.target === overlay) {
        closePopup(cartPopup);
      }
    });

    loginPopup.addEventListener('submit', function () {
      if (emailInput.value) {
        localStorage.setItem('email', emailInput.value);
      }
    });
  }
})();
