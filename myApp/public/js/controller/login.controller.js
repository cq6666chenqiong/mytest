(function (app) {
    'use strict';
    // loginService
    app.controller('LoginController', function ($scope, $rootScope, $state, $stateParams,SessionStorage,loginService) {
        $rootScope.title = "用户登陆";
        //$scope.user = $stateParams.data;
        /*
        if (!$scope.user) {
            console.log("a");
            $scope.user = SessionStorage.get('user');
        } else {
            SessionStorage.save('user', $scope.user);
        }
        */
        $scope.login = function (user) {
            alert(JSON.stringify(user));
            loginService.userLogin(user);
            $state.go('user');
        };
    });
})(angular.module('app'));