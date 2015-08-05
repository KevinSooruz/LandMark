app.controller("ListeController", function($scope, $routeParams, $location, Address, Lists){
    
    // Récupération des addresses et vérification si liste demandée existe
    Address.get().then(function(response){
        
        // Si liste n'existe pas
        if(response === "noResult"){
            
            $location.path("/addresses");
            
        }else{
            
            listsOk();
            
        }
        
    }, function(data, status, config, headers){
        
        console.log(data, status, config, headers);
        $location.path("/addresses");
        
    });
    
    // Function listOk permet de continuer si la liste demandée par l'utilisateur est présente dans ses listes personnelles
    var listsOk = function(){
        
        // Initialisation titre
        $scope.nameList = $routeParams.nameList;
        
        /////////////////////////////////// Listes ///////////////////////////////////
        
        ///// Initialisation des listes /////
        Lists.get().then(function(response){

            if(response !== "errorLoadLists"){

                $scope.lists = response;
                
            }

        }, function(data, status, config, headers){

            console.log(data, status, config, headers);

        });
        
        /////////////////////////////////// Adresse ///////////////////////////////////
    
        ///// Initialisation des adresses front /////
        Address.get().then(function(response){

            if(response !== "errorLoadAddresses"){

                $scope.addresses = response;

            }

        }, function(){

            console.log(data, status, config, headers);

        });
        
    };
    
});