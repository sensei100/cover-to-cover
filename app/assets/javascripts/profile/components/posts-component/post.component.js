(function () {
  'use strict';

  var post = {
    transclude: true,
    controller: PostComponentController,
    bindings: {
      name: '@'
    },
    templateUrl: 'profile/components/posts-component/user-posts.html'
  }

  function PostComponentController(PostFactory, $state, Auth) {
    var ctrl = this;

    ctrl.getPosts = getPosts;

    activate();

    function activate() {
      getPosts();
      getCurrentUser();
    };
  
    function getPosts() {
      return PostFactory.getPosts()
          .then(setPosts)
    };

    function setPosts(data) {
      ctrl.posts = data;              
    }

    function getCurrentUser() {
      return Auth.currentUser()
        .then(setCurrentUser);
        }

        function setCurrentUser(user) {
          return ctrl.user = user;
        }
  }

  PostComponentController.$inject = ['PostFactory', '$state', 'Auth']

  angular
    .module('app')
    .component('post', post)

}());