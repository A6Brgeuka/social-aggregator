class vkHeaderNews {
	constructor(){
	}
}

vkHeaderNews.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		post: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-header-news/template.html",
	controller: vkHeaderNews,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkHeaderNews", options);