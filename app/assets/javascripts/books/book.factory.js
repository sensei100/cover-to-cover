(function() {

  'use strict';

  function BookFactory($http) {

  var getBooks = function (query) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + query,
      }).then( function success(response) {
        return response.data.items;
      }, function error(response) {
        console.log(response);
      }); 
    };

    return {
      getBooks: getBooks
    }
  }; 

  BookFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('BookFactory', BookFactory)

}());