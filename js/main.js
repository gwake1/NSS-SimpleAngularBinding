;(function(){
  'use strict';

  var hello = 'world';
}());

var app = angular.module("myApp", []);

app.controller('TodoController', function(){
  var vm = this;
  vm.tasks = [
  {
    name: 'Learn Angular',
    desc: 'Angular will make so happy',
    due:  'Today'

  },
  {
    name: 'Finish Tic-Tac-Toe',
    desc: 'A very soothing Exercise',
    due:  'Monday'
  },
  {
    name: 'Get A Job',
    desc: 'Bills, Bills... Bills',
    due:  'Never'
  }
  ];

  vm.addNewTask = function(){
    vm.tasks.push(vm.newTask);
    vm.newTask = null;
  }
});
