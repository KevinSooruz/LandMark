services.factory("User", function(Api, $q){
    
    var user = {};
    
    // Informations utilisateurs
    user.informations = function(scope){
        
        var data = {
            
            user: "informations"
            
        };
        
        Api.get("back/controls/userCtrl.php", data).then(function(response){
            
            console.log(response.data);
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            
        });
        
    };
    
    return user;
    
});