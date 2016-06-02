
class homeController {
    constructor(vkApi){
        this.vkApi = vkApi;
    }
    signInVk(){
        this.vkApi.signIn()
            .then(res => {
                debugger;
            })
            .catch(err => {
                debugger;
            })
    }
}

homeController.$inject = ["vkApi"];

angular.module('TestApp.home')
    .controller('HomeController', homeController);