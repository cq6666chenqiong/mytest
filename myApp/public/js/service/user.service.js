(function (app) {
    'use strict';
    app.factory('userService', function ($http, $q) {
        return {
            getAllUsers: function () {
                var url = "http://localhost:3000/api/user/all";
                var deferred = $q.defer();
                $http.get(url).then(
                    function success(respData) {
                        var users = respData.data;
                        deferred.resolve(users);
                    },
                    function error(reason) {
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            },
            updateUser: function (user, id) {
                var url = "http://localhost:3000/api/user/" + id;
                var deferred = $q.defer();
                $http.put(url, user).then(
                    function success(respData) {
                        var user = respData.data;
                        deferred.resolve(user);
                    },
                    function error(reason) {
                        deferred.reject(reason);
                    }
                );
                return deferred.promise;
            }
        }
    });
})(angular.module('app'));