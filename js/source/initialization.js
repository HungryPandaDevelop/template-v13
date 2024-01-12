let mainSlider = $('.main-slider');

mainSlider.lightSlider({
  item: 1,
  loop: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'main-slider-container',
  adaptiveHeight: true,

});

let halfSlider = $('.half-slider');

halfSlider.lightSlider({
  item: 1,
  loop: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'half-slider-container',
  adaptiveHeight: true,
  pager: false

});

let partnersSlider = $('.partners-slider');

partnersSlider.lightSlider({
  item: 5,
  loop: true,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  adaptiveHeight: true,
});


let multySlider = $('.multy-slider');

multySlider.lightSlider({
  item: 3,
  loop: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  adaptiveHeight: true,

});




let thumbSlider = $('.thumb-slider');

thumbSlider.lightSlider({

  gallery: true,
  item: 1,
  thumbItem: 4,
  slideMargin: 0,
  enableDrag: false,
  currentPagerPosition: 'left',
  addClass: 'thumb-slider-container',
});


let thumbSliderVericale = $('.thumb-slider-verticale');

thumbSliderVericale.lightSlider({

  gallery: true,
  item: 1,
  vertical: true,
  verticalHeight: 300,
  enableDrag: true,
  controls: false,
  // vThumbWidth:50,
  thumbItem: 4,
});

let longSlider = $('.long-slider');

longSlider.lightSlider({

  item: 5,
  loop: true,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  adaptiveHeight: true,
  addClass: 'long-slider-container',
});





$('.input-date').each(function () {
  let dp = new AirDatepicker(this, {
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({ date }) {
      $(this).addClass('input-empty');
      // console.log('done', date) 
    }
  });
})

