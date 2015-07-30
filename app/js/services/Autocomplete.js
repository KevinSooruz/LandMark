services.factory("Autocomplete", function(){
    
    autocomplete = {};
    
    // Autocomplétion google maps
    autocomplete.run = function(){
        
        // https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete
        var adLocation = document.getElementById("adLocation");
        var search = new google.maps.places.Autocomplete(adLocation);
        
    };
    
    return autocomplete;
    
});