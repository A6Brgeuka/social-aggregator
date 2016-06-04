
class homeController {
    constructor(localStorageService, $state, vkApi){
        this.localStorageService = localStorageService;
        this.$state = $state;
        this.vkApi = vkApi;
        // this.checkAnySession();
    }
    /*checkAnySession(){
        const anySession = this.localStorageService.get("any-session");
        debugger;
        if(anySession){
            debugger;
            this.$state.go("walls");
        }
    }*/
    signInVk(){
        const vkSession = this.localStorageService.get("any-session");

        debugger;
        if(vkSession){
            return this.$state.go("walls");
        }
        debugger;
        this.vkApi
            .signInVk()
            .then(() => {
                debugger;
                this.$state.go("walls");
            })
            .catch(() => {
                debugger;
            });
            
    }
}

homeController.$inject = ["localStorageService", "$state", "vkApi"];

angular.module('superApp.home')
    .controller('HomeController', homeController);