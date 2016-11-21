(function() { 
  'use strict';

  function AboutController($scope) {
    $scope.name = "test"
  }

  AboutController.$inject = ['$scope']

angular
  .module('app')
  .controller('AboutController', AboutController);

}());