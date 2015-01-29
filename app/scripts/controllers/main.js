'use strict';

/**
 * @ngdoc function
 * @name ghubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ghubApp
 */
angular.module('ghubApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
