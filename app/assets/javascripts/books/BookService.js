(function() {

  'use strict';

  function BookService($http) {

  this.getBooks = function (query) {
    return $http.get('https://www.googleapis.com/books/v1/volumes?q=friendship bread' + query)
    }
  
  this.bookDetails = function () {
    return $http.get('https://www.googleapis.com/books/v1/volumes/HgusS4sGYbsC')
    }

    function createBookReview(bookReview) {
      
      var req = {
        method: 'POST',
        url: '/books',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { 
          book: book
        }
      };

        return $http(req)
        .then(handleSuccess)
        .catch(handleError);
        }

    function handleSuccess(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error) 
    }
  }

  BookService.$inject = ['$http']

  angular
    .module('app')
    .service('BookService', BookService)

}());