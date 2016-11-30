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

  function PostComponentController(PostFactory, $state) {
    var ctrl = this;

    ctrl.getPosts = getPosts;

    activate();

    function activate() {
      getPosts();
    };
  
    function getPosts() {
      return PostFactory.getPosts()
          .then(setPosts)
    };

    function setPosts(data) {
      ctrl.posts = data;              
    }
  }

  angular
    .module('app')
    .component('post', post)

}());