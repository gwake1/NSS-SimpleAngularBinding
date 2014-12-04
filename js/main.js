;(function(){
  'use strict';

  var hello = 'world';
}());

var app = angular.module("myApp", []);

app.controller('SimpleController', function(){
  this.name = "Gerald";
  this.friends=['Ashley', 'Bob', 'Carley', 'Dave'];
});
