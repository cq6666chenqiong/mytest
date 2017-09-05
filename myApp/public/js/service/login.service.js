(function (app) {
    'use strict';
    app.factory('loginService', function ($http, $q) {
        return {
            userLogin: function (user) {
                var url = "http://192.168.5.121:3000/pub/login?name="+user.name + "&password="+user.password;
                var deferred = $q.defer();
                $http.get(url).then(
                    function success(respData) {
                        var message = respData.data;
                        alert(message);
                        deferred.resolve(message);
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