app.controller("mobileCtrl",function($scope,mobileFactory){
    
    var promise = mobileFactory.getmobile()
    
    function success (data){
        $scope.mobileData=data;
        
    }
    function error (error){
        $scope.error=error;
    }
    
    promise.then(success,error)
  /* $scope.mobileData=  [{"brand":"xiomi","name":"mobile","price":"11999", "pic":"../imagesjson/xiomi.jpeg"},      {"brand":"htc","name":"mobile","price":"13000","pic":"../imagesjson/htc.jpg"},
 {"brand":"motorola","name":"mobile","price":"10000","pic":"../imagesjson/motorola.jpg"},
 {"brand":"samsung","name":"mobile","price":"10999","pic":"../imagesjson/samsung.jpg"}]*/
});

app.controller("mobCtrl",function($rootScope,$scope){
     $rootScope.mylimit1=$scope.mylimit=14000;
    $scope.myupdate=function(){
      /* alert("in mobCtrl")*/
     /*  console.log($scope.search);*/
    $rootScope.search1=$scope.search;  
      
   }    
  
    $scope.updateto=function(){

$rootScope.mylimit1=$scope.mylimit;
}

});

    app.filter("pkRange",function(){
    
    return function(mydata,mylimit){
        console.info(mydata,mylimit);  /*mobileData which is array of object each time comes in original form*/
        var arrayOfOb=[];
        var i=0;
        for (da in mydata){ 
            
            console.log(mydata[da].price)
        
          if(mydata[da].price<=mylimit){   
                console.log(mydata[da]); 
                arrayOfOb[i++]=mydata[da]
                /*return data[da]*/
                  
            }
           
                
                        
                        } console.info(arrayOfOb);  return arrayOfOb;
    }
})
