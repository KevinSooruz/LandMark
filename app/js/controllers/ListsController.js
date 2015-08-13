app.controller("ListsController", function($scope, $routeParams, $location, Address){
    
    // Récupération des addresses et vérification si liste demandée existe
    Address.get().then(function(response){
        
        // Si liste n'existe pas
        if(response === "noResult"){
            
            $location.path("/addresses");
            
        }else{
            
            listsSuccess();
            
        }
        
    }, function(data, status, config, headers){
        
        console.log(data, status, config, headers);
        $location.path("/addresses");
        
    });
    
    // Function listSuccess permet de continuer si la liste demandée par l'utilisateur est présente dans ses listes personnelles
    var listsSuccess = function(){
        
        // Liste active
        $scope.nameList = $routeParams.nameList;
        
    };
    
});