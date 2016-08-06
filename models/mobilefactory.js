app.factory("mobileFactory",function($http,$q){
    
    return{
        getmobile:function(){
            
            defered=$q.defer();
            
            $http.get("../server/mobile.json").success(function(data){
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