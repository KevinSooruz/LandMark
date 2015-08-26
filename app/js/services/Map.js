services.factory("Map", function(Address, $location, $routeParams){
    
    // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch (trouver toutes les places d'une ville)
    // https://developers.google.com/places/javascript/
    // https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
    
    var map = {};
    var mapElem; // carte
    
    // Initialisation de la carte
    map.init = function(){
        
        var marker = false;
        var position;
        
        // Centre France pour initialisation de la carte principale
        position = {
                
            lat: 46.227638, 
            lng: 2.213749
                
        };
        
        // Initialisation de l'élément carte
        map.initElem(position);
        
        // Paramètre de recherche sur ville + type de lieux
        if($routeParams.cityName && $routeParams.typeName){
            
            // Geocode par adresse renseignée dans l'url
            map.geocodeByAddress($routeParams.cityName, $routeParams.typeName);
            
            return;
            
        }
        
        // Récupération de toutes les adresses ou des addresses par catégories / liste
        Address.get().then(function(response){
              
            if(response === "noResult"){
                
                // Categorie n'existe pas
                $location.path("/map");
                
            }else if(response === "noResultAddress"){
                
                // Adresse n'existe pas
                $location.path("/map/categories/" + $routeParams.nameCategorie);
                
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

                    map.marker(posMarker, max);

                }
                
            }
                    
        }, function(headers, data, status, config){
            
            console.log(headers, data, status, config);
            map.error(scope);
            
        });
        
    };
    
    // Initialisation de l'élément carte
    map.initElem = function(position){
        
        mapElem = new google.maps.Map(document.getElementById("map"), {
                    
            center: position,
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            streetViewControl: false,
            disableDefaultUI: true

        });
        
    };
    
    // Création d'un marker
    map.marker = function(position, max){
        
        var image = "app/images/pin-green.png";
        
        var marker = new google.maps.Marker({
            
            map: mapElem,
            position: position,
            icon: image,
            animation: google.maps.Animation.DROP
            
        });
        
        // Si max === 1 cela signifie que nous sommes sur la modification d'adresse ou que nous pouvons zommer sur ce point sur la carte
        if(max === 1){
            
            mapElem.setZoom(19);
            mapElem.setCenter(position);
            
        }
        
        //map.createInfo();
        
    };
    
    map.createInfo = function(){
        
        console.log("ok");
        
    };
    
    map.autocompleteCity = function(scope, elem){
        
        // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
        // Restriction aux recherches de villes
        var element = document.getElementById(elem);
        var search = new google.maps.places.Autocomplete(element, {
            
            types: ["(cities)"]
            
        });
        
        search.addListener("place_changed", function(){
            
            var place = search.getPlace();
           
            // Récupération des résultats
            scope.typeSelect.city = place.formatted_address;
            scope.typeSelect.id = place.place_id;
            
        });
        
    };
    
    map.geocodeByAddress = function(address, typeElem){
        
        var geocoder = new google.maps.Geocoder();
        
        geocoder.geocode({
            
            "address": address
            
        }, function(results, status){
            
            if(status === google.maps.GeocoderStatus.OK){
                
                // Récupération de la position de l'adresse
                var position = {
                    
                    lat: parseFloat(results[0].geometry.location.G),
                    lng: parseFloat(results[0].geometry.location.K)
                    
                };
                
                // Modification de la position de mapElem sur la ville ciblée
                mapElem.setCenter(position);
                mapElem.setZoom(15);
                
                // Affichage des éléments demandés proches de la ville
                map.nearbySearch(typeElem);
                
            }else{
                
                map.textError("Une erreur s'est produite. Merci de recharger la page.");
                
            }
            
        });
        
    };
    
    // Places proches du lieu choisi
    map.nearbySearch = function(typeElem){
        
        var places = new google.maps.places.PlacesService(mapElem);
        
        var searchElem = {
            
            bounds: mapElem.getBounds(),
            types: [typeElem]
            
        };
        
        places.nearbySearch(searchElem, function(results, status){
            
            if(status === google.maps.places.PlacesServiceStatus.OK){
                
                var max = results.length;
                var markers;
                var image = "app/images/pin-green.png";
                
                if(max === 0){
                    
                    map.textError("Aucun résultat trouvé pour cette recherche.");
                    return;
                    
                }
                
                var i = 0;
                var position;
                
                for(; i < max; i++){
                    
                    // Récupération de la position de chacune des éléments
                    position = {
                    
                        lat: parseFloat(results[i].geometry.location.G),
                        lng: parseFloat(results[i].geometry.location.K)
                    
                    };
                    
                    // Affichage de chacun des éléments
                    map.marker(position);
                    
                    // Informations sur le lieu
                    map.addDetails(results[i]);
                    
                }
                
            }else{
                
                map.textError("Une erreur s'est produite. Merci de recharger la page.");
                
            }
            
        });
        
    };
    
    // Ajout des informations à la fenêtre d'infos
    map.addDetails = function(results){
        
        
        
    };
    
    map.error = function(scope){
        
        scope.textErrorMap = "Désolé, nous ne pouvons pas afficher la position géographique de votre adresse.";
        scope.errorMap = true;
        
    };
    
    map.textError = function(texte){
        
        var elem = document.getElementById("errorMap");
        elem.innerHTML = texte;
        
    };
    
    return map;
    
});