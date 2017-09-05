(function (app) {
    'use strict';
    app.controller('MenuController', function ($scope, $rootScope, $state, $stateParams, userService, SessionStorage) {
        $rootScope.title = '用户管理';
        //var users = JSON.parse("[{id:1,name:'abc',age:16,job:'worker',genre:'man'}]");
        //$scope.users = [{id:1,name:'abc',age:16,job:'worker',genre:'man'}];
        $scope.goTomain = function () {
            /*
            $scope.users = [{id:1,name:'abc',age:16,job:'worker',genre:'man'},
                {id:2,name:'cba',age:18,job:'worker1',genre:'woman'},
            ];
            */
            $state.go('user.main',{
                data: {users:[
                    {id:1,name:'abc',age:16,job:'worker',genre:'man'},
                    {id:2,name:'cba',age:18,job:'worker1',genre:'woman'},
                ]}
            });
        };
    });
})(angular.module('app'));