(function() {

  'use strict';

  function BookService($http) {

  this.getBooks = function (query) {
    return $http.get('https://www.googleapis.com/books/v1/volumes?q=' + query)
    }
  
  this.bookDetails = function (volumeId) {
    return $http.get('https://www.googleapis.com/books/v1/volumes/' + volumeId)
    }
  }

  BookService.$inject = ['$http']

  angular
    .module('app')
    .service('BookService', BookService)

}());