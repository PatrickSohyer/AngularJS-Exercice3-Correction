var myApp = angular.module('myApp', ['ngMessages']);
// je crée mon controller, je le nomme formCtrl, je lui attribut $scope et je lance la function
myApp.controller('formCtrl', ['$scope', function($scope) {
  // je scope regexName et je rentre la regex qui n'autorise pas les caractères spéciaux les chiffres et les prénoms de moins deux lettres et quinze lettres max
  $scope.regexName = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ']{2,26}[- ']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ]{0,26}$/;
  $scope.regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  $scope.mailInfos = []; // création du tableau

  $scope.storeData = function() { // création de la function storeData qui insère les données des inputs
    $scope.mailInfos.push({ //
      name: $scope.name,
      email: $scope.email,
      topic: $scope.topic,
      textArea: $scope.textArea
    });
  }
}]);
