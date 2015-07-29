services.factory("Autocomplete", function(){
    
    autocomplete = {};
    
    // Autocomplétion google maps
    autocomplete.run = function(){
        
        // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
        var adLocation = document.getElementById("adLocation");
        var search = new google.maps.places.Autocomplete(adLocation);
        
    };
    
    // Récupération informations geocodage adresse
    autocomplete.geocode = function(){
        
        // https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
        var geocoder = new google.maps.Geocoder();
        var address = document.getElementById("adLocation").value;
        
        geocoder.geocode({
            
            "address": address
            
        }, function(results, status){
            
            if(status === google.maps.GeocoderStatus.OK){
                
                console.log(results[0].geometry.location);
                return results[0].geometry.location;
                
            }else{
                
                console.log("Geocode error : " + status);
                
            }
            
        });
        
    };
    
    return autocomplete;
    
});