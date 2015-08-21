services.factory("Map", function(Address){
    
    // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch (trouver toutes les places d'une ville)
    // https://developers.google.com/places/javascript/
    // https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
    
    var map = {};
    
    // Initialisation de la carte
    map.init = function(zoom, position){
        
        var mapElem; // carte
        
        mapElem = new google.maps.Map(document.getElementById("map"), {
                    
            center: position,
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            streetViewControl: false,
            disableDefaultUI: true

        });
        
        map.marker(mapElem, position);
        
    };
    
    map.marker = function(map, position){
        
        var image = "app/images/pin-green.png";
        
        var marker = new google.maps.Marker({
            
            map: map,
            position: position,
            icon: image,
            animation: google.maps.Animation.DROP
            
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
                
                if(results[0]){
                    
                    // Initalisation de la carte - Zoom + position
                    map.init(19, results[0].geometry.location);
                    
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