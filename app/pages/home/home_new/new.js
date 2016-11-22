	var swiper = new Swiper('.swiper-container', {
	        direction: 'horizontal',
	   		 loop: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    autoplay: 2000,//可选选项，自动滑动时间
		    speed:500,//滑动速度
		    grabCursor:true,
		    autoplayDisableOnInteraction:false

	    }); 
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
