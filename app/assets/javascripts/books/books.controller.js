(function() { 
  'use strict';

  function BooksController($scope, $state, $stateParams, BookService, Auth, BookFactory, $filter) {

    var vm = this;
    vm.books;
    vm.searchTerm = '';
    vm.search = '';
    vm.searchRating = '';

    vm.getBooks = getBooks;
    vm.bookSearch = bookSearch;
    vm.bookDetails = bookDetails;
    vm.signedIn = Auth.isAuthenticated();
    vm.createBook = createBook;
    vm.refilter = refilter;

    $scope.$state = $state;
    $scope.options = ['rating']
    
    $scope.goBack = function() { 
      window.history.back();
    };

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
      if (vm.signedIn) {
      return BookFactory.createBook(vm.book, vm.user)
        .then(showBook)
      } else {
        alert("You must be signed in to write a review")
      }
    }

    function showBook(data) {
      vm.books.push(data.book)
      $state.go('home.main')
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

    function refilter() {
      if (vm.search && !vm.searchRating) {
        return vm.filteredList = $filter('filter')(vm.books, vm.search)
        } else if (vm.searchRating && !vm.search) { 
        return vm.filteredList = $filter('filter')(vm.books, {rating: vm.searchRating})
        } else {
          vm.filteredRatingList = $filter('filter')(vm.books, vm.searchRating);
          return vm.filteredList = $filter('filter')(vm.filteredRatingList, vm.search)
        }
      } 
  };

  BooksController.$inject = ['$scope', '$state', '$stateParams', 'BookService', 'Auth', 'BookFactory', '$filter']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
