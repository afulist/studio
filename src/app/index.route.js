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
                controller: 'HomeLeftMController',
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
                controller: 'HomeRightController',
                controllerAs: 'homeRight'
            },
            'rightM@main': {
                templateUrl: 'app/home/home_right_m.html',
                controller: 'HomeRightMController',
                controllerAs: 'homeRightM'
            }
        }
      })

      // my plan page
      .state('main.myplan', {
        url: '/myplan',
        views: {
            'leftM@main': {
                templateUrl: 'app/myplan/myplan_left_m.html',
                controller: 'MyplanLeftController',
                controllerAs: 'myplanLeftM'
            },
            'left@main': {
                templateUrl: 'app/myplan/myplan_left.html',
                controller: 'MyplanLeftController',
                controllerAs: 'myplanLeft'
            },
            'center@main': {
                templateUrl: 'app/myplan/myplan_center.html',
                controller: 'MyplanCenterController',
                controllerAs: 'myplanCenter'
            },
            'right@main': {
                templateUrl: 'app/myplan/myplan_right.html',
                controller: 'MyplanRightController',
                controllerAs: 'myplanRight'
            },
            'rightM@main': {
                templateUrl: 'app/myplan/myplan_right_m.html',
                controller: 'MyplanRightController',
                controllerAs: 'myplanRightM'
            }
        }
      })

      // my favor plan page
      .state('main.myfavor', {
        url: '/myfavor',
        views: {
            'leftM@main': {
                templateUrl: 'app/myfavor/myfavor_left_m.html',
                controller: 'MyfavorLeftController',
                controllerAs: 'myfavorLeftM'
            },
            'left@main': {
                templateUrl: 'app/myfavor/myfavor_left.html',
                controller: 'MyfavorLeftController',
                controllerAs: 'myfavorLeft'
            },
            'center@main': {
                templateUrl: 'app/myfavor/myfavor_center.html',
                controller: 'MyfavorCenterController',
                controllerAs: 'myfavorCenter'
            },
            'right@main': {
                templateUrl: 'app/myfavor/myfavor_right.html',
                controller: 'MyfavorRightController',
                controllerAs: 'myfavorRight'
            },
            'rightM@main': {
                templateUrl: 'app/myfavor/myfavor_right_m.html',
                controller: 'MyfavorRightController',
                controllerAs: 'myfavorRightM'
            }
        }
      })
      ;

    $urlRouterProvider.otherwise('/home');
  }

})();
