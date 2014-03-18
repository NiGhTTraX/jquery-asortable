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

		ok(!a.hasClass("asortable"), "asortable destroyed");
		ok(!a.hasClass("ui-sortable"), "sortable destroyed");
});

test("test_existing_sortable", function() {
		var fixture = $("#qunit-fixture"),
				a = $("<div></div>");

		a.appendTo(fixture);
		a.sortable().asortable({existingSortable: true});

		ok(a.hasClass("asortable"));
});

test("test_existing_sortable_destroy", function() {
		var fixture = $("#qunit-fixture"),
				a = $("<div></div>");

		a.appendTo(fixture);
		a.sortable().asortable({existingSortable: true});
		a.asortable("destroy");

		ok(!a.hasClass("asortable"), "asortable destroyed");
		ok(a.hasClass("ui-sortable"), "Still has sortable class");
});

