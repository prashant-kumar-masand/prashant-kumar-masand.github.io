app.controller("tabletCtrl",function($scope,tabletFactory){
    
    var promise = tabletFactory.gettablet()
    
    function success (data){
        $scope.tabletData=data;
        
    }
    function error (error){
        $scope.error=error;
    }
    
    promise.then(success,error)
});

app.controller("tabCtrl",function($rootScope,$scope){
   $scope.myupdate=function(){
      /* alert("in tabCtrl")*/
     /*  console.log($scope.search);*/
    $rootScope.search2=$scope.search;   
   }     
    
 $rootScope.mylimit2=$scope.mylimit=14000;
    $scope.updateto=function(){

$rootScope.mylimit2=$scope.mylimit;
}
    $rootScope.asds=true;
$scope.pksort=function(){
   /* alert("pk sorat")*/
    $rootScope.asds=!$scope.asds;
    /*alert("value sorat"+$rootScope.asds,asds)*/
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