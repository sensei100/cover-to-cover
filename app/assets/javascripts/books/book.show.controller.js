(function() { 
  'use strict';

  function BookShowController($state, $stateParams, Auth, BookFactory) {
    var vm = this;

    Auth.currentUser()
    .then(function(user) {
      vm.user = user;
    });

    activate();

    function activate() {
        getBook();
      }
    
    function getBook() {
      return BookFactory.getBook($stateParams.id)
        .then(setBook)
    }

    function setBook(data) {
       vm.book = data;
    }
}

angular
  .module('app')
  .controller('BookShowController', BookShowController);

}());