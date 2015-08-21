services.factory("Correct", function($timeout){
    
    var correct = {};
    
    correct.run = function(scope, elem){
        
        switch(elem){
                
            case "correctAddAddress":
                
                scope.correctAddAddress = true;
                correct.time(scope);
                
                break;
                
            case "correctAddList":
                
                scope.correctAddList = true;
                correct.time(scope);
                
                break;
                
            case "correctChangeList":
                
                scope.correctChangeList = true;
                correct.time(scope);
                
                break;
                
            case "correctChangeAddress":
                
                scope.correctChangeAddress = true;
                correct.time(scope);
                
                break;
                
            case "correctChangeList":
                
                scope.correctChangeList = true;
                correct.time(scope);
                
                break;
                
        }
        
    };
    
    correct.time = function(scope){
        
        $timeout(function(){
            
            scope.correctChangeList = false;
            scope.correctAddAddress = false;
            scope.correctAddList = false;
            scope.correctChangeAddress = false;
            scope.correctChangeList = false;
        
        }, 1500);
        
    };
    
    return correct;
    
});