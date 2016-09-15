
class searchLikesController {
	constructor(vkApi, faceBookApi){
		this.vkApi = vkApi;
		this.getFriends();
	}

	getFriends(){
		this.vkApi.getFriends()
			.then(res => {
				debugger;
			})
			.catch(() => {
				debugger;
			})
	}
}

searchLikesController.$inject = ["vkApi"];

angular.module('superApp.searchLikes')
	.controller('SearchLikesController', searchLikesController);