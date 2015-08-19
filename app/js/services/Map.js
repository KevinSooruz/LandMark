services.factory("Map", function(Address){
    
    // https://developers.google.com/places/javascript/
    
    var map = {};
    
    // Initialisation de la carte
    map.init = function(zoom, position){
        
        var map; // carte
        
        map = new google.maps.Map(document.getElementById("map"), {
                    
            center: position,
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            streetViewControl: false,
            disableDefaultUI: true

        });
        
        map.marker(map, position);
        
    };
    
    map.marker = function(map, position){
        
        var marker = new google.maps.Marker({
            
            map: map,
            position: position
            
        });
        
    };
    
    map.initGeocode = function(scope){
        
        // Address get pour récupération de l'ID de l'adresse
        Address.get().then(function(response){
            
            // Succès === geocodage
            map.geocodeById(scope, response[0].placeId);

        }, function(headers, data, status, config){

            console.log(headers, data, status, config);
            map.error(scope);

        });
        
    };
    
    // Geocode par ID - plus précis et plus sûr que par lat/lng
    map.geocodeById = function(scope, placeId){
        
        var geocoder = new google.maps.Geocoder;
        
        geocoder.geocode({
            
            "placeId": placeId
        
        }, function(results, status){
            
            if(status === google.maps.GeocoderStatus.OK){
                
                console.log(results);
                if(results[0]){
                    
                    // Initalisation de la carte - Zoom + position
                    map.init(18, results[0].geometry.location);
                    
                }else{
              
                    map.error(scope);
              
                }
                
            }else{
                
                map.error(scope);
                
            }
            
        });
        
    };
    
    map.error = function(scope){
        
        scope.textErrorMap = "Désolé, nous ne pouvons pas afficher la position géographique de votre adresse.";
        scope.errorMap = true;
        
    };
    
    return map;
    
});