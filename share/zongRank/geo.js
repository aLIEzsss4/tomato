window.onload = function() {

	function floatLogin() {
		var loginS = document.querySelector('#loginS');
		var regiS = document.querySelector('#regiS');
		var loginD = document.querySelector('#loginD');
		var regiD = document.querySelector('#regiD');
		var floatShow = document.querySelector('#floatShow')
		var flItem = document.querySelector('#flItem')
		var showBtn = document.querySelectorAll('.showBtn');
		var showL = document.querySelector('#showL')
		var showR = document.querySelector('#showR')

		var flTop = document.querySelector('.flTop')
		var flTxt = document.querySelector('.flTxt')
		var close = document.querySelector('.close')

		if(document.body.scrollTop > (floatShow.offsetTop - window.screen.height / 2)) {
			flItem.style.display = 'block';
			flItem.style.bottom = '-460px';
			window.removeEventListener('scroll', floatLogin)

		}
		showL.onclick = function() {
			flItem.style.bottom = '0';
			flTop.style.display = 'block'
			flTxt.style.display = 'none'
			loginD.style.display = 'block';
			regiD.style.display = 'none';
		}
		showR.onclick = function() {
			flItem.style.bottom = '0';
			flTop.style.display = 'block'
			flTxt.style.display = 'none'
			loginD.style.display = 'none';
			regiD.style.display = 'block';
		}
		close.onclick = function() {
			flItem.style.display = 'none';
			window.removeEventListener('scroll', floatLogin)
		}
		loginS.onclick = function() {
			loginD.style.display = 'block';
			regiD.style.display = 'none';
		}
		regiS.onclick = function() {

			loginD.style.display = 'none';
			regiD.style.display = 'block';
		}

	}
	window.addEventListener('scroll', floatLogin);

	(function timeBtn() {
		var timeShow = document.getElementById('timeGet');
		var model = document.getElementById('model');
		var colse = document.getElementById('tipClose');
		var tipTxt = document.getElementById('tipTxt');
		var timeLi = [];
		var timeOut=document.getElementById('timeOut')
//		console.log(document.getElementById('tipTxt').style.width)
		var	topValue=0
		
		var chooseDay=document.getElementById('chooseDay')
		var chooseWeek=document.getElementById('chooseWeek')
		var chooseMonth=document.getElementById('chooseMonth')
		
		
		function topChange(ww){
//			topValue=0;
			
			if(ww){
				topValue-=10
			}else{
				topValue+=10;
			}
			console.log(topValue)
			return tipTxt.style.top= topValue+'px'
		}
		
		(function timeLoad(){
			var myDate=new Date;
			add0(myDate,timeOut)
//			timeOut.innerHTML='';
		})();
		
		
		var scrollFunc = function (e) {  
	        e = e || window.event;  
	        
	        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件                 
	            if (e.wheelDelta > 0) { //当滑轮向上滚动时     
	                topChange()
	            }  
	            if (e.wheelDelta < 0) { //当滑轮向下滚动时   
	                topChange(true)
	                
	            }  
	        } else if (e.detail) {  //Firefox滑轮事件  
	            if (e.detail> 0) { //当滑轮向上滚动时  
	                topChange()
	                
	            }  
	            if (e.detail< 0) { //当滑轮向下滚动时  
	                topChange(true)
	                
	            }  
	        }  
//	        console.log(e.wheelData,e.detail,e.scr)
	    }  
	    //给页面绑定滑轮滚动事件  
	    if (document.addEventListener) {//firefox  
	        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
	    }  
	    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
	    window.onmousewheel = document.onmousewheel = scrollFunc;   
		

		
		
		//点击非弹窗区域退出
		

		function add0(sj, qqq) {
			//节点显示过滤后的时间
			//			var node=node||'';
			var year = sj.getFullYear();

			var month = (sj.getMonth() + 1) > 9 ? (sj.getMonth() + 1) : '0' + (sj.getMonth() + 1)
			var day = sj.getDate() > 9 ? sj.getDate() : '0' + sj.getDate();
			return qqq.innerHTML = year + '-' + month + '-' + day;
		}

		function addTime() {

			
			tipTxt.innerHTML=[];
			tipTxt.style.top=0;
//			topValue=0
			var myDate = new Date;
			var week = myDate.getDay();
//			fun_date(week, myDate); //  周	
//			fun_month(myDate)   //月

//			fun_day(myDate)    //日
			
			
			

		};
			chooseDay.onclick=function(){
				model.style.height = document.body.scrollHeight + 'px';
			model.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '15px';
			
			tipTxt.innerHTML=[];
			topValue=0;
			
				fun_day()
				
			};
			chooseWeek.onclick=function(){
				model.style.height = document.body.scrollHeight + 'px';
			model.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '15px';
			
			tipTxt.innerHTML=[];
			topValue=0;
				fun_date()
				
			};
			chooseMonth.onclick=function(){
				model.style.height = document.body.scrollHeight + 'px';
			model.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '15px';
			
			tipTxt.innerHTML=[];
			topValue=0;
				fun_month()
				
			};
		
		
		
		
		
		
		
		
		
		
		
		function fun_day(){
			//日榜
			var myDate = new Date;
			topValue=0;
			tipTxt.style.top=0;
			var today=new Date;
			for(var i=0;i<myDate.getDate();i++){
				timeLi[i] = document.createElement('li');
				today.setDate(myDate.getDate()-i)
				add0(today,timeLi[i]);
				tipTxt.appendChild(timeLi[i]);
			}
		
		};
		
		function fun_month(){
			//月榜
			var myDate = new Date;
			
			for(var i=myDate.getMonth();i>=0;i--){
				timeLi[i] = document.createElement('li');
				
				timeLi[i].innerHTML= (i+1)+'月';
				tipTxt.appendChild(timeLi[i]);
				console.log(timeLi[i])
			}
//			tipTxt.style.top=(-40*qq.getMonth()+70)+'px';   //当前月居中
//			tipTxt.style.top=(-40*myDate.getMonth())+'px';   //当前月在最上面
		};
		
		function fun_date() {
			//周榜
			
			var myDate = new Date;
			var week = myDate.getDay();
			for(var i = 0; i < 6; i++) {
					timeLi[i] = document.createElement('li');
					var date1 = new Date();
	
					date1.setDate(myDate.getDate() - week - 7 * i);
	
					var time1 = document.createElement('span');
					var time2 = document.createElement('span');
	
					var date2 = new Date(date1);
					date2.setDate(date1.getDate() - 6);
					add0(date1, time1)
					add0(date2, time2)
					timeLi[i].innerHTML = time2.innerHTML + ' 至 ' + time1.innerHTML

					tipTxt.appendChild(timeLi[i]);
				}
		};
		
		function hideTip(){
			
		}
		

		timeShow.onclick = function() {
			model.style.height = document.body.scrollHeight + 'px';
			model.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '15px';
			tipTxt.innerHTML=[];
			tipTxt.style.top=0;
			fun_date();
		};
		colse.onclick = function colse() {
			model.style.display = 'none';
			document.body.style.overflow = 'visible';
			document.body.style.marginRight = '0px';
		};
	})();
	
	
	
	
	(function ss(){
			
			
			
		var yearGet=document.getElementById('yearGet');
		var yearP=document.getElementById('yearPrev');
		var yearN=document.getElementById('yearNext');
		var	dayGet=document.getElementById('yearGet');
		var dayP=document.getElementById('dayPrev');
		var dayN=document.getElementById('dayNext');
		var myDate=new Date;
		
		var yearNow=myDate.getFullYear();
		var monthNow=myDate.getMonth()+1;
		
		var yearChange=new Date;
		yearGet.innerHTML=yearChange.getFullYear();
		dayGet.innerHTML=yearChange.getMonth();
		
		console.log(yearChange,yearGet.innerHTML,yearChange.getFullYear())
		
		yearP.onclick=function(){
			yearNow=yearNow-1
			yearChange.setFullYear(yearNow)
			return  yearGet.innerHTML=yearChange.getFullYear()+'年';
			
		};
		yearN.onclick=function(){
			yearNow=yearNow+1
			yearChange.setFullYear(yearNow)
			return  yearGet.innerHTML=yearChange.getFullYear()+'年';

		}
		dayP.onclick=function(){
			monthNow=monthNow-1
			yearChange.setMonth(monthNow)
			return  dayGet.innerHTML=yearChange.getMonth()+'月';
			
		};
		dayN.onclick=function(){
			monthNow=monthNow+1
			yearChange.setMonth(monthNow)
			return  dayGet.innerHTML=yearChange.getMonth()+'月';

		}
		
		
	})();
		
}