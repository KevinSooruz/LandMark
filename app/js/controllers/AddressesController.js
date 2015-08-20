app.controller("AddressesController", function($scope, Autocomplete, Address, User, Lists){
    
    /////////////////////////////////// Utilisateur ///////////////////////////////////
    
    // Initialisation des informations utilisateurs
    User.get(); // Possibilité d'appeler l'utilisateur ailleur dans l'appli grâce à $rootScope
    
    /////////////////////////////////// Listes ///////////////////////////////////
    
    ///// Ajout de liste /////
    $scope.adList = function(listName){
        
        // Si pattern pas correct ou si nom liste vide on ne continu pas
        if($scope.adLists.listName.$error.pattern){
            
            $scope.errorPatternList = true;
            
        }else if(listName === undefined || listName === ""){
            
            $scope.errorList = true;
            $scope.errorNameList = true;
            return;
            
        }else{
            
            Lists.post($scope, listName);
            
        }
        
    };
    
    /////////////////////////////////// Adresse ///////////////////////////////////
    
    ///// Initialisation objet adresse /////
    $scope.addAddress = {};
    
    ///// Service autocomplétion /////
    Autocomplete.run($scope);
    
    // Met à jour les informations si l'utilisateur ne sélectionne pas une google place
    $scope.updateInformations = function(){
        
        Autocomplete.updateInformations($scope);
        
    };
    
    ///// Ajout adresse /////
    $scope.adresseAdd = function(){
        
        var data = angular.copy($scope.addAddress);
        
        Address.post(data, $scope);
        
    };
    
});