'use strict';

angular.module('travelApp')
    .controller('FavorLeftCtrl', function($scope) {

      $scope.searchKey = '搜尋地點';
      $scope.changeKey = function(key) {
        $scope.searchKey = key;
      };

    });
