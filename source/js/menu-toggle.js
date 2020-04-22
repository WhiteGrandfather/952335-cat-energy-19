'use strict';

(function () {
  var navMain = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.menu-toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');
  menuToggle.classList.add('menu-toggle--show');

  var onMenuToggle = function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      menuToggle.classList.add('menu-toggle--cross');
    } else {
      navMain.classList.add('main-nav--closed');
      menuToggle.classList.remove('menu-toggle--cross');
      navMain.classList.remove('main-nav--opened');
    }
  };

  menuToggle.addEventListener('click', onMenuToggle);
})()
