services.factory("Address", function(Api, $timeout){
    
    var address = {};
    
    address.post = function(data, scope){
        
        Api.post("back/controls/userCtrl.php", data).then(function(response){
            
            switch(response.data){
                    
                    case "emptyName":
                        
                        // Si pas de nom renseigné
                        scope.errorName = true;
                    
                        break;
                    
                    case "emptyLocation":
                    
                        // Si pas d'adresse renseignée
                        scope.errorLocation = true;
                    
                        break;
                    
                    case "successAddAddress":
                    
                        // Si succés on remet tout à 0
                        var adName = document.getElementById("adName");
                        var adLocation = document.getElementById("adLocation");
                    
                        scope.categorieIndex = "";
                        scope.listIndex = "";
                        scope.adName = "";
                        scope.adLocation = "";
                    
                        $timeout(function(){
                            
                            adName.classList.remove("ng-invalid");
                            adLocation.classList.remove("ng-invalid");
                            
                        });
                    
                        break;
                    
            }
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            
        });
        
    };
    
    return address;
    
});