(function(){
    'use strict';

    angular
        .module("superApp")
        .run(["vkApi", "faceBookApi", run])
        .config(config);

    config.$inject = ["localStorageServiceProvider"];

    function run(vkApi, faceBookApi) => {
        vkApi.setSettings({
            apiId: 5491307
        });
        faceBookApi.setSettings({
            appId      : '1217251498315559',
            xfbml      : true,
            version    : 'v2.6'
        });
    }

    function config(localStorageServiceProvider){
        localStorageServiceProvider
            .setPrefix('superApp');
    }
})();
