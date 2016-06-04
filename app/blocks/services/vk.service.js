
class vkApi{
    constructor($http, VK_CONFIG){
        this.$http = $http;
        this.vkConfig = VK_CONFIG;
    }
    
    signIn(){
        VK.Auth.login(res => {
            debugger;

            /*VK.Api.call('wall.get', {
                owner_id: 15541715,
                domain: "a6brgeuka",
                count: 5
            }, (res) => {
                debugger;
            })*/
        }, +2+4+8+16+8192+1024+262144);
        // return this.$http.get("");
        /*return this.$http.get("https://oauth.vk.com/authorize", {
            params: {
                client_id: this.vkConfig.client_id,
                redirect_uri: "http://localhost:3000",
                display: "popup",
                scope: "friends",
                response_type: "code",
                v: "5.52"
            }
        });*/
    }

    getWalls() {
        const methodName = 'groups.getMembers';
        const groupID = 76922753;
        const url = 'https://api.vk.com/method/'+methodName+'?group_id='+groupID+'&callback=JSON_CALLBACK';

        return $http.jsonp(url).success();
    }

    static vkApiSelfFactory($http, VK_CONFIG){
        return new vkApi($http,  VK_CONFIG);
    }
}

vkApi.$inject = ["$http", "VK_CONFIG", "EVENTS", "$timeout"];

angular.module("blocks.services")
    .factory('vkApi', vkApi.vkApiSelfFactory);