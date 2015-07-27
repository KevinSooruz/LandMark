services.factory("ChangeText", function($timeout){
    
    var changeText = {};
    
    // Fonction de changement de texte
    changeText.run = function($scope, arr, i){
        
        var max = arr.length; // Nombre max de textes dans array
        
        // Timetout de la fonction
        $timeout(function(){
            
            // Premier changement de texte
            $scope.textTitle = arr[i];
            
            // Incrementation du nombre pour array
            i++;
            
            // si le nombre est inférieur au maximum on relance la fonction
            if(i < max){
                
                changeText.run($scope, arr, i);
                
            }

        }, 1000);
        
    };
    
    return changeText;
    
});