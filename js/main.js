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
    due:  'Today',
    priority: 'High'

  },
  {
    name: 'Finish Tic-Tac-Toe',
    desc: 'A very soothing Exercise',
    due:  'Monday',
    priority: 'Medium'
  },
  {
    name: 'Get A Job',
    desc: 'Bills, Bills... Bills',
    due:  'Never',
    priority: 'Low'
  }
  ];

  vm.addNewTask = function(){
    vm.tasks.push(vm.newTask);
    vm.newTask = _freshTask();
  }

  vm.removeTask = function(task){
    var i = vm.tasks.indexOf(task);
    vm.tasks.splice(i,1);
  }

  vm.newTask = _freshTask();

  vm.priorityOptions= {
    high: "High",
    medium: "Medium",
    low: "Low"
  }

  function _freshTask(){
    return {
      priority: "high"
    }
  }

});
