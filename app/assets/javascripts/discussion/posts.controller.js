(function() { 
  'use strict';

  function PostsController($scope) {
    $scope.posts = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5',
    ];

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