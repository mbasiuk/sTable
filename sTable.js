(function ($) {
  /*
      sTable
      Author: Mykhailo Basiuk
      License: Dual licensed MIT (http://www.opensource.org/licenses/mit-license) & GPL (http://www.opensource.org/licenses/gpl-license)
      Version 0.2.0
  */

    $.fn.sTable = function (options) {

        var settings = $.extend({
            parseValue: function ($tr, $td) {
                return parseInt($td.text().split(" ").join(""), 10);
            },
            compare: function (a, b) {
                if (a.value > b.value)
                    return 1;
                if (a.value < b.value) {
                    return -1;
                }
                return 0;
            }
        }, options);

        this.each(function () {
            var $th = $(this);
            var index = $th.index() + 1;
            var tbody = $th.parents("table").find("tbody");

            var values = tbody.find("tr").map(function () {
                var $tr = $(this);
                var $td = $tr.find('td:nth-child(' + index + ')');
                var value = settings.parseValue($tr, $td);
                return { element: $tr, value: value };
            });

            values.sort(settings.compare);

            var direction = $th.data("direction");
            $th.data("direction", !direction);

            if (!direction) {
                values = values.get().reverse();
            }

            for (var i = 0; i < values.length; i++) {
                values[i].element.prependTo(tbody);
            }
        });

        return this;

    }
}(jQuery));
