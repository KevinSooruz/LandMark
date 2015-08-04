services.factory("Lists", function(Api){
    
    var lists = {};
    
    // Informations listes utilisateur
    lists.get = function(scope){
        
        var data = {
            
            user: "lists"
            
        };
        
        Api.get("back/controls/listsCtrl.php", data).then(function(response){
            
            if(response.data === "errorLoadLists"){

                scope.errorLoadLists = true;

            }else{

                scope.lists = response.data;

            }
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            scope.errorLoadLists = true;
            
        });
        
    };
    
    lists.post = function(scope, listName){
        
        // Ajout de la liste
        scope.lists.push({
            
            name: listName
            
        });
        
    };
    
    return lists;
    
});