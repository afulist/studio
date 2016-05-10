(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeTripCenterController', HomeTripCenterController);

  /** @ngInject */
  function HomeTripCenterController($log, $rootScope, $scope) {
    var vm = this;

    // ==view data==
    var url = 'https://material.angularjs.org/1.0.6/img/list/60.jpeg';
    vm.userImage = {'background-image':'url('+ url +')'};
    vm.plansSort = [
      { id: 1, name: '看最新'},
      { id: 2, name: '看最多讚'},
      { id: 3, name: '看最多收藏'},
      { id: 4, name: '看最多天'},
      { id: 5, name: '看最少天'}
      //{ id: 1, name: '最多留言最前'}
    ];
    vm.selectedSort = { id: 1, name: '最新在最前'};
    vm.loc = '最新';

    // ==view func==

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      // TODO-load: on event to load plans
      var loadPlans = $rootScope.$on('selectLoc', function(event, args) {
        vm.loc = args.loc.name;
      });
      $scope.$on('$destroy', loadPlans);
    }


  }
})();
