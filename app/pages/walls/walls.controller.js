
class wallsController {
    constructor(localStorageService, vkApi){
        this.vkApi = vkApi;
        this.localStorageService = localStorageService;
    }
}

wallsController.$inject = ["localStorageService", "vkApi"];

angular.module('superApp.walls')
    .controller('WallsController', wallsController);