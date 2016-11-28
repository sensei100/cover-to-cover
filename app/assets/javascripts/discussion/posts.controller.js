(function() { 
  'use strict';

  function PostsController($scope, $state, PostFactory, Auth) {
    var vm = this;
    $scope.posts = [];
  
    vm.getPosts = getPosts;
    vm.createPost = createPost;
    vm.signedIn = Auth.isAuthenticated();
    

    activate();

    function activate() {
      getPosts();
    };

    function getPosts() {
      return PostFactory.getPosts()
                        .then(setPosts)
    };

    function setPosts(data) {
      return $scope.posts = data;                
    }

    function createPost() {
      return PostFactory.createPost(vm.post)
        .then(showPost)
      
      }

    function showPost(data) {
      $state.go('home.discussion')
    }

  };

  PostsController.$inject = ['$scope', '$state', 'PostFactory', 'Auth']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());