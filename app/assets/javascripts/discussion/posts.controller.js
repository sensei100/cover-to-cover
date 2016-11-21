(function() { 
  'use strict';

  function PostsController($scope) {
    $scope.name = "test"
  }

  PostsController.$inject = ['$scope']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());