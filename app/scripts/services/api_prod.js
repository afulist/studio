'use strict';

angular.module('travelApp')
    .factory('api', function($http) {
        return {
            getPlan: function() {
                return $http({
                    method: 'GET',
                    url: 'json/plan/'
                });
            },
            getDevice: function() {
                return $http({
                    method: 'GET',
                    url: 'json/device.json'
                });
            }
        };
    });

