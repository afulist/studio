(function() {
  'use strict';

  angular
    .module('travel')
    .config(config);

  /** @ngInject */
  // before run block: Provider Setting
  function config($logProvider, $mdThemingProvider, toastrConfig) {
    // ==Set options ==
    // console log config
    /* @if ENV='dev' */
    // Enable log
    $logProvider.debugEnabled(true);
    /* @endif */
    /* @if ENV='stage' **
    // Enable log
    $logProvider.debugEnabled(false);
    /* @endif */
    /* @if ENV='prod' **
    // Enable log
    $logProvider.debugEnabled(false);
    /* @endif */

    // ==Set options third-party lib==
    // angular material config
    $mdThemingProvider.theme('default') // .dark();
      .primaryPalette('indigo', {
        'default': '400', // by default use shade 500 from the pink palette for primary intentions
        'hue-1': '300', // use shade 300 for the <code>md-hue-1</code> class
        'hue-2': '800', // use shade 800 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
      .accentPalette('green', {
        'default': 'A200', // by default use shade A200 from the pink palette for primary intentions
        'hue-1': 'A100', // use shade A100 for the <code>md-hue-1</code> class
        'hue-2': 'A400', // use shade A400 for the <code>md-hue-2</code> class
        'hue-3': 'A700' // use shade A700 for the <code>md-hue-3</code> class
      })
      .warnPalette('red', {
        'default': '500', // by default use shade 500 from the pink palette for primary intentions
        'hue-1': '300', // use shade 300 for the <code>md-hue-1</code> class
        'hue-2': '800', // use shade 800 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
      .backgroundPalette('grey');

    // toastr config
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


