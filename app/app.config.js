(function(){
    'use strict';

    angular
        .module("superApp")
        .config(config);

    config.$inject = ["localStorageServiceProvider"];

    function config(localStorageServiceProvider){
        localStorageServiceProvider
            .setPrefix('superApp');
    }
})();
