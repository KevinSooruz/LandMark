app.directive("addresses", function(Address, $location){
    
    var addressesTemplate = {
        
        restrict: "E",
        replace: true,
        templateUrl: function(attrs, elem){
            
            return elem.templateUrl;
            
        },
        link: function(scope){
            
            var location = $location.path();
            var splitLocation = location.split("/");
            var categorie = splitLocation[3];
            
            ///// Initialisation des adresses front /////
            Address.get().then(function(response){

                if(response === "errorLoadAddresses"){

                    scope.errorBackEnd = true;

                }else if(response === "noResult"){
                    
                    $location.path("/addresses");
                    
                }else if(response === "noResultAddress"){
                    
                    $location.path("/addresses/categories/" + categorie);
                    
                }else if(response === "noAddressInCategorie"){
                    
                    $location.path("/addresses/categories/All");
                    
                }else{

                    scope.addresses = response;

                }

            }, function(){

                console.log(data, status, config, headers);
                scope.errorLoadAddresses = true;

            });
            
        }
        
    };
    
    return addressesTemplate;
    
});