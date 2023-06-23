angular.module('myApp', [])
.controller('myController', function($scope) {
  $scope.isParagraphVisible = true;

  $scope.hideParagraph = function() {
    $scope.isParagraphVisible = false;
  };

  $scope.showParagraph = function() {
    $scope.isParagraphVisible = true;
  };
});