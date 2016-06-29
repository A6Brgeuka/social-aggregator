class sortingPostsVkComponent {
    constructor(){
    }
}

sortingPostsVkComponent.$inject = [];

const options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl:"app/pages/newsfeed/components/vk/sort-vk-post/sort-vk-post.html",
    controller: sortingPostsVkComponent,
    controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
    .component("sortingVkPosts", options);