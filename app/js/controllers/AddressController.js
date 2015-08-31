app.controller("AddressController", function($scope, $routeParams, Address, $q){
    
    // Class active sur horaires du jour actuel
    var date = new Date();
    var day = date.getDay() - 1;
    
    $scope.activeDay = day;
    
    // Catégorie active
    $scope.nameCategorie = $routeParams.nameCategorie;
    
    // Ajout d'une adresse dans une liste
    $scope.addInList = function(){
        
        // Copie objet dataList
        var data = angular.copy($scope.dataList);
        
        Address.addList($scope, data);
        
    };
    
    // Modification adresse
    $scope.updateAddress = function(){
        
        // Copie objet dataUpAddress
        var data = angular.copy($scope.dataUpAddress);
        
        Address.update($scope, data);
        
    };
    
    $scope.deleteAddress = function(){
        
        Address.delete($scope);
        
    };
    
});