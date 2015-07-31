app.filter("reverse", function(){
    
    return function(addresses){
        
        return addresses.slice().reverse();
        
    }
    
});