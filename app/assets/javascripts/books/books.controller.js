(function() { 
  'use strict';

  function BooksController($scope, $state, $stateParams, BookService, Auth, BookFactory) {

    var vm = this;
    vm.books;
    vm.getBooks = getBooks;
    vm.bookDetails = bookDetails;
    vm.signedIn = Auth.isAuthenticated();
    vm.searchTerm = '';
    vm.createBook = createBook;
    $scope.$state = $state;

    $scope.goBack = function() { 
      window.history.back();
    };

    activate();

    function activate() {
      getCurrentUser();
    }

    function getCurrentUser() {
      return Auth.currentUser()
        .then(setCurrentUser);
        }

        function setCurrentUser(user) {
          console.log(user);
            return vm.user = user;
        }

    
    function createBook() {
      return BookFactory.createBook(vm.book)
        .then(showBook)
      
      }

    function showBook(data) {
      $state.go('home.books')
    }

    // cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");


    function getBooks() {
      BookService
      .getBooks(vm.searchTerm)
      .then(function (response) {
        console.log(response.data.items);
        $scope.items = response.data.items;
        
      });
    }

    function bookDetails() {
      BookService
      .bookDetails($stateParams.id)
      .then(function (response) {
        console.log(response.data.volumeInfo);
        vm.item = response.data.volumeInfo;
        $stateParams.id = response.data.volumeInfo.id;
      });
    }
  };

  BooksController.$inject = ['$scope', '$state', '$stateParams', 'BookService', 'Auth', 'BookFactory']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
