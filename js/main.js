;(function(){
  'use strict';

  var hello = 'world';
}());

var app = angular.module("myApp", []);

app.controller('SimpleController', function($scope){
  $scope.name = "Gerald";
  $scope.friends=['Ashley', 'Bob', 'Carley', 'Dave'];

});
