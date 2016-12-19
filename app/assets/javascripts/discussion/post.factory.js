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
      upVote: upVote,
      downVote: downVote
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

    function upVote(post) {
            return $http.put('/posts/' + post.id + '/upvote.json')
          .success(function (data) {
            post.upvotes++;
          })
            .then(handleSuccess)
            .catch(handleError)
        }

    function downVote(post) {
          return $http.put('/posts/' + post.id + '/downvote.json')
        .success(function (data) {
          post.downvotes--;
        })
          .then(handleSuccess)
          .catch(handleError)
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