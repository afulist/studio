'use strict';

angular.module('travelApp')
    .factory('api', function($http) {
        return {
            getPlan: function(keyword, location, planName, userId, order, days, typeBackpacking, typeFree, typeTour, scrollPos, amount) {
                var params = {
                    keyword: keyword,
                    location: location,
                    planName: planName,
                    userId: userId,
                    order: order,
                    days: days,
                    typeBackpacking: typeBackpacking,
                    typeFree: typeFree,
                    typeTour: typeTour,
                    scrollPos: scrollPos,
                    amount: amount
                };
                return $http({
                    method: 'GET',
                    url: 'json/plan.json',
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

