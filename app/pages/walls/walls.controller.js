
class wallsController {
    constructor(vkApi){
        this.vkApi = vkApi;
    }
    
}

wallsController.$inject = ["vkApi"];

angular.module('superApp.walls')
    .controller('WallsController', wallsController);