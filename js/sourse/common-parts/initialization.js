let mainSlider = $('.main-slider');

mainSlider.lightSlider({
  item:1,
  loop:false,
  slideMove:2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,
  responsive : [
      {
          breakpoint:800,
          settings: {
              item:2,
              slideMove:1,
              slideMargin:6,
            }
      },
      {
          breakpoint:480,
          settings: {
              item:2,
              slideMove:1
            }
      }
  ]

});  
let thumbSlider = $('.thumb-slider');

thumbSlider.lightSlider({
  gallery:true,
  item:1,
  loop:true,
  thumbItem:9,
  slideMargin:0,
  enableDrag: false,
  currentPagerPosition:'left',
  onSliderLoad: function(el) {
      el.lightGallery({
          selector: '.thumb-slider .lslide'
      });
  }   
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

