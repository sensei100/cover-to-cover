(function() {

  'use strict';

  function BookService($http) {

  this.getBooks = function (query) {
    return $http.get('https://www.googleapis.com/books/v1/volumes?q=' + query)
    }
  }

  BookService.$inject = ['$http']

  angular
    .module('app')
    .service('BookService', BookService)

}());