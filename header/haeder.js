window.onload=function(){
	
	var search =document.querySelector('.search  ');
		nav =document.querySelector('.native');
		sea=document.querySelector('#sea')
	   var scrollFunc = function (e) {  
        e = e || window.event;  
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件                 
            if (e.wheelDelta > 0) { //当滑轮向上滚动时     
//              alert("滑轮向上滚动");  
                search.style.top=-80+'px';
                nav.style.top=0;
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时   
                search.style.top=0+'px';
                  nav.style.top=80+'px'; 
//                sea.value='';
//                console.log(sea.value)
            }  
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向上滚动时  
                    nav.style.top=0;
                search.style.top=-80+'px';
                
            }  
            if (e.detail< 0) { //当滑轮向下滚动时  
               search.style.top= 0+'px';
                nav.style.top=80+'px';
                  search.value='';
                
            }  
        }  
//      console.log(e.wheelData,e.detail,e.scr)
    }  
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc;   
    
    $('.seaItem').autocomplete({
					hints: proposals,
					width: 450,
					height: 30,
					
				});
	$('.sySea').autocomplete({
					hints: proposals,
					width: 450,
					height: 30,
					
				});			
	
	var subM =document.querySelector('.subMune');
	var subS =document.querySelector('#subShow');
	var aNavItem=document.getElementsByClassName('.navitem');
	
	subS.onmouseover=function(){
		subM.style.display='block';
	}
	subM.onmouseover=function(){
		subM.style.display='block';
		
	}
	subM.onmouseleave=function(){
		subM.style.display='none';
	}
	subS.onmouseleave=function(){
		subM.style.display='none';
	}
	
	
}
