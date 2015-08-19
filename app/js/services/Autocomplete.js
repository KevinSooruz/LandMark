services.factory("Autocomplete", function(){
    
    // https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
    
    autocomplete = {};
    
    // Autocomplétion google maps
    autocomplete.run = function(scope){
        
        // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
        var adLocation = document.getElementById("adLocation");
        var search = new google.maps.places.Autocomplete(adLocation);
        
        search.addListener("place_changed", function(){
            
            var place = search.getPlace();
            console.log(place);
            scope.addAddress.location = place.formatted_address;
            
        });
        
    };
    
    return autocomplete;
    
});