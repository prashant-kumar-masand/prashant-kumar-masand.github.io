app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/home")
    $stateProvider
        .state("home",{
        url:"/home",
       views:{
            "main":{
                    templateUrl:"home.html"
                          
                
            },
            
            "":{
                templateUrl:"homepane.html"
                
            }
            
        }
    })
    
        .state("mobile",{
        url:"/mobile",
        views:{
            "main":{
                    templateUrl:"mobile.html",
                    controller:"mobileCtrl"        
                
            },
            
            "":{
                templateUrl:'mobilepane.html',
               controller:"mobCtrl"
                  
               
                
            }
            
        }
        
    })
        .state("tablet",{
        url:"/tablet",
        views:{
            "main":{
                        templateUrl:"tablet.html",
                        controller:"tabletCtrl"
                
            },
            
            "":{
                
               templateUrl:'tabletpane.html',
                controller:"tabCtrl"
            }
            
            
        }

    })
    .state("tablet1",{
        url:"/tablet1", 
        views:{
            "main":{
                        templateUrl:"tablet1.html"
                
            },
            
            "":{
                
                  templateUrl:"tabletR1.html"
            }
            
            
        }

     
    })
    .state("tablet2",{
        url:"/tablet2",
        views:{
            "main":{
                        templateUrl:"tablet2.html"
                
            },
            
            "":{
                
                 templateUrl:"tabletR2.html"
            }
            
            
        }
    })
    .state("tablet3",{
        url:"/tablet3",
        views:{
            "main":{
                        templateUrl:"tablet3.html"
                
            },
            
            "":{
                
                  templateUrl:"tabletR3.html"
            }
            
            
        }
    })
    
    
    
    
    
    /*    .state("mobile",{
        url:"/mobile",
        templateUrl:"mobile.html",
        controller:"mobileCtrl"
    })
        .state("tablet",{
        url:"/tablet",
        templateUrl:"tablet.html",
        controller:"tabletCtrl"
    })
    */
    
});