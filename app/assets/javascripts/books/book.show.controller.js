(function() { 
  'use strict';

  function BookShowController($state, $stateParams, Auth, BookFactory) {
    var vm = this;
    vm.getBook = getBook;

    Auth.currentUser()
    .then(function(user) {
      vm.user = user;
    });

    activate();

    function activate() {
        getBook($stateParams.id);
      }
    
    function getBook(id) {
      return BookFactory.getBook(id)
        .then(setBook)
    }

    function setBook(data) {
      return vm.book = data;
    }
}

angular
  .module('app')
  .controller('BookShowController', BookShowController);

}());