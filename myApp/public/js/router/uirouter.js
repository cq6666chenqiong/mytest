(function (app) {
    'use strict';
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        console.log("come in");
        $stateProvider
            .state('user', {
                url: '/user',
                controller:'MenuController',
                templateUrl: '/view/menu.html',
                params: {
                    message: null
                }
            })
            .state('user.main', {
                url: '/main',
                controller: 'MainController',
                templateUrl: '/view/main.html',
                params: {
                    users: null
                }
                /*
                resolve: {
                    'users': function (UserService) {
                        console.log("st  dddd");
                        return UserService.getAllMovies();
                    }
                }
                */

            })
            .state('user.update', {
                url: '/update',
                controller: 'UserController',
                templateUrl: '/view/update.html',
                params: {
                    data: null
                }
            })
            .state('first', {
                url: '/first',
                controller: 'FirstController',
                templateUrl: '/view/first.html',
                params: {
                    data: null
                }
            });

    });
})(angular.module('app'));