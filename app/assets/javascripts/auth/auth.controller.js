(function() { 
  'use strict';

  function AuthController($state, Auth) {

    var vm = this;

    vm.login = function() {
    Auth.login(vm.user).then(function(){
      $state.go('home');
    });
  };

    vm.register = function() {
    Auth.register(vm.user).then(function(){
      $state.go('home');
    });
  };

}

  AuthController.$inject = ['$state', 'Auth']

angular
  .module('app')
  .controller('AuthController', AuthController);

}());