app.directive("inscription", function(Modal){
    
    var inscription = {
        
        restrict: "E",
        replace: true,
        templateUrl: "app/views/inscriptionModal.php",
        link: function(scope){
            
            // Initialisation modal
            Modal.init(scope);
            
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
            
            // Validation formulaire
            scope.confirmInscription = function(user){
                
                // Données utilisées pour l'enregistrement de l'utilisateur
                this.user.inscription = "login"; // Envoie de la donnée inscription pour différencier les 2 POST en back office (inscription ou connexion)
                var data = angular.copy(user);
                
                Modal.confirm(scope, data);
                
            };
            
        }
        
    };
    
    return inscription;
    
});