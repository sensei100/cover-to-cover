(function() { 
  'use strict';

  function PostsController($scope) {
    $scope.name = "test"
  }

  AboutController.$inject = ['$scope']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());