(function() {
  'use strict';

  angular
    .module('travel')
    .factory('mobileTitle', mobileTitle);

  /** @ngInject */
  function mobileTitle() {
    var ios = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) ? true : false;
    return {
      ios: ios,
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
