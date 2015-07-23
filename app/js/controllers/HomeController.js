app.controller("HomeController", function($scope, Modal){
    
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
    
});