(function() { 
  'use strict';

  function ProfileController($scope) {
    $scope.name = "test"
  }

  AboutController.$inject = ['$scope']

angular
  .module('app')
  .controller('ProfileController', ProfileController);

}());