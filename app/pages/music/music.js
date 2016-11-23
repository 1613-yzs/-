angular.module('projectDemo.musicPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'music',
    url:'/music',
    css:'app/pages/music/music.css',
    templateUrl:'app/pages/music/music.html',
    controller:"muCtrl",
    
  })
})
.controller('muCtrl',function($scope){
	$scope.muRun = function(){
		
	}
})
.controller('sd',function($scope){
	
})

