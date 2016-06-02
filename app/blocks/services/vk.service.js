
class vkApi{
    constructor($http, VK_CONFIG){
        this.$http = $http;
        this.vkConfig = VK_CONFIG;
    }
    
    signIn(){
        debugger;
        return this.$http({
            url: "https://oauth.vk.com/authorize",
            method: "GET",
            params: {
                client_id: this.vkConfig.client_id,
                redirect_uri: "http://localhost:3000",
                display: "popup",
                scope: "friends",
                response_type: "code",
                v: "5.52"
            }
        });
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