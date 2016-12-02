(function() {

  'use strict';

  function BookService($http) {

  this.getBooks = function (query) {
    return $http.get('https://www.googleapis.com/books/v1/volumes' + query)
    }
  
  this.bookDetails = function (id) {
    return $http.get('https://www.googleapis.com/books/v1/volumes/' + id)
    }
  }

  BookService.$inject = ['$http']

  angular
    .module('app')
    .service('BookService', BookService)

}());