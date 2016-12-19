(function() { 
  'use strict';

  function PostsController($scope, $state, PostFactory, Auth) {
    var vm = this;
    vm.posts;
    vm.getPosts = getPosts;
    vm.createPost = createPost;
    vm.signedIn = Auth.isAuthenticated();


    activate();

    function activate() {
      getCurrentUser();
      getPosts();
    };

    function getCurrentUser() {
      return Auth.currentUser()
        .then(setCurrentUser);
        }

        function setCurrentUser(user) {
          console.log(user);
            return vm.user = user;
        } 

    function getPosts() {
      return PostFactory.getPosts()
                        .then(setPosts)
    };

      function setPosts(data) {
        vm.posts = data;              
      }

    function createPost() {
      if (vm.signedIn) {
      return PostFactory.createPost(vm.post)
        .then(showPost)
        } else {
          alert("You must be signed in to add a post.")
        }
      }

    function showPost(data) {
      vm.posts.push(data.post)
      $scope.form.$setUntouched();
      $scope.form.$setPristine();
    }

    $scope.increment = function(post) {
      post.like += 1;
    }

    $scope.decrement = function(post) {
      post.like -= 1;
    }

    $scope.sortBy = function() {
      
      vm.posts = vm.posts.sort(function(a,b) {
        return a.like < b.like;
      });
      debugger; 
    } 
  };

  PostsController.$inject = ['$scope', '$state', 'PostFactory', 'Auth']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());