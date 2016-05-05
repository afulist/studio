(function() {
  'use strict';

  angular
    .module('travel')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      // main layout
      .state('mainLayout', {
        templateUrl: 'app/mainLayout/mainlayout.html',
        controller: 'MainLayoutController',
        controllerAs: 'mainLayout'
      })

      // plan layout
      .state('planLayout', {
        templateUrl: 'app/planLayout/planlayout.html',
        controller: 'PlanLayoutController',
        controllerAs: 'planLayout'
      })

      /*====================================*/

      // home page
      .state('mainLayout.home', {
        url: '/home',
        views: {
            'leftM@mainLayout': {
                templateUrl: 'app/home/home_left_m.html',
                controller: 'HomeLeftMController',
                controllerAs: 'homeLeftM'
            },
            'left@mainLayout': {
                templateUrl: 'app/home/home_left.html',
                controller: 'HomeLeftController',
                controllerAs: 'homeLeft'
            },
            'center@mainLayout': {
                templateUrl: 'app/home/home_center.html',
                controller: 'HomeCenterController',
                controllerAs: 'homeCenter'
            },
            'right@mainLayout': {
                templateUrl: 'app/home/home_right.html',
                controller: 'HomeRightController',
                controllerAs: 'homeRight'
            },
            'rightM@mainLayout': {
                templateUrl: 'app/home/home_right_m.html',
                controller: 'HomeRightMController',
                controllerAs: 'homeRightM'
            }
        }
      })

      // my plan page
      .state('mainLayout.myplan', {
        url: '/myplan',
        views: {
            'leftM@mainLayout': {
                templateUrl: 'app/myplan/myplan_left_m.html',
                controller: 'MyplanLeftMController',
                controllerAs: 'myplanLeftM'
            },
            'left@mainLayout': {
                templateUrl: 'app/myplan/myplan_left.html',
                controller: 'MyplanLeftController',
                controllerAs: 'myplanLeft'
            },
            'center@mainLayout': {
                templateUrl: 'app/myplan/myplan_center.html',
                controller: 'MyplanCenterController',
                controllerAs: 'myplanCenter'
            },
            'right@mainLayout': {
                templateUrl: 'app/myplan/myplan_right.html',
                controller: 'MyplanRightController',
                controllerAs: 'myplanRight'
            },
            'rightM@mainLayout': {
                templateUrl: 'app/myplan/myplan_right_m.html',
                controller: 'MyplanRightMController',
                controllerAs: 'myplanRightM'
            }
        }
      })

      // my favor plan page
      .state('mainLayout.myfavor', {
        url: '/myfavor',
        views: {
            'leftM@mainLayout': {
                templateUrl: 'app/myfavor/myfavor_left_m.html',
                controller: 'MyfavorLeftMController',
                controllerAs: 'myfavorLeftM'
            },
            'left@mainLayout': {
                templateUrl: 'app/myfavor/myfavor_left.html',
                controller: 'MyfavorLeftController',
                controllerAs: 'myfavorLeft'
            },
            'center@mainLayout': {
                templateUrl: 'app/myfavor/myfavor_center.html',
                controller: 'MyfavorCenterController',
                controllerAs: 'myfavorCenter'
            },
            'right@mainLayout': {
                templateUrl: 'app/myfavor/myfavor_right.html',
                controller: 'MyfavorRightController',
                controllerAs: 'myfavorRight'
            },
            'rightM@mainLayout': {
                templateUrl: 'app/myfavor/myfavor_right_m.html',
                controller: 'MyfavorRightMController',
                controllerAs: 'myfavorRightM'
            }
        }
      })

      // more page
      .state('mainLayout.more', {
        url: '/more/{user}',
        views: {
            'center@mainLayout': {
                templateUrl: 'app/more/more_center.html',
                controller: 'MoreCenterController',
                controllerAs: 'moreCenter'
            }
        }
      })

      // search result page
      .state('mainLayout.result', {
        url: '/result',
        views: {
            'center@mainLayout': {
                templateUrl: 'app/result/result_center.html',
                controller: 'ResultCenterController',
                controllerAs: 'resultCenter'
            }
        }
      })

      // search_m page
      .state('mainLayout.searchm', {
        url: '/searchm',
        views: {
            'center@mainLayout': {
                templateUrl: 'app/searchm/searchm_center.html',
                controller: 'SearchMCenterController',
                controllerAs: 'searchmCenter'
            }
        }
      })

      // plan in home page
      .state('planLayout.home', {
        url: '/home/{plan}',
        views: {
            'leftM@planLayout': {
                templateUrl: 'app/homePlan/homePlan_left_m.html',
                controller: 'HomePlanLeftMController',
                controllerAs: 'homePlanLeftM'
            },
            'left@planLayout': {
                templateUrl: 'app/homePlan/homePlan_left.html',
                controller: 'HomePlanLeftController',
                controllerAs: 'homePlanLeft'
            },
            'center@planLayout': {
                templateUrl: 'app/homePlan/homePlan_center.html',
                controller: 'HomePlanCenterController',
                controllerAs: 'homePlanCenter'
            },
            'right@planLayout': {
                templateUrl: 'app/homePlan/homePlan_right.html',
                controller: 'HomePlanRightController',
                controllerAs: 'homePlanRight'
            },
            'rightM@planLayout': {
                templateUrl: 'app/homePlan/homePlan_right_m.html',
                controller: 'HomePlanRightMController',
                controllerAs: 'homePlanRightM'
            }
        }
      })

      // TODO: plan in myplan page

      // TODO: edit plan in myplan page
      ;

    $urlRouterProvider.otherwise('/home');
  }

})();
