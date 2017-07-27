window.onload = function() {

	var countChoose = (function() {

		var day = document.getElementById('chooseDay')
		var week = document.getElementById('chooseWeek')
		var month = document.getElementById('chooseMonth')
		var count_day = document.getElementById('count_day')
		var count_week = document.getElementById('count_week')
		var count_month = document.getElementById('count_month')

		day.onclick = function() {
			count_day.style.display = 'block'
			count_week.style.display = 'none'
			count_month.style.display = 'none'
		}
		week.onclick = function() {
			count_day.style.display = 'none'
			count_week.style.display = 'block'
			count_month.style.display = 'none'
		}
		month.onclick = function() {
			count_day.style.display = 'none'
			count_week.style.display = 'none'
			count_month.style.display = 'block'
		}

	})()
	
	
	
	var geoChoose=(function(){
		var geoDay=document.getElementById('geoDay')
		var geoWeek=document.getElementById('geoWeek')
		var geoMonth=document.getElementById('geoMonth')
		var geo_day=document.getElementById('geo_day')
		var geo_week=document.getElementById('geo_week')
		var geo_month=document.getElementById('geo_month')
		
		geoDay.onclick=function(){
			geo_day.style.display='block'
			geo_week.style.display='none'
			geo_month.style.display='none'
		}
		geoWeek.onclick=function(){
			geo_day.style.display='none'
			geo_week.style.display='block'
			geo_month.style.display='none'
		}
		geoMonth.onclick=function(){
			geo_day.style.display='none'
			geo_week.style.display='none'
			geo_month.style.display='block'
		}
		
		
	})()
	
	var industryChoose=(function(){
		var inDay=document.getElementById('industryDay')
		var inWeek=document.getElementById('industryWeek')
		var inMonth=document.getElementById('industryMonth')
		var in_day=document.getElementById('industry_day')
		var in_week=document.getElementById('industry_week')
		var in_month=document.getElementById('industry_month')
		
		inDay.onclick=function(){
			in_day.style.display='block'
			in_week.style.display='none'
			in_month.style.display='none'
		}
		inWeek.onclick=function(){
			in_day.style.display='none'
			in_week.style.display='block'
			in_month.style.display='none'
		}
		inMonth.onclick=function(){
			in_day.style.display='none'
			in_week.style.display='none'
			in_month.style.display='block'
		}
		
		
	})()
	
	var platformChoose=(function(){
		var plDay=document.getElementById('platformDay')
		var plWeek=document.getElementById('platformWeek')
		var plMonth=document.getElementById('platformMonth')
		var pl_day=document.getElementById('platform_day')
		var pl_week=document.getElementById('platform_week')
		var pl_month=document.getElementById('platform_month')
		
		plDay.onclick=function(){
			pl_day.style.display='block'
			pl_week.style.display='none'
			pl_month.style.display='none'
		}
		plWeek.onclick=function(){
			pl_day.style.display='none'
			pl_week.style.display='block'
			pl_month.style.display='none'
		}
		plMonth.onclick=function(){
			pl_day.style.display='none'
			pl_week.style.display='none'
			pl_month.style.display='block'
		}
		
		
	})()
}