(function() { 
  'use strict';

  function HomeController($scope, $filter, Auth) {
    var vm = this;
    vm.signedIn = Auth.isAuthenticated();
    vm.search = '';
    vm.searchRating = '';

    function refilter() {

    }
  }

  HomeController.$inject = ['$scope', '$filter', 'Auth']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());