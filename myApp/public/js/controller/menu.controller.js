(function (app) {
    'use strict';
    app.controller('MenuController', function ($scope, $rootScope, $state, $stateParams, userService, SessionStorage) {
        $rootScope.title = '用户管理';
        $scope.message = $stateParams.message;

        $scope.goTomain = function () {
            var promise = userService.getAllUsers();
            promise.then(function(result){
                $state.go('user.main',{users : result});
            });
        };
    });
})(angular.module('app'));