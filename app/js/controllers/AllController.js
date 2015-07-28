app.controller("AllController", function($scope, Log){
    
    // Initialisation état connexion utilisateur (log out)
    Log.storageInit();
    
    // Logout
    $scope.logout = function(){
        
        Log.out();
        
    };
    
});