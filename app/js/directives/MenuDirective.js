app.directive("menu", function($location){
    
    return{
        
        replace: true,
        restrict: "E",
        templateUrl: "app/views/templates/menu.php",
        link: function(scope){
            
            scope.menu = [
                {
                    icon: "glyphicon-th-list",
                    title: "Adresses",
                    locate: "/addresses"
                },
                {
                    icon: "glyphicon-map-marker",
                    title: "Carte",
                    locate: "/map"
                },
                {
                    icon: "glyphicon-user",
                    title: "Amis"
                },
                {
                    icon: "glyphicon-cog",
                    title: "Paramètres"
                }
            ];
            
            var splitPath = $location.$$path.split("/");
            var splitPathStart = splitPath["1"];
            
            scope.indexMenu = "/" + splitPathStart;
            
        }
        
    };
    
});