(function() { 
  'use strict';

  function PostsController($scope, $state, PostFactory, Auth) {
    var vm = this;
    vm.posts;
  
    vm.getPosts = getPosts;
    vm.createPost = createPost;
    vm.signedIn = Auth.isAuthenticated();
    
    console.log(Auth.isAuthenticated()); 
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
      return PostFactory.createPost(vm.post)
        .then(showPost)
      
      }

    function showPost(data) {
      vm.posts.push(data)
    }

  };

  PostsController.$inject = ['$scope', '$state', 'PostFactory', 'Auth']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());