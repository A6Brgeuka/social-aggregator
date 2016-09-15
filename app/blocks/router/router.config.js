(function () {

    angular
        .module("blocks.router")
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/pages/home/home.html",
                controller: "HomeController as vm"
            })
            .state("about", {
                url: "/about",
                templateUrl: "app/pages/about/about.html",
                controller: "AboutController as vm"
            })
            .state("walls", {
                url: "/walls",
                templateUrl: "app/pages/walls/walls.html",
                controller: "WallsController as vm"
            })
            .state("newsfeed", {
                url: "/news",
                templateUrl: "app/pages/newsfeed/newfeed/newsfeed.html",
                controller: "NewsFeedController as vm"
            })
            .state("likes", {
                url: "/likes",
                templateUrl: "app/pages/search-likes/vk/search-like.html",
                controller: "SearchLikesController as vm"
            });

        $urlRouterProvider.otherwise('/')
    }
})();
