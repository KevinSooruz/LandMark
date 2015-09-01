services.factory("Map", function(Address, $location, $routeParams, $q, Stars){
    
    // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch (trouver toutes les places d'une ville)
    // https://developers.google.com/places/javascript/
    // https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
    
    var map = {};
    var mapElem; // carte
    var marker; // Marker
    var infowindow = new google.maps.InfoWindow(); // Infowindow marker
    var textElem; // texte infowindow
    
    // Initialisation de la carte
    map.init = function(scope){
        
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
            map.geocodeByPlaceId(scope, $routeParams.cityCode, $routeParams.typeName);
            
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
                    map.createMarker(scope, posMarker, max, placeId, response[i]);

                }
                
            }
                    
        }, function(headers, data, status, config){
            
            console.log(headers, data, status, config);
            map.error(scope, "Désolé, nous ne pouvons pas afficher la position géographique de votre adresse.");
            
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
    map.createMarker = function(scope, position, max, placeId, response){
        
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
        
        // Si utilisateur est sur la page de gestion de l'adresse ne pas afficher les informations du lieu sur la carte
        if($location.path() === "/addresses/categories/" + $routeParams.nameCategorie + "/" + $routeParams.nameAddress){

            map.getSingleMarkerDetails(placeId).then(function(response){
                
                map.singleMarkerDetails(scope, response);
                
            }, function(data, status, headers, config){
                
                console.log(data, status, headers, config);
                
            });
            
            return;

        }
        
        map.markerDetails(scope, position, placeId, response);
        
    };
    
    // Récupération des résultats de l'adresse seule
    map.getSingleMarkerDetails = function(placeId){
        
        var service = new google.maps.places.PlacesService(mapElem);
        var deferred = $q.defer();
        
        service.getDetails({
            
            placeId: placeId
            
        }, function(place, status){
                
            if(status === google.maps.places.PlacesServiceStatus.OK){
                    
                deferred.resolve(place);
                
            }else{
                
                deferred.reject(status);
                
            }
                
        });
        
        return deferred.promise;
        
    };
    
    // Affichage des résultats de l'adresse seule
    map.singleMarkerDetails = function(scope, place){
        
        // Si horaires
        if(place.opening_hours){
            
            scope.dayshours = place.opening_hours.weekday_text;
            
        }
        
        // Note globale
        if(place.rating){
            
            scope.globalRating = place.rating;
            scope.starsGlobalRating = Stars.run(place.rating);
            
        }
        
        // Note des prix
        if(place.price_level){
            
            scope.priceRating = place.price_level;
            scope.starsPriceRating = Stars.run(place.price_level);
            
        }
        
        // Nombre de votes
        if(place.user_ratings_total){
            
            scope.nbRating = place.user_ratings_total;
            
        }
        
        // Si commentaires
        if(place.reviews){
            
            scope.userComments = map.markerComments(place.reviews);
            
        }
        
    };
    
    // Ajout des informations à la fenêtre d'infos
    map.markerDetails = function(scope, position, placeId, response){
        
        // Paramètre "response" correspond aux informations retournées de la bdd si l'affichage des lieux provient des categories / listes créées par l'utilisateur
        
        var service = new google.maps.places.PlacesService(mapElem);
        
        google.maps.event.addListener(marker, "click", function(){
            
            service.getDetails({
            
                placeId: placeId
            
            }, function(place, status){
                
                if(status === google.maps.places.PlacesServiceStatus.OK){
                    
                    console.log(place);
                    
                    ///// Nom du lieu /////
                    if(response){
                        
                        textElem = "<span class='block addressName fw7'>" + response.name + "</span>";
                        scope.modalMapTitle = response.name;
                        
                    }else{
                        
                        textElem = "<span class='block addressName fw7'>" + place.name + "</span>";
                        scope.modalMapTitle = place.name;
                        
                    }
                    
                    ///// Adresse du lieu /////
                    textElem += "<span class='block addressAddress'>" + place.formatted_address + "</span>";
                    scope.addressAddress = place.formatted_address;
                    
                    ///// Téléphones du lieu /////
                    if(response){
                        
                        if(response.phone !== ""){
                            
                            textElem += "<span class='block addressPhone'>" + response.phone + "</span>";
                            scope.addressPhone = response.phone;
                            scope.addressPhoneState = "ok";
                            
                        }else{
                            
                            scope.addressPhoneState = "no";
                            
                        }
                        
                    }else if(place.formatted_phone_number){
                        
                        textElem += "<span class='block addressPhone'>" + place.formatted_phone_number + "</span>";
                        scope.addressPhone = place.formatted_phone_number;
                        scope.addressPhoneState = "ok";
                        
                    }else if(!place.formatted_phone_number){
                        
                        scope.addressPhoneState = "no";
                        
                    }
                    
                    if(place.international_phone_number){
                        
                        textElem += "<span class='block addressInternationalPhone'>" + place.international_phone_number + "</span>";
                        scope.addressInternationalPhone = place.international_phone_number;
                        scope.addressInternationalPhoneState = "ok";
                        
                    }else{
                        
                        scope.addressInternationalPhoneState = "no";
                        
                    }
                    
                    ///// Horaires d'ouverture ///
                    if(place.opening_hours){
                        
                        scope.addressOpening = place.opening_hours.weekday_text;
                        scope.dayActif = map.openingHours();
                        scope.addressOpeningState = "ok";
                        
                    }else{
                        
                        scope.addressOpeningState = "no";
                        
                    }
                    
                    // Note du lieu
                    if(place.rating){
                        
                        textElem += "<span class='inline addressRating'>" + place.rating + "/5<ul><li ng-repeat='star in addressStars'><i class='{{star.type}}'></i></li></ul></span>";
                        scope.addressRating = place.rating;
                        
                        // Ajout des étoiles en fonction de la note
                        textElem += Stars.runInfoWindow(place.rating);
                        scope.addressStars = Stars.run(place.rating);
                        
                        scope.addressRatingState = "ok";
                        
                    }else{
                        
                        scope.addressRatingState = "no";
                        
                    }
                    
                    // Niveau des prix
                    if(place.price_level){
                        
                        scope.priceRating = place.price_level;
                        
                        // Ajout des étoiles en fonction de la note
                        scope.priceStars = Stars.run(place.price_level);
                        
                        scope.priceRatingState = "ok";
                        
                    }else{
                        
                        scope.priceRatingState = "no";
                        
                    }
                    
                    // Nombre total d'avis
                    if(place.user_ratings_total){
                        
                        scope.addressNumberRating = place.user_ratings_total;
                        scope.addressNumberRatingState = "ok";
                        
                    }else{
                        
                        scope.addressNumberRatingState = "no";
                        
                    }
                    
                    // Commentaires clients
                    if(place.reviews){
                        
                        scope.userComments = map.markerComments(place.reviews);
                        scope.userCommentsState = "ok";
                        
                    }else{
                        
                        scope.userCommentsState = "no";
                        
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
    
    // Création du commentaire pour chacun des commentaires
    map.markerComments = function(reviews){
        
        var comments = [];
        var max = reviews.length;
        var i = 0;
        
        for(; i < max; i++){
            
            comments.push({
                
                author: reviews[i].author_name,
                text: reviews[i].text,
                rating: reviews[i].rating,
                starsComment: Stars.run(reviews[i].rating),
                date: map.commentsdate(reviews[i].time)
                
            });
            
        }
        
        return comments;
        
    };
    
    // Ajout des heures d'ouvertures dans la modal
    map.openingHours = function(){
        
        var date = new Date;
        var day = date.getDay() - 1;
        
        return day;
        
    };
    
    // Date commentaire du lieu
    map.commentsdate = function(time){
        
        var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        
        var date = new Date(time * 1000);
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        
        return(day + " " + months[month] + " " + year);
        
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
    map.geocodeByPlaceId = function(scope, cityCode, typeElem){
        
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
                map.nearbySearch(scope, typeElem);
                
            }else{
                
                map.error(scope, "Une erreur s'est produite. Merci de recharger la page.");
                
            }
            
        });
        
    };
    
    // Places proches du lieu choisi
    map.nearbySearch = function(scope, typeElem){
        
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
                    map.createMarker(scope, position, max, placeId);

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
                
                map.error(scope, "Aucun résultat trouvé pour cette recherche.");
                
            }else{
                
                map.error(scope, "Une erreur s'est produite. Merci de recharger la page.");
                
            }
            
        });
        
    };
    
    map.error = function(scope, text){
        
        scope.mapError = true;
        scope.textErrorMap = text;
        
    };
    
    return map;
    
});