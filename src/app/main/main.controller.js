(function() {
  'use strict';

  angular
    .module('travel')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $firebaseObject) {
    var vm = this;

    var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts"); //eslint-disable-line
    vm.data = $firebaseObject(ref);

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1453453611143;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
