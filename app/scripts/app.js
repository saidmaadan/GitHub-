'use strict';

/**
 * @ngdoc overview
 * @name ghubApp
 * @description
 * # ghubApp
 *
 * Main module of the application.
 */
angular
  .module('ghubApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when("/",{
      templateUrl: "views/main.html",
      controller: "MainController"
    })
    .when("/users/:username", {
      templateUrl: "views/user.html",
      controller: "UserController"
    })
    .when("/repo/:username/:reponame", {
      templateUrl: "views/repo.html",
      controller: "RepoController"
    })
    .otherwise({redirectTo: "/"});
  });
}());