app.directive("inscription", function(Api, Log){
    
    var inscription = {
        
        restrict: "E",
        replace: true,
        templateUrl: "app/views/inscriptionModal.php",
        link: function(scope){
            
            // Animation label on focus label
            scope.focusInputModal = function(inputId){
        
                var label = document.getElementById("label" + inputId);

                label.classList.add("move");

            };

            // Animation label on blur label
            scope.blurInputModal = function(inputId){

                var input = document.getElementById(inputId);
                var value = input.value;
                var label = document.getElementById("label" + inputId);

                // Si value vide animation label sinon label reste en position haute
                if(value === "" || value === undefined){

                    label.classList.remove("move");

                }

            };
            
            // Fermeture modal
            scope.hideModal = function(){

                scope.modalInscription = false;

            };
            
            scope.userExist = false; // Initialisation userExist en base
            scope.wrongMail = false; // Initialisation wrongMail backend
            
            // Validation formulaire inscription
            scope.confirmInscription = function(){
                
                // Données utilisées pour l'enregistrement de l'utilisateur
                var data = this.user;
                
                // Envoi des données d'inscription
                Api.post("back/controls/authUserCtrl.php", data).then(function(response){
                    
                    if(response === "error"){
                        
                        
                        
                    }else{
                        
                        switch(response.data){
                            
                            case "userExist":
                                
                                scope.userExist = true;
                                
                                break;

                            case "wrongMail":
                                
                                scope.wrongMail = true;

                                break;

                            case "userAdded":
                                
                                scope.modalInscription = false;
                                
                                // Stockage info session
                                // do something
                                // La session est créé (backend), on peut renvoyer vers le profil utilisateur
                                Log.in("/profil");

                                break;

                        }
                        
                    }
                    
                });
                
            };
            
        }
        
    };
    
    return inscription;
    
});