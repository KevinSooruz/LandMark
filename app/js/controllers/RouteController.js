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
        
    }).when("/addresses/lists/:nameList", {
        
        templateUrl: "app/views/lists.php",
        controller: "ListsController",
        resolve:{
            session: app.session // Vérification si session active pour accéder au compte client
        }
        
    }).when("/addresses/categories", {
        
        templateUrl: "app/views/categories.php",
        controller: "CategoriesController",
        resolve:{
            session: app.session // Vérification si session active pour accéder au compte client
        }
        
    }).otherwise({
        
        redirectTo: "/"
        
    });
    
}]);