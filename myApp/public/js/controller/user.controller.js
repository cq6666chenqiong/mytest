(function (app) {
    'use strict';
    app.controller('UserController', function ($scope, $rootScope, $state, $stateParams, userService, SessionStorage) {
        $rootScope.title = "用户修改";

        $scope.user = $stateParams.data;
        if (!$scope.user) {
            console.log("a");
            $scope.user = SessionStorage.get('user');
        } else {
            SessionStorage.save('user', $scope.user);
        }


        $scope.update = function () {
            var promise = userService.updateUser($scope.user, $scope.user.id);
            promise.then(function (data) {
                alert('update success!');
                SessionStorage.delete('user');
                $state.go('user.main');
            });
        };
    });
})(angular.module('app'));