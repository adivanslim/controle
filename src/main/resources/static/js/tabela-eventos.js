$(document).ready(function() {
	
	$("table").tablesorter();
	
	$("tr").each(function() {

		$(this).hover(function() {
			$(this).css("cursor", "pointer");
		});

	});
});

