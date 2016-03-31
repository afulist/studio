(function() {
  'use strict';

  angular
    .module('travel')
    .controller('HomeCenterController', HomeCenterController);

  /** @ngInject */
  function HomeCenterController() {
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
