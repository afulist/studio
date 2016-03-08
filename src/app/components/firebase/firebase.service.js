(function() {
  'use strict';

  angular
    .module('travel')
    .factory('firebase', firebase);

  /** @ngInject */
  function firebase() {
    return {
      root: '',       // set in index.run
      //secret: '',   // set in index.run
      test: test
    };

    function test() {
      return null;
    }
  }
})();
