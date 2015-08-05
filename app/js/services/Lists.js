services.factory("Lists", function(Api, $timeout){
    
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
        
        var data = {
            
            name: listName
            
        };
        
        Api.post("back/controls/listsCtrl.php", data).then(function(response){
            
            switch(response.data){
                    
                    case "emptyName":
                    
                        scope.errorList = true;
                        scope.errorNameList = true;
                    
                        break;
                    
                    case "successAddList":
                        
                        var listName = document.getElementById("listName");
                        
                        // Ajout de la liste
                        scope.lists.push({

                            name: data.name

                        });
                        
                        // Remise à 0 de l'input
                        scope.listName = "";
                        
                        $timeout(function(){
                            
                            listName.classList.remove("ng-invalid");
                            
                        });
                        
                        break;
                    
            }
            
        }, function(data, status, config, headers){
            
            console.log(data, status, config, headers);
            
        });
        
    };
    
    return lists;
    
});