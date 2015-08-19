app.directive("map", function(Map, $routeParams){
    
    var mapTemplate = {
        
        replace: true,
        restrict: "E",
        template: "<div id='map' class='small'></div>",
        link: function(scope, attrs, elem){
            
            // Si nom d'adresse === Espace modification adresse
            if($routeParams.nameAddress){
                
                Map.initGeocode(scope);
                
            }
            
        }
        
    };
    
    return mapTemplate;
    
});