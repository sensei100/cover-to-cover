(function() { 
  'use strict';

  function BooksController($scope) {
    $scope.name = "test"
  }

  BooksController.$inject = ['$scope']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());