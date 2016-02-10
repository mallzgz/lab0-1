/*$(function() {
    $.getJSON('https://www.dropbox.com/s/na4c4i01x9zjpkj/data.json?dl=0', function(data) {
    	console.log("hola");
        var template = $('#autoTPL').html();
        var info = Mustache.to_html(template, data);
         $('#inventarioListado').html(info);
    });
});*/

$(document).ready(function() {
	console.log("hola");
	registerSearch();
});

function registerSearch() {
	$("#search").submit(function(ev){
		event.preventDefault();
		$.get($(this).attr('action'), {q: $("#q").val()}, function(data) {
			$("#resultsBlock").empty().append(data);
		});	
	});
}