var nav = document.querySelector('.nav');
var headlineMobile = document.querySelector('.headlineMobile__menu');

var hideButton = document.querySelector('.hideButton');

var burger = document.getElementById('burger');

// burger.addEventListener('click', function () {
//   //now display a motherfuckin menu you idiot
//   headlineMobile.classList.toggle('hidden');
// });


$(document).ready(function () {
  var $obj = $('.nav');
  var top = $obj.offset().top - parseFloat($obj.css('marginTop').replace(/auto/, 0));

  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $obj.addClass('fixed');
    } else {
      // otherwise remove it
      $obj.removeClass('fixed');
    }
  });
});


$(document).ready(function () {
  var $obj = $('.headlineMobile');
  var top = $obj.offset().top - parseFloat($obj.css('marginTop').replace(/auto/, 0));

  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $obj.removeClass('nav__item');
      $obj.addClass('fixed');
    } else {
      // otherwise remove it
      $obj.removeClass('fixed');
    }
  });
});




