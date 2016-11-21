(function() { 
  'use strict';

  function AuthController($scope, Auth) {
    }

  AuthController.$inject = ['$scope', 'Auth']

angular
  .module('app')
  .controller('AuthController', AuthController);

}());