var app = angular.module('BridesMadeApp',['ngRoute', 'ngAnimate']);
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {templateUrl: 'home.html', controller: 'homeController'})
 .when('/collection', {templateUrl: 'collection.html', controller: 'collectionController'})
.when('/getstarted', {templateUrl: 'getstarted.html', controller: 'getstartedController'})
.when('/howitworks', {templateUrl: 'howitworks.html', controller: 'howitworksController'})
}]);

app.run (function(){

  new WOW().init();



})
app.directive('heroWrap', function () {
  return {
    link: function (element, attrs) {
      $(".heroimage-wrap").css('min-height', $(window).height());

    }
  }
})

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

app.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
