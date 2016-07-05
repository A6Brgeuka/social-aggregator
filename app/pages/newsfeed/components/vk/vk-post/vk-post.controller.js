class postNewFeedComponent {
    constructor(){
    }
}

postNewFeedComponent.$inject = [];

const options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl: "app/pages/newsfeed/components/vk/vk-post/vk-post.html",
    controller: postNewFeedComponent,
    controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
    .component("vkPost", options);