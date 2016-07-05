class ownerVkPostVkComponent {
    constructor(){
    }
}

ownerVkPostVkComponent.$inject = [];

const options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl:"app/pages/newsfeed/components/vk/owner-vk-post/owner-vk-post.html",
    controller: ownerVkPostVkComponent,
    controllerAs: "vm",
    transclude: true,
};

angular.module("components.vkNewsFeed")
    .component("ownerVkPost", options);