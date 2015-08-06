app.directive("inscription", function(Modal){
    
    var inscription = {
        
        restrict: "E",
        replace: true,
        templateUrl: "app/views/inscriptionModal.php",
        link: function(scope){
            
            // Animation label on focus
            scope.focusInputModal = function(inputId){
        
                Modal.inputFocus(inputId);

            };

            // Animation label on blur
            scope.blurInputModal = function(inputId){

                Modal.inputBlur(inputId);

            };
            
            // Fermeture modal inscription
            scope.hideModalInscription = function(){

                scope.modalInscription = false;

            };
            
            // Permet de passer de la connexion à l'inscription et inversement
            scope.changeModal = function(){
                
                Modal.change(scope);
        
            };
            
            // Validation formulaire
            scope.confirmInscription = function(user){
                
                var uSurname = document.getElementById("uSurname").value;
                var uName = document.getElementById("uName").value;
                var uEmail = document.getElementById("uEmail").value;
                var uPassword = document.getElementById("uPassword").value;
                
                if(scope.inscription.uSurname.$error.minlength || scope.inscription.uSurname.$error.maxlength || scope.inscription.uSurname.$error.pattern){
                    
                    scope.wrongSurnameInscription = true;
                    return;
                    
                }else if(scope.inscription.uName.$error.minlength || scope.inscription.uName.$error.maxlength || scope.inscription.uName.$error.pattern){
                    
                    scope.wrongNameInscription = true;
                    return;
                    
                }else if(scope.inscription.uEmail.$error.email){
                    
                    scope.wrongMailInscription = true;
                    return;
                    
                }else if(scope.inscription.uPassword.$error.minlength || scope.inscription.uPassword.$error.maxlength){
                    
                    scope.wrongPasswordInscription = true;
                    return;
                    
                }else if(uSurname === "" || uSurname === undefined || uName === "" || uName === undefined || uEmail === "" || uEmail === undefined || uPassword === "" || uPassword === undefined){
                    
                    return;
                    
                }
                
                // Données utilisées pour l'enregistrement de l'utilisateur
                this.user.inscription = "login"; // Envoie de la donnée inscription pour différencier les 2 POST en back office (inscription ou connexion)
                var data = angular.copy(user);
                
                Modal.confirm(scope, data);
                
            };
            
        }
        
    };
    
    return inscription;
    
});