angular.module('projectDemo.classifyPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'classify',
    url:'/classify',
    css:'app/pages/classify/classify.css',
    templateUrl:'app/pages/classify/classify.html',
    //controller:'classifyCtrl'
  })
  .state({
    name:'classify.clAll',
    url:'/clAll',

    css:'app/pages/classify/classify.clAll/classify.clAll.css',
    
    templateUrl:'app/pages/classify/classify.clAll/classify.clAll.html',
    //需要添加index上面的css样式 、防止点击这个影响上一级css样式
    controller:function($css){
      $css.add('app/common/css/reset.css');
      $css.add('app/common/css/main.css');
      $css.add('app/pages/classify/classify.css');
    }
  })
  
  
})
