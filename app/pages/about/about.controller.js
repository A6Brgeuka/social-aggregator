
class AboutController {
    constructor($scope){
        this.title = "title";
        $scope.title = "scopeTitle";
    }
}

AboutController.$inject = ["$scope"];


angular.module("superApp.about")
    .controller("AboutController", AboutController);
