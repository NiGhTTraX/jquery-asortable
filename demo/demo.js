$(document).ready(function() {
	$("#as1").asortable({
		items: ":not(.no)",
		tolerance: "pointer"
	}).disableSelection();
});

