services.factory("Autocomplete", function($timeout, $q){
    
    // https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
    
    autocomplete = {};
    
    // Autocomplétion google maps
    autocomplete.run = function(scope, elem){
        
        // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
        var adLocation = document.getElementById(elem);
        var search = new google.maps.places.Autocomplete(adLocation);
        
        // Récupération des informations de l'adresse lors de la sélection
        search.addListener("place_changed", function(){
            
            var place = search.getPlace();
           
            // Récupération des résultats
            autocomplete.result(scope, place);
            
        });
        
    };
    
    // Affichage des résultats au front
    autocomplete.result = function(scope, place){
        
        if(place){
            
            $timeout(function(){ // impossible d'effectuer une promise donc timeout pour remplacer "moins fiable"
            
                // adresse
                if(place.formatted_address){
                    
                    scope.addAddress.location = place.formatted_address;
                    
                }
                
                // téléphone
                if(place.formatted_phone_number){
                    
                    scope.addAddress.phone = place.formatted_phone_number;
                    
                }else{
                    
                    scope.addAddress.phone = "";
                    
                }
                
                scope.addAddress.lat = place.geometry.location.G;
                scope.addAddress.lng = place.geometry.location.K;
                scope.addAddress.placeId = place.place_id;
            
            });
            
        }
        
        return;
        
    };
    
    // Met à jour les informations si l'utilisateur ne sélectionne pas une google place
    autocomplete.updateInformations = function(scope){
        
        scope.addAddress.phone = "";
        scope.addAddress.lat = "";
        scope.addAddress.lng = "";
        scope.addAddress.placeId = "";
        
    };
    
    return autocomplete;
    
});