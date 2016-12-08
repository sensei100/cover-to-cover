(function() { 

  'use strict';

  angular
    .module('app')
    .config([
      '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', { 
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('home.main', {
          url: '/',
          templateUrl: 'home/main.html',
          controller: 'BooksController as vm'
        })
         .state('home.books', {
          url: '/books',
          templateUrl: 'books/books.html',
          controller: 'BooksController as vm'
        })
         .state('home.books.book-details', {
          url: '/book-details/:id',
          templateUrl: 'books/book.html',
          controller: 'BooksController as vm'
        })
         .state('home.books.book', {
          url: '/:id',
          templateUrl: 'books/book-review.html',
          controller: 'BookShowController as vm'
        })
         .state('home.discussion', {
          url: '/discussion',
          templateUrl: 'discussion/posts.html',
          controller: 'PostsController as vm'
        })
          .state('home.post', {
          url: 'discussion/:id',
          templateUrl: 'discussion/post.html',
          controller: 'PostsShowController as vm'
        })
          .state('home.edit', {
          url: 'discussion/:id/edit',
          templateUrl: 'discussion/edit.html',
          controller: 'PostsShowController as vm'
        })

          .state('about', {
          url: '/about',
          templateUrl: 'about/about.html',
          controller: 'AboutController as vm'
        })
          .state('profile', {
          url: '/profile',
          templateUrl: 'profile/profile.html',
          controller: 'ProfileController as vm'
        })
          .state('home.login', {
          url: 'login',
          templateUrl: 'auth/login.html',
          controller: 'AuthController as vm',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function(){
            $state.go('home');
            });
        }]
    })
          .state('home.register', {
          url: 'register',
          templateUrl: 'auth/register.html',
          controller: 'AuthController as vm',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function(){
            $state.go('home');
            });
        }]
    })

        $urlRouterProvider.otherwise('/');
      }]);
  }());