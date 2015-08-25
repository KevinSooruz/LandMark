services.factory("Map", function(Address, $location){
    
    // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch (trouver toutes les places d'une ville)
    // https://developers.google.com/places/javascript/
    // https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
    
    var map = {};
    
    // Initialisation de la carte
    map.init = function(){
        
        var mapElem; // carte
        var marker = false;
            
        // Centre France pour initialisation de la carte principale
        var position = {
                
            lat: 46.227638, 
            lng: 2.213749
                
        };
        
        // Initialisation de la carte
        mapElem = new google.maps.Map(document.getElementById("map"), {
                    
            center: position,
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            streetViewControl: false,
            disableDefaultUI: true

        });
        
        // Récupération de toutes les adresses ou des addresses par catégories / liste
        Address.get().then(function(response){
                    
            if(response === "noResult"){
                
                // Categorie n'existe pas
                $location.path("/map");
                
            }else{
                
                // Ajout des markers
                var posMarker;
                var max = response.length;
                var i = 0;

                for(; i < max; i++){

                    posMarker = {

                        lat: parseFloat(response[i].lat),
                        lng: parseFloat(response[i].lng)

                    };

                    map.marker(mapElem, posMarker, max);

                }
                
            }
                    
        }, function(headers, data, status, config){
            
            console.log(headers, data, status, config);
            map.error(scope);
            
        });
        
    };
    
    // Création d'un marker
    map.marker = function(map, position, max){
        
        var image = "app/images/pin-green.png";
        
        var marker = new google.maps.Marker({
            
            map: map,
            position: position,
            icon: image,
            animation: google.maps.Animation.DROP
            
        });
        
        // Si max === 1 cela signifie que nous sommes sur la modification d'adresse ou que nous pouvons zommer sur ce point sur la carte
        if(max === 1){
            
            map.setZoom(19);
            map.setCenter(position);
            
        }
        
        //map.createInfo();
        
    };
    
    map.createInfo = function(){
        
        console.log("ok");
        
    };
    
    map.error = function(scope){
        
        scope.textErrorMap = "Désolé, nous ne pouvons pas afficher la position géographique de votre adresse.";
        scope.errorMap = true;
        
    };
    
    return map;
    
});