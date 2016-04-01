// (function() {
//   'use strict';

//   angular
//     .module('travel')
//     .controller('HomeLeftMCenterController', HomeLeftMCenterController);

//   /** @ngInject */
//   function HomeLeftMCenterController($log, $mdSidenav) {
//     var vm = this;

//     // ==view data==
//     vm.locations = [
//       { name: '台灣', img: 'img/100-0.jpeg', newMessage: true },
//       { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
//       { name: 'Peter Carlssonsssssssssssssssssssss', img: 'img/100-2.jpeg', newMessage: false }
//     ];

//     // ==view func==
//     vm.init = init;
//     vm.closeSidenav = closeSidenav;

//     // ==init func==
//     init();

//     // ==all func==
//     // init
//     function init() {
//       $log.debug('load HomeLeftMCenterController');
//     }

//     // close Sidenav without click locking
//     function closeSidenav(menuId) {
//       $mdSidenav(menuId).close();
//     }

//   }
// })();
