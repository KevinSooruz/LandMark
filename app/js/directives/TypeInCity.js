app.directive("typeincity", function(Map, $location){
    
    var typeincity = {
        
        restrict: "E",
        replace: true,
        templateUrl: "app/views/templates/map/typeInCity.php",
        link: function(scope){
            
            // Autocomplete sur la carte
            Map.autocompleteCity(scope, "typeSelectCity");
            
            scope.findTypeForCity = function(){
                
                var data = scope.typeSelect;
                
                console.log(data);
                
                if(data === undefined || data.city === undefined || data.city === "" || !data.type || data.id === "" || data.id === undefined){
                    
                    return;
                    
                }else{
                    
                    $location.path("/map/search/" + data.id + "/" + data.type.type);
                    
                }
                
            };
            
            // Liste des types de lieux
            scope.typesElem = [
                {
                    name: "Magasin",
                    type: "store"
                },
                {
                    name: "Magasin de vêtements",
                    type: "clothing_store"
                },
                {
                    name: "Magasin de chaussures",
                    type: "shoe_store"
                },
                {
                    name: "Salon de beauté",
                    type: "beauty_salon"
                },
                {
                    name: "Nourriture",
                    type: "food"
                },
                {
                    name: "Supermarché",
                    type: "grocery_or_supermarket"
                },
                {
                    name: "Restaurant",
                    type: "restaurant"
                },
                {
                    name: "Boulangerie",
                    type: "bakery"
                },
                {
                    name: "Bar",
                    type: "bar"
                },
                {
                    name: "Pharmacie",
                    type: "pharmacy"
                },
                {
                    name: "Banque",
                    type: "bank"
                },
                {
                    name: "Bus",
                    type: "bus_station"
                },
                {
                    name: "Aéroport",
                    type: "airport"
                },
                {
                    name: "Camping",
                    type: "campground"
                },
                {
                    name: "Attraction",
                    type: "amusement_park"
                },
                {
                    name: "Aquarium",
                    type: "aquarium"
                },
                {
                    name: "Gallerie d'art",
                    type: "art_gallery"
                },
                {
                    name: "Magasin de vélos",
                    type: "bicycle_store"
                },
                {
                    name: "Magasin de livres",
                    type: "book_store"
                },
                {
                    name: "Bowling",
                    type: "bowling_alley"
                },
                {
                    name: "Café",
                    type: "cafe"
                },
                {
                    name: "Concession automobile",
                    type: "car_dealer"
                },
                {
                    name: "Location de voitures",
                    type: "car_rental"
                },
                {
                    name: "Réparateur automobile",
                    type: "car_repair"
                },
                {
                    name: "Station de lavage",
                    type: "car_wash"
                },
                {
                    name: "Casino",
                    type: "casino"
                },
                {
                    name: "Cimetière",
                    type: "cemetery"
                },
                {
                    name: "Eglise",
                    type: "church"
                },
                {
                    name: "Tribunal",
                    type: "courthouse"
                },
                {
                    name: "Dentiste",
                    type: "dentist"
                },
                {
                    name: "Médecin",
                    type: "doctor"
                },
                {
                    name: "Electricien",
                    type: "electrician"
                },
                {
                    name: "Station de pompier",
                    type: "fire_station"
                },
                {
                    name: "Fleuriste",
                    type: "florist"
                },
                {
                    name: "Funérarium",
                    type: "funeral_home"
                },
                {
                    name: "Magasin de meubles",
                    type: "furniture_store"
                },
                {
                    name: "Station essence",
                    type: "gas_station"
                },
                {
                    name: "Entrepreneur général",
                    type: "general_contractor"
                },
                {
                    name: "Salle de sport",
                    type: "gym"
                },
                {
                    name: "Coiffeur",
                    type: "hair_care"
                },
                {
                    name: "Droguerie",
                    type: "hardware_store"
                },
                {
                    name: "Santé",
                    type: "health"
                },
                {
                    name: "Pour la maison",
                    type: "home_goods_store"
                },
                {
                    name: "Hopital",
                    type: "hospital"
                },
                {
                    name: "Agence assurance",
                    type: "insurance_agency"
                },
                {
                    name: "Bijouterie",
                    type: "jewelry_store"
                },
                {
                    name: "Blanchisserie",
                    type: "laundry"
                },
                {
                    name: "Avocat",
                    type: "lawyer"
                },
                {
                    name: "Librairie",
                    type: "library"
                },
                {
                    name: "Magasin d'alcool",
                    type: "liquor_store"
                },
                {
                    name: "Administratif",
                    type: "local_government_office"
                },
                {
                    name: "Serrurier",
                    type: "locksmith"
                },
                {
                    name: "Hébergement",
                    type: "lodging"
                },
                {
                    name: "Livraison de repas",
                    type: "meal_delivery"
                },
                {
                    name: "Repas à emporter",
                    type: "meal_takeaway"
                },
                {
                    name: "Vidéo club",
                    type: "movie_rental"
                },
                {
                    name: "Cinéma",
                    type: "movie_theater"
                },
                {
                    name: "Déménageur",
                    type: "moving_company"
                },
                {
                    name: "Musée",
                    type: "museum"
                },
                {
                    name: "Boîte de nuit",
                    type: "night_club"
                },
                {
                    name: "Peintre",
                    type: "painter"
                },
                {
                    name: "Parc",
                    type: "park"
                },
                {
                    name: "Parking",
                    type: "parking"
                },
                {
                    name: "Magasin d'animaux",
                    type: "pet_store"
                },
                {
                    name: "Physiothérapeute",
                    type: "physiotherapist"
                },
                {
                    name: "Plombier",
                    type: "plumber"
                },
                {
                    name: "Police",
                    type: "police"
                },
                {
                    name: "Bureau de poste",
                    type: "post_office"
                },
                {
                    name: "Agence immobilière",
                    type: "real_estate_agency"
                },
                {
                    name: "Couvreur",
                    type: "roofing_contractor"
                },
                {
                    name: "Ecole",
                    type: "school"
                },
                {
                    name: "Centre commercial",
                    type: "shopping_mall"
                },
                {
                    name: "Spa",
                    type: "spa"
                },
                {
                    name: "Stade",
                    type: "stadium"
                },
                {
                    name: "Stockage",
                    type: "storage"
                },
                {
                    name: "Métro",
                    type: "subway_station"
                },
                {
                    name: "Taxi",
                    type: "taxi_stand"
                },
                {
                    name: "Train",
                    type: "train_station"
                },
                {
                    name: "Agence de voyage",
                    type: "travel_agency"
                },
                {
                    name: "Université",
                    type: "university"
                },
                {
                    name: "Vétérinaire",
                    type: "veterinary_care"
                },
                {
                    name: "Zoo",
                    type: "zoo"
                },
                {
                    name: "Hotel",
                    type: "lodging"
                },
                {
                    name: "Distributeur de billets",
                    type: "atm"
                }
            ];
            
            scope.predicate = "name"; //permet de définir ce qui est utilisé pour classé par ordre alphabétique
            
        }
        
    };
    
    return typeincity;
    
});