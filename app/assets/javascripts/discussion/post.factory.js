(function() {

  'use strict';

  function PostFactory($http) {

    return {
      getPosts: getPosts,
      getPost: getPost,
      //getUserPost: getUserPosts,
      createPost: createPost,
      updatePost: updatePost,
      deletePost: deletePost,
    }

    function getPosts() {
      return $http.get('/posts')
        .then(handleSuccess)
        .catch(handleError)
    }

    function createPost(post) {
      
      var req = {
        method: 'POST',
        url: '/posts',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { 
          post: post
        }
      };

        return $http(req)
        .then(handleSuccess)
        .catch(handleError);
        }

    function getPost(id) {
      return $http.get('/posts/' + id)
        .then(handleSuccess)
        .catch(handleError);
    }

    function getUserPost() {

    }

    function updatePost() {
      if (vm.signedIn) {
        return PostFactory.updatePost(vm.post)
          .then(showPosts);
      }
    }

    function deletePost() {

    }
    
    function handleSuccess(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error) 
    }

    function showPosts() {
      $state.go('home.discussion');
    }

  }

  PostFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('PostFactory', PostFactory)

}());