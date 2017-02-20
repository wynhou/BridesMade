var app = angular.module('BridesMadeApp',['ngRoute', 'ngAnimate']);
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {templateUrl: 'home.html', controller: 'homeController'})
//  .when('/patients', {templateUrl: 'patients.html', controller: 'patientController'})
}]);

app.run (function(){





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
