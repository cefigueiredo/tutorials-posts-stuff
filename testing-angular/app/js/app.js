var tutorialApp = angular.module('tutorialApp', []);

tutorialApp.controller('ContactsCtrl', function ($scope, $http) {

  $scope.getContacts = function() {
    return $http.get('/contacts').success(function (data) {
      $scope.contacts = data;
    })
  };
});