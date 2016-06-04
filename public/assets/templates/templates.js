angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("pages/about/about.html","<h1>About</h1>\r\n<hr>\r\n");
$templateCache.put("pages/home/home.html","<h1>Login using your social network account</h1>\r\n<hr>\r\n\r\n<button type=\"button\" class=\"btn btn-primary\"\r\n        ng-click=\"vm.signInVk()\">\r\n    Vk\r\n</button>");
$templateCache.put("pages/newsfeed/newsfeed.html","<h1>News</h1>\r\n<hr>");
$templateCache.put("pages/walls/walls.html","<h1>Walls</h1>\r\n<hr>");}]);