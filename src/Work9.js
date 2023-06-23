angular.module('myApp', [])
  .controller('MyController', function($scope) {
    $scope.cities = ["Україна", "Сполучені Штати", "Великобританія", "Німеччина", "Франція"];
    
    $scope.updateInput = function() {
      $scope.selectedCityInput = $scope.selectedCity;
    };
  });
  