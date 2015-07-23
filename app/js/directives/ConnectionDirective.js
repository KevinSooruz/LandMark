app.directive("connection", function(Modal){
    
    var connection = {
        
        restrict: "E",
        replace: true,
        templateUrl: "app/views/connectionModal.php",
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
            scope.hideModalConnection = function(){

                scope.modalConnection = false;

            };
            
            // Validation formulaire
            scope.confirm = function(userCo){
                
                // Données utilisées pour l'enregistrement de l'utilisateur
                var data = angular.copy(userCo);
                
                Modal.confirm(scope, data);
                
            };
            
        }
        
    };
    
    return connection;
    
});