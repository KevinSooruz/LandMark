app.filter("slice", function(){
    
    var slice = function(arr, start, end){
        
        return arr.slice(start, end);
        
    }
    
    return slice;
    
});