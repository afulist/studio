/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('travel')
    .constant('malarkey', malarkey) // using var malarkey as service from bower
    .constant('moment', moment); // using var moment as service from bower

})();
