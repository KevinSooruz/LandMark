services.factory("Categorie", function(Api){
    
    var categorie = {};
    
    categorie.get = function(scope){
        
        // Intégration des catégories
        var data = {};
        
        data.categorie = true;
        
        Api.get("back/controls/categorieCtrl.php", data).then(function(response){
        
            if(response.data === "categorieProblem"){

                scope.errorBackEnd = true;

            }else{

                scope.categories = response.data;

            }

        }, function(data, status, headers, config){

            console.log(data, status, headers, config);
            scope.errorCategorieBackEnd = true;

        });
        
    };
    
    return categorie;
    
});