(function() {

  'use strict';

  function BookFactory($http) {

    return {
      getBooks: getBooks,
      createBook: createBook
    }

    function getBooks() {
      return $http.get('/books')
        .then(handleSuccess)
        .catch(handleError)
    }

    function createBook(book, user) {
      
      var req = {
        method: 'POST',
        url: '/books',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { 
          book: book,
          user: user.id
        }
      };

        return $http(req)
        .then(handleSuccess)
        .catch(handleError);
        }

    

    /*function updateBook(Book) {
      var req = {
        method: 'PATCH',
        url: '/Books/' + Book.id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          Book: Book
        }
      }
      return $http(req)
        .then(handleSuccess)
        .catch(handleError);
    }

    function destroyBook(id) {
      return $http.delete('/Books/' + id)
        .then(handleSuccess)
        .catch(handleError); 

    } */
    
    function handleSuccess(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error) 
    } 

  }

  BookFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('BookFactory', BookFactory)

}());