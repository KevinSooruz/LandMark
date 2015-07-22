app.config(["$routeProvider", function($routeProvider){
    
    $routeProvider.when("/", {
        
        templateUrl: "app/views/home.php",
        controller: "HomeController"
        
    }).when("/profil", {
        
        templateUrl: "app/views/profil.php",
        controller: "ProfilController"
        
    }).otherwise({
        
        redirectTo: "/"
        
    });
    
}]);