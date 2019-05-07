var myApp = angular.module('myApp', ['ngMessages', 'ngRoute']);
// je créer ma variable myApp pour mon mondule et je charge les modules ngMessages et ngRoute

myApp.config(['$routeProvider', function($routeProvider) { // je config mon $routeProvider

  $routeProvider
    .when('/', { // quand je suis à la racine
      templateUrl: 'views/form.html',
      controller: 'formCtrl'
    })
    .when('/infos/:index', { // index = paramètre de route 'index'
      templateUrl: 'views/infos.html',
      controller: 'formCtrl'
    });
}]);

myApp.run(['$rootScope', function($rootScope) { // Au démarrage de myApp ça lance une fonction qui a comme paramètre rootscope et qui a comme fonctionnalité de créer un tableau dont tu stock les données dans le rootscope
  $rootScope.mailInfos = []; // création du tableau
}]);

myApp.controller('formCtrl', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {
  // je scope regexName et je rentre la regex qui n'autorise pas les caractères spéciaux les chiffres et les prénoms de moins deux lettres et quinze lettres max
  $scope.regexName = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ']{2,26}[- ']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ]{0,26}$/;
  $scope.regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  $scope.indexObj = $routeParams.index; // on stock notre index dans indexObj

  $scope.storeData = function() { // création de la function storeData qui insère les données des inputs dans mon tableau mailInfos
    $rootScope.mailInfos.push({
      name: $scope.name,
      email: $scope.email,
      topic: $scope.topic,
      textArea: $scope.textArea
    });
  }
}]);
