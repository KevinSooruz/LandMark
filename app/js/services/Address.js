services.factory("Address", function(Api, $timeout, $q, $routeParams, Correct){
    
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
    
    // Ajout d'un adresse
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
                    
                        // Affichage front envoi ok
                        Correct.run(scope, "correctAddAddress");
                    
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
    
    // Ajout d'une adresse dans une liste
    address.addList = function(scope, dataList){
        
        var addressName = document.getElementById("addressName").value;
        var data = {};
        
        data.addressName = addressName;
        
        if(dataList){
            
            if(dataList.list){
                
                data.listName = dataList.list.name;
                
            }else if(!dataList.list || data.listName === undefined){
                
                // Message erreur liste non sélectionnée
                scope.errorAddInList = true;
                scope.textErrorAddInList = "Merci de sélectionner une liste.";
                return;
                
            }
            
        }else{
            
            // Message erreur liste non sélectionnée
            scope.errorAddInList = true;
            scope.textErrorAddInList = "Merci de sélectionner une liste.";
            return;
            
        }
        
        Api.post("back/controls/addressListCtrl.php", data).then(function(response){
            
            // Suppression message erreur adresse / liste
            scope.errorAddressInList = false;
            scope.errorAddInList = false;
            
            switch(response.data){
                    
                case "addressDoesntExist":
                    
                    // Message erreur adresse n'existe pas
                    scope.errorAddressInList = true;
                    
                    break;
                    
                case "emptyListName":
                    
                    // Message erreur liste non sélectionnée
                    scope.errorAddInList = true;
                    scope.textErrorAddInList = "Merci de sélectionner une liste.";
                    
                    break;
                    
                case "listDoesntExist":
                    
                    // Message erreur liste n'existe pas
                    scope.errorAddInList = true;
                    scope.textErrorAddInList = "Cette liste n'existe pas.";
                    
                    break;
                    
                case "addressAlreadyExistInList":
                    
                    // Message erreur liste existe déjà
                    scope.errorAddInList = true;
                    scope.textErrorAddInList = "Cette adresse existe déjà dans cette liste.";
                    
                    break;
                    
                case "successAddList":
                    
                    // Affichage front envoi ok
                    Correct.run(scope, "correctChangeList");
                    
                    // Suppression choix liste
                    scope.dataList.list = "";
                    
                    // Suppression message erreur
                    scope.errorAddInList = false;
                    
                    break;
                    
                    
            }
            
        }, function(headers, data, status, config){
            
            console.log(headers, data, status, config);
            scope.errorAddInList = true;
            scope.textErrorAddInList = "Une erreur s'est produite, merci de recharger la page.";
            
        });
        
    };
    
    // Mise à jour d'une adresse
    address.update = function(scope, dataUpAddress){
        
        console.log(dataUpAddress);
        
        // Si champs vides
        if(dataUpAddress === undefined){
            
            return;
            
        }
        
        return;
        Api.post("back/controls/addressesCtrl.php", data).then(function(response){
            
            console.log(response);
            
        }, function(headers, data, status, config){
            
            console.log(headers, data, status, config);
            
        });
        
    };
    
    return address;
    
});