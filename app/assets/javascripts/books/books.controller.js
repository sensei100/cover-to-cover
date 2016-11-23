
(function() { 
  'use strict';

  function BooksController($scope, $stateParams, BookFactory) {
    $scope.bookResults = [];
    $scope.searchTerm = $stateParams.query;

    $scope.getBooks = function () {
      BookFactory.get({ q: $scope.searchTerm }, function (response) {
        $scope.bookResults = response.items;
        $scope.orderProp = 'volumeInfo.title';
      });
    }
  };

  BooksController.$inject = ['$scope', '$stateParams', 'BookFactory']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
