window.onload=function(){
	var changeBtn=document.getElementById('changeInfo');
	var model=document.getElementById('model');
	var tipok=document.getElementById('tipOK');
	changeBtn.onclick=function(){
		model.style.display='block';
	}
	tipok.onclick=function(){
		model.style.display='none';
	}
	
}
