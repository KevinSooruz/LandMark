app.controller("AdressesController", function($scope, Autocomplete, Api, Geocode){
    
    // Service autocomplétion
    Autocomplete.run();
    
    // Initialisation adresse
    var adresse = {
        
        categorie: "Autre"
        
    };
    
    // Initialisation des listes
    $scope.lists = [];
    
    // Initialisation des adresses
    $scope.addresses = [];
    
    /////////////////////////////////// Categories ///////////////////////////////////
    
    // Intégration des catégories
    var dataCategorie = {
        
        categorie: true
        
    };
    
    // Initialisation message erreur categorie
    $scope.errorCategorieBackEnd = false;
    
    // Récupération des catégories
    Api.get("back/controls/categorieCtrl.php", dataCategorie).then(function(response){
        
        if(response !== "error"){
            
            $scope.categories = response.data;
            
        }else{
            
            $scope.errorCategorieBackEnd = true;
            
        }
        
    });
    
    // Sélection de la catégorie
    $scope.selectCategorie = function(index, categorieName){
        
        // Ajout class active au front
        $scope.categorieIndex = index;
        
        // Envoie donnée catégorie à objet adresse
        adresse.categorie = categorieName;
        
    };
    
    /////////////////////////////////// Listes ///////////////////////////////////
    
    // Ajout de liste
    $scope.adList = function(listName){
        
        if(listName === undefined || listName === ""){
            
            $scope.errorList = true;
            return;
            
        }else{
            
            // Ajout de la liste
            $scope.lists.push({
            
                name: listName
            
            });
            
        }
        
    };
    
    // Sélection de la liste
    $scope.selectList = function(index, listName){
        
        // Ajout class active au front
        $scope.listIndex = index;
        
        // Envoie donnée liste à objet adresse
        adresse.list = listName;
        
    };
    
    /////////////////////////////////// Adresse ///////////////////////////////////
    
    // Ajout adresse
    $scope.adresseAdd = function(){
        
        // Récupération de l'adresse
        var location = document.getElementById("adLocation").value;
        
        // Si nom adresse vide et adresse vide on ne continu pas
        if((location === undefined || location === "") && ($scope.adName === undefined || $scope.adName === "")){
            
            $scope.errorName = true;
            $scope.errorLocation = true;
            return;
            
        }else if(location === undefined || location === ""){
            
            // Si adresse vide
            $scope.errorLocation = true;
            return;
            
        }else if($scope.adName === undefined || $scope.adName === ""){
            
            // Si nom adresse vide
            $scope.errorName = true;
            return;
            
        }
        
        // Envoie donnée location à objet adresse
        adresse.location = location;
        
        // Envoie donnée nom à objet adresse
        adresse.name = $scope.adName;
        
        // Service geocode pour récupérer la latitude et la longitude de l'adresse
        Geocode.run(location).then(function(results){
            
            // Récupération des informations
            adresse.lat = results[0].geometry.location.G;
            adresse.lng = results[0].geometry.location.K;
            
        }, function(status){
            
            // Erreurs
            console.log("Error geocode : " + status);
            
        }).finally(function(){
            
            // Finally on lance quand même l'enregistrement car pas besoin d'avoir les coordonnées GPS pour enregistrer l'adresse
            console.log(adresse);
            $scope.addresses.push({
                
                name: adresse.name,
                location: adresse.location,
                categorie: adresse.categorie
                
            });
            
        });
        
    };
    
});