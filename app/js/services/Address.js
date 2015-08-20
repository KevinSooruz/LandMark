services.factory("Address", function(Api, $timeout, $q, $routeParams, Correct, $location){
    
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
        
        // Supression message erreur geocode
        scope.errorGeocode = false;
        
        if(scope.adresses.adName.$error.required){
            
            // Si erreur champ vide nom
            scope.errorAddRequiredAddress = true;
            scope.textErrorAddAddress = "Merci de reseigner un nom.";
            return;
            
        }else if(scope.adresses.adLocation.$error.required){
            
            // Si erreur champ vide location
            scope.errorAddRequiredLocation = true;
            scope.textErrorAddAddress = "Merci de reseigner une adresse.";
            return;
            
        }else if(scope.adresses.adName.$error.minlength || scope.adresses.adName.$error.maxlength){
            
            // Si erreur nombre de caractères nom
            scope.errorAddLengthAddress = true;
            scope.textErrorAddAddress = "Nombre de caractères interdit.";
            return;
            
        }else if(scope.adresses.adName.$error.pattern){
            
            // Si erreur pattern nom
            scope.errorAddAddressPattern = true;
            scope.textErrorAddAddress = "Caractères spéciaux interdits.";
            return;
            
        }else if(scope.adresses.adLocation.$error.pattern){
            
            // Si erreur pattern location
            scope.errorAddLocationPattern = true;
            scope.textErrorAddAddress = "Caractères spéciaux interdits.";
            return;
            
        }else if(scope.adresses.adPhone.$error.minlength || scope.adresses.adPhone.$error.maxlength){
            
            // Si erreur nombre de caractères téléphone
            scope.errorAddLengthPhone = true;
            scope.textErrorAddAddress = "Nombre de caractères interdit.";
            return;
            
        }else if(scope.adresses.adPhone.$error.pattern){
            
            // Si erreur pattern téléphone
            scope.errorAddPhonePattern = true;
            scope.textErrorAddAddress = "Merci de ne renseigner que des chiffres.";
            return;
            
        }
        
        // Modification données catégorie
        if(!data.categorie || data.categorie === undefined){
            
            data.categorie = "Autre";
            
        }else{
            
            data.categorie = data.categorie.name;
            
        }
        
        // Modification donnée liste
        if(!data.list || data.list === undefined){
            
            data.list = "";
            
        }else{
            
            data.list = data.list.name;
            
        }
        
        console.log(data);
        
        Api.post("back/controls/addressesCtrl.php", data).then(function(response){
            
            switch(response.data){
                    
                    case "emptyName":
                        
                        // Si pas de nom renseigné
                        scope.errorAddRequiredAddress = true;
                        scope.textErrorAddAddress = "Merci de reseigner un nom.";
                    
                        break;
                    
                    case "emptyLocation":
                    
                        // Si pas d'adresse renseignée
                        scope.errorAddRequiredLocation = true;
                        scope.textErrorAddAddress = "Merci de reseigner une adresse.";
                    
                        break;
                    
                    case "nameExist":
                    
                        // si nom existe déjà
                        scope.nameExist = true;
                        scope.textErrorAddAddress = "Vous possédez déjà une adresse avec ce nom. Merci de le modifier.";
                    
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
                    
                        // Réinitialisation de l'objet adresse pour nouvelle adresse
                        scope.addAddress = {};
                    
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
    
    // Ajout d'une adresse dans une liste
    address.addList = function(scope, dataList){
        
        var addressName = $routeParams.nameAddress;
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
        
        // Si pas de données
        if(dataUpAddress === undefined){
            
            return;
            
        }
        
        if(scope.addressModification.changeName.$error.minlength || scope.addressModification.changeName.$error.maxlength){
            
            // Si erreur nombre de caractères nom
            scope.errorChangeLengthAddress = true;
            scope.textErrorChangeAddress = "Nombre de caractères interdit.";
            return;
            
        }if(scope.addressModification.changeName.$error.pattern){
            
            // Si erreur pattern nom
            scope.errorChangeAddress = true;
            scope.textErrorChangeAddress = "Caractères spéciaux interdits.";
            return;
            
        }else if(scope.addressModification.changePhone.$error.minlength || scope.addressModification.changePhone.$error.maxlength){
            
            // Si erreur nombre de caractères phone
            scope.errorChangeLengthPhone = true;
            scope.textErrorChangeAddress = "Nombre de caractères interdit.";
            return;
            
        }else if(scope.addressModification.changePhone.$error.pattern){
            
            // Si erreur pattern phone
            scope.errorChangePhone = true;
            scope.textErrorChangeAddress = "Merci de ne renseigner que des chiffres.";
            return;
            
        }
        
        // Si undefined
        if(dataUpAddress.phone === undefined){
            
            dataUpAddress.phone = "";
            
        }
        
        if(dataUpAddress.newname === undefined){
            
            dataUpAddress.newname = "";
            
        }
        
        // Si categorie
        if(dataUpAddress.newcategorie){
            
            // récupération du nom de la catégorie
            dataUpAddress.newcategorie = dataUpAddress.newcategorie.name;
            
        }else{
            
            dataUpAddress.newcategorie = "";
            
        }
        
        dataUpAddress.name = scope.addresses[0].name;
        dataUpAddress.categorie = scope.addresses[0].categorie;
        
        // Envoie des données
        Api.post("back/controls/addressesCtrl.php", dataUpAddress).then(function(response){
            
            switch(response.data){
                    
                case "errorCharNewName":
                    
                    // Si erreur nombre de caractères nom
                    scope.errorChangeLengthAddress = true;
                    scope.textErrorChangeAddress = "Nombre de caractères interdit.";
                    
                    break;
                    
                case "errorCharNewPhone":
                    
                    // Si erreur nombre de caractères phone
                    scope.errorChangeLengthPhone = true;
                    scope.textErrorChangeAddress = "Nombre de caractères interdit.";
                    
                    break;
                    
                case "categorieDoesntExist":
                    
                    errorDoesntExist("La catégorie");
                    
                    break;
                    
                case "addressDosentExist":
                    
                    errorDoesntExist("L'adresse");
                    
                    break;
                    
                case "addressAlreadyExist":
                    
                    scope.errorChangeAddress = true;
                    scope.textErrorChangeAddress = "Ce nom d'adresse existe déjà. Merci de le modifier.";
                    
                    break;
                    
                case "succesChangeAddress":
                    
                    success();
                    
                    scope.addresses[0].phone = dataUpAddress.phone;
                    
                    break;
                    
                case "succesChangeAddressName":
                    
                    success();
                    
                    // Redirection
                    $location.path("/addresses/categories/" + dataUpAddress.categorie + "/" + dataUpAddress.newname);
                    
                    break;
                    
                case "succesChangeAddressCategorie":
                    
                    success();
                    
                    // Redirection
                    $location.path("/addresses/categories/" + dataUpAddress.newcategorie + "/" + dataUpAddress.name);
                    
                    break;
                    
                case "succesChangeAddressNameCategorie":
                    
                    success();
                    
                    // Redirection
                    $location.path("/addresses/categories/" + dataUpAddress.newcategorie + "/" + dataUpAddress.newname);
                    
                    break;
                    
            }
            
        }, function(headers, data, status, config){
            
            console.log(headers, data, status, config);
            scope.errorChangeAddress = true;
            scope.textErrorChangeAddress = "Une erreur s'est produite, merci de recharger la page.";
            
        });
        
         // Erreur adresse / catégorie n'existe pas
        var errorDoesntExist = function(elem){
            
            scope.errorBackEndAddress = true;
            scope.textErrorChangeAddress = elem + " d'origine n'existe pas.";
            
        };
        
        var success = function(){
            
            // Affichage front envoi ok
            Correct.run(scope, "correctChangeAddress");
            
            // Réinitialisation
            scope.dataUpAddress.newname = "";
            scope.dataUpAddress.phone = "";
            scope.dataUpAddress.newcategorie = "";
            
        };
        
    };
    
    // Suppression adresse
    address.delete = function(scope){
        
        var data = {
            
            delete: true,
            name: scope.addresses[0].name,
            categorie: scope.addresses[0].categorie
            
        };
        
        Api.post("back/controls/addressesCtrl.php", data).then(function(response){
            
            if(response.data === "successDelete"){
                
                $location.path("/addresses/categories/" + data.categorie);
                
            }
            
        }, function(headers, data, status, config){
            
            console.log(headers, data, status, config);
            
        });
        
    };
    
    return address;
    
});