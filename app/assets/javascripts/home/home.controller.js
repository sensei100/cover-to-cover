(function() { 
  'use strict';

  function HomeController($scope) {
    $scope.name = "test"
  }

  AboutController.$inject = ['$scope']

angular
  .module('app')
  .controller('HomeController', HomeController);

}());