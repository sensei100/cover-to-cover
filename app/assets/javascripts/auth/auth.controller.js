(function() { 
  'use strict';

  function AuthController($scope) {
    $scope.name = "test"
  }

  AboutController.$inject = ['$scope']

angular
  .module('app')
  .controller('AuthController', AuthController);

}());