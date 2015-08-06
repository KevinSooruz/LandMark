app.directive("categories", function(Categorie){
    
    var categoriesTemplate = {
        
        restrict: "E",
        replace: true,
        templateUrl: function(attrs, elem){
            
            return elem.templateUrl;
            
        },
        link: function(scope){
            
            ///// Récupération des catégories /////
            Categorie.get(scope);
            
        }
        
    };
    
    return categoriesTemplate;
    
});