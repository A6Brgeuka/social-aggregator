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
    "superApp.blocks", "LocalStorageModule"]);
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
                    }, { scope: "email,user_likes" });
                });

                //public_profile,user_friends," +
                // "user_posts,user_photos,user_actions.news" +
                // "user_actions.video,user_likes,email
            });
        }
    }, {
        key: 'getNewsFeed',
        value: function getNewsFeed() {
            var deferred = this.$q.defer();

            VK.Api.call('newsfeed.get', {}, function (res) {
                debugger;
                deferred.resolve(res.response);
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

            if (vkSession) {
                return this.$state.go("newsfeed");
            }
            debugger;

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

            if (faceBookSession) {
                return this.$state.go("walls");
            }
            this.faceBookApi.signIn().then(function () {
                _this2.$state.go("walls");
            }).catch(function () {
                debugger;
            });
        }
    }]);

    return homeController;
}();

homeController.$inject = ["localStorageService", "$state", "vkApi", "faceBookApi"];

angular.module('superApp.home').controller('HomeController', homeController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wallsController = function wallsController(vkApi) {
    _classCallCheck(this, wallsController);

    this.vkApi = vkApi;
};

wallsController.$inject = ["vkApi"];

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
        this.getFaceBookNewsFeed();
    }

    _createClass(newsFeedController, [{
        key: "getVkNewsFeed",
        value: function getVkNewsFeed() {
            var _this = this;

            this.vkApi.getNewsFeed().then(function (res) {
                _this.filterNewsFeed(res);
                _this.vkNewsFeed = res;
                console.log(_this.vkNewsFeed);
            }).catch(function (err) {
                debugger;
            });
        }
    }, {
        key: "getFaceBookNewsFeed",
        value: function getFaceBookNewsFeed() {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJibG9ja3MvYmxvY2tzLm1vZHVsZS5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5tb2R1bGUuanMiLCJibG9ja3MvaGVscGVycy9oZWxwZXJzLm1vZHVsZS5qcyIsImJsb2Nrcy9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJwYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJwYWdlcy9ob21lL2hvbWUubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvbmV3c2ZlZWQubW9kdWxlLmpzIiwicGFnZXMvd2FsbHMvd2FsbHMubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsInBhZ2VzL25ld3NmZWVkL25ld2ZlZWQvbmV3ZmVlZC5tb2R1bGUuanMiLCJhcHAuY29uZmlnLmpzIiwiY29yZS9jb3JlLmNvbnRyb2xsZXIuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5zZXJ2aWNlLmpzIiwiYmxvY2tzL2hlbHBlcnMvaGVscGVyLnNlcnZpY2UuanMiLCJibG9ja3Mvcm91dGVyL3JvdXRlci5jb25maWcuanMiLCJibG9ja3Mvc2VydmljZXMvZmFjZWJvb2suc2VydmljZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy90ZXN0LnNlcnZpY2UuanMiLCJibG9ja3Mvc2VydmljZXMvdmsuc2VydmljZS5qcyIsInBhZ2VzL2Fib3V0L2Fib3V0LmNvbnRyb2xsZXIuanMiLCJwYWdlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsInBhZ2VzL3dhbGxzL3dhbGxzLmNvbnRyb2xsZXIuanMiLCJwYWdlcy9uZXdzZmVlZC9uZXdmZWVkL25ld3NmZWVkLmNvbnRyb2xsZXIuanMiLCJwYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb250cm9sbGVyLmpz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QUFNO0FBREEsS0FGRTtBQUtaLGVBTFkseUJBS0M7QUFDVCxlQUFPLDhDQUFQO0FBQ0gsS0FQVzs7QUFRWixnQkFBWSxvQkFSQTtBQVNaLGtCQUFjO0FBVEYsQ0FBaEI7O0FBWUEsUUFBUSxNQUFSLENBQWUscUJBQWYsRUFDSyxTQURMLENBQ2UsVUFEZixFQUMyQixPQUQzQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHBcIiwgW1xyXG4gICAgICAgIFwic3VwZXJBcHAuY29yZVwiLFxyXG4gICAgICAgIC8vcGFnZXNcclxuICAgICAgICBcInN1cGVyQXBwLmhvbWVcIixcclxuICAgICAgICBcInN1cGVyQXBwLmFib3V0XCIsXHJcbiAgICAgICAgXCJzdXBlckFwcC53YWxsc1wiLFxyXG4gICAgICAgIFwic3VwZXJBcHAubmV3c2ZlZWRcIlxyXG4gICAgXSk7XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmJsb2Nrc1wiLCBbXHJcbiAgICAgICAgXCJibG9ja3Muc2VydmljZXNcIixcclxuICAgICAgICBcImJsb2Nrcy5jb25zdGFudHNcIixcclxuICAgICAgICBcImJsb2Nrcy5oZWxwZXJzXCIsXHJcbiAgICAgICAgXCJibG9ja3Mucm91dGVyXCJcclxuICAgIF0pO1xyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuY29yZVwiLCBbXHJcbiAgICAgICAgLy9hbmd1bGFyIG5hdGl2ZSBtb2R1bGVzICsgdGhpcmQgcGFydHkgbW9kdWxlc1xyXG4gICAgICAgIC8vLi5cclxuICAgICAgICAvL2Nyb3NzLWFwcCBtb2R1bGVcclxuICAgICAgICBcInN1cGVyQXBwLmJsb2Nrc1wiLFxyXG4gICAgICAgIFwiTG9jYWxTdG9yYWdlTW9kdWxlXCIsXHJcbiAgICAgICAgXHJcbiAgICBdKTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLmNvbnN0YW50c1wiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLmhlbHBlcnNcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5yb3V0ZXJcIiwgW1widWkucm91dGVyXCJdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIiwgW1xyXG4gICAgICAgIFwiYmxvY2tzLmNvbnN0YW50c1wiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5hYm91dFwiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuaG9tZVwiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAubmV3c2ZlZWRcIiwgW1xyXG4gICAgICAgIFwibmV3c2ZlZWQucGFnZVwiLFxyXG4gICAgICAgIFwibmV3c2ZlZWQuY29tcG9uZW50c1wiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC53YWxsc1wiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwibmV3c2ZlZWQuY29tcG9uZW50c1wiLCBbXHJcbiAgICAgICAgXCJuZ1Nhbml0aXplXCJcclxuICAgIF0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcIm5ld3NmZWVkLnBhZ2VcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbigpe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKFwic3VwZXJBcHBcIilcclxuICAgICAgICAuY29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgY29uZmlnLiRpbmplY3QgPSBbXCJsb2NhbFN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXJcIl07XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnKGxvY2FsU3RvcmFnZVNlcnZpY2VQcm92aWRlcil7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zZXRQcmVmaXgoJ3N1cGVyQXBwJyk7XHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5cclxuXHJcbmNsYXNzIGNvcmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZVNlcnZpY2UsICRzdGF0ZSl7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvcmVDb250cm9sbGVyLiRpbmplY3QgPSBbXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuY29yZVwiKVxyXG4gICAgLmNvbnRyb2xsZXIoXCJDb3JlQ29udHJvbGxlclwiLCBjb3JlQ29udHJvbGxlcik7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5jb25zdGFudHNcIilcclxuICAgICAgICAuY29uc3RhbnQoJ1ZLX0NPTkZJRycsIHtcclxuICAgICAgICAgICAgY2xpZW50X2lkOiA1NDkxMzA3LFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBcIlZ1NUJDYVRjZE5pOG5MNE1jeUE5XCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb25zdGFudCgnQkFTRV9BUEknLCB7XHJcbiAgICAgICAgICAgIFVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgUE9SVDogXCIzMDAwXCIsXHJcbiAgICAgICAgICAgIEFQSV9VUkw6IFwiL2FwaVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0VWRU5UUycsIHtcclxuICAgICAgICAgICAgU0lHTl9JTjogJ3NpZ25faW4nLFxyXG4gICAgICAgICAgICBTSUdOX09VVDogJ3NpZ25fb3V0JyxcclxuICAgICAgICAgICAgU0lHTl9VUDogJ3NpZ25fdXAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0VSUk9SX0NPREVTJywge1xyXG4gICAgICAgICAgICBOT1RfRk9VTkQ6IFwiTm90IGZvdW5kIVwiLFxyXG4gICAgICAgICAgICBVTktOT1dOOiBcIkp1c3QgdW5rbm93biBlcnJvciFcIlxyXG4gICAgICAgIH0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5oZWxwZXJzXCIpXHJcbiAgICAgICAgLmZhY3RvcnkoXCJoZWxwZXJcIiwgaGVscGVyKTtcclxuXHJcbiAgICBoZWxwZXIuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhlbHBlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlcnZpY2UgPSB7XHJcbiAgICAgICAgICAgIHRvTG93ZXJDYXNlOiB0b0xvd2VyQ2FzZSxcclxuICAgICAgICAgICAgdG9DYW1lbENhc2U6IHRvQ2FtZWxDYXNlLFxyXG4gICAgICAgICAgICB0b1Bhc2NhbENhc2U6IHRvUGFzY2FsQ2FzZSxcclxuICAgICAgICAgICAgcGFyc2VEYXRlOiBwYXJzZURhdGUsXHJcbiAgICAgICAgICAgIHByZXR0eURhdGU6IHByZXR0eURhdGUsXHJcbiAgICAgICAgICAgIHByZXZlbnRDbGljazogcHJldmVudENsaWNrLFxyXG4gICAgICAgICAgICBleGNhcGVTdHJpbmc6IGV4Y2FwZVN0cmluZ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0xvd2VyQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyYW5zZm9ybSh0YXJnZXQsIGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0NhbWVsQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIHRhcmdldC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJhbnNmb3JtKHRhcmdldCwgZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3S2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGFyZ2V0LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmFuc2Zvcm0odGFyZ2V0LCBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdLZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmxlbmd0aCA9PT0gMTAgPyBtb21lbnQoZGF0ZSwgXCJERC5NTS5ZWVlZXCIpIDogbW9tZW50KGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzTnVtYmVyKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV0dHlEYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFkYXRlKSByZXR1cm4gZGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRGF0ZShkYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldmVudENsaWNrKGZ1bmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24oZnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBleGNhcGVTdHJpbmcoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghc3RyaW5nIHx8ICFzdHJpbmcubGVuZ3RoKSByZXR1cm4gc3RyaW5nO1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5TWFwID0ge1xyXG4gICAgICAgICAgICAgICAgXCImXCI6IFwiJmFtcDtcIixcclxuICAgICAgICAgICAgICAgIFwiPFwiOiBcIiZsdDtcIixcclxuICAgICAgICAgICAgICAgIFwiPlwiOiBcIiZndDtcIixcclxuICAgICAgICAgICAgICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgICAgICAgICAgICAgXCInXCI6ICcmIzM5OycsXHJcbiAgICAgICAgICAgICAgICBcIi9cIjogJyYjeDJGOydcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcImJsb2Nrcy5yb3V0ZXJcIilcclxuICAgICAgICAuY29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgY29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJIb21lQ29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcImFib3V0XCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvYWJvdXRcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9hYm91dC9hYm91dC5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIkFib3V0Q29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcIndhbGxzXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvd2FsbHNcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy93YWxscy93YWxscy5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIldhbGxzQ29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcIm5ld3NmZWVkXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvbmV3c1wiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL25ld3NmZWVkL25ld2ZlZWQvbmV3c2ZlZWQuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJOZXdzRmVlZENvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5jbGFzcyBmYWNlQm9va0FwaXtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMudmtDb25maWcgPSBWS19DT05GSUc7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbG9jYWxTdG9yYWdlU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oKXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEZCLmdldExvZ2luU3RhdHVzKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBGQi5sb2dpbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5hdXRoUmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnZmFjZWJvb2stc2Vzc2lvbicsIHJlcy5hdXRoUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhbnktc2Vzc2lvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge3Njb3BlOiBcImVtYWlsLHVzZXJfbGlrZXNcIn0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3B1YmxpY19wcm9maWxlLHVzZXJfZnJpZW5kcyxcIiArXHJcbiAgICAgICAgICAgLy8gXCJ1c2VyX3Bvc3RzLHVzZXJfcGhvdG9zLHVzZXJfYWN0aW9ucy5uZXdzXCIgK1xyXG4gICAgICAgICAgIC8vIFwidXNlcl9hY3Rpb25zLnZpZGVvLHVzZXJfbGlrZXMsZW1haWxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzRmVlZCgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ25ld3NmZWVkLmdldCcsIHtcclxuXHJcbiAgICAgICAgfSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXMucmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdhbGwoKSB7XHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ3dhbGwuZ2V0Jywge1xyXG4gICAgICAgICAgICBvd25lcl9pZDogMTU1NDE3MTUsXHJcbiAgICAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICB9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZhY2VCb29rQXBpU2VsZkZhY3RvcnkoJGh0dHAsJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBmYWNlQm9va0FwaSgkaHR0cCwgJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZhY2VCb29rQXBpLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiRxXCIsIFwiVktfQ09ORklHXCIsIFwibG9jYWxTdG9yYWdlU2VydmljZVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIpXHJcbiAgICAuZmFjdG9yeSgnZmFjZUJvb2tBcGknLCBmYWNlQm9va0FwaS5mYWNlQm9va0FwaVNlbGZGYWN0b3J5KTsiLCJcclxuY2xhc3MgdGVzdFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRxKXtcclxuICAgICAgICB0aGlzLnEgPSAkcTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAgeyBcInRleHRcIjogXCJhemF6YVwiLCAgXCJ2YWx1ZVwiOiAxIH0sXHJcbiAgICAgICAgICAgIHsgXCJ0ZXh0XCI6IFwib2xvbG9cIiwgIFwidmFsdWVcIjogMiB9LFxyXG4gICAgICAgICAgICB7IFwidGV4dFwiOiBcImZ1Y2tcIiwgICBcInZhbHVlXCI6IDMgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFN0cigpe1xyXG4gICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zUHJvbWlzZSgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy5xLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0aGlzLml0ZW1zKTtcclxuICAgICAgICAvL2RlZmZlcmVkLnJlamVjdChcImVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxudGVzdFNlcnZpY2UuJGluamVjdCA9IFtcIiRxXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KFwiVGVzdFNlcnZpY2VcIiwgKCkgPT4gbmV3IHRlc3RTZXJ2aWNlKCkgKTtcclxuIiwiXHJcbmNsYXNzIHZrQXBpe1xyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsICRxLCAkdGltZW91dCwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMudmtDb25maWcgPSBWS19DT05GSUc7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbG9jYWxTdG9yYWdlU2VydmljZTtcclxuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNpZ25Jbigpe1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRxKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgVksuQXV0aC5nZXRMb2dpblN0YXR1cyhyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zZXNzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCd2ay1zZXNzaW9uJywgcmVzcG9uc2Uuc2Vzc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnYW55LXNlc3Npb24nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFZLLkF1dGgubG9naW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnNlc3Npb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgndmstc2Vzc2lvbicsIHJlcy5zZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2FueS1zZXNzaW9uJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sICsyKzQrOCsxNis4MTkyKzEwMjQrMjYyMTQ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzRmVlZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRxKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgVksuQXBpLmNhbGwoJ25ld3NmZWVkLmdldCcsIHtcclxuXHJcbiAgICAgICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbHMoKSB7XHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ3dhbGwuZ2V0Jywge1xyXG4gICAgICAgICBvd25lcl9pZDogMTU1NDE3MTUsXHJcbiAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICAgfSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmtBcGlTZWxmRmFjdG9yeSgkaHR0cCwkcSwgJHRpbWVvdXQsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB2a0FwaSgkaHR0cCwgJHEsICR0aW1lb3V0LCBWS19DT05GSUcsIGxvY2FsU3RvcmFnZVNlcnZpY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG52a0FwaS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkcVwiLCBcIiR0aW1lb3V0XCIsIFwiVktfQ09ORklHXCIsIFwibG9jYWxTdG9yYWdlU2VydmljZVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIpXHJcbiAgICAuZmFjdG9yeSgndmtBcGknLCB2a0FwaS52a0FwaVNlbGZGYWN0b3J5KTsiLCJcclxuY2xhc3MgQWJvdXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwidGl0bGVcIjtcclxuICAgICAgICAkc2NvcGUudGl0bGUgPSBcInNjb3BlVGl0bGVcIjtcclxuICAgIH1cclxufVxyXG5cclxuQWJvdXRDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIl07XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5hYm91dFwiKVxyXG4gICAgLmNvbnRyb2xsZXIoXCJBYm91dENvbnRyb2xsZXJcIiwgQWJvdXRDb250cm9sbGVyKTtcclxuIiwiXHJcbmNsYXNzIGhvbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZVNlcnZpY2UsICRzdGF0ZSwgdmtBcGksIGZhY2VCb29rQXBpKXtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMudmtBcGkgPSB2a0FwaTtcclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpID0gZmFjZUJvb2tBcGk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJ2ay1zZXNzaW9uXCIpO1xyXG4gICAgICAgIC8vIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJmYWNlYm9vay1zZXNzaW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25JblZrKCl7XHJcbiAgICAgICAgY29uc3QgdmtTZXNzaW9uID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldChcInZrLXNlc3Npb25cIik7XHJcblxyXG4gICAgICAgIGlmKHZrU2Vzc2lvbil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIm5ld3NmZWVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAgdGhpcy52a0FwaVxyXG4gICAgICAgICAgICAuc2lnbkluKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oXCJuZXdzZmVlZFwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpZ25JbkZhY2VCb29rKCl7XHJcbiAgICAgICAgY29uc3QgZmFjZUJvb2tTZXNzaW9uID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldChcImZhY2Vib29rLXNlc3Npb25cIik7XHJcblxyXG4gICAgICAgIGlmKGZhY2VCb29rU2Vzc2lvbil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIndhbGxzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpXHJcbiAgICAgICAgICAgIC5zaWduSW4oKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIndhbGxzXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5ob21lQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibG9jYWxTdG9yYWdlU2VydmljZVwiLCBcIiRzdGF0ZVwiLCBcInZrQXBpXCIsIFwiZmFjZUJvb2tBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAuaG9tZScpXHJcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBob21lQ29udHJvbGxlcik7IiwiXHJcbmNsYXNzIHdhbGxzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2a0FwaSl7XHJcbiAgICAgICAgdGhpcy52a0FwaSA9IHZrQXBpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbndhbGxzQ29udHJvbGxlci4kaW5qZWN0ID0gW1widmtBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAud2FsbHMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1dhbGxzQ29udHJvbGxlcicsIHdhbGxzQ29udHJvbGxlcik7IiwiXHJcbmNsYXNzIG5ld3NGZWVkQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2a0FwaSwgZmFjZUJvb2tBcGkpe1xyXG4gICAgICAgIHRoaXMudmtBcGkgPSB2a0FwaTtcclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpID0gZmFjZUJvb2tBcGk7XHJcbiAgICAgICAgdGhpcy5nZXRWa05ld3NGZWVkKCk7XHJcbiAgICAgICAgdGhpcy5nZXRGYWNlQm9va05ld3NGZWVkKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFZrTmV3c0ZlZWQoKXtcclxuICAgICAgICB0aGlzLnZrQXBpXHJcbiAgICAgICAgICAgIC5nZXROZXdzRmVlZCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTmV3c0ZlZWQocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmtOZXdzRmVlZCA9IHJlcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmtOZXdzRmVlZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmFjZUJvb2tOZXdzRmVlZCgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJOZXdzRmVlZCh2a05ld3NGZWVkKXtcclxuICAgICAgICB0aGlzLnZrTmV3c0ZlZWQgPSB2a05ld3NGZWVkO1xyXG5cclxuICAgICAgICB0aGlzLmZpbHRlZE5ld3NGZWVkcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnZrTmV3c0ZlZWQuaXRlbXMuZm9yRWFjaChuZXdzRmVlZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKG5ld3NGZWVkLnNvdXJjZV9pZCA8IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy52a05ld3NGZWVkLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihncm91cC5naWQgPT0gKE1hdGguYWJzKG5ld3NGZWVkLnNvdXJjZV9pZCkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld3MgPSBuZXdzRmVlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3cy5ncm91cCA9IGdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlZE5ld3NGZWVkcy5wdXNoKG5ld3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZrTmV3c0ZlZWQucHJvZmlsZXMuZm9yRWFjaChwcm9maWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9maWxlLnVpZCA9PSBuZXdzRmVlZC5zb3VyY2VfaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3cyA9IG5ld3NGZWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdzLnByb2ZpbGUgPSBwcm9maWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlZE5ld3NGZWVkcy5wdXNoKG5ld3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubmV3c0ZlZWRDb250cm9sbGVyLiRpbmplY3QgPSBbXCJ2a0FwaVwiLCBcImZhY2VCb29rQXBpXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3N1cGVyQXBwLm5ld3NmZWVkJylcclxuICAgIC5jb250cm9sbGVyKCdOZXdzRmVlZENvbnRyb2xsZXInLCBuZXdzRmVlZENvbnRyb2xsZXIpOyIsImNsYXNzIHBvc3ROZXdGZWVkQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnBvc3ROZXdGZWVkQ29tcG9uZW50LiRpbmplY3QgPSBbXTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICByZXN0cmljdDogXCJFQVwiLFxyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwb3N0OiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVVybCgpe1xyXG4gICAgICAgIHJldHVybiBcImFwcC9wYWdlcy9uZXdzZmVlZC9jb21wb25lbnRzL3Bvc3QvcG9zdC5odG1sXCI7XHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogcG9zdE5ld0ZlZWRDb21wb25lbnQsXHJcbiAgICBjb250cm9sbGVyQXM6IFwidm1cIlxyXG59O1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJuZXdzZmVlZC5jb21wb25lbnRzXCIpXHJcbiAgICAuY29tcG9uZW50KFwibmV3c0ZlZWRcIiwgb3B0aW9ucyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
