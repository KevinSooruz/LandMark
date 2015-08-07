app.controller("AllController", function($scope, Log, $location){
    
    // Pattern word
    // "w" de a à z, "s" espace, "$" caractères spéciaux sauf ceux mentionnés
    $scope.word = /^[\w*\àäâéèëêïîöôüûùç\s*\-!?%€#&()=+/*.,':]+$/;
    
    // Pattern téléphone
    // "d" tous les chiffres, "s" espaces, "$" caractères spéciaux sauf ceux mentionnés
    $scope.tel = /^[\d*\s*\-.]+$/;
    
    // Initialisation état connexion utilisateur (log out)
    Log.storageInit();
    
    // Logout
    $scope.logout = function(){
        
        // Déconnexion
        Log.out();
        
    };
    
    // Redirection
    $scope.redirect = function(locate){
        
        $location.path(locate);
        
    };
    
});