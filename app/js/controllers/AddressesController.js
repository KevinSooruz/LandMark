app.controller("AddressesController", function($scope, Autocomplete, Address, User, Lists){
    
    /////////////////////////////////// Utilisateur ///////////////////////////////////
    
    // Initialisation des informations utilisateurs
    User.get(); // Possibilité d'appeler l'utilisateur ailleur dans l'appli grâce à $rootScope
    
    /////////////////////////////////// Listes ///////////////////////////////////
    
    ///// Initialisation objet liste /////
    $scope.addList = {};
    
    ///// Ajout de liste /////
    $scope.adList = function(){
        
        var data = angular.copy($scope.addList);
        
        Lists.post($scope, data);
        
    };
    
    /////////////////////////////////// Adresse ///////////////////////////////////
    
    ///// Initialisation objet adresse /////
    $scope.addAddress = {};
    
    ///// Service autocomplétion /////
    Autocomplete.run($scope, "adLocation");
    
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