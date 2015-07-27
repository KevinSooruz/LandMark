app.directive("menu", function(){
    
    return{
        
        replace: true,
        restrict: "E",
        templateUrl: "app/views/menu.php",
        link: function(scope){
            
            scope.menu = [
                {
                    icon: "glyphicon-th-list",
                    title: "Adresses"
                },
                {
                    icon: "glyphicon-map-marker",
                    title: "Carte"
                },
                {
                    icon: "glyphicon-user",
                    title: "Amis"
                }
            ];
            
        }
        
    };
    
});