$("document").ready(function(){
	$(".tag").on('click',function(){
		var classname = "."+$(this).attr("class").split(" ")[1];
		var alltheseones = $("span").filter(classname);
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
	$('.all').on('click',function(){
		$(".tag").removeClass("highlighted")
		$(".comicpage").removeClass('hidden')
	})
})