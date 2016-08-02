(function() {

    'use strict';
var app = angular.module('myApp',['ngRoute', 'ngCookies'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
   $routeProvider.
   when('/', {
      controller: 'HomeController',
      templateUrl: 'app/login/login.html',
      controllerAs: 'vm'
   }).
   when('/login', {
    controller: 'LoginController',
    templateUrl: 'app/login.html',
    controllerAs: 'vm'
   }).
  when('/register', {
    controller: 'RegisterController',
    templateUrl: 'register/register.view.html',
    controllerAs: 'vm'
   }).
  when('/feed', {
      templateUrl: 'app/login/login.html'
   }).
  
   otherwise({
      redirectTo: '/login'
   })
   
}]).run(['$rootScope', '$location', '$cookieStore', '$http',function($rootScope, $location, $cookieStore, $http){

	$rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
}]);
 })();

