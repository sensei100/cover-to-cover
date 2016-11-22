(function() { 
  'use strict';

  function AuthController($state, Auth) {

    var vm = this;
    var config = {
      headers: {
      'X-HTTP-Method-Override': 'POST'
    }
  };

    vm.login = function() {
    debugger;
    Auth.login(vm.user, config).then(function(){
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