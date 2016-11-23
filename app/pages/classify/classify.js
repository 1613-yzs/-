angular.module('projectDemo.classifyPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'classify',
    url:'/classify',
    css:'app/pages/classify/classify.css',
    templateUrl:'app/pages/classify/classify.html',
    controller:function($scope,$http){
    	$scope.flag1 = true;
    	$scope.flag2 = true;
    	$scope.flag3 = true;
    	$scope.flag4 = true;
			$http.get('app/pages/classify/classifyAll.json').success(function(res){
					for(var i =0;i<res.lists.length;i++){
						if(res.lists[i].title=='基础护肤'){
							$scope.lists1 = res.lists[i].list;
						};
						if(res.lists[i].title=='热销护肤'){
							$scope.lists2 = res.lists[i].list;
						};
						if(res.lists[i].title=='功能护肤'){
							$scope.lists3 = res.lists[i].list;
						};
						if(res.lists[i].title=='系列护肤'){
							$scope.lists4 = res.lists[i].list;
						}
					}
					
				});
			$scope.intoba = function(){
				$scope.flag1 = !$scope.flag1;
			};
			$scope.intoht = function(){
				$scope.flag2 = !$scope.flag2;
			};
			$scope.infun = function(){
				$scope.flag3 = !$scope.flag3;
			};
			$scope.inser = function(){
				$scope.flag4 = !$scope.flag4;
			}
		}
   
  })
  .state({
    name:'classify.clAll',
    url:'/clAll',

    css:'app/pages/classify/classify.clAll/classify.clAll.css',
    
    templateUrl:'app/pages/classify/classify.clAll/classify.clAll.html',
    //需要添加index上面的css样式 、防止点击这个影响上一级css样式
    controller:function($css,$scope,$http){
      $css.add('app/common/css/reset.css');
      $css.add('app/common/css/main.css');
      $css.add('app/pages/classify/classify.css');
      $http.get('app/pages/classify/classifyAll.json').success(function(req){
      	var sss= [];
      	for(var i=0;i<req.lists.length;i++){
      		for(var j=0;j<req.lists[i].list.length;j++){
      			sss.push(req.lists[i].list[j]);
      		}
      		
      	}
      	$scope.names = sss;
      	//循环图片
      	$scope.arr = req.classifyAll;
      })
      
    }
  })

  
  
})
