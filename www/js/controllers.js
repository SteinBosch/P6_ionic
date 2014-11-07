var oefeningen = [
    { oefening: 'Naar de wc gaan, zitten op de bril en een broodje eten',
      responsprev: 'Niet mijn handen wassen',
      id: 1,
      score: 100,
      details: {
        all_scores: [80, 60, 40],
         backlog: [
          {date: "10 mei 2014", fear_score: 80, log: "Ik ben niet ziek geworden van een broodje eten met ongewasen handen nadat ik had gezet. Dus dat is fijn.",},
          {date: "16 mei 2014", fear_score: 60, log: "Omdat ik vorgie keer niet ziek ben geworden ging het me een stuk beter af. Ik rook nog aan mijn handen maar deze stonken niet.",},
          {date: "21 mei 2014", fear_score: 40, log: "Het gaat steeds beter en vind het minder erg!",},
        ],
      },
    },
    { oefening: 'Naar de wc gaan, zitten op de bril daarna nog handen wassen op niet dwangmatige manier', id: 2, score: 90,
      responsprev: '',
      details: {
        all_scores: [90, 50, 70, 30, 30],
         backlog: [
          {date: "11 mei 2014", fear_score: 90, log: "Heb mijn handen wel gewassen maar want vond de wc erg smering",},
          {date: "17 mei 2014", fear_score: 50, log: "Ben op de bril gaan zitten maar nu was de wc schoon gemaakt dus vond ik het minder erg. Ik zag geen smerige stoffen.",},
          {date: "22 mei 2014", fear_score: 70, log: "Ik heb mijn handen goed gewassen omdat het er wel vies uitzag, maar omdat de vorige keer erger was vond ik het nu beter gaan.",},
        ],
      }, },
    { oefening: 'In de wc. aanraken van kranen, papierrol, prullenbak enz. niet handen wassen',
      responsprev: 'Niet mijn handen wassen', id: 3, score: 80 },
    { oefening: 'In het ziekenhuis een broodje eten ', id: 4, score: 70 },
    { oefening: 'Een broodje eten in het winkelcentrum na het aanraken van stoplichtknopjes',
      responsprev: 'Niet mijn handen wassen', id: 5, score: 60 },
    { oefening: 'Pinnen bij het winkelcentrum', id: 6, score: 50,
      responsprev: 'Niet mijn handen wassen',
      details: {
        all_scores: [50, 50, 70, 10, 90, 20, 60],
         backlog: [
          {date: "11 mei 2014", fear_score: 90, log: "Ik ben niet ziek geworden van de vorige keer met pinnen, dus ik had nu minder het gevoel dat het kwaad zou kunnen. Ik heb zelfs met m’n andere hand de automaat nog aangeraakt!",},
          {date: "17 mei 2014", fear_score: 50, log: "Er stond iemand voor me die er onhygienisch uitzag, dus ik durfde eigenlijk de toetsen niet aan te raken. Maar ik bedacht me dat het alleen maar door m’n dwang kwam en toen heb ik alsnog gepind.",},
          {date: "22 mei 2014", fear_score: 70, log: "4Ik ben niet ziek geworden van de vorige keer met pinnen.",},
        ],
      }, },
    { oefening: 'Naar de wc gaan als ik moet (dus niet vermijden door ophouden)', id: 7, score: 40 },
    { oefening: 'Aanraken van de kranen op de wc', responsprev: 'Niet mijn handen wassen', id: 8, score: 30 },
    { oefening: 'Aanraken van de deurknoppen van de wc', responsprev: 'Niet mijn handen wassen', id: 9, score: 20 },
    { oefening: 'Aanraken van de deurknoppen en trapleuningen', responsprev: 'Niet mijn handen wassen', id: 10, score: 10 },
  ];
  //console.log(oefeningen);

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
  $scope.oefeningen = oefeningen;
})

.controller('OefeningCtrl', function($scope, $stateParams) {
  $scope.oefeningen = oefeningen;
  $scope.stateParams = [
    {oefeningId: $stateParams['oefeningId'] -1,},
  ]
})

.controller('addOefeningCtrl',function ($scope,$http){
      $scope.master = {};

      $scope.input = function(input) {
        $scope.master = angular.copy(input);
        console.log($scope.master);

        $http.post("server/insert.php",{'post': $scope.master.text})
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");
            console.log(data); 
        });
      };

    // }]);
})

.controller('serverCtrl',function ($scope,$http){
 $http.get('/server/json.php').then(function(resp) {
    console.log(resp.data);
    $scope.posts = resp.data;
    console.log($scope.posts);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
  
})

.controller('patientCtrl',function ($scope,$http){
  var url = "http://backend-p6:8888/api/TherapyGroup";
  $http.get(url)
      .success(function(data){
          console.log(data);
          $scope.list = data;
      });
  
})

.controller('postCtrl',function ($scope,$http){
      $scope.master = {};

      $scope.input = function(input) {
        $scope.master = angular.copy(input);
        console.log($scope.master);

        $http.post("server/insert.php",{'post': $scope.master.text})
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");
            console.log(data); 
        });
      };

    // }]);
});

;