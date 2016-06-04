"use strict";

(function () {
    angular.module("superApp", ["superApp.core",
    //pages
    "superApp.home", "superApp.about"]);
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
    angular.module("superApp.blocks", ["blocks.services", "blocks.constants", "blocks.helpers", "blocks.router"]);
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
    'use strict';

    angular.module("superApp").config(config);

    config.$inject = [];

    function config() {}
})();
"use strict";

(function () {
    angular.module("superApp.core").controller("CoreController", coreController);

    coreController.$inject = [];

    function coreController() {
        var vm = this;

        vm.test = "test";
    }
})();
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
    function vkApi($http, VK_CONFIG) {
        _classCallCheck(this, vkApi);

        this.$http = $http;
        this.vkConfig = VK_CONFIG;
    }

    _createClass(vkApi, [{
        key: 'signIn',
        value: function signIn() {
            VK.Auth.login(function (res) {
                debugger;

                /*VK.Api.call('wall.get', {
                    owner_id: 15541715,
                    domain: "a6brgeuka",
                    count: 5
                }, (res) => {
                    debugger;
                })*/
            }, +2 + 4 + 8 + 16 + 8192 + 1024 + 262144);
            // return this.$http.get("");
            /*return this.$http.get("https://oauth.vk.com/authorize", {
                params: {
                    client_id: this.vkConfig.client_id,
                    redirect_uri: "http://localhost:3000",
                    display: "popup",
                    scope: "friends",
                    response_type: "code",
                    v: "5.52"
                }
            });*/
        }
    }, {
        key: 'getWalls',
        value: function getWalls() {
            var methodName = 'groups.getMembers';
            var groupID = 76922753;
            var url = 'https://api.vk.com/method/' + methodName + '?group_id=' + groupID + '&callback=JSON_CALLBACK';

            return $http.jsonp(url).success();
        }
    }], [{
        key: 'vkApiSelfFactory',
        value: function vkApiSelfFactory($http, VK_CONFIG) {
            return new vkApi($http, VK_CONFIG);
        }
    }]);

    return vkApi;
}();

vkApi.$inject = ["$http", "VK_CONFIG", "EVENTS", "$timeout"];

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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var homeController = function () {
    function homeController(vkApi) {
        _classCallCheck(this, homeController);

        this.vkApi = vkApi;
    }

    _createClass(homeController, [{
        key: 'signInVk',
        value: function signInVk() {
            this.vkApi.signIn();
            /*.then(res => {
                debugger;
            })
            .catch(err => {
                debugger;
            })*/
        }
    }]);

    return homeController;
}();

homeController.$inject = ["vkApi"];

