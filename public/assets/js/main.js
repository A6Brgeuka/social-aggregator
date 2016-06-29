"use strict";

(function () {
    angular.module("superApp", ["superApp.core",
    //pages
    "superApp.home", "superApp.about", "superApp.walls", "superApp.newsfeed"]);
})();
"use strict";

(function () {
    angular.module("superApp.blocks", ["blocks.services", "blocks.constants", "blocks.helpers", "blocks.router"]);
})();
"use strict";

(function () {
    angular.module("superApp.core", [
    //angular native modules + third party modules
    //..
    //cross-app module
    "superApp.blocks", "LocalStorageModule", "ngMaterial"]);
})();
"use strict";

(function () {
    angular.module("blocks.constants", []);
})();
"use strict";

(function () {
    angular.module("blocks.helpers", []);
})();
"use strict";

(function () {
    angular.module("blocks.router", ["ui.router"]);
})();
"use strict";

(function () {
    angular.module("blocks.services", ["blocks.constants"]);
})();
"use strict";

(function () {
    angular.module("superApp.about", []);
})();
"use strict";

(function () {
    angular.module("superApp.home", []);
})();
"use strict";

(function () {
    angular.module("superApp.newsfeed", ["newsfeed.page", "newsfeed.components"]);
})();
"use strict";

(function () {
    angular.module("superApp.walls", []);
})();
"use strict";

(function () {
    angular.module("newsfeed.components", ['components.vkNewsFeed']);
})();
"use strict";

(function () {
    angular.module("newsfeed.page", []);
})();
"use strict";

(function () {
    angular.module("components.vkNewsFeed", []);
})();
"use strict";

(function () {
    'use strict';

    angular.module("superApp").config(config);

    config.$inject = ["localStorageServiceProvider"];

    function config(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('superApp');
    }
})();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var coreController = function coreController(localStorageService, $state) {
    _classCallCheck(this, coreController);
};

coreController.$inject = [];

angular.module("superApp.core").controller("CoreController", coreController);
"use strict";

(function () {
    angular.module("blocks.constants").constant('VK_CONFIG', {
        client_id: 5491307,
        client_secret: "Vu5BCaTcdNi8nL4McyA9"
    }).constant('BASE_API', {
        URL: "http://localhost:3000",
        PORT: "3000",
        API_URL: "/api"
    }).constant('EVENTS', {
        SIGN_IN: 'sign_in',
        SIGN_OUT: 'sign_out',
        SIGN_UP: 'sign_up'
    }).constant('ERROR_CODES', {
        NOT_FOUND: "Not found!",
        UNKNOWN: "Just unknown error!"
    });
})();
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function () {
    angular.module("blocks.helpers").factory("helper", helper);

    helper.$inject = [];

    function helper() {

        var service = {
            toLowerCase: toLowerCase,
            toCamelCase: toCamelCase,
            toPascalCase: toPascalCase,
            parseDate: parseDate,
            prettyDate: prettyDate,
            preventClick: preventClick,
            excapeString: excapeString
        };

        return service;

        function toLowerCase(target) {
            if (typeof target == "string") {
                return target.toLowerCase();
            }
            if ((typeof target === "undefined" ? "undefined" : _typeof(target)) == "object") {
                return _.transform(target, function (result, value, key) {
                    delete result[key];
                    result[key.toLowerCase()] = value;
                });
            }
            return target;
        };

        function toCamelCase(target) {
            if (typeof target == "string") {
                return target.substring(0, 1).toLowerCase() + target.substring(1);
            }
            if ((typeof target === "undefined" ? "undefined" : _typeof(target)) == "object") {
                return _.transform(target, function (result, value, key) {
                    delete result[key];
                    var newKey = key.substring(0, 1).toLowerCase() + key.substring(1);
                    result[newKey] = value;
                });
            }
            return target;
        }

        function toPascalCase(target) {
            if (!target) return null;
            if (typeof target == "string") {
                return target.substring(0, 1).toUpperCase() + target.substring(1);
            }
            if ((typeof target === "undefined" ? "undefined" : _typeof(target)) == "object") {
                return _.transform(target, function (result, value, key) {
                    delete result[key];
                    var newKey = key.substring(0, 1).toUpperCase() + key.substring(1);
                    result[newKey] = value;
                });
            }
            return target;
        }

        function parseDate(date) {
            if (angular.isString(date)) {
                return date.length === 10 ? moment(date, "DD.MM.YYYY") : moment(date);
            }
            if (angular.isNumber(date)) {
                return new Date(date);
            }
            return date;
        }

        function prettyDate(date) {
            if (!date) return date;
            return parseDate(date).format("DD.MM.YYYY");
        }

        function preventClick(func) {
            return function () {
                var args = Array.prototype.slice.call(arguments);
                if (args.length) {
                    var event = args[0];
                    if (event && event.originalEvent && event.originalEvent instanceof MouseEvent) {
                        event.preventDefault();
                        event.stopPropagation();
                        args.splice(0, 1);
                    }
                }
                if (angular.isFunction(func)) {
                    func.apply(this, args);
                }
            };
        }

        function excapeString(string) {
            if (!string || !string.length) return string;
            var entityMap = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': '&quot;',
                "'": '&#39;',
                "/": '&#x2F;'
            };

            return String(string).replace(/[&<>"'\/]/g, function (s) {
                return entityMap[s];
            });
        }
    };
})();
"use strict";

