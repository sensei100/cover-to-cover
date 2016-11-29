(function() { 
  'use strict';

  function PostsController($scope, $state, PostFactory, Auth) {
    var vm = this;
    vm.posts = PostFactory.posts;
  
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
      vm.posts = data; 
      $scope.orderProp = 'posts.created_at';              
    }

    function createPost() {
      vm.posts.push(vm.post);
      return PostFactory.createPost(vm.post)
        .then(showPost)
      
      }

    function showPost(data) {
      vm.getPosts;
    }

  };

  PostsController.$inject = ['$scope', '$state', 'PostFactory', 'Auth']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());