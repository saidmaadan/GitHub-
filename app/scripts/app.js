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
    .when("/main",{
      templateUrl: "main.html",
      controller: "MainController"
    })
    .when("/users/:username", {
      templateUrl: "user.html",
      controller: "UserController"
    })
    .when("/repo/:username/:reponame", {
      templateUrl: "repo.html",
      controller: "RepoController"
    })
    .otherwise({redirectTo: "/main"});
  });
}());