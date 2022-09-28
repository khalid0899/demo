$( document ).ready(function() {
// start banner_type js

$(function(){
	$(".typed").typed({
		strings: ["Web Designer.", " Web Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

// end banner_type js

//testimonia slick
$('.testimonial-part').slick({
	
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow:".prev",
	nextArrow:".next",
	
  });

// blog venibox
  new VenoBox({
	selector: '.venobox'
  });


// start preloader
  setTimeout(() => {
	$(".preloader").slideUp()
  }, 5000);
  
  // backtotop start
  $(".backtotop").click(function () {
	$("html,body").animate({
	  scrollTop: 0
	})
  })
  
  $(window).scroll(function () {
	if ($(window).scrollTop() >= 714) {
	  $(".backtotop").fadeIn()
	} else {
	  $(".backtotop").fadeOut()
	}
  
	if ($(window).scrollTop() > 300) {
	  $(".menu").addClass("fixedmenu")
	} else {
	  $(".menu").removeClass("fixedmenu")
	}
  
  })

  //  
  //scroll menu color

  $(window).scroll(function(){

	var scrolling = $(window).scrollTop();
  
	if (scrolling > 20){
	  $(".menu_bg").addClass("bg")
	}else{
	  $(".menu_bg").removeClass("bg")
	}
  })

});

  //sidemenu

  $(".troggole").click(function(){
	$(".sidemenu").toggleClass("bg")
	
	

  })
  //remove class
  $("li").click(function(){
	$(".sidemenu").removeClass("bg")
	
	

  })
  


  // wow js
  new WOW().init();
  




  



