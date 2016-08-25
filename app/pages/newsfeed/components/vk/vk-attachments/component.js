class vkAttachmentsComponent {
	constructor(){
		console.log(this.attachments);
	}
}

vkAttachmentsComponent.$inject = [];

const options = {
	restrict: "EA",
	bindings: {
		attachments: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-attachments/template.html",
	controller: vkAttachmentsComponent,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkAttachments", options);