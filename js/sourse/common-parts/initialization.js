let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
  margin: 30
});


$('.input-date').each(function(){
  let dp = new AirDatepicker(this,{
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({date}) {
      $(this).addClass('input-empty');
      // console.log('done', date) 
    }
  },
  );
})

let slider = tns({
  "container": '.tiny-slider',
  "items": 3,
  "slideBy": "page",
  "mouseDrag": true,
  "swipeAngle": false,
  "speed": 400
});

let sliderVerticale = tns({
  "container": '.tiny-slider-verticale',
  "items": 3,
  "axis": "vertical",
  "slideBy": "page",
  "mouseDrag": true,
  "swipeAngle": false,
  "speed": 400
});

let sliderThumbOrigin = tns({
    "container": ".tiny-slider-thumb",
    "items": 3,
    "slideBy": "page",
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 400
});
let sliderThumb = tns({
    "container": ".tiny-slider-thumb-in",
    "items": 3,
    "controlsContainer": "#customize-controls",
    "navContainer": ".tiny-slider-thumb-in",
    "navAsThumbnails": true,
    "autoplay": true,
    "autoplayTimeout": 1000,
    "autoplayButton": "#customize-toggle",
    "swipeAngle": false,
    "speed": 400
});
