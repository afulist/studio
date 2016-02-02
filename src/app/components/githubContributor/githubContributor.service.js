(function() {
  'use strict';

  angular
    .module('travel')
    .factory('githubContributor', githubContributor);

  /** @ngInject */
  function githubContributor() {
    return {
      apiHost: 'https://api.github.com/repos/Swiip/generator-gulp-angular',
      getContributors: getContributors
    };

    function getContributors() {
      return null;
    }
  }
})();
