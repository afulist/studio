(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeCenterController', HomeCenterController);

  /** @ngInject */
  function HomeCenterController($log, moment) {
    var vm = this;

    // ==view data==
    var url = 'https://material.angularjs.org/1.0.6/img/list/60.jpeg';
    vm.userImage = {'background-image':'url('+ url +')'};

    // ==view func==
    vm.init = init;

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {

    }


  }
})();
