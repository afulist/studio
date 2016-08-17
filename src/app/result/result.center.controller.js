(function() {
  'use strict';

  angular
    .module('travel')
    .controller('ResultCenterController', ResultCenterController);

  /** @ngInject */
  function ResultCenterController() {
    var vm = this;

    // ==view data==
    var url = 'https://material.angularjs.org/1.0.6/img/list/60.jpeg';
    vm.userImage = {'background-image':'url('+ url +')'};
    vm.plansSort = [
      { id: 1, name: '顯示最多100個'},
      { id: 2, name: '顯示最多200個'},
      { id: 2, name: '顯示最多300個'}
    ];
    vm.selectedSort = { id: 1, name: '最新在最前'};
    vm.loc = '最新';

    // ==view func==

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {

    }


  }
})();
