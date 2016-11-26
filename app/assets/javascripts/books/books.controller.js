(function() { 
  'use strict';

  function BooksController($scope, BookService, Auth) {

    var ctrl = this;
    ctrl.signedIn = Auth.isAuthenticated();
    $scope.searchTerm = '';

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
            return ctrl.user = user;
        }

    
    BookService
      .getBooks({ q: $scope.searchTerm })
      .then(function (response) {
        $scope.searchTerm = BookService.query = response.q;
        console.log(response.data.items);
        $scope.items = response.data.items;
        
      });
  };

  BooksController.$inject = ['$scope', 'BookService', 'Auth']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
