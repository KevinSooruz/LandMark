services.factory("Log", function(Api, $location){
    
    var log = {};
    
    // Connexion utilisateur === redirection vers url
    log.in = function(url){
        
        $location.path(url);
        
    };
    
    // Logout
    log.out = function(){
        
        // Logout true
        var data = {
            
            logout: true
            
        };
        
        Api.post("back/controls/logoutCtrl.php", data).then(function(response){
            
            // Si réponse === logout on retour à la page d'accueil + les informations sessions sont détruites (backend)
            if(response.data === "logout"){
                
                $location.path("/");
                
            }
            
        });
        
    };
    
    return log;
    
});