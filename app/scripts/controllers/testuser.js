'use strict';

angular.module('travelApp')
    .controller('TestuserCtrl', function($scope, $http, appData) {
        appData.async().then(function(data) {
            console.log(data);
            $scope.data = data;
        });
    });


angular.module('travelApp')
    .config(function() {
        //$locationProvider, $httpProvider
        //$locationProvider.html5Mode(false);
        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    })
    .factory('appData', function($http) {
        return {
            // async1: function() {
            //     //test api
            //     return $http({
            //         method: 'POST',
            //         url: '/api/test',
            //         data: {
            //             id: 4,
            //             name: 'Kim',
            //             status: 'Friend'
            //         },
            //         headers: {
            //             'Content-type': 'application/json'
            //         }
            //     })
            //         .then(function(response) {
            //             return response.data;
            //         });
            //     //return data;
            // },
            async: function() {
                //test api
                return $http({
                    method: 'POST',
                    url: '/api/test1',
                    data: {
                        token: 'CAALlOYVEzgQBAGBqg5WVBsGZARZAtwI0t9giXB2PI6EOBvbEh1W6ABliWJflZChqPOGyRZBwe48REkgKPn4RfeX7JC3mwfcxUkl7Oc3QsZCuW4tA5pEm0ugocZCHRmYnQ4jzna1gtBs0dpawwJVLLalYnmF7Sjfs4TgDfBygzZAjn0ZCqEq7aP6PWoX9odrfPb7eqMd9wmWeZBwZDZD',
                        userid: 'afulist',
                        email: 'afulist@gmail.com'
                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(function(response) {
                        return response.data;
                    });
                //return data;
            }
        };
        //return appData;
    });
