﻿$(document).ready(function() {
	$('#clockCircle').children().css({"position": "absolute"})
	$('#clockCircle').css({
		"width": "600px",
		"height": "600px",
		"border": "3px solid purple",
		"position": "relative",
		"left": "350px"
	})
})	


setInterval(function(){
		var b= new Date()
		var hourDegree = b.getHours()*30
		var minuteDegree = b.getMinutes()*6
		var secondDegree = b.getSeconds()*6

$("#hour").css({"transform":"rotate("+hourDegree+"deg)"});
$("#minute").css({"transform":"rotate("+minuteDegree+"deg)"});
$("#seconds").css({"transform":"rotate("+secondDegree+"deg)"});



	}, 1000)