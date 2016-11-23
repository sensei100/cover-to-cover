(function() { 
  'use strict';

  function BooksController($scope, BookFactory) {
    $scope.searchTerm = "";

    $scope.getBooks = function () {
      BookFactory.get({ q: $scope.searchTerm }, function (response) {
        $scope.bookResults = response.items;
        $scope.orderProp = 'volumeInfo.title';
      });
    }
  };

  BooksController.$inject = ['$scope', 'BookFactory']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
