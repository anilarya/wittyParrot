'use strict';

/**
 * @ngdoc overview
 * @name homealoneApp
 * @description
 * # homealoneApp
 *<script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
 * Main module of the application.
 */
angular
  .module('parrotApp', ['ngAnimate','ngCookies','ui.router','ngResource',
    'ui.bootstrap','ngRoute','ngSanitize','ngTouch','kendo.directives', 'angular-google-gapi'
  ]).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/'); 
    var init = function() { 
        window.initGapi();
    }
    
    $stateProvider 
        .state('/', {
            url: '/',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        }) 
  });
