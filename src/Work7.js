angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.isRed = false;
    $scope.isStrikethrough = false;
  
    $scope.updateStyles = function() {
    };
  });
