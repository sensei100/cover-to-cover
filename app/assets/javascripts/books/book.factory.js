(function() {

  'use strict';

  function BookFactory($http) {
    return {
      getBooks: getBooks
    }

  function getBooks (query) {
    $http.get('https://www.googleapis.com/books/v1/volumes?q=' + query)  
    };
  }; 

  BookFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('BookFactory', BookFactory)

}());