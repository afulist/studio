'use strict';

angular.module('travelApp')
    .filter('ellipsis', function() {
        return function(text, length) {
            if (text.length > length) {
                return text.substr(0, length) + '...';
            }
            return text;
        };
    });
