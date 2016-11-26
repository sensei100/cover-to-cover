(function() { 
  'use strict';

  function BooksController($scope, BookService) {

    var ctrl = this;
   
    $scope.searchTerm = '';

    
    BookService
      .getBooks({ q: $scope.searchTerm })
      .then(function (response) {
        $scope.searchTerm = BookService.query = response.q;
        console.log(response.data.items);
        $scope.items = response.data.items;
        
      });
  };

  BooksController.$inject = ['$scope', 'BookService']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
