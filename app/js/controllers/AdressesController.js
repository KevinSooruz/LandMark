app.controller("AdressesController", function($scope, Autocomplete){
    
    // Service autocomplétion
    Autocomplete.run();
    
    // Initialisation adresse
    var adresse = {
        
        categorie: "Autre"
        
    };
    
    // Initialisation des listes
    $scope.lists = [];
    
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
        
    };
    
    // Ajout de liste
    $scope.adList = function(listName){
        
        if(listName === undefined || listName === ""){
            
            return;
            
        }else{
            
            // Ajout de la liste
            $scope.lists.push({
            
                name: listName
            
            });
            
        }
        
    };
    
    // Sélection de la liste
    $scope.selectList = function(index, listName){
        
        // Ajout class active au front
        $scope.listIndex = index;
        
        // nvoie donnée liste à objet adresse
        adresse.list = listName;
        
    };
    
    // Ajout adresse
    $scope.adresseAdd = function(){
        
        console.log(Autocomplete.geocode());
        console.log(adresse);
        
    };
    
});