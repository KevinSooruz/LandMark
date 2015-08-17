services.factory("Lists", function(Api, $timeout, $q, Correct){
    
    var lists = {};
    
    // Informations listes utilisateur
    lists.get = function(scope){
        
        var deferred = $q.defer();
        
        // Initialisation objet data
        var data = {};
        
        // Paramètre pour get lists
        data.user = "lists";
        
        Api.get("back/controls/listsCtrl.php", data).then(function(response){

            return deferred.resolve(response.data);

        }, function(data, status, config, headers){

            return deferred.reject(data, status, config, headers);

        });
        
        return deferred.promise;
        
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

                case "alreadyExists":

                    scope.errorList = true;
                    scope.nameListExist = true;

                    break;

                case "successAddList":

                    // Affichage front envoi ok
                    Correct.run(scope, "correctAddList");

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