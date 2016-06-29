
class newsFeedController {
    constructor(vkApi, faceBookApi){
        this.vkApi = vkApi;
        this.faceBookApi = faceBookApi;
        //this.getFaceBookNewsFeed();
        this.vkNewsFeed = {
            items: [],
        };
        this.getVkNewsFeed();
    }
    
    getVkNewsFeed(){

        this.vkApi
            .getNewsFeed()
            .then((res) => {
                this.vkNewsFeed = res;
                this.filterNewsFeed(res);
            })
            .catch((err) => {
                debugger;
            });
    }

    getFaceBookNewsFeed(){
        this.faceBookApi
            .getNewsFeed()
            .then(res => {
                
            })
            .catch(err => {
                debugger;
            });
    }

    filterNewsFeed(vkNewsFeed){
        this.sortedNewsFeeds = [];

        vkNewsFeed.items.forEach(newsFeed => {
            if(newsFeed.source_id < 0){
                vkNewsFeed.groups.forEach(group => {
                    if(group.gid == (Math.abs(newsFeed.source_id))){
                        const news = {
                            news: newsFeed,
                            owner: group,
                        };

                        this.sortedNewsFeeds.push(news);
                    }
                });
            } else {
                vkNewsFeed.profiles.forEach(profile => {
                    if(profile.uid == newsFeed.source_id){
                        const news = {
                            news: newsFeed,
                            owner: profile,
                        };

                        this.sortedNewsFeeds.push(news);
                    }
                });
            }
        });

        this.sortedNewsFeeds.forEach(sortedNewsFeed => {
            if(sortedNewsFeed.news.copy_owner_id && sortedNewsFeed.news.post_type == "copy"){
                if(sortedNewsFeed.news.copy_owner_id < 0){
                    vkNewsFeed.groups.forEach(group => {
                        if(group.gid == (Math.abs(sortedNewsFeed.news.copy_owner_id))){
                            sortedNewsFeed.repost_owner = group;
                        }
                    })
                } else {
                    vkNewsFeed.profiles.forEach(profile => {
                        if(profile.uid == newsFeed.source_id){
                            sortedNewsFeed.repost_owner = profile;
                        }
                    });
                }
            }
        });
    }
}

newsFeedController.$inject = ["vkApi", "faceBookApi"];

angular.module('superApp.newsfeed')
    .controller('NewsFeedController', newsFeedController);