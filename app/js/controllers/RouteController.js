app.config(["$routeProvider", function($routeProvider){
        
    $routeProvider.when("/", {
        
        templateUrl: "app/views/home.php",
        controller: "HomeController"
        
    }).when("/addresses", {
        
        templateUrl: "app/views/adresses.php",
        controller: "AdressesController",
        resolve:{
            session: app.session // Vérification si session active pour accéder au compte client
        }
        
    }).when("/addresses/:nameList", {
        
        templateUrl: "app/views/liste.php",
        controller: "ListeController",
        resolve:{
            session: app.session // Vérification si session active pour accéder au compte client
        }
        
    }).otherwise({
        
        redirectTo: "/"
        
    });
    
}]);