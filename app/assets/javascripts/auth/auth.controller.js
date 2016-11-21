(function() { 
  'use strict';

  function AuthController($scope) {
    $scope.name = "test"
  }

  AuthController.$inject = ['$scope']

angular
  .module('app')
  .controller('AuthController', AuthController);

}());