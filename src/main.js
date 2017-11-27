window.onload = function(){
	let v = console;
	let w = document;
	
	
	let pr = w.getElementById("pr");
	let other = w.getElementById("other");	
	let dat = w.getElementById("dat");	
	let tar = w.getElementById("tar");	
	pr.onchange = function(){
		let val = this.value;
		other.style.display = "none";
		if(val=="Інше (вказати)"){
v.log("123")			
			other.style.display = "inline";
			other.focus();
		}
	}
	tar.onchange = function(){
		let val = this.value;
		p1.style.display = "none";
		p2.style.display = "none";		
		if(val=="Покращення умов сервісного обслуговування"){
			p1.style.display = "inline";
			p2.style.display = "none";
		} else{
			if(val=="Зміна регіонального партнера по сервісному обслуговуванню"){
				p1.style.display = "none";
				p2.style.display = "inline";
			} 			
		}
	}












//document.getElementsByClassName("cbalink")[0].remove() //реклама домена
}

