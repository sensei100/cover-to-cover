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
  
  function getPosts() {
    return PostFactory.getPosts()
        .then(function() {
          $state.go('profile')
        })
    }
  }

  angular
    .module('app')
    .component('post', post)

}());