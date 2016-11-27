(function() { 

  'use strict';

  angular
    .module('app')
    .config([
      '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
         .state('home.books', {
          url: 'books',
          templateUrl: 'books/books.html',
          controller: 'BooksController as vm'
        })
         .state('home.books.book', {
          url: '/:id',
          templateUrl: 'books/book.html',
          controller: 'BooksController as vm'
        })
         .state('home.discussion', {
          url: 'posts',
          templateUrl: 'discussion/posts.html',
          controller: 'PostsController as vm'
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