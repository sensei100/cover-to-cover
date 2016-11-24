(function() { 
  'use strict';

  function BooksController($scope, $window, $state, $stateParams, BookFactory) {
    $scope.bookResults = [];
    $scope.searchTerm = $stateParams.searchTerm;

    $scope.getBooks = function () {
      BookFactory.getBooks($scope.searchTerm)
        .then( function (books) {
        $scope.bookResults = books;
        $scope.orderProp = 'volumeInfo.title';
      });
    }
  };

  BooksController.$inject = ['$scope', '$window', '$state', '$stateParams', 'BookFactory']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
