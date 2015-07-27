app.controller("AllController", function($scope, Log){
    
    // Logout
    $scope.logout = function(){
        
        Log.out();
        
    };
    
});