class groupVkPostComponent {
    constructor(){
    }
}

groupVkPostComponent.$inject = [];

const options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl:"app/pages/newsfeed/components/vk/group-vk-post/template.html",
    controller: groupVkPostComponent,
    controllerAs: "vm",
    transclude: true,
};

angular.module("components.vkNewsFeed")
    .component("groupVkPost", options);