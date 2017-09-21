//var btn1 = document.querySelector('#btn1');
//var btn2 = document.querySelector('#btn2');
//var slideIndex = 1;

//function plusDivs(n) {
  //showDivs(slideIndex += n);
//}

//function showDivs(n) {
  //var i;
  //var slides = document.querySelectorAll('.slide');

  //if ( n > slides.length) {
    //slideIndex = 1;
  //}

  //if ( n < 1 ) {
    //slideIndex = slides.length;
  //}

  //for (i = 0; i < slides.length; i++) {
    //slides[i].style.display = 'none';
  //}

  //slides[slideIndex-1].style.display = 'block';
//}

//showDivs(slideIndex);

//btn1.addEventListener('click', function () {
  //plusDivs(-1);
//});

//btn2.addEventListener('click', function () {
  //plusDivs(1);
//});
(function(global, $) {
  'use strict';

  var Slider = function(wrapper, btnL, btnR) {
    return new Slider.init(wrapper, btnL, btnR);
  };

  Slider.prototype = {
    plusDivs: function () {
      return 'yolo';
    }
  };

  Slider.init = function(wrapper, btnL, btnR) {
    var self = this;
    self.wrapper = wrapper;
    self.btnL = btnL;
    self.btnR = btnR;
  };

  Slider.init.prototype = Slider.prototype;

  global.Slider = global.$S = Slider;
})(window, jQuery);
