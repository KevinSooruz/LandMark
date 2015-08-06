services.factory("Modal", function(Api, Log, $timeout){
    
    var modal = {};
    
    // Animation label on focus
    modal.inputFocus = function(inputId){
        
        var label = document.getElementById("label" + inputId);

        label.classList.add("move");
        
    };
    
    // Animation label on blur
    modal.inputBlur = function(inputId){
        
        var input = document.getElementById(inputId);
        var value = input.value;
        var label = document.getElementById("label" + inputId);

        // Si value vide animation label sinon label reste en position haute
        if(value === "" || value === undefined){

            label.classList.remove("move");

        }
        
    };
    
    // Permet de passer de la connexion à l'inscription et inversement
    modal.change = function(scope){
        
        // Si inscription
        if(scope.modalInscription === true){
            
            scope.modalInscription = false; // Remove inscription
            scope.modalConnection = true; // Show connexion
    
        }else{
            
            scope.modalConnection = false; // Remove connexion
            scope.modalInscription = true; // Show inscription
            
        }
        
    };
    
    // Validation formulaire
    modal.confirm = function(scope, data){
        
        // Si pas de données on ne traite pas la suite
        if(data === undefined){
            
            return;
            
        }
                
        // Suppression message erreur général si apparait
        scope.errorModalBackEnd = false;

        // Envoi des données d'inscription
        Api.post("back/controls/authUserCtrl.php", data).then(function(response){

            if(response === "error"){

                scope.errorModalBackEnd = true;

            }else{

                switch(response.data){
                    
                    case "userNotExist":
                        
                        // Affichage message erreur utilisateur n'existe pas (connexion)
                        scope.userNotExist = true;
                    
                        break;
                        
                    case "wrongPasswordConnection":
                        
                        // Message erreur password
                        scope.wrongPasswordConnection = true;
                        
                        break;
                        
                    case "wrongPassword":
                    
                        // Affichage message erreur mot de passe (connexion)
                        scope.wrongPasswordConnection = true;
                    
                        break;
                        
                    case "userLogin":
                        
                        // Connexion
                        // Utilisateur connecté
                        Log.storageIn();
                        
                        // La session est créé (backend), on peut renvoyer vers le profil utilisateur
                        Log.in("/addresses");
                        
                        // suppression modal : Timeout pour éviter de revenir sur la page d'accueil avant d'être renvoyé vers le compte utilisateur
                        $timeout(function(){
                            
                            scope.modalConnection = false;
                            
                        }, 200);
                        
                        break;
                        
                    case "wrongSurnameInscription":
                        
                        // Message erreur surname
                        scope.wrongSurnameInscription = true;
                        
                        break;
                        
                    case "wrongNameInscription":
                        
                        // Message erreur nom
                        scope.wrongNameInscription = true;
                        
                        break;

                    case "userExist":

                        // Affichage message erreur utilisateur existe déjà (inscription)
                        scope.userExist = true;

                        break;

                    case "wrongMailInscription":

                        // Affichage message erreur mauvais email (inscription)
                        scope.wrongMailInscription = true;
                        scope.inscription.uEmail.$error.email = true;

                        break;
                        
                    case "wrongPasswordInscription":
                        
                        // Message erreur password
                        scope.wrongPasswordInscription = true;
                        
                        break;

                    case "userAdded":
                        
                        // Inscription
                        // Utilisateur connecté
                        Log.storageIn();

                        // Stockage info session
                        // do something
                        // La session est créé (backend), on peut renvoyer vers le profil utilisateur
                        Log.in("/addresses");
                        
                        // suppression modal : Timeout pour éviter de revenir sur la page d'accueil avant d'être renvoyé vers le compte utilisateur
                        $timeout(function(){
                            
                            scope.modalInscription = false;
                            
                        }, 200);

                        break;

                }

            }

        });

    };
    
    return modal;
    
});