app.controller("AllController", function($scope, Log, $location, $rootScope){
    
    /////////////////////////////////// Pattern ///////////////////////////////////
    
    // Pattern word
    // "w" de a à z, "s" espace, "$" caractères spéciaux sauf ceux mentionnés
    $scope.word = /^[\w*\àäâéèëêïîöôüûùç\s*\-_.€#=+/:]+$/;
    
    // Pattern word adresse
    $scope.wordAddress = /^[\w*\àäâéèëêïîöôüûùç\s*\-_!?%€#&()=+/*.,':]+$/;
    
    // Pattern téléphone
    // "s" espaces, "$" caractères spéciaux sauf ceux mentionnés
    $scope.tel = /^[0-9\s*\-.+()]+$/;
    
    // Pattern email
    $scope.mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
    
    /////////////////////////////////// Utilisateur ///////////////////////////////////
    
    // Création de l'objet user
    $rootScope.user = {};
    
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
    
    // Redirection après choix sur menu déroulant. Ne fonctionne pas avec redirect
    $scope.relocate = function(elem, url){
        
        var elemValue = document.getElementById(elem).value;
        
        if(elemValue === ""){
            
            return;
            
        }
        
        $location.path(url + elemValue);
        
    };
    
});