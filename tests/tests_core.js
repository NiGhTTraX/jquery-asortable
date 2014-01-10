module("core");
test("test_create", function() {
		var fixture = $("#qunit-fixture"),
				a = $("<div></div>");
		a.appendTo(fixture);
		a.asortable();

		ok(a.hasClass("asortable"));
});

test("test_destroy", function() {
		var fixture = $("#qunit-fixture"),
				a = $("<div></div>");
		a.appendTo(fixture);
		a.asortable();
		a.asortable("destroy");

		ok(!a.hasClass("asortable"));
});

