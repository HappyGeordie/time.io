'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'partials/index',
			controller: 'IndexCtrl'
		}).
		when('/addTime', {
			templateUrl: 'partials/addTime',
			controller: 'AddTimeCtrl'
		}).
		when('/view2', {
			templateUrl: 'partials/partial2',
			controller: 'MyCtrl2'
		}).
		otherwise({
			redirectTo: '/'
		});

  $locationProvider.html5Mode(true);
});
