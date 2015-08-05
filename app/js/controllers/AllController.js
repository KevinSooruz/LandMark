app.controller("AllController", function($scope, Log, $location){
    
    // Initialisation état connexion utilisateur (log out)
    Log.storageInit();
    
    // Logout
    $scope.logout = function(){
        
        // Déconnexion
        Log.out();
        
    };
    
    // Acces aux adresses de la liste sélectionnée
    $scope.viewAddressesList = function(nameList){
        
        $location.path("/addresses/" + nameList);
        
    };
    
});