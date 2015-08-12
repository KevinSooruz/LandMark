services.factory("User", function(Api, $rootScope){
    
    var user = {};
    
    // Informations utilisateurs
    user.get = function(scope){
        
        var data = {
            
            user: "informations"
            
        };
        
        Api.get("back/controls/userCtrl.php", data).then(function(response){
            
            scope.userSurname = response.data[0].surname;
            scope.userName = response.data[0].name;
        
            $rootScope.user.surname = response.data[0].surname;
            $rootScope.user.name = response.data[0].name;
            $rootScope.user.email = response.data[0].email;
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            
        });
        
    };
    
    return user;
    
});