app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/organize');
    $stateProvider
        .state('organize', {
            url: '/organize',
            templateUrl: 'app/views/organise.html',
            controller : 'addCategory'
        })
        .state('prioritise', {
          url: '/prioritise',
          templateUrl: 'app/views/prioritise.html'
     /*   views: {

            '': {  
                   abstract: true,  
                   templateUrl: 'empmanagement.html',
                   controller: 'EmpListCtrl'
                },
            'addeditformView@empmanagement': { 
                parent: 'empManagement',
                templateUrl: 'addeditform.html'
            }
        }*/
        
    });
});
/*app.controller('organizeCtrl', function ($scope){



});*/