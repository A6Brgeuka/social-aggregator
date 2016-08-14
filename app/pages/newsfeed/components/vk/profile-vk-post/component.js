class profileVkPostComponent {
    constructor(){
    }
}

profileVkPostComponent.$inject = [];

const options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl:"app/pages/newsfeed/components/vk/profile-vk-post/template.html",
    controller: profileVkPostComponent,
    controllerAs: "vm",
    transclude: true,
};

angular.module("components.vkNewsFeed")
    .component("profileVkPost", options);