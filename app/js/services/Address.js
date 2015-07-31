services.factory("Address", function(Api){
    
    var address = {};
    
    address.post = function(data){
        
        Api.post("back/controls/addressCtrl.php", data).then(function(response){
            
            console.log(response);
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            
        });
        
    };
    
    address.get = function(scope){
        
        var data = {
            
            getaddresses: "all"
            
        };
        
        Api.get("back/controls/addressCtrl.php", data).then(function(response){
            
            scope.addresses = response.data;
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            
        });
        
    };
    
    return address;
    
});