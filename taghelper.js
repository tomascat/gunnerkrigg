$("document").ready(function(){
	var thingstocopy = []
	var comicnumber
	var clip = new ZeroClipboard($(".copyit"))
	
	function moveCaretToEnd(el) {
		if (typeof el.selectionStart == "number") {
			el.selectionStart = el.selectionEnd = el.value.length;
		} else if (typeof el.createTextRange != "undefined") {
			el.focus();
			var range = el.createTextRange();
			range.collapse(false);
			range.select();
		}
	}
	
	$("#tocopy").on("focus",function(){
		moveCaretToEnd(this);
		
		// Work around Chrome's little problem
		textarea.onmouseup = function() {
			// Prevent further mouseup intervention
			moveCaretToEnd(this);
			textarea.onmouseup = null;
			return false;
		};
	})
	
	$(".tagcloud").css('font-size',function(){
		String($(this).data("size"))+"px"
	})
	$(".title").on("change",function(){
		$(".tag").addClass('hidden')
		$(".comic").addClass('hidden')
		
		var classComicNumber = '.'+$(this).val()
		
		var comicurl = "http://gunnerkrigg.com/?p="+String($(this).val())
		var comicframe = "<div class='comic "+$(this).val()+"'><iframe src='" + comicurl + "' width=800 height=800 /></div>"
		$(".comic").replaceWith(comicframe)
		
		$(classComicNumber).removeClass('hidden')
		
		$(".tagcloud").removeClass("highlighted")
		
		thingstocopy = []
		
		$(classComicNumber).each(function(){
			var tagname = $(this).text()
			thingstocopy.push(tagname)
		})
		comicnumber=String($(this).val())
		$("#tocopy").val(comicnumber+thingstocopy.sort().join("\t")+"\t")
	})
	
	$(".previous").on("click",function(){
		var classComicNumber = $(this).closest("#comics").find(".comic").attr("class").split(" ")[1]
		$(".title").val(parseInt(classComicNumber)-1)
		$(".title").trigger("change")
	})
	
	$(".next").on("click",function(){
		var classComicNumber = $(this).closest("#comics").find(".comic").attr("class").split(" ")[1]
		$(".title").val(parseInt(classComicNumber)+1)
		$(".title").trigger("change")
	})
	
	$(".tagcloud").on("click",function(){
		$(this).toggleClass("highlighted")
		var classname = $(this).attr("class").split(" ")[1]
		var indexof = thingstocopy.indexOf(classname)
		if (indexof == -1) {
			thingstocopy.push(classname)
		}
		else {
			thingstocopy.splice(indexof,1)
		}
		if (comicnumber) {
			$("#tocopy").val(comicnumber+thingstocopy.sort().join("\t")+"\t")
		}
		else {
			$("#tocopy").val(thingstocopy.sort().join("\t")+"\t")
		}
	})
})