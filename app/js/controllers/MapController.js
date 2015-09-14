app.controller("mapController", function($scope, Map, $location, Address){
    
    // Autocomplete lieu
    Map.autocompleteCity($scope, "autocompletePlaceMap");
    
    // Se rendre sur le lieu sélectionné dans le moteur de recherche
    $scope.goToPlace = function(placeId){
        
        if(placeId === undefined || placeId === ""){
            
            return;
            
        }
        
        $location.path("/map/search/" + placeId);
        
    };
    
    // Sélection d'une catégorie
    $scope.categorieSelect = function(){
        
        // Si mapSelect existe
        if($scope.mapSelect){
            
            // Si mapSelect n'est pas null "choisissez une catégorie === null"
            if($scope.mapSelect.categorie){
                
                $location.path("/map/categories/" + $scope.mapSelect.categorie.name);
                
            }
            
        }
        
    };
    
    // Sélection d'une liste
    $scope.listSelect = function(){
        
        // Si mapSelect existe
        if($scope.mapSelect){
            
            // Si mapSelect n'est pas null "choisissez une catégorie === null"
            if($scope.mapSelect.list){
                
                $location.path("/map/lists/" + $scope.mapSelect.list.name);
                
            }
            
        }
        
    };
    
    // Initialisation message erreur
    $scope.mapError = false;
    $scope.textErrorMap = "";
    
    // Ajout adresse depuis la modal
    $scope.addAddressMapModal = function(place, categorie){
        
        // Remplacement de caractères spéciaux du nom pour éviter les problèmes d'enregistrement dans base de données
        var name;
        name = $scope.modalMapTitle.replace("&", "AND");
        name = name.replace("'", "");
        
        var data = {
            
            name: name,
            location: place.formatted_address,
            phone: place.formatted_phone_number,
            categorie: "Autre",
            lat: place.geometry.location.G,
            lng: place.geometry.location.K,
            placeId: place.place_id
            
        };
        
        if(categorie){
            
            data.categorie = categorie
            
        }
        
        Address.post(data, $scope);
        
    };
    
});