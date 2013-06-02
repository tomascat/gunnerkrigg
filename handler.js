$("document").ready(function(){

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
})