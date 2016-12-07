(function() { 
  'use strict';

  function BooksController($scope, $state, $stateParams, BookService, Auth, BookFactory, $filter) {

    var vm = this;
    vm.books;
    vm.getBooks = getBooks;
    vm.bookSearch = bookSearch;
    vm.bookDetails = bookDetails;
    vm.signedIn = Auth.isAuthenticated();
    vm.searchTerm = '';
    vm.createBook = createBook;
    vm.refilter = refilter;
    $scope.$state = $state;

    console.log(vm.books);

    $scope.goBack = function() { 
      window.history.back();
    };
    console.log(Auth.isAuthenticated()); 

    activate();

    function activate() {
      getCurrentUser();
      getBooks();
    }

    function getCurrentUser() {
      return Auth.currentUser()
        .then(setCurrentUser);
        }

        function setCurrentUser(user) {
          console.log(user);
            return vm.user = user;
        }

    function getBooks() {
      return BookFactory.getBooks()
        .then(setBooks)
        .then(setFilteredList)
    }

    function setBooks(data) {
      return vm.books = data;
    }

    function setFilteredList(data) {
      return vm.filteredList = data;
    }
    
    function createBook() {
      return BookFactory.createBook(vm.book, vm.user)
        .then(showBook)
      
      }

    function showBook(data) {
      vm.books.push(data.book)
      $state.go('home.books')
    }

    function bookSearch() {
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

    vm.search = '';
    vm.searchRating = '';

    function refilter() {
      if (vm.search && !vm.searchRating) {
        return vm.filteredList = $filter('filter')(vm.books, vm.search)
      }
    }

    /*function stripHtml() {
      cleanText = vm.item.replace(/<\/?[^>]+(>|$)/g, "");
    } */

    
    
  };

  BooksController.$inject = ['$scope', '$state', '$stateParams', 'BookService', 'Auth', 'BookFactory', '$filter']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
