(function() { 
  'use strict';

  function BooksController($scope) {
    $scope.name = "test"
  }

  AboutController.$inject = ['$scope']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());