(function() {
    angular.module("superApp.core", [
        //angular native modules + third party modules
        //..
        //cross-app module
        "superApp.blocks",
        "LocalStorageModule",
        "ngMaterial",
    ]);
})();
