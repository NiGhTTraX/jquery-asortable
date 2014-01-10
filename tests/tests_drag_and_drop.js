var attributes = ["position", "left", "top"];

module("drag_and_drop", {
		setup: function() {
				var fixture = $("#qunit-fixture"),
						a = $("<div></div>"),
						item = $("<div></div>").addClass("test-item").css("position", "absolute");

				item.clone().attr("id", "1").css({left: 10, top: 10}).appendTo(a);
				item.clone().attr("id", "2").css({left: 40, top: 40}).appendTo(a);
				item.clone().attr("id", "3").css({left: 70, top: 70}).appendTo(a);
				a.appendTo(fixture);

				a.asortable({tolerance: "pointer"});
		}
});
test("test_drag_first_to_last", function() {
	var positions = $(".test-item").map(function() {
		return $(this).css(attributes);
	}).get();
	var values = [2, 3, 1];

	dd(".test-item:first", ".test-item:last");
	testAsortable(".test-item", positions, values);
});

test("test_drag_last_to_first", function() {
	var positions = $(".test-item").map(function() {
		return $(this).css(attributes);
	}).get();
	var values = [3, 1, 2];

	dd(".test-item:last", ".test-item:first");
	testAsortable(".test-item", positions, values);
});

