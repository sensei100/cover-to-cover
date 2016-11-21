(function() { 
  'use strict';

  function HomeController($scope) {
    $scope.name = "test"
  }

  HomeController.$inject = ['$scope']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());