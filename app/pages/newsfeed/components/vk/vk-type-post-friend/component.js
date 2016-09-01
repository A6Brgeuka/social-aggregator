class vkTypePostFriendComponent {
	constructor(vkApi){
		this.vkApi = vkApi;
		this.ids = this.post.news.friends.slice(1).map(f=>f.uid);
		this.getUsersInfo();
	}
	
	getUsersInfo(){
		this.vkApi.getUsersInfo(this.ids)
			.then(res => {
				this.users = res.map(friend => {
					return {
						fullName: `${friend.last_name} ${friend.first_name}`,
						uid: friend.uid
					};
				});
			});
	}
}

vkTypePostFriendComponent.$inject = ["vkApi"];

const options = {
	restrict: "EA",
	bindings: {
		post: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-type-post-friend/template.html",
	controller: vkTypePostFriendComponent,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkTypeFriend", options);