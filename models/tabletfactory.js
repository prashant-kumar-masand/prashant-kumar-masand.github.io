app.factory("tabletFactory",function($http,$q){
    
    return{
          gettablet:function(){
            
            defered=$q.defer();
            
            $http.get("../server/tablet.json").success(function(data){
            console.log("Hit the server with value"+JSON.stringify(data))    
            defered.resolve(data);
                
            }).error(function(error){
                            console.log("miss the server with value"+JSON.stringify(error))
                defered.reject(error)
            })
            
            
            return defered.promise
            
        }
        
        
        
    }
    
    
    
});