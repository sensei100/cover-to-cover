(function() { 
  'use strict';

  function PostsController($scope, $state, PostFactory, Auth) {
    var vm = this;
    vm.posts;
    vm.getPosts = getPosts;
    vm.createPost = createPost;
    vm.signedIn = Auth.isAuthenticated();
    vm.addVote = addVote;

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

    function addVote(post) {
      return PostFactory.upVote(post);
    }

    $scope.sortBy = function() {
      
      vm.posts = vm.posts.sort(function(a,b) {
        return a.upvotes < b.upvotes;
      }); 
    } 
  };

  PostsController.$inject = ['$scope', '$state', 'PostFactory', 'Auth']

angular
  .module('app')
  .controller('PostsController', PostsController);

}());