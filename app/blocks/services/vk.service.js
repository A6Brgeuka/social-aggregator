
class vkApi{
    constructor($http, $q, $timeout, VK_CONFIG, localStorageService){
        this.$http = $http;
        this.$q = $q;
        this.vkConfig = VK_CONFIG;
        this.localStorageService = localStorageService;
        this.$timeout = $timeout;
    }
    
    signIn(){
        debugger;
        return this.$q((resolve, reject) => {
            VK.Auth.getLoginStatus(response => {
                debugger;
                if(response.session){
                    debugger;
                    this.localStorageService.set('vk-session', response.session);
                    this.localStorageService.set('any-session', true);
                    resolve();
                } else {
                    VK.Auth.login(res => {
                        debugger;
                        if(res.session){
                            this.localStorageService.set('vk-session', res.session);
                            this.localStorageService.set('any-session', true);
                            resolve();
                        } else {
                            reject();
                        }
                    }, +2+4+8+16+8192+1024+262144);
                }
            })
        });
    }

    getNewsFeed(){
        return this.$q((resolve, reject) => {
            VK.Api.call('newsfeed.get', {

            }, (res) => {
                resolve(res.response);
            });
        });
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