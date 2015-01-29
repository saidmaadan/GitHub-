'use strict';

/**
 * @ngdoc function
 * @name ghubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ghubApp
 */
angular.module('ghubApp')
  .controller('RepoController', function($scope,github, $routeParams){
		
		var onRepo = function(data){
			$scope.repo = data;
		};

		var on 
		var reponame = $routeParams.reponame;
		var username = $routeParams.username;

		github.getRepoDetails(username, reponame)
				.then(onRepo, onError);
	});
