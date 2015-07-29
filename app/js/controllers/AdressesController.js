app.controller("AdressesController", function($scope, Autocomplete){
    
    // Initialisation adresse
    var adresse = {};
    
    // Service autocomplétion
    Autocomplete.run();
    
    // Intégration des catégories
    $scope.categories = [
        {
            name: "Restaurant"
        },
        {
            name: "Bar"
        },
        {
            name: "Café"
        },
        {
            name: "Nuit"
        },
        {
            name: "Extérieur"
        },
        {
            name: "Loisir"
        },
        {
            name: "Sport"
        },
        {
            name: "Culture"
        },
        {
            name: "Boutique"
        },
        {
            name: "Hôtel"
        },
        {
            name: "Bien-être"
        },
        {
            name: "Santé"
        },
        {
            name: "Lieu secret"
        },
        {
            name: "Autre"
        },
    ];
    
    // Sélection de la catégorie
    $scope.selectCategorie = function(index, categorieName){
        
        // Ajout class active au front
        $scope.categorieIndex = index;
        
        // Envoie donnée catégorie à objet adresse
        adresse.categorie = categorieName;
        
    }
    
});