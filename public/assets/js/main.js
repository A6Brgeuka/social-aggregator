"use strict";

(function () {
    angular.module("superApp", ["superApp.core",
    //pages
    "superApp.home", "superApp.about", "superApp.walls", "superApp.newsfeed"]);
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
    angular.module("superApp.blocks", ["blocks.services", "blocks.constants", "blocks.helpers", "blocks.router"]);
})();
"use strict";

(function () {
    angular.module("superApp.about", []);
})();
"use strict";

(function () {
    angular.module("superApp.newsfeed", ["newsfeed.page", "newsfeed.components"]);
})();
"use strict";

(function () {
    angular.module("superApp.home", []);
})();
"use strict";

(function () {
    angular.module("superApp.walls", []);
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

var ownerVkPostVkComponent = function ownerVkPostVkComponent() {
    _classCallCheck(this, ownerVkPostVkComponent);
};

ownerVkPostVkComponent.$inject = [];

var options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl: "app/pages/newsfeed/components/vk/owner-vk-post/owner-vk-post.html",
    controller: ownerVkPostVkComponent,
    controllerAs: "vm",
    transclude: true
};

angular.module("components.vkNewsFeed").component("ownerVkPost", options);
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
    templateUrl: "app/pages/newsfeed/components/vk/vk-post/vk-post.html",
    controller: postNewFeedComponent,
    controllerAs: "vm"
};

