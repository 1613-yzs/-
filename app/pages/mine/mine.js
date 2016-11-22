angular.module('projectDemo.minePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'mine',
    url:'/mine',
    css:'app/pages/mine/mine.css',
    templateUrl:'app/pages/mine/mine.html'
  })
})
