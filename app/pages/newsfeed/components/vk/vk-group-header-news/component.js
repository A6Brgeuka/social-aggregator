class vkGroupHeaderNews {
	constructor(){
	}
}

vkGroupHeaderNews.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		post: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-group-header-news/template.html",
	controller: vkGroupHeaderNews,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkGroupHeaderNews", options);