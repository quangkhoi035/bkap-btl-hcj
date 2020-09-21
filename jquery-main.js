$(function(){
	// var dollarPrefixFormat = wNumb({prefix: '$', decimals: 0});
    var slider = document.getElementById('slider');
            noUiSlider.create(slider, {
                start: [20, 80],
                connect: true,
                range: {
                    'min': 0,
                    'max': 100
                }
            });
     
});

 $(document).ready(function(){
          $(".design").click(function(){
            $(".design.active").removeClass("active");
            $(this).addClass("active");
          });
        });


