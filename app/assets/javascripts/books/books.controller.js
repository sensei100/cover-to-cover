(function() { 
  'use strict';

  function BooksController($scope, BookService) {
   
    $scope.searchTerm = "";

    
    BookService
      .getBooks($scope.searchTerm)
      .then(function (response) {
        console.log(response.data.items);
        $scope.items = response.data.items;
        
      });
  };

  BooksController.$inject = ['$scope', 'BookService']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
