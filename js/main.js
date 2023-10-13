$("div.abstract").hide()
$("div.bibtex").hide()

$(window).on('load', function(){ 
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    
  })
  
  currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      
    } else {
      $('.panel-cover').css({'max-width': '400px', 'width': '40%'})
	  
    }

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '/Deniz.Engin/' && window.location.pathname !== '/Deniz.Engin/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

});
$("a.abstract").on("click",function(){
  a=$(this).parent().parent().siblings("div.abstract")
  if (a.is(":visible")){
    a.fadeOut(500)
  }
  else {a.set
    a.fadeIn(500)}
})
$("a.bibtex").on("click",function(){
  a=$(this).parent().parent().siblings("div.bibtex")
  if (a.is(":visible")){
    a.fadeOut(500)
  }
  else {a.set
    a.fadeIn(500)}
})