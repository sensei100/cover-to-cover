(function() {

  'use strict';

  function PostFactory($http) {

    return {
      getPosts: getPosts,
      getPost: getPost,
      //getUserPost: getUserPosts,
      createPost: createPost,
      updatePost: updatePost,
      destroyPost: destroyPost,
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

    function updatePost(post) {
      var req = {
        method: 'PATCH',
        url: '/posts/' + post.id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          post: post
        }
      }
      return $http(req)
        .then(handleSuccess)
        .catch(handleError);
    }

    function destroyPost(id) {
      return $http.delete('/posts/' + id)
        .then(handleSuccess)
        .catch(handleError); 

    }
    
    function handleSuccess(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error) 
    }

  }

  PostFactory.$inject = ['$http']

  angular
    .module('app')
    .factory('PostFactory', PostFactory)

}());