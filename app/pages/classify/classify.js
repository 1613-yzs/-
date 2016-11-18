angular.module('projectDemo.classifyPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'classify',
    url:'/classify',
    css:'app/pages/classify/classify.css',
    templateUrl:'app/pages/classify/classify.html'
  })
})
