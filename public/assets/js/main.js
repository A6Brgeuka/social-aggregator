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
    angular.module("newsfeed.components", ["ngSanitize"]);
})();
"use strict";

(function () {
    angular.module("newsfeed.page", []);
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
                        debugger;
                        _this.localStorageService.set('vk-session', response.session);
                        _this.localStorageService.set('any-session', true);
                        resolve();
                    } else {
                        VK.Auth.login(function (res) {
                            debugger;
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
        this.getVkNewsFeed();
        //this.getFaceBookNewsFeed();
        debugger;
    }

    _createClass(newsFeedController, [{
        key: "getVkNewsFeed",
        value: function getVkNewsFeed() {
            var _this = this;

            this.vkApi.getNewsFeed().then(function (res) {
                _this.filterNewsFeed(res);
                _this.vkNewsFeed = res;
                debugger;
                console.log(_this.vkNewsFeed);
            }).catch(function (err) {
                debugger;
            });
        }
    }, {
        key: "getFaceBookNewsFeed",
        value: function getFaceBookNewsFeed() {
            this.faceBookApi.getNewsFeed().then(function (res) {}).catch(function (err) {});
        }
    }, {
        key: "filterNewsFeed",
        value: function filterNewsFeed(vkNewsFeed) {
            var _this2 = this;

            this.vkNewsFeed = vkNewsFeed;

            this.filtedNewsFeeds = [];

            this.vkNewsFeed.items.forEach(function (newsFeed) {
                if (newsFeed.source_id < 0) {
                    _this2.vkNewsFeed.groups.forEach(function (group) {
                        if (group.gid == Math.abs(newsFeed.source_id)) {
                            var news = newsFeed;
                            news.group = group;
                            _this2.filtedNewsFeeds.push(news);
                        }
                    });
                } else {
                    _this2.vkNewsFeed.profiles.forEach(function (profile) {
                        if (profile.uid == newsFeed.source_id) {
                            var news = newsFeed;
                            news.profile = profile;
                            _this2.filtedNewsFeeds.push(news);
                        }
                    });
                }
            });
        }
    }]);

    return newsFeedController;
}();

newsFeedController.$inject = ["vkApi", "faceBookApi"];

angular.module('superApp.newsfeed').controller('NewsFeedController', newsFeedController);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dirPostNewFeedComponent = function () {
    function dirPostNewFeedComponent() {
        _classCallCheck(this, dirPostNewFeedComponent);

        this.restrict = "EA";
        this.scope = {
            post: '=post'
        };
        this.templateUrl = "app/pages/newsfeed/components/dirPost/dirPost.html";
        this.controller = dirPostNewFeedComponent;
        this.controllerAs = "vm";
    }

    _createClass(dirPostNewFeedComponent, [{
        key: "link",
        value: function link(scope, element) {
            console.log(this.templateUrl);
        }
    }], [{
        key: "createInstance",
        value: function createInstance() {
            dirPostNewFeedComponent.instance = new dirPostNewFeedComponent();
            return dirPostNewFeedComponent.instance;
        }
    }]);

    return dirPostNewFeedComponent;
}();

dirPostNewFeedComponent.$inject = [];

angular.module("newsfeed.components").directive("dirNewsFeed", dirPostNewFeedComponent.createInstance);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var postNewFeedComponent = function postNewFeedComponent() {
    _classCallCheck(this, postNewFeedComponent);

    console.log(this);
};

postNewFeedComponent.$inject = [];

var options = {
    restrict: "EA",
    bindings: {
        post: '<'
    },
    templateUrl: function templateUrl() {
        return "app/pages/newsfeed/components/post/post.html";
    },

    controller: postNewFeedComponent,
    controllerAs: "vm"
};

angular.module("newsfeed.components").component("newsFeed", options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJibG9ja3MvYmxvY2tzLm1vZHVsZS5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5tb2R1bGUuanMiLCJibG9ja3MvaGVscGVycy9oZWxwZXJzLm1vZHVsZS5qcyIsImJsb2Nrcy9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJwYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJwYWdlcy9ob21lL2hvbWUubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvbmV3c2ZlZWQubW9kdWxlLmpzIiwicGFnZXMvd2FsbHMvd2FsbHMubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsInBhZ2VzL25ld3NmZWVkL25ld2ZlZWQvbmV3ZmVlZC5tb2R1bGUuanMiLCJhcHAuY29uZmlnLmpzIiwiY29yZS9jb3JlLmNvbnRyb2xsZXIuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5zZXJ2aWNlLmpzIiwiYmxvY2tzL2hlbHBlcnMvaGVscGVyLnNlcnZpY2UuanMiLCJibG9ja3Mvcm91dGVyL3JvdXRlci5jb25maWcuanMiLCJibG9ja3Mvc2VydmljZXMvZmFjZWJvb2suc2VydmljZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy90ZXN0LnNlcnZpY2UuanMiLCJibG9ja3Mvc2VydmljZXMvdmsuc2VydmljZS5qcyIsInBhZ2VzL2Fib3V0L2Fib3V0LmNvbnRyb2xsZXIuanMiLCJwYWdlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsInBhZ2VzL3dhbGxzL3dhbGxzLmNvbnRyb2xsZXIuanMiLCJwYWdlcy9uZXdzZmVlZC9uZXdmZWVkL25ld3NmZWVkLmNvbnRyb2xsZXIuanMiLCJwYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL2RpclBvc3QvZGlyUG9zdC5jb250cm9sbGVyLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLFVBQWYsRUFBMkIsQ0FDdkIsZUFEdUI7O0FBR3ZCLG1CQUh1QixFQUl2QixnQkFKdUIsRUFLdkIsZ0JBTHVCLEVBTXZCLG1CQU51QixDQUEzQjtBQVFILENBVEQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLENBQzlCLGlCQUQ4QixFQUU5QixrQkFGOEIsRUFHOUIsZ0JBSDhCLEVBSTlCLGVBSjhCLENBQWxDO0FBTUgsQ0FQRDs7O0FDQUEsQ0FBQyxZQUFXO0FBQ1IsWUFBUSxNQUFSLENBQWUsZUFBZixFQUFnQzs7OztBQUk1QixxQkFKNEIsRUFLNUIsb0JBTDRCLEVBTTVCLFlBTjRCLENBQWhDO0FBUUgsQ0FURDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsa0JBQWYsRUFBbUMsRUFBbkM7QUFDSCxDQUZEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxnQkFBZixFQUFpQyxFQUFqQztBQUNILENBRkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGVBQWYsRUFBZ0MsQ0FBQyxXQUFELENBQWhDO0FBQ0gsQ0FGRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsaUJBQWYsRUFBa0MsQ0FDOUIsa0JBRDhCLENBQWxDO0FBR0gsQ0FKRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsZ0JBQWYsRUFBaUMsRUFBakM7QUFDSCxDQUZEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxlQUFmLEVBQWdDLEVBQWhDO0FBQ0gsQ0FGRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsbUJBQWYsRUFBb0MsQ0FDaEMs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TUFBUixDQUFlLHFCQUFmLEVBQ0ssU0FETCxDQUNlLFVBRGYsRUFDMkIsT0FEM0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwXCIsIFtcclxuICAgICAgICBcInN1cGVyQXBwLmNvcmVcIixcclxuICAgICAgICAvL3BhZ2VzXHJcbiAgICAgICAgXCJzdXBlckFwcC5ob21lXCIsXHJcbiAgICAgICAgXCJzdXBlckFwcC5hYm91dFwiLFxyXG4gICAgICAgIFwic3VwZXJBcHAud2FsbHNcIixcclxuICAgICAgICBcInN1cGVyQXBwLm5ld3NmZWVkXCJcclxuICAgIF0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5ibG9ja3NcIiwgW1xyXG4gICAgICAgIFwiYmxvY2tzLnNlcnZpY2VzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuaGVscGVyc1wiLFxyXG4gICAgICAgIFwiYmxvY2tzLnJvdXRlclwiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmNvcmVcIiwgW1xyXG4gICAgICAgIC8vYW5ndWxhciBuYXRpdmUgbW9kdWxlcyArIHRoaXJkIHBhcnR5IG1vZHVsZXNcclxuICAgICAgICAvLy4uXHJcbiAgICAgICAgLy9jcm9zcy1hcHAgbW9kdWxlXHJcbiAgICAgICAgXCJzdXBlckFwcC5ibG9ja3NcIixcclxuICAgICAgICBcIkxvY2FsU3RvcmFnZU1vZHVsZVwiLFxyXG4gICAgICAgIFwibmdNYXRlcmlhbFwiLFxyXG4gICAgXSk7XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5jb25zdGFudHNcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5oZWxwZXJzXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3Mucm91dGVyXCIsIFtcInVpLnJvdXRlclwiXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIsIFtcclxuICAgICAgICBcImJsb2Nrcy5jb25zdGFudHNcIlxyXG4gICAgXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuYWJvdXRcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmhvbWVcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLm5ld3NmZWVkXCIsIFtcclxuICAgICAgICBcIm5ld3NmZWVkLnBhZ2VcIixcclxuICAgICAgICBcIm5ld3NmZWVkLmNvbXBvbmVudHNcIlxyXG4gICAgXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAud2FsbHNcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcIm5ld3NmZWVkLmNvbXBvbmVudHNcIiwgW1xyXG4gICAgICAgIFwibmdTYW5pdGl6ZVwiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJuZXdzZmVlZC5wYWdlXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKXtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcInN1cGVyQXBwXCIpXHJcbiAgICAgICAgLmNvbmZpZyhjb25maWcpO1xyXG5cclxuICAgIGNvbmZpZy4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyXCJdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpZyhsb2NhbFN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXIpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2VQcm92aWRlclxyXG4gICAgICAgICAgICAuc2V0UHJlZml4KCdzdXBlckFwcCcpO1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCJcclxuXHJcblxyXG5jbGFzcyBjb3JlQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbFN0b3JhZ2VTZXJ2aWNlLCAkc3RhdGUpe1xyXG4gICAgfVxyXG59XHJcblxyXG5jb3JlQ29udHJvbGxlci4kaW5qZWN0ID0gW107XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmNvcmVcIilcclxuICAgIC5jb250cm9sbGVyKFwiQ29yZUNvbnRyb2xsZXJcIiwgY29yZUNvbnRyb2xsZXIpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuY29uc3RhbnRzXCIpXHJcbiAgICAgICAgLmNvbnN0YW50KCdWS19DT05GSUcnLCB7XHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogNTQ5MTMwNyxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogXCJWdTVCQ2FUY2ROaThuTDRNY3lBOVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0JBU0VfQVBJJywge1xyXG4gICAgICAgICAgICBVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcbiAgICAgICAgICAgIFBPUlQ6IFwiMzAwMFwiLFxyXG4gICAgICAgICAgICBBUElfVVJMOiBcIi9hcGlcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNvbnN0YW50KCdFVkVOVFMnLCB7XHJcbiAgICAgICAgICAgIFNJR05fSU46ICdzaWduX2luJyxcclxuICAgICAgICAgICAgU0lHTl9PVVQ6ICdzaWduX291dCcsXHJcbiAgICAgICAgICAgIFNJR05fVVA6ICdzaWduX3VwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNvbnN0YW50KCdFUlJPUl9DT0RFUycsIHtcclxuICAgICAgICAgICAgTk9UX0ZPVU5EOiBcIk5vdCBmb3VuZCFcIixcclxuICAgICAgICAgICAgVU5LTk9XTjogXCJKdXN0IHVua25vd24gZXJyb3IhXCJcclxuICAgICAgICB9KTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuaGVscGVyc1wiKVxyXG4gICAgICAgIC5mYWN0b3J5KFwiaGVscGVyXCIsIGhlbHBlcik7XHJcblxyXG4gICAgaGVscGVyLiRpbmplY3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBoZWxwZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXJ2aWNlID0ge1xyXG4gICAgICAgICAgICB0b0xvd2VyQ2FzZTogdG9Mb3dlckNhc2UsXHJcbiAgICAgICAgICAgIHRvQ2FtZWxDYXNlOiB0b0NhbWVsQ2FzZSxcclxuICAgICAgICAgICAgdG9QYXNjYWxDYXNlOiB0b1Bhc2NhbENhc2UsXHJcbiAgICAgICAgICAgIHBhcnNlRGF0ZTogcGFyc2VEYXRlLFxyXG4gICAgICAgICAgICBwcmV0dHlEYXRlOiBwcmV0dHlEYXRlLFxyXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2s6IHByZXZlbnRDbGljayxcclxuICAgICAgICAgICAgZXhjYXBlU3RyaW5nOiBleGNhcGVTdHJpbmdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gc2VydmljZTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9Mb3dlckNhc2UodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmFuc2Zvcm0odGFyZ2V0LCBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9DYW1lbENhc2UodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyB0YXJnZXQuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyYW5zZm9ybSh0YXJnZXQsIGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0tleSA9IGtleS5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b1Bhc2NhbENhc2UodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRhcmdldC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJhbnNmb3JtKHRhcmdldCwgZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3S2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5sZW5ndGggPT09IDEwID8gbW9tZW50KGRhdGUsIFwiREQuTU0uWVlZWVwiKSA6IG1vbWVudChkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc051bWJlcihkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldHR5RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICghZGF0ZSkgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZURhdGUoZGF0ZSkuZm9ybWF0KFwiREQuTU0uWVlZWVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXZlbnRDbGljayhmdW5jKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKGZ1bmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXhjYXBlU3RyaW5nKHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZyB8fCAhc3RyaW5nLmxlbmd0aCkgcmV0dXJuIHN0cmluZztcclxuICAgICAgICAgICAgdmFyIGVudGl0eU1hcCA9IHtcclxuICAgICAgICAgICAgICAgIFwiJlwiOiBcIiZhbXA7XCIsXHJcbiAgICAgICAgICAgICAgICBcIjxcIjogXCImbHQ7XCIsXHJcbiAgICAgICAgICAgICAgICBcIj5cIjogXCImZ3Q7XCIsXHJcbiAgICAgICAgICAgICAgICAnXCInOiAnJnF1b3Q7JyxcclxuICAgICAgICAgICAgICAgIFwiJ1wiOiAnJiMzOTsnLFxyXG4gICAgICAgICAgICAgICAgXCIvXCI6ICcmI3gyRjsnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ1xcL10vZywgZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHlNYXBbc107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoXCJibG9ja3Mucm91dGVyXCIpXHJcbiAgICAgICAgLmNvbmZpZyhjb25maWcpO1xyXG5cclxuICAgIGNvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIiwgXCIkdXJsUm91dGVyUHJvdmlkZXJcIl07XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoXCJob21lXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvaG9tZS9ob21lLmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiSG9tZUNvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoXCJhYm91dFwiLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2Fib3V0XCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvYWJvdXQvYWJvdXQuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJBYm91dENvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoXCJ3YWxsc1wiLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL3dhbGxzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvd2FsbHMvd2FsbHMuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJXYWxsc0NvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoXCJuZXdzZmVlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL25ld3NcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9uZXdzZmVlZC9uZXdmZWVkL25ld3NmZWVkLmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiTmV3c0ZlZWRDb250cm9sbGVyIGFzIHZtXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxyXG4gICAgfVxyXG59KSgpO1xyXG4iLCJcclxuY2xhc3MgZmFjZUJvb2tBcGl7XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuJHEgPSAkcTtcclxuICAgICAgICB0aGlzLnZrQ29uZmlnID0gVktfQ09ORklHO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbkluKCl7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHEoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBGQi5nZXRMb2dpblN0YXR1cygocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgRkIubG9naW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuYXV0aFJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2ZhY2Vib29rLXNlc3Npb24nLCByZXMuYXV0aFJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnYW55LXNlc3Npb24nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtzY29wZTogXCJ1c2VyX2Fib3V0X21lLHB1YmxpY19wcm9maWxlLHVzZXJfZnJpZW5kcyx1c2VyX3Bvc3RzLHVzZXJfcGhvdG9zLHVzZXJfYWN0aW9ucy5uZXdzLHVzZXJfYWN0aW9ucy52aWRlbyx1c2VyX2xpa2VzLGVtYWlsLHB1Ymxpc2hfYWN0aW9ucyxwdWJsaXNoX3BhZ2VzLHVzZXJfc3RhdHVzXCJ9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzRmVlZCgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnZmFjZWJvb2stc2Vzc2lvbicpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBgLyR7c2Vzc2lvbi51c2VySUR9L2ZlZWQvYDtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEZCLmFwaSgnL21lJywgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlcy5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdhbGwoKSB7XHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ3dhbGwuZ2V0Jywge1xyXG4gICAgICAgICAgICBvd25lcl9pZDogMTU1NDE3MTUsXHJcbiAgICAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICB9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZhY2VCb29rQXBpU2VsZkZhY3RvcnkoJGh0dHAsJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBmYWNlQm9va0FwaSgkaHR0cCwgJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZhY2VCb29rQXBpLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiRxXCIsIFwiVktfQ09ORklHXCIsIFwibG9jYWxTdG9yYWdlU2VydmljZVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIpXHJcbiAgICAuZmFjdG9yeSgnZmFjZUJvb2tBcGknLCBmYWNlQm9va0FwaS5mYWNlQm9va0FwaVNlbGZGYWN0b3J5KTsiLCJcclxuY2xhc3MgdGVzdFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRxKXtcclxuICAgICAgICB0aGlzLnEgPSAkcTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAgeyBcInRleHRcIjogXCJhemF6YVwiLCAgXCJ2YWx1ZVwiOiAxIH0sXHJcbiAgICAgICAgICAgIHsgXCJ0ZXh0XCI6IFwib2xvbG9cIiwgIFwidmFsdWVcIjogMiB9LFxyXG4gICAgICAgICAgICB7IFwidGV4dFwiOiBcImZ1Y2tcIiwgICBcInZhbHVlXCI6IDMgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFN0cigpe1xyXG4gICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zUHJvbWlzZSgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy5xLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0aGlzLml0ZW1zKTtcclxuICAgICAgICAvL2RlZmZlcmVkLnJlamVjdChcImVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxudGVzdFNlcnZpY2UuJGluamVjdCA9IFtcIiRxXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KFwiVGVzdFNlcnZpY2VcIiwgKCkgPT4gbmV3IHRlc3RTZXJ2aWNlKCkgKTtcclxuIiwiXHJcbmNsYXNzIHZrQXBpe1xyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsICRxLCAkdGltZW91dCwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMudmtDb25maWcgPSBWS19DT05GSUc7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbG9jYWxTdG9yYWdlU2VydmljZTtcclxuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNpZ25Jbigpe1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRxKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgVksuQXV0aC5nZXRMb2dpblN0YXR1cyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnNlc3Npb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3ZrLXNlc3Npb24nLCByZXNwb25zZS5zZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhbnktc2Vzc2lvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVksuQXV0aC5sb2dpbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnNlc3Npb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgndmstc2Vzc2lvbicsIHJlcy5zZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2FueS1zZXNzaW9uJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sICsyKzQrOCsxNis4MTkyKzEwMjQrMjYyMTQ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzRmVlZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRxKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgVksuQXBpLmNhbGwoJ25ld3NmZWVkLmdldCcsIHtcclxuXHJcbiAgICAgICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbHMoKSB7XHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ3dhbGwuZ2V0Jywge1xyXG4gICAgICAgICBvd25lcl9pZDogMTU1NDE3MTUsXHJcbiAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICAgfSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmtBcGlTZWxmRmFjdG9yeSgkaHR0cCwkcSwgJHRpbWVvdXQsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB2a0FwaSgkaHR0cCwgJHEsICR0aW1lb3V0LCBWS19DT05GSUcsIGxvY2FsU3RvcmFnZVNlcnZpY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG52a0FwaS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkcVwiLCBcIiR0aW1lb3V0XCIsIFwiVktfQ09ORklHXCIsIFwibG9jYWxTdG9yYWdlU2VydmljZVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIpXHJcbiAgICAuZmFjdG9yeSgndmtBcGknLCB2a0FwaS52a0FwaVNlbGZGYWN0b3J5KTsiLCJcclxuY2xhc3MgQWJvdXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwidGl0bGVcIjtcclxuICAgICAgICAkc2NvcGUudGl0bGUgPSBcInNjb3BlVGl0bGVcIjtcclxuICAgIH1cclxufVxyXG5cclxuQWJvdXRDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIl07XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5hYm91dFwiKVxyXG4gICAgLmNvbnRyb2xsZXIoXCJBYm91dENvbnRyb2xsZXJcIiwgQWJvdXRDb250cm9sbGVyKTtcclxuIiwiXHJcbmNsYXNzIGhvbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZVNlcnZpY2UsICRzdGF0ZSwgdmtBcGksIGZhY2VCb29rQXBpKXtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMudmtBcGkgPSB2a0FwaTtcclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpID0gZmFjZUJvb2tBcGk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJ2ay1zZXNzaW9uXCIpO1xyXG4gICAgICAgIC8vIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJmYWNlYm9vay1zZXNzaW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25JblZrKCl7XHJcbiAgICAgICAgY29uc3QgdmtTZXNzaW9uID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldChcInZrLXNlc3Npb25cIik7XHJcblxyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGlmKHZrU2Vzc2lvbil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZrQXBpXHJcbiAgICAgICAgICAgIC5zaWduSW4oKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbkluRmFjZUJvb2soKXtcclxuICAgICAgICBjb25zdCBmYWNlQm9va1Nlc3Npb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KFwiZmFjZWJvb2stc2Vzc2lvblwiKTtcclxuXHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgaWYoZmFjZUJvb2tTZXNzaW9uKXtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpXHJcbiAgICAgICAgICAgIC5zaWduSW4oKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5ob21lQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVwiLCBcIiRzdGF0ZVwiLCBcInZrQXBpXCIsIFwiZmFjZUJvb2tBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAuaG9tZScpXHJcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBob21lQ29udHJvbGxlcik7IiwiXHJcbmNsYXNzIHdhbGxzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbFN0b3JhZ2VTZXJ2aWNlLCB2a0FwaSl7XHJcbiAgICAgICAgdGhpcy52a0FwaSA9IHZrQXBpO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbndhbGxzQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVwiLCBcInZrQXBpXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3N1cGVyQXBwLndhbGxzJylcclxuICAgIC5jb250cm9sbGVyKCdXYWxsc0NvbnRyb2xsZXInLCB3YWxsc0NvbnRyb2xsZXIpOyIsIlxyXG5jbGFzcyBuZXdzRmVlZENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IodmtBcGksIGZhY2VCb29rQXBpKXtcclxuICAgICAgICB0aGlzLnZrQXBpID0gdmtBcGk7XHJcbiAgICAgICAgdGhpcy5mYWNlQm9va0FwaSA9IGZhY2VCb29rQXBpO1xyXG4gICAgICAgIHRoaXMuZ2V0VmtOZXdzRmVlZCgpO1xyXG4gICAgICAgIC8vdGhpcy5nZXRGYWNlQm9va05ld3NGZWVkKCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFZrTmV3c0ZlZWQoKXtcclxuICAgICAgICB0aGlzLnZrQXBpXHJcbiAgICAgICAgICAgIC5nZXROZXdzRmVlZCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTmV3c0ZlZWQocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmtOZXdzRmVlZCA9IHJlcztcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52a05ld3NGZWVkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGYWNlQm9va05ld3NGZWVkKCl7XHJcbiAgICAgICAgdGhpcy5mYWNlQm9va0FwaVxyXG4gICAgICAgICAgICAuZ2V0TmV3c0ZlZWQoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlck5ld3NGZWVkKHZrTmV3c0ZlZWQpe1xyXG4gICAgICAgIHRoaXMudmtOZXdzRmVlZCA9IHZrTmV3c0ZlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVkTmV3c0ZlZWRzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMudmtOZXdzRmVlZC5pdGVtcy5mb3JFYWNoKG5ld3NGZWVkID0+IHtcclxuICAgICAgICAgICAgaWYobmV3c0ZlZWQuc291cmNlX2lkIDwgMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZrTmV3c0ZlZWQuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdyb3VwLmdpZCA9PSAoTWF0aC5hYnMobmV3c0ZlZWQuc291cmNlX2lkKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3cyA9IG5ld3NGZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdzLmdyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVkTmV3c0ZlZWRzLnB1c2gobmV3cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmtOZXdzRmVlZC5wcm9maWxlcy5mb3JFYWNoKHByb2ZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2ZpbGUudWlkID09IG5ld3NGZWVkLnNvdXJjZV9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdzID0gbmV3c0ZlZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld3MucHJvZmlsZSA9IHByb2ZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVkTmV3c0ZlZWRzLnB1c2gobmV3cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXdzRmVlZENvbnRyb2xsZXIuJGluamVjdCA9IFtcInZrQXBpXCIsIFwiZmFjZUJvb2tBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAubmV3c2ZlZWQnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ05ld3NGZWVkQ29udHJvbGxlcicsIG5ld3NGZWVkQ29udHJvbGxlcik7IiwiY2xhc3MgZGlyUG9zdE5ld0ZlZWRDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9IFwiRUFcIjtcclxuICAgICAgICB0aGlzLnNjb3BlID0ge1xyXG4gICAgICAgICAgICBwb3N0OiAnPXBvc3QnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlVXJsID0gXCJhcHAvcGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy9kaXJQb3N0L2RpclBvc3QuaHRtbFwiO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGRpclBvc3ROZXdGZWVkQ29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gXCJ2bVwiXHJcbiAgICB9XHJcblxyXG4gICAgbGluayhzY29wZSwgZWxlbWVudCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50ZW1wbGF0ZVVybCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnN0YW5jZSgpIHtcclxuICAgICAgICBkaXJQb3N0TmV3RmVlZENvbXBvbmVudC5pbnN0YW5jZSA9IG5ldyBkaXJQb3N0TmV3RmVlZENvbXBvbmVudCgpO1xyXG4gICAgICAgIHJldHVybiBkaXJQb3N0TmV3RmVlZENvbXBvbmVudC5pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5cclxuZGlyUG9zdE5ld0ZlZWRDb21wb25lbnQuJGluamVjdCA9IFtdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJuZXdzZmVlZC5jb21wb25lbnRzXCIpXHJcbiAgICAuZGlyZWN0aXZlKFwiZGlyTmV3c0ZlZWRcIiwgZGlyUG9zdE5ld0ZlZWRDb21wb25lbnQuY3JlYXRlSW5zdGFuY2UpOyIsImNsYXNzIHBvc3ROZXdGZWVkQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnBvc3ROZXdGZWVkQ29tcG9uZW50LiRpbmplY3QgPSBbXTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXN0cmljdDogXCJFQVwiLFxyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwb3N0OiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybCgpe1xyXG4gICAgICAgIHJldHVybiBcImFwcC9wYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3Bvc3QvcG9zdC5odG1sXCI7XHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogcG9zdE5ld0ZlZWRDb21wb25lbnQsXHJcbiAgICBjb250cm9sbGVyQXM6IFwidm1cIlxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJuZXdzZmVlZC5jb21wb25lbnRzXCIpXHJcbiAgICAuY29tcG9uZW50KFwibmV3c0ZlZWRcIiwgb3B0aW9ucyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
