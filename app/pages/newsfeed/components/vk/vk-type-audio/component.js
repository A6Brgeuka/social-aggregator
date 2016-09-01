class vkTypeAudioComponent {
	constructor($sce){
		this.$sce = $sce;
		this.audios = this.post.news.audio.slice(1);
		// this.trustAsResourceUrl();
	}
	
	trustAsResourceUrl(){
		this.audios.forEach(audio => {
			audio.trustUrl = this.$sce.trustAsResourceUrl(audio.src);
		});
	}

	trustSrc(src){
		return this.$sce.trustAsResourceUrl(src);
	}
}

vkTypeAudioComponent.$inject = ["$sce"];

const options = {
	restrict: "EA",
	bindings: {
		post: '<'
	},
	templateUrl: "app/pages/newsfeed/components/vk/vk-type-audio/template.html",
	controller: vkTypeAudioComponent,
	controllerAs: "vm"
};

angular.module("components.vkNewsFeed")
	.component("vkTypeAudio", options);