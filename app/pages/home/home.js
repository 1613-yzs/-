angular.module('projectDemo.homePage',[])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  //首页
  .state({
    name:'home',
    url:'/home',
    css:'app/pages/home/home.css',
    templateUrl:'app/pages/home/home.html',
    controller:'homeCtrl',
  })
  //镇店之宝
.state({
    name:'home_good',
    url:'/home_good',
    css:'app/pages/home/home_good/good.css',
    templateUrl:'app/pages/home/home_good/good.html',
    controller:function($css,$scope,$location){
    	carousel();
    	goTop()
      $css.add('app/pages/home/home_good/good.css')
					
				$scope.click = function(){
				$location.url("/home")
				}
    }
})
//空气感
.state({
    name:'home_air',
    url:'/home_air',
    css:'app/pages/home/home_air/air.css',
    templateUrl:'app/pages/home/home_air/air.html',
    controller:function($css,$scope,$location){
    	carousel();
    	goTop()
      $css.add('app/pages/home_air/air.css')
					
				$scope.click = function(){
				$location.url("/home")
				}
    }
})
//百万试用
.state({
    name:'home_try',
    url:'/home_try',
    css:'app/pages/home/home_try/try.css',
    templateUrl:'app/pages/home/home_try/try.html',
    controller:function($css,$scope,$location){
      $css.add('app/pages/home_try/try.css')
    }
})
//每日签到
.state({
    name:'home_sign',
    url:'/home_sign',
    css:'app/pages/home/home_sign/sign.css',
    templateUrl:'app/pages/home/home_sign/sign.html',
    controller:function($css,$scope,$location){
      $css.add('app/pages/home_sign/sign.css')
    }
})
//新品推荐
.state({
    name:'home_new',
    url:'/home_new',
    css:'app/pages/home/home_new/new.css',
    templateUrl:'app/pages/home/home_new/new.html',
    controller:function($css,$scope,$location){
      $css.add('app/pages/home_new/new.css');
      carousel();
      goTop()
    }
})
//品牌故事
.state({
    name:'home_story',
    url:'/home_story',
    css:'app/pages/home/home_story/story.css',
    templateUrl:'app/pages/home/home_story/story.html',
    controller:function($css,$scope,$location){
      $css.add('app/pages/home_story/story.css');
    }
})
//三颗柚
.state({
    name:'home_threeGrapefruit',
    url:'/home_threeGrapefruit',
    css:'app/pages/home/home_threeGrapefruit/threeGrapefruit.css',
    templateUrl:'app/pages/home/home_threeGrapefruit/threeGrapefruit.html',
    controller:function($css,$scope,$location){
      $css.add('app/pages/home_threeGrapefruit/threeGrapefruit.css');
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
			    
			 
