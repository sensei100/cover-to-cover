(function() {

  'use strict';

  function BookFactory($http, $q) {

    var deferred = $q.defer();
    

    function getBooks (query) {
      $http.get('https://www.googleapis.com/books/v1/volumes?q=' + query)  
      };
  }; 

  BookFactory.$inject = ['$http', '$q']

  angular
    .module('app')
    .factory('BookFactory', BookFactory)

}());