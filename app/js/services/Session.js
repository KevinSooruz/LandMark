app.session = function(Api, $location){
    
    var session = sessionStorage.getItem("Log");
    
    // Si utilisateur connecté on effectue une vérification session backend pour plus de sécurité
    if(session === "1"){
        
        // Vérification si session active
        Api.get("back/controls/sessionCtrl.php").then(function(response){

            // Si session non active, retour accueil pour que les utilisateurs ne puissent utiliser l'appli sans connexion
            if(response.data !== "session"){

                $location.path("/");

            }

        });
        
    }else{
        
        // Si session === 0 retour accueil
        $location.path("/");
        
    }
    
};