(function () {

    angular.module("blocks.router").config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state("home", {
            url: "/",
            templateUrl: "app/pages/home/home.html",
            controller: "HomeController as vm"
        }).state("about", {
            url: "/about",
            templateUrl: "app/pages/about/about.html",
            controller: "AboutController as vm"
        }).state("walls", {
            url: "/walls",
            templateUrl: "app/pages/walls/walls.html",
            controller: "WallsController as vm"
        }).state("newsfeed", {
            url: "/news",
            templateUrl: "app/pages/newsfeed/newfeed/newsfeed.html",
            controller: "NewsFeedController as vm"
        });

        $urlRouterProvider.otherwise('/');
    }
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var faceBookApi = function () {
    function faceBookApi($http, $q, VK_CONFIG, localStorageService) {
        _classCallCheck(this, faceBookApi);

        this.$http = $http;
        this.$q = $q;
        this.vkConfig = VK_CONFIG;
        this.localStorageService = localStorageService;
    }

    _createClass(faceBookApi, [{
        key: 'signIn',
        value: function signIn() {
            var _this = this;

            debugger;
            return this.$q(function (resolve, reject) {
                FB.getLoginStatus(function (response) {
                    debugger;
                    FB.login(function (res) {
                        debugger;
                        if (res.authResponse) {
                            debugger;
                            _this.localStorageService.set('facebook-session', res.authResponse);
                            _this.localStorageService.set('any-session', true);
                            resolve();
                        } else {
                            reject();
                        }
                    }, { scope: "user_about_me,public_profile,user_friends,user_posts,user_photos,user_actions.news,user_actions.video,user_likes,email,publish_actions,publish_pages,user_status" });
                });
            });
        }
    }, {
        key: 'getNewsFeed',
        value: function getNewsFeed() {
            var deferred = this.$q.defer();

            var session = this.localStorageService.get('facebook-session');
            var a = '/' + session.userID + '/feed/';
            debugger;
            return this.$q(function (resolve, reject) {
                FB.api('/me', function (res) {
                    debugger;
                    deferred.resolve(res.response);
                });
            });
        }
    }, {
        key: 'getWall',
        value: function getWall() {
            VK.Api.call('wall.get', {
                owner_id: 15541715,
                domain: "a6brgeuka",
                count: 5
            }, function (res) {
                debugger;
            });
        }
    }], [{
        key: 'faceBookApiSelfFactory',
        value: function faceBookApiSelfFactory($http, $q, VK_CONFIG, localStorageService) {
            return new faceBookApi($http, $q, VK_CONFIG, localStorageService);
        }
    }]);

    return faceBookApi;
}();

faceBookApi.$inject = ["$http", "$q", "VK_CONFIG", "localStorageService"];

angular.module("blocks.services").factory('faceBookApi', faceBookApi.faceBookApiSelfFactory);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var testService = function () {
    function testService($q) {
        _classCallCheck(this, testService);

        this.q = $q;

        this.items = [{ "text": "azaza", "value": 1 }, { "text": "ololo", "value": 2 }, { "text": "fuck", "value": 3 }];
    }

    _createClass(testService, [{
        key: "getStr",
        value: function getStr() {
            return "test";
        }
    }, {
        key: "getItems",
        value: function getItems() {
            return this.items;
        }
    }, {
        key: "getItemsPromise",
        value: function getItemsPromise() {
            var deferred = this.q.defer();
            deferred.resolve(this.items);
            //deffered.reject("error");
            return deferred.promise;
        }
    }, {
        key: "getItem",
        value: function getItem(index) {
            return this.items[index];
        }
    }]);

    return testService;
}();

testService.$inject = ["$q"];

angular.module("blocks.services").factory("TestService", function () {
    return new testService();
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vkApi = function () {
    function vkApi($http, $q, $timeout, VK_CONFIG, localStorageService) {
        _classCallCheck(this, vkApi);

        this.$http = $http;
        this.$q = $q;
        this.vkConfig = VK_CONFIG;
        this.localStorageService = localStorageService;
        this.$timeout = $timeout;
    }

    _createClass(vkApi, [{
        key: 'signIn',
        value: function signIn() {
            var _this = this;

            debugger;
            return this.$q(function (resolve, reject) {
                VK.Auth.getLoginStatus(function (response) {
                    debugger;
                    if (response.session) {
                        _this.localStorageService.set('vk-session', response.session);
                        _this.localStorageService.set('any-session', true);
                        resolve();
                    } else {
                        VK.Auth.login(function (res) {
                            if (res.session) {
                                _this.localStorageService.set('vk-session', res.session);
                                _this.localStorageService.set('any-session', true);
                                resolve();
                            } else {
                                reject();
                            }
                        }, +2 + 4 + 8 + 16 + 8192 + 1024 + 262144);
                    }
                });
            });
        }
    }, {
        key: 'getNewsFeed',
        value: function getNewsFeed() {
            return this.$q(function (resolve, reject) {
                VK.Api.call('newsfeed.get', {}, function (res) {
                    resolve(res.response);
                });
            });
        }
    }, {
        key: 'getWalls',
        value: function getWalls() {
            VK.Api.call('wall.get', {
                owner_id: 15541715,
                domain: "a6brgeuka",
                count: 5
            }, function (res) {
                debugger;
            });
        }
    }], [{
        key: 'vkApiSelfFactory',
        value: function vkApiSelfFactory($http, $q, $timeout, VK_CONFIG, localStorageService) {
            return new vkApi($http, $q, $timeout, VK_CONFIG, localStorageService);
        }
    }]);

    return vkApi;
}();

vkApi.$inject = ["$http", "$q", "$timeout", "VK_CONFIG", "localStorageService"];

angular.module("blocks.services").factory('vkApi', vkApi.vkApiSelfFactory);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AboutController = function AboutController($scope) {
    _classCallCheck(this, AboutController);

    this.title = "title";
    $scope.title = "scopeTitle";
};

AboutController.$inject = ["$scope"];

angular.module("superApp.about").controller("AboutController", AboutController);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var homeController = function () {
    function homeController(localStorageService, $state, vkApi, faceBookApi) {
        _classCallCheck(this, homeController);

        this.localStorageService = localStorageService;
        this.$state = $state;
        this.vkApi = vkApi;
        this.faceBookApi = faceBookApi;

        // this.localStorageService.remove("vk-session");
        // this.localStorageService.remove("facebook-session");
    }

    _createClass(homeController, [{
        key: "signInVk",
        value: function signInVk() {
            var _this = this;

            var vkSession = this.localStorageService.get("vk-session");

            debugger;
            if (vkSession) {
                return this.$state.go("newsfeed");
            }

            this.vkApi.signIn().then(function () {
                _this.$state.go("newsfeed");
            }).catch(function () {
                debugger;
            });
        }
    }, {
        key: "signInFaceBook",
        value: function signInFaceBook() {
            var _this2 = this;

            var faceBookSession = this.localStorageService.get("facebook-session");

            debugger;
            if (faceBookSession) {
                debugger;
                return this.$state.go("newsfeed");
            }
            this.faceBookApi.signIn().then(function () {
                _this2.$state.go("newsfeed");
            }).catch(function () {
                debugger;
            });
        }
    }]);

    return homeController;
}();

homeController.$inject = ["localStorageService", "$state", "vkApi", "faceBookApi"];

angular.module('superApp.home').controller('HomeController', homeController);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wallsController = function wallsController(localStorageService, vkApi) {
    _classCallCheck(this, wallsController);

    this.vkApi = vkApi;
    this.localStorageService = localStorageService;
};

wallsController.$inject = ["localStorageService", "vkApi"];

angular.module('superApp.walls').controller('WallsController', wallsController);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newsFeedController = function () {
    function newsFeedController(vkApi, faceBookApi) {
        _classCallCheck(this, newsFeedController);

        this.vkApi = vkApi;
        this.faceBookApi = faceBookApi;
        //this.getFaceBookNewsFeed();
        this.vkNewsFeed = {
            items: []
        };
        this.getVkNewsFeed();
    }

    _createClass(newsFeedController, [{
        key: "getVkNewsFeed",
        value: function getVkNewsFeed() {
            var _this = this;

            this.vkApi.getNewsFeed().then(function (res) {
                _this.vkNewsFeed = res;
                _this.filterNewsFeed(res);
            }).catch(function (err) {
                debugger;
            });
        }
    }, {
        key: "getFaceBookNewsFeed",
        value: function getFaceBookNewsFeed() {
            this.faceBookApi.getNewsFeed().then(function (res) {}).catch(function (err) {
                debugger;
            });
        }
    }, {
        key: "filterNewsFeed",
        value: function filterNewsFeed(vkNewsFeed) {
            var _this2 = this;

            this.sortedNewsFeeds = [];

            vkNewsFeed.items.forEach(function (newsFeed) {
                if (newsFeed.source_id < 0) {
                    vkNewsFeed.groups.forEach(function (group) {
                        if (group.gid == Math.abs(newsFeed.source_id)) {
                            var news = {
                                news: newsFeed,
                                owner: group
                            };

                            _this2.sortedNewsFeeds.push(news);
                        }
                    });
                } else {
                    vkNewsFeed.profiles.forEach(function (profile) {
                        if (profile.uid == newsFeed.source_id) {
                            var news = {
                                news: newsFeed,
                                owner: profile
                            };

                            _this2.sortedNewsFeeds.push(news);
                        }
                    });
                }
            });

            this.sortedNewsFeeds.forEach(function (sortedNewsFeed) {
                if (sortedNewsFeed.news.copy_owner_id && sortedNewsFeed.news.post_type == "copy") {
                    if (sortedNewsFeed.news.copy_owner_id < 0) {
                        vkNewsFeed.groups.forEach(function (group) {
                            if (group.gid == Math.abs(sortedNewsFeed.news.copy_owner_id)) {
                                sortedNewsFeed.repost_owner = group;
                            }
                        });
                    } else {
                        vkNewsFeed.profiles.forEach(function (profile) {
                            if (profile.uid == newsFeed.source_id) {
                                sortedNewsFeed.repost_owner = profile;
                            }
                        });
                    }
                }
            });
        }
    }]);

    return newsFeedController;
}();

newsFeedController.$inject = ["vkApi", "faceBookApi"];

angular.module('superApp.newsfeed').controller('NewsFeedController', newsFeedController);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var copyPostVkComponent = function copyPostVkComponent() {
    _classCallCheck(this, copyPostVkComponent);
};

copyPostVkComponent.$inject = [];

var options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl: "app/pages/newsfeed/components/vk/copy-vk-post/copy-vk-post.html",
    controller: copyPostVkComponent,
    controllerAs: "vm"
};

angular.module("components.vkNewsFeed").component("copyVkPost", options);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var postNewFeedComponent = function postNewFeedComponent() {
    _classCallCheck(this, postNewFeedComponent);
};

postNewFeedComponent.$inject = [];

var options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl: "app/pages/newsfeed/components/vk/post/post.html",
    controller: postNewFeedComponent,
    controllerAs: "vm"
};

angular.module("components.vkNewsFeed").component("vkPost", options);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sortingPostsVkComponent = function sortingPostsVkComponent() {
    _classCallCheck(this, sortingPostsVkComponent);
};

sortingPostsVkComponent.$inject = [];

var options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl: "app/pages/newsfeed/components/vk/sort-vk-post/sort-vk-post.html",
    controller: sortingPostsVkComponent,
    controllerAs: "vm"
};

