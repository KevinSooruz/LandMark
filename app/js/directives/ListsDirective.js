app.directive("lists", function(Lists){
    
    var listsTemplate = {
        
        restrict: "E",
        replace: true,
        templateUrl: function(attrs, elem){
            
            return elem.templateUrl;
            
        },
        link: function(scope){
            
            ///// Initialisation des listes /////
            Lists.get(scope);
            
        }
        
    };
    
    return listsTemplate;
    
});