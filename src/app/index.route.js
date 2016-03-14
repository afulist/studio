(function() {
  'use strict';

  angular
    .module('travel')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      // main page
      .state('main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      // home page
      .state('main.home', {
        url: '/home',
        views: {
            'leftM@main': {
                templateUrl: 'app/home/home_left_m.html',
                controller: 'HomeLeftMCenterController',
                controllerAs: 'homeLeftM'
            },
            'left@main': {
                templateUrl: 'app/home/home_left.html',
                controller: 'HomeLeftController',
                controllerAs: 'homeLeft'
            },
            'center@main': {
                templateUrl: 'app/home/home_center.html',
                controller: 'HomeCenterController',
                controllerAs: 'homeCenter'
            },
            'right@main': {
                templateUrl: 'app/home/home_right.html',
                controller: 'HomeRightCenterController',
                controllerAs: 'homeRight'
            },
            'rightM@main': {
                templateUrl: 'app/home/home_right_m.html',
                controller: 'HomeRightMCenterController',
                controllerAs: 'homeRightM'
            }
        }
      })
      ;

    $urlRouterProvider.otherwise('/home');
  }

})();
