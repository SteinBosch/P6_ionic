angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('OefeningenCtrl', function($scope) {
  $scope.oefeningen = [
    { oefening: 'Naar de wc gaan; zitten op de bril en niet mijn handen wassen en een broodje eten', id: 1, score: 100 },
    { oefening: 'Naar de wc gaan, zitten op de bril daarna nog handen wassen op niet dwangmatige manier', id: 2, score: 90 },
    { oefening: 'In de wc. aanraken van kranen, papierrol, prullenbak enz. niet handen wassen', id: 3, score: 80 },
    { oefening: 'In het ziekenhuis een broodje eten ', id: 4, score: 70 },
    { oefening: 'Een broodje eten in het winkelcentrum na het aanraken van stoplichtknopjes zonder mijn handen te wassen', id: 5, score: 60 },
    { oefening: 'Pinnen bij het winkelcentrum en niet mijn handen wassen', id: 6, score: 50 },
    { oefening: 'Naar de wc gaan als ik moet (dus niet vermijden door ophouden)', id: 7, score: 40 },
    { oefening: 'Aanraken van de kranen op de wc en niet mijn handen wassen', id: 8, score: 30 },
    { oefening: 'Aanraken van de deurknoppen van de wc en niet mijn handen wassen', id: 9, score: 20 },
    { oefening: 'Aanraken van de deurknoppen en trapleuningen en niet mijn handen wassen', id: 10, score: 10 },
  ];
})

.controller('OefeningCtrl', function($scope, $stateParams) {
$scope.oefeningen = [
    { oefening: 'Naar de wc gaan; zitten op de bril en niet mijn handen wassen en een broodje eten', id: 1, score: 100 },
    { oefening: 'Naar de wc gaan, zitten op de bril daarna nog handen wassen op niet dwangmatige manier', id: 2, score: 90 },
    { oefening: 'In de wc. aanraken van kranen, papierrol, prullenbak enz. niet handen wassen', id: 3, score: 80 },
    { oefening: 'In het ziekenhuis een broodje eten ', id: 4, score: 70 },
    { oefening: 'Een broodje eten in het winkelcentrum na het aanraken van stoplichtknopjes zonder mijn handen te wassen', id: 5, score: 60 },
    { oefening: 'Pinnen bij het winkelcentrum en niet mijn handen wassen', id: 6, score: 50 },
    { oefening: 'Naar de wc gaan als ik moet (dus niet vermijden door ophouden)', id: 7, score: 40 },
    { oefening: 'Aanraken van de kranen op de wc en niet mijn handen wassen', id: 8, score: 30 },
    { oefening: 'Aanraken van de deurknoppen van de wc en niet mijn handen wassen', id: 9, score: 20 },
    { oefening: 'Aanraken van de deurknoppen en trapleuningen en niet mijn handen wassen', id: 10, score: 10 },
  ];
  $scope.stateParams = [
    {oefeningId: $stateParams['oefeningId'] -1,},
  ]
});
