window.onload = function() {

	var countChoose = (function() {

		var day = document.getElementById('chooseDay')
		var week = document.getElementById('chooseWeek')
		var month = document.getElementById('chooseMonth')
		var count_day = document.getElementById('count_day')
		var count_week = document.getElementById('count_week')
		var count_month = document.getElementById('count_month')
		var cr_co_day=document.getElementById('Cr_co_day')
		var cr_co_week=document.getElementById('Cr_co_week')
		var cr_co_month=document.getElementById('Cr_co_month')
		

		day.onclick = function() {
			count_day.style.display = 'block'
			count_week.style.display = 'none'
			count_month.style.display = 'none'
			cr_co_day.style.display='block'
			cr_co_week.style.display='none'
			cr_co_month.style.display='none'
		}
		week.onclick = function() {
			count_day.style.display = 'none'
			count_week.style.display = 'block'
			count_month.style.display = 'none'
			cr_co_day.style.display='none'
			cr_co_week.style.display='block'
			cr_co_month.style.display='none'
		}
		month.onclick = function() {
			count_day.style.display = 'none'
			count_week.style.display = 'none'
			count_month.style.display = 'block'
			cr_co_day.style.display='none'
			cr_co_week.style.display='none'
			cr_co_month.style.display='block'
		}

	})()
	
	
	
	var geoChoose=(function(){
		var geoDay=document.getElementById('geoDay')
		var geoWeek=document.getElementById('geoWeek')
		var geoMonth=document.getElementById('geoMonth')
		var geo_day=document.getElementById('geo_day')
		var geo_week=document.getElementById('geo_week')
		var geo_month=document.getElementById('geo_month')
		var crday_ge=document.getElementById('Crad_geo_day')
		var crweek_ge=document.getElementById('Crad_geo_week')
		var crmonth_ge=document.getElementById('Crad_geo_month')
		
		geoDay.onclick=function(){
			geo_day.style.display='block'
			geo_week.style.display='none'
			geo_month.style.display='none'
			crday_ge.style.display='block'
			crweek_ge.style.display='none'
			crmonth_ge.style.display='none'
		}
		geoWeek.onclick=function(){
			geo_day.style.display='none'
			geo_week.style.display='block'
			geo_month.style.display='none'
			crday_ge.style.display='none'
			crweek_ge.style.display='block'
			crmonth_ge.style.display='none'
		}
		geoMonth.onclick=function(){
			geo_day.style.display='none'
			geo_week.style.display='none'
			geo_month.style.display='block'
			crday_ge.style.display='none'
			crweek_ge.style.display='none'
			crmonth_ge.style.display='block'
		}
		
		
	})()
	
	var industryChoose=(function(){
		var inDay=document.getElementById('industryDay')
		var inWeek=document.getElementById('industryWeek')
		var inMonth=document.getElementById('industryMonth')
		var in_day=document.getElementById('industry_day')
		var in_week=document.getElementById('industry_week')
		var in_month=document.getElementById('industry_month')
		var crday_in=document.getElementById('Table_in_day')
		var crweek_in=document.getElementById('Table_in_week')
		var crmonth_in=document.getElementById('Table_in_month')
		
		inDay.onclick=function(){
			in_day.style.display='block'
			in_week.style.display='none'
			in_month.style.display='none'
			crday_in.style.display='block'
			crweek_in.style.display='none'
			crmonth_in.style.display='none'
		}
		inWeek.onclick=function(){
			in_day.style.display='none'
			in_week.style.display='block'
			in_month.style.display='none'
			crday_in.style.display='none'
			crweek_in.style.display='block'
			crmonth_in.style.display='none'
		}
		inMonth.onclick=function(){
			in_day.style.display='none'
			in_week.style.display='none'
			in_month.style.display='block'
			crday_in.style.display='none'
			crweek_in.style.display='none'
			crmonth_in.style.display='block'
		}
		
		
	})()
	
	var platformChoose=(function(){
		var plDay=document.getElementById('platformDay')
		var plWeek=document.getElementById('platformWeek')
		var plMonth=document.getElementById('platformMonth')
		var pl_day=document.getElementById('platform_day')
		var pl_week=document.getElementById('platform_week')
		var pl_month=document.getElementById('platform_month')
		var cr_pl_day=document.getElementById('CR_pl_day')
		var cr_pl_week=document.getElementById('CR_pl_week')
		var cr_pl_month=document.getElementById('CR_pl_month')
		
		
		plDay.onclick=function(){
			pl_day.style.display='block'
			pl_week.style.display='none'
			pl_month.style.display='none'
			cr_pl_day.style.display='block'
			cr_pl_week.style.display='none'
			cr_pl_month.style.display='none'
		}
		plWeek.onclick=function(){
			pl_day.style.display='none'
			pl_week.style.display='block'
			pl_month.style.display='none'
			cr_pl_day.style.display='none'
			cr_pl_week.style.display='block'
			cr_pl_month.style.display='none'
		}
		plMonth.onclick=function(){
			pl_day.style.display='none'
			pl_week.style.display='none'
			pl_month.style.display='block'
			cr_pl_day.style.display='none'
			cr_pl_week.style.display='none'
			cr_pl_month.style.display='block'
		}
		
		
	})()
}