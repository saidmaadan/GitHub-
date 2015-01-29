'use strict';

/**
 * @ngdoc function
 * @name ghubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ghubApp
 */
angular.module('ghubApp')
  .factory('github', function($http){

		var getUser = function(username){
			return $http.get("https://api.github.com/users/" + username)
									.then(function(response){
										return response.data;
									});
		};
		var getRepos = function(user){
			return $http.get(user.repos_url)
									.then(function(response){
										return response.data;
									});
		};

		var getRepoDetails = function(username, response){
			var repo;
			var repoUrl = 'https://api.github.com/repos/' + username + "/" + reponame;

			return $http.get(reporUrl)
									.then(function(response){
										repo = response.data;
										return $hhtp.get(repoUrl + "/collaborators");
									});
									.then(function(response){
										repo.collaborator = response.data;
										return repo;
									});
		};

		return {
			getUser: getUser,
			getRepos: getRepos,
			getRepoDetails: getRepoDetails

		};
	});
