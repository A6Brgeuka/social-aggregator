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
        key: 'signInVk',
        value: function signInVk() {
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
    function homeController(localStorageService, $state, vkApi) {
        _classCallCheck(this, homeController);

        this.localStorageService = localStorageService;
        this.$state = $state;
        this.vkApi = vkApi;
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

            var vkSession = this.localStorageService.get("any-session");

            debugger;
            if (vkSession) {
                return this.$state.go("walls");
            }
            debugger;
            this.vkApi.signInVk().then(function () {
                debugger;
                _this.$state.go("walls");
            }).catch(function () {
                debugger;
            });
        }
    }]);

    return homeController;
}();

homeController.$inject = ["localStorageService", "$state", "vkApi"];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJibG9ja3MvYmxvY2tzLm1vZHVsZS5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5tb2R1bGUuanMiLCJibG9ja3MvaGVscGVycy9oZWxwZXJzLm1vZHVsZS5qcyIsImJsb2Nrcy9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJwYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJwYWdlcy9ob21lL2hvbWUubW9kdWxlLmpzIiwicGFnZXMvbmV3c2ZlZWQvbmV3c2ZlZWQubW9kdWxlLmpzIiwicGFnZXMvd2FsbHMvd2FsbHMubW9kdWxlLmpzIiwiYXBwLmNvbmZpZy5qcyIsImNvcmUvY29yZS5jb250cm9sbGVyLmpzIiwiYmxvY2tzL2NvbnN0YW50cy9jb25zdGFudHMuc2VydmljZS5qcyIsImJsb2Nrcy9oZWxwZXJzL2hlbHBlci5zZXJ2aWNlLmpzIiwiYmxvY2tzL3JvdXRlci9yb3V0ZXIuY29uZmlnLmpzIiwiYmxvY2tzL3NlcnZpY2VzL3Rlc3Quc2VydmljZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy92ay5zZXJ2aWNlLmpzIiwicGFnZXMvYWJvdXQvYWJvdXQuY29udHJvbGxlci5qcyIsInBhZ2VzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwicGFnZXMvbmV3c2ZlZWQvbmV3c2ZlZWQuY29udHJvbGxlci5qcyIsInBhZ2VzL3dhbGxzL3dhbGxzLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLENBQ3ZCLGVBRHVCOztBQUd2QixtQkFIdUIsRUFJdkIsZ0JBSnVCLEVBS3ZCLGdCQUx1QixFQU12QixtQkFOdUIsQ0FBM0I7QUFRSCxDQVREOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxDQUM5QixpQkFEOEIsRUFFOUIsa0JBRjhCLEVBRzlCLGdCQUg4QixFQUk5QixlQUo4QixDQUFsQztBQU1ILENBUEQ7OztBQ0FBLENBQUMsWUFBVztBQUNSLFlBQVEsTUFBUixDQUFlLGVBQWYsRUFBZ0M7Ozs7QUFJNUIscUJBSjRCLEVBSzVCLG9CQUw0QixDQUFoQztBQVFILENBVEQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGtCQUFmLEVBQW1DLEVBQW5DO0FBQ0gsQ0FGRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsZ0JBQWYsRUFBaUMsRUFBakM7QUFDSCxDQUZEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxlQUFmLEVBQWdDLENBQUMsV0FBRCxDQUFoQztBQUNILENBRkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLENBQzlCLGtCQUQ4QixDQUFsQztBQUdILENBSkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGdCQUFmLEVBQWlDLEVBQWpDO0FBQ0gsQ0FGRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsZUFBZixFQUFnQyxFQUFoQztBQUNILENBRkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLG1CQUFmLEVBQW9DLEVBQXBDO0FBQ0gsQ0FGRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsZ0JBQWYsRUFBaUMsRUFBakM7QUFDSCxDQUZEOzs7QUNBQSxDQUFDLFlBQVU7QUFDUDs7QUFFQSxZQUNLLE1BREwsQ0FDWSxVQURaLEVBRUssTUFGTCxDQUVZLE1BRlo7O0FBSUEsV0FBTyxPQUFQLEdBQWlCLENBQUMsNkJBQUQsQ0FBakI7O0FBRUEsYUFBUyxNQUFULENBQWdCLDJCQUFoQixFQUE0QztBQUN4QyxvQ0FDSyxTQURMLENBQ2UsVUFEZjtBQUVIO0FBQ0osQ0FiRDs7Ozs7SUNHTSxpQkFDRix3QkFBWSxtQkFBWixFQUFpQyxNQUFqQyxFQUF3QztBQUFBO0FBQ3ZDOztBQUdMLGVBQWUsT0FBZixHQUF5QixFQUF6Qjs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxlQUFmLEVBQ0ssVUFETCxDQUNnQixnQkFEaEIsRUFDa0MsY0FEbEM7OztBQ1ZBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGtCQUFmLEVBQ0ssUUFETCxDQUNjLFdBRGQsRUFDMkI7QUFDbkIsbUJBQVcsT0FEUTtBQUVuQix1QkFBZTtBQUZJLEtBRDNCLEVBS0ssUUFMTCxDQUtjLFVBTGQsRUFLMEI7QUFDbEIsYUFBSyx1QkFEYTtBQUVsQixjQUFNLE1BRlk7QUFHbEIsaUJBQVM7QUFIUyxLQUwxQixFQVVLLFFBVkwsQ0FVYyxRQVZkLEVBVXdCO0FBQ2hCLGlCQUFTLFNBRE87QUFFaEIsa0JBQVUsVUFGTTtBQUdoQixpQkFBUztBQUhPLEtBVnhCLEVBZUssUUFmTCxDQWVjLGFBZmQsRUFlNkI7QUFDckIsbUJBQVcsWUFEVTtBQUVyQixpQkFBUztBQUZZLEtBZjdCO0FBbUJILENBcEJEOzs7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGdCQUFmLEVBQ0ssT0FETCxDQUNhLFFBRGIsRUFDdUIsTUFEdkI7O0FBR0EsV0FBTyxPQUFQLEdBQWlCLEVBQWpCOztBQUVBLGFBQVMsTUFBVCxHQUFrQjs7QUFFZCxZQUFJLFVBQVU7QUFDVix5QkFBYSxXQURIO0FBRVYseUJBQWEsV0FGSDtBQUdWLDBCQUFjLFlBSEo7QUFJVix1QkFBVyxTQUpEO0FBS1Ysd0JBQVksVUFMRjtBQU1WLDBCQUFjLFlBTko7QUFPViwwQkFBYztBQVBKLFNBQWQ7O0FBVUEsZUFBTyxPQUFQOztBQUVBLGlCQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkI7QUFDekIsZ0JBQUksT0FBTyxNQUFQLElBQWlCLFFBQXJCLEVBQStCO0FBQzNCLHVCQUFPLE9BQU8sV0FBUCxFQUFQO0FBQ0g7QUFDRCxnQkFBSSxRQUFPLE1BQVAseUNBQU8sTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUMzQix1QkFBTyxFQUFFLFNBQUYsQ0FBWSxNQUFaLEVBQW9CLFVBQVUsTUFBVixFQUFrQixLQUFsQixFQUF5QixHQUF6QixFQUE4QjtBQUNyRCwyQkFBTyxPQUFPLEdBQVAsQ0FBUDtBQUNBLDJCQUFPLElBQUksV0FBSixFQUFQLElBQTRCLEtBQTVCO0FBQ0gsaUJBSE0sQ0FBUDtBQUlIO0FBQ0QsbUJBQU8sTUFBUDtBQUNIOztBQUVELGlCQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkI7QUFDekIsZ0JBQUksT0FBTyxNQUFQLElBQWlCLFFBQXJCLEVBQStCO0FBQzNCLHVCQUFPLE9BQU8sU0FBUCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixXQUF2QixLQUF1QyxPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsQ0FBOUM7QUFDSDtBQUNELGdCQUFJLFFBQU8sTUFBUCx5Q0FBTyxNQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQzNCLHVCQUFPLEVBQUUsU0FBRixDQUFZLE1BQVosRUFBb0IsVUFBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCLEdBQXpCLEVBQThCO0FBQ3JELDJCQUFPLE9BQU8sR0FBUCxDQUFQO0FBQ0Esd0JBQUksU0FBUyxJQUFJLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLFdBQXBCLEtBQW9DLElBQUksU0FBSixDQUFjLENBQWQsQ0FBakQ7QUFDQSwyQkFBTyxNQUFQLElBQWlCLEtBQWpCO0FBQ0gsaUJBSk0sQ0FBUDtBQUtIO0FBQ0QsbUJBQU8sTUFBUDtBQUNIOztBQUVELGlCQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDMUIsZ0JBQUksQ0FBQyxNQUFMLEVBQWEsT0FBTyxJQUFQO0FBQ2IsZ0JBQUksT0FBTyxNQUFQLElBQWlCLFFBQXJCLEVBQStCO0FBQzNCLHVCQUFPLE9BQU8sU0FBUCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixXQUF2QixLQUF1QyxPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsQ0FBOUM7QUFDSDtBQUNELGdCQUFJLFFBQU8sTUFBUCx5Q0FBTyxNQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQzNCLHVCQUFPLEVBQUUsU0FBRixDQUFZLE1BQVosRUFBb0IsVUFBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCLEdBQXpCLEVBQThCO0FBQ3JELDJCQUFPLE9BQU8sR0FBUCxDQUFQO0FBQ0Esd0JBQUksU0FBUyxJQUFJLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLFdBQXBCLEtBQW9DLElBQUksU0FBSixDQUFjLENBQWQsQ0FBakQ7QUFDQSwyQkFBTyxNQUFQLElBQWlCLEtBQWpCO0FBQ0gsaUJBSk0sQ0FBUDtBQUtIO0FBQ0QsbUJBQU8sTUFBUDtBQUNIOztBQUVELGlCQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBeUI7QUFDckIsZ0JBQUksUUFBUSxRQUFSLENBQWlCLElBQWpCLENBQUosRUFBNEI7QUFDeEIsdUJBQU8sS0FBSyxNQUFMLEtBQWdCLEVBQWhCLEdBQXFCLE9BQU8sSUFBUCxFQUFhLFlBQWIsQ0FBckIsR0FBa0QsT0FBTyxJQUFQLENBQXpEO0FBQ0g7QUFDRCxnQkFBSSxRQUFRLFFBQVIsQ0FBaUIsSUFBakIsQ0FBSixFQUE0QjtBQUN4Qix1QkFBTyxJQUFJLElBQUosQ0FBUyxJQUFULENBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDs7QUFFRCxpQkFBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQ3RCLGdCQUFJLENBQUMsSUFBTCxFQUFXLE9BQU8sSUFBUDtBQUNYLG1CQUFPLFVBQVUsSUFBVixFQUFnQixNQUFoQixDQUF1QixZQUF2QixDQUFQO0FBQ0g7O0FBRUQsaUJBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUN4QixtQkFBTyxZQUFZO0FBQ2Ysb0JBQUksT0FBTyxNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsU0FBM0IsQ0FBWDtBQUNBLG9CQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNiLHdCQUFJLFFBQVEsS0FBSyxDQUFMLENBQVo7QUFDQSx3QkFBSSxTQUFTLE1BQU0sYUFBZixJQUFnQyxNQUFNLGFBQU4sWUFBK0IsVUFBbkUsRUFBK0U7QUFDM0UsOEJBQU0sY0FBTjtBQUNBLDhCQUFNLGVBQU47QUFDQSw2QkFBSyxNQUFMLENBQVksQ0FBWixFQUFlLENBQWY7QUFDSDtBQUNKO0FBQ0Qsb0JBQUksUUFBUSxVQUFSLENBQW1CLElBQW5CLENBQUosRUFBOEI7QUFDMUIseUJBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsSUFBakI7QUFDSDtBQUNKLGFBYkQ7QUFjSDs7QUFFRCxpQkFBUyxZQUFULENBQXNCLE1BQXRCLEVBQThCO0FBQzFCLGdCQUFJLENBQUMsTUFBRCxJQUFXLENBQUMsT0FBTyxNQUF2QixFQUErQixPQUFPLE1BQVA7QUFDL0IsZ0JBQUksWUFBWTtBQUNaLHFCQUFLLE9BRE87QUFFWixxQkFBSyxNQUZPO0FBR1oscUJBQUssTUFITztBQUlaLHFCQUFLLFFBSk87QUFLWixxQkFBSyxPQUxPO0FBTVoscUJBQUs7QUFOTyxhQUFoQjs7QUFTQSxtQkFBTyxPQUFPLE1BQVAsRUFBZSxPQUFmLENBQXVCLFlBQXZCLEVBQXFDLFVBQVUsQ0FBVixFQUFhO0FBQ3JELHVCQUFPLFVBQVUsQ0FBVixDQUFQO0FBQ0gsYUFGTSxDQUFQO0FBR0g7QUFDSjtBQUNKLENBOUdEOzs7QUNBQSxDQUFDLFlBQVk7O0FBRVQsWUFDSyxNQURMLENBQ1ksZUFEWixFQUVLLE1BRkwsQ0FFWSxNQUZaOztBQUlBLFdBQU8sT0FBUCxHQUFpQixDQUFDLGdCQUFELEVBQW1CLG9CQUFuQixDQUFqQjs7QUFFQSxhQUFTLE1BQVQsQ0FBZ0IsY0FBaEIsRUFBZ0Msa0JBQWhDLEVBQW9EO0FBQ2hELHVCQUNLLEtBREwsQ0FDVyxNQURYLEVBQ21CO0FBQ1gsaUJBQUssR0FETTtBQUVYLHlCQUFhLDBCQUZGO0FBR1gsd0JBQVk7QUFIRCxTQURuQixFQU1LLEtBTkwsQ0FNVyxPQU5YLEVBTW9CO0FBQ1osaUJBQUssUUFETztBQUVaLHlCQUFhLDRCQUZEO0FBR1osd0JBQVk7QUFIQSxTQU5wQixFQVdLLEtBWEwsQ0FXVyxPQVhYLEVBV29CO0FBQ1osaUJBQUssUUFETztBQUVaLHlCQUFhLDRCQUZEO0FBR1osd0JBQVk7QUFIQSxTQVhwQixFQWdCSyxLQWhCTCxDQWdCVyxVQWhCWCxFQWdCdUI7QUFDZixpQkFBSyxPQURVO0FBRWYseUJBQWEsa0NBRkU7QUFHZix3QkFBWTtBQUhHLFNBaEJ2Qjs7QUFzQkEsMkJBQW1CLFNBQW5CLENBQTZCLEdBQTdCO0FBQ0g7QUFDSixDQWpDRDs7Ozs7OztJQ0NNO0FBRUYseUJBQVksRUFBWixFQUFlO0FBQUE7O0FBQ1gsYUFBSyxDQUFMLEdBQVMsRUFBVDs7QUFFQSxhQUFLLEtBQUwsR0FBYSxDQUNULEVBQUUsUUFBUSxPQUFWLEVBQW9CLFNBQVMsQ0FBN0IsRUFEUyxFQUVULEVBQUUsUUFBUSxPQUFWLEVBQW9CLFNBQVMsQ0FBN0IsRUFGUyxFQUdULEVBQUUsUUFBUSxNQUFWLEVBQW9CLFNBQVMsQ0FBN0IsRUFIUyxDQUFiO0FBS0g7Ozs7aUNBRU87QUFDSixtQkFBTyxNQUFQO0FBQ0g7OzttQ0FFUztBQUNOLG1CQUFPLEtBQUssS0FBWjtBQUNIOzs7MENBRWdCO0FBQ2IsZ0JBQU0sV0FBVyxLQUFLLENBQUwsQ0FBTyxLQUFQLEVBQWpCO0FBQ0EscUJBQVMsT0FBVCxDQUFpQixLQUFLLEtBQXRCOztBQUVBLG1CQUFPLFNBQVMsT0FBaEI7QUFDSDs7O2dDQUVPLE9BQU87QUFDWCxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQVA7QUFDSDs7Ozs7O0FBS0wsWUFBWSxPQUFaLEdBQXNCLENBQUMsSUFBRCxDQUF0Qjs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUNLLE9BREwsQ0FDYSxhQURiLEVBQzRCO0FBQUEsV0FBTSxJQUFJLFdBQUosRUFBTjtBQUFBLENBRDVCOzs7Ozs7O0lDcENNO0FBQ0YsbUJBQVksS0FBWixFQUFtQixFQUFuQixFQUF1QixTQUF2QixFQUFrQyxtQkFBbEMsRUFBc0Q7QUFBQTs7QUFDbEQsYUFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGFBQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsU0FBaEI7QUFDQSxhQUFLLG1CQUFMLEdBQTJCLG1CQUEzQjtBQUNIOzs7O21DQUVTO0FBQUE7O0FBQ04sbUJBQU8sS0FBSyxFQUFMLENBQVEsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNoQyxtQkFBRyxJQUFILENBQVEsS0FBUixDQUFjLGVBQU87QUFDakI7QUFDQSx3QkFBRyxJQUFJLE9BQVAsRUFBZTtBQUNYLDhCQUFLLG1CQUFMLENBQXlCLEdBQXpCLENBQTZCLFlBQTdCLEVBQTJDLElBQUksT0FBL0M7QUFDQSw4QkFBSyxtQkFBTCxDQUF5QixHQUF6QixDQUE2QixhQUE3QixFQUE0QyxJQUE1QztBQUNBO0FBQ0gscUJBSkQsTUFJTztBQUNIO0FBQ0g7QUFDSixpQkFURCxFQVNHLENBQUMsQ0FBRCxHQUFHLENBQUgsR0FBSyxDQUFMLEdBQU8sRUFBUCxHQUFVLElBQVYsR0FBZSxJQUFmLEdBQW9CLE1BVHZCO0FBVUgsYUFYTSxDQUFQO0FBWUg7Ozt3Q0FFYztBQUNYLGdCQUFNLFdBQVcsS0FBSyxFQUFMLENBQVEsS0FBUixFQUFqQjs7QUFHQSxlQUFHLEdBQUgsQ0FBTyxJQUFQLENBQVksY0FBWixFQUE0QixFQUE1QixFQUVHLFVBQUMsR0FBRCxFQUFTO0FBQ1I7QUFDQSx5QkFBUyxPQUFULENBQWlCLElBQUksUUFBckI7QUFDSCxhQUxEOzs7Ozs7OztBQWNIOzs7bUNBRVU7QUFDUCxlQUFHLEdBQUgsQ0FBTyxJQUFQLENBQVksVUFBWixFQUF3QjtBQUN2QiwwQkFBVSxRQURhO0FBRXZCLHdCQUFRLFdBRmU7QUFHdkIsdUJBQU87QUFIZ0IsYUFBeEIsRUFJSSxVQUFDLEdBQUQsRUFBUztBQUNaO0FBQ0MsYUFORjtBQU9IOzs7eUNBRXVCLE9BQU0sSUFBSSxXQUFXLHFCQUFvQjtBQUM3RCxtQkFBTyxJQUFJLEtBQUosQ0FBVSxLQUFWLEVBQWlCLEVBQWpCLEVBQXFCLFNBQXJCLEVBQWdDLG1CQUFoQyxDQUFQO0FBQ0g7Ozs7OztBQUdMLE1BQU0sT0FBTixHQUFnQixDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFdBQWhCLEVBQTZCLHFCQUE3QixDQUFoQjs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUNLLE9BREwsQ0FDYSxPQURiLEVBQ3NCLE1BQU0sZ0JBRDVCOzs7OztJQzVETSxrQkFDRix5QkFBWSxNQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBSyxLQUFMLEdBQWEsT0FBYjtBQUNBLFdBQU8sS0FBUCxHQUFlLFlBQWY7QUFDSDs7QUFHTCxnQkFBZ0IsT0FBaEIsR0FBMEIsQ0FBQyxRQUFELENBQTFCOztBQUdBLFFBQVEsTUFBUixDQUFlLGdCQUFmLEVBQ0ssVUFETCxDQUNnQixpQkFEaEIsRUFDbUMsZUFEbkM7Ozs7Ozs7SUNWTTtBQUNGLDRCQUFZLG1CQUFaLEVBQWlDLE1BQWpDLEVBQXlDLEtBQXpDLEVBQStDO0FBQUE7O0FBQzNDLGFBQUssbUJBQUwsR0FBMkIsbUJBQTNCO0FBQ0EsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGFBQUssS0FBTCxHQUFhLEtBQWI7O0FBRUg7Ozs7Ozs7Ozs7Ozs7bUNBU1M7QUFBQTs7QUFDTixnQkFBTSxZQUFZLEtBQUssbUJBQUwsQ0FBeUIsR0FBekIsQ0FBNkIsYUFBN0IsQ0FBbEI7O0FBRUE7QUFDQSxnQkFBRyxTQUFILEVBQWE7QUFDVCx1QkFBTyxLQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsT0FBZixDQUFQO0FBQ0g7QUFDRDtBQUNBLGlCQUFLLEtBQUwsQ0FDSyxRQURMLEdBRUssSUFGTCxDQUVVLFlBQU07QUFDUjtBQUNBLHNCQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsT0FBZjtBQUNILGFBTEwsRUFNSyxLQU5MLENBTVcsWUFBTTtBQUNUO0FBQ0gsYUFSTDtBQVVIOzs7Ozs7QUFHTCxlQUFlLE9BQWYsR0FBeUIsQ0FBQyxxQkFBRCxFQUF3QixRQUF4QixFQUFrQyxPQUFsQyxDQUF6Qjs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxlQUFmLEVBQ0ssVUFETCxDQUNnQixnQkFEaEIsRUFDa0MsY0FEbEM7Ozs7Ozs7SUN0Q007QUFDRixnQ0FBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGFBQUssYUFBTDtBQUNIOzs7O3dDQUVjO0FBQ1gsaUJBQUssS0FBTCxDQUNLLGFBREwsR0FFSyxJQUZMLENBRVUsVUFBQyxHQUFELEVBQVM7QUFDWDtBQUNILGFBSkwsRUFLSyxLQUxMLENBS1csVUFBQyxHQUFELEVBQVM7QUFDWjtBQUNILGFBUEw7QUFRSDs7Ozs7O0FBR0wsbUJBQW1CLE9BQW5CLEdBQTZCLENBQUMsT0FBRCxDQUE3Qjs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxtQkFBZixFQUNLLFVBREwsQ0FDZ0Isb0JBRGhCLEVBQ3NDLGtCQUR0Qzs7Ozs7SUNwQk0sa0JBQ0YseUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUNkLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDSDs7QUFJTCxnQkFBZ0IsT0FBaEIsR0FBMEIsQ0FBQyxPQUFELENBQTFCOztBQUVBLFFBQVEsTUFBUixDQUFlLGdCQUFmLEVBQ0ssVUFETCxDQUNnQixpQkFEaEIsRUFDbUMsZUFEbkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwXCIsIFtcclxuICAgICAgICBcInN1cGVyQXBwLmNvcmVcIixcclxuICAgICAgICAvL3BhZ2VzXHJcbiAgICAgICAgXCJzdXBlckFwcC5ob21lXCIsXHJcbiAgICAgICAgXCJzdXBlckFwcC5hYm91dFwiLFxyXG4gICAgICAgIFwic3VwZXJBcHAud2FsbHNcIixcclxuICAgICAgICBcInN1cGVyQXBwLm5ld3NmZWVkXCIsXHJcbiAgICBdKTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuYmxvY2tzXCIsIFtcclxuICAgICAgICBcImJsb2Nrcy5zZXJ2aWNlc1wiLFxyXG4gICAgICAgIFwiYmxvY2tzLmNvbnN0YW50c1wiLFxyXG4gICAgICAgIFwiYmxvY2tzLmhlbHBlcnNcIixcclxuICAgICAgICBcImJsb2Nrcy5yb3V0ZXJcIlxyXG4gICAgXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5jb3JlXCIsIFtcclxuICAgICAgICAvL2FuZ3VsYXIgbmF0aXZlIG1vZHVsZXMgKyB0aGlyZCBwYXJ0eSBtb2R1bGVzXHJcbiAgICAgICAgLy8uLlxyXG4gICAgICAgIC8vY3Jvc3MtYXBwIG1vZHVsZVxyXG4gICAgICAgIFwic3VwZXJBcHAuYmxvY2tzXCIsXHJcbiAgICAgICAgXCJMb2NhbFN0b3JhZ2VNb2R1bGVcIixcclxuICAgICAgICBcclxuICAgIF0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuY29uc3RhbnRzXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuaGVscGVyc1wiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnJvdXRlclwiLCBbXCJ1aS5yb3V0ZXJcIl0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5zZXJ2aWNlc1wiLCBbXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCJcclxuICAgIF0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmFib3V0XCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5ob21lXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5uZXdzZmVlZFwiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAud2FsbHNcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbigpe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKFwic3VwZXJBcHBcIilcclxuICAgICAgICAuY29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgY29uZmlnLiRpbmplY3QgPSBbXCJsb2NhbFN0b3JhZ2VTZXJ2aWNlUHJvdmlkZXJcIl07XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnKGxvY2FsU3RvcmFnZVNlcnZpY2VQcm92aWRlcil7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zZXRQcmVmaXgoJ3N1cGVyQXBwJyk7XHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5cclxuXHJcbmNsYXNzIGNvcmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxvY2FsU3RvcmFnZVNlcnZpY2UsICRzdGF0ZSl7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvcmVDb250cm9sbGVyLiRpbmplY3QgPSBbXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHAuY29yZVwiKVxyXG4gICAgLmNvbnRyb2xsZXIoXCJDb3JlQ29udHJvbGxlclwiLCBjb3JlQ29udHJvbGxlcik7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5jb25zdGFudHNcIilcclxuICAgICAgICAuY29uc3RhbnQoJ1ZLX0NPTkZJRycsIHtcclxuICAgICAgICAgICAgY2xpZW50X2lkOiA1NDkxMzA3LFxyXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBcIlZ1NUJDYVRjZE5pOG5MNE1jeUE5XCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb25zdGFudCgnQkFTRV9BUEknLCB7XHJcbiAgICAgICAgICAgIFVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgUE9SVDogXCIzMDAwXCIsXHJcbiAgICAgICAgICAgIEFQSV9VUkw6IFwiL2FwaVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0VWRU5UUycsIHtcclxuICAgICAgICAgICAgU0lHTl9JTjogJ3NpZ25faW4nLFxyXG4gICAgICAgICAgICBTSUdOX09VVDogJ3NpZ25fb3V0JyxcclxuICAgICAgICAgICAgU0lHTl9VUDogJ3NpZ25fdXAnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0VSUk9SX0NPREVTJywge1xyXG4gICAgICAgICAgICBOT1RfRk9VTkQ6IFwiTm90IGZvdW5kIVwiLFxyXG4gICAgICAgICAgICBVTktOT1dOOiBcIkp1c3QgdW5rbm93biBlcnJvciFcIlxyXG4gICAgICAgIH0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5oZWxwZXJzXCIpXHJcbiAgICAgICAgLmZhY3RvcnkoXCJoZWxwZXJcIiwgaGVscGVyKTtcclxuXHJcbiAgICBoZWxwZXIuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhlbHBlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlcnZpY2UgPSB7XHJcbiAgICAgICAgICAgIHRvTG93ZXJDYXNlOiB0b0xvd2VyQ2FzZSxcclxuICAgICAgICAgICAgdG9DYW1lbENhc2U6IHRvQ2FtZWxDYXNlLFxyXG4gICAgICAgICAgICB0b1Bhc2NhbENhc2U6IHRvUGFzY2FsQ2FzZSxcclxuICAgICAgICAgICAgcGFyc2VEYXRlOiBwYXJzZURhdGUsXHJcbiAgICAgICAgICAgIHByZXR0eURhdGU6IHByZXR0eURhdGUsXHJcbiAgICAgICAgICAgIHByZXZlbnRDbGljazogcHJldmVudENsaWNrLFxyXG4gICAgICAgICAgICBleGNhcGVTdHJpbmc6IGV4Y2FwZVN0cmluZ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0xvd2VyQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyYW5zZm9ybSh0YXJnZXQsIGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0NhbWVsQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIHRhcmdldC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJhbnNmb3JtKHRhcmdldCwgZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3S2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGFyZ2V0LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmFuc2Zvcm0odGFyZ2V0LCBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdLZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNTdHJpbmcoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmxlbmd0aCA9PT0gMTAgPyBtb21lbnQoZGF0ZSwgXCJERC5NTS5ZWVlZXCIpIDogbW9tZW50KGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzTnVtYmVyKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV0dHlEYXRlKGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFkYXRlKSByZXR1cm4gZGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRGF0ZShkYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldmVudENsaWNrKGZ1bmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24oZnVuYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBleGNhcGVTdHJpbmcoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghc3RyaW5nIHx8ICFzdHJpbmcubGVuZ3RoKSByZXR1cm4gc3RyaW5nO1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5TWFwID0ge1xyXG4gICAgICAgICAgICAgICAgXCImXCI6IFwiJmFtcDtcIixcclxuICAgICAgICAgICAgICAgIFwiPFwiOiBcIiZsdDtcIixcclxuICAgICAgICAgICAgICAgIFwiPlwiOiBcIiZndDtcIixcclxuICAgICAgICAgICAgICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgICAgICAgICAgICAgXCInXCI6ICcmIzM5OycsXHJcbiAgICAgICAgICAgICAgICBcIi9cIjogJyYjeDJGOydcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInXFwvXS9nLCBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcImJsb2Nrcy5yb3V0ZXJcIilcclxuICAgICAgICAuY29uZmlnKGNvbmZpZyk7XHJcblxyXG4gICAgY29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9cIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJIb21lQ29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcImFib3V0XCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvYWJvdXRcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy9hYm91dC9hYm91dC5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIkFib3V0Q29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcIndhbGxzXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvd2FsbHNcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9wYWdlcy93YWxscy93YWxscy5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIldhbGxzQ29udHJvbGxlciBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZShcIm5ld3NmZWVkXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvbmV3c1wiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL25ld3NmZWVkL25ld3NmZWVkLmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiTmV3c0ZlZWRDb250cm9sbGVyIGFzIHZtXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxyXG4gICAgfVxyXG59KSgpO1xyXG4iLCJcclxuY2xhc3MgdGVzdFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRxKXtcclxuICAgICAgICB0aGlzLnEgPSAkcTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAgeyBcInRleHRcIjogXCJhemF6YVwiLCAgXCJ2YWx1ZVwiOiAxIH0sXHJcbiAgICAgICAgICAgIHsgXCJ0ZXh0XCI6IFwib2xvbG9cIiwgIFwidmFsdWVcIjogMiB9LFxyXG4gICAgICAgICAgICB7IFwidGV4dFwiOiBcImZ1Y2tcIiwgICBcInZhbHVlXCI6IDMgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFN0cigpe1xyXG4gICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zUHJvbWlzZSgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy5xLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0aGlzLml0ZW1zKTtcclxuICAgICAgICAvL2RlZmZlcmVkLnJlamVjdChcImVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxudGVzdFNlcnZpY2UuJGluamVjdCA9IFtcIiRxXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KFwiVGVzdFNlcnZpY2VcIiwgKCkgPT4gbmV3IHRlc3RTZXJ2aWNlKCkgKTtcclxuIiwiXHJcbmNsYXNzIHZrQXBpe1xyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsICRxLCBWS19DT05GSUcsIGxvY2FsU3RvcmFnZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiRxID0gJHE7XHJcbiAgICAgICAgdGhpcy52a0NvbmZpZyA9IFZLX0NPTkZJRztcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaWduSW5Waygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRxKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgVksuQXV0aC5sb2dpbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuc2Vzc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgndmstc2Vzc2lvbicsIHJlcy5zZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdhbnktc2Vzc2lvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sICsyKzQrOCsxNis4MTkyKzEwMjQrMjYyMTQ0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWa05ld3NGZWVkKCl7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLiRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFZLLkFwaS5jYWxsKCduZXdzZmVlZC5nZXQnLCB7XHJcblxyXG4gICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzLnJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKnJldHVybiB0aGlzLiRxKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgVksuQXBpLmNhbGwoJ25ld3NmZWVkLmdldCcsIHtcclxuXHJcbiAgICAgICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbHMoKSB7XHJcbiAgICAgICAgVksuQXBpLmNhbGwoJ3dhbGwuZ2V0Jywge1xyXG4gICAgICAgICBvd25lcl9pZDogMTU1NDE3MTUsXHJcbiAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgY291bnQ6IDVcclxuICAgICAgICAgfSwgKHJlcykgPT4ge1xyXG4gICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmtBcGlTZWxmRmFjdG9yeSgkaHR0cCwkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKXtcclxuICAgICAgICByZXR1cm4gbmV3IHZrQXBpKCRodHRwLCAkcSwgVktfQ09ORklHLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKTtcclxuICAgIH1cclxufVxyXG5cclxudmtBcGkuJGluamVjdCA9IFtcIiRodHRwXCIsIFwiJHFcIiwgXCJWS19DT05GSUdcIiwgXCJsb2NhbFN0b3JhZ2VTZXJ2aWNlXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KCd2a0FwaScsIHZrQXBpLnZrQXBpU2VsZkZhY3RvcnkpOyIsIlxyXG5jbGFzcyBBYm91dENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJ0aXRsZVwiO1xyXG4gICAgICAgICRzY29wZS50aXRsZSA9IFwic2NvcGVUaXRsZVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5BYm91dENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiXTtcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmFib3V0XCIpXHJcbiAgICAuY29udHJvbGxlcihcIkFib3V0Q29udHJvbGxlclwiLCBBYm91dENvbnRyb2xsZXIpO1xyXG4iLCJcclxuY2xhc3MgaG9tZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IobG9jYWxTdG9yYWdlU2VydmljZSwgJHN0YXRlLCB2a0FwaSl7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbG9jYWxTdG9yYWdlU2VydmljZTtcclxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuICAgICAgICB0aGlzLnZrQXBpID0gdmtBcGk7XHJcbiAgICAgICAgLy8gdGhpcy5jaGVja0FueVNlc3Npb24oKTtcclxuICAgIH1cclxuICAgIC8qY2hlY2tBbnlTZXNzaW9uKCl7XHJcbiAgICAgICAgY29uc3QgYW55U2Vzc2lvbiA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoXCJhbnktc2Vzc2lvblwiKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBpZihhbnlTZXNzaW9uKXtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0YXRlLmdvKFwid2FsbHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbiAgICBzaWduSW5Waygpe1xyXG4gICAgICAgIGNvbnN0IHZrU2Vzc2lvbiA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoXCJhbnktc2Vzc2lvblwiKTtcclxuXHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgaWYodmtTZXNzaW9uKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0YXRlLmdvKFwid2FsbHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHRoaXMudmtBcGlcclxuICAgICAgICAgICAgLnNpZ25JblZrKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0ZS5nbyhcIndhbGxzXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuaG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcImxvY2FsU3RvcmFnZVNlcnZpY2VcIiwgXCIkc3RhdGVcIiwgXCJ2a0FwaVwiXTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdzdXBlckFwcC5ob21lJylcclxuICAgIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIGhvbWVDb250cm9sbGVyKTsiLCJcclxuY2xhc3MgbmV3c0ZlZWRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHZrQXBpKXtcclxuICAgICAgICB0aGlzLnZrQXBpID0gdmtBcGk7XHJcbiAgICAgICAgdGhpcy5nZXRWa05ld3NGZWVkKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFZrTmV3c0ZlZWQoKXtcclxuICAgICAgICB0aGlzLnZrQXBpXHJcbiAgICAgICAgICAgIC5nZXRWa05ld3NGZWVkKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ld3NGZWVkQ29udHJvbGxlci4kaW5qZWN0ID0gW1widmtBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAubmV3c2ZlZWQnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ05ld3NGZWVkQ29udHJvbGxlcicsIG5ld3NGZWVkQ29udHJvbGxlcik7IiwiXHJcbmNsYXNzIHdhbGxzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2a0FwaSl7XHJcbiAgICAgICAgdGhpcy52a0FwaSA9IHZrQXBpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbndhbGxzQ29udHJvbGxlci4kaW5qZWN0ID0gW1widmtBcGlcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnc3VwZXJBcHAud2FsbHMnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ1dhbGxzQ29udHJvbGxlcicsIHdhbGxzQ29udHJvbGxlcik7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
