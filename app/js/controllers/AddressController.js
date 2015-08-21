app.controller("AddressController", function($scope, $routeParams, Address, $q){
    
    // Class active sur horaires du jour actuel
    var date = new Date();
    var day = date.getDay() - 1;
    
    $scope.activeDay = day;
    
    // Initialisation texte changement horaire
    $scope.textHoraire = "Horaires de la semaine";
    $scope.horaireDay = true;
    
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
    
    // Changement affichage horaires
    $scope.changeHoraire = function(){
        
        if($scope.horaireDay === true){
            
            $scope.horaireDay = false;
            $scope.textHoraire = "Horaires du jour";
            
        }else{
            
            $scope.horaireDay = true;
            $scope.textHoraire = "Horaires de la semaine";
            
        }
        
    }
    
});