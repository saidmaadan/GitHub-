'use strict';

/**
 * @ngdoc function
 * @name ghubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ghubApp
 */
angular.module('ghubApp')
  controller('MainController', function($scope, $interval, $location){

		var decreamentCountdown = function(){
			$scope.countdown -= 1;
			if($scope.countdown < 1){
				$scope.search($scope.username);
			}
		};

		var countdownInterval = null;
		var startCountdown = function(){
			countdownInterval = $interval(decreamentCountdown, 1000,$scope.countdown);
		};

		$scope.search = function(username){
			if(countdownInterval){
				$interval.cancel(countdownInterval);
				$scope.countdown = null;
			}

			$location.path("/user/" + username);
		};
		
		
		$scope.username = "angular";
		$scope.countdown = 5;
		startCountdown();

	});