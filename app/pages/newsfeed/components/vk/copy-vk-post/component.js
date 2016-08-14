class copyPostVkComponent {
    constructor(){
    }
}

copyPostVkComponent.$inject = [];

const options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl:"app/pages/newsfeed/components/vk/copy-vk-post/template.html",
    controller: copyPostVkComponent,
    controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
    .component("copyVkPost", options);