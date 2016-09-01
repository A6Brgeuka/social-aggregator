class vkTypeWallPhotoComponent {
	constructor(){
		[,this.firstPhoto,] = this.post.news.photos;
		this.photos = this.post.news.photos.slice(2);
	}
}

vkTypeWallPhotoComponent.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		post: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-type-wall-photo/template.html",
	controller: vkTypeWallPhotoComponent,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkTypeWallPhoto", options);