(function() {

  'use strict';

  function PostFactory($http, $stateParams) {

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
        .then(handleResponse)
        .catch(handleError)
    }

    function createPost(post) {
      var req = {
        method: 'POST',
        url: '/discussion',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { 
          post: post
        }
      };

        return $http(req)
          .catch(handleError);
        }

    function getPost(id) {
      return $http.get('posts/' + $stateParams.id)
        .then(handleResponse)
        .catch(handleError);
    }

    function getUserPost() {

    }

    function updatePost() {

    }

    function deletePost() {

    }
    
    function handleResponse(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error) 
    }

  }

  PostFactory.$inject = ['$http', '$stateParams']

  angular
    .module('app')
    .factory('PostFactory', PostFactory)

}());