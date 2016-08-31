class vkAttachmentTypePhoto {
	constructor(){
	}
}

vkAttachmentTypePhoto.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		attachment: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-attachment-type-photo/template.html",
	controller: vkAttachmentTypePhoto,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkAttachmentTypePhoto", options);