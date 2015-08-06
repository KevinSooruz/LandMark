app.controller("CategoriesController", function($scope, $routeParams, $location, Address){
    
    // Récupération des addresses et vérification si liste demandée existe
    Address.get().then(function(response){
        
        // Si liste n'existe pas
        if(response === "noResult"){
            
            $location.path("/addresses");
            
        }else{
            
            categorieSuccess();
            
        }
        
    }, function(data, status, config, headers){
        
        console.log(data, status, config, headers);
        $location.path("/addresses");
        
    });
    
     // Function categorieSuccess permet de continuer si la liste demandée par l'utilisateur est présente dans ses listes personnelles
    var categorieSuccess = function(){
        
        // Initialisation titre
        $scope.nameCategorie = $routeParams.nameCategorie;
        
    };
    
});