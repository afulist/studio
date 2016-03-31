(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeLeftController', HomeLeftController);

  /** @ngInject */
  function HomeLeftController($log) {
    var vm = this;

    // ==view data==
    vm.locations = [
      { name: '最新', img: 'img/100-0.jpeg', newMessage: true },
      { name: '台灣', img: 'img/100-0.jpeg', newMessage: true },
      { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
      { name: 'Peter Carlssonsssssssssssssssssssss', img: 'img/100-2.jpeg', newMessage: false }
    ];

    // ==view func==
    vm.init = init;

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      $log.debug('load controller');
    }

  }
})();
