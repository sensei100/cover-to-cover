(function() { 
  'use strict';

  function NavController($scope) {
    $scope.name = "test"
  }

  AboutController.$inject = ['$scope']

angular
  .module('app')
  .controller('NavController', NavController);

}());