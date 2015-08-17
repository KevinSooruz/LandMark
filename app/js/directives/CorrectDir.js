app.directive("correct", function(){
    
    var correct = {
        
        replace: true,
        restrict: "E",
        template: function(attrs, elem){
            
            return "<i class='glyphicon glyphicon-ok correctAdd' ng-show='" + elem.templateCorrect + " === true'></i>"
            
        }
        
    };
    
    return correct;
    
});