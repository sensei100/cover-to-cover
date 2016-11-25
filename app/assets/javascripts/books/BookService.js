(function() {

  'use strict';

  function BookService($http) {

  this.getBooks = function () {
    return $http.get('https://www.googleapis.com/books/v1/volumes?q=gardens')

    }
  }

  BookService.$inject = ['$http']

  angular
    .module('app')
    .service('BookService', BookService)

}());