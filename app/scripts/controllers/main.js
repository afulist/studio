'use strict';

angular.module('travelApp')
    .controller('MainCtrl', function($scope, ezfb) {


        //ezfb
        $scope.token = 'none'; //需存在SessionStorage

        $scope.login = function() {
            ezfb.login(function(res) {
                /**
                 * no manual $scope.$apply, I got that handled
                 */
                if (res.authResponse) {
                    updateLoginStatus(updateApiMe);
                }
            }, {
                scope: 'email,user_likes'
            });
        };

        $scope.logout = function() {
            ezfb.logout(function() {
                updateLoginStatus(updateApiMe);
                $scope.token = 'none';
            });
        };

        $scope.share = function() {
            ezfb.ui({
                    method: 'feed',
                    name: 'travel Demo',
                    picture: 'http://4.bp.blogspot.com/-7gskOcynwRk/Ugt-JAzrn3I/AAAAAAAAA3o/2exGxmGpyKU/s1600/Travel+Logo+ntyhn.jpg',
                    link: 'https://128.199.232.70/dist/',
                    description: 'share with your friend' + ' The tarvel website'
                },
                null
            );
        };

        var autoToJSON = ['loginStatus', 'apiMe'];
        angular.forEach(autoToJSON, function(varName) {
            $scope.$watch(varName, function(val) {
                $scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
            }, true);
        });

        function updateLoginStatus(more) {
            ezfb.getLoginStatus(function(res) {
                $scope.loginStatus = res;

                //檢查會員註冊
                if ($scope.loginStatus.status === 'connected') {
                    $scope.token = $scope.loginStatus.authResponse.accessToken;
                }

                (more || angular.noop)();
            });
        }

        function updateApiMe() {
            ezfb.api('/me', function(res) {
                $scope.apiMe = res;
            });
        }

        //進入網頁時先執行登入認證
        updateLoginStatus(updateApiMe);

        //FB Util
        /*
        $rootScope.loggedInUser = {};

        $rootScope.$on('fbLoginSuccess', function(name, response) {
            facebookUser.then(function(user) {
                user.api('/me').then(function(response) {
                    $rootScope.loggedInUser = response;
                });
            });
        });

        $rootScope.$on('fbLogoutSuccess', function() {
            $scope.$apply(function() {
                $rootScope.loggedInUser = {};
            });
        });
        */

    });
