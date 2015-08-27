app.directive("modal", function(){
    
    var modal = {
        
        restrict: "E",
        return: true,
        templateUrl: function(attrs, elem){
            
            return elem.templateUrl;
            
        }
        
    };
    
    return modal;
    
});