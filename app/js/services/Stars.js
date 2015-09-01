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
    
    stars.runInfoWindow = function(rating){
        
        var elem = "";
        var max = 5;
        var i = 0;

        elem += "<span class='inline stars'>";
        
        for(; i < max; i++){

            // Tant que i n'est pas supérieur à la note => affiche étoile pleine
            if(i < rating){
                
                elem += "<i class='glyphicon glyphicon-star'></i>";

            }else{

                // Sinon étoile vide
                elem += "<i class='glyphicon glyphicon-star-empty'></i>";

            }

        }

        elem += "</span>";
        
        return elem;
        
    };
    
    return stars;
    
});