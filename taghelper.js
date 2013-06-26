$("document").ready(function(){
	
	// Initialise "things to copy" array, "comic number" and the zeroclipboard thingo
	var thingstocopy = []
	var comicnumber
	var comicComment = ""
	var recentTags = []
	var clip = new ZeroClipboard($(".copyit"))
	
	// Function that moves cursor to end of text field when clicked on
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
	
	// Attach function that moves cursor to end of text input field
	$("#tocopy").on("focus",function(){
		moveCaretToEnd(this);
		
		// Work around Chrome's little problem
		$(this).onmouseup = function() {
			// Prevent further mouseup intervention
			moveCaretToEnd(this);
			$(this).onmouseup = null;
			return false;
		};
	})
	
	// Load the comic selected in the dropdown field
	$(".title").on("change",function(){
		$(".tag").addClass('hidden')
		$(".comic").addClass('hidden')
		
		var classComicNumber = '.'+$(this).val()
		comicComment = ""
		var comicCommentSplit = $(this).find('option[value*="'+$(this).val()+'"]').html().split(": ")
		comicComment = comicCommentSplit.slice(1).join(": ")
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
		$("#tocopy").val(comicnumber+thingstocopy.sort().join("\t")+"\t#"+comicComment)
	})
	
	// "next" and "previous" buttons - load the next or previous page by triggering a change in the dropdown menu
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
	
	// Put clicked tags into the "to copy" text field; remove them if that tag is already selected; add tags to the "recent" div
	$("#cloud").on("click",".tagcloud",function(){
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
			$("#tocopy").val(comicnumber+thingstocopy.sort().join("\t")+"\t#"+comicComment)
		}
		else {
			$("#tocopy").val(thingstocopy.sort().join("\t")+"\t#"+comicComment)
		}
		if (recentTags.indexOf(classname) == -1) {
			recentTags.push(classname)
			var appendRecent = "Recent Tags: "
			for (i=0;i<recentTags.length;i++){
				var currentTag = recentTags.sort()[i]
				appendRecent+='<span class="tagcloud '+currentTag
				if ($("."+currentTag).hasClass("highlighted")) {
					appendRecent+=' highlighted'
				}
				appendRecent+='">'+recentTags.sort()[i]+'</span> '
			}
		}

		$(".recent").html(appendRecent)
	})
})