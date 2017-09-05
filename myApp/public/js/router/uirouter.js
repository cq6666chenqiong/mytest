(function (app) {
    'use strict';
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        console.log("come in");
        $stateProvider
            .state('user', {
                //abstract: 'true',
                url: '/user',
                controller:'MenuController',
                templateUrl: '/view/menu.html'
            })
            .state('user.main', {
                url: '/main',
                controller: 'MainController',
                templateUrl: '/view/main.html'
                /*
                ,
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
            });

    });
})(angular.module('app'));