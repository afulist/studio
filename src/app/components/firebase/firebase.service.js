(function() {
  'use strict';

  angular
    .module('travel')
    .factory('firebase', firebase);

  /** @ngInject */
  function firebase() {
    return {
      root: '', // set in index.config
      test: test
    };

    function test() {
      return null;
    }
  }
})();