angular.module('superApp.home').controller('HomeController', homeController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJjb3JlL2NvcmUubW9kdWxlLmpzIiwiYmxvY2tzL2Jsb2Nrcy5tb2R1bGUuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5tb2R1bGUuanMiLCJibG9ja3MvaGVscGVycy9oZWxwZXJzLm1vZHVsZS5qcyIsImJsb2Nrcy9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJwYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJwYWdlcy9ob21lL2hvbWUubW9kdWxlLmpzIiwiYXBwLmNvbmZpZy5qcyIsImNvcmUvY29yZS5jb250cm9sbGVyLmpzIiwiYmxvY2tzL2NvbnN0YW50cy9jb25zdGFudHMuc2VydmljZS5qcyIsImJsb2Nrcy9oZWxwZXJzL2hlbHBlci5zZXJ2aWNlLmpzIiwiYmxvY2tzL3JvdXRlci9yb3V0ZXIuY29uZmlnLmpzIiwiYmxvY2tzL3NlcnZpY2VzL3Rlc3Quc2VydmljZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy92ay5zZXJ2aWNlLmpzIiwicGFnZXMvYWJvdXQvYWJvdXQuY29udHJvbGxlci5qcyIsInBhZ2VzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixDQUN2QixlQUR1Qjs7QUFHdkIsbUJBSHVCLEVBSXZCLGdCQUp1QixDQUEzQjtBQU1ILENBUEQ7OztBQ0FBLENBQUMsWUFBVztBQUNSLFlBQVEsTUFBUixDQUFlLGVBQWYsRUFBZ0M7Ozs7QUFJNUIscUJBSjRCLEVBSzVCLG9CQUw0QixDQUFoQztBQVFILENBVEQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLENBQzlCLGlCQUQ4QixFQUU5QixrQkFGOEIsRUFHOUIsZ0JBSDhCLEVBSTlCLGVBSjhCLENBQWxDO0FB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QyxPQUFELEVBQVUsV0FBVixFQUF1QixRQUF2QixFQUFpQyxVQUFqQyxDQUFoQjs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUNLLE9BREwsQ0FDYSxPQURiLEVBQ3NCLE1BQU0sZ0JBRDVCOzs7OztJQzlDTSxrQkFDRix5QkFBWSxNQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBSyxLQUFMLEdBQWEsT0FBYjtBQUNBLFdBQU8sS0FBUCxHQUFlLFlBQWY7QUFDSDs7QUFHTCxnQkFBZ0IsT0FBaEIsR0FBMEIsQ0FBQyxRQUFELENBQTFCOztBQUdBLFFBQVEsTUFBUixDQUFlLGdCQUFmLEVBQ0ssVUFETCxDQUNnQixpQkFEaEIsRUFDbUMsZUFEbkM7Ozs7Ozs7SUNWTTtBQUNGLDRCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFDZCxhQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0g7Ozs7bUNBQ1M7QUFDTixpQkFBSyxLQUFMLENBQVcsTUFBWDs7Ozs7OztBQU9IOzs7Ozs7QUFHTCxlQUFlLE9BQWYsR0FBeUIsQ0FBQyxPQUFELENBQXpCOztBQUVBLFFBQVEsTUFBUixDQUFlLGVBQWYsRUFDSyxVQURMLENBQ2dCLGdCQURoQixFQUNrQyxjQURsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwic3VwZXJBcHBcIiwgW1xyXG4gICAgICAgIFwic3VwZXJBcHAuY29yZVwiLFxyXG4gICAgICAgIC8vcGFnZXNcclxuICAgICAgICBcInN1cGVyQXBwLmhvbWVcIixcclxuICAgICAgICBcInN1cGVyQXBwLmFib3V0XCIsXHJcbiAgICBdKTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5jb3JlXCIsIFtcclxuICAgICAgICAvL2FuZ3VsYXIgbmF0aXZlIG1vZHVsZXMgKyB0aGlyZCBwYXJ0eSBtb2R1bGVzXHJcbiAgICAgICAgLy8uLlxyXG4gICAgICAgIC8vY3Jvc3MtYXBwIG1vZHVsZVxyXG4gICAgICAgIFwic3VwZXJBcHAuYmxvY2tzXCIsXHJcbiAgICAgICAgXCJMb2NhbFN0b3JhZ2VNb2R1bGVcIixcclxuICAgICAgICBcclxuICAgIF0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5ibG9ja3NcIiwgW1xyXG4gICAgICAgIFwiYmxvY2tzLnNlcnZpY2VzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuaGVscGVyc1wiLFxyXG4gICAgICAgIFwiYmxvY2tzLnJvdXRlclwiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuY29uc3RhbnRzXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuaGVscGVyc1wiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnJvdXRlclwiLCBbXCJ1aS5yb3V0ZXJcIl0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5zZXJ2aWNlc1wiLCBbXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCJcclxuICAgIF0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmFib3V0XCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5ob21lXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKXtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcInN1cGVyQXBwXCIpXHJcbiAgICAgICAgLmNvbmZpZyhjb25maWcpO1xyXG5cclxuICAgIGNvbmZpZy4kaW5qZWN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnKCl7fVxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJzdXBlckFwcC5jb3JlXCIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoXCJDb3JlQ29udHJvbGxlclwiLCBjb3JlQ29udHJvbGxlcik7XHJcblxyXG4gICAgY29yZUNvbnRyb2xsZXIuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvcmVDb250cm9sbGVyKCkge1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZtLnRlc3QgPSBcInRlc3RcIjtcclxuICAgIH1cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLmNvbnN0YW50c1wiKVxyXG4gICAgICAgIC5jb25zdGFudCgnVktfQ09ORklHJywge1xyXG4gICAgICAgICAgICBjbGllbnRfaWQ6IDU0OTEzMDcsXHJcbiAgICAgICAgICAgIGNsaWVudF9zZWNyZXQ6IFwiVnU1QkNhVGNkTmk4bkw0TWN5QTlcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNvbnN0YW50KCdCQVNFX0FQSScsIHtcclxuICAgICAgICAgICAgVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG4gICAgICAgICAgICBQT1JUOiBcIjMwMDBcIixcclxuICAgICAgICAgICAgQVBJX1VSTDogXCIvYXBpXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb25zdGFudCgnRVZFTlRTJywge1xyXG4gICAgICAgICAgICBTSUdOX0lOOiAnc2lnbl9pbicsXHJcbiAgICAgICAgICAgIFNJR05fT1VUOiAnc2lnbl9vdXQnLFxyXG4gICAgICAgICAgICBTSUdOX1VQOiAnc2lnbl91cCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jb25zdGFudCgnRVJST1JfQ09ERVMnLCB7XHJcbiAgICAgICAgICAgIE5PVF9GT1VORDogXCJOb3QgZm91bmQhXCIsXHJcbiAgICAgICAgICAgIFVOS05PV046IFwiSnVzdCB1bmtub3duIGVycm9yIVwiXHJcbiAgICAgICAgfSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLmhlbHBlcnNcIilcclxuICAgICAgICAuZmFjdG9yeShcImhlbHBlclwiLCBoZWxwZXIpO1xyXG5cclxuICAgIGhlbHBlci4kaW5qZWN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gaGVscGVyKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VydmljZSA9IHtcclxuICAgICAgICAgICAgdG9Mb3dlckNhc2U6IHRvTG93ZXJDYXNlLFxyXG4gICAgICAgICAgICB0b0NhbWVsQ2FzZTogdG9DYW1lbENhc2UsXHJcbiAgICAgICAgICAgIHRvUGFzY2FsQ2FzZTogdG9QYXNjYWxDYXNlLFxyXG4gICAgICAgICAgICBwYXJzZURhdGU6IHBhcnNlRGF0ZSxcclxuICAgICAgICAgICAgcHJldHR5RGF0ZTogcHJldHR5RGF0ZSxcclxuICAgICAgICAgICAgcHJldmVudENsaWNrOiBwcmV2ZW50Q2xpY2ssXHJcbiAgICAgICAgICAgIGV4Y2FwZVN0cmluZzogZXhjYXBlU3RyaW5nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2U7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvTG93ZXJDYXNlKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJhbnNmb3JtKHRhcmdldCwgZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5LnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpICsgdGFyZ2V0LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmFuc2Zvcm0odGFyZ2V0LCBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdLZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0YXJnZXQuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyYW5zZm9ybSh0YXJnZXQsIGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0tleSA9IGtleS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXJzZURhdGUoZGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc1N0cmluZyhkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUubGVuZ3RoID09PSAxMCA/IG1vbWVudChkYXRlLCBcIkRELk1NLllZWVlcIikgOiBtb21lbnQoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNOdW1iZXIoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXR0eURhdGUoZGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoIWRhdGUpIHJldHVybiBkYXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VEYXRlKGRhdGUpLmZvcm1hdChcIkRELk1NLllZWVlcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV2ZW50Q2xpY2soZnVuYykge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gYXJnc1swXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbihmdW5jKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGV4Y2FwZVN0cmluZyhzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmcgfHwgIXN0cmluZy5sZW5ndGgpIHJldHVybiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHZhciBlbnRpdHlNYXAgPSB7XHJcbiAgICAgICAgICAgICAgICBcIiZcIjogXCImYW1wO1wiLFxyXG4gICAgICAgICAgICAgICAgXCI8XCI6IFwiJmx0O1wiLFxyXG4gICAgICAgICAgICAgICAgXCI+XCI6IFwiJmd0O1wiLFxyXG4gICAgICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXHJcbiAgICAgICAgICAgICAgICBcIidcIjogJyYjMzk7JyxcclxuICAgICAgICAgICAgICAgIFwiL1wiOiAnJiN4MkY7J1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidcXC9dL2csIGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5TWFwW3NdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGFuZ3VsYXJcclxuICAgICAgICAubW9kdWxlKFwiYmxvY2tzLnJvdXRlclwiKVxyXG4gICAgICAgIC5jb25maWcoY29uZmlnKTtcclxuXHJcbiAgICBjb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCIsIFwiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL2hvbWUvaG9tZS5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcIkhvbWVDb250cm9sbGVyIGFzIHZtXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKFwiYWJvdXRcIiwge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hYm91dFwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXBwL3BhZ2VzL2Fib3V0L2Fib3V0Lmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiQWJvdXRDb250cm9sbGVyIGFzIHZtXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxyXG4gICAgfVxyXG59KSgpO1xyXG4iLCJcclxuY2xhc3MgdGVzdFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRxKXtcclxuICAgICAgICB0aGlzLnEgPSAkcTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAgeyBcInRleHRcIjogXCJhemF6YVwiLCAgXCJ2YWx1ZVwiOiAxIH0sXHJcbiAgICAgICAgICAgIHsgXCJ0ZXh0XCI6IFwib2xvbG9cIiwgIFwidmFsdWVcIjogMiB9LFxyXG4gICAgICAgICAgICB7IFwidGV4dFwiOiBcImZ1Y2tcIiwgICBcInZhbHVlXCI6IDMgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFN0cigpe1xyXG4gICAgICAgIHJldHVybiBcInRlc3RcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zUHJvbWlzZSgpe1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy5xLmRlZmVyKCk7XHJcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0aGlzLml0ZW1zKTtcclxuICAgICAgICAvL2RlZmZlcmVkLnJlamVjdChcImVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxudGVzdFNlcnZpY2UuJGluamVjdCA9IFtcIiRxXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KFwiVGVzdFNlcnZpY2VcIiwgKCkgPT4gbmV3IHRlc3RTZXJ2aWNlKCkgKTtcclxuIiwiXHJcbmNsYXNzIHZrQXBpe1xyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIFZLX0NPTkZJRyl7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMudmtDb25maWcgPSBWS19DT05GSUc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNpZ25Jbigpe1xyXG4gICAgICAgIFZLLkF1dGgubG9naW4ocmVzID0+IHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcblxyXG4gICAgICAgICAgICAvKlZLLkFwaS5jYWxsKCd3YWxsLmdldCcsIHtcclxuICAgICAgICAgICAgICAgIG93bmVyX2lkOiAxNTU0MTcxNSxcclxuICAgICAgICAgICAgICAgIGRvbWFpbjogXCJhNmJyZ2V1a2FcIixcclxuICAgICAgICAgICAgICAgIGNvdW50OiA1XHJcbiAgICAgICAgICAgIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICB9KSovXHJcbiAgICAgICAgfSwgKzIrNCs4KzE2KzgxOTIrMTAyNCsyNjIxNDQpO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLiRodHRwLmdldChcIlwiKTtcclxuICAgICAgICAvKnJldHVybiB0aGlzLiRodHRwLmdldChcImh0dHBzOi8vb2F1dGgudmsuY29tL2F1dGhvcml6ZVwiLCB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLnZrQ29uZmlnLmNsaWVudF9pZCxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwicG9wdXBcIixcclxuICAgICAgICAgICAgICAgIHNjb3BlOiBcImZyaWVuZHNcIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IFwiY29kZVwiLFxyXG4gICAgICAgICAgICAgICAgdjogXCI1LjUyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbHMoKSB7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9ICdncm91cHMuZ2V0TWVtYmVycyc7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBJRCA9IDc2OTIyNzUzO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS52ay5jb20vbWV0aG9kLycrbWV0aG9kTmFtZSsnP2dyb3VwX2lkPScrZ3JvdXBJRCsnJmNhbGxiYWNrPUpTT05fQ0FMTEJBQ0snO1xyXG5cclxuICAgICAgICByZXR1cm4gJGh0dHAuanNvbnAodXJsKS5zdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHZrQXBpU2VsZkZhY3RvcnkoJGh0dHAsIFZLX0NPTkZJRyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB2a0FwaSgkaHR0cCwgIFZLX0NPTkZJRyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZrQXBpLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIlZLX0NPTkZJR1wiLCBcIkVWRU5UU1wiLCBcIiR0aW1lb3V0XCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KCd2a0FwaScsIHZrQXBpLnZrQXBpU2VsZkZhY3RvcnkpOyIsIlxyXG5jbGFzcyBBYm91dENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJ0aXRsZVwiO1xyXG4gICAgICAgICRzY29wZS50aXRsZSA9IFwic2NvcGVUaXRsZVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5BYm91dENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiXTtcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZShcInN1cGVyQXBwLmFib3V0XCIpXHJcbiAgICAuY29udHJvbGxlcihcIkFib3V0Q29udHJvbGxlclwiLCBBYm91dENvbnRyb2xsZXIpO1xyXG4iLCJcclxuY2xhc3MgaG9tZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IodmtBcGkpe1xyXG4gICAgICAgIHRoaXMudmtBcGkgPSB2a0FwaTtcclxuICAgIH1cclxuICAgIHNpZ25JblZrKCl7XHJcbiAgICAgICAgdGhpcy52a0FwaS5zaWduSW4oKTtcclxuICAgICAgICAgICAgLyoudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIH0pKi9cclxuICAgIH1cclxufVxyXG5cclxuaG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcInZrQXBpXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ3N1cGVyQXBwLmhvbWUnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgaG9tZUNvbnRyb2xsZXIpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
