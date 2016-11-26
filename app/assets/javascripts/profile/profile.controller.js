(function() { 
  'use strict';

  function ProfileController($scope, Auth) {

    var ctrl = this;
    ctrl.signedIn = Auth.isAuthenticated();

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
            return ctrl.user = user;
        }
    
  }

  ProfileController.$inject = ['$scope', 'Auth']

angular
  .module('app')
  .controller('ProfileController', ProfileController);

}());