app.controller("AdressesController", function($scope, Autocomplete, Geocode, Address, User, Lists){
    
    // Service autocomplétion
    Autocomplete.run();
    
    // Initialisation Objet adresse
    $scope.adresse = {};
    
    /////////////////////////////////// Categories ///////////////////////////////////
    
    ///// Initialisation catégorie adresse /////
    $scope.adresse.categorie = "Autre";
    
    ///// Sélection de la catégorie /////
    $scope.selectCategorie = function(index, categorie){
        
        // Ajout class active au front
        $scope.categorieIndex = index;
        
        // Envoie donnée catégorie à objet adresse
        $scope.adresse.categorie = categorie;
        
    };
    
    /////////////////////////////////// Listes ///////////////////////////////////
    
    ///// Ajout de liste /////
    $scope.adList = function(listName){
        
        // Si pattern pas correct ou si nom liste vide on ne continu pas
        if($scope.adLists.listName.$error.pattern){
            
            $scope.errorPatternList = true;
            
        }else if(listName === undefined || listName === ""){
            
            $scope.errorList = true;
            $scope.errorNameList = true;
            return;
            
        }else{
            
            Lists.post($scope, listName);
            
        }
        
    };
    
    ///// Sélection de la liste /////
    $scope.selectList = function(index, listName){
        
        // Ajout class active au front
        $scope.listIndex = index;
        
        // Envoie donnée liste à objet adresse
        $scope.adresse.list = listName;
        
    };
    
    /////////////////////////////////// Adresse ///////////////////////////////////
    
    ///// Ajout adresse /////
    $scope.adresseAdd = function(){
        
        // Récupération de l'adresse
        var location = document.getElementById("adLocation").value;
        
        // Si pattern pas correct ou si nom adresse vide et adresse vide on ne continu pas
        if($scope.adresses.adName.$error.pattern || $scope.adresses.adLocation.$error.pattern){
            
            $scope.errorPatternAddress = true;
            return;
            
        }else if($scope.adName === undefined || $scope.adName === ""){
            
            // Si nom adresse vide
            $scope.errorName = true;
            return;
            
        }else if(location === undefined || location === ""){
            
            // Si adresse vide
            $scope.errorLocation = true;
            return;
            
        }
        
        // Envoie donnée location à objet adresse
        $scope.adresse.location = location;
        
        // Envoie donnée nom à objet adresse
        $scope.adresse.name = $scope.adName;
        
        // Service geocode pour récupérer la latitude et la longitude de l'adresse
        Geocode.run(location).then(function(results){
            
            // Récupération des informations
            $scope.adresse.lat = results[0].geometry.location.G;
            $scope.adresse.lng = results[0].geometry.location.K;
            
        }, function(status){
            
            // Erreurs
            console.log("Error geocode : " + status);
            
        }).finally(function(){
            
            // Finally on lance quand même l'enregistrement car pas besoin d'avoir les coordonnées GPS pour enregistrer l'adresse
            Address.post($scope.adresse, $scope);
            
        });
        
    };
    
});