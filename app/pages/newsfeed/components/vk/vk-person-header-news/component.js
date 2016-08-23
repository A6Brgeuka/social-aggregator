class vkPersonHeaderNews {
	constructor(){
	}
}

vkPersonHeaderNews.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		post: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-person-header-news/template.html",
	controller: vkPersonHeaderNews,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkPersonHeaderNews", options);