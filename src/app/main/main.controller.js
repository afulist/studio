(function() {
  'use strict';

  angular
    .module('travel')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $mdSidenav) {
    var vm = this;

    // ==view data==
    //vm.relativeDate = moment(1453453611143).fromNow();

    // ==view func==
    vm.toggleSide = toggleSide;
    //vm.fire = fire;

    // ==init func==
    init();

    // ==all func==
    // init
    function init() {
      // test toastr
      //toastr.success('page load');
    }

    // Hide or Show sideNav area
    function toggleSide(sideNavId) {
      $mdSidenav(sideNavId).toggle();
    }

    // TODO-fb: test firebase
    /*function fire() {
      $log.info('test firebase');
      var ref = new Firebase(firebase.root); //eslint-disable-line
      // grant full read / write access by Firebase Secret
      ref.authWithCustomToken(firebase.secret, function(error, authData) {
        if (error) {
          $log.debug("Authentication Failed!", error);
        } else {
          $log.debug("Authenticated successfully with payload:", authData);
        }
      });
      // assign ng data
      vm.env = $firebaseObject(ref.child('test'));

      // Three-Way Binding
      var ref2 = new Firebase("https://popping-fire-6571.firebaseio.com/users"); //eslint-disable-line
      // assign ng data
      vm.users = $firebaseArray(ref2);
      var obj = $firebaseObject(ref2.child('gracehop'));
      obj.$bindTo($scope, "bt").then(function() {
        //$scope.data.nickname = "baz";  // will be saved to the database
        //ref2.set({ nickname: "baz" });  // this would update the database and $scope.data
      });
    }*/

  }
})();
