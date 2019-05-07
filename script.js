

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

	$(function() {
		$(".allImages img:gt(0)").hide();
		setInterval(function(){
			$(".allImages :first-child").hide()
			.next('img').show()
			.end().appendTo(".allImages");}, 3000);
		});


});


