(function (app) {
    'use strict';
    app.controller('MainController', function ($scope, $rootScope, $state, SessionStorage, userService) {
        $rootScope.title = "用户列表";
        $scope.updateUser = function (user) {
            SessionStorage.delete('user');
            $state.go('user.update', {data: user});
        };
     });
})(angular.module('app'));