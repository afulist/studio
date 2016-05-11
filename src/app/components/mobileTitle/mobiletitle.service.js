(function() {
  'use strict';

  angular
    .module('travel')
    .factory('mobileTitle', mobileTitle);

  /** @ngInject */
  function mobileTitle() {
    return {
      title: ''
    };
    // function getplans(locObj) {
    //   this.loadLoc = locObj;
    //   return null;
    // }

  }
})();
