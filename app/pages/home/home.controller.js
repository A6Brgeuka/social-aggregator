
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
            debugger;
            return this.$state.go("newsfeed");
        }
        this.faceBookApi
            .signIn()
            .then(() => {
                this.$state.go("newsfeed");
            })
            .catch(() => {
                debugger;
            });
    }

    signInTwitter(){
        
    }
}

homeController.$inject = ["localStorageService", "$state", "vkApi", "faceBookApi"];

angular.module('superApp.home')
    .controller('HomeController', homeController);