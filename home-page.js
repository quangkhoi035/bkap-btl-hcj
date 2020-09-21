$(document).ready(function(){
  $('.owl-carousel1').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })
  $('.owl-carousel2').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }

	})
  $('.owl-carousel3').owlCarousel({
		nav:true,
      dots : false,
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      navText: ["<img src='img/banner/arrow left.png'>","<img src='img/banner/arrow right.png'>"],
    })
  $('.owl-carousel4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
     autoplay: true,
    dots : false,
    navText: ["<img src='img/banner/arrow left2.png'>","<img src='img/banner/arrow right2.png'>"],
})
  $("#button-input").click(function(event) {
		var email = $("#form-input").val();
		var regx_email = /^[\w]+@[\w]+\.[a-z]{3,5}$/;
		if (regx_email.test(email)) {
			alert("Đăng ký thành công!")
		} else {
			alert("Email không hợp lệ!")
		}
		$("#form-input").val("");
	});
});