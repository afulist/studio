'use strict';

angular.module('travelApp')
    .controller('HomeLeftCtrl', function($scope, $window, $state) {

        // change searching type
        $scope.changeKey = function(type, desc) {
            $scope.type = type;
            $scope.desc = desc;
            $scope.input = null;
        };
        // init searching type in state
        if ($state.is('main.home')) {
            $scope.changeKey('location', '搜尋地點');
        } else if ($state.is('main.search')) {
            switch ($state.params.type) {
                case 'location':
                    $scope.changeKey('location', '搜尋地點');
                    break;
                case 'planName':
                    $scope.changeKey('planName', '搜尋標題');
                    break;
                case 'userId':
                    $scope.changeKey('userId', '搜尋帳號');
                    break;
                default:
                    $scope.changeKey('location', '搜尋地點');
            }
            // input vaule from router
            $scope.input = $state.params.input;
        }

        // submit keyword
        $scope.submit = function() {
            $state.go('main.search', {
                type: $scope.type,
                input: $scope.input
            });
            $window.scrollTo(0, 0);
        };


    });
