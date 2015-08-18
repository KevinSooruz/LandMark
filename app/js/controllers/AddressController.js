app.controller("AddressController", function($scope, $routeParams, Address, $q){
    
    // Catégorie active
    $scope.nameCategorie = $routeParams.nameCategorie;
    
    // Ajout d'une adresse dans une liste
    $scope.addInList = function(dataList){
        
        // Copie objet dataList
        var data = angular.copy(dataList);
        
        Address.addList($scope, data);
        
    };
    
    // Modification adresse
    $scope.updateAddress = function(dataUpAddress){
        
        // Copie objet dataUpAddress
        var data = angular.copy(dataUpAddress);
        
        Address.update($scope, data);
        
    };
    
    $scope.deleteAddress = function(){
        
        Address.delete($scope);
        
    };
    
});