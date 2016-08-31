class vkAttachmentComponent {
	constructor(){
	}
}

vkAttachmentComponent.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		attachment: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-attachment/template.html",
	controller: vkAttachmentComponent,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkAttachment", options);