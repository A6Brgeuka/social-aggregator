(function () {
    angular.module("superApp.core")
        .controller("CoreController", coreController);

    coreController.$inject = [];

    function coreController() {
        var vm = this;

        vm.test = "test";
    }
})();
