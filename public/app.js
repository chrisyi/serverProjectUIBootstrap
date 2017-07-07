angular.module('app', ['ui.bootstrap','ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home/home.html',
                controller: 'homeCtrl'
            })
        $urlRouterProvider
            .otherwise('/')
    })