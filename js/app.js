/* var touches = document.querySelectorAll('div.touches'); */
var operateurs =""
var total=""
/*fonctions*/
function zéro() 
{
	var y=document.getElementById("zero").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;
}

function un() 
{
	var y=document.getElementById("un").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;
}

function deux() 
{
	var y=document.getElementById("deux").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;
}

function trois() 
{
	var y=document.getElementById("trois").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;
}

function quatre() 
{
	var y=document.getElementById("quatre").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;
}

function cinq() 
{
	var y=document.getElementById("cinq").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;
}

function six() 
{
	var y=document.getElementById("six").value;
		console.log(y);
	var valeur=document.getElementById("affichage").value;
	document.getElementById('affichage').value=valeur+y;
}

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

function neuf() 
{
	var y=document.getElementById("neuf").value;
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


function moins()
{

var valeur = document.getElementById("affichage").value;
document.getElementById("affichage").value="";

operateurs='-';
total=valeur;

console.log('moins '+total);
} 


function divise(){
var x= document.getElementById("/").value;
var valeur = document.getElementById("affichage").value;
document.getElementById("affichage").value="";

operateurs=x
total=valeur;

console.log(total);
}


function multipl()
{
var x= document.getElementById("x").value;
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
	console.log(operateurs);
	/*addition */
	if (operateurs=="+") 
	{
		document.getElementById("affichage").value=parseInt(total)+parseInt(x);
	}	
	/*soustraction */
	else if (operateurs=="-") 
	{
	console.log('total'+ total);

	console.log('x:'+x);	
		document.getElementById("affichage").value=parseInt(total)-parseInt(x);
	}

	else if (operateurs=="x") 
	{document.getElementById("affichage").value=parseInt(total)*parseInt(x) ;
	}



}