(function() { 
  'use strict';

  function BooksController($scope, $state, $stateParams, BookService, Auth) {

    var vm = this;
    vm.signedIn = Auth.isAuthenticated();
    vm.searchTerm = '';
    $scope.$state = $state;

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

    
    BookService
      .getBooks({ q: vm.searchTerm })
      .then(function (response) {
        vm.searchTerm = BookService.query = response.q;
        console.log(response.data.items);
        $scope.items = response.data.items;
        
      });

    BookService
      .bookDetails()
      .then(function (response) {
        console.log(response.data.volumeInfo);
        vm.item = response.data.volumeInfo;
      });
    
  };

  BooksController.$inject = ['$scope', '$state', '$stateParams', 'BookService', 'Auth']

angular
  .module('app')
  .controller('BooksController', BooksController);

}());
