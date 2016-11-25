(function() { 
  'use strict';

  function BooksController($scope, BookFactory) {
    var ctrl = this;
    $scope.searchTerm = "";

    
    BookFactory
      .getBooks($scope.searchTerm)
      .then(function (response) {
        console.log(response);
        ctrl.books = response;
        
      });
  };

  BooksController.$inject = ['$scope', 'BookFactory']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
