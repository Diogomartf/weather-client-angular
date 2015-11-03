var app = angular.module('app', [])
  .controller('MainController', ['$scope', '$http', function($scope, $http) { 
    $scope.city = "Braga";
    $scope.temp = "";
    $scope.humidity = "";
    $scope.description = "";
    $scope.showCards = false;
   $scope.getWeather = function(city) {
      return $http({
              method: 'GET',
              url: 'http://api.openweathermap.org/data/2.5/weather?',
              params: { 
                APPID: "105c6a96fc6cc478bc7c239d696a4d04",
                q: city,
                units: "metric"       
              }
            }).then(function successCallback(res) {
              $scope.temp =res.data['main'].temp;
              $scope.humidity =res.data['main'].humidity;
              $scope.description =res.data['weather'][0].description;
              $scope.showCards = true;
            }, function errorCallback(err) {
                console.log('error');
                return err;
           });
   }
}]);