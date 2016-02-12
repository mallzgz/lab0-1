$(document).ready(function() {
	//console.log("hola");
	registerSearch();
});

function registerSearch() {
	$("#search").submit(function(ev){
		event.preventDefault();
		$.get($(this).attr('action'), {q: $("#q").val()}, function(data) {
			//$("#resultsBlock").empty().append(data);
			var plantilla = $('#plantillaTwitter').html();
    		var html = Mustache.to_html(plantilla, data);
    		$("#resultsBlock").empty().append(html);
		});	
		
	});
}