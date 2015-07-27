app.directive("menu", function(){
    
    return{
        
        replace: true,
        restrict: "E",
        templateUrl: "app/views/menu.php",
        link: function(scope){
            
            scope.menu = [
                /*{
                    icon: "glyphicon-user",
                    title: "Profil"
                },*/
                {
                    icon: "glyphicon-flash",
                    title: "Exercices"
                },
                {
                    icon: "glyphicon-th-large",
                    title: "Workouts"
                },
                {
                    icon: "glyphicon-tint",
                    title: "Entraînements"
                }
            ];
            
        }
        
    };
    
});