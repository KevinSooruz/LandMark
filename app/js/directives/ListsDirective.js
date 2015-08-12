app.directive("lists", function(Lists){
    
    var listsTemplate = {
        
        restrict: "E",
        replace: true,
        templateUrl: function(attrs, elem){
            
            return elem.templateUrl;
            
        },
        link: function(scope){
            
            ///// Initialisation des listes /////
            Lists.get().then(function(response){

                if(response === "errorLoadLists"){

                    scope.errorBackEnd = true;

                }else{

                    scope.lists = response;

                }

            }, function(data, status, config, headers){

                console.log(data, status, config, headers);
                scope.errorLoadLists = true;

            });
            
        }
        
    };
    
    return listsTemplate;
    
});