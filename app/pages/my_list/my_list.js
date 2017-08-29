
var oLi = document.getElementsByTagName("li");
var div = document.getElementsByClassName(".main_pro");

//点击li变色
for(var i=0;i<=oLi.length-1;i++){
	oLi[i].onclick=function(){
//console.log(oLi[0].innerHTML) ;
		refreshColor();
		this.style.backgroundColor="#e6e6e6";
		
	}
	
}
//点击对应的li 下方内容改变















//刷新颜色
function refreshColor(){
	
	for(var i=0;i<=oLi.length-1;i++){
		oLi[i].style.backgroundColor="#f9f9f9";
	}
	
}
