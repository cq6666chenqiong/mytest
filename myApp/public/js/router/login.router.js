(function (app) {
    'use strict';
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        console.log("come in");
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: '/view/login.html',
                params: {
                    data: null
                }
            });
    });
})(angular.module('app'));