
class homeController {
    constructor(localStorageService, $state, vkApi, faceBookApi){
        this.localStorageService = localStorageService;
        this.$state = $state;
        this.vkApi = vkApi;
        this.faceBookApi = faceBookApi;

        // this.localStorageService.remove("vk-session");
        // this.localStorageService.remove("facebook-session");
    }

    signInVk(){
        const vkSession = this.localStorageService.get("vk-session");

        if(vkSession){
            return this.$state.go("newsfeed");
        }
        debugger;

        this.vkApi
            .signIn()
            .then(() => {
                this.$state.go("newsfeed");
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