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
		
		var fiexFoot=document.querySelector('#fiexFoot')
		if(document.body.scrollTop > (floatShow.offsetTop - window.screen.height / 2)) {
			flItem.style.display = 'block';
			flItem.style.bottom = '-460px';
			window.removeEventListener('scroll', floatLogin)
		console.log(document.body.scrollTop,fiexFoot.offsetTop)
		}else if(document.body.scrollTop>=1502){
			flItem.style.position='relative'
			flItem.style.bottom = '0';
			window.removeEventListener('scroll', floatLogin)
			alert(1)
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
		var toolTip =document.getElementById('toolTip')
		var timeLi = [];
		var timeOut = document.getElementById('timeOut')
		//		console.log(document.getElementById('tipTxt').style.width)
		var topValue = 0
		var calender=document.getElementById('calendar')
		var chooseDay = document.getElementById('chooseDay')
		var chooseWeek = document.getElementById('chooseWeek')
		var chooseMonth = document.getElementById('chooseMonth')

		function topChange(ww) {
			//			topValue=0;

			if(ww) {
				topValue -= 10
			} else {
				topValue += 10;
			}
//			console.log(topValue)
			return tipTxt.style.top = topValue + 'px'
		}

		(function timeLoad() {
			var myDate = new Date;
			timeShow.innerHTML=myDate.getMonth()+1+'月'
			add0(myDate, timeOut)
			//			timeOut.innerHTML='';
		})();

		var scrollFunc = function(e) {
			e = e || window.event;

			if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件                 
				if(e.wheelDelta > 0) { //当滑轮向上滚动时     
					topChange()
				}
				if(e.wheelDelta < 0) { //当滑轮向下滚动时   
					topChange(true)

				}
			} else if(e.detail) { //Firefox滑轮事件  
				if(e.detail > 0) { //当滑轮向上滚动时  
					topChange()

				}
				if(e.detail < 0) { //当滑轮向下滚动时  
					topChange(true)

				}
			}
			//	        console.log(e.wheelData,e.detail,e.scr)
		}
		//给页面绑定滑轮滚动事件  
		if(document.addEventListener) { //firefox  
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

			tipTxt.innerHTML = [];
			tipTxt.style.top = 0;
			//			topValue=0
			var myDate = new Date;
			var week = myDate.getDay();
			//			fun_date(week, myDate); //  周	
			//			fun_month(myDate)   //月

			//			fun_day(myDate)    //日

		};
		
		function initTxt(){
			
			tipTxt.innerHTML = [];
			topValue = 0;
			tipTxt.style.top = 0;
			return 
		}
		chooseDay.onclick = function() {
			model.style.height = document.body.scrollHeight + 'px';
			model.style.display = 'block';
			toolTip.style.display='none';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '15px';
			calender.style.display='block';
		};
		
		chooseWeek.onclick = function() {
			model.style.height = document.body.scrollHeight + 'px';
			model.style.display = 'block';
			toolTip.style.display='block';
			
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '15px';
			fun_date()

		};
		chooseMonth.onclick = function() {
			model.style.height = document.body.scrollHeight + 'px';
			model.style.display = 'block';
			toolTip.style.display='block';
			
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '15px';
			fun_month()
		};
		model.onclick=function(){
			model.style.display='none';
			calender.style.display='none';
			document.body.style.overflow = 'visible';
			document.body.style.marginRight = '0px';
		}
		function fun_day() {
			//日榜
			initTxt();
			var myDate = new Date;
			var today = new Date;
			for(var i = 0; i < myDate.getDate(); i++) {
				timeLi[i] = document.createElement('li');
				today.setDate(myDate.getDate() - i)
				add0(today, timeLi[i]);
				tipTxt.appendChild(timeLi[i]);
			}

		};

		function fun_month() {
			//月榜
			initTxt();
			var myDate = new Date;
			for(var i = myDate.getMonth(); i >= 0; i--) {
				timeLi[i] = document.createElement('li');

				timeLi[i].innerHTML = (i + 1) + '月';
				tipTxt.appendChild(timeLi[i]);
				console.log(timeLi[i])
			}
			//			tipTxt.style.top=(-40*qq.getMonth()+70)+'px';   //当前月居中
			//			tipTxt.style.top=(-40*myDate.getMonth())+'px';   //当前月在最上面
		};

		function fun_date() {
			//周榜
			initTxt();
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

		function hideTip() {
				model.style.display='none';
				calender.style.display='none'
		}

		timeShow.onclick = function() {
			model.style.height = document.body.scrollHeight + 'px';
			model.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = '15px';
			tipTxt.innerHTML = [];
			tipTxt.style.top = 0;
			fun_date();
		};
		colse.onclick = function colse() {
			model.style.display = 'none';
			document.body.style.overflow = 'visible';
			document.body.style.marginRight = '0px';
		};
	})();

	(function ss() {

		var yearGet = document.getElementById('yearGet');
		var yearP = document.getElementById('yearPrev');
		var yearN = document.getElementById('yearNext');
		var dayGet = document.getElementById('dayGet');
		var dayP = document.getElementById('dayPrev');
		var dayN = document.getElementById('dayNext');
		var myDate = new Date;

		var yearNow = myDate.getFullYear();
		var monthNow = myDate.getMonth() + 1;

		var yearChange = new Date;
		yearGet.innerHTML = myDate.getFullYear()+'年';
		dayGet.innerHTML = yearChange.getMonth()+1+'月';
		
		
		
		var dateObj = (function() {
			var _date = new Date(); // 默认为当前系统时间
			return {
				getDate: function() {
					return _date;
				},
				setDate: function(date) {
					_date = date;
				}
			};
		})();
		
		function renderHtml() {
			var calendar = document.getElementById("calendarBody");
			var titleBox = document.createElement("div"); // 标题盒子 设置上一月 下一月 标题
			var bodyBox = document.createElement("div"); // 表格区 显示数据


			// 设置表格区的html结构
			bodyBox.className = 'calendar-body-box';
			var _headHtml = "<tr>" +
				"<th>日</th>" +
				"<th>一</th>" +
				"<th>二</th>" +
				"<th>三</th>" +
				"<th>四</th>" +
				"<th>五</th>" +
				"<th>六</th>" +
				"</tr>";
			var _bodyHtml = "";

			// 一个月最多31天，所以一个月最多占6行表格
			for(var i = 0; i < 6; i++) {
				_bodyHtml += "<tr>" +
					"<td></td>" +
					"<td></td>" +
					"<td></td>" +
					"<td></td>" +
					"<td></td>" +
					"<td></td>" +
					"<td></td>" +
					"</tr>";
			}
			bodyBox.innerHTML = "<table id='calendarTable' class='calendar-table' border='0' cellspacing='0' cellpadding='0'>" +
				_headHtml + _bodyHtml +
				"</table>";
			// 添加到calendar div中
			calendar.appendChild(bodyBox);
		}
		
		renderHtml()
		
		function showDate(){
//			var myDate = new Date;
			
			var _year = dateObj.getDate().getFullYear();
			var _month =dateObj.getDate().getMonth()+1;
			
		
		
			var _table = document.getElementById("calendarTable");
			var _tds = _table.getElementsByTagName("td");
			var _firstDay=new Date(_year,_month-1,1);
			
			
			for(var i=0;i<_tds.length;i++){
				var _thisDay=new Date(_year,_month-1,i+1-_firstDay.getDay());
				var _thisDayStr=getDateStr(_thisDay);
				_tds[i].innerText=_thisDay.getDate();
				_tds[i].setAttribute('data',_thisDayStr);
				if(_thisDayStr == getDateStr(new Date())) { // 当前天
					_tds[i].className = 'currentDay';
				} else if(_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
					_tds[i].className = 'currentMonth'; // 当前月
				} else { // 其他月
					_tds[i].className = 'otherMonth';
				}
			}
		};
		
		showDate()
		
		function getDateStr(date) {
			var _year = date.getFullYear();
			var _month = date.getMonth() + 1; // 月从0开始计数
			var _d = date.getDate();

			_month = (_month > 9) ? ("" + _month) : ("0" + _month);
			_d = (_d > 9) ? ("" + _d) : ("0" + _d);
			return _year + _month + _d;
		}
		
		
		
		yearP.onclick = function() {
			var date = dateObj.getDate();
			dateObj.setDate(new Date(date.getFullYear()-1, date.getMonth(), 1));
			showDate();
			console.log(dateObj.getDate())
			return yearGet.innerHTML = dateObj.getDate().getFullYear() + '年';

		};
		yearN.onclick = function() {
			var date = dateObj.getDate();
			dateObj.setDate(new Date(date.getFullYear()+1, date.getMonth(), 1));
			showDate()
			return yearGet.innerHTML = dateObj.getDate().getFullYear() + '年';

		}
		dayP.onclick = function() {
			var date = dateObj.getDate();
			dateObj.setDate(new Date(date.getFullYear(), date.getMonth()-1, 1));
			showDate();
			console.log(dateObj.getDate(),getDateStr(dateObj.getDate()),dateObj.getDate())
			return dayGet.innerHTML = dateObj.getDate().getMonth()+1 + '月';



		};
		dayN.onclick = function() {
			var date = dateObj.getDate();
			dateObj.setDate(new Date(date.getFullYear(), date.getMonth()+1, 1));
			showDate();
			console.log(dateObj.getDate(),getDateStr(dateObj.getDate()))
			return dayGet.innerHTML = dateObj.getDate().getMonth()+1 + '月';

		}

	})();

	
}