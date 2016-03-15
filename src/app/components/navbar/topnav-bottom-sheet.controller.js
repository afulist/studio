(function() {
  'use strict';

  angular
    .module('travel')
    .controller('TopNavBottomSheetController', TopNavBottomSheetCtrl);

  /** @ngInject */
  function TopNavBottomSheetCtrl($log, $mdBottomSheet) {
    var vm = this;

    // ==view data==

    // ==view func==
    vm.listItemClick = listItemClick;

    // ==all func==
    // click nav item
    function listItemClick(item) {
      $log.debug('listItemClick');
      $mdBottomSheet.hide(item);
    }

  }
})();