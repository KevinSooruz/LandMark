app.controller("AdressesController", function($scope, Autocomplete, Geocode, Address, User, Lists){
    
    // Service autocomplétion
    Autocomplete.run();
    
    // Initialisation Objet adresse
    var adresse = {};
    
    /////////////////////////////////// Categories ///////////////////////////////////
    
    ///// Sélection de la catégorie /////
    $scope.selectCategorie = function(){
        
        // Supression message erreur geocode
        $scope.errorGeocode = false;
        
    };
    
    /////////////////////////////////// Listes ///////////////////////////////////
    
    ///// Ajout de liste /////
    $scope.adList = function(listName){
        
        // Si pattern pas correct ou si nom liste vide on ne continu pas
        if($scope.adLists.listName.$error.pattern){
            
            $scope.errorPatternList = true;
            
        }else if(listName === undefined || listName === ""){
            
            $scope.errorList = true;
            $scope.errorNameList = true;
            return;
            
        }else{
            
            Lists.post($scope, listName);
            
        }
        
    };
    
    ///// Sélection de la liste /////
    $scope.selectList = function(){
        
        // Supression message erreur geocode
        $scope.errorGeocode = false;
        
    };
    
    /////////////////////////////////// Adresse ///////////////////////////////////
    
    ///// Ajout adresse /////
    $scope.adresseAdd = function(){
        
        // Supression message erreur geocode
        $scope.errorGeocode = false;
        
        // Récupération de l'adresse
        var location = document.getElementById("adLocation").value;
        
        // Si pattern pas correct ou si nom adresse vide et adresse vide on ne continu pas
        if($scope.adresses.adName.$error.pattern || $scope.adresses.adLocation.$error.pattern || $scope.adresses.adPhone.$error.pattern){
            
            $scope.errorPatternAddress = true;
            return;
            
        }else if($scope.adName === undefined || $scope.adName === ""){
            
            // Si nom adresse vide
            $scope.errorName = true;
            return;
            
        }else if(location === undefined || location === ""){
            
            // Si adresse vide
            $scope.errorLocation = true;
            return;
            
        }
        
        // Envoie donnée location à objet adresse
        adresse.location = location;
        
        // Envoie donnée nom à objet adresse
        adresse.name = $scope.adName;
        
        // Envoie donnée tel à objet adresse
        adresse.phone = $scope.adPhone;
        
        if(adresse.phone === undefined){
            
            adresse.phone = "";
            
        }
        
        // Envoie donnée catégorie à objet adresse
        var adCategorie = document.getElementById("adCategorie").value;
        
        if(adCategorie === undefined || adCategorie === ""){
            
            adresse.categorie = "Autre";
            
        }else{
            
            adresse.categorie = adCategorie;
            
        }
        
        // Envoie donnée liste à objet adresse
        var adList = document.getElementById("adList").value;
        
        adresse.list = adList;
        
        if(adresse.list === undefined){
            
            adresse.list = "";
            
        }
        
        // Service geocode pour récupérer la latitude et la longitude de l'adresse
        Geocode.getId(location).then(function(response){
            
            adresse.placeId = response[0].place_id;
            adresse.lat = response[0].geometry.location.G;
            adresse.lng = response[0].geometry.location.K;
            
        }, function(status){
            
            // Erreurs
            console.log("Error geocode : " + status);
            $scope.errorGeocode = true;
            
        }).finally(function(){
            
            // Finally on lance quand même l'enregistrement car pas besoin d'avoir les coordonnées GPS pour enregistrer l'adresse
            Address.post(adresse, $scope);

        });
        
    };
    
});