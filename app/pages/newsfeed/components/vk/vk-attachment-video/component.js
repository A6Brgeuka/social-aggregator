class vkAttachmentVideoComponent {
	constructor(){
	}
}

vkAttachmentVideoComponent.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		attachment: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-attachment-video/template.html",
	controller: vkAttachmentVideoComponent,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkAttachmentVideo", options);