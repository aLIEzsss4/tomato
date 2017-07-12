window.onload=function(){
	
	
	function floatLogin(){
		var loginS=document.querySelector('#loginS');
		var regiS=document.querySelector('#regiS');
		var loginD=document.querySelector('#loginD');
		var regiD=document.querySelector('#regiD');
		var floatShow=document.querySelector('#floatShow')
		var flItem=document.querySelector('#flItem')
		var showBtn=document.querySelectorAll('.showBtn');
		var showL=document.querySelector('#showL')
		var showR=document.querySelector('#showR')
		
		var flTop=document.querySelector('.flTop')
		var flTxt=document.querySelector('.flTxt')
		var close=document.querySelector('.close')
		
		if(document.body.scrollTop>(floatShow.offsetTop-window.screen.height/2)){
			flItem.style.display='block';
			flItem.style.bottom='-460px';
			window.removeEventListener('scroll',floatLogin)
			
		}
		showL.onclick=function(){
			flItem.style.bottom='0';
			flTop.style.display='block'
			flTxt.style.display='none'
			loginD.style.display='block';
			regiD.style.display='none';
		}
		showR.onclick=function(){
			flItem.style.bottom='0';
			flTop.style.display='block'
			flTxt.style.display='none'
			loginD.style.display='none';
			regiD.style.display='block';
		}
		close.onclick=function(){
			flItem.style.display='none';
	window.removeEventListener('scroll',floatLogin)
		}
		loginS.onclick=function(){
			loginD.style.display='block';
			regiD.style.display='none';
		}
		regiS.onclick=function(){
			
			loginD.style.display='none';
			regiD.style.display='block';
		}
	
	}
	window.addEventListener('scroll',floatLogin)
	
	
}
