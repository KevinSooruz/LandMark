app.controller("CategoriesController", function($scope, $routeParams){
    
    // Catégorie active
    $scope.nameCategorie = $routeParams.nameCategorie;
    
    /////////////////////////////////// Pagination ///////////////////////////////////
    
    // Permet de résoudre le bug slice of undefined
    $scope.addresses = [];
    
    // Limite du nombre de résultat par page
    $scope.start = 0;
    $scope.end = 18;
    
});