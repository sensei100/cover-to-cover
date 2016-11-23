(function() { 
  'use strict';

  function BooksController($scope, $state, $stateParams, BookFactory) {

    var vm = this;

    vm.bookResults = [];
    vm.searchTerm = $stateParams.searchTerm;

    function getBooks() {
      return BookFactory.getBooks(vm.searchTerm)
        .then(function (response) {
        vm.bookResults = response;
        vm.orderProp = 'volumeInfo.title';
      });
    }
  };

  BooksController.$inject = ['$scope', '$state', '$stateParams', 'BookFactory']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
