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
      .state('tripLayout', {
        templateUrl: 'app/tripLayout/tripLayout.html',
        controller: 'TripLayoutController',
        controllerAs: 'tripLayout'
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
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '首頁';
            return mobileTitle.title;
          }]
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
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '我的規劃';
            return mobileTitle.title;
          }]
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
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '我的收藏';
            return mobileTitle.title;
          }]
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
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '更多';
            return mobileTitle.title;
          }]
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
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '搜尋';
            return mobileTitle.title;
          }]
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
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '搜尋';
            return mobileTitle.title;
          }]
        }
      })

      // plan in home page
      .state('tripLayout.home', {
        url: '/home/{plan}',
        views: {
            'leftM@tripLayout': {
                templateUrl: 'app/homeTrip/homeTrip_left_m.html',
                controller: 'HomeTripLeftMController',
                controllerAs: 'homeTripLeftM'
            },
            'left@tripLayout': {
                templateUrl: 'app/homeTrip/homeTrip_left.html',
                controller: 'HomeTripLeftController',
                controllerAs: 'homeTripLeft'
            },
            'center@tripLayout': {
                templateUrl: 'app/homeTrip/homeTrip_center.html',
                controller: 'HomeTripCenterController',
                controllerAs: 'homeTripCenter'
            },
            'right@tripLayout': {
                templateUrl: 'app/homeTrip/homeTrip_right.html',
                controller: 'HomeTripRightController',
                controllerAs: 'homeTripRight'
            },
            'rightM@tripLayout': {
                templateUrl: 'app/homeTrip/homeTrip_right_m.html',
                controller: 'HomeTripRightMController',
                controllerAs: 'homeTripRightM'
            }
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '首頁';
            return mobileTitle.title;
          }]
        }
      })

      // plan in myplan page
      .state('tripLayout.myplan', {
        url: '/myplan/{plan}',
        views: {
            'leftM@tripLayout': {
                templateUrl: 'app/myplanTrip/myplanTrip_left_m.html',
                controller: 'MyplanTripLeftMController',
                controllerAs: 'myplanTripLeftM'
            },
            'left@tripLayout': {
                templateUrl: 'app/myplanTrip/myplanTrip_left.html',
                controller: 'MyplanTripLeftController',
                controllerAs: 'myplanTripLeft'
            },
            'center@tripLayout': {
                templateUrl: 'app/myplanTrip/myplanTrip_center.html',
                controller: 'MyplanTripCenterController',
                controllerAs: 'myplanTripCenter'
            },
            'right@tripLayout': {
                templateUrl: 'app/myplanTrip/myplanTrip_right.html',
                controller: 'MyplanTripRightController',
                controllerAs: 'myplanTripRight'
            },
            'rightM@tripLayout': {
                templateUrl: 'app/myplanTrip/myplanTrip_right_m.html',
                controller: 'MyplanTripRightMController',
                controllerAs: 'myplanTripRightM'
            }
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '我的規劃';
            return mobileTitle.title;
          }]
        }
      })

      // edit plan in myplan page
      .state('tripLayout.myplan.edit', {
        url: '/edit',
        views: {
            'leftM@tripLayout': {
                templateUrl: 'app/myplanEdit/myplanEdit_left_m.html',
                controller: 'MyplanEditLeftMController',
                controllerAs: 'myplanEditLeftM'
            },
            'left@tripLayout': {
                templateUrl: 'app/myplanEdit/myplanEdit_left.html',
                controller: 'MyplanEditLeftController',
                controllerAs: 'myplanEditLeft'
            },
            'center@tripLayout': {
                templateUrl: 'app/myplanEdit/myplanEdit_center.html',
                controller: 'MyplanEditCenterController',
                controllerAs: 'myplanEditCenter'
            },
            'right@tripLayout': {
                templateUrl: 'app/myplanEdit/myplanEdit_right.html',
                controller: 'MyplanEditRightController',
                controllerAs: 'myplanEditRight'
            },
            'rightM@tripLayout': {
                templateUrl: 'app/myplanEdit/myplanEdit_right_m.html',
                controller: 'MyplanEditRightMController',
                controllerAs: 'myplanEditRightM'
            }
        },
        resolve: {
          mobileTitle: 'mobileTitle',
          initPage: ['mobileTitle', function(mobileTitle){
            mobileTitle.title = '我的規劃';
            return mobileTitle.title;
          }]
        }
      })
      ;

    $urlRouterProvider.otherwise('/home');
  }

})();
