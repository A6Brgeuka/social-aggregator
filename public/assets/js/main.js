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
    angular.module("superApp.newsfeed", []);
})();
"use strict";

(function () {
    angular.module("superApp.walls", []);
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
            templateUrl: "app/pages/newsfeed/newsfeed.html",
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
    function vkApi($http, $q, VK_CONFIG, localStorageService) {
        _classCallCheck(this, vkApi);

        this.$http = $http;
        this.$q = $q;
        this.vkConfig = VK_CONFIG;
        this.localStorageService = localStorageService;
    }

    _createClass(vkApi, [{
        key: 'signIn',
        value: function signIn() {
            var _this = this;

            return this.$q(function (resolve, reject) {
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
            });
        }
    }, {
        key: 'getVkNewsFeed',
        value: function getVkNewsFeed() {
            var deferred = this.$q.defer();

            VK.Api.call('newsfeed.get', {}, function (res) {
                debugger;
                deferred.resolve(res.response);
            });
            /*return this.$q((resolve, reject) => {
                VK.Api.call('newsfeed.get', {
                  }, (res) => {
                    debugger;
                    resolve(res.response);
                })
            });*/
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
        value: function vkApiSelfFactory($http, $q, VK_CONFIG, localStorageService) {
            return new vkApi($http, $q, VK_CONFIG, localStorageService);
        }
    }]);

    return vkApi;
}();

vkApi.$inject = ["$http", "$q", "VK_CONFIG", "localStorageService"];

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

        this.localStorageService.remove("vk-session");
        this.localStorageService.remove("facebook-session");
        // this.checkAnySession();
    }
    /*checkAnySession(){
        const anySession = this.localStorageService.get("any-session");
        debugger;
        if(anySession){
            debugger;
            this.$state.go("walls");
        }
    }*/


    _createClass(homeController, [{
        key: "signInVk",
        value: function signInVk() {
            var _this = this;

            var vkSession = this.localStorageService.get("vk-session");

            if (vkSession) {
                return this.$state.go("walls");
            }
            this.vkApi.signIn().then(function () {
                debugger;
                _this.$state.go("walls");
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
                debugger;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newsFeedController = function () {
    function newsFeedController(vkApi) {
        _classCallCheck(this, newsFeedController);

        this.vkApi = vkApi;
        this.getVkNewsFeed();
    }

    _createClass(newsFeedController, [{
        key: 'getVkNewsFeed',
        value: function getVkNewsFeed() {
            this.vkApi.getVkNewsFeed().then(function (res) {
                debugger;
            }).catch(function (err) {
                debugger;
            });
        }
    }]);

    return newsFeedController;
}();

newsFeedController.$inject = ["vkApi"];

angular.module('superApp.newsfeed').controller('NewsFeedController', newsFeedController);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wallsController = function wallsController(vkApi) {
    _classCallCheck(this, wallsController);

    this.vkApi = vkApi;
};

wallsController.$inject = ["vkApi"];

angular.module('superApp.walls').controller('WallsController', wallsController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJibG9ja3MvYmxvY2tzLm1vZHVsZS5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5tb2R1bGUuanMiLCJibG9ja3MvaGVscGVycy9oZWxwZXJzLm1vZHVsZS5qcyIsImJsb2Nrcy9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJwYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJwYWdlcy9ob21lL2hvbWUubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvbmV3c2ZlZWQubW9kdWxlLmpzIiwicGFnZXMvd2FsbHMvd2FsbHMubW9kdWxlLmpzIiwiYXBwLmNvbmZpZy5qcyIsImNvcmUvY29yZS5jb250cm9sbGVyLmpzIiwiYmxvY2tzL2NvbnN0YW50cy9jb25zdGFudHMuc2VydmljZS5qcyIsImJsb2Nrcy9oZWxwZXJzL2hlbHBlci5zZXJ2aWNlLmpzIiwiYmxvY2tzL3JvdXRlci9yb3V0ZXIuY29uZmlnLmpzIiwiYmxvY2tzL3NlcnZpY2VzL2ZhY2Vib29rLnNlcnZpY2UuanMiLCJibG9ja3Mvc2VydmljZXMvdGVzdC5zZXJ2aWNlLmpzIiwiYmxvY2tzL3NlcnZpY2VzL3ZrLnNlcnZpY2UuanMiLCJwYWdlcy9hYm91dC9hYm91dC5jb250cm9sbGVyLmpzIiwicGFnZXMvaG9tZS9ob21lLmNvbnRyb2xsZXIuanMiLCJwYWdlcy9uZXdzZmVlZC9uZXdzZmVlZC5jb250cm9sbGVyLmpzIiwicGFnZXMvd2FsbHMvd2FsbHMuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLFVBQWYsRUFBMkIsQ0FDdkIsZUFEdUI7O0FBR3ZCLG1CQUh1QixFQUl2QixnQkFKdUIsRUFLdkIsZ0JBTHVCLEVBTXZCLG1CQU51QixDQUEzQjtBQVFILENB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RUFBUztBQUNYO0FBQ0gsYUFKTCxFQUtLLEtBTEwsQ0FLVyxVQUFDLEdBQUQsRUFBUztBQUNaO0FBQ0gsYUFQTDtBQVFIOzs7Ozs7QUFHTCxtQkFBbUIsT0FBbkIsR0FBNkIsQ0FBQyxPQUFELENBQTdCOztBQUVBLFFBQVEsTUFBUixDQUFlLG1CQUFmLEVBQ0ssVUFETCxDQUNnQixvQkFEaEIsRUFDc0Msa0JBRHRDOzs7OztJQ3BCTSxrQkFDRix5QkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNIOztBQUlMLGdCQUFnQixPQUFoQixHQUEwQixDQUFDLE9BQUQsQ0FBMUI7O0FBRUEsUUFBUSxNQUFSLENBQWUsZ0JBQWYsRUFDSyxVQURMLENBQ2dCLGlCQURoQixFQUNtQyxlQURuQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHBcIiwgW1xyXG4gICAgICAgIFwic3VwZXJBcHAuY29yZVwiLFxyXG4gICAgICAgIC8vcGFnZXNcclxuICAgICAgICBcInN1cGVyQXBwLmhvbWVcIixcclxuICAgICAgICBcInN1cGVyQXBwLmFib3V0XCIsXHJcbiAgICAgICAgXCJzdXBlckFwcC53YWxsc1wiLFxyXG4gICAgICAgIFwic3VwZXJBcHAubmV3c2ZlZWRcIixcclxuICAgIF0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5ibG9ja3NcIiwgW1xyXG4gICAgICAgIFwiYmxvY2tzLnNlcnZpY2VzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuaGVscGVyc1wiLFxyXG4gICAgICAgIFwiYmxvY2tzLnJvdXRlclwiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmNvcmVcIiwgW1xyXG4gICAgICAgIC8vYW5ndWxhciBuYXRpdmUgbW9kdWxlcyArIHRoaXJkIHBhcnR5IG1vZHVsZXNcclxuICAgICAgICAvLy4uXHJcbiAgICAgICAgLy9jcm9zcy1hcHAgbW9kdWxlXHJcbiAgICAgICAgXCJzdXBlckFwcC5ibG9ja3NcIixcclxuICAgICAgICBcIkxvY2FsU3RvcmFnZU1vZHVsZVwiLFxyXG4gICAgICAgIFxyXG4gICAgXSk7XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5jb25zdGFudHNcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5oZWxwZXJzXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3Mucm91dGVyXCIsIFtcInVpLnJvdXRlclwiXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIsIFtcclxuICAgICAgICBcImJsb2Nrcy5jb25zdGFudHNcIlxyXG4gICAgXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuYWJvdXRcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmhvbWVcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLm5ld3NmZWVkXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC53YWxsc1wiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoXCJzdXBlckFwcFwiKVxyXG4gICAgICAgIC5jb25maWcoY29uZmlnKTtcclxuXHJcbiAgICBjb25maWcuJGluamVjdCA9IFtcImxvY2FsU3RvcmFnZVNlcnZpY2VQcm92aWRlclwiXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb25maWcobG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnNldFByZWZpeCgnc3VwZXJBcHAnKTtcclxuICAgIH1cclxufSkoKTtcclxuIiwiXHJcblxyXG5cclxuY2xhc3MgY29yZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IobG9jYWxTdG9yYWdlU2VydmljZSwgJHN0YXRlKXtcclxuICAgIH1cclxufVxyXG5cclxuY29yZUNvbnRyb2xsZXIuJGluamVjdCA9IFtdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5jb3JlXCIpXHJcbiAgICAuY29udHJvbGxlcihcIkNvcmVDb250cm9sbGVyXCIsIGNvcmVDb250cm9sbGVyKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLmNvbnN0YW50c1wiKVxyXG4gICAgICAgIC5jb25zdGFudCgnVktfQ09ORklHJywge1xyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IDU0OTEzMDcsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IFwiVnU1QkNhVGNkTmk4bkw0TWN5QTlcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNvbnN0YW50KCdCQVNFX0FQSScsIHtcclxuICAgICAgICAgICAgVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG4gICAgICAgICAgICBQT1JUOiBcIjMwMDBcIixcclxuICAgICAgICAgICAgQVBJX1VSTDogXCIvYXBpXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb25zdGFudCgnRVZFTlRTJywge1xyXG4gICAgICAgICAgICBTSUdOX0lOOiAnc2lnbl9pbicsXHJcbiAgICAgICAgICAgIFNJR05fT1VUOiAnc2lnbl9vdXQnLFxyXG4gICAgICAgICAgICBTSUdOX1VQOiAnc2lnbl91cCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb25zdGFudCgnRVJST1JfQ09ERVMnLCB7XHJcbiAgICAgICAgICAgIE5PVF9GT1VORDogXCJOb3QgZm91bmQhXCIsXHJcbiAgICAgICAgICAgIFVOS05PV046IFwiSnVzdCB1bmtub3duIGVycm9yIVwiXHJcbiAgICAgICAgfSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLmhlbHBlcnNcIilcclxuICAgICAgICAuZmFjdG9yeShcImhlbHBlclwiLCBoZWxwZXIpO1xyXG5cclxuICAgIGhlbHBlci4kaW5qZWN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gaGVscGVyKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VydmljZSA9IHtcclxuICAgICAgICAgICAgdG9Mb3dlckNhc2U6IHRvTG93ZXJDYXNlLFxyXG4gICAgICAgICAgICB0b0NhbWVsQ2FzZTogdG9DYW1lbENhc2UsXHJcbiAgICAgICAgICAgIHRvUGFzY2FsQ2FzZTogdG9QYXNjYWxDYXNlLFxyXG4gICAgICAgICAgICBwYXJzZURhdGU6IHBhcnNlRGF0ZSxcclxuICAgICAgICAgICAgcHJldHR5RGF0ZTogcHJldHR5RGF0ZSxcclxuICAgICAgICAgICAgcHJldmVudENsaWNrOiBwcmV2ZW50Q2xpY2ssXHJcbiAgICAgICAgICAgIGV4Y2FwZVN0cmluZzogZXhjYXBlU3RyaW5nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2U7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvTG93ZXJDYXNlKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJhbnNmb3JtKHRhcmdldCwgZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5LnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsgdGFyZ2V0LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmFuc2Zvcm0odGFyZ2V0LCBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdLZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0YXJnZXQuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyYW5zZm9ybSh0YXJnZXQsIGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0tleSA9IGtleS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXJzZURhdGUoZGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUubGVuZ3RoID09PSAxMCA/IG1vbWVudChkYXRlLCBcIkRELk1NLllZWVlcIikgOiBtb21lbnQoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNOdW1iZXIoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXR0eURhdGUoZGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWRhdGUpIHJldHVybiBkYXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VEYXRlKGRhdGUpLmZvcm1hdChcIkRELk1NLllZWVlcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV2ZW50Q2xpY2soZnVuYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gYXJnc1swXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihmdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGV4Y2FwZVN0cmluZyhzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmcgfHwgIXN0cmluZy5sZW5ndGgpIHJldHVybiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHZhciBlbnRpdHlNYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBcIiZcIjogXCImYW1wO1wiLFxyXG4gICAgICAgICAgICAgICAgXCI8XCI6IFwiJmx0O1wiLFxyXG4gICAgICAgICAgICAgICAgXCI+XCI6IFwiJmd0O1wiLFxyXG4gICAgICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXHJcbiAgICAgICAgICAgICAgICBcIidcIjogJyYjMzk7JyxcclxuICAgICAgICAgICAgICAgIFwiL1wiOiAnJiN4MkY7J1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidcXC9dL2csIGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5TWFwW3NdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKFwiYmxvY2tzLnJvdXRlclwiKVxyXG4gICAgICAgIC5jb25maWcoY29uZmlnKTtcclxuXHJcbiAgICBjb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCIsIFwiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL2hvbWUvaG9tZS5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIkhvbWVDb250cm9sbGVyIGFzIHZtXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKFwiYWJvdXRcIiwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hYm91dFwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL2Fib3V0L2Fib3V0Lmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiQWJvdXRDb250cm9sbGVyIGFzIHZtXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKFwid2FsbHNcIiwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi93YWxsc1wiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL3dhbGxzL3dhbGxzLmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiV2FsbHNDb250cm9sbGVyIGFzIHZtXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKFwibmV3c2ZlZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9uZXdzXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvbmV3c2ZlZWQvbmV3c2ZlZWQuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJOZXdzRmVlZENvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5jbGFzcyBmYWNlQm9va0FwaXtcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMudmtDb25maWcgPSBWS19DT05GSUc7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbG9jYWxTdG9yYWdlU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oKXtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEZCLmdldExvZ2luU3RhdHVzKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBGQi5sb2dpbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5hdXRoUmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnZmFjZWJvb2stc2Vzc2lvbicsIHJlcy5hdXRoUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhbnktc2Vzc2lvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge3Njb3BlOiBcImVtYWlsLHVzZXJfbGlrZXNcIn0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3B1YmxpY19wcm9maWxlLHVzZXJfZnJpZW5kcyxcIiArXHJcbiAgICAgICAgICAgLy8gXCJ1c2VyX3Bvc3RzLHVzZXJfcGhvdG9zLHVzZXJfYWN0aW9ucy5uZXdzXCIgK1xyXG4gICAgICAgICAgIC8vIFwidXNlcl9hY3Rpb25zLnZpZGVvLHVzZXJfbGlrZXMsZW1haWxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROZXdzRmVlZCgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ25ld3NmZWVkLmdldCcsIHtcclxuXHJcbiAgICAgICAgfSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXMucmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdhbGwoKSB7XHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ3dhbGwuZ2V0Jywge1xyXG4gICAgICAgICAgICBvd25lcl9pZDogMTU1NDE3MTUsXHJcbiAgICAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICB9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZhY2VCb29rQXBpU2VsZkZhY3RvcnkoJGh0dHAsJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBmYWNlQm9va0FwaSgkaHR0cCwgJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZhY2VCb29rQXBpLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiRxXCIsIFwiVktfQ09ORklHXCIsIFwibG9jYWxTdG9yYWdlU2VydmljZVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIpXHJcbiAgICAuZmFjdG9yeSgnZmFjZUJvb2tBcGknLCBmYWNlQm9va0FwaS5mYWNlQm9va0FwaVNlbGZGYWN0b3J5KTsiLCJcclxuY2xhc3MgdGVzdFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRxKXtcclxuICAgICAgICB0aGlzLnEgPSAkcTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAgeyBcInRleHRcIjogXCJhemF6YVwiLCAgXCJ2YWx1ZVwiOiAxIH0sXHJcbiAgICAgICAgICAgIHsgXCJ0ZXh0XCI6IFwib2xvbG9cIiwgIFwidmFsdWVcIjogMiB9LFxyXG4gICAgICAgICAgICB7IFwidGV4dFwiOiBcImZ1Y2tcIiwgICBcInZhbHVlXCI6IDMgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFN0cigpe1xyXG4gICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zUHJvbWlzZSgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy5xLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0aGlzLml0ZW1zKTtcclxuICAgICAgICAvL2RlZmZlcmVkLnJlamVjdChcImVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxudGVzdFNlcnZpY2UuJGluamVjdCA9IFtcIiRxXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KFwiVGVzdFNlcnZpY2VcIiwgKCkgPT4gbmV3IHRlc3RTZXJ2aWNlKCkgKTtcclxuIiwiXHJcbmNsYXNzIHZrQXBpe1xyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsICRxLCBWS19DT05GSUcsIGxvY2FsU3RvcmFnZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICAgICAgdGhpcy52a0NvbmZpZyA9IFZLX0NPTkZJRztcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaWduSW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIFZLLkF1dGgubG9naW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLnNlc3Npb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3ZrLXNlc3Npb24nLCByZXMuc2Vzc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnYW55LXNlc3Npb24nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCArMis0KzgrMTYrODE5MisxMDI0KzI2MjE0NCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmtOZXdzRmVlZCgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy4kcS5kZWZlcigpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBWSy5BcGkuY2FsbCgnbmV3c2ZlZWQuZ2V0Jywge1xyXG5cclxuICAgICAgICB9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlcy5yZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLypyZXR1cm4gdGhpcy4kcSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIFZLLkFwaS5jYWxsKCduZXdzZmVlZC5nZXQnLCB7XHJcblxyXG4gICAgICAgICAgICB9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdhbGxzKCkge1xyXG4gICAgICAgIFZLLkFwaS5jYWxsKCd3YWxsLmdldCcsIHtcclxuICAgICAgICAgb3duZXJfaWQ6IDE1NTQxNzE1LFxyXG4gICAgICAgICBkb21haW46IFwiYTZicmdldWthXCIsXHJcbiAgICAgICAgIGNvdW50OiA1XHJcbiAgICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHZrQXBpU2VsZkZhY3RvcnkoJGh0dHAsJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB2a0FwaSgkaHR0cCwgJHEsIFZLX0NPTkZJRywgbG9jYWxTdG9yYWdlU2VydmljZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZrQXBpLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiRxXCIsIFwiVktfQ09ORklHXCIsIFwibG9jYWxTdG9yYWdlU2VydmljZVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnNlcnZpY2VzXCIpXHJcbiAgICAuZmFjdG9yeSgndmtBcGknLCB2a0FwaS52a0FwaVNlbGZGYWN0b3J5KTsiLCJcclxuY2xhc3MgQWJvdXRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwidGl0bGVcIjtcclxuICAgICAgICAkc2NvcGUudGl0bGUgPSBcInNjb3BlVGl0bGVcIjtcclxuICAgIH1cclxufVxyXG5cclxuQWJvdXRDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc2NvcGVcIl07XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5hYm91dFwiKVxyXG4gICAgLmNvbnRyb2xsZXIoXCJBYm91dENvbnRyb2xsZXJcIiwgQWJvdXRDb250cm9sbGVyKTtcclxuIiwiXHJcbmNsYXNzIGhvbWVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZVNlcnZpY2UsICRzdGF0ZSwgdmtBcGksIGZhY2VCb29rQXBpKXtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG4gICAgICAgIHRoaXMudmtBcGkgPSB2a0FwaTtcclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpID0gZmFjZUJvb2tBcGk7XHJcblxyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJ2ay1zZXNzaW9uXCIpO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZW1vdmUoXCJmYWNlYm9vay1zZXNzaW9uXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hlY2tBbnlTZXNzaW9uKCk7XHJcbiAgICB9XHJcbiAgICAvKmNoZWNrQW55U2Vzc2lvbigpe1xyXG4gICAgICAgIGNvbnN0IGFueVNlc3Npb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KFwiYW55LXNlc3Npb25cIik7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgaWYoYW55U2Vzc2lvbil7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIndhbGxzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0qL1xyXG4gICAgc2lnbkluVmsoKXtcclxuICAgICAgICBjb25zdCB2a1Nlc3Npb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KFwidmstc2Vzc2lvblwiKTtcclxuXHJcbiAgICAgICAgaWYodmtTZXNzaW9uKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0YXRlLmdvKFwid2FsbHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmtBcGlcclxuICAgICAgICAgICAgLnNpZ25JbigpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oXCJ3YWxsc1wiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpZ25JbkZhY2VCb29rKCl7XHJcbiAgICAgICAgY29uc3QgZmFjZUJvb2tTZXNzaW9uID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldChcImZhY2Vib29rLXNlc3Npb25cIik7XHJcblxyXG4gICAgICAgIGlmKGZhY2VCb29rU2Vzc2lvbil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdGF0ZS5nbyhcIndhbGxzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZhY2VCb29rQXBpXHJcbiAgICAgICAgICAgIC5zaWduSW4oKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0YXRlLmdvKFwid2FsbHNcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmhvbWVDb250cm9sbGVyLiRpbmplY3QgPSBbXCJsb2NhbFN0b3JhZ2VTZXJ2aWNlXCIsIFwiJHN0YXRlXCIsIFwidmtBcGlcIiwgXCJmYWNlQm9va0FwaVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdzdXBlckFwcC5ob21lJylcclxuICAgIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIGhvbWVDb250cm9sbGVyKTsiLCJcclxuY2xhc3MgbmV3c0ZlZWRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHZrQXBpKXtcclxuICAgICAgICB0aGlzLnZrQXBpID0gdmtBcGk7XHJcbiAgICAgICAgdGhpcy5nZXRWa05ld3NGZWVkKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFZrTmV3c0ZlZWQoKXtcclxuICAgICAgICB0aGlzLnZrQXBpXHJcbiAgICAgICAgICAgIC5nZXRWa05ld3NGZWVkKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ld3NGZWVkQ29udHJvbGxlci4kaW5qZWN0ID0gW1widmtBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAubmV3c2ZlZWQnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ05ld3NGZWVkQ29udHJvbGxlcicsIG5ld3NGZWVkQ29udHJvbGxlcik7IiwiXHJcbmNsYXNzIHdhbGxzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2a0FwaSl7XHJcbiAgICAgICAgdGhpcy52a0FwaSA9IHZrQXBpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbndhbGxzQ29udHJvbGxlci4kaW5qZWN0ID0gW1widmtBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAud2FsbHMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1dhbGxzQ29udHJvbGxlcicsIHdhbGxzQ29udHJvbGxlcik7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
