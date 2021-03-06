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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '首頁';
            mobileFeature.optLeftName = '地區';
            mobileFeature.optRightName = '粉絲團';
            return mobileFeature;
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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '我的規劃';
            mobileFeature.optLeftName = '資料夾';
            mobileFeature.optRightName = '';
            return mobileFeature;
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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '我的收藏';
            mobileFeature.optLeftName = '資料夾';
            mobileFeature.optRightName = '';
            return mobileFeature;
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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '更多';
            mobileFeature.optLeftName = '';
            mobileFeature.optRightName = '';
            return mobileFeature;
          }]
        }
      })

      // search result page
      .state('mainLayout.result', {
        url: '/result/{location}/{keyword}',
        views: {
            // 'leftM@mainLayout': {
            //     templateUrl: 'app/result/result_left_m.html',
            //     controller: 'ResultLeftMController',
            //     controllerAs: 'resultLeftM'
            // },
            // 'left@mainLayout': {
            //     templateUrl: 'app/result/result_left.html',
            //     controller: 'ResultLeftController',
            //     controllerAs: 'resultLeft'
            // },
            'center@mainLayout': {
                templateUrl: 'app/result/result_center.html',
                controller: 'ResultCenterController',
                controllerAs: 'resultCenter'
            },
            'right@mainLayout': {
                templateUrl: 'app/result/result_right.html',
                controller: 'ResultRightController',
                controllerAs: 'resultRight'
            },
            'rightM@mainLayout': {
                templateUrl: 'app/result/result_right_m.html',
                controller: 'ResultRightMController',
                controllerAs: 'resultRightM'
            }
        },
        resolve: {
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '搜尋';
            mobileFeature.optLeftName = '返回';
            mobileFeature.prevState = 'mainLayout.searchm';
            mobileFeature.optRightName = '';
            return mobileFeature;
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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '搜尋';
            mobileFeature.optLeftName = '';
            mobileFeature.optRightName = '';
            return mobileFeature;
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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '首頁';
            mobileFeature.optLeftName = '返回';
            mobileFeature.prevState = 'mainLayout.home';
            mobileFeature.optRightName = '功能';
            return mobileFeature;
          }]
        }
      })

      // plan in myfavor page
      .state('tripLayout.myfavor', {
        url: '/myfavor/{plan}',
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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '我的收藏';
            mobileFeature.optLeftName = '返回';
            mobileFeature.prevState = 'mainLayout.myfavor';
            mobileFeature.optRightName = '功能';
            return mobileFeature;
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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '我的規劃';
            mobileFeature.optLeftName = '返回';
            mobileFeature.prevState = 'mainLayout.myplan';
            mobileFeature.optRightName = '功能';
            return mobileFeature;
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
          mobileFeature: 'mobileFeature',
          initPage: ['mobileFeature', function(mobileFeature){
            mobileFeature.title = '我的規劃';
            mobileFeature.optLeftName = '返回';
            mobileFeature.prevState = 'tripLayout.myplan';
            mobileFeature.optRightName = '功能';
            return mobileFeature;
          }]
        }
      })
      ;

    $urlRouterProvider.otherwise('/home');
  }

})();
