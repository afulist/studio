'use strict';

angular.module('travelApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    //'ngRoute',
    'ui.router',
    'ui.bootstrap',
    'mgcrea.ngStrap',
    //'facebookUtils',
    'ezfb'
])
    .config(function($httpProvider, $interpolateProvider) {
        // Differentiate Angular templates symbols from Django ones
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
        // Change the default Angular Content-type header used in POST method
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        //$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
        //$httpProvider.defaults.headers['delete']['Content-Type'] = 'application/x-www-form-urlencoded';
        // set default headers in order to use Django helper method is_ajax() in views @ng1.2
        //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // set csrftoken
        //$httpProvider.defaults.xsrfCookieName = 'csrftoken';
        //$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        //$httpProvider.defaults.withCredentials = true;
    })

.run([
    '$http',
    '$cookies',
    function($http, $cookies) {
        // for dev
        //$cookies.csrftoken = 'NGjNP9QHvVvK0Cu9BaxO2URHWvNvWgWe';
        // Assign the CSFR token to each ajax call automagically @ng1.2.10
        //$http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
        //$http.defaults.headers.put['X-CSRFToken'] = $cookies.csrftoken;
        //$http.defaults.headers['delete']['X-CSRFToken'] = $cookies.csrftoken;
        $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
    }
])

.config(function(ezfbProvider) {
    ezfbProvider.setLocale('zh_TW');
    ezfbProvider.setInitParams({
        //appId: '319421514878138' //for localhost by afulist
        appId: '814985165196804' //for 128.199.232.70 by afulist
        //appId: '1495760890652705' //for 128.199.232.70 by ming
    });
})
/*
  .constant('facebookConfigSettings', {
    'appID'          : '814985165196804'
  })
  */
// .config(function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'views/main/',
//       controller: 'MainCtrl'
//     })
//     .when('/test', {
//       templateUrl: 'views/test/',
//       controller: 'TestuserCtrl'
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
// });
//
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/')
        .otherwise('/');

    $stateProvider

    // navigate
    .state('main', {
        url: '',
        templateUrl: 'views/main/',
        controller: 'MainCtrl'

    })

    // homepage
    .state('main.home', {
        url: '/',
        views: {
            'main@main': {
                templateUrl: 'views/home/',
                controller: 'HomeCtrl'
            },
            'homeleft@main.home': {
                templateUrl: 'views/homeleft/',
                controller: 'HomeLeftCtrl'
            },
            'homeright@main.home': {
                templateUrl: 'views/homeright/',
                controller: 'HomeRightCtrl'
            }
        }
    })

    // search
    .state('main.search', {
        url: '/search/{type}/{input}',
        views: {
            'main@main': {
                templateUrl: 'views/home/',
                controller: 'HomeCtrl'
            },
            'homeleft@main.search': {
                templateUrl: 'views/homeleft/',
                controller: 'HomeLeftCtrl'
            },
            'homeright@main.search': {
                templateUrl: 'views/homeright/',
                controller: 'HomeRightCtrl'
            }
        }
    })

    // plan
    .state('main.plan', {
        url: '/plan/{planId:[0-9]{1,10}}',
        views: {
            'main@main': {
                templateUrl: 'views/plan/',
                controller: 'PlanCtrl'
            },
            'planleft@main.plan': {
                templateUrl: 'views/planleft/',
                controller: 'PlanLeftCtrl'
            },
            'planright@main.plan': {
                templateUrl: 'views/planright/',
                controller: 'PlanRightCtrl'
            },
            'comment@main.plan': {
                templateUrl: 'views/comment/',
                controller: 'CommentCtrl'
            }
        }
    })

    // favor
    .state('main.favor', {
        url: '/favor',
        views: {
            'main@main': {
                templateUrl: 'views/favor/',
                controller: 'FavorCtrl'
            },
            'favorleft@main.favor': {
                templateUrl: 'views/favorleft/',
                controller: 'FavorLeftCtrl'
            },
            'favorright@main.favor': {
                templateUrl: 'views/favorright/',
                controller: 'FavorRightCtrl'
            }
        }
    })

    // my
    .state('main.my', {
        url: '/my',
        views: {
            'main@main': {
                templateUrl: 'views/my/',
                controller: 'MyCtrl'
            },
            'myleft@main.my': {
                templateUrl: 'views/myleft/',
                controller: 'MyLeftCtrl'
            },
            'myright@main.my': {
                templateUrl: 'views/myright/',
                controller: 'MyRightCtrl'
            }
        }
    })

    // my plan
    .state('main.my.plan', {
        url: '/{myPlanId:[0-9]{1,10}}',
        views: {
            'main@main': {
                templateUrl: 'views/myplan/',
                controller: 'MyplanCtrl'
            },
            'myplanleft@main.my.plan': {
                templateUrl: 'views/myplanleft/',
                controller: 'MyplanLeftCtrl'
            },
            'myplanright@main.my.plan': {
                templateUrl: 'views/myplanright/',
                controller: 'MyplanRightCtrl'
            },
            'comment@main.my.plan': {
                templateUrl: 'views/comment/',
                controller: 'CommentCtrl'
            }
        }
    })

    // edit my plan
    .state('main.my.plan.edit', {
        url: '/edit',
        views: {
            'main@main': {
                templateUrl: 'views/edit/',
                controller: 'EditCtrl'
            },
            'editleft@main.my.plan.edit': {
                templateUrl: 'views/editleft/',
                controller: 'EditLeftCtrl'
            },
            'editright@main.my.plan.edit': {
                templateUrl: 'views/editright/',
                controller: 'EditRightCtrl'
            },
            'comment@main.my.plan.edit': {
                templateUrl: 'views/comment/',
                controller: 'CommentCtrl'
            }
        }
    })

    // test
    .state('main.test', {
        url: '/test',
        views: {
            'main@main': {
                templateUrl: 'views/test/',
                controller: 'TestuserCtrl'
            }
        }
    });

});
