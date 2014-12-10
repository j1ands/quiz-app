'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.quiz = 
	    [
		    { 
		      "q": "Who is the best ping pong player at FSA?", 
		      'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
		      'answer': "Nimit" ,
		      'difficulty': 1,
		      'tried': false
		    },
		    { "q": "Which robot name was chanted during Lego Mindstorms?", 
		      'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
		      'answer':'noHope.js',
		      'difficulty': 5,
		      'tried': false
		    },
		    { 
		      'q': "Out of the following frontend frameworks, which framework is most rails-like", 
		      'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
		      'answer':'Ember.js',
		      'difficulty': 3,
		      'tried': false
		    },
		    { 
		      'q': "Which project used a local data store?", 
		      'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
		      'answer':'Twitter.js',
		      'difficulty': 2,
		      'tried': false
		    }
	  	];
	$scope.rating = 'difficulty';
	$scope.active = false;
	$scope.score = 0;
	$scope.checkAnswer = function(question)
	{
		if(!question.tried)
		{		
			if(question.selected == question.answer)
			{
				$scope.score += 10;
			}
			else
			{
				$scope.score -= 10;
			}
		}
		question.tried = true;
	}
	// $scope.showSubmit = function()
	// {
	// 	console.log($scope.question);
	// 	$scope.question.selected = true;
	// }
	//$scope.selected = "button";

  });
