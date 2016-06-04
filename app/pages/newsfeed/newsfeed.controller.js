
class newsFeedController {
    constructor(vkApi){
        this.vkApi = vkApi;
        this.getVkNewsFeed();
    }
    
    getVkNewsFeed(){
        this.vkApi
            .getVkNewsFeed()
            .then((res) => {
                debugger;
            })
            .catch((err) => {
                debugger;
            });
    }
}

newsFeedController.$inject = ["vkApi"];

angular.module('superApp.newsfeed')
    .controller('NewsFeedController', newsFeedController);