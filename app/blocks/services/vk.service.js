
class vkApi {
    constructor($http, $q, $timeout, VK_CONFIG, localStorageService){
        this.$http = $http;
        this.$q = $q;
        this.vkConfig = VK_CONFIG;
        this.localStorageService = localStorageService;
        this.$timeout = $timeout;
    }

    setSettings(settings){
        VK.init(settings);
    }

    // test(){
    //    VK.Api.call('users.get', {
    //        user_ids: 163459265,
    //    }, (res) => {
    //        debugger;
    //    });
    // }
    
    signIn(){
        try {
            return this.$q((resolve, reject) => {
                VK.Auth.getLoginStatus(response => {
                    if(response.session){
                        this.localStorageService.set('vk-session', response.session);
                        this.localStorageService.set('any-session', true);
                        resolve();
                    } else {
                        VK.Auth.login(res => {
                            if(res.session){
                                this.localStorageService.set('vk-session', res.session);
                                this.localStorageService.set('any-session', true);
                                resolve();
                            } else {
                                reject(res);
                            }
                        }, +2+4+8+16+8192+1024+262144);
                    }
                })
            });
        } catch (err) {
            console.error("vk is't available");
            console.error(err);
        }
    }

    getNewsFeed(){
        try {
            return this.$q((resolve, reject) => {
                VK.Api.call('newsfeed.get', {
                    return_banned: 0,
                    count: this.vkConfig.news_feed.count
                }, res => {
                    resolve(res.response);
                });
            });
        } catch (err) {
            console.error("vk is't available");
            console.error(err);
        }
    }

    getWalls() {
        VK.Api.call('wall.get', {
         owner_id: 15541715,
         domain: "a6brgeuka",
         count: 5
         }, (res) => {
            debugger;
         })
    }

    static vkApiSelfFactory($http,$q, $timeout, VK_CONFIG, localStorageService){
        return new vkApi($http, $q, $timeout, VK_CONFIG, localStorageService);
    }
}

vkApi.$inject = ["$http", "$q", "$timeout", "VK_CONFIG", "localStorageService"];

angular.module("blocks.services")
    .factory('vkApi', vkApi.vkApiSelfFactory);