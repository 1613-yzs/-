angular.module('projectDemo.homePage',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
    name:'home',
    url:'/home',
    css:'app/pages/home/home.css',
    templateUrl:'app/pages/home/home.html',
    controller:'homeCtrl',
  })
.state({
    name:'home_good',
    url:'/home_good',
    css:'app/pages/home_good/good.css',
    templateUrl:'app/pages/home_good/good.html',
    controller:function($css,$scope,$location){
    	carousel();
    	goTop()
      $css.add('app/pages/home_good/good.css')
					
				$scope.click = function(){
				$location.url("/home")
				}
    }
})

.state({
    name:'home_air',
    url:'/home_air',
    css:'app/pages/home_air/air.css',
    templateUrl:'app/pages/home_air/air.html',
    controller:function($css,$scope,$location){
    	carousel();
    	goTop()
      $css.add('app/pages/home_air/air.css')
					
				$scope.click = function(){
				$location.url("/home")
				}
    }
})

.state({
    name:'home_try',
    url:'/home_try',
    css:'app/pages/home_try/try.css',
    templateUrl:'app/pages/home_try/try.html',
    controller:function($css,$scope,$location){
//  	carousel();
//  	goTop()
      $css.add('app/pages/home_try/try.css')
					
//				$scope.click = function(){
//				$location.url("/home")
//				}
    }
})
})
.controller('homeCtrl',function($scope,$css,$http){
				carousel();
				$css.add('app/pages/home/home.css')
				//获取公告信息
				 $http.get('app/common/json/gg.json')
          .success(function(res){
            $scope.brands = res.response;
          })
})
					//轮播
				function carousel(){
				
				var swiper = new Swiper('.swiper-container', {
			        direction: 'horizontal',
			   		 loop: true,
				    // 如果需要分页器
				    pagination: '.swiper-pagination',
				    autoplay: 2000,//可选选项，自动滑动时间
				    speed:500,//滑动速度
				    grabCursor:true,
				    autoplayDisableOnInteraction:false,
			    })
		}
				//返回顶部
			function goTop(){
				    var goTop = document.querySelector(".goTop");
				    var timer;
				    window.onscroll = function(){
				    goTop.onclick = function(){
				    		 timer = setInterval(function(){
						document.body.scrollTop = document.body.scrollTop - 30 ;		
						},1)
				    	}
				    if(document.body.scrollTop==0){
							clearInterval(timer)
					}
	    }
			}
			    
			 
