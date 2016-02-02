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

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();


// @if ENV='dev'
// @endif
// @if ENV='stage'
// @endif
// @if ENV='prod'
// @endif