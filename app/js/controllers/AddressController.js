app.controller("AddressController", function($scope, $routeParams, Address){
    
    // Catégorie active
    $scope.nameCategorie = $routeParams.nameCategorie;
    
    // Ajout d'une adresse dans une liste
    $scope.addInList = function(dataList){
        
        // Copie objet updateAdd
        var data = angular.copy(dataList);
        
        Address.addList($scope, data);
        
    };
    
    // Modification adresse
    $scope.updateAddress = function(dataUpAddress){
        
        // Copie objet updateAdd
        var data = angular.copy(dataUpAddress);
        
        Address.update($scope, data);
        
    };
    
});