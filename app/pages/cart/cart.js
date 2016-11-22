angular.module('projectDemo.cartPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'cart',
    url:'/cart',
    css:'app/pages/cart/cart.css',
    templateUrl:'app/pages/cart/cart.html'
  })
})
