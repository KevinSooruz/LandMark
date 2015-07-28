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
                
                // Utilisateur déconnecté
                log.storageOut();
                
                // Redirection accueil
                $location.path("/");
                
            }
            
        });
        
    };
    
    log.storageInit = function(){
        
        // Si session Log
        if(sessionStorage.getItem("Log")){
            
            var session = sessionStorage.getItem("Log");
            
            // Si session en cours on initialise la connexion à 1
            if(session === "1"){
                
                sessionStorage.setItem("Log", 1);
                
            }
            
        }else{
            
            // Si pas de session Log initialisation à 0
            sessionStorage.setItem("Log", 0);
            
        }
        
    };
    
    log.storageIn = function(){
        
        // Modification état connexion à connecté
        sessionStorage.setItem("Log", 1);
        
    };
    
    log.storageOut = function(){
        
        // Modification état connexion à déconnecté
        sessionStorage.setItem("Log", 0);
        
    };
    
    return log;
    
});