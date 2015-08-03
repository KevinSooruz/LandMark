services.factory("Address", function(Api){
    
    var address = {};
    
    address.post = function(data, scope){
        
        Api.post("back/controls/userCtrl.php", data).then(function(response){
            
            switch(response.data){
                    
                    case "emptyName":
                    
                        scope.errorName = true;
                    
                        break;
                    
                    case "emptyLocation":
                    
                        scope.errorLocation = true;
                    
                        break;
                    
            }
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            
        });
        
    };
    
    return address;
    
});