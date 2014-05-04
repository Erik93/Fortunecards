
function GetValue()
{
    var myarray= new Array("Sucks heavily man","Today you are gay","This is your lucky day, of course not! This is sarcasm","Please restart, this is a failure","Your day cannot be any better after what just happened");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("show").innerHTML=random;
   	var flip = document.getElementById("new");
	document.getElementById("new").style.transition = " transform .5s linear 0s";
	document.getElementById("new").style.WebkitTransform = "rotateY(0deg)";
	document.getElementById("new2").style.WebkitTransform = "rotateY(180deg)";
	document.getElementById("restartbutton").style.visibility = "visible";
	document.getElementById("startbutton").style.visibility = "hidden";
	
}


function erik () {
	var flip = document.getElementById("new");
	document.getElementById("new").style.transition = " transform .5s linear 0s";
	document.getElementById("new").style.WebkitTransform = "rotateY(180deg)";
	document.getElementById("new2").style.WebkitTransform = "rotateY(0deg)";
	document.getElementById("restartbutton").style.visibility = "hidden";
		document.getElementById("startbutton").style.visibility = "visible";
}
