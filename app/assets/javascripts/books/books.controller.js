(function() { 
  'use strict';

  function BooksController($scope, BookFactory) {
    var ctrl = this;
    ctrl.items = [];
    $scope.searchTerm = "";

    
    BookFactory
      .getBooks($scope.searchTerm)
      .then(function (response) {
        console.log(response);
        return ctrl.items = response.data;
        
      });
  };

  BooksController.$inject = ['$scope', 'BookFactory']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
