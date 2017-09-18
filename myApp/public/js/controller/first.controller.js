(function (app) {
    'use strict';
    // loginService
    app.controller('FirstController', function ($scope, $rootScope, $state,$stateParams,SessionStorage,loginService) {
        $rootScope.title = "首页";
        //$scope.p = $stateParams.data;

        $scope.p = SessionStorage.get('data');

    });
})(angular.module('app'));