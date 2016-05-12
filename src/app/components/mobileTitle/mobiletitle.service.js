(function() {
  'use strict';

  angular
    .module('travel')
    .factory('mobileTitle', mobileTitle);

  /** @ngInject */
  function mobileTitle() {
    return {
      title: '',
      optLeftName: '',
      prevState: '',
      optRightName: ''
    };
    // function getplans(locObj) {
    //   this.loadLoc = locObj;
    //   return null;
    // }
  }
})();