angular.module("components.vkNewsFeed").component("vkPost", options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJjb3JlL2NvcmUubW9kdWxlLmpzIiwiYmxvY2tzL2Jsb2Nrcy5tb2R1bGUuanMiLCJwYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJwYWdlcy9uZXdzZmVlZC9uZXdzZmVlZC5tb2R1bGUuanMiLCJwYWdlcy9ob21lL2hvbWUubW9kdWxlLmpzIiwicGFnZXMvd2FsbHMvd2FsbHMubW9kdWxlLmpzIiwiYmxvY2tzL2NvbnN0YW50cy9jb25zdGFudHMubW9kdWxlLmpzIiwiYmxvY2tzL2hlbHBlcnMvaGVscGVycy5tb2R1bGUuanMiLCJibG9ja3Mvcm91dGVyL3JvdXRlci5tb2R1bGUuanMiLCJibG9ja3Mvc2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsInBhZ2VzL25ld3NmZWVkL25ld2ZlZWQvbmV3ZmVlZC5tb2R1bGUuanMiLCJwYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3ZrL3ZrLmNvbXBvbmVudHMubW9kdWxlLmpzIiwiYXBwLmNvbmZpZy5qcyIsImNvcmUvY29yZS5jb250cm9sbGVyLmpzIiwicGFnZXMvYWJvdXQvYWJvdXQuY29udHJvbGxlci5qcyIsInBhZ2VzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwicGFnZXMvd2FsbHMvd2FsbHMuY29udHJvbGxlci5qcyIsImJsb2Nrcy9jb25zdGFudHMvY29uc3RhbnRzLnNlcnZpY2UuanMiLCJibG9ja3MvaGVscGVycy9oZWxwZXIuc2VydmljZS5qcyIsImJsb2Nrcy9yb3V0ZXIvcm91dGVyLmNvbmZpZy5qcyIsImJsb2Nrcy9zZXJ2aWNlcy9mYWNlYm9vay5zZXJ2aWNlLmpzIiwiYmxvY2tzL3NlcnZpY2VzL3Rlc3Quc2VydmljZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy92ay5zZXJ2aWNlLmpzIiwicGFnZXMvbmV3c2ZlZWQvbmV3ZmVlZC9uZXdzZmVlZC5jb250cm9sbGVyLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy92ay9jb3B5LXZrLXBvc3QvY29weS12ay1wb3N0LmNvbnRyb2xsZXIuanMiLCJwYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3ZrL293bmVyLXZrLXBvc3Qvb3duZXItdmstcG9zdC5jb250cm9sbGVyLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy92ay9zb3J0LXZrLXBvc3Qvc29ydC12ay1wb3N0LmNvbnRyb2xsZXIuanMiLCJwYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3ZrL3ZrLXBvc3QvdmstcG9zdC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixDQUN2QixlQUR1Qjs7QUFHdkIsbUJBSHVCLEVBSXZCLGdCQUp1QixFQUt2QixnQkFMdUIsRUFNdkIsbUJBTnVCLENBQTNCO0FBUUgsQ0FURDs7O0FDQUEsQ0FBQyxZQUFXO0FBQ1IsWUFBUSxNQUFSLENBQWUsZUFBZixFQUFnQzs7OztBQUk1QixxQkFKNEIsRUFLNUIsb0JBTDRCLEVBTTVCLFlBTjRCLENBQWhDO0FBUUgsQ0FURDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsaUJBQWYsRUFBa0MsQ0FDOUIsaUJBRDhCLEVBRTlCLGtCQUY4QixFQUc5QixnQkFIOEIsRUFJOUIsZUFKOEIsQ0FBbEM7QUFNSCxDQVBEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxnQkFBZixFQUFpQyxFQUFqQztBQUNILENBRkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLG1CQUFmLEVBQW9DLENBQ2hDLGVBRGdDLEVBRWhDLHFCQUZnQyxDQUFwQztBQUlILENBTEQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGVBQWYsRUFBZ0MsRUFBaEM7QUFDSCxDQUZEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFR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O0FBQ04sY0FBTTtBQURBLEtBRkU7QUFLWixpQkFBYSx1REFMRDtBQU1aLGdCQUFZLG9CQU5BO0FBT1osa0JBQWM7QUFQRixDQUFoQjs7QUFVQSxRQUFRLE1BQVIsQ0FBZSx1QkFBZixFQUNLLFNBREwsQ0FDZSxRQURmLEVBQ3lCLE9BRHpCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcFwiLCBbXHJcbiAgICAgICAgXCJzdXBlckFwcC5jb3JlXCIsXHJcbiAgICAgICAgLy9wYWdlc1xyXG4gICAgICAgIFwic3VwZXJBcHAuaG9tZVwiLFxyXG4gICAgICAgIFwic3VwZXJBcHAuYWJvdXRcIixcclxuICAgICAgICBcInN1cGVyQXBwLndhbGxzXCIsXHJcbiAgICAgICAgXCJzdXBlckFwcC5uZXdzZmVlZFwiXHJcbiAgICBdKTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5jb3JlXCIsIFtcclxuICAgICAgICAvL2FuZ3VsYXIgbmF0aXZlIG1vZHVsZXMgKyB0aGlyZCBwYXJ0eSBtb2R1bGVzXHJcbiAgICAgICAgLy8uLlxyXG4gICAgICAgIC8vY3Jvc3MtYXBwIG1vZHVsZVxyXG4gICAgICAgIFwic3VwZXJBcHAuYmxvY2tzXCIsXHJcbiAgICAgICAgXCJMb2NhbFN0b3JhZ2VNb2R1bGVcIixcclxuICAgICAgICBcIm5nTWF0ZXJpYWxcIixcclxuICAgIF0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5ibG9ja3NcIiwgW1xyXG4gICAgICAgIFwiYmxvY2tzLnNlcnZpY2VzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuaGVscGVyc1wiLFxyXG4gICAgICAgIFwiYmxvY2tzLnJvdXRlclwiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5hYm91dFwiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAubmV3c2ZlZWRcIiwgW1xyXG4gICAgICAgIFwibmV3c2ZlZWQucGFnZVwiLFxyXG4gICAgICAgIFwibmV3c2ZlZWQuY29tcG9uZW50c1wiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5ob21lXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC53YWxsc1wiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLmNvbnN0YW50c1wiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLmhlbHBlcnNcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5yb3V0ZXJcIiwgW1widWkucm91dGVyXCJdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIiwgW1xyXG4gICAgICAgIFwiYmxvY2tzLmNvbnN0YW50c1wiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJuZXdzZmVlZC5jb21wb25lbnRzXCIsIFtcclxuICAgICAgICAnY29tcG9uZW50cy52a05ld3NGZWVkJ1xyXG4gICAgXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwibmV3c2ZlZWQucGFnZVwiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiY29tcG9uZW50cy52a05ld3NGZWVkXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKXtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcInN1cGVyQXBwXCIpXHJcbiAgICAgICAgLmNvbmZpZyhjb25maWcpO1xyXG5cclxuICAgIGNvbmZpZy4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyXCJdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpZyhsb2NhbFN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXIpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2VQcm92aWRlclxyXG4gICAgICAgICAgICAuc2V0UHJlZml4KCdzdXBlckFwcCcpO1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCJcclxuXHJcblxyXG5jbGFzcyBjb3JlQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbFN0b3JhZ2VTZXJ2aWNlLCAkc3RhdGUpe1xyXG4gICAgfVxyXG59XHJcblxyXG5jb3JlQ29udHJvbGxlci4kaW5qZWN0ID0gW107XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmNvcmVcIilcclxuICAgIC5jb250cm9sbGVyKFwiQ29yZUNvbnRyb2xsZXJcIiwgY29yZUNvbnRyb2xsZXIpO1xyXG4iLCJcclxuY2xhc3MgQWJvdXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwidGl0bGVcIjtcclxuICAgICAgICAkc2NvcGUudGl0bGUgPSBcInNjb3BlVGl0bGVcIjtcclxuICAgIH1cclxufVxyXG5cclxuQWJvdXRDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIl07XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5hYm91dFwiKVxyXG4gICAgLmNvbnRyb2xsZXIoXCJBYm91dENvbnRyb2xsZXJcIiwgQWJvdXRDb250cm9sbGVyKTtcclxuIiwiXHJcbmNsYXNzIGhvbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZVNlcnZpY2UsICRzdGF0ZSwgdmtBcGksIGZhY2VCb29rQXBpKXtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMudmtBcGkgPSB2a0FwaTtcclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpID0gZmFjZUJvb2tBcGk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJ2ay1zZXNzaW9uXCIpO1xyXG4gICAgICAgIC8vIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJmYWNlYm9vay1zZXNzaW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25JblZrKCl7XHJcbiAgICAgICAgY29uc3QgdmtTZXNzaW9uID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldChcInZrLXNlc3Npb25cIik7XHJcblxyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmKHZrU2Vzc2lvbil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZrQXBpXHJcbiAgICAgICAgICAgIC5zaWduSW4oKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbkluRmFjZUJvb2soKXtcclxuICAgICAgICBjb25zdCBmYWNlQm9va1Nlc3Npb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KFwiZmFjZWJvb2stc2Vzc2lvblwiKTtcclxuXHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgaWYoZmFjZUJvb2tTZXNzaW9uKXtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpXHJcbiAgICAgICAgICAgIC5zaWduSW4oKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5ob21lQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVwiLCBcIiRzdGF0ZVwiLCBcInZrQXBpXCIsIFwiZmFjZUJvb2tBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAuaG9tZScpXHJcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBob21lQ29udHJvbGxlcik7IiwiXHJcbmNsYXNzIHdhbGxzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbFN0b3JhZ2VTZXJ2aWNlLCB2a0FwaSl7XHJcbiAgICAgICAgdGhpcy52a0FwaSA9IHZrQXBpO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbndhbGxzQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVwiLCBcInZrQXBpXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3N1cGVyQXBwLndhbGxzJylcclxuICAgIC5jb250cm9sbGVyKCdXYWxsc0NvbnRyb2xsZXInLCB3YWxsc0NvbnRyb2xsZXIpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5jb25zdGFudHNcIilcclxuICAgICAgICAuY29uc3RhbnQoJ1ZLX0NPTkZJRycsIHtcclxuICAgICAgICAgICAgY2xpZW50X2lkOiA1NDkxMzA3LFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBcIlZ1NUJDYVRjZE5pOG5MNE1jeUE5XCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb25zdGFudCgnQkFTRV9BUEknLCB7XHJcbiAgICAgICAgICAgIFVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgUE9SVDogXCIzMDAwXCIsXHJcbiAgICAgICAgICAgIEFQSV9VUkw6IFwiL2FwaVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0VWRU5UUycsIHtcclxuICAgICAgICAgICAgU0lHTl9JTjogJ3NpZ25faW4nLFxyXG4gICAgICAgICAgICBTSUdOX09VVDogJ3NpZ25fb3V0JyxcclxuICAgICAgICAgICAgU0lHTl9VUDogJ3NpZ25fdXAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0VSUk9SX0NPREVTJywge1xyXG4gICAgICAgICAgICBOT1RfRk9VTkQ6IFwiTm90IGZvdW5kIVwiLFxyXG4gICAgICAgICAgICBVTktOT1dOOiBcIkp1c3QgdW5rbm93biBlcnJvciFcIlxyXG4gICAgICAgIH0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5oZWxwZXJzXCIpXHJcbiAgICAgICAgLmZhY3RvcnkoXCJoZWxwZXJcIiwgaGVscGVyKTtcclxuXHJcbiAgICBoZWxwZXIuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhlbHBlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlcnZpY2UgPSB7XHJcbiAgICAgICAgICAgIHRvTG93ZXJDYXNlOiB0b0xvd2VyQ2FzZSxcclxuICAgICAgICAgICAgdG9DYW1lbENhc2U6IHRvQ2FtZWxDYXNlLFxyXG4gICAgICAgICAgICB0b1Bhc2NhbENhc2U6IHRvUGFzY2FsQ2FzZSxcclxuICAgICAgICAgICAgcGFyc2VEYXRlOiBwYXJzZURhdGUsXHJcbiAgICAgICAgICAgIHByZXR0eURhdGU6IHByZXR0eURhdGUsXHJcbiAgICAgICAgICAgIHByZXZlbnRDbGljazogcHJldmVudENsaWNrLFxyXG4gICAgICAgICAgICBleGNhcGVTdHJpbmc6IGV4Y2FwZVN0cmluZ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0xvd2VyQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyYW5zZm9ybSh0YXJnZXQsIGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0NhbWVsQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIHRhcmdldC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJhbnNmb3JtKHRhcmdldCwgZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3S2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGFyZ2V0LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmFuc2Zvcm0odGFyZ2V0LCBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdLZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmxlbmd0aCA9PT0gMTAgPyBtb21lbnQoZGF0ZSwgXCJERC5NTS5ZWVlZXCIpIDogbW9tZW50KGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzTnVtYmVyKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV0dHlEYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFkYXRlKSByZXR1cm4gZGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRGF0ZShkYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldmVudENsaWNrKGZ1bmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24oZnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBleGNhcGVTdHJpbmcoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghc3RyaW5nIHx8ICFzdHJpbmcubGVuZ3RoKSByZXR1cm4gc3RyaW5nO1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5TWFwID0ge1xyXG4gICAgICAgICAgICAgICAgXCImXCI6IFwiJmFtcDtcIixcclxuICAgICAgICAgICAgICAgIFwiPFwiOiBcIiZsdDtcIixcclxuICAgICAgICAgICAgICAgIFwiPlwiOiBcIiZndDtcIixcclxuICAgICAgICAgICAgICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgICAgICAgICAgICAgXCInXCI6ICcmIzM5OycsXHJcbiAgICAgICAgICAgICAgICBcIi9cIjogJyYjeDJGOydcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcImJsb2Nrcy5yb3V0ZXJcIilcclxuICAgICAgICAuY29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgY29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJIb21lQ29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcImFib3V0XCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvYWJvdXRcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9hYm91dC9hYm91dC5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIkFib3V0Q29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcIndhbGxzXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvd2FsbHNcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy93YWxscy93YWxscy5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIldhbGxzQ29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcIm5ld3NmZWVkXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvbmV3c1wiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL25ld3NmZWVkL25ld2ZlZWQvbmV3c2ZlZWQuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJOZXdzRmVlZENvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5jbGFzcyBmYWNlQm9va0FwaXtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMudmtDb25maWcgPSBWS19DT05GSUc7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbG9jYWxTdG9yYWdlU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oKXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEZCLmdldExvZ2luU3RhdHVzKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBGQi5sb2dpbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5hdXRoUmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnZmFjZWJvb2stc2Vzc2lvbicsIHJlcy5hdXRoUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhbnktc2Vzc2lvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge3Njb3BlOiBcInVzZXJfYWJvdXRfbWUscHVibGljX3Byb2ZpbGUsdXNlcl9mcmllbmRzLHVzZXJfcG9zdHMsdXNlcl9waG90b3MsdXNlcl9hY3Rpb25zLm5ld3MsdXNlcl9hY3Rpb25zLnZpZGVvLHVzZXJfbGlrZXMsZW1haWwscHVibGlzaF9hY3Rpb25zLHB1Ymxpc2hfcGFnZXMsdXNlcl9zdGF0dXNcIn0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5ld3NGZWVkKCl7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdmYWNlYm9vay1zZXNzaW9uJyk7XHJcbiAgICAgICAgY29uc3QgYSA9IGAvJHtzZXNzaW9uLnVzZXJJRH0vZmVlZC9gO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRxKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgRkIuYXBpKCcvbWUnLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbCgpIHtcclxuICAgICAgICBWSy5BcGkuY2FsbCgnd2FsbC5nZXQnLCB7XHJcbiAgICAgICAgICAgIG93bmVyX2lkOiAxNTU0MTcxNSxcclxuICAgICAgICAgICAgZG9tYWluOiBcImE2YnJnZXVrYVwiLFxyXG4gICAgICAgICAgICBjb3VudDogNVxyXG4gICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmFjZUJvb2tBcGlTZWxmRmFjdG9yeSgkaHR0cCwkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICByZXR1cm4gbmV3IGZhY2VCb29rQXBpKCRodHRwLCAkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZmFjZUJvb2tBcGkuJGluamVjdCA9IFtcIiRodHRwXCIsIFwiJHFcIiwgXCJWS19DT05GSUdcIiwgXCJsb2NhbFN0b3JhZ2VTZXJ2aWNlXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KCdmYWNlQm9va0FwaScsIGZhY2VCb29rQXBpLmZhY2VCb29rQXBpU2VsZkZhY3RvcnkpOyIsIlxyXG5jbGFzcyB0ZXN0U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoJHEpe1xyXG4gICAgICAgIHRoaXMucSA9ICRxO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW1xyXG4gICAgICAgICAgICB7IFwidGV4dFwiOiBcImF6YXphXCIsICBcInZhbHVlXCI6IDEgfSxcclxuICAgICAgICAgICAgeyBcInRleHRcIjogXCJvbG9sb1wiLCAgXCJ2YWx1ZVwiOiAyIH0sXHJcbiAgICAgICAgICAgIHsgXCJ0ZXh0XCI6IFwiZnVja1wiLCAgIFwidmFsdWVcIjogMyB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0U3RyKCl7XHJcbiAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbXNQcm9taXNlKCl7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLnEuZGVmZXIoKTtcclxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgIC8vZGVmZmVyZWQucmVqZWN0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG50ZXN0U2VydmljZS4kaW5qZWN0ID0gW1wiJHFcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5zZXJ2aWNlc1wiKVxyXG4gICAgLmZhY3RvcnkoXCJUZXN0U2VydmljZVwiLCAoKSA9PiBuZXcgdGVzdFNlcnZpY2UoKSApO1xyXG4iLCJcclxuY2xhc3MgdmtBcGl7XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgJHEsICR0aW1lb3V0LCBWS19DT05GSUcsIGxvY2FsU3RvcmFnZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICAgICAgdGhpcy52a0NvbmZpZyA9IFZLX0NPTkZJRztcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2lnbkluKCl7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHEoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBWSy5BdXRoLmdldExvZ2luU3RhdHVzKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc2Vzc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgndmstc2Vzc2lvbicsIHJlc3BvbnNlLnNlc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2FueS1zZXNzaW9uJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBWSy5BdXRoLmxvZ2luKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5zZXNzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3ZrLXNlc3Npb24nLCByZXMuc2Vzc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhbnktc2Vzc2lvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCArMis0KzgrMTYrODE5MisxMDI0KzI2MjE0NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3c0ZlZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIFZLLkFwaS5jYWxsKCduZXdzZmVlZC5nZXQnLCB7fSwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbHMoKSB7XHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ3dhbGwuZ2V0Jywge1xyXG4gICAgICAgICBvd25lcl9pZDogMTU1NDE3MTUsXHJcbiAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICAgfSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmtBcGlTZWxmRmFjdG9yeSgkaHR0cCwkcSwgJHRpbWVvdXQsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB2a0FwaSgkaHR0cCwgJHEsICR0aW1lb3V0LCBWS19DT05GSUcsIGxvY2FsU3RvcmFnZVNlcnZpY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG52a0FwaS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkcVwiLCBcIiR0aW1lb3V0XCIsIFwiVktfQ09ORklHXCIsIFwibG9jYWxTdG9yYWdlU2VydmljZVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIpXHJcbiAgICAuZmFjdG9yeSgndmtBcGknLCB2a0FwaS52a0FwaVNlbGZGYWN0b3J5KTsiLCJcclxuY2xhc3MgbmV3c0ZlZWRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHZrQXBpLCBmYWNlQm9va0FwaSl7XHJcbiAgICAgICAgdGhpcy52a0FwaSA9IHZrQXBpO1xyXG4gICAgICAgIHRoaXMuZmFjZUJvb2tBcGkgPSBmYWNlQm9va0FwaTtcclxuICAgICAgICAvL3RoaXMuZ2V0RmFjZUJvb2tOZXdzRmVlZCgpO1xyXG4gICAgICAgIHRoaXMudmtOZXdzRmVlZCA9IHtcclxuICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRWa05ld3NGZWVkKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFZrTmV3c0ZlZWQoKXtcclxuXHJcbiAgICAgICAgdGhpcy52a0FwaVxyXG4gICAgICAgICAgICAuZ2V0TmV3c0ZlZWQoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZrTmV3c0ZlZWQgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlck5ld3NGZWVkKHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmFjZUJvb2tOZXdzRmVlZCgpe1xyXG4gICAgICAgIHRoaXMuZmFjZUJvb2tBcGlcclxuICAgICAgICAgICAgLmdldE5ld3NGZWVkKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJOZXdzRmVlZCh2a05ld3NGZWVkKXtcclxuICAgICAgICB0aGlzLnNvcnRlZE5ld3NGZWVkcyA9IFtdO1xyXG5cclxuICAgICAgICB2a05ld3NGZWVkLml0ZW1zLmZvckVhY2gobmV3c0ZlZWQgPT4ge1xyXG4gICAgICAgICAgICBpZihuZXdzRmVlZC5zb3VyY2VfaWQgPCAwKXtcclxuICAgICAgICAgICAgICAgIHZrTmV3c0ZlZWQuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdyb3VwLmdpZCA9PSAoTWF0aC5hYnMobmV3c0ZlZWQuc291cmNlX2lkKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3czogbmV3c0ZlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcjogZ3JvdXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRlZE5ld3NGZWVkcy5wdXNoKG5ld3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmtOZXdzRmVlZC5wcm9maWxlcy5mb3JFYWNoKHByb2ZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2ZpbGUudWlkID09IG5ld3NGZWVkLnNvdXJjZV9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdzOiBuZXdzRmVlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyOiBwcm9maWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0ZWROZXdzRmVlZHMucHVzaChuZXdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvcnRlZE5ld3NGZWVkcy5mb3JFYWNoKHNvcnRlZE5ld3NGZWVkID0+IHtcclxuICAgICAgICAgICAgaWYoc29ydGVkTmV3c0ZlZWQubmV3cy5jb3B5X293bmVyX2lkICYmIHNvcnRlZE5ld3NGZWVkLm5ld3MucG9zdF90eXBlID09IFwiY29weVwiKXtcclxuICAgICAgICAgICAgICAgIGlmKHNvcnRlZE5ld3NGZWVkLm5ld3MuY29weV9vd25lcl9pZCA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHZrTmV3c0ZlZWQuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihncm91cC5naWQgPT0gKE1hdGguYWJzKHNvcnRlZE5ld3NGZWVkLm5ld3MuY29weV9vd25lcl9pZCkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZE5ld3NGZWVkLnJlcG9zdF9vd25lciA9IGdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmtOZXdzRmVlZC5wcm9maWxlcy5mb3JFYWNoKHByb2ZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9maWxlLnVpZCA9PSBuZXdzRmVlZC5zb3VyY2VfaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkTmV3c0ZlZWQucmVwb3N0X293bmVyID0gcHJvZmlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ld3NGZWVkQ29udHJvbGxlci4kaW5qZWN0ID0gW1widmtBcGlcIiwgXCJmYWNlQm9va0FwaVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdzdXBlckFwcC5uZXdzZmVlZCcpXHJcbiAgICAuY29udHJvbGxlcignTmV3c0ZlZWRDb250cm9sbGVyJywgbmV3c0ZlZWRDb250cm9sbGVyKTsiLCJjbGFzcyBjb3B5UG9zdFZrQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvcHlQb3N0VmtDb21wb25lbnQuJGluamVjdCA9IFtdO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3RyaWN0OiBcIkVBXCIsXHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBvc3Q6ICc8J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOlwiYXBwL3BhZ2VzL25ld3NmZWVkL2NvbXBvbmVudHMvdmsvY29weS12ay1wb3N0L2NvcHktdmstcG9zdC5odG1sXCIsXHJcbiAgICBjb250cm9sbGVyOiBjb3B5UG9zdFZrQ29tcG9uZW50LFxyXG4gICAgY29udHJvbGxlckFzOiBcInZtXCJcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiY29tcG9uZW50cy52a05ld3NGZWVkXCIpXHJcbiAgICAuY29tcG9uZW50KFwiY29weVZrUG9zdFwiLCBvcHRpb25zKTsiLCJjbGFzcyBvd25lclZrUG9zdFZrQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbm93bmVyVmtQb3N0VmtDb21wb25lbnQuJGluamVjdCA9IFtdO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlc3RyaWN0OiBcIkVBXCIsXHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBvc3Q6ICc8J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlVXJsOlwiYXBwL3BhZ2VzL25ld3NmZWVkL2NvbXBvbmVudHMvdmsvb3duZXItdmstcG9zdC9vd25lci12ay1wb3N0Lmh0bWxcIixcclxuICAgIGNvbnRyb2xsZXI6IG93bmVyVmtQb3N0VmtDb21wb25lbnQsXHJcbiAgICBjb250cm9sbGVyQXM6IFwidm1cIixcclxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbn07XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcImNvbXBvbmVudHMudmtOZXdzRmVlZFwiKVxyXG4gICAgLmNvbXBvbmVudChcIm93bmVyVmtQb3N0XCIsIG9wdGlvbnMpOyIsImNsYXNzIHNvcnRpbmdQb3N0c1ZrQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbnNvcnRpbmdQb3N0c1ZrQ29tcG9uZW50LiRpbmplY3QgPSBbXTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXN0cmljdDogXCJFQVwiLFxyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwb3N0OiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDpcImFwcC9wYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3ZrL3NvcnQtdmstcG9zdC9zb3J0LXZrLXBvc3QuaHRtbFwiLFxyXG4gICAgY29udHJvbGxlcjogc29ydGluZ1Bvc3RzVmtDb21wb25lbnQsXHJcbiAgICBjb250cm9sbGVyQXM6IFwidm1cIlxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJjb21wb25lbnRzLnZrTmV3c0ZlZWRcIilcclxuICAgIC5jb21wb25lbnQoXCJzb3J0aW5nVmtQb3N0c1wiLCBvcHRpb25zKTsiLCJjbGFzcyBwb3N0TmV3RmVlZENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgfVxyXG59XHJcblxyXG5wb3N0TmV3RmVlZENvbXBvbmVudC4kaW5qZWN0ID0gW107XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgcmVzdHJpY3Q6IFwiRUFcIixcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcG9zdDogJzwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL25ld3NmZWVkL2NvbXBvbmVudHMvdmsvdmstcG9zdC92ay1wb3N0Lmh0bWxcIixcclxuICAgIGNvbnRyb2xsZXI6IHBvc3ROZXdGZWVkQ29tcG9uZW50LFxyXG4gICAgY29udHJvbGxlckFzOiBcInZtXCJcclxufTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiY29tcG9uZW50cy52a05ld3NGZWVkXCIpXHJcbiAgICAuY29tcG9uZW50KFwidmtQb3N0XCIsIG9wdGlvbnMpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
