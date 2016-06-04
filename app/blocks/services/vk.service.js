
class vkApi{
    constructor($http, $q, VK_CONFIG, localStorageService){
        this.$http = $http;
        this.$q = $q;
        this.vkConfig = VK_CONFIG;
        this.localStorageService = localStorageService;
    }
    
    signIn(){
        return this.$q((resolve, reject) => {
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
        });
    }

    getVkNewsFeed(){
        const deferred = this.$q.defer();

        
        VK.Api.call('newsfeed.get', {

        }, (res) => {
            debugger;
            deferred.resolve(res.response);
        });
        /*return this.$q((resolve, reject) => {
            VK.Api.call('newsfeed.get', {

            }, (res) => {
                debugger;
                resolve(res.response);
            })
        });*/
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

    static vkApiSelfFactory($http,$q, VK_CONFIG, localStorageService){
        return new vkApi($http, $q, VK_CONFIG, localStorageService);
    }
}

vkApi.$inject = ["$http", "$q", "VK_CONFIG", "localStorageService"];

angular.module("blocks.services")
    .factory('vkApi', vkApi.vkApiSelfFactory);