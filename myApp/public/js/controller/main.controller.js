(function (app) {
    'use strict';
    app.controller('MainController', function ($scope, $rootScope, $state, SessionStorage, $stateParams, userService) {
        $rootScope.title = "用户列表";
        $scope.show = function(){
            alert($scope.users);
        }
        $scope.users = $stateParams.users;
        $scope.updateUser = function (user) {
            SessionStorage.delete('user');
            $state.go('user.update', {data: user});
        };
     });
})(angular.module('app'));