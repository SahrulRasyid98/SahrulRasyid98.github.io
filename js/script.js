$('.page-scroll').on('click', function(e){
  //Ambil Href
  var href = $(this).attr('href');

  //mengambil setiap element href
  var sectionHref = $(href);

  //animate
  $('html, body').animate({
    scrollTop: sectionHref.offset().top-50
  },1000,'easeInExpo');

  e.prefentDefault();
})