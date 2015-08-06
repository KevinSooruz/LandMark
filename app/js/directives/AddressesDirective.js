app.directive("addresses", function(Address){
    
    var addressesTemplate = {
        
        restrict: "E",
        replace: true,
        templateUrl: function(attrs, elem){
            
            return elem.templateUrl;
            
        },
        link: function(scope){
            
            ///// Initialisation des adresses front /////
            Address.get().then(function(response){

                if(response === "errorLoadAddresses"){

                    scope.errorLoadAddresses = true;

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