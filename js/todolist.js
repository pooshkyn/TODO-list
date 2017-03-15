
$("#list").on("click", "li", function() {
	$(this).toggleClass("done");
});

$("#list").on("click", ".delete", function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("#newQuest").keypress(function(event) {
	if(event.which === 13){
		var quest = $(this).val();
		$("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash\"></i></span>" + quest + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function () {
	$("#input").fadeToggle();
});

$("#add").click(function(){
	var quest = $("#newQuest").val();
		$("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash\"></i></span>" + quest + "</li>");
		$("#newQuest").val("");
		
});

