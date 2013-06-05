$("document").ready(function(){
//Custom selector case insensitive :Contains
	jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
		return function( elem ) {
			return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});


//Click a tag to hide all comic pages except those that contain the tag
	$(".tag").on('click',function(){
		var classname = "."+$(this).attr("class").split(" ")[1]
		var alltheseones = $("span").filter(classname)
		if ($(this).hasClass("highlighted")){
			$(".comicpage").removeClass('hidden')
			alltheseones.removeClass("highlighted")
		}
		else
		{
			$(".tag").removeClass("highlighted")
			$(".comicpage").addClass('hidden')
			alltheseones.closest(".comicpage").removeClass('hidden')
			alltheseones.addClass("highlighted")
		}
		
		// Scroll to top instance of this tag
		var container = $('#events')
		var scrollTo = $(".comicpage"+classname)
		$('html,body').animate({
			scrollTop: scrollTo.offset().top - 100 + container.scrollTop()
		}, 900);
	})

//Click "show all" to show all comic pages and tags
	$('.all').on('click',function(){
		$(".tag").removeClass("highlighted")
		$(".alpha").removeClass("highlighted")
		$(".comicpage").removeClass('hidden')
		$(".tags").removeClass('hidden')
	})

//Show only letters that exist
	$(".alpha").each(function(){
		var alphabet = $(this).attr("class").split(" ")[1]
		var alltheseones = $("#jscloud").find("span[class^='"+alphabet+"'],span[class*=' "+alphabet+"']")
		if (alltheseones.length < 2) {
			$(this).remove()
		}
	})
	
//Click on letter of alphabet to show only tags starting with that letter
	$(".alpha").on("click",function(){
		var alphabet = $(this).attr("class").split(" ")[1]
		if (alphabet=="num")
		{
		}
		else {
			var alltheseones = $("#jscloud").find("span[class*=' "+alphabet+"']")
			$(".alpha").removeClass("highlighted")
			$(this).addClass("highlighted")
			$("#jscloud").find(".tags").addClass('hidden')
			alltheseones.closest(".tags").removeClass('hidden')
		}
	})
	
//Type to narrow down results based on text field input
	$(".search").on("keyup",function(){
		$(".tags,.comicpage").addClass("hidden")
		if ($(this).val()) {
			$("p:Contains('"+$(this).val()+"')").removeClass("hidden")
		}
		else {
			$(".tags,.comicpage").removeClass("hidden")
		}
	})

//show "scroll to top" on page load if already scrolled down
	var y = $(this).scrollTop();
	if (y > 200) {
		$('#topscroll').removeClass("hidden");
	}

//show "scroll to top" button if page scrolled down
	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 200) {
			$('#topscroll').slideDown(300);
		} else {
			$('#topscroll').slideUp(300);
		}
	});

//Scroll to top if "scroll to top" button clicked
	$('#topscroll').on('click',function(){
		$("html,body").animate({
			scrollTop: 0
		}, 900);
	})
})