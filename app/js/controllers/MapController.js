app.controller("mapController", function($scope, Map, $location){
    
    $scope.categorieSelect = function(){
        
        // Si mapSelect existe
        if($scope.mapSelect){
            
            // Si mapSelect n'est pas null "choisissez une catégorie === null"
            if($scope.mapSelect.categorie){
                
                $location.path("/map/categories/" + $scope.mapSelect.categorie.name);
                
            }
            
        }
        
    };
    
});