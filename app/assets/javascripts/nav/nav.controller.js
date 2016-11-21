(function() { 
  'use strict';

  function NavController($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;

    //instantiated info  
    activate();

    //defined methods on the vm
    function activate() {
        getCurrentUser();
    };

    function getCurrentUser() {
        return Auth.currentUser()
                   .then(setCurrentUser);
    };

    function setCurrentUser(user) {
        console.log(user);
        return $scope.user = user;
    };


    Auth.currentUser().then(function (user){
    $scope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
    $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
    });
  }

  NavController.$inject = ['$scope', 'Auth']

angular
  .module('app')
  .controller('NavController', NavController);

}());