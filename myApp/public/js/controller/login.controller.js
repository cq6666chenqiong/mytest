(function (app) {
    'use strict';
    // loginService
    app.controller('LoginController', function ($scope, $rootScope, $state, $stateParams,SessionStorage,loginService) {
        $rootScope.title = "用户登陆";
        $scope.login = function (user) {
            var promise = loginService.userLogin(user);
            promise.then(function(result){
                $state.go('user',{
                    message : result
                });
            })
        };
    });
})(angular.module('app'));