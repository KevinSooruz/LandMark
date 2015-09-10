app.directive("pagination", function(){
    
    // http://www.frangular.com/2013/10/scope-isole-dans-les-directives.html
    
    var pagination = {
        
        restrict: "E",
        replace: true,
        templateUrl: "app/views/templates/pagination.php",
        link: function(scope, attrs, elem){
            
            var elemToGet;
            scope.pagination = [];
            
            // Pagination active
            scope.indexPagination = 0;
            
            // On attend que le nombre d'adresses change et soit supérieur au nombre max voulu
            scope.$watch(elem.listView, function(){
                
                if(elem.listView === "addresses"){
                
                    elemToGet = scope.addresses;
                
                };
           
                if(elemToGet.length > scope.end){

                    // Nombre de pages max
                    var nbPage = Math.ceil(scope.addresses.length / scope.end);
                    var maxResultPerPage = scope.end;
                    
                    // Ajout de la pagination au front
                    var i = 1;
                    for(; i <= nbPage; i++){
                        
                        var startPage = (i * maxResultPerPage) - maxResultPerPage;
                        var endPage = i * maxResultPerPage;

                        scope.pagination.push({

                            number: i,
                            start: startPage,
                            end: endPage

                        });

                    }

                }

            });
            
            // Cahngement de page
            scope.changePage = function(start, end, index){
                
                scope.start = start;
                scope.end = end;
                
                // Pagination active
                scope.indexPagination = index;
                
            };
            
        }
        
    };
    
    return pagination;
    
});