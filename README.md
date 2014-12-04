#Scott's Angular Demonstration
  + 1. In the html line of the index.html add ng-app
  + 2. In Angular controllers are constructive => capitalized
    + default parameter for controllers = $scope
      + We will add variables to scope that our app can access via $scope.name = "Gerald"
    +3. Modules
      + angular.module("app", [])
        + array allows you to pass in other modules
      + pass in the variable $scope to your function
        + https://docs.angularjs.org/guide/scope
        + Angular works by performing "dirty-checking" = checking to see if a variable has been updated 60 times per second
        + Angular is not a good framework for complex web applications
        + The controller talks to the view and the view talks to the controller through $scope
        + The $scope object is the view model
