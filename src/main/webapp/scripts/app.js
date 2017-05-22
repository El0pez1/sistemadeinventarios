'use strict';

angular.module('inventario',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/equipoinformaticos',{templateUrl:'views/equipoinformatico/search.html',controller:'SearchequipoinformaticoController'})
      .when('/equipoinformaticos/new',{templateUrl:'views/equipoinformatico/detail.html',controller:'NewequipoinformaticoController'})
      .when('/equipoinformaticos/edit/:equipoinformaticoId',{templateUrl:'views/equipoinformatico/detail.html',controller:'EditequipoinformaticoController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