angular.module("components.vkNewsFeed").component("sortingVkPosts", options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJibG9ja3MvYmxvY2tzLm1vZHVsZS5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5tb2R1bGUuanMiLCJibG9ja3MvaGVscGVycy9oZWxwZXJzLm1vZHVsZS5qcyIsImJsb2Nrcy9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJwYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJwYWdlcy9ob21lL2hvbWUubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvbmV3c2ZlZWQubW9kdWxlLmpzIiwicGFnZXMvd2FsbHMvd2FsbHMubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsInBhZ2VzL25ld3NmZWVkL25ld2ZlZWQvbmV3ZmVlZC5tb2R1bGUuanMiLCJwYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3ZrL3ZrLmNvbXBvbmVudHMubW9kdWxlLmpzIiwiYXBwLmNvbmZpZy5qcyIsImNvcmUvY29yZS5jb250cm9sbGVyLmpzIiwiYmxvY2tzL2NvbnN0YW50cy9jb25zdGFudHMuc2VydmljZS5qcyIsImJsb2Nrcy9oZWxwZXJzL2hlbHBlci5zZXJ2aWNlLmpzIiwiYmxvY2tzL3JvdXRlci9yb3V0ZXIuY29uZmlnLmpzIiwiYmxvY2tzL3NlcnZpY2VzL2ZhY2Vib29rLnNlcnZpY2UuanMiLCJibG9ja3Mvc2VydmljZXMvdGVzdC5zZXJ2aWNlLmpzIiwiYmxvY2tzL3NlcnZpY2VzL3ZrLnNlcnZpY2UuanMiLCJwYWdlcy9hYm91dC9hYm91dC5jb250cm9sbGVyLmpzIiwicGFnZXMvaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCJwYWdlcy93YWxscy93YWxscy5jb250cm9sbGVyLmpzIiwicGFnZXMvbmV3c2ZlZWQvbmV3ZmVlZC9uZXdzZmVlZC5jb250cm9sbGVyLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy92ay9jb3B5LXZrLXBvc3QvY29weS12ay1wb3N0LmNvbnRyb2xsZXIuanMiLCJwYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3ZrL3Bvc3QvcG9zdC5jb250cm9sbGVyLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy92ay9zb3J0LXZrLXBvc3Qvc29ydC12ay1wb3N0LmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLENBQ3ZCLGVBRHVCOztBQUd2QixtQkFIdUIsRUFJdkIsZ0JBSnVCLEVBS3ZCLGdCQUx1QixFQU12QixtQkFOdUIsQ0FBM0I7QUFRSCxDQVREOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxDQUM5QixpQkFEOEIsRUFFOUIsa0JBRjhCLEVBRzlCLGdCQUg4QixFQUk5QixlQUo4QixDQUFsQztBQU1ILENBUEQ7OztBQ0FBLENBQUMsWUFBVztBQUNSLFlBQVEsTUFBUixDQUFlLGVBQWYsRUFBZ0M7Ozs7QUFJNUIscUJBSjRCLEVBSzVCLG9CQUw0QixFQU01QixZQU40QixDQUFoQztBQVFILENBVEQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGtCQUFmLEVBQW1DLEVBQW5DO0FBQ0gsQ0FGRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsZ0JBQWYsRUFBaUMsRUFBakM7QUFDSCxDQUZEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxlQUFmLEVBQWdDLENBQUMsV0FBRCxDQUFoQztBQUNILENBRkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLENBQzlCLGtCQUQ4QixDQUFsQztBQUdILENBSkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGdCQUFm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K0JBQWE7QUFBQTtBQUNaOztBQUdMLG9CQUFvQixPQUFwQixHQUE4QixFQUE5Qjs7QUFFQSxJQUFNLFVBQVU7QUFDWixjQUFVLElBREU7QUFFWixjQUFVO0FBQ04sY0FBTTtBQURBLEtBRkU7QUFLWixpQkFBWSxpRUFMQTtBQU1aLGdCQUFZLG1CQU5BO0FBT1osa0JBQWM7QUFQRixDQUFoQjs7QUFVQSxRQUFRLE1BQVIsQ0FBZSx1QkFBZixFQUNLLFNBREwsQ0FDZSxZQURmLEVBQzZCLE9BRDdCOzs7OztJQ2pCTSx1QkFDRixnQ0FBYTtBQUFBO0FBQ1o7O0FBR0wscUJBQXFCLE9BQXJCLEdBQStCLEVBQS9COztBQUVBLElBQU0sVUFBVTtBQUNaLGNBQVUsSUFERTtBQUVaLGNBQVU7QUFDTixjQUFNO0FBREEsS0FGRTtBQUtaLGlCQUFhLGlEQUxEO0FBTVosZ0JBQVksb0JBTkE7QUFPWixrQkFBYztBQVBGLENBQWhCOztBQVVBLFFBQVEsTUFBUixDQUFlLHVCQUFmLEVBQ0ssU0FETCxDQUNlLFFBRGYsRUFDeUIsT0FEekI7Ozs7O0lDakJNLDBCQUNGLG1DQUFhO0FBQUE7QUFDWjs7QUFHTCx3QkFBd0IsT0FBeEIsR0FBa0MsRUFBbEM7O0FBRUEsSUFBTSxVQUFVO0FBQ1osY0FBVSxJQURFO0FBRVosY0FBVTtBQUNOLGNBQU07QUFEQSxLQUZFO0FBS1osaUJBQVksaUVBTEE7QUFNWixnQkFBWSx1QkFOQTtBQU9aLGtCQUFjO0FBUEYsQ0FBaEI7O0FBVUEsUUFBUSxNQUFSLENBQWUsdUJBQWYsRUFDSyxTQURMLENBQ2UsZ0JBRGYsRUFDaUMsT0FEakMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwXCIsIFtcclxuICAgICAgICBcInN1cGVyQXBwLmNvcmVcIixcclxuICAgICAgICAvL3BhZ2VzXHJcbiAgICAgICAgXCJzdXBlckFwcC5ob21lXCIsXHJcbiAgICAgICAgXCJzdXBlckFwcC5hYm91dFwiLFxyXG4gICAgICAgIFwic3VwZXJBcHAud2FsbHNcIixcclxuICAgICAgICBcInN1cGVyQXBwLm5ld3NmZWVkXCJcclxuICAgIF0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5ibG9ja3NcIiwgW1xyXG4gICAgICAgIFwiYmxvY2tzLnNlcnZpY2VzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuaGVscGVyc1wiLFxyXG4gICAgICAgIFwiYmxvY2tzLnJvdXRlclwiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmNvcmVcIiwgW1xyXG4gICAgICAgIC8vYW5ndWxhciBuYXRpdmUgbW9kdWxlcyArIHRoaXJkIHBhcnR5IG1vZHVsZXNcclxuICAgICAgICAvLy4uXHJcbiAgICAgICAgLy9jcm9zcy1hcHAgbW9kdWxlXHJcbiAgICAgICAgXCJzdXBlckFwcC5ibG9ja3NcIixcclxuICAgICAgICBcIkxvY2FsU3RvcmFnZU1vZHVsZVwiLFxyXG4gICAgICAgIFwibmdNYXRlcmlhbFwiLFxyXG4gICAgXSk7XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5jb25zdGFudHNcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5oZWxwZXJzXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3Mucm91dGVyXCIsIFtcInVpLnJvdXRlclwiXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIsIFtcclxuICAgICAgICBcImJsb2Nrcy5jb25zdGFudHNcIlxyXG4gICAgXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuYWJvdXRcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmhvbWVcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLm5ld3NmZWVkXCIsIFtcclxuICAgICAgICBcIm5ld3NmZWVkLnBhZ2VcIixcclxuICAgICAgICBcIm5ld3NmZWVkLmNvbXBvbmVudHNcIlxyXG4gICAgXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAud2FsbHNcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcIm5ld3NmZWVkLmNvbXBvbmVudHNcIiwgW1xyXG4gICAgICAgICdjb21wb25lbnRzLnZrTmV3c0ZlZWQnXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJuZXdzZmVlZC5wYWdlXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJjb21wb25lbnRzLnZrTmV3c0ZlZWRcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbigpe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKFwic3VwZXJBcHBcIilcclxuICAgICAgICAuY29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgY29uZmlnLiRpbmplY3QgPSBbXCJsb2NhbFN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXJcIl07XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnKGxvY2FsU3RvcmFnZVNlcnZpY2VQcm92aWRlcil7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zZXRQcmVmaXgoJ3N1cGVyQXBwJyk7XHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5cclxuXHJcbmNsYXNzIGNvcmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZVNlcnZpY2UsICRzdGF0ZSl7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvcmVDb250cm9sbGVyLiRpbmplY3QgPSBbXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuY29yZVwiKVxyXG4gICAgLmNvbnRyb2xsZXIoXCJDb3JlQ29udHJvbGxlclwiLCBjb3JlQ29udHJvbGxlcik7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5jb25zdGFudHNcIilcclxuICAgICAgICAuY29uc3RhbnQoJ1ZLX0NPTkZJRycsIHtcclxuICAgICAgICAgICAgY2xpZW50X2lkOiA1NDkxMzA3LFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBcIlZ1NUJDYVRjZE5pOG5MNE1jeUE5XCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb25zdGFudCgnQkFTRV9BUEknLCB7XHJcbiAgICAgICAgICAgIFVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgUE9SVDogXCIzMDAwXCIsXHJcbiAgICAgICAgICAgIEFQSV9VUkw6IFwiL2FwaVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0VWRU5UUycsIHtcclxuICAgICAgICAgICAgU0lHTl9JTjogJ3NpZ25faW4nLFxyXG4gICAgICAgICAgICBTSUdOX09VVDogJ3NpZ25fb3V0JyxcclxuICAgICAgICAgICAgU0lHTl9VUDogJ3NpZ25fdXAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0VSUk9SX0NPREVTJywge1xyXG4gICAgICAgICAgICBOT1RfRk9VTkQ6IFwiTm90IGZvdW5kIVwiLFxyXG4gICAgICAgICAgICBVTktOT1dOOiBcIkp1c3QgdW5rbm93biBlcnJvciFcIlxyXG4gICAgICAgIH0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5oZWxwZXJzXCIpXHJcbiAgICAgICAgLmZhY3RvcnkoXCJoZWxwZXJcIiwgaGVscGVyKTtcclxuXHJcbiAgICBoZWxwZXIuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhlbHBlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlcnZpY2UgPSB7XHJcbiAgICAgICAgICAgIHRvTG93ZXJDYXNlOiB0b0xvd2VyQ2FzZSxcclxuICAgICAgICAgICAgdG9DYW1lbENhc2U6IHRvQ2FtZWxDYXNlLFxyXG4gICAgICAgICAgICB0b1Bhc2NhbENhc2U6IHRvUGFzY2FsQ2FzZSxcclxuICAgICAgICAgICAgcGFyc2VEYXRlOiBwYXJzZURhdGUsXHJcbiAgICAgICAgICAgIHByZXR0eURhdGU6IHByZXR0eURhdGUsXHJcbiAgICAgICAgICAgIHByZXZlbnRDbGljazogcHJldmVudENsaWNrLFxyXG4gICAgICAgICAgICBleGNhcGVTdHJpbmc6IGV4Y2FwZVN0cmluZ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0xvd2VyQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyYW5zZm9ybSh0YXJnZXQsIGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0NhbWVsQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIHRhcmdldC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJhbnNmb3JtKHRhcmdldCwgZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3S2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGFyZ2V0LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmFuc2Zvcm0odGFyZ2V0LCBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdLZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmxlbmd0aCA9PT0gMTAgPyBtb21lbnQoZGF0ZSwgXCJERC5NTS5ZWVlZXCIpIDogbW9tZW50KGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzTnVtYmVyKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV0dHlEYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFkYXRlKSByZXR1cm4gZGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRGF0ZShkYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldmVudENsaWNrKGZ1bmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24oZnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBleGNhcGVTdHJpbmcoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghc3RyaW5nIHx8ICFzdHJpbmcubGVuZ3RoKSByZXR1cm4gc3RyaW5nO1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5TWFwID0ge1xyXG4gICAgICAgICAgICAgICAgXCImXCI6IFwiJmFtcDtcIixcclxuICAgICAgICAgICAgICAgIFwiPFwiOiBcIiZsdDtcIixcclxuICAgICAgICAgICAgICAgIFwiPlwiOiBcIiZndDtcIixcclxuICAgICAgICAgICAgICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgICAgICAgICAgICAgXCInXCI6ICcmIzM5OycsXHJcbiAgICAgICAgICAgICAgICBcIi9cIjogJyYjeDJGOydcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcImJsb2Nrcy5yb3V0ZXJcIilcclxuICAgICAgICAuY29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgY29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJIb21lQ29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcImFib3V0XCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvYWJvdXRcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9hYm91dC9hYm91dC5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIkFib3V0Q29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcIndhbGxzXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvd2FsbHNcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy93YWxscy93YWxscy5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIldhbGxzQ29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcIm5ld3NmZWVkXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvbmV3c1wiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL25ld3NmZWVkL25ld2ZlZWQvbmV3c2ZlZWQuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJOZXdzRmVlZENvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5jbGFzcyBmYWNlQm9va0FwaXtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMudmtDb25maWcgPSBWS19DT05GSUc7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbG9jYWxTdG9yYWdlU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oKXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEZCLmdldExvZ2luU3RhdHVzKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBGQi5sb2dpbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5hdXRoUmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnZmFjZWJvb2stc2Vzc2lvbicsIHJlcy5hdXRoUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhbnktc2Vzc2lvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge3Njb3BlOiBcInVzZXJfYWJvdXRfbWUscHVibGljX3Byb2ZpbGUsdXNlcl9mcmllbmRzLHVzZXJfcG9zdHMsdXNlcl9waG90b3MsdXNlcl9hY3Rpb25zLm5ld3MsdXNlcl9hY3Rpb25zLnZpZGVvLHVzZXJfbGlrZXMsZW1haWwscHVibGlzaF9hY3Rpb25zLHB1Ymxpc2hfcGFnZXMsdXNlcl9zdGF0dXNcIn0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld3NGZWVkKCl7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdmYWNlYm9vay1zZXNzaW9uJyk7XHJcbiAgICAgICAgY29uc3QgYSA9IGAvJHtzZXNzaW9uLnVzZXJJRH0vZmVlZC9gO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRxKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgRkIuYXBpKCcvbWUnLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbCgpIHtcclxuICAgICAgICBWSy5BcGkuY2FsbCgnd2FsbC5nZXQnLCB7XHJcbiAgICAgICAgICAgIG93bmVyX2lkOiAxNTU0MTcxNSxcclxuICAgICAgICAgICAgZG9tYWluOiBcImE2YnJnZXVrYVwiLFxyXG4gICAgICAgICAgICBjb3VudDogNVxyXG4gICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmFjZUJvb2tBcGlTZWxmRmFjdG9yeSgkaHR0cCwkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICByZXR1cm4gbmV3IGZhY2VCb29rQXBpKCRodHRwLCAkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZmFjZUJvb2tBcGkuJGluamVjdCA9IFtcIiRodHRwXCIsIFwiJHFcIiwgXCJWS19DT05GSUdcIiwgXCJsb2NhbFN0b3JhZ2VTZXJ2aWNlXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KCdmYWNlQm9va0FwaScsIGZhY2VCb29rQXBpLmZhY2VCb29rQXBpU2VsZkZhY3RvcnkpOyIsIlxyXG5jbGFzcyB0ZXN0U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoJHEpe1xyXG4gICAgICAgIHRoaXMucSA9ICRxO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW1xyXG4gICAgICAgICAgICB7IFwidGV4dFwiOiBcImF6YXphXCIsICBcInZhbHVlXCI6IDEgfSxcclxuICAgICAgICAgICAgeyBcInRleHRcIjogXCJvbG9sb1wiLCAgXCJ2YWx1ZVwiOiAyIH0sXHJcbiAgICAgICAgICAgIHsgXCJ0ZXh0XCI6IFwiZnVja1wiLCAgIFwidmFsdWVcIjogMyB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0U3RyKCl7XHJcbiAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbXNQcm9taXNlKCl7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLnEuZGVmZXIoKTtcclxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgIC8vZGVmZmVyZWQucmVqZWN0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG50ZXN0U2VydmljZS4kaW5qZWN0ID0gW1wiJHFcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5zZXJ2aWNlc1wiKVxyXG4gICAgLmZhY3RvcnkoXCJUZXN0U2VydmljZVwiLCAoKSA9PiBuZXcgdGVzdFNlcnZpY2UoKSApO1xyXG4iLCJcclxuY2xhc3MgdmtBcGl7XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgJHEsICR0aW1lb3V0LCBWS19DT05GSUcsIGxvY2FsU3RvcmFnZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICAgICAgdGhpcy52a0NvbmZpZyA9IFZLX0NPTkZJRztcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2lnbkluKCl7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHEoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBWSy5BdXRoLmdldExvZ2luU3RhdHVzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc2Vzc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgndmstc2Vzc2lvbicsIHJlc3BvbnNlLnNlc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2FueS1zZXNzaW9uJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBWSy5BdXRoLmxvZ2luKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zZXNzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3ZrLXNlc3Npb24nLCByZXMuc2Vzc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhbnktc2Vzc2lvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCArMis0KzgrMTYrODE5MisxMDI0KzI2MjE0NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3c0ZlZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIFZLLkFwaS5jYWxsKCduZXdzZmVlZC5nZXQnLCB7fSwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbHMoKSB7XHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ3dhbGwuZ2V0Jywge1xyXG4gICAgICAgICBvd25lcl9pZDogMTU1NDE3MTUsXHJcbiAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICAgfSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmtBcGlTZWxmRmFjdG9yeSgkaHR0cCwkcSwgJHRpbWVvdXQsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB2a0FwaSgkaHR0cCwgJHEsICR0aW1lb3V0LCBWS19DT05GSUcsIGxvY2FsU3RvcmFnZVNlcnZpY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG52a0FwaS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkcVwiLCBcIiR0aW1lb3V0XCIsIFwiVktfQ09ORklHXCIsIFwibG9jYWxTdG9yYWdlU2VydmljZVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIpXHJcbiAgICAuZmFjdG9yeSgndmtBcGknLCB2a0FwaS52a0FwaVNlbGZGYWN0b3J5KTsiLCJcclxuY2xhc3MgQWJvdXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwidGl0bGVcIjtcclxuICAgICAgICAkc2NvcGUudGl0bGUgPSBcInNjb3BlVGl0bGVcIjtcclxuICAgIH1cclxufVxyXG5cclxuQWJvdXRDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIl07XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5hYm91dFwiKVxyXG4gICAgLmNvbnRyb2xsZXIoXCJBYm91dENvbnRyb2xsZXJcIiwgQWJvdXRDb250cm9sbGVyKTtcclxuIiwiXHJcbmNsYXNzIGhvbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZVNlcnZpY2UsICRzdGF0ZSwgdmtBcGksIGZhY2VCb29rQXBpKXtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMudmtBcGkgPSB2a0FwaTtcclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpID0gZmFjZUJvb2tBcGk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJ2ay1zZXNzaW9uXCIpO1xyXG4gICAgICAgIC8vIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJmYWNlYm9vay1zZXNzaW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25JblZrKCl7XHJcbiAgICAgICAgY29uc3QgdmtTZXNzaW9uID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldChcInZrLXNlc3Npb25cIik7XHJcblxyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmKHZrU2Vzc2lvbil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZrQXBpXHJcbiAgICAgICAgICAgIC5zaWduSW4oKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbkluRmFjZUJvb2soKXtcclxuICAgICAgICBjb25zdCBmYWNlQm9va1Nlc3Npb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KFwiZmFjZWJvb2stc2Vzc2lvblwiKTtcclxuXHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgaWYoZmFjZUJvb2tTZXNzaW9uKXtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpXHJcbiAgICAgICAgICAgIC5zaWduSW4oKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5ob21lQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVwiLCBcIiRzdGF0ZVwiLCBcInZrQXBpXCIsIFwiZmFjZUJvb2tBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAuaG9tZScpXHJcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBob21lQ29udHJvbGxlcik7IiwiXHJcbmNsYXNzIHdhbGxzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbFN0b3JhZ2VTZXJ2aWNlLCB2a0FwaSl7XHJcbiAgICAgICAgdGhpcy52a0FwaSA9IHZrQXBpO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbndhbGxzQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVwiLCBcInZrQXBpXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3N1cGVyQXBwLndhbGxzJylcclxuICAgIC5jb250cm9sbGVyKCdXYWxsc0NvbnRyb2xsZXInLCB3YWxsc0NvbnRyb2xsZXIpOyIsIlxyXG5jbGFzcyBuZXdzRmVlZENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IodmtBcGksIGZhY2VCb29rQXBpKXtcclxuICAgICAgICB0aGlzLnZrQXBpID0gdmtBcGk7XHJcbiAgICAgICAgdGhpcy5mYWNlQm9va0FwaSA9IGZhY2VCb29rQXBpO1xyXG4gICAgICAgIC8vdGhpcy5nZXRGYWNlQm9va05ld3NGZWVkKCk7XHJcbiAgICAgICAgdGhpcy52a05ld3NGZWVkID0ge1xyXG4gICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdldFZrTmV3c0ZlZWQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VmtOZXdzRmVlZCgpe1xyXG5cclxuICAgICAgICB0aGlzLnZrQXBpXHJcbiAgICAgICAgICAgIC5nZXROZXdzRmVlZCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmtOZXdzRmVlZCA9IHJlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTmV3c0ZlZWQocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGYWNlQm9va05ld3NGZWVkKCl7XHJcbiAgICAgICAgdGhpcy5mYWNlQm9va0FwaVxyXG4gICAgICAgICAgICAuZ2V0TmV3c0ZlZWQoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlck5ld3NGZWVkKHZrTmV3c0ZlZWQpe1xyXG4gICAgICAgIHRoaXMuc29ydGVkTmV3c0ZlZWRzID0gW107XHJcblxyXG4gICAgICAgIHZrTmV3c0ZlZWQuaXRlbXMuZm9yRWFjaChuZXdzRmVlZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKG5ld3NGZWVkLnNvdXJjZV9pZCA8IDApe1xyXG4gICAgICAgICAgICAgICAgdmtOZXdzRmVlZC5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZ3JvdXAuZ2lkID09IChNYXRoLmFicyhuZXdzRmVlZC5zb3VyY2VfaWQpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdzOiBuZXdzRmVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyOiBncm91cCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydGVkTmV3c0ZlZWRzLnB1c2gobmV3cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2a05ld3NGZWVkLnByb2ZpbGVzLmZvckVhY2gocHJvZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZmlsZS51aWQgPT0gbmV3c0ZlZWQuc291cmNlX2lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld3M6IG5ld3NGZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IHByb2ZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRlZE5ld3NGZWVkcy5wdXNoKG5ld3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ydGVkTmV3c0ZlZWRzLmZvckVhY2goc29ydGVkTmV3c0ZlZWQgPT4ge1xyXG4gICAgICAgICAgICBpZihzb3J0ZWROZXdzRmVlZC5uZXdzLmNvcHlfb3duZXJfaWQgJiYgc29ydGVkTmV3c0ZlZWQubmV3cy5wb3N0X3R5cGUgPT0gXCJjb3B5XCIpe1xyXG4gICAgICAgICAgICAgICAgaWYoc29ydGVkTmV3c0ZlZWQubmV3cy5jb3B5X293bmVyX2lkIDwgMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmtOZXdzRmVlZC5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdyb3VwLmdpZCA9PSAoTWF0aC5hYnMoc29ydGVkTmV3c0ZlZWQubmV3cy5jb3B5X293bmVyX2lkKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkTmV3c0ZlZWQucmVwb3N0X293bmVyID0gZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2a05ld3NGZWVkLnByb2ZpbGVzLmZvckVhY2gocHJvZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2ZpbGUudWlkID09IG5ld3NGZWVkLnNvdXJjZV9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWROZXdzRmVlZC5yZXBvc3Rfb3duZXIgPSBwcm9maWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubmV3c0ZlZWRDb250cm9sbGVyLiRpbmplY3QgPSBbXCJ2a0FwaVwiLCBcImZhY2VCb29rQXBpXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3N1cGVyQXBwLm5ld3NmZWVkJylcclxuICAgIC5jb250cm9sbGVyKCdOZXdzRmVlZENvbnRyb2xsZXInLCBuZXdzRmVlZENvbnRyb2xsZXIpOyIsImNsYXNzIGNvcHlQb3N0VmtDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgIH1cclxufVxyXG5cclxuY29weVBvc3RWa0NvbXBvbmVudC4kaW5qZWN0ID0gW107XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgcmVzdHJpY3Q6IFwiRUFcIixcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcG9zdDogJzwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6XCJhcHAvcGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy92ay9jb3B5LXZrLXBvc3QvY29weS12ay1wb3N0Lmh0bWxcIixcclxuICAgIGNvbnRyb2xsZXI6IGNvcHlQb3N0VmtDb21wb25lbnQsXHJcbiAgICBjb250cm9sbGVyQXM6IFwidm1cIlxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJjb21wb25lbnRzLnZrTmV3c0ZlZWRcIilcclxuICAgIC5jb21wb25lbnQoXCJjb3B5VmtQb3N0XCIsIG9wdGlvbnMpOyIsImNsYXNzIHBvc3ROZXdGZWVkQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbnBvc3ROZXdGZWVkQ29tcG9uZW50LiRpbmplY3QgPSBbXTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXN0cmljdDogXCJFQVwiLFxyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwb3N0OiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy92ay9wb3N0L3Bvc3QuaHRtbFwiLFxyXG4gICAgY29udHJvbGxlcjogcG9zdE5ld0ZlZWRDb21wb25lbnQsXHJcbiAgICBjb250cm9sbGVyQXM6IFwidm1cIlxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJjb21wb25lbnRzLnZrTmV3c0ZlZWRcIilcclxuICAgIC5jb21wb25lbnQoXCJ2a1Bvc3RcIiwgb3B0aW9ucyk7IiwiY2xhc3Mgc29ydGluZ1Bvc3RzVmtDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgIH1cclxufVxyXG5cclxuc29ydGluZ1Bvc3RzVmtDb21wb25lbnQuJGluamVjdCA9IFtdO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3RyaWN0OiBcIkVBXCIsXHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBvc3Q6ICc8J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOlwiYXBwL3BhZ2VzL25ld3NmZWVkL2NvbXBvbmVudHMvdmsvc29ydC12ay1wb3N0L3NvcnQtdmstcG9zdC5odG1sXCIsXHJcbiAgICBjb250cm9sbGVyOiBzb3J0aW5nUG9zdHNWa0NvbXBvbmVudCxcclxuICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiXHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcImNvbXBvbmVudHMudmtOZXdzRmVlZFwiKVxyXG4gICAgLmNvbXBvbmVudChcInNvcnRpbmdWa1Bvc3RzXCIsIG9wdGlvbnMpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
