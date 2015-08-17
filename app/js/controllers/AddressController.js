app.controller("AddressController", function($scope, $routeParams, Address){
    
    // Catégorie active
    $scope.nameCategorie = $routeParams.nameCategorie;
    
    // Ajout d'une adresse dans une liste
    $scope.addInList = function(){
        
        Address.addList($scope);
        
    };
    
});