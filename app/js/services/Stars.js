services.factory("Stars", function(){
    
    var stars = {};
    
    stars.run = function(rating){
        
        var starsArr = [];
        var max = 5;
        var i = 0;
        
        for(; i < max; i++){
            
            if(i < rating){
                
                starsArr.push({
                    
                    type: "glyphicon glyphicon-star"
                    
                });
                
            }else{
                
                starsArr.push({
                    
                    type: "glyphicon glyphicon-star-empty"
                    
                });
                
            }
            
        }
        
        return starsArr;
        
    };
    
    return stars;
    
});