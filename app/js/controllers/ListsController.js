app.controller("ListsController", function($scope, $routeParams, Lists, Address){
    
    /////////////////////////////////// Liste ///////////////////////////////////
    
    ///// Liste active /////
    $scope.nameList = $routeParams.nameList;
    
    ///// Modification de la liste /////
    $scope.updateList = function(){
        
        var data = angular.copy($scope.dataUpList);
        
        Lists.update($scope, data);
        
    };
    
    ///// Suppression d'une adresse dans une liste /////
    $scope.deleteAddressList = function(index, addressName){
        
        // Suppression de l'adresse en base de données
        Address.deleteAddressList($routeParams.nameList, addressName, $scope, index);
        
    };
    
    ///// Suppression d'une liste /////
    $scope.deleteList = function(){
        
        Lists.delete($scope);
        
    };
    
});