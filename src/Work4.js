angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.showParagraph = true;
    
    $scope.toggleParagraph = function() {
      $scope.showParagraph = !$scope.showParagraph;
    };
  });
