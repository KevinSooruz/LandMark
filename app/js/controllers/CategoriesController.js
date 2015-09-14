app.controller("CategoriesController", function($scope, $routeParams){
    
    // Catégorie active
    $scope.nameCategorie = $routeParams.nameCategorie;
    
    /////////////////////////////////// Pagination ///////////////////////////////////
    
    // Permet de résoudre le bug slice of undefined
    $scope.addresses = [];
    
    // Limite du nombre de résultat par page
    $scope.start = 0;
    $scope.end = 18;
    
    // Gestion de la pagination lors d'une recherche avec le moteur de recherche
    $scope.removePagination = function(){
        
        // Si recherche vide on réinitialise le nombre de résultats et affiche la pagination
        if($scope.addressSearch === "" || $scope.addressSearch === undefined){
            
            $scope.start = 0;
            $scope.end = 18;
            $scope.indexPagination = 0;
            $scope.goSearch = false;
            return;
            
        };
        
        // Si recherche on supprime la pagination et on affiche toutes les adresses
        $scope.start = 0;
        $scope.end = $scope.addresses.length;
        $scope.goSearch = true;
        
    };
    
    // Affichage de non résultat trouvé si la recherche ne retourne aucun résultat
    $scope.numberResult = function(){
        
        var addresses = document.getElementsByClassName("addressBlock");
        var maxAddresses = addresses.length;
        
        if(maxAddresses === 0){
            
            $scope.noResultSearch = true;
            return;
            
        }
        
        $scope.noResultSearch = false;
        
    };
    
});