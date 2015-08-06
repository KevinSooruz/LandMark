app.directive("connection", function(Modal){
    
    var connection = {
        
        restrict: "E",
        replace: true,
        templateUrl: "app/views/connectionModal.php",
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
            scope.hideModalConnection = function(){

                scope.modalConnection = false;

            };
            
            // Permet de passer de la connexion à l'inscription et inversement
            scope.changeModal = function(){
                
                Modal.change(scope);
        
            };
            
            // Validation formulaire
            scope.confirmConnection = function(userCo){
                
                var uEmailCo = document.getElementById("uEmailCo").value;
                var uPasswordCo = document.getElementById("uPasswordCo").value;
                
                if(scope.connection.uEmailCo.$error.email){
                    
                    scope.wrongMailConnection = true;
                    return;
                    
                }else if(scope.connection.uPasswordCo.$error.minlength || scope.connection.uPasswordCo.$error.maxlength){
                    
                    scope.wrongPasswordConnection = true;
                    return;
                    
                }else if(uEmailCo === "" || uEmailCo === undefined || uPasswordCo === "" || uPasswordCo === undefined){
                    
                    return;
                    
                }
                
                // Données utilisées pour l'enregistrement de l'utilisateur
                this.userCo.connection = "login"; // Envoie de la donnée connection pour différencier les 2 POST en back office (inscription ou connexion)
                var data = angular.copy(userCo);
                
                Modal.confirm(scope, data);
                
            };
            
        }
        
    };
    
    return connection;
    
});