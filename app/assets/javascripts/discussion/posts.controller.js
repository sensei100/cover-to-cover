(function() { 
  'use strict';

  function PostsController($state, PostFactory, Auth) {
    var vm = this;

    vm.getPosts = getPosts;
    vm.createPost = createPost;
    

    activate();

    function activate() {
      getPosts();
    }

    function getPosts() {
      return PostFactory.getPosts()
                        .then(setPosts)

      function setPosts(data) {
        return vm.posts = data;
      }                
    }

    function createPost() {
      return PostFactory.createPost(vm.post)
        .then(function() {
          $state.go('home.discussion')
        })
    }

  };

  PostsController.$inject = ['$state', 'PostFactory', 'Auth']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());