var app = angular.module('myApp', ['ui.router','ngclipboard','oitozero.ngSweetAlert']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider,$sceProvider) {

    $sceProvider.enabled(true);

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '../Views/home.html',
            controller: 'homeController',
            resolve: {
            }
        }).state('/login', {
            url: '/login',
            templateUrl: '../Views/login.html',
            controller: 'loginController',
            resolve: {
        }}).state('/monitor', {
            url: '/monitor',
            templateUrl: '../Views/Monitor/monitormain.html',
            controller: 'monitormainController',
            resolve: {
        }}).state('/deals', {
            url: '/deals',
            templateUrl: '../Views/Monitor/deals.html',
            controller: 'dealsController',
            resolve: {
        }});
});