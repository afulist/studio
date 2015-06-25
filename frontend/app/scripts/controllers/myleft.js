'use strict';

angular.module('travelApp')
    .controller('MyLeftCtrl', function($scope) {

      $scope.searchKey = '搜尋地點';
      $scope.changeKey = function(key) {
        $scope.searchKey = key;
      };

    });
