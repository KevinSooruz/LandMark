app.directive("map", function(Map){
    
    var mapTemplate = {
        
        replace: true,
        restrict: "E",
        template: "<div id='map'></div>",
        link: function(scope, attrs, elem){
            
            Map.init(scope);
            
        }
        
    };
    
    return mapTemplate;
    
});