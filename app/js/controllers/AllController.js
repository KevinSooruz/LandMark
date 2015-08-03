app.controller("AllController", function($scope, $rootScope, User, Log){
    
    // Initialisation état connexion utilisateur (log out)
    Log.storageInit();
    
    // Logout
    $scope.logout = function(){
        
        Log.out();
        
    };
    
    // Création de l'utilisateur et de toutes les informations nécessaires
    // Utilisation de $rootScope pour transfert à tous les autres controllers
    $rootScope.userActif = {};
    
    // Informations utilisateur
    User.informations().then(function(response){
        
        $rootScope.userActif.informations = {
                
            name: response[0].name,
            surname: response[0].surname,
            email: response[0].email
                
        };
        
    }, function(data, status, config, headers){
        
        console.log(data, status, config, headers);
        
    });
    
    // Informations adresses utilisateur
    User.addresses().then(function(response){
        
        if(response === "errorLoadAddresses"){
            
            $scope.errorLoadAddresses = true;
            
        }else{
            
            $rootScope.userActif.addresses = [];
        
            // Ajout des adresses à l'objet addresses de l'objet userActif
            var i = 0;
            var max = response.length;
            for(; i < max; i++){

                $rootScope.userActif.addresses.push({

                    categorie: response[i].categorie,
                    name: response[i].name,
                    location: response[i].location,
                    list: response[i].list,
                    lat: response[i].lat,
                    lng: response[i].lng

                });

            }
            
        }
        
    }, function(data, status, config, headers){
        
        console.log(data, status, config, headers);
        
    });
    
    // Informations listes utilisateur
    User.lists().then(function(response){
        
        if(response === "errorLoadLists"){
            
            $scope.errorLoadLists = true;
            
        }else{
            
            $rootScope.userActif.lists = [];
        
            // Ajout des listes à l'objet lists de l'objet userActif
            var i = 0;
            var max = response.length;
            for(; i < max; i++){

                $rootScope.userActif.lists.push({

                    name: response[i].name

                });

            }
            
        }
        
    }, function(data, status, config, headers){
        
        console.log(data, status, config, headers);
        
    });
    
});