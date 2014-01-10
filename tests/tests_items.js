var attributes = ["position", "left", "top"];

module("drag_and_drop");
test("test_items", function() {
	var fixture = $("#qunit-fixture"),
			a = $("<div></div>"),
			item = $("<div></div>").addClass("test-item").css("position", "absolute");

	item.clone().attr("id", "1").css({left: 10, top: 10}).appendTo(a);
	item.clone().attr("id", "2").css({left: 40, top: 40}).addClass("no").appendTo(a);
	item.clone().attr("id", "3").css({left: 70, top: 70}).appendTo(a);
	a.appendTo(fixture);

	a.asortable({
		tolerance: "pointer",
		items: ".test-item:not(.no)"
	});

	var positions = $(".test-item:not(.no)").map(function() {
		return $(this).css(attributes);
	}).get();
	var values = [3, 1];

	dd(".test-item:first", ".test-item:last");
	testAsortable(".test-item:not(.no)", positions, values);
});

test("test_cancel", function() {
	var fixture = $("#qunit-fixture"),
			a = $("<div></div>"),
			item = $("<div></div>").addClass("test-item").css("position", "absolute");

	item.clone().attr("id", "1").css({left: 10, top: 10}).appendTo(a);
	item.clone().attr("id", "2").css({left: 40, top: 40}).addClass("no").appendTo(a);
	item.clone().attr("id", "3").css({left: 70, top: 70}).appendTo(a);
	a.appendTo(fixture);

	a.asortable({
		tolerance: "pointer",
		cancel: ".no"
	});

	var positions = $(".test-item").map(function() {
		return $(this).css(attributes);
	}).get();
	var values = [2, 3, 1];
	dd(".test-item:first", ".test-item:last");
	testAsortable(".test-item", positions, values);
});

