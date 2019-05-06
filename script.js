

$(document).ready(function(){
	$("#clearTile").click(function(){
		$("#list li").hide();
	});

	$("#resetTile").click(function(){
		$("#list li").show();
	});

	$("#list button").click(function(){
		$(this).parent().hide();
	});

	$(".bodytext p").dblclick(function(){
		$(this).hide();
		$(this).nextUntil("p").show();
	});

	$(".bodytext button").click(function(){
		$(this).hide();
		$(this).prev().hide();
		$(this).prev().prev().text($(this).prev().val());
		$(this).prev().prev().show();

	});
});

        var slide = 0;
        carousel();

        function carousel() {
            var i;
            var allSlides = document.getElementsByClassName("image");
            for (i=0; i < allSlides.length; i++) {
                allSlides[i].style.display = "none";
            }
            slide++;
            if (slide > allSlides.length) {slide = 1}
            allSlides[slide-1].style.display = "block";
            setTimeout(carousel, 3000);
            }


