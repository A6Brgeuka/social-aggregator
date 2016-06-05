
class newsFeedController {
    constructor(vkApi, faceBookApi){
        this.vkApi = vkApi;
        this.faceBookApi = faceBookApi;
        this.getVkNewsFeed();
        this.getFaceBookNewsFeed();
    }
    
    getVkNewsFeed(){
        this.vkApi
            .getNewsFeed()
            .then((res) => {
                this.filterNewsFeed(res);
                this.vkNewsFeed = res;
                console.log(this.vkNewsFeed);
            })
            .catch((err) => {
                debugger;
            });
    }

    getFaceBookNewsFeed(){

    }

    filterNewsFeed(vkNewsFeed){
        this.vkNewsFeed = vkNewsFeed;

        this.filtedNewsFeeds = [];

        this.vkNewsFeed.items.forEach(newsFeed => {
            if(newsFeed.source_id < 0){
                this.vkNewsFeed.groups.forEach(group => {
                    if(group.gid == (Math.abs(newsFeed.source_id))){
                        let news = newsFeed;
                        news.group = group;
                        this.filtedNewsFeeds.push(news);
                    }
                })
            } else {
                this.vkNewsFeed.profiles.forEach(profile => {
                    if(profile.uid == newsFeed.source_id){
                        let news = newsFeed;
                        news.profile = profile;
                        this.filtedNewsFeeds.push(news);
                    }
                })
            }
        });
    }
}

newsFeedController.$inject = ["vkApi", "faceBookApi"];

angular.module('superApp.newsfeed')
    .controller('NewsFeedController', newsFeedController);