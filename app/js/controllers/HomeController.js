app.controller("HomeController", function($scope, ChangeText, $http){
    
    $scope.modalInscription = false; // Initialisation modal inscription
    
    // Affichage modal inscription
    $scope.showModalInscription = function(){
        
        // Affichage modal
        $scope.modalInscription = true;
        
    };
    
    // Affichage modal connexion
    $scope.showModalConnection = function(){
        
        // Affichage modal
        $scope.modalConnection = true;
        
    };
    
    // Array change texte accueil appli
    $scope.textTitle = "votre famille"; // Initialisation du premier texte*
    
    // Lancement de la fonction permettant de changer le texte si la page est déjà chargée
    ChangeText.run($scope, 0);
    
});