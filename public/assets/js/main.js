"use strict";

(function () {
    angular.module("TestApp", ["TestApp.core",
    //pages
    "TestApp.home", "TestApp.about"]);
})();
"use strict";

(function () {
    angular.module("TestApp.blocks", ["blocks.services", "blocks.constants", "blocks.helpers", "blocks.router"]);
})();
"use strict";

(function () {
    angular.module("TestApp.core", [
    //angular native modules + third party modules
    //..
    //cross-app module
    "TestApp.blocks"]);
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
    angular.module("TestApp.about", []);
})();
"use strict";

(function () {
    angular.module("TestApp.home", []);
})();
"use strict";

(function () {
    'use strict';

    angular.module("TestApp").config(config);

    config.$inject = [];

    function config() {}
})();
"use strict";

(function () {
    angular.module("TestApp.core").controller("CoreController", coreController);

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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vkApi = function () {
    function vkApi($http, VK_CONFIG) {
        _classCallCheck(this, vkApi);

        this.$http = $http;
        this.vkConfig = VK_CONFIG;
    }

    _createClass(vkApi, [{
        key: "signIn",
        value: function signIn() {
            debugger;
            return this.$http({
                url: "https://oauth.vk.com/authorize",
                method: "GET",
                params: {
                    client_id: this.vkConfig.client_id,
                    redirect_uri: "http://localhost:3000",
                    display: "popup",
                    scope: "friends",
                    response_type: "code",
                    v: "5.52"
                }
            });
        }
    }, {
        key: "getWalls",
        value: function getWalls() {
            var methodName = 'groups.getMembers';
            var groupID = 76922753;
            var url = 'https://api.vk.com/method/' + methodName + '?group_id=' + groupID + '&callback=JSON_CALLBACK';

            return $http.jsonp(url).success();
        }
    }], [{
        key: "vkApiSelfFactory",
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

angular.module("TestApp.about").controller("AboutController", AboutController);
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
            this.vkApi.signIn().then(function (res) {
                debugger;
            }).catch(function (err) {
                debugger;
            });
        }
    }]);

    return homeController;
}();

homeController.$inject = ["vkApi"];

angular.module('TestApp.home').controller('HomeController', homeController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJibG9ja3MvYmxvY2tzLm1vZHVsZS5qcyIsImNvcmUvY29yZS5tb2R1bGUuanMiLCJibG9ja3MvY29uc3RhbnRzL2NvbnN0YW50cy5tb2R1bGUuanMiLCJibG9ja3MvaGVscGVycy9oZWxwZXJzLm1vZHVsZS5qcyIsImJsb2Nrcy9yb3V0ZXIvcm91dGVyLm1vZHVsZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJwYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJwYWdlcy9ob21lL2hvbWUubW9kdWxlLmpzIiwiYXBwLmNvbmZpZy5qcyIsImNvcmUvY29yZS5jb250cm9sbGVyLmpzIiwiYmxvY2tzL2NvbnN0YW50cy9jb25zdGFudHMuc2VydmljZS5qcyIsImJsb2Nrcy9oZWxwZXJzL2hlbHBlci5zZXJ2aWNlLmpzIiwiYmxvY2tzL3JvdXRlci9yb3V0ZXIuY29uZmlnLmpzIiwiYmxvY2tzL3NlcnZpY2VzL3Rlc3Quc2VydmljZS5qcyIsImJsb2Nrcy9zZXJ2aWNlcy92ay5zZXJ2aWNlLmpzIiwicGFnZXMvYWJvdXQvYWJvdXQuY29udHJvbGxlci5qcyIsInBhZ2VzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsU0FBZixFQUEwQixDQUN0QixjQURzQjs7QUFHdEIsa0JBSHNCLEVBSXRCLGVBSnNCLENBQTFCO0FBTUgsQ0FQRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsZ0JBQWYsRUFBaUMsQ0FDN0IsaUJBRDZCLEVBRTdCLGtCQUY2QixFQUc3QixnQkFINkIsRUFJN0IsZUFKNkIsQ0FBakM7QUFNSCxDQVBEOzs7QUNBQSxDQUFDLFlBQVc7QUFDUixZQUFRLE1BQVIsQ0FBZSxjQUFmLEVBQStCOzs7O0FBSTNCLG9CQUoyQixDQUEvQjtBQU1ILENBUEQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGtCQUFmLEVBQW1DLEVBQW5DO0FBQ0gsQ0FGRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsZ0JBQWYsRUFBaUMsRUFBakM7QUFDSCxDQUZEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxlQUFmLEVBQWdDLENBQUMsV0FBRCxDQUFoQztBQUNILENBRkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLENBQzlCLGtCQUQ4QixDQUFsQztBQUdILENBSkQ7OztBQ0FBLENBQUMsWUFBWTtBQUNULFlBQVEsTUFBUixDQUFlLGVBQWYsRUFBZ0MsRUFBaEM7QUFDSCxDQUZEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxjQUFmLEVBQStCLEVBQS9CO0FBQ0gsQ0FGRDs7O0FDQUEsQ0FBQyxZQUFVO0FBQ1A7O0FBRUEsWUFDSyxNQURMLENBQ1ksU0FEWixFQUVLLE1BRkwsQ0FFWSxNQUZaOztBQUlBLFdBQU8sT0FBUCxHQUFpQixFQUFqQjs7QUFFQSxhQUFTLE1BQVQsR0FBaUIsQ0FBRTtBQUN0QixDQVZEOzs7QUNBQSxDQUFDLFlBQVk7QUFDVCxZQUFRLE1BQVIsQ0FBZSxjQUFmLEVBQ0ssVUFETCxDQUNnQixnQkFEaEIsRUFDa0MsY0FEbEM7O0FBR0EsbUJBQWUsT0FBZixHQUF5QixFQUF6Qjs7QUFFQSxhQUFTLGNBQVQsR0FBMEI7QUFDdEIsWUFBSSxLQUFLLElBQVQ7O0FBRUEsV0FBRyxJQUFILEdBQVUsTUFBVjtBQUNIO0FBQ0osQ0FYRDs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsa0JBQWYsRUFDSyxRQURMLENBQ2MsV0FEZCxFQUMyQjtBQUNuQixtQkFBVyxPQURRO0FBRW5CLHVCQUFlO0FBRkksS0FEM0IsRUFLSyxRQUxMLENBS2MsVUFMZCxFQUswQjtBQUNsQixhQUFLLHVCQURhO0FBRWxCLGNBQU0sTUFGWTtBQUdsQixpQkFBUztBQUhTLEtBTDFCLEVBVUssUUFWTCxDQVVjLFFBVmQsRUFVd0I7QUFDaEIsaUJBQVMsU0FETztBQUVoQixrQkFBVSxVQUZNO0FBR2hCLGlCQUFTO0FBSE8sS0FWeEIsRUFlSyxRQWZMLENBZWMsYUFmZCxFQWU2QjtBQUNyQixtQkFBVyxZQURVO0FBRXJCLGlCQUFTO0FBRlksS0FmN0I7QUFtQkgsQ0FwQkQ7Ozs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1QsWUFBUSxNQUFSLENBQWUsZ0JBQWYsRUFDSyxPQURMLENBQ2EsUUFEYixFQUN1QixNQUR2Qjs7QUFHQSxXQUFPLE9BQVAsR0FBaUIsRUFBakI7O0FBRUEsYUFBUyxNQUFULEdBQWtCOztBQUVkLFlBQUksVUFBVTtBQUNWLHlCQUFhLFdBREg7QUFFVix5QkFBYSxXQUZIO0FBR1YsMEJBQWMsWUFISjtBQUlWLHVCQUFXLFNBSkQ7QUFLVix3QkFBWSxVQUxGO0FBTVYsMEJBQWMsWUFOSjtBQU9WLDBCQUFjO0FBUEosU0FBZDs7QUFVQSxlQUFPLE9BQVA7O0FBRUEsaUJBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QjtBQUN6QixnQkFBSSxPQUFPLE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDM0IsdUJBQU8sT0FBTyxXQUFQLEVBQVA7QUFDSDtBQUNELGdCQUFJLFFBQU8sTUFBUCx5Q0FBTyxNQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQzNCLHVCQUFPLEVBQUUsU0FBRixDQUFZLE1BQVosRUFBb0IsVUFBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCLEdBQXpCLEVBQThCO0FBQ3JELDJCQUFPLE9BQU8sR0FBUCxDQUFQO0FBQ0EsMkJBQU8sSUFBSSxXQUFKLEVBQVAsSUFBNEIsS0FBNUI7QUFDSCxpQkFITSxDQUFQO0FBSUg7QUFDRCxtQkFBTyxNQUFQO0FBQ0g7O0FBRUQsaUJBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QjtBQUN6QixnQkFBSSxPQUFPLE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDM0IsdUJBQU8sT0FBTyxTQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLFdBQXZCLEtBQXVDLE9BQU8sU0FBUCxDQUFpQixDQUFqQixDQUE5QztBQUNIO0FBQ0QsZ0JBQUksUUFBTyxNQUFQLHlDQUFPLE1BQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDM0IsdUJBQU8sRUFBRSxTQUFGLENBQVksTUFBWixFQUFvQixVQUFVLE1BQVYsRUFBa0IsS0FBbEIsRUFBeUIsR0FBekIsRUFBOEI7QUFDckQsMkJBQU8sT0FBTyxHQUFQLENBQVA7QUFDQSx3QkFBSSxTQUFTLElBQUksU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsV0FBcEIsS0FBb0MsSUFBSSxTQUFKLENBQWMsQ0FBZCxDQUFqRDtBQUNBLDJCQUFPLE1BQVAsSUFBaUIsS0FBakI7QUFDSCxpQkFKTSxDQUFQO0FBS0g7QUFDRCxtQkFBTyxNQUFQO0FBQ0g7O0FBRUQsaUJBQVMsWUFBVCxDQUFzQixNQUF0QixFQUE4QjtBQUMxQixnQkFBSSxDQUFDLE1BQUwsRUFBYSxPQUFPLElBQVA7QUFDYixnQkFBSSxPQUFPLE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDM0IsdUJBQU8sT0FBTyxTQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLFdBQXZCLEtBQXVDLE9BQU8sU0FBUCxDQUFpQixDQUFqQixDQUE5QztBQUNIO0FBQ0QsZ0JBQUksUUFBTyxNQUFQLHlDQUFPLE1BQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDM0IsdUJBQU8sRUFBRSxTQUFGLENBQVksTUFBWixFQUFvQixVQUFVLE1BQVYsRUFBa0IsS0FBbEIsRUFBeUIsR0FBekIsRUFBOEI7QUFDckQsMkJBQU8sT0FBTyxHQUFQLENBQVA7QUFDQSx3QkFBSSxTQUFTLElBQUksU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsV0FBcEIsS0FBb0MsSUFBSSxTQUFKLENBQWMsQ0FBZCxDQUFqRDtBQUNBLDJCQUFPLE1BQVAsSUFBaUIsS0FBakI7QUFDSCxpQkFKTSxDQUFQO0FBS0g7QUFDRCxtQkFBTyxNQUFQO0FBQ0g7O0FBRUQsaUJBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QjtBQUNyQixnQkFBSSxRQUFRLFFBQVIsQ0FBaUIsSUFBakIsQ0FBSixFQUE0QjtBQUN4Qix1QkFBTyxLQUFLLE1BQUwsS0FBZ0IsRUFBaEIsR0FBcUIsT0FBTyxJQUFQLEVBQWEsWUFBYixDQUFyQixHQUFrRCxPQUFPLElBQVAsQ0FBekQ7QUFDSDtBQUNELGdCQUFJLFFBQVEsUUFBUixDQUFpQixJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLHVCQUFPLElBQUksSUFBSixDQUFTLElBQVQsQ0FBUDtBQUNIO0FBQ0QsbUJBQU8sSUFBUDtBQUNIOztBQUVELGlCQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDdEIsZ0JBQUksQ0FBQyxJQUFMLEVBQVcsT0FBTyxJQUFQO0FBQ1gsbUJBQU8sVUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBQXVCLFlBQXZCLENBQVA7QUFDSDs7QUFFRCxpQkFBUyxZQUFULENBQXNCLElBQXRCLEVBQTRCO0FBQ3hCLG1CQUFPLFlBQVk7QUFDZixvQkFBSSxPQUFPLE1BQU0sU0FBTixDQUFnQixLQUFoQixDQUFzQixJQUF0QixDQUEyQixTQUEzQixDQUFYO0FBQ0Esb0JBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2Isd0JBQUksUUFBUSxLQUFLLENBQUwsQ0FBWjtBQUNBLHdCQUFJLFNBQVMsTUFBTSxhQUFmLElBQWdDLE1BQU0sYUFBTixZQUErQixVQUFuRSxFQUErRTtBQUMzRSw4QkFBTSxjQUFOO0FBQ0EsOEJBQU0sZUFBTjtBQUNBLDZCQUFLLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZjtBQUNIO0FBQ0o7QUFDRCxvQkFBSSxRQUFRLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBSixFQUE4QjtBQUMxQix5QkFBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixJQUFqQjtBQUNIO0FBQ0osYUFiRDtBQWNIOztBQUVELGlCQUFTLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEI7QUFDMUIsZ0JBQUksQ0FBQyxNQUFELElBQVcsQ0FBQyxPQUFPLE1BQXZCLEVBQStCLE9BQU8sTUFBUDtBQUMvQixnQkFBSSxZQUFZO0FBQ1oscUJBQUssT0FETztBQUVaLHFCQUFLLE1BRk87QUFHWixxQkFBSyxNQUhPO0FBSVoscUJBQUssUUFKTztBQUtaLHFCQUFLLE9BTE87QUFNWixxQkFBSztBQU5PLGFBQWhCOztBQVNBLG1CQUFPLE9BQU8sTUFBUCxFQUFlLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUMsVUFBVSxDQUFWLEVBQWE7QUFDckQsdUJBQU8sVUFBVSxDQUFWLENBQVA7QUFDSCxhQUZNLENBQVA7QUFHSDtBQUNKO0FBQ0osQ0E5R0Q7OztBQ0FBLENBQUMsWUFBWTs7QUFFVCxZQUNLLE1BREwsQ0FDWSxlQURaLEVBRUssTUFGTCxDQUVZLE1BRlo7O0FBSUEsV0FBTyxPQUFQLEdBQWlCLENBQUMsZ0JBQUQsRUFBbUIsb0JBQW5CLENBQWpCOztBQUVBLGFBQVMsTUFBVCxDQUFnQixjQUFoQixFQUFnQyxrQkFBaEMsRUFBb0Q7QUFDaEQsdUJBQ0ssS0FETCxDQUNXLE1BRFgsRUFDbUI7QUFDWCxpQkFBSyxHQURNO0FBRVgseUJBQWEsMEJBRkY7QUFHWCx3QkFBWTtBQUhELFNBRG5CLEVBTUssS0FOTCxDQU1XLE9BTlgsRUFNb0I7QUFDWixpQkFBSyxRQURPO0FBRVoseUJBQWEsNEJBRkQ7QUFHWix3QkFBWTtBQUhBLFNBTnBCOztBQVlBLDJCQUFtQixTQUFuQixDQUE2QixHQUE3QjtBQUNIO0FBQ0osQ0F2QkQ7Ozs7Ozs7SUNDTTtBQUVGLHlCQUFZLEVBQVosRUFBZTtBQUFBOztBQUNYLGFBQUssQ0FBTCxHQUFTLEVBQVQ7O0FBRUEsYUFBSyxLQUFMLEdBQWEsQ0FDVCxFQUFFLFFBQVEsT0FBVixFQUFvQixTQUFTLENBQTdCLEVBRFMsRUFFVCxFQUFFLFFBQVEsT0FBVixFQUFvQixTQUFTLENBQTdCLEVBRlMsRUFHVCxFQUFFLFFBQVEsTUFBVixFQUFvQixTQUFTLENBQTdCLEVBSFMsQ0FBYjtBQUtIOzs7O2lDQUVPO0FBQ0osbUJBQU8sTUFBUDtBQUNIOzs7bUNBRVM7QUFDTixtQkFBTyxLQUFLLEtBQVo7QUFDSDs7OzBDQUVnQjtBQUNiLGdCQUFNLFdBQVcsS0FBSyxDQUFMLENBQU8sS0FBUCxFQUFqQjtBQUNBLHFCQUFTLE9BQVQsQ0FBaUIsS0FBSyxLQUF0Qjs7QUFFQSxtQkFBTyxTQUFTLE9BQWhCO0FBQ0g7OztnQ0FFTyxPQUFPO0FBQ1gsbUJBQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFQO0FBQ0g7Ozs7OztBQUtMLFlBQVksT0FBWixHQUFzQixDQUFDLElBQUQsQ0FBdEI7O0FBRUEsUUFBUSxNQUFSLENBQWUsaUJBQWYsRUFDSyxPQURMLENBQ2EsYUFEYixFQUM0QjtBQUFBLFdBQU0sSUFBSSxXQUFKLEVBQU47QUFBQSxDQUQ1Qjs7Ozs7OztJQ3BDTTtBQUNGLG1CQUFZLEtBQVosRUFBbUIsU0FBbkIsRUFBNkI7QUFBQTs7QUFDekIsYUFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGFBQUssUUFBTCxHQUFnQixTQUFoQjtBQUNIOzs7O2lDQUVPO0FBQ0o7QUFDQSxtQkFBTyxLQUFLLEtBQUwsQ0FBVztBQUNkLHFCQUFLLGdDQURTO0FBRWQsd0JBQVEsS0FGTTtBQUdkLHdCQUFRO0FBQ0osK0JBQVcsS0FBSyxRQUFMLENBQWMsU0FEckI7QUFFSixrQ0FBYyx1QkFGVjtBQUdKLDZCQUFTLE9BSEw7QUFJSiwyQkFBTyxTQUpIO0FBS0osbUNBQWUsTUFMWDtBQU1KLHVCQUFHO0FBTkM7QUFITSxhQUFYLENBQVA7QUFZSDs7O21DQUVVO0FBQ1AsZ0JBQU0sYUFBYSxtQkFBbkI7QUFDQSxnQkFBTSxVQUFVLFFBQWhCO0FBQ0EsZ0JBQU0sTUFBTSwrQkFBNkIsVUFBN0IsR0FBd0MsWUFBeEMsR0FBcUQsT0FBckQsR0FBNkQseUJBQXpFOztBQUVBLG1CQUFPLE1BQU0sS0FBTixDQUFZLEdBQVosRUFBaUIsT0FBakIsRUFBUDtBQUNIOzs7eUNBRXVCLE9BQU8sV0FBVTtBQUNyQyxtQkFBTyxJQUFJLEtBQUosQ0FBVSxLQUFWLEVBQWtCLFNBQWxCLENBQVA7QUFDSDs7Ozs7O0FBR0wsTUFBTSxPQUFOLEdBQWdCLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsUUFBdkIsRUFBaUMsVUFBakMsQ0FBaEI7O0FBRUEsUUFBUSxNQUFSLENBQWUsaUJBQWYsRUFDSyxPQURMLENBQ2EsT0FEYixFQUNzQixNQUFNLGdCQUQ1Qjs7Ozs7SUNyQ00sa0JBQ0YseUJBQVksTUFBWixFQUFtQjtBQUFBOztBQUNmLFNBQUssS0FBTCxHQUFhLE9BQWI7QUFDQSxXQUFPLEtBQVAsR0FBZSxZQUFmO0FBQ0g7O0FBR0wsZ0JBQWdCLE9BQWhCLEdBQTBCLENBQUMsUUFBRCxDQUExQjs7QUFHQSxRQUFRLE1BQVIsQ0FBZSxlQUFmLEVBQ0ssVUFETCxDQUNnQixpQkFEaEIsRUFDbUMsZUFEbkM7Ozs7Ozs7SUNWTTtBQUNGLDRCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFDZCxhQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0g7Ozs7bUNBQ1M7QUFDTixpQkFBSyxLQUFMLENBQVcsTUFBWCxHQUNLLElBREwsQ0FDVSxlQUFPO0FBQ1Q7QUFDSCxhQUhMLEVBSUssS0FKTCxDQUlXLGVBQU87QUFDVjtBQUNILGFBTkw7QUFPSDs7Ozs7O0FBR0wsZUFBZSxPQUFmLEdBQXlCLENBQUMsT0FBRCxDQUF6Qjs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxjQUFmLEVBQ0ssVUFETCxDQUNnQixnQkFEaEIsRUFDa0MsY0FEbEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcIlRlc3RBcHBcIiwgW1xyXG4gICAgICAgIFwiVGVzdEFwcC5jb3JlXCIsXHJcbiAgICAgICAgLy9wYWdlc1xyXG4gICAgICAgIFwiVGVzdEFwcC5ob21lXCIsXHJcbiAgICAgICAgXCJUZXN0QXBwLmFib3V0XCIsXHJcbiAgICBdKTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiVGVzdEFwcC5ibG9ja3NcIiwgW1xyXG4gICAgICAgIFwiYmxvY2tzLnNlcnZpY2VzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCIsXHJcbiAgICAgICAgXCJibG9ja3MuaGVscGVyc1wiLFxyXG4gICAgICAgIFwiYmxvY2tzLnJvdXRlclwiXHJcbiAgICBdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcIlRlc3RBcHAuY29yZVwiLCBbXHJcbiAgICAgICAgLy9hbmd1bGFyIG5hdGl2ZSBtb2R1bGVzICsgdGhpcmQgcGFydHkgbW9kdWxlc1xyXG4gICAgICAgIC8vLi5cclxuICAgICAgICAvL2Nyb3NzLWFwcCBtb2R1bGVcclxuICAgICAgICBcIlRlc3RBcHAuYmxvY2tzXCJcclxuICAgIF0pO1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuY29uc3RhbnRzXCIsIFtdKTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuaGVscGVyc1wiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGFuZ3VsYXIubW9kdWxlKFwiYmxvY2tzLnJvdXRlclwiLCBbXCJ1aS5yb3V0ZXJcIl0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5zZXJ2aWNlc1wiLCBbXHJcbiAgICAgICAgXCJibG9ja3MuY29uc3RhbnRzXCJcclxuICAgIF0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcIlRlc3RBcHAuYWJvdXRcIiwgW10pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShcIlRlc3RBcHAuaG9tZVwiLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoXCJUZXN0QXBwXCIpXHJcbiAgICAgICAgLmNvbmZpZyhjb25maWcpO1xyXG5cclxuICAgIGNvbmZpZy4kaW5qZWN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnKCl7fVxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJUZXN0QXBwLmNvcmVcIilcclxuICAgICAgICAuY29udHJvbGxlcihcIkNvcmVDb250cm9sbGVyXCIsIGNvcmVDb250cm9sbGVyKTtcclxuXHJcbiAgICBjb3JlQ29udHJvbGxlci4kaW5qZWN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gY29yZUNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgdm0udGVzdCA9IFwidGVzdFwiO1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuY29uc3RhbnRzXCIpXHJcbiAgICAgICAgLmNvbnN0YW50KCdWS19DT05GSUcnLCB7XHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogNTQ5MTMwNyxcclxuICAgICAgICAgICAgY2xpZW50X3NlY3JldDogXCJWdTVCQ2FUY2ROaThuTDRNY3lBOVwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY29uc3RhbnQoJ0JBU0VfQVBJJywge1xyXG4gICAgICAgICAgICBVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcbiAgICAgICAgICAgIFBPUlQ6IFwiMzAwMFwiLFxyXG4gICAgICAgICAgICBBUElfVVJMOiBcIi9hcGlcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNvbnN0YW50KCdFVkVOVFMnLCB7XHJcbiAgICAgICAgICAgIFNJR05fSU46ICdzaWduX2luJyxcclxuICAgICAgICAgICAgU0lHTl9PVVQ6ICdzaWduX291dCcsXHJcbiAgICAgICAgICAgIFNJR05fVVA6ICdzaWduX3VwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNvbnN0YW50KCdFUlJPUl9DT0RFUycsIHtcclxuICAgICAgICAgICAgTk9UX0ZPVU5EOiBcIk5vdCBmb3VuZCFcIixcclxuICAgICAgICAgICAgVU5LTk9XTjogXCJKdXN0IHVua25vd24gZXJyb3IhXCJcclxuICAgICAgICB9KTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgYW5ndWxhci5tb2R1bGUoXCJibG9ja3MuaGVscGVyc1wiKVxyXG4gICAgICAgIC5mYWN0b3J5KFwiaGVscGVyXCIsIGhlbHBlcik7XHJcblxyXG4gICAgaGVscGVyLiRpbmplY3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBoZWxwZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXJ2aWNlID0ge1xyXG4gICAgICAgICAgICB0b0xvd2VyQ2FzZTogdG9Mb3dlckNhc2UsXHJcbiAgICAgICAgICAgIHRvQ2FtZWxDYXNlOiB0b0NhbWVsQ2FzZSxcclxuICAgICAgICAgICAgdG9QYXNjYWxDYXNlOiB0b1Bhc2NhbENhc2UsXHJcbiAgICAgICAgICAgIHBhcnNlRGF0ZTogcGFyc2VEYXRlLFxyXG4gICAgICAgICAgICBwcmV0dHlEYXRlOiBwcmV0dHlEYXRlLFxyXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2s6IHByZXZlbnRDbGljayxcclxuICAgICAgICAgICAgZXhjYXBlU3RyaW5nOiBleGNhcGVTdHJpbmdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gc2VydmljZTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9Mb3dlckNhc2UodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy50cmFuc2Zvcm0odGFyZ2V0LCBmdW5jdGlvbiAocmVzdWx0LCB2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9DYW1lbENhc2UodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyB0YXJnZXQuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLnRyYW5zZm9ybSh0YXJnZXQsIGZ1bmN0aW9uIChyZXN1bHQsIHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0tleSA9IGtleS5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b1Bhc2NhbENhc2UodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRhcmdldC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJhbnNmb3JtKHRhcmdldCwgZnVuY3Rpb24gKHJlc3VsdCwgdmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3S2V5ID0ga2V5LnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzU3RyaW5nKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5sZW5ndGggPT09IDEwID8gbW9tZW50KGRhdGUsIFwiREQuTU0uWVlZWVwiKSA6IG1vbWVudChkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc051bWJlcihkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldHR5RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICghZGF0ZSkgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZURhdGUoZGF0ZSkuZm9ybWF0KFwiREQuTU0uWVlZWVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXZlbnRDbGljayhmdW5jKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKGZ1bmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXhjYXBlU3RyaW5nKHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZyB8fCAhc3RyaW5nLmxlbmd0aCkgcmV0dXJuIHN0cmluZztcclxuICAgICAgICAgICAgdmFyIGVudGl0eU1hcCA9IHtcclxuICAgICAgICAgICAgICAgIFwiJlwiOiBcIiZhbXA7XCIsXHJcbiAgICAgICAgICAgICAgICBcIjxcIjogXCImbHQ7XCIsXHJcbiAgICAgICAgICAgICAgICBcIj5cIjogXCImZ3Q7XCIsXHJcbiAgICAgICAgICAgICAgICAnXCInOiAnJnF1b3Q7JyxcclxuICAgICAgICAgICAgICAgIFwiJ1wiOiAnJiMzOTsnLFxyXG4gICAgICAgICAgICAgICAgXCIvXCI6ICcmI3gyRjsnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ1xcL10vZywgZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHlNYXBbc107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoXCJibG9ja3Mucm91dGVyXCIpXHJcbiAgICAgICAgLmNvbmZpZyhjb25maWcpO1xyXG5cclxuICAgIGNvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIiwgXCIkdXJsUm91dGVyUHJvdmlkZXJcIl07XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoXCJob21lXCIsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvaG9tZS9ob21lLmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiSG9tZUNvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoXCJhYm91dFwiLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2Fib3V0XCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcGFnZXMvYWJvdXQvYWJvdXQuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJBYm91dENvbnRyb2xsZXIgYXMgdm1cIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG5jbGFzcyB0ZXN0U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoJHEpe1xyXG4gICAgICAgIHRoaXMucSA9ICRxO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gW1xyXG4gICAgICAgICAgICB7IFwidGV4dFwiOiBcImF6YXphXCIsICBcInZhbHVlXCI6IDEgfSxcclxuICAgICAgICAgICAgeyBcInRleHRcIjogXCJvbG9sb1wiLCAgXCJ2YWx1ZVwiOiAyIH0sXHJcbiAgICAgICAgICAgIHsgXCJ0ZXh0XCI6IFwiZnVja1wiLCAgIFwidmFsdWVcIjogMyB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0U3RyKCl7XHJcbiAgICAgICAgcmV0dXJuIFwidGVzdFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbXNQcm9taXNlKCl7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLnEuZGVmZXIoKTtcclxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgIC8vZGVmZmVyZWQucmVqZWN0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG50ZXN0U2VydmljZS4kaW5qZWN0ID0gW1wiJHFcIl07XHJcblxyXG5hbmd1bGFyLm1vZHVsZShcImJsb2Nrcy5zZXJ2aWNlc1wiKVxyXG4gICAgLmZhY3RvcnkoXCJUZXN0U2VydmljZVwiLCAoKSA9PiBuZXcgdGVzdFNlcnZpY2UoKSApO1xyXG4iLCJcclxuY2xhc3MgdmtBcGl7XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgVktfQ09ORklHKXtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy52a0NvbmZpZyA9IFZLX0NPTkZJRztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2lnbkluKCl7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9vYXV0aC52ay5jb20vYXV0aG9yaXplXCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMudmtDb25maWcuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJwb3B1cFwiLFxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IFwiZnJpZW5kc1wiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCIsXHJcbiAgICAgICAgICAgICAgICB2OiBcIjUuNTJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2FsbHMoKSB7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9ICdncm91cHMuZ2V0TWVtYmVycyc7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBJRCA9IDc2OTIyNzUzO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS52ay5jb20vbWV0aG9kLycrbWV0aG9kTmFtZSsnP2dyb3VwX2lkPScrZ3JvdXBJRCsnJmNhbGxiYWNrPUpTT05fQ0FMTEJBQ0snO1xyXG5cclxuICAgICAgICByZXR1cm4gJGh0dHAuanNvbnAodXJsKS5zdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHZrQXBpU2VsZkZhY3RvcnkoJGh0dHAsIFZLX0NPTkZJRyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyB2a0FwaSgkaHR0cCwgIFZLX0NPTkZJRyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZrQXBpLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIlZLX0NPTkZJR1wiLCBcIkVWRU5UU1wiLCBcIiR0aW1lb3V0XCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoXCJibG9ja3Muc2VydmljZXNcIilcclxuICAgIC5mYWN0b3J5KCd2a0FwaScsIHZrQXBpLnZrQXBpU2VsZkZhY3RvcnkpOyIsIlxyXG5jbGFzcyBBYm91dENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJ0aXRsZVwiO1xyXG4gICAgICAgICRzY29wZS50aXRsZSA9IFwic2NvcGVUaXRsZVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5BYm91dENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiXTtcclxuXHJcblxyXG5hbmd1bGFyLm1vZHVsZShcIlRlc3RBcHAuYWJvdXRcIilcclxuICAgIC5jb250cm9sbGVyKFwiQWJvdXRDb250cm9sbGVyXCIsIEFib3V0Q29udHJvbGxlcik7XHJcbiIsIlxyXG5jbGFzcyBob21lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2a0FwaSl7XHJcbiAgICAgICAgdGhpcy52a0FwaSA9IHZrQXBpO1xyXG4gICAgfVxyXG4gICAgc2lnbkluVmsoKXtcclxuICAgICAgICB0aGlzLnZrQXBpLnNpZ25JbigpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuaG9tZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcInZrQXBpXCJdO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ1Rlc3RBcHAuaG9tZScpXHJcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBob21lQ29udHJvbGxlcik7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
