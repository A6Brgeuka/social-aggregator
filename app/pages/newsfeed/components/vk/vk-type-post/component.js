class vkTypePostComponent {
	constructor(){
		this.lengthText = this.post.news.text.length;
		if(this.lengthText < 300) {
			this.showAll = true;
		} else {
			this.text = this.post.news.text.substring(0, 300);
			this.showAll = false;
		}
	}

	showAllText(){
		this.showAll = true;
	}
}

vkTypePostComponent.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		post: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-type-post/template.html",
	controller: vkTypePostComponent,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkTypePost", options);