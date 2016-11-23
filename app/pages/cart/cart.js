angular.module('projectDemo.cartPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'cart',
    url:'/cart',
    css:'app/pages/cart/cart.css',
    templateUrl:'app/pages/cart/cart.html',
  })
})
.controller('cart-back',function($scope){
	$scope.visible = true;
	$scope.back_home = function(){
		$scope.visible = false;
		console.log(22)
	}
})
