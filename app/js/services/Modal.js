services.factory("Modal", function(Api, Log){
    
    var modal = {};
    
    // Initialisation modal
    modal.init = function(scope){
        
        scope.userExist = false; // Initialisation userExist en base
        scope.userExistCo = false;
        scope.wrongMail = false; // Initialisation wrongMail backend
        scope.wrongMailCo = false;
        scope.errorModalBackEnd = false; // Initialisation message erreur général
        
    };
    
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

                    case "userExist":

                        // Affichage message erreur user exist
                        scope.userExist = true;

                        break;

                    case "wrongMail":

                        // Affichage message erreur wrong mail
                        scope.wrongMail = true;

                        break;

                    case "userAdded":

                        scope.modalInscription = false; // suppression modal

                        // Stockage info session
                        // do something
                        // La session est créé (backend), on peut renvoyer vers le profil utilisateur
                        Log.in("/profil");

                        break;

                }

            }

        });

    };
    
    return modal;
    
});