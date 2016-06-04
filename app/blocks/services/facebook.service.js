
class faceBookApi{
    constructor($http, $q, VK_CONFIG, localStorageService){
        this.$http = $http;
        this.$q = $q;
        this.vkConfig = VK_CONFIG;
        this.localStorageService = localStorageService;
    }

    signIn(){
        debugger;
        return this.$q((resolve, reject) => {
            FB.getLoginStatus((response) => {
                debugger;
                FB.login(res => {
                    debugger;
                    if(res.authResponse){
                        debugger;
                        this.localStorageService.set('facebook-session', res.authResponse);
                        this.localStorageService.set('any-session', true);
                        resolve();
                    } else {
                        reject();
                    }
                }, {scope: "email,user_likes"});
            });


            //public_profile,user_friends," +
           // "user_posts,user_photos,user_actions.news" +
           // "user_actions.video,user_likes,email
        });
    }

    getNewsFeed(){
        const deferred = this.$q.defer();


        VK.Api.call('newsfeed.get', {

        }, (res) => {
            debugger;
            deferred.resolve(res.response);
        });
    }

    getWall() {
        VK.Api.call('wall.get', {
            owner_id: 15541715,
            domain: "a6brgeuka",
            count: 5
        }, (res) => {
            debugger;
        })
    }

    static faceBookApiSelfFactory($http,$q, VK_CONFIG, localStorageService){
        return new faceBookApi($http, $q, VK_CONFIG, localStorageService);
    }
}

faceBookApi.$inject = ["$http", "$q", "VK_CONFIG", "localStorageService"];

angular.module("blocks.services")
    .factory('faceBookApi', faceBookApi.faceBookApiSelfFactory);