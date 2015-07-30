services.factory("Geocode", function($q){
    
    var geocode = {};
    
    // Récupération informations geocodage adresse
    geocode.run = function(location){
        
        var deferred = $q.defer();
        
        // https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
        var geocoder = new google.maps.Geocoder();
        
        geocoder.geocode({
            
            "address": location
            
        }, function(results, status){
            
            if(status === google.maps.GeocoderStatus.OK){
                
                return deferred.resolve(results);
                
            }else{
                
                return deferred.reject(status);
                
            }
            
        });
        
        return deferred.promise;
        
    };
    
    return geocode;
    
});