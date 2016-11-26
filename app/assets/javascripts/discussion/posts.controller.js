(function() { 
  'use strict';

  function PostsController($scope) {

    $scope.addPost = function() {
      $scope.posts.push({
        content: $scope.content
      });
      $scope.content = '';
    };
  }

  PostsController.$inject = ['$scope']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());