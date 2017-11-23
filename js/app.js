/* var touches = document.querySelectorAll('div.touches'); */
var operateurs =""
var total=""
function sept() 

{
	var y=document.getElementById("sept").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;

}

function huit() 

{
	var y=document.getElementById("huit").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;

}

function retour() 

{
	var text= document.getElementById('affichage').value;
	var fin= text.length-1 ;
	text= text.substring(0,fin);
	document.getElementById('affichage').value= text;
	;


}

function plus()
{

var x= document.getElementById("+").value;
var valeur = document.getElementById("affichage").value;
document.getElementById("affichage").value="";

operateurs=x
total=valeur;

console.log(total);

}

function egal()
{
	var x=document.getElementById("affichage").value;
	
	document.getElementById("affichage").value="";
	if (operateurs="+") {
		document.getElementById("affichage").value=parseInt(total)+parseInt(x);
	}

}