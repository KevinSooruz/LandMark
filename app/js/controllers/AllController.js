app.controller("AllController", function($scope, Log, $location){
    
    /////////////////////////////////// Pattern ///////////////////////////////////
    
    // Pattern word
    // "w" de a à z, "s" espace, "$" caractères spéciaux sauf ceux mentionnés
    $scope.word = /^[\w*\àäâéèëêïîöôüûùç\s*\-!?%€#&()=+/*.,':]+$/;
    
    // Pattern téléphone
    // "s" espaces, "$" caractères spéciaux sauf ceux mentionnés
    $scope.tel = /^[0-9\s*\-.+()]+$/;
    
    // Pattern email
    $scope.mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
    
    /////////////////////////////////// Utilisateur ///////////////////////////////////
    
    // Initialisation état connexion utilisateur (log out)
    Log.storageInit();
    
    // Logout
    $scope.logout = function(){
        
        // Déconnexion
        Log.out();
        
    };
    
    /////////////////////////////////// Redirection ///////////////////////////////////
    
    // Redirection
    $scope.redirect = function(locate){
        
        $location.path(locate);
        
    };
    
});