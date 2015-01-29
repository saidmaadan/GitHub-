'use strict';

/**
 * @ngdoc function
 * @name ghubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ghubApp
 */
angular.module('ghubApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
