(function() { 

  'use strict';

  angular
    .module('app', ['ui.router', 'templates', 'Devise'])
    .config(function($httpProvider) {
            // for CSRF errors
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        });
}());