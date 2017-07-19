angular.module('feira-app',['ngRoute'])



angular.module('feira-app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'index2.html',
       //   controller: 'loginController'
        })
        .when('/{id}', {
          templateUrl: 'index1.html',
      //    controller: 'listaSerieCtrl'
        }).otherwise({
          redirectTo: '/animais'
        });
  
});