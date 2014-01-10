/* jslint unused: false */

function testAsortable(items, positions, values) {
	var attributes = ["position", "left", "top"];

	$(items).each(function(i) {
		deepEqual($(this).css(attributes), positions[i],
					"Item " + i + " has the correct position attributes");
		equal($(this).attr("id"), values[i],
					"Item " + i + " has the correct content");
	});
}

function dd(from, to) {
	// Drag and drop from -> to.
	var fromOffset = findCenter($(from)),
			toOffset = findCenter($(to)),
			dx = toOffset.clientX - fromOffset.clientX,
			dy = toOffset.clientY - fromOffset.clientY;

	$(from).simulate("drag", {dx: dx, dy: dy});
}

function findCenter(elem) {
	var offset,
			document = $(elem[0].ownerDocument);
	offset = elem.offset();

	return {
			clientX: offset.left + elem.outerWidth() / 2 - document.scrollLeft(),
			clientY: offset.top + elem.outerHeight() / 2 - document.scrollTop()
	};
}
/* jslint unused: true */

