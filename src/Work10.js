angular.module('myApp', [])
  .controller('myCtrl', function($scope) {
    $scope.countries = ['США', 'Канада', 'Німеччина', 'Франція'];
    $scope.cities = [];

    $scope.updateCities = function() {
      if ($scope.selectedCountry === 'США') {
        $scope.cities = ["Нью-Йорк", "Лос-Анджелес", "Чикаго"];
      } else if ($scope.selectedCountry === 'Канада') {
        $scope.cities = ["Торонто", "Ванкувер", "Монреаль"];
      } else if ($scope.selectedCountry === 'Німеччина') {
        $scope.cities = ["Берлін", "Мюнхен", "Гамбург"];
      } else if ($scope.selectedCountry === 'Франція') {
        $scope.cities = ["Париж", "Марсель", "Ліон"];
      } else {
        $scope.cities = [];
      }
    };
  });
