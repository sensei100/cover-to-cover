(function () {
  'use strict';

  var book = {
    transclude: true,
    controller: BookComponentController,
    bindings: {
      name: '@'
    },
    templateUrl: 'profile/components/book-component/book.html'
  }

  function BookComponentController(BookFactory, $state, Auth) {
    var ctrl = this;

    ctrl.getBooks = getBooks;

    activate();

    function activate() {
      getBooks();
      getCurrentUser();
    };
  
    function getBooks() {
      return BookFactory.getBooks()
          .then(setBooks)
    };

    function setBooks(data) {
      ctrl.books = data;              
    }

    function getCurrentUser() {
      return Auth.currentUser()
        .then(setCurrentUser);
        }

        function setCurrentUser(user) {
          console.log(user);
            return ctrl.user = user;
        }
  }

  BookComponentController.$inject = ['BookFactory', '$state', 'Auth']

  angular
    .module('app')
    .component('book', book)

}());