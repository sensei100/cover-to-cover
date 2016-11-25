(function() { 
  'use strict';

  function BooksController($scope, BookService) {
   
    $scope.searchTerm = "";

    
    BookService
      .getBooks()
      .then(function (response) {
        console.log(response);
        $scope.items = response.data.items;
        
      });
  };

  BooksController.$inject = ['$scope', 'BookService']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
