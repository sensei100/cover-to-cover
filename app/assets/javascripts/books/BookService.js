(function() {

  'use strict';

  function BookService($http) {

  this.getBooks = function (query) {
    return $http.get('https://www.googleapis.com/books/v1/volumes?q=friendship bread' + query)
    }
  
  this.bookDetails = function () {
    return $http.get('https://www.googleapis.com/books/v1/volumes/HgusS4sGYbsC')
    }
  }

  BookService.$inject = ['$http']

  angular
    .module('app')
    .service('BookService', BookService)

}());