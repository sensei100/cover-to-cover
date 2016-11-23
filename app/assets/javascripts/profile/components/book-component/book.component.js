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

    ctrl.addBookReview = addBookReview;
  
  function addBookReview() {
    return BookFactory.addBookReview(ctrl.book)
        .then(function() {
          $state.go('profile')
        })
    }
  }

  angular
    .module('app')
    .component('book', book)

}());