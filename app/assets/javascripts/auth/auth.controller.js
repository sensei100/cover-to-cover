(function() { 
  'use strict';

  function AuthController($scope, $state, Auth) {

    $scope.login = function() {
    
    Auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

    $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

}

  AuthController.$inject = ['$scope', '$state', 'Auth']

angular
  .module('app')
  .controller('AuthController', AuthController);

}());