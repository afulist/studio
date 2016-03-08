(function() {
  'use strict';

  angular
    .module('travel')
    .config(config);

  /** @ngInject */
  // before run block
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // ==Set options third-party lib==
    // toastrConfig
    angular.extend(toastrConfig, {
      allowHtml: true,
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: false,
      preventOpenDuplicates: false,
      closeButton: true
    });

  }

})();


