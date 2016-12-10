(function() { 
  'use strict';

  function HomeController(BookFactory, $scope, $filter, Auth) {
    var vm = this;
    vm.signedIn = Auth.isAuthenticated();

    activate();

    function activate() {
      getCurrentUser();
    }

    function getCurrentUser() {
      return Auth.currentUser()
        .then(setCurrentUser);
        }

        function setCurrentUser(user) {
          console.log(user);
            return vm.user = user;
        } 
  }

  HomeController.$inject = ['BookFactory', '$scope', '$filter', 'Auth']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());