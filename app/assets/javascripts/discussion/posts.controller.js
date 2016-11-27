(function() { 
  'use strict';

  function PostsController($scope, $state, PostFactory, Auth) {
    var vm = this;
  
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
      return vm.posts = data;                
    }

    function createPost() {
      if (vm.signedIn) {
      return PostFactory.createPost(vm.post)
        .then(showPost)
      } else {
        alert("You need to be signed in to post.")
        $state.go('home.login')
        }
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