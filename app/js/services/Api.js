services.factory("Api", function($http){
    
    var api = {};
    
    api.post = function(url, data){
        
        return $http({
            
            method: "POST",
            url: url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8;"
            },
            data: api.urlSerialize(data) // Serialization de l'url car POST Angular ne le prends pas en charge
            
        }).success(function(response){
            
            return response.data;
            
        }).error(function(data, status, headers, config){
            
            var response = "Error";
            console.log(data, status, headers, config);
            
            return response;
            
        });
        
    };
    
    // Permet d'encoder l'url avec la méthode POST
    api.urlSerialize = function(data){
        
        var obj = data;
        var dataUrl = "";
        var max = Object.keys(obj).length; // Max elem dans obj
        var i = 0;
        
        for(var prop in obj){
            
            if(obj.hasOwnProperty(prop)){
                
                i++;
                
                if(i < max){
                    
                    dataUrl += prop + "=" + obj[prop] + "&"; // Serialisation de l'élément
                    
                }else{
                    
                    dataUrl += prop + "=" + obj[prop]; // Serialisation du dernier élément
                    
                }
                
            }
            
        }
        
        return dataUrl;
        
    };
    
    return api;
    
});