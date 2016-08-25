class vkPostTypePostComponent {
	constructor(){
		
	}
}

vkPostTypePostComponent.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		post: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-post-type-post/template.html",
	controller: vkPostTypePostComponent,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkPostTypePost", options);