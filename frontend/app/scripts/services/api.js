'use strict';

angular.module('travelApp')
    .factory('api', function($http) {
        return {
            getPlan: function(keyword, location, planName, userId, order, days, typeBackpacking, typeFree, typeTour, scrollPos, amount) {
                var params = {
                    keyword: 'none',
                    location: location,
                    planName: planName,
                    userId: userId,
                    order: 'new',
                    days: 0,
                    isBackpacking: true,
                    isFree: true,
                    isTour: true,
                    scrollPos: 0,
                    amount: 40
                };
                return $http({
                    method: 'GET',
                    url: 'api/plan/',
                    params: params
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

