angular.module('feira-app',['ngRoute','ngMaterial'])



angular.module('feira-app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'login.html',
          controller: 'loginController'
        })
        .when('/home.html', {
          templateUrl: 'home.html',
          controller: 'listaSeriesCtrl'
        }).otherwise({
          redirectTo: '/a'
        });
  
});