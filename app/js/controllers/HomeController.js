app.controller("HomeController", function($scope){
    
    $scope.modalInscription = false; // Initialisation modal inscription
    
    // Affichage modal inscription
    $scope.showModalInscription = function(){
        
        $scope.modalInscription = true;
        
    };
    
});