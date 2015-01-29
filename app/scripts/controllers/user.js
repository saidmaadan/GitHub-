'use strict';

/**
 * @ngdoc function
 * @name ghubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ghubApp
 */
angular.module('ghubApp')
  controller("UserController", function($scope,github, $routeParams){
		
		var onUserComplete = function(data){
			$scope.user = data;
			github.getRepos($scope.user).then(onRepos, onError);

		};
		var onRepos = function(data){
			$scope.repos = data;
		};
		var onError = function(reason){
			$scope.error = "Couldn't fetch the data";
		};
		
		$scope.username = $routeParams.username;
		$scope.selectRepo = "Select";
		github.getUser($scope.username).then(OnUsercomplete, onError);

	});