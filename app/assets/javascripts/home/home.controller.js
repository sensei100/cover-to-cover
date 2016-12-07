(function() { 
  'use strict';

  function HomeController(BookFactory, $scope, $filter, Auth) {
    var vm = this;
    vm.signedIn = Auth.isAuthenticated();
    
  }

  HomeController.$inject = ['BookFactory', '$scope', '$filter', 'Auth']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());