app.directive("inscription", function(){
    
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
            
        }
        
    };
    
    return inscription;
    
});