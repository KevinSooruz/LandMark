app.controller("AddressesController", function($scope, Autocomplete, Geocode, Address, User, Lists){
    
    /////////////////////////////////// Utilisateur ///////////////////////////////////
    
    // Initialisation des informations utilisateurs
    User.get(); // Possibilité d'appeler l'utilisateur ailleur dans l'appli grâce à $rootScope
    
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
    
    ///// Service autocomplétion /////
    Autocomplete.run($scope);
    
    // Met à jour les informations si l'utilisateur ne sélectionne pas une google place
    $scope.updateInformations = function(){
        
        Autocomplete.updateInformations($scope);
        
    };
    
    ///// Ajout adresse /////
    $scope.adresseAdd = function(){
        
        var data = angular.copy($scope.addAddress);
        
        Address.post(data, $scope);
        
        return;
        
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