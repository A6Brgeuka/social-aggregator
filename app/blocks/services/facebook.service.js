class faceBookApi{
    constructor($http, $q, VK_CONFIG, localStorageService){
        this.checkVK();
        this.$http = $http;
        this.$q = $q;
        this.vkConfig = VK_CONFIG;
        this.localStorageService = localStorageService;
    }

    checkVK(){
        if(typeof VK === "undefined")
            throw new Error("You forgot include VK script");
    }

    setSettings(settings){
        FB.init(settings);
    }

    signIn(){
        return this.$q((resolve, reject) => {
            FB.getLoginStatus((response) => {
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
                }, {scope: "user_about_me,public_profile,user_friends,user_posts,user_photos,user_actions.news,user_actions.video,user_likes,email,publish_actions,publish_pages,user_status"})
            });
        });
    }

    getNewsFeed(){
        const deferred = this.$q.defer();

        const session = this.localStorageService.get('facebook-session');
        const a = `/${session.userID}/feed/`;
        debugger;
        return this.$q((resolve, reject) => {
            FB.api('/me', (res) => {
                debugger;
                deferred.resolve(res.response);
            });
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