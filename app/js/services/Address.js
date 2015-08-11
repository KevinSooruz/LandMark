services.factory("Address", function(Api, $timeout, $q, $routeParams){
    
    var address = {};
    
    // Informations adresses utilisateur
    address.get = function(){
        
        var deferred = $q.defer();
        
        // Initialisation objet data
        var data = {};
        
        // Si paramètre url $routeParams
        if($routeParams){
            
            data = $routeParams;
            
        }
        
        // Paramètre pour get lists
        data.user = "addresses";
        
        Api.get("back/controls/addressesCtrl.php", data).then(function(response){
            
            return deferred.resolve(response.data);
            
        }, function(data, status, config, headers){
            
            return deferred.reject(data, status, config, headers);
            
        });
        
        return deferred.promise;
        
    };
    
    address.post = function(data, scope){
        
        Api.post("back/controls/addressesCtrl.php", data).then(function(response){
            
            switch(response.data){
                    
                    case "emptyName":
                        
                        // Si pas de nom renseigné
                        scope.errorName = true;
                    
                        break;
                    
                    case "emptyLocation":
                    
                        // Si pas d'adresse renseignée
                        scope.errorLocation = true;
                    
                        break;
                    
                    case "nameExist":
                    
                        scope.nameExist = true;
                    
                        break;
                    
                    case "successAddAddress":
                    
                        // Envoie des données au front
                        scope.addresses.push({
                
                            name: data.name,
                            location: data.location,
                            categorie: data.categorie,
                            list: data.list,
                            phone: data.phone

                        });
                    
                        // Si succés on remet tout les éléments du formulaire à 0
                        var adName = document.getElementById("adName");
                        var adLocation = document.getElementById("adLocation");
                    
                        scope.adName = "";
                        scope.adLocation = "";
                        scope.categorieSelect = "";
                        scope.listSelect = "";
                        scope.adPhone = "";
                    
                        $timeout(function(){
                            
                            adName.classList.remove("ng-invalid");
                            adLocation.classList.remove("ng-invalid");
                            
                        });
                    
                        // Réinitialisation de l'objet adresse pour nouvelle adresse
                        scope.adresse = {};
                        scope.adresse.categorie = "Autre";
                    
                        break;
                    
            }
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            
        });
        
    };
    
    return address;
    
});