angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.items = [
      { id: 1, checked: false },
      { id: 2, checked: false },
      { id: 3, checked: false }
    ];
  });
