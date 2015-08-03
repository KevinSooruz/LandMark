services.factory("User", function(Api, $q){
    
    var user = {};
    
    // Informations utilisateurs
    user.informations = function(){
        
        var deferred = $q.defer();
        
        var data = {
            
            get: "informations"
            
        }
        
        Api.get("back/controls/userCtrl.php", data).then(function(response){
            
            return deferred.resolve(response.data);
            
        }, function(data, status, config, headers){
            
            return deferred.reject(data, status, config, headers);
            
        });
        
        return deferred.promise;
        
    };
    
    // Informations adresses utilisateur
    user.addresses = function(){
        
        var deferred = $q.defer();
        
        var data = {
            
            get: "addresses"
            
        };
        
        Api.get("back/controls/userCtrl.php", data).then(function(response){
            
            return deferred.resolve(response.data);
            
        }, function(data, status, config, headers){
            
            return deferred.reject(data, status, config, headers);
            
        });
        
        return deferred.promise;
        
    };
    
    // Informations listes utilisateur
    user.lists = function(){
        
        
        
    };
    
    return user;
    
});