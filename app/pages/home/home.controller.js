
class homeController {
    constructor(localStorageService, $state, vkApi, faceBookApi){
        this.localStorageService = localStorageService;
        this.$state = $state;
        this.vkApi = vkApi;
        this.faceBookApi = faceBookApi;

        this.localStorageService.remove("vk-session");
        this.localStorageService.remove("facebook-session");
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
        const vkSession = this.localStorageService.get("vk-session");

        if(vkSession){
            return this.$state.go("walls");
        }
        this.vkApi
            .signIn()
            .then(() => {
                debugger;
                this.$state.go("walls");
            })
            .catch(() => {
                debugger;
            });
    }
    signInFaceBook(){
        const faceBookSession = this.localStorageService.get("facebook-session");

        if(faceBookSession){
            return this.$state.go("walls");
        }
        this.faceBookApi
            .signIn()
            .then(() => {
                debugger;
                this.$state.go("walls");
            })
            .catch(() => {
                debugger;
            });
    }
}

homeController.$inject = ["localStorageService", "$state", "vkApi", "faceBookApi"];

angular.module('superApp.home')
    .controller('HomeController', homeController);