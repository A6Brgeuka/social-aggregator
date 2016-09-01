class vkGroupHeaderNews {
	constructor($window){
		this.$window = $window;
	}

	gotoVkProfile(){
		// href="https://vk.com/{{vm.post.owner.screen_name}}"
		this.$window.open(`https://vk.com/${this.post.owner.screen_name}`, '_blank');
	}
}

vkGroupHeaderNews.$inject = ["$window"];

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