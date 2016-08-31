class vkPersonHeaderNews {
	constructor($window){
		this.$window = $window;
	}

	gotoVkProfile(){
		// href="https://vk.com/{{vm.post.owner.screen_name}}"
		this.$window.open(`https://vk.com/${this.post.owner.screen_name}`, '_blank');
	}
}

vkPersonHeaderNews.$inject = ["$window"];

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