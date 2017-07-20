const app = angular.module("feira-app", ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('main', {
            url: '',
            abstract: true,
            template: '<div ui-view></div>',
            controller:'loginController'
        })

        .state( 'main.login',{
            url: '/login',
            templateUrl: 'login.html',
            controller:'loginController'
        })

        .state('home', {
            url:'/home',
            templateUrl: 'home.html',
            controller:'listaSeriesCtrl'
        });




});

