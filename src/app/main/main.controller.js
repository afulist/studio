(function() {
  'use strict';

  angular
    .module('travel')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, firebase, $firebaseObject, $firebaseArray) {
    var vm = this;

    var fb = new Firebase(firebase.root); //eslint-disable-line
    // grant full read / write access by Firebase Secret
    fb.authWithCustomToken(firebase.secret, function(error, authData) {
      if (error) {
        console.log("Authentication Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
    vm.env = $firebaseObject(fb);

    // test Three-Way Binding
    var ref = new Firebase("https://popping-fire-6571.firebaseio.com/users"); //eslint-disable-line
    var obj = $firebaseObject(ref.child('gracehop'));
    obj.$bindTo($scope, "bt").then(function() {
      //$scope.data.nickname = "baz";  // will be saved to the database
      //ref.set({ nickname: "baz" });  // this would update the database and $scope.data
    });
    // test $firebaseArray
    vm.users = $firebaseArray(ref);

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
