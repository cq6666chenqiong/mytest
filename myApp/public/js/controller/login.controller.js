(function (app) {
    'use strict';
    app.controller('LoginController', function ($scope, $rootScope, $state,$stateParams,SessionStorage,loginService) {
        $rootScope.title = "用户登陆";
        $scope.toFirst = function(){
            SessionStorage.save('data','test');
            $state.go('first',{data:'test'});
        }
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