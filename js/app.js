var touches = document.querySelectorAll('div.touches');
var operateurs = ['+',"-","/","x"]

function sept() 

{
	var y=document.getElementById("sept").value;
		console.log(y);
	var valeur=document.getElementById("input").value;
	document.getElementById('input').value=valeur+y;

}

function huit() 

{
	var y=document.getElementById("huit").value;
		console.log(y);
	var valeur=document.getElementById("input").value;
	document.getElementById('input').value=valeur+y;

}

function retour() 

{
	var text= document.getElementById('input').value;
	var fin= text.length-1 ;
	text= text.substring(0,fin);
	document.getElementById('input').value= text;
	;


}