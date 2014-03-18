/**
 * Copyright (c) 2014 Andrei Picus
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */


$.widget("nighttrax.asortable", $.ui.sortable, {
	options: {
		attributes: ["position", "left", "top", "transform"],
		existingSortable: false
	},

	_create: function() {
		var that = this;

		this.element.addClass("asortable");

		// Store positions.
		this._refreshPositions();

		if (!this.options.existingSortable) {
			// Initialize new sortable plugin passing in all options.
			this.element.sortable(this.options);
		}

		// Bind special listeners.
		this.element.on("sortstart", function(e, ui) {
			if (ui.item)
				ui.placeholder.css(ui.item.css(that.options.attributes));
		});

		this.element.on("sortchange", function(e, ui) {
			var items = that.options.items;

			// We need to avoid the helper and the original item in case the helper is
			// cloned.
			$(items, this).not(ui.helper.add(ui.item)).each(function(i) {
				$(this).css(that.originalPositions[i]);
			});
		});

		this.element.on("sortupdate", function(e, ui) {
			var items = that.options.items;

			ui.item.css(that.originalPositions[$(items, this).index(ui.item)]);
		});
	},

	_destroy: function() {
		this.element.removeClass("asortable");
		if (!this.options.existingSortable) {
			this.element.sortable("destroy");
		}
	},

	_refreshPositions: function() {
		var attributes = this.options.attributes;

		this.originalPositions = $(this.options.items, this.element).map(function() {
			return $(this).css(attributes);
		}).get();
	},

	refreshPositions: function() {
		this._refreshPositions();
		this.element.sortable("refreshPositions");
	}
});

