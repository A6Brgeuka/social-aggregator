(function () {

    angular
        .module("blocks.router")
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {
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
            });

        $urlRouterProvider.otherwise('/')
    }
})();
