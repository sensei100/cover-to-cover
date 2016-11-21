(function() { 
  'use strict';

  function NavController($scope) {
    $scope.name = "test"
  }

  NavController.$inject = ['$scope']

angular
  .module('app')
  .controller('NavController', NavController);

}());