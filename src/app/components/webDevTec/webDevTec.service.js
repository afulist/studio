(function() {
  'use strict';

  angular
      .module('travel')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'AngularJS'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
