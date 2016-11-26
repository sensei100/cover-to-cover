(function() { 
  'use strict';

  function BooksController($scope, $state, $stateParams, BookService, Auth) {

    var ctrl = this;
    ctrl.signedIn = Auth.isAuthenticated();
    $scope.searchTerm = '';
    $scope.$state = $state;

    activate();

    function activate() {
      getCurrentUser();
        if (!!$stateParams.id) {
          bookDetails();
        }
    }

    function getCurrentUser() {
      return Auth.currentUser()
        .then(setCurrentUser);
        }

        function setCurrentUser(user) {
          console.log(user);
            return ctrl.user = user;
        }

    
    BookService
      .getBooks({ q: $scope.searchTerm })
      .then(function (response) {
        $scope.searchTerm = BookService.query = response.q;
        console.log(response.data.items);
        $scope.items = response.data.items;
        
      });

      function bookDetails() {
      return BookService.bookDetails($stateParams.id)
        .then(setClub)
    }

    function setClub(data) {
       ctrl.book = data;
    }
  };

  BooksController.$inject = ['$scope', '$state', '$stateParams', 'BookService', 'Auth']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
