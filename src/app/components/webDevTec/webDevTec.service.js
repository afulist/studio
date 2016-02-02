(function() {
  'use strict';

  angular
      .module('travel')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
