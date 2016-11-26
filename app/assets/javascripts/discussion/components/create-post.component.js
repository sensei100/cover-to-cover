(function () {
  'use strict';

  var createPost = {
    transclude: true,
    controller: CreatePostComponentController,
    bindings: {
      name: '@'
    },
    templateUrl: 'discussion/components/create-post.html'
  }

  function CreatePostComponentController(PostFactory, $state) {
    var ctrl = this;

    ctrl.createPost = createPost;
   
    function createPost() {
      return PostFactory.createPost(ctrl.post)
        .then(function() {
          $state.go('home.discussion')
        })
    }
  }

  angular
    .module('app')
    .component('createPost', createPost)
}());