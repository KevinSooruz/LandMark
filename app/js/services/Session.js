app.session = function(Api, $location){
    
    // Vérification si session active
    Api.get("back/controls/sessionCtrl.php").then(function(response){

        // Si session non active, retour accueil pour que les utilisateurs ne puissent utiliser l'appli sans connexion
        if(response.data !== "session"){

            $location.path("/");

        }

    });
    
};