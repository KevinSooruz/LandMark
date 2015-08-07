services.factory("Geocode", function($q){
    
    // Api Key https://console.developers.google.com/project/985778741950/apiui/credential?authuser=0
    // https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCogKpWtl69ABtTDluzuAh4bpAQMbiDHwc&placeid=ChIJrTLr-GyuEmsRBfy61i59si0 -- Ne pas mettre en place car pas assez de société renseigne horaires + telephone (dommage)
    
    var geocode = {};
    
    // Récupération informations geocodage adresse
    geocode.getId = function(location){
        
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