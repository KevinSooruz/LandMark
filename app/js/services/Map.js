services.factory("Map", function(Address, $location, $routeParams){
    
    // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch (trouver toutes les places d'une ville)
    // https://developers.google.com/places/javascript/
    // https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
    
    var map = {};
    var mapElem; // carte
    var marker; // Marker
    var infowindow = new google.maps.InfoWindow(); // Infowindow marker
    var textElem; // texte infowindow
    
    // Initialisation de la carte
    map.init = function(){
        
        var position;
        
        // Centre France pour initialisation de la carte principale
        position = {
                
            lat: 46.227638, 
            lng: 2.213749
                
        };
        
        // Initialisation de l'élément carte
        map.initElem(position);
        
        // Paramètre de recherche sur ville + type de lieux
        if($routeParams.cityCode && $routeParams.typeName){
            
            // Geocode par adresse renseignée dans l'url
            map.geocodeByPlaceId($routeParams.cityCode, $routeParams.typeName);
            
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
                var max = response.length;
                var i = 0;

                for(; i < max; i++){
                    
                    // Position du marker
                    var posMarker = {

                        lat: parseFloat(response[i].lat),
                        lng: parseFloat(response[i].lng)

                    };
                    
                    // Place Id du marker
                    var placeId = response[i].placeId;
                    
                    // Création du marker
                    map.createMarker(posMarker, max, placeId, response[i]);

                }
                
            }
                    
        }, function(headers, data, status, config){
            
            console.log(headers, data, status, config);
            map.error(scope);
            
        });
        
    };
    
    // Initialisation de l'élément carte
    map.initElem = function(position){
        
        mapElem = new google.maps.Map(document.getElementById("map"),{
                    
            center: position,
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            streetViewControl: false,
            disableDefaultUI: true

        });
        
    };
    
    // Création d'un marker
    map.createMarker = function(position, max, placeId, response){
        
        var image = "app/images/pin-green.png";
        
        marker = new google.maps.Marker({
            
            map: mapElem,
            position: position,
            icon: image
            
        });
        
        // Si max === 1 cela signifie que nous sommes sur la modification d'adresse ou que nous pouvons zommer sur ce point sur la carte
        if(max === 1){
            
            mapElem.setZoom(19);
            mapElem.setCenter(position);
            
        }
        
        
        map.markerDetails(position, placeId, response);
        
    };
    
    // Ajout des informations à la fenêtre d'infos
    map.markerDetails = function(position, placeId, response){
        
        // Paramètre "response" correspond aux informations retournées de la bdd si l'affichage des lieux provient des categories / listes créées par l'utilisateur
        
        var service = new google.maps.places.PlacesService(mapElem);
        
        google.maps.event.addListener(marker, "click", function(){
            
            // Si utilisateur est sur la page de gestion de l'adresse ne pas afficher les informations du lieu sur la carte
            if($location.path() === "/addresses/categories/" + $routeParams.nameCategorie + "/" + $routeParams.nameAddress){

                return;

            }
            
            service.getDetails({
            
                placeId: placeId
            
            }, function(place, status){
                
                if(status === google.maps.places.PlacesServiceStatus.OK){
                    
                    // Eléments de la modal + d'infos de la map
                    var modalMapTitle = document.getElementById("modalMapTitle");
                    var addressAddress = document.getElementById("addressAddress");
                    var addressPhone = document.getElementById("addressPhone");
                    var addressInternationalPhone = document.getElementById("addressInternationalPhone");
                    var addressRating = document.getElementById("addressRating");
                    var addressStars = document.getElementById("addressStars");
                    var addressOpening = document.getElementById("addressOpening");
                    var addressNumberRating = document.getElementById("addressNumberRating");
                    var priceRating = document.getElementById("priceRating");
                    var priceStars = document.getElementById("priceStars");
                
                    console.log(place);
                    // Nom du lieu
                    if(response){
                        
                        textElem = "<span class='block addressName fw7'>" + response.name + "</span>";
                        modalMapTitle.innerHTML = "<span>" + response.name + "</span>";
                        
                    }else{
                        
                        textElem = "<span class='block addressName fw7'>" + place.name + "</span>";
                        modalMapTitle.innerHTML = "<span>" + place.name + "</span>";
                        
                    }
                    
                    // Adresse du lieu
                    textElem += "<span class='block addressAddress'>" + place.formatted_address + "</span>";
                    addressAddress.innerHTML = place.formatted_address;
                    
                    // Téléphones du lieu
                    if(response){
                        
                        if(response.phone !== ""){
                            
                            textElem += "<span class='block addressPhone'>" + response.phone + "</span>";
                            addressPhone.innerHTML = response.phone;
                            
                        }
                        
                    }else if(place.formatted_phone_number){
                        
                        textElem += "<span class='block addressPhone'>" + place.formatted_phone_number + "</span>";
                        addressPhone.innerHTML = place.formatted_phone_number;
                        
                    }
                    
                    if(place.international_phone_number){
                        
                        textElem += "<span class='block addressInternationalPhone'>" + place.international_phone_number + "</span>";
                        addressInternationalPhone.innerHTML = place.international_phone_number;
                        
                    }
                    
                    // Note du lieu
                    if(place.rating){
                        
                        textElem += "<span class='inline addressRating'>" + place.rating + "/5</span>";
                        addressRating.innerHTML = place.rating + "/5";
                        
                        // Ajout des étoiles en fonction de la note
                        map.starsRating(place.rating, addressStars);
                        addressNumberRating.innerHTML = "Nombre d'avis : " + place.user_ratings_total;
                        
                        
                    }
                    
                    // Horaires d'ouverture
                    if(place.opening_hours){
                        
                        map.openingHours(place.opening_hours.weekday_text, addressOpening);
                        
                    }
                    
                    // Niveau des prix
                    if(place.price_level){
                        
                        priceRating.innerHTML = place.price_level + "/5";
                        map.starsRating(place.price_level, priceStars);
                        
                    }
                    
                    // Bouton + d'infos
                    textElem += "<span class='inline link linkPrimary linkMoreInfos'>Plus d'infos</span>";
                    
                    // Mise à jour du contenu de la fenêtre
                    infowindow.setContent(textElem);
                
                }else{
                    
                    infowindow.setContent("Aucune information sur ce lieu");
                    
                }
                
            
            });
            
            // Ouverture de l'infoWindow;
            infowindow.open(mapElem, this);
            
        });
        
    };
    
    // Ajout des étoiles en fonction de la note
    map.starsRating = function(rating, elem){
        
        // Initialisation de la note "étoiles" de la modal
        elem.innerHTML = "";
        
        var max = 5;
        var i = 0;

        textElem += "<span class='inline stars'>";

        for(; i < max; i++){

            // Tant que i n'est pas supérieur à la note => affiche étoile pleine
            if(i < rating){
                
                if(elem !== "priceStars"){
                    
                    textElem += "<i class='glyphicon glyphicon-star'></i>";
                    
                }
                
                elem.innerHTML += "<i class='glyphicon glyphicon-star'></i>";

            }else{

                // Sinon étoile vide
                if(elem !== "priceStars"){
                    
                    textElem += "<i class='glyphicon glyphicon-star-empty'></i>";
                    
                }
                
                elem.innerHTML += "<i class='glyphicon glyphicon-star-empty'></i>";

            }

        }

        textElem += "</span>";
        
    };
    
    // Ajout des heures d'ouvertures dans la modal
    map.openingHours = function(weekday, addressOpening){
        
        var date = new Date;
        var day = date.getDay() - 1;
        
        // Initialisation opening hours
        addressOpening.innerHTML = "";
        
        var max = weekday.length;
        var i = 0;
        
        for(; i < max; i++){
            
            if(i === day){
                
                addressOpening.innerHTML += "<li class='active'>" + weekday[i] + "</li>";
                
            }else{
                
                addressOpening.innerHTML += "<li>" + weekday[i] + "</li>";
                
            }
            
        }
        
    };
    
    // Autocompletion recherche ville + type
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
            //scope.typeSelect.city = place.formatted_address;
            scope.typeSelect.cityCode = place.place_id;
            
        });
        
    };
    
    // Modification de la carte sur la ville demandée par l'internaute
    map.geocodeByPlaceId = function(cityCode, typeElem){
        
        var geocoder = new google.maps.Geocoder();
        
        geocoder.geocode({
            
            "placeId": cityCode
            
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
        var moreResult = document.getElementById("moreResult");
        // places.radarSearch // places.nearbySearch
        // keyword: typeElem  // types: [typeElem]
        
        var searchElem = {
            
            bounds: mapElem.getBounds(),
            types: [typeElem]
            
        };
        
        places.nearbySearch(searchElem, function(results, status, pagination){
            
            if(status === google.maps.places.PlacesServiceStatus.OK){
                
                // Création des résultats
                var max = results.length;
                var i = 0;

                for(; i < max; i++){

                    // Récupération de la position de chacun des éléments
                    var position = {

                        lat: parseFloat(results[i].geometry.location.G),
                        lng: parseFloat(results[i].geometry.location.K)

                    };
                    
                    // Envoie de l'id de la place
                    var placeId = results[i].place_id;
                    
                    // Affichage de chacun des éléments
                    map.createMarker(position, max, placeId);

                }
                
                // Si plus de résultats page suivante
                if(pagination.hasNextPage){
                    
                    // Affichage bouton + de résultats
                    moreResult.classList.remove("down");
                    
                    // Affichage des résultats de la page suivante
                    moreResult.addEventListener("click", function(){

                        pagination.nextPage();

                    });
                    
                }else{
                    
                    // Suppression bouton + de résultats
                    moreResult.classList.add("down");
                    
                }
                
            }else if(status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS){
                
                map.textError("Aucun résultat trouvé pour cette recherche.");
                
            }else{
                
                map.textError("Une erreur s'est produite. Merci de recharger la page.");
                
            }
            
        });
        
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