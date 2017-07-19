angular.module('feira-app',['ngRoute','ngMaterial'])



angular.module('feira-app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/login.html', {
          templateUrl: 'login.html',
          controller: 'loginController'
        })
        .when('/', {
          templateUrl: 'home.html',
          controller: 'listaSeriesCtrl'
        }).otherwise({
          redirectTo: '/'
        });
  
});