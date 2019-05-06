

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
		$(".bodytext p").show();

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

        //             function changeText(para,edit,button) {
        //     document.getElementById(para).style.display = "none";
        //     document.getElementById(edit).style.display = "inline-block";
        //     document.getElementById(button).style.display = "inline-block";
        // }

        // function submit(edit,button,para) {
        //     var replace = document.getElementById(edit).value;
        //     document.getElementById(edit).style.display = "none";
        //     document.getElementById(button).style.display = "none";
        //     document.getElementById(para).innerHTML = replace;
        //     document.getElementById(para).style.display = "inline-block";
        // }

