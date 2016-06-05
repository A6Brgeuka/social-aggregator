class postNewFeedComponent {
    constructor(){
        console.log(this);
    }
}

postNewFeedComponent.$inject = [];

const options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl(){
        return "app/pages/newsfeed/components/post/post.html";
    },
    controller: postNewFeedComponent,
    controllerAs: "vm"
};

angular.module("newsfeed.components")
    .component("newsFeed", options);