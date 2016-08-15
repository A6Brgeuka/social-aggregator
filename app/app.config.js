(function(){
    'use strict';

    angular
        .module("superApp")
        .run(["vkApi", "faceBookApi", "VK_CONFIG", "FB_CONFIG", run])
        .config(config);

    config.$inject = ["localStorageServiceProvider", "$mdThemingProvider", "$mdIconProvider"];

    function run(vkApi, faceBookApi, VK_CONFIG, FB_CONFIG) {
        vkApi.setSettings({
            apiId: VK_CONFIG.client_id
        });
        faceBookApi.setSettings(FB_CONFIG);
    }

    function config(localStorageServiceProvider, $mdThemingProvider, $mdIconProvider){
        localStorageServiceProvider
            .setPrefix('superApp');

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');

        $mdIconProvider
            .defaultFontSet('material-icons')
    }
})();
