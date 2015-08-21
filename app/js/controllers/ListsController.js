app.controller("ListsController", function($scope, $routeParams, Lists){
    
    /////////////////////////////////// Liste ///////////////////////////////////
    
    ///// Liste active /////
    $scope.nameList = $routeParams.nameList;
    
    ///// Modification de la liste /////
    $scope.updateList = function(){
        
        var data = angular.copy($scope.dataUpList);
        
        Lists.update($scope, data);
        
    };
    
});