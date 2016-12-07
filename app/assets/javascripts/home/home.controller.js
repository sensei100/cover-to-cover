(function() { 
  'use strict';

  function HomeController(BookFactory, $scope, $filter, Auth) {
    var vm = this;
    vm.signedIn = Auth.isAuthenticated();
    vm.search = '';
    vm.searchRating = '';

    function refilter() {
      if (vm.search && !vm.searchRating) {
        return vm.filteredList = $filter('filter')(vm.books, vm.search)
      }
    }
  }

  HomeController.$inject = ['BookFactory', '$scope', '$filter', 'Auth']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());