class dirPostNewFeedComponent {
    constructor() {
        this.restrict = "EA";
        this.scope = {
            post: '=post'
        };
        this.templateUrl = "app/pages/newsfeed/components/dirPost/dirPost.html";
        this.controller = dirPostNewFeedComponent;
        this.controllerAs = "vm"
    }

    link(scope, element){
        console.log(this.templateUrl);

    }

    static createInstance() {
        dirPostNewFeedComponent.instance = new dirPostNewFeedComponent();
        return dirPostNewFeedComponent.instance;
    }
}

dirPostNewFeedComponent.$inject = [];

angular.module("newsfeed.components")
    .directive("dirNewsFeed", dirPostNewFeedComponent.createInstance);