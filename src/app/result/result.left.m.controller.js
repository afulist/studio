(function() {
  'use strict';

  angular
    .module('travel')
    .controller('ResultLeftMController', ResultLeftMController);

  /** @ngInject */
  function ResultLeftMController($log, $rootScope, $mdSidenav) {
    var vm = this;

    // ==view data==
    vm.locations = [
      { locId: 0, name: '最新', img: 'img/100-0.jpeg', newMessage: true },
      { locId: 1, name: '台灣', img: 'img/100-0.jpeg', newMessage: true },
      { locId: 2, name: '日本', img: 'img/100-1.jpeg', newMessage: false },
      { locId: 3, name: '韓國國國國國國國國國國國國', img: 'img/100-2.jpeg', newMessage: false }
    ];

    // ==view func==
    vm.selectLoc = selectLoc;
    vm.test = test;

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('load HomeLeftMController(m)');
    }

    // close Sidenav without click locking
    function selectLoc(loc, menuId) {
      // scroll to top
      document.getElementById('top').scrollIntoView(true); // eslint-disable-line
      // close nav
      if(menuId) {
        $mdSidenav(menuId).close();
      }
      // broadcast to load plans
      $rootScope.$broadcast('selectLoc', {loc: loc});
    }

    // test
    function test() {
      $log.debug('test');
    }

  }
})();
