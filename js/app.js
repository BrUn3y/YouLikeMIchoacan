// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/CafeSupremo', {
            templateUrl : 'pages/CafeSupremo.html',
            controller  : 'CafeSupremoController'
        })
        .when('/Blog', {
            templateUrl : 'pages/blog.html',
            controller  : 'blogController'
        })
        .when('/Artiuculo', {
            templateUrl : 'pages/articulo.html',
            controller  : 'articulosController'
        })
        .when('/VerdaderaRecetaDelCapuccino', {
            templateUrl : 'pages/blog/VerdaderaRecetaDelCapuccino.html',
            controller  : 'blogController'
        })
        .when('/CiaoM&Ms', {
            templateUrl : 'pages/blog/CiaoM&ms.html',
            controller  : 'blogController'
        })
        .when('/UnEjercicioVirtuoso', {
            templateUrl : 'pages/blog/EjercicioVirtuoso.html',
            controller  : 'blogController'
        })
        .when('/PreparadoAlMomento', {
            templateUrl : 'pages/blog/PreparadoMomento.html',
            controller  : 'blogController'
        })
        .when('/AgusMichele', {
            templateUrl : 'pages/blog/AgusMichele.html',
            controller  : 'blogController'
        })
        .when('/BarCapuccino', {
            templateUrl : 'pages/blog/BarCapuccino.html',
            controller  : 'blogController'
        })
        .when('/ThreeReasonsToVisitUruapan', {
            templateUrl : 'pages/articulo/3reasonsUruapan.html',
            controller  : 'articulosController'
        })
        .when('/PiecesOfArtFromMichoacan', {
            templateUrl : 'pages/slideShow/PiecesFromMichoacan.html',
            controller  : 'slideShowController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angularRoutingApp.controller('mainController', function($scope) {
    $scope.scrollTo = function(element) {
       $( 'html, body').animate({
          scrollTop: $('html').offset().top
        }, 1000); 
    }
});

angularRoutingApp.controller('CafeSupremoController', function($scope) {
    $( 'html, body').animate({
      scrollTop: $('#index-banner').offset().top
    }, 400);
});

angularRoutingApp.controller('blogController', function($scope) {
    $( 'html, body').animate({
      scrollTop: $('#index-banner').offset().top
    }, 400);
});

angularRoutingApp.controller('articulosController', function($scope) {
    $( 'html, body').animate({
      scrollTop: $('#index-banner').offset().top
    }, 400);
});

angularRoutingApp.controller('slideShowController', function($scope) {
    $( 'html, body').animate({
      scrollTop: $('#index-banner').offset().top
    }, 400);
});