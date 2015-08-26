app.controller("mapController", function($scope, Map, $location){
    
    // Sélection d'une catégorie
    $scope.categorieSelect = function(){
        
        // Si mapSelect existe
        if($scope.mapSelect){
            
            // Si mapSelect n'est pas null "choisissez une catégorie === null"
            if($scope.mapSelect.categorie){
                
                $location.path("/map/categories/" + $scope.mapSelect.categorie.name);
                
            }
            
        }
        
    };
    
    // Sélection d'une liste
    $scope.listSelect = function(){
        
        // Si mapSelect existe
        if($scope.mapSelect){
            
            // Si mapSelect n'est pas null "choisissez une catégorie === null"
            if($scope.mapSelect.list){
                
                $location.path("/map/lists/" + $scope.mapSelect.list.name);
                
            }
            
        }
        
    };
    
    // Initialisation message erreur
    document.getElementById("errorMap").innerHTML = "";
    
});