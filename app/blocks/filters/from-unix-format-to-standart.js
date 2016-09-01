(function () {
	angular.module("blocks.filters")
		.filter('FormatToStandartDate', formatToStandartDate);

	formatToStandartDate.$inject = [];

	function formatToStandartDate() {
		// Create the return function and set the required parameter name to **input**
		return function(date) {
			return moment.unix(date).format("HH:mm  MM.DD.YYYY")
		}

	};
})();