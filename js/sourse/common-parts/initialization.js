let defaultSlider = $('.default-slider');

defaultSlider.lightSlider({
  item:1,
  loop:false,
  slideMove:2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  addClass: 'slider-light-item',
  adaptiveHeight: true,

});  

let partnersSlider = $('.partners-slider');

partnersSlider.lightSlider({
  item: 5,
  loop: true,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,
});  


let multySlider = $('.multy-slider');

multySlider.lightSlider({
  item: 3,
  loop:false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,

});  




let thumbSlider = $('.thumb-slider');

thumbSlider.lightSlider({
  gallery:true,
  item:1,
  loop:true,
  thumbItem:9,
  slideMargin:0,
  enableDrag: false,
  addClass: 'slider-light',
  currentPagerPosition:'left',

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

