app.directive("inscription", function(){
    
    var inscription = {
        
        restrict: "E",
        replace: true,
        templateUrl: "app/views/inscriptionModal.php",
        link: function(scope){
            
            scope.focusInputModal = function(inputId){
        
                var label = document.getElementById("label" + inputId);

                label.classList.add("move");

            };

            scope.blurInputModal = function(inputId){

                var input = document.getElementById(inputId);
                var value = input.value;
                var label = document.getElementById("label" + inputId);

                if(value === "" || value === undefined){

                    label.classList.remove("move");

                }

            };

            scope.hideModal = function(){

                scope.modalInscription = false;

            };
            
        }
        
    };
    
    return inscription;
    
});