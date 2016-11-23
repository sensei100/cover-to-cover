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

  function BookComponentController(BookFactory, $state) {
    var ctrl = this;

    ctrl.createBook = createBook;
  
  function createBook() {
    return BookFactory.createBook(ctrl.newBook)
        .then(function() {
          $state.go('profile')
        })
    }
  }

  angular
    .module('app')
    .component('book', book)

}());