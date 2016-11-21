(function() { 
  'use strict';

  function ProfileController($scope) {
    $scope.name = "test"
  }

  ProfileController.$inject = ['$scope']

angular
  .module('app')
  .controller('ProfileController', ProfileController);

}());