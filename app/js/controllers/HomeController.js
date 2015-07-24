app.controller("HomeController", function($scope, ChangeText){
    
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
    var textArr = ["puissant", "invincible", "un athlète", "un warrior", "un spartan warrior"];
    $scope.textTitle = "plus fort"; // Initialisation du premier texte
    ChangeText.run($scope, textArr, 0); // Lancement de la fonction permettant de changer le texte
    
});